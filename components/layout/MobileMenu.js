"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img
                src="assets/images/resources/logo-header.png"
                width="150"
                alt="ThriveHer Logo"
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li>
                  <Link href="/about-us" style={{ color: "#F9E8CF" }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/healthcare-professionals"
                    style={{ color: "#F9E8CF" }}
                  >
                    Healthcare Professionals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community-organisations"
                    style={{ color: "#F9E8CF" }}
                  >
                    Community Organisations
                  </Link>
                </li>
                <li>
                  <Link href="/blog" style={{ color: "#F9E8CF" }}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ color: "#F9E8CF" }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i
                className="fa fa-envelope"
                style={{ color: "#F9E8CF", marginRight: "10px" }}
              ></i>
              <Link
                href="mailto:info@thriveher.clinic"
                style={{ color: "#F9E8CF" }}
              >
                info@thriveher.clinic
              </Link>
            </li>
            <li>
              <i
                className="fa fa-phone-alt"
                style={{ color: "#F9E8CF", marginRight: "10px" }}
              ></i>
              <Link href="tel:+447459110397" style={{ color: "#F9E8CF" }}>
                +44 7459 110397
              </Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link
                href="https://www.youtube.com/@ThriveWithDrHussaini"
                style={{ color: "#F9E8CF" }}
              >
                <i className="fab fa-youtube"></i>
              </Link>
              <Link
                href="https://www.facebook.com/share/177a8NJdki/?mibextid=wwXIfr"
                style={{ color: "#F9E8CF" }}
              >
                <i className="fab fa-facebook"></i>
              </Link>
              <Link
                href="https://www.instagram.com/thriveher.clinic/"
                style={{ color: "#F9E8CF" }}
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/thriveher-clinic/"
                style={{ color: "#F9E8CF" }}
              >
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
