(() => {
  'use strict';

  /* ---------- data ---------- */
  const PHOTOS = [{"id":"F1","w":1536,"h":2048,"set":"office","bw":false,"n":1},{"id":"F1bw","w":1536,"h":2048,"set":"office","bw":true,"n":2},{"id":"F2","w":1536,"h":2048,"set":"office","bw":false,"n":3},{"id":"F2bw","w":1536,"h":2048,"set":"office","bw":true,"n":4},{"id":"F3","w":1536,"h":2048,"set":"office","bw":false,"n":5},{"id":"F3bw","w":1536,"h":2048,"set":"office","bw":true,"n":6},{"id":"F4","w":1536,"h":2048,"set":"office","bw":false,"n":7},{"id":"F4bw","w":1536,"h":2048,"set":"office","bw":true,"n":8},{"id":"F5","w":1536,"h":2048,"set":"office","bw":false,"n":9},{"id":"F5bw","w":1536,"h":2048,"set":"office","bw":true,"n":10},{"id":"F6","w":1536,"h":2048,"set":"office","bw":false,"n":11},{"id":"F6bw","w":1536,"h":2048,"set":"office","bw":true,"n":12},{"id":"F7","w":1536,"h":2048,"set":"office","bw":false,"n":13},{"id":"F7bw","w":1536,"h":2048,"set":"office","bw":true,"n":14},{"id":"F8","w":1536,"h":2048,"set":"office","bw":false,"n":15},{"id":"F8bw","w":1536,"h":2048,"set":"office","bw":true,"n":16},{"id":"F9","w":1536,"h":2048,"set":"office","bw":false,"n":17},{"id":"F9bw","w":1536,"h":2048,"set":"office","bw":true,"n":18},{"id":"F10","w":1536,"h":2048,"set":"office","bw":false,"n":19},{"id":"F10bw","w":1536,"h":2048,"set":"office","bw":true,"n":20},{"id":"F11","w":1536,"h":2048,"set":"office","bw":false,"n":21},{"id":"F11bw","w":1536,"h":2048,"set":"office","bw":true,"n":22},{"id":"F12","w":1536,"h":2048,"set":"office","bw":false,"n":23},{"id":"F12bw","w":1536,"h":2048,"set":"office","bw":true,"n":24},{"id":"F13","w":1536,"h":2048,"set":"office","bw":false,"n":25},{"id":"F13bw","w":1536,"h":2048,"set":"office","bw":true,"n":26},{"id":"F14","w":1536,"h":2048,"set":"office","bw":false,"n":27},{"id":"F14bw","w":1536,"h":2048,"set":"office","bw":true,"n":28},{"id":"F15","w":1536,"h":2048,"set":"office","bw":false,"n":29},{"id":"F15bw","w":1536,"h":2048,"set":"office","bw":true,"n":30},{"id":"F16","w":1536,"h":2048,"set":"office","bw":false,"n":31},{"id":"F16bw","w":1536,"h":2048,"set":"office","bw":true,"n":32},{"id":"F17","w":1536,"h":2048,"set":"office","bw":false,"n":33},{"id":"F17bw","w":1536,"h":2048,"set":"office","bw":true,"n":34},{"id":"F18","w":1536,"h":2048,"set":"office","bw":false,"n":35},{"id":"F18bw","w":1536,"h":2048,"set":"office","bw":true,"n":36},{"id":"F19","w":1536,"h":2048,"set":"neon","bw":false,"n":37},{"id":"F19bw","w":1536,"h":2048,"set":"neon","bw":true,"n":38},{"id":"F20","w":1536,"h":2048,"set":"neon","bw":false,"n":39},{"id":"F20bw","w":1536,"h":2048,"set":"neon","bw":true,"n":40},{"id":"F21","w":1536,"h":2048,"set":"neon","bw":false,"n":41},{"id":"F21bw","w":1536,"h":2048,"set":"neon","bw":true,"n":42},{"id":"F22","w":1536,"h":2048,"set":"neon","bw":false,"n":43},{"id":"F22bw","w":1536,"h":2048,"set":"neon","bw":true,"n":44},{"id":"F23","w":1536,"h":2048,"set":"neon","bw":false,"n":45},{"id":"F23bw","w":1536,"h":2048,"set":"neon","bw":true,"n":46},{"id":"F24","w":1536,"h":2048,"set":"neon","bw":false,"n":47},{"id":"F24bw","w":1536,"h":2048,"set":"neon","bw":true,"n":48},{"id":"F25","w":1536,"h":2048,"set":"neon","bw":false,"n":49},{"id":"F25bw","w":1536,"h":2048,"set":"neon","bw":true,"n":50},{"id":"F26","w":2048,"h":1536,"set":"neon","bw":false,"n":51},{"id":"F26bw","w":2048,"h":1536,"set":"neon","bw":true,"n":52},{"id":"F27","w":1536,"h":1920,"set":"neon","bw":false,"n":53},{"id":"F27bw","w":1536,"h":1920,"set":"neon","bw":true,"n":54},{"id":"F28","w":1536,"h":2048,"set":"neon","bw":false,"n":55},{"id":"F28bw","w":1536,"h":2048,"set":"neon","bw":true,"n":56},{"id":"F29","w":1536,"h":2048,"set":"neon","bw":false,"n":57},{"id":"F29bw","w":1536,"h":2048,"set":"neon","bw":true,"n":58},{"id":"F30","w":1536,"h":2048,"set":"neon","bw":false,"n":59},{"id":"F30bw","w":1536,"h":2048,"set":"neon","bw":true,"n":60}];
  const full = p => `photos/full/${p.id}.jpg`;
  const thumb = p => `photos/thumb/${p.id}.webp`;
  const fileName = p => `Tania_${String(p.n).padStart(2, '0')}_${p.id}.jpg`;

  /* ---------- i18n ---------- */
  const T = {
    pt: {
      bar_mid: 'Porto · 2026', kicker: 'Office Siren / Neon', lead: 'Todas tuas.',
      cta_view: 'Ver galeria', cta_all: 'Descarregar tudo', meta_res: '1536 × 2048 px', scroll: 'Desliza',
      name_label: 'o nome', intro_1: 'Do grego antigo:', intro_2: 'nomear, ordenar, senhora.',
      t1: 'Distingue-se por um carácter forte e independente e por qualidades de liderança naturais — «rainha guerreira».',
      t2: 'Possui grande emotividade e expressividade.',
      t3: 'Na numerologia portuguesa, o número 8 corresponde à praticidade, à ambição e ao desejo de sucesso material.',
      t4: 'Propensa ao perfeccionismo e à dominância.',
      gallery: 'Galeria', f_all: 'Todas', f_color: 'Cor', f_bw: 'P&B',
      dl_label: 'Arquivo completo', dl_title: 'Leva tudo contigo.',
      dl_text: 'Todas as fotos em alta resolução, num só arquivo ZIP.',
      dl_hint: 'No telemóvel: abre uma foto e toca em «Guardar» para a enviar para a galeria.',
      foot: 'Feito para a Tânia · 2026', save: 'Guardar', download: 'Descarregar',
      dl_all: 'Descarregar tudo', close: 'Fechar', prev: 'Anterior', next: 'Seguinte',
      frames: 'fotos', open: 'Abrir foto', dl_one: 'Descarregar foto', title: 'Tânia'
    },
    en: {
      bar_mid: 'Porto · 2026', kicker: 'Office Siren / Neon', lead: 'All yours.',
      cta_view: 'View gallery', cta_all: 'Download all', meta_res: '1536 × 2048 px', scroll: 'Scroll',
      name_label: 'the name', intro_1: 'From ancient Greek:', intro_2: 'to name, to order, lady.',
      t1: 'Known for a strong, independent character and natural leadership — a “warrior queen”.',
      t2: 'Deeply emotional and expressive.',
      t3: 'In Portuguese numerology, the number 8 stands for practicality, ambition and the drive for material success.',
      t4: 'Inclined to perfectionism and dominance.',
      gallery: 'Gallery', f_all: 'All', f_color: 'Colour', f_bw: 'B&W',
      dl_label: 'Full archive', dl_title: 'Take it all with you.',
      dl_text: 'Every photo in high resolution, in a single ZIP archive.',
      dl_hint: 'On your phone: open a photo and tap “Save” to send it to your camera roll.',
      foot: 'Made for Tânia · 2026', save: 'Save', download: 'Download',
      dl_all: 'Download all', close: 'Close', prev: 'Previous', next: 'Next',
      frames: 'photos', open: 'Open photo', dl_one: 'Download photo', title: 'Tânia'
    }
  };
  let lang = (() => {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'pt') return q;
    try { const s = localStorage.getItem('tania-lang'); if (s === 'en' || s === 'pt') return s; } catch (e) {}
    return 'pt';
  })();
  const t = k => (T[lang] && T[lang][k]) || T.pt[k] || k;

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    document.querySelectorAll('.card').forEach(c => {
      c.setAttribute('aria-label', `${t('open')} ${c.dataset.n}`);
      const d = c.querySelector('.card__dl'); if (d) d.setAttribute('aria-label', t('dl_one'));
    });
    countLabels();
  }
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang;
    try { localStorage.setItem('tania-lang', lang); } catch (e) {}
    const u = new URL(location.href); u.searchParams.set('lang', lang); history.replaceState(history.state, '', u);
    applyLang();
  }));

  /* ---------- top bar ---------- */
  const bar = document.getElementById('bar');
  const onScroll = () => bar.classList.toggle('is-solid', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- film strip ---------- */
  const strip = document.getElementById('strip');
  const stripSet = PHOTOS.filter(p => !p.bw);
  const mkStrip = () => stripSet.map(p =>
    `<button type="button" class="strip__item" data-id="${p.id}" tabindex="-1"><img src="${thumb(p)}" alt="" loading="lazy" decoding="async"></button>`).join('');
  strip.innerHTML = mkStrip() + mkStrip();
  strip.addEventListener('click', e => {
    const b = e.target.closest('.strip__item'); if (!b) return;
    openAt(PHOTOS.findIndex(p => p.id === b.dataset.id), b.querySelector('img'), PHOTOS);
  });

  /* ---------- gallery ---------- */
  const grids = { office: document.getElementById('grid-office'), neon: document.getElementById('grid-neon') };
  const BIG = new Set(['F1', 'F4', 'F10', 'F16', 'F19', 'F23', 'F26', 'F30']);   // feature tiles
  const dlIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0l-5-5m5 5l5-5M4 19h16"/></svg>';
  PHOTOS.forEach(p => {
    const a = document.createElement('a');
    a.className = 'card' + (BIG.has(p.id) ? ' is-big' : '');
    a.href = full(p);
    a.dataset.id = p.id; a.dataset.n = String(p.n).padStart(2, '0');
    a.dataset.kind = p.bw ? 'bw' : 'color';
    a.innerHTML = `<img src="${thumb(p)}" alt="Tânia ${a.dataset.n}" loading="lazy" decoding="async" width="${p.w}" height="${p.h}">
      <span class="card__n">${a.dataset.n} — ${p.bw ? 'B/W' : 'COLOR'}</span>
      <span class="card__dl" role="button" tabindex="-1">${dlIcon}</span>`;
    grids[p.set].appendChild(a);
  });

  let filter = 'all';
  const visible = () => PHOTOS.filter(p => filter === 'all' || (filter === 'bw') === p.bw);
  function countLabels() {
    ['office', 'neon'].forEach(s => {
      const n = PHOTOS.filter(p => p.set === s && (filter === 'all' || (filter === 'bw') === p.bw)).length;
      document.getElementById('count-' + s).textContent = `${n} ${t('frames')}`;
    });
  }
  document.querySelectorAll('.filters button').forEach(b => b.addEventListener('click', () => {
    filter = b.dataset.filter;
    document.querySelectorAll('.filters button').forEach(x => x.classList.toggle('is-on', x === b));
    document.querySelectorAll('.card').forEach(c => {
      const show = filter === 'all' || c.dataset.kind === filter;
      c.classList.toggle('is-hidden', !show);
      c.classList.toggle('is-big', show && filter === 'all' && BIG.has(c.dataset.id));
    });
    countLabels();
  }));

  document.addEventListener('click', e => {
    const dl = e.target.closest('.card__dl');
    const card = e.target.closest('.card');
    if (!card) return;
    e.preventDefault();
    const p = PHOTOS.find(x => x.id === card.dataset.id);
    if (dl) { download(p); return; }
    const list = visible();
    openAt(list.findIndex(x => x.id === p.id), card.querySelector('img'), list);
  });

  // reveal on scroll
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .05 }) : null;
  document.querySelectorAll('.card').forEach((c, i) => {
    c.style.transitionDelay = `${(i % 4) * 70}ms`;
    io ? io.observe(c) : c.classList.add('is-in');
  });

  /* ---------- download helpers ---------- */
  function download(p) {
    const a = document.createElement('a');
    a.href = full(p); a.download = fileName(p);
    document.body.appendChild(a); a.click(); a.remove();
  }
  const canShareFiles = (() => {
    try { return !!(navigator.canShare && navigator.canShare({ files: [new File([new Blob()], 'x.jpg', { type: 'image/jpeg' })] })); }
    catch (e) { return false; }
  })();
  const isTouch = navigator.maxTouchPoints > 0 && window.matchMedia('(hover:none)').matches;

  /* ---------- lightbox ---------- */
  const lb = document.getElementById('lb');
  const stage = document.getElementById('lb-stage');
  const slide = document.getElementById('lb-slide');
  const img = document.getElementById('lb-img');
  const cnt = document.getElementById('lb-count');
  const btnDl = document.getElementById('lb-dl');
  const btnShare = document.getElementById('lb-share');
  const rail = document.getElementById('lb-rail');
  let list = PHOTOS, idx = 0, open = false;

  if (canShareFiles && isTouch) btnShare.hidden = false;

  function buildRail() {
    rail.innerHTML = list.map((p, i) => `<button type="button" data-i="${i}" aria-label="${p.n}"><img src="${thumb(p)}" alt="" loading="lazy"></button>`).join('');
  }
  rail.addEventListener('click', e => { const b = e.target.closest('button'); if (b) show(+b.dataset.i, 0); });

  function setActive() {
    const p = list[idx];
    cnt.textContent = `Nº ${String(p.n).padStart(2, '0')}`;
    btnDl.href = full(p); btnDl.setAttribute('download', fileName(p));
    rail.querySelectorAll('button').forEach((b, i) => b.classList.toggle('is-on', i === idx));
    const on = rail.children[idx];
    if (on) rail.scrollTo({ left: on.offsetLeft - rail.clientWidth / 2 + on.offsetWidth / 2, behavior: open ? 'smooth' : 'auto' });
    // preload neighbours
    [idx - 1, idx + 1].forEach(j => { if (list[j]) { const im = new Image(); im.src = full(list[j]); } });
    if (location.hash !== '#' + p.id) history.replaceState({ lb: true }, '', '#' + p.id);
  }

  function show(i, dir) {
    if (i < 0) i = list.length - 1;
    if (i >= list.length) i = 0;
    idx = i;
    const p = list[idx];
    img.src = thumb(p);                 // instant low-res
    const hi = new Image();
    hi.onload = () => { if (list[idx] === p) img.src = hi.src; };
    hi.src = full(p);
    if (dir) {
      slide.style.transition = 'none';
      slide.style.transform = `translateX(${dir * 40}px)`; slide.style.opacity = '0';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        slide.style.transition = 'transform .45s var(--ease), opacity .35s';
        slide.style.transform = 'translateX(0)'; slide.style.opacity = '1';
      }));
    }
    setActive();
  }

  function targetRect(p) {
    const r = stage.getBoundingClientRect();
    const pad = parseFloat(getComputedStyle(slide).paddingLeft) || 0;
    const aw = r.width - pad * 2, ah = r.height;
    const s = Math.min(aw / p.w, ah / p.h);
    const w = p.w * s, h = p.h * s;
    return { left: r.left + (r.width - w) / 2, top: r.top + (r.height - h) / 2, width: w, height: h };
  }

  function openAt(i, fromImg, l) {
    if (i < 0) return;
    list = l || PHOTOS; buildRail();
    open = true;
    document.body.classList.add('lb-open');
    lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false');
    history.pushState({ lb: true }, '', location.pathname + location.search + '#' + list[i].id);
    slide.style.opacity = '0';
    show(i, 0);
    // FLIP fly-in from the thumbnail
    if (fromImg && !window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
      const a = fromImg.getBoundingClientRect(), b = targetRect(list[i]);
      const fly = document.createElement('img');
      fly.src = fromImg.currentSrc || fromImg.src; fly.className = 'lb__fly';
      Object.assign(fly.style, { left: a.left + 'px', top: a.top + 'px', width: a.width + 'px', height: a.height + 'px' });
      document.body.appendChild(fly);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        Object.assign(fly.style, { left: b.left + 'px', top: b.top + 'px', width: b.width + 'px', height: b.height + 'px' });
      }));
      setTimeout(() => { slide.style.transition = 'opacity .2s'; slide.style.opacity = '1'; setTimeout(() => fly.remove(), 220); }, 560);
    } else { slide.style.opacity = '1'; }
    document.getElementById('lb-close').focus({ preventScroll: true });
  }

  function close(fromPop) {
    if (!open) return;
    open = false;
    lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-open');
    slide.style.opacity = '0';
    if (!fromPop && history.state && history.state.lb) history.back();
    else history.replaceState(null, '', location.pathname + location.search);
    const c = document.querySelector(`.card[data-id="${list[idx].id}"]`);
    if (c && !fromPop) c.focus({ preventScroll: true });
  }

  document.getElementById('lb-close').addEventListener('click', () => close(false));
  document.getElementById('lb-prev').addEventListener('click', () => show(idx - 1, -1));
  document.getElementById('lb-next').addEventListener('click', () => show(idx + 1, 1));
  lb.querySelector('.lb__bg').addEventListener('click', () => close(false));
  stage.addEventListener('click', e => { if (e.target === stage || e.target === slide) close(false); });
  window.addEventListener('popstate', () => { if (open) close(true); });
  document.addEventListener('keydown', e => {
    if (!open) return;
    if (e.key === 'Escape') close(false);
    else if (e.key === 'ArrowRight') show(idx + 1, 1);
    else if (e.key === 'ArrowLeft') show(idx - 1, -1);
  });

  btnShare.addEventListener('click', async () => {
    const p = list[idx];
    try {
      const blob = await (await fetch(full(p))).blob();
      const file = new File([blob], fileName(p), { type: 'image/jpeg' });
      await navigator.share({ files: [file] });
    } catch (e) { if (e && e.name !== 'AbortError') download(p); }
  });

  // swipe: follow finger, then snap
  let sx = 0, sy = 0, dx = 0, drag = false, axis = null;
  stage.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse') return;
    drag = true; axis = null; sx = e.clientX; sy = e.clientY; dx = 0;
    slide.style.transition = 'none';
  });
  stage.addEventListener('pointermove', e => {
    if (!drag) return;
    const mx = e.clientX - sx, my = e.clientY - sy;
    if (!axis) { if (Math.abs(mx) > 8 || Math.abs(my) > 8) axis = Math.abs(mx) > Math.abs(my) ? 'x' : 'y'; else return; }
    if (axis === 'x') { dx = mx; slide.style.transform = `translateX(${dx}px)`; slide.style.opacity = String(1 - Math.min(Math.abs(dx) / 500, .5)); }
    else { slide.style.transform = `translateY(${Math.max(0, my)}px)`; slide.style.opacity = String(1 - Math.min(Math.max(0, my) / 400, .6)); dx = my; }
  });
  const end = () => {
    if (!drag) return; drag = false;
    slide.style.transition = 'transform .35s var(--ease), opacity .3s';
    if (axis === 'x' && Math.abs(dx) > 60) { show(idx + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1); return; }
    if (axis === 'y' && dx > 110) { close(false); return; }
    slide.style.transform = ''; slide.style.opacity = '1';
  };
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', end);

  /* ---------- init ---------- */
  applyLang();
  const h = location.hash.slice(1);
  if (h) { const i = PHOTOS.findIndex(p => p.id === h); if (i >= 0) setTimeout(() => openAt(i, null, PHOTOS), 300); }
})();
