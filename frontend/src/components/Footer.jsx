const Footer = () => {
    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="glass-footer-ultimate">
            <div className="gf-ultimate-content">
                {/* Column 1: About */}
                <div className="gf-ultimate-col gf-footer-about">
                    <h2 className="footer-logo-gradient">Ayush Trikmani</h2>
                    <p className="footer-tagline">
                        MERN Stack Developer & Computer Engineering Graduate. Specialized in building secure, high-performance web applications and automated AI workflows.
                    </p>
                    <div className="status-badge-container">
                        <span className="status-pulse-dot"></span>
                        <span className="status-badge-text">Available for full-time roles & projects</span>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="gf-ultimate-col gf-footer-nav">
                    <h3>Explore</h3>
                    <ul className="footer-links-grid">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#certifications">Certifications</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact & Top */}
                <div className="gf-ultimate-col gf-footer-contact">
                    <h3>Get In Touch</h3>
                    <a href="mailto:ayushtrikmani124@gmail.com" className="footer-contact-link">
                        <i className="fas fa-envelope"></i> ayushtrikmani124@gmail.com
                    </a>
                    <a href="tel:+916352243970" className="footer-contact-link">
                        <i className="fas fa-phone"></i> +91 6352243970
                    </a>
                    
                    <div className="footer-social-wrapper">
                        <div className="gf-ultimate-socials">
                            <a href="https://www.instagram.com/ayush_trikmani110/" target="_blank" aria-label="Instagram" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://github.com/AyushTrikmani" target="_blank" aria-label="GitHub" rel="noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/ayush-trikmani/" target="_blank" aria-label="LinkedIn" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                        
                        <a href="#home" onClick={handleScrollToTop} className="back-to-top-btn" aria-label="Scroll to top">
                            <i className="fas fa-chevron-up"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="gf-ultimate-divider"></div>
            
            <div className="gf-ultimate-bottom">
                <p>&copy; {new Date().getFullYear()} Ayush Trikmani. All Rights Reserved.</p>
                <p className="footer-signature">Designed & Crafted with <i className="fas fa-heart footer-heart"></i></p>
            </div>
        </footer>
    );
};

export default Footer;
