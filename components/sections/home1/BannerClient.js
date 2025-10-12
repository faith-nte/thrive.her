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
                    {/* Dark overlay for better text visibility */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1
                    }} />
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="main-slider-content">
                            <div className="main-slider-content__inner">
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
                                <div className="sub-title" style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    padding: '12px 16px 12px 16px',
                                    background: 'rgba(33, 39, 63, 0.15)',
                                    backdropFilter: 'blur(2px)',
                                    clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)',
                                    borderLeft: '4px solid #C78E1D'
                                }}>
                                    <h4>Working with NHS and community partners<br />to improve care for Muslim and minority women.</h4>
                                    {/* Islamic-inspired decorative element */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '8px',
                                        transform: 'translateY(-50%)',
                                        width: '12px',
                                        height: '12px',
                                        background: '#C78E1D',
                                        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                                        opacity: 0.7
                                    }} />
                                </div>
                                <div className="btn-box">
                                    <div style={{
                                        position: 'relative',
                                        display: 'inline-block',
                                        marginTop: '2rem'
                                    }}>
                                        {/* Double layer button effect */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '4px',
                                            left: '4px',
                                            right: '-4px',
                                            bottom: '-4px',
                                            backgroundColor: '#21273F',
                                            borderRadius: '8px',
                                            zIndex: 1
                                        }}></div>
                                        <a 
                                            href="donation-details.html" 
                                            className="thm-btn"
                                            style={{
                                                position: 'relative',
                                                zIndex: 2,
                                                backgroundColor: '#C78E1D',
                                                color: 'white',
                                                padding: '0.75rem 2rem',
                                                borderRadius: '8px',
                                                textDecoration: 'none',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontWeight: '600',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                border: '2px solid #C78E1D',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 4px 12px rgba(199, 142, 29, 0.3)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.transform = 'translate(-2px, -2px)';
                                                e.target.style.boxShadow = '0 6px 20px rgba(199, 142, 29, 0.4)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.transform = 'translate(0, 0)';
                                                e.target.style.boxShadow = '0 4px 12px rgba(199, 142, 29, 0.3)';
                                            }}
                                        >
                                            Join US<span><i className="icon-arrow-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
