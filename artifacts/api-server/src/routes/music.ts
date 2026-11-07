import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import express, { Router, type IRouter } from "express";
import { recognizeAudioFile } from "../lib/recognition";
import { searchYoutube } from "../lib/youtube";

const musicRouter: IRouter = Router();

musicRouter.get("/music/search", async (req, res) => {
  const query = typeof req.query["q"] === "string" ? req.query["q"].trim().slice(0, 120) : "";
  if (query.length < 2) {
    res.status(400).json({ error: "Enter at least two characters to search." });
    return;
  }

  try {
    const tracks = await searchYoutube(query, 10);
    res.json({ tracks });
  } catch {
    res.status(502).json({ error: "Music search is temporarily unavailable." });
  }
});

musicRouter.post(
  "/music/recognize",
  express.raw({ type: ["audio/*", "video/*", "application/octet-stream"], limit: "20mb" }),
  async (req, res) => {
    if (!Buffer.isBuffer(req.body) || req.body.length === 0) {
      res.status(400).json({ error: "Choose an audio or video clip to recognize." });
      return;
    }
    if (!process.env["AUDD_API_TOKEN"]) {
      res.status(503).json({ error: "Clip recognition is not configured on this server." });
      return;
    }

    const directory = await mkdtemp(join(tmpdir(), "music-app-recognition-"));
    const inputPath = join(directory, "clip-upload");
    try {
      await writeFile(inputPath, req.body);
      const result = await recognizeAudioFile(inputPath);
      if (!result) {
        res.status(404).json({ error: "No matching song was found in that clip." });
        return;
      }
      res.json({ result });
    } catch {
      res.status(502).json({ error: "Clip recognition is temporarily unavailable." });
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  },
);

export default musicRouter;