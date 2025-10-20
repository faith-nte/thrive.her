"use client";

// Main export file for WhyThisWorkMatters functionality
// Combines Hero and Infographic components

import React from "react";
import WhyThisWorkMattersHero from "./WhyThisWorkMattersHero";
import WhyThisWorkMattersInfographic from "./WhyThisWorkMattersInfographic";

export default function WhyThisWorkMatters() {
  return (
    <>
      <WhyThisWorkMattersHero />
      <WhyThisWorkMattersInfographic />
    </>
  );
}
