import { useState, useEffect, useRef } from 'react';

const Skills = () => {
    const [animated, setAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.disconnect();
            }
        };
    }, []);

    const skillCategories = [
        {
            title: 'Technical Skills',
            icon: 'fas fa-laptop-code',
            items: [
                { name: 'HTML', level: '90%' },
                { name: 'CSS', level: '85%' },
                { name: 'JavaScript', level: '80%' },
                { name: 'React.js', level: '80%' },
                { name: 'MySQL', level: '80%' },
                { name: 'UI/UX Design', level: '85%' }
            ]
        },
        {
            title: 'Tools & Technologies',
            icon: 'fas fa-tools',
            items: [
                { name: 'RESTful APIs', level: '85%' },
                { name: 'GitHub', level: '70%' },
                { name: 'n8n', level: '60%' },
                { name: 'Antigravity AI', level: '80%' },
                { name: 'Claude', level: '85%' },
                { name: 'ChatGPT', level: '85%' }
            ]
        },
        {
            title: 'Soft Skills',
            icon: 'fas fa-brain',
            items: [
                { name: 'Communication', level: '90%' },
                { name: 'Time Management', level: '85%' },
                { name: 'Problem Solving & Critical Thinking', level: '85%' }
            ]
        }
    ];

    return (
        <section id="skills" className="skills" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">My <span>Skills</span></h2>
                <div className="skills-grid">
                    {skillCategories.map((cat, idx) => (
                        <div className="skill-card" key={idx}>
                            <div className="skill-header">
                                <i className={cat.icon}></i>
                                <h3>{cat.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {cat.items.map((skill, sIdx) => (
                                    <li key={sIdx}>
                                        <span>{skill.name}</span>
                                        <div className="skill-progress">
                                            <div 
                                                className="progress-bar" 
                                                style={{ width: animated ? skill.level : '0%' }}
                                            ></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
