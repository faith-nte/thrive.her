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
      className={`section-secondary w-full transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#21273F] mb-4">
            The Challenge in Numbers
          </h2>
          <p className="text-lg text-[#21273F] max-w-3xl mx-auto">
            Maternal health inequalities persist across the UK, with significant
            disparities in outcomes based on ethnicity, language access, and
            cultural understanding.
          </p>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-10 border border-[#A7B093]">
          <h3 className="text-xl font-bold text-[#21273F] mb-4">
            Relative Risk of Maternal Death
          </h3>
          <div className="w-full h-[300px] md:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 30, right: 30, left: 20, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#21273F", fontSize: 12 }}
                  axisLine={{ stroke: "#A7B093" }}
                  tickLine={{ stroke: "#A7B093" }}
                />
                <YAxis
                  hide={window?.innerWidth < 640}
                  axisLine={{ stroke: "#A7B093" }}
                  tickLine={{ stroke: "#A7B093" }}
                  tick={{ fill: "#21273F" }}
                  domain={[0, 4]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="risk"
                  fill="#C78E1D"
                  radius={[6, 6, 0, 0]}
                  animationDuration={1500}
                >
                  <LabelList
                    dataKey="label"
                    position="top"
                    fill="#21273F"
                    fontSize={12}
                    fontWeight={600}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-[#21273F] mt-3 italic">
            Relative risk compared to White women (baseline = 1×)
          </p>
        </div>

        {/* Key facts */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-10 border border-[#A7B093]">
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
        </div>

        {/* Mission statement - Grand & Mobile Optimized */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
          {/* Gradient background with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#21273F] via-[#2a304d] to-[#323950] opacity-95"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;opacity=0.03')] bg-repeat"></div>

          {/* Decorative accent bars */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C78E1D] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A7B093] to-transparent"></div>

          {/* Content */}
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Mission header */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-[#C78E1D] to-[#A7B093] rounded-full"></div>
                <span className="text-[#C78E1D] text-xs md:text-sm font-semibold tracking-widest uppercase">
                  Our North Star
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight">
                Our Mission
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#C78E1D] to-[#A7B093] rounded-full"></div>
            </div>

            {/* Mission statement text */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#F9E8CF] leading-relaxed md:leading-loose font-light mb-8 max-w-4xl">
              To bridge
              <span className="font-bold text-[#C78E1D] mx-2">
                medicine, faith, and culture
              </span>
              through
              <span className="font-bold text-[#A7B093] mx-2">
                doctor-led, multilingual programmes
              </span>
              — empowering women and improving outcomes for every community.
            </p>

            {/* Emphasis boxes - responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
              {/* Box 1 */}
              <div className="bg-[#C78E1D] bg-opacity-10 border border-[#C78E1D] border-opacity-30 rounded-lg p-4 md:p-6 backdrop-blur-sm">
                <div className="text-[#C78E1D] text-sm font-semibold uppercase tracking-wide mb-2">
                  Core Focus
                </div>
                <p className="text-white text-base md:text-lg font-medium">
                  Eliminate health inequities through culturally competent care
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-[#A7B093] bg-opacity-10 border border-[#A7B093] border-opacity-30 rounded-lg p-4 md:p-6 backdrop-blur-sm">
                <div className="text-[#A7B093] text-sm font-semibold uppercase tracking-wide mb-2">
                  Impact
                </div>
                <p className="text-white text-base md:text-lg font-medium">
                  Save lives through multilingual, faith-respecting programmes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
