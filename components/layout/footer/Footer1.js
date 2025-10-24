"use client";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer1() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles["site-footer"]}>
        <div className="container">
          {/* Navigation Links Rows */}
          <div className={styles["footer-nav-section"]}>
            <div className="row">
              {/* Partner With Us Section - 40% width */}
              <div className="col-lg-5 col-md-6">
                <div className={styles["footer-nav"]}>
                  <div
                    className={styles["footer-logo"]}
                    style={{ marginBottom: "15px" }}
                  >
                    <Link href="/">
                      <img
                        src="assets/images/resources/logo-footer.png"
                        alt="ThriveHer Logo"
                        style={{ maxWidth: "180px" }}
                      />
                    </Link>
                  </div>
                  <h5 style={{ fontSize: "16px", marginBottom: "12px" }}>
                    Partner With Us
                  </h5>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#999",
                      marginBottom: "15px",
                    }}
                  >
                    We're based in London but serve women, communities, and
                    organisations worldwide through online education, culturally
                    sensitive programmes, and strategic partnerships.
                  </p>
                  <Link
                    href="/healthcare-professionals"
                    className="thm-btn"
                    style={{
                      display: "inline-block",
                      fontSize: "12px",
                      padding: "10px 20px",
                    }}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className={styles["footer-nav"]}>
                  <h5>Quick Links</h5>
                  <ul>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/healthcare-professionals">
                        Healthcare Professionals
                      </Link>
                    </li>
                    <li>
                      <Link href="/community-organisations">
                        Community Organisations
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className={styles["footer-nav"]}>
                  <h5>Resources</h5>
                  <ul>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service">Terms of Service</Link>
                    </li>
                    <li>
                      <Link href="/wcag-statement">WCAG Statement</Link>
                    </li>
                    <li>
                      <Link href="/gdpr">GDPR</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className={styles["footer-nav"]}>
                  <h5>Contact Info</h5>
                  <ul>
                    <li>
                      <Link href="tel:+447459110397">+44 7459 110397</Link>
                    </li>
                    <li>
                      <Link href="mailto:info@thriveher.clinic">
                        info@thriveher.clinic
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={styles["footer-social"]}
                    style={{
                      marginTop: "15px",
                      display: "flex",
                      gap: "12px",
                      justifyContent: "flex-start",
                    }}
                  >
                    <style>{`
                      @media (max-width: 992px) {
                        .footer-social-responsive {
                          justify-content: center !important;
                        }
                      }
                    `}</style>
                    <div
                      className="footer-social-responsive"
                      style={{
                        display: "flex",
                        gap: "12px",
                        justifyContent: "flex-start",
                        width: "100%",
                      }}
                    >
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
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/thriveher-clinic/"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className={styles["footer-bottom"]}>
            <style>{`
              @media (max-width: 768px) {
                .footer-copyright-responsive {
                  text-align: center !important;
                }
                .footer-links-responsive {
                  text-align: center !important;
                  margin-top: 15px;
                }
              }
            `}</style>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div
                  className={styles["footer-bottom__copyright"]}
                  style={{ textAlign: "left" }}
                >
                  <p
                    className="footer-copyright-responsive"
                    style={{ textAlign: "left" }}
                  >
                    &copy; {currentYear} ThriveHer Clinic. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className={styles["footer-bottom__links"]}
                  style={{ textAlign: "right" }}
                >
                  <ul
                    className="footer-links-responsive"
                    style={{ textAlign: "right" }}
                  >
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
