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
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(to bottom, #F9F6F1, #ffffff)",
        padding: "120px 20px 140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <div
          className="section-title text-center mb-5"
          style={{ marginBottom: "80px" }}
        >
          <motion.h2
            className="section-title__title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              color: "#21273F",
              marginBottom: "24px",
              fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Why This Work Matters
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto 24px",
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                color: "#21273F",
                lineHeight: 1.4,
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              Every number below represents{" "}
              <span style={{ color: "#D1A38A" }}>a woman whose story</span>{" "}
              could have ended differently with better care.
            </p>
            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                color: "#444444",
                lineHeight: 1.8,
                letterSpacing: "0.3px",
                fontWeight: 400,
              }}
            ></p>
          </motion.div>
        </div>
        {/* Chart display - always visible at the top */}
        <div
          className="row justify-content-center mb-5"
          style={{ marginTop: "60px", marginBottom: "80px" }}
        >
          <div className="col-lg-10">
            {/* Humanized chart caption */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                textAlign: "center",
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                color: "#21273F",
                fontWeight: 600,
                marginBottom: "24px",
                lineHeight: 1.7,
              }}
            >
              Black women are almost four times more likely to die during
              pregnancy.
              <br />
              Asian women are nearly twice as likely.
              <br />
              This gap has barely changed in a decade.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="chart-container"
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "32px",
                height: "280px",
                border: "1px solid rgba(199, 142, 29, 0.12)",
                boxShadow: "0 1px 6px rgba(33, 39, 63, 0.04)",
                position: "relative",
                overflow: "visible",
                transition: "all 0.3s ease",
                opacity: 0.95,
              }}
            >
              <div
                style={{ height: "100%", width: "100%", position: "relative" }}
              >
                <Bar data={data} options={options} />
              </div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.85rem",
                  color: "#7D7D7D",
                  fontStyle: "italic",
                  marginTop: "12px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
              >
                Source: MBRRACE-UK, 2023
              </p>
            </motion.div>
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
        {/* Sources */}
        <div className="row">
          <div className="col-12 text-center">
            <div
              style={{
                maxWidth: "700px",
                margin: "20px auto 0",
                padding: "15px 20px",
                borderTop: "1px solid rgba(199, 142, 29, 0.15)",
                borderBottom: "1px solid rgba(199, 142, 29, 0.15)",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontStyle: "italic",
                  color: "#7D7D7D",
                  margin: "0",
                }}
              ></p>
            </div>
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
        const accentColors = ["#D1A38A", "#C78E1D", "#A7B093", "#21273F"];
        const accentColor = accentColors[idx];

        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 6px 20px rgba(33, 39, 63, 0.1)",
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
              background: "#fff",
              borderRadius: "16px",
              border: "none",
              borderTop: `4px solid ${accentColor}`,
              boxShadow: "0 2px 8px rgba(33, 39, 63, 0.06)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              cursor: "pointer",
              transform: `perspective(700px) rotateX(${tilt[idx].x}deg) rotateY(${tilt[idx].y}deg) scale(${tilt[idx].scale})`,
            }}
            onMouseMove={(e) => handleMouseMove(idx, e)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <div style={{ marginBottom: "16px", color: accentColor }}>
              {stat.icon}
            </div>
            <div
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                color: accentColor,
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
                color: "#555555",
                marginBottom: "16px",
                lineHeight: 1.7,
                flex: 1,
                fontWeight: 400,
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
                  }}
                >
                  {stat.humanInsight}
                </p>
              </div>
            )}
            <span
              style={{
                fontSize: "0.8rem",
                color: "#7D7D7D",
                fontStyle: "italic",
                marginTop: "auto",
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
