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
                  backgroundPosition: "center",
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
                        Care that feels right{" "}
                        <span style={{ fontStyle: "italic" }}>for you</span>
                      </h2>
                    </div>
                    <div className="text-box">
                      <p>
                        Working with NHS and community partners to improve care
                        for Muslim and minority women.
                      </p>
                    </div>
                    <div className="btn-box">
                      <Link href="/about" className="thm-btn">
                        JOIN US
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
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
