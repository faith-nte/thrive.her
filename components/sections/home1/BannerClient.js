"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: { delay: 6000, disableOnInteraction: false },
  loop: true,
  navigation: {
    nextEl: ".banner-slider-button-next",
    prevEl: ".banner-slider-button-prev",
  },
  pagination: { el: ".swiper-pagination", clickable: true },
};

export default function BannerClient() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".why-this-work-matters");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
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
                  padding: "clamp(2rem, 5vh, 4rem) 0",
                }}
              >
                <div
                  className="main-slider-four__inner-bg"
                  style={{ height: "100%" }}
                ></div>
                <div className="container">
                  <div className="content-box" style={{ position: "relative" }}>
                    <div className="big-title">
                      <h2
                        style={{
                          fontSize: "clamp(2rem, 6vw, 3.5rem)",
                          lineHeight: "1.2",
                          marginBottom: "1rem",
                        }}
                      >
                        Helping{" "}
                        <span style={{ fontStyle: "italic" }}>
                          NHS & Community Partners
                        </span>
                      </h2>
                    </div>
                    <div className="text-box">
                      <p
                        style={{
                          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                          lineHeight: "1.6",
                          maxWidth: "600px",
                        }}
                      >
                        Deliver Care That Improves Health Outcomes For Muslim
                        And Minority Women.
                      </p>
                    </div>
                    {/* Button group */}
                    <div
                      className="hero-buttons flex gap-4 mt-10 flex-wrap items-center"
                      style={{ marginTop: "2.5rem" }}
                    >
                      <button
                        type="button"
                        className="primary-btn"
                        onClick={() => (window.location.href = "/about")}
                        style={{
                          marginRight: "12px",
                          marginBottom: "8px",
                        }}
                      >
                        Partner With Us
                      </button>
                      <button
                        type="button"
                        className="secondary-btn"
                        onClick={() => (window.location.href = "/trainings")}
                        style={{
                          border: "2px solid #D1A38A",
                          marginBottom: "8px",
                        }}
                      >
                        See our trainings →
                      </button>
                    </div>
                    {/* Founder line */}
                    <p
                      style={{
                        marginTop: "2rem",
                        fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                        color: "#F9E8CF",
                        fontStyle: "italic",
                        fontWeight: 500,
                        textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                        lineHeight: 1.5,
                        marginBottom: "1.5rem",
                      }}
                    >
                      Led by Dr Syeda Hussaini MBBS MRCPsych
                    </p>
                    {/* Credibility logos with label */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                        marginTop: "1.5rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "clamp(0.7rem, 1.2vw, 0.875rem)",
                          color: "#FFFFFF",
                          fontStyle: "italic",
                          fontWeight: 500,
                          letterSpacing: "0.02em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Advised by:
                      </span>
                      <img
                        src="/assets/images/credibility/east.png"
                        alt="Health Innovation East Midlands"
                        style={{
                          height: "clamp(60px, 10vw, 96px)",
                          width: "auto",
                        }}
                      />
                      <img
                        src="/assets/images/credibility/health-innovation-east.png"
                        alt="Health Innovation East"
                        style={{
                          height: "clamp(60px, 10vw, 96px)",
                          width: "auto",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Navigation arrows hidden per request */}
      <ul className="banner-slider-nav-four" style={{ display: "none" }}>
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

      {/* Scroll Arrow */}
      <button
        onClick={scrollToNextSection}
        className="scroll-arrow"
        aria-label="Scroll to Why This Work Matters section"
      >
        <div className="scroll-text">See Why This Work Matters</div>
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
            stroke="#d1a38a"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </button>

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
          background: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .scroll-text {
          color: #f9e8cf;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .scroll-arrow:hover .scroll-text {
          color: #d1a38a;
        }

        /* iPad/Tablet responsiveness (768px to 1024px) */
        @media (max-width: 1024px) and (min-width: 768px) {
          .content-box {
            padding-right: 2rem !important;
          }
          
          .big-title h2 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1rem !important;
          }
          
          .text-box p {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }
          
          .scroll-arrow {
            bottom: 32px;
          }
          
          .scroll-text {
            font-size: 14px;
          }
          
          .hero-image {
            background-position: center 30% !important;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 767px) {
          .scroll-arrow {
            bottom: 40px;
            top: auto;
            left: auto;
            right: 1.5rem;
            transform: none;
            margin: 0;
          }
          
          .scroll-text {
            font-size: 12px;
          }
          
          .big-title {
            padding-top: 2rem !important;
          }
          
          .hero-image {
            background-position: center 35% !important;
          }
          
          .content-box {
            padding-right: 1rem !important;
            padding-left: 1rem !important;
          }
        }

        /* Extra small screens (phones) */
        @media (max-width: 480px) {
          .scroll-arrow {
            right: 1rem;
            bottom: 40px;
          }
          
          .scroll-text {
            font-size: 11px;
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
