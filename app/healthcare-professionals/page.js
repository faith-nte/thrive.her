"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function HealthcareProfessionals() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Healthcare Professionals"
      >
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
                          <h3 className="count-text">50+</h3>
                          <span>+</span>
                        </div>
                        <p className="about-One__provide-count-text">
                          Healthcare Partners
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
                      <span className="section-title__tagline">
                        For Healthcare Professionals
                      </span>
                    </div>
                    <h2 className="section-title__title title-animation">
                      Building Culturally Competent Care
                    </h2>
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.8",
                      marginBottom: "20px",
                      color: "#21273F",
                    }}
                  >
                    We work with NHS teams and healthcare organisations to
                    bridge gaps in maternal health equity. Our evidence-based
                    training helps professionals deliver culturally sensitive,
                    faith-aware care to diverse communities.
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.8",
                      marginBottom: "20px",
                      color: "#21273F",
                    }}
                  >
                    Through targeted workshops and consulting services, we
                    support healthcare providers in understanding and addressing
                    the specific needs of Muslim and Black women in their care.
                  </p>
                  <div className="about-One__vission-mission">
                    <div className="about-One__tab-box tabs-box">
                      <ul className="tab-buttons clearfix list-unstyled">
                        <li
                          className={
                            activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(1)}
                        >
                          <span>Our Services</span>
                        </li>
                        <li
                          className={
                            activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(2)}
                        >
                          <span>Why Partner</span>
                        </li>
                        <li
                          className={
                            activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(3)}
                        >
                          <span>How We Work</span>
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
                            <div>
                              <p>
                                <strong>Training Workshops</strong> –
                                Evidence-based training on culturally sensitive,
                                faith-aware care delivery for maternal health
                                settings.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Consulting Services</strong> – Strategic
                                integration of inclusive practices into existing
                                services and policy frameworks.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Staff Development</strong> –
                                Comprehensive programmes building cultural
                                competency and inclusive healthcare practices
                                across your team.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Resource Development</strong> –
                                Multilingual materials and educational tools
                                tailored to your patient communities.
                              </p>
                            </div>
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
                            <div>
                              <p>
                                <strong>Improved Patient Outcomes</strong> –
                                Enhanced trust and engagement with diverse
                                communities leads to better health outcomes and
                                reduced disparities.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Staff Development</strong> – Empower
                                your team with evidence-based training on
                                cultural competency and inclusive healthcare
                                practices.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Strategic Partnership</strong> –
                                Collaborate with us to support NHS Long Term
                                Plan goals and reduce health inequalities in
                                your organisation.
                              </p>
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
                              We start with a consultation to understand your
                              organisation's needs, patient demographics, and
                              specific challenges around health equity. From
                              there, we develop tailored training and consulting
                              programmes that combine our expertise in maternal
                              health, faith-awareness, and cultural competency
                              with your clinical knowledge. Our approach is
                              collaborative, evidence-based, and designed to
                              create lasting, sustainable change.
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                      </div>
                    </div>
                  </div>
                  <div className="about-One__btn-and-need-help">
                    <div className="about-One__btn-box">
                      <Link href="/contact" className="about-One__btn thm-btn">
                        Get in Touch
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                    <div className="about-One__need-help">
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="content">
                        <p>Need help?</p>
                        <h4>
                          <Link href="tel:+447459110397">+44 7459 110397</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About One End */}

        {/*Donate One Start */}
        <section className="donate-one">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="donate-one__single">
                  <div
                    className="donate-one__single-bg"
                    style={{
                      backgroundImage:
                        " url(assets/images/backgrounds/donate-one-single-bg.jpg)",
                    }}
                  ></div>
                  <h3 className="donate-one__title">
                    <Link href="/community-organisations">
                      Community Organisations
                    </Link>
                  </h3>
                  <p className="donate-one__text">
                    Interested in partnering as a community organisation?
                    Explore how we collaborate with local groups to amplify
                    culturally responsive health education.
                  </p>
                  <div className="donate-one__btn-box">
                    <Link
                      href="/community-organisations"
                      className="donate-one__btn thm-btn"
                    >
                      Learn More
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="donate-one__single donate-one__single-2">
                  <div
                    className="donate-one__single-bg"
                    style={{
                      backgroundImage:
                        " url(assets/images/backgrounds/donate-one-single-bg-two.jpg)",
                    }}
                  ></div>
                  <h3 className="donate-one__title">
                    <Link href="/about-us">About ThriveHer</Link>
                  </h3>
                  <p className="donate-one__text">
                    Discover our mission, vision, and approach to improving
                    maternal health equity across NHS teams and community
                    partners.
                  </p>
                  <div className="donate-one__btn-box">
                    <Link href="/about-us" className="donate-one__btn thm-btn">
                      Our Story
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Donate One End */}

        {/*Who We Are Start */}
        <section className="who-we-are">
          <div className="who-we-are__shape-3 float-bob-y">
            <img src="assets/images/shapes/who-we-are-shape-3.png" alt="" />
          </div>
          <div className="who-we-are__shape-4 float-bob-x">
            <img src="assets/images/shapes/who-we-are-shape-4.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
                <div className="who-we-are__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">
                        Getting Started
                      </span>
                    </div>
                    <h2 className="section-title__title title-animation">
                      Transform Your Practice Today
                    </h2>
                  </div>
                  <p className="who-we-are__text">
                    Partnering with ThriveHer means committing to equity,
                    cultural competency, and genuine patient-centred care. We
                    work alongside healthcare teams to integrate faith-aware and
                    culturally sensitive practices into everyday clinical work.
                  </p>
                  <div
                    style={{
                      marginTop: "30px",
                      padding: "20px",
                      backgroundColor: "#F9E8CF",
                      borderRadius: "8px",
                      borderLeft: "4px solid #D1A38A",
                    }}
                  >
                    <h4
                      style={{
                        color: "#21273F",
                        fontWeight: "700",
                        marginBottom: "12px",
                      }}
                    >
                      Next Steps
                    </h4>
                    <p
                      style={{
                        color: "#21273F",
                        fontSize: "15px",
                        lineHeight: "1.6",
                        margin: "0",
                      }}
                    >
                      Ready to explore how we can support your team? Contact us
                      for an initial consultation to discuss your organisation's
                      needs and priorities.
                    </p>
                  </div>
                  <div className="who-we-are__btn-box">
                    <Link href="/contact" className="who-we-are__btn thm-btn">
                      Get in Touch
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="who-we-are__right">
                  <div className="who-we-are__img-box">
                    <div className="who-we-are__img">
                      <img
                        src="assets/images/resources/who-we-are-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="who-we-are__img-2">
                      <img
                        src="assets/images/resources/who-we-are-img-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="who-we-are__shape-1 img-bounce"></div>
                    <div className="who-we-are__shape-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Who We Are End */}
      </Layout>
    </>
  );
}
