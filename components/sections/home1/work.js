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
                                marginBottom: "16px",
                                display: "flex",
                                gap: "30px",
                                borderBottom: "1px solid #E8D4C4",
                                paddingBottom: "12px",
                              }}
                            >
                              <li
                                onClick={() => handleTrainerClick(1)}
                                style={{
                                  cursor: "pointer",
                                  padding: "0 0 12px 0",
                                  borderBottom:
                                    activeTrainerIndex == 1
                                      ? "3px solid #D1A38A"
                                      : "none",
                                  color:
                                    activeTrainerIndex == 1
                                      ? "#21273F"
                                      : "#666",
                                  fontWeight:
                                    activeTrainerIndex == 1 ? "600" : "500",
                                  fontSize: "15px",
                                  transition: "all 0.3s ease",
                                }}
                              >
                                <span>Community Champions</span>
                              </li>
                              <li
                                onClick={() => handleTrainerClick(2)}
                                style={{
                                  cursor: "pointer",
                                  padding: "0 0 12px 0",
                                  borderBottom:
                                    activeTrainerIndex == 2
                                      ? "3px solid #D1A38A"
                                      : "none",
                                  color:
                                    activeTrainerIndex == 2
                                      ? "#21273F"
                                      : "#666",
                                  fontWeight:
                                    activeTrainerIndex == 2 ? "600" : "500",
                                  fontSize: "15px",
                                  transition: "all 0.3s ease",
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
                        backgroundColor: "#D1A38A",
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
                        e.currentTarget.style.backgroundColor = "#c49279";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(209, 163, 138, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#D1A38A";
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
