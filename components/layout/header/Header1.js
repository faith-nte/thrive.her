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
                                    <span style={{cursor: 'default'}}><img src="assets/images/resources/logo (256 x 80 px)-gold.svg" alt=""/></span>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <span style={{cursor: 'default'}} className="mobile-nav__toggler"><i className="fa fa-bars"></i></span>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-box">
                                    <span style={{cursor: 'default'}} className="main-menu__search search-toggler icon-search"></span>
                                </div>
                                <div className="main-menu__btn-box">
                                    <span style={{cursor: 'default'}} className="main-menu__btn thm-btn">Partner with US<span><i
                                                className="icon-arrow-right"></i></span></span>
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
                                        <span style={{cursor: 'default'}}><img src="assets/images/resources/logo (256 x 80 px)-gold.svg" alt=""/></span>
                                    </div>
                                    <div className="main-menu__main-menu-box">
                                        <span style={{cursor: 'default'}} className="mobile-nav__toggler"><i className="fa fa-bars"></i></span>
                                        <Menu />
                                    </div>
                                </div>
                                <div className="main-menu__right">
                                    <div className="main-menu__search-box">
                                        <span style={{cursor: 'default'}} className="main-menu__search search-toggler icon-search"></span>
                                    </div>
                                    <div className="main-menu__btn-box">
                                        <span style={{cursor: 'default'}} className="main-menu__btn thm-btn">Partner with Us<span><i
                                                    className="icon-arrow-right"></i></span></span>
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
