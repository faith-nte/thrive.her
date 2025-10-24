"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function CommunityOrganisations() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Community Organisations"
        breadcrumbClass="breadcrumb-community"
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
                      alt="Community Organisations"
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
                      marginBottom: "30px",
                      color: "#21273F",
                    }}
                  >
                    Together, we create pathways to equitable maternal healthcare
                    that reflect the values, beliefs, and needs of the women you
                    serve.
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
                        <strong>• Community Workshops:</strong> Faith and
                        culturally aware health education
                      </li>
                      <li
                        style={{
                          marginBottom: "12px",
                          fontSize: "15px",
                          lineHeight: "1.7",
                          color: "#21273F",
                        }}
                      >
                        <strong>• Collaborative Programmes:</strong> Joint
                        initiatives with NHS and local partners
                      </li>
                      <li
                        style={{
                          marginBottom: "12px",
                          fontSize: "15px",
                          lineHeight: "1.7",
                          color: "#21273F",
                        }}
                      >
                        <strong>• Multilingual Resources:</strong> Materials in
                        community languages
                      </li>
                      <li
                        style={{
                          marginBottom: "12px",
                          fontSize: "15px",
                          lineHeight: "1.7",
                          color: "#21273F",
                        }}
                      >
                        <strong>• Peer Support Training:</strong> Empowering
                        community leaders
                      </li>
                    </ul>
                  </div>

                  <div style={{ marginTop: "30px" }}>
                    <Link href="/contact" className="thm-btn">
                      Partner With Us
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
                <span className="section-title__tagline">Why Collaborate</span>
              </div>
              <h2 className="section-title__title title-animation">
                Benefits of Partnership
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
                    Community-Led Solutions
                  </h4>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#21273F",
                      margin: 0,
                    }}
                  >
                    Develop health initiatives that truly reflect your
                    community's values, beliefs, and lived experiences.
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
                    Trust and Access
                  </h4>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#21273F",
                      margin: 0,
                    }}
                  >
                    Strengthen the bridge between your community and healthcare
                    services, increasing engagement and positive health outcomes.
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
                    Equitable Health Outcomes
                  </h4>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#21273F",
                      margin: 0,
                    }}
                  >
                    Contribute to reducing health inequalities and improving
                    maternal health for the women and families you serve.
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
                Let's Work Together
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  color: "#F9E8CF",
                }}
              >
                Your community's voices matter. Let's create health solutions
                that truly serve your women and families.
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
