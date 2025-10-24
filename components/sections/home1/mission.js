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
                backgroundImage: " url(assets/images/resources/mission.svg)",
              }}
            ></div>
          </div>
          <div className="donation-one__right">
            <div
              className="donation-one__content-box"
              style={{ backgroundColor: "#21273F" }}
            >
              <div className="section-title-two text-left sec-title-animation animation-style2">
                <h2
                  className="section-title-two__title title-animation"
                  style={{ color: "#fdf3e4" }}
                >
                  Our mission is to bridge medicine, faith, and culture through
                  doctor-led, multilingual programmes empowering women and
                  improving outcomes for every community.
                </h2>
              </div>
              <div className="donation-one__donate-box">
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3 sm:gap-y-0">
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
      {/*Donation One End */}
    </>
  );
}
