const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About <span>Me</span></h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src="/myface.png" alt="Ayush Trikmani" />
                    </div>
                    <div className="about-text">
                        <h3>MERN Stack Developer & Computer Engineer</h3>
                        <p>I am a Computer Engineering graduate and a MERN Stack Developer. I am passionate about building full-stack web applications, designing RESTful APIs, and crafting responsive UI/UX. I am comfortable across the entire stack, from building interactive React front ends to setting up Node/Express back ends and managing relational or non-relational databases.</p>
                        
                        <div className="education">
                            <h4>Education</h4>
                            <div className="edu-item">
                                <h5>B.E. Computer Engineering</h5>
                                <p>Ahmedabad Institute of Technology | 2022 - 2026</p>
                                <p>CGPA: 7.49</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
