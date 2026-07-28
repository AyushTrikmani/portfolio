const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Work <span>Experience</span></h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">November 2025 – April 2026</div>
                        <div className="timeline-content">
                            <h3>React.js Developer Intern</h3>
                            <h4>Krupa Info Services</h4>
                            <ul>
                                <li>Developed React.js-based web applications and responsive UI layouts for client projects.</li>
                                <li>Implemented RESTful APIs using Node.js and Express.js as part of an offline, on-site internship.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">June 2025 – July 2025</div>
                        <div className="timeline-content">
                            <h3>Web Development Intern</h3>
                            <h4>Tamizhan Skills</h4>
                            <ul>
                                <li>Completed a one-month internship covering web development fundamentals, building responsive web pages using HTML, CSS, and JavaScript.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
