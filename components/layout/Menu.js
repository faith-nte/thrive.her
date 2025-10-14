import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <span style={{cursor: 'default', color: 'inherit'}}>Home</span>
                </li>
                <li>
                    <span style={{cursor: 'default', color: 'inherit'}}>About</span>
                </li>
                <li>
                    <span style={{cursor: 'default', color: 'inherit'}}>Services</span>
                </li>
                <li>
                    <span style={{cursor: 'default', color: 'inherit'}}>Programs</span>
                </li>
                <li>
                    <span style={{cursor: 'default', color: 'inherit'}}>Resources</span>
                </li>
                <li>
                    <span style={{cursor: 'default', color: 'inherit'}}>Contact</span>
                </li>
            </ul>
        </>
    )
}
