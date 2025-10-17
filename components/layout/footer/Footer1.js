"use client";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer1() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles["site-footer"]}>
        <div className="container">
          {/* Top Row: Logo and Social Media */}
          <div className={styles["footer-top"]}>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className={styles["footer-logo"]}>
                  <Link href="/">
                    <img
                      src="assets/images/resources/logo-footer.png"
                      alt="ThriveHer Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className={styles["footer-social"]}>
                  <Link
                    href="https://www.youtube.com/@ThriveWithDrHussaini"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/177a8NJdki/?mibextid=wwXIfr"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link
                    href="https://www.instagram.com/thriveher.clinic/"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/thriveher-clinic/"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </Link>
                  <Link
                    href="https://www.instagram.com/thriveher.clinic/"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links Rows */}
          <div className={styles["footer-nav-section"]}>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className={styles["footer-nav"]}>
                  <h5>For Patients</h5>
                  <ul>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/treatments">Treatments</Link>
                    </li>
                    <li>
                      <Link href="/book-online">Book Online</Link>
                    </li>
                    <li>
                      <Link href="/blog">Resources</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className={styles["footer-nav"]}>
                  <h5>About</h5>
                  <ul>
                    <li>
                      <Link href="/about">Our Story</Link>
                    </li>
                    <li>
                      <Link href="/team">Team</Link>
                    </li>
                    <li>
                      <Link href="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link href="/news">News</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className={styles["footer-nav"]}>
                  <h5>Contact Us</h5>
                  <ul>
                    <li>
                      <Link href="/contact">Book Online</Link>
                    </li>
                    <li>
                      <Link href="/contact">Call Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Email Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Location</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className={styles["footer-nav"]}>
                  <h5>Healthcare Professionals</h5>
                  <ul>
                    <li>
                      <Link href="/professionals">Partner with Us</Link>
                    </li>
                    <li>
                      <Link href="/referrals">Referring Patients</Link>
                    </li>
                    <li>
                      <Link href="/education">Education</Link>
                    </li>
                    <li>
                      <Link href="/private">Private Healthcare</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className={styles["footer-bottom"]}>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className={styles["footer-bottom__copyright"]}>
                  <p>
                    &copy; {currentYear} ThriveHer Clinic. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles["footer-bottom__links"]}>
                  <ul>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms of Use</Link>
                    </li>
                    <li>
                      <Link
                        href="https://fenn.digital"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Designed by Fenn Digital
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
