"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function WhyThisWorkMattersInfographic() {
  // Form state management
  const [credentials, setCredentials] = useState({
    name: "",
    title: "",
    email: "",
  });
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(credentials.email)) {
      setSubmittedMessage("Please enter a valid email address.");
      return;
    }
    // Save to localStorage
    localStorage.setItem("drSyedaCredentials", JSON.stringify(credentials));
    setSubmittedMessage("Credentials saved successfully!");
    setCredentials({ name: "", title: "", email: "" });
    // Clear message after 3 seconds
    setTimeout(() => setSubmittedMessage(""), 3000);
  };

  // Chart data configuration
  const data = {
    labels: ["White women", "Asian women", "Black women"],
    datasets: [
      {
        label: "Relative risk of maternal mortality",
        data: [1, 1.8, 3.7],
        backgroundColor: (context) => {
          if (context.dataIndex === 2) return "#C78E1D"; // Gold for Black women
          if (context.dataIndex === 1) return "#E5BA6D"; // Lighter gold for Asian women
          return "#83919C"; // Gray for White women
        },
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1500, easing: "easeOutQuart" },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Maternal Mortality Risk by Ethnicity",
        color: "#21273F",
        font: { size: 16, weight: "600" },
        padding: { bottom: 20 },
      },
      tooltip: {
        backgroundColor: "#fff",
        borderColor: "#C78E1D",
        borderWidth: 1,
        titleColor: "#21273F",
        bodyColor: "#21273F",
        cornerRadius: 6,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.raw}× more likely than white women`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#21273F",
          font: { size: 12 },
          angle: -15,
        },
      },
      y: {
        title: {
          display: true,
          text: "Relative risk (× times)",
          color: "#21273F",
          font: { size: 12 },
        },
        beginAtZero: true,
        max: 4,
        ticks: {
          color: "#21273F",
          font: { size: 11 },
          stepSize: 1,
        },
        grid: { color: "rgba(0, 0, 0, 0.05)" },
      },
    },
  };

  // Carousel state and functionality
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Total number of infographic slides
  const autoSlideInterval = useRef(null);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto sliding functionality
  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 8000); // Change slide every 8 seconds

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, []);

  // Reset timer when manually changing slides
  const handleManualNavigation = (index) => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
    goToSlide(index);
    autoSlideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 8000);
  };

  // Slide content
  const slides = [
    {
      id: 1,
      title: "1. Maternal Risk Gap",
      description:
        "Black women are 3.7× more likely and Asian women 1.8× more likely to die during pregnancy compared to white women.",
      source: "MBRRACE-UK, 2023",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#C78E1D"
            strokeWidth="2"
          />
          <path
            d="M12 8V12L15 15"
            stroke="#C78E1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      showChart: true,
    },
    {
      id: 2,
      title: "2. Cultural Disconnect",
      description:
        "Language, culture, and faith barriers create obstacles that lead to misunderstandings, delayed treatment, and poorer outcomes.",
      source: "CORE20PLUS5, 2023",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#C78E1D"
            strokeWidth="2"
          />
          <path
            d="M3.6 9H20.4"
            stroke="#C78E1D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3.6 15H20.4"
            stroke="#C78E1D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 3C13.933 5.04 15 7.828 15 12C15 16.172 13.933 18.96 12 21"
            stroke="#C78E1D"
            strokeWidth="2"
          />
          <path
            d="M12 3C10.067 5.04 9 7.828 9 12C9 16.172 10.067 18.96 12 21"
            stroke="#C78E1D"
            strokeWidth="2"
          />
        </svg>
      ),
      showChart: false,
    },
    {
      id: 3,
      title: "3. Diagnostic Delays",
      description:
        "Minority women often experience later diagnoses in menopause, fertility, and chronic conditions — shaped by bias and poor cultural understanding.",
      source: "Women's Health Strategy, 2022",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
            stroke="#C78E1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      showChart: false,
    },
    {
      id: 4,
      title: "4. The Cost to the NHS",
      description:
        "When care isn't inclusive, early signs are missed. Those missed red flags cost the NHS around £2 billion each year in repeat visits and late interventions.",
      source: "NHS England, 2022",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V12M12 12V18M12 12H18M12 12H6"
            stroke="#C78E1D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#C78E1D"
            strokeWidth="2"
          />
        </svg>
      ),
      showChart: false,
    },
    {
      id: 5,
      title: "5. The Global Opportunity",
      description:
        "Closing the women's health gap isn't only the right thing to do — it could unlock $1 trillion in global GDP by 2040 through better wellbeing and participation.",
      source: "McKinsey Health Institute, 2023",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H21M3 12H21M3 18H21"
            stroke="#C78E1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3V6M12 12V15M12 18V21"
            stroke="#C78E1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      showChart: false,
    },
  ];

  return (
    <>
      {/* Infographic Section Start */}
      <section
        className="why-this-work-matters-infographic"
        style={{
          backgroundColor: "transparent",
          padding: "100px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2
              className="section-title__title"
              style={{ color: "#21273F", marginBottom: "15px" }}
            >
              Black and Asian women
            </h2>
            <p
              style={{
                marginBottom: "40px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Experience significantly higher risks in maternal health due to
              systemic inequalities. But also an opportunity for healthcare
              providers and community partners to drive change.
            </p>
          </div>

          {/* Chart display - always visible at the top */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="chart-container"
                style={{
                  background: "transparent",
                  borderRadius: "16px",
                  padding: "40px",
                  height: "350px",
                  border: "2px solid #C78E1D",
                  boxShadow: "none",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ height: "100%" }}>
                  <Bar data={data} options={options} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Infographic Carousel */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="infographic-carousel">
                {/* Carousel Container */}
                <div className="carousel-container position-relative">
                  {/* Carousel Items */}
                  <div
                    className="carousel-inner"
                    style={{ position: "relative", minHeight: "300px" }}
                  >
                    {slides.map((slide, index) => (
                      <motion.div
                        key={slide.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentSlide === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="carousel-item"
                        style={{
                          minWidth: "100%",
                          background: "transparent",
                          borderRadius: "16px",
                          padding: "40px",
                          border: "none",
                          boxShadow: "none",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: currentSlide === index ? 1 : 0,
                          pointerEvents:
                            currentSlide === index ? "all" : "none",
                        }}
                      >
                        <div
                          className="icon-wrapper"
                          style={{
                            width: "80px",
                            height: "80px",
                            margin: "0 auto 20px",
                            backgroundColor: "rgba(199, 142, 29, 0.15)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "rgba(199, 142, 29, 0.3)";
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "rgba(199, 142, 29, 0.15)";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {slide.icon}
                        </div>
                        <div className="slide-content">
                          <h3
                            style={{
                              color: "#21273F",
                              fontWeight: 600,
                              marginBottom: "15px",
                              position: "relative",
                              display: "inline-block",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#C78E1D";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#21273F";
                            }}
                          >
                            {slide.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "16px",
                              lineHeight: "1.6",
                              maxWidth: "700px",
                              margin: "0 auto 10px",
                            }}
                          >
                            {slide.description}
                          </p>
                          <p
                            style={{
                              marginTop: "10px",
                              fontSize: "13px",
                              color: "#9A8D78",
                            }}
                          >
                            Source: {slide.source}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                    gap: "20px",
                  }}
                >
                  {/* Arrow Buttons */}
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button
                      onClick={goToNextSlide}
                      className="carousel-control next"
                      aria-label="Next slide"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#fff",
                        border: "2px solid #C78E1D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 2,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#C78E1D";
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#fff";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 6L15 12L9 18"
                          stroke="#C78E1D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Carousel Indicators */}
                  <div style={{ display: "flex", gap: "10px" }}>
                    {slides.map((slide, index) => (
                      <button
                        key={slide.id}
                        onClick={() => handleManualNavigation(index)}
                        className={`indicator ${
                          currentSlide === index ? "active" : ""
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background:
                            currentSlide === index ? "#C78E1D" : "#E5BA6D",
                          opacity: currentSlide === index ? 1 : 0.5,
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sources */}
          <div className="row">
            <div className="col-12 text-center">
              <div
                style={{
                  maxWidth: "700px",
                  margin: "20px auto 0",
                  padding: "15px 20px",
                  borderTop: "1px solid rgba(199, 142, 29, 0.2)",
                  borderBottom: "1px solid rgba(199, 142, 29, 0.2)",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: "#9A8D78",
                    margin: "0",
                  }}
                >
                  <strong style={{ color: "#21273F", fontWeight: "500" }}>
                    Data Sources:
                  </strong>{" "}
                  MBRRACE-UK (2023), CORE20PLUS5 (2023), Women's Health Strategy
                  (2022), NHS England (2022), McKinsey Health Institute (2023)
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement Section */}
          <div className="row mt-5 pt-4 justify-content-center">
            <div className="col-lg-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mission-statement"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  alignItems: "stretch",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                {/* Left: Image and Info */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  {/* Image Section */}
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      height: "300px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      marginBottom: "24px",
                      boxShadow: "0 8px 32px rgba(199, 142, 29, 0.25)",
                      border: "4px solid #C78E1D",
                      alignSelf: "flex-end",
                    }}
                  >
                    <img
                      src="/assets/images/resources/dr-syeda-hero.svg"
                      alt="Dr Syeda"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display =
                          "flex";
                      }}
                    />
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(199, 142, 29, 0.1)",
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#C78E1D",
                        fontSize: "14px",
                        textAlign: "center",
                        padding: "20px",
                      }}
                    >
                      Image placeholder
                    </div>
                  </div>

                  {/* Dr Syeda Info */}
                  <h3
                    style={{
                      color: "#21273F",
                      fontWeight: 700,
                      fontSize: "22px",
                      marginBottom: "6px",
                      textAlign: "right",
                      alignSelf: "flex-end",
                    }}
                  >
                    Dr Syeda Insha Hussaini
                  </h3>
                  <p
                    style={{
                      color: "#C78E1D",
                      fontSize: "12px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      letterSpacing: "0.5px",
                      textAlign: "right",
                      alignSelf: "flex-end",
                    }}
                  >
                    MBChB, MRCGP, DRCOG, LoC IUD
                  </p>
                  <p
                    style={{
                      color: "#21273F",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      fontWeight: 500,
                      textAlign: "right",
                      flex: 1,
                      alignSelf: "flex-end",
                    }}
                  >
                    Founder & Women's Health Doctor | ThriveHer Clinic
                  </p>
                </div>

                {/* Right: Mission Callout and Buttons */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {/* Mission Bubble */}
                  <div
                    style={{
                      backgroundColor: "#21273F",
                      borderRadius: "16px",
                      padding: "32px",
                      textAlign: "center",
                      flex: 1,
                      boxShadow: "0 10px 40px rgba(199, 142, 29, 0.15)",
                      border: "2px solid #C78E1D",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h4
                      style={{
                        color: "#C78E1D",
                        fontWeight: 700,
                        fontSize: "16px",
                        marginBottom: "16px",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      Our Mission
                    </h4>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.8",
                        color: "#fdf3e4",
                        margin: "0",
                      }}
                    >
                      To bridge medicine, faith, and culture through doctor-led,
                      multilingual programmes — empowering women and improving
                      outcomes for every community.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      flexDirection: "column",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#C78E1D",
                        color: "#fff",
                        border: "none",
                        padding: "14px 24px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#b8791a";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(199, 142, 29, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#C78E1D";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Get your team trained
                    </button>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        color: "#C78E1D",
                        border: "2px solid #C78E1D",
                        padding: "12px 22px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#C78E1D";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(199, 142, 29, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#C78E1D";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Introduce us to your patients
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 768px) {
            .mission-statement {
              grid-template-columns: 1fr !important;
              gap: 25px !important;
            }
          }
        `}</style>
      </section>
      {/* Infographic Section End */}
    </>
  );
}
