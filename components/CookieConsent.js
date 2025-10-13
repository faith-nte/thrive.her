"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './CookieConsent.module.css'

const STORAGE_KEY = 'thriveher_consent'

function defaultConsent() {
  return {
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
    version: '1.0'
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [prefsOpen, setPrefsOpen] = useState(false)
  const [preferences, setPreferences] = useState(defaultConsent())
  const dialogRef = useRef(null)
  const lastFocused = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        setPreferences({ ...defaultConsent(), ...parsed })
        setVisible(false)
      } else {
        setVisible(true)
      }
    } catch (e) {
      console.error('cookie read error', e)
      setVisible(true)
    }

    const openHandler = () => {
      lastFocused.current = document.activeElement
      setPrefsOpen(true)
    }
    window.addEventListener('openCookiePreferences', openHandler)
    return () => window.removeEventListener('openCookiePreferences', openHandler)
  }, [])

  useEffect(() => {
    if (prefsOpen && dialogRef.current) {
      const el = dialogRef.current
      const focusable = el.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      focusable?.focus()
    } else if (!prefsOpen && lastFocused.current) {
      try { lastFocused.current.focus() } catch (e) {}
    }
  }, [prefsOpen])

  const saveConsent = (consent) => {
    const final = { ...defaultConsent(), ...consent, timestamp: new Date().toISOString() }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(final))
      try { window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: final })) } catch (e) {}
    } catch (e) {
      console.error('failed to save consent', e)
    }
    setPreferences(final)
    setPrefsOpen(false)
    setVisible(false)
  }

  const acceptAll = () => saveConsent({ essential: true, analytics: true, marketing: true, functional: true })
  const rejectOptional = () => saveConsent({ essential: true, analytics: false, marketing: false, functional: false })

  const togglePref = (key) => setPreferences(prev => ({ ...prev, [key]: !prev[key] }))

  if (!visible && !prefsOpen) return null

  return (
    <>
      {!prefsOpen && visible && (
        <div className={styles.banner} role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
          <div className={styles.inner}>
            <div className={styles.copy}>
              <h3 id="cookie-title" className={styles.title}>🍪 We use cookies</h3>
              <p id="cookie-desc" className={styles.text}>
                We use cookies to enhance your experience on Thrive.Her. Some are essential for functionality, while others help us improve our services.
              </p>
              <p className={styles.small}><Link href="/privacy-policy">Privacy Policy</Link></p>
            </div>

            <div className={styles.actions}>
              <button className={styles.primary} onClick={acceptAll} aria-label="Accept all cookies">Accept all</button>
              <button className={styles.secondary} onClick={rejectOptional} aria-label="Reject optional cookies">Essential only</button>
              <button className={styles.link} onClick={() => { lastFocused.current = document.activeElement; setPrefsOpen(true) }} aria-label="Manage cookie preferences">Customise</button>
            </div>
          </div>
        </div>
      )}

      {prefsOpen && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="prefs-title">
          <div className={styles.modal} ref={dialogRef}>
            <h3 id="prefs-title" className={styles.modalTitle}>Manage cookie preferences</h3>
            <p className={styles.modalText}>Choose the cookies you want to allow. No optional cookies are selected by default.</p>

            <div className={styles.list}>
              <div className={styles.item}>
                <div>
                  <strong>Essential cookies</strong>
                  <div className={styles.itemText}>Necessary for the site to work. Always on.</div>
                </div>
                <div className={styles.required}>Always on</div>
              </div>

              <div className={styles.item}>
                <div>
                  <strong>Analytics cookies</strong>
                  <div className={styles.itemText}>Help us understand how people use the site (anonymous).</div>
                </div>
                <div>
                  <label className={styles.checkboxLabel}>
                    <input aria-label="Enable analytics cookies" type="checkbox" checked={!!preferences.analytics} onChange={() => togglePref('analytics')} />
                    <span className={styles.checkboxFake}></span>
                  </label>
                </div>
              </div>

              <div className={styles.item}>
                <div>
                  <strong>Marketing cookies</strong>
                  <div className={styles.itemText}>Used to show relevant content and advertisements.</div>
                </div>
                <div>
                  <label className={styles.checkboxLabel}>
                    <input aria-label="Enable marketing cookies" type="checkbox" checked={!!preferences.marketing} onChange={() => togglePref('marketing')} />
                    <span className={styles.checkboxFake}></span>
                  </label>
                </div>
              </div>

              <div className={styles.item}>
                <div>
                  <strong>Functional cookies</strong>
                  <div className={styles.itemText}>Remember your preferences and settings for a personalised experience.</div>
                </div>
                <div>
                  <label className={styles.checkboxLabel}>
                    <input aria-label="Enable functional cookies" type="checkbox" checked={!!preferences.functional} onChange={() => togglePref('functional')} />
                    <span className={styles.checkboxFake}></span>
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.modalActions}>
              <button className={styles.primary} onClick={() => saveConsent(preferences)}>Save preferences</button>
              <button className={styles.secondary} onClick={() => { setPrefsOpen(false); setVisible(false) }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export const getCookieConsent = () => {
  if (typeof window === 'undefined') return null
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') } catch (e) { return null }
}

export const isCookieAllowed = (type) => {
  try { const c = getCookieConsent(); return !!(c && c[type]) } catch (e) { return false }
}