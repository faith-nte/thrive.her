"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function HealthcareProfessionals() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Healthcare Professionals"
      >
        {/* Hero Section */}
        <section className="service-one pdb">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div
                  className="service-one__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="service-one__img">
                    <img
                      src="assets/images/services/service-1-1.jpg"
                      alt="Healthcare Professionals"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div
                  className="service-one__right wow fadeInRight"
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
                      marginBottom: "30px",
                      color: "#21273F",
                    }}
                  >
                    Through targeted workshops and consulting services, we
                    support healthcare providers in understanding and addressing
                    the specific needs of Muslim and Black women in their care.
                  </p>

                  {/* Key Services */}
                  <div style={{ marginTop: "30px" }}>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        marginBottom: "15px",
                        color: "#21273F",
                      }}
                    >
                      Our Services Include:
                    </h4>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      <li
                        style={{
                          marginBottom: "12px",
                          fontSize: "15px",
                          lineHeight: "1.7",
                          color: "#21273F",
                        }}
                      >
                        <strong>• Training Workshops:</strong> Culturally
                        sensitive care delivery
                      </li>
                      <li
                        style={{
                          marginBottom: "12px",
                          fontSize: "15px",
                          lineHeight: "1.7",
                          color: "#21273F",
                        }}
                      >
                        <strong>• Consulting Services:</strong> Integration into
                        existing services
                      </li>
                      <li
                        style={{
                          marginBottom: "12px",
                          fontSize: "15px",
                          lineHeight: "1.7",
                          color: "#21273F",
                        }}
                      >
                        <strong>• Staff Development:</strong> Building inclusive
                        practices
                      </li>
                      <li
                        style={{
                          marginBottom: "12px",
                          fontSize: "15px",
                          lineHeight: "1.7",
                          color: "#21273F",
                        }}
                      >
                        <strong>• Resource Development:</strong> Multilingual
                        materials
                      </li>
                    </ul>
                  </div>

                  <div style={{ marginTop: "30px" }}>
                    <Link href="/contact" className="thm-btn">
                      Get in Touch
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

        {/* Benefits Section */}
        <section
          className="service-two pdb"
          style={{
            backgroundColor: "#F9E8CF",
          }}
        >
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">
                  Why Partner With Us
                </span>
              </div>
              <h2 className="section-title__title title-animation">
                Benefits for Your Organisation
              </h2>
            </div>

            <div className="row" style={{ marginTop: "50px" }}>
              <div
                className="col-lg-4 col-md-6"
                style={{ marginBottom: "30px" }}
              >
                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    border: "1px solid #D1A38A",
                    textAlign: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "12px",
                      color: "#21273F",
                    }}
                  >
                    Improved Patient Outcomes
                  </h4>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#21273F",
                      margin: 0,
                    }}
                  >
                    Enhanced trust and engagement with diverse communities leads
                    to better health outcomes and reduced disparities.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                style={{ marginBottom: "30px" }}
              >
                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    border: "1px solid #D1A38A",
                    textAlign: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "12px",
                      color: "#21273F",
                    }}
                  >
                    Staff Development
                  </h4>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#21273F",
                      margin: 0,
                    }}
                  >
                    Empower your team with evidence-based training on cultural
                    competency and inclusive healthcare practices.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                style={{ marginBottom: "30px" }}
              >
                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    border: "1px solid #D1A38A",
                    textAlign: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "12px",
                      color: "#21273F",
                    }}
                  >
                    Strategic Partnership
                  </h4>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#21273F",
                      margin: 0,
                    }}
                  >
                    Collaborate with us to support NHS Long Term Plan goals and
                    reduce health inequalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-one pdb">
          <div className="container">
            <div
              style={{
                backgroundColor: "#21273F",
                padding: "50px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#F9E8CF",
                }}
              >
                Ready to Transform Your Healthcare Practice?
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  color: "#F9E8CF",
                }}
              >
                Let's work together to build more equitable, culturally
                competent care in your organisation.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/contact"
                  className="thm-btn"
                  style={{
                    backgroundColor: "#D1A38A",
                    color: "#21273F",
                  }}
                >
                  Contact Us
                  <span>
                    <i className="icon-arrow-right"></i>
                  </span>
                </Link>
                <Link
                  href="/resources"
                  className="thm-btn"
                  style={{
                    backgroundColor: "transparent",
                    color: "#F9E8CF",
                    border: "2px solid #F9E8CF",
                  }}
                >
                  View Resources
                  <span>
                    <i className="icon-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
