import React from 'react'
import Mblogo from '../assets/f-logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="f-inner container">
                <div className="f-up">
                    <div className="about">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, br consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <p><span>Email :</span>info@jstemplate.net</p>
                        <p><span>Phone :</span>880 123 456 789</p>
                    </div>
                    <div className="quick-cat">
                        <div className="quick">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="#" target='blank'>Home</a></li>
                                <li><a href="#" target='blank'>About</a></li>
                                <li><a href="#" target='blank'>Blog</a></li>
                                <li><a href="#" target='blank'>Archived</a></li>
                                <li><a href="#" target='blank'>Author</a></li>
                                <li><a href="#" target='blank'>Contact</a></li>
                            </ul>
                        </div>
                        <div className="category">
                            <h2 className='m-heading'>Category</h2>
                            <ul>
                                <li><a href="#" target='blank'>Lifestyle</a></li>
                                <li><a href="#" target='blank'>Technology</a></li>
                                <li><a href="#" target='blank'>Travel</a></li>
                                <li><a href="#" target='blank'>Business</a></li>
                                <li><a href="#" target='blank'>Economy</a></li>
                                <li><a href="#" target='blank'>Sports</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="weekly">
                        <div className="weekly-content">
                            <h2>Weekly News Letter</h2>
                            <p>Get blog articles and offers via email</p>
                            <input type="text" placeholder='Your Email' />
                            <br />
                            <button className='btn-sub'>Subscribe</button>

                        </div>
                    </div>
                </div>
                <div className="f-down">
                    <div className="logo-content">
                        <div className="f-logo">
                            <img src={Mblogo} alt="" />
                        </div>
                        <div className="f-content">
                            <h2>Meta <span>Blog</span></h2>
                            <p>© JS Template 2023. All Rights Reserved.</p>
                        </div>
                    </div>

                    <div className="links">
                        <ul>
                            <li><a href="#" target='blank'>Terms of Use</a></li>
                            <li><a href="#" target='blank'>Privacy Policy</a></li>
                            <li><a href="#" target='blank'>Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer