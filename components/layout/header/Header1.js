import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header1({ scroll, handlePopup, handleMobileMenu }) {
  return (
    <>
      <header
        className="main-header"
        style={{
          backgroundColor:
            scroll > 100 ? "rgba(33, 39, 63, 0.85)" : "transparent",
          transition: "background-color 0.3s ease",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <nav
          className="main-menu"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <div
            className="main-menu__wrapper"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/">
                      <img
                        src="assets/images/resources/logo-header.png"
                        alt="ThriveHer Logo"
                      />
                    </Link>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <Link
                      href="#"
                      className="mobile-nav__toggler"
                      onClick={handleMobileMenu}
                      style={{
                        textShadow:
                          scroll > 100 ? "none" : "0 0 10px rgba(0,0,0,0.5)",
                        color: "white",
                      }}
                    >
                      <i className="fa fa-bars"></i>
                    </Link>
                    <div
                      style={{
                        "& a": {
                          textShadow:
                            scroll > 100 ? "none" : "0 0 10px rgba(0,0,0,0.5)",
                          color: "white",
                        },
                      }}
                    >
                      <Menu />
                    </div>
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__search-box">
                    <Link
                      href="#"
                      className="main-menu__search search-toggler icon-search"
                      onClick={handlePopup}
                      style={{
                        textShadow:
                          scroll > 100 ? "none" : "0 0 10px rgba(0,0,0,0.5)",
                        color: "white",
                      }}
                    ></Link>
                  </div>
                  <div
                    className="main-menu__btn-box"
                    style={{
                      "& .thm-btn": {
                        backgroundColor: "#C78E1D",
                        color: "white",
                        transition: "all 0.3s ease",
                      },
                      "& .thm-btn:hover": {
                        backgroundColor: "#21273F",
                        color: "#C78E1D",
                      },
                    }}
                  >
                    <Link href="/contact" className="main-menu__btn thm-btn">
                      Partner with Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`stricky-header stricked-menu main-menu ${
          scroll ? "stricky-fixed" : ""
        }`}
        style={{ backgroundColor: "#21273F" }}
      >
        <div
          className="sticky-header__content"
          style={{ backgroundColor: "#21273F" }}
        >
          <nav className="main-menu" style={{ backgroundColor: "#21273F" }}>
            <div
              className="main-menu__wrapper"
              style={{ backgroundColor: "#21273F" }}
            >
              <div className="container">
                <div className="main-menu__wrapper-inner">
                  <div className="main-menu__left">
                    <div className="main-menu__logo">
                      <Link href="/">
                        <img
                          src="assets/images/resources/logo-header.png"
                          alt="ThriveHer Logo"
                        />
                      </Link>
                    </div>
                    <div className="main-menu__main-menu-box">
                      <Link
                        href="#"
                        className="mobile-nav__toggler"
                        onClick={handleMobileMenu}
                      >
                        <i className="fa fa-bars"></i>
                      </Link>
                      <Menu />
                    </div>
                  </div>
                  <div className="main-menu__right">
                    <div className="main-menu__call">
                      <div className="main-menu__call-icon">
                        <i
                          className="fa fa-phone-alt"
                          style={{ color: "#F9E8CF" }}
                        ></i>
                      </div>
                      <div className="main-menu__call-content">
                        <p
                          className="main-menu__call-sub-title"
                          style={{ color: "#F9E8CF" }}
                        >
                          Call Us
                        </p>
                        <h5 className="main-menu__call-number">
                          <Link
                            href="tel:+447459110397"
                            style={{ color: "#F9E8CF" }}
                          >
                            +44 7459 110397
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="main-menu__search-box">
                      <Link
                        href="#"
                        className="main-menu__search search-toggler icon-search"
                        onClick={handlePopup}
                      ></Link>
                    </div>
                    <div className="main-menu__btn-box">
                      <Link href="/contact" className="main-menu__btn thm-btn">
                        Partner with Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/*.sticky-header__content */}
      </div>
      {/*.stricky-header */}
      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}
