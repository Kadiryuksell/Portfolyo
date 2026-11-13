const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const VISIBLE_POINTS = 4;

const ICONS = {
  nlp: '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg>',
  car: '<svg viewBox="0 0 24 24"><path d="M5 17H3v-5l2-5h14l2 5v5h-2"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/><path d="M3 12h18"/></svg>',
  ext: '<svg viewBox="0 0 24 24" style="width:15px;height:15px"><path d="M7 17 17 7M8 7h9v9"/></svg>'
};

const get = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
const tags = (list, cls = "") => `<div class="tags">${list.map((t) => `<span class="tag ${cls}">${esc(t)}</span>`).join("")}</div>`;

function render(lang) {
  const t = I18N[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = get(t, el.dataset.i18n);
    if (typeof v === "string") el.textContent = v;
  });

  $("#competencies").innerHTML = t.about.competencies.map((c) => `<li>${esc(c)}</li>`).join("");

  $("#timeline").innerHTML = t.exp.jobs
    .map((j) => {
      const pts = j.points
        .map((p, i) => `<li class="${i >= VISIBLE_POINTS ? "hidden extra" : ""}">${esc(p)}</li>`)
        .join("");
      const more = j.points.length > VISIBLE_POINTS ? `<button class="more" data-open="0">${t.exp.more} ↓</button>` : "";
      return `<article class="job reveal">
        <div class="job-meta">
          <div class="date mono">${esc(j.date)}</div>
          <div class="company">${esc(j.company)}</div>
          <div class="loc">${esc(j.loc)}</div>
        </div>
        <div class="job-body">
          <div class="title">${esc(j.title)}</div>
          <ul>${pts}</ul>${more}
          ${tags(j.tags, "neutral")}
        </div>
      </article>`;
    })
    .join("");

  $("#projectList").innerHTML = t.projects.list
    .map(
      (p) => `<article class="project reveal">
        <div class="project-top">
          <div class="project-icon">${ICONS[p.icon]}</div>
          <a class="project-link mono" href="${p.url}" target="_blank" rel="noopener">GitHub ${ICONS.ext}</a>
        </div>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <p class="value"><b>${esc(t.projects.valueLabel)}</b> ${esc(p.value)}</p>
        ${tags(p.tags)}
      </article>`
    )
    .join("");

  $("#skillList").innerHTML = t.skills.groups
    .map((g) => `<div class="skill-group reveal"><h3>${esc(g.name)}</h3>${tags(g.items)}</div>`)
    .join("");

  $("#eduList").innerHTML = t.edu.list
    .map(
      (e) => `<div class="edu">
        <div>
          <div class="degree">${esc(e.degree)}</div>
          <div class="school">${esc(e.school)}</div>
          ${e.note ? `<div class="note">${esc(e.note)}</div>` : ""}
          ${
            e.project
              ? `<div class="edu-project">
                  <div class="label mono">${esc(e.project.label)}: ${
                    e.project.url
                      ? `<a href="${esc(e.project.url)}" target="_blank" rel="noopener">${esc(e.project.name)}</a>`
                      : `<strong>${esc(e.project.name)}</strong>`
                  }</div>
                  <ul>${e.project.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
                </div>`
              : ""
          }
        </div>
        <div class="side">
          <div class="date mono">${esc(e.date)}</div>
          <span class="tag gpa">GPA ${esc(e.gpa)}</span>
        </div>
      </div>`
    )
    .join("");

  $("#certList").innerHTML = t.edu.certList
    .map((c) => `<li><span>${esc(c.name)}<small>${esc(c.by)}</small></span><span class="yr mono">${esc(c.yr)}</span></li>`)
    .join("");

  $("#langList").innerHTML = t.edu.langList
    .map((l) => `<div class="lang-row">${esc(l.name)} <span class="lvl">${esc(l.lvl)}</span><div class="bar"><i style="width:${l.pct}%"></i></div></div>`)
    .join("");

  observeReveal();
}

// "Devamını gör" butonları
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".more");
  if (!btn) return;
  const t = I18N[document.documentElement.lang];
  const open = btn.dataset.open === "1";
  btn.parentElement.querySelectorAll("li.extra").forEach((li) => li.classList.toggle("hidden", open));
  btn.dataset.open = open ? "0" : "1";
  btn.textContent = open ? `${t.exp.more} ↓` : `${t.exp.less} ↑`;
});

// Görünür olunca beliren animasyon
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        io.unobserve(en.target);
      }
    }),
  { threshold: 0.12 }
);
function observeReveal() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el));
}

// Dil
$("#langToggle").addEventListener("click", () => {
  const next = document.documentElement.lang === "tr" ? "en" : "tr";
  try { localStorage.setItem("lang", next); } catch (e) {}
  render(next);
});

// Tema
$("#themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Mobil menü
$("#menuToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach((a) => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));

// Kaydırınca navbar çizgisi + aktif bölüm
const sections = [...document.querySelectorAll("main section[id]")];
window.addEventListener(
  "scroll",
  () => {
    $(".nav").classList.toggle("scrolled", scrollY > 10);
    let cur = "";
    sections.forEach((s) => { if (scrollY >= s.offsetTop - 120) cur = s.id; });
    document.querySelectorAll("#navLinks a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  },
  { passive: true }
);

$("#year").textContent = new Date().getFullYear();
render(I18N[document.documentElement.lang] ? document.documentElement.lang : "tr");
