import React, { useState } from 'react';
import "./header.css";


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='header'>
            <nav className='navbar'>
                <a href="index.html" className='brand'>HanHtet</a>
                <button className="subscribe d-sm-block-only">Subscribe</button>
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item active">
                            <a href="#" className="nav_link">
                                <i className="uil uil-estate nav_icon"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-info nav_icon"></i>
                                <span>About</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-bolt nav_icon"></i>
                                <span>Skills</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-book nav_icon"></i>
                                <span>Education</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-bag nav_icon"></i>
                                <span>Work</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-chart-line nav_icon"></i>
                                <span>Experience</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-comment-alt-heart nav_icon"></i>
                                <span>Contact Me</span>
                            </a>
                        </li>
                    </ul>
                    <button className="subscribe button">Subscribe</button>
                </div>
                <button className="toggle" onClick={() => { open ? setOpen(false) : setOpen(true) }}>
                    <i className="uil uil-bars nav_icon"></i>
                </button>
            </nav>

            {open && (
                <div className="mobile_nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item active">
                            <a href="#" className="nav_link">
                                <i className="uil uil-estate nav_icon"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-info nav_icon"></i>
                                <span>About</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-bolt nav_icon"></i>
                                <span>Skills</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-book nav_icon"></i>
                                <span>Education</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-bag nav_icon"></i>
                                <span>Work</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-chart-line nav_icon"></i>
                                <span>Experience</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                <i className="uil uil-comment-alt-heart nav_icon"></i>
                                <span>Contact Me</span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header;