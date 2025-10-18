"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".banner-slider-button-next",
    prevEl: ".banner-slider-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function BannerClient() {
  return (
    <section
      className="main-slider-four"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div
        className="swiper-container banner-slider"
        style={{ height: "100%" }}
      >
        <Swiper
          {...swiperOptions}
          className="swiper-wrapper"
          style={{ height: "100%" }}
        >
          <SwiperSlide style={{ height: "100%" }}>
            <div className="swiper-slide" style={{ height: "100%" }}>
              <div className="bg1"></div>
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/resources/balanced-view-hero.png)",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center 0",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="main-slider-four__inner"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="main-slider-four__inner-bg"
                  style={{ height: "100%" }}
                ></div>
                <div className="container">
                  <div className="content-box" style={{ position: "relative" }}>
                    <style jsx global>{`
                      @keyframes pulse {
                        0% {
                          box-shadow: 0 0 0 0 rgba(199, 142, 29, 0.4);
                        }
                        70% {
                          box-shadow: 0 0 0 10px rgba(199, 142, 29, 0);
                        }
                        100% {
                          box-shadow: 0 0 0 0 rgba(199, 142, 29, 0);
                        }
                      }
                      @media (max-width: 768px) {
                        .big-title {
                          padding-top: 4rem !important;
                        }
                        .image-layer {
                          background-position-y: 25% !important;
                        }
                      }
                    `}</style>
                    <div className="big-title">
                      <h2>
                        Working with{" "}
                        <span style={{ fontStyle: "italic" }}>
                          NHS & Community Partners
                        </span>
                      </h2>
                    </div>
                    <div className="text-box">
                      <p>
                        Deliver Care That Improves Health Outcomes For Muslim
                        And Minority Women.
                      </p>
                    </div>
                    <div
                      className="btn-box"
                      style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        href="/about"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#c78e1d",
                          color: "#ffffff",
                          padding: "32px 24px",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: "600",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                          animation: "pulse 2s infinite",
                          position: "relative",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#b17d17";
                          e.currentTarget.style.animation = "none";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#c78e1d";
                          e.currentTarget.style.animation = "pulse 2s infinite";
                        }}
                      >
                        PARTNER WITH US
                      </Link>
                      <Link
                        href="/about"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          color: "#ffffff",
                          textDecoration: "none",
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "1.5",
                          gap: "4px",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#f3f4f6";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#ffffff";
                        }}
                      >
                        See our trainings
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <ul className="banner-slider-nav-four">
        <li className="banner-slider-control-four banner-slider-button-prev">
          <span>
            <i className="icon-arrow-right-two" aria-hidden="true"></i>
          </span>
        </li>
        <li className="banner-slider-control-four banner-slider-button-next">
          <span>
            <i className="icon-arrow-right-two" aria-hidden="true"></i>
          </span>
        </li>
      </ul>
    </section>
  );
}
