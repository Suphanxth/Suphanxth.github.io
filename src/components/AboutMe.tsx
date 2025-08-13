import './AboutMe.css'

function AboutMe() {
  return (
    <div>
      <div className="about-me">
        <div className="about-me__header">
            <h2 style={{ fontSize: '32px', textDecoration: 'underline' }}>Suphanath Wangthip</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <div className="flex-space-between">
                    <span>
                        <a href="mailto:suphanath.wangtip@gmail.com">suphanath.wangtip@gmail.com</a>
                    </span>
                    <span>
                        <a href="tel:+66897014299">+66897014299</a>
                    </span>
                </div>
                <div className="flex-space-between">
                    <span>
                        <a href="https://www.linkedin.com/in/suphanath-wangtip-65a673293/" target="_blank" rel="noopener noreferrer">
                            Suphanath Wangtip (LinkedIn)
                        </a>
                    </span>
                    <span>
                        <a href="https://www.facebook.com/supanut.wangthip/" target="_blank" rel="noopener noreferrer">
                            Suphanath Wangtip (Facebook)
                        </a>
                    </span>
                </div>
            </div>
            <hr />
        </div>
        <div className="about-me__content">
            <div className='education'>
                <h2 style={{ fontSize: '32px', textDecoration: 'underline' }}>EDUCATION</h2>
                <div>
                    <div className="flex-space-between">
                        <strong>Computer Engineering Chiang Mai University</strong>
                        <strong>2021 - 2025</strong>
                    </div>
                    <div className="flex-space-between" style={{ fontSize: '14px' }}>
                        <div>Bachelor of Engineering</div>
                        <span>Chiang Mai</span>
                    </div>
                    <div style={{ textAlign: 'left', fontSize: '14px' }}>
                        <div>GPA: 3.14</div>
                    </div>
                </div>
                <div style={{ marginTop: '25px' }}>
                    <div className="flex-space-between">
                        <strong>Bunyawat Witthayalai School</strong>
                        <strong>2015 - 2021</strong>
                    </div>
                    <div className="flex-space-between" style={{ fontSize: '14px' }}>
                        <div>Secondary School</div>
                        <span>Lampang</span>
                    </div>
                </div>
                <hr/>
            </div>
            <div className='work-experience'>
                <h2 style={{ fontSize: '32px', textDecoration: 'underline' }}>WORK EXPERIENCE</h2>
                <div>
                    <div className="flex-space-between">
                        <strong>Network Engineer (Co-operative education internship)</strong>
                        <strong>May - Sep 2024</strong>
                    </div>
                    <div className="flex-space-between" style={{ fontSize: '14px' }}>
                        <div>Advanced Information Technology PCL.</div>
                        <span>Bangkok</span>
                    </div>
                    <div style={{marginTop: '10px', textAlign: 'left', fontSize: '14px' }}>
                        <li>Worked with SD-WAN systems and managed device setups using Dot1x for branch installations.</li>
                        <li>Performed factory resets, switch upgrades, ATP testing, and access point staging</li>
                        <li> Developed an <a href="/myproject/eoxcheck" target="_blank" rel="noopener noreferrer">EoX Check</a> web application (<strong>JavaScript, CSS, Node.js, Express</strong>) to automate manual device EoX status checks via <strong>Cisco APIs</strong></li>
                    </div>
                </div>
                <div>
                    <div className="flex-space-between" style={{ marginTop: '25px' }}>
                        <strong>Back-End Developer</strong>
                        <strong>Jun - Current</strong>
                    </div>
                    <div className="flex-space-between" style={{ fontSize: '14px' }}>
                        <div>TCC Technology</div>
                        <span>Bangkok</span>
                    </div>
                    <div style={{marginTop: '10px', textAlign: 'left', fontSize: '14px' }}>
                        <li>Coming Soon</li>
                    </div>
                </div>
                <hr/>
            </div>
            <div className='skills'>
                <h2 style={{ fontSize: '32px', textDecoration: 'underline' }}>SKILLS</h2>
                <div style={{ textAlign: 'left', fontSize: '14px' }}>
                    <li><strong>Programming Languages</strong>: JavaScript, Node.js, Express.js, Go (currently learning)</li>
                    <li><strong>Web Development</strong>: HTML, CSS, React.js, Node.js, Express.js, TypeScript, Flask</li>
                    <li><strong>Database Management</strong>: Postgresql, MySQL</li>
                    <li><strong>Tools</strong>: Linux, Ubuntu, Docker, Git, Ansible</li>
                    <li><strong>Other</strong>: Network</li>
                </div>
                <hr/>
            </div>
            <div>
                <div className='soft-interest'>
                    <div>
                        <h2 style={{ fontSize: '32px', textDecoration: 'underline' }}>SOFT SKILLS</h2>
                        <div className='soft-skill'>
                            <ul>
                                <li>Friendliness</li>
                                <li>Adaptability</li>
                                <li>Communication</li>
                                <li>Teamwork</li>
                                <li>Respect & Support</li>
                                <li>Empathetic listening</li>
                                <li>Problem-solving</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '32px', textDecoration: 'underline' }}>INTERESTED IN</h2>
                        <div className='interestin'>
                            <ul>
                                <li>Back-End Developer</li>
                                <li>Full Stack Developer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            {/* <div className='hobby'>
                <h2 style={{ fontSize: '32px', textDecoration: 'underline' }}>HOBBY</h2>
                <div style={{ textAlign: 'left', fontSize: '14px' }}>
                    <li><strong>Listening to music</strong></li>
                    <li><strong>Running</strong></li>
                </div>
                <hr/>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;