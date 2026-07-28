import { useState, useEffect, useRef } from 'react';

const TERMINAL_LINES = [
    { prompt: '~', cmd: 'node solve.js --domain job-portals healthcare ai', delay: 0 },
    { prompt: '~', cmd: null, output: '✓ Built UpYourJob — role-based job board + AI mock interviews', delay: 900 },
    { prompt: '~', cmd: null, output: '✓ Built Swasthya — pharmacy & lab test booking platform', delay: 1800 },
    { prompt: '~', cmd: null, output: '✓ Running ceramic tile defect detection with TensorFlow…', delay: 2700 },
];

const TAGLINE = 'I build full-stack products that solve real workflow problems.';

const Hero = () => {
    const prefersReduced = useRef(
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    // --- subtle one-phrase typewriter for tagline ---
    const [displayed, setDisplayed] = useState(prefersReduced.current ? TAGLINE : '');
    const [typeDone, setTypeDone] = useState(prefersReduced.current);
    const timerRef = useRef(null);

    useEffect(() => {
        if (prefersReduced.current) return;
        let i = 0;
        const speed = 38; // slower = subtler
        const type = () => {
            if (i <= TAGLINE.length) {
                setDisplayed(TAGLINE.slice(0, i));
                i++;
                timerRef.current = setTimeout(type, speed);
            } else {
                setTypeDone(true);
            }
        };
        // slight entrance delay so page settles first
        timerRef.current = setTimeout(type, 600);
        return () => clearTimeout(timerRef.current);
    }, []);

    // --- terminal animation ---
    const [visibleLines, setVisibleLines] = useState(prefersReduced.current ? TERMINAL_LINES.length : 0);

    useEffect(() => {
        if (prefersReduced.current) return;
        TERMINAL_LINES.forEach((line, i) => {
            setTimeout(() => setVisibleLines(i + 1), line.delay + 300);
        });
    }, []);

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    {/* LEFT: text */}
                    <div className="hero-text hero-text--animate">
                        <p className="hero-eyebrow">Ayush Trikmani · Full-Stack Developer</p>

                        <h1 className="hero-headline">
                            {displayed}
                            {!typeDone && (
                                <span className="hero-cursor" aria-hidden="true">|</span>
                            )}
                        </h1>

                        <p className="hero-sub">
                            MERN stack + Python microservices · job portals · healthcare booking · AI-assisted tooling.
                            Recently completed a B.E. in Computer Engineering (AIT, 2026).
                        </p>

                        {/* lower-priority actions */}
                        <div className="hero-actions">
                            <div className="social-icons">
                                <a href="mailto:ayushtrikmani124@gmail.com" aria-label="Email">
                                    <i className="fas fa-envelope"></i>
                                </a>
                                <a href="https://github.com/AyushTrikmani" target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/ayush-trikmani/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/ayush_trikmani110/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="tel:+916352243970" aria-label="Phone">
                                    <i className="fas fa-phone"></i>
                                </a>
                            </div>
                            <a
                                href="/Ayush_Trikmani_Resume.pdf"
                                className="btn hero-resume-btn"
                                download="Ayush_Trikmani_Resume.pdf"
                            >
                                Resume <i className="fas fa-arrow-down" style={{ marginLeft: '0.6rem', fontSize: '1.3rem' }}></i>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: terminal widget */}
                    <div className="hero-terminal" aria-label="Project highlights terminal">
                        <div className="terminal-bar">
                            <span className="t-dot t-dot--red"></span>
                            <span className="t-dot t-dot--yellow"></span>
                            <span className="t-dot t-dot--green"></span>
                            <span className="terminal-title">projects.sh</span>
                        </div>
                        <div className="terminal-body">
                            {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                                <div key={i} className="terminal-line">
                                    {line.cmd !== null ? (
                                        <>
                                            <span className="t-prompt">{line.prompt} $</span>
                                            <span className="t-cmd">{line.cmd}</span>
                                        </>
                                    ) : (
                                        <span className="t-output">{line.output}</span>
                                    )}
                                </div>
                            ))}
                            {/* blinking caret at bottom */}
                            {visibleLines >= TERMINAL_LINES.length && (
                                <div className="terminal-line">
                                    <span className="t-prompt">~ $</span>
                                    <span className="t-caret" aria-hidden="true">▌</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
