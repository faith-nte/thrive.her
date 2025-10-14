import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>
            
        <header className="main-header" style={{ backgroundColor: '#21273F' }}>
            <nav className="main-menu" style={{ backgroundColor: '#21273F' }}>
                <div className="main-menu__wrapper" style={{ backgroundColor: '#21273F' }}>
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/"><img src="assets/images/resources/logo (256 x 80 px)-gold.svg" alt=""/></Link>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-box">
                                    <Link href="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                </div>
                                <div className="main-menu__btn-box">
                                    <Link href="donation-details" className="main-menu__btn thm-btn">Partner with US<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`} style={{ backgroundColor: '#21273F' }}>
            <div className="sticky-header__content" style={{ backgroundColor: '#21273F' }}>
                <nav className="main-menu" style={{ backgroundColor: '#21273F' }}>
                    <div className="main-menu__wrapper" style={{ backgroundColor: '#21273F' }}>
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <div className="main-menu__logo">
                                        <Link href="/"><img src="assets/images/resources/logo (256 x 80 px)-gold.svg" alt=""/></Link>
                                    </div>
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu />
                                    </div>
                                </div>
                                <div className="main-menu__right">
                                    <div className="main-menu__search-box">
                                        <Link href="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                    </div>
                                    <div className="main-menu__btn-box">
                                        <Link href="donation-details" className="main-menu__btn thm-btn">Donate Now<span><i
                                                    className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>{/*.sticky-header__content */}
        </div>{/*.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
