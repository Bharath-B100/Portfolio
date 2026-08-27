import React from 'react';

export default function Skills({ openLightbox }) {
  return (
    <section id="skills" className="section dark-section" style={{position: "relative", overflow: "hidden", minHeight: "80vh", display: "flex", alignItems: "center"}}>
        <canvas id="particleCanvas"></canvas>
        <div className="container" style={{position: "relative", zIndex: "2", width: "100%"}}>
            <h2 className="section-title">Skills</h2>
            <div className="tree-wrapper">
                <div className="tree-shake-wrapper" style={{position: "relative", width: "100%", height: "100%"}}>
                    <img src="/assets/images/skill-tree-exact.png" alt="Skill Tree" className="skill-tree-img" />
                    <div className="icon-container hotspot liquid-btn" style={{left: "35%", top: "22%"}} data-category="design" onClick={(e) => window.toggleSkills && window.toggleSkills(e.currentTarget.getAttribute("data-category"))}>
                        <i className="fas fa-tools"></i>
                        <div className="tooltip"><h4>Tools & Design</h4></div>
                    </div>
                    <div className="icon-container hotspot liquid-btn" style={{left: "28%", top: "36%"}} data-category="languages" onClick={(e) => window.toggleSkills && window.toggleSkills(e.currentTarget.getAttribute("data-category"))}>
                        <i className="fas fa-code"></i>
                        <div className="tooltip"><h4>Languages</h4></div>
                    </div>
                    <div className="icon-container hotspot liquid-btn" style={{left: "35%", top: "48%"}} data-category="frontend" onClick={(e) => window.toggleSkills && window.toggleSkills(e.currentTarget.getAttribute("data-category"))}>
                        <i className="fas fa-paint-brush"></i>
                        <div className="tooltip"><h4>Frontend</h4></div>
                    </div>
                    <div className="icon-container hotspot liquid-btn" style={{left: "65%", top: "22%"}} data-category="architecture" onClick={(e) => window.toggleSkills && window.toggleSkills(e.currentTarget.getAttribute("data-category"))}>
                        <i className="fas fa-sitemap"></i>
                        <div className="tooltip"><h4>Architecture</h4></div>
                    </div>
                    <div className="icon-container hotspot liquid-btn" style={{left: "72%", top: "36%"}} data-category="backend" onClick={(e) => window.toggleSkills && window.toggleSkills(e.currentTarget.getAttribute("data-category"))}>
                        <i className="fas fa-server"></i>
                        <div className="tooltip"><h4>Backend</h4></div>
                    </div>
                    <div className="icon-container hotspot liquid-btn" style={{left: "65%", top: "48%"}} data-category="databases" onClick={(e) => window.toggleSkills && window.toggleSkills(e.currentTarget.getAttribute("data-category"))}>
                        <i className="fas fa-database"></i>
                        <div className="tooltip"><h4>Databases</h4></div>
                    </div>
                    <div className="skill-node design" style={{left: "20%", top: "5%", '--delay': 1}}>Git</div>
                    <div className="skill-node design" style={{left: "32%", top: "2%", '--delay': 2}}>GitHub</div>
                    <div className="skill-node design" style={{left: "45%", top: "6%", '--delay': 3}}>Figma</div>
                    <div className="skill-node design" style={{left: "14%", top: "15%", '--delay': 4}}>Canva</div>
                    <div className="skill-node design" style={{left: "23%", top: "12%", '--delay': 5}}>Agile</div>
                    <div className="skill-node languages" style={{left: "10%", top: "25%", '--delay': 1}}>C</div>
                    <div className="skill-node languages" style={{left: "20%", top: "22%", '--delay': 2}}>Java</div>
                    <div className="skill-node languages" style={{left: "4%", top: "35%", '--delay': 3}}>JavaScript</div>
                    <div className="skill-node languages" style={{left: "14%", top: "38%", '--delay': 4}}>Python</div>
                    <div className="skill-node frontend" style={{left: "6%", top: "47%", '--delay': 1}}>Bootstrap</div>
                    <div className="skill-node frontend" style={{left: "16%", top: "51%", '--delay': 2}}>CSS</div>
                    <div className="skill-node frontend" style={{left: "9%", top: "60%", '--delay': 3}}>HTML</div>
                    <div className="skill-node frontend" style={{left: "22%", top: "59%", '--delay': 4}}>React.js</div>
                    <div className="skill-node architecture" style={{left: "55%", top: "2%", '--delay': 1}}>REST API</div>
                    <div className="skill-node architecture" style={{left: "68%", top: "5%", '--delay': 2}}>RBAC</div>
                    <div className="skill-node architecture" style={{left: "82%", top: "12%", '--delay': 3}}>JWT</div>
                    <div className="skill-node backend" style={{left: "80%", top: "26%", '--delay': 1}}>Express.js</div>
                    <div className="skill-node backend" style={{left: "92%", top: "34%", '--delay': 2}}>Flask</div>
                    <div className="skill-node backend" style={{left: "83%", top: "45%", '--delay': 3}}>Node.js</div>
                    <div className="skill-node databases" style={{left: "78%", top: "48%", '--delay': 1}}>MongoDB</div>
                    <div className="skill-node databases" style={{left: "90%", top: "48%", '--delay': 2}}>PostgreSQL</div>
                    <div className="skill-node databases" style={{left: "79%", top: "58%", '--delay': 3}}>Supabase</div>
                </div>
            </div>
        </div>
    </section>
  );
}
