(() => {
  "use strict";
  const site = window.PORTFOLIO_SITE || {};
  const projects = (window.PORTFOLIO_PROJECTS || []).filter(p => p.published === true);
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = String(text);
    return node;
  };
  const safeURL = url => {
    if (typeof url !== "string" || !url.trim()) return null;
    const cleaned = url.trim();
    if (/^(https:\/\/|mailto:)/i.test(cleaned)) return cleaned;
    if (/^(?:[a-z]+:|\/\/)/i.test(cleaned) || cleaned.startsWith("/") || cleaned.includes("..")) return null;
    return cleaned;
  };
  const linkFor = (link, className = "") => {
    const href = safeURL(link.url);
    if (!href) return null;
    const a = el("a", className, link.label || "View file ↗");
    a.href = href;
    if (/^https:\/\//i.test(href)) {a.target = "_blank";a.rel="noopener noreferrer";}
    else if (/\.(?:xlsx|xls|pdf|docx|zip|csv)$/i.test(href)) a.download = "";
    else if (/\.(?:png|jpg|jpeg|webp)$/i.test(href)) {a.target = "_blank";a.rel = "noopener noreferrer";}
    return a;
  };
  const renderSkills = () => {
    const root = $("expertise-grid");
    (site.skills || []).forEach(skill => {
      const card = el("article", "expertise-card");
      card.append(el("span", "exp-symbol", skill.symbol),el("span", "expertise-no", skill.number),el("h3", "", skill.title),el("p", "", skill.description));
      const chips = el("div", "skill-chips");
      (skill.tags || []).forEach(tag => chips.append(el("span", "", tag)));
      card.append(chips);root.append(card);
    });
  };
  const renderExperience = () => {
    const root = $("experience-list");
    (site.experiences || []).forEach(job => {
      const card = el("article", `job${job.primary ? " primary" : ""}`);
      const heading = el("div", "job-heading");
      const inner = el("div");inner.append(el("h3", "", job.title),el("span", "job-company", job.company));
      heading.append(el("span", "job-dot"),inner);
      card.append(heading,el("span", "job-date",job.date));
      const bullets = el("ul", "job-bullets");
      (job.bullets || []).forEach(b => bullets.append(el("li", "", b)));
      card.append(bullets);root.append(card);
    });
  };
  const renderQACaseStudies = () => {
    const root = $("qa-projects-grid");
    const cases = projects.filter(p => p.category === "QA");
    $("qa-projects-count").textContent = `${cases.length} published ${cases.length === 1 ? "case study" : "case studies"}`;
    if (!cases.length) {
      const empty = el("div", "qa-empty");
      const content = el("div", "qa-empty-content");
      content.append(el("span", "overline", "INDEPENDENT WORK · COMING SOON"),el("h3", "", "Case studies will be added after testing."),el("p", "", "I'm preparing independent QA case studies using public demo applications. Once completed, each project will provide its test scenarios, executed test cases, issue logs (where applicable), evidence, and test report. No sample results are presented as actual testing."));
      const a = el("a", "qa-empty-link", "Explore professional experience ↗");a.href="#experience";content.append(a);empty.append(content);
      const deco = el("div", "qa-empty-mark");deco.setAttribute("aria-hidden", "true");deco.textContent="QA /";empty.append(deco);
      root.append(empty);return;
    }
    cases.forEach((project,i) => {
      const card=el("article", "qa-case-card");
      const topper=el("div", "qa-case-topper");
      topper.append(el("span", "qa-case-index", `CASE STUDY / ${String(i+1).padStart(2,"0")}`),el("span", "qa-case-year", project.year || ""));
      card.append(topper, el("h3", "", project.title), el("p", "qa-case-desc", project.description));
      const tags=el("div", "project-tags");(project.tags||[]).forEach(t=>tags.append(el("span", "", t)));card.append(tags);
      const details=el("dl", "qa-case-details");
      for (const [label,value] of [["Application",project.application],["Coverage",project.coverage],["Approach",project.approach],["Results",project.outcome]]) {
        if (!value) continue;
        const wrap=el("div", "qa-detail");wrap.append(el("dt", "", label),el("dd", "", value));details.append(wrap);
      }
      card.append(details);
      const docs=el("div", "qa-case-docs");
      docs.append(el("span", "qa-case-docs-label", "TESTING DELIVERABLES"));
      const links=el("div", "qa-artifacts");
      (project.artifacts||[]).forEach(item => {const a=linkFor(item,"artifact-link");if(a) links.append(a);});
      if (!links.children.length) links.append(el("p", "qa-no-artifacts", "No public artifacts linked yet."));
      docs.append(links);card.append(docs);root.append(card);
    });
  };
  const renderDevelopment = () => {
    const root=$("development-grid");
    const dev=projects.filter(p=>p.category==="Development");
    $("development-count").textContent = `${dev.length} projects`;
    dev.forEach((project,index)=>{
      const card=el("article", "project-card");
      const theme=["dark","olive","blue","sand"].includes(project.theme)?project.theme:"dark";
      const art=el("div",`project-art theme-${theme}`);
      const top=el("div","art-top");top.append(el("span","","SOFTWARE DEVELOPMENT"),el("span","",project.year));
      art.append(top,el("span","art-symbol",project.symbol||"↗"),el("span","art-big",String(index+1).padStart(2,"0")));
      const body=el("div","project-body");
      body.append(el("span","project-type","EARLIER WORK"),el("h3","",project.title),el("p","",project.description));
      const tags=el("div","project-tags");(project.tags||[]).forEach(t=>tags.append(el("span","",t)));body.append(tags);
      const links=el("div","project-links");(project.links||[]).forEach(item=>{const a=linkFor(item);if(a)links.append(a);});body.append(links);
      card.append(art,body);root.append(card);
    });
  };
  const renderPersonal = () => {
    const short=(site.shortName||"Alif Fahreza").toUpperCase();
    $("brand-name").textContent=short;$("brand-role").textContent=(site.role||"QA Engineer").toUpperCase();
    $("hero-location").textContent=(site.location||"Jakarta, Indonesia").toUpperCase();
    $("about-signature-name").textContent=short;
    $("about-location").textContent=site.location||"Jakarta, Indonesia";
    $("footer-name").textContent=short;
    if(site.qaExperienceYears)$("hero-qa-years").textContent=site.qaExperienceYears;
    if(site.heroIntro)$("hero-intro").textContent=site.heroIntro;
    if(site.aboutParagraphs?.[0])$("about-p1").textContent=site.aboutParagraphs[0];
    if(site.aboutParagraphs?.[1])$("about-p2").textContent=site.aboutParagraphs[1];
    if(site.email)$("contact-email").href=`mailto:${site.email}`;
    for (const [id,url] of [["contact-linkedin",site.linkedin],["contact-github",site.github]]) {const href=safeURL(url);if(href)$(id).href=href;}
    const resume=safeURL(site.resume);if(resume){$("cv-hero").href=resume;$("contact-cv").href=resume;}
    const year=String(new Date().getFullYear());$("footer-year").textContent=year;$("announcement-year").textContent=year;
  };
  const setupNavigation=()=>{
    const toggle=$("mobile-toggle"),links=$("nav-links");
    toggle.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");});
    links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{links.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation");}));
    document.addEventListener("keydown",e=>{if(e.key==="Escape"&&links.classList.contains("open")){links.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.focus();}});
  };
  renderPersonal();renderSkills();renderQACaseStudies();renderDevelopment();renderExperience();setupNavigation();
})();
