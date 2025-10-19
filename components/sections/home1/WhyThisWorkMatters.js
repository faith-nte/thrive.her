"use client";

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

export default function WhyThisWorkMatters() {
  const data = {
    labels: ["White women", "Asian women", "Black women"],
    datasets: [
      {
        label: "Relative risk of maternal mortality",
        data: [1, 1.8, 3.7],
        backgroundColor: (context) => {
          // Black women bar (index 2): gold
          // Asian women bar (index 1): lighter gold
          // White women bar (index 0): gray
          if (context.dataIndex === 2) return "#C78E1D"; // Project gold for Black women
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
      title: { display: false },
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

  return (
    <>
      {/*Why This Work Matters Section Start */}
      <section
        className="why-this-work-matters"
        style={{
          backgroundColor: "#fdf3e4",
          padding: "80px 0 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2
              className="section-title__title title-animation"
              style={{ color: "#21273F", marginBottom: "15px" }}
            >
              The Journey to Health Equity
            </h2>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              Every woman deserves to be seen, heard, and properly cared for.
            </p>
            <p
              style={{
                marginBottom: "40px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Yet minority women continue to face barriers that compromise their
              healthcare. Our journey through the data tells a powerful story of
              inequality—and opportunity.
            </p>
          </div>

          {/* Story Timeline with Zig-Zag Pattern */}
          <div className="story-timeline">
            {/* Step 1: The Problem - Left */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-lg-1 order-2 mt-lg-0 mt-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="timeline-content text-lg-end"
                  style={{
                    position: "relative",
                    paddingRight: "30px",
                  }}
                >
                  <span
                    className="timeline-number"
                    style={{
                      position: "absolute",
                      right: "-20px",
                      top: "0px",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#C78E1D",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                      boxShadow: "0 4px 10px rgba(199, 142, 29, 0.3)",
                      zIndex: 2,
                    }}
                  >
                    1
                  </span>
                  <h3
                    style={{
                      color: "#21273F",
                      fontWeight: 600,
                      marginBottom: "15px",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>
                      Maternal Risk Gap
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        height: "10px",
                        width: "60%",
                        background: "rgba(199, 142, 29, 0.15)",
                        zIndex: 0,
                      }}
                    ></span>
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Black women are{" "}
                    <span style={{ color: "#C78E1D", fontWeight: "bold" }}>
                      3.7× more likely
                    </span>{" "}
                    and Asian women{" "}
                    <span style={{ color: "#C78E1D", fontWeight: "bold" }}>
                      1.8× more likely
                    </span>{" "}
                    to die during pregnancy compared to white women.
                    <span
                      style={{
                        display: "block",
                        marginTop: "6px",
                        fontSize: "13px",
                        color: "#9A8D78",
                      }}
                    >
                      MBRRACE-UK, 2023
                    </span>
                  </p>
                </motion.div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="timeline-visual"
                  style={{
                    background: "rgba(249, 232, 207, 0.8)",
                    borderRadius: "16px",
                    padding: "40px",
                    height: "350px",
                    border: "1px solid rgba(199, 142, 29, 0.2)",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="why-this-work-matters__chart"
                    style={{ height: "100%" }}
                  >
                    <Bar data={data} options={options} />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Connector Line */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "60px", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="timeline-connector"
              style={{
                position: "relative",
                width: "4px",
                background:
                  "linear-gradient(180deg, rgba(229, 186, 109, 0.3) 0%, rgba(199, 142, 29, 0.7) 100%)",
                margin: "0 auto",
                zIndex: 1,
              }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#C78E1D",
                  boxShadow: "0 2px 6px rgba(199, 142, 29, 0.4)",
                }}
              ></motion.div>
            </motion.div>

            {/* Step 2: Key Barriers - Right */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="timeline-visual"
                  style={{
                    background: "rgba(249, 232, 207, 0.8)",
                    borderRadius: "16px",
                    padding: "40px",
                    border: "1px solid rgba(199, 142, 29, 0.2)",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "100%", textAlign: "center" }}>
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
                      }}
                    >
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
                    </div>
                    <h4
                      style={{
                        color: "#21273F",
                        fontWeight: 600,
                        marginBottom: "15px",
                      }}
                    >
                      Barriers to Care
                    </h4>
                    <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                      Language, culture, and faith barriers remain key drivers
                      of health inequality.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="timeline-content"
                  style={{
                    position: "relative",
                    paddingLeft: "30px",
                  }}
                >
                  <span
                    className="timeline-number"
                    style={{
                      position: "absolute",
                      left: "-20px",
                      top: "0px",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#C78E1D",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                      boxShadow: "0 4px 10px rgba(199, 142, 29, 0.3)",
                      zIndex: 2,
                    }}
                  >
                    2
                  </span>
                  <h3
                    style={{
                      color: "#21273F",
                      fontWeight: 600,
                      marginBottom: "15px",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>
                      Cultural Disconnect
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        height: "10px",
                        width: "60%",
                        background: "rgba(199, 142, 29, 0.15)",
                        zIndex: 0,
                      }}
                    ></span>
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Language, cultural, and faith barriers create significant
                    obstacles for minority women seeking healthcare, leading to
                    misunderstandings, delayed treatment, and poorer outcomes.
                    <span
                      style={{
                        display: "block",
                        marginTop: "6px",
                        fontSize: "13px",
                        color: "#9A8D78",
                      }}
                    >
                      CORE20PLUS5, 2023
                    </span>
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Connector Line */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 60, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="timeline-connector"
              style={{
                position: "relative",
                width: "4px",
                background:
                  "linear-gradient(180deg, rgba(229, 186, 109, 0.3) 0%, rgba(199, 142, 29, 0.7) 100%)",
                margin: "0 auto",
                zIndex: 1,
              }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#C78E1D",
                  boxShadow: "0 2px 6px rgba(199, 142, 29, 0.4)",
                }}
              ></motion.div>
            </motion.div>

            {/* Step 3: Delayed Diagnoses - Left */}
            <div
              className="row align-items-center mb-5 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="col-lg-6 order-lg-1 order-2 mt-lg-0 mt-4">
                <div
                  className="timeline-content text-lg-end"
                  style={{
                    position: "relative",
                    paddingRight: "30px",
                  }}
                >
                  <span
                    className="timeline-number"
                    style={{
                      position: "absolute",
                      right: "-20px",
                      top: "0px",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#C78E1D",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                      boxShadow: "0 4px 10px rgba(199, 142, 29, 0.3)",
                      zIndex: 2,
                    }}
                  >
                    3
                  </span>
                  <h3
                    style={{
                      color: "#21273F",
                      fontWeight: 600,
                      marginBottom: "15px",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>
                      Diagnostic Delays
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        height: "10px",
                        width: "60%",
                        background: "rgba(199, 142, 29, 0.15)",
                        zIndex: 0,
                      }}
                    ></span>
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Minority women experience significantly delayed diagnoses in
                    menopause, fertility issues, and chronic conditions due to
                    cultural barriers and unconscious bias.
                    <span
                      style={{
                        display: "block",
                        marginTop: "6px",
                        fontSize: "13px",
                        color: "#9A8D78",
                      }}
                    >
                      Women's Health Strategy, 2022
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div
                  className="timeline-visual"
                  style={{
                    background: "rgba(249, 232, 207, 0.8)",
                    borderRadius: "16px",
                    padding: "40px",
                    border: "1px solid rgba(199, 142, 29, 0.2)",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "100%", textAlign: "center" }}>
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
                      }}
                    >
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
                    </div>
                    <h4
                      style={{
                        color: "#21273F",
                        fontWeight: 600,
                        marginBottom: "15px",
                      }}
                    >
                      Missed Diagnoses
                    </h4>
                    <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                      Delayed and missed diagnoses in critical conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div
              className="timeline-connector"
              style={{
                position: "relative",
                height: "60px",
                width: "4px",
                background:
                  "linear-gradient(180deg, rgba(229, 186, 109, 0.3) 0%, rgba(199, 142, 29, 0.7) 100%)",
                margin: "0 auto",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#C78E1D",
                  boxShadow: "0 2px 6px rgba(199, 142, 29, 0.4)",
                }}
              ></div>
            </div>

            {/* Step 4: NHS Cost - Right */}
            <div
              className="row align-items-center mb-5 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="col-lg-6">
                <div
                  className="timeline-visual"
                  style={{
                    background: "rgba(249, 232, 207, 0.8)",
                    borderRadius: "16px",
                    padding: "40px",
                    border: "1px solid rgba(199, 142, 29, 0.2)",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "100%", textAlign: "center" }}>
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
                      }}
                    >
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
                    </div>
                    <h4
                      style={{
                        color: "#21273F",
                        fontWeight: 600,
                        marginBottom: "15px",
                      }}
                    >
                      NHS Impact
                    </h4>
                    <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                      Missed red flags cost the NHS an estimated{" "}
                      <span style={{ color: "#C78E1D", fontWeight: "bold" }}>
                        £2 billion
                      </span>{" "}
                      per year.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="timeline-content"
                  style={{
                    position: "relative",
                    paddingLeft: "30px",
                  }}
                >
                  <span
                    className="timeline-number"
                    style={{
                      position: "absolute",
                      left: "-20px",
                      top: "0px",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#C78E1D",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                      boxShadow: "0 4px 10px rgba(199, 142, 29, 0.3)",
                      zIndex: 2,
                    }}
                  >
                    4
                  </span>
                  <h3
                    style={{
                      color: "#21273F",
                      fontWeight: 600,
                      marginBottom: "15px",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>
                      The Economic Cost
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        height: "10px",
                        width: "60%",
                        background: "rgba(199, 142, 29, 0.15)",
                        zIndex: 0,
                      }}
                    ></span>
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    When cultural and language barriers prevent proper care, the
                    cost isn't just human suffering. Missed red flags and repeat
                    GP visits cost the NHS an estimated{" "}
                    <span style={{ color: "#C78E1D", fontWeight: "bold" }}>
                      £2 billion
                    </span>{" "}
                    annually.
                    <span
                      style={{
                        display: "block",
                        marginTop: "6px",
                        fontSize: "13px",
                        color: "#9A8D78",
                      }}
                    >
                      NHS England, 2022
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div
              className="timeline-connector"
              style={{
                position: "relative",
                height: "60px",
                width: "4px",
                background:
                  "linear-gradient(180deg, rgba(229, 186, 109, 0.3) 0%, rgba(199, 142, 29, 0.7) 100%)",
                margin: "0 auto",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#C78E1D",
                  boxShadow: "0 2px 6px rgba(199, 142, 29, 0.4)",
                }}
              ></div>
            </div>

            {/* Step 5: Global Impact - Left */}
            <div
              className="row align-items-center mb-5 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="col-lg-6 order-lg-1 order-2 mt-lg-0 mt-4">
                <div
                  className="timeline-content text-lg-end"
                  style={{
                    position: "relative",
                    paddingRight: "30px",
                  }}
                >
                  <span
                    className="timeline-number"
                    style={{
                      position: "absolute",
                      right: "-20px",
                      top: "0px",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#C78E1D",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                      boxShadow: "0 4px 10px rgba(199, 142, 29, 0.3)",
                      zIndex: 2,
                    }}
                  >
                    5
                  </span>
                  <h3
                    style={{
                      color: "#21273F",
                      fontWeight: 600,
                      marginBottom: "15px",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>
                      The Global Opportunity
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        height: "10px",
                        width: "60%",
                        background: "rgba(199, 142, 29, 0.15)",
                        zIndex: 0,
                      }}
                    ></span>
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Closing the women's health gap isn't just the right thing to
                    do — it could unlock{" "}
                    <span style={{ color: "#C78E1D", fontWeight: "bold" }}>
                      $1 trillion
                    </span>{" "}
                    in global GDP by 2040 through improved productivity,
                    participation, and wellbeing.
                    <span
                      style={{
                        display: "block",
                        marginTop: "6px",
                        fontSize: "13px",
                        color: "#9A8D78",
                      }}
                    >
                      McKinsey Health Institute, 2023
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div
                  className="timeline-visual"
                  style={{
                    background: "rgba(249, 232, 207, 0.8)",
                    borderRadius: "16px",
                    padding: "40px",
                    border: "1px solid rgba(199, 142, 29, 0.2)",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "100%", textAlign: "center" }}>
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
                      }}
                    >
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
                    </div>
                    <h4
                      style={{
                        color: "#21273F",
                        fontWeight: 600,
                        marginBottom: "15px",
                      }}
                    >
                      Economic Potential
                    </h4>
                    <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                      Closing the health gap could unlock{" "}
                      <span style={{ color: "#C78E1D", fontWeight: "bold" }}>
                        $1 trillion
                      </span>{" "}
                      in global GDP by 2040.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey's End: Our Mission */}
            <div className="row">
              <div className="col-12 text-center my-4">
                <div
                  className="journey-end"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "40px",
                      background:
                        "linear-gradient(180deg, rgba(199, 142, 29, 0.7) 0%, rgba(229, 186, 109, 0.3) 100%)",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "#C78E1D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 3px 10px rgba(199, 142, 29, 0.4)",
                      marginTop: "-6px",
                      marginBottom: "20px",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12L10 17L19 8"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-8 col-lg-10 mx-auto wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div
                  className="why-this-work-matters__mission"
                  style={{
                    background: "rgba(249, 232, 207, 0.8)",
                    borderRadius: "16px",
                    padding: "40px",
                    textAlign: "center",
                    marginBottom: "20px",
                    border: "1px solid rgba(199, 142, 29, 0.2)",
                    boxShadow: "rgba(0, 0, 0, 0.08) 0px 10px 30px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "3px",
                        backgroundColor: "#C78E1D",
                      }}
                    ></div>
                  </div>
                  <h3
                    className="mb-4"
                    style={{
                      color: "#21273F",
                      fontWeight: 600,
                      fontSize: "28px",
                    }}
                  >
                    Our Mission
                  </h3>
                  <p style={{ fontSize: "19px", lineHeight: "1.7" }}>
                    To bridge medicine, faith, and culture through doctor-led,
                    multilingual programmes — empowering women and improving
                    outcomes for every community.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources - Integrated */}
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
                    MBRRACE-UK (2023), CORE20PLUS5 (2023), Women's Health
                    Strategy (2022), NHS England (2022), McKinsey Health
                    Institute (2023)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Why This Work Matters Section End */}
    </>
  );
}
