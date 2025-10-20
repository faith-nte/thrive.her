"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="About Us">
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
                      <span className="section-title__tagline">
                        About ThriveHer Clinic
                      </span>
                    </div>
                    <h2 className="section-title__title title-animation">
                      Supporting Maternal Health
                      <br /> For Every Community
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
                    We support the NHS and community partners to bridge the gap
                    in maternal health. Our focus is on Muslim and Black women
                    who are among the most affected groups.
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.8",
                      marginBottom: "20px",
                      color: "#21273F",
                    }}
                  >
                    By working with NHS teams and community organisations, we
                    help make care more faith-aware, culturally competent, and
                    genuinely supportive for women and families.
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
                          <span>Our Mission</span>
                        </li>
                        <li
                          className={
                            activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(2)}
                        >
                          <span>Our Vision</span>
                        </li>
                        <li
                          className={
                            activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(3)}
                        >
                          <span>What We Do</span>
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
                              To support the NHS Long Term Plan in reducing
                              health inequalities for underserved communities by
                              improving trust, access, and understanding between
                              professionals and patients.
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
                              A healthcare system where understanding, respect,
                              and inclusion are part of every woman's
                              experience.
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
                            <div>
                              <p>
                                <strong>Training and Workshops</strong> – We
                                deliver evidence-based training that helps NHS
                                teams and local partners build the skills to
                                provide faith-aware, culturally sensitive care.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Consulting and Partnership</strong> – We
                                collaborate with Trusts and community
                                organisations to integrate inclusive practices
                                into existing services.
                              </p>
                              <p style={{ marginTop: "12px" }}>
                                <strong>Education and Outreach</strong> – We
                                create multilingual learning materials and
                                sessions that help women understand their health
                                and feel confident accessing care.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/*tab*/}
                      </div>
                    </div>
                  </div>
                  <div className="about-One__btn-and-need-help">
                    <div className="about-One__btn-box">
                      <Link
                        href="donation-details"
                        className="about-One__btn thm-btn"
                      >
                        Donate Now
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
                          <Link href="tel:3195550115">(319) 555-0115</Link>
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
                    <Link href="/">For Partners</Link>
                  </h3>
                  <p className="donate-one__text">
                    If you represent an NHS Trust, local authority, or community
                    organisation, we'd love to collaborate. Together, we can
                    create services that support equity in women's health.
                  </p>
                  <div className="donate-one__btn-box">
                    <Link href="/" className="donate-one__btn thm-btn">
                      Partner With Us
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
                    <Link href="/">For Women and Families</Link>
                  </h3>
                  <p className="donate-one__text">
                    Our upcoming courses and community workshops help women
                    learn, connect, and care for their health with confidence.
                    Join the waiting list to be notified when new sessions are
                    open.
                  </p>
                  <div className="donate-one__btn-box">
                    <Link href="/" className="donate-one__btn thm-btn">
                      Join the Waiting List
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
                      <span className="section-title__tagline">Who We Are</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                      Doctor-Led Women's Health Service
                    </h2>
                  </div>
                  <p className="who-we-are__text">
                    ThriveHer Clinic is a doctor-led women's health service
                    dedicated to improving maternal health outcomes through
                    education, training, and collaboration. We work with
                    healthcare providers and community groups to ensure that
                    care feels safe, respectful, and inclusive for everyone.
                  </p>
                  <div
                    style={{
                      marginTop: "30px",
                      padding: "20px",
                      backgroundColor: "#F9E8CF",
                      borderRadius: "8px",
                      borderLeft: "4px solid #C78E1D",
                    }}
                  >
                    <h4
                      style={{
                        color: "#21273F",
                        fontWeight: "700",
                        marginBottom: "12px",
                      }}
                    >
                      Led by Dr Syeda Hussaini
                    </h4>
                    <p
                      style={{
                        color: "#21273F",
                        fontSize: "15px",
                        lineHeight: "1.6",
                        margin: "0",
                      }}
                    >
                      Dr Syeda Hussaini is a GP and women's health advocate with
                      a background in community engagement and faith-informed
                      healthcare. Her approach combines clinical experience with
                      cultural understanding to deliver practical, compassionate
                      solutions that work for both providers and patients.
                    </p>
                  </div>
                  <div className="who-we-are__btn-box">
                    <Link
                      href="donation-details"
                      className="who-we-are__btn thm-btn"
                    >
                      Donate Now
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

        {/**Event One Start */}
        <section className="event-one pdb">
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Events</span>
              </div>
              <h2 className="section-title__title title-animation">
                Join Us in the Fight <br />
                Against Poverty
              </h2>
            </div>
            <div className="row">
              {/**Event One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="event-one__single">
                  <div className="event-one__img-box">
                    <div className="event-one__img">
                      <img src="assets/images/event/event-1-1.jpg" alt="" />
                    </div>
                    <div className="event-one__date">
                      <p>
                        <span className="icon-clock"></span>20th Dec, 2024
                      </p>
                    </div>
                  </div>
                  <div className="event-one__content">
                    <h4 className="event-one__title">
                      <Link href="event-details">Donation Drive</Link>
                    </h4>
                    <p className="event-one__text">
                      Lorem Ipsum is simply dummy a of the printing and type
                      setting industry Loreaim Ipsum has
                    </p>
                    <p className="event-one__location">
                      <span className="icon-pin"></span>6391 Elgin St. Celina,
                      10299
                    </p>
                    <div className="event-one__btn-box">
                      <Link
                        href="donation-details"
                        className="event-one__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/**Event One Single End*/}
              {/**Event One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="event-one__single">
                  <div className="event-one__img-box">
                    <div className="event-one__img">
                      <img src="assets/images/event/event-1-2.jpg" alt="" />
                    </div>
                    <div className="event-one__date">
                      <p>
                        <span className="icon-clock"></span>15th nov, 2023
                      </p>
                    </div>
                  </div>
                  <div className="event-one__content">
                    <h4 className="event-one__title">
                      <Link href="event-details">win-win survival</Link>
                    </h4>
                    <p className="event-one__text">
                      Lorem Ipsum is simply dummy a of the printing and type
                      setting industry Loreaim Ipsum has
                    </p>
                    <p className="event-one__location">
                      <span className="icon-pin"></span>6391 Elgin St. Celina,
                      10299
                    </p>
                    <div className="event-one__btn-box">
                      <Link
                        href="donation-details"
                        className="event-one__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/**Event One Single End*/}
              {/**Event One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="100ms"
              >
                <div className="event-one__single">
                  <div className="event-one__img-box">
                    <div className="event-one__img">
                      <img src="assets/images/event/event-1-3.jpg" alt="" />
                    </div>
                    <div className="event-one__date">
                      <p>
                        <span className="icon-clock"></span>19th Feb, 2024
                      </p>
                    </div>
                  </div>
                  <div className="event-one__content">
                    <h4 className="event-one__title">
                      <Link href="event-details">Children Education.</Link>
                    </h4>
                    <p className="event-one__text">
                      Lorem Ipsum is simply dummy a of the printing and type
                      setting industry Loreaim Ipsum has
                    </p>
                    <p className="event-one__location">
                      <span className="icon-pin"></span>6391 Elgin St. Celina,
                      10299
                    </p>
                    <div className="event-one__btn-box">
                      <Link
                        href="donation-details"
                        className="event-one__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/**Event One Single End*/}
            </div>
          </div>
        </section>
        {/**Event One End */}
      </Layout>
    </>
  );
}
