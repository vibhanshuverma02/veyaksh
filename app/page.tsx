


'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import Reveal from './components/Reveal';

const offerings = [
  {
    title: 'Campus Intelligence',
    video: '/videos/campus1.mp4',
    text: 'AI-powered video intelligence for universities, schools and institutional campuses.',
    points: ['Video surveillance with automated alerts', 'Access control and visitor tracking', 'Campus-wide analytics dashboard'],
    more: {
      intro: 'Turns your existing camera network into a system that watches for you and flags only what needs attention.',
      does: ['Detects intrusion, crowding and unusual activity', 'Manages entry points and restricted zones', 'Gives security teams one dashboard across buildings'],
      fits: ['Universities', 'Schools', 'Hostels and residential campuses'],
    },
    // cases: [
    //   ['40%', 'Reduction in manual monitoring effort', 'Campus Safety', 'campus.jpg', 'Automated alerts reduce the need for staff to watch camera feeds continuously.'],
    // ],
  },
  {
    title: 'Civic & Urban Technology',
    video: '/videos/civil.mp4',
    text: 'Real-time monitoring for traffic, public spaces, environmental conditions and civic infrastructure.',
    points: ['Traffic and mobility monitoring', 'Public safety awareness', 'Environmental sensing'],
    more: {
      intro: 'Gives municipalities live visibility of roads, public spaces and environmental conditions.',
      does: ['Tracks traffic flow and congestion points', 'Flags incidents in public areas', 'Monitors air, water and noise with sensors'],
      fits: ['Municipalities', 'Smart city projects', 'Tourist and public areas'],
    },
    // cases: [
    //   ['60%', 'Improvement in incident response time', 'Smart Cities', 'city.jpg', 'Faster detection of incidents and quicker dispatch to the right team.'],
    //   ['30%', 'Better resource utilization', 'Environment', 'mountain.jpg', 'Sensor data helps teams plan water, energy and field resources.'],
    // ],
  },
  {
    title: 'Industrial Monitoring',
    video: '/videos/industry2.mp4',
    text: 'Edge and sensor-based monitoring for equipment health, workplace safety and operational efficiency.',
    points: ['Equipment health monitoring', 'Safety compliance checks', 'Energy usage monitoring'],
    more: {
      intro: 'Edge devices and sensors watch machines and workers so faults and violations are caught early.',
      does: ['Detects equipment anomalies before failure', 'Checks PPE and restricted-zone compliance', 'Tracks energy consumption by line or area'],
      fits: ['Factories', 'Warehouses', 'Power and utility sites'],
    },
    // cases: [
    //   ['25%', 'Increase in operational efficiency', 'Industry 4.0', 'industrial.jpg', 'Early warning on equipment faults and safety violations.'],
    // ],
  },
  {
    title: 'Drone & Autonomous Systems',
    video: '/videos/Drone.mp4',
    text: 'Drone-based intelligence for aerial surveillance, inspection, mapping and area monitoring.',
    points: ['Aerial surveillance', 'Asset and site inspection', 'Area mapping'],
    more: {
      intro: 'Drones capture and process aerial data so large or hard-to-reach areas can be monitored quickly.',
      does: ['Covers large perimeters and terrain', 'Automates inspection capture and processing', 'Produces maps and survey outputs'],
      fits: ['Border and perimeter areas', 'Infrastructure inspection', 'Field and terrain surveys'],
    },
    // cases: [
    //   ['50%', 'Faster inspection and mapping', 'Drone Operations', 'drone.jpg', 'Automated capture and processing shorten inspection and survey cycles.'],
    //   ['99%', 'System uptime on edge deployments', 'Defence & Borders', 'hero.jpg', 'Edge processing keeps monitoring running when network links are weak or unavailable.'],
    // ],
  },
];

const BRAND = 'VEYAKSH';

const CONTACT = {
  phoneLabel: '+91 63989 37356',
  phoneHref: 'tel:+916398937356',
  email: 'hello@veyaksh.co.in', // email setup hone ke baad hi live karna
  instagramHandle: '@veyaksh.co.in',
  instagram: 'https://www.instagram.com/veyaksh.co.in/',
  linkedin: '', // page bane to link daalna
  address:
    '536/G3, 1st Floor, Ambey Apartments, near Gate 10, IIT Roorkee, Solanipuram, Roorkee 247667, Haridwar, Uttarakhand',
  mapSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent(
      '536/G3 Ambey Apartments, near Gate 10 IIT Roorkee, Solanipuram, Roorkee 247667'
    ) +
    '&output=embed',
};

const Icon = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.75 9.75h3.8v1.6h.06c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.63 4.74 6.05v5.9h-4v-5.23c0-1.25-.02-2.86-1.74-2.86-1.74 0-2 1.36-2 2.77v5.32h-4z" /></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
};

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function useTypewriter(text: string, speed = 150, startDelay = 500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(text.length);
      return;
    }
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < text.length) t = setTimeout(tick, speed);
    };
    const start = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(t);
    };
  }, [text, speed, startDelay]);

  return count;
}

// Counts a value like "40%" up from 0 when the card mounts
function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : '';
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!m) return;
    if (prefersReducedMotion()) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const step = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!m) return <>{value}</>;
  return <>{n}{suffix}</>;
}

export default function Home() {
  const [activeOffering, setActiveOffering] = useState(0);
  const [moreOpen, setMoreOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [inView, setInView] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);
  const offeringsRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const current = offerings[activeOffering];
  const typed = useTypewriter(BRAND);
  const typingDone = typed >= BRAND.length;

  // Scroll the page so that offering `i` becomes the active one
  const scrollToOffering = (i: number) => {
    const el = offeringsRef.current;
    if (!el) return;
    const range = el.offsetHeight - window.innerHeight;
    const step = range / offerings.length;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (i + 0.5) * step, behavior: 'smooth' });
  };

  const prevOffering = () => scrollToOffering(Math.max(activeOffering - 1, 0));
  const nextOffering = () => scrollToOffering(Math.min(activeOffering + 1, offerings.length - 1));

  // From the nav dropdown
  const goOffering = (i: number) => {
    setDdOpen(false);
    scrollToOffering(i);
  };

  // Header stays hidden on the hero, appears once the user scrolls on
  useEffect(() => {
    const onScroll = () => {
      const heroH = heroRef.current?.offsetHeight ?? window.innerHeight;
      setNavVisible(window.scrollY > heroH * 0.85);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Know when the Offerings section is on screen (threshold 0: the section is very tall)
  useEffect(() => {
    const el = offeringsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll drives the active offering (down = next, up = previous)
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = offeringsRef.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      if (range <= 0) return;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), range);
      const step = range / offerings.length;
      const idx = Math.min(offerings.length - 1, Math.floor(scrolled / step));
      setActiveOffering((prev) => (prev === idx ? prev : idx));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Play the video only while the section is visible
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView, activeOffering]);

  // Modal: Esc to close + lock body scroll
  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMoreOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [moreOpen]);

  // Left / Right arrow keys change offering while the section is in view
  useEffect(() => {
    if (!inView || moreOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevOffering();
      if (e.key === 'ArrowRight') nextOffering();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [inView, moreOpen, activeOffering]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <nav className={`nav ${navVisible ? 'show' : ''}`} aria-hidden={!navVisible}>
        <div className="container nav-inner">
          <a href="#top" className="brand">
            <img src="/images/logo.png" alt="VEYAKSH" className="brand-logo" />
          </a>
          <div className="nav-links">
            <div
              className="nav-dd"
              onMouseEnter={() => setDdOpen(true)}
              onMouseLeave={() => setDdOpen(false)}
            >
              <a href="#offerings" onClick={() => setDdOpen((v) => !v)}>
                Offerings <i className="dd-caret">▾</i>
              </a>
              <div className={`dd-menu ${ddOpen ? 'open' : ''}`}>
                {offerings.map((o, i) => (
                  <button
                    key={o.title}
                    className={activeOffering === i ? 'on' : ''}
                    onClick={() => goOffering(i)}
                  >
                    <span>0{i + 1}</span>{o.title}
                  </button>
                ))}
              </div>
            </div>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="hero" ref={heroRef}>
        <Image className="hero-image" src="/images/hero.png" alt="Himalayan landscape" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className={`eyebrow hero-fade ${typingDone ? 'in' : ''}`}>
            AI &nbsp;|&nbsp; IoT &nbsp;|&nbsp; COMPUTER VISION &nbsp;|&nbsp; EDGE COMPUTING
          </p>

          <h1 className="hero-brand" aria-label={BRAND}>
            <span className="ghost" aria-hidden>{BRAND}</span>
            <span className="typed" aria-hidden>
              {BRAND.slice(0, typed)}
              <i className={`caret ${typingDone ? 'blink' : ''}`} />
            </span>
          </h1>

          <p className={`tagline hero-fade ${typingDone ? 'in' : ''}`} style={{ '--d': '150ms' } as CSSProperties}>
            See. Sense. Understand.
          </p>
          <a
            className={`button hero-fade ${typingDone ? 'in' : ''}`}
            style={{ '--d': '300ms' } as CSSProperties}
            href="#offerings"
          >
            <span>View our solutions</span>
            <b aria-hidden>→</b>
          </a>
        </div>
      </section>

      {/* OFFERINGS: pinned, scroll-driven */}
      <section
        id="offerings"
        className="offerings-sec"
        ref={offeringsRef}
        style={{ height: `${(offerings.length + 1) * 100}vh` }}
      >
        <div className="ofx-sticky">
          <div className="ofx-stage">
            <video
              ref={videoRef}
              key={current.video}
              className="ofx-video"
              src={current.video}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="ofx-shade" />

            {/* LEFT: details */}
            <div className="ofx-content" key={current.title}>
              <div className="ofx-main">
                <h3>{current.title}</h3>
                <p className="ofx-text">{current.text}</p>
                <ul className="ofx-points">
                  {current.points.map((p, i) => (
                    <li key={p} style={{ '--i': i } as CSSProperties}>
                      <span className="ofx-dot" />{p}
                    </li>
                  ))}
                </ul>
                <button className="ofx-more" onClick={() => setMoreOpen(true)}>
                  <span>Learn more</span><b aria-hidden>→</b>
                </button>
              </div>
            </div>

            {/* RIGHT: use cases over video */}
            {/* <div className="ofx-deck-wrap">
              <div className="ofx-deck" key={`deck-${activeOffering}`}>
                {current.cases.map(([metric, label, title, image, desc], i) => (
                  <article className="glass-case ofx-case" key={title} style={{ '--i': i } as CSSProperties}>
                    <div className="glass-thumb">
                      <Image src={`/images/${image}`} alt={title} fill sizes="110px" />
                    </div>
                    <div className="glass-body">
                      <span className="glass-tag">{title}</span>
                      <div className="metric"><CountUp value={metric} /></div>
                      <div className="glass-label">{label}</div>
                      <p>{desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div> */}

            {/* PAGER: progress + click to jump */}
            <div className="ofx-pager" role="group" aria-label="Choose offering">
              <button
                className="ofx-arrow"
                onClick={prevOffering}
                aria-label="Previous offering"
                disabled={activeOffering === 0}
              >↑</button>

              <div className="ofx-pills">
                {offerings.map((o, i) => (
                  <button
                    key={o.title}
                    className={`ofx-pill ${activeOffering === i ? 'active' : ''}`}
                    onClick={() => scrollToOffering(i)}
                    aria-label={o.title}
                    aria-current={activeOffering === i}
                  >
                    <span className="ofx-pill-num">0{i + 1}</span>
                    <span className="ofx-pill-text">{o.title}</span>
                  </button>
                ))}
              </div>

              <button
                className="ofx-arrow"
                onClick={nextOffering}
                aria-label="Next offering"
                disabled={activeOffering === offerings.length - 1}
              >↓</button>
            </div>

            <div className={`ofx-scrollhint ${activeOffering === 0 ? 'show' : ''}`} aria-hidden>
              <span>Scroll</span><i />
            </div>
          </div>
        </div>

        {/* MODAL */}
        {moreOpen && (
          <div className="ofx-modal" onClick={() => setMoreOpen(false)}>
            <div className="ofx-modal-box" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
              <button className="ofx-close" onClick={() => setMoreOpen(false)} aria-label="Close">×</button>
              <p className="eyebrow dark">0{activeOffering + 1} · OFFERING</p>
              <h3>{current.title}</h3>
              <p className="ofx-modal-intro">{current.more.intro}</p>

              <h4>What it does</h4>
              <ul>{current.more.does.map((d) => <li key={d}>{d}</li>)}</ul>

              <h4>Built for</h4>
              <div className="chips">{current.more.fits.map((f) => <span key={f}>{f}</span>)}</div>

              <a className="button" href="#contact" onClick={() => setMoreOpen(false)}>
                <span>Discuss this solution</span>
                <b aria-hidden>→</b>
              </a>
            </div>
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-dark">
        <div className="container">
          <Reveal>
            <p className="eyebrow">CONTACT</p>
            <h2 className="contact-title">
              Let&apos;s discuss your <span className="grad-light">requirements.</span>
            </h2>
            <p className="contact-sub">
              Get in touch to talk about a pilot, a site survey or a full deployment.
            </p>
          </Reveal>

          <Reveal>
            <div className="contact-wrap">
              <div className="contact-info">
                <a className="c-row" href={CONTACT.phoneHref}>
                  <span className="c-ico">{Icon.phone}</span>
                  <span><small>CALL US</small><strong>{CONTACT.phoneLabel}</strong></span>
                </a>

                <a className="c-row" href={`mailto:${CONTACT.email}`}>
                  <span className="c-ico">{Icon.mail}</span>
                  <span><small>EMAIL</small><strong>{CONTACT.email}</strong></span>
                </a>

                <a className="c-row" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                  <span className="c-ico">{Icon.instagram}</span>
                  <span><small>INSTAGRAM</small><strong>{CONTACT.instagramHandle}</strong></span>
                </a>

                <a className="c-row" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  <span className="c-ico">{Icon.linkedin}</span>
                  <span><small>LINKEDIN</small><strong>VEYAKSH</strong></span>
                </a>

                <div className="c-row c-static">
                  <span className="c-ico">{Icon.pin}</span>
                  <span><small>VISIT US</small><strong>{CONTACT.address}</strong></span>
                </div>

                <div className="c-actions">
                  <a className="button" href={CONTACT.phoneHref}>
                    <span>Call us</span><b aria-hidden>→</b>
                  </a>
                  <a className="button " href={`mailto:${CONTACT.email}`}>
                    <span>Send an email</span><b aria-hidden>→</b>
                  </a>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  src={CONTACT.mapSrc}
                  title="VEYAKSH location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>VEYAKSH · See. Sense. Understand.</span>
          <span>AI · IoT · Computer Vision · Edge Computing</span>
        </div>
      </footer>
    </main>
  );
}