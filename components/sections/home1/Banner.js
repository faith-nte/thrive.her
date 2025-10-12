import dynamic from 'next/dynamic'

const BannerClient = dynamic(() => import('./BannerClient'), { ssr: false })

export default function Banner() {
    return (
        <>
            <BannerClient />
        </>
    )
}
