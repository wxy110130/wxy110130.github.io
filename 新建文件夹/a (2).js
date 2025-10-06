"use strict";
function _createForOfIteratorHelper(e, t) {
    var n, r, o, a, i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (i)
        return r = !(n = !0),
        {
            s: function() {
                i = i.call(e)
            },
            n: function() {
                var e = i.next();
                return n = e.done,
                e
            },
            e: function(e) {
                r = !0,
                o = e
            },
            f: function() {
                try {
                    n || null == i.return || i.return()
                } finally {
                    if (r)
                        throw o
                }
            }
        };
    if (Array.isArray(e) || (i = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length)
        return i && (e = i),
        a = 0,
        {
            s: t = function() {}
            ,
            n: function() {
                return a >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[a++]
                }
            },
            e: function(e) {
                throw e
            },
            f: t
        };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(e, t) {
    var n;
    if (e)
        return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
document.addEventListener("DOMContentLoaded", function() {
    var o, a, i, e;
    null != (e = navigator.serviceWorker) && e.controller && (o = function(r) {
        var o, a = r.endsWith("js") ? "script" : "link", i = "link" == a ? "href" : "src", t = _createForOfIteratorHelper(document.getElementsByTagName(a));
        try {
            var e;
            for (t.s(); !(o = t.n()).done; )
                if (e = function() {
                    var t, e = o.value, n = e[i];
                    if (r.length > n ? r.endsWith(n) : n.endsWith(r))
                        return t = document.createElement(a),
                        n = e.text || e.textContent || e.innerHTML || "",
                        Array.from(e.attributes).forEach(function(e) {
                            return t.setAttribute(e.name, e.value)
                        }),
                        t.appendChild(document.createTextNode(n)),
                        e.parentNode.replaceChildren(t, e),
                        {
                            v: !0
                        }
                }())
                    return e.v
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
    }
    ,
    a = "updated",
    i = function() {
        caches.keys().then(function(e) {
            var t = "AnZhiYuBlogCache";
            e.includes(t) && caches.delete(t).then(function(e) {
                e ? console.info("缓存删除成功") : console.info("缓存删除失败")
            }).catch(function(e) {
                console.error("删除缓存时出错：", e)
            })
        }).catch(function(e) {
            console.error("获取缓存列表时出错：", e)
        }),
        caches.match("https://id.v3/").then(function(e) {
            e ? e.json().then(function(e) {
                anzhiyuPopupManager && anzhiyuPopupManager.enqueuePopup("通知📢", "已刷新缓存，更新为".concat(e.global + "." + e.local, "版本最新内容"), null, 5e3)
            }) : console.info("未找到匹配的缓存响应")
        }).catch(function(e) {
            console.error("缓存匹配出错:", e)
        })
    }
    ,
    sessionStorage.getItem(a) ? (i(),
    sessionStorage.removeItem(a)) : (e = "update",
    navigator.serviceWorker.controller.postMessage(e)),
    navigator.serviceWorker.addEventListener("message", function(e) {
        var t, n, e = e.data, r = (sessionStorage.setItem(a, e.type),
        null == (r = e.list) ? void 0 : r.filter(function(e) {
            return /\.(js|css)$/.test(e)
        }));
        r ? (null != (n = window.Pjax) && null != (t = n.isSupported) && t.call(n) && r.forEach(o),
        location.reload()) : (t = e.new,
        !(n = e.old) || t.global === n.global && t.local === n.local || i(),
        sessionStorage.removeItem(a))
    }))
});
