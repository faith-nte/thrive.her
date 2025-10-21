"use client";
import Link from "next/link";

export default function AboutThree() {
  return (
    <>
      {/*About Three Start */}
      <section className="about-three">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="about-three__left">
                <div className="about-three__img-box">
                  <div className="about-three__img">
                    <img
                      src="assets/images/resources/about-three-img-1.png"
                      alt=""
                    />
                  </div>
                  <div className="about-three__shape-3"></div>
                  <div className="about-three__shape-1">
                    <img
                      src="assets/images/shapes/about-three-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="about-three__shape-2">
                    <img
                      src="assets/images/shapes/about-three-shape-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-three__right">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">About Us</span>
                  </div>
                  <h2
                    className="section-title__title title-animation"
                    style={{ color: "#21273F" }}
                  >
                    Together We Can Make
                    <br />a Difference
                  </h2>
                </div>
                <p className="about-three__text" style={{ color: "#21273F" }}>
                  Lorem Ipsum is simply dummy a of the printing and type setting
                  industry Loreaim Ipsum has been the industry's standard dummy
                </p>
                <ul className="about-three__points list-unstyled">
                  <li>
                    <div className="icon">
                      <span
                        className="icon-check"
                        style={{ color: "#D1A38A" }}
                      ></span>
                    </div>
                    <p style={{ color: "#21273F" }}>
                      Uniting Hearts, Healing Communities
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span
                        className="icon-check"
                        style={{ color: "#D1A38A" }}
                      ></span>
                    </div>
                    <p style={{ color: "#21273F" }}>Support Charity Today</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span
                        className="icon-check"
                        style={{ color: "#D1A38A" }}
                      ></span>
                    </div>
                    <p style={{ color: "#21273F" }}>Small Acts, Big Impact</p>
                  </li>
                </ul>
                <div className="about-three__btn-and-need-help">
                  <div className="about-three__btn-box">
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      {/* Double layer button effect */}
                      <div
                        style={{
                          position: "absolute",
                          top: "4px",
                          left: "4px",
                          right: "-4px",
                          bottom: "-4px",
                          backgroundColor: "#21273F",
                          borderRadius: "8px",
                          zIndex: 1,
                        }}
                      ></div>
                      <Link
                        href="about"
                        className="about-three__btn thm-btn"
                        style={{
                          position: "relative",
                          zIndex: 2,
                          backgroundColor: "#D1A38A",
                          color: "white",
                          padding: "0.75rem 2rem",
                          borderRadius: "8px",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          border: "2px solid #D1A38A",
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 12px rgba(209, 163, 138, 0.3)",
                        }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                  <div className="about-three__need-help">
                    <div className="about-three__need-help-icon">
                      <span
                        className="icon-phone-call"
                        style={{ color: "#D1A38A" }}
                      ></span>
                    </div>
                    <div className="content">
                      <span style={{ color: "#21273F", fontWeight: "600" }}>
                        Need help?
                      </span>
                      <p>
                        <Link
                          href="tel:3195550115"
                          style={{ color: "#21273F", textDecoration: "none" }}
                        >
                          (319) 555-0115
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Three End */}
    </>
  );
}
