import React, { useEffect, useState } from 'react';

export default function Home({ openLightbox }) {
  const [repoCount, setRepoCount] = useState('18');
  const [followerCount, setFollowerCount] = useState('7');
  const [latestCommit, setLatestCommit] = useState({
    repo: 'LeetCode_Problems',
    message: 'Latest push',
    visible: true
  });

  useEffect(() => {
    const USERNAME = 'Bharath-B100';
    
    // Fetch GitHub User Info
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('GitHub API error');
      })
      .then(user => {
        if (user.public_repos !== undefined) setRepoCount(user.public_repos);
        if (user.followers !== undefined) setFollowerCount(user.followers);
      })
      .catch(err => {
        console.warn('GitHub User API fallback:', err);
      });

    // Fetch GitHub Recent Events / Commits
    fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=10`)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('GitHub Events error');
      })
      .then(events => {
        const pushEvent = events.find(e => e.type === 'PushEvent');
        if (pushEvent) {
          const repoName = pushEvent.repo.name.replace(`${USERNAME}/`, '');
          const commitMsg = pushEvent.payload.commits?.[pushEvent.payload.commits.length - 1]?.message || 'Latest push';
          setLatestCommit({
            repo: repoName,
            message: commitMsg,
            visible: true
          });
        }
      })
      .catch(err => {
        console.warn('GitHub Events fallback:', err);
      });
  }, []);

  return (
    <section id="home" className="hero">
        <div id="particles-js"></div>
        <div className="container hero-container">
            <div className="hero-text">
                <h4>Hello, I'm</h4>
                <h1 className="glitch-text" data-text="BHARATH RAJ B">BHARATH RAJ B</h1>
                <h2 id="typing-text">CSBS Student & Full-Stack Developer</h2>
                <p>Passionate about creating scalable cloud-ready applications, working with REST APIs, and
                    collaborating in Agile environments.</p>
                <div className="hero-btns">
                    <a href="#projects" className="btn-track"><span className="btn primary-btn">View My Work</span></a>
                    <a href="#contact" className="btn-track"><span className="btn secondary-btn">Contact Me</span></a>
                </div>
                <div className="resume-download">
                    <a href="javascript:void(0)" className="btn-track" id="viewResumeBtn" onClick={(e) => { e.preventDefault(); openLightbox({ image1: '/assets/images/Resume_page1.png', image2: '/assets/images/Resume_page2.png', isResume: true }); }}>
                        <span className="btn download-btn"><i className="fas fa-eye"></i> View Resume</span>
                    </a>
                </div>
                <div className="github-stats" id="githubStats" onClick={() => openLightbox({ image1: "https://streak-stats.demolab.com?user=Bharath-B100&hide_border=true&theme=default", image2: "https://ghchart.rshah.org/Bharath-B100", isGitHub: true, filter: (document.body.classList.contains("dark-mode") || !document.body.classList.contains("colorful-mode") && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "grayscale(100%)" : "none" })} style={{ cursor: 'pointer' }}>
                    <div className="stat-item">
                        <i className="fab fa-github"></i>
                        <div>
                            <h4 id="repoCount">{repoCount}</h4>
                            <p>Repositories</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <i className="fas fa-users"></i>
                        <div>
                            <h4 id="followerCount">{followerCount}</h4>
                            <p>Followers</p>
                        </div>
                    </div>
                    <div className="stat-item" id="latestCommitStat" style={{display: latestCommit.visible ? "flex" : "none"}}>
                        <i className="fas fa-code-commit" style={{fontSize: "1.6rem"}}></i>
                        <div>
                            <h4 id="latestCommitRepo" style={{fontSize: "0.9rem", fontWeight: "600"}}>{latestCommit.repo}</h4>
                            <p id="latestCommitMsg"
                                style={{fontSize: "0.78rem", maxWidth: "160px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                                {latestCommit.message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <div className="image-wrapper">
                    <img src="/assets/images/Bharath-PencilArt.png" alt="Bharath Raj" id="profileImage" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                </div>
                <div className="achievement-badges">
                    <span className="badge" data-tooltip="LeetCode 500+ Problems">
                        <i className="fas fa-code"></i>
                    </span>
                    <span className="badge" data-tooltip="Vishwakarma Top 6">
                        <i className="fas fa-trophy"></i>
                    </span>
                    <span className="badge" data-tooltip="UI/UX Intern">
                        <i className="fas fa-palette"></i>
                    </span>
                </div>
            </div>
        </div>
    </section>
  );
}
