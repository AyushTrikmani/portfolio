document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Header on Scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Typewriter Effect
    const typewriterElement = document.querySelector('.typewriter');
    const professions = ['Web Developer', 'UI/UX Designer', 'AI Enthusiast', 'Software Engineer'];
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeWriter() {
        const currentProfession = professions[professionIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentProfession.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    // Start the typewriter effect
    setTimeout(typeWriter, 1000);
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Intersection Observer for skill bars animation
    const skillsSection = document.querySelector('.skills');
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    observer.observe(skillsSection);
    
    // Download Resume Button
    const downloadBtn = document.querySelector('.download-btn');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real scenario, you would link to your actual resume PDF
        alert('Resume download would start here. Replace with actual PDF link.');
        // window.location.href = 'path/to/resume.pdf';
    });
    
    // Form submission
    document.querySelector('.contact-form').addEventListener('submit', async function(e) {
      e.preventDefault();

      const name = this.querySelector('input[placeholder="Your Name"]').value;
      const email = this.querySelector('input[placeholder="Your Email"]').value;
      const subject = this.querySelector('input[placeholder="Subject"]').value;
      const message = this.querySelector('textarea[placeholder="Your Message"]').value;

      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        });

        const result = await response.json();
        alert(result.message);
        if (result.success) this.reset();
      } catch (error) {
        alert('Failed to send message. Please try again later.');
      }
    });
    
    // Scroll reveal animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 2000,
        reset: true
    });
    
    sr.reveal('.hero-text, .hero-image, .section-title, .about-image, .about-text, .skills-text, .skills-grid, .projects-grid, .contact-info, .contact-form', {
        interval: 200
    });
});