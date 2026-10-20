(function () {
  const $ = (id) => document.getElementById(id);

  // Site text
  document.title = SITE.name + " — " + SITE.tagline;
  $("site-name").textContent = SITE.name;
  $("site-tagline").textContent = SITE.tagline;
  $("hero-name").textContent = SITE.name;
  $("hero-tagline").textContent = SITE.tagline;
  $("about-text").textContent = SITE.about;
  $("footer-name").textContent = SITE.name;
  $("year").textContent = new Date().getFullYear();
  $("email-link").textContent = SITE.email;
  $("email-link").href = "mailto:" + SITE.email;
  if (SITE.instagram) $("insta-link").href = SITE.instagram;
  else $("insta-link").remove();

  // Hero uses the first photo (or the one marked hero: true)
  const hero = PHOTOS.find((p) => p.hero) || PHOTOS[0];
  if (hero) $("hero").style.backgroundImage = "url('" + hero.src + "')";

  // Filters
  const categories = ["All", ...new Set(PHOTOS.map((p) => p.category).filter(Boolean))];
  let current = "All";
  let visible = PHOTOS;
  const filters = $("filters");
  if (categories.length > 2) {
    categories.forEach((cat) => {
      const b = document.createElement("button");
      b.textContent = cat;
      if (cat === current) b.classList.add("active");
      b.onclick = () => {
        current = cat;
        filters.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
        render();
      };
      filters.appendChild(b);
    });
  }

  // Gallery
  const gallery = $("gallery");
  function render() {
    visible = current === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === current);
    gallery.innerHTML = "";
    visible.forEach((p, i) => {
      const fig = document.createElement("figure");
      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = p.title || "";
      img.onload = () => img.classList.add("loaded");
      img.src = p.src;
      fig.appendChild(img);
      if (p.title) {
        const cap = document.createElement("figcaption");
        cap.textContent = p.title;
        fig.appendChild(cap);
      }
      fig.onclick = () => openLightbox(i);
      gallery.appendChild(fig);
    });
  }
  render();

  // Lightbox
  const lb = $("lightbox");
  let index = 0;
  function show() {
    const p = visible[index];
    $("lb-img").src = p.src;
    $("lb-img").alt = p.title || "";
    $("lb-caption").textContent = p.title || "";
  }
  function openLightbox(i) { index = i; show(); lb.classList.add("open"); document.body.style.overflow = "hidden"; }
  function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
  function step(d) { index = (index + d + visible.length) % visible.length; show(); }
  lb.querySelector(".lb-close").onclick = close;
  lb.querySelector(".lb-prev").onclick = (e) => { e.stopPropagation(); step(-1); };
  lb.querySelector(".lb-next").onclick = (e) => { e.stopPropagation(); step(1); };
  lb.onclick = (e) => { if (e.target === lb) close(); };
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
  let touchX = null;
  lb.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX = null;
  });

  // Header background on scroll
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll);
  onScroll();
})();
