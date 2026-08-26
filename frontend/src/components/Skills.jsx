import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Technical Skills',
            icon: 'fas fa-laptop-code',
            skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'React.js', 'MySQL', 'UI/UX Design']
        },
        {
            title: 'Tools & Technologies',
            icon: 'fas fa-tools',
            skills: ['RESTful APIs', 'Git', 'GitHub', 'n8n', 'RAG']
        },
        {
            title: 'Soft Skills',
            icon: 'fas fa-brain',
            skills: ['Communication', 'Time Management', 'Problem Solving & Critical Thinking']
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">My <span>Skills</span></h2>
                <div className="skills-grid">
                    {skillCategories.map((cat, idx) => (
                        <div className="skill-card" key={idx}>
                            <div className="skill-header">
                                <i className={cat.icon} aria-hidden="true"></i>
                                <h3>{cat.title}</h3>
                            </div>
                            <div className="skills-list-badges">
                                {cat.skills.map((skill, sIdx) => (
                                    <span className="skill-badge" key={sIdx}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
