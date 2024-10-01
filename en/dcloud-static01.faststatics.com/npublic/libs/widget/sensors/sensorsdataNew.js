
window.ZQSensorsObj = function(e, t) {
    return t()
}(this, function() {
    function e(e, t, r) {
        if (null == e)
            return !1;
        if (Qe && e.forEach === Qe)
            e.forEach(t, r);
        else if (nt(e) && e.length === +e.length) {
            for (var a = 0, n = e.length; a < n; a++)
                if (a in e && t.call(r, e[a], a, e) === at)
                    return !1
        } else
            for (var i in e)
                if (rt.call(e, i) && t.call(r, e[i], i, e) === at)
                    return !1
    }
    function t(t, r) {
        var a = [];
        return null == t ? a : Array.prototype.map && t.map === Array.prototype.map ? t.map(r) : (e(t, function(e, t, n) {
            a.push(r(e, t, n))
        }),
        a)
    }
    function r(t) {
        return e(Ye.call(arguments, 1), function(e) {
            for (var r in e)
                rt.call(e, r) && void 0 !== e[r] && (t[r] = e[r])
        }),
        t
    }
    function a(t) {
        return e(Ye.call(arguments, 1), function(e) {
            for (var a in e)
                void 0 !== e[a] && (_(e[a]) && _(t[a]) ? r(t[a], e[a]) : t[a] = e[a])
        }),
        t
    }
    function n(t) {
        return e(Ye.call(arguments, 1), function(e) {
            for (var r in e)
                void 0 !== e[r] && void 0 === t[r] && (t[r] = e[r])
        }),
        t
    }
    function i(e) {
        if (!e)
            return !1;
        var t = tt.call(e);
        return "[object Function]" == t || "[object AsyncFunction]" == t
    }
    function s(e) {
        return !(!e || !rt.call(e, "callee"))
    }
    function c(e) {
        return e ? e.toArray ? e.toArray() : nt(e) ? Ye.call(e) : s(e) ? Ye.call(e) : l(e) : []
    }
    function l(t) {
        var r = [];
        return null == t ? r : (e(t, function(e) {
            r[r.length] = e
        }),
        r)
    }
    function u(e, t) {
        var r = e.indexOf;
        if (r)
            return r.call(e, t);
        for (var a = 0; a < e.length; a++)
            if (t === e[a])
                return a;
        return -1
    }
    function p(e, t, r) {
        var a = Object.prototype.hasOwnProperty;
        if (e.filter)
            return e.filter(t);
        for (var n = [], i = 0; i < e.length; i++)
            if (a.call(e, i)) {
                var s = e[i];
                t.call(r, s, i, e) && n.push(s)
            }
        return n
    }
    function d(e, t) {
        return e.prototype = new t,
        e.prototype.constructor = e,
        e.superclass = t.prototype,
        e
    }
    function f(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    function _(e) {
        return null != e && "[object Object]" == tt.call(e)
    }
    function h(e) {
        if (_(e)) {
            for (var t in e)
                if (rt.call(e, t))
                    return !1;
            return !0
        }
        return !1
    }
    function g(e) {
        return void 0 === e
    }
    function v(e) {
        return "[object String]" == tt.call(e)
    }
    function y(e) {
        return "[object Date]" == tt.call(e)
    }
    function b(e) {
        return "[object Boolean]" == tt.call(e)
    }
    function w(e) {
        return "[object Number]" == tt.call(e) && /[\d\.]+/.test(String(e))
    }
    function S(e) {
        return !(!e || 1 !== e.nodeType)
    }
    function k(e) {
        try {
            JSON.parse(e)
        } catch (t) {
            return !1
        }
        return !0
    }
    function $(e) {
        var t = null;
        try {
            t = JSON.parse(e)
        } catch (r) {
            return !1
        }
        return t
    }
    function P(e, t, r) {
        var a, n, i, s = null, o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading === !1 ? 0 : st(),
            s = null,
            i = e.apply(a, n),
            s || (a = n = null)
        };
        return function() {
            var l = st();
            o || r.leading !== !1 || (o = l);
            var u = t - (l - o);
            return a = this,
            n = arguments,
            u <= 0 || u > t ? (s && (clearTimeout(s),
            s = null),
            o = l,
            i = e.apply(a, n),
            s || (a = n = null)) : s || r.trailing === !1 || (s = setTimeout(c, u)),
            i
        }
    }
    function C(e) {
        if ("string" != typeof e)
            return 0;
        var t = 0
          , r = null;
        if (0 == e.length)
            return t;
        for (var a = 0; a < e.length; a++)
            r = e.charCodeAt(a),
            t = (t << 5) - t + r,
            t &= t;
        return t
    }
    function N() {
        if ("function" == typeof Uint32Array) {
            var e = "";
            if ("undefined" != typeof crypto ? e = crypto : "undefined" != typeof msCrypto && (e = msCrypto),
            _(e) && e.getRandomValues) {
                var t = new Uint32Array(1)
                  , r = e.getRandomValues(t)[0]
                  , a = Math.pow(2, 32);
                return r / a
            }
        }
        return it(1e19) / 1e19
    }
    function O(e) {
        try {
            return JSON.stringify(e, null, "  ")
        } catch (t) {
            return JSON.stringify(e)
        }
    }
    function j(e) {
        for (var t, r = [], a = {}, n = 0; n < e.length; n++)
            t = e[n],
            t in a || (a[t] = !0,
            r.push(t));
        return r
    }
    function x(e) {
        return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
            return String.fromCharCode("0x" + t)
        }))
    }
    function D(e) {
        var r = t(atob(e).split(""), function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        });
        try {
            return decodeURIComponent(r.join(""))
        } catch (a) {
            return r.join("")
        }
    }
    function T(e, t) {
        e = String(e),
        t = "number" == typeof t ? t : 13;
        for (var r = 126, a = e.split(""), n = 0, i = a.length; n < i; n++) {
            var s = a[n].charCodeAt(0);
            s < r && (a[n] = String.fromCharCode((a[n].charCodeAt(0) + t) % r))
        }
        return a.join("")
    }
    function A(e) {
        var t = 13
          , r = 126;
        return e = String(e),
        T(e, r - t)
    }
    function E(e, t) {
        if ("string" != typeof e)
            return t("\u8f6c\u6362unicode\u9519\u8bef", e),
            e;
        for (var r = "", a = 0; a < e.length; a++)
            r += "\\" + e.charCodeAt(a).toString(16);
        return r
    }
    function I() {
        var e = !0
          , t = "__sensorsdatasupport__"
          , r = "testIsSupportStorage";
        try {
            sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r),
            sessionStorage.removeItem(t, r),
            e = !0) : e = !1
        } catch (a) {
            e = !1
        }
        return e
    }
    function L() {
        if ((I() && "true" === sessionStorage.getItem("sensorsdata_jssdk_debug") || ot.show_log) && (!_(arguments[0]) || ot.show_log !== !0 && "string" !== ot.show_log && ot.show_log !== !1 || (arguments[0] = O(arguments[0])),
        "object" == typeof console && console.log))
            try {
                return console.log.apply(console, arguments)
            } catch (e) {
                console.log(arguments[0])
            }
    }
    function H(e, t) {
        if ("string" == typeof t)
            return R(e, t);
        if (nt(t)) {
            for (var r = !1, a = 0; a < t.length; a++) {
                var n = R(e, t[a]);
                if (n) {
                    r = !0;
                    break
                }
            }
            return r
        }
    }
    function R(e, t) {
        return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : void 0
    }
    function U(e, t) {
        var r = ""
          , a = "";
        return e.textContent ? r = f(e.textContent) : e.innerText && (r = f(e.innerText)),
        r && (r = r.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)),
        a = r || "",
        "input" !== t && "INPUT" !== t || ("button" === e.type || "submit" === e.type ? a = e.value || "" : ot.heatmap && "function" == typeof ot.heatmap.collect_input && ot.heatmap.collect_input(e) && (a = e.value || "")),
        a
    }
    function J(e) {
        e = r({
            success: function() {},
            error: function() {},
            appendCall: function(e) {
                document.getElementsByTagName("head")[0].appendChild(e)
            }
        }, e);
        var t = null;
        "css" === e.type && (t = document.createElement("link"),
        t.rel = "stylesheet",
        t.href = e.url),
        "js" === e.type && (t = document.createElement("script"),
        t.async = "async",
        t.setAttribute("charset", "UTF-8"),
        t.src = e.url,
        t.type = "text/javascript"),
        t.onload = t.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e.success(),
            t.onload = t.onreadystatechange = null)
        }
        ,
        t.onerror = function() {
            e.error(),
            t.onerror = null
        }
        ,
        e.appendCall(t)
    }
    function q(e) {
        return new q.init(e)
    }
    function B(e) {
        var t = document.createElement("style");
        t.type = "text/css";
        try {
            t.appendChild(document.createTextNode(e))
        } catch (r) {
            t.styleSheet.cssText = e
        }
        var a = document.getElementsByTagName("head")[0]
          , n = document.getElementsByTagName("script")[0];
        a ? a.children.length ? a.insertBefore(t, a.children[0]) : a.appendChild(t) : n.parentNode.insertBefore(t, n)
    }
    function M(e) {
        function t(e, t) {
            e = f(e);
            var r;
            if ("body" === e)
                return document.getElementsByTagName("body")[0];
            if (0 === e.indexOf("#"))
                e = e.slice(1),
                r = document.getElementById(e);
            else if (e.indexOf(":nth-of-type") > -1) {
                var a = e.split(":nth-of-type");
                if (!a[0] || !a[1])
                    return null;
                var n = a[0]
                  , i = a[1].match(/\(([0-9]+)\)/);
                if (!i || !i[1])
                    return null;
                var s = Number(i[1]);
                if (!(S(t) && t.children && t.children.length > 0))
                    return null;
                for (var o = t.children, c = 0; c < o.length; c++)
                    if (S(o[c])) {
                        var l = o[c].tagName.toLowerCase();
                        if (l === n && (s--,
                        0 === s)) {
                            r = o[c];
                            break
                        }
                    }
                if (s > 0)
                    return null
            }
            return r ? r : null
        }
        function r(e) {
            var n, i = a.shift();
            if (!i)
                return e;
            try {
                n = t(i, e)
            } catch (s) {
                L(s)
            }
            return n && S(n) ? r(n) : null
        }
        if (!v(e))
            return null;
        var a = e.split(">")
          , n = null;
        return n = r(),
        n && S(n) ? n : null
    }
    function K(e) {
        var t = e;
        try {
            t = decodeURIComponent(e)
        } catch (r) {
            t = e
        }
        return t
    }
    function F(e) {
        var t = e;
        try {
            t = decodeURI(e)
        } catch (r) {
            t = e
        }
        return t
    }
    function W(e, t) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
        e = K(e);
        var r = "[\\?&]" + t + "=([^&#]*)"
          , a = new RegExp(r)
          , n = a.exec(e);
        return null === n || n && "string" != typeof n[1] && n[1].length ? "" : K(n[1])
    }
    function z(e) {
        var t = function(e) {
            this._fields = {
                Username: 4,
                Password: 5,
                Port: 7,
                Protocol: 2,
                Host: 6,
                Path: 8,
                URL: 0,
                QueryString: 9,
                Fragment: 10
            },
            this._values = {},
            this._regex = null,
            this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/,
            "undefined" != typeof e && this._parse(e)
        };
        return t.prototype.setUrl = function(e) {
            this._parse(e)
        }
        ,
        t.prototype._initValues = function() {
            for (var e in this._fields)
                this._values[e] = ""
        }
        ,
        t.prototype.addQueryString = function(e) {
            if ("object" != typeof e)
                return !1;
            var t = this._values.QueryString || "";
            for (var r in e)
                t = new RegExp(r + "[^&]+").test(t) ? t.replace(new RegExp(r + "[^&]+"), r + "=" + e[r]) : "&" === t.slice(-1) ? t + r + "=" + e[r] : "" === t ? r + "=" + e[r] : t + "&" + r + "=" + e[r];
            this._values.QueryString = t
        }
        ,
        t.prototype.getUrl = function() {
            var e = "";
            return e += this._values.Origin,
            e += this._values.Port ? ":" + this._values.Port : "",
            e += this._values.Path,
            e += this._values.QueryString ? "?" + this._values.QueryString : "",
            e += this._values.Fragment ? "#" + this._values.Fragment : ""
        }
        ,
        t.prototype.getUrl = function() {
            var e = "";
            return e += this._values.Origin,
            e += this._values.Port ? ":" + this._values.Port : "",
            e += this._values.Path,
            e += this._values.QueryString ? "?" + this._values.QueryString : ""
        }
        ,
        t.prototype._parse = function(e) {
            this._initValues();
            var t = this._regex.exec(e);
            t || L("DPURLParser::_parse -> Invalid URL");
            for (var r in this._fields)
                "undefined" != typeof t[this._fields[r]] && (this._values[r] = t[this._fields[r]]);
            this._values.Hostname = this._values.Host.replace(/:\d+$/, ""),
            this._values.Origin = this._values.Protocol + "://" + this._values.Hostname
        }
        ,
        new t(e)
    }
    function V(e) {
        e = e || "";
        for (var t = function(e) {
            return K(e)
        }, r = {}, a = e.substring(1), n = a.split("&"), i = 0; i < n.length; i++) {
            var s = n[i].indexOf("=");
            if (s !== -1) {
                var o = n[i].substring(0, s)
                  , c = n[i].substring(s + 1);
                o = t(o),
                c = t(c),
                r[o] = c
            }
        }
        return r
    }
    function X(e) {
        var t = {}
          , r = function() {
            var e;
            try {
                return e = new URL("http://modernizr.com/"),
                "http://modernizr.com/" === e.href
            } catch (t) {
                return !1
            }
        };
        if ("function" == typeof window.URL && r())
            t = new URL(e),
            t.searchParams || (t.searchParams = function() {
                var e = V(t.search);
                return {
                    get: function(t) {
                        return e[t]
                    }
                }
            }());
        else {
            var a = /^https?:\/\/.+/;
            a.test(e) === !1 && L("Invalid URL");
            var n = z(e);
            t.hash = "",
            t.host = n._values.Host ? n._values.Host + (n._values.Port ? ":" + n._values.Port : "") : "",
            t.href = n._values.URL,
            t.password = n._values.Password,
            t.pathname = n._values.Path,
            t.port = n._values.Port,
            t.search = n._values.QueryString ? "?" + n._values.QueryString : "",
            t.username = n._values.Username,
            t.hostname = n._values.Hostname,
            t.protocol = n._values.Protocol ? n._values.Protocol + ":" : "",
            t.origin = n._values.Origin ? n._values.Origin + (n._values.Port ? ":" + n._values.Port : "") : "",
            t.searchParams = function() {
                var e = V("?" + n._values.QueryString);
                return {
                    get: function(t) {
                        return e[t]
                    }
                }
            }()
        }
        return t
    }
    function Z(e, t) {
        t && "string" == typeof t || (t = "hostname\u89e3\u6790\u5f02\u5e38");
        var r = null;
        try {
            r = X(e).hostname
        } catch (a) {
            L("getHostname\u4f20\u5165\u7684url\u53c2\u6570\u4e0d\u5408\u6cd5\uff01")
        }
        return r || t
    }
    function Q(e) {
        var t = {}
          , r = e.split("?")
          , a = r[1] || "";
        return a && (t = V("?" + a)),
        t
    }
    function Y(e) {
        return F(v(e) ? e : location.href)
    }
    function G(t) {
        return e(t, function(e, r) {
            y(e) ? t[r] = ee(e) : _(e) && (t[r] = G(e))
        }),
        t
    }
    function ee(e) {
        function t(e) {
            return e < 10 ? "0" + e : e
        }
        return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
    }
    function te(t) {
        _(t) && e(t, function(e, r) {
            _(e) ? te(t[r]) : y(e) && (t[r] = ee(e))
        })
    }
    function re(e) {
        "undefined" != typeof e.properties.$project && (e.project = e.properties.$project,
        delete e.properties.$project),
        "undefined" != typeof e.properties.$token && (e.token = e.properties.$token,
        delete e.properties.$token)
    }
    function ae(e, t) {
        return w(t) && e.length > t ? (L("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + e),
        e.slice(0, t)) : e
    }
    function ne(t) {
        var r = ["$element_selector", "$element_path"]
          , a = ["sensorsdata_app_visual_properties"];
        _(t) && e(t, function(e, n) {
            if (_(e))
                ne(t[n]);
            else if (v(e)) {
                if (u(a, n) > -1)
                    return;
                t[n] = ae(e, u(r, n) > -1 ? 1024 : ot.max_string_length)
            }
        })
    }
    function ie(t) {
        return _(t) ? (e(t, function(r, a) {
            if (nt(r)) {
                var n = [];
                e(r, function(e) {
                    v(e) ? n.push(e) : L("\u60a8\u7684\u6570\u636e-", a, r, "\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
                }),
                t[a] = n
            }
            v(r) || w(r) || y(r) || b(r) || nt(r) || i(r) || "$option" === a || (L("\u60a8\u7684\u6570\u636e-", a, r, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"),
            delete t[a])
        }),
        t) : t
    }
    function se(t) {
        var r = t.properties
          , a = JSON.parse(JSON.stringify(t));
        _(r) && (e(r, function(e, t) {
            if (i(e))
                try {
                    r[t] = e(a),
                    i(r[t]) && (L("\u60a8\u7684\u5c5e\u6027- " + t + " \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"),
                    delete r[t])
                } catch (n) {
                    delete r[t],
                    L("\u60a8\u7684\u5c5e\u6027- " + t + " \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
                }
        }),
        ie(r))
    }
    function oe(t) {
        var r = ["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"];
        _(t) && e(r, function(e, r) {
            e in t && (r < 3 ? (delete t[e],
            L("\u60a8\u7684\u5c5e\u6027- " + e + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")) : L("\u60a8\u7684\u5c5e\u6027- " + e + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u8bf7\u907f\u514d\u5176\u4f5c\u4e3a\u5c5e\u6027\u540d"))
        })
    }
    function ce(e) {
        if ("object" == typeof e && e.$option) {
            var t = e.$option;
            return delete e.$option,
            t
        }
        return {}
    }
    function le(t) {
        var r = {};
        return e(t, function(e, t) {
            null != e && (r[t] = e)
        }),
        r
    }
    function ue(e) {
        var t = ot.current_domain;
        switch (typeof t) {
        case "function":
            var r = t();
            return "" === r || "" === f(r) ? "url\u89e3\u6790\u5931\u8d25" : r.indexOf(".") !== -1 ? r : "url\u89e3\u6790\u5931\u8d25";
        case "string":
            return "" === t || "" === f(t) ? "url\u89e3\u6790\u5931\u8d25" : t.indexOf(".") !== -1 ? t : "url\u89e3\u6790\u5931\u8d25";
        default:
            var a = he();
            return "" === e ? "url\u89e3\u6790\u5931\u8d25" : "" === a ? "url\u89e3\u6790\u5931\u8d25" : a
        }
    }
    function pe(e) {
        if (!e.target)
            return !1;
        var t = e.target
          , r = t.tagName.toLowerCase()
          , a = {};
        return a.$element_type = r,
        a.$element_name = t.getAttribute("name"),
        a.$element_id = t.getAttribute("id"),
        a.$element_class_name = "string" == typeof t.className ? t.className : null,
        a.$element_target_url = t.getAttribute("href"),
        a.$element_content = U(t, r),
        a = le(a),
        a.$url = Y(),
        a.$url_path = location.pathname,
        a.$title = document.title,
        a.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        a
    }
    function de() {
        var e = document.referrer
          , t = "baidu.com";
        if (!e)
            return !1;
        try {
            var r = X(e).hostname;
            return r && r.substring(r.length - t.length) === t
        } catch (a) {
            return !1
        }
    }
    function fe() {
        var e = Q(document.referrer);
        return h(e) || !e.eqid ? _t().replace(/-/g, "") : e.eqid
    }
    function _e() {
        var e = Q(document.referrer);
        if (h(e) || !e.eqid) {
            var t = Q(location.href);
            return e.ck || t.utm_source ? "baidu_sem_keyword_id" : "baidu_other_keyword_id"
        }
        return "baidu_seo_keyword_id"
    }
    function he(e) {
        function t(e) {
            return !!e && e
        }
        e = e || location.hostname;
        var r = t(e);
        if (!r)
            return "";
        var a = r.split(".");
        if (nt(a) && a.length >= 2 && !/^(\d+\.)+\d+$/.test(r))
            for (var n = "." + a.splice(a.length - 1, 1); a.length > 0; )
                if (n = "." + a.splice(a.length - 1, 1) + n,
                document.cookie = "sensorsdata_domain_test=true; path=/; domain=" + n,
                document.cookie.indexOf("sensorsdata_domain_test=true") !== -1) {
                    var i = new Date;
                    return i.setTime(i.getTime() - 1e3),
                    document.cookie = "sensorsdata_domain_test=true; expires=" + i.toGMTString() + "; path=/; domain=" + n,
                    n
                }
        return ""
    }
    function ge(e) {
        return e = e || document.referrer,
        "" === e || he(Z(e)) !== he()
    }
    function me(e, t) {
        return e = e || document.referrer,
        "string" != typeof e ? "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e) : (e = F(e),
        0 !== e.indexOf("https://www.baidu.com/") || t || (e = e.split("?")[0]),
        e = e.slice(0, ot.max_referrer_string_length),
        "string" == typeof e ? e : "")
    }
    function ve(e) {
        var t = Z(e);
        if (!t || "hostname\u89e3\u6790\u5f02\u5e38" === t)
            return "";
        var r = {
            baidu: [/^.*\.baidu\.com$/],
            bing: [/^.*\.bing\.com$/],
            google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
            sm: [/^m\.sm\.cn$/],
            so: [/^.+\.so\.com$/],
            sogou: [/^.*\.sogou\.com$/],
            yahoo: [/^.*\.yahoo\.com$/]
        };
        for (var a in r)
            for (var n = r[a], i = 0, s = n.length; i < s; i++)
                if (n[i].test(t))
                    return a;
        return "\u672a\u77e5\u641c\u7d22\u5f15\u64ce"
    }
    function ye(e, t) {
        e = e || document.referrer;
        var r = ot.source_type.keyword;
        if (document && "string" == typeof e) {
            if (0 === e.indexOf("http")) {
                var a = ve(e)
                  , n = Q(e);
                if (h(n))
                    return ot.preset_properties.search_keyword_baidu && de() ? void 0 : "\u672a\u53d6\u5230\u503c";
                var i = null;
                for (var s in r)
                    if (a === s && "object" == typeof n)
                        if (i = r[s],
                        nt(i))
                            for (s = 0; s < i.length; s++) {
                                var o = n[i[s]];
                                if (o)
                                    return t ? {
                                        active: o
                                    } : o
                            }
                        else if (n[i])
                            return t ? {
                                active: n[i]
                            } : n[i];
                return ot.preset_properties.search_keyword_baidu && de() ? void 0 : "\u672a\u53d6\u5230\u503c"
            }
            return "" === e ? "\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00" : "\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url"
        }
        return "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e)
    }
    function be(e) {
        var t = W(e, "gdt_vid")
          , r = W(e, "hash_key")
          , a = W(e, "callbacks")
          , n = {
            click_id: "",
            hash_key: "",
            callbacks: ""
        };
        return v(t) && t.length && (n.click_id = 16 == t.length || 18 == t.length ? t : "\u53c2\u6570\u89e3\u6790\u4e0d\u5408\u6cd5",
        v(r) && r.length && (n.hash_key = r),
        v(a) && a.length && (n.callbacks = a)),
        n
    }
    function we() {
        function e(e, t) {
            for (var r = 0; r < e.length; r++)
                if (t.split("?")[0].indexOf(e[r]) !== -1)
                    return !0
        }
        var t = "(" + ot.source_type.utm.join("|") + ")\\=[^&]+"
          , r = ot.source_type.search
          , a = ot.source_type.social
          , n = document.referrer || ""
          , i = gt.pageProp.url;
        if (i) {
            var s = i.match(new RegExp(t));
            return s && s[0] ? "\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf" : e(r, n) ? "\u81ea\u7136\u641c\u7d22\u6d41\u91cf" : e(a, n) ? "\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf" : "" === n ? "\u76f4\u63a5\u6d41\u91cf" : "\u5f15\u8350\u6d41\u91cf"
        }
        return "\u83b7\u53d6url\u5f02\u5e38"
    }
    function Se() {
        var e = {
            items: [],
            enqueue: function(e) {
                this.items.push(e),
                this.start()
            },
            dequeue: function() {
                return this.items.shift()
            },
            getCurrentItem: function() {
                return this.items[0]
            },
            isRun: !1,
            start: function() {
                this.items.length > 0 && !this.isRun && (this.isRun = !0,
                this.getCurrentItem().start())
            },
            close: function() {
                this.dequeue(),
                this.isRun = !1,
                this.start()
            }
        };
        return e
    }
    function ke() {
        return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia
    }
    function $e() {
        var e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type
          , t = "\u672a\u53d6\u5230\u503c";
        if (e)
            t = e.indexOf("landscape") > -1 ? "landscape" : "portrait";
        else if (ke()) {
            var r = window.matchMedia || window.msMatchMedia;
            r("(orientation: landscape)").matches ? t = "landscape" : r("(orientation: portrait)").matches && (t = "portrait")
        }
        return t
    }
    function Pe() {
        return "undefined" != typeof window.XMLHttpRequest && ("withCredentials"in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
    }
    function Ce() {
        return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
    }
    function Ne() {
        try {
            var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
            return e && e[1] ? Number.parseInt(e[1], 10) : ""
        } catch (t) {
            return ""
        }
    }
    function Oe() {
        var e, t = {}, r = navigator.userAgent.toLowerCase();
        return (e = r.match(/opera.([\d.]+)/)) ? t.opera = Number(e[1].split(".")[0]) : (e = r.match(/msie ([\d.]+)/)) ? t.ie = Number(e[1].split(".")[0]) : (e = r.match(/edge.([\d.]+)/)) ? t.edge = Number(e[1].split(".")[0]) : (e = r.match(/firefox\/([\d.]+)/)) ? t.firefox = Number(e[1].split(".")[0]) : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = Number(e[1].split(".")[0]) : (e = r.match(/version\/([\d.]+).*safari/)) ? t.safari = Number(e[1].match(/^\d*.\d*/)) : (e = r.match(/trident\/([\d.]+)/)) && (t.ie = 11),
        t
    }
    function je() {
        var e = !1;
        if ("object" != typeof navigator || "function" != typeof navigator.sendBeacon)
            return e;
        var t = Oe()
          , r = navigator.userAgent.toLowerCase();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var a = /os [\d._]*/gi
              , n = r.match(a)
              , i = (n + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")
              , s = i.split(".");
            "undefined" == typeof t.safari && (t.safari = s[0]),
            s[0] && s[0] < 13 ? (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 12) && (e = !0) : (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 11.3) && (e = !0)
        } else
            (t.chrome > 38 || t.edge > 13 || t.firefox > 30 || t.opera > 25 || t.safari > 11) && (e = !0);
        return e
    }
    function xe() {
        function e(t) {
            return t && (t.preventDefault = e.preventDefault,
            t.stopPropagation = e.stopPropagation,
            t._getPath = e._getPath),
            t
        }
        function t(t, r, a, n) {
            var i = function(i) {
                if (i = i || e(window.event)) {
                    i.target = i.srcElement;
                    var s, o, c = !0;
                    return "function" == typeof a && (s = a(i)),
                    o = r.call(t, i),
                    "beforeunload" !== n ? (!1 !== s && !1 !== o || (c = !1),
                    c) : void 0
                }
            };
            return i
        }
        e._getPath = function() {
            var e = this;
            return this.path || this.composedPath && this.composedPath() || q(e.target).getParents()
        }
        ,
        e.preventDefault = function() {
            this.returnValue = !1
        }
        ,
        e.stopPropagation = function() {
            this.cancelBubble = !0
        }
        ;
        var r = function(r, a, n) {
            var i = !(!_(ot.heatmap) || !ot.heatmap.useCapture);
            if (_(ot.heatmap) && "undefined" == typeof ot.heatmap.useCapture && "click" === a && (i = !0),
            r && r.addEventListener)
                r.addEventListener(a, function(t) {
                    t._getPath = e._getPath,
                    n.call(this, t)
                }, i);
            else {
                var s = "on" + a
                  , o = r[s];
                r[s] = t(r, n, o, a)
            }
        };
        r.apply(null, arguments)
    }
    function De(e) {
        var t = "pushState"in window.history ? "popstate" : "hashchange";
        xe(window, t, e)
    }
    function Te(e) {
        var t = location.href
          , r = window.history.pushState
          , a = window.history.replaceState;
        i(window.history.pushState) && (window.history.pushState = function() {
            r.apply(window.history, arguments),
            e(t),
            t = location.href
        }
        ),
        i(window.history.replaceState) && (window.history.replaceState = function() {
            a.apply(window.history, arguments),
            e(t),
            t = location.href
        }
        );
        var n;
        n = window.document.documentMode ? "hashchange" : r ? "popstate" : "hashchange",
        xe(window, n, function() {
            e(t),
            t = location.href
        })
    }
    function Ae(e) {
        var t = {
            visibleHandler: i(e.visible) ? e.visible : function() {}
            ,
            hiddenHandler: i(e.hidden) ? e.hidden : function() {}
            ,
            visibilityChange: null,
            hidden: null,
            isSupport: function() {
                return "undefined" != typeof document[this.hidden]
            },
            init: function() {
                "undefined" != typeof document.hidden ? (this.hidden = "hidden",
                this.visibilityChange = "visibilitychange") : "undefined" != typeof document.mozHidden ? (this.hidden = "mozHidden",
                this.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (this.hidden = "msHidden",
                this.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (this.hidden = "webkitHidden",
                this.visibilityChange = "webkitvisibilitychange"),
                this.listen()
            },
            listen: function() {
                if (this.isSupport()) {
                    var e = this;
                    xe(document, this.visibilityChange, function() {
                        document[e.hidden] ? e.hiddenHandler() : e.visibleHandler()
                    }, 1)
                } else
                    xe(window, "focus", this.visibleHandler),
                    xe(window, "blur", this.hiddenHandler)
            }
        };
        t.init()
    }
    function Ee(e, t) {
        t = t || window;
        var r = !1
          , a = !0
          , n = t.document
          , i = n.documentElement
          , s = n.addEventListener
          , o = s ? "addEventListener" : "attachEvent"
          , c = s ? "removeEventListener" : "detachEvent"
          , l = s ? "" : "on"
          , u = function(a) {
            "readystatechange" == a.type && "complete" != n.readyState || (("load" == a.type ? t : n)[c](l + a.type, u, !1),
            !r && (r = !0) && e.call(t, a.type || a))
        }
          , p = function() {
            try {
                i.doScroll("left")
            } catch (e) {
                return void setTimeout(p, 50)
            }
            u("poll")
        };
        if ("complete" == n.readyState)
            e.call(t, "lazy");
        else {
            if (!s && i.doScroll) {
                try {
                    a = !t.frameElement
                } catch (d) {
                    L(d)
                }
                a && p()
            }
            n[o](l + "DOMContentLoaded", u, !1),
            n[o](l + "readystatechange", u, !1),
            t[o](l + "load", u, !1)
        }
    }
    function Ie(e) {
        if (e)
            return "undefined" != typeof window.XMLHttpRequest && "withCredentials"in new XMLHttpRequest ? new XMLHttpRequest : "undefined" != typeof XDomainRequest ? new XDomainRequest : null;
        if ("undefined" != typeof window.XMLHttpRequest)
            return new XMLHttpRequest;
        if (window.ActiveXObject)
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (t) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {
                    L(t)
                }
            }
    }
    function Le(t) {
        function a(e) {
            if (!e)
                return "";
            try {
                return JSON.parse(e)
            } catch (t) {
                return {}
            }
        }
        function n() {
            try {
                _(i) && i.abort && i.abort()
            } catch (e) {
                L(e)
            }
            s && (clearTimeout(s),
            s = null,
            t.error && t.error(),
            i.onreadystatechange = null,
            i.onload = null,
            i.onerror = null)
        }
        t.timeout = t.timeout || 2e4,
        t.credentials = "undefined" == typeof t.credentials || t.credentials;
        var i = Ie(t.cors);
        if (!i)
            return !1;
        t.type || (t.type = t.data ? "POST" : "GET"),
        t = r({
            success: function() {},
            error: function() {}
        }, t),
        pt.protocol.ajax(t.url);
        var s, o = t.success, c = t.error;
        t.success = function(e) {
            o(e),
            s && (clearTimeout(s),
            s = null)
        }
        ,
        t.error = function(e) {
            c(e),
            s && (clearTimeout(s),
            s = null)
        }
        ,
        s = setTimeout(function() {
            n()
        }, t.timeout),
        "undefined" != typeof XDomainRequest && i instanceof XDomainRequest && (i.onload = function() {
            t.success && t.success(a(i.responseText)),
            i.onreadystatechange = null,
            i.onload = null,
            i.onerror = null
        }
        ,
        i.onerror = function() {
            t.error && t.error(a(i.responseText), i.status),
            i.onreadystatechange = null,
            i.onerror = null,
            i.onload = null
        }
        ),
        i.onreadystatechange = function() {
            try {
                4 == i.readyState && (i.status >= 200 && i.status < 300 || 304 == i.status ? t.success(a(i.responseText)) : t.error(a(i.responseText), i.status),
                i.onreadystatechange = null,
                i.onload = null)
            } catch (e) {
                i.onreadystatechange = null,
                i.onload = null
            }
        }
        ,
        i.open(t.type, t.url, !0);
        try {
            t.credentials && (i.withCredentials = !0),
            _(t.header) && e(t.header, function(e, t) {
                i.setRequestHeader && i.setRequestHeader(t, e)
            }),
            t.data && (t.cors || i.setRequestHeader && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            "application/json" === t.contentType ? i.setRequestHeader && i.setRequestHeader("Content-type", "application/json; charset=UTF-8") : i.setRequestHeader && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
        } catch (l) {
            L(l)
        }
        i.send(t.data || null)
    }
    function He(t) {
        if (!_(t) || !v(t.callbackName))
            return L("JSONP \u8bf7\u6c42\u7f3a\u5c11 callbackName"),
            !1;
        t.success = i(t.success) ? t.success : function() {}
        ,
        t.error = i(t.error) ? t.error : function() {}
        ,
        t.data = t.data || "";
        var r = document.createElement("script")
          , a = document.getElementsByTagName("head")[0]
          , n = null
          , s = !1;
        if (a.appendChild(r),
        w(t.timeout) && (n = setTimeout(function() {
            return !s && (t.error("timeout"),
            window[t.callbackName] = function() {
                L("call jsonp error")
            }
            ,
            n = null,
            a.removeChild(r),
            void (s = !0))
        }, t.timeout)),
        window[t.callbackName] = function() {
            clearTimeout(n),
            n = null,
            t.success.apply(null, arguments),
            window[t.callbackName] = function() {
                L("call jsonp error")
            }
            ,
            a.removeChild(r)
        }
        ,
        t.url.indexOf("?") > -1 ? t.url += "&callbackName=" + t.callbackName : t.url += "?callbackName=" + t.callbackName,
        _(t.data)) {
            var o = [];
            e(t.data, function(e, t) {
                o.push(t + "=" + e)
            }),
            t.data = o.join("&"),
            t.url += "&" + t.data
        }
        r.onerror = function(e) {
            return !s && (window[t.callbackName] = function() {
                L("call jsonp error")
            }
            ,
            clearTimeout(n),
            n = null,
            a.removeChild(r),
            t.error(e),
            void (s = !0))
        }
        ,
        r.src = t.url
    }
    function Re(e) {
        var t = !0;
        for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r) && !$t.check(r, e[r]))
                return !1;
        return t
    }
    function Ue(e, t) {
        var r = Ot.encodeTrackData(t);
        return e.indexOf("?") !== -1 ? e + "&" + r : e + "?" + r
    }
    function Je(e) {
        return Ot.encodeTrackData(e)
    }
    function qe(e) {
        var t = ["image", "ajax", "beacon"]
          , r = t[0];
        return r = e.config && u(t, e.config.send_type) > -1 ? e.config.send_type : Xe.para.send_type,
        "beacon" === r && je() === !1 && (r = "image"),
        "ajax" === r && Pe() === !1 && (r = "image"),
        r
    }
    function Be(e) {
        var t = qe(e);
        switch (t) {
        case "image":
            return new jt(e);
        case "ajax":
            return new xt(e);
        case "beacon":
            return new Dt(e);
        default:
            return new jt(e)
        }
    }
    function Me(e) {
        var t = Be(e)
          , r = t.start;
        return t.start = function() {
            var e = this;
            r.apply(this, arguments),
            setTimeout(function() {
                e.isEnd(!0)
            }, Xe.para.callback_timeout)
        }
        ,
        t.end = function() {
            this.callback && this.callback();
            var e = this;
            setTimeout(function() {
                e.lastClear && e.lastClear()
            }, Xe.para.datasend_timeout - Xe.para.callback_timeout)
        }
        ,
        t.isEnd = function() {
            this.received || (this.received = !0,
            this.end())
        }
        ,
        t
    }
    function Ke() {
        e(At, function(e) {
            var t = Xe[e];
            Xe[e] = function() {
                if (Xe.readyState.state < 3)
                    return nt(Xe._q) || (Xe._q = []),
                    Xe._q.push([e, arguments]),
                    !1;
                {
                    if (Xe.readyState.getState())
                        return t.apply(Xe, arguments);
                    try {
                        console.error("\u8bf7\u5148\u521d\u59cb\u5316\u795e\u7b56JS SDK")
                    } catch (r) {
                        Xe.log(r)
                    }
                }
            }
        })
    }
    function Fe() {
        Xe.para.is_track_single_page && Te(function(e) {
            var t = function(t) {
                t = t || {},
                e !== location.href && (gt.pageProp.referrer = Y(e),
                Xe.quick("autoTrack", r({
                    $url: Y(),
                    $referrer: Y(e)
                }, t)))
            };
            if ("boolean" == typeof Xe.para.is_track_single_page)
                t();
            else if ("function" == typeof Xe.para.is_track_single_page) {
                var a = Xe.para.is_track_single_page();
                _(a) ? t(a) : a === !0 && t()
            }
        })
    }
    function We() {
        Xe._q && nt(Xe._q) && Xe._q.length > 0 && e(Xe._q, function(e) {
            Xe[e[0]].apply(Xe, Array.prototype.slice.call(e[1]))
        }),
        _(Xe.para.heatmap) && (Ct.initHeatmap(),
        Ct.initScrollmap())
    }
    function ze() {
        Xe.readyState.setState(3),
        gt.initPage(),
        Fe(),
        Xe.store.init(),
        Xe.readyState.setState(4),
        We()
    }
    function Ve() {}
    var Xe = {};
    (function() {
        function e(a, n) {
            function i(e, t) {
                try {
                    e()
                } catch (r) {
                    t && t()
                }
            }
            function s(e) {
                if (null != s[e])
                    return s[e];
                var t;
                if ("bug-string-char-index" == e)
                    t = "a" != "a"[0];
                else if ("json" == e)
                    t = s("json-stringify") && s("date-serialization") && s("json-parse");
                else if ("date-serialization" == e) {
                    if (t = s("json-stringify") && b) {
                        var r = n.stringify;
                        i(function() {
                            t = '"-271821-04-20T00:00:00.000Z"' == r(new p((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == r(new p(864e13)) && '"-000001-01-01T00:00:00.000Z"' == r(new p((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == r(new p((-1)))
                        })
                    }
                } else {
                    var a, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if ("json-stringify" == e) {
                        var r = n.stringify
                          , u = "function" == typeof r;
                        u && ((a = function() {
                            return 1
                        }
                        ).toJSON = a,
                        i(function() {
                            u = "0" === r(0) && "0" === r(new c) && '""' == r(new l) && r(v) === g && r(g) === g && r() === g && "1" === r(a) && "[1]" == r([a]) && "[null]" == r([g]) && "null" == r(null) && "[null,null,null]" == r([g, v, null]) && r({
                                a: [a, !0, !1, null, "\0\b\n\f\r\t"]
                            }) == o && "1" === r(null, a) && "[\n 1,\n 2\n]" == r([1, 2], null, 1)
                        }, function() {
                            u = !1
                        })),
                        t = u
                    }
                    if ("json-parse" == e) {
                        var d, f = n.parse;
                        "function" == typeof f && i(function() {
                            0 !== f("0") || f(!1) || (a = f(o),
                            d = 5 == a.a.length && 1 === a.a[0],
                            d && (i(function() {
                                d = !f('"\t"')
                            }),
                            d && i(function() {
                                d = 1 !== f("01")
                            }),
                            d && i(function() {
                                d = 1 !== f("1.")
                            })))
                        }, function() {
                            d = !1
                        }),
                        t = d
                    }
                }
                return s[e] = !!t
            }
            function o(e) {
                return T(this)
            }
            a || (a = r.Object()),
            n || (n = r.Object());
            var c = a.Number || r.Number
              , l = a.String || r.String
              , u = a.Object || r.Object
              , p = a.Date || r.Date
              , d = a.SyntaxError || r.SyntaxError
              , f = a.TypeError || r.TypeError
              , _ = a.Math || r.Math
              , h = a.JSON || r.JSON;
            "object" == typeof h && h && (n.stringify = h.stringify,
            n.parse = h.parse);
            var g, m = u.prototype, v = m.toString, y = m.hasOwnProperty, b = new p((-0xc782b5b800cec));
            if (i(function() {
                b = b.getUTCFullYear() == -109252 && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
            }),
            s["bug-string-char-index"] = s["date-serialization"] = s.json = s["json-stringify"] = s["json-parse"] = null,
            !s("json")) {
                var w = "[object Function]"
                  , S = "[object Date]"
                  , k = "[object Number]"
                  , $ = "[object String]"
                  , P = "[object Array]"
                  , C = "[object Boolean]"
                  , N = s("bug-string-char-index")
                  , O = function(e, r) {
                    var a, n, i, s = 0;
                    (a = function() {
                        this.valueOf = 0
                    }
                    ).prototype.valueOf = 0,
                    n = new a;
                    for (i in n)
                        y.call(n, i) && s++;
                    return a = n = null,
                    s ? O = function(e, t) {
                        var r, a, n = v.call(e) == w;
                        for (r in e)
                            n && "prototype" == r || !y.call(e, r) || (a = "constructor" === r) || t(r);
                        (a || y.call(e, r = "constructor")) && t(r)
                    }
                    : (n = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                    O = function(e, r) {
                        var a, i, s = v.call(e) == w, o = !s && "function" != typeof e.constructor && t[typeof e.hasOwnProperty] && e.hasOwnProperty || y;
                        for (a in e)
                            s && "prototype" == a || !o.call(e, a) || r(a);
                        for (i = n.length; a = n[--i]; )
                            o.call(e, a) && r(a)
                    }
                    ),
                    O(e, r)
                };
                if (!s("json-stringify") && !s("date-serialization")) {
                    var j = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    }
                      , x = "000000"
                      , D = function(e, t) {
                        return (x + (t || 0)).slice(-e)
                    }
                      , T = function(e) {
                        var t, r, a, n, i, s, o, c, l;
                        if (b)
                            t = function(e) {
                                r = e.getUTCFullYear(),
                                a = e.getUTCMonth(),
                                n = e.getUTCDate(),
                                s = e.getUTCHours(),
                                o = e.getUTCMinutes(),
                                c = e.getUTCSeconds(),
                                l = e.getUTCMilliseconds()
                            }
                            ;
                        else {
                            var u = _.floor
                              , p = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                              , d = function(e, t) {
                                return p[t] + 365 * (e - 1970) + u((e - 1969 + (t = +(t > 1))) / 4) - u((e - 1901 + t) / 100) + u((e - 1601 + t) / 400)
                            };
                            t = function(e) {
                                for (n = u(e / 864e5),
                                r = u(n / 365.2425) + 1970 - 1; d(r + 1, 0) <= n; r++)
                                    ;
                                for (a = u((n - d(r, 0)) / 30.42); d(r, a + 1) <= n; a++)
                                    ;
                                n = 1 + n - d(r, a),
                                i = (e % 864e5 + 864e5) % 864e5,
                                s = u(i / 36e5) % 24,
                                o = u(i / 6e4) % 60,
                                c = u(i / 1e3) % 60,
                                l = i % 1e3
                            }
                        }
                        return (T = function(e) {
                            return e > -1 / 0 && e < 1 / 0 ? (t(e),
                            e = (r <= 0 || r >= 1e4 ? (r < 0 ? "-" : "+") + D(6, r < 0 ? -r : r) : D(4, r)) + "-" + D(2, a + 1) + "-" + D(2, n) + "T" + D(2, s) + ":" + D(2, o) + ":" + D(2, c) + "." + D(3, l) + "Z",
                            r = a = n = s = o = c = l = null) : e = null,
                            e
                        }
                        )(e)
                    };
                    if (s("json-stringify") && !s("date-serialization")) {
                        var A = n.stringify;
                        n.stringify = function(e, t, r) {
                            var a = p.prototype.toJSON;
                            p.prototype.toJSON = o;
                            var n = A(e, t, r);
                            return p.prototype.toJSON = a,
                            n
                        }
                    } else {
                        var E = "\\u00"
                          , I = function(e) {
                            var t = e.charCodeAt(0)
                              , r = j[t];
                            return r ? r : E + D(2, t.toString(16))
                        }
                          , L = /[\x00-\x1f\x22\x5c]/g
                          , H = function(e) {
                            return L.lastIndex = 0,
                            '"' + (L.test(e) ? e.replace(L, I) : e) + '"'
                        }
                          , R = function(e, t, r, a, n, s, o) {
                            var c, l, u, d, _, h, m, y, b;
                            if (i(function() {
                                c = t[e]
                            }),
                            "object" == typeof c && c && (c.getUTCFullYear && v.call(c) == S && c.toJSON === p.prototype.toJSON ? c = T(c) : "function" == typeof c.toJSON && (c = c.toJSON(e))),
                            r && (c = r.call(t, e, c)),
                            c == g)
                                return c === g ? c : "null";
                            switch (l = typeof c,
                            "object" == l && (u = v.call(c)),
                            u || l) {
                            case "boolean":
                            case C:
                                return "" + c;
                            case "number":
                            case k:
                                return c > -1 / 0 && c < 1 / 0 ? "" + c : "null";
                            case "string":
                            case $:
                                return H("" + c)
                            }
                            if ("object" == typeof c) {
                                for (m = o.length; m--; )
                                    if (o[m] === c)
                                        throw f();
                                if (o.push(c),
                                d = [],
                                y = s,
                                s += n,
                                u == P) {
                                    for (h = 0,
                                    m = c.length; h < m; h++)
                                        _ = R(h, c, r, a, n, s, o),
                                        d.push(_ === g ? "null" : _);
                                    b = d.length ? n ? "[\n" + s + d.join(",\n" + s) + "\n" + y + "]" : "[" + d.join(",") + "]" : "[]"
                                } else
                                    O(a || c, function(e) {
                                        var t = R(e, c, r, a, n, s, o);
                                        t !== g && d.push(H(e) + ":" + (n ? " " : "") + t)
                                    }),
                                    b = d.length ? n ? "{\n" + s + d.join(",\n" + s) + "\n" + y + "}" : "{" + d.join(",") + "}" : "{}";
                                return o.pop(),
                                b
                            }
                        };
                        n.stringify = function(e, r, a) {
                            var n, i, s, o;
                            if (t[typeof r] && r)
                                if (o = v.call(r),
                                o == w)
                                    i = r;
                                else if (o == P) {
                                    s = {};
                                    for (var c, l = 0, u = r.length; l < u; )
                                        c = r[l++],
                                        o = v.call(c),
                                        "[object String]" != o && "[object Number]" != o || (s[c] = 1)
                                }
                            if (a)
                                if (o = v.call(a),
                                o == k) {
                                    if ((a -= a % 1) > 0)
                                        for (a > 10 && (a = 10),
                                        n = ""; n.length < a; )
                                            n += " "
                                } else
                                    o == $ && (n = a.length <= 10 ? a : a.slice(0, 10));
                            return R("", (c = {},
                            c[""] = e,
                            c), i, s, n, "", [])
                        }
                    }
                }
                if (!s("json-parse")) {
                    var U, J, q = l.fromCharCode, B = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    }, M = function() {
                        throw U = J = null,
                        d()
                    }, K = function() {
                        for (var e, t, r, a, n, i = J, s = i.length; U < s; )
                            switch (n = i.charCodeAt(U)) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                U++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return e = N ? i.charAt(U) : i[U],
                                U++,
                                e;
                            case 34:
                                for (e = "@",
                                U++; U < s; )
                                    if (n = i.charCodeAt(U),
                                    n < 32)
                                        M();
                                    else if (92 == n)
                                        switch (n = i.charCodeAt(++U)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            e += B[n],
                                            U++;
                                            break;
                                        case 117:
                                            for (t = ++U,
                                            r = U + 4; U < r; U++)
                                                n = i.charCodeAt(U),
                                                n >= 48 && n <= 57 || n >= 97 && n <= 102 || n >= 65 && n <= 70 || M();
                                            e += q("0x" + i.slice(t, U));
                                            break;
                                        default:
                                            M()
                                        }
                                    else {
                                        if (34 == n)
                                            break;
                                        for (n = i.charCodeAt(U),
                                        t = U; n >= 32 && 92 != n && 34 != n; )
                                            n = i.charCodeAt(++U);
                                        e += i.slice(t, U)
                                    }
                                if (34 == i.charCodeAt(U))
                                    return U++,
                                    e;
                                M();
                            default:
                                if (t = U,
                                45 == n && (a = !0,
                                n = i.charCodeAt(++U)),
                                n >= 48 && n <= 57) {
                                    for (48 == n && (n = i.charCodeAt(U + 1),
                                    n >= 48 && n <= 57) && M(),
                                    a = !1; U < s && (n = i.charCodeAt(U),
                                    n >= 48 && n <= 57); U++)
                                        ;
                                    if (46 == i.charCodeAt(U)) {
                                        for (r = ++U; r < s && (n = i.charCodeAt(r),
                                        !(n < 48 || n > 57)); r++)
                                            ;
                                        r == U && M(),
                                        U = r
                                    }
                                    if (n = i.charCodeAt(U),
                                    101 == n || 69 == n) {
                                        for (n = i.charCodeAt(++U),
                                        43 != n && 45 != n || U++,
                                        r = U; r < s && (n = i.charCodeAt(r),
                                        !(n < 48 || n > 57)); r++)
                                            ;
                                        r == U && M(),
                                        U = r
                                    }
                                    return +i.slice(t, U)
                                }
                                a && M();
                                var o = i.slice(U, U + 4);
                                if ("true" == o)
                                    return U += 4,
                                    !0;
                                if ("fals" == o && 101 == i.charCodeAt(U + 4))
                                    return U += 5,
                                    !1;
                                if ("null" == o)
                                    return U += 4,
                                    null;
                                M()
                            }
                        return "$"
                    }, F = function(e) {
                        var t, r;
                        if ("$" == e && M(),
                        "string" == typeof e) {
                            if ("@" == (N ? e.charAt(0) : e[0]))
                                return e.slice(1);
                            if ("[" == e) {
                                for (t = []; e = K(),
                                "]" != e; )
                                    r ? "," == e ? (e = K(),
                                    "]" == e && M()) : M() : r = !0,
                                    "," == e && M(),
                                    t.push(F(e));
                                return t
                            }
                            if ("{" == e) {
                                for (t = {}; e = K(),
                                "}" != e; )
                                    r ? "," == e ? (e = K(),
                                    "}" == e && M()) : M() : r = !0,
                                    "," != e && "string" == typeof e && "@" == (N ? e.charAt(0) : e[0]) && ":" == K() || M(),
                                    t[e.slice(1)] = F(K());
                                return t
                            }
                            M()
                        }
                        return e
                    }, W = function(e, t, r) {
                        var a = z(e, t, r);
                        a === g ? delete e[t] : e[t] = a
                    }, z = function(e, t, r) {
                        var a, n = e[t];
                        if ("object" == typeof n && n)
                            if (v.call(n) == P)
                                for (a = n.length; a--; )
                                    W(v, O, n, a, r);
                            else
                                O(n, function(e) {
                                    W(n, e, r)
                                });
                        return r.call(e, t, n)
                    };
                    n.parse = function(e, t) {
                        var r, a;
                        return U = 0,
                        J = "" + e,
                        r = F(K()),
                        "$" != K() && M(),
                        U = J = null,
                        t && v.call(t) == w ? z((a = {},
                        a[""] = r,
                        a), "", t) : r
                    }
                }
            }
            return n.runInContext = e,
            n
        }
        var t = {
            "function": !0,
            object: !0
        }
          , r = t[typeof window] && window || this
          , a = r.JSON
          , n = r.JSON3
          , i = !1
          , s = e(r, r.JSON3 = {
            noConflict: function() {
                return i || (i = !0,
                r.JSON = a,
                r.JSON3 = n,
                a = n = null),
                s
            }
        });
        r.JSON = {
            parse: s.parse,
            stringify: s.stringify
        }
    }
    ).call(window),
    function(e, t) {
        t(e)
    }(window, function(e) {
        if (e.atob)
            try {
                e.atob(" ")
            } catch (t) {
                e.atob = function(e) {
                    var t = function(t) {
                        return e(String(t).replace(/[\t\n\f\r ]+/g, ""))
                    };
                    return t.original = e,
                    t
                }(e.atob)
            }
        else {
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
              , a = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
            e.btoa = function(e) {
                e = String(e);
                for (var t, a, n, i, s = "", o = 0, c = e.length % 3; o < e.length; ) {
                    if ((a = e.charCodeAt(o++)) > 255 || (n = e.charCodeAt(o++)) > 255 || (i = e.charCodeAt(o++)) > 255)
                        return "";
                    t = a << 16 | n << 8 | i,
                    s += r.charAt(t >> 18 & 63) + r.charAt(t >> 12 & 63) + r.charAt(t >> 6 & 63) + r.charAt(63 & t)
                }
                return c ? s.slice(0, c - 3) + "===".substring(c) : s
            }
            ,
            e.atob = function(e) {
                if (e = String(e).replace(/[\t\n\f\r ]+/g, ""),
                !a.test(e))
                    return "";
                e += "==".slice(2 - (3 & e.length));
                for (var t, n, i, s = "", o = 0; o < e.length; )
                    t = r.indexOf(e.charAt(o++)) << 18 | r.indexOf(e.charAt(o++)) << 12 | (n = r.indexOf(e.charAt(o++))) << 6 | (i = r.indexOf(e.charAt(o++))),
                    s += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === i ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
                return s
            }
        }
    }),
    function() {
        String.prototype.replaceAll || (String.prototype.replaceAll = function(e, t) {
            return "[object regexp]" === Object.prototype.toString.call(e).toLowerCase() ? this.replace(e, t) : this.replace(new RegExp(e,"g"), t)
        }
        )
    }();
    var Ze = Array.prototype
      , Qe = Ze.forEach
      , Ye = Ze.slice
      , Ge = Array.isArray
      , et = Object.prototype
      , tt = et.toString
      , rt = et.hasOwnProperty
      , at = {}
      , nt = Ge || function(e) {
        return "[object Array]" === tt.call(e)
    }
      , it = function() {
        function e() {
            return r = (9301 * r + 49297) % 233280,
            r / 233280
        }
        var t = new Date
          , r = t.getTime();
        return function(t) {
            return Math.ceil(e() * t)
        }
    }()
      , st = Date.now || function() {
        return (new Date).getTime()
    }
      , ot = {}
      , ct = {
        preset_properties: {
            search_keyword_baidu: !1,
            latest_utm: !0,
            latest_traffic_source_type: !0,
            latest_search_keyword: !0,
            latest_referrer: !0,
            latest_referrer_host: !1,
            latest_landing_page: !1,
            latest_wx_ad_click_id: void 0,
            url: !0,
            title: !0
        },
        encrypt_cookie: !1,
        img_use_crossorigin: !1,
        name: "sa",
        max_referrer_string_length: 200,
        max_string_length: 500,
        cross_subdomain: !0,
        show_log: !1,
        is_debug: !1,
        debug_mode: !1,
        debug_mode_upload: !1,
        source_channel: [],
        sdk_id: "",
        send_type: "image",
        vtrack_ignore: {},
        auto_init: !0,
        is_track_single_page: !1,
        is_single_page: !1,
        batch_send: !1,
        source_type: {},
        callback_timeout: 200,
        datasend_timeout: 8e3,
        is_track_device_id: !1,
        ignore_oom: !0,
        app_js_bridge: !1
    };
    q.init = function(e) {
        this.ele = e
    }
    ,
    q.init.prototype = {
        addClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") === -1 && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e),
            this
        },
        removeClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") !== -1 && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)),
            this
        },
        hasClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") !== -1
        },
        attr: function(e, t) {
            return "string" == typeof e && g(t) ? this.ele.getAttribute(e) : ("string" == typeof e && (t = String(t),
            this.ele.setAttribute(e, t)),
            this)
        },
        offset: function() {
            var e = this.ele.getBoundingClientRect();
            if (e.width || e.height) {
                var t = this.ele.ownerDocument
                  , r = t.documentElement;
                return {
                    top: e.top + window.pageYOffset - r.clientTop,
                    left: e.left + window.pageXOffset - r.clientLeft
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        getSize: function() {
            if (!window.getComputedStyle)
                return {
                    width: this.ele.offsetWidth,
                    height: this.ele.offsetHeight
                };
            try {
                var e = this.ele.getBoundingClientRect();
                return {
                    width: e.width,
                    height: e.height
                }
            } catch (t) {
                return {
                    width: 0,
                    height: 0
                }
            }
        },
        getStyle: function(e) {
            return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e)
        },
        wrap: function(e) {
            var t = document.createElement(e);
            return this.ele.parentNode.insertBefore(t, this.ele),
            t.appendChild(this.ele),
            q(t)
        },
        getCssStyle: function(e) {
            var t = this.ele.style.getPropertyValue(e);
            if (t)
                return t;
            var r = null;
            if ("function" == typeof window.getMatchedCSSRules && (r = window.getMatchedCSSRules(this.ele)),
            !r || !nt(r))
                return null;
            for (var a = r.length - 1; a >= 0; a--) {
                var n = r[a];
                if (t = n.style.getPropertyValue(e))
                    return t
            }
        },
        sibling: function(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        },
        next: function() {
            return this.sibling(this.ele, "nextSibling")
        },
        prev: function() {
            return this.sibling(this.ele, "previousSibling")
        },
        siblings: function() {
            return this.siblings((this.ele.parentNode || {}).firstChild, this.ele)
        },
        children: function() {
            return this.siblings(this.ele.firstChild)
        },
        parent: function() {
            var e = this.ele.parentNode;
            return e = e && 11 !== e.nodeType ? e : null,
            q(e)
        },
        previousElementSibling: function() {
            var e = this.ele;
            if ("previousElementSibling"in document.documentElement)
                return q(e.previousElementSibling);
            for (; e = e.previousSibling; )
                if (1 === e.nodeType)
                    return q(e);
            return q(null)
        },
        getSameTypeSiblings: function() {
            for (var e = this.ele, t = e.parentNode, r = e.tagName.toLowerCase(), a = [], n = 0; n < t.children.length; n++) {
                var i = t.children[n];
                1 === i.nodeType && i.tagName.toLowerCase() === r && a.push(t.children[n])
            }
            return a
        },
        getParents: function() {
            try {
                var e = this.ele;
                if (!S(e))
                    return [];
                var t = [e];
                if (null === e || null === e.parentElement)
                    return [];
                for (; null !== e.parentElement; )
                    e = e.parentElement,
                    t.push(e);
                return t
            } catch (r) {
                return []
            }
        }
    };
    var lt = {
        isHttpUrl: function(e) {
            if ("string" != typeof e)
                return !1;
            var t = /^https?:\/\/.+/;
            return t.test(e) !== !1 || (L("Invalid URL"),
            !1)
        },
        removeScriptProtocol: function(e) {
            if ("string" != typeof e)
                return "";
            for (var t = /^\s*javascript/i; t.test(e); )
                e = e.replace(t, "");
            return e
        }
    }
      , ut = function() {
        var e = {
            "+": "-",
            "/": "_",
            "=": "."
        }
          , t = {
            "-": "+",
            _: "/",
            ".": "="
        }
          , r = function(t) {
            return t.replace(/[+\/=]/g, function(t) {
                return e[t]
            })
        }
          , a = function(e) {
            return e.replace(/[-_.]/g, function(e) {
                return t[e]
            })
        }
          , n = function(e) {
            return e.replace(/[.=]{1,2}$/, "")
        }
          , i = function(e) {
            return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)
        }
          , s = function(e) {
            return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)
        };
        return {
            encode: r,
            decode: a,
            trim: n,
            isBase64: i,
            isUrlSafeBase64: s
        }
    }()
      , pt = {
        distinct_id: function() {},
        jssdkDebug: function() {},
        _sendDebug: function(e) {},
        apph5: function(e) {
            var t = "app_h5\u6253\u901a\u5931\u8d25-"
              , r = {
                1: t + "use_app_track\u4e3afalse",
                2: t + "Android\u6216\u8005iOS\uff0c\u6ca1\u6709\u66b4\u9732\u76f8\u5e94\u65b9\u6cd5",
                3.1: t + "Android\u6821\u9a8cserver_url\u5931\u8d25",
                3.2: t + "iOS\u6821\u9a8cserver_url\u5931\u8d25",
                4.1: t + "H5 \u6821\u9a8c iOS server_url \u5931\u8d25",
                4.2: t + "H5 \u6821\u9a8c Android server_url \u5931\u8d25"
            }
              , a = e.output
              , n = e.step
              , i = e.data || "";
            "all" !== a && "console" !== a || L(r[n]),
            ("all" === a || "code" === a) && _(ot.is_debug) && ot.is_debug.apph5 && (i.type && "profile" === i.type.slice(0, 7) || (i.properties._jssdk_debug_info = "apph5-" + String(n)))
        },
        defineMode: function(e) {
            var t = {
                1: {
                    title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                    message: "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 App SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                    link_text: "\u914d\u7f6e\u6587\u6863",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                },
                2: {
                    title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                    message: "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 Web JS SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                    link_text: "\u914d\u7f6e\u6587\u6863",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                },
                3: {
                    title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                    message: "Web JS SDK \u6ca1\u6709\u5f00\u542f\u5168\u57cb\u70b9\u914d\u7f6e\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                    link_text: "\u914d\u7f6e\u6587\u6863",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html"
                },
                4: {
                    title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                    message: "Web JS SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0e App SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0d\u4e00\u81f4\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                    link_text: "\u914d\u7f6e\u6587\u6863",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                }
            };
            return !(!e || !t[e]) && t[e]
        },
        protocol: {
            protocolIsSame: function(e, t) {
                try {
                    if (X(e).protocol !== X(t).protocol)
                        return !1
                } catch (r) {
                    return L("\u4e0d\u652f\u6301 _.URL \u65b9\u6cd5"),
                    !1
                }
                return !0
            },
            serverUrl: function() {
                v(ot.server_url) && "" !== ot.server_url && !this.protocolIsSame(ot.server_url, location.href) && L("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\n\u56e0\u4e3a\uff1a1\u3001https \u4e0b\u9762\u53d1\u9001 http \u7684\u56fe\u7247\u8bf7\u6c42\u4f1a\u5931\u8d25\u30022\u3001http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002")
            },
            ajax: function(e) {
                return e !== ot.server_url && void (v(e) && "" !== e && !this.protocolIsSame(e, location.href) && L("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\u56e0\u4e3a http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002"))
            }
        }
    }
      , dt = "utm_source utm_medium utm_campaign utm_content utm_term"
      , ft = "1.19.14"
      , _t = function() {
        var e = function() {
            for (var e = 1 * new Date, t = 0; e == 1 * new Date; )
                t++;
            return e.toString(16) + t.toString(16)
        }
          , t = function() {
            return N().toString(16).replace(".", "")
        }
          , r = function() {
            function e(e, t) {
                var r, a = 0;
                for (r = 0; r < t.length; r++)
                    a |= n[r] << 8 * r;
                return e ^ a
            }
            var t, r, a = navigator.userAgent, n = [], i = 0;
            for (t = 0; t < a.length; t++)
                r = a.charCodeAt(t),
                n.unshift(255 & r),
                n.length >= 4 && (i = e(i, n),
                n = []);
            return n.length > 0 && (i = e(i, n)),
            i.toString(16)
        };
        return function() {
            var a = String(screen.height * screen.width);
            a = a && /\d{5,}/.test(a) ? a.toString(16) : String(31242 * N()).replace(".", "").slice(0, 8);
            var n = e() + "-" + t() + "-" + r() + "-" + a + "-" + e();
            return n ? n : (String(N()) + String(N()) + String(N())).slice(2, 15)
        }
    }()
      , ht = {
        data: {},
        id: function() {
            return this.data.id ? this.data.id : (this.data.id = fe(),
            this.data.id)
        },
        type: function() {
            return this.data.type ? this.data.type : (this.data.type = _e(),
            this.data.type)
        }
    }
      , gt = {
        initPage: function() {
            var e = me()
              , t = Y()
              , r = ue(t);
            r || pt.jssdkDebug("url_domain\u5f02\u5e38_" + t + "_" + r),
            this.pageProp = {
                referrer: e,
                referrer_host: e ? Z(e) : "",
                url: t,
                url_host: Z(t, "url_host\u53d6\u503c\u5f02\u5e38"),
                url_domain: r
            }
        },
        pageProp: {},
        campaignParams: function() {
            var t = dt.split(" ")
              , r = ""
              , a = {};
            return nt(ot.source_channel) && ot.source_channel.length > 0 && (t = t.concat(ot.source_channel),
            t = j(t)),
            e(t, function(e) {
                r = W(location.href, e),
                r.length && (a[e] = r)
            }),
            a
        },
        campaignParamsStandard: function(t, r) {
            t = t || "",
            r = r || "";
            var a = gt.campaignParams()
              , n = {}
              , i = {};
            return e(a, function(e, a, s) {
                (" " + dt + " ").indexOf(" " + a + " ") !== -1 ? n[t + a] = s[a] : i[r + a] = s[a]
            }),
            {
                $utms: n,
                otherUtms: i
            }
        },
        properties: function() {
            return {
                $timezone_offset: (new Date).getTimezoneOffset(),
                $screen_height: Number(screen.height) || 0,
                $screen_width: Number(screen.width) || 0,
                $lib: "js",
                $lib_version: ft
            }
        },
        currentProps: {},
        register: function(e) {
            r(gt.currentProps, e)
        }
    }
      , mt = {
        get: function(e) {
            for (var t = e + "=", r = document.cookie.split(";"), a = 0; a < r.length; a++) {
                for (var n = r[a]; " " == n.charAt(0); )
                    n = n.substring(1, n.length);
                if (0 == n.indexOf(t))
                    return K(n.substring(t.length, n.length))
            }
            return null
        },
        set: function(e, t, r, a) {
            function n(e) {
                return !!e && e.replaceAll(/\r\n/g, "")
            }
            a = "undefined" == typeof a ? ot.cross_subdomain : a;
            var i = ""
              , s = ""
              , o = ""
              , c = "";
            if (r = null == r ? 73e3 : r,
            a) {
                var l = ue(location.href);
                "url\u89e3\u6790\u5931\u8d25" === l && (l = ""),
                i = l ? "; domain=" + l : ""
            }
            if (0 !== r) {
                var u = new Date;
                "s" === String(r).slice(-1) ? u.setTime(u.getTime() + 1e3 * Number(String(r).slice(0, -1))) : u.setTime(u.getTime() + 24 * r * 60 * 60 * 1e3),
                s = "; expires=" + u.toGMTString()
            }
            v(ot.set_cookie_samesite) && "" !== ot.set_cookie_samesite && (c = "; SameSite=" + ot.set_cookie_samesite),
            ot.is_secure_cookie && (o = "; secure");
            var p = ""
              , d = ""
              , f = "";
            e && (p = n(e)),
            t && (d = n(t)),
            i && (f = n(i)),
            p && d && (document.cookie = p + "=" + encodeURIComponent(d) + s + "; path=/" + f + c + o)
        },
        encrypt: function(e) {
            return "data:enc;" + T(e)
        },
        decrypt: function(e) {
            return e = e.substring("data:enc;".length),
            e = A(e)
        },
        resolveValue: function(e) {
            var t = "data:enc;";
            return v(e) && 0 === e.indexOf(t) && (e = mt.decrypt(e)),
            e
        },
        remove: function(e, t) {
            t = "undefined" == typeof t ? ot.cross_subdomain : t,
            mt.set(e, "", -1, t)
        },
        getCookieName: function(e, t) {
            var r = "";
            if (t = t || location.href,
            ot.cross_subdomain === !1) {
                try {
                    r = X(t).hostname
                } catch (a) {
                    L(a)
                }
                r = "string" == typeof r && "" !== r ? "sajssdk_2015_" + ot.sdk_id + e + "_" + r.replace(/\./g, "_") : "sajssdk_2015_root_" + ot.sdk_id + e
            } else
                r = "sajssdk_2015_cross_" + ot.sdk_id + e;
            return r
        },
        getNewUser: function() {
            var e = "new_user";
            return null !== this.get("sensorsdata_is_new_user") || null !== this.get(this.getCookieName(e))
        }
    }
      , vt = {
        get: function(e) {
            return window.localStorage.getItem(e)
        },
        parse: function(e) {
            var t;
            try {
                t = JSON.parse(vt.get(e)) || null
            } catch (r) {
                L(r)
            }
            return t
        },
        set: function(e, t) {
            window.localStorage.setItem(e, t)
        },
        remove: function(e) {
            window.localStorage.removeItem(e)
        },
        isSupport: function() {
            var e = !0;
            try {
                var t = "__sensorsdatasupport__"
                  , r = "testIsSupportStorage";
                vt.set(t, r),
                vt.get(t) !== r && (e = !1),
                vt.remove(t)
            } catch (a) {
                e = !1
            }
            return e
        }
    }
      , yt = {
        isSupport: function() {
            var e = !0
              , t = "__sensorsdatasupport__"
              , r = "testIsSupportStorage";
            try {
                sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r),
                sessionStorage.removeItem(t, r),
                e = !0) : e = !1
            } catch (a) {
                e = !1
            }
            return e
        }
    }
      , bt = function() {
        this._events = [],
        this.pendingEvents = []
    };
    bt.prototype = {
        emit: function(t) {
            var r = [].slice.call(arguments, 1);
            e(this._events, function(e) {
                e.type === t && e.callback.apply(e.context, r)
            }),
            this.pendingEvents.push({
                type: t,
                data: r
            }),
            this.pendingEvents.length > 20 ? this.pendingEvents.shift() : null
        },
        on: function(t, r, a, n) {
            "function" == typeof r && (this._events.push({
                type: t,
                callback: r,
                context: a || this
            }),
            n = n !== !1,
            this.pendingEvents.length > 0 && n && e(this.pendingEvents, function(e) {
                e.type === t && r.apply(a, e.data)
            }))
        },
        tempAdd: function(e, t) {
            if (t && e)
                return this.emit(e, t)
        },
        isReady: function() {}
    };
    var wt = {
        __proto__: null,
        each: e,
        map: t,
        extend: r,
        extend2Lev: a,
        coverExtend: n,
        isArray: nt,
        isFunction: i,
        isArguments: s,
        toArray: c,
        values: l,
        indexOf: u,
        filter: p,
        inherit: d,
        trim: f,
        isObject: _,
        isEmptyObject: h,
        isUndefined: g,
        isString: v,
        isDate: y,
        isBoolean: b,
        isNumber: w,
        isElement: S,
        isJSONString: k,
        safeJSONParse: $,
        throttle: P,
        hashCode: C,
        getRandomBasic: it,
        getRandom: N,
        formatJsonString: O,
        unique: j,
        base64Decode: D,
        base64Encode: x,
        now: st,
        rot13obfs: T,
        rot13defs: A,
        strToUnicode: E,
        hasAttributes: H,
        hasAttribute: R,
        getElementContent: U,
        loadScript: J,
        ry: q,
        setCssStyle: B,
        getDomBySelector: M,
        decodeURIComponent: K,
        decodeURI: F,
        getQueryParam: W,
        urlParse: z,
        getURLSearchParams: V,
        URL: X,
        getHostname: Z,
        getQueryParamsFromUrl: Q,
        urlSafeBase64: ut,
        secCheck: lt,
        getURL: Y,
        encodeDates: G,
        formatDate: ee,
        searchObjDate: te,
        mediaQueriesSupported: ke,
        getScreenOrientation: $e,
        cookie: mt,
        localStorage: vt,
        sessionStorage: yt,
        isSupportCors: Pe,
        isIOS: Ce,
        getUA: Oe,
        getIOSVersion: Ne,
        isSupportBeaconSend: je,
        searchZZAppStyle: re,
        searchObjString: ne,
        filterReservedProperties: oe,
        parseSuperProperties: se,
        strip_sa_properties: ie,
        searchConfigData: ce,
        strip_empty_properties: le,
        UUID: _t,
        getCurrentDomain: ue,
        getEleInfo: pe,
        isBaiduTraffic: de,
        getReferrerEqid: fe,
        getReferrerEqidType: _e,
        getBaiduKeyword: ht,
        getCookieTopLevelDomain: he,
        isReferralTraffic: ge,
        getReferrer: me,
        getKeywordFromReferrer: ye,
        getWxAdIdFromUrl: be,
        getReferSearchEngine: ve,
        getSourceFromReferrer: we,
        info: gt,
        autoExeQueue: Se,
        formatString: ae,
        addEvent: xe,
        addHashEvent: De,
        addSinglePageEvent: Te,
        listenPageState: Ae,
        bindReady: Ee,
        xhr: Ie,
        ajax: Le,
        jsonp: He,
        eventEmitter: bt
    }
      , St = {
        checkIsAddSign: function(e) {
            "track" === e.type && (mt.getNewUser() ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1)
        },
        is_first_visit_time: !1,
        checkIsFirstTime: function(e) {
            "track" === e.type && "$pageview" === e.event && (this.is_first_visit_time ? (e.properties.$is_first_time = !0,
            this.is_first_visit_time = !1) : e.properties.$is_first_time = !1)
        },
        setDeviceId: function(e) {
            var t = null
              , r = mt.get("sensorsdata2015jssdkcross" + Xe.para.sdk_id);
            r = mt.resolveValue(r);
            var a = {};
            null != r && k(r) && (a = JSON.parse(r),
            a.$device_id && (t = a.$device_id)),
            t = t || e,
            Xe.para.cross_subdomain === !0 ? Xe.store.set("$device_id", t) : (a.$device_id = t,
            a = JSON.stringify(a),
            Xe.para.encrypt_cookie && (a = mt.encrypt(a)),
            mt.set("sensorsdata2015jssdkcross" + Xe.para.sdk_id, a, null, !0)),
            Xe.para.is_track_device_id && (gt.currentProps.$device_id = t)
        },
        storeInitCheck: function() {
            if (Xe.is_first_visitor) {
                var e = new Date
                  , t = {
                    h: 23 - e.getHours(),
                    m: 59 - e.getMinutes(),
                    s: 59 - e.getSeconds()
                };
                mt.set(mt.getCookieName("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s"),
                this.is_first_visit_time = !0
            } else
                mt.getNewUser() || (this.checkIsAddSign = function(e) {
                    "track" === e.type && (e.properties.$is_first_day = !1)
                }
                ),
                this.checkIsFirstTime = function(e) {
                    "track" === e.type && "$pageview" === e.event && (e.properties.$is_first_time = !1)
                }
        },
        checkIsFirstLatest: function() {
            var t = gt.pageProp.url_domain
              , r = {};
            "" === t && (t = "url\u89e3\u6790\u5931\u8d25");
            var a = ye(document.referrer, !0);
            if (Xe.para.preset_properties.search_keyword_baidu ? ge(document.referrer) && (!de() || _(a) && a.active ? Xe.store._state && Xe.store._state.props && (Xe.store._state.props.$search_keyword_id && delete Xe.store._state.props.$search_keyword_id,
            Xe.store._state.props.$search_keyword_id_type && delete Xe.store._state.props.$search_keyword_id_type,
            Xe.store._state.props.$search_keyword_id_hash && delete Xe.store._state.props.$search_keyword_id_hash) : (r.$search_keyword_id = ht.id(),
            r.$search_keyword_id_type = ht.type(),
            r.$search_keyword_id_hash = C(r.$search_keyword_id))) : Xe.store._state && Xe.store._state.props && (Xe.store._state.props.$search_keyword_id && delete Xe.store._state.props.$search_keyword_id,
            Xe.store._state.props.$search_keyword_id_type && delete Xe.store._state.props.$search_keyword_id_type,
            Xe.store._state.props.$search_keyword_id_hash && delete Xe.store._state.props.$search_keyword_id_hash),
            Xe.store.save(),
            e(Xe.para.preset_properties, function(a, n) {
                if (n.indexOf("latest_") === -1)
                    return !1;
                if (n = n.slice(7),
                a) {
                    if ("wx_ad_click_id" === n && "not_collect" === a)
                        return !1;
                    if ("utm" !== n && "url\u89e3\u6790\u5931\u8d25" === t)
                        "wx_ad_click_id" === n ? (r._latest_wx_ad_click_id = "url\u7684domain\u89e3\u6790\u5931\u8d25",
                        r._latest_wx_ad_hash_key = "url\u7684domain\u89e3\u6790\u5931\u8d25",
                        r._latest_wx_ad_callbacks = "url\u7684domain\u89e3\u6790\u5931\u8d25") : r["$latest_" + n] = "url\u7684domain\u89e3\u6790\u5931\u8d25";
                    else if (ge(document.referrer))
                        switch (n) {
                        case "traffic_source_type":
                            r.$latest_traffic_source_type = we();
                            break;
                        case "referrer":
                            r.$latest_referrer = gt.pageProp.referrer;
                            break;
                        case "search_keyword":
                            ye() ? r.$latest_search_keyword = ye() : _(Xe.store._state) && _(Xe.store._state.props) && Xe.store._state.props.$latest_search_keyword && delete Xe.store._state.props.$latest_search_keyword;
                            break;
                        case "landing_page":
                            r.$latest_landing_page = Y();
                            break;
                        case "wx_ad_click_id":
                            var i = be(location.href);
                            r._latest_wx_ad_click_id = i.click_id,
                            r._latest_wx_ad_hash_key = i.hash_key,
                            r._latest_wx_ad_callbacks = i.callbacks
                        }
                } else if ("utm" === n && Xe.store._state && Xe.store._state.props)
                    for (var s in Xe.store._state.props)
                        (0 === s.indexOf("$latest_utm") || 0 === s.indexOf("_latest_") && s.indexOf("_latest_wx_ad_") < 0) && delete Xe.store._state.props[s];
                else if (Xe.store._state && Xe.store._state.props && "$latest_" + n in Xe.store._state.props)
                    delete Xe.store._state.props["$latest_" + n];
                else if ("wx_ad_click_id" == n && Xe.store._state && Xe.store._state.props && a === !1) {
                    var o = ["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"];
                    e(o, function(e) {
                        e in Xe.store._state.props && delete Xe.store._state.props[e]
                    })
                }
            }),
            Xe.register(r),
            Xe.para.preset_properties.latest_utm) {
                var n = gt.campaignParamsStandard("$latest_", "_latest_")
                  , i = n.$utms
                  , s = n.otherUtms;
                h(i) || Xe.register(i),
                h(s) || Xe.register(s)
            }
        }
    }
      , kt = {
        requests: [],
        _sessionState: {},
        _state: {
            distinct_id: "",
            first_id: "",
            props: {}
        },
        getProps: function() {
            return this._state.props || {}
        },
        getSessionProps: function() {
            return this._sessionState
        },
        getDistinctId: function() {
            return this._state._distinct_id || this._state.distinct_id
        },
        getUnionId: function() {
            var e = {}
              , t = this._state._first_id || this._state.first_id
              , r = this._state._distinct_id || this._state.distinct_id;
            return t && r ? (e.login_id = r,
            e.anonymous_id = t) : e.anonymous_id = r,
            e
        },
        getFirstId: function() {
            return this._state._first_id || this._state.first_id
        },
        toState: function(e) {
            var t = null;
            if (null != e && k(e))
                if (t = JSON.parse(e),
                this._state = r(t),
                t.distinct_id) {
                    if ("object" == typeof t.props) {
                        for (var a in t.props)
                            "string" == typeof t.props[a] && (t.props[a] = t.props[a].slice(0, Xe.para.max_referrer_string_length));
                        this.save()
                    }
                } else
                    this.set("distinct_id", _t()),
                    Xe.debug.distinct_id("1", e);
            else
                this.set("distinct_id", _t()),
                Xe.debug.distinct_id("2", e)
        },
        initSessionState: function() {
            var e = mt.get("sensorsdata2015session")
              , t = null;
            null !== e && "object" == typeof (t = JSON.parse(e)) && (this._sessionState = t || {})
        },
        setOnce: function(e, t) {
            e in this._state || this.set(e, t)
        },
        set: function(e, t) {
            this._state = this._state || {};
            var r = this._state.distinct_id;
            this._state[e] = t,
            "first_id" === e ? delete this._state._first_id : "distinct_id" === e && delete this._state._distinct_id,
            this.save(),
            "distinct_id" === e && r && Xe.events.tempAdd("changeDistinctId", t)
        },
        change: function(e, t) {
            this._state["_" + e] = t
        },
        setSessionProps: function(e) {
            var t = this._sessionState;
            r(t, e),
            this.sessionSave(t)
        },
        setSessionPropsOnce: function(e) {
            var t = this._sessionState;
            n(t, e),
            this.sessionSave(t)
        },
        setProps: function(e, t) {
            var a = {};
            a = t ? e : r(this._state.props || {}, e);
            for (var n in a)
                "string" == typeof a[n] && (a[n] = a[n].slice(0, Xe.para.max_referrer_string_length));
            this.set("props", a)
        },
        setPropsOnce: function(e) {
            var t = this._state.props || {};
            n(t, e),
            this.set("props", t)
        },
        clearAllProps: function(e) {
            this._sessionState = {};
            var t;
            if (nt(e) && e.length > 0)
                for (t = 0; t < e.length; t++)
                    v(e[t]) && e[t].indexOf("latest_") === -1 && _(this._state.props) && e[t]in this._state.props && delete this._state.props[e[t]];
            else if (_(this._state.props))
                for (t in this._state.props)
                    1 !== t.indexOf("latest_") && delete this._state.props[t];
            this.sessionSave({}),
            this.save()
        },
        sessionSave: function(e) {
            this._sessionState = e,
            mt.set("sensorsdata2015session", JSON.stringify(this._sessionState), 0)
        },
        save: function() {
            var e = JSON.parse(JSON.stringify(this._state));
            delete e._first_id,
            delete e._distinct_id;
            var t = JSON.stringify(e);
            Xe.para.encrypt_cookie && (t = mt.encrypt(t)),
            mt.set(this.getCookieName(), t, 73e3, Xe.para.cross_subdomain)
        },
        getCookieName: function() {
            var e = "";
            if (Xe.para.cross_subdomain === !1) {
                try {
                    e = X(location.href).hostname
                } catch (t) {
                    Xe.log(t)
                }
                e = "string" == typeof e && "" !== e ? "sa_jssdk_2015_" + Xe.para.sdk_id + e.replace(/\./g, "_") : "sa_jssdk_2015_root" + Xe.para.sdk_id
            } else
                e = "sensorsdata2015jssdkcross" + Xe.para.sdk_id;
            return e
        },
        init: function() {
            this.initSessionState();
            var e = _t()
              , t = mt.get(this.getCookieName());
            t = mt.resolveValue(t),
            null === t ? (Xe.is_first_visitor = !0,
            this.set("distinct_id", e)) : (k(t) && JSON.parse(t).distinct_id || (Xe.is_first_visitor = !0),
            this.toState(t)),
            St.setDeviceId(e),
            St.storeInitCheck(),
            St.checkIsFirstLatest()
        }
    }
      , $t = {
        regChecks: {
            regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i
        },
        checkPropertiesKey: function(t) {
            var r = this
              , a = !0;
            return e(t, function(e, t) {
                r.regChecks.regName.test(t) || (a = !1)
            }),
            a
        },
        check: function(e, t) {
            return "string" == typeof this[e] ? this[this[e]](t) : i(this[e]) ? this[e](t) : void 0
        },
        str: function(e) {
            return !(!v(e) || "" === e) || (L("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f,\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u4e14\u6709\u503c"),
            !1)
        },
        properties: function(e) {
            return ie(e),
            !e || (_(e) ? !!this.checkPropertiesKey(e) || (L("properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"),
            !0) : (L("properties\u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"),
            !0))
        },
        propertiesMust: function(e) {
            return ie(e),
            void 0 === e || !_(e) || h(e) ? (L("properties\u5fc5\u987b\u662f\u5bf9\u8c61\u4e14\u6709\u503c"),
            !0) : !!this.checkPropertiesKey(e) || (L("properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"),
            !0)
        },
        event: function(e) {
            return !(!v(e) || !this.regChecks.regName.test(e)) || (L("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff0ceventName \u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff0c\u4e14\u9700\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u5373\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u548c $,\u5176\u4e2d\u4ee5 $ \u5f00\u5934\u7684\u8868\u660e\u662f\u7cfb\u7edf\u7684\u4fdd\u7559\u5b57\u6bb5\uff0c\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\u8bf7\u4e0d\u8981\u4ee5 $ \u5f00\u5934"),
            !0)
        },
        item_type: "str",
        item_id: "str",
        distinct_id: function(e) {
            return !(!v(e) || !/^.{1,255}$/.test(e)) || (L("distinct_id\u5fc5\u987b\u662f\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e14\u5c0f\u4e8e255\u4f4d\u7684\u5b57\u7b26\u4e32"),
            !1)
        }
    }
      , Pt = {};
    Pt.check = Re,
    Pt.sendItem = function(e) {
        var t = {
            lib: {
                $lib: "js",
                $lib_method: "code",
                $lib_version: String(Xe.lib_version)
            },
            time: 1 * new Date
        };
        r(t, e),
        oe(t.properties),
        te(t),
        ne(t),
        t.properties && "$project"in t.properties && (t.project = String(t.properties.$project),
        delete t.properties.$project),
        Xe.sendState.getSendCall(t)
    }
    ,
    Pt.send = function(e, t) {
        var r = Xe.kit.buildData(e);
        Xe.kit.sendData(r, t)
    }
    ,
    Pt.debugPath = function(e) {
        var t = e
          , r = "";
        r = Xe.para.debug_mode_url.indexOf("?") !== -1 ? Xe.para.debug_mode_url + "&" + Xe.kit.encodeTrackData(e) : Xe.para.debug_mode_url + "?" + Xe.kit.encodeTrackData(e),
        Le({
            url: r,
            type: "GET",
            cors: !0,
            header: {
                "Dry-Run": String(Xe.para.debug_mode_upload)
            },
            success: function(e) {
                h(e) === !0 ? alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f" + t) : alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0" + JSON.stringify(e))
            }
        })
    }
    ;
    var Ct = {
        otherTags: [],
        getTargetElement: function(e, t) {
            var r = this
              , a = e;
            if ("object" != typeof a)
                return null;
            if ("string" != typeof a.tagName)
                return null;
            var n = a.tagName.toLowerCase();
            if ("body" === n.toLowerCase() || "html" === n.toLowerCase())
                return null;
            if (!a || !a.parentNode || !a.parentNode.children)
                return null;
            var i = a.parentNode
              , s = r.hasElement({
                event: t && t.originalEvent || t,
                element: e
            }, function(e) {
                return "a" === e.tagName.toLowerCase() || H(e, Xe.para.heatmap.track_attr)
            })
              , o = r.otherTags;
            if ("a" === n || "button" === n || "input" === n || "textarea" === n)
                return a;
            if (u(o, n) > -1)
                return a;
            if ("button" === i.tagName.toLowerCase() || "a" === i.tagName.toLowerCase())
                return i;
            if ("area" === n && "map" === i.tagName.toLowerCase() && q(i).prev().tagName && "img" === q(i).prev().tagName.toLowerCase())
                return q(i).prev();
            if (s)
                return s;
            if ("div" === n && Xe.para.heatmap.collect_tags.div && r.isDivLevelValid(a)) {
                var c = Xe.para.heatmap && Xe.para.heatmap.collect_tags && Xe.para.heatmap.collect_tags.div && Xe.para.heatmap.collect_tags.div.max_level || 1;
                return c > 1 || r.isCollectableDiv(a) ? a : null
            }
            if (r.isStyleTag(n) && Xe.para.heatmap.collect_tags.div) {
                var l = r.getCollectableParent(a);
                if (l && r.isDivLevelValid(l))
                    return l
            }
            return null
        },
        getDivLevels: function(t, r) {
            var a = Ct.getElementPath(t, !0, r)
              , n = a.split(" > ")
              , i = 0;
            return e(n, function(e) {
                "div" === e && i++
            }),
            i
        },
        isDivLevelValid: function(e) {
            for (var t = Xe.para.heatmap && Xe.para.heatmap.collect_tags && Xe.para.heatmap.collect_tags.div && Xe.para.heatmap.collect_tags.div.max_level || 1, r = e.getElementsByTagName("div"), a = r.length - 1; a >= 0; a--)
                if (Ct.getDivLevels(r[a], e) > t)
                    return !1;
            return !0
        },
        getElementPath: function(e, t, r) {
            for (var a = []; e.parentNode; ) {
                if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
                    a.unshift(e.tagName.toLowerCase() + "#" + e.id);
                    break
                }
                if (r && e === r) {
                    a.unshift(e.tagName.toLowerCase());
                    break
                }
                if (e === document.body) {
                    a.unshift("body");
                    break
                }
                a.unshift(e.tagName.toLowerCase()),
                e = e.parentNode
            }
            return a.join(" > ")
        },
        getClosestLi: function(e) {
            var t = function(e, t) {
                for (; e && e !== document && 1 === e.nodeType; e = e.parentNode)
                    if (e.tagName.toLowerCase() === t)
                        return e;
                return null
            };
            return t(e, "li")
        },
        getElementPosition: function(e, t, r) {
            function a(e) {
                var t = e.parentNode;
                if (!t)
                    return "";
                var r = q(e).getSameTypeSiblings()
                  , a = r.length;
                if (1 === a)
                    return 0;
                for (var n = 0, i = e; q(i).previousElementSibling().ele; i = q(i).previousElementSibling().ele,
                n++)
                    ;
                return n
            }
            var n = Xe.heatmap.getClosestLi(e);
            if (!n)
                return null;
            var i = e.tagName.toLowerCase()
              , s = n.getElementsByTagName(i)
              , o = s.length
              , c = [];
            if (o > 1) {
                for (var l = 0; l < o; l++) {
                    var p = Xe.heatmap.getElementPath(s[l], r);
                    p === t && c.push(s[l])
                }
                if (c.length > 1)
                    return u(c, e)
            }
            return a(n)
        },
        setNotice: function(e) {
            Xe.is_heatmap_render_mode = !0,
            Xe.para.heatmap || (Xe.errorMsg = "\u60a8SDK\u6ca1\u6709\u914d\u7f6e\u5f00\u542f\u70b9\u51fb\u56fe\uff0c\u53ef\u80fd\u6ca1\u6709\u6570\u636e\uff01"),
            e && e[0] && e[1] && "http:" === e[1].slice(0, 5) && "https:" === location.protocol && (Xe.errorMsg = "\u60a8\u7684\u5f53\u524d\u9875\u9762\u662fhttps\u7684\u5730\u5740\uff0c\u795e\u7b56\u5206\u6790\u73af\u5883\u4e5f\u5fc5\u987b\u662fhttps\uff01"),
            Xe.para.heatmap_url || (Xe.para.heatmap_url = location.protocol + "//static.sensorsdata.cn/sdk/" + Xe.lib_version + "/heatmap.min.js")
        },
        getDomIndex: function(e) {
            if (!e.parentNode)
                return -1;
            for (var t = 0, r = e.tagName, a = e.parentNode.children, n = 0; n < a.length; n++)
                if (a[n].tagName === r) {
                    if (e === a[n])
                        return t;
                    t++
                }
            return -1
        },
        selector: function(e, t) {
            var r = e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e);
            return e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && (!Xe.para.heatmap || Xe.para.heatmap && "not_use_id" !== Xe.para.heatmap.element_selector) && !t ? "#" + e.getAttribute("id") : e.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "")
        },
        getDomSelector: function(e, t, r) {
            if (!e || !e.parentNode || !e.parentNode.children)
                return !1;
            t = t && t.join ? t : [];
            var a = e.nodeName.toLowerCase();
            return e && "body" !== a && 1 == e.nodeType ? (t.unshift(this.selector(e, r)),
            e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && Xe.para.heatmap && "not_use_id" !== Xe.para.heatmap.element_selector && !r ? t.join(" > ") : this.getDomSelector(e.parentNode, t, r)) : (t.unshift("body"),
            t.join(" > "))
        },
        na: function() {
            var e = document.documentElement.scrollLeft || window.pageXOffset;
            return parseInt(isNaN(e) ? 0 : e, 10)
        },
        i: function() {
            var e = 0;
            try {
                e = o.documentElement && o.documentElement.scrollTop || m.pageYOffset,
                e = isNaN(e) ? 0 : e
            } catch (t) {
                e = 0
            }
            return parseInt(e, 10)
        },
        getBrowserWidth: function() {
            var e = window.innerWidth || document.body.clientWidth;
            return isNaN(e) ? 0 : parseInt(e, 10)
        },
        getBrowserHeight: function() {
            var e = window.innerHeight || document.body.clientHeight;
            return isNaN(e) ? 0 : parseInt(e, 10)
        },
        getScrollWidth: function() {
            var e = parseInt(document.body.scrollWidth, 10);
            return isNaN(e) ? 0 : e
        },
        getEleDetail: function(e) {
            var t = this.getDomSelector(e)
              , r = pe({
                target: e
            });
            r.$element_selector = t ? t : "",
            r.$element_path = Xe.heatmap.getElementPath(e, Xe.para.heatmap && "not_use_id" === Xe.para.heatmap.element_selector);
            var a = Xe.heatmap.getElementPosition(e, r.$element_path, Xe.para.heatmap && "not_use_id" === Xe.para.heatmap.element_selector);
            return w(a) && (r.$element_position = a),
            r
        },
        start: function(e, t, a, n, s) {
            var o = _(n) ? n : {}
              , c = i(s) ? s : i(n) ? n : void 0;
            if (Xe.para.heatmap && Xe.para.heatmap.collect_element && !Xe.para.heatmap.collect_element(t))
                return !1;
            var l = this.getEleDetail(t);
            if (Xe.para.heatmap && Xe.para.heatmap.custom_property) {
                var u = Xe.para.heatmap.custom_property(t);
                _(u) && (l = r(l, u))
            }
            l = r(l, o),
            "a" === a && Xe.para.heatmap && Xe.para.heatmap.isTrackLink === !0 ? Xe.trackLink({
                event: e,
                target: t
            }, "$WebClick", l) : Xe.track("$WebClick", l, c)
        },
        hasElement: function(e, t) {
            var r;
            if (e.event) {
                var a = e.event;
                r = a.path || a._getPath && a._getPath()
            } else
                e.element && (r = q(e.element).getParents());
            if (r && nt(r) && r.length > 0)
                for (var n = 0; n < r.length; n++)
                    if ("object" == typeof r[n] && 1 === r[n].nodeType && t(r[n]))
                        return r[n]
        },
        isStyleTag: function(e, t) {
            var r = ["a", "div", "input", "button", "textarea"]
              , a = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
            return !(u(r, e) > -1) && (!t || Xe.para.heatmap && Xe.para.heatmap.collect_tags && Xe.para.heatmap.collect_tags.div ? !!(_(Xe.para.heatmap) && _(Xe.para.heatmap.collect_tags) && _(Xe.para.heatmap.collect_tags.div) && nt(Xe.para.heatmap.collect_tags.div.ignore_tags) && u(Xe.para.heatmap.collect_tags.div.ignore_tags, e) > -1) : u(a, e) > -1)
        },
        isCollectableDiv: function(e, t) {
            try {
                if (0 === e.children.length)
                    return !0;
                for (var r = 0; r < e.children.length; r++)
                    if (1 === e.children[r].nodeType) {
                        var a = e.children[r].tagName.toLowerCase()
                          , n = Xe.para && Xe.para.heatmap && Xe.para.heatmap.collect_tags && Xe.para.heatmap.collect_tags.div && Xe.para.heatmap.collect_tags.div.max_level;
                        if (!("div" === a && n > 1 || this.isStyleTag(a, t)))
                            return !1;
                        if (!this.isCollectableDiv(e.children[r], t))
                            return !1
                    }
                return !0
            } catch (i) {
                Xe.log(i)
            }
            return !1
        },
        getCollectableParent: function(e, t) {
            try {
                var r = e.parentNode
                  , a = r ? r.tagName.toLowerCase() : "";
                if ("body" === a)
                    return !1;
                var n = Xe.para && Xe.para.heatmap && Xe.para.heatmap.collect_tags && Xe.para.heatmap.collect_tags.div && Xe.para.heatmap.collect_tags.div.max_level;
                if (a && "div" === a && (n > 1 || this.isCollectableDiv(r, t)))
                    return r;
                if (r && this.isStyleTag(a, t))
                    return this.getCollectableParent(r, t)
            } catch (i) {
                Xe.log(i)
            }
            return !1
        },
        initScrollmap: function() {
            if (!_(Xe.para.heatmap) || "default" !== Xe.para.heatmap.scroll_notice_map)
                return !1;
            var e = function() {
                return !(Xe.para.scrollmap && i(Xe.para.scrollmap.collect_url) && !Xe.para.scrollmap.collect_url())
            }
              , t = function(e) {
                var t = {};
                return t.timeout = e.timeout || 1e3,
                t.func = e.func,
                t.hasInit = !1,
                t.inter = null,
                t.main = function(e, t) {
                    this.func(e, t),
                    this.inter = null
                }
                ,
                t.go = function(e) {
                    var r = {};
                    this.inter || (r.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
                    r.$viewport_position = Math.round(r.$viewport_position) || 0,
                    r.$viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
                    r.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
                    e ? t.main(r, !0) : this.inter = setTimeout(function() {
                        t.main(r)
                    }, this.timeout))
                }
                ,
                t
            }
              , r = t({
                timeout: 1e3,
                func: function(e, t) {
                    var r = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0
                      , a = new Date
                      , n = a - this.current_time;
                    (n > Xe.para.heatmap.scroll_delay_time && r - e.$viewport_position !== 0 || t) && (e.$url = Y(),
                    e.$title = document.title,
                    e.$url_path = location.pathname,
                    e.event_duration = Math.min(Xe.para.heatmap.scroll_event_duration, parseInt(n) / 1e3),
                    e.event_duration = e.event_duration < 0 ? 0 : e.event_duration,
                    Xe.track("$WebStay", e)),
                    this.current_time = a
                }
            });
            r.current_time = new Date,
            xe(window, "scroll", function() {
                return !!e() && void r.go()
            }),
            xe(window, "unload", function() {
                return !!e() && void r.go("notime")
            })
        },
        initHeatmap: function() {
            var e = this;
            return !(!_(Xe.para.heatmap) || "default" !== Xe.para.heatmap.clickmap) && (!(i(Xe.para.heatmap.collect_url) && !Xe.para.heatmap.collect_url()) && ("all" === Xe.para.heatmap.collect_elements ? Xe.para.heatmap.collect_elements = "all" : Xe.para.heatmap.collect_elements = "interact",
            void ("all" === Xe.para.heatmap.collect_elements ? xe(document, "click", function(t) {
                var r = t || window.event;
                if (!r)
                    return !1;
                var a = r.target || r.srcElement;
                if ("object" != typeof a)
                    return !1;
                if ("string" != typeof a.tagName)
                    return !1;
                var n = a.tagName.toLowerCase();
                if ("body" === n || "html" === n)
                    return !1;
                if (!a || !a.parentNode || !a.parentNode.children)
                    return !1;
                var i = a.parentNode.tagName.toLowerCase();
                "a" === i || "button" === i ? e.start(r, a.parentNode, i) : e.start(r, a, n)
            }) : xe(document, "click", function(t) {
                var r = t || window.event;
                if (!r)
                    return !1;
                var a = r.target || r.srcElement
                  , n = Xe.heatmap.getTargetElement(a, t);
                n ? e.start(r, n, n.tagName.toLowerCase()) : S(a) && "div" === a.tagName.toLowerCase() && _(Xe.para.heatmap) && Xe.para.heatmap.get_vtrack_config && Xe.unlimitedDiv.events.length > 0 && Xe.unlimitedDiv.isTargetEle(a) && e.start(r, a, a.tagName.toLowerCase(), {
                    $lib_method: "vtrack"
                })
            }))))
        }
    }
      , Nt = {
        setOnlineState: function(t) {
            if (t === !0 && _(Xe.para.jsapp) && "function" == typeof Xe.para.jsapp.getData) {
                Xe.para.jsapp.isOnline = !0;
                var r = Xe.para.jsapp.getData();
                nt(r) && r.length > 0 && e(r, function(e) {
                    k(e) && Xe.sendState.realtimeSend(JSON.parse(e))
                })
            } else
                Xe.para.jsapp.isOnline = !1
        },
        autoTrackIsUsed: !1,
        isReady: function(e) {
            e()
        },
        getUtm: function() {
            return gt.campaignParams()
        },
        getStayTime: function() {
            return (new Date - Xe._t) / 1e3
        },
        setProfileLocal: function(e) {
            if (!vt.isSupport())
                return Xe.setProfile(e),
                !1;
            if (!_(e) || h(e))
                return !1;
            var t = vt.parse("sensorsdata_2015_jssdk_profile")
              , r = !1;
            if (_(t) && !h(t)) {
                for (var a in e)
                    !(a in t && t[a] !== e[a]) && a in t || (t[a] = e[a],
                    r = !0);
                r && (vt.set("sensorsdata_2015_jssdk_profile", JSON.stringify(t)),
                Xe.setProfile(e))
            } else
                vt.set("sensorsdata_2015_jssdk_profile", JSON.stringify(e)),
                Xe.setProfile(e)
        },
        setInitReferrer: function() {
            var e = me();
            Xe.setOnceProfile({
                _init_referrer: e,
                _init_referrer_host: gt.pageProp.referrer_host
            })
        },
        setSessionReferrer: function() {
            var e = me();
            Xe.store.setSessionPropsOnce({
                _session_referrer: e,
                _session_referrer_host: gt.pageProp.referrer_host
            })
        },
        setDefaultAttr: function() {
            gt.register({
                _current_url: location.href,
                _referrer: me(),
                _referring_host: gt.pageProp.referrer_host
            })
        },
        trackHeatMap: function(e, t, r) {
            if ("object" == typeof e && e.tagName) {
                var a = e.tagName.toLowerCase()
                  , n = e.parentNode.tagName.toLowerCase()
                  , i = Xe.para.heatmap && Xe.para.heatmap.track_attr ? Xe.para.heatmap.track_attr : ["data-sensors-click"];
                "button" === a || "a" === a || "a" === n || "button" === n || "input" === a || "textarea" === a || H(e, i) || Ct.start(null, e, a, t, r)
            }
        },
        trackAllHeatMap: function(e, t, r) {
            if ("object" == typeof e && e.tagName) {
                var a = e.tagName.toLowerCase();
                Ct.start(null, e, a, t, r)
            }
        },
        autoTrackSinglePage: function(t, a) {
            function n() {
                var t = gt.campaignParams()
                  , r = {};
                return e(t, function(e, t, a) {
                    (" " + Xe.source_channel_standard + " ").indexOf(" " + t + " ") !== -1 ? r["$" + t] = a[t] : r[t] = a[t]
                }),
                r
            }
            function i(e, t) {
                Xe.track("$pageview", r({
                    $referrer: s,
                    $url: Y(),
                    $url_path: location.pathname,
                    $title: document.title
                }, e, n()), t),
                s = Y()
            }
            var s;
            s = this.autoTrackIsUsed ? gt.pageProp.url : gt.pageProp.referrer,
            t = _(t) ? t : {};
            var o = !t.not_set_profile;
            if (t.not_set_profile && delete t.not_set_profile,
            i(t, a),
            this.autoTrackSinglePage = i,
            Xe.is_first_visitor && o) {
                var c = {};
                Xe.para.preset_properties.search_keyword_baidu && ge(document.referrer) && de() && (c.$search_keyword_id = ht.id(),
                c.$search_keyword_id_type = ht.type(),
                c.$search_keyword_id_hash = C(c.$search_keyword_id)),
                Xe.setOnceProfile(r({
                    $first_visit_time: new Date,
                    $first_referrer: me(),
                    $first_browser_language: navigator.language || "\u53d6\u503c\u5f02\u5e38",
                    $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "\u53d6\u503c\u5f02\u5e38",
                    $first_traffic_source_type: we(),
                    $first_search_keyword: ye()
                }, n(), c)),
                Xe.is_first_visitor = !1
            }
        },
        autoTrackWithoutProfile: function(e, t) {
            e = _(e) ? e : {},
            this.autoTrack(r(e, {
                not_set_profile: !0
            }), t)
        },
        autoTrack: function(t, a) {
            t = _(t) ? t : {};
            var n = gt.campaignParams()
              , i = {};
            e(n, function(e, t, r) {
                (" " + Xe.source_channel_standard + " ").indexOf(" " + t + " ") !== -1 ? i["$" + t] = r[t] : i[t] = r[t]
            });
            var s = !t.not_set_profile;
            t.not_set_profile && delete t.not_set_profile;
            var o = location.href;
            if (Xe.para.is_single_page && De(function() {
                var e = me(o, !0);
                Xe.track("$pageview", r({
                    $referrer: e,
                    $url: Y(),
                    $url_path: location.pathname,
                    $title: document.title
                }, i, t), a),
                o = Y()
            }),
            Xe.track("$pageview", r({
                $referrer: me(null, !0),
                $url: Y(),
                $url_path: location.pathname,
                $title: document.title
            }, i, t), a),
            Xe.is_first_visitor && s) {
                var c = {};
                Xe.para.preset_properties.search_keyword_baidu && ge(document.referrer) && de() && (c.$search_keyword_id = ht.id(),
                c.$search_keyword_id_type = ht.type(),
                c.$search_keyword_id_hash = C(c.$search_keyword_id)),
                Xe.setOnceProfile(r({
                    $first_visit_time: new Date,
                    $first_referrer: me(null, !0),
                    $first_browser_language: navigator.language || "\u53d6\u503c\u5f02\u5e38",
                    $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "\u53d6\u503c\u5f02\u5e38",
                    $first_traffic_source_type: we(),
                    $first_search_keyword: ye()
                }, i, c)),
                Xe.is_first_visitor = !1
            }
            this.autoTrackIsUsed = !0
        },
        getAnonymousID: function() {
            return h(Xe.store._state) ? "\u8bf7\u5148\u521d\u59cb\u5316SDK" : Xe.store._state._first_id || Xe.store._state.first_id || Xe.store._state._distinct_id || Xe.store._state.distinct_id
        },
        setPlugin: function(t) {
            return !!_(t) && void e(t, function(e, t) {
                i(e) && (_(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[t] ? e(window.SensorsDataWebJSSDKPlugin[t]) : Xe.log(t + "\u6ca1\u6709\u83b7\u53d6\u5230,\u8bf7\u67e5\u9605\u6587\u6863\uff0c\u8c03\u6574" + t + "\u7684\u5f15\u5165\u987a\u5e8f\uff01"))
            })
        },
        useModulePlugin: function() {
            Xe.use.apply(Xe, arguments)
        },
        useAppPlugin: function() {
            this.setPlugin.apply(this, arguments)
        }
    };
    Xe.para_default = ct,
    Xe.addReferrerHost = function(e) {
        var t = "\u53d6\u503c\u5f02\u5e38";
        _(e.properties) && (e.properties.$first_referrer && (e.properties.$first_referrer_host = Z(e.properties.$first_referrer, t)),
        "track" !== e.type && "track_signup" !== e.type || ("$referrer"in e.properties && (e.properties.$referrer_host = "" === e.properties.$referrer ? "" : Z(e.properties.$referrer, t)),
        Xe.para.preset_properties.latest_referrer && Xe.para.preset_properties.latest_referrer_host && (e.properties.$latest_referrer_host = "" === e.properties.$latest_referrer ? "" : Z(e.properties.$latest_referrer, t))))
    }
    ,
    Xe.addPropsHook = function(e) {
        Xe.para.preset_properties && Xe.para.preset_properties.url && ("track" === e.type || "track_signup" === e.type) && "undefined" == typeof e.properties.$url && (e.properties.$url = Y()),
        Xe.para.preset_properties && Xe.para.preset_properties.title && ("track" === e.type || "track_signup" === e.type) && "undefined" == typeof e.properties.$title && (e.properties.$title = document.title)
    }
    ,
    Xe.initPara = function(t) {
        r(ot, t || Xe.para || {}),
        Xe.para = ot;
        var a = {};
        if (_(Xe.para.is_track_latest))
            for (var n in Xe.para.is_track_latest)
                a["latest_" + n] = Xe.para.is_track_latest[n];
        Xe.para.preset_properties = r({}, Xe.para_default.preset_properties, a, Xe.para.preset_properties || {});
        var i;
        for (i in Xe.para_default)
            void 0 === Xe.para[i] && (Xe.para[i] = Xe.para_default[i]);
        "string" == typeof Xe.para.server_url && (Xe.para.server_url = f(Xe.para.server_url),
        Xe.para.server_url && ("://" === Xe.para.server_url.slice(0, 3) ? Xe.para.server_url = location.protocol.slice(0, -1) + Xe.para.server_url : "//" === Xe.para.server_url.slice(0, 2) ? Xe.para.server_url = location.protocol + Xe.para.server_url : "http" !== Xe.para.server_url.slice(0, 4) && (Xe.para.server_url = ""))),
        "string" != typeof Xe.para.web_url || "://" !== Xe.para.web_url.slice(0, 3) && "//" !== Xe.para.web_url.slice(0, 2) || ("://" === Xe.para.web_url.slice(0, 3) ? Xe.para.web_url = location.protocol.slice(0, -1) + Xe.para.web_url : Xe.para.web_url = location.protocol + Xe.para.web_url),
        "image" !== Xe.para.send_type && "ajax" !== Xe.para.send_type && "beacon" !== Xe.para.send_type && (Xe.para.send_type = "image"),
        Xe.debug.protocol.serverUrl(),
        Xe.bridge.initPara(),
        Xe.bridge.initState();
        var s = {
            datasend_timeout: 6e3,
            send_interval: 6e3
        };
        vt.isSupport() && Pe() && "object" == typeof localStorage ? Xe.para.batch_send === !0 ? Xe.para.batch_send = r({}, s) : "object" == typeof Xe.para.batch_send && (Xe.para.batch_send = r({}, s, Xe.para.batch_send)) : Xe.para.batch_send = !1;
        var o = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
          , c = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"]
          , l = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"]
          , d = {
            baidu: ["wd", "word", "kw", "keyword"],
            google: "q",
            bing: "q",
            yahoo: "p",
            sogou: ["query", "keyword"],
            so: "q",
            sm: "q"
        };
        "object" == typeof Xe.para.source_type && (Xe.para.source_type.utm = nt(Xe.para.source_type.utm) ? Xe.para.source_type.utm.concat(o) : o,
        Xe.para.source_type.search = nt(Xe.para.source_type.search) ? Xe.para.source_type.search.concat(c) : c,
        Xe.para.source_type.social = nt(Xe.para.source_type.social) ? Xe.para.source_type.social.concat(l) : l,
        Xe.para.source_type.keyword = _(Xe.para.source_type.keyword) ? r(d, Xe.para.source_type.keyword) : d);
        var h = {
            div: !1
        }
          , g = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
        if (Xe.para.heatmap && !_(Xe.para.heatmap) && (Xe.para.heatmap = {}),
        _(Xe.para.heatmap)) {
            Xe.para.heatmap.clickmap = Xe.para.heatmap.clickmap || "default",
            Xe.para.heatmap.scroll_notice_map = Xe.para.heatmap.scroll_notice_map || "default",
            Xe.para.heatmap.scroll_delay_time = Xe.para.heatmap.scroll_delay_time || 4e3,
            Xe.para.heatmap.scroll_event_duration = Xe.para.heatmap.scroll_event_duration || 18e3,
            Xe.para.heatmap.renderRefreshTime = Xe.para.heatmap.renderRefreshTime || 1e3,
            Xe.para.heatmap.loadTimeout = Xe.para.heatmap.loadTimeout || 1e3,
            Xe.para.heatmap.get_vtrack_config !== !0 && (Xe.para.heatmap.get_vtrack_config = !1);
            var m = nt(Xe.para.heatmap.track_attr) ? p(Xe.para.heatmap.track_attr, function(e) {
                return e && "string" == typeof e
            }) : [];
            if (m.push("data-sensors-click"),
            Xe.para.heatmap.track_attr = m,
            _(Xe.para.heatmap.collect_tags))
                if (Xe.para.heatmap.collect_tags.div === !0)
                    Xe.para.heatmap.collect_tags.div = {
                        ignore_tags: g,
                        max_level: 1
                    };
                else if (_(Xe.para.heatmap.collect_tags.div)) {
                    if (Xe.para.heatmap.collect_tags.div.ignore_tags ? nt(Xe.para.heatmap.collect_tags.div.ignore_tags) || (Xe.log("ignore_tags \u53c2\u6570\u5fc5\u987b\u662f\u6570\u7ec4\u683c\u5f0f"),
                    Xe.para.heatmap.collect_tags.div.ignore_tags = g) : Xe.para.heatmap.collect_tags.div.ignore_tags = g,
                    Xe.para.heatmap.collect_tags.div.max_level) {
                        var v = [1, 2, 3];
                        u(v, Xe.para.heatmap.collect_tags.div.max_level) === -1 && (Xe.para.heatmap.collect_tags.div.max_level = 1)
                    }
                } else
                    Xe.para.heatmap.collect_tags.div = !1;
            else
                Xe.para.heatmap.collect_tags = h
        }
        if (nt(Xe.para.server_url) && Xe.para.server_url.length)
            for (i = 0; i < Xe.para.server_url.length; i++)
                /sa\.gif[^\/]*$/.test(Xe.para.server_url[i]) || (Xe.para.server_url[i] = Xe.para.server_url[i].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
        else
            /sa\.gif[^\/]*$/.test(Xe.para.server_url) || "string" != typeof Xe.para.server_url || (Xe.para.server_url = Xe.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
        "string" == typeof Xe.para.server_url && (Xe.para.debug_mode_url = Xe.para.debug_mode_url || Xe.para.server_url.replace("sa.gif", "debug")),
        Xe.para.noCache === !0 ? Xe.para.noCache = "?" + (new Date).getTime() : Xe.para.noCache = "",
        Xe.para.callback_timeout > Xe.para.datasend_timeout && (Xe.para.datasend_timeout = Xe.para.callback_timeout),
        Xe.para.heatmap && Xe.para.heatmap.collect_tags && _(Xe.para.heatmap.collect_tags) && e(Xe.para.heatmap.collect_tags, function(e, t) {
            "div" !== t && e && Xe.heatmap.otherTags.push(t)
        })
    }
    ,
    Xe.readyState = {
        state: 0,
        historyState: [],
        stateType: {
            1: "1-init\u672a\u5f00\u59cb",
            2: "2-init\u5f00\u59cb",
            3: "3-store\u5b8c\u6210"
        },
        getState: function() {
            return this.historyState.join("\n")
        },
        setState: function(e) {
            String(e)in this.stateType && (this.state = e),
            this.historyState.push(this.stateType[e])
        }
    },
    Xe.setPreConfig = function(e) {
        Xe.para = e.para,
        Xe._q = e._q
    }
    ,
    Xe.setInitVar = function() {
        Xe._t = Xe._t || 1 * new Date,
        Xe.lib_version = ft,
        Xe.is_first_visitor = !1,
        Xe.source_channel_standard = dt
    }
    ,
    Xe.log = L,
    Xe.enableLocalLog = function() {
        if (yt.isSupport())
            try {
                sessionStorage.setItem("sensorsdata_jssdk_debug", "true")
            } catch (e) {
                Xe.log("enableLocalLog error: " + e.message)
            }
    }
    ,
    Xe.disableLocalLog = function() {
        yt.isSupport() && sessionStorage.removeItem("sensorsdata_jssdk_debug")
    }
    ,
    Xe.debug = pt,
    Xe.quick = function() {
        var e = Array.prototype.slice.call(arguments)
          , t = e[0]
          , r = e.slice(1);
        return "string" == typeof t && Nt[t] ? Nt[t].apply(Nt, r) : void ("function" == typeof t ? t.apply(Xe, r) : Xe.log("quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd" + e[0]))
    }
    ,
    Xe.use = function(e, t) {
        return v(e) ? _(window.SensorsDataWebJSSDKPlugin) && _(window.SensorsDataWebJSSDKPlugin[e]) && i(window.SensorsDataWebJSSDKPlugin[e].init) ? (window.SensorsDataWebJSSDKPlugin[e].init(Xe, t),
        window.SensorsDataWebJSSDKPlugin[e]) : _(Xe.modules) && _(Xe.modules[e]) && i(Xe.modules[e].init) ? (Xe.modules[e].init(Xe, t),
        Xe.modules[e]) : void Xe.log(e + "\u6ca1\u6709\u83b7\u53d6\u5230,\u8bf7\u67e5\u9605\u6587\u6863\uff0c\u8c03\u6574" + e + "\u7684\u5f15\u5165\u987a\u5e8f\uff01") : (Xe.log("use\u63d2\u4ef6\u540d\u79f0\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff01"),
        !1)
    }
    ,
    Xe.track = function(e, t, r) {
        Pt.check({
            event: e,
            properties: t
        }) && Pt.send({
            type: "track",
            event: e,
            properties: t
        }, r)
    }
    ,
    Xe.trackLink = function(e, t, r) {
        function a(e, t, r) {
            function a(e) {
                function a() {
                    i || (i = !0,
                    location.href = n.href)
                }
                e.stopPropagation(),
                e.preventDefault();
                var i = !1;
                setTimeout(a, 1e3),
                Xe.track(t, r, a)
            }
            e = e || {};
            var n = null;
            return e.ele && (n = e.ele),
            e.event && (n = e.target ? e.target : e.event.target),
            r = r || {},
            !(!n || "object" != typeof n) && (!n.href || /^javascript/.test(n.href) || n.target || n.download || n.onclick ? (Xe.track(t, r),
            !1) : (e.event && a(e.event),
            void (e.ele && xe(e.ele, "click", function(e) {
                a(e)
            }))))
        }
        "object" == typeof e && e.tagName ? a({
            ele: e
        }, t, r) : "object" == typeof e && e.target && e.event && a(e, t, r)
    }
    ,
    Xe.trackLinks = function(e, t, r) {
        return r = r || {},
        !(!e || "object" != typeof e) && (!(!e.href || /^javascript/.test(e.href) || e.target) && void xe(e, "click", function(a) {
            function n() {
                i || (i = !0,
                location.href = e.href)
            }
            a.preventDefault();
            var i = !1;
            setTimeout(n, 1e3),
            Xe.track(t, r, n)
        }))
    }
    ,
    Xe.setItem = function(e, t, r) {
        Pt.check({
            item_type: e,
            item_id: t,
            properties: r
        }) && Pt.sendItem({
            type: "item_set",
            item_type: e,
            item_id: t,
            properties: r || {}
        })
    }
    ,
    Xe.deleteItem = function(e, t) {
        Pt.check({
            item_type: e,
            item_id: t
        }) && Pt.sendItem({
            type: "item_delete",
            item_type: e,
            item_id: t
        })
    }
    ,
    Xe.setProfile = function(e, t) {
        Pt.check({
            propertiesMust: e
        }) && Pt.send({
            type: "profile_set",
            properties: e
        }, t)
    }
    ,
    Xe.setOnceProfile = function(e, t) {
        Pt.check({
            propertiesMust: e
        }) && Pt.send({
            type: "profile_set_once",
            properties: e
        }, t)
    }
    ,
    Xe.appendProfile = function(t, r) {
        Pt.check({
            propertiesMust: t
        }) && (e(t, function(e, r) {
            v(e) ? t[r] = [e] : nt(e) ? t[r] = e : (delete t[r],
            Xe.log("appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"))
        }),
        h(t) || Pt.send({
            type: "profile_append",
            properties: t
        }, r))
    }
    ,
    Xe.incrementProfile = function(e, t) {
        function r(e) {
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t) && !/-*\d+/.test(String(e[t])))
                    return !1;
            return !0
        }
        var a = e;
        v(e) && (e = {},
        e[a] = 1),
        Pt.check({
            propertiesMust: e
        }) && (r(e) ? Pt.send({
            type: "profile_increment",
            properties: e
        }, t) : Xe.log("profile_increment\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57"))
    }
    ,
    Xe.deleteProfile = function(e) {
        Pt.send({
            type: "profile_delete"
        }, e),
        kt.set("distinct_id", _t()),
        kt.set("first_id", "")
    }
    ,
    Xe.unsetProfile = function(t, r) {
        var a = t
          , n = {};
        v(t) && (t = [],
        t.push(a)),
        nt(t) ? (e(t, function(e) {
            v(e) ? n[e] = !0 : Xe.log("profile_unset\u7ed9\u7684\u6570\u7ec4\u91cc\u9762\u7684\u503c\u5fc5\u987b\u65f6string,\u5df2\u7ecf\u8fc7\u6ee4\u6389", e)
        }),
        Pt.send({
            type: "profile_unset",
            properties: n
        }, r)) : Xe.log("profile_unset\u7684\u53c2\u6570\u662f\u6570\u7ec4")
    }
    ,
    Xe.identify = function(e, t) {
        "number" == typeof e && (e = String(e));
        var r = kt.getFirstId();
        if ("undefined" == typeof e) {
            var a = _t();
            r ? kt.set("first_id", a) : kt.set("distinct_id", a)
        } else
            Pt.check({
                distinct_id: e
            }) ? t === !0 ? r ? kt.set("first_id", e) : kt.set("distinct_id", e) : r ? kt.change("first_id", e) : kt.change("distinct_id", e) : Xe.log("identify\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32")
    }
    ,
    Xe.trackSignup = function(e, t, r, a) {
        if (Pt.check({
            distinct_id: e,
            event: t,
            properties: r
        })) {
            var n = kt.getFirstId() || kt.getDistinctId();
            kt.set("distinct_id", e),
            Pt.send({
                original_id: n,
                distinct_id: e,
                type: "track_signup",
                event: t,
                properties: r
            }, a)
        }
    }
    ,
    Xe.registerPage = function(e) {
        Pt.check({
            properties: e
        }) ? r(gt.currentProps, e) : Xe.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }
    ,
    Xe.clearAllRegister = function(e) {
        kt.clearAllProps(e)
    }
    ,
    Xe.clearPageRegister = function(e) {
        var t;
        if (nt(e) && e.length > 0)
            for (t = 0; t < e.length; t++)
                v(e[t]) && e[t]in gt.currentProps && delete gt.currentProps[e[t]];
        else if (e === !0)
            for (t in gt.currentProps)
                delete gt.currentProps[t]
    }
    ,
    Xe.register = function(e) {
        Pt.check({
            properties: e
        }) ? kt.setProps(e) : Xe.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }
    ,
    Xe.registerOnce = function(e) {
        Pt.check({
            properties: e
        }) ? kt.setPropsOnce(e) : Xe.log("registerOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }
    ,
    Xe.registerSession = function(e) {
        Pt.check({
            properties: e
        }) ? kt.setSessionProps(e) : Xe.log("registerSession\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }
    ,
    Xe.registerSessionOnce = function(e) {
        Pt.check({
            properties: e
        }) ? kt.setSessionPropsOnce(e) : Xe.log("registerSessionOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }
    ,
    Xe.login = function(e, t) {
        if ("number" == typeof e && (e = String(e)),
        Pt.check({
            distinct_id: e
        })) {
            var r = kt.getFirstId()
              , a = kt.getDistinctId();
            e !== a ? (r || kt.set("first_id", a),
            Xe.trackSignup(e, "$SignUp", {}, t)) : t && t()
        } else
            Xe.log("login\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32"),
            t && t()
    }
    ,
    Xe.logout = function(e) {
        var t = kt.getFirstId();
        if (t)
            if (kt.set("first_id", ""),
            e === !0) {
                var r = _t();
                kt.set("distinct_id", r)
            } else
                kt.set("distinct_id", t);
        else
            Xe.log("\u6ca1\u6709first_id\uff0clogout\u5931\u8d25")
    }
    ,
    Xe.getPresetProperties = function() {
        function t() {
            var t = gt.campaignParams()
              , r = {};
            return e(t, function(e, t, a) {
                (" " + Xe.source_channel_standard + " ").indexOf(" " + t + " ") !== -1 ? r["$" + t] = a[t] : r[t] = a[t]
            }),
            r
        }
        var a = {
            $is_first_day: mt.getNewUser(),
            $referrer: gt.pageProp.referrer || "",
            $referrer_host: gt.pageProp.referrer ? Z(gt.pageProp.referrer) : "",
            $url: Y(),
            $url_path: location.pathname,
            $title: document.title || "",
            _distinct_id: kt.getDistinctId()
        }
          , n = r({}, gt.properties(), Xe.store.getProps(), t(), a);
        return Xe.para.preset_properties.latest_referrer && Xe.para.preset_properties.latest_referrer_host && (n.$latest_referrer_host = "" === n.$latest_referrer ? "" : Z(n.$latest_referrer)),
        n
    }
    ,
    Xe.iOSWebClickPolyfill = function() {
        var t = ""
          , r = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";
        Xe.heatmap && nt(Xe.heatmap.otherTags) && e(Xe.heatmap.otherTags, function(e) {
            t += e + r
        }),
        Xe._.isIOS() && Xe._.getIOSVersion() && Xe._.getIOSVersion() < 13 && (Xe.para.heatmap && Xe.para.heatmap.collect_tags && Xe.para.heatmap.collect_tags.div && Xe._.setCssStyle("div, [data-sensors-click]" + r),
        Xe.para.heatmap && Xe.para.heatmap.track_attr && Xe._.setCssStyle("[" + Xe.para.heatmap.track_attr.join("], [") + "]" + r),
        "" !== t && Xe._.setCssStyle(t))
    }
    ;
    var Ot = {};
    Ot.buildData = function(e) {
        var t = {
            distinct_id: Xe.store.getDistinctId(),
            lib: {
                $lib: "js",
                $lib_method: "code",
                $lib_version: String(Xe.lib_version)
            },
            properties: {}
        };
        return _(e) && _(e.properties) && !h(e.properties) && (e.properties.$lib_detail && (t.lib.$lib_detail = e.properties.$lib_detail,
        delete e.properties.$lib_detail),
        e.properties.$lib_method && (t.lib.$lib_method = e.properties.$lib_method,
        delete e.properties.$lib_method)),
        r(t, Xe.store.getUnionId(), e),
        _(e.properties) && !h(e.properties) && r(t.properties, e.properties),
        e.type && "profile" === e.type.slice(0, 7) || (t.properties = r({}, gt.properties(), kt.getProps(), kt.getSessionProps(), gt.currentProps, t.properties),
        Xe.para.preset_properties.latest_referrer && !v(t.properties.$latest_referrer) && (t.properties.$latest_referrer = "\u53d6\u503c\u5f02\u5e38"),
        Xe.para.preset_properties.latest_search_keyword && !v(t.properties.$latest_search_keyword) && (Xe.para.preset_properties.search_keyword_baidu && v(t.properties.$search_keyword_id) && w(t.properties.$search_keyword_id_hash) && v(t.properties.$search_keyword_id_type) || (t.properties.$latest_search_keyword = "\u53d6\u503c\u5f02\u5e38")),
        Xe.para.preset_properties.latest_traffic_source_type && !v(t.properties.$latest_traffic_source_type) && (t.properties.$latest_traffic_source_type = "\u53d6\u503c\u5f02\u5e38"),
        Xe.para.preset_properties.latest_landing_page && !v(t.properties.$latest_landing_page) && (t.properties.$latest_landing_page = "\u53d6\u503c\u5f02\u5e38"),
        "not_collect" === Xe.para.preset_properties.latest_wx_ad_click_id ? (delete t.properties._latest_wx_ad_click_id,
        delete t.properties._latest_wx_ad_hash_key,
        delete t.properties._latest_wx_ad_callbacks) : Xe.para.preset_properties.latest_wx_ad_click_id && !v(t.properties._latest_wx_ad_click_id) && (t.properties._latest_wx_ad_click_id = "\u53d6\u503c\u5f02\u5e38",
        t.properties._latest_wx_ad_hash_key = "\u53d6\u503c\u5f02\u5e38",
        t.properties._latest_wx_ad_callbacks = "\u53d6\u503c\u5f02\u5e38"),
        v(t.properties._latest_wx_ad_click_id) && (t.properties.$url = Y())),
        t.properties.$time && y(t.properties.$time) ? (t.time = 1 * t.properties.$time,
        delete t.properties.$time) : t.time = 1 * new Date,
        Xe.vtrackBase.addCustomProps(t),
        se(t),
        oe(t.properties),
        te(t),
        ne(t),
        re(t),
        St.checkIsAddSign(t),
        St.checkIsFirstTime(t),
        Xe.addReferrerHost(t),
        Xe.addPropsHook(t),
        t
    }
    ,
    Ot.sendData = function(e, t) {
        var r = ce(e.properties);
        Xe.para.debug_mode === !0 ? (Xe.log(e),
        Xe.saEvent.debugPath(JSON.stringify(e), t)) : Xe.sendState.getSendCall(e, r, t)
    }
    ,
    Ot.encodeTrackData = function(e) {
        var t = x(e)
          , r = "crc=" + C(t);
        return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(r)
    }
    ;
    var jt = function(e) {
        this.callback = e.callback,
        this.img = document.createElement("img"),
        this.img.width = 1,
        this.img.height = 1,
        Xe.para.img_use_crossorigin && (this.img.crossOrigin = "anonymous"),
        this.data = e.data,
        this.server_url = Ue(e.server_url, e.data)
    };
    jt.prototype.start = function() {
        var e = this;
        Xe.para.ignore_oom && (this.img.onload = function() {
            this.onload = null,
            this.onerror = null,
            this.onabort = null,
            e.isEnd()
        }
        ,
        this.img.onerror = function() {
            this.onload = null,
            this.onerror = null,
            this.onabort = null,
            e.isEnd()
        }
        ,
        this.img.onabort = function() {
            this.onload = null,
            this.onerror = null,
            this.onabort = null,
            e.isEnd()
        }
        ),
        this.img.src = this.server_url
    }
    ,
    jt.prototype.lastClear = function() {
        this.img.src = ""
    }
    ;
    var xt = function(e) {
        this.callback = e.callback,
        this.server_url = e.server_url,
        this.data = Je(e.data)
    };
    xt.prototype.start = function() {
        var e = this;
        Le({
            url: this.server_url,
            type: "POST",
            data: this.data,
            credentials: !1,
            timeout: Xe.para.datasend_timeout,
            cors: !0,
            success: function() {
                e.isEnd()
            },
            error: function() {
                e.isEnd()
            }
        })
    }
    ;
    var Dt = function(e) {
        this.callback = e.callback,
        this.server_url = e.server_url,
        this.data = Je(e.data)
    };
    Dt.prototype.start = function() {
        var e = this;
        "object" == typeof navigator && "function" == typeof navigator.sendBeacon && navigator.sendBeacon(this.server_url, this.data),
        setTimeout(function() {
            e.isEnd()
        }, 40)
    }
    ;
    var Tt = {};
    Tt.queue = Se(),
    Tt.getSendCall = function(e, t, r) {
        if (Xe.is_heatmap_render_mode)
            return !1;
        if (Xe.readyState.state < 3)
            return Xe.log("\u521d\u59cb\u5316\u6ca1\u6709\u5b8c\u6210"),
            !1;
        e._track_id = Number(String(N()).slice(2, 5) + String(N()).slice(2, 4) + String((new Date).getTime()).slice(-4)),
        e._flush_time = (new Date).getTime();
        var a = e;
        e = JSON.stringify(e);
        var n = {
            data: a,
            config: t,
            callback: r
        };
        return Xe.events.tempAdd("send", a),
        !Xe.para.app_js_bridge && Xe.para.batch_send && localStorage.length < 200 ? (Xe.log(a),
        Xe.batchSend.add(n.data),
        !1) : ("item_set" === a.type || "item_delete" === a.type ? this.prepareServerUrl(n) : Xe.bridge.dataSend(n, this, r),
        void Xe.log(a))
    }
    ,
    Tt.prepareServerUrl = function(e) {
        if ("object" == typeof e.config && e.config.server_url)
            this.sendCall(e, e.config.server_url, e.callback);
        else if (nt(Xe.para.server_url) && Xe.para.server_url.length)
            for (var t = 0; t < Xe.para.server_url.length; t++)
                this.sendCall(e, Xe.para.server_url[t]);
        else
            "string" == typeof Xe.para.server_url && "" !== Xe.para.server_url ? this.sendCall(e, Xe.para.server_url, e.callback) : Xe.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01")
    }
    ,
    Tt.sendCall = function(e, t, r) {
        var a = {
            server_url: t,
            data: JSON.stringify(e.data),
            callback: r,
            config: e.config
        };
        _(Xe.para.jsapp) && !Xe.para.jsapp.isOnline && "function" == typeof Xe.para.jsapp.setData ? (delete a.callback,
        a = JSON.stringify(a),
        Xe.para.jsapp.setData(a)) : this.realtimeSend(a)
    }
    ,
    Tt.realtimeSend = function(e) {
        var t = Me(e);
        t.start()
    }
    ;
    var At = ["setItem", "deleteItem", "getAppStatus", "track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister"]
      , Et = {
        searchKeywordMatch: location.search.match(/sa-request-id=([^&#]+)/),
        isSeachHasKeyword: function() {
            var e = this.searchKeywordMatch;
            return !!(e && e[0] && e[1]) && ("string" == typeof sessionStorage.getItem("sensors-visual-mode") && sessionStorage.removeItem("sensors-visual-mode"),
            !0)
        },
        hasKeywordHandle: function() {
            var e = this.searchKeywordMatch
              , t = location.search.match(/sa-request-type=([^&#]+)/)
              , r = location.search.match(/sa-request-url=([^&#]+)/);
            Ct.setNotice(r),
            yt.isSupport() && (r && r[0] && r[1] && sessionStorage.setItem("sensors_heatmap_url", K(r[1])),
            sessionStorage.setItem("sensors_heatmap_id", e[1]),
            t && t[0] && t[1] ? "1" === t[1] || "2" === t[1] || "3" === t[1] ? (t = t[1],
            sessionStorage.setItem("sensors_heatmap_type", t)) : t = null : t = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null),
            this.isReady(e[1], t)
        },
        isReady: function(e, t, r) {
            Xe.para.heatmap_url ? J({
                success: function() {
                    setTimeout(function() {
                        "undefined" != typeof sa_jssdk_heatmap_render && (sa_jssdk_heatmap_render(Xe, e, t, r),
                        "object" == typeof console && "function" == typeof console.log && (Xe.heatmap_version && Xe.heatmap_version === Xe.lib_version || console.log("heatmap.js\u4e0esensorsdata.js\u7248\u672c\u53f7\u4e0d\u4e00\u81f4\uff0c\u53ef\u80fd\u5b58\u5728\u98ce\u9669!")))
                    }, 0)
                },
                error: function() {},
                type: "js",
                url: Xe.para.heatmap_url
            }) : Xe.log("\u6ca1\u6709\u6307\u5b9aheatmap_url\u7684\u8def\u5f84")
        },
        isStorageHasKeyword: function() {
            return yt.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id")
        },
        storageHasKeywordHandle: function() {
            Ct.setNotice(),
            Et.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)
        }
    };
    Xe.use = function(e, t) {
        return v(e) ? "PageLeave" !== e ? void L("\u5f53\u524d\u7248\u672c\u652f\u6301\u591a\u6587\u4ef6\u5b9e\u4f8b\uff0c\u4e0d\u652f\u6301" + e + "\u63d2\u4ef6\u3002") : _(Xe.modules) && _(Xe.modules[e]) && i(Xe.modules[e].init) ? (Xe.modules[e].init(Xe, t),
        Xe.modules[e]) : void Xe.log(e + "\u6ca1\u6709\u83b7\u53d6\u5230,\u8bf7\u67e5\u9605\u6587\u6863\uff0c\u8c03\u6574" + e + "\u7684\u5f15\u5165\u987a\u5e8f\uff01") : (Xe.log("use\u63d2\u4ef6\u540d\u79f0\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff01"),
        !1)
    }
    ;
    var It = {
        initPara: function() {},
        initState: function() {},
        initDefineBridgeInfo: function() {},
        bridge_info: {
            touch_app_bridge: !1
        },
        dataSend: function(e, t) {
            t.prepareServerUrl(e)
        }
    }
      , Lt = {
        init: function() {},
        addCustomProps: function() {}
    }
      , Ht = {
        add: function(e) {
            Xe.para.batch_send = !1;
            var t = ce(e.properties);
            Xe.sendState.prepareServerUrl({
                data: e,
                config: t
            })
        }
    };
    return Xe.modules = {},
    Xe._ = wt,
    Xe.kit = Ot,
    Xe.saEvent = Pt,
    Xe.sendState = Tt,
    Xe.events = new bt,
    Xe.store = kt,
    Xe.heatmap = Ct,
    Xe.bridge = It,
    Xe.JSBridge = Ve,
    Xe.vtrackBase = Lt,
    Xe.batchSend = Ht,
    Xe.init = function(e) {
        return !(Xe.readyState && Xe.readyState.state && Xe.readyState.state >= 2) && (e = e || {},
        e.batch_send = !1,
        _(e.heatmap) && (e.heatmap.get_vtrack_config = !1),
        Xe.setInitVar(),
        Xe.readyState.setState(2),
        Xe.initPara(e),
        ze(),
        void Xe.iOSWebClickPolyfill())
    }
    ,
    Ke(),
    Xe.modules.PageLeave = function() {
        function e() {
            this.sd = null,
            this.start_time = +new Date,
            this.page_show_status = !0,
            this.page_hidden_status = !1,
            this._ = {},
            this.timer = null,
            this.current_page_url = document.referrer,
            this.url = location.href,
            this.option = {},
            this.heartbeat_interval_time = 5e3,
            this.heartbeat_interval_timer = null,
            this.page_id = null,
            this.storage_name = "sawebjssdkpageleave"
        }
        var t = 500;
        e.prototype.init = function(e, t) {
            if (e) {
                this.sd = e,
                this._ = this.sd._;
                var r = this;
                if (t) {
                    this.option = t;
                    var a = t.heartbeat_interval_time;
                    a && (this._.isNumber(a) || this._.isNumber(1 * a)) && 1 * a > 0 && (this.heartbeat_interval_time = 1e3 * a)
                }
                this.storage_name = (e.para.sdk_id || "") + "sawebjssdkpageleave",
                this.page_id = Number(String(N()).slice(2, 5) + String(N()).slice(2, 4) + String((new Date).getTime()).slice(-4)),
                r.addEventListener(),
                r.addHeartBeatInterval(),
                this.log("PageLeave\u521d\u59cb\u5316\u5b8c\u6bd5")
            } else
                this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")
        }
        ,
        e.prototype.log = function(e) {
            this.sd && this.sd.log(e)
        }
        ,
        e.prototype.getSingleStatus = function() {
            var e = this.sd.para.is_track_single_page;
            if (e && this._.isBoolean(e))
                return !0;
            if (this._.isFunction(e)) {
                var t = e();
                if (this._.isObject(t) || t === !0)
                    return !0
            }
            return !1
        }
        ,
        e.prototype.refreshPageEndTimer = function() {
            var e = this;
            this.timer && (clearTimeout(this.timer),
            this.timer = null),
            this.timer = setTimeout(function() {
                e.page_hidden_status = !1
            }, t)
        }
        ,
        e.prototype.pageStartHandler = function() {
            this.start_time = +new Date,
            this.page_show_status = !0
        }
        ,
        e.prototype.pageEndHandlear = function() {
            if (this.page_hidden_status !== !0) {
                var e = this.getPageLeaveProperties();
                this.page_show_status === !1 && delete e.event_duration,
                this.page_show_status = !1,
                this.page_hidden_status = !0,
                this.sd.track("$WebPageLeave", e),
                this.refreshPageEndTimer(),
                this.delHeartBeatData()
            }
        }
        ,
        e.prototype.addEventListener = function() {
            this.addPageStartListener(),
            this.addPageSwitchListener(),
            this.addPageEndListener()
        }
        ,
        e.prototype.addPageStartListener = function() {
            var e = this;
            "onpageshow"in window && this._.addEvent(window, "pageshow", function() {
                e.pageStartHandler()
            })
        }
        ,
        e.prototype.addSinglePageListener = function() {
            var e = this;
            this._.addSinglePageEvent(function(t) {
                e.getSingleStatus() && t !== location.href && (e.url = t,
                e.pageEndHandlear(),
                e.pageStartHandler(),
                e.current_page_url = e.url)
            })
        }
        ,
        e.prototype.addPageEndListener = function() {
            var e = this;
            this._.each(["pagehide", "beforeunload", "unload"], function(t) {
                "on" + t in window && e._.addEvent(window, t, function() {
                    e.pageEndHandlear()
                })
            })
        }
        ,
        e.prototype.addPageSwitchListener = function() {
            var e = this;
            this._.listenPageState({
                visible: function() {
                    e.pageStartHandler(),
                    e.startHeartBeatInterval()
                },
                hidden: function() {
                    e.url = location.href,
                    e.pageEndHandlear(),
                    e.stopHeartBeatInterval()
                }
            })
        }
        ,
        e.prototype.addHeartBeatInterval = function() {
            this._.localStorage.isSupport() && this.startHeartBeatInterval()
        }
        ,
        e.prototype.startHeartBeatInterval = function() {
            var e = this;
            this.heartbeat_interval_timer && this.stopHeartBeatInterval(),
            this.heartbeat_interval_timer = setInterval(function() {
                e.saveHeartBeatData(),
                e.reissueHeartBeatData()
            }, this.heartbeat_interval_time),
            this.saveHeartBeatData("is_first_heartbeat"),
            this.reissueHeartBeatData()
        }
        ,
        e.prototype.stopHeartBeatInterval = function() {
            clearInterval(this.heartbeat_interval_timer),
            this.heartbeat_interval_timer = null
        }
        ,
        e.prototype.saveHeartBeatData = function(e) {
            var t = this.getPageLeaveProperties();
            t.$time = new Date,
            "is_first_heartbeat" === e && (t.event_duration = 3.14);
            var r = this.sd.kit.buildData({
                type: "track",
                event: "$WebPageLeave",
                properties: t
            });
            r.heartbeat_interval_time = this.heartbeat_interval_time,
            this._.localStorage.set(this.storage_name + "-" + this.page_id, JSON.stringify(r))
        }
        ,
        e.prototype.delHeartBeatData = function(e) {
            this._.localStorage.remove(e || this.storage_name + "-" + this.page_id)
        }
        ,
        e.prototype.reissueHeartBeatData = function() {
            for (var e = window.localStorage.length, t = 0; t < e; t++) {
                var r = window.localStorage.key(t);
                if (r && r !== this.storage_name + "-" + this.page_id && 0 === r.indexOf(this.storage_name + "-")) {
                    var a = this._.localStorage.parse(r);
                    this._.isObject(a) && 1 * new Date - a.time > a.heartbeat_interval_time + 5e3 && (delete a.heartbeat_interval_time,
                    this.sd.kit.sendData(a),
                    this.delHeartBeatData(r))
                }
            }
        }
        ,
        e.prototype.getPageLeaveProperties = function() {
            var e = (+new Date - this.start_time) / 1e3;
            (isNaN(e) || e < 0) && (e = 0),
            e = Number(e.toFixed(3));
            var t = this._.getReferrer(this.current_page_url)
              , r = {
                $title: document.title,
                $url: this._.getURL(),
                $url_path: location.pathname,
                $referrer_host: t ? this._.getHostname(t) : "",
                $referrer: t
            };
            return 0 !== e && (r.event_duration = e),
            r = this._.extend(r, this.option.custom_props)
        }
        ;
        var r = new e;
        return r
    }(),
    Xe
});
