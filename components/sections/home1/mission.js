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
                    style={{ color: "#D1A38A" }}
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
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3 sm:gap-y-0">
                  <Link
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white w-full sm:w-auto"
                    style={{ backgroundColor: "#D1A38A", color: "#fff" }}
                  >
                    Get your team trained
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-semibold text-white hover:text-gray-100 w-full sm:w-auto text-center py-2.5"
                    style={{ color: "#fdf3e4" }}
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
