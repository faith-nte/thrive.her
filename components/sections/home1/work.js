"use client";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeTrainerIndex, setActiveTrainerIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const handleTrainerClick = (index) => {
    setActiveTrainerIndex(index);
  };
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .about-One__img {
            display: none !important;
          }
        }
      `}</style>
      {/*About One Start */}
      <section className="about-One">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-One__left  wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "100%",
                }}
              >
                <div className="about-One__img-box">
                  <div className="about-One__img">
                    <img
                      src="assets/images/work with us/how-to-work-with-us.png"
                      alt=""
                    />
                  </div>
                  <div className="about-One__img-2">
                    <img
                      src="assets/images/work with us/collaboration.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-One__right wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="section-title text-left sec-title-animation animation-style2">
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
                          <div
                            className="about-One__tab-box tabs-box"
                            style={{ marginTop: "0" }}
                          >
                            <ul
                              className="tab-buttons clearfix list-unstyled"
                              style={{
                                marginBottom: "20px",
                                display: "flex",
                                gap: "30px",
                                borderBottom: "none",
                                paddingBottom: "0",
                                flexWrap: "wrap",
                              }}
                            >
                              <li
                                onClick={() => handleTrainerClick(1)}
                                style={{
                                  cursor: "pointer",
                                  padding: "0",
                                  borderBottom:
                                    activeTrainerIndex == 1
                                      ? "3px solid #D1A38A"
                                      : "none",
                                  color:
                                    activeTrainerIndex == 1
                                      ? "#21273F"
                                      : "#888",
                                  fontWeight:
                                    activeTrainerIndex == 1 ? "600" : "500",
                                  fontSize: "15px",
                                  transition: "all 0.3s ease",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span>Community Champions</span>
                              </li>
                              <li
                                onClick={() => handleTrainerClick(2)}
                                style={{
                                  cursor: "pointer",
                                  padding: "0",
                                  borderBottom:
                                    activeTrainerIndex == 2
                                      ? "3px solid #D1A38A"
                                      : "none",
                                  color:
                                    activeTrainerIndex == 2
                                      ? "#21273F"
                                      : "#888",
                                  fontWeight:
                                    activeTrainerIndex == 2 ? "600" : "500",
                                  fontSize: "15px",
                                  transition: "all 0.3s ease",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span>Clinical Leaders</span>
                              </li>
                            </ul>
                            <div className="tabs-content">
                              {/*sub-tab*/}
                              <div
                                className={
                                  activeTrainerIndex == 1
                                    ? "tab fadeInUp animated show active-tab"
                                    : "tab fadeInUp animated"
                                }
                              >
                                <div className="tabs-content__inner">
                                  <p>
                                    Empower community leaders and peer educators
                                    to become champions of maternal health
                                    awareness. We provide training that equips
                                    community members with the knowledge and
                                    skills to advocate for culturally sensitive,
                                    faith-aware care within their networks.
                                  </p>
                                </div>
                              </div>
                              {/*sub-tab*/}
                              {/*sub-tab*/}
                              <div
                                className={
                                  activeTrainerIndex == 2
                                    ? "tab fadeInUp animated show active-tab"
                                    : "tab fadeInUp animated"
                                }
                              >
                                <div className="tabs-content__inner">
                                  <p>
                                    Train healthcare professionals and clinical
                                    leaders in your organisation to deliver
                                    evidence-based, culturally competent care.
                                    Our training helps clinical teams build the
                                    knowledge and confidence to support Muslim
                                    and Black women effectively.
                                  </p>
                                </div>
                              </div>
                              {/*sub-tab*/}
                            </div>
                          </div>
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
                <div className="about-One__btn-and-need-help"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End */}

      {/* Hormonal Reset Guide CTA Section - Premium Design */}
      <section
        className="cta-one"
        style={{
          background: "#1a1f2e",
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(199, 142, 29, 0.03) 35px, rgba(199, 142, 29, 0.03) 70px),
            repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(199, 142, 29, 0.02) 35px, rgba(199, 142, 29, 0.02) 70px),
            repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(199, 142, 29, 0.02) 50px, rgba(199, 142, 29, 0.02) 100px)
          `,
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Islamic Geometric Decoration - Top Right */}
        <svg
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "300px",
            height: "300px",
            opacity: "0.05",
            pointerEvents: "none",
          }}
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern
              id="geometric"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="#C78E1D" />
              <path
                d="M 20 10 L 30 20 L 20 30 L 10 20 Z"
                fill="none"
                stroke="#C78E1D"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#geometric)" />
        </svg>

        {/* Islamic Geometric Decoration - Bottom Left */}
        <svg
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            opacity: "0.04",
            pointerEvents: "none",
          }}
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern
              id="geometric2"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="1.5" fill="#C78E1D" />
              <circle
                cx="25"
                cy="25"
                r="3"
                fill="none"
                stroke="#C78E1D"
                strokeWidth="0.3"
              />
              <line
                x1="25"
                y1="5"
                x2="25"
                y2="45"
                stroke="#C78E1D"
                strokeWidth="0.2"
                opacity="0.5"
              />
              <line
                x1="5"
                y1="25"
                x2="45"
                y2="25"
                stroke="#C78E1D"
                strokeWidth="0.2"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#geometric2)" />
        </svg>

        <div className="container">
          <div
            className="cta-one__inner"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Content Wrapper - Compact Rounded Box */}
            <div
              style={{
                background: "#A7B093",
                borderRadius: "20px 28px 24px 22px / 22px 24px 28px 20px",
                padding: "40px 45px",
                maxWidth: "700px",
                margin: "0 auto",
                boxShadow:
                  "0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(253, 243, 228, 0.15)",
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle shine effect */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  pointerEvents: "none",
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  className="cta-one__title-box sec-title-animation animation-style1"
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  <h2
                    className="cta-one__title title-animation"
                    style={{
                      color: "#21273F",
                      fontSize: "clamp(1.5rem, 5vw, 2rem)",
                      lineHeight: "1.3",
                      fontWeight: "700",
                      textShadow: "none",
                    }}
                  >
                    For women who want to master their hormones
                  </h2>
                </div>

                <p
                  style={{
                    color: "#444444",
                    fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
                    lineHeight: "1.7",
                    marginBottom: "30px",
                    opacity: "1",
                    textShadow: "none",
                  }}
                >
                  Sign up to receive our{" "}
                  <span style={{ fontWeight: "600" }}>
                    Hormonal Reset Guide
                  </span>{" "}
                  – A free digital guide combining evidence and Islamic
                  principles.
                </p>

                {/* Email Input & Button Container */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      width: "100%",
                      maxWidth: "450px",
                      padding: "14px 18px",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      color: "#21273F",
                      backgroundColor: "#fff",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box",
                      minHeight: "50px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#fff";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(255, 255, 255, 0.2)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                      e.target.style.boxShadow = "none";
                    }}
                  />

                  <button
                    className="thm-btn"
                    style={{
                      width: "100%",
                      maxWidth: "450px",
                      minHeight: "50px",
                      padding: "14px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      fontSize: "1rem",
                      background: "#21273F",
                      color: "#fff",
                      border: "2px solid transparent",
                      backgroundImage:
                        "linear-gradient(#21273F, #21273F), linear-gradient(135deg, #C78E1D 0%, #A7B093 50%, #C78E1D 100%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(#1a1f2e, #1a1f2e), linear-gradient(135deg, #C78E1D 0%, #A7B093 50%, #C78E1D 100%)";
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(199, 142, 29, 0.3)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(#21273F, #21273F), linear-gradient(135deg, #C78E1D 0%, #A7B093 50%, #C78E1D 100%)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Download Guide Free
                  </button>
                </div>

                {/* Trust Note */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#444444",
                    marginTop: "18px",
                    opacity: "0.9",
                    textAlign: "center",
                  }}
                >
                  ✓ We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
