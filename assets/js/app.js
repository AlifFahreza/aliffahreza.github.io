(() => {
  "use strict";
  const site = window.PORTFOLIO_SITE || {};
  const projects = (window.PORTFOLIO_PROJECTS || []).filter(project => project.published === true);
  const $ = id => document.getElementById(id);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = String(text);
    return node;
  };
  const safeURL = url => {
    if (typeof url !== "string" || !url.trim()) return null;
    const cleaned = url.trim();
    if (/^(https:\/\/|mailto:)/i.test(cleaned)) return cleaned;
    if (/^(?:[a-z]+:|\/\/)/i.test(cleaned) || cleaned.startsWith("/") || cleaned.includes("..")) return null;
    return cleaned; // relative static asset paths only
  };
  const renderSkills = () => {
    const root = $("expertise-grid");
    if (!root) return;
    (site.skills || []).forEach(skill => {
      const card = el("article", "expertise-card");
      card.append(el("span", "exp-symbol", skill.symbol), el("span", "expertise-no", skill.number), el("h3", "", skill.title), el("p", "", skill.description));
      const chips = el("div", "skill-chips");
      (skill.tags || []).forEach(tag => chips.append(el("span", "", tag)));
      card.append(chips); root.append(card);
    });
  };
  const renderExperience = () => {
    const root = $("experience-list");
    if (!root) return;
    (site.experiences || []).forEach(job => {
      const card = el("article", `job${job.primary ? " primary" : ""}`);
      const heading = el("div", "job-heading");
      const inner = el("div"); inner.append(el("h3", "", job.title), el("span", "job-company", job.company));
      heading.append(el("span", "job-dot"), inner);
      card.append(heading, el("span", "job-date", job.date));
      const bullets = el("ul", "job-bullets");
      (job.bullets || []).forEach(bullet => bullets.append(el("li", "", bullet)));
      card.append(bullets); root.append(card);
    });
  };
  function renderProjects(category = "All") {
    const root = $("projects-grid");
    if (!root) return;
    root.replaceChildren();
    const filtered = projects.filter(project => category === "All" || project.category === category);
    $("projects-count").textContent = `${filtered.length} ${filtered.length === 1 ? "item" : "items"}`;
    if (!filtered.length) {
      const empty = el("div", "project-empty");
      empty.append(el("strong", "", "Case studies in progress"), el("p", "", "This collection doesn't have a published case study yet. New independent QA projects will be added here after their testing and documentation are complete."));
      root.append(empty); return;
    }
    filtered.forEach((project, index) => {
      const card = el("article", "project-card");
      const art = el("div", `project-art theme-${["dark", "olive", "blue", "sand"].includes(project.theme) ? project.theme : "dark"}`);
      const top = el("div", "art-top");
      top.append(el("span", "", project.category.toUpperCase()), el("span", "", project.year));
      art.append(top, el("span", "art-symbol", project.symbol || "↗"), el("span", "art-big", String(index+1).padStart(2,"0")));
      const body = el("div", "project-body");
      body.append(el("span", "project-type", project.category.toUpperCase()), el("h3", "", project.title), el("p", "", project.description));
      const tags = el("div", "project-tags");
      (project.tags || []).forEach(tag => tags.append(el("span", "", tag)));
      body.append(tags);
      const links = el("div", "project-links");
      (project.links || []).forEach(link => {
        const href = safeURL(link.url);
        if (!href) return;
        const a = el("a", "", link.label || "View artifact ↗");
        a.href = href;
        if (/^https:\/\//i.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
        else if (/\.(?:xlsx|xls|pdf|docx|zip)$/i.test(href)) a.download = "";
        links.append(a);
      });
      body.append(links);card.append(art, body);root.append(card);
    });
  }
  const renderPersonal = () => {
    const short = (site.shortName || "Alif Fahreza").toUpperCase();
    const role = (site.role || "QA Engineer").toUpperCase();
    $("brand-name").textContent = short;
    $("brand-role").textContent = role;
    $("hero-location").textContent = (site.location || "Jakarta, Indonesia").toUpperCase();
    $("about-signature-name").textContent = short;
    $("about-location").textContent = site.location || "Jakarta, Indonesia";
    $("footer-name").textContent = short;
    if (site.qaExperienceYears) $("hero-qa-years").textContent = site.qaExperienceYears;
    if (site.heroIntro) $("hero-intro").textContent = site.heroIntro;
    if (site.aboutParagraphs?.[0]) $("about-p1").textContent = site.aboutParagraphs[0];
    if (site.aboutParagraphs?.[1]) $("about-p2").textContent = site.aboutParagraphs[1];
    if (site.email) { $("contact-email").href = `mailto:${site.email}`; }
    for (const [id, url] of [["contact-linkedin",site.linkedin],["contact-github",site.github]]) {
      const href = safeURL(url);if (href) $(id).href = href;
    }
    if (safeURL(site.resume)) {$("cv-hero").href = site.resume;$("contact-cv").href = site.resume;}
    const year = String(new Date().getFullYear());$("footer-year").textContent=year;$("announcement-year").textContent=year;
  };
  const setupNavigation = () => {
    const toggle = $("mobile-toggle"); const links = $("nav-links");
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { links.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation"); }));
    document.addEventListener("keydown", event => {if (event.key === "Escape" && links.classList.contains("open")) {links.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.focus();}});
  };
  const setupFilters = () => {
    $("project-filters").querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        $("project-filters").querySelectorAll("button").forEach(btn => {btn.classList.remove("active");btn.setAttribute("aria-pressed","false");});
        button.classList.add("active");button.setAttribute("aria-pressed","true");
        renderProjects(button.dataset.filter);
      });
    });
  };
  renderPersonal();renderSkills();renderExperience();renderProjects();setupFilters();setupNavigation();
})();
