"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MissionImpactSection() {
  const [inView, setInView] = useState(false);

  // Animation effect
  useEffect(() => {
    const section = document.getElementById("mission-impact");
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => observer && observer.disconnect();
  }, []);

  // Chart data
  const data = [
    { name: "White women", risk: 1, label: "1×" },
    { name: "Asian women", risk: 1.8, label: "1.8×" },
    { name: "Black women", risk: 3.7, label: "3.7×" },
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-white p-3 rounded shadow-md border border-[#A7B093]"
          role="tooltip"
        >
          <p className="text-[#21273F] font-medium mb-1">
            {payload[0].payload.name}
          </p>
          <p className="text-[#C78E1D]">{`${payload[0].value}× higher risk`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id="mission-impact"
      className={`w-full py-16 lg:py-20 px-4 sm:px-6 bg-[#F9E8CF]`}
      aria-labelledby="mission-impact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="mission-impact-heading"
            className="text-3xl md:text-4xl font-bold text-[#21273F] mb-2"
          >
            Numbers don't lie...
          </h2>
          <p className="text-xl text-[#21273F] mb-6">
            Minority women too often carry the burden of being unseen.
          </p>
          <p className="text-lg text-[#21273F] max-w-3xl mx-auto mb-12">
            We see it — and we want to bridge the gap in medicine, faith and
            culture through doctor-led, multilingual programmes.
          </p>
        </motion.div>

        {/* Chart Section */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-5 md:p-8 mb-8 border border-[#A7B093]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="w-full h-[320px] md:h-[380px]"
            role="figure"
            aria-label="Bar chart showing relative risk of maternal death by ethnicity"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 30, right: 30, left: 40, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#21273F", fontSize: 14 }}
                  axisLine={{ stroke: "#A7B093" }}
                  tickLine={{ stroke: "#A7B093" }}
                />
                <YAxis
                  label={{
                    value: "Relative Risk",
                    angle: -90,
                    position: "insideLeft",
                    style: {
                      textAnchor: "middle",
                      fill: "#21273F",
                      fontSize: 14,
                    },
                  }}
                  axisLine={{ stroke: "#A7B093" }}
                  tickLine={{ stroke: "#A7B093" }}
                  tick={{ fill: "#21273F" }}
                  domain={[0, 4]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="risk"
                  fill="#C78E1D"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1500}
                >
                  <LabelList
                    dataKey="label"
                    position="top"
                    fill="#21273F"
                    fontSize={14}
                    fontWeight={600}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Key facts */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-5 md:p-8 mb-8 border border-[#A7B093]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-[#21273F] mb-4">
            Women of Black African heritage are{" "}
            <span className="font-bold">83% more likely</span> to experience a
            near miss in childbirth. Missed red flags cost the NHS billions each
            year.
          </p>
          <p className="text-sm text-[#21273F] text-right italic">
            Sources: MBRRACE-UK, Women & Equalities Committee, CQC, The
            Guardian.
          </p>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-5 md:p-8 border border-[#A7B093]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xl text-[#21273F] leading-relaxed">
            To bridge medicine, faith, and culture through doctor-led,
            multilingual programmes — empowering women and improving outcomes
            for every community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
