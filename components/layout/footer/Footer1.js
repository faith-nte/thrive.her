'use client';
import Link from "next/link"
import styles from '@/styles/Footer.module.css'

export default function Footer1() {
    const currentYear = new Date().getFullYear();

    return (
        <>
           <footer className={styles['site-footer']}>
            <div className="container">
                <div className={styles['footer-content']}>
                    <div className="row">
                        {/* Main Footer Links */}
                        <div className="col-lg-3 col-md-6">
                            <div className={styles['footer-widget']}>
                                <h4 className={styles['footer-widget__title']}>For Patients</h4>
                                <ul className={styles['footer-widget__list']}>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/treatments">Our Treatments</Link></li>
                                    <li><Link href="/book-online">Book Online</Link></li>
                                    <li><Link href="/blog">Blog & Resources</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className={styles['footer-widget']}>
                                <h4 className={styles['footer-widget__title']}>Our Services</h4>
                                <ul className={styles['footer-widget__list']}>
                                    <li><Link href="/services/gynecology">Gynecology</Link></li>
                                    <li><Link href="/services/fertility">Fertility Services</Link></li>
                                    <li><Link href="/services/womens-health">Women's Health</Link></li>
                                    <li><Link href="/services/consultations">Consultations</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className={styles['footer-widget']}>
                                <h4 className={styles['footer-widget__title']}>Contact Us</h4>
                                <ul className={styles['footer-widget__contact']}>
                                    <li>
                                        <i className="icon-pin"></i>
                                        <p>Suite 6433 Unit 3a<br />34-35 Hatton Garden<br />London EC1N 8DX<br />England</p>
                                    </li>
                                    <li>
                                        <i className="icon-envelope"></i>
                                        <Link href="mailto:info@thriveher.clinic">info@thriveher.clinic</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className={styles['footer-widget']}>
                                <h4 className={styles['footer-widget__title']}>Follow Us</h4>
                                <div className={styles['footer-widget__social']}>
                                    <Link href="https://www.facebook.com/share/177a8NJdki/?mibextid=wwXIfr" aria-label="Facebook"><i className="fab fa-facebook"></i></Link>
                                    <Link href="https://www.instagram.com/thriveher.clinic/" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
                                    <Link href="https://www.linkedin.com/company/thriveher-clinic/" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></Link>
                                    <Link href="https://www.youtube.com/@ThriveWithDrHussaini" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className={styles['footer-bottom']}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className={styles['footer-bottom__copyright']}>
                                <p>&copy; {currentYear} ThriveHer Clinic. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['footer-bottom__links']}>
                                <ul>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/terms">Terms of Use</Link></li>
                                    <li><Link href="https://fenn.digital" target="_blank" rel="noopener noreferrer">Designed by Fenn Digital</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
