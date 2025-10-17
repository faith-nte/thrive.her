import Link from "next/link"

export default function Menu() {
    return (
        <ul className="main-menu__list">
            <li>
                <Link href="/about-us" style={{ color: '#F9E8CF' }}>About Us</Link>
            </li>
            <li>
                <Link href="/healthcare-professionals" style={{ color: '#F9E8CF' }}>Healthcare Professionals</Link>
            </li>
            <li>
                <Link href="/community-organisations" style={{ color: '#F9E8CF' }}>Community Organisations</Link>
            </li>
            <li>
                <Link href="/blog" style={{ color: '#F9E8CF' }}>Blog</Link>
            </li>
            <li>
                <Link href="/contact" style={{ color: '#F9E8CF' }}>Contact</Link>
            </li>
        </ul>
    )
}