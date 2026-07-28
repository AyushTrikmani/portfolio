const Certifications = () => {
    const certsList = [
        {
            title: 'Intel® AI for Manufacturing',
            org: 'Intel India & GTU',
            date: 'Feb 2025 – July 2025',
            desc: 'Hands-on training in AI, computer vision, and predictive maintenance for manufacturing applications.',
            icon: 'fas fa-award'
        },
        {
            title: 'Code Unnati Program',
            org: 'Edunet Foundation',
            date: 'Sep 2024 – Apr 2025',
            desc: 'Covered emerging technologies including Machine Learning, Internet of Things (IoT), and Deep Learning.',
            icon: 'fas fa-graduation-cap'
        }
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <h2 className="section-title">My <span>Certifications</span></h2>
                <div className="certifications-grid">
                    {certsList.map((cert, idx) => (
                        <div className="cert-card" key={idx}>
                            <div className="cert-icon">
                                <i className={cert.icon}></i>
                            </div>
                            <h3>{cert.title}</h3>
                            <h4>{cert.org}</h4>
                            <p className="cert-date">{cert.date}</p>
                            <p className="cert-desc">{cert.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
