"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyThisWorkMattersHero() {
  return (
    <>
      {/* Hero Section Start */}
      <section
        className="why-this-work-matters-hero"
        style={{
          height: "100vh",
          minHeight: "600px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Gradient Background */}
        <motion.div
          initial={{ opacity: 0.9 }}
          animate={{ opacity: [0.9, 0.95, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            background:
              "linear-gradient(135deg, #2a304d 0%, #32384f 40%, #373e58 70%, #3c4260 100%)",
          }}
        >
          {/* Rusty texture overlay */}
          <motion.div
            initial={{ opacity: 0.08 }}
            animate={{ opacity: [0.08, 0.12, 0.08] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg",%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.3"/%3E%3C/svg%3E\')',
              backgroundSize: "200px 200px",
            }}
          />
        </motion.div>

        <div className="container" style={{ zIndex: 1, position: "relative" }}>
          <div className="row">
            <div className="col-lg-8 col-md-10 text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="hero-content"
              >
                <h1
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 700,
                    marginBottom: "1.5rem",
                    color: "white",
                    lineHeight: 1.2,
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  Together, we can{" "}
                  <span style={{ color: "#C78E1D" }}>close the gap</span>
                  <br />
                  in women's health
                </h1>
                <div
                  style={{
                    fontSize: "clamp(1.1rem, 1.7vw, 1.25rem)",
                    maxWidth: "700px",
                    marginBottom: "2rem",
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <p style={{ marginBottom: "1.2rem" }}>
                    When care is built with{" "}
                    <span style={{ color: "#C78E1D", fontWeight: 500 }}>
                      understanding
                    </span>{" "}
                    and
                    <span style={{ color: "#C78E1D", fontWeight: 500 }}>
                      {" "}
                      respect
                    </span>
                    , every woman feels seen. By learning and working together,
                    we can make health fair for all.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            position: "absolute",
            bottom: "30px",
            left: "calc(50% - 40px)",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 16px",
            borderRadius: "20px",
          }}
        >
          <p
            style={{
              color: "rgba(255, 255, 255, 0.95)",
              marginBottom: "8px",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            See who's most affected
          </p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5L12 19M12 19L18 13M12 19L6 13"
                stroke="#C78E1D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>
      {/* Hero Section End */}
    </>
  );
}
