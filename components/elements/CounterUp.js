'use client'
import { useEffect, useState, useRef } from 'react'
import Counter from './Counter'

export default function CounterUp({ end }) {
    const [inViewport, setInViewport] = useState(false)
    const mountedRef = useRef(false)

    const isElementInViewport = (el) => {
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    }

    useEffect(() => {
        mountedRef.current = true
        const handleScroll = () => {
            if (typeof document === 'undefined') return
            const elements = document.getElementsByClassName('count-text')
            if (elements.length > 0) {
                const element = elements[0]
                const isInViewport = isElementInViewport(element)
                if (isInViewport && !inViewport && mountedRef.current) {
                    setInViewport(true)
                }
            }
        }

        // run once to detect initial position
        handleScroll()

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            mountedRef.current = false
            window.removeEventListener('scroll', handleScroll)
        }
    }, [inViewport])

    return (
        <>
            <span className="count-text">{inViewport && <Counter end={end} duration={20} />}</span>
        </>
    )
}
