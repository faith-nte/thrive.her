"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";

const resources = [
  {
    id: 1,
    title: "Cultural Competency Training Guide",
    description:
      "A comprehensive guide to delivering culturally competent care for NHS staff.",
    category: "Training",
    link: "#",
  },
  {
    id: 2,
    title: "Maternal Health Outcomes Report 2024",
    description:
      "Key findings on maternal health inequities across UK ethnicities.",
    category: "Research",
    link: "#",
  },
  {
    id: 3,
    title: "Community Champions Toolkit",
    description:
      "Resources for community leaders to support grassroots engagement.",
    category: "Toolkit",
    link: "#",
  },
  {
    id: 4,
    title: "Clinical Practice Guidelines",
    description:
      "Evidence-based guidelines for culturally sensitive care delivery.",
    category: "Clinical",
    link: "#",
  },
  {
    id: 5,
    title: "Multilingual Patient Resources",
    description: "Patient-friendly materials in multiple languages.",
    category: "Patient",
    link: "#",
  },
  {
    id: 6,
    title: "Training Program Schedule",
    description: "Upcoming training dates and registration information.",
    category: "Training",
    link: "#",
  },
];

export default function Resources() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Resources">
        {/* Resources Section */}
        <section
          className="py-24 sm:py-32 lg:py-40"
          style={{ backgroundColor: "#F9E8CF" }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                style={{ color: "#21273F" }}
              >
                Resources & Tools
              </h1>
              <p
                className="mt-6 text-lg leading-8"
                style={{ color: "#21273F" }}
              >
                Download training materials, clinical guidelines, and community
                resources to support culturally competent care.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #D1A38A",
                  }}
                >
                  {/* Thumbnail Placeholder */}
                  <div
                    className="h-40 flex items-center justify-center text-sm font-semibold"
                    style={{ backgroundColor: "#E8F3F3", color: "#3A7C7C" }}
                  >
                    {resource.category}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{ color: "#D1A38A" }}
                    >
                      {resource.category}
                    </p>
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{ color: "#21273F" }}
                    >
                      {resource.title}
                    </h3>
                    <p
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: "#21273F" }}
                    >
                      {resource.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={resource.link}
                      className="inline-block rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: "#D1A38A", color: "#21273F" }}
                    >
                      Download / View →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CMS Placeholder Section */}
            <div
              className="mt-16 rounded-lg p-8 text-center"
              style={{
                backgroundColor: "#E8F3F3",
                border: "2px dashed #3A7C7C",
              }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#21273F" }}
              >
                📁 Upload Resources (CMS-Ready)
              </h3>
              <p style={{ color: "#21273F" }}>
                This section can be connected to a CMS for staff and admins to
                upload new resources, manage categories, and track downloads.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
