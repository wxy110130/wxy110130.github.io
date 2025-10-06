"use strict";
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return a
    }
    ;
    var s, a = {}, e = Object.prototype, l = e.hasOwnProperty, u = Object.defineProperty || function(e, t, n) {
        e[t] = n.value
    }
    , t = "function" == typeof Symbol ? Symbol : {}, o = t.iterator || "@@iterator", n = t.asyncIterator || "@@asyncIterator", i = t.toStringTag || "@@toStringTag";
    function r(e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        e[t]
    }
    try {
        r({}, "")
    } catch (s) {
        r = function(e, t, n) {
            return e[t] = n
        }
    }
    function c(e, t, n, o) {
        var i, r, a, c, t = t && t.prototype instanceof p ? t : p, t = Object.create(t.prototype), o = new B(o || []);
        return u(t, "_invoke", {
            value: (i = e,
            r = n,
            a = o,
            c = m,
            function(e, t) {
                if (c === y)
                    throw new Error("Generator is already running");
                if (c === f) {
                    if ("throw" === e)
                        throw t;
                    return {
                        value: s,
                        done: !0
                    }
                }
                for (a.method = e,
                a.arg = t; ; ) {
                    var n = a.delegate;
                    if (n) {
                        n = function e(t, n) {
                            var o = n.method
                              , i = t.iterator[o];
                            if (i === s)
                                return n.delegate = null,
                                "throw" === o && t.iterator.return && (n.method = "return",
                                n.arg = s,
                                e(t, n),
                                "throw" === n.method) || "return" !== o && (n.method = "throw",
                                n.arg = new TypeError("The iterator does not provide a '" + o + "' method")),
                                g;
                            o = d(i, t.iterator, n.arg);
                            if ("throw" === o.type)
                                return n.method = "throw",
                                n.arg = o.arg,
                                n.delegate = null,
                                g;
                            i = o.arg;
                            return i ? i.done ? (n[t.resultName] = i.value,
                            n.next = t.nextLoc,
                            "return" !== n.method && (n.method = "next",
                            n.arg = s),
                            n.delegate = null,
                            g) : i : (n.method = "throw",
                            n.arg = new TypeError("iterator result is not an object"),
                            n.delegate = null,
                            g)
                        }(n, a);
                        if (n) {
                            if (n === g)
                                continue;
                            return n
                        }
                    }
                    if ("next" === a.method)
                        a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if (c === m)
                            throw c = f,
                            a.arg;
                        a.dispatchException(a.arg)
                    } else
                        "return" === a.method && a.abrupt("return", a.arg);
                    c = y;
                    n = d(i, r, a);
                    if ("normal" === n.type) {
                        if (c = a.done ? f : h,
                        n.arg === g)
                            continue;
                        return {
                            value: n.arg,
                            done: a.done
                        }
                    }
                    "throw" === n.type && (c = f,
                    a.method = "throw",
                    a.arg = n.arg)
                }
            }
            )
        }),
        t
    }
    function d(e, t, n) {
        try {
            return {
                type: "normal",
                arg: e.call(t, n)
            }
        } catch (e) {
            return {
                type: "throw",
                arg: e
            }
        }
    }
    a.wrap = c;
    var m = "suspendedStart"
      , h = "suspendedYield"
      , y = "executing"
      , f = "completed"
      , g = {};
    function p() {}
    function v() {}
    function w() {}
    var t = {}
      , L = (r(t, o, function() {
        return this
    }),
    Object.getPrototypeOf)
      , L = L && L(L(T([])))
      , b = (L && L !== e && l.call(L, o) && (t = L),
    w.prototype = p.prototype = Object.create(t));
    function E(e) {
        ["next", "throw", "return"].forEach(function(t) {
            r(e, t, function(e) {
                return this._invoke(t, e)
            })
        })
    }
    function S(a, c) {
        var t;
        u(this, "_invoke", {
            value: function(n, o) {
                function e() {
                    return new c(function(e, t) {
                        !function t(e, n, o, i) {
                            var r, e = d(a[e], a, n);
                            if ("throw" !== e.type)
                                return (n = (r = e.arg).value) && "object" == _typeof(n) && l.call(n, "__await") ? c.resolve(n.__await).then(function(e) {
                                    t("next", e, o, i)
                                }, function(e) {
                                    t("throw", e, o, i)
                                }) : c.resolve(n).then(function(e) {
                                    r.value = e,
                                    o(r)
                                }, function(e) {
                                    return t("throw", e, o, i)
                                });
                            i(e.arg)
                        }(n, o, e, t)
                    }
                    )
                }
                return t = t ? t.then(e, e) : e()
            }
        })
    }
    function I(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]),
        2 in e && (t.finallyLoc = e[2],
        t.afterLoc = e[3]),
        this.tryEntries.push(t)
    }
    function x(e) {
        var t = e.completion || {};
        t.type = "normal",
        delete t.arg,
        e.completion = t
    }
    function B(e) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        e.forEach(I, this),
        this.reset(!0)
    }
    function T(t) {
        if (t || "" === t) {
            var n, e = t[o];
            if (e)
                return e.call(t);
            if ("function" == typeof t.next)
                return t;
            if (!isNaN(t.length))
                return n = -1,
                (e = function e() {
                    for (; ++n < t.length; )
                        if (l.call(t, n))
                            return e.value = t[n],
                            e.done = !1,
                            e;
                    return e.value = s,
                    e.done = !0,
                    e
                }
                ).next = e
        }
        throw new TypeError(_typeof(t) + " is not iterable")
    }
    return u(b, "constructor", {
        value: v.prototype = w,
        configurable: !0
    }),
    u(w, "constructor", {
        value: v,
        configurable: !0
    }),
    v.displayName = r(w, i, "GeneratorFunction"),
    a.isGeneratorFunction = function(e) {
        e = "function" == typeof e && e.constructor;
        return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
    }
    ,
    a.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w,
        r(e, i, "GeneratorFunction")),
        e.prototype = Object.create(b),
        e
    }
    ,
    a.awrap = function(e) {
        return {
            __await: e
        }
    }
    ,
    E(S.prototype),
    r(S.prototype, n, function() {
        return this
    }),
    a.AsyncIterator = S,
    a.async = function(e, t, n, o, i) {
        void 0 === i && (i = Promise);
        var r = new S(c(e, t, n, o),i);
        return a.isGeneratorFunction(t) ? r : r.next().then(function(e) {
            return e.done ? e.value : r.next()
        })
    }
    ,
    E(b),
    r(b, i, "Generator"),
    r(b, o, function() {
        return this
    }),
    r(b, "toString", function() {
        return "[object Generator]"
    }),
    a.keys = function(e) {
        var t, n = Object(e), o = [];
        for (t in n)
            o.push(t);
        return o.reverse(),
        function e() {
            for (; o.length; ) {
                var t = o.pop();
                if (t in n)
                    return e.value = t,
                    e.done = !1,
                    e
            }
            return e.done = !0,
            e
        }
    }
    ,
    a.values = T,
    B.prototype = {
        constructor: B,
        reset: function(e) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = s,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = s,
            this.tryEntries.forEach(x),
            !e)
                for (var t in this)
                    "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = s)
        },
        stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type)
                throw e.arg;
            return this.rval
        },
        dispatchException: function(n) {
            if (this.done)
                throw n;
            var o = this;
            function e(e, t) {
                return r.type = "throw",
                r.arg = n,
                o.next = e,
                t && (o.method = "next",
                o.arg = s),
                !!t
            }
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var i = this.tryEntries[t]
                  , r = i.completion;
                if ("root" === i.tryLoc)
                    return e("end");
                if (i.tryLoc <= this.prev) {
                    var a = l.call(i, "catchLoc")
                      , c = l.call(i, "finallyLoc");
                    if (a && c) {
                        if (this.prev < i.catchLoc)
                            return e(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc)
                            return e(i.finallyLoc)
                    } else if (a) {
                        if (this.prev < i.catchLoc)
                            return e(i.catchLoc, !0)
                    } else {
                        if (!c)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc)
                            return e(i.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(e, t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && l.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break
                }
            }
            var r = (i = i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc ? null : i) ? i.completion : {};
            return r.type = e,
            r.arg = t,
            i ? (this.method = "next",
            this.next = i.finallyLoc,
            g) : this.complete(r)
        },
        complete: function(e, t) {
            if ("throw" === e.type)
                throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
            this.method = "return",
            this.next = "end") : "normal" === e.type && t && (this.next = t),
            g
        },
        finish: function(e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc),
                    x(n),
                    g
            }
        },
        catch: function(e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n, o, i = this.tryEntries[t];
                if (i.tryLoc === e)
                    return "throw" === (n = i.completion).type && (o = n.arg,
                    x(i)),
                    o
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(e, t, n) {
            return this.delegate = {
                iterator: T(e),
                resultName: t,
                nextLoc: n
            },
            "next" === this.method && (this.arg = s),
            g
        }
    },
    a
}
function asyncGeneratorStep(e, t, n, o, i, r, a) {
    try {
        var c = e[r](a)
          , s = c.value
    } catch (e) {
        return void n(e)
    }
    c.done ? t(s) : Promise.resolve(s).then(o, i)
}
function _asyncToGenerator(c) {
    return function() {
        var e = this
          , a = arguments;
        return new Promise(function(t, n) {
            var o = c.apply(e, a);
            function i(e) {
                asyncGeneratorStep(o, t, n, i, r, "next", e)
            }
            function r(e) {
                asyncGeneratorStep(o, t, n, i, r, "throw", e)
            }
            i(void 0)
        }
        )
    }
}
function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(e, t) {
    var n;
    if (e)
        return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++)
        o[n] = e[n];
    return o
}
function _iterableToArrayLimit(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var o, i, r, a, c = [], s = !0, l = !1;
        try {
            if (r = (n = n.call(e)).next,
            0 === t) {
                if (Object(n) !== n)
                    return;
                s = !1
            } else
                for (; !(s = (o = r.call(n)).done) && (c.push(o.value),
                c.length !== t); s = !0)
                    ;
        } catch (e) {
            l = !0,
            i = e
        } finally {
            try {
                if (!s && null != n.return && (a = n.return(),
                Object(a) !== a))
                    return
            } finally {
                if (l)
                    throw i
            }
        }
        return c
    }
}
function _arrayWithHoles(e) {
    if (Array.isArray(e))
        return e
}
var anzhiyu = {
    debounce: function(i) {
        var r, a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, c = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
        return function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            var o = c && !r;
            clearTimeout(r),
            r = setTimeout(function() {
                r = null,
                c || i.apply(void 0, t)
            }, a),
            o && i.apply(void 0, t)
        }
    },
    throttle: function(r, a) {
        function c() {
            h = !1 === m.leading ? 0 : (new Date).getTime(),
            s = null,
            r.apply(l, u),
            s || (l = u = null)
        }
        var s, l, u, d = this, m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, h = 0;
        return function() {
            var e = (new Date).getTime()
              , t = (h || !1 !== m.leading || (h = e),
            a - (e - h));
            l = d;
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                o[i] = arguments[i];
            u = o,
            t <= 0 || a < t ? (s && (clearTimeout(s),
            s = null),
            h = e,
            r.apply(l, u),
            s || (l = u = null)) : s || !1 === m.trailing || (s = setTimeout(c, t))
        }
    },
    sidebarPaddingR: function() {
        var e = window.innerWidth
          , t = document.body.clientWidth;
        e !== t && (document.body.style.paddingRight = e - t + "px")
    },
    snackbarShow: function(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 2e3
          , o = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]
          , i = GLOBAL_CONFIG.Snackbar
          , r = i.position
          , a = i.bgLight
          , i = i.bgDark
          , a = "light" === document.documentElement.getAttribute("data-theme") ? a : i;
        document.querySelector(":root").style.setProperty("--anzhiyu-snackbar-time", n + "ms"),
        Snackbar.show({
            text: e,
            backgroundColor: a,
            onActionClick: t,
            actionText: o,
            showAction: o,
            duration: n,
            pos: r,
            customClass: "snackbar-css"
        })
    },
    loadComment: function(e, t) {
        var n;
        "IntersectionObserver"in window ? (n = new IntersectionObserver(function(e) {
            e[0].isIntersecting && (t(),
            n.disconnect())
        }
        ,{
            threshold: [0]
        })).observe(e) : t()
    },
    scrollToDest: function(n) {
        var o, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 500, r = window.pageYOffset;
        "scrollBehavior"in document.documentElement.style ? window.scrollTo({
            top: n,
            behavior: "smooth"
        }) : (o = null,
        n = +n,
        window.requestAnimationFrame(function e(t) {
            t -= o = o || t;
            r < n ? window.scrollTo(0, (n - r) * t / i + r) : window.scrollTo(0, r - (r - n) * t / i),
            t < i ? window.requestAnimationFrame(e) : window.scrollTo(0, n)
        }))
    },
    initJustifiedGallery: function(e) {
        function t(e) {
            anzhiyu.isHidden(e) || fjGallery(e, {
                itemSelector: ".fj-gallery-item",
                rowHeight: e.getAttribute("data-rowHeight"),
                gutter: 4,
                onJustify: function() {
                    this.$container.style.opacity = "1"
                }
            })
        }
        0 === Array.from(e).length ? t(e) : e.forEach(function(e) {
            t(e)
        })
    },
    animateIn: function(e, t) {
        e.style.display = "block",
        e.style.animation = t
    },
    animateOut: function(t, e) {
        t.addEventListener("animationend", function e() {
            t.style.display = "",
            t.style.animation = "",
            t.removeEventListener("animationend", e)
        }),
        t.style.animation = e
    },
    wrap: function(e, t, n) {
        for (var o = document.createElement(t), i = 0, r = Object.entries(n); i < r.length; i++) {
            var a = _slicedToArray(r[i], 2)
              , c = a[0]
              , a = a[1];
            o.setAttribute(c, a)
        }
        e.parentNode.insertBefore(o, e),
        o.appendChild(e)
    },
    isHidden: function(e) {
        return 0 === e.offsetHeight && 0 === e.offsetWidth
    },
    getEleTop: function(e) {
        for (var t = e.offsetTop, n = e.offsetParent; null !== n; )
            t += n.offsetTop,
            n = n.offsetParent;
        return t
    },
    loadLightbox: function(e) {
        var n, t = GLOBAL_CONFIG.lightbox;
        "mediumZoom" === t && (n = mediumZoom(e)).on("open", function(e) {
            var t = "dark" === document.documentElement.getAttribute("data-theme") ? "#121212" : "#fff";
            n.update({
                background: t
            })
        }),
        "fancybox" === t && (Array.from(e).forEach(function(e) {
            var t, n;
            "A" !== e.parentNode.tagName && (t = e.dataset.lazySrc || e.src,
            n = e.title || e.alt || "",
            anzhiyu.wrap(e, "a", {
                href: t,
                "data-fancybox": "gallery",
                "data-caption": n,
                "data-thumb": t
            }))
        }),
        window.fancyboxRun || (Fancybox.bind("[data-fancybox]", {
            Hash: !1,
            Thumbs: {
                autoStart: !1
            }
        }),
        window.fancyboxRun = !0))
    },
    setLoading: {
        add: function(e) {
            e.insertAdjacentHTML("afterend", '\n        <div class="loading-container">\n          <div class="loading-item">\n            <div></div><div></div><div></div><div></div><div></div>\n          </div>\n        </div>\n      ')
        },
        remove: function(e) {
            e.nextElementSibling.remove()
        }
    },
    updateAnchor: function(e) {
        var t;
        e !== window.location.hash && (e = e || location.pathname,
        t = GLOBAL_CONFIG_SITE.title,
        window.history.replaceState({
            url: location.href,
            title: t
        }, t, e))
    },
    getScrollPercent: function(e, t) {
        var n = t.clientHeight
          , o = document.documentElement.clientHeight
          , t = t.offsetTop
          , n = o < n ? n - o : document.documentElement.scrollHeight - o
          , o = Math.round(100 * ((e - t) / n));
        return 100 < o ? 100 : o <= 0 ? 0 : o
    },
    addGlobalFn: function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : window
          , i = o.globalFn || {}
          , r = i[e] || {};
        n && r[n] || (r[n || Object.keys(r).length] = t,
        i[e] = r,
        o.globalFn = i)
    },
    addEventListenerPjax: function(e, t, n) {
        var o = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
        e.addEventListener(t, n, o),
        anzhiyu.addGlobalFn("pjax", function() {
            e.removeEventListener(t, n, o)
        })
    },
    removeGlobalFnEvent: function(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window
          , n = t.globalFn
          , o = (void 0 === n ? {} : n)[e] || {}
          , n = Object.keys(o);
        n.length && (n.forEach(function(e) {
            o[e]()
        }),
        delete t.globalFn[e])
    },
    changeThemeMetaColor: function(e) {
        null !== themeColorMeta && themeColorMeta.setAttribute("content", e)
    },
    initThemeColor: function() {
        var e = getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-bar-background").trim().replace('"', "").replace('"', "");
        26 < (window.scrollY || document.documentElement.scrollTop) && anzhiyu.is_Post() && (e = getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-meta-theme-post-color").trim().replace('"', "").replace('"', "")),
        themeColorMeta.getAttribute("content") !== e && this.changeThemeMetaColor(e)
    },
    is_Post: function() {
        return 0 <= window.location.href.indexOf("/posts/")
    },
    addNavBackgroundInit: function() {
        var e = 0
          , t = 0;
        0 != (0 < (e = $bodyWrap ? $bodyWrap.scrollTop : e) - (t = document.documentElement ? document.documentElement.scrollTop : t) ? e : t) && (pageHeaderEl.classList.add("nav-fixed"),
        pageHeaderEl.classList.add("nav-visible"))
    },
    downloadImage: function(e, i) {
        rm.hideRightMenu(),
        0 == rm.downloadimging ? (rm.downloadimging = !0,
        anzhiyu.snackbarShow("正在下载中，请稍后", !1, 1e4),
        setTimeout(function() {
            var o = new Image;
            o.setAttribute("crossOrigin", "anonymous"),
            o.onload = function() {
                var e = document.createElement("canvas");
                e.width = o.width,
                e.height = o.height;
                e.getContext("2d").drawImage(o, 0, 0, o.width, o.height);
                var e = e.toDataURL("image/png")
                  , t = document.createElement("a")
                  , n = new MouseEvent("click");
                t.download = i || "photo",
                t.href = e,
                t.dispatchEvent(n)
            }
            ,
            o.src = e,
            anzhiyu.snackbarShow("图片已添加盲水印，请遵守版权协议"),
            rm.downloadimging = !1
        }, "10000")) : anzhiyu.snackbarShow("有正在进行中的下载，请稍后再试")
    },
    stopImgRightDrag: function() {
        for (var e = document.getElementsByTagName("img"), t = 0; t < e.length; t++)
            e[t].addEventListener("dragstart", function() {
                return !1
            })
    },
    scrollTo: function(e) {
        e = document.querySelector(e).offsetTop;
        window.scrollTo(0, e - 80)
    },
    hideAsideBtn: function() {
        var e = document.documentElement.classList;
        e.contains("hide-aside") ? saveToLocal.set("aside-status", "show", 2) : saveToLocal.set("aside-status", "hide", 2),
        e.toggle("hide-aside"),
        e.contains("hide-aside") ? document.querySelector("#consoleHideAside").classList.add("on") : document.querySelector("#consoleHideAside").classList.remove("on")
    },
    switchCommentBarrage: function() {
        var e = document.querySelector(".comment-barrage");
        e && ("flex" === window.getComputedStyle(e).display ? (e.style.display = "none",
        anzhiyu.snackbarShow("✨ 已关闭评论弹幕"),
        document.querySelector(".menu-commentBarrage-text").textContent = "显示热评",
        document.querySelector("#consoleCommentBarrage").classList.remove("on"),
        localStorage.setItem("commentBarrageSwitch", "false")) : (e.style.display = "flex",
        document.querySelector(".menu-commentBarrage-text").textContent = "关闭热评",
        document.querySelector("#consoleCommentBarrage").classList.add("on"),
        anzhiyu.snackbarShow("✨ 已开启评论弹幕"),
        localStorage.removeItem("commentBarrageSwitch"))),
        rm && rm.hideRightMenu()
    },
    initPaginationObserver: function() {
        var e = document.getElementById("post-comment")
          , n = document.getElementById("pagination");
        e && n && new IntersectionObserver(function(e) {
            var t = document.querySelector(".comment-barrage");
            e.forEach(function(e) {
                e.isIntersecting ? (n.classList.add("show-window"),
                t && (t.style.bottom = "-200px")) : (n.classList.remove("show-window"),
                t && (t.style.bottom = "0px"))
            })
        }
        ).observe(e)
    },
    initIndexEssay: function() {
        document.getElementById("bbTimeList") && setTimeout(function() {
            var e = new Swiper(".essay_bar_swiper_container",{
                passiveListeners: !0,
                direction: "vertical",
                loop: !0,
                autoplay: {
                    disableOnInteraction: !0,
                    delay: 3e3
                },
                mousewheel: !0
            })
              , t = document.getElementById("bbtalk");
            null !== t && (t.onmouseenter = function() {
                e.autoplay.stop()
            }
            ,
            t.onmouseleave = function() {
                e.autoplay.start()
            }
            )
        }, 100)
    },
    scrollByMouseWheel: function(t, e) {
        t.addEventListener("mousewheel", function(e) {
            t.scrollLeft -= e.wheelDelta / 2,
            e.preventDefault()
        }, {
            passive: !1
        }),
        e && (e.classList.add("selected"),
        t.scrollLeft = e.offsetLeft - t.offsetLeft - (t.offsetWidth - e.offsetWidth) / 2)
    },
    catalogActive: function() {
        var t, e, n, o = document.getElementById("catalog-list");
        o && (t = decodeURIComponent(window.location.pathname),
        e = o.querySelectorAll(".catalog-list-item"),
        n = null,
        e.forEach(function(e) {
            t.startsWith(e.id) && (n = e)
        }),
        anzhiyu.scrollByMouseWheel(o, n))
    },
    tagsPageActive: function() {
        var e, t = document.getElementById("tag-page-tags");
        t && (e = document.getElementById(decodeURIComponent(window.location.pathname)),
        anzhiyu.scrollByMouseWheel(t, e))
    },
    diffDate: function(e) {
        var t, n, o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], r = new Date, e = new Date(e), r = r.getTime() - e.getTime(), a = 864e5;
        return o ? (o = r / a,
        t = r / 36e5,
        n = r / 6e4,
        1 <= r / 2592e6 ? e.toLocaleDateString().replace(/\//g, "-") : 1 <= o ? parseInt(o) + " " + GLOBAL_CONFIG.date_suffix.day : 1 <= t ? parseInt(t) + " " + GLOBAL_CONFIG.date_suffix.hour : 1 <= n ? parseInt(n) + " " + GLOBAL_CONFIG.date_suffix.min : GLOBAL_CONFIG.date_suffix.just) : i ? (o = r / a,
        t = r / 36e5,
        n = r / 6e4,
        1 <= r / 2592e6 ? e.toLocaleDateString().replace(/\//g, "-") : 1 <= o && o <= 3 ? parseInt(o) + " " + GLOBAL_CONFIG.date_suffix.day : 3 < o ? e.getMonth() + 1 + "/" + e.getDate() : 1 <= t ? parseInt(t) + " " + GLOBAL_CONFIG.date_suffix.hour : 1 <= n ? parseInt(n) + " " + GLOBAL_CONFIG.date_suffix.min : GLOBAL_CONFIG.date_suffix.just) : parseInt(r / a)
    },
    changeTimeInEssay: function() {
        document.querySelector("#bber") && document.querySelectorAll("#bber time").forEach(function(e) {
            var t = e.getAttribute("datetime");
            e.innerText = anzhiyu.diffDate(t, !0),
            e.style.display = "inline"
        })
    },
    changeTimeInAlbumDetail: function() {
        document.querySelector("#album_detail") && document.querySelectorAll("#album_detail time").forEach(function(e) {
            var t = e.getAttribute("datetime");
            e.innerText = anzhiyu.diffDate(t, !0),
            e.style.display = "inline"
        })
    },
    reflashEssayWaterFall: function() {
        var e = document.getElementById("waterfall");
        e && setTimeout(function() {
            waterfall(e),
            e.classList.add("show")
        }, 800)
    },
    sayhi: function() {
        var e, t = document.getElementById("author-info__sayhi");
        t && (t.innerHTML = (t = (new Date).getHours(),
        e = "",
        0 <= t && t <= 5 ? e = "睡个好觉，保证精力充沛" : 5 < t && t <= 10 ? e = "一日之计在于晨" : 10 < t && t <= 14 ? e = "吃饱了才有力气干活" : 14 < t && t <= 18 ? e = "集中精力，攻克难关" : 18 < t && t <= 24 && (e = "不要太劳累了，早睡更健康"),
        e))
    },
    addFriendLink: function() {
        var e, t = document.getElementsByClassName("el-textarea__inner")[0];
        t && (e = new Event("input",{
            cancelable: !0,
            bubbles: !0
        }),
        t.value = this.getConfigIfPresent(GLOBAL_CONFIG.linkPageTop, "addFriendPlaceholder", "昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n站点截图（可选）：\n"),
        t.dispatchEvent(e),
        t.focus(),
        t.setSelectionRange(-1, -1))
    },
    getConfigIfPresent: function(e, t, n) {
        return e && e.hasOwnProperty(t) && e[t] || n
    },
    musicToggle: function() {
        var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        anzhiyu_musicFirst || (anzhiyu.musicBindEvent(),
        anzhiyu_musicFirst = !0);
        anzhiyu_musicPlaying ? (navMusicEl.classList.remove("playing"),
        document.getElementById("menu-music-toggle").innerHTML = '<i class="anzhiyufont anzhiyu-icon-play"></i><span>播放音乐</span>',
        document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停",
        document.querySelector("#consoleMusic").classList.remove("on"),
        anzhiyu_musicPlaying = !1,
        navMusicEl.classList.remove("stretch")) : (navMusicEl.classList.add("playing"),
        document.getElementById("menu-music-toggle").innerHTML = '<i class="anzhiyufont anzhiyu-icon-pause"></i><span>暂停音乐</span>',
        document.querySelector("#consoleMusic").classList.add("on"),
        anzhiyu_musicPlaying = !0,
        navMusicEl.classList.add("stretch")),
        e && document.querySelector("#nav-music meting-js").aplayer.toggle(),
        rm && rm.hideRightMenu()
    },
    musicTelescopic: function() {
        navMusicEl.classList.contains("stretch") ? navMusicEl.classList.remove("stretch") : navMusicEl.classList.add("stretch")
    },
    musicSkipBack: function() {
        navMusicEl.querySelector("meting-js").aplayer.skipBack(),
        rm && rm.hideRightMenu()
    },
    musicSkipForward: function() {
        navMusicEl.querySelector("meting-js").aplayer.skipForward(),
        rm && rm.hideRightMenu()
    },
    musicGetName: function() {
        for (var e = document.querySelectorAll(".aplayer-title"), t = [], n = e.length - 1; 0 <= n; n--)
            t[n] = e[n].innerText;
        return t[0]
    },
    initConsoleState: function() {
        document.documentElement.classList.contains("hide-aside") ? document.querySelector("#consoleHideAside").classList.add("on") : document.querySelector("#consoleHideAside").classList.remove("on")
    },
    rewardShowConsole: function() {
        consoleEl.classList.add("reward-show"),
        anzhiyu.initConsoleState()
    },
    showConsole: function() {
        consoleEl.classList.add("show"),
        anzhiyu.initConsoleState()
    },
    hideConsole: function() {
        consoleEl.classList.contains("show") ? consoleEl.classList.remove("show") : consoleEl.classList.contains("reward-show") && consoleEl.classList.remove("reward-show");
        var e = document.getElementById("center-console");
        e.checked && (e.checked = !1)
    },
    hideLoading: function() {
        document.getElementById("loading-box").classList.add("loaded")
    },
    cacheAndPlayMusic: function() {
        if (e = localStorage.getItem("musicData")) {
            var e = JSON.parse(e);
            if ((new Date).getTime() - e.timestamp < 864e5)
                return void anzhiyu.playMusic(e.songs)
        }
        fetch("/json/music.json").then(function(e) {
            return e.json()
        }).then(function(e) {
            var t = {
                timestamp: (new Date).getTime(),
                songs: e
            };
            localStorage.setItem("musicData", JSON.stringify(t)),
            anzhiyu.playMusic(e)
        })
    },
    playMusic: function(e) {
        var t = document.getElementById("anMusic-page").querySelector("meting-js").aplayer
          , n = e[Math.floor(Math.random() * e.length)]
          , o = t.list.audios;
        if (selectRandomSong.includes(n.name)) {
            for (var i, r = !1; !r; ) {
                var a = e[Math.floor(Math.random() * e.length)];
                if (selectRandomSong.includes(a.name) || (t.list.add([a]),
                t.list.switch(o.length),
                selectRandomSong.push(a.name),
                r = !0),
                selectRandomSong.length === e.length)
                    break
            }
            r || -1 != (i = o.findIndex(function(e) {
                return e.name === n.name
            })) && t.list.switch(i)
        } else
            t.list.add([n]),
            t.list.switch(o.length),
            selectRandomSong.push(n.name);
        console.info("已随机歌曲：", selectRandomSong, "本次随机歌曲：", n.name)
    },
    changeMusicBg: function() {
        var e, t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0], n = document.getElementById("an_music_bg");
        t ? (t = document.querySelector("#anMusic-page .aplayer-pic"),
        n.style.backgroundImage = t.style.backgroundImage) : e = setInterval(function() {
            document.querySelector("#anMusic-page .aplayer-pic") && (clearInterval(e),
            anzhiyu.addEventListenerMusic(),
            anzhiyu.changeMusicBg(),
            document.querySelector("#nav-music meting-js").aplayer) && !document.querySelector("#nav-music meting-js").aplayer.audio.paused && anzhiyu.musicToggle()
        }, 100)
    },
    getCustomPlayList: function() {
        var e, t, n;
        window.location.pathname.startsWith("/music/") && (n = new URLSearchParams(window.location.search),
        e = document.getElementById("anMusic-page-meting"),
        n.get("id") && n.get("server") ? (t = n.get("id"),
        n = n.get("server"),
        e.innerHTML = '<meting-js id="'.concat(t, '" server=').concat(n, ' type="playlist" type="playlist" mutex="true" preload="auto" theme="var(--anzhiyu-main)" order="list" list-max-height="calc(100vh - 169px)!important"></meting-js>')) : e.innerHTML = '<meting-js id="'.concat("8152976493", '" server="').concat("netease", '" type="playlist" mutex="true" preload="auto" theme="var(--anzhiyu-main)" order="list" list-max-height="calc(100vh - 169px)!important"></meting-js>'),
        anzhiyu.changeMusicBg(!1))
    },
    hideTodayCard: function() {
        document.getElementById("todayCard") && (document.getElementById("todayCard").classList.add("hide"),
        document.querySelector(".topGroup").querySelectorAll(".recent-post-item").forEach(function(e) {
            e.style.display = "flex"
        }))
    },
    addEventListenerMusic: function() {
        var t = document.getElementById("anMusic-page")
          , e = t.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu")
          , n = t.querySelector("#anMusicBtnGetSong")
          , o = t.querySelector("#anMusicRefreshBtn")
          , i = t.querySelector("#anMusicSwitching")
          , r = t.querySelector("meting-js").aplayer;
        r.volume(.8, !0),
        r.on("loadeddata", function() {
            anzhiyu.changeMusicBg()
        }),
        e.addEventListener("click", function() {
            document.getElementById("menu-mask").style.display = "block",
            document.getElementById("menu-mask").style.animation = "0.5s ease 0s 1 normal none running to_show",
            t.querySelector(".aplayer.aplayer-withlist .aplayer-list").style.opacity = "1"
        }),
        document.getElementById("menu-mask").addEventListener("click", function e() {
            "/music/" != window.location.pathname ? document.getElementById("menu-mask").removeEventListener("click", e) : t.querySelector(".aplayer-list").classList.remove("aplayer-list-hide")
        }),
        n.addEventListener("click", function() {
            var e, t;
            changeMusicListFlag ? (t = (e = document.getElementById("anMusic-page").querySelector("meting-js").aplayer).list.audios,
            t = Math.floor(Math.random() * t.length),
            e.list.switch(t)) : anzhiyu.cacheAndPlayMusic()
        }),
        o.addEventListener("click", function() {
            localStorage.removeItem("musicData"),
            anzhiyu.snackbarShow("已移除相关缓存歌曲")
        }),
        i.addEventListener("click", function() {
            anzhiyu.changeMusicList()
        }),
        "custom" === GLOBAL_CONFIG.music_page_default && anzhiyu.changeMusicList(),
        document.addEventListener("keydown", function(e) {
            "Space" === e.code && (e.preventDefault(),
            r.toggle()),
            39 === e.keyCode && (e.preventDefault(),
            r.skipForward()),
            37 === e.keyCode && (e.preventDefault(),
            r.skipBack()),
            38 === e.keyCode && musicVolume <= 1 && (musicVolume += .1,
            r.volume(musicVolume, !0)),
            40 === e.keyCode && 0 <= musicVolume && (musicVolume += -.1,
            r.volume(musicVolume, !0))
        })
    },
    changeMusicList: function() {
        var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t, n, o, i, r;
            return _regeneratorRuntime().wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        t = document.getElementById("anMusic-page"),
                        t = t.querySelector("meting-js").aplayer,
                        n = (new Date).getTime(),
                        o = JSON.parse(localStorage.getItem("musicData")) || {
                            timestamp: 0
                        },
                        i = [],
                        changeMusicListFlag ? (i = defaultPlayMusicList,
                        e.next = 23) : e.next = 9;
                        break;
                    case 9:
                        defaultPlayMusicList = t.list.audios,
                        n - o.timestamp < 864e5 ? (i = o.songs,
                        e.next = 23) : e.next = 14;
                        break;
                    case 14:
                        return e.next = 16,
                        fetch("/json/music.json");
                    case 16:
                        return r = e.sent,
                        e.next = 19,
                        r.json();
                    case 19:
                        i = e.sent,
                        o.timestamp = n,
                        o.songs = i,
                        localStorage.setItem("musicData", JSON.stringify(o));
                    case 23:
                        t.list.clear(),
                        t.list.add(i),
                        changeMusicListFlag = !changeMusicListFlag;
                    case 26:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }(),
    addEventListenerConsoleMusicList: function() {
        var o = document.getElementById("nav-music");
        o && o.addEventListener("click", function(e) {
            var t = o.querySelector(".aplayer-list")
              , n = o.querySelector("div.aplayer-info > div.aplayer-controller > div.aplayer-time.aplayer-time-narrow > button.aplayer-icon.aplayer-icon-menu svg");
            e.target != n && t.classList.contains("aplayer-list-hide") && t.classList.remove("aplayer-list-hide")
        })
    },
    toPage: function() {
        var e = document.getElementById("toPageText")
          , t = document.getElementById("toPageButton")
          , n = document.querySelectorAll(".page-number")
          , n = Number(n[n.length - 1].innerHTML)
          , e = Number(e.value);
        !isNaN(e) && 1 <= e && Number.isInteger(e) ? t.href = 1 === e ? "/" : "/page/" + (n < e ? n : e) + "/" : t.href = "javascript:void(0);"
    },
    removeBodyPaceClass: function() {
        document.body.className = "pace-done"
    },
    setValueToBodyType: function() {
        var e = document.getElementById("page-type").value;
        document.body.dataset.type = e
    },
    addRandomCommentInfo: function() {
        var e = adjectives[Math.floor(Math.random() * adjectives.length)]
          , t = vegetablesAndFruits[Math.floor(Math.random() * vegetablesAndFruits.length)]
          , n = "".concat(e).concat(t);
        for (var o = ["#author", "input[name='comname']", "#inpName", "input[name='author']", "#ds-dialog-name", "#name", "input[name='nick']", "#comment_author"], i = ["#mail", "#email", "input[name='commail']", "#inpEmail", "input[name='email']", "#ds-dialog-email", "input[name='mail']", "#comment_email"], r = 0; r < o.length; r++) {
            var a = document.querySelector(o[r]);
            if (null != a) {
                a.value = n,
                a.dispatchEvent(new Event("input")),
                a.dispatchEvent(new Event("change"));
                break
            }
        }
        for (var c = 0; c < i.length; c++) {
            var s = document.querySelector(i[c]);
            if (null != s) {
                s.value = visitorMail,
                s.dispatchEvent(new Event("input")),
                s.dispatchEvent(new Event("change"));
                break
            }
        }
        e = document.getElementsByClassName("el-textarea__inner")[0];
        e.focus(),
        e.setSelectionRange(-1, -1)
    },
    totraveling: function() {
        anzhiyu.snackbarShow("即将跳转到「开往」项目的成员博客，不保证跳转网站的安全性和可用性", function(e) {
            e.style.opacity = 0,
            travellingsTimer && clearTimeout(travellingsTimer)
        }, 5e3, "取消"),
        travellingsTimer = setTimeout(function() {
            window.open("https://www.travellings.cn/go.html", "_blank")
        }, "5000")
    },
    replaceAll: function(e, t, n) {
        return e.split(t).join(n)
    },
    musicBindEvent: function() {
        document.querySelector("#nav-music .aplayer-music").addEventListener("click", function() {
            anzhiyu.musicTelescopic()
        }),
        document.querySelector("#nav-music .aplayer-button").addEventListener("click", function() {
            anzhiyu.musicToggle(!1)
        })
    },
    hasMobile: function() {
        var e = !1;
        return e = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) || document.body.clientWidth < 800 ? !0 : e
    },
    qrcodeCreate: function() {
        document.getElementById("qrcode") && (document.getElementById("qrcode").innerHTML = "",
        new QRCode(document.getElementById("qrcode"),{
            text: window.location.href,
            width: 250,
            height: 250,
            colorDark: "#000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        }))
    },
    isInViewPortOfOne: function(e) {
        var t;
        if (e)
            return t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            e.offsetTop - document.documentElement.scrollTop <= t
    },
    addRewardMask: function() {
        document.querySelector(".reward-main") && (document.querySelector(".reward-main").style.display = "flex",
        document.querySelector(".reward-main").style.zIndex = "102",
        document.getElementById("quit-box").style.display = "flex")
    },
    removeRewardMask: function() {
        document.querySelector(".reward-main") && (document.querySelector(".reward-main").style.display = "none",
        document.getElementById("quit-box").style.display = "none")
    },
    keyboardToggle: function() {
        var e = anzhiyu_keyboard;
        anzhiyu_keyboard = e ? (document.querySelector("#consoleKeyboard").classList.remove("on"),
        !1) : (document.querySelector("#consoleKeyboard").classList.add("on"),
        !0),
        localStorage.setItem("keyboardToggle", e ? "false" : "true")
    },
    rightMenuToggle: function() {
        window.oncontextmenu ? window.oncontextmenu = null : !window.oncontextmenu && oncontextmenuFunction && (window.oncontextmenu = oncontextmenuFunction)
    },
    switchConsole: function() {
        var e = document.getElementById("console")
          , e = (document.documentElement.classList.contains("hide-aside") ? document.querySelector("#consoleHideAside").classList.add("on") : document.querySelector("#consoleHideAside").classList.remove("on"),
        e.classList.contains("show") ? e.classList.remove("show") : e.classList.add("show"),
        document.querySelector("#consoleKeyboard"));
        e && (anzhiyu_keyboard = "true" === localStorage.getItem("keyboardToggle") ? (e.classList.add("on"),
        !0) : (e.classList.remove("on"),
        !1))
    },
    intersectionObserver: function(t, n) {
        var e;
        return function() {
            return e ? e.disconnect() : e = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    0 < e.intersectionRatio ? null != t && t() : null != n && n()
                })
            }
            ),
            e
        }
    },
    scrollCategoryBarToRight: function() {
        var e, t = document.getElementById("catalog-list"), n = document.getElementById("category-bar-next");
        t && n ? (e = t.clientWidth,
        t.scrollLeft + t.clientWidth + 1 >= t.scrollWidth ? (t.scroll({
            left: 0,
            behavior: "smooth"
        }),
        n.innerHTML = '<i class="anzhiyufont anzhiyu-icon-angle-double-right"></i>') : t.scrollBy({
            left: e,
            behavior: "smooth"
        })) : console.error("Element(s) not found: 'catalog-list' and/or 'category-bar-next'.")
    },
    categoriesBarActive: function() {
        var e = decodeURIComponent(window.location.pathname)
          , t = document.getElementById("category-bar");
        t && ("/" === e ? t.querySelector("#首页").classList.add("select") : /\/categories\/.*?\//.test(e) && (e = e.split("/")[2],
        t.querySelector("#".concat(e)).classList.add("select")))
    },
    topCategoriesBarScroll: function() {
        var e = document.getElementById("category-bar-items");
        e && e.addEventListener("mousewheel", function(e) {
            var t = -e.wheelDelta / 2;
            this.scrollLeft += t,
            e.preventDefault()
        })
    },
    switchRightClickMenuHotReview: function() {
        var e = document.getElementById("post-comment")
          , t = document.getElementById("menu-commentBarrage");
        t.style.display = e ? "flex" : "none"
    },
    changeSayHelloText: function() {
        var e = GLOBAL_CONFIG.authorStatus.skills
          , t = document.getElementById("author-info__sayhi");
        if (1 === e.length)
            t.textContent = e[0];
        else {
            for (var n = t.textContent, o = n; o === n; )
                o = e[Math.floor(Math.random() * e.length)];
            t.textContent = o
        }
    }
}
  , anzhiyuPopupManager = {
    queue: [],
    processing: !1,
    Jump: !1,
    enqueuePopup: function(e, t, n) {
        this.queue.push({
            title: e,
            tip: t,
            url: n,
            duration: 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 3e3
        }),
        this.processing || this.processQueue()
    },
    processQueue: function() {
        var e, t, n, o;
        0 < this.queue.length && !this.processing && (this.processing = !0,
        e = (o = this.queue.shift()).title,
        t = o.tip,
        n = o.url,
        o = o.duration,
        this.popupShow(e, t, n, o))
    },
    popupShow: function(e, t, n, o) {
        var i, r, a = this, c = document.getElementById("popup-window");
        c && (i = c.querySelector(".popup-window-title"),
        r = c.querySelector(".popup-window-content").querySelector(".popup-tip"),
        c.classList.contains("show-popup-window") && c.classList.add("popup-hide"),
        setTimeout(function() {
            c.removeEventListener("click", a.clickEventHandler),
            n ? (window.pjax ? a.clickEventHandler = function(e) {
                e.preventDefault(),
                pjax.loadUrl(n),
                c.classList.remove("show-popup-window"),
                c.classList.remove("popup-hide"),
                a.Jump = !0,
                a.processing = !1,
                a.processQueue()
            }
            : a.clickEventHandler = function() {
                window.location.href = n
            }
            ,
            c.addEventListener("click", a.clickEventHandler),
            c.classList.contains("no-url") && c.classList.remove("no-url")) : (c.classList.contains("no-url") || c.classList.add("no-url"),
            a.clickEventHandler = function() {
                c.classList.add("popup-hide"),
                setTimeout(function() {
                    c.classList.remove("popup-hide"),
                    c.classList.remove("show-popup-window")
                }, 1e3)
            }
            ,
            c.addEventListener("click", a.clickEventHandler)),
            c.classList.contains("popup-hide") && c.classList.remove("popup-hide"),
            c.classList.add("show-popup-window"),
            i.textContent = e,
            r.textContent = t
        }, 800),
        setTimeout(function() {
            n && !a.Jump && (a.Jump = !1),
            c.classList.contains("popup-hide") || "" == c.className || c.classList.add("popup-hide"),
            a.processing = !1,
            a.processQueue()
        }, o))
    }
};
