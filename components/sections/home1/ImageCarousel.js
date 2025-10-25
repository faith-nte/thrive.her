"use client";
import { useState, useEffect } from "react";

export default function ImageCarousel({ images = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Default images if none provided
  const carouselImages =
    images.length > 0
      ? images
      : [
          "/assets/images/carousel/carousel-1.svg",
          "/assets/images/carousel/carousel-2.svg",
          "/assets/images/carousel/carousel-3.svg",
          "/assets/images/carousel/carousel-4.svg",
          "/assets/images/carousel/carousel-5.svg",
        ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #21273F 0%, #2a304d 50%, #1a1f2e 100%)",
        position: "relative",
        paddingTop: "80px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      {/* Islamic Geometric Decoration - Top Right */}
      <svg
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "250px",
          height: "250px",
          opacity: "0.08",
          pointerEvents: "none",
        }}
        viewBox="0 0 200 200"
      >
        <defs>
          <pattern
            id="carouselGeometric1"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="2" fill="#C78E1D" />
            <path
              d="M 20 10 L 30 20 L 20 30 L 10 20 Z"
              fill="none"
              stroke="#C78E1D"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#carouselGeometric1)" />
      </svg>

      {/* Decorative Moon - Bottom Left */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "40px",
          width: "120px",
          height: "120px",
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 120 120" width="100%" height="100%">
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="rgba(199, 142, 29, 0.15)"
            opacity="0.6"
          />
          <circle cx="75" cy="50" r="50" fill="#21273F" opacity="0.9" />
          <circle
            cx="75"
            cy="50"
            r="48"
            fill="none"
            stroke="rgba(199, 142, 29, 0.2)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Decorative Elements - Top Left Small Moon */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "30px",
          width: "60px",
          height: "60px",
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 60 60" width="100%" height="100%">
          <circle cx="30" cy="30" r="28" fill="rgba(199, 142, 29, 0.1)" />
          <circle cx="40" cy="25" r="25" fill="#21273F" opacity="0.7" />
          <circle
            cx="40"
            cy="25"
            r="24"
            fill="none"
            stroke="rgba(199, 142, 29, 0.15)"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Carousel Container */}
        <div
          id="default-carousel"
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#F9E8CF",
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(253, 243, 228, 0.1)",
            border: "2px solid rgba(199, 142, 29, 0.15)",
          }}
        >
          {/* Carousel Wrapper */}
          <div
            style={{
              position: "relative",
              height: "clamp(300px, 60vw, 500px)",
              overflow: "hidden",
              backgroundColor: "#F9E8CF",
            }}
          >
            {/* Carousel Items */}
            {carouselImages.map((image, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  opacity: currentSlide === index ? 1 : 0,
                  transition: "opacity 700ms ease-in-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "60px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, rgba(199, 142, 29, 0.3), transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(199, 142, 29, 0.3)",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(199, 142, 29, 0.2)",
                }}
              >
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#F9E8CF",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 6 10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </div>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "60px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to left, rgba(199, 142, 29, 0.3), transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(199, 142, 29, 0.3)",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(199, 142, 29, 0.2)",
                }}
              >
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#F9E8CF",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 6 10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Indicators */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 30,
              display: "flex",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: index === currentSlide ? "28px" : "12px",
                  height: "12px",
                  borderRadius: "6px",
                  border: "none",
                  background:
                    index === currentSlide
                      ? "#C78E1D"
                      : "rgba(199, 142, 29, 0.4)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow:
                    index === currentSlide
                      ? "0 0 12px rgba(199, 142, 29, 0.5)"
                      : "none",
                }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
