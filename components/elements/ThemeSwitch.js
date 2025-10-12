"use client"
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
    // Initialize to a safe default on the server and read localStorage on client
    const [togglETHeme, setTogglETHeme] = useState(() => {
        try {
            if (typeof window === 'undefined') return 'light-theme'
            return JSON.parse(window.localStorage.getItem('togglETHeme')) || 'light-theme'
        } catch (e) {
            return 'light-theme'
        }
    })

    useEffect(() => {
        if (typeof window === 'undefined') return
        try {
            window.localStorage.setItem('togglETHeme', JSON.stringify(togglETHeme))
        } catch (e) {
            // ignore storage errors
        }
        document.body.classList.add(togglETHeme)
        return () => {
            document.body.classList.remove(togglETHeme)
        }
    }, [togglETHeme])

    return (
        <>
            <nav className="switcher__tab"
                onClick={() => togglETHeme === "light-theme" ? setTogglETHeme("dark-theme") : setTogglETHeme("light-theme")
                }
            >
                <span className="switcher__btn light-mode"><i className="flaticon-sun" /></span>
                <span className="switcher__mode" />
                <span className="switcher__btn dark-mode"><i className="flaticon-moon" /></span>
            </nav>
        </>
    )
}
