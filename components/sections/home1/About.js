"use client";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {/*About One Start */}
      <section className="about-One">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-One__left  wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-One__img-box">
                  <div className="about-One__img">
                    <img
                      src="assets/images/resources/about-one-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-One__img-2">
                    <img
                      src="assets/images/resources/about-one-img-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="about-One__provide-box wow zoomIn animated animated"
                    data-wow-delay="500ms"
                    data-wow-duration="2500ms"
                  >
                    <div className="about-One__provide-icon">
                      <span className="icon-pet-care"></span>
                    </div>
                    <div className="about-One__provide-content">
                      <div className="about-One__provide-count count-box">
                        <h3 className="count-text">250</h3>
                        <span>+</span>
                      </div>
                      <p className="about-One__provide-count-text">
                        Services we provide
                      </p>
                    </div>
                  </div>
                  <div className="about-One__shape-1"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-One__right wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">How We Work</span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Ways to Work
                    <br /> With Us
                  </h2>
                </div>
                <div className="about-One__vission-mission">
                  <div className="about-One__tab-box tabs-box">
                    <ul className="tab-buttons clearfix list-unstyled">
                      <li
                        className={
                          activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"
                        }
                        onClick={() => handleOnClick(1)}
                      >
                        <span>Workshops</span>
                      </li>
                      <li
                        className={
                          activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"
                        }
                        onClick={() => handleOnClick(2)}
                      >
                        <span>Train-the-Trainer</span>
                      </li>
                      <li
                        className={
                          activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"
                        }
                        onClick={() => handleOnClick(3)}
                      >
                        <span>Partnerships</span>
                      </li>
                    </ul>
                    <div className="tabs-content">
                      {/*tab*/}
                      <div
                        className={
                          activeIndex == 1
                            ? "tab fadeInUp animated show active-tab"
                            : "tab fadeInUp animated"
                        }
                      >
                        <div className="tabs-content__inner">
                          <p>
                            Invite us as doctors to lead sessions in your
                            mosques, women groups and community organisation.
                          </p>
                        </div>
                      </div>
                      {/*tab*/}
                      {/*tab*/}
                      <div
                        className={
                          activeIndex == 2
                            ? "tab fadeInUp animated show active-tab"
                            : "tab fadeInUp animated"
                        }
                      >
                        <div className="tabs-content__inner">
                          <p>
                            Book us to train healthcare professionals in your
                            organisation and community so they can adequately
                            support muslim and black women.
                          </p>
                        </div>
                      </div>
                      {/*tab*/}
                      {/*tab*/}
                      <div
                        className={
                          activeIndex == 3
                            ? "tab fadeInUp animated show active-tab"
                            : "tab fadeInUp animated"
                        }
                      >
                        <div className="tabs-content__inner">
                          <p>
                            Bring us in to collaborate with your ICB, PCN, GP
                            Team, and NHS leadership teams, to facilitate
                            pilots, and co-create toolkits that support Muslim
                            and black women.
                          </p>
                        </div>
                      </div>
                      {/*tab*/}
                    </div>
                  </div>
                </div>
                <div className="about-One__btn-and-need-help">
                  <div
                    style={{
                      backgroundColor: "rgba(253, 243, 228, 0.7)",
                      borderRadius: "12px",
                      padding: "20px",
                      marginTop: "20px",
                      boxShadow: "0 4px 12px rgba(33, 39, 63, 0.08)",
                      border: "1px solid rgba(199, 142, 29, 0.15)",
                    }}
                  >
                    <h4
                      style={{
                        color: "#21273F",
                        fontWeight: 700,
                        fontSize: "16px",
                        margin: "0 0 12px 0",
                      }}
                    >
                      For women who want to master their hormones
                    </h4>
                    <p
                      style={{
                        color: "#21273F",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: "0 0 16px 0",
                      }}
                    >
                      Sign up to receive our Hormonal Reset Guide – A free
                      digital guide combining evidence and Islamic principles.
                    </p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid rgba(33, 39, 63, 0.2)",
                        fontSize: "14px",
                        color: "#21273F",
                        boxSizing: "border-box",
                        marginBottom: "12px",
                      }}
                    />
                    <button
                      style={{
                        width: "100%",
                        backgroundColor: "#C78E1D",
                        color: "#fff",
                        border: "none",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#b8791a";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(199, 142, 29, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#C78E1D";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Get Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End */}
    </>
  );
}
