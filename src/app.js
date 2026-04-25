async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/SEU_USUARIO/repos");
  const repos = await response.json();

  const container = document.getElementById("repos");

  repos.forEach(repo => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || "Sem descrição"}</p>
      <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
      <hr/>
    `;

    container.appendChild(div);
  });
}

fetchRepos();
div.innerHTML = `
  <h3>${repo.name}</h3>
  <p>${repo.description || "Sem descrição"}</p>
  <p><strong>Linguagem:</strong> ${repo.language || "N/A"}</p>
  <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
  <hr/>
`;
