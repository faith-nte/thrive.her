"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function CommunityOrganisations() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Community Organisations"
        breadcrumbClass="breadcrumb-community"
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
                          <h3 className="count-text">100+</h3>
                          <span>+</span>
                        </div>
                        <p className="about-One__provide-count-text">
                          Community Partners
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
                        For Community Organisations
                      </span>
                    </div>
                    <h2 className="section-title__title title-animation">
                      Bridging Health Gaps in Your Community
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
                    Community organisations are at the heart of supporting women
                    and families. We collaborate with local groups to amplify
                    culturally responsive health education and build trust
                    between communities and healthcare systems.
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.8",
                      marginBottom: "20px",
                      color: "#21273F",
                    }}
                  >
                    Together, we create pathways to equitable maternal
                    healthcare that reflect the values, beliefs, and needs of
                    the women you serve.
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
                          <span>How It Works</span>
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
                                <strong>Community Workshops</strong> – Faith and
                                culturally aware health education sessions
                                tailored to your community's needs.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Collaborative Programmes</strong> –
                                Joint initiatives with NHS and local partners to
                                strengthen health systems.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Multilingual Resources</strong> – Health
                                materials and tools available in community
                                languages.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Peer Support Training</strong> – Empower
                                community leaders to champion health equity.
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
                                <strong>Community-Led Solutions</strong> –
                                Develop health initiatives that truly reflect
                                your community's values, beliefs, and lived
                                experiences.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Trust and Access</strong> – Strengthen
                                the bridge between your community and healthcare
                                services, increasing engagement and positive
                                health outcomes.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Equitable Health Outcomes</strong> –
                                Contribute to reducing health inequalities and
                                improving maternal health for women and
                                families.
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
                              We begin with a consultation to understand your
                              organisation's priorities and community needs.
                              From there, we co-design programmes that combine
                              our expertise in maternal health, faith-awareness,
                              and cultural competency with your deep knowledge
                              of your community. Together, we create sustainable
                              solutions that strengthen both community trust and
                              health outcomes.
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
                        Partner With Us
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
                    <Link href="/healthcare-professionals">
                      Healthcare Professionals
                    </Link>
                  </h3>
                  <p className="donate-one__text">
                    Are you a healthcare provider looking to build culturally
                    competent services? We offer training and consulting to help
                    your team deliver more equitable care.
                  </p>
                  <div className="donate-one__btn-box">
                    <Link
                      href="/healthcare-professionals"
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
                    Discover how ThriveHer works with NHS teams, community
                    organisations, and local partners to improve maternal health
                    equity for all women.
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
                      Let's Create Change Together
                    </h2>
                  </div>
                  <p className="who-we-are__text">
                    Partnering with ThriveHer means joining a network of
                    organisations committed to reducing health inequalities and
                    improving maternal health outcomes. We work collaboratively,
                    respectfully, and with a deep understanding of community
                    needs.
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
                      Ready to explore collaboration? Contact us for an initial
                      conversation about how we can support your community's
                      health priorities.
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
