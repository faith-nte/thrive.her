import { DM_Sans, Libre_Baskerville, Playfair_Display, Inter } from 'next/font/google'

// Primary heading font
export const playfairDisplay = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--anity-font-playfair",
    display: 'swap',
})

// Primary body font
export const inter = Inter({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: "--anity-font-inter",
    display: 'swap',
})

// Legacy fonts (keeping for backward compatibility)
export const dmSans = DM_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--anity-font",
    display: 'swap',
})
export const libreBaskerville = Libre_Baskerville({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: "--anity-font-two",
    display: 'swap',
})
