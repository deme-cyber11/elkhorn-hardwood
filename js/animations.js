/* ============================================
   Elkhorn Hardwood — Animation Controller
   Premium Awwwards-quality animations
   ============================================ */

(function () {
  'use strict';

  // ── Lenis Smooth Scroll ──
  function initLenis() {
    if (typeof Lenis === 'undefined') return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
    window._lenis = lenis;
  }

  // ── GSAP + ScrollTrigger ──
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance timeline
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-label', { y: 30, opacity: 0, duration: 0.8 })
        .from('.hero h1', { y: 40, opacity: 0, duration: 0.9 }, '-=0.5')
        .from('.hero .hero-desc', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-buttons', { y: 30, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-trust', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-image', { x: 60, opacity: 0, duration: 1, ease: 'power2.out' }, '-=0.8');
    }

    // Hero parallax
    var heroImg = document.querySelector('.hero-image img');
    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });
    }

    // Section headings
    gsap.utils.toArray('.section-title').forEach(function (el) {
      gsap.from(el, {
        y: 40, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    gsap.utils.toArray('.section-label').forEach(function (el) {
      gsap.from(el, {
        y: 20, opacity: 0, duration: 0.6,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    gsap.utils.toArray('.section-subtitle').forEach(function (el) {
      gsap.from(el, {
        y: 25, opacity: 0, duration: 0.7, delay: 0.15,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    // Service cards stagger
    var serviceCards = gsap.utils.toArray('.service-card');
    if (serviceCards.length) {
      gsap.from(serviceCards, {
        y: 60, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.services-grid', start: 'top 80%', once: true },
      });
    }

    // Value props
    var valueProps = gsap.utils.toArray('.value-prop');
    if (valueProps.length) {
      gsap.from(valueProps, {
        x: -40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.value-props', start: 'top 80%', once: true },
      });
    }

    // Gallery items
    var galleryItems = gsap.utils.toArray('.gallery-item, .swiper-slide .gallery-item');
    if (galleryItems.length) {
      gsap.from(galleryItems, {
        y: 50, opacity: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: '.gallery-grid, .gallery-swiper', start: 'top 80%', once: true },
      });
    }

    // Trust badges
    var trustBadges = gsap.utils.toArray('.trust-badge');
    if (trustBadges.length) {
      gsap.from(trustBadges, {
        scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.trust-badges', start: 'top 85%', once: true },
      });
    }

    // About image
    var aboutImg = document.querySelector('.about-image');
    if (aboutImg) {
      gsap.from(aboutImg, {
        x: -60, opacity: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-grid', start: 'top 75%', once: true },
      });
    }

    // Testimonial cards
    var testimonialCards = gsap.utils.toArray('.testimonial-card');
    if (testimonialCards.length) {
      gsap.from(testimonialCards, {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.15,
        scrollTrigger: { trigger: '.testimonials-section, .testimonials-grid', start: 'top 80%', once: true },
      });
    }

    // Area cards
    var areaCards = gsap.utils.toArray('.area-card');
    if (areaCards.length) {
      gsap.from(areaCards, {
        y: 30, opacity: 0, duration: 0.5, stagger: 0.05,
        scrollTrigger: { trigger: '.areas-grid', start: 'top 80%', once: true },
      });
    }

    // FAQ items
    var faqItems = gsap.utils.toArray('.faq-item');
    if (faqItems.length) {
      gsap.from(faqItems, {
        y: 30, opacity: 0, duration: 0.5, stagger: 0.08,
        scrollTrigger: { trigger: '.faq-list, .faq-page', start: 'top 80%', once: true },
      });
    }

    // CTA sections
    gsap.utils.toArray('.cta-section').forEach(function (el) {
      var h2 = el.querySelector('h2');
      if (h2) {
        gsap.from(h2, {
          scale: 0.9, opacity: 0, duration: 0.8,
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        });
      }
    });

    // Guarantee section
    var guarantee = document.querySelector('.guarantee-section');
    if (guarantee) {
      gsap.from(guarantee, {
        scale: 0.95, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: guarantee, start: 'top 80%', once: true },
      });
    }

    // Pricing cards
    var pricingCards = gsap.utils.toArray('.pricing-card');
    if (pricingCards.length) {
      gsap.from(pricingCards, {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.15,
        scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%', once: true },
      });
    }

    // Content section headings
    gsap.utils.toArray('.content-section h2, .content-section h3').forEach(function (el) {
      gsap.from(el, {
        y: 30, opacity: 0, duration: 0.6,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    // Service detail images
    gsap.utils.toArray('.service-detail-img').forEach(function (el) {
      gsap.from(el, {
        y: 40, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    // Footer parallax
    var footer = document.querySelector('.footer');
    if (footer) {
      gsap.from(footer, {
        backgroundPositionY: '20%',
        scrollTrigger: { trigger: footer, start: 'top bottom', end: 'bottom bottom', scrub: true },
      });
    }

    // Page hero entrance
    var pageHero = document.querySelector('.page-hero');
    if (pageHero) {
      gsap.from(pageHero.querySelector('h1'), { y: 30, opacity: 0, duration: 0.8, delay: 0.2 });
      var pageHeroP = pageHero.querySelector('p');
      if (pageHeroP) gsap.from(pageHeroP, { y: 20, opacity: 0, duration: 0.7, delay: 0.4 });
    }
  }

  // ── Typed.js ──
  function initTyped() {
    if (typeof Typed === 'undefined') return;
    var el = document.getElementById('typed-text');
    if (!el) return;
    new Typed('#typed-text', {
      strings: ['hardwood', 'oak', 'maple', 'walnut', 'hickory', 'fir'],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
  }

  // ── Counter Animation ──
  function initCounters() {
    var counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseFloat(el.getAttribute('data-counter'));
          var suffix = el.getAttribute('data-suffix') || '';
          var prefix = el.getAttribute('data-prefix') || '';
          var decimals = el.getAttribute('data-decimals') || 0;
          var duration = 2000;
          var start = performance.now();
          function update(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = eased * target;
            el.textContent = prefix + current.toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { observer.observe(el); });
  }

  // ── Swiper ──
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;
    var testimonialsEl = document.querySelector('.testimonials-swiper');
    if (testimonialsEl) {
      new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }
    var galleryEl = document.querySelector('.gallery-swiper');
    if (galleryEl) {
      new Swiper('.gallery-swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        pagination: { el: '.gallery-pagination', clickable: true },
        navigation: { nextEl: '.gallery-next', prevEl: '.gallery-prev' },
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }
  }

  // ── GLightbox ──
  function initGLightbox() {
    if (typeof GLightbox === 'undefined') return;
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      closeButton: true,
    });
  }

  // ── Vanilla Tilt ──
  function initTilt() {
    if (typeof VanillaTilt === 'undefined') return;
    var tiltEls = document.querySelectorAll('[data-tilt]');
    if (!tiltEls.length) return;
    if ('ontouchstart' in window) return;
    VanillaTilt.init(tiltEls, {
      max: 8,
      speed: 400,
      glare: true,
      'max-glare': 0.15,
      scale: 1.02,
    });
  }

  // ── Splitting.js ──
  function initSplitting() {
    if (typeof Splitting === 'undefined') return;
    Splitting({ target: '.split-text', by: 'chars' });
    document.querySelectorAll('.split-text').forEach(function (el) {
      var chars = el.querySelectorAll('.char');
      if (!chars.length || typeof gsap === 'undefined') return;
      gsap.from(chars, {
        opacity: 0, y: 20, rotateX: -40, duration: 0.5, stagger: 0.03, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });
  }

  // ── AOS ──
  function initAOS() {
    if (typeof AOS === 'undefined') return;
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: 'mobile',
    });
  }

  // ── Before/After Comparison Slider ──
  function initBeforeAfter() {
    document.querySelectorAll('.ba-slider').forEach(function (container) {
      var beforeImg = container.querySelector('.ba-before');
      var handle = container.querySelector('.ba-handle');
      if (!beforeImg || !handle) return;
      var isDragging = false;
      function setPosition(x) {
        var rect = container.getBoundingClientRect();
        var pos = ((x - rect.left) / rect.width) * 100;
        pos = Math.max(2, Math.min(98, pos));
        beforeImg.style.clipPath = 'inset(0 0 0 ' + pos + '%)';
        handle.style.left = pos + '%';
      }
      function onMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        var x = e.touches ? e.touches[0].clientX : e.clientX;
        setPosition(x);
      }
      function onEnd() {
        isDragging = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onEnd);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onEnd);
      }
      handle.addEventListener('mousedown', function (e) {
        isDragging = true;
        e.preventDefault();
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onEnd);
      });
      handle.addEventListener('touchstart', function () {
        isDragging = true;
        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('touchend', onEnd);
      });
      container.addEventListener('click', function (e) { setPosition(e.clientX); });
      setPosition(container.getBoundingClientRect().left + container.getBoundingClientRect().width / 2);
    });
  }

  // ── Magnetic Buttons ──
  function initMagneticButtons() {
    if ('ontouchstart' in window) return;
    document.querySelectorAll('.btn-magnetic').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.3) + 'px, ' + (y * 0.3) + 'px) scale(1.05)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = 'translate(0, 0) scale(1)';
      });
    });
  }

  // ── Header Scroll ──
  function initHeader() {
    var header = document.getElementById('header');
    if (!header) return;
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ── Mobile Menu ──
  function initMobileMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.nav-links');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  }

  // ── FAQ Accordion ──
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.removeAttribute('onclick');
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var isActive = item.classList.contains('active') || item.classList.contains('open');
        document.querySelectorAll('.faq-item.active, .faq-item.open').forEach(function (el) {
          el.classList.remove('active', 'open');
          var q = el.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        });
        if (!isActive) {
          item.classList.add('active', 'open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ── Floating CTA ──
  function initFloatingCTA() {
    var fc = document.getElementById('floatingCta');
    if (!fc) return;
    setTimeout(function () { fc.classList.add('visible'); }, 2000);
  }

  // ── Scroll CTA Banner ──
  function initScrollBanner() {
    var banner = document.getElementById('scrollCtaBanner');
    if (!banner) return;
    var shown = false;
    window.addEventListener('scroll', function () {
      if (shown) return;
      var ratio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (ratio > 0.6) { banner.classList.add('visible'); shown = true; }
    });
  }

  // ── Active Nav ──
  function initActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === path) a.classList.add('nav-active');
    });
  }

  // ── Initialize Everything ──
  function init() {
    initLenis();
    initGSAP();
    initTyped();
    initCounters();
    initSwiper();
    initGLightbox();
    initTilt();
    initSplitting();
    initAOS();
    initBeforeAfter();
    initMagneticButtons();
    initHeader();
    initMobileMenu();
    initFAQ();
    initFloatingCTA();
    initScrollBanner();
    initActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
