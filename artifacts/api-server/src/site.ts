export const botLandingPage = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f7f5ef">
    <meta name="description" content="Find songs, identify music from a short clip, and get audio in Telegram with Ezihe Music Bot.">
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='32' fill='%231c211d'/%3E%3Cpath d='M14 40V24l18 18V22l18 18V24' fill='none' stroke='%23b6f06c' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
    <meta property="og:title" content="Ezihe Music Bot — Find your next track">
    <meta property="og:description" content="Search by song or send a short clip. Your music scout is ready in Telegram.">
    <title>Ezihe Music Bot — Find your next track</title>
    <style>
      :root {
        color-scheme: light;
        --paper: #f7f5ef;
        --ink: #1c211d;
        --muted: #696e67;
        --line: #deded5;
        --green: #b6f06c;
        --deep-green: #203c2b;
        --card: #fffefa;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; color: var(--ink); background: var(--paper); }
      a { color: inherit; }
      .wrap { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
      header { height: 78px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--line); }
      .brand { display: inline-flex; align-items: center; gap: 11px; text-decoration: none; font-size: 14px; font-weight: 800; letter-spacing: -.03em; }
      .brand-mark { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: var(--ink); color: var(--green); }
      .brand-mark svg { width: 18px; height: 18px; }
      .nav { display: flex; align-items: center; gap: 28px; font-size: 13px; color: var(--muted); }
      .nav a { text-decoration: none; }
      .nav a:hover { color: var(--ink); }
      .nav-cta, .button { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 0 18px; border-radius: 999px; background: var(--ink); color: white !important; font-size: 13px; font-weight: 700; text-decoration: none; transition: transform .18s ease, background .18s ease; }
      .nav-cta:hover, .button:hover { transform: translateY(-2px); background: #344b38; }
      .hero { min-height: 570px; display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 54px; padding: 68px 0 74px; }
      .eyebrow { display: inline-flex; align-items: center; gap: 9px; color: var(--deep-green); font-size: 11px; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
      .eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: #67b84c; box-shadow: 0 0 0 4px #e5efd8; }
      h1 { max-width: 590px; margin: 22px 0 20px; font-size: clamp(48px, 6.2vw, 76px); font-weight: 650; line-height: .99; letter-spacing: -.075em; }
      h1 span { color: #5d795c; }
      .intro { max-width: 495px; margin: 0; color: var(--muted); font-size: 17px; line-height: 1.7; }
      .hero-actions { display: flex; align-items: center; gap: 17px; margin-top: 30px; }
      .text-link { display: inline-flex; align-items: center; gap: 7px; color: var(--muted); font-size: 13px; font-weight: 650; text-decoration: none; }
      .text-link:hover { color: var(--ink); }
      .fine-print { margin-top: 25px; color: #858a81; font-size: 11px; }
      .art { position: relative; min-height: 382px; display: grid; place-items: center; overflow: hidden; border: 1px solid #e4e0d5; border-radius: 28px; background: radial-gradient(ellipse at 54% 44%, #e5edcf 0, #dce5d0 28%, #e9e9da 58%, #eeece3 100%); }
      .art::before, .art::after { position: absolute; content: ""; border: 1px solid rgba(55, 74, 50, .13); border-radius: 50%; }
      .art::before { width: 345px; height: 345px; }
      .art::after { width: 425px; height: 425px; }
      .record { position: relative; z-index: 1; width: 226px; aspect-ratio: 1; display: grid; place-items: center; border-radius: 50%; background: repeating-radial-gradient(circle, #20271f 0 1px, #252d24 2px 4px, #171d18 5px 6px); box-shadow: 0 25px 60px rgba(35, 48, 34, .24); transform: rotate(-12deg); }
      .record-center { width: 83px; aspect-ratio: 1; display: grid; place-items: center; border-radius: 50%; background: var(--green); color: #263322; }
      .record-center svg { width: 34px; height: 34px; }
      .note { position: absolute; z-index: 2; padding: 12px 15px; border: 1px solid rgba(255,255,255,.8); border-radius: 14px; background: rgba(255,254,250,.88); box-shadow: 0 14px 35px rgba(43, 49, 38, .1); backdrop-filter: blur(10px); }
      .note small { display: block; margin-bottom: 4px; color: #858a81; font-size: 9px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
      .note strong { font-size: 13px; letter-spacing: -.02em; }
      .note-top { top: 47px; right: 34px; transform: rotate(4deg); }
      .note-bottom { bottom: 42px; left: 30px; transform: rotate(-4deg); }
      .wave { display: flex; height: 24px; align-items: center; gap: 3px; margin-top: 6px; }
      .wave i { width: 3px; height: var(--h); border-radius: 8px; background: #718a61; }
      .section { padding: 77px 0; border-top: 1px solid var(--line); }
      .section-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; margin-bottom: 29px; }
      .section-kicker { margin: 0 0 11px; color: #6d8061; font-size: 10px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
      h2 { margin: 0; font-size: clamp(30px, 4vw, 43px); font-weight: 620; letter-spacing: -.06em; }
      .section-heading > p { max-width: 350px; margin: 0 0 3px; color: var(--muted); font-size: 14px; line-height: 1.65; }
      .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
      .feature { min-height: 186px; padding: 25px; border: 1px solid var(--line); border-radius: 19px; background: var(--card); }
      .feature-icon { width: 36px; height: 36px; display: grid; place-items: center; margin-bottom: 22px; border-radius: 12px; background: #edf2e5; color: var(--deep-green); }
      .feature-icon svg { width: 18px; height: 18px; }
      .feature h3 { margin: 0 0 8px; font-size: 16px; letter-spacing: -.03em; }
      .feature p { max-width: 280px; margin: 0; color: var(--muted); font-size: 13px; line-height: 1.6; }
      .how { display: grid; grid-template-columns: .75fr 1.25fr; gap: 65px; align-items: start; }
      .steps { display: grid; gap: 0; }
      .step { display: grid; grid-template-columns: 42px 1fr; gap: 15px; padding: 0 0 24px; }
      .step + .step { padding-top: 22px; border-top: 1px solid var(--line); }
      .step-num { width: 32px; height: 32px; display: grid; place-items: center; border: 1px solid #d3d8cb; border-radius: 50%; color: #55724e; font-size: 12px; font-weight: 750; }
      .step h3 { margin: 1px 0 6px; font-size: 15px; }
      .step p { max-width: 440px; margin: 0; color: var(--muted); font-size: 13px; line-height: 1.65; }
      .bottom-cta { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 27px 30px; border-radius: 21px; background: var(--deep-green); color: #fff; }
      .bottom-cta h2 { font-size: 25px; letter-spacing: -.045em; }
      .bottom-cta p { margin: 7px 0 0; color: #cbd5c6; font-size: 13px; }
      .bottom-cta .button { background: var(--green); color: #1c291d !important; white-space: nowrap; }
      .bottom-cta .button:hover { background: #c7fa8d; }
      footer { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 25px 0 31px; color: #82877f; font-size: 11px; }
      .health { display: inline-flex; align-items: center; gap: 7px; }
      .health-dot { width: 7px; height: 7px; border-radius: 50%; background: #a5aaa1; }
      .health.online .health-dot { background: #63aa46; box-shadow: 0 0 0 3px #e2efd9; }
      .health.offline .health-dot { background: #cb6c59; }
      .toast-stack {
        position: fixed;
        right: 20px;
        bottom: 22px;
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: min(420px, calc(100vw - 28px));
        pointer-events: none;
      }
      .toast {
        pointer-events: auto;
        display: grid;
        grid-template-columns: 12px 1fr auto;
        gap: 12px;
        align-items: start;
        padding: 14px 15px 14px 12px;
        border: 1px solid rgba(255,255,255,0.35);
        border-radius: 16px;
        background: rgba(18, 21, 19, 0.68);
        box-shadow: 0 18px 46px rgba(21, 25, 22, 0.28);
        backdrop-filter: blur(18px);
        color: #f4f6f1;
        transform: translateY(8px);
        opacity: 0;
        animation: toastIn .28s ease forwards;
      }
      .toast[data-tone="success"] { border-color: rgba(170, 234, 120, 0.45); }
      .toast[data-tone="warning"] { border-color: rgba(255, 204, 117, 0.44); }
      .toast[data-tone="info"] { border-color: rgba(196, 210, 255, 0.42); }
      .toast::before {
        content: "";
        width: 12px;
        height: 12px;
        margin-top: 2px;
        border-radius: 50%;
        background: var(--tone, #d9f6a0);
        box-shadow: 0 0 0 5px rgba(255,255,255,0.06);
      }
      .toast[data-tone="success"] { --tone: #b9f36f; }
      .toast[data-tone="warning"] { --tone: #f7d37e; }
      .toast[data-tone="info"] { --tone: #c3d7ff; }
      .toast-body strong {
        display: block;
        margin-bottom: 4px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: -.02em;
      }
      .toast-body p {
        margin: 0;
        color: rgba(244, 246, 241, 0.82);
        font-size: 12px;
        line-height: 1.5;
      }
      .toast-close {
        border: 0;
        padding: 0;
        background: transparent;
        color: rgba(255,255,255,0.72);
        font: inherit;
        font-size: 18px;
        cursor: pointer;
      }
      @keyframes toastIn {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @media (max-width: 760px) {
        .wrap { width: min(100% - 32px, 560px); }
        header { height: 68px; }
        .nav { gap: 14px; }
        .nav > a:not(.nav-cta) { display: none; }
        .nav-cta { min-height: 39px; padding: 0 14px; font-size: 12px; }
        .hero { min-height: 0; grid-template-columns: 1fr; gap: 35px; padding: 62px 0 55px; }
        h1 { max-width: 520px; font-size: clamp(47px, 13vw, 70px); }
        .intro { font-size: 15px; }
        .art { min-height: 320px; }
        .record { width: 190px; }
        .record-center { width: 72px; }
        .note-top { top: 27px; right: 20px; }
        .note-bottom { bottom: 26px; left: 19px; }
        .section { padding: 55px 0; }
        .section-heading { display: block; }
        .section-heading > p { margin-top: 14px; }
        .feature-grid { grid-template-columns: 1fr; }
        .feature { min-height: 0; }
        .feature-icon { margin-bottom: 16px; }
        .how { grid-template-columns: 1fr; gap: 27px; }
        .bottom-cta { align-items: flex-start; flex-direction: column; padding: 24px; }
        footer { align-items: flex-start; flex-direction: column; }
      }
      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        *, *::before, *::after { transition-duration: .01ms !important; }
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <header>
        <a class="brand" href="/" aria-label="Ezihe Music Bot home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 16V8l7 8V8l7 8V8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <span>EZIHE <span style="font-weight:500;color:#73786f">MUSIC BOT</span></span>
        </a>
        <nav class="nav" aria-label="Main navigation">
          <a href="#features">What it does</a>
          <a href="#how">How it works</a>
          <a class="nav-cta" href="/app">Try it out today <span aria-hidden="true">→</span></a>
        </nav>
      </header>

      <main>
        <section class="hero" aria-labelledby="hero-title">
          <div>
            <div class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span>Your music scout in Telegram</div>
            <h1 id="hero-title">Find your next <span>favorite.</span></h1>
            <p class="intro">Send a song name, an artist, or a short clip. Ezihe finds a match and brings the sound back to your Telegram chat.</p>
            <div class="hero-actions">
              <a class="button" href="/app">Try it out today <span aria-hidden="true">→</span></a>
              <a class="text-link" href="#how">See how it works <span aria-hidden="true">↓</span></a>
            </div>
            <p class="fine-print">Search tracks · identify clips · keep a playlist</p>
          </div>
          <div class="art" aria-label="Illustration of a spinning record and audio waveform" role="img">
            <div class="record"><div class="record-center"><svg viewBox="0 0 24 24" fill="none"><path d="M5 16V8l7 8V8l7 8V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
            <div class="note note-top"><small>From a feeling to a song</small><strong>Brazilian phonk</strong><div class="wave" aria-hidden="true"><i style="--h:8px"></i><i style="--h:16px"></i><i style="--h:11px"></i><i style="--h:21px"></i><i style="--h:13px"></i><i style="--h:24px"></i><i style="--h:10px"></i><i style="--h:18px"></i><i style="--h:7px"></i><i style="--h:15px"></i><i style="--h:22px"></i><i style="--h:9px"></i><i style="--h:16px"></i><i style="--h:11px"></i></div></div>
            <div class="note note-bottom"><small>Send a clip</small><strong>We’ll try to name it.</strong></div>
          </div>
        </section>

        <section class="section" id="features" aria-labelledby="features-title">
          <div class="section-heading">
            <div><p class="section-kicker">A little music magic</p><h2 id="features-title">Your next song is one message away.</h2></div>
            <p>No complicated setup. Find a sound, choose a match, and listen right in Telegram.</p>
          </div>
          <div class="feature-grid">
            <article class="feature">
              <div class="feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4.4 4.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>
              <h3>Search by song or mood</h3><p>Type a title, artist, genre, or the kind of sound you’re after. Pick a match from the results.</p>
            </article>
            <article class="feature">
              <div class="feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 10v4m4-8v12m4-15v18m4-14v10m4-7v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>
              <h3>Recognize a short clip</h3><p>Send a clear audio or video snippet and Ezihe will try to identify the song for you.</p>
            </article>
            <article class="feature">
              <div class="feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 4.5h10a2 2 0 0 1 2 2v13l-7-4-7 4v-13a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>
              <h3>Save the ones you love</h3><p>Keep your favorite finds in your chat playlist and get lyrics links with your audio.</p>
            </article>
          </div>
        </section>

        <section class="section" id="how" aria-labelledby="how-title">
          <div class="how">
            <div><p class="section-kicker">Easy as play</p><h2 id="how-title">Three steps to your soundtrack.</h2></div>
            <div class="steps">
              <article class="step"><span class="step-num">01</span><div><h3>Open the bot</h3><p>Tap the button below to start a conversation with Ezihe on Telegram.</p></div></article>
              <article class="step"><span class="step-num">02</span><div><h3>Send a song or clip</h3><p>Search with a few words, or send a short clip if you don’t know the title.</p></div></article>
              <article class="step"><span class="step-num">03</span><div><h3>Choose a match and listen</h3><p>Pick a result to receive audio in the chat. Save tracks to revisit your favorites.</p></div></article>
            </div>
          </div>
          <div class="bottom-cta">
            <div><h2>Ready when you are.</h2><p>Open the web app and start searching for your next soundtrack.</p></div>
            <a class="button" href="/app">Try it out today <span aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© Ezihe Music Bot</span>
        <span>Audio availability depends on source access and platform restrictions.</span>
        <span class="health" id="service-health" role="status" aria-live="polite"><i class="health-dot" aria-hidden="true"></i><span>Checking service…</span></span>
      </footer>
    </div>
    <div class="toast-stack" aria-live="polite" aria-atomic="true"></div>
    <script>
      const toastStack = document.querySelector(".toast-stack");
      function showToast(title, message, tone = "info", delay = 3600) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.dataset.tone = tone;
        toast.innerHTML = [
          '<div class="toast-body">',
          '<strong>' + title + '</strong>',
          '<p>' + message + '</p>',
          '</div>',
          '<button class="toast-close" type="button" aria-label="Dismiss message">×</button>'
        ].join("");
        toastStack.appendChild(toast);

        const closeButton = toast.querySelector(".toast-close");
        closeButton.addEventListener("click", () => {
          toast.remove();
        });

        window.setTimeout(() => {
          toast.remove();
        }, delay);
      }

      const health = document.getElementById("service-health");
      fetch("/api/healthz", { headers: { accept: "application/json" } })
        .then((response) => {
          if (!response.ok) throw new Error("health check failed");
          return response.json();
        })
        .then((result) => {
          const label = health.querySelector("span:last-child");
          if (result.status === "ok") {
            health.classList.add("online");
            label.textContent = "Website service online";
          } else {
            health.classList.add("offline");
            label.textContent = "Service status unavailable";
          }
        })
        .catch(() => {
          health.classList.add("offline");
          health.querySelector("span:last-child").textContent = "Service status unavailable";
        });

      document.querySelectorAll(".button, .nav-cta").forEach((button) => {
        button.addEventListener("click", (event) => {
          if ((button.getAttribute("href") || "").startsWith("/app")) return;
          event.preventDefault();
          const title = "Opening Telegram";
          const message = "Your music bot is ready — we’re sending you to the chat.";
          showToast(title, message, "success", 2600);
          window.open(button.getAttribute("href") || "#", "_blank", "noopener,noreferrer");
        });
      });

      window.setTimeout(() => {
        showToast("Welcome back", "Your vibe is ready. Search a song or send a clip.", "info", 3600);
      }, 500);
    </script>
  </body>
</html>`;

export const appPage = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    <title>Ezihe Music App</title>
    <style>
      :root {
        --bg: #f1f2eb;
        --bg-2: #e6e9df;
        --panel: #ffffff;
        --panel-strong: #19211b;
        --glass: rgba(24, 34, 27, 0.05);
        --stroke: #dfe3d8;
        --pink: #ff765e;
        --purple: #b8ed55;
        --lavender: #657263;
        --text: #1b241d;
        --muted: #687267;
        --shadow: 0 22px 60px rgba(37, 49, 39, 0.12);
      }
      * { box-sizing: border-box; }
      html, body { margin: 0; min-height: 100%; font-family: "Avenir Next", Avenir, "Segoe UI", sans-serif; background: #f7f8f4; color: var(--text); }
      body { min-height: 100vh; padding-bottom: 24px; }
      body.has-track { padding-bottom: 124px; }
      a { color: inherit; text-decoration: none; }
      button, input { font: inherit; }
      .app-shell { width: min(1500px, 100%); margin: 0 auto; }
      .app-window { display: grid; grid-template-columns: 216px minmax(0, 1fr); min-height: 100vh; background: var(--panel); overflow: hidden; }
      .sidebar { background: #f7f8f4; border-right: 1px solid var(--stroke); padding: 28px 16px; }
      .brand { display: flex; align-items: center; gap: 12px; font-weight: 800; letter-spacing: 0.13em; text-transform: uppercase; font-size: 12px; color: var(--text); }
      .brand-mark { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 12px; background: var(--panel-strong); color: var(--purple); }
      .nav-list { display: grid; gap: 6px; margin-top: 38px; }
      .nav-btn { display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 12px; border: 1px solid transparent; border-radius: 8px; background: transparent; color: var(--muted); cursor: pointer; font-weight: 650; text-align: left; transition: background .18s ease, color .18s ease; }
      .nav-btn:hover { background: #eef1e8; color: var(--text); }
      .nav-btn.active { background: #eaf5d9; color: var(--text); }
      .nav-icon { width: 26px; height: 26px; display: grid; place-items: center; font-size: 15px; border-radius: 8px; background: rgba(24, 34, 27, 0.06); }
      .sidebar-card { margin-top: 28px; padding: 15px 13px; border: 1px solid var(--stroke); background: #fff; border-radius: 12px; }
      .sidebar-card h3 { margin: 0 0 10px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
      .mini-track { display: flex; align-items: center; gap: 12px; padding: 8px 0; }
      .mini-art { width: 40px; height: 40px; border-radius: 9px; background: linear-gradient(135deg, var(--pink), var(--purple)); }
      .mini-track strong { display: block; font-size: 13px; }
      .mini-track span { color: var(--muted); font-size: 11px; }
      .main { padding: 34px clamp(22px, 5vw, 72px); min-width: 0; }
      .topbar { display: flex; justify-content: space-between; align-items: center; gap: 18px; margin-bottom: 30px; }
      .topbar p { margin: 0; color: var(--muted); }
      .topbar h1 { margin: 6px 0 0; font-size: 34px; font-weight: 750; letter-spacing: 0; }
      .header-actions { display: flex; align-items: center; gap: 12px; }
      .primary-btn, .secondary-btn { display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--stroke); border-radius: 9px; background: #fff; color: var(--text); cursor: pointer; }
      .primary-btn { padding: 12px 18px; font-weight: 750; background: var(--panel-strong); color: #fff; border: none; }
      .secondary-btn { padding: 11px 15px; }
      .search-row { display: grid; grid-template-columns: minmax(220px, 1fr) auto auto; gap: 10px; max-width: 900px; margin-bottom: 28px; }
      .search-box { display: flex; align-items: center; gap: 10px; background: #f7f8f4; border: 1px solid var(--stroke); border-radius: 9px; padding: 0 14px; }
      .search-box input { width: 100%; height: 48px; border: 0; outline: none; background: transparent; color: var(--text); font-size: 15px; }
      .search-box input::placeholder { color: #8a9387; }
      .content-grid { display: block; max-width: 1000px; }
      .panel { background: transparent; border: 0; border-radius: 0; padding: 0; }
      .panel-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; padding-bottom: 12px; border-bottom: 1px solid var(--stroke); }
      .panel-head h2, .panel-head h3 { margin: 0; }
      .results-list { display: grid; gap: 0; }
      .track-card { display: grid; grid-template-columns: 48px minmax(0, 1fr) auto; gap: 14px; align-items: center; min-height: 68px; padding: 9px 6px; border-bottom: 1px solid #edf0e9; background: transparent; }
      .track-art { width: 48px; height: 48px; border-radius: 6px; background: linear-gradient(135deg, #dbe8cd, #ffb19b); background-position: center; background-size: cover; }
      .track-art img { display: block; width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }
      .track-meta { min-width: 0; }
      .track-meta strong, .track-meta span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .track-meta strong { font-size: 14px; font-weight: 650; margin-bottom: 4px; }
      .track-meta span { color: var(--muted); font-size: 12px; }
      .track-actions { display: flex; flex-direction: row; gap: 6px; }
      .tiny-btn { min-width: 58px; border: 1px solid var(--stroke); background: #fff; color: var(--text); border-radius: 7px; padding: 7px 9px; cursor: pointer; font-size: 12px; font-weight: 650; }
      .tiny-btn:hover, .secondary-btn:hover { background: #f1f4ec; }
      .player-box { width: 100%; height: 100%; aspect-ratio: 16 / 9; overflow: hidden; background: #111; }
      .player-box iframe, .player-embed iframe { display: block; width: 100%; height: 100%; border: 0; }
      .player-dock { display: none; }
      body.has-track .player-dock { position: fixed; z-index: 20; right: 0; bottom: 0; left: 0; display: grid; grid-template-columns: minmax(150px, 1fr) minmax(240px, 1.4fr) 160px; align-items: center; gap: 26px; min-height: 104px; padding: 10px max(22px, calc((100vw - 1200px) / 2)); border-top: 1px solid var(--stroke); background: rgba(255,255,255,.97); box-shadow: 0 -8px 28px rgba(37,49,39,.08); }
      .dock-track { display: flex; align-items: center; gap: 11px; min-width: 0; }
      .dock-track-copy { min-width: 0; }
      .dock-track-copy strong, .dock-track-copy span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .dock-track-copy strong { font-size: 13px; }
      .dock-track-copy span { margin-top: 3px; color: var(--muted); font-size: 11px; }
      .dock-controls { display: grid; gap: 2px; min-width: 0; }
      .transport { display: grid; gap: 6px; }
      .transport-buttons { display: flex; align-items: center; justify-content: center; gap: 8px; }
      .transport-btn { display: grid; place-items: center; width: 32px; height: 32px; border: 1px solid var(--stroke); border-radius: 50%; background: #fff; color: var(--text); cursor: pointer; font-weight: 750; font-size: 11px; }
      .transport-btn:hover { background: #edf4e3; }
      .transport-btn.main-control { width: 38px; height: 38px; border: 0; background: var(--purple); font-size: 16px; }
      .transport-btn:disabled, .seek-bar:disabled { opacity: .45; cursor: not-allowed; }
      .timeline { display: grid; grid-template-columns: 32px minmax(0, 1fr) 32px; align-items: center; gap: 7px; color: var(--muted); font-size: 10px; font-variant-numeric: tabular-nums; }
      .seek-bar { width: 100%; accent-color: #3e5732; cursor: pointer; }
      .player-embed { width: 160px; aspect-ratio: 16 / 9; overflow: hidden; background: #111; border-radius: 5px; }
      .playlist-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
      .playlist-list li { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 58px; padding: 8px 6px; border-bottom: 1px solid #edf0e9; color: var(--muted); }
      .playlist-list span { font-size: 12px; }
      .source-link { color: var(--text); font-size: 13px; font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
      .app-status { min-height: 20px; margin: -12px 0 16px; color: var(--muted); font-size: 13px; }
      .genre-list { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
      .genre-chip { border: 1px solid var(--stroke); background: #fff; color: var(--text); border-radius: 999px; padding: 9px 13px; cursor: pointer; }
      .genre-chip:hover { background: #eaf5d9; }
      .nav-section { display: none; }
      .nav-section.active { display: block; }
      .library-track { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      body[data-view="homeView"] { --page-accent: #789467; --page-tint: rgba(224, 238, 215, .72); }
      body[data-view="discoverView"] { --page-accent: #bd694c; --page-tint: rgba(255, 228, 213, .78); }
      body[data-view="libraryView"] { --page-accent: #477d87; --page-tint: rgba(216, 238, 239, .78); }
      body[data-view="playerView"] { --page-accent: #805d91; --page-tint: rgba(233, 222, 243, .82); }
      body, .app-window { background: radial-gradient(ellipse at 82% 0%, var(--page-tint, rgba(224,238,215,.72)), transparent 42%), #f7f8f6; transition: background .3s ease; }
      .sidebar { background: rgba(255,255,255,.52); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
      .nav-btn.active { color: var(--page-accent); background: rgba(255,255,255,.62); border-color: rgba(255,255,255,.8); box-shadow: 0 5px 16px rgba(37,49,39,.06); }
      .brand-mark, .search-box, .panel, .track-card, .genre-chip, .secondary-btn, .tiny-btn { background: rgba(255,255,255,.54); border-color: rgba(255,255,255,.76); box-shadow: 0 10px 28px rgba(41,54,43,.06); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
      .nav-btn, .primary-btn, .secondary-btn, .tiny-btn, .transport-btn { transition: transform .18s ease, background .18s ease, box-shadow .18s ease; }
      .nav-btn:hover, .primary-btn:hover, .secondary-btn:hover, .tiny-btn:hover, .transport-btn:hover { transform: translateY(-1px); }
      .primary-btn { background: var(--page-accent, #789467); box-shadow: 0 9px 22px color-mix(in srgb, var(--page-accent, #789467) 26%, transparent); }
      .search-box { border-radius: 14px; }
      .track-card { border-radius: 12px; margin: 3px 0; padding-right: 10px; }
      .track-card:hover { background: rgba(255,255,255,.76); }
      .nav-section.active { animation: view-enter .25s ease both; }
      @keyframes view-enter { from { opacity: .35; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      .now-playing-view { display: grid; grid-template-columns: minmax(240px, 420px) minmax(0, 1fr); align-items: center; gap: clamp(24px, 5vw, 64px); min-height: min(58vh, 560px); padding: clamp(20px, 5vw, 58px); border: 1px solid rgba(255,255,255,.8); border-radius: 24px; background: rgba(255,255,255,.4); box-shadow: 0 24px 70px rgba(40,47,45,.1); backdrop-filter: blur(26px); -webkit-backdrop-filter: blur(26px); }
      .now-playing-art { width: 100%; aspect-ratio: 1; overflow: hidden; border-radius: 18px; background: linear-gradient(145deg, #dce9cf, #f1c3ad 55%, #c7b5d8); box-shadow: 0 22px 54px rgba(38,45,38,.18); }
      .now-playing-art img { display: block; width: 100%; height: 100%; object-fit: cover; }
      .now-playing-copy { min-width: 0; }
      .now-playing-copy .eyebrow { color: var(--page-accent); font-size: 12px; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }
      .now-playing-copy h2 { margin: 12px 0 5px; font-size: clamp(24px, 3vw, 40px); line-height: 1.12; overflow-wrap: anywhere; }
      .now-playing-copy p { margin: 0; color: var(--muted); }
      .now-playing-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
      .watch-btn { padding: 12px 18px; border: 1px solid rgba(255,255,255,.8); border-radius: 11px; background: rgba(255,255,255,.58); color: var(--text); cursor: pointer; font-weight: 700; backdrop-filter: blur(16px); }
      .player-view-controls { max-width: 560px; margin-top: 28px; }
      .video-dialog { width: min(920px, calc(100vw - 28px)); padding: 0; border: 1px solid rgba(255,255,255,.65); border-radius: 18px; background: rgba(24,27,26,.88); color: white; box-shadow: 0 28px 90px rgba(0,0,0,.4); backdrop-filter: blur(24px); }
      .video-dialog::backdrop { background: rgba(14,18,16,.68); backdrop-filter: blur(8px); }
      .video-dialog-head { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 14px 18px; }
      .video-dialog-head strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .video-dialog-close { flex: 0 0 auto; border: 1px solid rgba(255,255,255,.2); border-radius: 9px; background: rgba(255,255,255,.1); color: white; padding: 8px 12px; cursor: pointer; }
      .video-frame { width: 100%; aspect-ratio: 16 / 9; background: #080909; }
      .video-frame iframe { display: block; width: 100%; height: 100%; border: 0; }
      .library-import { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; margin: 12px 0 22px; padding: 16px; border: 1px solid rgba(255,255,255,.78); border-radius: 14px; background: rgba(255,255,255,.48); backdrop-filter: blur(18px); }
      .library-import p { margin: 4px 0 0; color: var(--muted); font-size: 13px; }
      .library-track { flex: 1; }
      .network-state { color: var(--muted); font-size: 12px; }
      .network-state[data-online="false"] { color: #a64c38; }
      .dock-art { flex: 0 0 52px; width: 52px; height: 52px; overflow: hidden; border-radius: 8px; background: linear-gradient(135deg,#dbe8cd,#ffb19b); }
      .dock-art img { display: block; width: 100%; height: 100%; object-fit: cover; }
      .dock-play { width: 40px; height: 40px; border: 0; border-radius: 50%; background: var(--page-accent, #789467); color: white; font-size: 16px; cursor: pointer; }
      @media (max-width: 980px) { .app-window { grid-template-columns: 176px minmax(0, 1fr); } .sidebar { padding: 22px 12px; } .main { padding: 28px 24px; } .player-dock { grid-template-columns: minmax(120px, 1fr) minmax(200px, 1.5fr) 120px; gap: 14px; padding-right: 16px; padding-left: 16px; } .player-embed { width: 120px; } }
      @media (max-width: 640px) { body.has-track { padding-bottom: 148px; } .app-window { display: block; } .sidebar { padding: 12px 14px; border-right: 0; border-bottom: 1px solid var(--stroke); } .brand { display: none; } .nav-list { display: flex; gap: 4px; margin: 0; } .nav-btn { justify-content: center; padding: 9px 6px; font-size: 12px; } .nav-icon { display: none; } .main { padding: 22px 16px; } .topbar { align-items: flex-start; margin-bottom: 18px; } .topbar h1 { font-size: 27px; } .header-actions a { display: none; } .search-row { grid-template-columns: 1fr auto; gap: 8px; margin-bottom: 20px; } .search-box { grid-column: 1 / -1; } .search-row .secondary-btn { grid-column: 1 / -1; } .track-card { grid-template-columns: 42px minmax(0,1fr) auto; gap: 9px; min-height: 60px; } .track-art { width: 42px; height: 42px; } .track-actions { gap: 4px; } .tiny-btn { min-width: 0; padding: 7px; } .player-dock { grid-template-columns: minmax(0,1fr) 94px; gap: 8px 12px; min-height: 140px; padding: 10px 12px; } .dock-track { grid-column: 1; } .dock-controls { grid-column: 1; grid-row: 2; } .transport-buttons { justify-content: flex-start; } .player-embed { grid-column: 2; grid-row: 1 / span 2; width: 94px; align-self: center; } .dock-track .mini-art { width: 34px; height: 34px; flex: 0 0 34px; } .source-link { display: none; } }
      @media (max-width: 760px) { .now-playing-view { grid-template-columns: minmax(0, 1fr); gap: 24px; min-height: 0; padding: 18px; border-radius: 18px; } .now-playing-art { width: min(100%, 340px); justify-self: center; } .player-view-controls { margin-top: 20px; } .player-dock { grid-template-columns: minmax(0, 1fr) auto; gap: 12px; } .dock-controls, .player-embed { display: none; } }
    </style>
  </head>
  <body data-view="homeView">
    <div class="app-shell">
      <div class="app-window">
        <aside class="sidebar">
          <div class="brand"><span class="brand-mark">♫</span> Ezihe</div>
          <div class="nav-list">
            <button class="nav-btn active" data-view-target="homeView" type="button" aria-current="page"><span class="nav-icon">⌂</span> Home</button>
            <button class="nav-btn" data-view-target="discoverView" type="button"><span class="nav-icon">▣</span> Discover</button>
            <button class="nav-btn" data-view-target="libraryView" type="button"><span class="nav-icon">♫</span> Library</button>
          </div>
        </aside>
        <main class="main">
          <header class="topbar">
            <div>
              <p>EZihe music</p>
              <h1 id="viewTitle">Listen to something good.</h1>
            </div>
            <div class="header-actions">
              <a class="secondary-btn" href="/">Back to site</a>
              <button class="primary-btn" id="playMixBtn" type="button">Play mix</button>
            </div>
          </header>
          <div class="search-row">
            <label class="search-box" aria-label="Search music">
              <span>⌕</span>
              <input id="queryInput" type="text" placeholder="Search a song, artist, mood, or genre" />
            </label>
            <button class="primary-btn" id="searchBtn" type="button">Search</button>
            <button class="secondary-btn" id="recognizeBtn" type="button">Recognize clip</button>
            <input id="clipInput" type="file" accept="audio/*,video/*" hidden />
          </div>
          <p class="app-status" id="appStatus" role="status" aria-live="polite"></p>
          <section class="content-grid">
            <div>
              <section class="nav-section active" id="homeView">
                <div class="panel">
                  <div class="panel-head"><h2>Search results</h2><span id="resultCount">0 tracks</span></div>
                  <div id="resultsList" class="results-list"></div>
                </div>
              </section>
              <section class="nav-section" id="discoverView">
                <div class="panel">
                  <div class="panel-head"><h2>Explore a sound</h2><span>Choose a starting point</span></div>
                  <div class="genre-list">
                    <button class="genre-chip" data-query="afrobeats" type="button">Afrobeats</button>
                    <button class="genre-chip" data-query="new music" type="button">New music</button>
                    <button class="genre-chip" data-query="soul classics" type="button">Soul</button>
                    <button class="genre-chip" data-query="indie pop" type="button">Indie pop</button>
                    <button class="genre-chip" data-query="jazz essentials" type="button">Jazz</button>
                    <button class="genre-chip" data-query="lofi beats" type="button">Lo-fi</button>
                  </div>
                  <p style="margin:0;color:var(--muted);">Pick a collection to search, then play or save a result.</p>
                </div>
              </section>
              <section class="nav-section" id="libraryView">
                <div class="panel">
                  <div class="panel-head"><h2>Your library</h2><span>Saved on this device</span></div>
                  <ul id="playlistList" class="playlist-list"><li><span>Nothing saved yet</span></li></ul>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
      <footer class="player-dock" id="playerDock">
        <div class="dock-track">
          <div class="mini-art" aria-hidden="true"></div>
          <div class="dock-track-copy">
            <strong id="miniTitle">Nothing playing</strong>
            <span id="miniArtist">Choose a song</span>
            <a class="source-link" id="sourceLink" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Open on YouTube</a>
          </div>
        </div>
        <div class="dock-controls">
          <div class="transport" aria-label="Playback controls">
            <div class="transport-buttons">
              <button class="transport-btn" id="previousBtn" type="button" aria-label="Previous track" title="Previous track" disabled>◀|</button>
              <button class="transport-btn" id="rewindBtn" type="button" aria-label="Back 10 seconds" title="Back 10 seconds" disabled>−10</button>
              <button class="transport-btn main-control" id="togglePlaybackBtn" type="button" aria-label="Play" title="Play" disabled>▶</button>
              <button class="transport-btn" id="forwardBtn" type="button" aria-label="Forward 10 seconds" title="Forward 10 seconds" disabled>+10</button>
              <button class="transport-btn" id="nextBtn" type="button" aria-label="Next track" title="Next track" disabled>|▶</button>
            </div>
            <div class="timeline">
              <span id="currentTime">0:00</span>
              <input class="seek-bar" id="seekBar" type="range" min="0" max="1000" value="0" aria-label="Seek in track" disabled>
              <span id="durationTime">0:00</span>
            </div>
          </div>
        </div>
        <div class="player-embed"><div id="playerFrame" title="YouTube music player"></div></div>
        <h3 id="playingTitle" hidden>Nothing playing</h3>
        <p id="playingArtist" hidden></p>
      </footer>
    </div>
    <script async src="https://www.youtube.com/iframe_api"></script>
    <script>
      const state = { current: null, playlist: JSON.parse(localStorage.getItem('ezihe-playlist') || '[]'), tracks: [], queue: [], queueIndex: -1 };
      const queryInput = document.getElementById('queryInput');
      const resultsList = document.getElementById('resultsList');
      const resultCount = document.getElementById('resultCount');
      const playlistList = document.getElementById('playlistList');
      const playerFrame = document.getElementById('playerFrame');
      const playingTitle = document.getElementById('playingTitle');
      const playingArtist = document.getElementById('playingArtist');
      const miniTitle = document.getElementById('miniTitle');
      const miniArtist = document.getElementById('miniArtist');
      const clipInput = document.getElementById('clipInput');
      const sourceLink = document.getElementById('sourceLink');
      const appStatus = document.getElementById('appStatus');
      const togglePlaybackBtn = document.getElementById('togglePlaybackBtn');
      const seekBar = document.getElementById('seekBar');
      const currentTimeLabel = document.getElementById('currentTime');
      const durationTimeLabel = document.getElementById('durationTime');
      let youtubePlayer = null;
      let playerReady = false;
      let youtubeApiReady = false;
      let searchTimer = null;
      let searchController = null;
      let searchRequest = 0;
      function escapeHtml(value) {
        return String(value ?? '').replace(/[&<>"']/g, (character) => ({
          '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[character]);
      }
      function setStatus(message) { appStatus.textContent = message; }
      function updateTransport() {
        const enabled = playerReady && Boolean(state.current);
        document.querySelectorAll('.transport-btn').forEach((button) => { button.disabled = !enabled; });
        seekBar.disabled = !enabled;
        if (!enabled) return;
        const isPlaying = youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING;
        togglePlaybackBtn.textContent = isPlaying ? 'Ⅱ' : '▶';
        togglePlaybackBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
        togglePlaybackBtn.title = isPlaying ? 'Pause' : 'Play';
      }
      function formatTime(seconds) {
        if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
        return Math.floor(seconds / 60) + ':' + String(Math.floor(seconds % 60)).padStart(2, '0');
      }
      function updateTimeline() {
        if (!playerReady || !state.current) return;
        const duration = youtubePlayer.getDuration() || 0;
        const currentTime = youtubePlayer.getCurrentTime() || 0;
        currentTimeLabel.textContent = formatTime(currentTime);
        durationTimeLabel.textContent = formatTime(duration);
        seekBar.value = duration ? String(Math.round(currentTime / duration * 1000)) : '0';
      }
      function playRelative(direction) {
        if (!state.queue.length) return;
        const nextIndex = (state.queueIndex + direction + state.queue.length) % state.queue.length;
        playTrack(state.queue[nextIndex], state.queue);
      }
      function initializePlayer(track) {
        if (!youtubeApiReady || youtubePlayer || !track) return;
        youtubePlayer = new YT.Player('playerFrame', {
          width: '100%',
          height: '100%',
          videoId: track.id,
          playerVars: { autoplay: 1, controls: 1, playsinline: 1, rel: 0, origin: location.origin },
          events: {
            onReady: function () {
              playerReady = true;
              updateTransport();
              setStatus('Loading playback from YouTube.');
            },
            onStateChange: function (event) {
              updateTransport();
              if (event.data === YT.PlayerState.ENDED) playRelative(1);
              if (event.data === YT.PlayerState.PLAYING) setStatus('Now playing from YouTube.');
            },
            onError: function (event) {
              const messages = {
                2: 'YouTube rejected this video ID. Try another result.',
                5: 'YouTube could not play this video in the browser. Try opening it on YouTube.',
                100: 'This video was removed or made private. Try another result.',
                101: 'This video owner does not allow embedded playback. Try another result or open it on YouTube.',
                150: 'This video owner does not allow embedded playback. Try another result or open it on YouTube.',
                153: 'YouTube could not verify the player request. Open this song on YouTube or try again.'
              };
              setStatus(messages[event.data] || 'YouTube playback failed (error ' + event.data + '). Try another result.');
              updateTransport();
            }
          }
        });
      }
      window.onYouTubeIframeAPIReady = function () {
        youtubeApiReady = true;
        if (state.current) initializePlayer(state.current);
      };
      if (window.YT && window.YT.Player) window.onYouTubeIframeAPIReady();
      window.setInterval(updateTimeline, 500);
      function showView(viewId) {
        const viewTitles = { homeView: 'Listen to something good.', discoverView: 'Find your next favorite.', libraryView: 'Your saved music.' };
        document.getElementById('viewTitle').textContent = viewTitles[viewId] || viewTitles.homeView;
        document.querySelectorAll('.nav-section').forEach((section) => {
          section.classList.toggle('active', section.id === viewId);
        });
        document.querySelectorAll('.nav-btn').forEach((button) => {
          const active = button.dataset.viewTarget === viewId;
          button.classList.toggle('active', active);
          if (active) button.setAttribute('aria-current', 'page');
          else button.removeAttribute('aria-current');
        });
      }
      function renderPlaylist() {
        if (!state.playlist.length) {
          playlistList.innerHTML = '<li><span>Nothing saved yet</span></li>';
          return;
        }
        playlistList.innerHTML = state.playlist.map((track) => [
          '<li>',
          '<span class="library-track">' + escapeHtml(track.title) + ' · ' + escapeHtml(track.channel) + '</span>',
          '<button class="tiny-btn" data-play="' + escapeHtml(track.id) + '" type="button">Play</button>',
          '</li>'
        ].join('')).join('');
        playlistList.querySelectorAll('button[data-play]').forEach((button) => {
          button.addEventListener('click', () => {
            const match = state.playlist.find((item) => item.id === button.dataset.play);
            if (match) playTrack(match, state.playlist);
          });
        });
      }
      function persistPlaylist() { localStorage.setItem('ezihe-playlist', JSON.stringify(state.playlist)); }
      function playTrack(track, queue = state.tracks) {
        if (!/^[\w-]{11}$/.test(track.id)) {
          setStatus('This match has no playable YouTube video. Search the title to find a playable source.');
          return;
        }
        state.current = track;
        document.body.classList.add('has-track');
        state.queue = queue.length ? queue : [track];
        state.queueIndex = Math.max(0, state.queue.findIndex((item) => item.id === track.id));
        sourceLink.href = track.url || 'https://www.youtube.com/watch?v=' + encodeURIComponent(track.id);
        playingTitle.textContent = track.title;
        playingArtist.textContent = track.channel || 'YouTube';
        miniTitle.textContent = track.title;
        miniArtist.textContent = track.channel || 'YouTube';
        currentTimeLabel.textContent = '0:00';
        durationTimeLabel.textContent = formatTime(track.durationSeconds || 0);
        if (playerReady) {
          youtubePlayer.loadVideoById(track.id);
          updateTransport();
          setStatus('Loading playback from YouTube.');
        } else if (youtubeApiReady) {
          initializePlayer(track);
        } else {
          setStatus('YouTube player is loading. Your song will start when it is ready.');
          updateTransport();
        }
      }
      function renderResults(tracks) {
        state.tracks = tracks;
        resultCount.textContent = tracks.length + ' track' + (tracks.length === 1 ? '' : 's');
        if (!tracks.length) {
          resultsList.innerHTML = '<div class="track-card"><div class="track-art"></div><div class="track-meta"><strong>No results</strong><span>Try a different search.</span></div></div>';
          return;
        }
        resultsList.innerHTML = tracks.map((track) => {
          const duration = track.durationSeconds
            ? Math.floor(track.durationSeconds / 60) + ':' + String(track.durationSeconds % 60).padStart(2, '0')
            : 'Audio';
          return [
            '<div class="track-card">',
            '<div class="track-art"><img src="' + escapeHtml(track.thumbnail || ('https://i.ytimg.com/vi/' + encodeURIComponent(track.id) + '/hqdefault.jpg')) + '" alt="" loading="lazy"></div>',
            '<div class="track-meta">',
            '<strong>' + escapeHtml(track.title) + '</strong>',
            '<span>' + escapeHtml(track.channel) + ' · ' + duration + ' </span>',
            '</div>',
            '<div class="track-actions">',
            '<button class="tiny-btn" data-play="' + escapeHtml(track.id) + '" type="button">Play</button>',
            '<button class="tiny-btn" data-save="' + escapeHtml(track.id) + '" type="button">Save</button>',
            '</div>',
            '</div>'
          ].join('');
        }).join('');
        resultsList.querySelectorAll('[data-play]').forEach((button) => {
          button.addEventListener('click', () => {
            const match = state.tracks.find((item) => item.id === button.dataset.play);
            if (match) playTrack(match, state.tracks);
          });
        });
        resultsList.querySelectorAll('[data-save]').forEach((button) => {
          button.addEventListener('click', () => {
            const match = state.tracks.find((item) => item.id === button.dataset.save);
            if (!match) return;
            const already = state.playlist.some((item) => item.id === match.id);
            if (!already) {
              state.playlist.push(match);
              persistPlaylist();
              renderPlaylist();
              setStatus('Saved to your library.');
            } else {
              setStatus('That track is already in your library.');
            }
          });
        });
      }
      async function searchTracks() {
        const query = queryInput.value.trim();
        if (query.length < 2) {
          setStatus('Enter at least two characters to search.');
          return;
        }
        if (searchController) searchController.abort();
        const controller = new AbortController();
        searchController = controller;
        const requestId = ++searchRequest;
        setStatus('Searching…');
        try {
          const response = await fetch('/api/music/search?q=' + encodeURIComponent(query), { signal: controller.signal });
          const payload = await response.json();
          if (requestId !== searchRequest) return;
          if (!response.ok || !payload.tracks) throw new Error(payload.error || 'Search failed');
          renderResults(payload.tracks);
          setStatus(payload.tracks.length ? 'Select a track to start playback.' : 'No matches. Try another search.');
        } catch (error) {
          if (error.name === 'AbortError' || requestId !== searchRequest) return;
          resultsList.innerHTML = '<div class="track-card"><div class="track-art"></div><div class="track-meta"><strong>Search failed</strong><span>Please try another query.</span></div></div>';
          setStatus(error.message || 'Search is temporarily unavailable.');
        } finally {
          if (requestId === searchRequest) searchController = null;
        }
      }
      document.querySelectorAll('.nav-btn').forEach((button) => {
        button.addEventListener('click', () => showView(button.dataset.viewTarget));
      });
      document.querySelectorAll('.genre-chip').forEach((button) => {
        button.addEventListener('click', () => {
          queryInput.value = button.dataset.query;
          showView('homeView');
          searchTracks();
        });
      });
      document.getElementById('playMixBtn').addEventListener('click', () => {
        const firstTrack = state.playlist[0] || state.tracks[0];
        if (firstTrack) playTrack(firstTrack, state.playlist.length ? state.playlist : state.tracks);
        else setStatus('Search for music or save a track before starting a mix.');
      });
      togglePlaybackBtn.addEventListener('click', () => {
        if (!playerReady || !state.current) return;
        if (youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING) youtubePlayer.pauseVideo();
        else youtubePlayer.playVideo();
      });
      document.getElementById('previousBtn').addEventListener('click', () => playRelative(-1));
      document.getElementById('nextBtn').addEventListener('click', () => playRelative(1));
      document.getElementById('rewindBtn').addEventListener('click', () => {
        if (playerReady) youtubePlayer.seekTo(Math.max(0, youtubePlayer.getCurrentTime() - 10), true);
      });
      document.getElementById('forwardBtn').addEventListener('click', () => {
        if (playerReady) youtubePlayer.seekTo(Math.min(youtubePlayer.getDuration(), youtubePlayer.getCurrentTime() + 10), true);
      });
      seekBar.addEventListener('change', () => {
        if (!playerReady) return;
        const duration = youtubePlayer.getDuration();
        youtubePlayer.seekTo(duration * Number(seekBar.value) / 1000, true);
      });
      function scheduleSearch() {
        window.clearTimeout(searchTimer);
        if (searchController) {
          searchController.abort();
          searchController = null;
          searchRequest += 1;
        }
        const query = queryInput.value.trim();
        if (query.length < 2) {
          resultsList.innerHTML = '';
          resultCount.textContent = '0 tracks';
          setStatus('Enter at least two characters to search.');
          return;
        }
        showView('homeView');
        searchTimer = window.setTimeout(searchTracks, 400);
      }
      document.getElementById('searchBtn').addEventListener('click', () => {
        window.clearTimeout(searchTimer);
        searchTracks();
      });
      queryInput.addEventListener('input', scheduleSearch);
      queryInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          window.clearTimeout(searchTimer);
          searchTracks();
        }
      });
      document.getElementById('recognizeBtn').addEventListener('click', () => clipInput.click());
      clipInput.addEventListener('change', async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (file.size > 20 * 1024 * 1024) {
          alert('Please choose a shorter clip under 20 MB.');
          return;
        }
        try {
          const response = await fetch('/api/music/recognize', { method: 'POST', body: file, headers: { 'Content-Type': file.type || 'application/octet-stream' } });
          const payload = await response.json();
          if (!response.ok) throw new Error(payload.error || 'Recognition failed');
          const result = payload.result;
          if (!result) throw new Error('No match found');
          setStatus('Recognized “' + result.title + '”. Finding a playable source…');
          queryInput.value = result.artist + ' ' + result.title;
          showView('homeView');
          await searchTracks();
        } catch (error) {
          setStatus(error.message || 'Could not identify that clip.');
        } finally {
          clipInput.value = '';
        }
      });
      renderPlaylist();
      queryInput.value = 'afrobeats';
      searchTracks();
    </script>
  </body>
</html>`;