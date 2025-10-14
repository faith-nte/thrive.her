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
                                        <Link href="https://www.facebook.com/share/177a8NJdki/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></Link>
                                        <Link href="https://www.instagram.com/thriveher.clinic/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></Link>
                                        <Link href="https://www.linkedin.com/company/thriveher-clinic/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin"></i></Link>
                                        <Link href="https://www.youtube.com/@ThriveWithDrHussaini" target="_blank" rel="noopener noreferrer"><i className="icon-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__services">
                                    <h4 className="footer-widget__title">Services</h4>
                                    <ul className="footer-widget__services-list list-unstyled">
                                        <li><Link href="about">Incident Responder</Link></li>
                                        <li><Link href="about">Secure Managed Fund</Link></li>
                                        <li><Link href="about">Clean Water All</Link></li>
                                        <li><Link href="about">Give Education</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__links">
                                    <h4 className="footer-widget__title">Links</h4>
                                    <ul className="footer-widget__services-list list-unstyled">
                                        <li><Link href="about">Food to individuals</Link></li>
                                        <li><Link href="about">Temporary housing</Link></li>
                                        <li><Link href="about">Local shelters</Link></li>
                                        <li><Link href="about">Natural disasters</Link></li>
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
                                            <p><Link href="tel:+447459110397">+44 7459 110397</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <p><Link href="mailto:info@thriveher.clinic">info@thriveher.clinic</Link></p>
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
                                    <p className="site-footer__copyright-text">Copyright 2024 by <Link href="#">ThriveHer Ltd</Link>.
                                        All
                                        Rights Reserved.</p>
                                </div>
                                <div className="site-footer__bottom-menu-box">
                                    <ul className="list-unstyled site-footer__bottom-menu">
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/terms-of-service">Terms of Service</Link></li>
                                        <li><CookieSettings /></li>
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
