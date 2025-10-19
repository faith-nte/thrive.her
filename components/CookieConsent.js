"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/CookieConsent.module.css";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [hasInitialConsent, setHasInitialConsent] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true and disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check for existing consent
    const savedConsent = localStorage.getItem("thriveher_consent");
    // Initialize the banner state right away
    setShowBanner(!savedConsent);
    setHasInitialConsent(!!savedConsent);
    if (savedConsent) {
      try {
        setCookiePreferences(JSON.parse(savedConsent));
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("thriveher_consent", JSON.stringify(allAccepted));
    setCookiePreferences(allAccepted);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectOptional = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("thriveher_consent", JSON.stringify(essentialOnly));
    setCookiePreferences(essentialOnly);
    setShowBanner(false);
    setShowPreferences(false);
    setHasInitialConsent(true);
  };

  // Debug function to reset cookie consent
  const resetConsent = () => {
    localStorage.removeItem("thriveher_consent");
    setShowBanner(true);
    setShowPreferences(false);
    setHasInitialConsent(false);
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "thriveher_consent",
      JSON.stringify(cookiePreferences)
    );
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  return (
    <>
      {showBanner && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-labelledby="cookie-title"
        >
          <div className={styles.cookieBanner}>
            <div className={styles.content}>
              <h2 id="cookie-title" className={styles.title}>
                Your privacy matters
              </h2>
              {!showPreferences ? (
                <div>
                  <p>
                    We use cookies to make Thrive.Her work better for you. Some
                    are essential to make the site function properly, while
                    others help us understand how people use our services so we
                    can improve them.
                  </p>
                  <div className={styles.buttonGroup}>
                    <button
                      onClick={handleAcceptAll}
                      className={`${styles.button} ${styles.primary}`}
                      aria-label="Accept all cookies"
                    >
                      <span className={styles.fullText}>
                        Accept all cookies
                      </span>
                      <span className={styles.shortText}>Accept all</span>
                    </button>
                    <button
                      onClick={handleRejectOptional}
                      className={styles.button}
                      aria-label="Reject optional cookies"
                    >
                      <span className={styles.fullText}>
                        Reject optional cookies
                      </span>
                      <span className={styles.shortText}>Reject</span>
                    </button>
                    <button
                      onClick={togglePreferences}
                      className={styles.button}
                      aria-label="Manage cookie preferences"
                    >
                      <span className={styles.fullText}>
                        Manage preferences
                      </span>
                      <span className={styles.shortText}>Settings</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className={styles.preferences}>
                    <div className={styles.preferenceItem}>
                      <label>
                        <input
                          type="checkbox"
                          checked={cookiePreferences.essential}
                          disabled
                          aria-label="Essential cookies (required)"
                        />
                        <span>Essential cookies</span>
                      </label>
                      <p>
                        Required for the website to function. Cannot be
                        disabled.
                      </p>
                    </div>
                    <div className={styles.preferenceItem}>
                      <label>
                        <input
                          type="checkbox"
                          checked={cookiePreferences.analytics}
                          onChange={(e) =>
                            setCookiePreferences({
                              ...cookiePreferences,
                              analytics: e.target.checked,
                            })
                          }
                          aria-label="Analytics cookies"
                        />
                        <span>Analytics cookies</span>
                      </label>
                      <p>
                        Help us improve our website by collecting anonymous
                        usage data.
                      </p>
                    </div>
                    <div className={styles.preferenceItem}>
                      <label>
                        <input
                          type="checkbox"
                          checked={cookiePreferences.marketing}
                          onChange={(e) =>
                            setCookiePreferences({
                              ...cookiePreferences,
                              marketing: e.target.checked,
                            })
                          }
                          aria-label="Marketing cookies"
                        />
                        <span>Marketing cookies</span>
                      </label>
                      <p>
                        Used to provide you with relevant content and
                        advertisements.
                      </p>
                    </div>
                  </div>
                  <div className={styles.buttonGroup}>
                    <button
                      onClick={handleSavePreferences}
                      className={`${styles.button} ${styles.primary}`}
                    >
                      Save preferences
                    </button>
                    <button
                      onClick={() => {
                        setShowPreferences(false);
                      }}
                      className={styles.button}
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Cookie Settings Button - Only show after initial consent */}
      {hasInitialConsent && !showBanner && !showPreferences && (
        <button
          onClick={() => setShowPreferences(true)}
          className={styles.floatingCookie}
          aria-label="Manage cookie settings"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
            <circle cx="8" cy="9" r="2" />
            <circle cx="15" cy="9" r="2" />
            <path d="M12 16c-1.5 0-2.5-1-2.5-1" />
          </svg>
        </button>
      )}

      {showPreferences && !showBanner && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-labelledby="cookie-preferences-title"
        >
          <div className={styles.cookieBanner}>
            <div className={styles.content}>
              <h2 id="cookie-preferences-title" className={styles.title}>
                Cookie Preferences
              </h2>
              <div className={styles.preferences}>
                <div className={styles.preferenceItem}>
                  <label>
                    <input
                      type="checkbox"
                      checked={cookiePreferences.essential}
                      disabled
                      aria-label="Essential cookies (required)"
                    />
                    <span>Essential cookies</span>
                  </label>
                  <p>
                    Required for the website to function. Cannot be disabled.
                  </p>
                </div>
                <div className={styles.preferenceItem}>
                  <label>
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={(e) =>
                        setCookiePreferences({
                          ...cookiePreferences,
                          analytics: e.target.checked,
                        })
                      }
                      aria-label="Analytics cookies"
                    />
                    <span>Analytics cookies</span>
                  </label>
                  <p>
                    Help us improve our website by collecting anonymous usage
                    data.
                  </p>
                </div>
                <div className={styles.preferenceItem}>
                  <label>
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={(e) =>
                        setCookiePreferences({
                          ...cookiePreferences,
                          marketing: e.target.checked,
                        })
                      }
                      aria-label="Marketing cookies"
                    />
                    <span>Marketing cookies</span>
                  </label>
                  <p>
                    Used to provide you with relevant content and
                    advertisements.
                  </p>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button
                  onClick={handleSavePreferences}
                  className={`${styles.button} ${styles.primary}`}
                >
                  Save preferences
                </button>
                <button
                  onClick={() => setShowPreferences(false)}
                  className={styles.button}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
