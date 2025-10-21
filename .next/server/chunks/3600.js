"use strict";
exports.id = 3600;
exports.ids = [3600];
exports.modules = {

/***/ 82107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Counter({ end, duration }) {
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const countRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const increment = end / duration;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                startCount();
                observer.disconnect();
            }
        }, {
            threshold: 0
        });
        if (countRef.current) {
            observer.observe(countRef.current);
        }
        return ()=>{
            observer.disconnect();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCount((prevCount)=>{
                const newCount = prevCount + increment;
                if (newCount >= end) {
                    clearInterval(interval);
                    return end;
                } else {
                    return newCount;
                }
            });
        }, 1000 / duration);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        end,
        increment
    ]);
    const startCount = ()=>{
        setCount(0);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        ref: countRef,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: Math.round(count)
        })
    });
}


/***/ }),

/***/ 3600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CounterUp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82107);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function CounterUp({ end }) {
    const [inViewport, setInViewport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const mountedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const isElementInViewport = (el)=>{
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        mountedRef.current = true;
        const handleScroll = ()=>{
            if (typeof document === "undefined") return;
            const elements = document.getElementsByClassName("count-text");
            if (elements.length > 0) {
                const element = elements[0];
                const isInViewport = isElementInViewport(element);
                if (isInViewport && !inViewport && mountedRef.current) {
                    setInViewport(true);
                }
            }
        };
        // run once to detect initial position
        handleScroll();
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            mountedRef.current = false;
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        inViewport
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "count-text",
            children: inViewport && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], {
                end: end,
                duration: 20
            })
        })
    });
}


/***/ })

};
;