(function () {
  var list = document.querySelector("[data-projects]");
  if (list && window.projects) {
    var count = list.getAttribute("data-projects");
    var items = count === "all" ? projects : projects.slice(0, Number(count) || 3);
    items.forEach(function (project) {
      var article = document.createElement("article");
      article.className = "project";

      var shot = document.createElement("a");
      shot.className = "shot";
      shot.href = project.live;
      var image = document.createElement("img");
      image.src = project.image;
      image.alt = project.alt;
      shot.appendChild(image);

      var body = document.createElement("div");
      body.className = "project-body";

      var stack = document.createElement("p");
      stack.className = "kicker";
      stack.textContent = project.stack;

      var title = document.createElement("h3");
      title.textContent = project.name;

      var summary = document.createElement("p");
      summary.textContent = project.summary;

      var detail = document.createElement("p");
      detail.textContent = project.detail;

      var links = document.createElement("div");
      links.className = "links";

      var live = document.createElement("a");
      live.className = "button";
      live.href = project.live;
      live.textContent = "Open the app";

      var source = document.createElement("a");
      source.href = project.source;
      source.textContent = "Source";

      links.appendChild(live);
      links.appendChild(source);
      body.appendChild(stack);
      body.appendChild(title);
      body.appendChild(summary);
      body.appendChild(detail);
      body.appendChild(links);
      article.appendChild(shot);
      article.appendChild(body);
      list.appendChild(article);
    });
  }

  var themeToggle = document.querySelector(".theme-toggle");
  if (!themeToggle) return;

  function syncThemeToggle() {
    var dark = document.documentElement.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", dark ? "true" : "false");
    themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  syncThemeToggle();
  themeToggle.addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
    syncThemeToggle();
  });
})();
