"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Helper for card tilt effect
function useCardTilt(cardCount) {
  const [tilt, setTilt] = React.useState(
    Array(cardCount).fill({ x: 0, y: 0, scale: 1 })
  );
  function handleMouseMove(idx, e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt((prev) =>
      prev.map((t, i) =>
        i === idx
          ? {
              x: y * 10,
              y: -x * 10,
              scale: 1.04,
            }
          : t
      )
    );
  }
  function handleMouseLeave(idx) {
    setTilt((prev) =>
      prev.map((t, i) => (i === idx ? { x: 0, y: 0, scale: 1 } : t))
    );
  }
  return { tilt, handleMouseMove, handleMouseLeave };
}

// Add responsive styles
const gridStyles = `
  @media (max-width: 768px) {
    .stats-block {
      grid-template-columns: 1fr !important;
    }
  }
  @media (max-width: 480px) {
    .stats-block {
      grid-template-columns: 1fr !important;
      gap: 1rem !important;
    }
  }
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;

// Inject styles
if (
  typeof document !== "undefined" &&
  !document.getElementById("stats-block-styles")
) {
  const style = document.createElement("style");
  style.id = "stats-block-styles";
  style.textContent = gridStyles;
  document.head.appendChild(style);
}

export default function WhyThisWorkMattersInfographic() {
  const data = {
    labels: ["White", "Black", "Asian"],
    datasets: [
      {
        label: "Maternal Mortality Rate",
        data: [1, 3.7, 1.8],
        backgroundColor: ["#A7B093", "#D1A38A", "#C78E1D"],
      },
    ],
  };
  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      datalabels: {
        display: true,
        color: "#21273F",
        font: {
          weight: "bold",
          size: 14,
        },
        padding: 8,
        anchor: "end",
        align: "right",
      },
    },
    scales: {
      x: { grid: { display: false }, beginAtZero: true, max: 4 },
      y: { grid: { display: false } },
    },
  };

  return (
    <section
      className="why-this-work-matters-infographic"
      style={{
        background: "var(--thriveher-cream)",
        padding: "120px 20px 140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h40v40H0z" fill="none" stroke="%23000" stroke-width="0.5"/%3E%3Ccircle cx="10" cy="10" r="1" fill="%23000" opacity="0.3"/%3E%3Ccircle cx="30" cy="30" r="1" fill="%23000" opacity="0.3"/%3E%3C/svg%3E\')',
          backgroundRepeat: "repeat",
          pointerEvents: "none",
        }}
      ></div>
      <div
        className="container"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Chart display - moved to top */}
        <div
          className="row justify-content-center mb-5"
          style={{ marginTop: "60px", marginBottom: "7rem" }}
        >
          <div className="col-lg-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="chart-container"
              style={{
                background: "rgba(167, 176, 147, 0.1)",
                borderRadius: "16px",
                padding: "32px",
                height: "auto",
                border: "1px solid rgba(253, 243, 228, 0.1)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 20px rgba(33, 39, 63, 0.15)",
                position: "relative",
                overflow: "visible",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  height: "280px",
                  width: "100%",
                  position: "relative",
                  marginBottom: "16px",
                }}
              >
                <Bar data={data} options={options} />
              </div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.8rem",
                  color: "#888888",
                  fontStyle: "italic",
                  margin: "0",
                  padding: "12px 0 0 0",
                  borderTop: "1px solid rgba(167, 176, 147, 0.2)",
                }}
              >
                Source: MBRRACE-UK, 2023
              </p>
            </motion.div>
          </div>
        </div>
        <div
          className="section-title text-center mb-5"
          style={{ marginBottom: "5rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                maxWidth: "800px",
                margin: "0 auto 24px",
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                color: "#21273F",
                lineHeight: 1.4,
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              Every number represents a woman whose story could have ended
              differently with better care.
            </h2>
          </motion.div>
        </div>
        {/* Statistics with arrow pointing up */}
        <div
          className="row justify-content-center mb-5"
          style={{ marginTop: "60px", marginBottom: "5rem" }}
        >
          <div className="col-lg-10">
            {/* Arrow pointing upward to chart */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "8px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  display: "inline-block",
                  animation: "bounce 2s infinite",
                  transform: "scaleY(-1)",
                }}
              >
                <path
                  d="M16 2v20M10 20l6 6 6-6"
                  fill="none"
                  stroke="#C78E1D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Humanized chart caption */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                textAlign: "center",
                fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
                color: "#21273F",
                fontWeight: 600,
                marginBottom: "48px",
                lineHeight: 1.7,
                backgroundColor: "rgba(199, 142, 29, 0.08)",
                padding: "20px 24px",
                borderRadius: "12px",
                border: "2px solid #C78E1D",
                position: "relative",
              }}
            >
              Black women are almost four times more likely to die during
              pregnancy.
              <br />
              Asian women are nearly twice as likely.
              <br />
              This gap has barely changed in a decade.
            </motion.p>
          </div>
        </div>
        {/* Interactive Stats Block */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <StatsBlockInteractive />
          </div>
        </div>
        {/* Closing CTA */}
        <div
          className="row justify-content-center"
          style={{ marginTop: "100px", marginBottom: "60px" }}
        >
          <div className="col-lg-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  color: "#21273F",
                  lineHeight: 1.8,
                  marginBottom: "16px",
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                }}
              >
                Together, we can close this gap.
                <br />
                One conversation, one lesson, one act of care at a time.
              </p>
            </motion.div>
            <motion.a
              href="/training"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                backgroundColor: "#C78E1D",
                color: "#fff",
                boxShadow: "0 8px 24px rgba(199, 142, 29, 0.25)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              viewport={{ once: true }}
              style={{
                display: "inline-block",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "40px",
                paddingRight: "40px",
                backgroundColor: "#21273F",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "1.125rem",
                cursor: "pointer",
                border: "none",
                marginTop: "24px",
              }}
            >
              Explore Our Training
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBlockInteractive() {
  const stats = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Heart with pulse */}
          <path
            d="M12 2C12 2 5 8 5 13C5 16.3137 7.68629 19 11 19C13.21 19 15.16 17.9 16.2 16.2C17.24 17.9 19.19 19 21.4 19C23.7137 19 26 16.3137 26 13C26 8 19 2 12 2Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M12 4C12 4 6 9 6 13C6 15.76 8.24 18 11 18C12.6 18 14.07 17.27 15 16.11C15.93 17.27 17.4 18 19 18C20.76 18 22 16.76 22 15C22 13.5 20.5 9 12 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "The Risk That Persists",
      figure: "3.7× / 1.8×",
      accentColor: "#21273F",
      highlight:
        "Black and Asian women face far greater risk in pregnancy. These are not just numbers but lives cut short.",
      humanInsight: null,
      source: "MBRRACE-UK (2023)",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Two people talking */}
          <circle cx="7" cy="6" r="2" fill="currentColor" fillOpacity="0.3" />
          <circle cx="17" cy="6" r="2" fill="currentColor" fillOpacity="0.3" />
          <path
            d="M4 9C4 8.45 4.45 8 5 8H9C9.55 8 10 8.45 10 9V13C10 13.55 9.55 14 9 14H7L5 16V14C4.45 14 4 13.55 4 13V9Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M14 9C14 8.45 14.45 8 15 8H19C19.55 8 20 8.45 20 9V13C20 13.55 19.55 14 19 14H17L15 16V14C14.45 14 14 13.55 14 13V9Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
        </svg>
      ),
      title: "When Care Misses Culture",
      figure: "Language barriers still exist",
      accentColor: "#21273F",
      highlight:
        "When culture or faith is not understood, warning signs are lost. Understanding saves time, trust and lives.",
      humanInsight: null,
      source: "CORE20PLUS5 (2023)",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Magnifying glass / discovery */}
          <circle
            cx="10"
            cy="10"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M14.5 14.5L19 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="10" r="3" fill="currentColor" fillOpacity="0.1" />
          <path
            d="M8 10H12M10 8V12"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      ),
      title: "Bias Delays the Diagnosis",
      figure: "Delays cost lives",
      accentColor: "#21273F",
      highlight:
        "Unseen bias means symptoms are missed until it is too late. Listening early can prevent harm.",
      humanInsight: null,
      source: "Women's Health Strategy (2022)",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pound sign / cost */}
          <path
            d="M8 4H16M8 8H16M10 4V16C10 17.66 11.34 19 13 19H14M8 12H14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "The Cost of Delay",
      figure: "£2 billion each year",
      accentColor: "#21273F",
      highlight:
        "Late action costs the NHS billions and families their peace. Fair, faster care protects everyone.",
      humanInsight: null,
      source: "NHS England (2022)",
    },
  ];

  const { tilt, handleMouseMove, handleMouseLeave } = useCardTilt(stats.length);

  return (
    <div
      className="stats-block"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem",
        margin: "80px auto 3rem",
        maxWidth: "1200px",
        background: "transparent",
        borderRadius: "16px",
        padding: "0",
      }}
    >
      {stats.map((stat, idx) => {
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: "0 12px 32px rgba(33, 39, 63, 0.12)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              hover: { duration: 0.3, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            style={{
              textAlign: "left",
              background: "rgba(167, 176, 147, 0.08)",
              borderRadius: "16px",
              border: `2px solid ${stat.accentColor}`,
              borderLeft: `4px solid ${stat.accentColor}`,
              backdropFilter: "blur(4px)",
              boxShadow: "0 4px 12px rgba(33, 39, 63, 0.08)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseMove={(e) => handleMouseMove(idx, e)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <div style={{ marginBottom: "16px", color: stat.accentColor }}>
              {stat.icon}
            </div>
            <div
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                color: stat.accentColor,
                fontWeight: 800,
                marginBottom: "16px",
                letterSpacing: "-0.8px",
              }}
            >
              {stat.figure}
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#21273F",
                marginBottom: "16px",
                lineHeight: 1.7,
                flex: 1,
                fontWeight: 400,
                opacity: 0.9,
              }}
            >
              {stat.highlight}
            </p>
            {stat.humanInsight && (
              <div
                style={{
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(33, 39, 63, 0.08)",
                  marginBottom: "12px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#21273F",
                    fontWeight: 500,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    margin: 0,
                    opacity: 0.85,
                  }}
                >
                  {stat.humanInsight}
                </p>
              </div>
            )}
            <span
              style={{
                fontSize: "0.8rem",
                color: "#21273F",
                fontStyle: "italic",
                marginTop: "auto",
                opacity: 0.7,
              }}
            >
              {stat.source}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
