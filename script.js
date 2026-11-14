/* ====== DATA: ubah bagian ini saja, tampilan ikut berubah ====== */
const profile = {
  role: "Data Mining & Pengembang Web/Aplikasi",
  tagline: "Lulusan baru S1 Teknologi Informasi (IPK 3,85) yang tertarik pada data mining serta pengembangan website dan aplikasi. Berpengalaman dengan Java, PHP, Laravel, Flutter, dan Python.",
  photo: "asset/foto.png", /* isi dengan nama file foto, misalnya "foto.webp" */
  email: "evanyudipratama12@gmail.com.com",
  links: [
    { label: "GitHub", href: "https://github.com/JhonDoi12" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/evan-yudi-pratama/" },
    { label: "WhatsApp", href: "https://wa.me/6285163176684" },
    { label: "Instagram", href: "https://instagram.com/evanyudipratama" }
  ]
};
const servicesData = [
  { title: "Data mining & clustering", desc: "Mengolah data dengan kerangka KDD: preprocessing (RegEx, Unix Timestamp, normalisasi Min-Max), clustering K-Prototype dengan Python, dan evaluasi hasil." },
  { title: "Pengembangan web", desc: "Membangun website dengan HTML, CSS, PHP, dan Laravel yang rapi dan mudah dibaca." },
  { title: "Aplikasi mobile", desc: "Merancang UI lalu mengembangkan aplikasi mobile dengan Flutter (Dart)." },
  { title: "Analisis sistem & jaringan", desc: "Analisis kebutuhan dan perancangan program, serta konfigurasi dasar jaringan MikroTik (IP address, routing, DHCP, firewall)." }
];
const educationData = [
  { school: "Universitas Bina Sarana Informatika, Depok", major: "S1 Teknologi Informasi · IPK 3,85/4,00", period: "Sep 2022 – Aug 2026",
    desc: "Tertarik pada pengembangan web, aplikasi mobile, dan data mining." },
  { school: "Sertifikasi Kompetensi Analis Program", major: "Sertifikasi", period: "2025",
    desc: "Tersertifikasi dalam analisis kebutuhan dan perancangan program." },
  { school: "IT Bootcamp Software Development", major: "Sertifikat", period: "2025",
    desc: "Pelatihan Software Development." }
];
const skillsData = [
  { group: "Bahasa pemrograman", items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "HTML/CSS", "Java", "Dart"] },
  { group: "Framework & library", items: ["React", "Next.js", "Node.js", "Laravel", "Tailwind CSS", "Pandas", "scikit-learn", "Flutter"] },
  { group: "Tools & software", items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker", "Jupyter Notebook", "Supabase", "Laragon", "PostgreSql"] },
  { group: "Data & AI", items: ["Data mining", "Klasterisasi", "Klasifikasi", "Visualisasi data", "Machine learning"] },
  { group: "Soft skills", items: ["Adaptasi", "Kolaborasi", "Manajemen waktu","Disiplin", "Komunikasi yang baik"] }
];
/* Status: [label badge, warna titik] */
const STATUS = {
  "Completed": ["Completed / Live", "#1fa36b"],
  "In Development": ["In Development", "#e0a100"],
  "Local Environment": ["Local / Source Code", "#3b82f6"]
};
/* Tambah proyek: salin satu blok { ... }. Link bernilai null otomatis tidak tampil.
   Proyek tanpa demo sebaiknya punya cover_image (screenshot/GIF) atau video_demo_url. */
const projectsData = [
  { id: "proj-01", title: "Aplikasi Manajemen Keuangan Pribadi", status: "In Development", color: "linear-gradient(135deg,#1c3b2f,#2f8f5f)",
    description: "Dasbor untuk mencatat pemasukan, pengeluaran, dan anggaran, bisa dipakai di laptop maupun HP.",
    tech_stack: ["React", "Tailwind", "Supabase"], github_url: null, demo_url: null, prototype_url: null, video_demo_url: null, cover_image: null },
  { id: "proj-02", title: "Klasterisasi Data dengan K-Means", status: "Local Environment", color: "linear-gradient(135deg,#0f2a44,#2a6fb4)",
    description: "Mengelompokkan data menjadi segmen yang bermakna, lengkap dengan evaluasi kualitas klaster.",
    tech_stack: ["Python", "Pandas", "scikit-learn"], github_url: null, demo_url: null, prototype_url: null, video_demo_url: null, cover_image: null },
  { id: "proj-03", title: "Audit Tata Kelola TI", status: "Completed", color: "linear-gradient(135deg,#4a2410,#c0642a)",
    description: "Penilaian tingkat kapabilitas proses TI dan rekomendasi perbaikan berdasarkan kerangka kerja tata kelola.",
    tech_stack: ["COBIT", "Analisis data"], github_url: null, demo_url: null, prototype_url: null, video_demo_url: null, cover_image: null },
];
/* ================================================================ */

const $ = s => document.querySelector(s);
const el = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x !== undefined) e.textContent = x; return e; };
const link = (l, cls) => { const a = el("a", cls, l.label); a.href = l.href; if (!l.href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; } return a; };

// Hero
$("#role").textContent = profile.role; $("#tagline").textContent = profile.tagline;
const ph = $("#photo");
if (profile.photo) { const i = el("img"); i.src = profile.photo; i.alt = "Foto Mas Tampans"; ph.append(i); }
else { ph.innerHTML = '<svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="72" r="42" fill="currentColor"/><path d="M10 200c0-52 40-84 90-84s90 32 90 84z" fill="currentColor"/></svg>'; }
profile.links.forEach(l => { const li = el("li"); li.append(link(l, "pill")); $("#socials").append(li); $("#socials2").append(link(l, "pill")); });
$("#mailBtn").href = "mailto:" + profile.email;
const gh = profile.links.find(l => l.label === "GitHub"); if (gh) $("#allWork").href = gh.href; else $("#allWork").remove();

// Layanan (accordion)
servicesData.forEach((s, idx) => {
  const w = el("div", "svc" + (idx === 0 ? " open" : ""));
  const b = el("button", "svc-btn"); b.type = "button"; b.setAttribute("aria-expanded", String(idx === 0));
  const ic = el("span", "ic", idx === 0 ? "✕" : "↗"); ic.setAttribute("aria-hidden", "true");
  b.append(el("span", "", s.title), ic);
  const d = el("p", "svc-desc", s.desc);
  b.onclick = () => {
    const open = !w.classList.contains("open");
    document.querySelectorAll(".svc").forEach(x => { x.classList.remove("open"); x.querySelector(".svc-btn").setAttribute("aria-expanded", "false"); x.querySelector(".ic").textContent = "↗"; });
    if (open) { w.classList.add("open"); b.setAttribute("aria-expanded", "true"); ic.textContent = "✕"; }
  };
  w.append(b, d); $("#svcList").append(w);
});

// Pendidikan
educationData.forEach(d => {
  const r = el("div", "row"), l = el("div");
  l.append(el("h3", "", d.school), el("div", "sub", d.major));
  r.append(l, el("div", "when", d.period), el("p", "", d.desc)); $("#eduList").append(r);
});

// Skill
skillsData.forEach(g => {
  const w = el("div"); w.append(el("h3", "", g.group));
  const c = el("div", "chips"); g.items.forEach(i => c.append(el("span", "chip", i))); w.append(c); $("#skillList").append(w);
});

// Proyek terpilih
let active = "Semua";
function renderProjects() {
  const grid = $("#projectGrid"); grid.textContent = "";
  const list = projectsData.filter(p => active === "Semua" || p.status === active);
  if (!list.length) { grid.append(el("p", "empty", "Belum ada proyek di status ini.")); return; }
  list.forEach(p => {
    const card = el("article", "card"), cv = el("div", "cover");
    cv.style.background = p.color || "#333";
    if (p.cover_image) { const i = el("img"); i.src = p.cover_image; i.alt = "Tangkapan layar " + p.title; i.loading = "lazy"; cv.append(i); }
    else cv.append(el("span", "", p.title));
    if (p.status) {
      const st = STATUS[p.status] || [p.status, "#888"], bd = el("span", "badge", st[0]); bd.style.setProperty("--d", st[1]); cv.append(bd);
    }
    card.append(cv, el("h3", "", p.title), el("p", "", p.description));
    const chips = el("div", "chips"); p.tech_stack.forEach(s => chips.append(el("span", "chip", s))); card.append(chips);
    const links = el("div", "links");
    [["demo_url", "Live demo"], ["video_demo_url", "Video demo"], ["prototype_url", "Prototipe"], ["github_url", "Kode sumber"]].forEach(([k, label]) => { if (p[k]) links.append(link({ label, href: p[k] })); });
    if (links.children.length) card.append(links);
    grid.append(card);
  });
}
function renderFilters() {
  const box = $("#filters"); box.textContent = "";
  ["Semua", ...new Set(projectsData.map(p => p.status).filter(Boolean))].forEach(cat => {
    const b = el("button", "", cat === "Semua" ? cat : (STATUS[cat] ? STATUS[cat][0] : cat)); b.type = "button"; b.setAttribute("aria-pressed", String(cat === active));
    b.onclick = () => { active = cat; renderFilters(); renderProjects(); }; box.append(b);
  });
}
renderFilters(); renderProjects();

// Form kontak
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault(); const f = new FormData(e.target);
  const body = "Nama: " + f.get("nama") + "\nEmail: " + f.get("email") + "\n\n" + f.get("pesan");
  location.href = "mailto:" + profile.email + "?subject=" + encodeURIComponent("Pesan dari " + f.get("nama")) + "&body=" + encodeURIComponent(body);
  $("#formStatus").textContent = "Aplikasi email Anda akan terbuka. Tekan kirim di sana untuk menyelesaikan.";
});
$("#year").textContent = new Date().getFullYear();

// Mode gelap/terang
const root = document.documentElement, tb = $("#themeBtn");
function applyTheme(t) { root.setAttribute("data-theme", t); tb.textContent = t === "dark" ? "Mode terang" : "Mode gelap"; }
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
applyTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
tb.onclick = () => { const n = root.getAttribute("data-theme") === "dark" ? "light" : "dark"; applyTheme(n); try { localStorage.setItem("theme", n); } catch (e) {} };
