"use client"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    autoplay: false,
}

export default function BannerClient() {
    return (
        <section className="main-slider">
            <Swiper {...swiperOptions} className="main-slider__carousel">
                <SwiperSlide style={{ position: 'relative', width: '100%', height: '100%', minHeight: '800px' }}>
                    <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/resources/hero-1920x800.svg)' }} />
                    <div className="image-layer__left-gradient" />
                    <div className="container">
                        <div className="main-slider-content">
                            <div className="main-slider-content__inner">
                                <div className="sub-title"><h4>We help</h4></div>
                                <div className="big-title">
                                    <h2>
                                        Care that feels right{' '}
                                        <span style={{
                                            position: 'relative',
                                            display: 'inline-block',
                                            fontStyle: 'italic',
                                            color: 'inherit'
                                        }}>
                                            for you
                                            <span style={{
                                                position: 'absolute',
                                                bottom: '-5px',
                                                left: '0',
                                                right: '0',
                                                height: '4px',
                                                background: 'linear-gradient(90deg, #C78E1D, #D1A38A, #C78E1D)',
                                                backgroundSize: '300% 100%',
                                                borderRadius: '2px',
                                                animation: 'glossyFlow 2s ease-in-out infinite',
                                                boxShadow: '0 2px 8px rgba(199, 142, 29, 0.3)'
                                            }}></span>
                                        </span>
                                    </h2>
                                    <style jsx>{`
                                        @keyframes glossyFlow {
                                            0%, 100% { background-position: 0% 50%; }
                                            50% { background-position: 100% 50%; }
                                        }
                                    `}</style>
                                </div>
                                <div className="btn-box">
                                    <a href="donation-details.html" className="thm-btn">Donate Now<span><i className="icon-arrow-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
