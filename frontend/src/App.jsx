import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JobPortalDetails from './components/JobPortalDetails';

function App() {
    const [theme, setTheme] = useState('dark');
    const [view, setView] = useState('portfolio'); // 'portfolio' or 'job-portal'

    // Theme initialization
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    };

    // ScrollReveal initialization
    useEffect(() => {
        if (view === 'portfolio' && window.ScrollReveal) {
            const sr = window.ScrollReveal({
                origin: 'top',
                distance: '30px',
                duration: 2000,
                reset: true
            });
            
            sr.reveal('.hero-text, .hero-image, .section-title, .about-image, .about-text, .skill-card, .timeline-item, .cert-card, .project-card, .info-item, .contact-form', {
                interval: 150
            });
        }
        
        // Sticky Header scroll handler
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                header.classList.toggle('sticky', window.scrollY > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [view]);

    return (
        <>
            {view === 'portfolio' ? (
                <>
                    <Navbar theme={theme} toggleTheme={toggleTheme} />
                    <main>
                        <Hero />
                        <About />
                        <Experience />
                        <Skills />
                        <Projects onViewDetails={() => setView('job-portal')} />
                        <Certifications />
                        <Contact />
                    </main>
                    <Footer />
                </>
            ) : (
                <main>
                    <JobPortalDetails onBack={() => { setView('portfolio'); }} />
                </main>
            )}
            <Analytics />
        </>
    );
}

export default App;
