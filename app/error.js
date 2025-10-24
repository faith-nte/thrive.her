"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f5f5" }}>
          <div style={{ textAlign: "center", padding: "40px 20px", maxWidth: "600px" }}>
            <div style={{ marginBottom: "30px" }}>
              <h1 style={{ fontSize: "72px", fontWeight: "bold", color: "#21273F", margin: "0 0 20px 0" }}>
                500
              </h1>
              <h2 style={{ fontSize: "32px", fontWeight: "600", color: "#21273F", margin: "0 0 15px 0" }}>
                Internal Server Error
              </h2>
              <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.6", margin: "0 0 30px 0" }}>
                We're sorry for the inconvenience. An unexpected error has occurred while processing your request.
              </p>
            </div>

            <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap", marginBottom: "30px" }}>
              <button
                onClick={() => reset()}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#D1A38A",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#c49279"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#D1A38A"}
              >
                Try Again
              </button>
              <Link
                href="/"
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#21273F",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background-color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#1a1f2e"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#21273F"}
              >
                Back to Home
              </Link>
            </div>

            <p style={{ fontSize: "14px", color: "#999", margin: "0" }}>
              If this problem persists, please{" "}
              <Link
                href="/contact"
                style={{ color: "#D1A38A", textDecoration: "none", fontWeight: "600" }}
              >
                contact us
              </Link>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
