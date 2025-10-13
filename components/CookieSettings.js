'use client'
import { useState } from 'react'

export default function CookieSettings() {
    const [showConsent, setShowConsent] = useState(false)

    const handleOpenSettings = () => {
        // Broadcast an in-page event that the CookieConsent listens for
        try {
            window.dispatchEvent(new Event('openCookiePreferences'))
        } catch (e) {
            // fallback: remove consent and reload
            localStorage.removeItem('thriveher_consent')
            window.location.reload()
        }
    }

    return (
        <>
            <button
                onClick={handleOpenSettings}
                className="cookie-settings-link"
                aria-label="Open cookie preferences settings"
            >
                Cookie settings
            </button>

            <style jsx>{`
                .cookie-settings-link {
                    background: none;
                    border: none;
                    color: inherit;
                    text-decoration: underline;
                    font-size: inherit;
                    cursor: pointer;
                    padding: 0;
                    font-family: inherit;
                    line-height: inherit;
                }

                .cookie-settings-link:hover {
                    opacity: 0.8;
                }

                .cookie-settings-link:focus {
                    outline: 2px solid #FFBF47;
                    outline-offset: 2px;
                }
            `}</style>
        </>
    )
}