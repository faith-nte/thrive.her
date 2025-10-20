"use client";
import Link from "next/link";
import { useState } from "react";

export default function Donation() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {/*Donation One Start */}
      <section className="donation-one">
        <div className="donation-one__wrapper">
          <div className="donation-one__left">
            <div
              className="donation-one__left-bg"
              style={{
                backgroundImage: " url(assets/images/resources/960x575.png)",
              }}
            ></div>
          </div>
          <div className="donation-one__right">
            <div
              className="donation-one__content-box"
              style={{ backgroundColor: "#21273F" }}
            >
              <div className="section-title-two text-left sec-title-animation animation-style2">
                <div className="section-title-two__tagline-box">
                  <span
                    className="section-title-two__tagline"
                    style={{ color: "#C78E1D" }}
                  >
                    Our Mission
                  </span>
                </div>
                <h2
                  className="section-title-two__title title-animation"
                  style={{ color: "#fdf3e4" }}
                >
                  To bridge medicine, faith, and culture through doctor-led,
                  multilingual programmes — empowering women and improving
                  outcomes for every community.
                </h2>
              </div>
              <div className="donation-one__donate-box">
                <div
                  style={{
                    display: "flex",
                    gap: "clamp(12px, 3vw, 20px)",
                    flexDirection: "row",
                    marginTop: "30px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href="#"
                    className="thm-btn"
                    style={{
                      backgroundColor: "#C78E1D",
                      color: "#fff",
                      padding: "clamp(12px, 3vw, 16px) clamp(16px, 4vw, 32px)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      whiteSpace: "normal",
                      textAlign: "center",
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      fontWeight: "600",
                      borderRadius: "8px",
                      flex: "1 1 auto",
                      minWidth: "clamp(150px, 45vw, 200px)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    Get your team trained
                  </Link>
                  <Link
                    href="#"
                    className="thm-btn"
                    style={{
                      backgroundColor: "#C78E1D",
                      color: "#fff",
                      padding: "clamp(12px, 3vw, 16px) clamp(16px, 4vw, 32px)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      whiteSpace: "normal",
                      textAlign: "center",
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      fontWeight: "600",
                      borderRadius: "8px",
                      flex: "1 1 auto",
                      minWidth: "clamp(150px, 45vw, 200px)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    Introduce your patients
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Donation One End */}
    </>
  );
}
