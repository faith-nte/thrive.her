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
        style={{ backgroundColor: "transparent", padding: "80px 0" }}
      >
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <span
                className="section-title__tagline"
                style={{ color: "#C78E1D", fontWeight: "600" }}
              >
                Testimonial
              </span>
            </div>
            <h2
              className="section-title__title title-animation"
              style={{ color: "#21273F", fontSize: "42px", fontWeight: "700" }}
            >
              ThriveHer.Clinic <br />{" "}
              <span style={{ color: "#C78E1D" }}>Feedback</span>
            </h2>
            <p
              style={{
                marginTop: "20px",
                color: "#666",
                fontSize: "16px",
                maxWidth: "700px",
                margin: "20px auto 0",
              }}
            >
              Real experiences from women in our community
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
                    background: "#fff",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #f0ede8",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="testimonial-one__rating"
                    style={{ marginBottom: "20px", fontSize: "16px" }}
                  >
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D" }}
                    ></span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#21273F",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "1.6",
                      margin: "0",
                    }}
                  >
                    It's a women's service from a Muslim perspective.
                  </p>
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
                    background: "#fff",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #f0ede8",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="testimonial-one__rating"
                    style={{ marginBottom: "20px", fontSize: "16px" }}
                  >
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D" }}
                    ></span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#21273F",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "1.6",
                      margin: "0",
                    }}
                  >
                    Feel Like Yourself Again.
                  </p>
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
                    background: "#fff",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #f0ede8",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="testimonial-one__rating"
                    style={{ marginBottom: "20px", fontSize: "16px" }}
                  >
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D" }}
                    ></span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#21273F",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "1.6",
                      margin: "0",
                    }}
                  >
                    The guide looks very simple but very informative.
                  </p>
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
                    background: "#fff",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #f0ede8",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="testimonial-one__rating"
                    style={{ marginBottom: "20px", fontSize: "16px" }}
                  >
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D" }}
                    ></span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#21273F",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "1.6",
                      margin: "0",
                    }}
                  >
                    Supportive for Muslim women's needs that cannot be met
                    elsewhere.
                  </p>
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
                    background: "#fff",
                    padding: "40px 30px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #f0ede8",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(199, 142, 29, 0.15)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="testimonial-one__rating"
                    style={{ marginBottom: "20px", fontSize: "16px" }}
                  >
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D", marginRight: "5px" }}
                    ></span>
                    <span
                      className="fas fa-star"
                      style={{ color: "#C78E1D" }}
                    ></span>
                  </div>
                  <p
                    className="testimonial-one__text"
                    style={{
                      color: "#21273F",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "1.6",
                      margin: "0",
                    }}
                  >
                    Useful for everything — and the good thing is it's halal.
                  </p>
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
