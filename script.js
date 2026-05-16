// script.js

const repos = [
  {
    name: "Discoverium",
    description: "APK package IDs, Discoverium configs, and metadata.",
    url: "https://discoverium.repo.hamo.dev",
    category: "Configs",
  },
];

const grid = document.getElementById("projects-grid");
const search = document.getElementById("search");
const repoCount = document.getElementById("repo-count");

repoCount.textContent = repos.length;

function renderProjects(items) {
  grid.innerHTML = "";

  items.forEach((repo) => {
    const card = document.createElement("a");

    card.className = "project-card";

    card.href = repo.url;

    card.target = "_blank";

    card.innerHTML = `
      <div class="project-category">
        ${repo.category}
      </div>

      <h3 class="project-title">
        ${repo.name}
      </h3>

      <p class="project-description">
        ${repo.description}
      </p>

      <div class="project-link">
        Open Repository →
      </div>
    `;

    grid.appendChild(card);
  });
}

renderProjects(repos);

search.addEventListener("input", (e) => {

  const value = e.target.value.toLowerCase();

  const filtered = repos.filter((repo) => {

    return (
      repo.name.toLowerCase().includes(value) ||
      repo.description.toLowerCase().includes(value) ||
      repo.category.toLowerCase().includes(value)
    );

  });

  renderProjects(filtered);

});