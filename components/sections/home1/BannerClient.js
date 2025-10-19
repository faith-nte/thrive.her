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
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="main-slider-four"
      style={{ height: "100vh", overflow: "hidden", position: "relative" }}
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
                className="image-layer hero-image"
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
                    <div className="big-title">
                      <h2>
                        Helping{" "}
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

      <style jsx global>{`
        @keyframes pullArrow {
          0% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(12px);
          }
          60% {
            transform: translateY(12px);
          }
          100% {
            transform: translateY(0);
          }
        }

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

        .scroll-arrow {
          position: absolute;
          bottom: 40px;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: fit-content;
          cursor: pointer;
          z-index: 10;
          animation: pullArrow 3s ease-in-out infinite;
          transition: opacity 0.3s ease;
          background: transparent;
          border: none;
          padding: 0;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .scroll-arrow:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .scroll-arrow {
            bottom: 32px;
          }
          .big-title {
            padding-top: 4rem !important;
          }
          .hero-image {
            background-position: center top 35% !important;
          }
        }
      `}</style>

      <button
        onClick={scrollToNextSection}
        className="scroll-arrow"
        aria-label="Scroll to next section"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ background: "transparent" }}
        >
          <path
            d="M7 10l5 5 5-5"
            fill="none"
            stroke="#c78e1d"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </button>
    </section>
  );
}
