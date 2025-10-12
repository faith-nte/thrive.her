import dynamic from 'next/dynamic'
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Blog from "@/components/sections/home1/Blog"
import Brands from "@/components/sections/home1/Brands"
import Country from "@/components/sections/home1/Country"
import Cta from "@/components/sections/home1/Cta"
import Donate from "@/components/sections/home1/Donate"
import Donation from "@/components/sections/home1/Donation"
import Event from "@/components/sections/home1/Event"
import Found from "@/components/sections/home1/Found"
import Team from "@/components/sections/home1/Team"
import Testimonial from "@/components/sections/home1/Testimonial"
import Who from "@/components/sections/home1/Who"

const Welcome = dynamic(() => import("@/components/sections/home1/Welcome"), { ssr: false })

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Found />
                <About />
                <Welcome />
                <Who />
                <Country />
                <Donate />
                <Donation />
                <Event />
                <Cta />
                <Team />
                <Testimonial />
                <Blog />
                <Brands />
            </Layout>
        </>
    )
}
