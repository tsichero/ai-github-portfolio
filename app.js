<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>AI Systems Portfolio | Tatá</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #050505;
      color: white;
    }

    header {
      text-align: center;
      padding: 100px 20px 60px;
    }

    h1 {
      font-size: 44px;
      font-weight: 700;
      letter-spacing: -1px;
    }

    .subtitle {
      color: #9ca3af;
      margin-top: 12px;
      font-size: 16px;
    }

    .container {
      max-width: 900px;
      margin: auto;
      padding: 20px;
    }

    .section-title {
      font-size: 22px;
      margin-top: 40px;
      border-left: 3px solid #38bdf8;
      padding-left: 10px;
    }

    .card {
      border: 1px solid #1f1f1f;
      padding: 20px;
      margin: 15px 0;
      border-radius: 14px;
      background: #0b0b0b;
      transition: 0.3s;
    }

    .card:hover {
      transform: scale(1.02);
      border-color: #38bdf8;
    }

    .tag {
      color: #38bdf8;
      font-size: 12px;
      margin-top: 10px;
      display: inline-block;
    }

    input {
      width: 100%;
      padding: 14px;
      margin-top: 20px;
      background: #111;
      border: 1px solid #2a2a2a;
      color: white;
      border-radius: 10px;
    }

    button {
      margin-top: 10px;
      padding: 12px 16px;
      background: #38bdf8;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      font-weight: bold;
      color: black;
    }

    button:hover {
      opacity: 0.9;
    }

    #resposta {
      margin-top: 15px;
      color: #9ca3af;
    }
  </style>
</head>

<body>

<header>
  <h1>AI Systems that turn data into decisions.</h1>
  <p class="subtitle">
    Veterinária • Inteligência Artificial • Data Science • AI Consulting
  </p>
</header>

<div class="container">

  <div class="section-title">⚡ AI Systems</div>
  <div id="projects"></div>

  <div class="section-title">🤖 Ask Tatá AI</div>

  <input id="chatInput" placeholder="Pergunte sobre projetos, IA ou carreira..." />
  <button onclick="responderIA()">Run AI</button>

  <p id="resposta"></p>

</div>

<script src="dados/projetos.js"></script>
<script src="app.js"></script>

</body>
</html>
