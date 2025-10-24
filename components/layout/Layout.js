"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Header5 from "./header/Header5";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  breadcrumbClass,
  children,
  wrapperCls,
}) {
  const [scroll, setScroll] = useState(0);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  // Popup
  const [isPopup, setPopup] = useState(false);
  const handlePopup = () => setPopup(!isPopup);

  // Sidebar
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!isSidebar);

  useEffect(() => {
    let mounted = true;
    // Handle mobile menu body class
    if (typeof window !== "undefined") {
      if (isMobileMenu) {
        document.body.classList.add("mobile-menu-visible");
      } else {
        document.body.classList.remove("mobile-menu-visible");
      }
    }
    return () => {
      mounted = false;
    };
  }, [isMobileMenu]);

  useEffect(() => {
    let mounted = true;
    // dynamic import to ensure this runs only on client
    async function loadWow() {
      if (typeof window === "undefined") return;
      try {
        const mod = await import("wowjs");
        const WOW = mod.WOW || mod.default?.WOW || mod.default || mod;
        if (!mounted) return;
        // attach to window for compatibility with any plugin code
        // eslint-disable-next-line no-undef
        // prefer constructor extraction for different module shapes
        const WowCtor = (WOW && (WOW.WOW || WOW)) || WOW;
        // create instance if constructor exists
        if (typeof WowCtor === "function") {
          // eslint-disable-next-line no-undef
          window.wow = new WowCtor({ live: false });
          if (typeof window.wow.init === "function") window.wow.init();
        }
      } catch (e) {
        // ignore if wowjs isn't available
      }
    }
    loadWow();

    const onScroll = () => {
      const scrollCheck = typeof window !== "undefined" && window.scrollY > 100;
      setScroll((prev) => (scrollCheck !== prev ? scrollCheck : prev));
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      mounted = false;
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <DataBg />
      <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        )}
        {headerStyle == 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 2 ? (
          <Header2
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 3 ? (
          <Header3
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 4 ? (
          <Header4
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 5 ? (
          <Header5
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}

        <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

        {breadcrumbTitle && (
          <Breadcrumb
            breadcrumbTitle={breadcrumbTitle}
            breadcrumbClass={breadcrumbClass}
          />
        )}

        {children}

        {!footerStyle && <Footer1 />}
        {footerStyle == 1 ? <Footer1 /> : null}
        {footerStyle == 2 ? <Footer2 /> : null}
        {footerStyle == 3 ? <Footer3 /> : null}
      </div>
      <BackToTop scroll={scroll} />
    </>
  );
}
