exports.id = 6416;
exports.ids = [6416];
exports.modules = {

/***/ 44199:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22675))

/***/ }),

/***/ 58274:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 99471, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 66131:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 48001))

/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 22675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CookieConsent),
/* harmony export */   getCookieConsent: () => (/* binding */ getCookieConsent),
/* harmony export */   isCookieAllowed: () => (/* binding */ isCookieAllowed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64244);
/* harmony import */ var _CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default,getCookieConsent,isCookieAllowed auto */ 



const STORAGE_KEY = "thriveher_consent";
function defaultConsent() {
    return {
        essential: true,
        analytics: false,
        marketing: false,
        functional: false,
        version: "1.0"
    };
}
function CookieConsent() {
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [prefsOpen, setPrefsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [preferences, setPreferences] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultConsent());
    const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const lastFocused = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (true) return;
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                setPreferences({
                    ...defaultConsent(),
                    ...parsed
                });
                setVisible(false);
            } else {
                setVisible(true);
            }
        } catch (e) {
            console.error("cookie read error", e);
            setVisible(true);
        }
        const openHandler = ()=>{
            lastFocused.current = document.activeElement;
            setPrefsOpen(true);
        };
        window.addEventListener("openCookiePreferences", openHandler);
        return ()=>window.removeEventListener("openCookiePreferences", openHandler);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (prefsOpen && dialogRef.current) {
            const el = dialogRef.current;
            const focusable = el.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            focusable?.focus();
        } else if (!prefsOpen && lastFocused.current) {
            try {
                lastFocused.current.focus();
            } catch (e) {}
        }
    }, [
        prefsOpen
    ]);
    const saveConsent = (consent)=>{
        const final = {
            ...defaultConsent(),
            ...consent,
            timestamp: new Date().toISOString()
        };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(final));
            try {
                window.dispatchEvent(new CustomEvent("cookieConsentChanged", {
                    detail: final
                }));
            } catch (e) {}
        } catch (e) {
            console.error("failed to save consent", e);
        }
        setPreferences(final);
        setPrefsOpen(false);
        setVisible(false);
    };
    const acceptAll = ()=>saveConsent({
            essential: true,
            analytics: true,
            marketing: true,
            functional: true
        });
    const rejectOptional = ()=>saveConsent({
            essential: true,
            analytics: false,
            marketing: false,
            functional: false
        });
    const togglePref = (key)=>setPreferences((prev)=>({
                ...prev,
                [key]: !prev[key]
            }));
    if (!visible && !prefsOpen) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !prefsOpen && visible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().banner),
                role: "dialog",
                "aria-labelledby": "cookie-title",
                "aria-describedby": "cookie-desc",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().inner),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().copy),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    id: "cookie-title",
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                                    children: "\uD83C\uDF6A We use cookies"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    id: "cookie-desc",
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
                                    children: "We use cookies to enhance your experience on Thrive.Her. Some are essential for functionality, while others help us improve our services."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().small),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/privacy-policy",
                                        children: "Privacy Policy"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().primary),
                                    onClick: acceptAll,
                                    "aria-label": "Accept all cookies",
                                    children: "Accept all"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondary),
                                    onClick: rejectOptional,
                                    "aria-label": "Reject optional cookies",
                                    children: "Essential only"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
                                    onClick: ()=>{
                                        lastFocused.current = document.activeElement;
                                        setPrefsOpen(true);
                                    },
                                    "aria-label": "Manage cookie preferences",
                                    children: "Customise"
                                })
                            ]
                        })
                    ]
                })
            }),
            prefsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay),
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "prefs-title",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().modal),
                    ref: dialogRef,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            id: "prefs-title",
                            className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().modalTitle),
                            children: "Manage cookie preferences"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().modalText),
                            children: "Choose the cookies you want to allow. No optional cookies are selected by default."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().list),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Essential cookies"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemText),
                                                    children: "Necessary for the site to work. Always on."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().required),
                                            children: "Always on"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Analytics cookies"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemText),
                                                    children: "Help us understand how people use the site (anonymous)."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkboxLabel),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        "aria-label": "Enable analytics cookies",
                                                        type: "checkbox",
                                                        checked: !!preferences.analytics,
                                                        onChange: ()=>togglePref("analytics")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkboxFake)
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Marketing cookies"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemText),
                                                    children: "Used to show relevant content and advertisements."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkboxLabel),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        "aria-label": "Enable marketing cookies",
                                                        type: "checkbox",
                                                        checked: !!preferences.marketing,
                                                        onChange: ()=>togglePref("marketing")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkboxFake)
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Functional cookies"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemText),
                                                    children: "Remember your preferences and settings for a personalised experience."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkboxLabel),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        "aria-label": "Enable functional cookies",
                                                        type: "checkbox",
                                                        checked: !!preferences.functional,
                                                        onChange: ()=>togglePref("functional")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkboxFake)
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().modalActions),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().primary),
                                    onClick: ()=>saveConsent(preferences),
                                    children: "Save preferences"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_CookieConsent_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondary),
                                    onClick: ()=>{
                                        setPrefsOpen(false);
                                        setVisible(false);
                                    },
                                    children: "Cancel"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
const getCookieConsent = ()=>{
    if (true) return null;
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    } catch (e) {
        return null;
    }
};
const isCookieAllowed = (type)=>{
    try {
        const c = getCookieConsent();
        return !!(c && c[type]);
    } catch (e) {
        return false;
    }
};


/***/ }),

/***/ 48001:
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

;// CONCATENATED MODULE: ./components/layout/Menu.js


// import { useRouter } from "next/router"
function Menu() {
    // const router = useRouter()
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "main-menu__list",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            cursor: "default",
                            color: "inherit"
                        },
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            cursor: "default",
                            color: "inherit"
                        },
                        children: "About"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            cursor: "default",
                            color: "inherit"
                        },
                        children: "Services"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            cursor: "default",
                            color: "inherit"
                        },
                        children: "Programs"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            cursor: "default",
                            color: "inherit"
                        },
                        children: "Resources"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            cursor: "default",
                            color: "inherit"
                        },
                        children: "Contact"
                    })
                })
            ]
        })
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
            className: "mobile-nav__wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mobile-nav__overlay mobile-nav__toggler",
                    onClick: handleMobileMenu
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mobile-nav__content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mobile-nav__close mobile-nav__toggler",
                            onClick: handleMobileMenu,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo-box",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                "aria-label": "logo image",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/images/resources/logo-footer-bright.svg",
                                    width: "150",
                                    alt: "ThriveHer Logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile-nav__container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "collapse navbar-collapse show clearfix",
                                id: "navbarSupportedContent",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "main-menu__list",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 1 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: "Home"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 1 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "index2",
                                                                children: "Home Two"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "index3",
                                                                children: "Home Three"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: isActive.key == 1 ? "expanded open" : "",
                                                    onClick: ()=>handleToggle(1),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about/",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 2 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: "Pages"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 2 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: isActive.subMenuKey == 3 ? "dropdown current" : "dropdown",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/",
                                                                    children: "Volunteer"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    style: {
                                                                        display: `${isActive.subMenuKey == 3 ? "block" : "none"}`
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "volunteer",
                                                                                children: "Volunteer"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "volunteer-carousel",
                                                                                children: "Volunteer Carousel"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "become-volunteer",
                                                                                children: "Become Volunteer"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "volunteer-details",
                                                                                children: "Volunteer Details"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: isActive.subMenuKey == 3 ? "expanded open" : "expanded",
                                                                    onClick: ()=>handleToggle(2, 3),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "fa fa-angle-right"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: isActive.subMenuKey == 4 ? "dropdown current" : "dropdown",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/",
                                                                    children: "Events"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    style: {
                                                                        display: `${isActive.subMenuKey == 4 ? "block" : "none"}`
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "events",
                                                                                children: "Events"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "events-carousel",
                                                                                children: "Events Carousel"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "events-list",
                                                                                children: "Events List"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "event-details",
                                                                                children: "Event Details"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: isActive.subMenuKey == 4 ? "expanded open" : "expanded",
                                                                    onClick: ()=>handleToggle(2, 4),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "fa fa-angle-right"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "projects",
                                                                children: "Projects"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "project-details",
                                                                children: "Project Details"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "cause-details",
                                                                children: "Cause Details"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "testimonials",
                                                                children: "Testimonials"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "faq",
                                                                children: "FAQs"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "404",
                                                                children: "404 Error"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: isActive.key == 2 ? "expanded open" : "",
                                                    onClick: ()=>handleToggle(2),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 5 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: "Donation"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 5 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "donation",
                                                                children: "Donation"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "donation-carousel",
                                                                children: "Donation Carousel"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "donation-details",
                                                                children: "Donation Details"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: isActive.key == 5 ? "expanded open" : "",
                                                    onClick: ()=>handleToggle(5),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 6 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: "Shop"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 6 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "products",
                                                                children: "Products"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "product-details",
                                                                children: "Product Details"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "cart",
                                                                children: "Cart"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "checkout",
                                                                children: "Checkout"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "wishlist",
                                                                children: "Wishlist"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "account",
                                                                children: "My Account"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: isActive.key == 6 ? "expanded open" : "",
                                                    onClick: ()=>handleToggle(6),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 7 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: "Blog"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 7 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "blog",
                                                                children: "Blog"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "blog-carousel",
                                                                children: "Blog Carousel"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "blog-list",
                                                                children: "Blog List"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "blog-details",
                                                                children: "Blog Details"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: isActive.key == 7 ? "expanded open" : "",
                                                    onClick: ()=>handleToggle(7),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "mobile-nav__contact list-unstyled",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-envelope"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "mailto:needhelp@elitecons.com",
                                            children: "needhelp@elitecons.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-phone-alt"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "tel:666-888-0000",
                                            children: "666 888 0000"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile-nav__top",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile-nav__social",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "fab fa-twitter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "fab fa-facebook-square"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "fab fa-pinterest-p"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "fab fa-instagram"
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
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        cursor: "default"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "main-menu__main-menu-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            cursor: "default"
                                                        },
                                                        className: "mobile-nav__toggler",
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
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu__search-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        cursor: "default"
                                                    },
                                                    className: "main-menu__search search-toggler icon-search"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu__btn-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    style: {
                                                        cursor: "default"
                                                    },
                                                    className: "main-menu__btn thm-btn",
                                                    children: [
                                                        "Partner with US",
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
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            cursor: "default"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/logo (256 x 80 px)-gold.svg",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__main-menu-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                cursor: "default"
                                                            },
                                                            className: "mobile-nav__toggler",
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
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__search-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            cursor: "default"
                                                        },
                                                        className: "main-menu__search search-toggler icon-search"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu__btn-box",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        style: {
                                                            cursor: "default"
                                                        },
                                                        className: "main-menu__btn thm-btn",
                                                        children: [
                                                            "Partner with Us",
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
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "donation-details",
                                                    className: "main-menu-three__btn thm-btn",
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
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "donation-details",
                                                        className: "main-menu-three__btn thm-btn",
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

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(86369);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
;// CONCATENATED MODULE: ./components/CookieSettings.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function CookieSettings() {
    const [showConsent, setShowConsent] = (0,react_.useState)(false);
    const handleOpenSettings = ()=>{
        // Broadcast an in-page event that the CookieConsent listens for
        try {
            window.dispatchEvent(new Event("openCookiePreferences"));
        } catch (e) {
            // fallback: remove consent and reload
            localStorage.removeItem("thriveher_consent");
            window.location.reload();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: handleOpenSettings,
                "aria-label": "Open cookie preferences settings",
                className: "jsx-2cc32643310e7dc" + " " + "cookie-settings-link",
                children: "Cookie settings"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "2cc32643310e7dc",
                children: ".cookie-settings-link.jsx-2cc32643310e7dc{background:none;border:none;color:inherit;text-decoration:underline;font-size:inherit;cursor:pointer;padding:0;font-family:inherit;line-height:inherit}.cookie-settings-link.jsx-2cc32643310e7dc:hover{opacity:.8}.cookie-settings-link.jsx-2cc32643310e7dc:focus{outline:2px solid#ffbf47;outline-offset:2px}"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer1.js



function Footer1() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "site-footer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer__newsletter",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "site-footer__newsletter-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "site-footer__newsletter-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "site-footer__newsletter-title-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "site-footer__newsletter-title",
                                                    children: "Subscribe Our Newsletters"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "site-footer__newsletter-right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "site-footer__newsletter-content",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    className: "site-footer__newsletter-form",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "site-footer__newsletter-input",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                placeholder: "Enter Your Email"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            type: "submit",
                                                            className: "thm-btn site-footer__newsletter-btn",
                                                            children: [
                                                                "Subscribe",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-arrow-right"
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
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer__top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer__top-inner",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-4 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__about",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget__about-logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/logo-footer-bright.svg",
                                                            alt: "ThriveHer Logo"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "footer-widget__about-text",
                                                    children: "We're based in London but serve women, communities, and organisations worldwide through online education, culturally sensitive programmes, and strategic partnerships."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "site-footer__social",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                cursor: "default"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                cursor: "default"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-instagram"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                cursor: "default"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-linkedin"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                cursor: "default"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-youtube"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__services",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "footer-widget__title",
                                                    children: "Services"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget__services-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                style: {
                                                                    backgroundColor: "#21273F",
                                                                    color: "#21273F",
                                                                    padding: "2px 4px"
                                                                },
                                                                children: "████████████"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                style: {
                                                                    backgroundColor: "#21273F",
                                                                    color: "#21273F",
                                                                    padding: "2px 4px"
                                                                },
                                                                children: "█████████████████"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                style: {
                                                                    backgroundColor: "#21273F",
                                                                    color: "#21273F",
                                                                    padding: "2px 4px"
                                                                },
                                                                children: "██████████████"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                style: {
                                                                    backgroundColor: "#21273F",
                                                                    color: "#21273F",
                                                                    padding: "2px 4px"
                                                                },
                                                                children: "████████████"
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
                                            className: "footer-widget__links",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "footer-widget__title",
                                                    children: "Links"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget__services-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                style: {
                                                                    backgroundColor: "#21273F",
                                                                    color: "#21273F",
                                                                    padding: "2px 4px"
                                                                },
                                                                children: "███████████████"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                style: {
                                                                    backgroundColor: "#21273F",
                                                                    color: "#21273F",
                                                                    padding: "2px 4px"
                                                                },
                                                                children: "█████████████████"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                style: {
                                                                    backgroundColor: "#21273F",
                                                                    color: "#21273F",
                                                                    padding: "2px 4px"
                                                                },
                                                                children: "████████████"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                style: {
                                                                    backgroundColor: "#21273F",
                                                                    color: "#21273F",
                                                                    padding: "2px 4px"
                                                                },
                                                                children: "████████████████"
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
                                            className: "footer-widget__contact",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "footer-widget__title",
                                                    children: "Contact Info"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget__contact-list list-unstyled",
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
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        style: {
                                                                            cursor: "default"
                                                                        },
                                                                        children: "+44 7459 110397"
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
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        style: {
                                                                            cursor: "default"
                                                                        },
                                                                        children: "info@thriveher.clinic"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-pin"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    children: [
                                                                        "ThriveHer Ltd",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        "Kemp House, 152–160 City Road",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        "London, EC1V 2NX, United Kingdom"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "site-footer__bottom-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "site-footer__copyright",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "site-footer__copyright-text",
                                                children: [
                                                    "Copyright 2024 by ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            cursor: "default"
                                                        },
                                                        children: "ThriveHer Ltd"
                                                    }),
                                                    ". All Rights Reserved."
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "site-footer__bottom-menu-box",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-unstyled site-footer__bottom-menu",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                cursor: "default"
                                                            },
                                                            children: "Privacy Policy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                cursor: "default"
                                                            },
                                                            children: "Terms of Service"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                cursor: "default"
                                                            },
                                                            children: "Cookie Settings"
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
                                                        children: "Partner With Us"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "footer-widget-two__about-text",
                                                        children: "We're based in London but serve women, communities, and organisations worldwide through online education, culturally sensitive programmes, and strategic partnerships."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "footer-widget-two__btn-box",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                            href: "donation-details",
                                                            className: "footer-widget-two__btn thm-btn",
                                                            children: [
                                                                "Partner with Us",
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
                                                                            href: "tel:+447459110397",
                                                                            children: "+44 7459 110397"
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
                                                                            href: "mailto:info@thriveher.clinic",
                                                                            children: "info@thriveher.clinic"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "icon",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon-pin"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            "ThriveHer Ltd",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "Kemp House, 152–160 City Road",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "London, EC1V 2NX, United Kingdom"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "site-footer-two__social",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://www.facebook.com/share/177a8NJdki/?mibextid=wwXIfr",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-facebook"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://www.instagram.com/thriveher.clinic/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-instagram"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://www.linkedin.com/company/thriveher-clinic/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-linkedin"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://www.youtube.com/@ThriveWithDrHussaini",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-youtube"
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
                                                            "Copyright 2024 by ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: "ThriveHer Ltd"
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
                                                                    href: "/privacy-policy",
                                                                    children: "Privacy Policy"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/terms-of-service",
                                                                    children: "Terms of Service"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CookieSettings, {})
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
                                                            children: "Partner With Us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "footer-widget-two__about-text",
                                                            children: "We're based in London but serve women, communities, and organisations worldwide through online education, culturally sensitive programmes, and strategic partnerships."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "footer-widget-two__btn-box",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "donation-details",
                                                                className: "footer-widget-two__btn thm-btn",
                                                                children: [
                                                                    "Partner with Us",
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
                                                                                href: "tel:+447459110397",
                                                                                children: "+44 7459 110397"
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
                                                                                href: "mailto:info@thriveher.clinic",
                                                                                children: "info@thriveher.clinic"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "icon",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon-pin"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            children: [
                                                                                "ThriveHer Ltd",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                                "Kemp House, 152–160 City Road",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                                "London, EC1V 2NX, United Kingdom"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "site-footer-two__social",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "https://www.facebook.com/share/177a8NJdki/?mibextid=wwXIfr",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-facebook"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "https://www.instagram.com/thriveher.clinic/",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-instagram"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "https://www.linkedin.com/company/thriveher-clinic/",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-linkedin"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "https://www.youtube.com/@ThriveWithDrHussaini",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-youtube"
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
                                                            "Copyright 2024 by ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: "ThriveHer Ltd"
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
                                                                    href: "/privacy-policy",
                                                                    children: "Privacy Policy"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/terms-of-service",
                                                                    children: "Terms of Service"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CookieSettings, {})
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

/***/ 64244:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "CookieConsent_banner__yWW0L",
	"inner": "CookieConsent_inner__FcOHr",
	"copy": "CookieConsent_copy__5o737",
	"title": "CookieConsent_title__CHwVa",
	"text": "CookieConsent_text__6o96c",
	"small": "CookieConsent_small__KRZ8b",
	"actions": "CookieConsent_actions__YPCKu",
	"primary": "CookieConsent_primary___C34z",
	"secondary": "CookieConsent_secondary__RktaG",
	"link": "CookieConsent_link__32ySk",
	"overlay": "CookieConsent_overlay__1FGqE",
	"modal": "CookieConsent_modal__ITUmf",
	"modalTitle": "CookieConsent_modalTitle__G3YwE",
	"modalText": "CookieConsent_modalText__tuOiT",
	"list": "CookieConsent_list__BCa5u",
	"item": "CookieConsent_item__x_hH_",
	"itemText": "CookieConsent_itemText__XfG3i",
	"required": "CookieConsent_required__FkEQu",
	"checkboxLabel": "CookieConsent_checkboxLabel__yV8WV",
	"modalActions": "CookieConsent_modalActions__ld_EU"
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
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"lib/font.js","import":"Playfair_Display","arguments":[{"weight":["400","500","600","700","800","900"],"subsets":["latin"],"variable":"--anity-font-playfair","display":"swap"}],"variableName":"playfairDisplay"}
var font_js_import_Playfair_Display_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_playfair_display_swap_variableName_playfairDisplay_ = __webpack_require__(83974);
var font_js_import_Playfair_Display_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_playfair_display_swap_variableName_playfairDisplay_default = /*#__PURE__*/__webpack_require__.n(font_js_import_Playfair_Display_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_playfair_display_swap_variableName_playfairDisplay_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"lib/font.js","import":"Inter","arguments":[{"weight":["400","500","600","700","800"],"subsets":["latin"],"variable":"--anity-font-inter","display":"swap"}],"variableName":"inter"}
var font_js_import_Inter_arguments_weight_400_500_600_700_800_subsets_latin_variable_anity_font_inter_display_swap_variableName_inter_ = __webpack_require__(4416);
var font_js_import_Inter_arguments_weight_400_500_600_700_800_subsets_latin_variable_anity_font_inter_display_swap_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(font_js_import_Inter_arguments_weight_400_500_600_700_800_subsets_latin_variable_anity_font_inter_display_swap_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"lib/font.js","import":"DM_Sans","arguments":[{"weight":["400","500","600","700","800","900"],"subsets":["latin"],"variable":"--anity-font","display":"swap"}],"variableName":"dmSans"}
var font_js_import_DM_Sans_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_display_swap_variableName_dmSans_ = __webpack_require__(54100);
var font_js_import_DM_Sans_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_display_swap_variableName_dmSans_default = /*#__PURE__*/__webpack_require__.n(font_js_import_DM_Sans_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_display_swap_variableName_dmSans_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"lib/font.js","import":"Libre_Baskerville","arguments":[{"weight":["400","700"],"subsets":["latin"],"variable":"--anity-font-two","display":"swap"}],"variableName":"libreBaskerville"}
var font_js_import_Libre_Baskerville_arguments_weight_400_700_subsets_latin_variable_anity_font_two_display_swap_variableName_libreBaskerville_ = __webpack_require__(61667);
var font_js_import_Libre_Baskerville_arguments_weight_400_700_subsets_latin_variable_anity_font_two_display_swap_variableName_libreBaskerville_default = /*#__PURE__*/__webpack_require__.n(font_js_import_Libre_Baskerville_arguments_weight_400_700_subsets_latin_variable_anity_font_two_display_swap_variableName_libreBaskerville_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/CookieConsent.js

const proxy = (0,module_proxy.createProxy)(String.raw`/workspaces/thrive.her/components/CookieConsent.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const CookieConsent = (__default__);
const e0 = proxy["getCookieConsent"];

const e1 = proxy["isCookieAllowed"];

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
        className: `${(font_js_import_Playfair_Display_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_playfair_display_swap_variableName_playfairDisplay_default()).variable} ${(font_js_import_Inter_arguments_weight_400_500_600_700_800_subsets_latin_variable_anity_font_inter_display_swap_variableName_inter_default()).variable} ${(font_js_import_DM_Sans_arguments_weight_400_500_600_700_800_900_subsets_latin_variable_anity_font_display_swap_variableName_dmSans_default()).variable} ${(font_js_import_Libre_Baskerville_arguments_weight_400_700_subsets_latin_variable_anity_font_two_display_swap_variableName_libreBaskerville_default()).variable}`,
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

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/workspaces/thrive.her/components/layout/Layout.js`)

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