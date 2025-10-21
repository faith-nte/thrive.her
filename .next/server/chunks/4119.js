exports.id = 4119;
exports.ids = [4119];
exports.modules = {

/***/ 86536:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22675))

/***/ }),

/***/ 99991:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 99471, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 86134:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76496))

/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 22675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CookieConsent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48625);
/* harmony import */ var _styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function CookieConsent() {
    const [showBanner, setShowBanner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showPreferences, setShowPreferences] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [hasInitialConsent, setHasInitialConsent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [cookiePreferences, setCookiePreferences] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        essential: true,
        analytics: false,
        marketing: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Check for existing consent
        const savedConsent = localStorage.getItem("thriveher_consent");
        // Initialize the banner state right away
        setShowBanner(!savedConsent);
        setHasInitialConsent(!!savedConsent);
        if (savedConsent) {
            try {
                setCookiePreferences(JSON.parse(savedConsent));
            } catch (e) {
                setShowBanner(true);
            }
        }
    }, []);
    const handleAcceptAll = ()=>{
        const allAccepted = {
            essential: true,
            analytics: true,
            marketing: true
        };
        localStorage.setItem("thriveher_consent", JSON.stringify(allAccepted));
        setCookiePreferences(allAccepted);
        setShowBanner(false);
        setShowPreferences(false);
    };
    const handleRejectOptional = ()=>{
        const essentialOnly = {
            essential: true,
            analytics: false,
            marketing: false
        };
        localStorage.setItem("thriveher_consent", JSON.stringify(essentialOnly));
        setCookiePreferences(essentialOnly);
        setShowBanner(false);
        setShowPreferences(false);
        setHasInitialConsent(true);
    };
    // Debug function to reset cookie consent
    const resetConsent = ()=>{
        localStorage.removeItem("thriveher_consent");
        setShowBanner(true);
        setShowPreferences(false);
        setHasInitialConsent(false);
        setCookiePreferences({
            essential: true,
            analytics: false,
            marketing: false
        });
    };
    const handleSavePreferences = ()=>{
        localStorage.setItem("thriveher_consent", JSON.stringify(cookiePreferences));
        setShowBanner(false);
        setShowPreferences(false);
    };
    const togglePreferences = ()=>{
        setShowPreferences(!showPreferences);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showBanner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay),
                role: "dialog",
                "aria-labelledby": "cookie-title",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().cookieBanner),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                id: "cookie-title",
                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "Your privacy matters"
                            }),
                            !showPreferences ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "We use cookies to make Thrive.Her work better for you. Some are essential to make the site function properly, while others help us understand how people use our services so we can improve them."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGroup),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: handleAcceptAll,
                                                className: `${(_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button)} ${(_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().primary)}`,
                                                "aria-label": "Accept all cookies",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().fullText),
                                                        children: "Accept all cookies"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().shortText),
                                                        children: "Accept all"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: handleRejectOptional,
                                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                                                "aria-label": "Reject optional cookies",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().fullText),
                                                        children: "Reject optional cookies"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().shortText),
                                                        children: "Reject"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: togglePreferences,
                                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                                                "aria-label": "Manage cookie preferences",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().fullText),
                                                        children: "Manage preferences"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().shortText),
                                                        children: "Settings"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().preferences),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().preferenceItem),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "checkbox",
                                                                checked: cookiePreferences.essential,
                                                                disabled: true,
                                                                "aria-label": "Essential cookies (required)"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Essential cookies"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Required for the website to function. Cannot be disabled."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().preferenceItem),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "checkbox",
                                                                checked: cookiePreferences.analytics,
                                                                onChange: (e)=>setCookiePreferences({
                                                                        ...cookiePreferences,
                                                                        analytics: e.target.checked
                                                                    }),
                                                                "aria-label": "Analytics cookies"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Analytics cookies"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Help us improve our website by collecting anonymous usage data."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().preferenceItem),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "checkbox",
                                                                checked: cookiePreferences.marketing,
                                                                onChange: (e)=>setCookiePreferences({
                                                                        ...cookiePreferences,
                                                                        marketing: e.target.checked
                                                                    }),
                                                                "aria-label": "Marketing cookies"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Marketing cookies"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Used to provide you with relevant content and advertisements."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGroup),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: handleSavePreferences,
                                                className: `${(_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button)} ${(_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().primary)}`,
                                                children: "Save preferences"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>{
                                                    setShowPreferences(false);
                                                },
                                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                                                children: "Back"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            hasInitialConsent && !showBanner && !showPreferences && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>setShowPreferences(true),
                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().floatingCookie),
                "aria-label": "Manage cookie settings",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            cx: "8",
                            cy: "9",
                            r: "2"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            cx: "15",
                            cy: "9",
                            r: "2"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M12 16c-1.5 0-2.5-1-2.5-1"
                        })
                    ]
                })
            }),
            showPreferences && !showBanner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay),
                role: "dialog",
                "aria-labelledby": "cookie-preferences-title",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().cookieBanner),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                id: "cookie-preferences-title",
                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "Cookie Preferences"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().preferences),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().preferenceItem),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "checkbox",
                                                        checked: cookiePreferences.essential,
                                                        disabled: true,
                                                        "aria-label": "Essential cookies (required)"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Essential cookies"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Required for the website to function. Cannot be disabled."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().preferenceItem),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "checkbox",
                                                        checked: cookiePreferences.analytics,
                                                        onChange: (e)=>setCookiePreferences({
                                                                ...cookiePreferences,
                                                                analytics: e.target.checked
                                                            }),
                                                        "aria-label": "Analytics cookies"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Analytics cookies"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Help us improve our website by collecting anonymous usage data."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().preferenceItem),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "checkbox",
                                                        checked: cookiePreferences.marketing,
                                                        onChange: (e)=>setCookiePreferences({
                                                                ...cookiePreferences,
                                                                marketing: e.target.checked
                                                            }),
                                                        "aria-label": "Marketing cookies"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Marketing cookies"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Used to provide you with relevant content and advertisements."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGroup),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleSavePreferences,
                                        className: `${(_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button)} ${(_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().primary)}`,
                                        children: "Save preferences"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setShowPreferences(false),
                                        className: (_styles_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                                        children: "Back"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 76496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js

function BackToTop({ scroll }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: scroll && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: "#top",
            className: "scroll-to-target scroll-to-top",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "scroll-to-top__wrapper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "scroll-to-top__inner"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "scroll-to-top__text",
                    children: " Go Back Top"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/DataBg.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
function DataBg() {
    (0,react_.useEffect)(()=>{
        if (typeof document === "undefined") return;
        const elements = document.querySelectorAll("[data-bg]");
        elements.forEach((element)=>{
            const bg = element.getAttribute("data-bg");
            if (bg) element.style.backgroundImage = `url(${bg})`;
        });
    }, []);
    return null;
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js


function Breadcrumb({ breadcrumbTitle }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "page-header",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "page-header__shape-1 float-bob-y",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/shapes/page-header-shape-1.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "page-header__shape-2 float-bob-x",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/shapes/page-header-shape-2.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "page-header__bg",
                    style: {
                        backgroundImage: " url(assets/images/backgrounds/page-header-bg.jpg)"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "page-header__inner",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: breadcrumbTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "thm-breadcrumb__box",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "thm-breadcrumb list-unstyled",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "fas fa-angle-right"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: breadcrumbTitle
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/SearchPopup.js


function SearchPopup({ isPopup, handlePopup }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `search-popup ${isPopup ? "active" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "search-popup__overlay search-toggler",
                    onClick: handlePopup
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "search-popup__content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        action: "#",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "sr-only",
                                children: "search here"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "search",
                                placeholder: "Search Here..."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                "aria-label": "search submit",
                                className: "thm-btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "icon-magnifying-glass"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Sidebar.js


function Sidebar({ isSidebar, handleSidebar }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(86369);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
;// CONCATENATED MODULE: ./components/layout/Menu.js


function Menu() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "main-menu__list",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about-us",
                    style: {
                        color: "#F9E8CF"
                    },
                    children: "About Us"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/healthcare-professionals",
                    style: {
                        color: "#F9E8CF"
                    },
                    children: "Healthcare Professionals"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/community-organisations",
                    style: {
                        color: "#F9E8CF"
                    },
                    children: "Community Organisations"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog",
                    style: {
                        color: "#F9E8CF"
                    },
                    children: "Blog"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    style: {
                        color: "#F9E8CF"
                    },
                    children: "Contact"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/MobileMenu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar })=>{
    const [isActive, setIsActive] = (0,react_.useState)({
        status: false,
        key: "",
        subMenuKey: ""
    });
    const handleToggle = (key, subMenuKey = "")=>{
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: ""
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "jsx-9873e1b86f5c1523" + " " + "mobile-nav__wrapper",
            children: [
                jsx_runtime_.jsx((style_default()), {
                    id: "9873e1b86f5c1523",
                    children: "@media(max-width:768px){.mobile-nav__content{height:80vh!important}}"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: handleMobileMenu,
                    className: "jsx-9873e1b86f5c1523" + " " + "mobile-nav__overlay mobile-nav__toggler"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-9873e1b86f5c1523" + " " + "mobile-nav__content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            onClick: handleMobileMenu,
                            className: "jsx-9873e1b86f5c1523" + " " + "mobile-nav__close mobile-nav__toggler",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "jsx-9873e1b86f5c1523" + " " + "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-9873e1b86f5c1523" + " " + "logo-box",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                "aria-label": "logo image",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/images/resources/logo-header.png",
                                    width: "150",
                                    alt: "ThriveHer Logo",
                                    className: "jsx-9873e1b86f5c1523"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-9873e1b86f5c1523" + " " + "mobile-nav__container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "navbarSupportedContent",
                                className: "jsx-9873e1b86f5c1523" + " " + "collapse navbar-collapse show clearfix",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "jsx-9873e1b86f5c1523" + " " + "main-menu__list",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-9873e1b86f5c1523",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about-us",
                                                style: {
                                                    color: "#F9E8CF"
                                                },
                                                children: "About Us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-9873e1b86f5c1523",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/healthcare-professionals",
                                                style: {
                                                    color: "#F9E8CF"
                                                },
                                                children: "Healthcare Professionals"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-9873e1b86f5c1523",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/community-organisations",
                                                style: {
                                                    color: "#F9E8CF"
                                                },
                                                children: "Community Organisations"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-9873e1b86f5c1523",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/blog",
                                                style: {
                                                    color: "#F9E8CF"
                                                },
                                                children: "Blog"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-9873e1b86f5c1523",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                style: {
                                                    color: "#F9E8CF"
                                                },
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "jsx-9873e1b86f5c1523" + " " + "mobile-nav__contact list-unstyled",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "jsx-9873e1b86f5c1523",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            style: {
                                                color: "#F9E8CF",
                                                marginRight: "10px"
                                            },
                                            className: "jsx-9873e1b86f5c1523" + " " + "fa fa-envelope"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "mailto:info@thriveher.clinic",
                                            style: {
                                                color: "#F9E8CF"
                                            },
                                            children: "info@thriveher.clinic"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "jsx-9873e1b86f5c1523",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            style: {
                                                color: "#F9E8CF",
                                                marginRight: "10px"
                                            },
                                            className: "jsx-9873e1b86f5c1523" + " " + "fa fa-phone-alt"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "tel:+447459110397",
                                            style: {
                                                color: "#F9E8CF"
                                            },
                                            children: "+44 7459 110397"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-9873e1b86f5c1523" + " " + "mobile-nav__top",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-9873e1b86f5c1523" + " " + "mobile-nav__social",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://www.youtube.com/@ThriveWithDrHussaini",
                                        style: {
                                            color: "#F9E8CF"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "jsx-9873e1b86f5c1523" + " " + "fab fa-youtube"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://www.facebook.com/share/177a8NJdki/?mibextid=wwXIfr",
                                        style: {
                                            color: "#F9E8CF"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "jsx-9873e1b86f5c1523" + " " + "fab fa-facebook"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://www.instagram.com/thriveher.clinic/",
                                        style: {
                                            color: "#F9E8CF"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "jsx-9873e1b86f5c1523" + " " + "fab fa-instagram"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://www.linkedin.com/company/thriveher-clinic/",
                                        style: {
                                            color: "#F9E8CF"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "jsx-9873e1b86f5c1523" + " " + "fab fa-linkedin"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./components/layout/header/Header1.js





function Header1({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "main-header",
                style: {
                    backgroundColor: scroll > 100 ? "rgba(33, 39, 63, 0.85)" : "transparent",
                    transition: "all 0.3s ease",
                    position: "fixed",
                    width: "100%",
                    zIndex: 1000
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    style: {
                        backgroundColor: "transparent"
                    },
                    className: "jsx-8bb29ba7c435d320" + " " + "main-menu",
                    children: [
                        jsx_runtime_.jsx((style_default()), {
                            id: "8bb29ba7c435d320",
                            children: "@media(max-width:768px){.main-header{background-color:#21273f!important}}"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                backgroundColor: "transparent"
                            },
                            className: "jsx-8bb29ba7c435d320" + " " + "main-menu__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-8bb29ba7c435d320" + " " + "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-8bb29ba7c435d320" + " " + "main-menu__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-8bb29ba7c435d320" + " " + "main-menu__left",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "jsx-8bb29ba7c435d320" + " " + "main-menu__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/logo-header.png",
                                                            alt: "ThriveHer Logo",
                                                            className: "jsx-8bb29ba7c435d320"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-8bb29ba7c435d320" + " " + "main-menu__main-menu-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "mobile-nav__toggler",
                                                            onClick: handleMobileMenu,
                                                            style: {
                                                                color: "#c78e1d",
                                                                fontSize: "28px",
                                                                padding: "8px"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "jsx-8bb29ba7c435d320" + " " + "fa fa-bars"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            style: {
                                                                "& a": {
                                                                    textShadow: scroll > 100 ? "none" : "0 0 10px rgba(0,0,0,0.5)",
                                                                    color: "white"
                                                                }
                                                            },
                                                            className: "jsx-8bb29ba7c435d320",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-8bb29ba7c435d320" + " " + "main-menu__right",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "jsx-8bb29ba7c435d320" + " " + "main-menu__search-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu__search search-toggler icon-search",
                                                        onClick: handlePopup,
                                                        style: {
                                                            textShadow: scroll > 100 ? "none" : "0 0 10px rgba(0,0,0,0.5)",
                                                            color: "white"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        "& .thm-btn": {
                                                            backgroundColor: "#C78E1D",
                                                            color: "white",
                                                            transition: "all 0.3s ease"
                                                        },
                                                        "& .thm-btn:hover": {
                                                            backgroundColor: "#D1A38A",
                                                            color: "#C78E1D"
                                                        }
                                                    },
                                                    className: "jsx-8bb29ba7c435d320" + " " + "main-menu__btn-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/contact",
                                                        className: "main-menu__btn thm-btn",
                                                        children: "Join Next Training"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`,
                style: {
                    backgroundColor: "#21273F"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    style: {
                        backgroundColor: "#21273F"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu",
                        style: {
                            backgroundColor: "#21273F"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu__wrapper",
                            style: {
                                backgroundColor: "#21273F"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__left",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/logo-header.png",
                                                            alt: "ThriveHer Logo"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__main-menu-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "mobile-nav__toggler",
                                                            onClick: handleMobileMenu,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-bars"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__right",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__call",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "main-menu__call-icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-phone-alt",
                                                                style: {
                                                                    color: "#F9E8CF"
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "main-menu__call-content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "main-menu__call-sub-title",
                                                                    style: {
                                                                        color: "#F9E8CF"
                                                                    },
                                                                    children: "Call Us"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "main-menu__call-number",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "tel:+447459110397",
                                                                        style: {
                                                                            color: "#F9E8CF"
                                                                        },
                                                                        children: "+44 7459 110397"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__search-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu__search search-toggler icon-search",
                                                        onClick: handlePopup
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__btn-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/contact",
                                                        className: "main-menu__btn thm-btn",
                                                        children: "Join Next Training"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header2.js




function Header2({ scroll, handlePopup, handleSidebar, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "main-header-two",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "main-menu main-menu-two",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-menu-two__wrapper",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "main-menu-two__wrapper-inner",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-two__left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-two__logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                    alt: "ThriveHer Logo"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-two__main-menu-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: handleMobileMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-two__right",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-two__call",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu-two__call-icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-call"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu-two__call-content",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "main-menu-two__call-sub-title",
                                                            children: "Call Anytime"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            className: "main-menu-two__call-number",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "tel:9288006780",
                                                                children: "+92 ( 8800 ) - 6780"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-two__search-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                className: "main-menu-two__search search-toggler icon-search",
                                                onClick: handlePopup
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-two__btn-box",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: "donation-details",
                                                className: "main-menu-two__btn thm-btn",
                                                children: [
                                                    "Donate Now",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-arrow-right"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu main-menu-two",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu-two__wrapper",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-menu-two__wrapper-inner",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu-two__left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-two__logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "main-menu-two__main-menu-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "mobile-nav__toggler",
                                                        onClick: handleMobileMenu,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-bars"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu-two__right",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "main-menu-two__call",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "main-menu-two__call-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-call"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "main-menu-two__call-content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "main-menu-two__call-sub-title",
                                                                children: "Call Anytime"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                className: "main-menu-two__call-number",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "tel:9288006780",
                                                                    children: "+92 ( 8800 ) - 6780"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-two__search-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "main-menu-two__search search-toggler icon-search",
                                                    onClick: handlePopup
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-two__btn-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "donation-details",
                                                    className: "main-menu-two__btn thm-btn",
                                                    children: [
                                                        "Donate Now",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-arrow-right"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header3.js




function Header3({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "main-header-three",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "main-menu main-menu-three",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-menu-three__wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-menu-three__wrapper-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu-three__left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-three__logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                    alt: "ThriveHer Logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu-three__main-menu-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                className: "mobile-nav__toggler",
                                                onClick: handleMobileMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu-three__right",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-three__user-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "main-menu-three__user icon-user"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-three__search-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "main-menu-three__search search-toggler icon-search",
                                                    onClick: handlePopup
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-three__btn-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "donation-details",
                                                    className: "main-menu-three__btn thm-btn",
                                                    children: "Donate Now"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu main-menu-three",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu-three__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-three__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-three__left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-three__logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-three__main-menu-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: handleMobileMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-three__right",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu-three__user-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu-three__user icon-user"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu-three__search-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu-three__search search-toggler icon-search",
                                                        onClick: handlePopup
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu-three__btn-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "donation-details",
                                                        className: "main-menu-three__btn thm-btn",
                                                        children: "Donate Now"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header4.js




function Header4_Header1({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "main-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-menu__top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-menu__top-inner",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled main-menu__contact-list",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-envelope"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "mailto:example@gamil.com",
                                                                children: "example@gamil.com"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-pin-two"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "12 Green Road, 05 New York"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu__top-right",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__social-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "main-menu__social-title",
                                                    children: "Follow Us On:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__social",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-link-in"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-instagram"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__left",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__main-menu-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "mobile-nav__toggler",
                                                            onClick: handleMobileMenu,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-bars"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__right",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__call",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "main-menu__call-icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-call"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "main-menu__call-content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "main-menu__call-sub-title",
                                                                    children: "Call Anytime"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "main-menu__call-number",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "tel:9288006780",
                                                                        children: "+92 ( 8800 ) - 6780"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__search-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu__search search-toggler icon-search",
                                                        onClick: handlePopup
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__btn-box",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "donation-details",
                                                        className: "main-menu__btn thm-btn",
                                                        children: [
                                                            "Donate Now",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-arrow-right"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__left",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__main-menu-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "mobile-nav__toggler",
                                                            onClick: handleMobileMenu,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-bars"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__right",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__call",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "main-menu__call-icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-call"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "main-menu__call-content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "main-menu__call-sub-title",
                                                                    children: "Call Anytime"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "main-menu__call-number",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "tel:9288006780",
                                                                        children: "+92 ( 8800 ) - 6780"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__search-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu__search search-toggler icon-search",
                                                        onClick: handlePopup
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__btn-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "donation-details",
                                                        className: "main-menu__btn thm-btn",
                                                        children: "Donate Now"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header5.js




function Header5_Header1({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "main-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-menu__top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-menu__top-inner",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled main-menu__contact-list",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-envelope"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "mailto:example@gamil.com",
                                                                children: "example@gamil.com"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-pin-two"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "12 Green Road, 05 New York"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu__top-right",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__social-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "main-menu__social-title",
                                                    children: "Follow Us On:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__social",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-link-in"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-instagram"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__left",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__main-menu-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "mobile-nav__toggler",
                                                            onClick: handleMobileMenu,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-bars"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__right",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__call",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "main-menu__call-icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-call"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "main-menu__call-content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "main-menu__call-sub-title",
                                                                    children: "Call Anytime"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "main-menu__call-number",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "tel:9288006780",
                                                                        children: "+92 ( 8800 ) - 6780"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__search-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu__search search-toggler icon-search",
                                                        onClick: handlePopup
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__btn-box",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "donation-details",
                                                        className: "main-menu__btn thm-btn",
                                                        children: [
                                                            "Donate Now",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-arrow-right"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__left",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__main-menu-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "mobile-nav__toggler",
                                                            onClick: handleMobileMenu,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-bars"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__right",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__call",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "main-menu__call-icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-call"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "main-menu__call-content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "main-menu__call-sub-title",
                                                                    children: "Call Anytime"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "main-menu__call-number",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "tel:9288006780",
                                                                        children: "+92 ( 8800 ) - 6780"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__search-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu__search search-toggler icon-search",
                                                        onClick: handlePopup
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__btn-box",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "donation-details",
                                                        className: "main-menu__btn thm-btn",
                                                        children: [
                                                            "Donate Now",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-arrow-right"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(14211);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/layout/footer/Footer1.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Footer1() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: (Footer_module_default())["site-footer"],
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Footer_module_default())["footer-top"],
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Footer_module_default())["footer-logo"],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/resources/logo-footer.png",
                                                alt: "ThriveHer Logo"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Footer_module_default())["footer-social"],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.youtube.com/@ThriveWithDrHussaini",
                                                "aria-label": "YouTube",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.facebook.com/share/177a8NJdki/?mibextid=wwXIfr",
                                                "aria-label": "Facebook",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.instagram.com/thriveher.clinic/",
                                                "aria-label": "Twitter",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.linkedin.com/company/thriveher-clinic/",
                                                "aria-label": "LinkedIn",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-linkedin"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.instagram.com/thriveher.clinic/",
                                                "aria-label": "Instagram",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Footer_module_default())["footer-nav-section"],
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Footer_module_default())["footer-nav"],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "For Patients"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/about",
                                                            children: "About Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/treatments",
                                                            children: "Treatments"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/book-online",
                                                            children: "Book Online"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/blog",
                                                            children: "Resources"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Footer_module_default())["footer-nav"],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "About"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/about",
                                                            children: "Our Story"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/team",
                                                            children: "Team"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/careers",
                                                            children: "Careers"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/news",
                                                            children: "News"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Footer_module_default())["footer-nav"],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Contact Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: "Book Online"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: "Call Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: "Email Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: "Location"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Footer_module_default())["footer-nav"],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Healthcare Professionals"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/professionals",
                                                            children: "Partner with Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/referrals",
                                                            children: "Referring Patients"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/education",
                                                            children: "Education"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/private",
                                                            children: "Private Healthcare"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Footer_module_default())["footer-bottom"],
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Footer_module_default())["footer-bottom__copyright"],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "\xa9 ",
                                                currentYear,
                                                " ThriveHer Clinic. All rights reserved."
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Footer_module_default())["footer-bottom__links"],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/privacy-policy",
                                                        children: "Privacy Policy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/terms",
                                                        children: "Terms of Use"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "https://fenn.digital",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: "Designed by Fenn Digital"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer2.js


function Footer2() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "site-footer-two",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-two__shape-1 float-bob-y",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/shapes/site-footer-two-shape-1.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "site-footer-two__top",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "site-footer-two__top-inner",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xl-5 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": "100ms",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "footer-widget-two__about",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "footer-widget-two__about-title",
                                                        children: "Donate To Change The World"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "footer-widget-two__about-text",
                                                        children: [
                                                            "category that involves giving financial or to a materialt",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " support various causes organizations It allows not "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "footer-widget-two__btn-box",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "donation-details",
                                                            className: "footer-widget-two__btn thm-btn",
                                                            children: "Donate Now"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": "200ms",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "footer-widget-two__services",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "footer-widget-two__title",
                                                        children: "Services"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "footer-widget-two__services-list list-unstyled",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Incident Responder"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Secure Managed Fund"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Clean Water All"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Give Education"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": "300ms",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "footer-widget-two__links",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "footer-widget-two__title",
                                                        children: "Links"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "footer-widget-two__services-list list-unstyled",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Food to individuals"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Temporary housing"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Local shelters"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Natural disasters"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": "400ms",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "footer-widget-two__contact",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-two__title",
                                                        children: "Contact Info"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "footer-widget-two__contact-list list-unstyled",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "icon",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon-call"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "tel:0882466422710",
                                                                            children: "+088 (246) 642-27-10"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "icon",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon-envelope"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "mailto:example@mail.com",
                                                                            children: "example@mail.com"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "site-footer-two__social",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-facebook"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-twitter"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-instagram"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-pintarest"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer-two__bottom",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "site-footer-two__bottom-inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "site-footer-two__copyright",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "site-footer-two__copyright-text",
                                                        children: [
                                                            "Copywright 2024 by ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: "anity"
                                                            }),
                                                            ". All Rights Reserved."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "site-footer-two__bottom-menu-box",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "list-unstyled site-footer-two__bottom-menu",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Privacy Policy"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Terms of Service"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Cookies Settings"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer3.js


function Footer3() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "site-footer-two",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-two__shape float-bob-y-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/shapes/site-footer-two-shape.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "site-footer-two__top",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "site-footer-two__top-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "site-footer-two__top-logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/resources/logo-footer-bright.svg",
                                                alt: "ThriveHer Logo"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-5 col-lg-6 col-md-6 wow fadeInUp",
                                                "data-wow-delay": "100ms",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "footer-widget-two__about",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "footer-widget-two__about-title",
                                                            children: "Donate To Change The World"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "footer-widget-two__about-text",
                                                            children: [
                                                                "category that involves giving financial or to a materialt",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                " support various causes organizations It allows not "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "footer-widget-two__btn-box",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "donation-details",
                                                                className: "footer-widget-two__btn thm-btn",
                                                                children: "Donate Now"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                                "data-wow-delay": "200ms",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "footer-widget-two__services",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "footer-widget-two__title",
                                                            children: "Services"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "footer-widget-two__services-list list-unstyled",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "about",
                                                                        children: "Incident Responder"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "about",
                                                                        children: "Secure Managed Fund"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "about",
                                                                        children: "Clean Water All"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "about",
                                                                        children: "Give Education"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                                "data-wow-delay": "300ms",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "footer-widget-two__links",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "footer-widget-two__title",
                                                            children: "Links"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "footer-widget-two__services-list list-unstyled",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "about",
                                                                        children: "Food to individuals"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "about",
                                                                        children: "Temporary housing"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "about",
                                                                        children: "Local shelters"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "about",
                                                                        children: "Natural disasters"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                                "data-wow-delay": "400ms",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "footer-widget-two__contact",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "footer-widget-two__title",
                                                            children: "Contact Info"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "footer-widget-two__contact-list list-unstyled",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "icon",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon-call"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "tel:0882466422710",
                                                                                children: "+088 (246) 642-27-10"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "icon",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon-envelope"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "mailto:example@mail.com",
                                                                                children: "example@mail.com"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "site-footer-two__social",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-facebook"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-twitter"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-instagram"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-pintarest"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer-two__bottom",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "site-footer-two__bottom-inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "site-footer-two__copyright",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "site-footer-two__copyright-text",
                                                        children: [
                                                            "Copywright 2024 by ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: "anity"
                                                            }),
                                                            ". All Rights Reserved."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "site-footer-two__bottom-menu-box",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "list-unstyled site-footer-two__bottom-menu",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Privacy Policy"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Terms of Service"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "about",
                                                                    children: "Cookies Settings"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 














function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = (0,react_.useState)(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = (0,react_.useState)(false);
    const handleMobileMenu = ()=>{
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    // Popup
    const [isPopup, setPopup] = (0,react_.useState)(false);
    const handlePopup = ()=>setPopup(!isPopup);
    // Sidebar
    const [isSidebar, setSidebar] = (0,react_.useState)(false);
    const handleSidebar = ()=>setSidebar(!isSidebar);
    (0,react_.useEffect)(()=>{
        let mounted = true;
        // dynamic import to ensure this runs only on client
        async function loadWow() {
            if (true) return;
            try {
                const mod = await __webpack_require__.e(/* import() */ 2996).then(__webpack_require__.t.bind(__webpack_require__, 72996, 23));
                const WOW = mod.WOW || mod.default?.WOW || mod.default || mod;
                if (!mounted) return;
                // attach to window for compatibility with any plugin code
                // eslint-disable-next-line no-undef
                // prefer constructor extraction for different module shapes
                const WowCtor = WOW && (WOW.WOW || WOW) || WOW;
                // create instance if constructor exists
                if (typeof WowCtor === "function") {
                    // eslint-disable-next-line no-undef
                    window.wow = new WowCtor({
                        live: false
                    });
                    if (typeof window.wow.init === "function") window.wow.init();
                }
            } catch (e) {
            // ignore if wowjs isn't available
            }
        }
        loadWow();
        const onScroll = ()=>{
            const scrollCheck =  false && 0;
            setScroll((prev)=>scrollCheck !== prev ? scrollCheck : prev);
        };
        document.addEventListener("scroll", onScroll);
        return ()=>{
            mounted = false;
            document.removeEventListener("scroll", onScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DataBg, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `page-wrapper ${wrapperCls ? wrapperCls : ""}`,
                id: "#top",
                children: [
                    !headerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    headerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Header2, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 3 ? /*#__PURE__*/ jsx_runtime_.jsx(Header3, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 4 ? /*#__PURE__*/ jsx_runtime_.jsx(Header4_Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 5 ? /*#__PURE__*/ jsx_runtime_.jsx(Header5_Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchPopup, {
                        isPopup: isPopup,
                        handlePopup: handlePopup
                    }),
                    breadcrumbTitle && /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {
                        breadcrumbTitle: breadcrumbTitle
                    }),
                    children,
                    !footerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}),
                    footerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}) : null,
                    footerStyle == 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer2, {}) : null,
                    footerStyle == 3 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer3, {}) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BackToTop, {
                scroll: scroll
            })
        ]
    });
}


/***/ }),

/***/ 48625:
/***/ ((module) => {

// Exports
module.exports = {
	"cookieBanner": "CookieConsent_cookieBanner__kT5Rv",
	"content": "CookieConsent_content__53vno",
	"title": "CookieConsent_title__DOnbq",
	"buttonGroup": "CookieConsent_buttonGroup__I_oOR",
	"button": "CookieConsent_button__jLCu8",
	"shortText": "CookieConsent_shortText__FbW2B",
	"fullText": "CookieConsent_fullText__9ItNB",
	"primary": "CookieConsent_primary__jKLVH",
	"floatingCookie": "CookieConsent_floatingCookie__YGW8e",
	"preferences": "CookieConsent_preferences__CJcpI",
	"preferenceItem": "CookieConsent_preferenceItem__URUfn",
	"footer": "CookieConsent_footer__DPNFR",
	"link": "CookieConsent_link__ekZjw"
};


/***/ }),

/***/ 14211:
/***/ ((module) => {

// Exports
module.exports = {
	"site-footer": "Footer_site-footer__2dK96",
	"footer-top": "Footer_footer-top__sO9S_",
	"footer-nav-section": "Footer_footer-nav-section__UuVZB",
	"footer-logo": "Footer_footer-logo__5r9hK",
	"footer-nav": "Footer_footer-nav__bV8nA",
	"footer-social": "Footer_footer-social__7_zyb",
	"footer-widget": "Footer_footer-widget__hEHSo",
	"footer-widget__title": "Footer_footer-widget__title__zUrKR",
	"footer-widget__list": "Footer_footer-widget__list__7Nn6I",
	"footer-widget__contact": "Footer_footer-widget__contact__NPoum",
	"footer-widget__social": "Footer_footer-widget__social__Skqen",
	"footer-bottom": "Footer_footer-bottom__Bh2FT",
	"footer-bottom__copyright": "Footer_footer-bottom__copyright__KKh3m",
	"footer-bottom__links": "Footer_footer-bottom__links__jjYhR",
	"row": "Footer_row__QYb4M"
};


/***/ }),

/***/ 5156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-modal-video/css/modal-video.css
var modal_video = __webpack_require__(62109);
// EXTERNAL MODULE: ./public/assets/css/style.css
var style = __webpack_require__(61676);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.css
var swiper = __webpack_require__(56279);
// EXTERNAL MODULE: ./node_modules/swiper/modules/pagination.css
var pagination = __webpack_require__(43986);
// EXTERNAL MODULE: ./node_modules/swiper/modules/free-mode.css
var free_mode = __webpack_require__(88368);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"lib/font.js","import":"DM_Sans","arguments":[{"weight":["400","500","600","700","800","900"],"subsets":["latin"],"variable":"--anity-font","display":"swap"}],"variableName":"dmSans"}
var font_js_import_DM_Sans_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_display_swap_variableName_dmSans_ = __webpack_require__(54100);
var font_js_import_DM_Sans_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_display_swap_variableName_dmSans_default = /*#__PURE__*/__webpack_require__.n(font_js_import_DM_Sans_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_display_swap_variableName_dmSans_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"lib/font.js","import":"Libre_Baskerville","arguments":[{"weight":["400","700"],"subsets":["latin"],"variable":"--anity-font-two","display":"swap"}],"variableName":"libreBaskerville"}
var font_js_import_Libre_Baskerville_arguments_weight_400_700_subsets_latin_variable_anity_font_two_display_swap_variableName_libreBaskerville_ = __webpack_require__(61667);
var font_js_import_Libre_Baskerville_arguments_weight_400_700_subsets_latin_variable_anity_font_two_display_swap_variableName_libreBaskerville_default = /*#__PURE__*/__webpack_require__.n(font_js_import_Libre_Baskerville_arguments_weight_400_700_subsets_latin_variable_anity_font_two_display_swap_variableName_libreBaskerville_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/CookieConsent.js

const proxy = (0,module_proxy.createProxy)(String.raw`/home/faithnte/Downloads/fenn digital/client/Dr Syeda/website/thrive.her/components/CookieConsent.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const CookieConsent = (__default__);
;// CONCATENATED MODULE: ./app/layout.js




// import "swiper/css/navigation"




const metadata = {
    title: "ThriveHer",
    description: "Charity & Donation react next Js template",
    icons: {
        icon: [
            {
                url: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png"
            },
            {
                url: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png"
            },
            {
                url: "/favicon.ico",
                sizes: "any"
            }
        ],
        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png"
            }
        ]
    },
    manifest: "/site.webmanifest"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: `${(font_js_import_DM_Sans_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_display_swap_variableName_dmSans_default()).variable} ${(font_js_import_Libre_Baskerville_arguments_weight_400_700_subsets_latin_variable_anity_font_two_display_swap_variableName_libreBaskerville_default()).variable}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        sizes: "any"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon-16x16.png",
                        sizes: "16x16",
                        type: "image/png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon-32x32.png",
                        sizes: "32x32",
                        type: "image/png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(CookieConsent, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 40537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./components/elements/Preloader.js

function Preloader() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "loader-wrap",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layer layer-one",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "overlay"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layer layer-two",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "overlay"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layer layer-three",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "overlay"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/loading.js


function loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Preloader, {})
    });
}


/***/ }),

/***/ 52987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31841);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Error404() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            headerStyle: 1,
            footerStyle: 2,
            breadcrumbTitle: "Page Not Found",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "error-page",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "error-page__inner",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "error-page__title-box",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "error-page__title",
                                            children: "404"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "error-page__tagline",
                                        children: "Sorry we can't find that page!"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "error-page__text",
                                        children: "The page you are looking for was never existed."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        className: "error-page__form",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "error-page__form-input",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "search",
                                                    placeholder: "Search here"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "icon-search"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        className: "thm-btn error-page__btn",
                                        children: [
                                            "Back to home",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "icon-arrow-right"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 31841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/faithnte/Downloads/fenn digital/client/Dr Syeda/website/thrive.her/components/layout/Layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 61676:
/***/ (() => {



/***/ })

};
;