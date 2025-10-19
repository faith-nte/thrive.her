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
        label: "Deaths per 100,000 births",
        data: [8, 14, 30],
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
          label: (context) => `${context.raw} deaths per 100,000 births`,
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
          text: "Deaths per 100,000 births",
          color: "#21273F",
          font: { size: 12 },
        },
        beginAtZero: true,
        max: 30,
        ticks: {
          color: "#21273F",
          font: { size: 11 },
          stepSize: 6,
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
              Numbers don't lie...
            </h2>
            <p style={{ marginBottom: "40px" }}>
              Minority women too often carry the burden of being unseen.
            </p>
          </div>

          <div className="row">
            {/* Intro Card */}
            <div
              className="col-xl-8 col-lg-8 mx-auto wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div
                className="why-this-work-matters__card"
                style={{
                  background: "rgba(249, 232, 207, 0.8)",
                  borderRadius: "16px",
                  padding: "40px",
                  textAlign: "center",
                  marginBottom: "50px",
                  border: "1px solid rgba(199, 142, 29, 0.2)",
                  boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
                }}
              >
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  We see it — and we want to bridge the gap in medicine, faith
                  and culture through doctor-led, multilingual programmes.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Chart Card */}
            <div
              className="col-xl-10 col-lg-10 mx-auto wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div
                className="why-this-work-matters__card"
                style={{
                  background: "rgba(249, 232, 207, 0.8)",
                  borderRadius: "16px",
                  padding: "40px",
                  textAlign: "center",
                  marginBottom: "50px",
                  border: "1px solid rgba(199, 142, 29, 0.2)",
                  boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
                }}
              >
                <h3
                  className="text-center mb-4"
                  style={{ color: "#21273F", fontWeight: 600 }}
                >
                  Maternal Mortality Rates by Ethnicity in the UK
                </h3>
                <div
                  className="why-this-work-matters__chart"
                  style={{ height: "350px" }}
                >
                  <Bar data={data} options={options} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Key Facts Card */}
            <div
              className="col-xl-8 col-lg-8 mx-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div
                className="why-this-work-matters__card"
                style={{
                  background: "rgba(249, 232, 207, 0.8)",
                  borderRadius: "16px",
                  padding: "40px",
                  textAlign: "center",
                  marginBottom: "50px",
                  border: "1px solid rgba(199, 142, 29, 0.2)",
                  boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
                }}
              >
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  Women of Black African heritage are{" "}
                  <span style={{ color: "#C78E1D", fontWeight: "bold" }}>
                    83% more likely
                  </span>{" "}
                  to experience a near miss in childbirth. Missed red flags cost
                  the NHS{" "}
                  <span style={{ color: "#C78E1D", fontWeight: "bold" }}>
                    billions
                  </span>{" "}
                  each year.
                </p>
              </div>
            </div>
          </div>

          {/* Sources */}
          <div className="row">
            <div
              className="col-xl-8 col-lg-8 mx-auto wow fadeInUp"
              data-wow-delay="400ms"
            >
              <p
                className="text-center"
                style={{
                  fontSize: "13px",
                  fontStyle: "italic",
                  color: "#9A8D78",
                  marginBottom: "50px",
                  opacity: "0.85",
                }}
              >
                Sources: MBRRACE-UK, Women & Equalities Committee, CQC, The
                Guardian.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Mission Statement Card */}
            <div
              className="col-xl-8 col-lg-8 mx-auto wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div
                className="why-this-work-matters__card"
                style={{
                  background: "rgba(249, 232, 207, 0.8)",
                  borderRadius: "16px",
                  padding: "40px",
                  textAlign: "center",
                  marginBottom: "50px",
                  border: "1px solid rgba(199, 142, 29, 0.2)",
                  boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
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
                      width: "60px",
                      height: "3px",
                      backgroundColor: "#C78E1D",
                    }}
                  ></div>
                </div>
                <h3
                  className="mb-4"
                  style={{ color: "#21273F", fontWeight: 600 }}
                >
                  Our Mission
                </h3>
                <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
                  To bridge medicine, faith, and culture through doctor-led,
                  multilingual programmes — empowering women and improving
                  outcomes for every community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Why This Work Matters Section End */}
    </>
  );
}
