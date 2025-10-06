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
        var o, i, r, a, c = [], u = !0, l = !1;
        try {
            if (r = (n = n.call(e)).next,
            0 === t) {
                if (Object(n) !== n)
                    return;
                u = !1
            } else
                for (; !(u = (o = r.call(n)).done) && (c.push(o.value),
                c.length !== t); u = !0)
                    ;
        } catch (e) {
            l = !0,
            i = e
        } finally {
            try {
                if (!u && null != n.return && (a = n.return(),
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
function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return a
    }
    ;
    var u, a = {}, e = Object.prototype, l = e.hasOwnProperty, s = Object.defineProperty || function(e, t, n) {
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
    } catch (u) {
        r = function(e, t, n) {
            return e[t] = n
        }
    }
    function c(e, t, n, o) {
        var i, r, a, c, t = t && t.prototype instanceof p ? t : p, t = Object.create(t.prototype), o = new C(o || []);
        return s(t, "_invoke", {
            value: (i = e,
            r = n,
            a = o,
            c = m,
            function(e, t) {
                if (c === h)
                    throw new Error("Generator is already running");
                if (c === g) {
                    if ("throw" === e)
                        throw t;
                    return {
                        value: u,
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
                            if (i === u)
                                return n.delegate = null,
                                "throw" === o && t.iterator.return && (n.method = "return",
                                n.arg = u,
                                e(t, n),
                                "throw" === n.method) || "return" !== o && (n.method = "throw",
                                n.arg = new TypeError("The iterator does not provide a '" + o + "' method")),
                                f;
                            o = d(i, t.iterator, n.arg);
                            if ("throw" === o.type)
                                return n.method = "throw",
                                n.arg = o.arg,
                                n.delegate = null,
                                f;
                            i = o.arg;
                            return i ? i.done ? (n[t.resultName] = i.value,
                            n.next = t.nextLoc,
                            "return" !== n.method && (n.method = "next",
                            n.arg = u),
                            n.delegate = null,
                            f) : i : (n.method = "throw",
                            n.arg = new TypeError("iterator result is not an object"),
                            n.delegate = null,
                            f)
                        }(n, a);
                        if (n) {
                            if (n === f)
                                continue;
                            return n
                        }
                    }
                    if ("next" === a.method)
                        a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if (c === m)
                            throw c = g,
                            a.arg;
                        a.dispatchException(a.arg)
                    } else
                        "return" === a.method && a.abrupt("return", a.arg);
                    c = h;
                    n = d(i, r, a);
                    if ("normal" === n.type) {
                        if (c = a.done ? g : y,
                        n.arg === f)
                            continue;
                        return {
                            value: n.arg,
                            done: a.done
                        }
                    }
                    "throw" === n.type && (c = g,
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
      , y = "suspendedYield"
      , h = "executing"
      , g = "completed"
      , f = {};
    function p() {}
    function v() {}
    function L() {}
    var t = {}
      , E = (r(t, o, function() {
        return this
    }),
    Object.getPrototypeOf)
      , E = E && E(E(O([])))
      , b = (E && E !== e && l.call(E, o) && (t = E),
    L.prototype = p.prototype = Object.create(t));
    function w(e) {
        ["next", "throw", "return"].forEach(function(t) {
            r(e, t, function(e) {
                return this._invoke(t, e)
            })
        })
    }
    function z(a, c) {
        var t;
        s(this, "_invoke", {
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
    function _(e) {
        var t = e.completion || {};
        t.type = "normal",
        delete t.arg,
        e.completion = t
    }
    function C(e) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        e.forEach(I, this),
        this.reset(!0)
    }
    function O(t) {
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
                    return e.value = u,
                    e.done = !0,
                    e
                }
                ).next = e
        }
        throw new TypeError(_typeof(t) + " is not iterable")
    }
    return s(b, "constructor", {
        value: v.prototype = L,
        configurable: !0
    }),
    s(L, "constructor", {
        value: v,
        configurable: !0
    }),
    v.displayName = r(L, i, "GeneratorFunction"),
    a.isGeneratorFunction = function(e) {
        e = "function" == typeof e && e.constructor;
        return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
    }
    ,
    a.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, L) : (e.__proto__ = L,
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
    w(z.prototype),
    r(z.prototype, n, function() {
        return this
    }),
    a.AsyncIterator = z,
    a.async = function(e, t, n, o, i) {
        void 0 === i && (i = Promise);
        var r = new z(c(e, t, n, o),i);
        return a.isGeneratorFunction(t) ? r : r.next().then(function(e) {
            return e.done ? e.value : r.next()
        })
    }
    ,
    w(b),
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
    a.values = O,
    C.prototype = {
        constructor: C,
        reset: function(e) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = u,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = u,
            this.tryEntries.forEach(_),
            !e)
                for (var t in this)
                    "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = u)
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
                o.arg = u),
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
            f) : this.complete(r)
        },
        complete: function(e, t) {
            if ("throw" === e.type)
                throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
            this.method = "return",
            this.next = "end") : "normal" === e.type && t && (this.next = t),
            f
        },
        finish: function(e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc),
                    _(n),
                    f
            }
        },
        catch: function(e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n, o, i = this.tryEntries[t];
                if (i.tryLoc === e)
                    return "throw" === (n = i.completion).type && (o = n.arg,
                    _(i)),
                    o
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(e, t, n) {
            return this.delegate = {
                iterator: O(e),
                resultName: t,
                nextLoc: n
            },
            "next" === this.method && (this.arg = u),
            f
        }
    },
    a
}
function asyncGeneratorStep(e, t, n, o, i, r, a) {
    try {
        var c = e[r](a)
          , u = c.value
    } catch (e) {
        return void n(e)
    }
    c.done ? t(u) : Promise.resolve(u).then(o, i)
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
var themeColorMeta, pageHeaderEl, navMusicEl, consoleEl, anzhiyu_musicFirst = !1, anzhiyu_keyboard = null, anzhiyu_musicPlaying = !1, $bodyWrap = document.getElementById("body-wrap"), anzhiyu_intype = !1, anzhiyu_keyUpEvent_timeoutId = null, anzhiyu_keyUpShiftDelayEvent_timeoutId = null, rm = null, popupWindowTimer = null, adjectives = ["美丽的", "英俊的", "聪明的", "勇敢的", "可爱的", "慷慨的", "善良的", "可靠的", "开朗的", "成熟的", "稳重的", "真诚的", "幽默的", "豁达的", "有趣的", "活泼的", "优雅的", "敏捷的", "温柔的", "温暖的", "敬业的", "细心的", "耐心的", "深沉的", "朴素的", "含蓄的", "率直的", "开放的", "务实的", "坚强的", "自信的", "谦虚的", "文静的", "深刻的", "纯真的", "朝气蓬勃的", "慎重的", "大方的", "顽强的", "迷人的", "机智的", "善解人意的", "富有想象力的", "有魅力的", "独立的", "好奇的", "干净的", "宽容的", "尊重他人的", "体贴的", "守信的", "有耐性的", "有责任心的", "有担当的", "有远见的", "有智慧的", "有眼光的", "有冒险精神的", "有爱心的", "有同情心的", "喜欢思考的", "喜欢学习的", "具有批判性思维的", "善于表达的", "善于沟通的", "善于合作的", "善于领导的", "有激情的", "有幽默感的", "有思想的", "有个性的", "有正义感的", "有责任感的", "有创造力的", "有想象力的", "有艺术细胞的", "有团队精神的", "有协调能力的", "有决策能力的", "有组织能力的", "有学习能力的", "有执行能力的", "有分析能力的", "有逻辑思维的", "有创新能力的", "有专业素养的", "有商业头脑的"], vegetablesAndFruits = ["萝卜", "白菜", "芹菜", "生菜", "青椒", "辣椒", "茄子", "豆角", "黄瓜", "西红柿", "洋葱", "大蒜", "土豆", "南瓜", "豆腐", "韭菜", "花菜", "西兰花", "蘑菇", "金针菇", "苹果", "香蕉", "橙子", "柠檬", "猕猴桃", "草莓", "葡萄", "桃子", "杏子", "李子", "石榴", "西瓜", "哈密瓜", "蜜瓜", "樱桃", "蓝莓", "柿子", "橄榄", "柚子", "火龙果"], selectRandomSong = [], musicVolume = .8, changeMusicListFlag = !1, defaultPlayMusicList = [];
document.addEventListener("DOMContentLoaded", function() {
    function L(e) {
        function t(e) {
            return Array.from(e).reduce(function(e, t) {
                return e + t.offsetWidth
            }, 0)
        }
        e && (e = t(document.querySelector("#blog_name > a").children),
        n = t(document.getElementById("menus").children),
        o = e + n,
        b = document.getElementById("nav"));
        var n, e = window.innerWidth <= 768 || o > b.offsetWidth - 120;
        b.classList.toggle("hide-menu", e)
    }
    function E() {
        var e, n, r, t, a, o, i, c, u, l, s, d, m, y, h, g, f = GLOBAL_CONFIG.highlight;
        f && (e = f.highlightCopy,
        n = f.highlightLang,
        r = f.highlightHeightLimit,
        f = f.plugin,
        t = GLOBAL_CONFIG_SITE.isHighlightShrink,
        a = e || n || void 0 !== t,
        o = "highlight.js" === f ? document.querySelectorAll("figure.highlight") : document.querySelectorAll('pre[class*="language-"]'),
        a || r) && o.length && (c = !0 === t ? "closed" : "",
        u = void 0 !== t ? '<i class="anzhiyufont anzhiyu-icon-angle-down expand ${highlightShrinkClass}"></i>' : "",
        l = e ? '<div class="copy-notice"></div><i class="anzhiyufont anzhiyu-icon-paste copy-button"></i>' : "",
        s = function(e, t) {
            var n;
            void 0 !== GLOBAL_CONFIG.Snackbar ? anzhiyu.snackbarShow(t) : ((n = e.previousElementSibling).textContent = t,
            n.style.opacity = 1,
            setTimeout(function() {
                n.style.opacity = 0
            }, 800))
        }
        ,
        d = function(e) {
            var t = e.parentNode
              , n = (t.classList.add("copy-true"),
            window.getSelection())
              , o = document.createRange();
            o.selectNodeContents(t.querySelectorAll("".concat(i ? "pre code" : "table .code pre"))[0]),
            n.removeAllRanges(),
            n.addRange(o),
            o = e.lastChild,
            document.queryCommandSupported && document.queryCommandSupported("copy") ? (document.execCommand("copy"),
            s(o, GLOBAL_CONFIG.copy.success)) : s(o, GLOBAL_CONFIG.copy.noSupport),
            n.removeAllRanges(),
            t.classList.remove("copy-true")
        }
        ,
        m = function(e) {
            e.classList.toggle("closed")
        }
        ,
        y = function(e) {
            e = e.target.classList;
            e.contains("expand") ? m(this) : e.contains("copy-button") && d(this)
        }
        ,
        h = function() {
            this.classList.toggle("expand-done")
        }
        ,
        g = function(e, t, n) {
            var o, i = document.createDocumentFragment();
            a && ((o = document.createElement("div")).className = "highlight-tools ".concat(c),
            o.innerHTML = u + e + l,
            anzhiyu.addEventListenerPjax(o, "click", y),
            i.appendChild(o)),
            r && t.offsetHeight > r + 30 && ((e = document.createElement("div")).className = "code-expand-btn",
            e.innerHTML = '<i class="anzhiyufont anzhiyu-icon-angle-double-down"></i>',
            anzhiyu.addEventListenerPjax(e, "click", h),
            i.appendChild(e)),
            "hl" === n ? t.insertBefore(i, t.firstChild) : t.parentNode.insertBefore(i, t)
        }
        ,
        (i = "prismjs" === f) ? o.forEach(function(e) {
            var t;
            n ? (t = e.getAttribute("data-language") || "Code",
            t = '<div class="code-lang">'.concat(t, "</div>"),
            anzhiyu.wrap(e, "figure", {
                class: "highlight"
            }),
            g(t, e)) : (anzhiyu.wrap(e, "figure", {
                class: "highlight"
            }),
            g("", e))
        }) : o.forEach(function(e) {
            var t;
            n ? (t = e.getAttribute("class").split(" ")[1],
            t = '<div class="code-lang">'.concat(t = "plain" !== t && void 0 !== t ? t : "Code", "</div>"),
            g(t, e, "hl")) : g("", e, "hl")
        }))
    }
    var o, b, e, t = !1, w = function() {
        anzhiyu.sidebarPaddingR(),
        anzhiyu.animateIn(document.getElementById("menu-mask"), "to_show 0.5s"),
        document.getElementById("sidebar-menus").classList.add("open"),
        t = !0
    }, n = function() {
        document.body.style.paddingRight = "",
        anzhiyu.animateOut(document.getElementById("menu-mask"), "to_hide 0.5s"),
        document.getElementById("sidebar-menus").classList.remove("open"),
        t = !1
    };
    function z(e) {
        function n(n, o) {
            var e, i, r = null != (e = n.getAttribute("data-limit")) ? e : o.length;
            !n.classList.contains("lazyload") || o.length < r ? (n.innerHTML = a(o),
            n.nextElementSibling.style.display = "none") : !n.classList.contains("btn_album_detail_lazyload") || n.classList.contains("page_img_lazyload") ? (c(n, o, r),
            (i = new IntersectionObserver(function(e, t) {
                e.forEach(function(e) {
                    e.isIntersecting && setTimeout((e = c(n, o, r),
                    fjGallery(n, "appendImages", n.querySelectorAll(".fj-gallery-item:nth-last-child(-n+".concat(e, ")"))),
                    anzhiyu.loadLightbox(n.querySelectorAll("img")),
                    void (e < Number(r) && i.unobserve(n.nextElementSibling))), 100)
                })
            }
            )).observe(n.nextElementSibling)) : (c(n, o, r),
            n.nextElementSibling.addEventListener("click", function e() {
                var t = c(n, o, r);
                fjGallery(n, "appendImages", n.querySelectorAll(".fj-gallery-item:nth-last-child(-n+".concat(t, ")"))),
                anzhiyu.loadLightbox(n.querySelectorAll("img")),
                t < r && n.nextElementSibling.removeEventListener("click", e)
            })),
            anzhiyu.initJustifiedGallery(n),
            anzhiyu.loadLightbox(n.querySelectorAll("img")),
            window.lazyLoadInstance && window.lazyLoadInstance.update()
        }
        function t() {
            e.forEach(function(t) {
                t.classList.contains("url") ? o(t.textContent).then(function(e) {
                    n(t, e)
                }) : n(t, JSON.parse(t.textContent))
            })
        }
        var a = function(e) {
            function i(e) {
                return e.replace(/"/g, "&quot;")
            }
            var r = "";
            return e.forEach(function(e) {
                var t = e.alt ? 'alt="'.concat(i(e.alt), '"') : ""
                  , n = e.title ? 'title="'.concat(i(e.title), '"') : ""
                  , o = e.address || ""
                  , o = '\n        <div class="fj-gallery-item">\n          '.concat(o ? '<div class="tag-address">'.concat(o, "</div>") : "", '\n          <img src="').concat(e.url, '" ').concat(t + n, ">\n        </div>\n      ");
                r += o
            }),
            r
        }
          , c = function(e, t, n) {
            var n = Number(n)
              , o = t.length;
            return n < o ? e.insertAdjacentHTML("beforeend", a(t.splice(0, n))) : (e.insertAdjacentHTML("beforeend", a(t)),
            e.classList.remove("lazyload")),
            window.lazyLoadInstance && window.lazyLoadInstance.update(),
            n < o ? n : o
        }
          , o = function() {
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
                var n;
                return _regeneratorRuntime().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            fetch(t);
                        case 2:
                            return n = e.sent,
                            e.next = 5,
                            n.json();
                        case 5:
                            return e.abrupt("return", e.sent);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }();
        window.fjGallery ? t() : (getCSS("".concat(GLOBAL_CONFIG.source.justifiedGallery.css)),
        getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js)).then(t))
    }
    function I() {
        var o = document.getElementById("rightside")
          , i = window.innerHeight + 56
          , r = 0
          , a = (document.body.scrollHeight <= i && (o.style.cssText = "opacity: 1; transform: translateX(-58px)"),
        0)
          , c = !0
          , u = document.getElementById("page-header")
          , l = document.getElementById("popup-window")
          , s = "function" == typeof chatBtnHide
          , d = "function" == typeof chatBtnShow
          , m = !1
          , e = document.getElementById("nav-music")
          , t = document.getElementById("footer")
          , y = document.getElementById("waterfall")
          , h = document.getElementById("percent")
          , g = document.getElementById("nav-totop")
          , f = document.getElementById("body-wrap")
          , p = document.getElementById("post-comment") || document.getElementById("footer");
        function v(e) {
            var t = f.clientHeight
              , n = document.documentElement.clientHeight
              , t = n < t ? t - n : document.documentElement.scrollHeight - n
              , n = Math.round(100 * (e / t))
              , t = 100 < n ? 100 : n <= 0 ? 1 : n;
            h.textContent = t,
            function(e) {
                if (e) {
                    var t = window.getComputedStyle(e).getPropertyValue("display");
                    if ("none" != t)
                        return t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        e.offsetTop - document.documentElement.scrollTop <= t
                }
            }(p || 90 < t) && 20 < e ? (g.classList.add("long"),
            h.textContent = "返回顶部") : (g.classList.remove("long"),
            h.textContent = t),
            y && (n = e % document.documentElement.clientHeight,
            !m && 100 + n >= document.documentElement.clientHeight ? (console.info(n, document.documentElement.clientHeight),
            setTimeout(function() {
                waterfall("#waterfall")
            }, 500)) : setTimeout(function() {
                y && waterfall("#waterfall")
            }, 500))
        }
        var n = anzhiyu.throttle(function() {
            var e, t = window.scrollY || document.documentElement.scrollTop, n = (e = a < t,
            a = t,
            Math.abs(r - t));
            60 < t && n < 20 && 0 != n || (l && l.classList.contains("show-popup-window") && 60 < t && 20 < n && 0 != r && anzhiyu.throttle(function() {
                popupWindowTimer && clearTimeout(popupWindowTimer),
                popupWindowTimer = setTimeout(function() {
                    l.classList.contains("popup-hide") || l.classList.add("popup-hide"),
                    setTimeout(function() {
                        l.classList.remove("popup-hide"),
                        l.classList.remove("show-popup-window")
                    }, 1e3)
                }, 1e3)
            }, 1e3)(),
            26 < (r = t) ? (e ? (u.classList.contains("nav-visible") && u.classList.remove("nav-visible"),
            d && !0 === c && (chatBtnHide(),
            c = !1)) : (u.classList.contains("nav-visible") || u.classList.add("nav-visible"),
            s && !1 === c && (chatBtnShow(),
            c = !0)),
            requestAnimationFrame(function() {
                anzhiyu.initThemeColor(),
                u.classList.add("nav-fixed")
            }),
            "0" === window.getComputedStyle(o).getPropertyValue("opacity") && (o.style.cssText = "opacity: 0.8; transform: translateX(-58px)")) : (t <= 5 && requestAnimationFrame(function() {
                u.classList.remove("nav-fixed"),
                u.classList.remove("nav-visible"),
                anzhiyu.initThemeColor()
            }),
            o.style.cssText = "opacity: ''; transform: ''"),
            document.body.scrollHeight <= i && (o.style.cssText = "opacity: 0.8; transform: translateX(-58px)"),
            v(t))
        }, 96);
        t && anzhiyu.intersectionObserver(function() {
            t && e && 768 < document.body.clientWidth && (e.style.bottom = "-10px",
            e.style.opacity = "0"),
            m = !0
        }, function() {
            t && e && 768 < document.body.clientWidth && (e.style.bottom = "20px",
            e.style.opacity = "1")
        })().observe(t),
        n(),
        anzhiyu.addEventListenerPjax(window, "scroll", n, {
            passive: !0
        })
    }
    function _() {
        var r, n, a, c, u, l, s, d = GLOBAL_CONFIG_SITE.isToc, m = GLOBAL_CONFIG.isAnchor, e = document.getElementById("article-container");
        e && (d || m) && (d && (n = document.getElementById("card-toc"),
        c = (a = n.querySelector(".toc-content")).querySelectorAll(".toc-link"),
        u = a.classList.contains("is-expand"),
        anzhiyu.addEventListenerPjax(a, "click", function(e) {
            var t = e.target.closest(".toc-link");
            t && (e.preventDefault(),
            anzhiyu.scrollToDest(anzhiyu.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#", ""))) - 60, 300),
            window.innerWidth < 900) && n.classList.remove("open")
        }),
        r = function(e) {
            var e = e.getBoundingClientRect().top
              , t = a.scrollTop;
            e > document.documentElement.clientHeight - 100 && (a.scrollTop = t + 150),
            e < 100 && (a.scrollTop = t - 150)
        }
        ),
        e = e.querySelectorAll("h1,h2,h3,h4,h5,h6"),
        l = Array.from(e).filter(function(e) {
            return "CrawlerTitle" !== e.id
        }),
        s = "",
        e = anzhiyu.throttle(function() {
            var n = window.scrollY || document.documentElement.scrollTop;
            if (0 !== n) {
                var o = ""
                  , i = "";
                if (l.forEach(function(e, t) {
                    n > anzhiyu.getEleTop(e) - 80 && (e = e.id,
                    o = e ? "#" + encodeURI(e) : "",
                    i = t)
                }),
                s !== i && (m && anzhiyu.updateAnchor(o),
                s = i,
                d) && (a.querySelectorAll(".active").forEach(function(e) {
                    e.classList.remove("active")
                }),
                "" !== o)) {
                    var e = c[i];
                    if (e.classList.add("active"),
                    setTimeout(function() {
                        r(e)
                    }, 0),
                    !u)
                        for (var t = e.parentNode; !t.matches(".toc"); t = t.parentNode)
                            t.matches("li") && t.classList.add("active")
                }
            }
        }, 100),
        anzhiyu.addEventListenerPjax(window, "scroll", e, {
            passive: !0
        }))
    }
    function i(t) {
        var n = (window.globalFn || {}).themeChange || {};
        n && (Object.keys(n).forEach(function(e) {
            (0,
            n[e])(t)
        }),
        rm && rm.hideRightMenu(),
        e.querySelector(".menu-darkmode-text").textContent = "light" === t ? "深色模式" : "浅色模式",
        GLOBAL_CONFIG_SITE.isPost || (document.querySelector(":root").style.setProperty("--anzhiyu-bar-background", "var(--anzhiyu-meta-theme-color)"),
        requestAnimationFrame(function() {
            anzhiyu.initThemeColor()
        }),
        document.documentElement.style.setProperty("--anzhiyu-main", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-theme")),
        document.documentElement.style.setProperty("--anzhiyu-theme-op", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "23"),
        document.documentElement.style.setProperty("--anzhiyu-theme-op-deep", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "dd")))
    }
    function C() {
        var i, e = document.querySelectorAll("#article-container .tabs");
        e.length && (i = function(e, t) {
            Array.from(e).forEach(function(e) {
                e.classList.remove("active"),
                e !== t && e.id !== t || e.classList.add("active")
            })
        }
        ,
        e.forEach(function(e) {
            var n, t, o = !!e.querySelectorAll(".gallery-container");
            n = o,
            anzhiyu.addEventListenerPjax(e.firstElementChild, "click", function(e) {
                var t, e = e.target.closest("button");
                e.classList.contains("active") || (i(this.children, e),
                this.classList.remove("no-default"),
                e = e.getAttribute("data-href"),
                t = this.nextElementSibling,
                i(t.children, e),
                n && 0 < (t = t.querySelectorAll("#".concat(e, " .fj-gallery"))).length && anzhiyu.initJustifiedGallery(t))
            }),
            t = e,
            anzhiyu.addEventListenerPjax(t.lastElementChild, "click", function(e) {
                e.target.closest("button") && anzhiyu.scrollToDest(anzhiyu.getEleTop(t), 300)
            })
        }))
    }
    function O(e) {
        e.forEach(function(e) {
            var t = e.getAttribute("datetime");
            e.textContent = anzhiyu.diffDate(t, !0),
            e.style.display = "inline"
        })
    }
    var a = {
        readmode: function() {
            function e() {
                t.classList.remove("read-mode"),
                n.remove(),
                n.removeEventListener("click", e)
            }
            var t = document.body
              , n = (t.classList.add("read-mode"),
            document.createElement("button"));
            n.type = "button",
            n.className = "anzhiyufont anzhiyu-icon-xmark exit-readmode",
            t.appendChild(n);
            n.addEventListener("click", e)
        },
        darkmode: function() {
            var e = "dark" === document.documentElement.getAttribute("data-theme") ? "light" : "dark";
            "dark" == e ? (activateDarkMode(),
            void 0 !== GLOBAL_CONFIG.Snackbar && anzhiyu.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(),
            void 0 !== GLOBAL_CONFIG.Snackbar && anzhiyu.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),
            saveToLocal.set("theme", e, 2),
            i(e)
        },
        "rightside-config": function(e) {
            var t = e.firstElementChild;
            t.classList.contains("show") && (t.classList.add("status"),
            setTimeout(function() {
                t.classList.remove("status")
            }, 300)),
            t.classList.toggle("show")
        },
        "go-up": function() {
            anzhiyu.scrollToDest(0, 500)
        },
        "hide-aside-btn": function() {
            var e = document.documentElement.classList
              , t = e.contains("hide-aside") ? "show" : "hide";
            saveToLocal.set("aside-status", t, 2),
            e.toggle("hide-aside")
        },
        "mobile-toc-button": function(e) {
            var t = document.getElementById("card-toc");
            t.style.transformOrigin = "right ".concat(e.getBoundingClientRect().top + 17, "px"),
            t.style.transition = "transform 0.3s ease-in-out",
            t.classList.toggle("open"),
            t.addEventListener("transitionend", function() {
                t.style.transition = "",
                t.style.transformOrigin = ""
            }, {
                once: !0
            })
        },
        "chat-btn": function() {
            window.chatBtnFn()
        },
        translateLink: function() {
            window.translateFn.translatePage()
        }
    }
      , A = (document.getElementById("rightside").addEventListener("click", function(e) {
        e = e.target.closest("[id]");
        e && a[e.id] && a[e.id](this)
    }),
    document.addEventListener("touchstart", function(e) {
        anzhiyu.removeRewardMask()
    }, {
        passive: !0
    }),
    function() {
        var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var n, o, t, i, r, a, c, u, l, s, d;
            return _regeneratorRuntime().wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (n = document.querySelector(":root"),
                        o = document.getElementById("post-top-bg"),
                        t = null == o ? void 0 : o.src) {
                            e.next = 10;
                            break
                        }
                        return n.style.setProperty("--anzhiyu-bar-background", "var(--anzhiyu-meta-theme-color)"),
                        requestAnimationFrame(function() {
                            anzhiyu.initThemeColor()
                        }),
                        document.documentElement.style.setProperty("--anzhiyu-main", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-theme")),
                        document.documentElement.style.setProperty("--anzhiyu-theme-op", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "23"),
                        document.documentElement.style.setProperty("--anzhiyu-theme-op-deep", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "dd"),
                        e.abrupt("return");
                    case 10:
                        GLOBAL_CONFIG.mainTone ? GLOBAL_CONFIG_SITE.postMainColor ? (r = GLOBAL_CONFIG_SITE.postMainColor,
                        "light" === h(r) && (r = y(m(r), -40)),
                        n.style.setProperty("--anzhiyu-bar-background", r),
                        requestAnimationFrame(function() {
                            anzhiyu.initThemeColor()
                        }),
                        GLOBAL_CONFIG.mainTone.cover_change && (document.documentElement.style.setProperty("--anzhiyu-main", r),
                        document.documentElement.style.setProperty("--anzhiyu-theme-op", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "23"),
                        document.documentElement.style.setProperty("--anzhiyu-theme-op-deep", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "dd")),
                        e.next = 83) : e.next = 19 : e.next = 83;
                        break;
                    case 19:
                        "colorthief" != GLOBAL_CONFIG.mainTone.mode ? e.next = 26 : (i = new ColorThief,
                        o.crossOrigin = "Anonymous",
                        r = function e() {
                            var t = i.getColor(o)
                              , t = m("rgb(".concat(t[0], ", ").concat(t[1], ", ").concat(t[2], ")"))
                              , t = "light" === h(t) ? y(t, -40) : y(t, 40);
                            n.style.setProperty("--anzhiyu-bar-background", t),
                            requestAnimationFrame(function() {
                                anzhiyu.initThemeColor()
                            }),
                            GLOBAL_CONFIG.mainTone.cover_change && (document.documentElement.style.setProperty("--anzhiyu-main", t),
                            document.documentElement.style.setProperty("--anzhiyu-theme-op", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "23"),
                            document.documentElement.style.setProperty("--anzhiyu-theme-op-deep", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "dd")),
                            o.removeEventListener("load", e)
                        }
                        ,
                        o.addEventListener("load", r),
                        e.next = 83);
                        break;
                    case 26:
                        return a = "var(--anzhiyu-theme)",
                        c = "",
                        "cdn" == GLOBAL_CONFIG.mainTone.mode || "both" == GLOBAL_CONFIG.mainTone.mode ? c = t + "?imageAve" : "api" == GLOBAL_CONFIG.mainTone.mode && (c = GLOBAL_CONFIG.mainTone.api + t),
                        e.prev = 29,
                        e.next = 32,
                        fetch(c);
                    case 32:
                        if ((c = e.sent).ok && null != (u = c.headers.get("content-type")) && u.includes("application/json"))
                            return e.next = 36,
                            c.json();
                        e.next = 44;
                        break;
                    case 36:
                        u = e.sent,
                        l = "cdn" == GLOBAL_CONFIG.mainTone.mode || "both" == GLOBAL_CONFIG.mainTone.mode ? "#" + u.RGB.slice(2) : u.RGB,
                        "light" === h(l) && (l = y(m(l), -40)),
                        n.style.setProperty("--anzhiyu-bar-background", l),
                        requestAnimationFrame(function() {
                            anzhiyu.initThemeColor()
                        }),
                        GLOBAL_CONFIG.mainTone.cover_change && (document.documentElement.style.setProperty("--anzhiyu-main", l),
                        document.documentElement.style.setProperty("--anzhiyu-theme-op", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "23"),
                        document.documentElement.style.setProperty("--anzhiyu-theme-op-deep", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "dd")),
                        e.next = 75;
                        break;
                    case 44:
                        if ("both" == GLOBAL_CONFIG.mainTone.mode)
                            return e.prev = 45,
                            e.next = 48,
                            fetch(GLOBAL_CONFIG.mainTone.api + t);
                        e.next = 72;
                        break;
                    case 48:
                        if ((l = e.sent).ok && null != (s = l.headers.get("content-type")) && s.includes("application/json"))
                            return e.next = 52,
                            l.json();
                        e.next = 60;
                        break;
                    case 52:
                        s = e.sent,
                        d = s.RGB,
                        "light" === h(d) && (d = y(m(d), -40)),
                        n.style.setProperty("--anzhiyu-bar-background", d),
                        requestAnimationFrame(function() {
                            anzhiyu.initThemeColor()
                        }),
                        GLOBAL_CONFIG.mainTone.cover_change && (document.documentElement.style.setProperty("--anzhiyu-main", d),
                        document.documentElement.style.setProperty("--anzhiyu-theme-op", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "23"),
                        document.documentElement.style.setProperty("--anzhiyu-theme-op-deep", getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-main") + "dd")),
                        e.next = 63;
                        break;
                    case 60:
                        n.style.setProperty("--anzhiyu-bar-background", a),
                        requestAnimationFrame(function() {
                            anzhiyu.initThemeColor()
                        }),
                        document.documentElement.style.setProperty("--anzhiyu-main", a);
                    case 63:
                        e.next = 70;
                        break;
                    case 65:
                        e.prev = 65,
                        e.t0 = e.catch(45),
                        n.style.setProperty("--anzhiyu-bar-background", a),
                        requestAnimationFrame(function() {
                            anzhiyu.initThemeColor()
                        }),
                        document.documentElement.style.setProperty("--anzhiyu-main", a);
                    case 70:
                        e.next = 75;
                        break;
                    case 72:
                        n.style.setProperty("--anzhiyu-bar-background", a),
                        requestAnimationFrame(function() {
                            anzhiyu.initThemeColor()
                        }),
                        document.documentElement.style.setProperty("--anzhiyu-main", a);
                    case 75:
                        e.next = 83;
                        break;
                    case 77:
                        e.prev = 77,
                        e.t1 = e.catch(29),
                        console.error("Error fetching data:", e.t1),
                        n.style.setProperty("--anzhiyu-bar-background", a),
                        requestAnimationFrame(function() {
                            anzhiyu.initThemeColor()
                        }),
                        document.documentElement.style.setProperty("--anzhiyu-main", a);
                    case 83:
                    case "end":
                        return e.stop()
                    }
            }, e, null, [[29, 77], [45, 65]])
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }())
      , m = function(e) {
        return /^(rgb|RGB)/.test(e) ? e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",").reduce(function(e, t) {
            return e + Number(t).toString(16).padStart(2, "0")
        }, "#") : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(e) && 4 === e.length ? Array.from(e.slice(1)).reduce(function(e, t) {
            return e + t + t
        }, "#") : e
    }
      , y = function(e, t) {
        function n(e, t) {
            return 255 < (e += t) ? 255 : e < 0 ? 0 : e
        }
        var o = e.startsWith("#")
          , e = (o && (e = e.slice(1)),
        parseInt(e, 16))
          , i = n(e >> 16, t)
          , r = n(e >> 8 & 255, t)
          , e = n(255 & e, t);
        return (o ? "#" : "") + String("000000" + (e | r << 8 | i << 16).toString(16)).slice(-6)
    }
      , h = function(e) {
        e = _slicedToArray(function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, o) {
                return t + t + n + n + o + o
            });
            e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return e ? "rgb(".concat(parseInt(e[1], 16), ", ").concat(parseInt(e[2], 16), ", ").concat(parseInt(e[3], 16), ")") : null
        }(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), 4);
        e[0];
        return .5 <= (299 * e[1] + 587 * e[2] + 114 * e[3]) / 255e3 ? "light" : "dark"
    };
    function r() {
        Promise.all([{
            url: "https://sdk.51.la/js-sdk-pro.min.js",
            charset: "UTF-8",
            crossorigin: !1,
            id: "LA_COLLECT"
        }, {
            url: "https://sdk.51.la/perf/js-sdk-perf.min.js",
            crossorigin: "anonymous"
        }].map(function(e) {
            return function(o) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "UTF-8"
                  , r = 2 < arguments.length ? arguments[2] : void 0
                  , a = 3 < arguments.length ? arguments[3] : void 0;
                return new Promise(function(t, e) {
                    var n = document.createElement("script");
                    n.src = o,
                    n.async = !0,
                    a && n.setAttribute("id", a),
                    i && n.setAttribute("charset", i),
                    r && n.setAttribute("crossorigin", r),
                    n.onerror = e,
                    n.onload = n.onreadystatechange = function() {
                        var e = this.readyState;
                        e && "loaded" !== e && "complete" !== e || (n.onload = n.onreadystatechange = null,
                        t())
                    }
                    ,
                    document.head.appendChild(n)
                }
                )
            }(e.url, e.charset, e.crossorigin, e.id)
        })).then(function() {
            LA.init({
                id: GLOBAL_CONFIG.LA51.ck,
                ck: GLOBAL_CONFIG.LA51.ck
            }),
            (new LingQue.Monitor).init({
                id: GLOBAL_CONFIG.LA51.LingQueMonitorID,
                sendSuspicious: !0
            })
        }).catch(function(e) {
            console.error("加载51a统计异常，本地加载403是正常情况:", e)
        })
    }
    function G(e, t) {
        e = document.getElementById(e);
        e && t ? (t = e.querySelector(t)) && t.addEventListener("click", a.darkmode) : e && e.addEventListener("click", a.darkmode)
    }
    window.onkeydown = function(e) {
        123 === e.keyCode && anzhiyu.snackbarShow("开发者模式已打开，请遵循GPL协议", !1)
    }
    ;
    var c, u, l, s, d, g;
    function f(e) {
        var t = 27 === e.keyCode
          , n = e.shiftKey
          , o = anzhiyu_keyboard
          , i = anzhiyu_intype
          , t = (t && (anzhiyu.hideLoading(),
        anzhiyu.hideConsole(),
        rm) && rm.hideRightMenu(),
        GLOBAL_CONFIG.shortcutKey.delay || 100)
          , r = GLOBAL_CONFIG.shortcutKey.shiftDelay || 200;
        o && n && !i && (anzhiyu_keyUpShiftDelayEvent_timeoutId = setTimeout(function() {
            switch (e.keyCode) {
            case 16:
                anzhiyu_keyUpEvent_timeoutId = setTimeout(function() {
                    document.querySelector("#keyboard-tips").classList.add("show")
                }, r);
                break;
            case 65:
                anzhiyu.switchConsole();
                break;
            case 77:
                anzhiyu.musicToggle();
                break;
            case 75:
                anzhiyu.keyboardToggle();
                break;
            case 73:
                anzhiyu.rightMenuToggle();
                break;
            case 82:
                toRandomPost();
                break;
            case 72:
                pjax.loadUrl("/");
                break;
            case 68:
                a.darkmode();
                break;
            case 70:
                pjax.loadUrl("/fcircle/");
                break;
            case 76:
                pjax.loadUrl("/link/");
                break;
            case 80:
                pjax.loadUrl("/about/")
            }
            e.preventDefault()
        }, t))
    }
    function p(e) {
        anzhiyu_keyUpEvent_timeoutId && clearTimeout(anzhiyu_keyUpEvent_timeoutId),
        anzhiyu_keyUpShiftDelayEvent_timeoutId && clearTimeout(anzhiyu_keyUpShiftDelayEvent_timeoutId),
        16 === e.keyCode && document.querySelector("#keyboard-tips").classList.remove("show")
    }
    if (window.refreshFn = function() {
        L(!0),
        b.classList.add("show"),
        themeColorMeta = document.querySelector('meta[name="theme-color"]'),
        pageHeaderEl = document.getElementById("page-header"),
        navMusicEl = document.getElementById("nav-music"),
        consoleEl = document.getElementById("console"),
        G("console", ".darkmode_switchbutton"),
        GLOBAL_CONFIG_SITE.isPost ? (void 0 !== GLOBAL_CONFIG.noticeOutdate && (n = GLOBAL_CONFIG.noticeOutdate,
        (o = anzhiyu.diffDate(GLOBAL_CONFIG_SITE.postUpdate)) >= n.limitDay) && ((t = document.createElement("div")).className = "post-outdate-notice",
        t.textContent = n.messagePrev + " " + o + " " + n.messageNext,
        o = document.getElementById("article-container"),
        "top" === n.position ? o.insertBefore(t, o.firstChild) : o.appendChild(t)),
        GLOBAL_CONFIG.relativeDate.post && O(document.querySelectorAll("#post-meta time"))) : ((GLOBAL_CONFIG.relativeDate.homepage || GLOBAL_CONFIG.relativeDate.simplehomepage) && O(document.querySelectorAll("#recent-posts time")),
        GLOBAL_CONFIG.runtime && (n = document.getElementById("runtimeshow")) && (o = n.getAttribute("data-publishDate"),
        n.textContent = "".concat(anzhiyu.diffDate(o), " ").concat(GLOBAL_CONFIG.runtime)),
        (t = document.getElementById("last-push-date")) && (e = t.getAttribute("data-lastPushDate"),
        t.textContent = anzhiyu.diffDate(e, !0)),
        (e = document.querySelector("#aside-cat-list.expandBtn")) && anzhiyu.addEventListenerPjax(e, "click", function(e) {
            var t = e.target;
            "I" === t.nodeName && (e.preventDefault(),
            t.parentNode.classList.toggle("expand"))
        }, !0)),
        GLOBAL_CONFIG.diytitle && (r = GLOBAL_CONFIG.diytitle.leaveTitle,
        a = GLOBAL_CONFIG.diytitle.backTitle,
        c = document.title,
        document.addEventListener("visibilitychange", function() {
            document.hidden ? (document.title = r,
            clearTimeout(i)) : (document.title = a + c,
            i = setTimeout(function() {
                document.title = c
            }, 2e3))
        })),
        _(),
        GLOBAL_CONFIG_SITE.isHome && (m = document.getElementById("scroll-down")) && anzhiyu.addEventListenerPjax(m, "click", function() {
            var e = document.getElementById("bbTimeList");
            e ? anzhiyu.scrollToDest(e.offsetTop - 62, 300) : anzhiyu.scrollToDest(document.getElementById("home_top").offsetTop - 60, 300)
        }),
        E(),
        GLOBAL_CONFIG.isPhotoFigcaption && document.querySelectorAll("#article-container img").forEach(function(e) {
            var t, n = e.parentNode, o = e.title || e.alt;
            o && !n.parentNode.classList.contains("justified-gallery") && ((t = document.createElement("div")).className = "img-alt is-center",
            t.textContent = o,
            n.insertBefore(t, e.nextSibling))
        }),
        I(),
        window.scrollCollect && window.scrollCollect();
        var e, t, n, o, i, r, a, c, u, l, s, d, m = document.querySelectorAll("#content-inner .fj-gallery");
        if (m.length && z(m),
        anzhiyu.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),
        (d = document.querySelectorAll("#article-container table")).length && d.forEach(function(e) {
            e.closest(".highlight") || anzhiyu.wrap(e, "div", {
                class: "table-wrap"
            })
        }),
        (d = document.querySelectorAll("#article-container .hide-button")).length && (u = function(e) {
            this.classList.add("open");
            var t = this.nextElementSibling.querySelectorAll(".gallery-container");
            t.length && addJustifiedGallery(t)
        }
        ,
        d.forEach(function(e) {
            e.addEventListener("click", u, {
                once: !0
            })
        })),
        C(),
        (d = document.getElementById("switch-btn")) && (l = !1,
        s = document.getElementById("post-comment"),
        anzhiyu.addEventListenerPjax(d, "click", function() {
            s.classList.toggle("move"),
            l || "function" != typeof loadOtherComment || (l = !0,
            loadOtherComment())
        })),
        document.getElementById("toggle-menu").addEventListener("click", function() {
            w()
        }),
        document.getElementById("post-comment")) {
            var y = 1
              , h = ""
              , g = document.createElement("div")
              , f = (g.id = "owo-big",
            document.querySelector("body"));
            function p(i) {
                "IMG" == i.target.tagName && y && (y = 0,
                h = setTimeout(function() {
                    var e = 3 * i.target.clientHeight
                      , t = 3 * i.target.clientWidth
                      , n = i.x - i.offsetX - (t - i.target.clientWidth) / 2
                      , o = (n + t > f.clientWidth && (n -= n + t - f.clientWidth + 10),
                    n < 0 && (n = 10),
                    i.y - i.offsetY);
                    g.style.height = e + "px",
                    g.style.width = t + "px",
                    g.style.left = n + "px",
                    g.style.top = o + "px",
                    g.style.display = "flex",
                    g.innerHTML = '<img src="'.concat(i.target.src, '">')
                }, 100))
            }
            function v(e) {
                g.style.display = "none",
                y = 1,
                clearTimeout(h)
            }
            f.appendChild(g),
            new MutationObserver(function(e) {
                e.forEach(function(e) {
                    for (var t = e.addedNodes, n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.nodeType === Node.ELEMENT_NODE && o.classList.contains("OwO-body") && !o.classList.contains("comment-barrage") && ((o = o).addEventListener("contextmenu", function(e) {
                            return e.preventDefault()
                        }),
                        o.addEventListener("mouseover", p),
                        o.addEventListener("mouseout", v))
                    }
                })
            }
            ).observe(document.getElementById("post-comment"), {
                childList: !0,
                subtree: !0
            })
        }
        (d = document.querySelector(".topGroup")) && d.addEventListener("mouseleave", function() {
            document.getElementById("todayCard").classList.remove("hide"),
            document.getElementById("todayCard").style.zIndex = 1
        }),
        A(),
        (d = document.getElementById("toPageText")) && d.addEventListener("keydown", function(e) {
            13 === e.keyCode && (anzhiyu.toPage(),
            e = document.getElementById("toPageButton").href,
            pjax.loadUrl(e))
        }),
        anzhiyu.addEventListenerPjax(document.getElementById("toggle-menu"), "click", function() {
            w()
        }),
        document.getElementById("page-name").innerText = document.title.split(" | ".concat(GLOBAL_CONFIG_SITE.configTitle))[0],
        anzhiyu.initIndexEssay(),
        anzhiyu.changeTimeInEssay(),
        anzhiyu.removeBodyPaceClass(),
        anzhiyu.qrcodeCreate(),
        anzhiyu.changeTimeInAlbumDetail(),
        anzhiyu.reflashEssayWaterFall(),
        anzhiyu.sayhi(),
        anzhiyu.stopImgRightDrag(),
        anzhiyu.addNavBackgroundInit(),
        anzhiyu.setValueToBodyType(),
        anzhiyu.catalogActive(),
        anzhiyu.tagsPageActive(),
        anzhiyu.categoriesBarActive(),
        anzhiyu.topCategoriesBarScroll(),
        anzhiyu.switchRightClickMenuHotReview(),
        anzhiyu.getCustomPlayList(),
        anzhiyu.addEventListenerConsoleMusicList(!1),
        anzhiyu.initPaginationObserver(),
        setTimeout(function() {
            var e;
            e = document.querySelectorAll("input, textarea"),
            Array.from(e).filter(function(e) {
                "center-console" === e.id && e.id
            }).forEach(function(e) {
                e.addEventListener("focus", function() {
                    anzhiyu_intype = !0
                }),
                e.addEventListener("blur", function() {
                    anzhiyu_intype = !1
                })
            }),
            "function" == typeof addFriendLinksInFooter && addFriendLinksInFooter()
        }, 200)
    }
    ,
    e = document.getElementById("rightMenu"),
    k = document.documentElement.getAttribute("data-theme"),
    e.querySelector(".menu-darkmode-text").textContent = "light" === k ? "深色模式" : "浅色模式",
    refreshFn(),
    window.addEventListener("resize", function() {
        L(!1),
        t && anzhiyu.isHidden(document.getElementById("toggle-menu")) && n()
    }),
    document.getElementById("menu-mask").addEventListener("click", function(e) {
        n()
    }),
    e = document.getElementById("rightMenu"),
    G("menu-darkmode"),
    G("sidebar", ".darkmode_switchbutton"),
    document.querySelector("#sidebar-menus .menus_items") && document.querySelector("#sidebar-menus .menus_items").addEventListener("click", function(e) {
        e = e.target.closest(".site-page.group");
        e && e.classList.toggle("hide")
    }),
    GLOBAL_CONFIG.islazyload && (window.lazyLoadInstance = new LazyLoad({
        elements_selector: "img",
        threshold: 0,
        data_src: "lazy-src"
    })),
    void 0 !== GLOBAL_CONFIG.copyright && (g = GLOBAL_CONFIG.copyright,
    c = g.limitCount,
    u = g.languages,
    l = g.copy,
    s = g.copyrightEbable,
    document.body.addEventListener("copy", function(e) {
        var t, n;
        if (l && anzhiyu.snackbarShow(u.copySuccess),
        s)
            return e.preventDefault(),
            (n = t = window.getSelection(0).toString()).length > c && (n = "".concat(t, "\n\n\n").concat(u.author, "\n").concat(u.link).concat(window.location.href, "\n").concat(u.source, "\n").concat(u.info)),
            (e.clipboardData ? e : window).clipboardData.setData("text", n)
    })),
    GLOBAL_CONFIG.navMusic && (d = setInterval(function() {
        navMusicEl && navMusicEl.querySelector("#nav-music meting-js").aplayer && (clearInterval(d),
        navMusicEl.querySelector("#nav-music meting-js").aplayer.on("pause", function() {
            navMusicEl.classList.remove("playing"),
            document.getElementById("menu-music-toggle").innerHTML = '<i class="anzhiyufont anzhiyu-icon-play"></i><span>播放音乐</span>',
            document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停",
            document.querySelector("#consoleMusic").classList.remove("on"),
            anzhiyu_musicPlaying = !1,
            navMusicEl.classList.remove("stretch")
        }),
        navMusicEl.querySelector("#nav-music meting-js").aplayer.on("play", function() {
            navMusicEl.classList.add("playing"),
            document.getElementById("menu-music-toggle").innerHTML = '<i class="anzhiyufont anzhiyu-icon-pause"></i><span>暂停音乐</span>',
            document.querySelector("#consoleMusic").classList.add("on"),
            anzhiyu_musicPlaying = !0
        }))
    }, 16)),
    GLOBAL_CONFIG.shortcutKey && document.getElementById("consoleKeyboard") && (localStorage.setItem("keyboardToggle", "true"),
    document.getElementById("consoleKeyboard").classList.add("on"),
    anzhiyu_keyboard = !0,
    anzhiyu_keyboard = !!localStorage.getItem("keyboardToggle") && localStorage.getItem("keyboardToggle"),
    window.onfocus = function() {
        document.getElementById("keyboard-tips").classList.remove("show")
    }
    ,
    (g = window).removeEventListener("keydown", f),
    g.removeEventListener("keyup", p),
    g.addEventListener("keydown", f),
    g.addEventListener("keyup", p)),
    GLOBAL_CONFIG.autoDarkmode && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(e) {
        void 0 === saveToLocal.get("theme") && (e.matches ? i("dark") : i("light"))
    }),
    GLOBAL_CONFIG.greetingBox) {
        var v = GLOBAL_CONFIG.greetingBox.list
          , k = GLOBAL_CONFIG.greetingBox.default
          , B = document.createElement("div")
          , T = (B.id = "greeting",
        setTimeout(function() {
            B.classList.add("shown")
        }, 1e3),
        document.getElementById("greetingBox"));
        if (T) {
            T.appendChild(B);
            for (var S = (new Date).getHours(), x = k, F = 0; F < v.length; F++)
                if (S >= v[F].startTime && S <= v[F].endTime) {
                    x = v[F].greeting;
                    break
                }
            B.innerHTML = x,
            setTimeout(function() {
                B.classList.remove("shown"),
                setTimeout(function() {
                    T.remove()
                }, 500)
            }, 3e3)
        }
    }
    GLOBAL_CONFIG.LA51 && r()
});
