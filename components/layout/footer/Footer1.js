import Link from "next/link"
import CookieSettings from "@/components/CookieSettings"

export default function Footer1() {
    return (
        <>
           
           <footer className="site-footer">
            <div className="site-footer__newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__newsletter-inner">
                                <div className="site-footer__newsletter-left">
                                    <div className="site-footer__newsletter-title-box">
                                        <h3 className="site-footer__newsletter-title">Subscribe Our Newsletters</h3>
                                    </div>
                                </div>
                                <div className="site-footer__newsletter-right">
                                    <div className="site-footer__newsletter-content">
                                        <form className="site-footer__newsletter-form">
                                            <div className="site-footer__newsletter-input">
                                                <input type="text" placeholder="Enter Your Email"/>
                                            </div>
                                            <button type="submit"
                                                className="thm-btn site-footer__newsletter-btn">Subscribe<span><i
                                                        className="icon-arrow-right"></i></span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__about">
                                    <div className="footer-widget__about-logo">
                                        <Link href="/"><img src="assets/images/resources/logo-footer-bright.svg" alt="ThriveHer Logo"/></Link>
                                    </div>
                                    <p className="footer-widget__about-text">We're based in London but serve women, communities, and organisations worldwide through online education, culturally sensitive programmes, and strategic partnerships.</p>
                                    <div className="site-footer__social">
                                        <span style={{cursor: 'default'}}><i className="icon-facebook"></i></span>
                                        <span style={{cursor: 'default'}}><i className="icon-instagram"></i></span>
                                        <span style={{cursor: 'default'}}><i className="icon-linkedin"></i></span>
                                        <span style={{cursor: 'default'}}><i className="icon-youtube"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__services">
                                    <h4 className="footer-widget__title">Services</h4>
                                    <ul className="footer-widget__services-list list-unstyled">
                                        <li><span style={{backgroundColor: '#21273F', color: '#21273F', padding: '2px 4px'}}>████████████</span></li>
                                        <li><span style={{backgroundColor: '#21273F', color: '#21273F', padding: '2px 4px'}}>█████████████████</span></li>
                                        <li><span style={{backgroundColor: '#21273F', color: '#21273F', padding: '2px 4px'}}>██████████████</span></li>
                                        <li><span style={{backgroundColor: '#21273F', color: '#21273F', padding: '2px 4px'}}>████████████</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__links">
                                    <h4 className="footer-widget__title">Links</h4>
                                    <ul className="footer-widget__services-list list-unstyled">
                                        <li><span style={{backgroundColor: '#21273F', color: '#21273F', padding: '2px 4px'}}>███████████████</span></li>
                                        <li><span style={{backgroundColor: '#21273F', color: '#21273F', padding: '2px 4px'}}>█████████████████</span></li>
                                        <li><span style={{backgroundColor: '#21273F', color: '#21273F', padding: '2px 4px'}}>████████████</span></li>
                                        <li><span style={{backgroundColor: '#21273F', color: '#21273F', padding: '2px 4px'}}>████████████████</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__contact">
                                    <h3 className="footer-widget__title">Contact Info</h3>
                                    <ul className="footer-widget__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <p><span style={{cursor: 'default'}}>+44 7459 110397</span></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <p><span style={{cursor: 'default'}}>info@thriveher.clinic</span></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <p>ThriveHer Ltd<br/>Kemp House, 152–160 City Road<br/>London, EC1V 2NX, United Kingdom</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <div className="site-footer__copyright">
                                    <p className="site-footer__copyright-text">Copyright 2024 by <span style={{cursor: 'default'}}>ThriveHer Ltd</span>.
                                        All
                                        Rights Reserved.</p>
                                </div>
                                <div className="site-footer__bottom-menu-box">
                                    <ul className="list-unstyled site-footer__bottom-menu">
                                        <li><span style={{cursor: 'default'}}>Privacy Policy</span></li>
                                        <li><span style={{cursor: 'default'}}>Terms of Service</span></li>
                                        <li><span style={{cursor: 'default'}}>Cookie Settings</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
        </>
    )
}
