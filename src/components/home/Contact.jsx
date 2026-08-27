import React from 'react';

export default function Contact({ openLightbox }) {
  return (
    <section id="contact" className="section">
        <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's Connect!</h3>
                    <p>I'm always open to discussing new opportunities, collaborations, or just having a friendly chat
                        about technology.</p>
                    <div className="contact-details">
                        <p><img src="/assets/images/Gif/icons8-phone.gif" alt="Phone" style={{width: "18px", height: "18px", verticalAlign: "middle", marginRight: "6px", filter: "none"}} /> <a href="tel:+919943935576" style={{color: "inherit", textDecoration: "none"}}>+91 9943935576</a></p>
                        <p><img src="/assets/images/Gif/icons8-mail.gif" alt="Mail" style={{width: "18px", height: "18px", verticalAlign: "middle", marginRight: "6px", filter: "none"}} /> <a href="mailto:bharathrajmurali1010@gmail.com" style={{color: "inherit", textDecoration: "none"}}>bharathrajmurali1010@gmail.com</a></p>
                        <div className="contact-social">
                            <a href="https://www.linkedin.com/in/bharath-raj143/" target="_blank"
                                className="social-icon">
                                <img src="/assets/images/Gif/icons8-linkedin.gif"
                                    alt="LinkedIn" className="social-logo-img" loading="lazy" style={{filter: "none"}} />
                            </a>
                            <a href="https://github.com/Bharath-B100" target="_blank" className="social-icon">
                                <img src="/assets/images/Gif/icons8-github.gif"
                                    alt="GitHub" className="social-logo-img" loading="lazy" style={{filter: "none"}} />
                            </a>
                            <a href="https://leetcode.com/u/Bharath_Raj_B/" target="_blank" className="social-icon " onClick={(e) => { e.preventDefault(); openLightbox({ image1: "https://leetcard.jacoblin.cool/Bharath_Raj_B?theme=light&font=Playfair%20Display&ext=heatmap", isLeetCode: true }); }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                    alt="LeetCode" className="social-logo-img" loading="lazy" />
                            </a>
                            <a href="https://www.hackerrank.com/profile/ngtbharath" target="_blank" className="social-icon">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
                                    alt="HackerRank" className="social-logo-img" style={{filter: "grayscale(100%)"}} loading="lazy" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Send Me a Message</h3>
                    <form id="contactForm" action="https://formspree.io/f/mzznjkln" method="POST">
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" rows="5" placeholder="Your Message"
                                required></textarea>
                        </div>
                        <span className="btn-track"><button type="submit" className="btn primary-btn">Send
                                Message</button></span>
                        <div id="formStatus" className="form-status"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}
