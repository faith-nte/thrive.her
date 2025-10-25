"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export default function Testimonial() {
  return (
    <>
      {/*Testimonial One Start */}
      <section
        className="testimonial-one"
        style={{
          background:
            "linear-gradient(135deg, #21273F 0%, #2a3456 25%, #1f2438 50%, #252e4a 75%, #21273F 100%)",
          minHeight: "80vh",
          padding: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <span
                className="section-title__tagline"
                style={{ color: "#C78E1D", fontWeight: "600" }}
              >
                Testimonials
              </span>
            </div>
            <h2
              className="section-title__title title-animation"
              style={{ color: "#F9E8CF", fontSize: "42px", fontWeight: "700" }}
            >
              What Women Who took our training are saying
            </h2>
            <p
              style={{
                marginTop: "20px",
                color: "#F9E8CF",
                fontSize: "16px",
                maxWidth: "700px",
                margin: "20px auto 0",
              }}
            >
              Real experiences
            </p>
          </div>
          <Swiper
            {...swiperOptions}
            className="testimonial-one__carousel"
            style={{ marginTop: "50px" }}
          >
            <SwiperSlide>
              {/*Testimonial One Single Start */}
              <div className="item">
                <div
                  className="testimonial-one__single"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    borderTop: "3px solid #C78E1D",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow:
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(199, 142, 29, 0.25)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15), inset 1px 1px 0 rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.25)";
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        fontSize: "36px",
                        color: "#C78E1D",
                        fontWeight: "300",
                        lineHeight: "1",
                      }}
                    >
                      "
                    </span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#F9E8CF",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "1.7",
                      margin: "0 0 20px 0",
                    }}
                  >
                    It's a women's service from a Muslim perspective.
                  </p>
                  <div
                    style={{
                      color: "#F9E8CF",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Happy client
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
            </SwiperSlide>
            <SwiperSlide>
              {/*Testimonial One Single Start */}
              <div className="item">
                <div
                  className="testimonial-one__single"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    borderTop: "3px solid #C78E1D",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow:
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(199, 142, 29, 0.25)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15), inset 1px 1px 0 rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.25)";
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        fontSize: "36px",
                        color: "#C78E1D",
                        fontWeight: "300",
                        lineHeight: "1",
                      }}
                    >
                      "
                    </span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#F9E8CF",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "1.7",
                      margin: "0 0 20px 0",
                    }}
                  >
                    Feel Like Yourself Again.
                  </p>
                  <div
                    style={{
                      color: "#F9E8CF",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Happy client
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
            </SwiperSlide>
            <SwiperSlide>
              {/*Testimonial One Single Start */}
              <div className="item">
                <div
                  className="testimonial-one__single"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    borderTop: "3px solid #C78E1D",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow:
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(199, 142, 29, 0.25)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15), inset 1px 1px 0 rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.25)";
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        fontSize: "36px",
                        color: "#C78E1D",
                        fontWeight: "300",
                        lineHeight: "1",
                      }}
                    >
                      "
                    </span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#F9E8CF",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "1.7",
                      margin: "0 0 20px 0",
                    }}
                  >
                    The guide looks very simple but very informative.
                  </p>
                  <div
                    style={{
                      color: "#F9E8CF",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Happy client
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
            </SwiperSlide>
            <SwiperSlide>
              {/*Testimonial One Single Start */}
              <div className="item">
                <div
                  className="testimonial-one__single"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    borderTop: "3px solid #C78E1D",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow:
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(199, 142, 29, 0.25)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15), inset 1px 1px 0 rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.25)";
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        fontSize: "36px",
                        color: "#C78E1D",
                        fontWeight: "300",
                        lineHeight: "1",
                      }}
                    >
                      "
                    </span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#F9E8CF",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "1.7",
                      margin: "0 0 20px 0",
                    }}
                  >
                    Supportive for Muslim women's needs that cannot be met
                    elsewhere.
                  </p>
                  <div
                    style={{
                      color: "#F9E8CF",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Happy client
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
            </SwiperSlide>
            <SwiperSlide>
              {/*Testimonial One Single Start */}
              <div className="item">
                <div
                  className="testimonial-one__single"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    borderTop: "3px solid #C78E1D",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow:
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(199, 142, 29, 0.25)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15), inset 1px 1px 0 rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0, 0, 0, 0.3), inset 1px 1px 0 rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.borderColor =
                      "rgba(199, 142, 29, 0.25)";
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        fontSize: "36px",
                        color: "#C78E1D",
                        fontWeight: "300",
                        lineHeight: "1",
                      }}
                    >
                      "
                    </span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#F9E8CF",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "1.7",
                      margin: "0 0 20px 0",
                    }}
                  >
                    Useful for everything — and the good thing is it's halal.
                  </p>
                  <div
                    style={{
                      color: "#F9E8CF",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Happy client
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/*Testimonial One End */}
    </>
  );
}
