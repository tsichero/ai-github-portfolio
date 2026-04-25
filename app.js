async function fetchRepos() {
  try {
    const response = await fetch("https://api.github.com/users/tsichero/repos");
    const repos = await response.json();

    const container = document.getElementById("repos");
    container.innerHTML = "";

    function getScore(repo) {
      return (repo.stargazers_count * 2) + repo.forks_count;
    }

    // 🔥 Ordena por score (maior → menor)
    repos.sort((a, b) => getScore(b) - getScore(a));

    repos.forEach((repo, index) => {
      const div = document.createElement("div");

      // 🏆 destaque TOP 3
      if (index < 3) {
        div.classList.add("card", "top");
      } else {
        div.classList.add("card");
      }

      div.innerHTML = `
        <h3>
          ${index < 3 ? "🏆 " : ""}${repo.name}
        </h3>

        <p class="desc">
          ${repo.description || "Sem descrição disponível"}
        </p>

        <div class="meta">
          <span class="badge">💻 ${repo.language || "N/A"}</span>
          <span class="badge">⭐ ${getScore(repo)}</span>
        </div>

        <a href="${repo.html_url}" target="_blank">Ver projeto →</a>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    document.getElementById("repos").innerHTML = "Erro ao carregar 😢";
  }
}

fetchRepos();
