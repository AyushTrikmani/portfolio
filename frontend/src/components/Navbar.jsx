import { useState } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLinkClick = () => {
        setMobileOpen(false);
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <a href="#home" className="logo">Ayush Trikmani<span>.</span></a>
                    <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
                        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
                        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                        <li><a href="#certifications" onClick={handleLinkClick}>Certifications</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                    <div className="nav-actions">
                        <div className="theme-toggle" id="theme-toggle-btn" onClick={toggleTheme} title="Toggle Theme">
                            <i className={theme === 'light' ? 'fas fa-sun' : 'fas fa-moon'}></i>
                        </div>
                        <div className={`hamburger ${mobileOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
