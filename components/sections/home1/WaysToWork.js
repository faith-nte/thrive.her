"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WaysToWorkSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById("ways-to-work");
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (section) observer.observe(section);
    return () => observer && observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      title: "Community Champions",
      description:
        "Partner with community leaders to deliver grassroots training and culturally tailored support.",
      icon: "👥",
      details: [
        "Train local advocates",
        "Peer-to-peer support",
        "Community events",
      ],
    },
    {
      id: 2,
      title: "Clinical Leaders",
      description:
        "Work with NHS and clinical teams to integrate culturally competent practices into standard care.",
      icon: "⚕️",
      details: ["Staff training", "Policy integration", "Outcomes measurement"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="ways-to-work"
      className="py-24 sm:py-32 lg:py-40"
      style={{ backgroundColor: "--thriveher-cream" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#D1A38A" }}
          >
            Ways to Partner
          </p>
          <h2
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
            style={{ color: "#21273F" }}
          >
            Ways to Work With Us
          </h2>
          <p className="text-lg leading-8" style={{ color: "#21273F" }}>
            Choose the partnership model that best fits your organisational
            goals and capacity.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2"
              style={{
                backgroundColor: "#D1A38A",
                color: "#21273F",
              }}
              variants={cardVariants}
            >
              {/* Icon & Title */}
              <div className="p-8">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "2px",
                  backgroundColor: "rgba(33, 39, 63, 0.2)",
                }}
              ></div>

              {/* Description */}
              <div className="p-8">
                <p className="text-base leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Details Bullets */}
                <ul className="space-y-3 mb-8">
                  {card.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          backgroundColor: "#21273F",
                          color: "#D1A38A",
                        }}
                      >
                        ✓
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className="rounded-md px-6 py-3 text-sm font-semibold transition-all hover:opacity-90 w-full text-center"
                  style={{
                    backgroundColor: "#21273F",
                    color: "#F9E8CF",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1a1e30";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#21273F";
                  }}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-6" style={{ color: "#21273F" }}>
            Ready to make a difference?
          </p>
          <button
            className="rounded-md px-8 py-3 text-sm font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: "#D1A38A",
              color: "#21273F",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#BB8C74";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#D1A38A";
            }}
          >
            Start a Partnership Today
          </button>
        </div>
      </div>
    </section>
  );
}
