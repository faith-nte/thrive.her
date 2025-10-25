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
      {/* Islamic Geometric Divider */}
      <div
        style={{
          width: "100%",
          height: "120px",
          background:
            "linear-gradient(180deg, var(--thriveher-cream) 0%, #21273F 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Wave SVG */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        >
          {/* Primary wave with curve */}
          <path
            d="M 0,60 Q 150,30 300,60 T 600,60 T 900,60 T 1200,60 L 1200,0 L 0,0 Z"
            fill="var(--thriveher-cream)"
            opacity="0.9"
          />
          {/* Secondary wave with geometric Islamic pattern */}
          <path
            d="M 0,80 Q 100,60 200,75 T 400,80 T 600,75 T 800,80 T 1000,75 T 1200,80 L 1200,120 L 0,120 Z"
            fill="#21273F"
            opacity="0.95"
          />

          {/* Islamic geometric overlay - stars and geometric shapes */}
          <g opacity="0.15" fill="var(--thriveher-cream)">
            {/* Star pattern 1 */}
            <circle cx="100" cy="50" r="3" />
            <circle
              cx="100"
              cy="50"
              r="5"
              fill="none"
              stroke="var(--thriveher-cream)"
              strokeWidth="0.5"
            />
            {/* Star pattern 2 */}
            <circle cx="350" cy="70" r="3" />
            <circle
              cx="350"
              cy="70"
              r="5"
              fill="none"
              stroke="var(--thriveher-cream)"
              strokeWidth="0.5"
            />
            {/* Star pattern 3 */}
            <circle cx="650" cy="50" r="3" />
            <circle
              cx="650"
              cy="50"
              r="5"
              fill="none"
              stroke="var(--thriveher-cream)"
              strokeWidth="0.5"
            />
            {/* Star pattern 4 */}
            <circle cx="950" cy="70" r="3" />
            <circle
              cx="950"
              cy="70"
              r="5"
              fill="none"
              stroke="var(--thriveher-cream)"
              strokeWidth="0.5"
            />
            {/* Connecting geometric lines */}
            <line
              x1="100"
              y1="50"
              x2="350"
              y2="70"
              strokeWidth="0.5"
              stroke="var(--thriveher-cream)"
            />
            <line
              x1="350"
              y1="70"
              x2="650"
              y2="50"
              strokeWidth="0.5"
              stroke="var(--thriveher-cream)"
            />
            <line
              x1="650"
              y1="50"
              x2="950"
              y2="70"
              strokeWidth="0.5"
              stroke="var(--thriveher-cream)"
            />
          </g>
        </svg>

        {/* CSS for wave animation */}
        <style>{``}</style>
      </div>

      {/*Donation One Start */}
      <section className="donation-one">
        <div className="donation-one__wrapper">
          <div className="donation-one__left">
            <div
              className="donation-one__left-bg"
              style={{
                backgroundImage: "url(assets/images/resources/mission.svg)",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            ></div>
          </div>
          <div className="donation-one__right">
            {/* Organic Bubble Container with Islamic Geometric Accents */}
            <div
              style={{
                position: "relative",
                background:
                  "linear-gradient(135deg, rgba(33, 39, 63, 0.95) 0%, rgba(33, 39, 63, 0.85) 100%)",
                borderRadius: "40px 60px 50px 45px / 45px 50px 60px 40px",
                padding: "155px 48px",
                boxShadow:
                  "0 12px 40px rgba(33, 39, 63, 0.25), inset 0 1px 0 rgba(253, 243, 228, 0.1), inset 0 -1px 20px rgba(199, 142, 29, 0.08)",
                border: "1px solid rgba(199, 142, 29, 0.12)",
                animation: "bubbleFloat 6s ease-in-out infinite",
                minHeight: "380px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Gradient Mesh Overlay - Subtle Background Texture */}
              <svg
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: "0.08",
                  pointerEvents: "none",
                }}
                viewBox="0 0 400 400"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <radialGradient id="meshGradient1" cx="20%" cy="20%" r="40%">
                    <stop offset="0%" stopColor="#C78E1D" />
                    <stop offset="100%" stopColor="#21273F" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="meshGradient2" cx="80%" cy="70%" r="50%">
                    <stop offset="0%" stopColor="#fdf3e4" />
                    <stop offset="100%" stopColor="#21273F" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="80" cy="60" r="120" fill="url(#meshGradient1)" />
                <circle cx="320" cy="320" r="150" fill="url(#meshGradient2)" />
              </svg>

              {/* Decorative Corner Accent - Islamic Geometric Circle with Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "30px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(199, 142, 29, 0.4), rgba(199, 142, 29, 0.1))",
                  border: "2px solid rgba(199, 142, 29, 0.3)",
                  opacity: "0.7",
                  animation: "glowPulse 4s ease-in-out infinite",
                  boxShadow:
                    "0 0 20px rgba(199, 142, 29, 0.2), inset 0 0 15px rgba(253, 243, 228, 0.1)",
                }}
              />

              {/* Decorative Bottom Accent - Smaller Circle with Glow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(199, 142, 29, 0.3), rgba(199, 142, 29, 0.05))",
                  border: "1.5px solid rgba(199, 142, 29, 0.2)",
                  opacity: "0.6",
                  animation: "glowPulse 5s ease-in-out infinite 0.5s",
                  boxShadow:
                    "0 0 15px rgba(199, 142, 29, 0.15), inset 0 0 10px rgba(253, 243, 228, 0.08)",
                }}
              />

              {/* Decorative Accent Lines - Islamic Geometric Pattern */}
              <svg
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                  width: "120px",
                  height: "120px",
                  opacity: "0.12",
                  pointerEvents: "none",
                }}
                viewBox="0 0 120 120"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#C78E1D" />
                    <stop offset="100%" stopColor="#fdf3e4" />
                  </linearGradient>
                </defs>
                {/* Geometric lines forming Islamic pattern */}
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="30"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.8"
                />
                <line
                  x1="60"
                  y1="20"
                  x2="60"
                  y2="100"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.8"
                />
                <line
                  x1="20"
                  y1="60"
                  x2="100"
                  y2="60"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.8"
                />
                <line
                  x1="30"
                  y1="30"
                  x2="90"
                  y2="90"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.8"
                />
                <line
                  x1="90"
                  y1="30"
                  x2="30"
                  y2="90"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.8"
                />
              </svg>

              {/* Content Inside Bubble */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="section-title-two text-left sec-title-animation animation-style2">
                  <h2
                    className="section-title-two__title title-animation"
                    style={{ color: "#fdf3e4", fontSize: "1.8rem" }}
                  >
                    Our mission is to bridge medicine, faith, and culture
                    through doctor-led, multilingual programmes that improves
                    health outcome for muslim and black minority women.
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

            {/* Keyframe animations */}
            <style>{`
              @keyframes bubbleFloat {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-8px);
                }
              }
              
              @keyframes glowPulse {
                0%, 100% {
                  opacity: 0.6;
                  box-shadow: 0 0 15px rgba(199, 142, 29, 0.15), inset 0 0 10px rgba(253, 243, 228, 0.08);
                }
                50% {
                  opacity: 0.9;
                  box-shadow: 0 0 30px rgba(199, 142, 29, 0.3), inset 0 0 15px rgba(253, 243, 228, 0.12);
                }
              }
            `}</style>
          </div>
        </div>
      </section>
      {/*Donation One End */}
    </>
  );
}
