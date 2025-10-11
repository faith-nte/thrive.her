
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false, // Disabled autoplay since we only have one slide
    loop: false, // Disabled loop since we only have one slide
    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <>
        {/* Hero Section Start */}
        <section className="main-slider-three">
            <Swiper {...swiperOptions} className="main-slider-three__carousel owl-carousel owl-theme">
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider-three__shape-1"></div>
                    <div className="main-slider-three__shape-2">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__img">
                        <img src="assets/images/resources/dr-syeda-hero.svg" alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider-three__content">
                            <h2 className="main-slider-three__title">Care That Feels Right. <br/> <em style={{color: 'var(--thriveher-rose)'}}>For You!</em></h2>
                            <p className="main-slider-three__text">Empowering NHS and community partners to deliver faith-aware, <br/> culturally competent care that truly support Muslim and minority women.</p>
                            <div className="main-slider-three__btn-box">
                                <Link href="about" className="thm-btn main-slider-three__btn">Join US<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
        {/* Hero Section End */}
        </>
    )
}
