import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__me">
                    <img src="/src/assets/Mypic.PNG" alt="My Picture" className="navbar__avatar" />
                    <span className="navbar__name">Suphanath Wangtip</span>
                </Link>
                <div className="navbar__aboutme">
                    <Link to="/resume" className="navbar__link">Resume</Link>
                    <Link to="/myproject" className="navbar__link">My Project</Link>
                </div>
                <div className="navbar__socials">
                    <a href="https://www.linkedin.com/in/suphanath-wangtip-65a673293/" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
                        <img src="/src/assets/LinkedIn_icon.png" alt="LinkedIn" className="navbar__social-icon" />
                    </a>
                    <a href="https://www.facebook.com/supanut.wangthip/" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="navbar__social-icon" />
                    </a>
                    <a href="mailto:suphanath.wangtip@gmail.com" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
                        <img src="/src/assets/gmail.png" alt="Gmail" className="navbar__social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
