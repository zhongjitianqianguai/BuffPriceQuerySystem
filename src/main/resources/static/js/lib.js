!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (_, N) {
    function R(e) {
        var t = !!e && "length" in e && e.length, n = S.type(e);
        return "function" === n || S.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function H(e, n, i) {
        if (S.isFunction(n)) return S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return S.grep(e, function (e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (Be.test(n)) return S.filter(n, e, i);
            n = S.filter(n, e)
        }
        return S.grep(e, function (e) {
            return S.inArray(e, n) > -1 !== i
        })
    }

    function B(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function W(e) {
        var n = {};
        return S.each(e.match(C) || [], function (e, t) {
            n[t] = !0
        }), n
    }

    function z() {
        p.addEventListener ? (p.removeEventListener("DOMContentLoaded", t), _.removeEventListener("load", t)) : (p.detachEvent("onreadystatechange", t), _.detachEvent("onload", t))
    }

    function t() {
        (p.addEventListener || "load" === _.event.type || "complete" === p.readyState) && (z(), S.ready())
    }

    function j(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace($e, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ue.test(n) ? S.parseJSON(n) : n
                } catch (e) {
                }
                S.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function Y(e) {
        var t;
        for (t in e) if (("data" !== t || !S.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function V(e, t, n, i) {
        if (x(e)) {
            var r, o, a = S.expando, s = e.nodeType, l = s ? S.cache : e, u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = f.pop() || S.guid++ : a), l[u] || (l[u] = s ? {} : {toJSON: S.noop}), "object" != typeof t && "function" != typeof t || (i ? l[u] = S.extend(l[u], t) : l[u].data = S.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[S.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[S.camelCase(t)])) : r = o, r
        }
    }

    function q(e, t, n) {
        if (x(e)) {
            var i, r, o = e.nodeType, a = o ? S.cache : e, s = o ? e[S.expando] : S.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    S.isArray(t) ? t = t.concat(S.map(t, S.camelCase)) : t in i ? t = [t] : (t = S.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !Y(i) : !S.isEmptyObject(i)) return
                }
                (n || (delete a[s].data, Y(a[s]))) && (o ? S.cleanData([e], !0) : b.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function U(e, t, n, i) {
        var r, o = 1, a = 20, s = i ? function () {
                return i.cur()
            } : function () {
                return S.css(e, t, "")
            }, l = s(), u = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = (S.cssNumber[t] || "px" !== u && +l) && Ze.exec(S.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                o = o || ".5", c /= o, S.style(e, t, c + u)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function $(e) {
        var t = et.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    function m(e, t) {
        var n, i, r = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || S.nodeName(i, t) ? o.push(i) : S.merge(o, m(i, t));
        return void 0 === t || t && S.nodeName(e, t) ? S.merge([e], o) : o
    }

    function G(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) S._data(n, "globalEval", !t || S._data(t[i], "globalEval"))
    }

    function Z(e) {
        Xe.test(e.type) && (e.defaultChecked = e.checked)
    }

    function X(e, t, n, i, r) {
        for (var o, a, s, l, u, c, d, f = e.length, h = $(t), p = [], g = 0; f > g; g++) if (a = e[g], a || 0 === a) if ("object" === S.type(a)) S.merge(p, a.nodeType ? [a] : a); else if (tt.test(a)) {
            for (l = l || h.appendChild(t.createElement("div")), u = (Ke.exec(a) || ["", ""])[1].toLowerCase(), d = T[u] || T._default, l.innerHTML = d[1] + S.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
            if (!b.leadingWhitespace && Qe.test(a) && p.push(t.createTextNode(Qe.exec(a)[0])), !b.tbody) for (a = "table" !== u || nt.test(a) ? "<table>" !== d[1] || nt.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--;) S.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (S.merge(p, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = h.lastChild
        } else p.push(t.createTextNode(a));
        for (l && h.removeChild(l), b.appendChecked || S.grep(m(p, "input"), Z), g = 0; a = p[g++];) if (i && S.inArray(a, i) > -1) r && r.push(a); else if (s = S.contains(a.ownerDocument, a), l = m(h.appendChild(a), "script"), s && G(l), n) for (o = 0; a = l[o++];) Je.test(a.type || "") && n.push(a);
        return l = null, h
    }

    function n() {
        return !0
    }

    function l() {
        return !1
    }

    function K() {
        try {
            return p.activeElement
        } catch (e) {
        }
    }

    function J(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) J(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = l; else if (!r) return e;
        return 1 === o && (a = r, r = function (e) {
            return S().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, r, i, n)
        })
    }

    function Q(e, t) {
        return S.nodeName(e, "table") && S.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ee(e) {
        return e.type = (null !== S.find.attr(e, "type")) + "/" + e.type, e
    }

    function te(e) {
        var t = ht.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ne(e, t) {
        if (1 === t.nodeType && S.hasData(e)) {
            var n, i, r, o = S._data(e), a = S._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (i = 0, r = s[n].length; r > i; i++) S.event.add(t, n, s[n][i])
            }
            a.data && (a.data = S.extend({}, a.data))
        }
    }

    function ie(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.noCloneEvent && t[S.expando]) {
                r = S._data(t);
                for (i in r.events) S.removeEvent(t, i, r.handle);
                t.removeAttribute(S.expando)
            }
            "script" === n && t.text !== e.text ? (ee(t).text = e.text, te(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.html5Clone && e.innerHTML && !S.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Xe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function g(n, i, r, o) {
        i = Me.apply([], i);
        var e, t, a, s, l, u, c = 0, d = n.length, f = d - 1, h = i[0], p = S.isFunction(h);
        if (p || d > 1 && "string" == typeof h && !b.checkClone && ft.test(h)) return n.each(function (e) {
            var t = n.eq(e);
            p && (i[0] = h.call(this, e, t.html())), g(t, i, r, o)
        });
        if (d && (u = X(i, n[0].ownerDocument, !1, n, o), e = u.firstChild, 1 === u.childNodes.length && (u = e), e || o)) {
            for (s = S.map(m(u, "script"), ee), a = s.length; d > c; c++) t = u, c !== f && (t = S.clone(t, !0, !0), a && S.merge(s, m(t, "script"))), r.call(n[c], t, c);
            if (a) for (l = s[s.length - 1].ownerDocument, S.map(s, te), c = 0; a > c; c++) t = s[c], Je.test(t.type || "") && !S._data(t, "globalEval") && S.contains(l, t) && (t.src ? S._evalUrl && S._evalUrl(t.src) : S.globalEval((t.text || t.textContent || t.innerHTML || "").replace(pt, "")));
            u = e = null
        }
        return n
    }

    function re(e, t, n) {
        for (var i, r = t ? S.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || S.cleanData(m(i)), i.parentNode && (n && S.contains(i.ownerDocument, i) && G(m(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function oe(e, t) {
        var n = S(t.createElement(e)).appendTo(t.body), i = S.css(n[0], "display");
        return n.detach(), i
    }

    function v(e) {
        var t = p, n = vt[e];
        return n || (n = oe(e, t), "none" !== n && n || (M = (M || S("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (M[0].contentWindow || M[0].contentDocument).document, t.write(), t.close(), n = oe(e, t), M.detach()), vt[e] = n), n
    }

    function ae(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function se(e) {
        if (e in Pt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = At.length; n--;) if (e = At[n] + t, e in Pt) return e
    }

    function le(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = S._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && w(i) && (o[a] = S._data(i, "olddisplay", v(i.nodeName)))) : (r = w(i), (n && "none" !== n || !r) && S._data(i, "olddisplay", r ? n : S.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function ue(e, t, n) {
        var i = Tt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function ce(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += S.css(e, n + h[o], !0, r)), i ? ("content" === n && (a -= S.css(e, "padding" + h[o], !0, r)), "margin" !== n && (a -= S.css(e, "border" + h[o] + "Width", !0, r))) : (a += S.css(e, "padding" + h[o], !0, r), "padding" !== n && (a += S.css(e, "border" + h[o] + "Width", !0, r)));
        return a
    }

    function de(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = D(e),
            a = b.boxSizing && "border-box" === S.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = A(e, t, o), (0 > r || null == r) && (r = e.style[t]), bt.test(r)) return r;
            i = a && (b.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + ce(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function o(e, t, n, i, r) {
        return new o.prototype.init(e, t, n, i, r)
    }

    function fe() {
        return _.setTimeout(function () {
            P = void 0
        }), P = S.now()
    }

    function a(e, t) {
        var n, i = {height: e}, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = h[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function he(e, t, n) {
        for (var i, r = (d.tweeners[t] || []).concat(d.tweeners["*"]), o = 0, a = r.length; a > o; o++) if (i = r[o].call(n, t, e)) return i
    }

    function pe(t, e, n) {
        var i, r, o, a, s, l, u, c, d = this, f = {}, h = t.style, p = t.nodeType && w(t), g = S._data(t, "fxshow");
        n.queue || (s = S._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, S.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = S.css(t, "display"), c = "none" === u ? S._data(t, "olddisplay") || v(t.nodeName) : u, "inline" === c && "none" === S.css(t, "float") && (b.inlineBlockNeedsLayout && "inline" !== v(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", b.shrinkWrapBlocks() || d.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in e) if (r = e[i], Et.exec(r)) {
            if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                if ("show" !== r || !g || void 0 === g[i]) continue;
                p = !0
            }
            f[i] = g && g[i] || S.style(t, i)
        } else u = void 0;
        if (S.isEmptyObject(f)) "inline" === ("none" === u ? v(t.nodeName) : u) && (h.display = u); else {
            g ? "hidden" in g && (p = g.hidden) : g = S._data(t, "fxshow", {}), o && (g.hidden = !p), p ? S(t).show() : d.done(function () {
                S(t).hide()
            }), d.done(function () {
                var e;
                S._removeData(t, "fxshow");
                for (e in f) S.style(t, e, f[e])
            });
            for (i in f) a = he(p ? g[i] : 0, i, d), i in g || (g[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function ge(e, t) {
        var n, i, r, o, a;
        for (n in e) if (i = S.camelCase(n), r = t[i], o = e[n], S.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = S.cssHooks[i], a && "expand" in a) {
            o = a.expand(o), delete e[i];
            for (n in o) n in e || (e[n] = o[n], t[n] = r)
        } else t[i] = r
    }

    function d(a, e, t) {
        var n, s, i = 0, r = d.prefilters.length, l = S.Deferred().always(function () {
            delete o.elem
        }), o = function () {
            if (s) return !1;
            for (var e = P || fe(), t = Math.max(0, u.startTime + u.duration - e), n = t / u.duration || 0, i = 1 - n, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
            return l.notifyWith(a, [u, i, t]), 1 > i && o ? t : (l.resolveWith(a, [u]), !1)
        }, u = l.promise({
            elem: a,
            props: S.extend({}, e),
            opts: S.extend(!0, {specialEasing: {}, easing: S.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: P || fe(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = S.Tween(a, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? u.tweens.length : 0;
                if (s) return this;
                for (s = !0; n > t; t++) u.tweens[t].run(1);
                return e ? (l.notifyWith(a, [u, 1, 0]), l.resolveWith(a, [u, e])) : l.rejectWith(a, [u, e]), this
            }
        }), c = u.props;
        for (ge(c, u.opts.specialEasing); r > i; i++) if (n = d.prefilters[i].call(u, a, c, u.opts)) return S.isFunction(n.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = S.proxy(n.stop, n)), n;
        return S.map(c, he, u), S.isFunction(u.opts.start) && u.opts.start.call(a, u), S.fx.timer(S.extend(o, {
            elem: a,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function u(e) {
        return S.attr(e, "class") || ""
    }

    function me(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0, r = e.toLowerCase().match(C) || [];
            if (S.isFunction(t)) for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function ve(t, r, o, a) {
        function s(e) {
            var i;
            return l[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(r, o, a);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), s(n), !1)
            }), i
        }

        var l = {}, u = t === en;
        return s(r.dataTypes[0]) || !l["*"] && s("*")
    }

    function ye(e, t) {
        var n, i, r = S.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && S.extend(!0, e, n), e
    }

    function be(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (a in s) if (s[a] && s[a].test(r)) {
            l.unshift(a);
            break
        }
        if (l[0] in n) o = l[0]; else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function xe(e, t, n, i) {
        var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a) for (r in u) if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function we(e) {
        return e.style && e.style.display || S.css(e, "display")
    }

    function ke(e) {
        if (!S.contains(e.ownerDocument || p, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === we(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function _e(n, e, i, r) {
        var t;
        if (S.isArray(e)) S.each(e, function (e, t) {
            i || on.test(n) ? r(n, t) : _e(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        }); else if (i || "object" !== S.type(e)) r(n, e); else for (t in e) _e(n + "[" + t + "]", e[t], i, r)
    }

    function Se() {
        try {
            return new _.XMLHttpRequest
        } catch (e) {
        }
    }

    function Ce() {
        try {
            return new _.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function Te(e) {
        return S.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var f = [], p = _.document, c = f.slice, Me = f.concat, De = f.push, Ae = f.indexOf, i = {}, Pe = i.toString,
        y = i.hasOwnProperty, b = {}, Ie = "1.12.4", S = function (e, t) {
            return new S.fn.init(e, t)
        }, Ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Oe = /^-ms-/, Le = /-([\da-z])/gi, Fe = function (e, t) {
            return t.toUpperCase()
        };
    S.fn = S.prototype = {
        jquery: Ie, constructor: S, selector: "", length: 0, toArray: function () {
            return c.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : c.call(this)
        }, pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return S.each(this, e)
        }, map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(c.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: De, sort: f.sort, splice: f.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || S.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) if (null != (r = arguments[s])) for (i in r) e = a[i], n = r[i], a !== n && (u && n && (S.isPlainObject(n) || (t = S.isArray(n))) ? (t ? (t = !1, o = e && S.isArray(e) ? e : []) : o = e && S.isPlainObject(e) ? e : {}, a[i] = S.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, S.extend({
        expando: "jQuery" + (Ie + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === S.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === S.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !S.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== S.type(e) || e.nodeType || S.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!b.ownFirst) for (t in e) return y.call(e, t);
            for (t in e) ;
            return void 0 === t || y.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[Pe.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            e && S.trim(e) && (_.execScript || function (e) {
                _.eval.call(_, e)
            })(e)
        }, camelCase: function (e) {
            return e.replace(Oe, "ms-").replace(Le, Fe)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var n, i = 0;
            if (R(e)) for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++) ; else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(Ee, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (R(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : De.call(n, e)), n
        }, inArray: function (e, t, n) {
            var i;
            if (t) {
                if (Ae) return Ae.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
            if (n !== n) for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        }, map: function (e, t, n) {
            var i, r, o = 0, a = [];
            if (R(e)) for (i = e.length; i > o; o++) r = t(e[o], o, n), null != r && a.push(r); else for (o in e) r = t(e[o], o, n), null != r && a.push(r);
            return Me.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), S.isFunction(e) ? (n = c.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(c.call(arguments)))
            }, i.guid = e.guid = e.guid || S.guid++, i) : void 0
        }, now: function () {
            return +new Date
        }, support: b
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = f[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var e = function (N) {
        function x(e, t, n, i) {
            var r, o, a, s, l, u, c, d, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : b) !== C && S(t), t = t || C, T)) {
                if (11 !== h && (u = be.exec(e))) if (r = u[1]) {
                    if (9 === h) {
                        if (!(a = t.getElementById(r))) return n;
                        if (a.id === r) return n.push(a), n
                    } else if (f && (a = f.getElementById(r)) && y(t, a) && a.id === r) return n.push(a), n
                } else {
                    if (u[2]) return P.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = u[3]) && g.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(r)), n
                }
                if (g.qsa && !A[e + " "] && (!v || !v.test(e))) {
                    if (1 !== h) f = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, "\\$&") : t.setAttribute("id", s = M), c = m(e), o = c.length, l = me.test(s) ? "#" + s : "[id='" + s + "']"; o--;) c[o] = l + " " + p(c[o]);
                        d = c.join(","), f = xe.test(e) && j(t.parentNode) || t
                    }
                    if (d) try {
                        return P.apply(n, f.querySelectorAll(d)), n
                    } catch (e) {
                    } finally {
                        s === M && t.removeAttribute("id")
                    }
                }
            }
            return J(e.replace(E, "$1"), t, n, i)
        }

        function R() {
            function n(e, t) {
                return i.push(e + " ") > k.cacheLength && delete n[i.shift()], n[e + " "] = t
            }

            var i = [];
            return n
        }

        function n(e) {
            return e[M] = !0, e
        }

        function r(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function H(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
        }

        function B(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || ie) - (~e.sourceIndex || ie);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function W(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && e.type === n
            }
        }

        function z(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function e(a) {
            return n(function (o) {
                return o = +o, n(function (e, t) {
                    for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function j(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function Y() {
        }

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function V(s, e, t) {
            var l = e.dir, u = t && "parentNode" === l, c = Q++;
            return e.first ? function (e, t, n) {
                for (; e = e[l];) if (1 === e.nodeType || u) return s(e, t, n)
            } : function (e, t, n) {
                var i, r, o, a = [D, c];
                if (n) {
                    for (; e = e[l];) if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                } else for (; e = e[l];) if (1 === e.nodeType || u) {
                    if (o = e[M] || (e[M] = {}), r = o[e.uniqueID] || (o[e.uniqueID] = {}), (i = r[l]) && i[0] === D && i[1] === c) return a[2] = i[2];
                    if (r[l] = a, a[2] = s(e, t, n)) return !0
                }
            }
        }

        function q(r) {
            return r.length > 1 ? function (e, t, n) {
                for (var i = r.length; i--;) if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function U(e, t, n) {
            for (var i = 0, r = t.length; r > i; i++) x(e, t[i], n);
            return n
        }

        function w(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++) (o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
            return a
        }

        function $(h, p, g, m, v, e) {
            return m && !m[M] && (m = $(m)), v && !v[M] && (v = $(v, e)), n(function (e, t, n, i) {
                var r, o, a, s = [], l = [], u = t.length, c = e || U(p || "*", n.nodeType ? [n] : n, []),
                    d = !h || !e && p ? c : w(c, s, h, n, i), f = g ? v || (e ? h : u || m) ? [] : t : d;
                if (g && g(d, f, n, i), m) for (r = w(f, l), m(r, [], n, i), o = r.length; o--;) (a = r[o]) && (f[l[o]] = !(d[l[o]] = a));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (r = [], o = f.length; o--;) (a = f[o]) && r.push(d[o] = a);
                            v(null, f = [], r, i)
                        }
                        for (o = f.length; o--;) (a = f[o]) && (r = v ? I(e, a) : s[o]) > -1 && (e[r] = !(t[r] = a))
                    }
                } else f = w(f === t ? f.splice(u, f.length) : f), v ? v(null, t, f, i) : P.apply(t, f)
            })
        }

        function G(e) {
            for (var r, t, n, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = V(function (e) {
                return e === r
            }, a, !0), u = V(function (e) {
                return I(r, e) > -1
            }, a, !0), c = [function (e, t, n) {
                var i = !o && (n || t !== _) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                return r = null, i
            }]; i > s; s++) if (t = k.relative[e[s].type]) c = [V(q(c), t)]; else {
                if (t = k.filter[e[s].type].apply(null, e[s].matches), t[M]) {
                    for (n = ++s; i > n && !k.relative[e[n].type]; n++) ;
                    return $(s > 1 && q(c), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(E, "$1"), t, n > s && G(e.slice(s, n)), i > n && G(e = e.slice(n)), i > n && p(e))
                }
                c.push(t)
            }
            return q(c)
        }

        function Z(m, v) {
            var y = v.length > 0, b = m.length > 0, e = function (e, t, n, i, r) {
                var o, a, s, l = 0, u = "0", c = e && [], d = [], f = _, h = e || b && k.find.TAG("*", r),
                    p = D += null == f ? 1 : Math.random() || .1, g = h.length;
                for (r && (_ = t === C || t || r); u !== g && null != (o = h[u]); u++) {
                    if (b && o) {
                        for (a = 0, t || o.ownerDocument === C || (S(o), n = !T); s = m[a++];) if (s(o, t || C, n)) {
                            i.push(o);
                            break
                        }
                        r && (D = p)
                    }
                    y && ((o = !s && o) && l--, e && c.push(o))
                }
                if (l += u, y && u !== l) {
                    for (a = 0; s = v[a++];) s(c, d, t, n);
                    if (e) {
                        if (l > 0) for (; u--;) c[u] || d[u] || (d[u] = oe.call(i));
                        d = w(d)
                    }
                    P.apply(i, d), r && !e && d.length > 0 && l + v.length > 1 && x.uniqueSort(i)
                }
                return r && (D = p, _ = f), c
            };
            return y ? n(e) : e
        }

        var t, g, k, o, X, m, K, J, _, l, u, S, C, a, T, v, s, c, y, M = "sizzle" + 1 * new Date, b = N.document, D = 0,
            Q = 0, ee = R(), te = R(), A = R(), ne = function (e, t) {
                return e === t && (u = !0), 0
            }, ie = 1 << 31, re = {}.hasOwnProperty, i = [], oe = i.pop, ae = i.push, P = i.push, se = i.slice,
            I = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
                return -1
            },
            le = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            d = "[\\x20\\t\\r\\n\\f]", f = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ue = "\\[" + d + "*(" + f + ")(?:" + d + "*([*^$|!~]?=)" + d + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + f + "))|)" + d + "*\\]",
            ce = ":(" + f + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ue + ")*)|.*)\\)|)",
            de = new RegExp(d + "+", "g"), E = new RegExp("^" + d + "+|((?:^|[^\\\\])(?:\\\\.)*)" + d + "+$", "g"),
            fe = new RegExp("^" + d + "*," + d + "*"), he = new RegExp("^" + d + "*([>+~]|" + d + ")" + d + "*"),
            pe = new RegExp("=" + d + "*([^\\]'\"]*?)" + d + "*\\]", "g"), ge = new RegExp(ce),
            me = new RegExp("^" + f + "$"), h = {
                ID: new RegExp("^#(" + f + ")"),
                CLASS: new RegExp("^\\.(" + f + ")"),
                TAG: new RegExp("^(" + f + "|[*])"),
                ATTR: new RegExp("^" + ue),
                PSEUDO: new RegExp("^" + ce),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + d + "*(even|odd|(([+-]|)(\\d*)n|)" + d + "*(?:([+-]|)" + d + "*(\\d+)|))" + d + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + le + ")$", "i"),
                needsContext: new RegExp("^" + d + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + d + "*((?:-\\d)?\\d*)" + d + "*\\)|)(?=[^-]|$)", "i")
            }, ve = /^(?:input|select|textarea|button)$/i, ye = /^h\d$/i, O = /^[^{]+\{\s*\[native \w/,
            be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, we = /'|\\/g,
            L = new RegExp("\\\\([\\da-f]{1,6}" + d + "?|(" + d + ")|.)", "ig"), F = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, ke = function () {
                S()
            };
        try {
            P.apply(i = se.call(b.childNodes), b.childNodes), i[b.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: i.length ? function (e, t) {
                    ae.apply(e, se.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }
        g = x.support = {}, X = x.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, S = x.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : b;
            return i !== C && 9 === i.nodeType && i.documentElement ? (C = i, a = C.documentElement, T = !X(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), g.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), g.getElementsByTagName = r(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), g.getElementsByClassName = O.test(C.getElementsByClassName), g.getById = r(function (e) {
                return a.appendChild(e).id = M, !C.getElementsByName || !C.getElementsByName(M).length
            }), g.getById ? (k.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && T) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(L, F);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function (e) {
                var n = e.replace(L, F);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }), k.find.TAG = g.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : g.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, k.find.CLASS = g.getElementsByClassName && function (e, t) {
                return "undefined" != typeof t.getElementsByClassName && T ? t.getElementsByClassName(e) : void 0
            }, s = [], v = [], (g.qsa = O.test(C.querySelectorAll)) && (r(function (e) {
                a.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + d + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + d + "*(?:value|" + le + ")"), e.querySelectorAll("[id~=" + M + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || v.push(".#.+[+~]")
            }), r(function (e) {
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + d + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (g.matchesSelector = O.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && r(function (e) {
                g.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), s.push("!=", ce)
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = O.test(a.compareDocumentPosition), y = t || O.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, ne = t ? function (e, t) {
                if (e === t) return u = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === b && y(b, e) ? -1 : t === C || t.ownerDocument === b && y(b, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return u = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!r || !o) return e === C ? -1 : t === C ? 1 : r ? -1 : o ? 1 : l ? I(l, e) - I(l, t) : 0;
                if (r === o) return B(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[i] === s[i];) i++;
                return i ? B(a[i], s[i]) : a[i] === b ? -1 : s[i] === b ? 1 : 0
            }, C) : C
        }, x.matches = function (e, t) {
            return x(e, null, null, t)
        }, x.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== C && S(e), t = t.replace(pe, "='$1']"), g.matchesSelector && T && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return x(t, C, null, [e]).length > 0
        }, x.contains = function (e, t) {
            return (e.ownerDocument || e) !== C && S(e), y(e, t)
        }, x.attr = function (e, t) {
            (e.ownerDocument || e) !== C && S(e);
            var n = k.attrHandle[t.toLowerCase()],
                i = n && re.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
            return void 0 !== i ? i : g.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, x.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, x.uniqueSort = function (e) {
            var t, n = [], i = 0, r = 0;
            if (u = !g.detectDuplicates, l = !g.sortStable && e.slice(0), e.sort(ne), u) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return l = null, e
        }, o = x.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i++];) n += o(t);
            return n
        }, k = x.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: h,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(L, F), e[3] = (e[3] || e[4] || e[5] || "").replace(L, F), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return h.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ge.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(L, F).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = ee[e + " "];
                    return t || (t = new RegExp("(^|" + d + ")" + e + "(" + d + "|$)")) && ee(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, i, r) {
                    return function (e) {
                        var t = x.attr(e, n);
                        return null == t ? "!=" === i : i ? (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && t.indexOf(r) > -1 : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? (" " + t.replace(de, " ") + " ").indexOf(r) > -1 : "|=" === i ? t === r || t.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                }, CHILD: function (p, e, t, g, m) {
                    var v = "nth" !== p.slice(0, 3), y = "last" !== p.slice(-4), b = "of-type" === e;
                    return 1 === g && 0 === m ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var i, r, o, a, s, l, u = v !== y ? "nextSibling" : "previousSibling", c = e.parentNode,
                            d = b && e.nodeName.toLowerCase(), f = !n && !b, h = !1;
                        if (c) {
                            if (v) {
                                for (; u;) {
                                    for (a = e; a = a[u];) if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                    l = u = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? c.firstChild : c.lastChild], y && f) {
                                for (a = c, o = a[M] || (a[M] = {}), r = o[a.uniqueID] || (o[a.uniqueID] = {}), i = r[p] || [], s = i[0] === D && i[1], h = s && i[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (h = s = 0) || l.pop();) if (1 === a.nodeType && ++h && a === e) {
                                    r[p] = [D, s, h];
                                    break
                                }
                            } else if (f && (a = e, o = a[M] || (a[M] = {}), r = o[a.uniqueID] || (o[a.uniqueID] = {}), i = r[p] || [], s = i[0] === D && i[1], h = s), h === !1) for (; (a = ++s && a && a[u] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++h || (f && (o = a[M] || (a[M] = {}), r = o[a.uniqueID] || (o[a.uniqueID] = {}), r[p] = [D, h]), a !== e));) ;
                            return h -= m, h === g || h % g === 0 && h / g >= 0
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = k.pseudos[e] || k.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                    return a[M] ? a(o) : a.length > 1 ? (t = [e, e, "", o], k.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                        for (var n, i = a(e, o), r = i.length; r--;) n = I(e, i[r]), e[n] = !(t[n] = i[r])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: n(function (e) {
                    var i = [], r = [], s = K(e.replace(E, "$1"));
                    return s[M] ? n(function (e, t, n, i) {
                        for (var r, o = s(e, null, i, []), a = e.length; a--;) (r = o[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, t, n) {
                        return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop()
                    }
                }), has: n(function (t) {
                    return function (e) {
                        return x(t, e).length > 0
                    }
                }), contains: n(function (t) {
                    return t = t.replace(L, F), function (e) {
                        return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                    }
                }), lang: n(function (n) {
                    return me.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(L, F).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return t = t.toLowerCase(), t === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = N.location && N.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !k.pseudos.empty(e)
                }, header: function (e) {
                    return ye.test(e.nodeName)
                }, input: function (e) {
                    return ve.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: e(function () {
                    return [0]
                }), last: e(function (e, t) {
                    return [t - 1]
                }), eq: e(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: e(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }), odd: e(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }), lt: e(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: e(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (t in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) k.pseudos[t] = W(t);
        for (t in {submit: !0, reset: !0}) k.pseudos[t] = z(t);
        return Y.prototype = k.filters = k.pseudos, k.setFilters = new Y, m = x.tokenize = function (e, t) {
            var n, i, r, o, a, s, l, u = te[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, s = [], l = k.preFilter; a;) {
                n && !(i = fe.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = he.exec(a)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(E, " ")
                }), a = a.slice(n.length));
                for (o in k.filter) !(i = h[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? x.error(e) : te(e, s).slice(0)
        }, K = x.compile = function (e, t) {
            var n, i = [], r = [], o = A[e + " "];
            if (!o) {
                for (t || (t = m(e)), n = t.length; n--;) o = G(t[n]), o[M] ? i.push(o) : r.push(o);
                o = A(e, Z(r, i)), o.selector = e
            }
            return o
        }, J = x.select = function (e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e, c = !i && m(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && g.getById && 9 === t.nodeType && T && k.relative[o[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(L, F), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = h.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !k.relative[s = a.type]);) if ((l = k.find[s]) && (i = l(a.matches[0].replace(L, F), xe.test(o[0].type) && j(t.parentNode) || t))) {
                    if (o.splice(r, 1), e = i.length && p(o), !e) return P.apply(n, i), n;
                    break
                }
            }
            return (u || K(e, c))(i, t, !T, n, !t || xe.test(e) && j(t.parentNode) || t), n
        }, g.sortStable = M.split("").sort(ne).join("") === M, g.detectDuplicates = !!u, S(), g.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || H("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), g.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || H("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || H(le, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), x
    }(_);
    S.find = e, S.expr = e.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = e.uniqueSort, S.text = e.getText, S.isXMLDoc = e.isXML, S.contains = e.contains;
    var r = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && S(e).is(n)) break;
            i.push(e)
        }
        return i
    }, Ne = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, Re = S.expr.match.needsContext, He = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Be = /^.[^:#\[\.,]*$/;
    S.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; r > t; t++) if (S.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) S.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? S.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(H(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(H(this, e || [], !0))
        }, is: function (e) {
            return !!H(this, "string" == typeof e && Re.test(e) ? S(e) : e || [], !1).length
        }
    });
    var We, ze = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, je = S.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || We, "string" == typeof e) {
            if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ze.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : p, !0)), He.test(i[1]) && S.isPlainObject(t)) for (i in t) S.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if (r = p.getElementById(i[2]), r && r.parentNode) {
                if (r.id !== i[2]) return We.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = p, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : S.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(S) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), S.makeArray(e, this))
    };
    je.prototype = S.fn, We = S(p);
    var Ye = /^(?:parents|prev(?:Until|All))/, Ve = {children: !0, contents: !0, next: !0, prev: !0};
    S.fn.extend({
        has: function (e) {
            var t, n = S(e, this), i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++) if (S.contains(this, n[t])) return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = Re.test(e) || "string" != typeof e ? S(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? S.inArray(this[0], S(e)) : S.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return r(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return r(e, "parentNode", n)
        }, next: function (e) {
            return B(e, "nextSibling")
        }, prev: function (e) {
            return B(e, "previousSibling")
        }, nextAll: function (e) {
            return r(e, "nextSibling")
        }, prevAll: function (e) {
            return r(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return r(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return r(e, "previousSibling", n)
        }, siblings: function (e) {
            return Ne((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Ne(e.firstChild)
        }, contents: function (e) {
            return S.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : S.merge([], e.childNodes)
        }
    }, function (i, r) {
        S.fn[i] = function (e, t) {
            var n = S.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), this.length > 1 && (Ve[i] || (n = S.uniqueSort(n)), Ye.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var C = /\S+/g;
    S.Callbacks = function (i) {
        i = "string" == typeof i ? W(i) : S.extend({}, i);
        var n, e, t, r, o = [], a = [], s = -1, l = function () {
            for (r = i.once, t = n = !0; a.length; s = -1) for (e = a.shift(); ++s < o.length;) o[s].apply(e[0], e[1]) === !1 && i.stopOnFalse && (s = o.length, e = !1);
            i.memory || (e = !1), n = !1, r && (o = e ? [] : "")
        }, u = {
            add: function () {
                return o && (e && !n && (s = o.length - 1, a.push(e)), function n(e) {
                    S.each(e, function (e, t) {
                        S.isFunction(t) ? i.unique && u.has(t) || o.push(t) : t && t.length && "string" !== S.type(t) && n(t)
                    })
                }(arguments), e && !n && l()), this
            }, remove: function () {
                return S.each(arguments, function (e, t) {
                    for (var n; (n = S.inArray(t, o, n)) > -1;) o.splice(n, 1), s >= n && s--
                }), this
            }, has: function (e) {
                return e ? S.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return r = a = [], o = e = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return r = !0, e || u.disable(), this
            }, locked: function () {
                return !!r
            }, fireWith: function (e, t) {
                return r || (t = t || [], t = [e, t.slice ? t.slice() : t], a.push(t), n || l()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!t
            }
        };
        return u
    }, S.extend({
        Deferred: function (e) {
            var o = [["resolve", "done", S.Callbacks("once memory"), "resolved"], ["reject", "fail", S.Callbacks("once memory"), "rejected"], ["notify", "progress", S.Callbacks("memory")]],
                r = "pending", a = {
                    state: function () {
                        return r
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, then: function () {
                        var r = arguments;
                        return S.Deferred(function (i) {
                            S.each(o, function (e, t) {
                                var n = S.isFunction(r[e]) && r[e];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && S.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                }, s = {};
            return a.pipe = a.then, S.each(o, function (e, t) {
                var n = t[2], i = t[3];
                a[t[1]] = n.add, i && n.add(function () {
                    r = i
                }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? a : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var r, t, n, i = 0, o = c.call(arguments), a = o.length,
                s = 1 !== a || e && S.isFunction(e.promise) ? a : 0, l = 1 === s ? e : S.Deferred(),
                u = function (t, n, i) {
                    return function (e) {
                        n[t] = this, i[t] = arguments.length > 1 ? c.call(arguments) : e, i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1) for (r = new Array(a), t = new Array(a), n = new Array(a); a > i; i++) o[i] && S.isFunction(o[i].promise) ? o[i].promise().progress(u(i, t, r)).done(u(i, n, o)).fail(l.reject) : --s;
            return s || l.resolveWith(n, o), l.promise()
        }
    });
    var s;
    S.fn.ready = function (e) {
        return S.ready.promise().done(e), this
    }, S.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? S.readyWait++ : S.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --S.readyWait : S.isReady) || (S.isReady = !0, e !== !0 && --S.readyWait > 0 || (s.resolveWith(p, [S]), S.fn.triggerHandler && (S(p).triggerHandler("ready"), S(p).off("ready"))))
        }
    }), S.ready.promise = function (e) {
        if (!s) if (s = S.Deferred(), "complete" === p.readyState || "loading" !== p.readyState && !p.documentElement.doScroll) _.setTimeout(S.ready); else if (p.addEventListener) p.addEventListener("DOMContentLoaded", t), _.addEventListener("load", t); else {
            p.attachEvent("onreadystatechange", t), _.attachEvent("onload", t);
            var n = !1;
            try {
                n = null == _.frameElement && p.documentElement
            } catch (e) {
            }
            n && n.doScroll && !function t() {
                if (!S.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return _.setTimeout(t, 50)
                    }
                    z(), S.ready()
                }
            }()
        }
        return s.promise(e)
    }, S.ready.promise();
    var qe;
    for (qe in S(b)) break;
    b.ownFirst = "0" === qe, b.inlineBlockNeedsLayout = !1, S(function () {
        var e, t, n, i;
        n = p.getElementsByTagName("body")[0], n && n.style && (t = p.createElement("div"), i = p.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", b.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
    }), function () {
        var e = p.createElement("div");
        b.deleteExpando = !0;
        try {
            delete e.test
        } catch (e) {
            b.deleteExpando = !1
        }
        e = null
    }();
    var x = function (e) {
        var t = S.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }, Ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, $e = /([A-Z])/g;
    S.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? S.cache[e[S.expando]] : e[S.expando], !!e && !Y(e)
        },
        data: function (e, t, n) {
            return V(e, t, n)
        },
        removeData: function (e, t) {
            return q(e, t)
        },
        _data: function (e, t, n) {
            return V(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return q(e, t, !0)
        }
    }), S.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = S.data(o), 1 === o.nodeType && !S._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = S.camelCase(i.slice(5)), j(o, i, r[i])));
                    S._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                S.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                S.data(this, e, t)
            }) : o ? j(o, e, S.data(o, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                S.removeData(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = S._data(e, t), n && (!i || S.isArray(n) ? i = S._data(e, t, S.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t), i = n.length, r = n.shift(), o = S._queueHooks(e, t), a = function () {
                S.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return S._data(e, n) || S._data(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    S._removeData(e, t + "queue"), S._removeData(e, n)
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = S.Deferred(), o = this, a = this.length, s = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = S._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    }), function () {
        var i;
        b.shrinkWrapBlocks = function () {
            if (null != i) return i;
            i = !1;
            var e, t, n;
            return t = p.getElementsByTagName("body")[0], t && t.style ? (e = p.createElement("div"), n = p.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(p.createElement("div")).style.width = "5px", i = 3 !== e.offsetWidth), t.removeChild(n), i) : void 0
        }
    }();
    var Ge = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ze = new RegExp("^(?:([+-])=|)(" + Ge + ")([a-z%]*)$", "i"),
        h = ["Top", "Right", "Bottom", "Left"], w = function (e, t) {
            return e = t || e, "none" === S.css(e, "display") || !S.contains(e.ownerDocument, e)
        }, k = function (e, t, n, i, r, o, a) {
            var s = 0, l = e.length, u = null == n;
            if ("object" === S.type(n)) {
                r = !0;
                for (s in n) k(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, S.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                return u.call(S(e), n)
            })), t)) for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        }, Xe = /^(?:checkbox|radio)$/i, Ke = /<([\w:-]+)/, Je = /^$|\/(?:java|ecma)script/i, Qe = /^\s+/,
        et = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function () {
        var e = p.createElement("div"), t = p.createDocumentFragment(), n = p.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b.leadingWhitespace = 3 === e.firstChild.nodeType, b.tbody = !e.getElementsByTagName("tbody").length, b.htmlSerialize = !!e.getElementsByTagName("link").length, b.html5Clone = "<:nav></:nav>" !== p.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), b.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = p.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), b.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, b.noCloneEvent = !!e.addEventListener, e[S.expando] = 1, b.attributes = !e.getAttribute(S.expando)
    }();
    var T = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: b.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    T.optgroup = T.option, T.tbody = T.tfoot = T.colgroup = T.caption = T.thead, T.th = T.td;
    var tt = /<|&#?\w+;/, nt = /<tbody/i;
    !function () {
        var e, t, n = p.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) t = "on" + e, (b[e] = t in _) || (n.setAttribute(t, "t"), b[e] = n.attributes[t].expando === !1);
        n = null
    }();
    var it = /^(?:input|select|textarea)$/i, rt = /^key/, ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        at = /^(?:focusinfocus|focusoutblur)$/, st = /^([^.]*)(?:\.(.+)|)/;
    S.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, h, p, g, m = S._data(e);
            if (m) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = S.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function (e) {
                    return "undefined" == typeof S || e && S.event.triggered === e.type ? void 0 : S.event.dispatch.apply(c.elem, arguments)
                }, c.elem = e), t = (t || "").match(C) || [""], s = t.length; s--;) o = st.exec(t[s]) || [], h = g = o[1], p = (o[2] || "").split(".").sort(), h && (u = S.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = S.event.special[h] || {}, d = S.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && S.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, l), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), S.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, h, p, g, m = S.hasData(e) && S._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(C) || [""], u = t.length; u--;) if (s = st.exec(t[u]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                    for (d = S.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                    l && !f.length && (d.teardown && d.teardown.call(e, p, m.handle) !== !1 || S.removeEvent(e, h, m.handle), delete c[h])
                } else for (h in c) S.event.remove(e, h + t[u], n, i, !0);
                S.isEmptyObject(c) && (delete m.handle, S._removeData(e, "events"))
            }
        },
        trigger: function (e, t, n, i) {
            var r, o, a, s, l, u, c, d = [n || p], f = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = n = n || p, 3 !== n.nodeType && 8 !== n.nodeType && !at.test(f + S.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), o = f.indexOf(":") < 0 && "on" + f, e = e[S.expando] ? e : new S.Event(f, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), l = S.event.special[f] || {}, i || !l.trigger || l.trigger.apply(n, t) !== !1)) {
                if (!i && !l.noBubble && !S.isWindow(n)) {
                    for (s = l.delegateType || f, at.test(s + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (n.ownerDocument || p) && d.push(u.defaultView || u.parentWindow || _)
                }
                for (c = 0; (a = d[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? s : l.bindType || f, r = (S._data(a, "events") || {})[e.type] && S._data(a, "handle"), r && r.apply(a, t), r = o && a[o], r && r.apply && x(a) && (e.result = r.apply(a, t), e.result === !1 && e.preventDefault());
                if (e.type = f, !i && !e.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), t) === !1) && x(n) && o && n[f] && !S.isWindow(n)) {
                    u = n[o], u && (n[o] = null), S.event.triggered = f;
                    try {
                        n[f]()
                    } catch (e) {
                    }
                    S.event.triggered = void 0, u && (n[o] = u)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = S.event.fix(e);
            var t, n, i, r, o, a = [], s = c.call(arguments), l = (S._data(this, "events") || {})[e.type] || [],
                u = S.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = S.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? S(r, this).index(l) > -1 : S.find(r, this, null, [l]).length), i[r] && i.push(o);
                i.length && a.push({elem: l, handlers: i})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[S.expando]) return e;
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = ot.test(r) ? this.mouseHooks : rt.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new S.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || p), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || p, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== K() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === K() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return S.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return S.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var i = S.extend(new S.Event, n, {type: e, isSimulated: !0});
            S.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, S.removeEvent = p.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, S.Event = function (e, t) {
        return this instanceof S.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? n : l) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || S.now(), void (this[S.expando] = !0)) : new S.Event(e, t)
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = n, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = n, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = n, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, o) {
        S.event.special[e] = {
            delegateType: o, bindType: o, handle: function (e) {
                var t, n = this, i = e.relatedTarget, r = e.handleObj;
                return i && (i === n || S.contains(n, i)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), b.submit || (S.event.special.submit = {
        setup: function () {
            return S.nodeName(this, "form") ? !1 : void S.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = S.nodeName(t, "input") || S.nodeName(t, "button") ? S.prop(t, "form") : void 0;
                n && !S._data(n, "submit") && (S.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), S._data(n, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && S.event.simulate("submit", this.parentNode, e))
        }, teardown: function () {
            return S.nodeName(this, "form") ? !1 : void S.event.remove(this, "._submit")
        }
    }), b.change || (S.event.special.change = {
        setup: function () {
            return it.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (S.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), S.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), S.event.simulate("change", this, e)
            })), !1) : void S.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                it.test(t.nodeName) && !S._data(t, "change") && (S.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || S.event.simulate("change", this.parentNode, e)
                }), S._data(t, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return S.event.remove(this, "._change"), !it.test(this.nodeName)
        }
    }), b.focusin || S.each({focus: "focusin", blur: "focusout"}, function (n, i) {
        var r = function (e) {
            S.event.simulate(i, e.target, S.event.fix(e))
        };
        S.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this, t = S._data(e, i);
                t || e.addEventListener(n, r, !0), S._data(e, i, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = S._data(e, i) - 1;
                t ? S._data(e, i, t) : (e.removeEventListener(n, r, !0), S._removeData(e, i))
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, i) {
            return J(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return J(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = l), this.each(function () {
                S.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? S.event.trigger(e, t, n, !0) : void 0
        }
    });
    var lt = / jQuery\d+="(?:null|\d+)"/g, ut = new RegExp("<(?:" + et + ")[\\s/>]", "i"),
        ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, dt = /<script|<style|<link/i,
        ft = /checked\s*(?:[^=]|=\s*.checked.)/i, ht = /^true\/(.*)/, pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gt = $(p), mt = gt.appendChild(p.createElement("div"));
    S.extend({
        htmlPrefilter: function (e) {
            return e.replace(ct, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, o, a, s, l = S.contains(e.ownerDocument, e);
            if (b.html5Clone || S.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (mt.innerHTML = e.outerHTML, mt.removeChild(o = mt.firstChild)), !(b.noCloneEvent && b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (i = m(o), s = m(e), a = 0; null != (r = s[a]); ++a) i[a] && ie(r, i[a]);
            if (t) if (n) for (s = s || m(e), i = i || m(o), a = 0; null != (r = s[a]); a++) ne(r, i[a]); else ne(e, o);
            return i = m(o, "script"), i.length > 0 && G(i, !l && m(e, "script")), i = s = r = null, o
        }, cleanData: function (e, t) {
            for (var n, i, r, o, a = 0, s = S.expando, l = S.cache, u = b.attributes, c = S.event.special; null != (n = e[a]); a++) if ((t || x(n)) && (r = n[s], o = r && l[r])) {
                if (o.events) for (i in o.events) c[i] ? S.event.remove(n, i) : S.removeEvent(n, i, o.handle);
                l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), f.push(r))
            }
        }
    }), S.fn.extend({
        domManip: g, detach: function (e) {
            return re(this, e, !0)
        }, remove: function (e) {
            return re(this, e)
        }, text: function (e) {
            return k(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().append((this[0] && this[0].ownerDocument || p).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return g(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Q(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return g(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Q(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return g(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return g(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && S.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && S.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        }, html: function (e) {
            return k(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(lt, "") : void 0;
                if ("string" == typeof e && !dt.test(e) && (b.htmlSerialize || !ut.test(e)) && (b.leadingWhitespace || !Qe.test(e)) && !T[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (S.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return g(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(m(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = 0, i = [], r = S(e), o = r.length - 1; o >= n; n++) t = n === o ? this : this.clone(!0), S(r[n])[a](t), De.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var M, vt = {HTML: "block", BODY: "block"}, yt = /^margin/, bt = new RegExp("^(" + Ge + ")(?!px)[a-z%]+$", "i"),
        xt = function (e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        }, wt = p.documentElement;
    !function () {
        function e() {
            var e, t, n = p.documentElement;
            n.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = o = l = !1, r = s = !0, _.getComputedStyle && (t = _.getComputedStyle(c), i = "1%" !== (t || {}).top, l = "2px" === (t || {}).marginLeft, o = "4px" === (t || {width: "4px"}).width, c.style.marginRight = "50%", r = "4px" === (t || {marginRight: "4px"}).marginRight, e = c.appendChild(p.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((_.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", a = 0 === c.getClientRects().length, a && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === e[0].offsetHeight, a && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), n.removeChild(u)
        }

        var i, r, o, a, s, l, u = p.createElement("div"), c = p.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", b.opacity = "0.5" === c.style.opacity, b.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === c.style.backgroundClip, u = p.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), b.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, S.extend(b, {
            reliableHiddenOffsets: function () {
                return null == i && e(), a
            }, boxSizingReliable: function () {
                return null == i && e(), o
            }, pixelMarginRight: function () {
                return null == i && e(), r
            }, pixelPosition: function () {
                return null == i && e(), i
            }, reliableMarginRight: function () {
                return null == i && e(), s
            }, reliableMarginLeft: function () {
                return null == i && e(), l
            }
        }))
    }();
    var D, A, kt = /^(top|right|bottom|left)$/;
    _.getComputedStyle ? (D = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = _), t.getComputedStyle(e)
    }, A = function (e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || D(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || S.contains(e.ownerDocument, e) || (a = S.style(e, t)), n && !b.pixelMarginRight() && bt.test(a) && yt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : wt.currentStyle && (D = function (e) {
        return e.currentStyle
    }, A = function (e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || D(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), bt.test(a) && !kt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var _t = /alpha\([^)]*\)/i, St = /opacity\s*=\s*([^)]*)/i, Ct = /^(none|table(?!-c[ea]).+)/,
        Tt = new RegExp("^(" + Ge + ")(.*)$", "i"), Mt = {position: "absolute", visibility: "hidden", display: "block"},
        Dt = {letterSpacing: "0", fontWeight: "400"}, At = ["Webkit", "O", "Moz", "ms"],
        Pt = p.createElement("div").style;
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = A(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: b.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = S.camelCase(t), l = e.style;
                if (t = S.cssProps[s] || (S.cssProps[s] = se(s) || s), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (o = typeof n, "string" === o && (r = Ze.exec(n)) && r[1] && (n = U(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (S.cssNumber[s] ? "" : "px")), b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (e) {
                }
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = S.camelCase(t);
            return t = S.cssProps[s] || (S.cssProps[s] = se(s) || s), a = S.cssHooks[t] || S.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = A(e, t, i)), "normal" === o && t in Dt && (o = Dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), S.each(["height", "width"], function (e, r) {
        S.cssHooks[r] = {
            get: function (e, t, n) {
                return t ? Ct.test(S.css(e, "display")) && 0 === e.offsetWidth ? xt(e, Mt, function () {
                    return de(e, r, n)
                }) : de(e, r, n) : void 0
            }, set: function (e, t, n) {
                var i = n && D(e);
                return ue(e, t, n ? ce(e, r, n, b.boxSizing && "border-box" === S.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), b.opacity || (S.cssHooks.opacity = {
        get: function (e, t) {
            return St.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, i = e.currentStyle, r = S.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === S.trim(o.replace(_t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = _t.test(o) ? o.replace(_t, r) : o + " " + r)
        }
    }), S.cssHooks.marginRight = ae(b.reliableMarginRight, function (e, t) {
        return t ? xt(e, {display: "inline-block"}, A, [e, "marginRight"]) : void 0
    }), S.cssHooks.marginLeft = ae(b.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(A(e, "marginLeft")) || (S.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - xt(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), S.each({margin: "", padding: "", border: "Width"}, function (r, o) {
        S.cssHooks[r + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; 4 > t; t++) n[r + h[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, yt.test(r) || (S.cssHooks[r + o].set = ue)
    }), S.fn.extend({
        css: function (e, t) {
            return k(this, function (e, t, n) {
                var i, r, o = {}, a = 0;
                if (S.isArray(t)) {
                    for (i = D(e), r = t.length; r > a; a++) o[t[a]] = S.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                w(this) ? S(this).show() : S(this).hide()
            })
        }
    }), S.Tween = o, o.prototype = {
        constructor: o, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (S.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = o.propHooks[this.prop];
            return e && e.get ? e.get(this) : o.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = o.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : o.propHooks._default.set(this), this
        }
    }, o.prototype.init.prototype = o.prototype, o.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, o.propHooks.scrollTop = o.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, S.fx = o.prototype.init, S.fx.step = {};
    var P, It, Et = /^(?:toggle|show|hide)$/, Ot = /queueHooks$/;
    S.Animation = S.extend(d, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return U(n.elem, e, Ze.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            S.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(C);
            for (var n, i = 0, r = e.length; r > i; i++) n = e[i], d.tweeners[n] = d.tweeners[n] || [], d.tweeners[n].unshift(t)
        }, prefilters: [pe], prefilter: function (e, t) {
            t ? d.prefilters.unshift(e) : d.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || S.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !S.isFunction(t) && t
        };
        return i.duration = S.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in S.fx.speeds ? S.fx.speeds[i.duration] : S.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            S.isFunction(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
        }, i
    }, S.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(w).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (t, e, n, i) {
            var r = S.isEmptyObject(t), o = S.speed(e, n, i), a = function () {
                var e = d(this, S.extend({}, t), o);
                (r || S._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (r, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof r && (o = e, e = r, r = void 0), e && r !== !1 && this.queue(r || "fx", []), this.each(function () {
                var e = !0, t = null != r && r + "queueHooks", n = S.timers, i = S._data(this);
                if (t) i[t] && i[t].stop && a(i[t]); else for (t in i) i[t] && i[t].stop && Ot.test(t) && a(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, r)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var e, t = S._data(this), n = t[a + "queue"], i = t[a + "queueHooks"], r = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, i) {
        var r = S.fn[i];
        S.fn[i] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(a(i, !0), e, t, n)
        }
    }), S.each({
        slideDown: a("show"),
        slideUp: a("hide"),
        slideToggle: a("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, i) {
        S.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = S.timers, n = 0;
        for (P = S.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || S.fx.stop(), P = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), e() ? S.fx.start() : S.timers.pop()
    }, S.fx.interval = 13, S.fx.start = function () {
        It || (It = _.setInterval(S.fx.tick, S.fx.interval))
    }, S.fx.stop = function () {
        _.clearInterval(It), It = null
    }, S.fx.speeds = {slow: 600, fast: 200, _default: 400}, S.fn.delay = function (i, e) {
        return i = S.fx ? S.fx.speeds[i] || i : i, e = e || "fx", this.queue(e, function (e, t) {
            var n = _.setTimeout(e, i);
            t.stop = function () {
                _.clearTimeout(n)
            }
        })
    }, function () {
        var e, t = p.createElement("input"), n = p.createElement("div"), i = p.createElement("select"),
            r = i.appendChild(p.createElement("option"));
        n = p.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", b.getSetAttribute = "t" !== n.className, b.style = /top/.test(e.getAttribute("style")), b.hrefNormalized = "/a" === e.getAttribute("href"), b.checkOn = !!t.value, b.optSelected = r.selected, b.enctype = !!p.createElement("form").enctype, i.disabled = !0, b.optDisabled = !r.disabled, t = p.createElement("input"), t.setAttribute("value", ""), b.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), b.radioValue = "t" === t.value
    }();
    var Lt = /\r/g, Ft = /[\x20\t\r\n\f]+/g;
    S.fn.extend({
        val: function (n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = S.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (t = r ? n.call(this, e, S(this).val()) : n, null == t ? t = "" : "number" == typeof t ? t += "" : S.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()], i && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()], i && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : (e = t.value, "string" == typeof e ? e.replace(Lt, "") : null == e ? "" : e)) : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : S.trim(S.text(e)).replace(Ft, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++) if (n = i[l], (n.selected || l === r) && (b.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !S.nodeName(n.parentNode, "optgroup"))) {
                        if (t = S(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = S.makeArray(t), a = r.length; a--;) if (i = r[a], S.inArray(S.valHooks.option.get(i), o) > -1) try {
                        i.selected = n = !0
                    } catch (e) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                return S.isArray(t) ? e.checked = S.inArray(S(e).val(), t) > -1 : void 0
            }
        }, b.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var I, Nt, E = S.expr.attrHandle, Rt = /^(?:checked|selected)$/i, O = b.getSetAttribute, Ht = b.input;
    S.fn.extend({
        attr: function (e, t) {
            return k(this, S.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (t = t.toLowerCase(), r = S.attrHooks[t] || (S.expr.match.bool.test(t) ? Nt : I)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = S.find.attr(e, t), null == i ? void 0 : i)) : void 0
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!b.radioValue && "radio" === t && S.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i, r = 0, o = t && t.match(C);
            if (o && 1 === e.nodeType) for (; n = o[r++];) i = S.propFix[n] || n, S.expr.match.bool.test(n) ? Ht && O || !Rt.test(n) ? e[i] = !1 : e[S.camelCase("default-" + n)] = e[i] = !1 : S.attr(e, n, ""), e.removeAttribute(O ? n : i)
        }
    }), Nt = {
        set: function (e, t, n) {
            return t === !1 ? S.removeAttr(e, n) : Ht && O || !Rt.test(n) ? e.setAttribute(!O && S.propFix[n] || n, n) : e[S.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var o = E[t] || S.find.attr;
        Ht && O || !Rt.test(t) ? E[t] = function (e, t, n) {
            var i, r;
            return n || (r = E[t], E[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, E[t] = r), i
        } : E[t] = function (e, t, n) {
            return n ? void 0 : e[S.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ht && O || (S.attrHooks.value = {
        set: function (e, t, n) {
            return S.nodeName(e, "input") ? void (e.defaultValue = t) : I && I.set(e, t, n)
        }
    }), O || (I = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, E.id = E.name = E.coords = function (e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, S.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        }, set: I.set
    }, S.attrHooks.contenteditable = {
        set: function (e, t, n) {
            I.set(e, "" === t ? !1 : t, n)
        }
    }, S.each(["width", "height"], function (e, n) {
        S.attrHooks[n] = {
            set: function (e, t) {
                return "" === t ? (e.setAttribute(n, "auto"), t) : void 0
            }
        }
    })), b.style || (S.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Bt = /^(?:input|select|textarea|button|object)$/i, Wt = /^(?:a|area)$/i;
    S.fn.extend({
        prop: function (e, t) {
            return k(this, S.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = S.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {
                }
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? (1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, r = S.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Bt.test(e.nodeName) || Wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), b.hrefNormalized || S.each(["href", "src"], function (e, t) {
        S.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), b.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), b.enctype || (S.propFix.enctype = "encoding");
    var zt = /[\t\r\n\f]/g;
    S.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (S.isFunction(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, u(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(C) || []; n = this[l++];) if (r = u(n), i = 1 === n.nodeType && (" " + r + " ").replace(zt, " ")) {
                for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                s = S.trim(i), r !== s && S.attr(n, "class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (S.isFunction(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, u(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(C) || []; n = this[l++];) if (r = u(n), i = 1 === n.nodeType && (" " + r + " ").replace(zt, " ")) {
                for (a = 0; o = e[a++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                s = S.trim(i), r !== s && S.attr(n, "class", s)
            }
            return this
        }, toggleClass: function (r, t) {
            var o = typeof r;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : S.isFunction(r) ? this.each(function (e) {
                S(this).toggleClass(r.call(this, e, u(this), t), t)
            }) : this.each(function () {
                var e, t, n, i;
                if ("string" === o) for (t = 0, n = S(this), i = r.match(C) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== r && "boolean" !== o || (e = u(this), e && S._data(this, "__className__", e), S.attr(this, "class", e || r === !1 ? "" : S._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + u(n) + " ").replace(zt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), S.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var jt = _.location, Yt = S.now(), Vt = /\?/,
        qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    S.parseJSON = function (e) {
        if (_.JSON && _.JSON.parse) return _.JSON.parse(e + "");
        var r, o = null, t = S.trim(e + "");
        return t && !S.trim(t.replace(qt, function (e, t, n, i) {
            return r && t && (o = 0), 0 === o ? e : (r = n || t, o += !i - !n, "")
        })) ? Function("return " + t)() : S.error("Invalid JSON: " + e)
    }, S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            _.DOMParser ? (n = new _.DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new _.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var Ut = /#.*$/, $t = /([?&])_=[^&]*/, Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Xt = /^(?:GET|HEAD)$/, Kt = /^\/\//,
        Jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qt = {}, en = {}, tn = "*/".concat("*"),
        nn = jt.href, L = Jt.exec(nn.toLowerCase()) || [];
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: nn,
            type: "GET",
            isLocal: Zt.test(L[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": S.parseJSON, "text xml": S.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? ye(ye(e, S.ajaxSettings), t) : ye(S.ajaxSettings, e)
        },
        ajaxPrefilter: me(Qt),
        ajaxTransport: me(en),
        ajax: function (e, t) {
            function n(e, t, n, i) {
                var r, o, a, s, l, u = t;
                2 !== w && (w = 2, f && _.clearTimeout(f), p = void 0, d = i || "", k.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (s = be(g, k, n)), s = xe(g, s, k, r), r ? (g.ifModified && (l = k.getResponseHeader("Last-Modified"), l && (S.lastModified[c] = l), l = k.getResponseHeader("etag"), l && (S.etag[c] = l)), 204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, o = s.data, a = s.error, r = !a)) : (a = u, !e && u || (u = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (t || u) + "", r ? y.resolveWith(m, [o, u, k]) : y.rejectWith(m, [k, u, a]), k.statusCode(x), x = void 0, h && v.trigger(r ? "ajaxSuccess" : "ajaxError", [k, g, r ? o : a]), b.fireWith(m, [k, u]), h && (v.trigger("ajaxComplete", [k, g]), --S.active || S.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, c, d, f, h, p, o, g = S.ajaxSetup({}, t), m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? S(m) : S.event, y = S.Deferred(),
                b = S.Callbacks("once memory"), x = g.statusCode || {}, a = {}, s = {}, w = 0, l = "canceled", k = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!o) for (o = {}; t = Gt.exec(d);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === w ? d : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return w || (g.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (2 > w) for (t in e) x[t] = [x[t], e[t]]; else k.always(e[k.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || l;
                        return p && p.abort(t), n(0, t), this
                    }
                };
            if (y.promise(k).complete = b.add, k.success = k.done, k.error = k.fail, g.url = ((e || g.url || nn) + "").replace(Ut, "").replace(Kt, L[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = S.trim(g.dataType || "*").toLowerCase().match(C) || [""], null == g.crossDomain && (i = Jt.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] === L[1] && i[2] === L[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (L[3] || ("http:" === L[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = S.param(g.data, g.traditional)), ve(Qt, g, t, k), 2 === w) return k;
            h = S.event && g.global, h && 0 === S.active++ && S.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Xt.test(g.type), c = g.url, g.hasContent || (g.data && (c = g.url += (Vt.test(c) ? "&" : "?") + g.data, delete g.data), g.cache === !1 && (g.url = $t.test(c) ? c.replace($t, "$1_=" + Yt++) : c + (Vt.test(c) ? "&" : "?") + "_=" + Yt++)), g.ifModified && (S.lastModified[c] && k.setRequestHeader("If-Modified-Since", S.lastModified[c]), S.etag[c] && k.setRequestHeader("If-None-Match", S.etag[c])), (g.data && g.hasContent && g.contentType !== !1 || t.contentType) && k.setRequestHeader("Content-Type", g.contentType), k.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : g.accepts["*"]);
            for (r in g.headers) k.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (g.beforeSend.call(m, k, g) === !1 || 2 === w)) return k.abort();
            l = "abort";
            for (r in {success: 1, error: 1, complete: 1}) k[r](g[r]);
            if (p = ve(en, g, t, k)) {
                if (k.readyState = 1, h && v.trigger("ajaxSend", [k, g]), 2 === w) return k;
                g.async && g.timeout > 0 && (f = _.setTimeout(function () {
                    k.abort("timeout")
                }, g.timeout));
                try {
                    w = 1, p.send(a, n)
                } catch (e) {
                    if (!(2 > w)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return k
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, r) {
        S[r] = function (e, t, n, i) {
            return S.isFunction(t) && (i = i || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S._evalUrl = function (e) {
        return S.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, S.fn.extend({
        wrapAll: function (t) {
            if (S.isFunction(t)) return this.each(function (e) {
                S(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = S(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (n) {
            return S.isFunction(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = S.isFunction(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
            }).end()
        }
    }), S.expr.filters.hidden = function (e) {
        return b.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : ke(e)
    }, S.expr.filters.visible = function (e) {
        return !S.expr.filters.hidden(e)
    };
    var rn = /%20/g, on = /\[\]$/, an = /\r?\n/g, sn = /^(?:submit|button|image|reset|file)$/i,
        ln = /^(?:input|select|textarea|keygen)/i;
    S.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            t = S.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e) _e(n, e[n], t, r);
        return i.join("&").replace(rn, "+")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && ln.test(this.nodeName) && !sn.test(e) && (this.checked || !Xe.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : S.isArray(n) ? S.map(n, function (e) {
                    return {name: t.name, value: e.replace(an, "\r\n")}
                }) : {name: t.name, value: n.replace(an, "\r\n")}
            }).get()
        }
    }), S.ajaxSettings.xhr = void 0 !== _.ActiveXObject ? function () {
        return this.isLocal ? Ce() : p.documentMode > 8 ? Se() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Se() || Ce()
    } : Se;
    var un = 0, cn = {}, F = S.ajaxSettings.xhr();
    _.attachEvent && _.attachEvent("onunload", function () {
        for (var e in cn) cn[e](void 0, !0)
    }), b.cors = !!F && "withCredentials" in F, F = b.ajax = !!F, F && S.ajaxTransport(function (l) {
        if (!l.crossDomain || b.cors) {
            var u;
            return {
                send: function (e, o) {
                    var t, a = l.xhr(), s = ++un;
                    if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (t in l.xhrFields) a[t] = l.xhrFields[t];
                    l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    for (t in e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                    a.send(l.hasContent && l.data || null), u = function (e, t) {
                        var n, i, r;
                        if (u && (t || 4 === a.readyState)) if (delete cn[s], u = void 0, a.onreadystatechange = S.noop, t) 4 !== a.readyState && a.abort(); else {
                            r = {}, n = a.status, "string" == typeof a.responseText && (r.text = a.responseText);
                            try {
                                i = a.statusText
                            } catch (e) {
                                i = ""
                            }
                            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
                        }
                        r && o(n, i, r, a.getAllResponseHeaders())
                    }, l.async ? 4 === a.readyState ? _.setTimeout(u) : a.onreadystatechange = cn[s] = u : u()
                }, abort: function () {
                    u && u(void 0, !0)
                }
            }
        }
    }), S.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), S.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var i, r = p.head || S("head")[0] || p.documentElement;
            return {
                send: function (e, n) {
                    i = p.createElement("script"), i.async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function (e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                    }, r.insertBefore(i, r.firstChild)
                }, abort: function () {
                    i && i.onload(void 0, !0)
                }
            }
        }
    });
    var dn = [], fn = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = dn.pop() || S.expando + "_" + Yt++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, r, o,
            a = e.jsonp !== !1 && (fn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(fn, "$1" + i) : e.jsonp !== !1 && (e.url += (Vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return o || S.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = _[i], _[i] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === r ? S(_).removeProp(i) : _[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, dn.push(i)), o && S.isFunction(r) && r(o[0]), o = r = void 0
        }), "script") : void 0
    }), S.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || p;
        var i = He.exec(e), r = !n && [];
        return i ? [t.createElement(i[1])] : (i = X([e], t, r), r && r.length && S(r).remove(), S.merge([], i.childNodes))
    };
    var hn = S.fn.load;
    S.fn.load = function (e, t, n) {
        if ("string" != typeof e && hn) return hn.apply(this, arguments);
        var i, r, o, a = this, s = e.indexOf(" ");
        return s > -1 && (i = S.trim(e.slice(s, e.length)), e = e.slice(0, s)), S.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && S.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S.expr.filters.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, u, c = S.css(e, "position"), d = S(e), f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = S.css(e, "top"), l = S.css(e, "left"), u = ("absolute" === c || "fixed" === c) && S.inArray("auto", [o, l]) > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), S.isFunction(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, i = {top: 0, left: 0}, r = this[0], o = r && r.ownerDocument;
            return o ? (e = o.documentElement, S.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = Te(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, i = this[0];
                return "fixed" === S.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S.nodeName(e[0], "html") || (n = e.offset()), n.top += S.css(e[0], "borderTopWidth", !0), n.left += S.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - S.css(i, "marginTop", !0),
                    left: t.left - n.left - S.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !S.nodeName(e, "html") && "static" === S.css(e, "position");) e = e.offsetParent;
                return e || wt
            })
        }
    }), S.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, r) {
        var o = /Y/.test(r);
        S.fn[t] = function (e) {
            return k(this, function (e, t, n) {
                var i = Te(e);
                return void 0 === n ? i ? r in i ? i[r] : i.document.documentElement[t] : e[t] : void (i ? i.scrollTo(o ? S(i).scrollLeft() : n, o ? n : S(i).scrollTop()) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = ae(b.pixelPosition, function (e, t) {
            return t ? (t = A(e, n), bt.test(t) ? S(e).position()[n] + "px" : t) : void 0
        })
    }), S.each({Height: "height", Width: "width"}, function (o, a) {
        S.each({padding: "inner" + o, content: a, "": "outer" + o}, function (i, e) {
            S.fn[e] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (e === !0 || t === !0 ? "margin" : "border");
                return k(this, function (e, t, n) {
                    var i;
                    return S.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? S.css(e, t, r) : S.style(e, t, n, r)
                }, a, n ? e : void 0, n, null)
            }
        })
    }), S.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), S.fn.size = function () {
        return this.length
    }, S.fn.andSelf = S.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var pn = _.jQuery, gn = _.$;
    return S.noConflict = function (e) {
        return _.$ === S && (_.$ = gn), e && _.jQuery === S && (_.jQuery = pn), S
    }, N || (_.jQuery = _.$ = S), S
});
(function (l) {
    var u = {
        init: function (e) {
            var t = l.extend({
                items: 1,
                itemsOnPage: 1,
                pages: 0,
                displayedPages: 5,
                edges: 2,
                currentPage: 0,
                hrefTextPrefix: "#page-",
                hrefTextSuffix: "",
                prevText: "Prev",
                nextText: "Next",
                ellipseText: "&hellip;",
                cssStyle: "light-theme",
                listStyle: "",
                labelMap: [],
                selectOnClick: true,
                nextAtFront: false,
                invertPageOrder: false,
                useStartEdge: true,
                useEndEdge: true,
                onPageClick: function (e, t) {
                },
                onInit: function () {
                }
            }, e || {});
            var n = this;
            t.pages = t.pages ? t.pages : Math.ceil(t.items / t.itemsOnPage) ? Math.ceil(t.items / t.itemsOnPage) : 1;
            if (t.currentPage) t.currentPage = t.currentPage - 1; else t.currentPage = !t.invertPageOrder ? 0 : t.pages - 1;
            t.halfDisplayed = t.displayedPages / 2;
            this.each(function () {
                n.addClass(t.cssStyle + " simple-pagination").data("pagination", t);
                u._draw.call(n)
            });
            t.onInit();
            return this
        }, selectPage: function (e) {
            u._selectPage.call(this, e - 1);
            return this
        }, prevPage: function () {
            var e = this.data("pagination");
            if (!e.invertPageOrder) {
                if (e.currentPage > 0) {
                    u._selectPage.call(this, e.currentPage - 1)
                }
            } else {
                if (e.currentPage < e.pages - 1) {
                    u._selectPage.call(this, e.currentPage + 1)
                }
            }
            return this
        }, nextPage: function () {
            var e = this.data("pagination");
            if (!e.invertPageOrder) {
                if (e.currentPage < e.pages - 1) {
                    u._selectPage.call(this, e.currentPage + 1)
                }
            } else {
                if (e.currentPage > 0) {
                    u._selectPage.call(this, e.currentPage - 1)
                }
            }
            return this
        }, getPagesCount: function () {
            return this.data("pagination").pages
        }, setPagesCount: function (e) {
            this.data("pagination").pages = e
        }, getCurrentPage: function () {
            return this.data("pagination").currentPage + 1
        }, destroy: function () {
            this.empty();
            return this
        }, drawPage: function (e) {
            var t = this.data("pagination");
            t.currentPage = e - 1;
            this.data("pagination", t);
            u._draw.call(this);
            return this
        }, redraw: function () {
            u._draw.call(this);
            return this
        }, disable: function () {
            var e = this.data("pagination");
            e.disabled = true;
            this.data("pagination", e);
            u._draw.call(this);
            return this
        }, enable: function () {
            var e = this.data("pagination");
            e.disabled = false;
            this.data("pagination", e);
            u._draw.call(this);
            return this
        }, updateItems: function (e) {
            var t = this.data("pagination");
            t.items = e;
            t.pages = u._getPages(t);
            this.data("pagination", t);
            u._draw.call(this)
        }, updateItemsOnPage: function (e) {
            var t = this.data("pagination");
            t.itemsOnPage = e;
            t.pages = u._getPages(t);
            this.data("pagination", t);
            u._selectPage.call(this, 0);
            return this
        }, getItemsOnPage: function () {
            return this.data("pagination").itemsOnPage
        }, _draw: function () {
            var e = this.data("pagination"), t = u._getInterval(e), n, i;
            u.destroy.call(this);
            i = typeof this.prop === "function" ? this.prop("tagName") : this.attr("tagName");
            var r = i === "UL" ? this : l("<ul" + (e.listStyle ? ' class="' + e.listStyle + '"' : "") + "></ul>").appendTo(this);
            if (e.prevText) {
                u._appendItem.call(this, !e.invertPageOrder ? e.currentPage - 1 : e.currentPage + 1, {
                    text: e.prevText,
                    classes: "prev"
                })
            }
            if (e.nextText && e.nextAtFront) {
                u._appendItem.call(this, !e.invertPageOrder ? e.currentPage + 1 : e.currentPage - 1, {
                    text: e.nextText,
                    classes: "next"
                })
            }
            if (!e.invertPageOrder) {
                if (t.start > 0 && e.edges > 0) {
                    if (e.useStartEdge) {
                        var o = Math.min(e.edges, t.start);
                        for (n = 0; n < o; n++) {
                            u._appendItem.call(this, n)
                        }
                    }
                    if (e.edges < t.start && t.start - e.edges != 1) {
                        r.append('<li class="disabled"><span class="ellipse">' + e.ellipseText + "</span></li>")
                    } else if (t.start - e.edges == 1) {
                        u._appendItem.call(this, e.edges)
                    }
                }
            } else {
                if (t.end < e.pages && e.edges > 0) {
                    if (e.useStartEdge) {
                        var a = Math.max(e.pages - e.edges, t.end);
                        for (n = e.pages - 1; n >= a; n--) {
                            u._appendItem.call(this, n)
                        }
                    }
                    if (e.pages - e.edges > t.end && e.pages - e.edges - t.end != 1) {
                        r.append('<li class="disabled"><span class="ellipse">' + e.ellipseText + "</span></li>")
                    } else if (e.pages - e.edges - t.end == 1) {
                        u._appendItem.call(this, t.end)
                    }
                }
            }
            if (!e.invertPageOrder) {
                for (n = t.start; n < t.end; n++) {
                    u._appendItem.call(this, n)
                }
            } else {
                for (n = t.end - 1; n >= t.start; n--) {
                    u._appendItem.call(this, n)
                }
            }
            if (!e.invertPageOrder) {
                if (t.end < e.pages && e.edges > 0) {
                    if (e.pages - e.edges > t.end && e.pages - e.edges - t.end != 1) {
                        r.append('<li class="disabled"><span class="ellipse">' + e.ellipseText + "</span></li>")
                    } else if (e.pages - e.edges - t.end == 1) {
                        u._appendItem.call(this, t.end)
                    }
                    if (e.useEndEdge) {
                        var a = Math.max(e.pages - e.edges, t.end);
                        for (n = a; n < e.pages; n++) {
                            u._appendItem.call(this, n)
                        }
                    }
                }
            } else {
                if (t.start > 0 && e.edges > 0) {
                    if (e.edges < t.start && t.start - e.edges != 1) {
                        r.append('<li class="disabled"><span class="ellipse">' + e.ellipseText + "</span></li>")
                    } else if (t.start - e.edges == 1) {
                        u._appendItem.call(this, e.edges)
                    }
                    if (e.useEndEdge) {
                        var o = Math.min(e.edges, t.start);
                        for (n = o - 1; n >= 0; n--) {
                            u._appendItem.call(this, n)
                        }
                    }
                }
            }
            if (e.nextText && !e.nextAtFront) {
                u._appendItem.call(this, !e.invertPageOrder ? e.currentPage + 1 : e.currentPage - 1, {
                    text: e.nextText,
                    classes: "next"
                })
            }
        }, _getPages: function (e) {
            var t = Math.ceil(e.items / e.itemsOnPage);
            return t || 1
        }, _getInterval: function (e) {
            return {
                start: Math.ceil(e.currentPage > e.halfDisplayed ? Math.max(Math.min(e.currentPage - e.halfDisplayed, e.pages - e.displayedPages), 0) : 0),
                end: Math.ceil(e.currentPage > e.halfDisplayed ? Math.min(e.currentPage + e.halfDisplayed, e.pages) : Math.min(e.displayedPages, e.pages))
            }
        }, _appendItem: function (t, e) {
            var n = this, i, r, o = n.data("pagination"), a = l("<li></li>"), s = n.find("ul");
            t = t < 0 ? 0 : t < o.pages ? t : o.pages - 1;
            i = {text: t + 1, classes: ""};
            if (o.labelMap.length && o.labelMap[t]) {
                i.text = o.labelMap[t]
            }
            i = l.extend(i, e || {});
            if (t == o.currentPage || o.disabled) {
                if (o.disabled || i.classes === "prev" || i.classes === "next") {
                    a.addClass("disabled")
                } else {
                    a.addClass("active")
                }
                r = l('<span class="current">' + i.text + "</span>")
            } else {
                r = l('<a href="' + o.hrefTextPrefix + (t + 1) + o.hrefTextSuffix + '" class="page-link">' + i.text + "</a>");
                r.click(function (e) {
                    return u._selectPage.call(n, t, e)
                })
            }
            if (i.classes) {
                r.addClass(i.classes)
            }
            a.append(r);
            if (s.length) {
                s.append(a)
            } else {
                n.append(a)
            }
        }, _selectPage: function (e, t) {
            var n = this.data("pagination");
            n.currentPage = e;
            if (n.selectOnClick) {
                u._draw.call(this)
            }
            return n.onPageClick(e + 1, t)
        }
    };
    l.fn.pagination = function (e) {
        if (u[e] && e.charAt(0) != "_") {
            return u[e].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof e === "object" || !e) {
            return u.init.apply(this, arguments)
        } else {
            l.error("Method " + e + " does not exist on jQuery.pagination")
        }
    }
})(jQuery);
(function ($) {
    $.extend({
        tablesorter: new function () {
            var parsers = [], widgets = [];
            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "asc",
                sortMultiSortKey: "shiftKey",
                sortForce: null,
                sortAppend: null,
                sortLocaleCompare: true,
                textExtraction: "simple",
                parsers: {},
                widgets: [],
                widgetZebra: {css: ["even", "odd"]},
                headers: {},
                widthFixed: false,
                cancelSelection: true,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: "/.|,/g",
                onRenderHeader: null,
                selectorHeaders: "thead th",
                debug: false
            };

            function benchmark(e, t) {
                log(e + "," + ((new Date).getTime() - t.getTime()) + "ms")
            }

            this.benchmark = benchmark;

            function log(e) {
                if (typeof console != "undefined" && typeof console.debug != "undefined") {
                    console.log(e)
                } else {
                    alert(e)
                }
            }

            function buildParserCache(e, t) {
                if (e.config.debug) {
                    var n = ""
                }
                if (e.tBodies.length == 0) return;
                var i = e.tBodies[0].rows;
                if (i[0]) {
                    var r = [], o = i[0].cells, a = o.length;
                    for (var s = 0; s < a; s++) {
                        var l = false;
                        if ($.metadata && ($(t[s]).metadata() && $(t[s]).metadata().sorter)) {
                            l = getParserById($(t[s]).metadata().sorter)
                        } else if (e.config.headers[s] && e.config.headers[s].sorter) {
                            l = getParserById(e.config.headers[s].sorter)
                        }
                        if (!l) {
                            l = detectParserForColumn(e, i, -1, s)
                        }
                        if (e.config.debug) {
                            n += "column:" + s + " parser:" + l.id + "\n"
                        }
                        r.push(l)
                    }
                }
                if (e.config.debug) {
                    log(n)
                }
                return r
            }

            function detectParserForColumn(e, t, n, i) {
                var r = parsers.length, o = false, a = false, s = true;
                while (a == "" && s) {
                    n++;
                    if (t[n]) {
                        o = getNodeFromRowAndCellIndex(t, n, i);
                        a = trimAndGetNodeText(e.config, o);
                        if (e.config.debug) {
                            log("Checking if value was empty on row:" + n)
                        }
                    } else {
                        s = false
                    }
                }
                for (var l = 1; l < r; l++) {
                    if (parsers[l].is(a, e, o)) {
                        return parsers[l]
                    }
                }
                return parsers[0]
            }

            function getNodeFromRowAndCellIndex(e, t, n) {
                return e[t].cells[n]
            }

            function trimAndGetNodeText(e, t) {
                return $.trim(getElementText(e, t))
            }

            function getParserById(e) {
                var t = parsers.length;
                for (var n = 0; n < t; n++) {
                    if (parsers[n].id.toLowerCase() == e.toLowerCase()) {
                        return parsers[n]
                    }
                }
                return false
            }

            function buildCache(e) {
                if (e.config.debug) {
                    var t = new Date
                }
                var n = e.tBodies[0] && e.tBodies[0].rows.length || 0,
                    i = e.tBodies[0].rows[0] && e.tBodies[0].rows[0].cells.length || 0, r = e.config.parsers,
                    o = {row: [], normalized: []};
                for (var a = 0; a < n; ++a) {
                    var s = $(e.tBodies[0].rows[a]), l = [];
                    if (s.hasClass(e.config.cssChildRow)) {
                        o.row[o.row.length - 1] = o.row[o.row.length - 1].add(s);
                        continue
                    }
                    o.row.push(s);
                    for (var u = 0; u < i; ++u) {
                        l.push(r[u].format(getElementText(e.config, s[0].cells[u]), e, s[0].cells[u]))
                    }
                    l.push(o.normalized.length);
                    o.normalized.push(l);
                    l = null
                }
                if (e.config.debug) {
                    benchmark("Building cache for " + n + " rows:", t)
                }
                return o
            }

            function getElementText(e, t) {
                var n = "";
                if (!t) return "";
                if (!e.supportsTextContent) e.supportsTextContent = t.textContent || false;
                if (e.textExtraction == "simple") {
                    if (e.supportsTextContent) {
                        n = t.textContent
                    } else {
                        if (t.childNodes[0] && t.childNodes[0].hasChildNodes()) {
                            n = t.childNodes[0].innerHTML
                        } else {
                            n = t.innerHTML
                        }
                    }
                } else {
                    if (typeof e.textExtraction == "function") {
                        n = e.textExtraction(t)
                    } else {
                        n = $(t).text()
                    }
                }
                return n
            }

            function appendToTable(e, t) {
                if (e.config.debug) {
                    var n = new Date
                }
                var i = t, r = i.row, o = i.normalized, a = o.length, s = o[0].length - 1, l = $(e.tBodies[0]), u = [];
                for (var c = 0; c < a; c++) {
                    var d = o[c][s];
                    u.push(r[d]);
                    if (!e.config.appender) {
                        var f = r[d].length;
                        for (var h = 0; h < f; h++) {
                            l[0].appendChild(r[d][h])
                        }
                    }
                }
                if (e.config.appender) {
                    e.config.appender(e, u)
                }
                u = null;
                if (e.config.debug) {
                    benchmark("Rebuilt table:", n)
                }
                applyWidget(e);
                setTimeout(function () {
                    $(e).trigger("sortEnd")
                }, 0)
            }

            function buildHeaders(n) {
                if (n.config.debug) {
                    var e = new Date
                }
                var t = $.metadata ? true : false;
                var i = computeTableHeaderCellIndexes(n);
                $tableHeaders = $(n.config.selectorHeaders, n).each(function (e) {
                    this.column = i[this.parentNode.rowIndex + "-" + this.cellIndex];
                    this.order = formatSortingOrder(n.config.sortInitialOrder);
                    this.count = this.order;
                    if (checkHeaderMetadata(this) || checkHeaderOptions(n, e)) this.sortDisabled = true;
                    if (checkHeaderOptionsSortingLocked(n, e)) this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(n, e);
                    if (!this.sortDisabled) {
                        var t = $(this).addClass(n.config.cssHeader);
                        if (n.config.onRenderHeader) n.config.onRenderHeader.apply(t)
                    }
                    n.config.headerList[e] = this
                });
                if (n.config.debug) {
                    benchmark("Built headers:", e);
                    log($tableHeaders)
                }
                return $tableHeaders
            }

            function computeTableHeaderCellIndexes(e) {
                var t = [];
                var n = {};
                var i = e.getElementsByTagName("THEAD")[0];
                var r = i.getElementsByTagName("TR");
                for (var o = 0; o < r.length; o++) {
                    var a = r[o].cells;
                    for (var s = 0; s < a.length; s++) {
                        var l = a[s];
                        var u = l.parentNode.rowIndex;
                        var c = u + "-" + l.cellIndex;
                        var d = l.rowSpan || 1;
                        var f = l.colSpan || 1;
                        var h;
                        if (typeof t[u] == "undefined") {
                            t[u] = []
                        }
                        for (var p = 0; p < t[u].length + 1; p++) {
                            if (typeof t[u][p] == "undefined") {
                                h = p;
                                break
                            }
                        }
                        n[c] = h;
                        for (var p = u; p < u + d; p++) {
                            if (typeof t[p] == "undefined") {
                                t[p] = []
                            }
                            var g = t[p];
                            for (var m = h; m < h + f; m++) {
                                g[m] = "x"
                            }
                        }
                    }
                }
                return n
            }

            function checkCellColSpan(e, t, n) {
                var i = [], r = e.tHead.rows, o = r[n].cells;
                for (var a = 0; a < o.length; a++) {
                    var s = o[a];
                    if (s.colSpan > 1) {
                        i = i.concat(checkCellColSpan(e, headerArr, n++))
                    } else {
                        if (e.tHead.length == 1 || (s.rowSpan > 1 || !r[n + 1])) {
                            i.push(s)
                        }
                    }
                }
                return i
            }

            function checkHeaderMetadata(e) {
                if ($.metadata && $(e).metadata().sorter === false) {
                    return true
                }
                return false
            }

            function checkHeaderOptions(e, t) {
                if (e.config.headers[t] && e.config.headers[t].sorter === false) {
                    return true
                }
                return false
            }

            function checkHeaderOptionsSortingLocked(e, t) {
                if (e.config.headers[t] && e.config.headers[t].lockedOrder) return e.config.headers[t].lockedOrder;
                return false
            }

            function applyWidget(e) {
                var t = e.config.widgets;
                var n = t.length;
                for (var i = 0; i < n; i++) {
                    getWidgetById(t[i]).format(e)
                }
            }

            function getWidgetById(e) {
                var t = widgets.length;
                for (var n = 0; n < t; n++) {
                    if (widgets[n].id.toLowerCase() == e.toLowerCase()) {
                        return widgets[n]
                    }
                }
            }

            function formatSortingOrder(e) {
                if (typeof e != "Number") {
                    return e.toLowerCase() == "desc" ? 1 : 0
                } else {
                    return e == 1 ? 1 : 0
                }
            }

            function isValueInArray(e, t) {
                var n = t.length;
                for (var i = 0; i < n; i++) {
                    if (t[i][0] == e) {
                        return true
                    }
                }
                return false
            }

            function setHeadersCss(e, t, n, i) {
                t.removeClass(i[0]).removeClass(i[1]);
                var r = [];
                t.each(function (e) {
                    if (!this.sortDisabled) {
                        r[this.column] = $(this)
                    }
                });
                var o = n.length;
                for (var a = 0; a < o; a++) {
                    r[n[a][0]].addClass(i[n[a][1]])
                }
            }

            function fixColumnWidth(e, t) {
                var n = e.config;
                if (n.widthFixed) {
                    var i = $("<colgroup>");
                    $("tr:first td", e.tBodies[0]).each(function () {
                        i.append($("<col>").css("width", $(this).width()))
                    });
                    $(e).prepend(i)
                }
            }

            function updateHeaderSortCount(e, t) {
                var n = e.config, i = t.length;
                for (var r = 0; r < i; r++) {
                    var o = t[r], a = n.headerList[o[0]];
                    a.count = o[1];
                    a.count++
                }
            }

            function multisort(table, sortList, cache) {
                if (table.config.debug) {
                    var sortTime = new Date
                }
                var dynamicExp = "var sortWrapper = function(a,b) {", l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var c = sortList[i][0];
                    var order = sortList[i][1];
                    var s = table.config.parsers[c].type == "text" ? order == 0 ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c) : order == 0 ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c);
                    var e = "e" + i;
                    dynamicExp += "var " + e + " = " + s;
                    dynamicExp += "if(" + e + ") { return " + e + "; } ";
                    dynamicExp += "else { "
                }
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                for (var i = 0; i < l; i++) {
                    dynamicExp += "}; "
                }
                dynamicExp += "return 0; ";
                dynamicExp += "}; ";
                if (table.config.debug) {
                    benchmark("Evaling expression:" + dynamicExp, new Date)
                }
                eval(dynamicExp);
                cache.normalized.sort(sortWrapper);
                if (table.config.debug) {
                    benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime)
                }
                return cache
            }

            function makeSortFunction(e, t, n) {
                var i = "a[" + n + "]", r = "b[" + n + "]";
                if (e == "text" && t == "asc") {
                    return "(" + i + " == " + r + " ? 0 : (" + i + " === null ? Number.POSITIVE_INFINITY : (" + r + " === null ? Number.NEGATIVE_INFINITY : (" + i + " < " + r + ") ? -1 : 1 )));"
                } else if (e == "text" && t == "desc") {
                    return "(" + i + " == " + r + " ? 0 : (" + i + " === null ? Number.POSITIVE_INFINITY : (" + r + " === null ? Number.NEGATIVE_INFINITY : (" + r + " < " + i + ") ? -1 : 1 )));"
                } else if (e == "numeric" && t == "asc") {
                    return "(" + i + " === null && " + r + " === null) ? 0 :(" + i + " === null ? Number.POSITIVE_INFINITY : (" + r + " === null ? Number.NEGATIVE_INFINITY : " + i + " - " + r + "));"
                } else if (e == "numeric" && t == "desc") {
                    return "(" + i + " === null && " + r + " === null) ? 0 :(" + i + " === null ? Number.POSITIVE_INFINITY : (" + r + " === null ? Number.NEGATIVE_INFINITY : " + r + " - " + i + "));"
                }
            }

            function makeSortText(e) {
                return "((a[" + e + "] < b[" + e + "]) ? -1 : ((a[" + e + "] > b[" + e + "]) ? 1 : 0));"
            }

            function makeSortTextDesc(e) {
                return "((b[" + e + "] < a[" + e + "]) ? -1 : ((b[" + e + "] > a[" + e + "]) ? 1 : 0));"
            }

            function makeSortNumeric(e) {
                return "a[" + e + "]-b[" + e + "];"
            }

            function makeSortNumericDesc(e) {
                return "b[" + e + "]-a[" + e + "];"
            }

            function sortText(e, t) {
                if (table.config.sortLocaleCompare) return e.localeCompare(t);
                return e < t ? -1 : e > t ? 1 : 0
            }

            function sortTextDesc(e, t) {
                if (table.config.sortLocaleCompare) return t.localeCompare(e);
                return t < e ? -1 : t > e ? 1 : 0
            }

            function sortNumeric(e, t) {
                return e - t
            }

            function sortNumericDesc(e, t) {
                return t - e
            }

            function getCachedSortType(e, t) {
                return e[t].type
            }

            this.construct = function (i) {
                return this.each(function () {
                    if (!this.tHead || !this.tBodies) return;
                    var l, e, u, c, d, t = 0, n;
                    this.config = {};
                    d = $.extend(this.config, $.tablesorter.defaults, i);
                    l = $(this);
                    $.data(this, "tablesorter", d);
                    u = buildHeaders(this);
                    this.config.parsers = buildParserCache(this, u);
                    c = buildCache(this);
                    var f = [d.cssDesc, d.cssAsc];
                    fixColumnWidth(this);
                    u.click(function (e) {
                        var t = l[0].tBodies[0] && l[0].tBodies[0].rows.length || 0;
                        if (!this.sortDisabled && t > 0) {
                            l.trigger("sortStart");
                            var n = $(this);
                            var i = this.column;
                            this.order = this.count++ % 2;
                            if (this.lockedOrder) this.order = this.lockedOrder;
                            if (!e[d.sortMultiSortKey]) {
                                d.sortList = [];
                                if (d.sortForce != null) {
                                    var r = d.sortForce;
                                    for (var o = 0; o < r.length; o++) {
                                        if (r[o][0] != i) {
                                            d.sortList.push(r[o])
                                        }
                                    }
                                }
                                d.sortList.push([i, this.order])
                            } else {
                                if (isValueInArray(i, d.sortList)) {
                                    for (var o = 0; o < d.sortList.length; o++) {
                                        var a = d.sortList[o], s = d.headerList[a[0]];
                                        if (a[0] == i) {
                                            s.count = a[1];
                                            s.count++;
                                            a[1] = s.count % 2
                                        }
                                    }
                                } else {
                                    d.sortList.push([i, this.order])
                                }
                            }
                            setTimeout(function () {
                                setHeadersCss(l[0], u, d.sortList, f);
                                appendToTable(l[0], multisort(l[0], d.sortList, c))
                            }, 1);
                            return false
                        }
                    }).mousedown(function () {
                        if (d.cancelSelection) {
                            this.onselectstart = function () {
                                return false
                            };
                            return false
                        }
                    });
                    l.bind("update", function () {
                        var e = this;
                        setTimeout(function () {
                            e.config.parsers = buildParserCache(e, u);
                            c = buildCache(e)
                        }, 1)
                    }).bind("updateCell", function (e, t) {
                        var n = this.config;
                        var i = [t.parentNode.rowIndex - 1, t.cellIndex];
                        c.normalized[i[0]][i[1]] = n.parsers[i[1]].format(getElementText(n, t), t)
                    }).bind("sorton", function (e, t) {
                        $(this).trigger("sortStart");
                        d.sortList = t;
                        var n = d.sortList;
                        updateHeaderSortCount(this, n);
                        setHeadersCss(this, u, n, f);
                        appendToTable(this, multisort(this, n, c))
                    }).bind("appendCache", function () {
                        appendToTable(this, c)
                    }).bind("applyWidgetId", function (e, t) {
                        getWidgetById(t).format(this)
                    }).bind("applyWidgets", function () {
                        applyWidget(this)
                    });
                    if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) {
                        d.sortList = $(this).metadata().sortlist
                    }
                    if (d.sortList.length > 0) {
                        l.trigger("sorton", [d.sortList])
                    }
                    applyWidget(this)
                })
            };
            this.addParser = function (e) {
                var t = parsers.length, n = true;
                for (var i = 0; i < t; i++) {
                    if (parsers[i].id.toLowerCase() == e.id.toLowerCase()) {
                        n = false
                    }
                }
                if (n) {
                    parsers.push(e)
                }
            };
            this.addWidget = function (e) {
                widgets.push(e)
            };
            this.formatFloat = function (e) {
                var t = parseFloat(e);
                return isNaN(t) ? 0 : t
            };
            this.formatInt = function (e) {
                var t = parseInt(e);
                return isNaN(t) ? 0 : t
            };
            this.isDigit = function (e, t) {
                return /^[-+]?\d*$/.test($.trim(e.replace(/[,.']/g, "")))
            };
            this.clearTableBody = function (e) {
                if ($.browser.msie) {
                    function t() {
                        while (this.firstChild) this.removeChild(this.firstChild)
                    }

                    t.apply(e.tBodies[0])
                } else {
                    e.tBodies[0].innerHTML = ""
                }
            }
        }
    });
    $.fn.extend({tablesorter: $.tablesorter.construct});
    var ts = $.tablesorter;
    ts.addParser({
        id: "text", is: function (e) {
            return true
        }, format: function (e) {
            return $.trim(e.toLocaleLowerCase())
        }, type: "text"
    });
    ts.addParser({
        id: "digit", is: function (e, t) {
            var n = t.config;
            return $.tablesorter.isDigit(e, n)
        }, format: function (e) {
            return $.tablesorter.formatFloat(e)
        }, type: "numeric"
    });
    ts.addParser({
        id: "currency", is: function (e) {
            return /^[Â£$â‚¬?.]/.test(e)
        }, format: function (e) {
            return $.tablesorter.formatFloat(e.replace(new RegExp(/[Â£$â‚¬]/g), ""))
        }, type: "numeric"
    });
    ts.addParser({
        id: "ipAddress", is: function (e) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(e)
        }, format: function (e) {
            var t = e.split("."), n = "", i = t.length;
            for (var r = 0; r < i; r++) {
                var o = t[r];
                if (o.length == 2) {
                    n += "0" + o
                } else {
                    n += o
                }
            }
            return $.tablesorter.formatFloat(n)
        }, type: "numeric"
    });
    ts.addParser({
        id: "url", is: function (e) {
            return /^(https?|ftp|file):\/\/$/.test(e)
        }, format: function (e) {
            return jQuery.trim(e.replace(new RegExp(/(https?|ftp|file):\/\//), ""))
        }, type: "text"
    });
    ts.addParser({
        id: "isoDate", is: function (e) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(e)
        }, format: function (e) {
            return $.tablesorter.formatFloat(e != "" ? new Date(e.replace(new RegExp(/-/g), "/")).getTime() : "0")
        }, type: "numeric"
    });
    ts.addParser({
        id: "percent", is: function (e) {
            return /\%$/.test($.trim(e))
        }, format: function (e) {
            return $.tablesorter.formatFloat(e.replace(new RegExp(/%/g), ""))
        }, type: "numeric"
    });
    ts.addParser({
        id: "usLongDate", is: function (e) {
            return e.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))
        }, format: function (e) {
            return $.tablesorter.formatFloat(new Date(e).getTime())
        }, type: "numeric"
    });
    ts.addParser({
        id: "shortDate", is: function (e) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(e)
        }, format: function (e, t) {
            var n = t.config;
            e = e.replace(/\-/g, "/");
            if (n.dateFormat == "us") {
                e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2")
            } else if (n.dateFormat == "pt") {
                e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1")
            } else if (n.dateFormat == "uk") {
                e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1")
            } else if (n.dateFormat == "dd/mm/yy" || n.dateFormat == "dd-mm-yy") {
                e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3")
            }
            return $.tablesorter.formatFloat(new Date(e).getTime())
        }, type: "numeric"
    });
    ts.addParser({
        id: "time", is: function (e) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(e)
        }, format: function (e) {
            return $.tablesorter.formatFloat(new Date("2000/01/01 " + e).getTime())
        }, type: "numeric"
    });
    ts.addParser({
        id: "metadata", is: function (e) {
            return false
        }, format: function (e, t, n) {
            var i = t.config, r = !i.parserMetadataName ? "sortValue" : i.parserMetadataName;
            return $(n).metadata()[r]
        }, type: "numeric"
    });
    ts.addWidget({
        id: "zebra", format: function (t) {
            if (t.config.debug) {
                var e = new Date
            }
            var n, i = -1, r;
            $("tr:visible", t.tBodies[0]).each(function (e) {
                n = $(this);
                if (!n.hasClass(t.config.cssChildRow)) i++;
                r = i % 2 == 0;
                n.removeClass(t.config.widgetZebra.css[r ? 0 : 1]).addClass(t.config.widgetZebra.css[r ? 1 : 0])
            });
            if (t.config.debug) {
                $.tablesorter.benchmark("Applying Zebra widget", e)
            }
        }
    })
})(jQuery);
(function (e, t) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = t() : typeof define === "function" && define.amd ? define(t) : e.moment = t()
})(this, function () {
    "use strict";
    var N;

    function u() {
        return N.apply(null, arguments)
    }

    function R(e) {
        N = e
    }

    function a(e) {
        return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
    }

    function H(e) {
        return e != null && Object.prototype.toString.call(e) === "[object Object]"
    }

    function B(e) {
        var t;
        for (t in e) {
            return false
        }
        return true
    }

    function o(e) {
        return e === void 0
    }

    function W(e) {
        return typeof e === "number" || Object.prototype.toString.call(e) === "[object Number]"
    }

    function z(e) {
        return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    }

    function j(e, t) {
        var n = [], i;
        for (i = 0; i < e.length; ++i) {
            n.push(t(e[i], i))
        }
        return n
    }

    function s(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function l(e, t) {
        for (var n in t) {
            if (s(t, n)) {
                e[n] = t[n]
            }
        }
        if (s(t, "toString")) {
            e.toString = t.toString
        }
        if (s(t, "valueOf")) {
            e.valueOf = t.valueOf
        }
        return e
    }

    function c(e, t, n, i) {
        return Gn(e, t, n, i, true).utc()
    }

    function Y() {
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        }
    }

    function h(e) {
        if (e._pf == null) {
            e._pf = Y()
        }
        return e._pf
    }

    var V;
    if (Array.prototype.some) {
        V = Array.prototype.some
    } else {
        V = function (e) {
            var t = Object(this);
            var n = t.length >>> 0;
            for (var i = 0; i < n; i++) {
                if (i in t && e.call(this, t[i], i, t)) {
                    return true
                }
            }
            return false
        }
    }
    var q = V;

    function U(e) {
        if (e._isValid == null) {
            var t = h(e);
            var n = q.call(t.parsedDateParts, function (e) {
                return e != null
            });
            var i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict) {
                i = i && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined
            }
            if (Object.isFrozen == null || !Object.isFrozen(e)) {
                e._isValid = i
            } else {
                return i
            }
        }
        return e._isValid
    }

    function $(e) {
        var t = c(NaN);
        if (e != null) {
            l(h(t), e)
        } else {
            h(t).userInvalidated = true
        }
        return t
    }

    var G = u.momentProperties = [];

    function Z(e, t) {
        var n, i, r;
        if (!o(t._isAMomentObject)) {
            e._isAMomentObject = t._isAMomentObject
        }
        if (!o(t._i)) {
            e._i = t._i
        }
        if (!o(t._f)) {
            e._f = t._f
        }
        if (!o(t._l)) {
            e._l = t._l
        }
        if (!o(t._strict)) {
            e._strict = t._strict
        }
        if (!o(t._tzm)) {
            e._tzm = t._tzm
        }
        if (!o(t._isUTC)) {
            e._isUTC = t._isUTC
        }
        if (!o(t._offset)) {
            e._offset = t._offset
        }
        if (!o(t._pf)) {
            e._pf = h(t)
        }
        if (!o(t._locale)) {
            e._locale = t._locale
        }
        if (G.length > 0) {
            for (n = 0; n < G.length; n++) {
                i = G[n];
                r = t[i];
                if (!o(r)) {
                    e[i] = r
                }
            }
        }
        return e
    }

    var X = false;

    function K(e) {
        Z(this, e);
        this._d = new Date(e._d != null ? e._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN)
        }
        if (X === false) {
            X = true;
            u.updateOffset(this);
            X = false
        }
    }

    function r(e) {
        return e instanceof K || e != null && e._isAMomentObject != null
    }

    function p(e) {
        if (e < 0) {
            return Math.ceil(e) || 0
        } else {
            return Math.floor(e)
        }
    }

    function d(e) {
        var t = +e, n = 0;
        if (t !== 0 && isFinite(t)) {
            n = p(t)
        }
        return n
    }

    function J(e, t, n) {
        var i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), o = 0, a;
        for (a = 0; a < i; a++) {
            if (n && e[a] !== t[a] || !n && d(e[a]) !== d(t[a])) {
                o++
            }
        }
        return o + r
    }

    function Q(e) {
        if (u.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn("Deprecation warning: " + e)
        }
    }

    function e(r, o) {
        var a = true;
        return l(function () {
            if (u.deprecationHandler != null) {
                u.deprecationHandler(null, r)
            }
            if (a) {
                var e = [];
                var t;
                for (var n = 0; n < arguments.length; n++) {
                    t = "";
                    if (typeof arguments[n] === "object") {
                        t += "\n[" + n + "] ";
                        for (var i in arguments[0]) {
                            t += i + ": " + arguments[0][i] + ", "
                        }
                        t = t.slice(0, -2)
                    } else {
                        t = arguments[n]
                    }
                    e.push(t)
                }
                Q(r + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack);
                a = false
            }
            return o.apply(this, arguments)
        }, o)
    }

    var ee = {};

    function te(e, t) {
        if (u.deprecationHandler != null) {
            u.deprecationHandler(e, t)
        }
        if (!ee[e]) {
            Q(t);
            ee[e] = true
        }
    }

    u.suppressDeprecationWarnings = false;
    u.deprecationHandler = null;

    function f(e) {
        return e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
    }

    function ne(e) {
        var t, n;
        for (n in e) {
            t = e[n];
            if (f(t)) {
                this[n] = t
            } else {
                this["_" + n] = t
            }
        }
        this._config = e;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function ie(e, t) {
        var n = l({}, e), i;
        for (i in t) {
            if (s(t, i)) {
                if (H(e[i]) && H(t[i])) {
                    n[i] = {};
                    l(n[i], e[i]);
                    l(n[i], t[i])
                } else if (t[i] != null) {
                    n[i] = t[i]
                } else {
                    delete n[i]
                }
            }
        }
        for (i in e) {
            if (s(e, i) && !s(t, i) && H(e[i])) {
                n[i] = l({}, n[i])
            }
        }
        return n
    }

    function re(e) {
        if (e != null) {
            this.set(e)
        }
    }

    var oe;
    if (Object.keys) {
        oe = Object.keys
    } else {
        oe = function (e) {
            var t, n = [];
            for (t in e) {
                if (s(e, t)) {
                    n.push(t)
                }
            }
            return n
        }
    }
    var ae = oe;
    var se = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };

    function le(e, t, n) {
        var i = this._calendar[e] || this._calendar["sameElse"];
        return f(i) ? i.call(t, n) : i
    }

    var ue = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };

    function ce(e) {
        var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
        if (t || !n) {
            return t
        }
        this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1)
        });
        return this._longDateFormat[e]
    }

    var de = "Invalid date";

    function fe() {
        return this._invalidDate
    }

    var he = "%d";
    var pe = /\d{1,2}/;

    function ge(e) {
        return this._ordinal.replace("%d", e)
    }

    var me = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };

    function ve(e, t, n, i) {
        var r = this._relativeTime[n];
        return f(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
    }

    function ye(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return f(n) ? n(t) : n.replace(/%s/i, t)
    }

    var be = {};

    function t(e, t) {
        var n = e.toLowerCase();
        be[n] = be[n + "s"] = be[t] = e
    }

    function g(e) {
        return typeof e === "string" ? be[e] || be[e.toLowerCase()] : undefined
    }

    function xe(e) {
        var t = {}, n, i;
        for (i in e) {
            if (s(e, i)) {
                n = g(i);
                if (n) {
                    t[n] = e[i]
                }
            }
        }
        return t
    }

    var we = {};

    function n(e, t) {
        we[e] = t
    }

    function ke(e) {
        var t = [];
        for (var n in e) {
            t.push({unit: n, priority: we[n]})
        }
        t.sort(function (e, t) {
            return e.priority - t.priority
        });
        return t
    }

    function _e(t, n) {
        return function (e) {
            if (e != null) {
                Ce(this, t, e);
                u.updateOffset(this, n);
                return this
            } else {
                return Se(this, t)
            }
        }
    }

    function Se(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }

    function Ce(e, t, n) {
        if (e.isValid()) {
            e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }
    }

    function Te(e) {
        e = g(e);
        if (f(this[e])) {
            return this[e]()
        }
        return this
    }

    function Me(e, t) {
        if (typeof e === "object") {
            e = xe(e);
            var n = ke(e);
            for (var i = 0; i < n.length; i++) {
                this[n[i].unit](e[n[i].unit])
            }
        } else {
            e = g(e);
            if (f(this[e])) {
                return this[e](t)
            }
        }
        return this
    }

    function m(e, t, n) {
        var i = "" + Math.abs(e), r = t - i.length, o = e >= 0;
        return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }

    var De = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var Ae = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var Pe = {};
    var Ie = {};

    function i(e, t, n, i) {
        var r = i;
        if (typeof i === "string") {
            r = function () {
                return this[i]()
            }
        }
        if (e) {
            Ie[e] = r
        }
        if (t) {
            Ie[t[0]] = function () {
                return m(r.apply(this, arguments), t[1], t[2])
            }
        }
        if (n) {
            Ie[n] = function () {
                return this.localeData().ordinal(r.apply(this, arguments), e)
            }
        }
    }

    function Ee(e) {
        if (e.match(/\[[\s\S]/)) {
            return e.replace(/^\[|\]$/g, "")
        }
        return e.replace(/\\/g, "")
    }

    function Oe(i) {
        var r = i.match(De), e, o;
        for (e = 0, o = r.length; e < o; e++) {
            if (Ie[r[e]]) {
                r[e] = Ie[r[e]]
            } else {
                r[e] = Ee(r[e])
            }
        }
        return function (e) {
            var t = "", n;
            for (n = 0; n < o; n++) {
                t += f(r[n]) ? r[n].call(e, i) : r[n]
            }
            return t
        }
    }

    function Le(e, t) {
        if (!e.isValid()) {
            return e.localeData().invalidDate()
        }
        t = Fe(t, e.localeData());
        Pe[t] = Pe[t] || Oe(t);
        return Pe[t](e)
    }

    function Fe(e, t) {
        var n = 5;

        function i(e) {
            return t.longDateFormat(e) || e
        }

        Ae.lastIndex = 0;
        while (n >= 0 && Ae.test(e)) {
            e = e.replace(Ae, i);
            Ae.lastIndex = 0;
            n -= 1
        }
        return e
    }

    var Ne = /\d/;
    var v = /\d\d/;
    var Re = /\d{3}/;
    var He = /\d{4}/;
    var Be = /[+-]?\d{6}/;
    var y = /\d\d?/;
    var We = /\d\d\d\d?/;
    var ze = /\d\d\d\d\d\d?/;
    var je = /\d{1,3}/;
    var Ye = /\d{1,4}/;
    var Ve = /[+-]?\d{1,6}/;
    var qe = /\d+/;
    var Ue = /[+-]?\d+/;
    var $e = /Z|[+-]\d\d:?\d\d/gi;
    var Ge = /Z|[+-]\d\d(?::?\d\d)?/gi;
    var Ze = /[+-]?\d+(\.\d{1,3})?/;
    var Xe = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
    var Ke = {};

    function b(e, n, i) {
        Ke[e] = f(n) ? n : function (e, t) {
            return e && i ? i : n
        }
    }

    function Je(e, t) {
        if (!s(Ke, e)) {
            return new RegExp(Qe(e))
        }
        return Ke[e](t._strict, t._locale)
    }

    function Qe(e) {
        return et(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, r) {
            return t || n || i || r
        }))
    }

    function et(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    var tt = {};

    function x(e, n) {
        var t, i = n;
        if (typeof e === "string") {
            e = [e]
        }
        if (W(n)) {
            i = function (e, t) {
                t[n] = d(e)
            }
        }
        for (t = 0; t < e.length; t++) {
            tt[e[t]] = i
        }
    }

    function nt(e, r) {
        x(e, function (e, t, n, i) {
            n._w = n._w || {};
            r(e, n._w, n, i)
        })
    }

    function it(e, t, n) {
        if (t != null && s(tt, e)) {
            tt[e](t, n._a, n, e)
        }
    }

    var w = 0;
    var k = 1;
    var _ = 2;
    var S = 3;
    var C = 4;
    var T = 5;
    var rt = 6;
    var ot = 7;
    var at = 8;
    var st;
    if (Array.prototype.indexOf) {
        st = Array.prototype.indexOf
    } else {
        st = function (e) {
            var t;
            for (t = 0; t < this.length; ++t) {
                if (this[t] === e) {
                    return t
                }
            }
            return -1
        }
    }
    var M = st;

    function lt(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    i("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    });
    i("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e)
    });
    i("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e)
    });
    t("month", "M");
    n("month", 8);
    b("M", y);
    b("MM", y, v);
    b("MMM", function (e, t) {
        return t.monthsShortRegex(e)
    });
    b("MMMM", function (e, t) {
        return t.monthsRegex(e)
    });
    x(["M", "MM"], function (e, t) {
        t[k] = d(e) - 1
    });
    x(["MMM", "MMMM"], function (e, t, n, i) {
        var r = n._locale.monthsParse(e, i, n._strict);
        if (r != null) {
            t[k] = r
        } else {
            h(n).invalidMonth = e
        }
    });
    var ut = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var ct = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");

    function dt(e, t) {
        if (!e) {
            return a(this._months) ? this._months : this._months["standalone"]
        }
        return a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ut).test(t) ? "format" : "standalone"][e.month()]
    }

    var ft = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function ht(e, t) {
        if (!e) {
            return a(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"]
        }
        return a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ut.test(t) ? "format" : "standalone"][e.month()]
    }

    function pt(e, t, n) {
        var i, r, o, a = e.toLocaleLowerCase();
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                o = c([2e3, i]);
                this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase()
            }
        }
        if (n) {
            if (t === "MMM") {
                r = M.call(this._shortMonthsParse, a);
                return r !== -1 ? r : null
            } else {
                r = M.call(this._longMonthsParse, a);
                return r !== -1 ? r : null
            }
        } else {
            if (t === "MMM") {
                r = M.call(this._shortMonthsParse, a);
                if (r !== -1) {
                    return r
                }
                r = M.call(this._longMonthsParse, a);
                return r !== -1 ? r : null
            } else {
                r = M.call(this._longMonthsParse, a);
                if (r !== -1) {
                    return r
                }
                r = M.call(this._shortMonthsParse, a);
                return r !== -1 ? r : null
            }
        }
    }

    function gt(e, t, n) {
        var i, r, o;
        if (this._monthsParseExact) {
            return pt.call(this, e, t, n)
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = []
        }
        for (i = 0; i < 12; i++) {
            r = c([2e3, i]);
            if (n && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i");
                this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")
            }
            if (!n && !this._monthsParse[i]) {
                o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, "");
                this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")
            }
            if (n && t === "MMMM" && this._longMonthsParse[i].test(e)) {
                return i
            } else if (n && t === "MMM" && this._shortMonthsParse[i].test(e)) {
                return i
            } else if (!n && this._monthsParse[i].test(e)) {
                return i
            }
        }
    }

    function mt(e, t) {
        var n;
        if (!e.isValid()) {
            return e
        }
        if (typeof t === "string") {
            if (/^\d+$/.test(t)) {
                t = d(t)
            } else {
                t = e.localeData().monthsParse(t);
                if (!W(t)) {
                    return e
                }
            }
        }
        n = Math.min(e.date(), lt(e.year(), t));
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n);
        return e
    }

    function vt(e) {
        if (e != null) {
            mt(this, e);
            u.updateOffset(this, true);
            return this
        } else {
            return Se(this, "Month")
        }
    }

    function yt() {
        return lt(this.year(), this.month())
    }

    var bt = Xe;

    function xt(e) {
        if (this._monthsParseExact) {
            if (!s(this, "_monthsRegex")) {
                _t.call(this)
            }
            if (e) {
                return this._monthsShortStrictRegex
            } else {
                return this._monthsShortRegex
            }
        } else {
            if (!s(this, "_monthsShortRegex")) {
                this._monthsShortRegex = bt
            }
            return this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
        }
    }

    var wt = Xe;

    function kt(e) {
        if (this._monthsParseExact) {
            if (!s(this, "_monthsRegex")) {
                _t.call(this)
            }
            if (e) {
                return this._monthsStrictRegex
            } else {
                return this._monthsRegex
            }
        } else {
            if (!s(this, "_monthsRegex")) {
                this._monthsRegex = wt
            }
            return this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
        }
    }

    function _t() {
        function e(e, t) {
            return t.length - e.length
        }

        var t = [], n = [], i = [], r, o;
        for (r = 0; r < 12; r++) {
            o = c([2e3, r]);
            t.push(this.monthsShort(o, ""));
            n.push(this.months(o, ""));
            i.push(this.months(o, ""));
            i.push(this.monthsShort(o, ""))
        }
        t.sort(e);
        n.sort(e);
        i.sort(e);
        for (r = 0; r < 12; r++) {
            t[r] = et(t[r]);
            n[r] = et(n[r])
        }
        for (r = 0; r < 24; r++) {
            i[r] = et(i[r])
        }
        this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
    }

    i("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    });
    i(0, ["YY", 2], 0, function () {
        return this.year() % 100
    });
    i(0, ["YYYY", 4], 0, "year");
    i(0, ["YYYYY", 5], 0, "year");
    i(0, ["YYYYYY", 6, true], 0, "year");
    t("year", "y");
    n("year", 1);
    b("Y", Ue);
    b("YY", y, v);
    b("YYYY", Ye, He);
    b("YYYYY", Ve, Be);
    b("YYYYYY", Ve, Be);
    x(["YYYYY", "YYYYYY"], w);
    x("YYYY", function (e, t) {
        t[w] = e.length === 2 ? u.parseTwoDigitYear(e) : d(e)
    });
    x("YY", function (e, t) {
        t[w] = u.parseTwoDigitYear(e)
    });
    x("Y", function (e, t) {
        t[w] = parseInt(e, 10)
    });

    function St(e) {
        return Ct(e) ? 366 : 365
    }

    function Ct(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    u.parseTwoDigitYear = function (e) {
        return d(e) + (d(e) > 68 ? 1900 : 2e3)
    };
    var Tt = _e("FullYear", true);

    function Mt() {
        return Ct(this.year())
    }

    function Dt(e, t, n, i, r, o, a) {
        var s = new Date(e, t, n, i, r, o, a);
        if (e < 100 && e >= 0 && isFinite(s.getFullYear())) {
            s.setFullYear(e)
        }
        return s
    }

    function At(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        if (e < 100 && e >= 0 && isFinite(t.getUTCFullYear())) {
            t.setUTCFullYear(e)
        }
        return t
    }

    function Pt(e, t, n) {
        var i = 7 + t - n, r = (7 + At(e, 0, i).getUTCDay() - t) % 7;
        return -r + i - 1
    }

    function It(e, t, n, i, r) {
        var o = (7 + n - i) % 7, a = Pt(e, i, r), s = 1 + 7 * (t - 1) + o + a, l, u;
        if (s <= 0) {
            l = e - 1;
            u = St(l) + s
        } else if (s > St(e)) {
            l = e + 1;
            u = s - St(e)
        } else {
            l = e;
            u = s
        }
        return {year: l, dayOfYear: u}
    }

    function Et(e, t, n) {
        var i = Pt(e.year(), t, n), r = Math.floor((e.dayOfYear() - i - 1) / 7) + 1, o, a;
        if (r < 1) {
            a = e.year() - 1;
            o = r + Ot(a, t, n)
        } else if (r > Ot(e.year(), t, n)) {
            o = r - Ot(e.year(), t, n);
            a = e.year() + 1
        } else {
            a = e.year();
            o = r
        }
        return {week: o, year: a}
    }

    function Ot(e, t, n) {
        var i = Pt(e, t, n), r = Pt(e + 1, t, n);
        return (St(e) - i + r) / 7
    }

    i("w", ["ww", 2], "wo", "week");
    i("W", ["WW", 2], "Wo", "isoWeek");
    t("week", "w");
    t("isoWeek", "W");
    n("week", 5);
    n("isoWeek", 5);
    b("w", y);
    b("ww", y, v);
    b("W", y);
    b("WW", y, v);
    nt(["w", "ww", "W", "WW"], function (e, t, n, i) {
        t[i.substr(0, 1)] = d(e)
    });

    function Lt(e) {
        return Et(e, this._week.dow, this._week.doy).week
    }

    var Ft = {dow: 0, doy: 6};

    function Nt() {
        return this._week.dow
    }

    function Rt() {
        return this._week.doy
    }

    function Ht(e) {
        var t = this.localeData().week(this);
        return e == null ? t : this.add((e - t) * 7, "d")
    }

    function Bt(e) {
        var t = Et(this, 1, 4).week;
        return e == null ? t : this.add((e - t) * 7, "d")
    }

    i("d", 0, "do", "day");
    i("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e)
    });
    i("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e)
    });
    i("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e)
    });
    i("e", 0, 0, "weekday");
    i("E", 0, 0, "isoWeekday");
    t("day", "d");
    t("weekday", "e");
    t("isoWeekday", "E");
    n("day", 11);
    n("weekday", 11);
    n("isoWeekday", 11);
    b("d", y);
    b("e", y);
    b("E", y);
    b("dd", function (e, t) {
        return t.weekdaysMinRegex(e)
    });
    b("ddd", function (e, t) {
        return t.weekdaysShortRegex(e)
    });
    b("dddd", function (e, t) {
        return t.weekdaysRegex(e)
    });
    nt(["dd", "ddd", "dddd"], function (e, t, n, i) {
        var r = n._locale.weekdaysParse(e, i, n._strict);
        if (r != null) {
            t.d = r
        } else {
            h(n).invalidWeekday = e
        }
    });
    nt(["d", "e", "E"], function (e, t, n, i) {
        t[i] = d(e)
    });

    function Wt(e, t) {
        if (typeof e !== "string") {
            return e
        }
        if (!isNaN(e)) {
            return parseInt(e, 10)
        }
        e = t.weekdaysParse(e);
        if (typeof e === "number") {
            return e
        }
        return null
    }

    function zt(e, t) {
        if (typeof e === "string") {
            return t.weekdaysParse(e) % 7 || 7
        }
        return isNaN(e) ? null : e
    }

    var jt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");

    function Yt(e, t) {
        if (!e) {
            return a(this._weekdays) ? this._weekdays : this._weekdays["standalone"]
        }
        return a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
    }

    var Vt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");

    function qt(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }

    var Ut = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

    function $t(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }

    function Gt(e, t, n) {
        var i, r, o, a = e.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
                o = c([2e3, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase()
            }
        }
        if (n) {
            if (t === "dddd") {
                r = M.call(this._weekdaysParse, a);
                return r !== -1 ? r : null
            } else if (t === "ddd") {
                r = M.call(this._shortWeekdaysParse, a);
                return r !== -1 ? r : null
            } else {
                r = M.call(this._minWeekdaysParse, a);
                return r !== -1 ? r : null
            }
        } else {
            if (t === "dddd") {
                r = M.call(this._weekdaysParse, a);
                if (r !== -1) {
                    return r
                }
                r = M.call(this._shortWeekdaysParse, a);
                if (r !== -1) {
                    return r
                }
                r = M.call(this._minWeekdaysParse, a);
                return r !== -1 ? r : null
            } else if (t === "ddd") {
                r = M.call(this._shortWeekdaysParse, a);
                if (r !== -1) {
                    return r
                }
                r = M.call(this._weekdaysParse, a);
                if (r !== -1) {
                    return r
                }
                r = M.call(this._minWeekdaysParse, a);
                return r !== -1 ? r : null
            } else {
                r = M.call(this._minWeekdaysParse, a);
                if (r !== -1) {
                    return r
                }
                r = M.call(this._weekdaysParse, a);
                if (r !== -1) {
                    return r
                }
                r = M.call(this._shortWeekdaysParse, a);
                return r !== -1 ? r : null
            }
        }
    }

    function Zt(e, t, n) {
        var i, r, o;
        if (this._weekdaysParseExact) {
            return Gt.call(this, e, t, n)
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = []
        }
        for (i = 0; i < 7; i++) {
            r = c([2e3, 1]).day(i);
            if (n && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i");
                this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i");
                this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")
            }
            if (!this._weekdaysParse[i]) {
                o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, "");
                this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")
            }
            if (n && t === "dddd" && this._fullWeekdaysParse[i].test(e)) {
                return i
            } else if (n && t === "ddd" && this._shortWeekdaysParse[i].test(e)) {
                return i
            } else if (n && t === "dd" && this._minWeekdaysParse[i].test(e)) {
                return i
            } else if (!n && this._weekdaysParse[i].test(e)) {
                return i
            }
        }
    }

    function Xt(e) {
        if (!this.isValid()) {
            return e != null ? this : NaN
        }
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (e != null) {
            e = Wt(e, this.localeData());
            return this.add(e - t, "d")
        } else {
            return t
        }
    }

    function Kt(e) {
        if (!this.isValid()) {
            return e != null ? this : NaN
        }
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return e == null ? t : this.add(e - t, "d")
    }

    function Jt(e) {
        if (!this.isValid()) {
            return e != null ? this : NaN
        }
        if (e != null) {
            var t = zt(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        } else {
            return this.day() || 7
        }
    }

    var Qt = Xe;

    function en(e) {
        if (this._weekdaysParseExact) {
            if (!s(this, "_weekdaysRegex")) {
                an.call(this)
            }
            if (e) {
                return this._weekdaysStrictRegex
            } else {
                return this._weekdaysRegex
            }
        } else {
            if (!s(this, "_weekdaysRegex")) {
                this._weekdaysRegex = Qt
            }
            return this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex
        }
    }

    var tn = Xe;

    function nn(e) {
        if (this._weekdaysParseExact) {
            if (!s(this, "_weekdaysRegex")) {
                an.call(this)
            }
            if (e) {
                return this._weekdaysShortStrictRegex
            } else {
                return this._weekdaysShortRegex
            }
        } else {
            if (!s(this, "_weekdaysShortRegex")) {
                this._weekdaysShortRegex = tn
            }
            return this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
        }
    }

    var rn = Xe;

    function on(e) {
        if (this._weekdaysParseExact) {
            if (!s(this, "_weekdaysRegex")) {
                an.call(this)
            }
            if (e) {
                return this._weekdaysMinStrictRegex
            } else {
                return this._weekdaysMinRegex
            }
        } else {
            if (!s(this, "_weekdaysMinRegex")) {
                this._weekdaysMinRegex = rn
            }
            return this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
        }
    }

    function an() {
        function e(e, t) {
            return t.length - e.length
        }

        var t = [], n = [], i = [], r = [], o, a, s, l, u;
        for (o = 0; o < 7; o++) {
            a = c([2e3, 1]).day(o);
            s = this.weekdaysMin(a, "");
            l = this.weekdaysShort(a, "");
            u = this.weekdays(a, "");
            t.push(s);
            n.push(l);
            i.push(u);
            r.push(s);
            r.push(l);
            r.push(u)
        }
        t.sort(e);
        n.sort(e);
        i.sort(e);
        r.sort(e);
        for (o = 0; o < 7; o++) {
            n[o] = et(n[o]);
            i[o] = et(i[o]);
            r[o] = et(r[o])
        }
        this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
    }

    function sn() {
        return this.hours() % 12 || 12
    }

    function ln() {
        return this.hours() || 24
    }

    i("H", ["HH", 2], 0, "hour");
    i("h", ["hh", 2], 0, sn);
    i("k", ["kk", 2], 0, ln);
    i("hmm", 0, 0, function () {
        return "" + sn.apply(this) + m(this.minutes(), 2)
    });
    i("hmmss", 0, 0, function () {
        return "" + sn.apply(this) + m(this.minutes(), 2) + m(this.seconds(), 2)
    });
    i("Hmm", 0, 0, function () {
        return "" + this.hours() + m(this.minutes(), 2)
    });
    i("Hmmss", 0, 0, function () {
        return "" + this.hours() + m(this.minutes(), 2) + m(this.seconds(), 2)
    });

    function un(e, t) {
        i(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    un("a", true);
    un("A", false);
    t("hour", "h");
    n("hour", 13);

    function cn(e, t) {
        return t._meridiemParse
    }

    b("a", cn);
    b("A", cn);
    b("H", y);
    b("h", y);
    b("k", y);
    b("HH", y, v);
    b("hh", y, v);
    b("kk", y, v);
    b("hmm", We);
    b("hmmss", ze);
    b("Hmm", We);
    b("Hmmss", ze);
    x(["H", "HH"], S);
    x(["k", "kk"], function (e, t, n) {
        var i = d(e);
        t[S] = i === 24 ? 0 : i
    });
    x(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e);
        n._meridiem = e
    });
    x(["h", "hh"], function (e, t, n) {
        t[S] = d(e);
        h(n).bigHour = true
    });
    x("hmm", function (e, t, n) {
        var i = e.length - 2;
        t[S] = d(e.substr(0, i));
        t[C] = d(e.substr(i));
        h(n).bigHour = true
    });
    x("hmmss", function (e, t, n) {
        var i = e.length - 4;
        var r = e.length - 2;
        t[S] = d(e.substr(0, i));
        t[C] = d(e.substr(i, 2));
        t[T] = d(e.substr(r));
        h(n).bigHour = true
    });
    x("Hmm", function (e, t, n) {
        var i = e.length - 2;
        t[S] = d(e.substr(0, i));
        t[C] = d(e.substr(i))
    });
    x("Hmmss", function (e, t, n) {
        var i = e.length - 4;
        var r = e.length - 2;
        t[S] = d(e.substr(0, i));
        t[C] = d(e.substr(i, 2));
        t[T] = d(e.substr(r))
    });

    function dn(e) {
        return (e + "").toLowerCase().charAt(0) === "p"
    }

    var fn = /[ap]\.?m?\.?/i;

    function hn(e, t, n) {
        if (e > 11) {
            return n ? "pm" : "PM"
        } else {
            return n ? "am" : "AM"
        }
    }

    var pn = _e("Hours", true);
    var gn = {
        calendar: se,
        longDateFormat: ue,
        invalidDate: de,
        ordinal: he,
        dayOfMonthOrdinalParse: pe,
        relativeTime: me,
        months: ct,
        monthsShort: ft,
        week: Ft,
        weekdays: jt,
        weekdaysMin: Ut,
        weekdaysShort: Vt,
        meridiemParse: fn
    };
    var D = {};
    var mn = {};
    var vn;

    function yn(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function bn(e) {
        var t = 0, n, i, r, o;
        while (t < e.length) {
            o = yn(e[t]).split("-");
            n = o.length;
            i = yn(e[t + 1]);
            i = i ? i.split("-") : null;
            while (n > 0) {
                r = xn(o.slice(0, n).join("-"));
                if (r) {
                    return r
                }
                if (i && i.length >= n && J(o, i, true) >= n - 1) {
                    break
                }
                n--
            }
            t++
        }
        return null
    }

    function xn(e) {
        var t = null;
        if (!D[e] && typeof module !== "undefined" && module && module.exports) {
            try {
                t = vn._abbr;
                require("./locale/" + e);
                wn(t)
            } catch (e) {
            }
        }
        return D[e]
    }

    function wn(e, t) {
        var n;
        if (e) {
            if (o(t)) {
                n = Sn(e)
            } else {
                n = kn(e, t)
            }
            if (n) {
                vn = n
            }
        }
        return vn._abbr
    }

    function kn(e, t) {
        if (t !== null) {
            var n = gn;
            t.abbr = e;
            if (D[e] != null) {
                te("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                n = D[e]._config
            } else if (t.parentLocale != null) {
                if (D[t.parentLocale] != null) {
                    n = D[t.parentLocale]._config
                } else {
                    if (!mn[t.parentLocale]) {
                        mn[t.parentLocale] = []
                    }
                    mn[t.parentLocale].push({name: e, config: t});
                    return null
                }
            }
            D[e] = new re(ie(n, t));
            if (mn[e]) {
                mn[e].forEach(function (e) {
                    kn(e.name, e.config)
                })
            }
            wn(e);
            return D[e]
        } else {
            delete D[e];
            return null
        }
    }

    function _n(e, t) {
        if (t != null) {
            var n, i = gn;
            if (D[e] != null) {
                i = D[e]._config
            }
            t = ie(i, t);
            n = new re(t);
            n.parentLocale = D[e];
            D[e] = n;
            wn(e)
        } else {
            if (D[e] != null) {
                if (D[e].parentLocale != null) {
                    D[e] = D[e].parentLocale
                } else if (D[e] != null) {
                    delete D[e]
                }
            }
        }
        return D[e]
    }

    function Sn(e) {
        var t;
        if (e && e._locale && e._locale._abbr) {
            e = e._locale._abbr
        }
        if (!e) {
            return vn
        }
        if (!a(e)) {
            t = xn(e);
            if (t) {
                return t
            }
            e = [e]
        }
        return bn(e)
    }

    function Cn() {
        return ae(D)
    }

    function Tn(e) {
        var t;
        var n = e._a;
        if (n && h(e).overflow === -2) {
            t = n[k] < 0 || n[k] > 11 ? k : n[_] < 1 || n[_] > lt(n[w], n[k]) ? _ : n[S] < 0 || n[S] > 24 || n[S] === 24 && (n[C] !== 0 || n[T] !== 0 || n[rt] !== 0) ? S : n[C] < 0 || n[C] > 59 ? C : n[T] < 0 || n[T] > 59 ? T : n[rt] < 0 || n[rt] > 999 ? rt : -1;
            if (h(e)._overflowDayOfYear && (t < w || t > _)) {
                t = _
            }
            if (h(e)._overflowWeeks && t === -1) {
                t = ot
            }
            if (h(e)._overflowWeekday && t === -1) {
                t = at
            }
            h(e).overflow = t
        }
        return e
    }

    var Mn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var Dn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var An = /Z|[+-]\d\d(?::?\d\d)?/;
    var Pn = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, false], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, false], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, false], ["YYYYDDD", /\d{7}/]];
    var In = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]];
    var En = /^\/?Date\((\-?\d+)/i;

    function On(e) {
        var t, n, i = e._i, r = Mn.exec(i) || Dn.exec(i), o, a, s, l;
        if (r) {
            h(e).iso = true;
            for (t = 0, n = Pn.length; t < n; t++) {
                if (Pn[t][1].exec(r[1])) {
                    a = Pn[t][0];
                    o = Pn[t][2] !== false;
                    break
                }
            }
            if (a == null) {
                e._isValid = false;
                return
            }
            if (r[3]) {
                for (t = 0, n = In.length; t < n; t++) {
                    if (In[t][1].exec(r[3])) {
                        s = (r[2] || " ") + In[t][0];
                        break
                    }
                }
                if (s == null) {
                    e._isValid = false;
                    return
                }
            }
            if (!o && s != null) {
                e._isValid = false;
                return
            }
            if (r[4]) {
                if (An.exec(r[4])) {
                    l = "Z"
                } else {
                    e._isValid = false;
                    return
                }
            }
            e._f = a + (s || "") + (l || "");
            zn(e)
        } else {
            e._isValid = false
        }
    }

    var Ln = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

    function Fn(e) {
        var t, n, i, r, o, a;
        var s = {
            " GMT": " +0000",
            " EDT": " -0400",
            " EST": " -0500",
            " CDT": " -0500",
            " CST": " -0600",
            " MDT": " -0600",
            " MST": " -0700",
            " PDT": " -0700",
            " PST": " -0800"
        };
        var l = "YXWVUTSRQPONZABCDEFGHIKLM";
        var u, c;
        t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, "");
        n = Ln.exec(t);
        if (n) {
            i = n[1] ? "ddd" + (n[1].length === 5 ? ", " : " ") : "";
            r = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY ");
            o = "HH:mm" + (n[4] ? ":ss" : "");
            if (n[1]) {
                var d = new Date(n[2]);
                var f = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()];
                if (n[1].substr(0, 3) !== f) {
                    h(e).weekdayMismatch = true;
                    e._isValid = false;
                    return
                }
            }
            switch (n[5].length) {
                case 2:
                    if (c === 0) {
                        u = " +0000"
                    } else {
                        c = l.indexOf(n[5][1].toUpperCase()) - 12;
                        u = (c < 0 ? " -" : " +") + ("" + c).replace(/^-?/, "0").match(/..$/)[0] + "00"
                    }
                    break;
                case 4:
                    u = s[n[5]];
                    break;
                default:
                    u = s[" GMT"]
            }
            n[5] = u;
            e._i = n.splice(1).join("");
            a = " ZZ";
            e._f = i + r + o + a;
            zn(e);
            h(e).rfc2822 = true
        } else {
            e._isValid = false
        }
    }

    function Nn(e) {
        var t = En.exec(e._i);
        if (t !== null) {
            e._d = new Date(+t[1]);
            return
        }
        On(e);
        if (e._isValid === false) {
            delete e._isValid
        } else {
            return
        }
        Fn(e);
        if (e._isValid === false) {
            delete e._isValid
        } else {
            return
        }
        u.createFromInputFallback(e)
    }

    u.createFromInputFallback = e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are " + "discouraged and will be removed in an upcoming major release. Please refer to " + "http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    });

    function Rn(e, t, n) {
        if (e != null) {
            return e
        }
        if (t != null) {
            return t
        }
        return n
    }

    function Hn(e) {
        var t = new Date(u.now());
        if (e._useUTC) {
            return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
        }
        return [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function Bn(e) {
        var t, n, i = [], r, o;
        if (e._d) {
            return
        }
        r = Hn(e);
        if (e._w && e._a[_] == null && e._a[k] == null) {
            Wn(e)
        }
        if (e._dayOfYear != null) {
            o = Rn(e._a[w], r[w]);
            if (e._dayOfYear > St(o) || e._dayOfYear === 0) {
                h(e)._overflowDayOfYear = true
            }
            n = At(o, 0, e._dayOfYear);
            e._a[k] = n.getUTCMonth();
            e._a[_] = n.getUTCDate()
        }
        for (t = 0; t < 3 && e._a[t] == null; ++t) {
            e._a[t] = i[t] = r[t]
        }
        for (; t < 7; t++) {
            e._a[t] = i[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t]
        }
        if (e._a[S] === 24 && e._a[C] === 0 && e._a[T] === 0 && e._a[rt] === 0) {
            e._nextDay = true;
            e._a[S] = 0
        }
        e._d = (e._useUTC ? At : Dt).apply(null, i);
        if (e._tzm != null) {
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm)
        }
        if (e._nextDay) {
            e._a[S] = 24
        }
    }

    function Wn(e) {
        var t, n, i, r, o, a, s, l;
        t = e._w;
        if (t.GG != null || t.W != null || t.E != null) {
            o = 1;
            a = 4;
            n = Rn(t.GG, e._a[w], Et(A(), 1, 4).year);
            i = Rn(t.W, 1);
            r = Rn(t.E, 1);
            if (r < 1 || r > 7) {
                l = true
            }
        } else {
            o = e._locale._week.dow;
            a = e._locale._week.doy;
            var u = Et(A(), o, a);
            n = Rn(t.gg, e._a[w], u.year);
            i = Rn(t.w, u.week);
            if (t.d != null) {
                r = t.d;
                if (r < 0 || r > 6) {
                    l = true
                }
            } else if (t.e != null) {
                r = t.e + o;
                if (t.e < 0 || t.e > 6) {
                    l = true
                }
            } else {
                r = o
            }
        }
        if (i < 1 || i > Ot(n, o, a)) {
            h(e)._overflowWeeks = true
        } else if (l != null) {
            h(e)._overflowWeekday = true
        } else {
            s = It(n, i, r, o, a);
            e._a[w] = s.year;
            e._dayOfYear = s.dayOfYear
        }
    }

    u.ISO_8601 = function () {
    };
    u.RFC_2822 = function () {
    };

    function zn(e) {
        if (e._f === u.ISO_8601) {
            On(e);
            return
        }
        if (e._f === u.RFC_2822) {
            Fn(e);
            return
        }
        e._a = [];
        h(e).empty = true;
        var t = "" + e._i, n, i, r, o, a, s = t.length, l = 0;
        r = Fe(e._f, e._locale).match(De) || [];
        for (n = 0; n < r.length; n++) {
            o = r[n];
            i = (t.match(Je(o, e)) || [])[0];
            if (i) {
                a = t.substr(0, t.indexOf(i));
                if (a.length > 0) {
                    h(e).unusedInput.push(a)
                }
                t = t.slice(t.indexOf(i) + i.length);
                l += i.length
            }
            if (Ie[o]) {
                if (i) {
                    h(e).empty = false
                } else {
                    h(e).unusedTokens.push(o)
                }
                it(o, i, e)
            } else if (e._strict && !i) {
                h(e).unusedTokens.push(o)
            }
        }
        h(e).charsLeftOver = s - l;
        if (t.length > 0) {
            h(e).unusedInput.push(t)
        }
        if (e._a[S] <= 12 && h(e).bigHour === true && e._a[S] > 0) {
            h(e).bigHour = undefined
        }
        h(e).parsedDateParts = e._a.slice(0);
        h(e).meridiem = e._meridiem;
        e._a[S] = jn(e._locale, e._a[S], e._meridiem);
        Bn(e);
        Tn(e)
    }

    function jn(e, t, n) {
        var i;
        if (n == null) {
            return t
        }
        if (e.meridiemHour != null) {
            return e.meridiemHour(t, n)
        } else if (e.isPM != null) {
            i = e.isPM(n);
            if (i && t < 12) {
                t += 12
            }
            if (!i && t === 12) {
                t = 0
            }
            return t
        } else {
            return t
        }
    }

    function Yn(e) {
        var t, n, i, r, o;
        if (e._f.length === 0) {
            h(e).invalidFormat = true;
            e._d = new Date(NaN);
            return
        }
        for (r = 0; r < e._f.length; r++) {
            o = 0;
            t = Z({}, e);
            if (e._useUTC != null) {
                t._useUTC = e._useUTC
            }
            t._f = e._f[r];
            zn(t);
            if (!U(t)) {
                continue
            }
            o += h(t).charsLeftOver;
            o += h(t).unusedTokens.length * 10;
            h(t).score = o;
            if (i == null || o < i) {
                i = o;
                n = t
            }
        }
        l(e, n || t)
    }

    function Vn(e) {
        if (e._d) {
            return
        }
        var t = xe(e._i);
        e._a = j([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
            return e && parseInt(e, 10)
        });
        Bn(e)
    }

    function qn(e) {
        var t = new K(Tn(Un(e)));
        if (t._nextDay) {
            t.add(1, "d");
            t._nextDay = undefined
        }
        return t
    }

    function Un(e) {
        var t = e._i, n = e._f;
        e._locale = e._locale || Sn(e._l);
        if (t === null || n === undefined && t === "") {
            return $({nullInput: true})
        }
        if (typeof t === "string") {
            e._i = t = e._locale.preparse(t)
        }
        if (r(t)) {
            return new K(Tn(t))
        } else if (z(t)) {
            e._d = t
        } else if (a(n)) {
            Yn(e)
        } else if (n) {
            zn(e)
        } else {
            $n(e)
        }
        if (!U(e)) {
            e._d = null
        }
        return e
    }

    function $n(e) {
        var t = e._i;
        if (o(t)) {
            e._d = new Date(u.now())
        } else if (z(t)) {
            e._d = new Date(t.valueOf())
        } else if (typeof t === "string") {
            Nn(e)
        } else if (a(t)) {
            e._a = j(t.slice(0), function (e) {
                return parseInt(e, 10)
            });
            Bn(e)
        } else if (H(t)) {
            Vn(e)
        } else if (W(t)) {
            e._d = new Date(t)
        } else {
            u.createFromInputFallback(e)
        }
    }

    function Gn(e, t, n, i, r) {
        var o = {};
        if (n === true || n === false) {
            i = n;
            n = undefined
        }
        if (H(e) && B(e) || a(e) && e.length === 0) {
            e = undefined
        }
        o._isAMomentObject = true;
        o._useUTC = o._isUTC = r;
        o._l = n;
        o._i = e;
        o._f = t;
        o._strict = i;
        return qn(o)
    }

    function A(e, t, n, i) {
        return Gn(e, t, n, i, false)
    }

    var Zn = e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = A.apply(null, arguments);
        if (this.isValid() && e.isValid()) {
            return e < this ? this : e
        } else {
            return $()
        }
    });
    var Xn = e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = A.apply(null, arguments);
        if (this.isValid() && e.isValid()) {
            return e > this ? this : e
        } else {
            return $()
        }
    });

    function Kn(e, t) {
        var n, i;
        if (t.length === 1 && a(t[0])) {
            t = t[0]
        }
        if (!t.length) {
            return A()
        }
        n = t[0];
        for (i = 1; i < t.length; ++i) {
            if (!t[i].isValid() || t[i][e](n)) {
                n = t[i]
            }
        }
        return n
    }

    function Jn() {
        var e = [].slice.call(arguments, 0);
        return Kn("isBefore", e)
    }

    function Qn() {
        var e = [].slice.call(arguments, 0);
        return Kn("isAfter", e)
    }

    var ei = function () {
        return Date.now ? Date.now() : +new Date
    };
    var ti = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function ni(e) {
        for (var t in e) {
            if (!(ti.indexOf(t) !== -1 && (e[t] == null || !isNaN(e[t])))) {
                return false
            }
        }
        var n = false;
        for (var i = 0; i < ti.length; ++i) {
            if (e[ti[i]]) {
                if (n) {
                    return false
                }
                if (parseFloat(e[ti[i]]) !== d(e[ti[i]])) {
                    n = true
                }
            }
        }
        return true
    }

    function ii() {
        return this._isValid
    }

    function ri() {
        return P(NaN)
    }

    function oi(e) {
        var t = xe(e), n = t.year || 0, i = t.quarter || 0, r = t.month || 0, o = t.week || 0, a = t.day || 0,
            s = t.hour || 0, l = t.minute || 0, u = t.second || 0, c = t.millisecond || 0;
        this._isValid = ni(t);
        this._milliseconds = +c + u * 1e3 + l * 6e4 + s * 1e3 * 60 * 60;
        this._days = +a + o * 7;
        this._months = +r + i * 3 + n * 12;
        this._data = {};
        this._locale = Sn();
        this._bubble()
    }

    function ai(e) {
        return e instanceof oi
    }

    function si(e) {
        if (e < 0) {
            return Math.round(-1 * e) * -1
        } else {
            return Math.round(e)
        }
    }

    function li(e, n) {
        i(e, 0, 0, function () {
            var e = this.utcOffset();
            var t = "+";
            if (e < 0) {
                e = -e;
                t = "-"
            }
            return t + m(~~(e / 60), 2) + n + m(~~e % 60, 2)
        })
    }

    li("Z", ":");
    li("ZZ", "");
    b("Z", Ge);
    b("ZZ", Ge);
    x(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = true;
        n._tzm = ci(Ge, e)
    });
    var ui = /([\+\-]|\d\d)/gi;

    function ci(e, t) {
        var n = (t || "").match(e);
        if (n === null) {
            return null
        }
        var i = n[n.length - 1] || [];
        var r = (i + "").match(ui) || ["-", 0, 0];
        var o = +(r[1] * 60) + d(r[2]);
        return o === 0 ? 0 : r[0] === "+" ? o : -o
    }

    function di(e, t) {
        var n, i;
        if (t._isUTC) {
            n = t.clone();
            i = (r(e) || z(e) ? e.valueOf() : A(e).valueOf()) - n.valueOf();
            n._d.setTime(n._d.valueOf() + i);
            u.updateOffset(n, false);
            return n
        } else {
            return A(e).local()
        }
    }

    function fi(e) {
        return -Math.round(e._d.getTimezoneOffset() / 15) * 15
    }

    u.updateOffset = function () {
    };

    function hi(e, t, n) {
        var i = this._offset || 0, r;
        if (!this.isValid()) {
            return e != null ? this : NaN
        }
        if (e != null) {
            if (typeof e === "string") {
                e = ci(Ge, e);
                if (e === null) {
                    return this
                }
            } else if (Math.abs(e) < 16 && !n) {
                e = e * 60
            }
            if (!this._isUTC && t) {
                r = fi(this)
            }
            this._offset = e;
            this._isUTC = true;
            if (r != null) {
                this.add(r, "m")
            }
            if (i !== e) {
                if (!t || this._changeInProgress) {
                    Pi(this, P(e - i, "m"), 1, false)
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    u.updateOffset(this, true);
                    this._changeInProgress = null
                }
            }
            return this
        } else {
            return this._isUTC ? i : fi(this)
        }
    }

    function pi(e, t) {
        if (e != null) {
            if (typeof e !== "string") {
                e = -e
            }
            this.utcOffset(e, t);
            return this
        } else {
            return -this.utcOffset()
        }
    }

    function gi(e) {
        return this.utcOffset(0, e)
    }

    function mi(e) {
        if (this._isUTC) {
            this.utcOffset(0, e);
            this._isUTC = false;
            if (e) {
                this.subtract(fi(this), "m")
            }
        }
        return this
    }

    function vi() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true)
        } else if (typeof this._i === "string") {
            var e = ci($e, this._i);
            if (e != null) {
                this.utcOffset(e)
            } else {
                this.utcOffset(0, true)
            }
        }
        return this
    }

    function yi(e) {
        if (!this.isValid()) {
            return false
        }
        e = e ? A(e).utcOffset() : 0;
        return (this.utcOffset() - e) % 60 === 0
    }

    function bi() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function xi() {
        if (!o(this._isDSTShifted)) {
            return this._isDSTShifted
        }
        var e = {};
        Z(e, this);
        e = Un(e);
        if (e._a) {
            var t = e._isUTC ? c(e._a) : A(e._a);
            this._isDSTShifted = this.isValid() && J(e._a, t.toArray()) > 0
        } else {
            this._isDSTShifted = false
        }
        return this._isDSTShifted
    }

    function wi() {
        return this.isValid() ? !this._isUTC : false
    }

    function ki() {
        return this.isValid() ? this._isUTC : false
    }

    function _i() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false
    }

    var Si = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    var Ci = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

    function P(e, t) {
        var n = e, i = null, r, o, a;
        if (ai(e)) {
            n = {ms: e._milliseconds, d: e._days, M: e._months}
        } else if (W(e)) {
            n = {};
            if (t) {
                n[t] = e
            } else {
                n.milliseconds = e
            }
        } else if (!!(i = Si.exec(e))) {
            r = i[1] === "-" ? -1 : 1;
            n = {y: 0, d: d(i[_]) * r, h: d(i[S]) * r, m: d(i[C]) * r, s: d(i[T]) * r, ms: d(si(i[rt] * 1e3)) * r}
        } else if (!!(i = Ci.exec(e))) {
            r = i[1] === "-" ? -1 : 1;
            n = {
                y: Ti(i[2], r),
                M: Ti(i[3], r),
                w: Ti(i[4], r),
                d: Ti(i[5], r),
                h: Ti(i[6], r),
                m: Ti(i[7], r),
                s: Ti(i[8], r)
            }
        } else if (n == null) {
            n = {}
        } else if (typeof n === "object" && ("from" in n || "to" in n)) {
            a = Di(A(n.from), A(n.to));
            n = {};
            n.ms = a.milliseconds;
            n.M = a.months
        }
        o = new oi(n);
        if (ai(e) && s(e, "_locale")) {
            o._locale = e._locale
        }
        return o
    }

    P.fn = oi.prototype;
    P.invalid = ri;

    function Ti(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }

    function Mi(e, t) {
        var n = {milliseconds: 0, months: 0};
        n.months = t.month() - e.month() + (t.year() - e.year()) * 12;
        if (e.clone().add(n.months, "M").isAfter(t)) {
            --n.months
        }
        n.milliseconds = +t - +e.clone().add(n.months, "M");
        return n
    }

    function Di(e, t) {
        var n;
        if (!(e.isValid() && t.isValid())) {
            return {milliseconds: 0, months: 0}
        }
        t = di(t, e);
        if (e.isBefore(t)) {
            n = Mi(e, t)
        } else {
            n = Mi(t, e);
            n.milliseconds = -n.milliseconds;
            n.months = -n.months
        }
        return n
    }

    function Ai(r, o) {
        return function (e, t) {
            var n, i;
            if (t !== null && !isNaN(+t)) {
                te(o, "moment()." + o + "(period, number) is deprecated. Please use moment()." + o + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                i = e;
                e = t;
                t = i
            }
            e = typeof e === "string" ? +e : e;
            n = P(e, t);
            Pi(this, n, r);
            return this
        }
    }

    function Pi(e, t, n, i) {
        var r = t._milliseconds, o = si(t._days), a = si(t._months);
        if (!e.isValid()) {
            return
        }
        i = i == null ? true : i;
        if (r) {
            e._d.setTime(e._d.valueOf() + r * n)
        }
        if (o) {
            Ce(e, "Date", Se(e, "Date") + o * n)
        }
        if (a) {
            mt(e, Se(e, "Month") + a * n)
        }
        if (i) {
            u.updateOffset(e, o || a)
        }
    }

    var Ii = Ai(1, "add");
    var Ei = Ai(-1, "subtract");

    function Oi(e, t) {
        var n = e.diff(t, "days", true);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }

    function Li(e, t) {
        var n = e || A(), i = di(n, this).startOf("day"), r = u.calendarFormat(this, i) || "sameElse";
        var o = t && (f(t[r]) ? t[r].call(this, n) : t[r]);
        return this.format(o || this.localeData().calendar(r, this, A(n)))
    }

    function Fi() {
        return new K(this)
    }

    function Ni(e, t) {
        var n = r(e) ? e : A(e);
        if (!(this.isValid() && n.isValid())) {
            return false
        }
        t = g(!o(t) ? t : "millisecond");
        if (t === "millisecond") {
            return this.valueOf() > n.valueOf()
        } else {
            return n.valueOf() < this.clone().startOf(t).valueOf()
        }
    }

    function Ri(e, t) {
        var n = r(e) ? e : A(e);
        if (!(this.isValid() && n.isValid())) {
            return false
        }
        t = g(!o(t) ? t : "millisecond");
        if (t === "millisecond") {
            return this.valueOf() < n.valueOf()
        } else {
            return this.clone().endOf(t).valueOf() < n.valueOf()
        }
    }

    function Hi(e, t, n, i) {
        i = i || "()";
        return (i[0] === "(" ? this.isAfter(e, n) : !this.isBefore(e, n)) && (i[1] === ")" ? this.isBefore(t, n) : !this.isAfter(t, n))
    }

    function Bi(e, t) {
        var n = r(e) ? e : A(e), i;
        if (!(this.isValid() && n.isValid())) {
            return false
        }
        t = g(t || "millisecond");
        if (t === "millisecond") {
            return this.valueOf() === n.valueOf()
        } else {
            i = n.valueOf();
            return this.clone().startOf(t).valueOf() <= i && i <= this.clone().endOf(t).valueOf()
        }
    }

    function Wi(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }

    function zi(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }

    function ji(e, t, n) {
        var i, r, o, a;
        if (!this.isValid()) {
            return NaN
        }
        i = di(e, this);
        if (!i.isValid()) {
            return NaN
        }
        r = (i.utcOffset() - this.utcOffset()) * 6e4;
        t = g(t);
        if (t === "year" || t === "month" || t === "quarter") {
            a = Yi(this, i);
            if (t === "quarter") {
                a = a / 3
            } else if (t === "year") {
                a = a / 12
            }
        } else {
            o = this - i;
            a = t === "second" ? o / 1e3 : t === "minute" ? o / 6e4 : t === "hour" ? o / 36e5 : t === "day" ? (o - r) / 864e5 : t === "week" ? (o - r) / 6048e5 : o
        }
        return n ? a : p(a)
    }

    function Yi(e, t) {
        var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), i = e.clone().add(n, "months"), r, o;
        if (t - i < 0) {
            r = e.clone().add(n - 1, "months");
            o = (t - i) / (i - r)
        } else {
            r = e.clone().add(n + 1, "months");
            o = (t - i) / (r - i)
        }
        return -(n + o) || 0
    }

    u.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    u.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

    function Vi() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function qi() {
        if (!this.isValid()) {
            return null
        }
        var e = this.clone().utc();
        if (e.year() < 0 || e.year() > 9999) {
            return Le(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }
        if (f(Date.prototype.toISOString)) {
            return this.toDate().toISOString()
        }
        return Le(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function Ui() {
        if (!this.isValid()) {
            return "moment.invalid(/* " + this._i + " */)"
        }
        var e = "moment";
        var t = "";
        if (!this.isLocal()) {
            e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            t = "Z"
        }
        var n = "[" + e + '("]';
        var i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        var r = "-MM-DD[T]HH:mm:ss.SSS";
        var o = t + '[")]';
        return this.format(n + i + r + o)
    }

    function $i(e) {
        if (!e) {
            e = this.isUtc() ? u.defaultFormatUtc : u.defaultFormat
        }
        var t = Le(this, e);
        return this.localeData().postformat(t)
    }

    function Gi(e, t) {
        if (this.isValid() && (r(e) && e.isValid() || A(e).isValid())) {
            return P({to: this, from: e}).locale(this.locale()).humanize(!t)
        } else {
            return this.localeData().invalidDate()
        }
    }

    function Zi(e) {
        return this.from(A(), e)
    }

    function Xi(e, t) {
        if (this.isValid() && (r(e) && e.isValid() || A(e).isValid())) {
            return P({from: this, to: e}).locale(this.locale()).humanize(!t)
        } else {
            return this.localeData().invalidDate()
        }
    }

    function Ki(e) {
        return this.to(A(), e)
    }

    function Ji(e) {
        var t;
        if (e === undefined) {
            return this._locale._abbr
        } else {
            t = Sn(e);
            if (t != null) {
                this._locale = t
            }
            return this
        }
    }

    var Qi = e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        if (e === undefined) {
            return this.localeData()
        } else {
            return this.locale(e)
        }
    });

    function er() {
        return this._locale
    }

    function tr(e) {
        e = g(e);
        switch (e) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
            case"date":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        if (e === "week") {
            this.weekday(0)
        }
        if (e === "isoWeek") {
            this.isoWeekday(1)
        }
        if (e === "quarter") {
            this.month(Math.floor(this.month() / 3) * 3)
        }
        return this
    }

    function nr(e) {
        e = g(e);
        if (e === undefined || e === "millisecond") {
            return this
        }
        if (e === "date") {
            e = "day"
        }
        return this.startOf(e).add(1, e === "isoWeek" ? "week" : e).subtract(1, "ms")
    }

    function ir() {
        return this._d.valueOf() - (this._offset || 0) * 6e4
    }

    function rr() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function or() {
        return new Date(this.valueOf())
    }

    function ar() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }

    function sr() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }

    function lr() {
        return this.isValid() ? this.toISOString() : null
    }

    function ur() {
        return U(this)
    }

    function cr() {
        return l({}, h(this))
    }

    function dr() {
        return h(this).overflow
    }

    function fr() {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }

    i(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    });
    i(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    });

    function hr(e, t) {
        i(0, [e, e.length], 0, t)
    }

    hr("gggg", "weekYear");
    hr("ggggg", "weekYear");
    hr("GGGG", "isoWeekYear");
    hr("GGGGG", "isoWeekYear");
    t("weekYear", "gg");
    t("isoWeekYear", "GG");
    n("weekYear", 1);
    n("isoWeekYear", 1);
    b("G", Ue);
    b("g", Ue);
    b("GG", y, v);
    b("gg", y, v);
    b("GGGG", Ye, He);
    b("gggg", Ye, He);
    b("GGGGG", Ve, Be);
    b("ggggg", Ve, Be);
    nt(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
        t[i.substr(0, 2)] = d(e)
    });
    nt(["gg", "GG"], function (e, t, n, i) {
        t[i] = u.parseTwoDigitYear(e)
    });

    function pr(e) {
        return yr.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function gr(e) {
        return yr.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function mr() {
        return Ot(this.year(), 1, 4)
    }

    function vr() {
        var e = this.localeData()._week;
        return Ot(this.year(), e.dow, e.doy)
    }

    function yr(e, t, n, i, r) {
        var o;
        if (e == null) {
            return Et(this, i, r).year
        } else {
            o = Ot(e, i, r);
            if (t > o) {
                t = o
            }
            return br.call(this, e, t, n, i, r)
        }
    }

    function br(e, t, n, i, r) {
        var o = It(e, t, n, i, r), a = At(o.year, 0, o.dayOfYear);
        this.year(a.getUTCFullYear());
        this.month(a.getUTCMonth());
        this.date(a.getUTCDate());
        return this
    }

    i("Q", 0, "Qo", "quarter");
    t("quarter", "Q");
    n("quarter", 7);
    b("Q", Ne);
    x("Q", function (e, t) {
        t[k] = (d(e) - 1) * 3
    });

    function xr(e) {
        return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
    }

    i("D", ["DD", 2], "Do", "date");
    t("date", "D");
    n("date", 9);
    b("D", y);
    b("DD", y, v);
    b("Do", function (e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    });
    x(["D", "DD"], _);
    x("Do", function (e, t) {
        t[_] = d(e.match(y)[0], 10)
    });
    var wr = _e("Date", true);
    i("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    t("dayOfYear", "DDD");
    n("dayOfYear", 4);
    b("DDD", je);
    b("DDDD", Re);
    x(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = d(e)
    });

    function kr(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return e == null ? t : this.add(e - t, "d")
    }

    i("m", ["mm", 2], 0, "minute");
    t("minute", "m");
    n("minute", 14);
    b("m", y);
    b("mm", y, v);
    x(["m", "mm"], C);
    var _r = _e("Minutes", false);
    i("s", ["ss", 2], 0, "second");
    t("second", "s");
    n("second", 15);
    b("s", y);
    b("ss", y, v);
    x(["s", "ss"], T);
    var Sr = _e("Seconds", false);
    i("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    });
    i(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    });
    i(0, ["SSS", 3], 0, "millisecond");
    i(0, ["SSSS", 4], 0, function () {
        return this.millisecond() * 10
    });
    i(0, ["SSSSS", 5], 0, function () {
        return this.millisecond() * 100
    });
    i(0, ["SSSSSS", 6], 0, function () {
        return this.millisecond() * 1e3
    });
    i(0, ["SSSSSSS", 7], 0, function () {
        return this.millisecond() * 1e4
    });
    i(0, ["SSSSSSSS", 8], 0, function () {
        return this.millisecond() * 1e5
    });
    i(0, ["SSSSSSSSS", 9], 0, function () {
        return this.millisecond() * 1e6
    });
    t("millisecond", "ms");
    n("millisecond", 16);
    b("S", je, Ne);
    b("SS", je, v);
    b("SSS", je, Re);
    var Cr;
    for (Cr = "SSSS"; Cr.length <= 9; Cr += "S") {
        b(Cr, qe)
    }

    function Tr(e, t) {
        t[rt] = d(("0." + e) * 1e3)
    }

    for (Cr = "S"; Cr.length <= 9; Cr += "S") {
        x(Cr, Tr)
    }
    var Mr = _e("Milliseconds", false);
    i("z", 0, 0, "zoneAbbr");
    i("zz", 0, 0, "zoneName");

    function Dr() {
        return this._isUTC ? "UTC" : ""
    }

    function Ar() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    var I = K.prototype;
    I.add = Ii;
    I.calendar = Li;
    I.clone = Fi;
    I.diff = ji;
    I.endOf = nr;
    I.format = $i;
    I.from = Gi;
    I.fromNow = Zi;
    I.to = Xi;
    I.toNow = Ki;
    I.get = Te;
    I.invalidAt = dr;
    I.isAfter = Ni;
    I.isBefore = Ri;
    I.isBetween = Hi;
    I.isSame = Bi;
    I.isSameOrAfter = Wi;
    I.isSameOrBefore = zi;
    I.isValid = ur;
    I.lang = Qi;
    I.locale = Ji;
    I.localeData = er;
    I.max = Xn;
    I.min = Zn;
    I.parsingFlags = cr;
    I.set = Me;
    I.startOf = tr;
    I.subtract = Ei;
    I.toArray = ar;
    I.toObject = sr;
    I.toDate = or;
    I.toISOString = qi;
    I.inspect = Ui;
    I.toJSON = lr;
    I.toString = Vi;
    I.unix = rr;
    I.valueOf = ir;
    I.creationData = fr;
    I.year = Tt;
    I.isLeapYear = Mt;
    I.weekYear = pr;
    I.isoWeekYear = gr;
    I.quarter = I.quarters = xr;
    I.month = vt;
    I.daysInMonth = yt;
    I.week = I.weeks = Ht;
    I.isoWeek = I.isoWeeks = Bt;
    I.weeksInYear = vr;
    I.isoWeeksInYear = mr;
    I.date = wr;
    I.day = I.days = Xt;
    I.weekday = Kt;
    I.isoWeekday = Jt;
    I.dayOfYear = kr;
    I.hour = I.hours = pn;
    I.minute = I.minutes = _r;
    I.second = I.seconds = Sr;
    I.millisecond = I.milliseconds = Mr;
    I.utcOffset = hi;
    I.utc = gi;
    I.local = mi;
    I.parseZone = vi;
    I.hasAlignedHourOffset = yi;
    I.isDST = bi;
    I.isLocal = wi;
    I.isUtcOffset = ki;
    I.isUtc = _i;
    I.isUTC = _i;
    I.zoneAbbr = Dr;
    I.zoneName = Ar;
    I.dates = e("dates accessor is deprecated. Use date instead.", wr);
    I.months = e("months accessor is deprecated. Use month instead", vt);
    I.years = e("years accessor is deprecated. Use year instead", Tt);
    I.zone = e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", pi);
    I.isDSTShifted = e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", xi);

    function Pr(e) {
        return A(e * 1e3)
    }

    function Ir() {
        return A.apply(null, arguments).parseZone()
    }

    function Er(e) {
        return e
    }

    var E = re.prototype;
    E.calendar = le;
    E.longDateFormat = ce;
    E.invalidDate = fe;
    E.ordinal = ge;
    E.preparse = Er;
    E.postformat = Er;
    E.relativeTime = ve;
    E.pastFuture = ye;
    E.set = ne;
    E.months = dt;
    E.monthsShort = ht;
    E.monthsParse = gt;
    E.monthsRegex = kt;
    E.monthsShortRegex = xt;
    E.week = Lt;
    E.firstDayOfYear = Rt;
    E.firstDayOfWeek = Nt;
    E.weekdays = Yt;
    E.weekdaysMin = $t;
    E.weekdaysShort = qt;
    E.weekdaysParse = Zt;
    E.weekdaysRegex = en;
    E.weekdaysShortRegex = nn;
    E.weekdaysMinRegex = on;
    E.isPM = dn;
    E.meridiem = hn;

    function Or(e, t, n, i) {
        var r = Sn();
        var o = c().set(i, t);
        return r[n](o, e)
    }

    function Lr(e, t, n) {
        if (W(e)) {
            t = e;
            e = undefined
        }
        e = e || "";
        if (t != null) {
            return Or(e, t, n, "month")
        }
        var i;
        var r = [];
        for (i = 0; i < 12; i++) {
            r[i] = Or(e, i, n, "month")
        }
        return r
    }

    function Fr(e, t, n, i) {
        if (typeof e === "boolean") {
            if (W(t)) {
                n = t;
                t = undefined
            }
            t = t || ""
        } else {
            t = e;
            n = t;
            e = false;
            if (W(t)) {
                n = t;
                t = undefined
            }
            t = t || ""
        }
        var r = Sn(), o = e ? r._week.dow : 0;
        if (n != null) {
            return Or(t, (n + o) % 7, i, "day")
        }
        var a;
        var s = [];
        for (a = 0; a < 7; a++) {
            s[a] = Or(t, (a + o) % 7, i, "day")
        }
        return s
    }

    function Nr(e, t) {
        return Lr(e, t, "months")
    }

    function Rr(e, t) {
        return Lr(e, t, "monthsShort")
    }

    function Hr(e, t, n) {
        return Fr(e, t, n, "weekdays")
    }

    function Br(e, t, n) {
        return Fr(e, t, n, "weekdaysShort")
    }

    function Wr(e, t, n) {
        return Fr(e, t, n, "weekdaysMin")
    }

    wn("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) {
            var t = e % 10, n = d(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return e + n
        }
    });
    u.lang = e("moment.lang is deprecated. Use moment.locale instead.", wn);
    u.langData = e("moment.langData is deprecated. Use moment.localeData instead.", Sn);
    var O = Math.abs;

    function zr() {
        var e = this._data;
        this._milliseconds = O(this._milliseconds);
        this._days = O(this._days);
        this._months = O(this._months);
        e.milliseconds = O(e.milliseconds);
        e.seconds = O(e.seconds);
        e.minutes = O(e.minutes);
        e.hours = O(e.hours);
        e.months = O(e.months);
        e.years = O(e.years);
        return this
    }

    function jr(e, t, n, i) {
        var r = P(t, n);
        e._milliseconds += i * r._milliseconds;
        e._days += i * r._days;
        e._months += i * r._months;
        return e._bubble()
    }

    function Yr(e, t) {
        return jr(this, e, t, 1)
    }

    function Vr(e, t) {
        return jr(this, e, t, -1)
    }

    function qr(e) {
        if (e < 0) {
            return Math.floor(e)
        } else {
            return Math.ceil(e)
        }
    }

    function Ur() {
        var e = this._milliseconds;
        var t = this._days;
        var n = this._months;
        var i = this._data;
        var r, o, a, s, l;
        if (!(e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0)) {
            e += qr(Gr(n) + t) * 864e5;
            t = 0;
            n = 0
        }
        i.milliseconds = e % 1e3;
        r = p(e / 1e3);
        i.seconds = r % 60;
        o = p(r / 60);
        i.minutes = o % 60;
        a = p(o / 60);
        i.hours = a % 24;
        t += p(a / 24);
        l = p($r(t));
        n += l;
        t -= qr(Gr(l));
        s = p(n / 12);
        n %= 12;
        i.days = t;
        i.months = n;
        i.years = s;
        return this
    }

    function $r(e) {
        return e * 4800 / 146097
    }

    function Gr(e) {
        return e * 146097 / 4800
    }

    function Zr(e) {
        if (!this.isValid()) {
            return NaN
        }
        var t;
        var n;
        var i = this._milliseconds;
        e = g(e);
        if (e === "month" || e === "year") {
            t = this._days + i / 864e5;
            n = this._months + $r(t);
            return e === "month" ? n : n / 12
        } else {
            t = this._days + Math.round(Gr(this._months));
            switch (e) {
                case"week":
                    return t / 7 + i / 6048e5;
                case"day":
                    return t + i / 864e5;
                case"hour":
                    return t * 24 + i / 36e5;
                case"minute":
                    return t * 1440 + i / 6e4;
                case"second":
                    return t * 86400 + i / 1e3;
                case"millisecond":
                    return Math.floor(t * 864e5) + i;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }
    }

    function Xr() {
        if (!this.isValid()) {
            return NaN
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + d(this._months / 12) * 31536e6
    }

    function Kr(e) {
        return function () {
            return this.as(e)
        }
    }

    var Jr = Kr("ms");
    var Qr = Kr("s");
    var eo = Kr("m");
    var to = Kr("h");
    var no = Kr("d");
    var io = Kr("w");
    var ro = Kr("M");
    var oo = Kr("y");

    function ao(e) {
        e = g(e);
        return this.isValid() ? this[e + "s"]() : NaN
    }

    function so(e) {
        return function () {
            return this.isValid() ? this._data[e] : NaN
        }
    }

    var lo = so("milliseconds");
    var uo = so("seconds");
    var co = so("minutes");
    var fo = so("hours");
    var ho = so("days");
    var po = so("months");
    var go = so("years");

    function mo() {
        return p(this.days() / 7)
    }

    var vo = Math.round;
    var L = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11};

    function yo(e, t, n, i, r) {
        return r.relativeTime(t || 1, !!n, e, i)
    }

    function bo(e, t, n) {
        var i = P(e).abs();
        var r = vo(i.as("s"));
        var o = vo(i.as("m"));
        var a = vo(i.as("h"));
        var s = vo(i.as("d"));
        var l = vo(i.as("M"));
        var u = vo(i.as("y"));
        var c = r <= L.ss && ["s", r] || r < L.s && ["ss", r] || o <= 1 && ["m"] || o < L.m && ["mm", o] || a <= 1 && ["h"] || a < L.h && ["hh", a] || s <= 1 && ["d"] || s < L.d && ["dd", s] || l <= 1 && ["M"] || l < L.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
        c[2] = t;
        c[3] = +e > 0;
        c[4] = n;
        return yo.apply(null, c)
    }

    function xo(e) {
        if (e === undefined) {
            return vo
        }
        if (typeof e === "function") {
            vo = e;
            return true
        }
        return false
    }

    function wo(e, t) {
        if (L[e] === undefined) {
            return false
        }
        if (t === undefined) {
            return L[e]
        }
        L[e] = t;
        if (e === "s") {
            L.ss = t - 1
        }
        return true
    }

    function ko(e) {
        if (!this.isValid()) {
            return this.localeData().invalidDate()
        }
        var t = this.localeData();
        var n = bo(this, !e, t);
        if (e) {
            n = t.pastFuture(+this, n)
        }
        return t.postformat(n)
    }

    var _o = Math.abs;

    function So() {
        if (!this.isValid()) {
            return this.localeData().invalidDate()
        }
        var e = _o(this._milliseconds) / 1e3;
        var t = _o(this._days);
        var n = _o(this._months);
        var i, r, o;
        i = p(e / 60);
        r = p(i / 60);
        e %= 60;
        i %= 60;
        o = p(n / 12);
        n %= 12;
        var a = o;
        var s = n;
        var l = t;
        var u = r;
        var c = i;
        var d = e;
        var f = this.asSeconds();
        if (!f) {
            return "P0D"
        }
        return (f < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (u || c || d ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "")
    }

    var F = oi.prototype;
    F.isValid = ii;
    F.abs = zr;
    F.add = Yr;
    F.subtract = Vr;
    F.as = Zr;
    F.asMilliseconds = Jr;
    F.asSeconds = Qr;
    F.asMinutes = eo;
    F.asHours = to;
    F.asDays = no;
    F.asWeeks = io;
    F.asMonths = ro;
    F.asYears = oo;
    F.valueOf = Xr;
    F._bubble = Ur;
    F.get = ao;
    F.milliseconds = lo;
    F.seconds = uo;
    F.minutes = co;
    F.hours = fo;
    F.days = ho;
    F.weeks = mo;
    F.months = po;
    F.years = go;
    F.humanize = ko;
    F.toISOString = So;
    F.toString = So;
    F.toJSON = So;
    F.locale = Ji;
    F.localeData = er;
    F.toIsoString = e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", So);
    F.lang = Qi;
    i("X", 0, 0, "unix");
    i("x", 0, 0, "valueOf");
    b("x", Ue);
    b("X", Ze);
    x("X", function (e, t, n) {
        n._d = new Date(parseFloat(e, 10) * 1e3)
    });
    x("x", function (e, t, n) {
        n._d = new Date(d(e))
    });
    u.version = "2.18.1";
    R(A);
    u.fn = I;
    u.min = Jn;
    u.max = Qn;
    u.now = ei;
    u.utc = c;
    u.unix = Pr;
    u.months = Nr;
    u.isDate = z;
    u.locale = wn;
    u.invalid = $;
    u.duration = P;
    u.isMoment = r;
    u.weekdays = Hr;
    u.parseZone = Ir;
    u.localeData = Sn;
    u.isDuration = ai;
    u.monthsShort = Rr;
    u.weekdaysMin = Wr;
    u.defineLocale = kn;
    u.updateLocale = _n;
    u.locales = Cn;
    u.weekdaysShort = Br;
    u.normalizeUnits = g;
    u.relativeTimeRounding = xo;
    u.relativeTimeThreshold = wo;
    u.calendarFormat = Oi;
    u.prototype = I;
    return u
});
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.template = t() : e.template = t()
}(this, function () {
    return function (n) {
        function i(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {i: e, l: !1, exports: {}};
            return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
        }

        var r = {};
        return i.m = n, i.c = r, i.d = function (e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
        }, i.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i(i.s = 6)
    }([function (t, e, n) {
        (function (e) {
            t.exports = !1;
            try {
                t.exports = "[object process]" === Object.prototype.toString.call(e.process)
            } catch (e) {
            }
        }).call(e, n(4))
    }, function (e, t, n) {
        "use strict";
        var d = n(8), f = n(3), h = n(23), p = function (e, t) {
            t.onerror(e, t);
            var n = function () {
                return "{Template Error}"
            };
            return n.mappings = [], n.sourcesContent = [], n
        }, i = function i(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            "string" != typeof e ? r = e : r.source = e, r = f.$extend(r), e = r.source, !0 === r.debug && (r.cache = !1, r.minimize = !1, r.compileDebug = !0), r.compileDebug && (r.minimize = !1), r.filename && (r.filename = r.resolveFilename(r.filename, r));
            var t = r.filename, n = r.cache, o = r.caches;
            if (n && t) {
                var a = o.get(t);
                if (a) return a
            }
            if (!e) try {
                e = r.loader(t, r), r.source = e
            } catch (i) {
                var s = new h({
                    name: "CompileError",
                    path: t,
                    message: "template not found: " + i.message,
                    stack: i.stack
                });
                if (r.bail) throw s;
                return p(s, r)
            }
            var l = void 0, u = new d(r);
            try {
                l = u.build()
            } catch (s) {
                if (s = new h(s), r.bail) throw s;
                return p(s, r)
            }
            var c = function (t, n) {
                try {
                    return l(t, n)
                } catch (e) {
                    if (!r.compileDebug) return r.cache = !1, r.compileDebug = !0, i(r)(t, n);
                    if (e = new h(e), r.bail) throw e;
                    return p(e, r)()
                }
            };
            return c.mappings = l.mappings, c.sourcesContent = l.sourcesContent, c.toString = function () {
                return l.toString()
            }, n && t && o.set(t, c), c
        };
        i.Compiler = d, e.exports = i
    }, function (e, t) {
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function (e) {
            var t = {type: "invalid", value: e[0]};
            return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t
        }
    }, function (e, t, n) {
        "use strict";

        function i() {
            this.$extend = function (e) {
                return e = e || {}, a(e, e instanceof i ? e : this)
            }
        }

        var r = n(0), o = n(12), a = n(13), s = n(14), l = n(15), u = n(16), c = n(17), d = n(18), f = n(19), h = n(20),
            p = n(22), g = {
                source: null,
                filename: null,
                rules: [f, d],
                escape: !0,
                debug: !!r && "production" !== process.env.NODE_ENV,
                bail: !0,
                cache: !0,
                minimize: !0,
                compileDebug: !1,
                resolveFilename: p,
                include: s,
                htmlMinifier: h,
                htmlMinifierOptions: {collapseWhitespace: !0, minifyCSS: !0, minifyJS: !0, ignoreCustomFragments: []},
                onerror: l,
                loader: c,
                caches: u,
                root: "/",
                extname: ".art",
                ignore: [],
                imports: o
            };
        i.prototype = g, e.exports = new i
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t) {
    }, function (e, t, n) {
        "use strict";
        var i = n(7), r = n(1), o = n(24), a = function (e, t) {
            return t instanceof Object ? i({filename: e}, t) : r({filename: e, source: t})
        };
        a.render = i, a.compile = r, a.defaults = o, e.exports = a
    }, function (e, t, n) {
        "use strict";
        var i = n(1), r = function (e, t, n) {
            return i(e, n)(t)
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var i = n(9), b = n(11), x = "$data", w = "$imports", u = "print", k = "include", _ = "extend", c = "block",
            S = "$$out", C = "$$line", T = "$$blocks", d = "$$slice", M = "$$from", D = "$$options",
            A = function (e, t) {
                return e.hasOwnProperty(t)
            }, P = JSON.stringify, r = function () {
                function s(e) {
                    var t, n, i = this;
                    l(this, s);
                    var r = e.source, o = e.minimize, a = e.htmlMinifier;
                    if (this.options = e, this.stacks = [], this.context = [], this.scripts = [], this.CONTEXT_MAP = {}, this.ignore = [x, w, D].concat(e.ignore), this.internal = (t = {}, t[S] = "''", t[C] = "[0,0]", t[T] = "arguments[1]||{}", t[M] = "null", t[u] = "function(){var s=''.concat.apply('',arguments);" + S + "+=s;return s}", t[k] = "function(src,data){var s=" + D + ".include(src,data||" + x + ",arguments[2]||" + T + "," + D + ");" + S + "+=s;return s}", t[_] = "function(from){" + M + "=from}", t[d] = "function(c,p,s){p=" + S + ";" + S + "='';c();s=" + S + ";" + S + "=p+s;return s}", t[c] = "function(){var a=arguments,s;if(typeof a[0]==='function'){return " + d + "(a[0])}else if(" + M + "){" + T + "[a[0]]=" + d + "(a[1])}else{s=" + T + "[a[0]];if(typeof s==='string'){" + S + "+=s}else{s=" + d + "(a[1])}return s}}", t), this.dependencies = (n = {}, n[u] = [S], n[k] = [S, D, x, T], n[_] = [M, k], n[c] = [d, M, S, T], n), this.importContext(S), e.compileDebug && this.importContext(C), o) try {
                        r = a(r, e)
                    } catch (e) {
                    }
                    this.source = r, this.getTplTokens(r, e.rules, this).forEach(function (e) {
                        e.type === b.TYPE_STRING ? i.parseString(e) : i.parseExpression(e)
                    })
                }

                return s.prototype.getTplTokens = function () {
                    return b.apply(void 0, arguments)
                }, s.prototype.getEsTokens = function (e) {
                    return i(e)
                }, s.prototype.getVariables = function (e) {
                    var t = !1;
                    return e.filter(function (e) {
                        return "whitespace" !== e.type && "comment" !== e.type
                    }).filter(function (e) {
                        return "name" === e.type && !t || (t = "punctuator" === e.type && "." === e.value, !1)
                    }).map(function (e) {
                        return e.value
                    })
                }, s.prototype.importContext = function (e) {
                    var t = this, n = "", i = this.internal, r = this.dependencies, o = this.ignore, a = this.context,
                        s = this.options, l = s.imports, u = this.CONTEXT_MAP;
                    A(u, e) || -1 !== o.indexOf(e) || (A(i, e) ? (n = i[e], A(r, e) && r[e].forEach(function (e) {
                        return t.importContext(e)
                    })) : n = "$escape" === e || "$each" === e || A(l, e) ? w + "." + e : x + "." + e, u[e] = n, a.push({
                        name: e,
                        value: n
                    }))
                }, s.prototype.parseString = function (e) {
                    var t = e.value;
                    if (t) {
                        var n = S + "+=" + P(t);
                        this.scripts.push({source: t, tplToken: e, code: n})
                    }
                }, s.prototype.parseExpression = function (e) {
                    var t = this, n = e.value, i = e.script, r = i.output, o = this.options.escape, a = i.code;
                    r && (a = !1 === o || r === b.TYPE_RAW ? S + "+=" + i.code : S + "+=$escape(" + i.code + ")");
                    var s = this.getEsTokens(a);
                    this.getVariables(s).forEach(function (e) {
                        return t.importContext(e)
                    }), this.scripts.push({source: n, tplToken: e, code: a})
                }, s.prototype.checkExpression = function (e) {
                    for (var t = [[/^\s*}[\w\W]*?{?[\s;]*$/, ""], [/(^[\w\W]*?\([\w\W]*?(?:=>|\([\w\W]*?\))\s*{[\s;]*$)/, "$1})"], [/(^[\w\W]*?\([\w\W]*?\)\s*{[\s;]*$)/, "$1}"]], n = 0; n < t.length;) {
                        if (t[n][0].test(e)) {
                            var i;
                            e = (i = e).replace.apply(i, t[n]);
                            break
                        }
                        n++
                    }
                    try {
                        return new Function(e), !0
                    } catch (e) {
                        return !1
                    }
                }, s.prototype.build = function () {
                    var e = this.options, t = this.context, n = this.scripts, o = this.stacks, i = this.source,
                        r = e.filename, a = e.imports, s = [], l = A(this.CONTEXT_MAP, _), u = 0, c = function (e, t) {
                            var n = t.line, i = t.start,
                                r = {generated: {line: o.length + u + 1, column: 1}, original: {line: n + 1, column: i + 1}};
                            return u += e.split(/\n/).length - 1, r
                        }, d = function (e) {
                            return e.replace(/^[\t ]+|[\t ]$/g, "")
                        };
                    o.push("function(" + x + "){"), o.push("'use strict'"), o.push(x + "=" + x + "||{}"), o.push("var " + t.map(function (e) {
                        return e.name + "=" + e.value
                    }).join(",")), e.compileDebug ? (o.push("try{"), n.forEach(function (e) {
                        e.tplToken.type === b.TYPE_EXPRESSION && o.push(C + "=[" + [e.tplToken.line, e.tplToken.start].join(",") + "]"), s.push(c(e.code, e.tplToken)), o.push(d(e.code))
                    }), o.push("}catch(error){"), o.push("throw {" + ["name:'RuntimeError'", "path:" + P(r), "message:error.message", "line:" + C + "[0]+1", "column:" + C + "[1]+1", "source:" + P(i), "stack:error.stack"].join(",") + "}"), o.push("}")) : n.forEach(function (e) {
                        s.push(c(e.code, e.tplToken)), o.push(d(e.code))
                    }), l && (o.push(S + "=''"), o.push(k + "(" + M + "," + x + "," + T + ")")), o.push("return " + S), o.push("}");
                    var f = o.join("\n");
                    try {
                        var h = new Function(w, D, "return " + f)(a, e);
                        return h.mappings = s, h.sourcesContent = [i], h
                    } catch (e) {
                        for (var p = 0, g = 0, m = 0, v = void 0; p < n.length;) {
                            var y = n[p];
                            if (!this.checkExpression(y.code)) {
                                g = y.tplToken.line, m = y.tplToken.start, v = y.code;
                                break
                            }
                            p++
                        }
                        throw{
                            name: "CompileError",
                            path: r,
                            message: e.message,
                            line: g + 1,
                            column: m + 1,
                            source: i,
                            generated: v,
                            stack: e.stack
                        }
                    }
                }, s
            }();
        r.CONSTS = {
            DATA: x,
            IMPORTS: w,
            PRINT: u,
            INCLUDE: k,
            EXTEND: _,
            BLOCK: c,
            OPTIONS: D,
            OUT: S,
            LINE: C,
            BLOCKS: T,
            SLICE: d,
            FROM: M,
            ESCAPE: "$escape",
            EACH: "$each"
        }, e.exports = r
    }, function (e, t, n) {
        "use strict";
        var i = n(10), r = n(2).default, o = n(2).matchToToken, a = function (e) {
            return e.match(r).map(function (e) {
                return r.lastIndex = 0, o(r.exec(e))
            }).map(function (e) {
                return "name" === e.type && i(e.value) && (e.type = "keyword"), e
            })
        };
        e.exports = a
    }, function (e, t, n) {
        "use strict";
        var i = {
            abstract: !0,
            await: !0,
            boolean: !0,
            break: !0,
            byte: !0,
            case: !0,
            catch: !0,
            char: !0,
            class: !0,
            const: !0,
            continue: !0,
            debugger: !0,
            default: !0,
            delete: !0,
            do: !0,
            double: !0,
            else: !0,
            enum: !0,
            export: !0,
            extends: !0,
            false: !0,
            final: !0,
            finally: !0,
            float: !0,
            for: !0,
            function: !0,
            goto: !0,
            if: !0,
            implements: !0,
            import: !0,
            in: !0,
            instanceof: !0,
            int: !0,
            interface: !0,
            let: !0,
            long: !0,
            native: !0,
            new: !0,
            null: !0,
            package: !0,
            private: !0,
            protected: !0,
            public: !0,
            return: !0,
            short: !0,
            static: !0,
            super: !0,
            switch: !0,
            synchronized: !0,
            this: !0,
            throw: !0,
            transient: !0,
            true: !0,
            try: !0,
            typeof: !0,
            var: !0,
            void: !0,
            volatile: !0,
            while: !0,
            with: !0,
            yield: !0
        };
        e.exports = function (e) {
            return i.hasOwnProperty(e)
        }
    }, function (e, t, n) {
        "use strict";

        function w(e, t, n, i) {
            var r = new String(e);
            return r.line = t, r.start = n, r.end = i, r
        }

        var i = function (e, t) {
            for (var b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, x = [{
                type: "string",
                value: e,
                line: 0,
                start: 0,
                end: e.length
            }], n = 0; n < t.length; n++) !function (e) {
                for (var t = e.test.ignoreCase ? "ig" : "g", n = e.test.source + "|^$|[\\w\\W]", i = new RegExp(n, t), r = 0; r < x.length; r++) if ("string" === x[r].type) {
                    for (var o = x[r].line, a = x[r].start, s = x[r].end, l = x[r].value.match(i), u = [], c = 0; c < l.length; c++) {
                        var d = l[c];
                        e.test.lastIndex = 0;
                        var f = e.test.exec(d), h = f ? "expression" : "string", p = u[u.length - 1], g = p || x[r],
                            m = g.value;
                        a = g.line === o ? p ? p.end : a : m.length - m.lastIndexOf("\n") - 1, s = a + d.length;
                        var v = {type: h, value: d, line: o, start: a, end: s};
                        if ("string" === h) p && "string" === p.type ? (p.value += d, p.end += d.length) : u.push(v); else {
                            f[0] = new w(f[0], o, a, s);
                            var y = e.use.apply(b, f);
                            v.script = y, u.push(v)
                        }
                        o += d.split(/\n/).length - 1
                    }
                    x.splice.apply(x, [r, 1].concat(u)), r += u.length - 1
                }
            }(t[n]);
            return x
        };
        i.TYPE_STRING = "string", i.TYPE_EXPRESSION = "expression", i.TYPE_RAW = "raw", i.TYPE_ESCAPE = "escape", e.exports = i
    }, function (o, e, a) {
        "use strict";
        (function (e) {
            function t(e) {
                return "string" != typeof e && (e = void 0 === e || null === e ? "" : "function" == typeof e ? t(e.call(e)) : JSON.stringify(e)), e
            }

            function n(e) {
                var t = "" + e, n = s.exec(t);
                if (!n) return e;
                var i = "", r = void 0, o = void 0, a = void 0;
                for (r = n.index, o = 0; r < t.length; r++) {
                    switch (t.charCodeAt(r)) {
                        case 34:
                            a = "&#34;";
                            break;
                        case 38:
                            a = "&#38;";
                            break;
                        case 39:
                            a = "&#39;";
                            break;
                        case 60:
                            a = "&#60;";
                            break;
                        case 62:
                            a = "&#62;";
                            break;
                        default:
                            continue
                    }
                    o !== r && (i += t.substring(o, r)), o = r + 1, i += a
                }
                return o !== r ? i + t.substring(o, r) : i
            }

            var i = a(0), r = Object.create(i ? e : window), s = /["&'<>]/;
            r.$escape = function (e) {
                return n(t(e))
            }, r.$each = function (e, t) {
                if (Array.isArray(e)) for (var n = 0, i = e.length; n < i; n++) t(e[n], n); else for (var r in e) t(e[r], r)
            }, o.exports = r
        }).call(e, a(4))
    }, function (e, t, n) {
        "use strict";
        var i = Object.prototype.toString, a = function (e) {
            return null === e ? "Null" : i.call(e).slice(8, -1)
        }, r = function e(t, n) {
            var i = void 0, r = a(t);
            if ("Object" === r ? i = Object.create(n || {}) : "Array" === r && (i = [].concat(n || [])), i) {
                for (var o in t) t.hasOwnProperty(o) && (i[o] = e(t[o], i[o]));
                return i
            }
            return t
        };
        e.exports = r
    }, function (e, t, o) {
        "use strict";
        var n = function (e, t, n, i) {
            var r = o(1);
            return i = i.$extend({filename: i.resolveFilename(e, i), bail: !0, source: null}), r(i)(t, n)
        };
        e.exports = n
    }, function (e, t, n) {
        "use strict";
        var i = function (e) {
            console.error(e.name, e.message)
        };
        e.exports = i
    }, function (e, t, n) {
        "use strict";
        var i = {
            __data: Object.create(null), set: function (e, t) {
                this.__data[e] = t
            }, get: function (e) {
                return this.__data[e]
            }, reset: function () {
                this.__data = {}
            }
        };
        e.exports = i
    }, function (e, t, n) {
        "use strict";
        var i = n(0), r = function (e) {
            if (i) return n(5).readFileSync(e, "utf8");
            var t = document.getElementById(e);
            return t.value || t.innerHTML
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var g = {
            test: /{{([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*}}/, use: function (n, e, t, i) {
                var r = this, o = r.options, a = r.getEsTokens(i), s = a.map(function (e) {
                    return e.value
                }), l = {}, u = void 0, c = !!e && "raw", d = t + s.shift(), f = function (e, t) {
                    console.warn((o.filename || "anonymous") + ":" + (n.line + 1) + ":" + (n.start + 1) + "\nTemplate upgrade: {{" + e + "}} -> {{" + t + "}}")
                };
                switch ("#" === e && f("#value", "@value"), d) {
                    case"set":
                        i = "var " + s.join("").trim();
                        break;
                    case"if":
                        i = "if(" + s.join("").trim() + "){";
                        break;
                    case"else":
                        var h = s.indexOf("if");
                        ~h ? (s.splice(0, h + 1), i = "}else if(" + s.join("").trim() + "){") : i = "}else{";
                        break;
                    case"/if":
                        i = "}";
                        break;
                    case"each":
                        u = g._split(a), u.shift(), "as" === u[1] && (f("each object as value index", "each object value index"), u.splice(1, 1)), i = "$each(" + (u[0] || "$data") + ",function(" + (u[1] || "$value") + "," + (u[2] || "$index") + "){";
                        break;
                    case"/each":
                        i = "})";
                        break;
                    case"block":
                        u = g._split(a), u.shift(), i = "block(" + u.join(",").trim() + ",function(){";
                        break;
                    case"/block":
                        i = "})";
                        break;
                    case"echo":
                        d = "print", f("echo value", "value");
                    case"print":
                    case"include":
                    case"extend":
                        if (0 !== s.join("").trim().indexOf("(")) {
                            u = g._split(a), u.shift(), i = d + "(" + u.join(",") + ")";
                            break
                        }
                    default:
                        if (~s.indexOf("|")) {
                            var p = a.reduce(function (e, t) {
                                var n = t.value, i = t.type;
                                return "|" === n ? e.push([]) : "whitespace" !== i && "comment" !== i && (e.length || e.push([]), ":" === n && 1 === e[e.length - 1].length ? f("value | filter: argv", "value | filter argv") : e[e.length - 1].push(t)), e
                            }, []).map(function (e) {
                                return g._split(e)
                            });
                            i = p.reduce(function (e, t) {
                                var n = t.shift();
                                return t.unshift(e), "$imports." + n + "(" + t.join(",") + ")"
                            }, p.shift().join(" ").trim())
                        }
                        c = c || "escape"
                }
                return l.code = i, l.output = c, l
            }, _split: function (e) {
                e = e.filter(function (e) {
                    var t = e.type;
                    return "whitespace" !== t && "comment" !== t
                });
                for (var t = 0, n = e.shift(), i = /\]|\)/, r = [[n]]; t < e.length;) {
                    var o = e[t];
                    "punctuator" === o.type || "punctuator" === n.type && !i.test(n.value) ? r[r.length - 1].push(o) : r.push([o]), n = o, t++
                }
                return r.map(function (e) {
                    return e.map(function (e) {
                        return e.value
                    }).join("")
                })
            }
        };
        e.exports = g
    }, function (e, t, n) {
        "use strict";
        var i = {
            test: /<%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%>/, use: function (e, t, n, i) {
                return n = {
                    "-": "raw",
                    "=": "escape",
                    "": !1,
                    "==": "raw",
                    "=#": "raw"
                }[n], t && (i = "/*" + i + "*/", n = !1), {code: i, output: n}
            }
        };
        e.exports = i
    }, function (e, t, a) {
        "use strict";
        var s = a(0), n = function (e, t) {
            if (s) {
                var n, i = a(21).minify, r = t.htmlMinifierOptions, o = t.rules.map(function (e) {
                    return e.test
                });
                (n = r.ignoreCustomFragments).push.apply(n, o), e = i(e, r)
            }
            return e
        };
        e.exports = n
    }, function (e, t) {
        !function (e) {
            e.noop = function () {
            }
        }("object" == typeof e && "object" == typeof e.exports ? e.exports : window)
    }, function (e, t, l) {
        "use strict";
        var u = l(0), c = /^\.+\//, n = function (e, t) {
            if (u) {
                var n = l(5), i = t.root, r = t.extname;
                if (c.test(e)) {
                    var o = t.filename, a = !o || e === o, s = a ? i : n.dirname(o);
                    e = n.resolve(s, e)
                } else e = n.resolve(i, e);
                n.extname(e) || (e += r)
            }
            return e
        };
        e.exports = n
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e) {
            var t = e.name, n = e.source, i = e.path, r = e.line, o = e.column, a = e.generated, s = e.message;
            if (!n) return s;
            var l = n.split(/\n/), u = Math.max(r - 3, 0), c = Math.min(l.length, r + 3),
                d = l.slice(u, c).map(function (e, t) {
                    var n = t + u + 1;
                    return (n === r ? " >> " : "    ") + n + "| " + e
                }).join("\n");
            return (i || "anonymous") + ":" + r + ":" + o + "\n" + d + "\n\n" + t + ": " + s + (a ? "\n   generated: " + a : "")
        }

        var i = function (n) {
            function i(e) {
                r(this, i);
                var t = o(this, n.call(this, e.message));
                return t.name = "TemplateError", t.message = s(e), Error.captureStackTrace && Error.captureStackTrace(t, t.constructor), t
            }

            return a(i, n), i
        }(Error);
        e.exports = i
    }, function (e, t, n) {
        "use strict";
        e.exports = n(3)
    }])
});
!function (i) {
    var r = "undefined" != typeof window, o = r ? window : this, e = function () {
        return i(r, o)
    };
    "undefined" != typeof define && define.amd ? define("IDValidator", [], e) : "function" == typeof define && define.cmd ? define(function (e, t, n) {
        n.exports = i(r, o)
    }) : "undefined" != typeof module && module.exports ? module.exports = i(r, o) : o.IDValidator = i(r, o)
}(function (e, t) {
    var r = {error: {longNumber: "é•¿æ•°å­—å­˜åœ¨ç²¾åº¦é—®é¢˜ï¼Œè¯·ä½¿ç”¨å­—ç¬¦ä¸²ä¼ å€¼ï¼ Long number is not allowed, because the precision of the Number In JavaScript."}},
        b = {
            checkArg: function (e, t) {
                var n = typeof e;
                switch (n) {
                    case"number":
                        if (e = e.toString(), e.length > 15) return this.error(r.error.longNumber), !1;
                        break;
                    case"string":
                        break;
                    default:
                        return !1
                }
                if (e = e.toUpperCase(), t && !isNaN(t) && (t = parseInt(t), e.length !== t)) return !1;
                var i = null;
                if (18 === e.length) i = {body: e.slice(0, 17), checkBit: e.slice(-1), type: 18}; else {
                    if (15 !== e.length) return !1;
                    i = {body: e, type: 15}
                }
                return i
            }, checkAddr: function (e, t) {
                var n = this.getAddrInfo(e, t);
                return n !== !1
            }, getAddrInfo: function (e, t) {
                if (t = t || null, null === t) return e;
                if (t.hasOwnProperty(e)) return t[e];
                var n;
                return n = e.slice(0, 4) + "00", t.hasOwnProperty(n) ? t[n] + "æœªçŸ¥åœ°åŒº" : (n = e.slice(0, 2) + "0000", t.hasOwnProperty(n) ? t[n] + "æœªçŸ¥åœ°åŒº" : !1)
            }, checkBirth: function (e) {
                var t, n, i;
                if (8 == e.length) t = parseInt(e.slice(0, 4), 10), n = parseInt(e.slice(4, 6), 10), i = parseInt(e.slice(-2), 10); else {
                    if (6 != e.length) return !1;
                    t = parseInt("19" + e.slice(0, 2), 10), n = parseInt(e.slice(2, 4), 10), i = parseInt(e.slice(-2), 10)
                }
                return !(n > 12 || 0 === n || i > 31 || 0 === i)
            }, checkOrder: function (e) {
                return !0
            }, weight: function (e) {
                return Math.pow(2, e - 1) % 11
            }, rand: function (e, t) {
                return t = t || 1, Math.round(Math.random() * (e - t)) + t
            }, str_pad: function (e, t, n, i) {
                if (e = e.toString(), t = t || 2, n = n || "0", i = i || !1, e.length >= t) return e;
                for (var r = 0, o = t - e.length; o > r; r++) i ? e += n : e = n + e;
                return e
            }, error: function (e) {
                var t = new Error;
                throw t.message = "IDValidator: " + e, t
            }
        }, n = function (e) {
            "undefined" != typeof e && (this.GB2260 = e), this.cache = {}
        };
    return n.prototype = {
        isValid: function (e, t) {
            var n = this.GB2260 || null, i = b.checkArg(e, t);
            if (i === !1) return !1;
            if (this.cache.hasOwnProperty(e) && "undefined" != typeof this.cache[e].valid) return this.cache[e].valid;
            this.cache.hasOwnProperty(e) || (this.cache[e] = {});
            var r = i.body.slice(0, 6), o = 18 === i.type ? i.body.slice(6, 14) : i.body.slice(6, 12),
                a = i.body.slice(-3);
            if (!(b.checkAddr(r, n) && b.checkBirth(o) && b.checkOrder(a))) return this.cache[e].valid = !1, !1;
            if (15 === i.type) return this.cache[e].valid = !0, !0;
            for (var s = [], l = 18; l > 1; l--) {
                var u = b.weight(l);
                s[l] = u
            }
            for (var c = 0, d = i.body.split(""), f = 0; f < d.length; f++) c += parseInt(d[f], 10) * s[18 - f];
            var h = 12 - c % 11;
            return 10 == h ? h = "X" : h > 10 && (h %= 11), h = "number" == typeof h ? h.toString() : h, h !== i.checkBit ? (this.cache[e].valid = !1, !1) : (this.cache[e].valid = !0, !0)
        }, getInfo: function (e, t) {
            var n = this.GB2260 || null;
            if (this.isValid(e, t) === !1) return !1;
            var i = b.checkArg(e);
            if ("undefined" != typeof this.cache[e].info) return this.cache[e].info;
            var r = i.body.slice(0, 6), o = 18 === i.type ? i.body.slice(6, 14) : i.body.slice(6, 12),
                a = i.body.slice(-3), s = {};
            return s.addrCode = r, null !== n && (s.addr = b.getAddrInfo(r, n)), s.birth = 18 === i.type ? [o.slice(0, 4), o.slice(4, 6), o.slice(-2)].join("-") : ["19" + o.slice(0, 2), o.slice(2, 4), o.slice(-2)].join("-"), s.sex = a % 2 === 0 ? 0 : 1, s.length = i.type, 18 === i.type && (s.checkBit = i.checkBit), this.cache[e].info = s, s
        }, makeID: function (e) {
            var t = this.GB2260 || null, n = null;
            if (null !== t) for (var i = 0; null === n;) {
                if (i > 10) {
                    n = 110101;
                    break
                }
                var r = b.str_pad(b.rand(50), 2, "0"), o = b.str_pad(b.rand(20), 2, "0"),
                    a = b.str_pad(b.rand(20), 2, "0"), s = [r, o, a].join("");
                if (t[s]) {
                    n = s;
                    break
                }
            } else n = 110101;
            var l = b.str_pad(b.rand(99, 50), 2, "0"), u = b.str_pad(b.rand(12, 1), 2, "0"),
                c = b.str_pad(b.rand(28, 1), 2, "0");
            if (e) return n + l + u + c + b.str_pad(b.rand(999, 1), 3, "1");
            l = "19" + l;
            for (var d = n + l + u + c + b.str_pad(b.rand(999, 1), 3, "1"), f = [], h = 18; h > 1; h--) {
                var p = b.weight(h);
                f[h] = p
            }
            for (var g = 0, m = d.split(""), v = 0; v < m.length; v++) g += parseInt(m[v], 10) * f[18 - v];
            var y = 12 - g % 11;
            return 10 == y ? y = "X" : y > 10 && (y %= 11), y = "number" == typeof y ? y.toString() : y, d + y
        }
    }, n
});
!function (i) {
    var e = "undefined" != typeof window, t = e ? window : this;
    "undefined" != typeof define && define.amd ? define([], i()) : "function" == typeof define && define.cmd ? define(function (e, t, n) {
        n.exports = i()
    }) : "undefined" != typeof module && module.exports ? module.exports = i() : t.GB2260 = i()
}(function () {
    var e = {
        11e4: "åŒ—äº¬å¸‚",
        110100: "åŒ—äº¬å¸‚å¸‚è¾–åŒº",
        110101: "åŒ—äº¬å¸‚ä¸œåŸŽåŒº",
        110102: "åŒ—äº¬å¸‚è¥¿åŸŽåŒº",
        110103: "åŒ—äº¬å¸‚å´‡æ–‡åŒº",
        110104: "åŒ—äº¬å¸‚å®£æ­¦åŒº",
        110105: "åŒ—äº¬å¸‚æœé˜³åŒº",
        110106: "åŒ—äº¬å¸‚ä¸°å°åŒº",
        110107: "åŒ—äº¬å¸‚çŸ³æ™¯å±±åŒº",
        110108: "åŒ—äº¬å¸‚æµ·æ·€åŒº",
        110109: "åŒ—äº¬å¸‚é—¨å¤´æ²ŸåŒº",
        110111: "åŒ—äº¬å¸‚æˆ¿å±±åŒº",
        110112: "åŒ—äº¬å¸‚é€šå·žåŒº",
        110113: "åŒ—äº¬å¸‚é¡ºä¹‰åŒº",
        110200: "åŒ—äº¬å¸‚åŽ¿",
        110221: "åŒ—äº¬å¸‚æ˜Œå¹³åŽ¿",
        110224: "åŒ—äº¬å¸‚å¤§å…´åŽ¿",
        110226: "åŒ—äº¬å¸‚å¹³è°·åŽ¿",
        110227: "åŒ—äº¬å¸‚æ€€æŸ”åŽ¿",
        110228: "åŒ—äº¬å¸‚å¯†äº‘åŽ¿",
        110229: "åŒ—äº¬å¸‚å»¶åº†åŽ¿",
        12e4: "å¤©æ´¥å¸‚",
        120100: "å¤©æ´¥å¸‚å¸‚è¾–åŒº",
        120101: "å¤©æ´¥å¸‚å’Œå¹³åŒº",
        120102: "å¤©æ´¥å¸‚æ²³ä¸œåŒº",
        120103: "å¤©æ´¥å¸‚æ²³è¥¿åŒº",
        120104: "å¤©æ´¥å¸‚å—å¼€åŒº",
        120105: "å¤©æ´¥å¸‚æ²³åŒ—åŒº",
        120106: "å¤©æ´¥å¸‚çº¢æ¡¥åŒº",
        120107: "å¤©æ´¥å¸‚å¡˜æ²½åŒº",
        120108: "å¤©æ´¥å¸‚æ±‰æ²½åŒº",
        120109: "å¤©æ´¥å¸‚å¤§æ¸¯åŒº",
        120110: "å¤©æ´¥å¸‚ä¸œä¸½åŒº",
        120111: "å¤©æ´¥å¸‚è¥¿é’åŒº",
        120112: "å¤©æ´¥å¸‚æ´¥å—åŒº",
        120113: "å¤©æ´¥å¸‚åŒ—è¾°åŒº",
        120200: "å¤©æ´¥å¸‚åŽ¿",
        120221: "å¤©æ´¥å¸‚å®æ²³åŽ¿",
        120222: "å¤©æ´¥å¸‚æ­¦æ¸…åŽ¿",
        120223: "å¤©æ´¥å¸‚é™æµ·åŽ¿",
        120224: "å¤©æ´¥å¸‚å®å»åŽ¿",
        120225: "å¤©æ´¥å¸‚è“ŸåŽ¿",
        13e4: "æ²³åŒ—çœ",
        130100: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚",
        130101: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚å¸‚è¾–åŒº",
        130102: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚é•¿å®‰åŒº",
        130103: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ¡¥ä¸œåŒº",
        130104: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ¡¥è¥¿åŒº",
        130105: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ–°åŽåŒº",
        130106: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚éƒŠåŒº",
        130107: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚äº•é™‰çŸ¿åŒº",
        130121: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚äº•é™‰åŽ¿",
        130123: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ­£å®šåŽ¿",
        130124: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ ¾åŸŽåŽ¿",
        130125: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚è¡Œå”åŽ¿",
        130126: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚çµå¯¿åŽ¿",
        130127: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚é«˜é‚‘åŽ¿",
        130128: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ·±æ³½åŽ¿",
        130129: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚èµžçš‡åŽ¿",
        130130: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ— æžåŽ¿",
        130131: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚å¹³å±±åŽ¿",
        130132: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚å…ƒæ°åŽ¿",
        130133: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚èµµåŽ¿",
        130181: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚è¾›é›†å¸‚",
        130182: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚è—åŸŽå¸‚",
        130183: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ™‹å·žå¸‚",
        130184: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ–°ä¹å¸‚",
        130185: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚é¹¿æ³‰å¸‚",
        130200: "æ²³åŒ—çœå”å±±å¸‚",
        130201: "æ²³åŒ—çœå”å±±å¸‚å¸‚è¾–åŒº",
        130202: "æ²³åŒ—çœå”å±±å¸‚è·¯å—åŒº",
        130203: "æ²³åŒ—çœå”å±±å¸‚è·¯åŒ—åŒº",
        130204: "æ²³åŒ—çœå”å±±å¸‚å¤å†¶åŒº",
        130205: "æ²³åŒ—çœå”å±±å¸‚å¼€å¹³åŒº",
        130206: "æ²³åŒ—çœå”å±±å¸‚æ–°åŒº",
        130221: "æ²³åŒ—çœå”å±±å¸‚ä¸°æ¶¦åŽ¿",
        130223: "æ²³åŒ—çœå”å±±å¸‚æ»¦åŽ¿",
        130224: "æ²³åŒ—çœå”å±±å¸‚æ»¦å—åŽ¿",
        130225: "æ²³åŒ—çœå”å±±å¸‚ä¹äº­åŽ¿",
        130227: "æ²³åŒ—çœå”å±±å¸‚è¿è¥¿åŽ¿",
        130229: "æ²³åŒ—çœå”å±±å¸‚çŽ‰ç”°åŽ¿",
        130230: "æ²³åŒ—çœå”å±±å¸‚å”æµ·åŽ¿",
        130281: "æ²³åŒ—çœå”å±±å¸‚éµåŒ–å¸‚",
        130282: "æ²³åŒ—çœå”å±±å¸‚ä¸°å—å¸‚",
        130283: "æ²³åŒ—çœå”å±±å¸‚è¿å®‰å¸‚",
        130300: "æ²³åŒ—çœç§¦çš‡å²›å¸‚ç§¦çš‡å²›å¸‚",
        130301: "æ²³åŒ—çœç§¦çš‡å²›å¸‚å¸‚è¾–åŒº",
        130302: "æ²³åŒ—çœç§¦çš‡å²›å¸‚æµ·æ¸¯åŒº",
        130303: "æ²³åŒ—çœç§¦çš‡å²›å¸‚å±±æµ·å…³åŒº",
        130304: "æ²³åŒ—çœç§¦çš‡å²›å¸‚åŒ—æˆ´æ²³åŒº",
        130321: "æ²³åŒ—çœç§¦çš‡å²›å¸‚é’é¾™æ»¡æ—è‡ªæ²»åŽ¿",
        130322: "æ²³åŒ—çœç§¦çš‡å²›å¸‚æ˜Œé»ŽåŽ¿",
        130323: "æ²³åŒ—çœç§¦çš‡å²›å¸‚æŠšå®åŽ¿",
        130324: "æ²³åŒ—çœç§¦çš‡å²›å¸‚å¢é¾™åŽ¿",
        130400: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é‚¯éƒ¸å¸‚",
        130401: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å¸‚è¾–åŒº",
        130402: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é‚¯å±±åŒº",
        130403: "æ²³åŒ—çœé‚¯éƒ¸å¸‚ä¸›å°åŒº",
        130404: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å¤å…´åŒº",
        130406: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å³°å³°çŸ¿åŒº",
        130421: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é‚¯éƒ¸åŽ¿",
        130423: "æ²³åŒ—çœé‚¯éƒ¸å¸‚ä¸´æ¼³åŽ¿",
        130424: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æˆå®‰åŽ¿",
        130425: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å¤§ååŽ¿",
        130426: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æ¶‰åŽ¿",
        130427: "æ²³åŒ—çœé‚¯éƒ¸å¸‚ç£åŽ¿",
        130428: "æ²³åŒ—çœé‚¯éƒ¸å¸‚è‚¥ä¹¡åŽ¿",
        130429: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æ°¸å¹´åŽ¿",
        130430: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é‚±åŽ¿",
        130431: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é¸¡æ³½åŽ¿",
        130432: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å¹¿å¹³åŽ¿",
        130433: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é¦†é™¶åŽ¿",
        130434: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é­åŽ¿",
        130435: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æ›²å‘¨åŽ¿",
        130481: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æ­¦å®‰å¸‚",
        130500: "æ²³åŒ—çœé‚¢å°å¸‚",
        130501: "æ²³åŒ—çœé‚¢å°å¸‚å¸‚è¾–åŒº",
        130502: "æ²³åŒ—çœé‚¢å°å¸‚æ¡¥ä¸œåŒº",
        130503: "æ²³åŒ—çœé‚¢å°å¸‚æ¡¥è¥¿åŒº",
        130521: "æ²³åŒ—çœé‚¢å°å¸‚é‚¢å°åŽ¿",
        130522: "æ²³åŒ—çœé‚¢å°å¸‚ä¸´åŸŽåŽ¿",
        130523: "æ²³åŒ—çœé‚¢å°å¸‚å†…ä¸˜åŽ¿",
        130524: "æ²³åŒ—çœé‚¢å°å¸‚æŸä¹¡åŽ¿",
        130525: "æ²³åŒ—çœé‚¢å°å¸‚éš†å°§åŽ¿",
        130526: "æ²³åŒ—çœé‚¢å°å¸‚ä»»åŽ¿",
        130527: "æ²³åŒ—çœé‚¢å°å¸‚å—å’ŒåŽ¿",
        130528: "æ²³åŒ—çœé‚¢å°å¸‚å®æ™‹åŽ¿",
        130529: "æ²³åŒ—çœé‚¢å°å¸‚å·¨é¹¿åŽ¿",
        130530: "æ²³åŒ—çœé‚¢å°å¸‚æ–°æ²³åŽ¿",
        130531: "æ²³åŒ—çœé‚¢å°å¸‚å¹¿å®—åŽ¿",
        130532: "æ²³åŒ—çœé‚¢å°å¸‚å¹³ä¹¡åŽ¿",
        130533: "æ²³åŒ—çœé‚¢å°å¸‚å¨åŽ¿",
        130534: "æ²³åŒ—çœé‚¢å°å¸‚æ¸…æ²³åŽ¿",
        130535: "æ²³åŒ—çœé‚¢å°å¸‚ä¸´è¥¿åŽ¿",
        130581: "æ²³åŒ—çœé‚¢å°å¸‚å—å®«å¸‚",
        130582: "æ²³åŒ—çœé‚¢å°å¸‚æ²™æ²³å¸‚",
        130600: "æ²³åŒ—çœä¿å®šå¸‚",
        130601: "æ²³åŒ—çœä¿å®šå¸‚å¸‚è¾–åŒº",
        130602: "æ²³åŒ—çœä¿å®šå¸‚æ–°å¸‚åŒº",
        130603: "æ²³åŒ—çœä¿å®šå¸‚åŒ—å¸‚åŒº",
        130604: "æ²³åŒ—çœä¿å®šå¸‚å—å¸‚åŒº",
        130621: "æ²³åŒ—çœä¿å®šå¸‚æ»¡åŸŽåŽ¿",
        130622: "æ²³åŒ—çœä¿å®šå¸‚æ¸…è‹‘åŽ¿",
        130623: "æ²³åŒ—çœä¿å®šå¸‚æ¶žæ°´åŽ¿",
        130624: "æ²³åŒ—çœä¿å®šå¸‚é˜œå¹³åŽ¿",
        130625: "æ²³åŒ—çœä¿å®šå¸‚å¾æ°´åŽ¿",
        130626: "æ²³åŒ—çœä¿å®šå¸‚å®šå…´åŽ¿",
        130627: "æ²³åŒ—çœä¿å®šå¸‚å”åŽ¿",
        130628: "æ²³åŒ—çœä¿å®šå¸‚é«˜é˜³åŽ¿",
        130629: "æ²³åŒ—çœä¿å®šå¸‚å®¹åŸŽåŽ¿",
        130630: "æ²³åŒ—çœä¿å®šå¸‚æ¶žæºåŽ¿",
        130631: "æ²³åŒ—çœä¿å®šå¸‚æœ›éƒ½åŽ¿",
        130632: "æ²³åŒ—çœä¿å®šå¸‚å®‰æ–°åŽ¿",
        130633: "æ²³åŒ—çœä¿å®šå¸‚æ˜“åŽ¿",
        130634: "æ²³åŒ—çœä¿å®šå¸‚æ›²é˜³åŽ¿",
        130635: "æ²³åŒ—çœä¿å®šå¸‚è ¡åŽ¿",
        130636: "æ²³åŒ—çœä¿å®šå¸‚é¡ºå¹³åŽ¿",
        130637: "æ²³åŒ—çœä¿å®šå¸‚åšé‡ŽåŽ¿",
        130638: "æ²³åŒ—çœä¿å®šå¸‚é›„åŽ¿",
        130681: "æ²³åŒ—çœä¿å®šå¸‚æ¶¿å·žå¸‚",
        130682: "æ²³åŒ—çœä¿å®šå¸‚å®šå·žå¸‚",
        130683: "æ²³åŒ—çœä¿å®šå¸‚å®‰å›½å¸‚",
        130684: "æ²³åŒ—çœä¿å®šå¸‚é«˜ç¢‘åº—å¸‚",
        130700: "æ²³åŒ—çœå¼ å®¶å£å¸‚",
        130701: "æ²³åŒ—çœå¼ å®¶å£å¸‚å¸‚è¾–åŒº",
        130702: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ¡¥ä¸œåŒº",
        130703: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ¡¥è¥¿åŒº",
        130705: "æ²³åŒ—çœå¼ å®¶å£å¸‚å®£åŒ–åŒº",
        130706: "æ²³åŒ—çœå¼ å®¶å£å¸‚ä¸‹èŠ±å›­åŒº",
        130721: "æ²³åŒ—çœå¼ å®¶å£å¸‚å®£åŒ–åŽ¿",
        130722: "æ²³åŒ—çœå¼ å®¶å£å¸‚å¼ åŒ—åŽ¿",
        130723: "æ²³åŒ—çœå¼ å®¶å£å¸‚åº·ä¿åŽ¿",
        130724: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ²½æºåŽ¿",
        130725: "æ²³åŒ—çœå¼ å®¶å£å¸‚å°šä¹‰åŽ¿",
        130726: "æ²³åŒ—çœå¼ å®¶å£å¸‚è”šåŽ¿",
        130727: "æ²³åŒ—çœå¼ å®¶å£å¸‚é˜³åŽŸåŽ¿",
        130728: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ€€å®‰åŽ¿",
        130729: "æ²³åŒ—çœå¼ å®¶å£å¸‚ä¸‡å…¨åŽ¿",
        130730: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ€€æ¥åŽ¿",
        130731: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ¶¿é¹¿åŽ¿",
        130732: "æ²³åŒ—çœå¼ å®¶å£å¸‚èµ¤åŸŽåŽ¿",
        130733: "æ²³åŒ—çœå¼ å®¶å£å¸‚å´‡ç¤¼åŽ¿",
        130800: "æ²³åŒ—çœæ‰¿å¾·å¸‚",
        130801: "æ²³åŒ—çœæ‰¿å¾·å¸‚å¸‚è¾–åŒº",
        130802: "æ²³åŒ—çœæ‰¿å¾·å¸‚åŒæ¡¥åŒº",
        130803: "æ²³åŒ—çœæ‰¿å¾·å¸‚åŒæ»¦åŒº",
        130804: "æ²³åŒ—çœæ‰¿å¾·å¸‚é¹°æ‰‹è¥å­çŸ¿åŒº",
        130821: "æ²³åŒ—çœæ‰¿å¾·å¸‚æ‰¿å¾·åŽ¿",
        130822: "æ²³åŒ—çœæ‰¿å¾·å¸‚å…´éš†åŽ¿",
        130823: "æ²³åŒ—çœæ‰¿å¾·å¸‚å¹³æ³‰åŽ¿",
        130824: "æ²³åŒ—çœæ‰¿å¾·å¸‚æ»¦å¹³åŽ¿",
        130825: "æ²³åŒ—çœæ‰¿å¾·å¸‚éš†åŒ–åŽ¿",
        130826: "æ²³åŒ—çœæ‰¿å¾·å¸‚ä¸°å®æ»¡æ—è‡ªæ²»åŽ¿",
        130827: "æ²³åŒ—çœæ‰¿å¾·å¸‚å®½åŸŽæ»¡æ—è‡ªæ²»åŽ¿",
        130828: "æ²³åŒ—çœæ‰¿å¾·å¸‚å›´åœºæ»¡æ—è’™å¤æ—è‡ªæ²»åŽ¿",
        130900: "æ²³åŒ—çœæ²§å·žå¸‚",
        130901: "æ²³åŒ—çœæ²§å·žå¸‚å¸‚è¾–åŒº",
        130902: "æ²³åŒ—çœæ²§å·žå¸‚æ–°åŽåŒº",
        130903: "æ²³åŒ—çœæ²§å·žå¸‚è¿æ²³åŒº",
        130921: "æ²³åŒ—çœæ²§å·žå¸‚æ²§åŽ¿",
        130922: "æ²³åŒ—çœæ²§å·žå¸‚é’åŽ¿",
        130923: "æ²³åŒ—çœæ²§å·žå¸‚ä¸œå…‰åŽ¿",
        130924: "æ²³åŒ—çœæ²§å·žå¸‚æµ·å…´åŽ¿",
        130925: "æ²³åŒ—çœæ²§å·žå¸‚ç›å±±åŽ¿",
        130926: "æ²³åŒ—çœæ²§å·žå¸‚è‚ƒå®åŽ¿",
        130927: "æ²³åŒ—çœæ²§å·žå¸‚å—çš®åŽ¿",
        130928: "æ²³åŒ—çœæ²§å·žå¸‚å´æ¡¥åŽ¿",
        130929: "æ²³åŒ—çœæ²§å·žå¸‚çŒ®åŽ¿",
        130930: "æ²³åŒ—çœæ²§å·žå¸‚å­Ÿæ‘å›žæ—è‡ªæ²»åŽ¿",
        130981: "æ²³åŒ—çœæ²§å·žå¸‚æ³Šå¤´å¸‚",
        130982: "æ²³åŒ—çœæ²§å·žå¸‚ä»»ä¸˜å¸‚",
        130983: "æ²³åŒ—çœæ²§å·žå¸‚é»„éª…å¸‚",
        130984: "æ²³åŒ—çœæ²§å·žå¸‚æ²³é—´å¸‚",
        131e3: "æ²³åŒ—çœå»ŠåŠå¸‚",
        131001: "æ²³åŒ—çœå»ŠåŠå¸‚å¸‚è¾–åŒº",
        131002: "æ²³åŒ—çœå»ŠåŠå¸‚å®‰æ¬¡åŒº",
        131022: "æ²³åŒ—çœå»ŠåŠå¸‚å›ºå®‰åŽ¿",
        131023: "æ²³åŒ—çœå»ŠåŠå¸‚æ°¸æ¸…åŽ¿",
        131024: "æ²³åŒ—çœå»ŠåŠå¸‚é¦™æ²³åŽ¿",
        131025: "æ²³åŒ—çœå»ŠåŠå¸‚å¤§åŸŽåŽ¿",
        131026: "æ²³åŒ—çœå»ŠåŠå¸‚æ–‡å®‰åŽ¿",
        131028: "æ²³åŒ—çœå»ŠåŠå¸‚å¤§åŽ‚å›žæ—è‡ªæ²»åŽ¿",
        131081: "æ²³åŒ—çœå»ŠåŠå¸‚éœ¸å·žå¸‚",
        131082: "æ²³åŒ—çœå»ŠåŠå¸‚ä¸‰æ²³å¸‚",
        131100: "æ²³åŒ—çœè¡¡æ°´å¸‚",
        131101: "æ²³åŒ—çœè¡¡æ°´å¸‚å¸‚è¾–åŒº",
        131102: "æ²³åŒ—çœè¡¡æ°´å¸‚æ¡ƒåŸŽåŒº",
        131121: "æ²³åŒ—çœè¡¡æ°´å¸‚æž£å¼ºåŽ¿",
        131122: "æ²³åŒ—çœè¡¡æ°´å¸‚æ­¦é‚‘åŽ¿",
        131123: "æ²³åŒ—çœè¡¡æ°´å¸‚æ­¦å¼ºåŽ¿",
        131124: "æ²³åŒ—çœè¡¡æ°´å¸‚é¥¶é˜³åŽ¿",
        131125: "æ²³åŒ—çœè¡¡æ°´å¸‚å®‰å¹³åŽ¿",
        131126: "æ²³åŒ—çœè¡¡æ°´å¸‚æ•…åŸŽåŽ¿",
        131127: "æ²³åŒ—çœè¡¡æ°´å¸‚æ™¯åŽ¿",
        131128: "æ²³åŒ—çœè¡¡æ°´å¸‚é˜œåŸŽåŽ¿",
        131181: "æ²³åŒ—çœè¡¡æ°´å¸‚å†€å·žå¸‚",
        131182: "æ²³åŒ—çœè¡¡æ°´å¸‚æ·±å·žå¸‚",
        14e4: "å±±è¥¿çœ",
        140100: "å±±è¥¿çœå¤ªåŽŸå¸‚",
        140101: "å±±è¥¿çœå¤ªåŽŸå¸‚å¸‚è¾–åŒº",
        140105: "å±±è¥¿çœå¤ªåŽŸå¸‚å°åº—åŒº",
        140106: "å±±è¥¿çœå¤ªåŽŸå¸‚è¿Žæ³½åŒº",
        140107: "å±±è¥¿çœå¤ªåŽŸå¸‚æèŠ±å²­åŒº",
        140108: "å±±è¥¿çœå¤ªåŽŸå¸‚å°–è‰åªåŒº",
        140109: "å±±è¥¿çœå¤ªåŽŸå¸‚ä¸‡æŸæž—åŒº",
        140110: "å±±è¥¿çœå¤ªåŽŸå¸‚æ™‹æºåŒº",
        140121: "å±±è¥¿çœå¤ªåŽŸå¸‚æ¸…å¾åŽ¿",
        140122: "å±±è¥¿çœå¤ªåŽŸå¸‚é˜³æ›²åŽ¿",
        140123: "å±±è¥¿çœå¤ªåŽŸå¸‚å¨„çƒ¦åŽ¿",
        140181: "å±±è¥¿çœå¤ªåŽŸå¸‚å¤äº¤å¸‚",
        140200: "å±±è¥¿çœå¤§åŒå¸‚",
        140201: "å±±è¥¿çœå¤§åŒå¸‚å¸‚è¾–åŒº",
        140202: "å±±è¥¿çœå¤§åŒå¸‚åŸŽåŒº",
        140203: "å±±è¥¿çœå¤§åŒå¸‚çŸ¿åŒº",
        140211: "å±±è¥¿çœå¤§åŒå¸‚å—éƒŠåŒº",
        140212: "å±±è¥¿çœå¤§åŒå¸‚æ–°è£åŒº",
        140221: "å±±è¥¿çœå¤§åŒå¸‚é˜³é«˜åŽ¿",
        140222: "å±±è¥¿çœå¤§åŒå¸‚å¤©é•‡åŽ¿",
        140223: "å±±è¥¿çœå¤§åŒå¸‚å¹¿çµåŽ¿",
        140224: "å±±è¥¿çœå¤§åŒå¸‚çµä¸˜åŽ¿",
        140225: "å±±è¥¿çœå¤§åŒå¸‚æµ‘æºåŽ¿",
        140226: "å±±è¥¿çœå¤§åŒå¸‚å·¦äº‘åŽ¿",
        140227: "å±±è¥¿çœå¤§åŒå¸‚å¤§åŒåŽ¿",
        140300: "å±±è¥¿çœé˜³æ³‰å¸‚",
        140301: "å±±è¥¿çœé˜³æ³‰å¸‚å¸‚è¾–åŒº",
        140302: "å±±è¥¿çœé˜³æ³‰å¸‚åŸŽåŒº",
        140303: "å±±è¥¿çœé˜³æ³‰å¸‚çŸ¿åŒº",
        140311: "å±±è¥¿çœé˜³æ³‰å¸‚éƒŠåŒº",
        140321: "å±±è¥¿çœé˜³æ³‰å¸‚å¹³å®šåŽ¿",
        140322: "å±±è¥¿çœé˜³æ³‰å¸‚ç›‚åŽ¿",
        140400: "å±±è¥¿çœé•¿æ²»å¸‚",
        140401: "å±±è¥¿çœé•¿æ²»å¸‚å¸‚è¾–åŒº",
        140402: "å±±è¥¿çœé•¿æ²»å¸‚åŸŽåŒº",
        140411: "å±±è¥¿çœé•¿æ²»å¸‚éƒŠåŒº",
        140421: "å±±è¥¿çœé•¿æ²»å¸‚é•¿æ²»åŽ¿",
        140423: "å±±è¥¿çœé•¿æ²»å¸‚è¥„åž£åŽ¿",
        140424: "å±±è¥¿çœé•¿æ²»å¸‚å±¯ç•™åŽ¿",
        140425: "å±±è¥¿çœé•¿æ²»å¸‚å¹³é¡ºåŽ¿",
        140426: "å±±è¥¿çœé•¿æ²»å¸‚é»ŽåŸŽåŽ¿",
        140427: "å±±è¥¿çœé•¿æ²»å¸‚å£¶å…³åŽ¿",
        140428: "å±±è¥¿çœé•¿æ²»å¸‚é•¿å­åŽ¿",
        140429: "å±±è¥¿çœé•¿æ²»å¸‚æ­¦ä¹¡åŽ¿",
        140430: "å±±è¥¿çœé•¿æ²»å¸‚æ²åŽ¿",
        140431: "å±±è¥¿çœé•¿æ²»å¸‚æ²æºåŽ¿",
        140481: "å±±è¥¿çœé•¿æ²»å¸‚æ½žåŸŽå¸‚",
        140500: "å±±è¥¿çœæ™‹åŸŽå¸‚",
        140501: "å±±è¥¿çœæ™‹åŸŽå¸‚å¸‚è¾–åŒº",
        140502: "å±±è¥¿çœæ™‹åŸŽå¸‚åŸŽåŒº",
        140521: "å±±è¥¿çœæ™‹åŸŽå¸‚æ²æ°´åŽ¿",
        140522: "å±±è¥¿çœæ™‹åŸŽå¸‚é˜³åŸŽåŽ¿",
        140524: "å±±è¥¿çœæ™‹åŸŽå¸‚é™µå·åŽ¿",
        140525: "å±±è¥¿çœæ™‹åŸŽå¸‚æ³½å·žåŽ¿",
        140581: "å±±è¥¿çœæ™‹åŸŽå¸‚é«˜å¹³å¸‚",
        140600: "å±±è¥¿çœæ™‹åŸŽå¸‚æœ”å·žå¸‚",
        140601: "å±±è¥¿çœæ™‹åŸŽå¸‚å¸‚è¾–åŒº",
        140602: "å±±è¥¿çœæ™‹åŸŽå¸‚æœ”åŸŽåŒº",
        140603: "å±±è¥¿çœæ™‹åŸŽå¸‚å¹³é²åŒº",
        140621: "å±±è¥¿çœæ™‹åŸŽå¸‚å±±é˜´åŽ¿",
        140622: "å±±è¥¿çœæ™‹åŸŽå¸‚åº”åŽ¿",
        140623: "å±±è¥¿çœæ™‹åŸŽå¸‚å³çŽ‰åŽ¿",
        140624: "å±±è¥¿çœæ™‹åŸŽå¸‚æ€€ä»åŽ¿",
        142200: "å±±è¥¿çœå¿»å·žåœ°åŒº",
        142201: "å±±è¥¿çœå¿»å·žåœ°åŒºå¿»å·žå¸‚",
        142202: "å±±è¥¿çœå¿»å·žåœ°åŒºåŽŸå¹³å¸‚",
        142222: "å±±è¥¿çœå¿»å·žåœ°åŒºå®šè¥„åŽ¿",
        142223: "å±±è¥¿çœå¿»å·žåœ°åŒºäº”å°åŽ¿",
        142225: "å±±è¥¿çœå¿»å·žåœ°åŒºä»£åŽ¿",
        142226: "å±±è¥¿çœå¿»å·žåœ°åŒºç¹å³™åŽ¿",
        142227: "å±±è¥¿çœå¿»å·žåœ°åŒºå®æ­¦åŽ¿",
        142228: "å±±è¥¿çœå¿»å·žåœ°åŒºé™ä¹åŽ¿",
        142229: "å±±è¥¿çœå¿»å·žåœ°åŒºç¥žæ± åŽ¿",
        142230: "å±±è¥¿çœå¿»å·žåœ°åŒºäº”å¯¨åŽ¿",
        142231: "å±±è¥¿çœå¿»å·žåœ°åŒºå²¢å²šåŽ¿",
        142232: "å±±è¥¿çœå¿»å·žåœ°åŒºæ²³æ›²åŽ¿",
        142233: "å±±è¥¿çœå¿»å·žåœ°åŒºä¿å¾·åŽ¿",
        142234: "å±±è¥¿çœå¿»å·žåœ°åŒºåå…³åŽ¿",
        142300: "å±±è¥¿çœå¿»å·žåœ°åŒºå•æ¢åœ°åŒº",
        142301: "å±±è¥¿çœå¿»å·žåœ°åŒºå­ä¹‰å¸‚",
        142302: "å±±è¥¿çœå¿»å·žåœ°åŒºç¦»çŸ³å¸‚",
        142303: "å±±è¥¿çœå¿»å·žåœ°åŒºæ±¾é˜³å¸‚",
        142322: "å±±è¥¿çœå¿»å·žåœ°åŒºæ–‡æ°´åŽ¿",
        142323: "å±±è¥¿çœå¿»å·žåœ°åŒºäº¤åŸŽåŽ¿",
        142325: "å±±è¥¿çœå¿»å·žåœ°åŒºå…´åŽ¿",
        142326: "å±±è¥¿çœå¿»å·žåœ°åŒºä¸´åŽ¿",
        142327: "å±±è¥¿çœå¿»å·žåœ°åŒºæŸ³æž—åŽ¿",
        142328: "å±±è¥¿çœå¿»å·žåœ°åŒºçŸ³æ¥¼åŽ¿",
        142329: "å±±è¥¿çœå¿»å·žåœ°åŒºå²šåŽ¿",
        142330: "å±±è¥¿çœå¿»å·žåœ°åŒºæ–¹å±±åŽ¿",
        142332: "å±±è¥¿çœå¿»å·žåœ°åŒºä¸­é˜³åŽ¿",
        142333: "å±±è¥¿çœå¿»å·žåœ°åŒºäº¤å£åŽ¿",
        142400: "å±±è¥¿çœæ™‹ä¸­åœ°åŒº",
        142401: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºæ¦†æ¬¡å¸‚",
        142402: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºä»‹ä¼‘å¸‚",
        142421: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºæ¦†ç¤¾åŽ¿",
        142422: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå·¦æƒåŽ¿",
        142423: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå’Œé¡ºåŽ¿",
        142424: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºæ˜”é˜³åŽ¿",
        142427: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå¯¿é˜³åŽ¿",
        142429: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå¤ªè°·åŽ¿",
        142430: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºç¥åŽ¿",
        142431: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå¹³é¥åŽ¿",
        142433: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºçµçŸ³åŽ¿",
        142600: "å±±è¥¿çœä¸´æ±¾åœ°åŒº",
        142601: "å±±è¥¿çœä¸´æ±¾åœ°åŒºä¸´æ±¾å¸‚",
        142602: "å±±è¥¿çœä¸´æ±¾åœ°åŒºä¾¯é©¬å¸‚",
        142603: "å±±è¥¿çœä¸´æ±¾åœ°åŒºéœå·žå¸‚",
        142621: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæ›²æ²ƒåŽ¿",
        142622: "å±±è¥¿çœä¸´æ±¾åœ°åŒºç¿¼åŸŽåŽ¿",
        142623: "å±±è¥¿çœä¸´æ±¾åœ°åŒºè¥„æ±¾åŽ¿",
        142625: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæ´ªæ´žåŽ¿",
        142627: "å±±è¥¿çœä¸´æ±¾åœ°åŒºå¤åŽ¿",
        142628: "å±±è¥¿çœä¸´æ±¾åœ°åŒºå®‰æ³½åŽ¿",
        142629: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæµ®å±±åŽ¿",
        142630: "å±±è¥¿çœä¸´æ±¾åœ°åŒºå‰åŽ¿",
        142631: "å±±è¥¿çœä¸´æ±¾åœ°åŒºä¹¡å®åŽ¿",
        142632: "å±±è¥¿çœä¸´æ±¾åœ°åŒºè’²åŽ¿",
        142633: "å±±è¥¿çœä¸´æ±¾åœ°åŒºå¤§å®åŽ¿",
        142634: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæ°¸å’ŒåŽ¿",
        142635: "å±±è¥¿çœä¸´æ±¾åœ°åŒºéš°åŽ¿",
        142636: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæ±¾è¥¿åŽ¿",
        142700: "å±±è¥¿çœè¿åŸŽåœ°åŒº",
        142701: "å±±è¥¿çœè¿åŸŽåœ°åŒºè¿åŸŽå¸‚",
        142702: "å±±è¥¿çœè¿åŸŽåœ°åŒºæ°¸æµŽå¸‚",
        142703: "å±±è¥¿çœè¿åŸŽåœ°åŒºæ²³æ´¥å¸‚",
        142723: "å±±è¥¿çœè¿åŸŽåœ°åŒºèŠ®åŸŽåŽ¿",
        142724: "å±±è¥¿çœè¿åŸŽåœ°åŒºä¸´çŒ—åŽ¿",
        142725: "å±±è¥¿çœè¿åŸŽåœ°åŒºä¸‡è£åŽ¿",
        142726: "å±±è¥¿çœè¿åŸŽåœ°åŒºæ–°ç»›åŽ¿",
        142727: "å±±è¥¿çœè¿åŸŽåœ°åŒºç¨·å±±åŽ¿",
        142729: "å±±è¥¿çœè¿åŸŽåœ°åŒºé—»å–œåŽ¿",
        142730: "å±±è¥¿çœè¿åŸŽåœ°åŒºå¤åŽ¿",
        142731: "å±±è¥¿çœè¿åŸŽåœ°åŒºç»›åŽ¿",
        142732: "å±±è¥¿çœè¿åŸŽåœ°åŒºå¹³é™†åŽ¿",
        142733: "å±±è¥¿çœè¿åŸŽåœ°åŒºåž£æ›²åŽ¿",
        15e4: "å†…è’™å¤è‡ªæ²»åŒº",
        150100: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚",
        150101: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚å¸‚è¾–åŒº",
        150102: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚æ–°åŸŽåŒº",
        150103: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚å›žæ°‘åŒº",
        150104: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚çŽ‰æ³‰åŒº",
        150105: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚éƒŠåŒº",
        150121: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚åœŸé»˜ç‰¹å·¦æ——",
        150122: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚æ‰˜å…‹æ‰˜åŽ¿",
        150123: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚å’Œæž—æ ¼å°”åŽ¿",
        150124: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚æ¸…æ°´æ²³åŽ¿",
        150125: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚æ­¦å·åŽ¿",
        150200: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚",
        150201: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚å¸‚è¾–åŒº",
        150202: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚ä¸œæ²³åŒº",
        150203: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚æ˜†éƒ½ä¼¦åŒº",
        150204: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚é’å±±åŒº",
        150205: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚çŸ³æ‹çŸ¿åŒº",
        150206: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚ç™½äº‘çŸ¿åŒº",
        150207: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚éƒŠåŒº",
        150221: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚åœŸé»˜ç‰¹å³æ——",
        150222: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚å›ºé˜³åŽ¿",
        150223: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚è¾¾å°”ç½•èŒ‚æ˜Žå®‰è”åˆæ——",
        150300: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚",
        150301: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚å¸‚è¾–åŒº",
        150302: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚æµ·å‹ƒæ¹¾åŒº",
        150303: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚æµ·å—åŒº",
        150304: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚ä¹Œè¾¾åŒº",
        150400: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚",
        150401: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å¸‚è¾–åŒº",
        150402: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚çº¢å±±åŒº",
        150403: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å…ƒå®å±±åŒº",
        150404: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚æ¾å±±åŒº",
        150421: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚é˜¿é²ç§‘å°”æ²æ——",
        150422: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å·´æž—å·¦æ——",
        150423: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å·´æž—å³æ——",
        150424: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚æž—è¥¿åŽ¿",
        150425: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å…‹ä»€å…‹è…¾æ——",
        150426: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚ç¿ç‰›ç‰¹æ——",
        150428: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å–€å–‡æ²æ——",
        150429: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å®åŸŽåŽ¿",
        150430: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚æ•–æ±‰æ——",
        152100: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿ",
        152101: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæµ·æ‹‰å°”å¸‚",
        152102: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ»¡æ´²é‡Œå¸‚",
        152103: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ‰Žå…°å±¯å¸‚",
        152104: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿç‰™å…‹çŸ³å¸‚",
        152105: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ ¹æ²³å¸‚",
        152106: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé¢å°”å¤çº³å¸‚",
        152122: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé˜¿è£æ——",
        152123: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›ŸèŽ«åŠ›è¾¾ç“¦è¾¾æ–¡å°”æ—è‡ªæ²»æ——",
        152127: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé„‚ä¼¦æ˜¥è‡ªæ²»æ——",
        152128: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé„‚æ¸©å…‹æ—è‡ªæ²»æ——",
        152129: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ–°å·´å°”è™Žå³æ——",
        152130: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ–°å·´å°”è™Žå·¦æ——",
        152131: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé™ˆå·´å°”è™Žæ——",
        152200: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿ",
        152201: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿä¹Œå…°æµ©ç‰¹å¸‚",
        152202: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿé˜¿å°”å±±å¸‚",
        152221: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿç§‘å°”æ²å³ç¿¼å‰æ——",
        152222: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿç§‘å°”æ²å³ç¿¼ä¸­æ——",
        152223: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿæ‰Žèµ‰ç‰¹æ——",
        152224: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿçªæ³‰åŽ¿",
        152300: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿ",
        152301: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿé€šè¾½å¸‚",
        152302: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿéœæž—éƒ­å‹’å¸‚",
        152322: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿç§‘å°”æ²å·¦ç¿¼ä¸­æ——",
        152323: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿç§‘å°”æ²å·¦ç¿¼åŽæ——",
        152324: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿå¼€é²åŽ¿",
        152325: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿåº“ä¼¦æ——",
        152326: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿå¥ˆæ›¼æ——",
        152327: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿæ‰Žé²ç‰¹æ——",
        152500: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿ",
        152501: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›ŸäºŒè¿žæµ©ç‰¹å¸‚",
        152502: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿé”¡æž—æµ©ç‰¹å¸‚",
        152522: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿé˜¿å·´å˜Žæ——",
        152523: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿè‹å°¼ç‰¹å·¦æ——",
        152524: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿè‹å°¼ç‰¹å³æ——",
        152525: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿä¸œä¹Œç ç©†æ²æ——",
        152526: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿè¥¿ä¹Œç ç©†æ²æ——",
        152527: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿå¤ªä»†å¯ºæ——",
        152528: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿé•¶é»„æ——",
        152529: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿæ­£é•¶ç™½æ——",
        152530: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿæ­£è“æ——",
        152531: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿå¤šä¼¦åŽ¿",
        152600: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿ",
        152601: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿé›†å®å¸‚",
        152602: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿä¸°é•‡å¸‚",
        152624: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå“èµ„åŽ¿",
        152625: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›ŸåŒ–å¾·åŽ¿",
        152626: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå•†éƒ½åŽ¿",
        152627: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå…´å’ŒåŽ¿",
        152629: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå‡‰åŸŽåŽ¿",
        152630: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå¯Ÿå“ˆå°”å³ç¿¼å‰æ——",
        152631: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå¯Ÿå“ˆå°”å³ç¿¼ä¸­æ——",
        152632: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå¯Ÿå“ˆå°”å³ç¿¼åŽæ——",
        152634: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå››å­çŽ‹æ——",
        152700: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿ",
        152701: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿä¸œèƒœå¸‚",
        152722: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿè¾¾æ‹‰ç‰¹æ——",
        152723: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿå‡†æ ¼å°”æ——",
        152724: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿé„‚æ‰˜å…‹å‰æ——",
        152725: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿé„‚æ‰˜å…‹æ——",
        152726: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿæ­é”¦æ——",
        152727: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿä¹Œå®¡æ——",
        152728: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿä¼Šé‡‘éœæ´›æ——",
        152800: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿ",
        152801: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿä¸´æ²³å¸‚",
        152822: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿäº”åŽŸåŽ¿",
        152823: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿç£´å£åŽ¿",
        152824: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿä¹Œæ‹‰ç‰¹å‰æ——",
        152825: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿä¹Œæ‹‰ç‰¹ä¸­æ——",
        152826: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿä¹Œæ‹‰ç‰¹åŽæ——",
        152827: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿæ­é”¦åŽæ——",
        152900: "å†…è’™å¤è‡ªæ²»åŒºé˜¿æ‹‰å–„ç›Ÿ",
        152921: "å†…è’™å¤è‡ªæ²»åŒºé˜¿æ‹‰å–„ç›Ÿé˜¿æ‹‰å–„å·¦æ——",
        152922: "å†…è’™å¤è‡ªæ²»åŒºé˜¿æ‹‰å–„ç›Ÿé˜¿æ‹‰å–„å³æ——",
        152923: "å†…è’™å¤è‡ªæ²»åŒºé˜¿æ‹‰å–„ç›Ÿé¢æµŽçº³æ——",
        21e4: "è¾½å®çœ",
        210100: "è¾½å®çœæ²ˆé˜³å¸‚",
        210101: "è¾½å®çœæ²ˆé˜³å¸‚å¸‚è¾–åŒº",
        210102: "è¾½å®çœæ²ˆé˜³å¸‚å’Œå¹³åŒº",
        210103: "è¾½å®çœæ²ˆé˜³å¸‚æ²ˆæ²³åŒº",
        210104: "è¾½å®çœæ²ˆé˜³å¸‚å¤§ä¸œåŒº",
        210105: "è¾½å®çœæ²ˆé˜³å¸‚çš‡å§‘åŒº",
        210106: "è¾½å®çœæ²ˆé˜³å¸‚é“è¥¿åŒº",
        210111: "è¾½å®çœæ²ˆé˜³å¸‚è‹å®¶å±¯åŒº",
        210112: "è¾½å®çœæ²ˆé˜³å¸‚ä¸œé™µåŒº",
        210113: "è¾½å®çœæ²ˆé˜³å¸‚æ–°åŸŽå­åŒº",
        210114: "è¾½å®çœæ²ˆé˜³å¸‚äºŽæ´ªåŒº",
        210122: "è¾½å®çœæ²ˆé˜³å¸‚è¾½ä¸­åŽ¿",
        210123: "è¾½å®çœæ²ˆé˜³å¸‚åº·å¹³åŽ¿",
        210124: "è¾½å®çœæ²ˆé˜³å¸‚æ³•åº“åŽ¿",
        210181: "è¾½å®çœæ²ˆé˜³å¸‚æ–°æ°‘å¸‚",
        210200: "è¾½å®çœå¤§è¿žå¸‚",
        210201: "è¾½å®çœå¤§è¿žå¸‚å¸‚è¾–åŒº",
        210202: "è¾½å®çœå¤§è¿žå¸‚ä¸­å±±åŒº",
        210203: "è¾½å®çœå¤§è¿žå¸‚è¥¿å²—åŒº",
        210204: "è¾½å®çœå¤§è¿žå¸‚æ²™æ²³å£åŒº",
        210211: "è¾½å®çœå¤§è¿žå¸‚ç”˜äº•å­åŒº",
        210212: "è¾½å®çœå¤§è¿žå¸‚æ—…é¡ºå£åŒº",
        210213: "è¾½å®çœå¤§è¿žå¸‚é‡‘å·žåŒº",
        210224: "è¾½å®çœå¤§è¿žå¸‚é•¿æµ·åŽ¿",
        210281: "è¾½å®çœå¤§è¿žå¸‚ç“¦æˆ¿åº—å¸‚",
        210282: "è¾½å®çœå¤§è¿žå¸‚æ™®å…°åº—å¸‚",
        210283: "è¾½å®çœå¤§è¿žå¸‚åº„æ²³å¸‚",
        210300: "è¾½å®çœéžå±±å¸‚",
        210301: "è¾½å®çœéžå±±å¸‚å¸‚è¾–åŒº",
        210302: "è¾½å®çœéžå±±å¸‚é“ä¸œåŒº",
        210303: "è¾½å®çœéžå±±å¸‚é“è¥¿åŒº",
        210304: "è¾½å®çœéžå±±å¸‚ç«‹å±±åŒº",
        210311: "è¾½å®çœéžå±±å¸‚åƒå±±åŒº",
        210321: "è¾½å®çœéžå±±å¸‚å°å®‰åŽ¿",
        210323: "è¾½å®çœéžå±±å¸‚å²«å²©æ»¡æ—è‡ªæ²»åŽ¿",
        210381: "è¾½å®çœéžå±±å¸‚æµ·åŸŽå¸‚",
        210400: "è¾½å®çœæŠšé¡ºå¸‚",
        210401: "è¾½å®çœæŠšé¡ºå¸‚å¸‚è¾–åŒº",
        210402: "è¾½å®çœæŠšé¡ºå¸‚æ–°æŠšåŒº",
        210403: "è¾½å®çœæŠšé¡ºå¸‚éœ²å¤©åŒº",
        210404: "è¾½å®çœæŠšé¡ºå¸‚æœ›èŠ±åŒº",
        210411: "è¾½å®çœæŠšé¡ºå¸‚é¡ºåŸŽåŒº",
        210421: "è¾½å®çœæŠšé¡ºå¸‚æŠšé¡ºåŽ¿",
        210422: "è¾½å®çœæŠšé¡ºå¸‚æ–°å®¾æ»¡æ—è‡ªæ²»åŽ¿",
        210423: "è¾½å®çœæŠšé¡ºå¸‚æ¸…åŽŸæ»¡æ—è‡ªæ²»åŽ¿",
        210500: "è¾½å®çœæœ¬æºªå¸‚",
        210501: "è¾½å®çœæœ¬æºªå¸‚å¸‚è¾–åŒº",
        210502: "è¾½å®çœæœ¬æºªå¸‚å¹³å±±åŒº",
        210503: "è¾½å®çœæœ¬æºªå¸‚æºªæ¹–åŒº",
        210504: "è¾½å®çœæœ¬æºªå¸‚æ˜Žå±±åŒº",
        210505: "è¾½å®çœæœ¬æºªå¸‚å—èŠ¬åŒº",
        210521: "è¾½å®çœæœ¬æºªå¸‚æœ¬æºªæ»¡æ—è‡ªæ²»åŽ¿",
        210522: "è¾½å®çœæœ¬æºªå¸‚æ¡“ä»æ»¡æ—è‡ªæ²»åŽ¿",
        210600: "è¾½å®çœä¸¹ä¸œå¸‚",
        210601: "è¾½å®çœä¸¹ä¸œå¸‚å¸‚è¾–åŒº",
        210602: "è¾½å®çœä¸¹ä¸œå¸‚å…ƒå®åŒº",
        210603: "è¾½å®çœä¸¹ä¸œå¸‚æŒ¯å…´åŒº",
        210604: "è¾½å®çœä¸¹ä¸œå¸‚æŒ¯å®‰åŒº",
        210624: "è¾½å®çœä¸¹ä¸œå¸‚å®½ç”¸æ»¡æ—è‡ªæ²»åŽ¿",
        210681: "è¾½å®çœä¸¹ä¸œå¸‚ä¸œæ¸¯å¸‚",
        210682: "è¾½å®çœä¸¹ä¸œå¸‚å‡¤åŸŽå¸‚",
        210700: "è¾½å®çœé”¦å·žå¸‚",
        210701: "è¾½å®çœé”¦å·žå¸‚å¸‚è¾–åŒº",
        210702: "è¾½å®çœé”¦å·žå¸‚å¤å¡”åŒº",
        210703: "è¾½å®çœé”¦å·žå¸‚å‡Œæ²³åŒº",
        210711: "è¾½å®çœé”¦å·žå¸‚å¤ªå’ŒåŒº",
        210726: "è¾½å®çœé”¦å·žå¸‚é»‘å±±åŽ¿",
        210727: "è¾½å®çœé”¦å·žå¸‚ä¹‰åŽ¿",
        210781: "è¾½å®çœé”¦å·žå¸‚å‡Œæµ·å¸‚",
        210782: "è¾½å®çœé”¦å·žå¸‚åŒ—å®å¸‚",
        210800: "è¾½å®çœè¥å£å¸‚",
        210801: "è¾½å®çœè¥å£å¸‚å¸‚è¾–åŒº",
        210802: "è¾½å®çœè¥å£å¸‚ç«™å‰åŒº",
        210803: "è¾½å®çœè¥å£å¸‚è¥¿å¸‚åŒº",
        210804: "è¾½å®çœè¥å£å¸‚é²…é±¼åœˆåŒº",
        210811: "è¾½å®çœè¥å£å¸‚è€è¾¹åŒº",
        210881: "è¾½å®çœè¥å£å¸‚ç›–å·žå¸‚",
        210882: "è¾½å®çœè¥å£å¸‚å¤§çŸ³æ¡¥å¸‚",
        210900: "è¾½å®çœé˜œæ–°å¸‚",
        210901: "è¾½å®çœé˜œæ–°å¸‚å¸‚è¾–åŒº",
        210902: "è¾½å®çœé˜œæ–°å¸‚æµ·å·žåŒº",
        210903: "è¾½å®çœé˜œæ–°å¸‚æ–°é‚±åŒº",
        210904: "è¾½å®çœé˜œæ–°å¸‚å¤ªå¹³åŒº",
        210905: "è¾½å®çœé˜œæ–°å¸‚æ¸…æ²³é—¨åŒº",
        210911: "è¾½å®çœé˜œæ–°å¸‚ç»†æ²³åŒº",
        210921: "è¾½å®çœé˜œæ–°å¸‚é˜œæ–°è’™å¤æ—è‡ªæ²»åŽ¿",
        210922: "è¾½å®çœé˜œæ–°å¸‚å½°æ­¦åŽ¿",
        211e3: "è¾½å®çœè¾½é˜³å¸‚",
        211001: "è¾½å®çœè¾½é˜³å¸‚å¸‚è¾–åŒº",
        211002: "è¾½å®çœè¾½é˜³å¸‚ç™½å¡”åŒº",
        211003: "è¾½å®çœè¾½é˜³å¸‚æ–‡åœ£åŒº",
        211004: "è¾½å®çœè¾½é˜³å¸‚å®ä¼ŸåŒº",
        211005: "è¾½å®çœè¾½é˜³å¸‚å¼“é•¿å²­åŒº",
        211011: "è¾½å®çœè¾½é˜³å¸‚å¤ªå­æ²³åŒº",
        211021: "è¾½å®çœè¾½é˜³å¸‚è¾½é˜³åŽ¿",
        211081: "è¾½å®çœè¾½é˜³å¸‚ç¯å¡”å¸‚",
        211100: "è¾½å®çœç›˜é”¦å¸‚",
        211101: "è¾½å®çœç›˜é”¦å¸‚å¸‚è¾–åŒº",
        211102: "è¾½å®çœç›˜é”¦å¸‚åŒå°å­åŒº",
        211103: "è¾½å®çœç›˜é”¦å¸‚å…´éš†å°åŒº",
        211121: "è¾½å®çœç›˜é”¦å¸‚å¤§æ´¼åŽ¿",
        211122: "è¾½å®çœç›˜é”¦å¸‚ç›˜å±±åŽ¿",
        211200: "è¾½å®çœé“å²­å¸‚",
        211201: "è¾½å®çœé“å²­å¸‚å¸‚è¾–åŒº",
        211202: "è¾½å®çœé“å²­å¸‚é“¶å·žåŒº",
        211204: "è¾½å®çœé“å²­å¸‚æ¸…æ²³åŒº",
        211221: "è¾½å®çœé“å²­å¸‚é“å²­åŽ¿",
        211223: "è¾½å®çœé“å²­å¸‚è¥¿ä¸°åŽ¿",
        211224: "è¾½å®çœé“å²­å¸‚æ˜Œå›¾åŽ¿",
        211281: "è¾½å®çœé“å²­å¸‚é“æ³•å¸‚",
        211282: "è¾½å®çœé“å²­å¸‚å¼€åŽŸå¸‚",
        211300: "è¾½å®çœæœé˜³å¸‚",
        211301: "è¾½å®çœæœé˜³å¸‚å¸‚è¾–åŒº",
        211302: "è¾½å®çœæœé˜³å¸‚åŒå¡”åŒº",
        211303: "è¾½å®çœæœé˜³å¸‚é¾™åŸŽåŒº",
        211321: "è¾½å®çœæœé˜³å¸‚æœé˜³åŽ¿",
        211322: "è¾½å®çœæœé˜³å¸‚å»ºå¹³åŽ¿",
        211324: "è¾½å®çœæœé˜³å¸‚å–€å–‡æ²å·¦ç¿¼è’™å¤æ—è‡ªæ²»åŽ¿",
        211381: "è¾½å®çœæœé˜³å¸‚åŒ—ç¥¨å¸‚",
        211382: "è¾½å®çœæœé˜³å¸‚å‡Œæºå¸‚",
        211400: "è¾½å®çœè‘«èŠ¦å²›å¸‚",
        211401: "è¾½å®çœè‘«èŠ¦å²›å¸‚å¸‚è¾–åŒº",
        211402: "è¾½å®çœè‘«èŠ¦å²›å¸‚è¿žå±±åŒº",
        211403: "è¾½å®çœè‘«èŠ¦å²›å¸‚é¾™æ¸¯åŒº",
        211404: "è¾½å®çœè‘«èŠ¦å²›å¸‚å—ç¥¨åŒº",
        211421: "è¾½å®çœè‘«èŠ¦å²›å¸‚ç»¥ä¸­åŽ¿",
        211422: "è¾½å®çœè‘«èŠ¦å²›å¸‚å»ºæ˜ŒåŽ¿",
        211481: "è¾½å®çœè‘«èŠ¦å²›å¸‚å…´åŸŽå¸‚",
        22e4: "å‰æž—çœ",
        220100: "å‰æž—çœé•¿æ˜¥å¸‚",
        220101: "å‰æž—çœé•¿æ˜¥å¸‚å¸‚è¾–åŒº",
        220102: "å‰æž—çœé•¿æ˜¥å¸‚å—å…³åŒº",
        220103: "å‰æž—çœé•¿æ˜¥å¸‚å®½åŸŽåŒº",
        220104: "å‰æž—çœé•¿æ˜¥å¸‚æœé˜³åŒº",
        220105: "å‰æž—çœé•¿æ˜¥å¸‚äºŒé“åŒº",
        220106: "å‰æž—çœé•¿æ˜¥å¸‚ç»¿å›­åŒº",
        220112: "å‰æž—çœé•¿æ˜¥å¸‚åŒé˜³åŒº",
        220122: "å‰æž—çœé•¿æ˜¥å¸‚å†œå®‰åŽ¿",
        220181: "å‰æž—çœé•¿æ˜¥å¸‚ä¹å°å¸‚",
        220182: "å‰æž—çœé•¿æ˜¥å¸‚æ¦†æ ‘å¸‚",
        220183: "å‰æž—çœé•¿æ˜¥å¸‚å¾·æƒ å¸‚",
        220200: "å‰æž—çœå‰æž—å¸‚",
        220201: "å‰æž—çœå‰æž—å¸‚å¸‚è¾–åŒº",
        220202: "å‰æž—çœå‰æž—å¸‚æ˜Œé‚‘åŒº",
        220203: "å‰æž—çœå‰æž—å¸‚é¾™æ½­åŒº",
        220204: "å‰æž—çœå‰æž—å¸‚èˆ¹è¥åŒº",
        220211: "å‰æž—çœå‰æž—å¸‚ä¸°æ»¡åŒº",
        220221: "å‰æž—çœå‰æž—å¸‚æ°¸å‰åŽ¿",
        220281: "å‰æž—çœå‰æž—å¸‚è›Ÿæ²³å¸‚",
        220282: "å‰æž—çœå‰æž—å¸‚æ¡¦ç”¸å¸‚",
        220283: "å‰æž—çœå‰æž—å¸‚èˆ’å…°å¸‚",
        220284: "å‰æž—çœå‰æž—å¸‚ç£çŸ³å¸‚",
        220300: "å‰æž—çœå››å¹³å¸‚",
        220301: "å‰æž—çœå››å¹³å¸‚å¸‚è¾–åŒº",
        220302: "å‰æž—çœå››å¹³å¸‚é“è¥¿åŒº",
        220303: "å‰æž—çœå››å¹³å¸‚é“ä¸œåŒº",
        220322: "å‰æž—çœå››å¹³å¸‚æ¢¨æ ‘åŽ¿",
        220323: "å‰æž—çœå››å¹³å¸‚ä¼Šé€šæ»¡æ—è‡ªæ²»åŽ¿",
        220381: "å‰æž—çœå››å¹³å¸‚å…¬ä¸»å²­å¸‚",
        220382: "å‰æž—çœå››å¹³å¸‚åŒè¾½å¸‚",
        220400: "å‰æž—çœè¾½æºå¸‚",
        220401: "å‰æž—çœè¾½æºå¸‚å¸‚è¾–åŒº",
        220402: "å‰æž—çœè¾½æºå¸‚é¾™å±±åŒº",
        220403: "å‰æž—çœè¾½æºå¸‚è¥¿å®‰åŒº",
        220421: "å‰æž—çœè¾½æºå¸‚ä¸œä¸°åŽ¿",
        220422: "å‰æž—çœè¾½æºå¸‚ä¸œè¾½åŽ¿",
        220500: "å‰æž—çœé€šåŒ–å¸‚",
        220501: "å‰æž—çœé€šåŒ–å¸‚å¸‚è¾–åŒº",
        220502: "å‰æž—çœé€šåŒ–å¸‚ä¸œæ˜ŒåŒº",
        220503: "å‰æž—çœé€šåŒ–å¸‚äºŒé“æ±ŸåŒº",
        220521: "å‰æž—çœé€šåŒ–å¸‚é€šåŒ–åŽ¿",
        220523: "å‰æž—çœé€šåŒ–å¸‚è¾‰å—åŽ¿",
        220524: "å‰æž—çœé€šåŒ–å¸‚æŸ³æ²³åŽ¿",
        220581: "å‰æž—çœé€šåŒ–å¸‚æ¢…æ²³å£å¸‚",
        220582: "å‰æž—çœé€šåŒ–å¸‚é›†å®‰å¸‚",
        220600: "å‰æž—çœç™½å±±å¸‚",
        220601: "å‰æž—çœç™½å±±å¸‚å¸‚è¾–åŒº",
        220602: "å‰æž—çœç™½å±±å¸‚å…«é“æ±ŸåŒº",
        220621: "å‰æž—çœç™½å±±å¸‚æŠšæ¾åŽ¿",
        220622: "å‰æž—çœç™½å±±å¸‚é–å®‡åŽ¿",
        220623: "å‰æž—çœç™½å±±å¸‚é•¿ç™½æœé²œæ—è‡ªæ²»åŽ¿",
        220625: "å‰æž—çœç™½å±±å¸‚æ±ŸæºåŽ¿",
        220681: "å‰æž—çœç™½å±±å¸‚ä¸´æ±Ÿå¸‚",
        220700: "å‰æž—çœæ¾åŽŸå¸‚",
        220701: "å‰æž—çœæ¾åŽŸå¸‚å¸‚è¾–åŒº",
        220702: "å‰æž—çœæ¾åŽŸå¸‚å®æ±ŸåŒº",
        220721: "å‰æž—çœæ¾åŽŸå¸‚å‰éƒ­å°”ç½—æ–¯è’™å¤æ—è‡ªæ²»åŽ¿",
        220722: "å‰æž—çœæ¾åŽŸå¸‚é•¿å²­åŽ¿",
        220723: "å‰æž—çœæ¾åŽŸå¸‚ä¹¾å®‰åŽ¿",
        220724: "å‰æž—çœæ¾åŽŸå¸‚æ‰¶ä½™åŽ¿",
        220800: "å‰æž—çœç™½åŸŽå¸‚",
        220801: "å‰æž—çœç™½åŸŽå¸‚å¸‚è¾–åŒº",
        220802: "å‰æž—çœç™½åŸŽå¸‚æ´®åŒ—åŒº",
        220821: "å‰æž—çœç™½åŸŽå¸‚é•‡èµ‰åŽ¿",
        220822: "å‰æž—çœç™½åŸŽå¸‚é€šæ¦†åŽ¿",
        220881: "å‰æž—çœç™½åŸŽå¸‚æ´®å—å¸‚",
        220882: "å‰æž—çœç™½åŸŽå¸‚å¤§å®‰å¸‚",
        222400: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·ž",
        222401: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žå»¶å‰å¸‚",
        222402: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žå›¾ä»¬å¸‚",
        222403: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žæ•¦åŒ–å¸‚",
        222404: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žç²æ˜¥å¸‚",
        222405: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žé¾™äº•å¸‚",
        222406: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žå’Œé¾™å¸‚",
        222424: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žæ±ªæ¸…åŽ¿",
        222426: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žå®‰å›¾åŽ¿",
        23e4: "é»‘é¾™æ±Ÿçœ",
        230100: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚",
        230101: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å¸‚è¾–åŒº",
        230102: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é“é‡ŒåŒº",
        230103: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å—å²—åŒº",
        230104: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é“å¤–åŒº",
        230105: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å¤ªå¹³åŒº",
        230106: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é¦™åŠåŒº",
        230107: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚åŠ¨åŠ›åŒº",
        230108: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å¹³æˆ¿åŒº",
        230121: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å‘¼å…°åŽ¿",
        230123: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚ä¾å…°åŽ¿",
        230124: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚æ–¹æ­£åŽ¿",
        230125: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å®¾åŽ¿",
        230126: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å·´å½¦åŽ¿",
        230127: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚æœ¨å…°åŽ¿",
        230128: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é€šæ²³åŽ¿",
        230129: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å»¶å¯¿åŽ¿",
        230181: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é˜¿åŸŽå¸‚",
        230182: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚åŒåŸŽå¸‚",
        230183: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å°šå¿—å¸‚",
        230184: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚äº”å¸¸å¸‚",
        230200: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚",
        230201: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å¸‚è¾–åŒº",
        230202: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚é¾™æ²™åŒº",
        230203: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å»ºåŽåŒº",
        230204: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚é“é”‹åŒº",
        230205: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚æ˜‚æ˜‚æºªåŒº",
        230206: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å¯Œæ‹‰å°”åŸºåŒº",
        230207: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚ç¢¾å­å±±åŒº",
        230208: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚æ¢…é‡Œæ–¯è¾¾æ–¡å°”æ—åŒº",
        230221: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚é¾™æ±ŸåŽ¿",
        230223: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚ä¾å®‰åŽ¿",
        230224: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚æ³°æ¥åŽ¿",
        230225: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚ç”˜å—åŽ¿",
        230227: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å¯Œè£•åŽ¿",
        230229: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å…‹å±±åŽ¿",
        230230: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å…‹ä¸œåŽ¿",
        230231: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚æ‹œæ³‰åŽ¿",
        230281: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚è®·æ²³å¸‚",
        230300: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚",
        230301: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚å¸‚è¾–åŒº",
        230302: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚é¸¡å† åŒº",
        230303: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚æ’å±±åŒº",
        230304: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚æ»´é“åŒº",
        230305: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚æ¢¨æ ‘åŒº",
        230306: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚åŸŽå­æ²³åŒº",
        230307: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚éº»å±±åŒº",
        230321: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚é¸¡ä¸œåŽ¿",
        230381: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚è™Žæž—å¸‚",
        230382: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚å¯†å±±å¸‚",
        230400: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚",
        230401: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å¸‚è¾–åŒº",
        230402: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å‘é˜³åŒº",
        230403: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å·¥å†œåŒº",
        230404: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å—å±±åŒº",
        230405: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å…´å®‰åŒº",
        230406: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚ä¸œå±±åŒº",
        230407: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å…´å±±åŒº",
        230421: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚èåŒ—åŽ¿",
        230422: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚ç»¥æ»¨åŽ¿",
        230500: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚",
        230501: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å¸‚è¾–åŒº",
        230502: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å°–å±±åŒº",
        230503: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å²­ä¸œåŒº",
        230505: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å››æ–¹å°åŒº",
        230506: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å®å±±åŒº",
        230521: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚é›†è´¤åŽ¿",
        230522: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å‹è°ŠåŽ¿",
        230523: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å®æ¸…åŽ¿",
        230524: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚é¥¶æ²³åŽ¿",
        230600: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚",
        230601: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚å¸‚è¾–åŒº",
        230602: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚è¨å°”å›¾åŒº",
        230603: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚é¾™å‡¤åŒº",
        230604: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚è®©èƒ¡è·¯åŒº",
        230605: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚çº¢å²—åŒº",
        230606: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚å¤§åŒåŒº",
        230621: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚è‚‡å·žåŽ¿",
        230622: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚è‚‡æºåŽ¿",
        230623: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚æž—ç”¸åŽ¿",
        230624: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚æœå°”ä¼¯ç‰¹è’™å¤æ—è‡ªæ²»åŽ¿",
        230700: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚",
        230701: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å¸‚è¾–åŒº",
        230702: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ä¼Šæ˜¥åŒº",
        230703: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å—å²”åŒº",
        230704: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å‹å¥½åŒº",
        230705: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚è¥¿æž—åŒº",
        230706: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ç¿ å³¦åŒº",
        230707: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚æ–°é’åŒº",
        230708: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ç¾ŽæºªåŒº",
        230709: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚é‡‘å±±å±¯åŒº",
        230710: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚äº”è¥åŒº",
        230711: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ä¹Œé©¬æ²³åŒº",
        230712: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚æ±¤æ—ºæ²³åŒº",
        230713: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å¸¦å²­åŒº",
        230714: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ä¹Œä¼Šå²­åŒº",
        230715: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚çº¢æ˜ŸåŒº",
        230716: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ä¸Šç”˜å²­åŒº",
        230722: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å˜‰è«åŽ¿",
        230781: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚é“åŠ›å¸‚",
        230800: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚",
        230801: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚å¸‚è¾–åŒº",
        230802: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æ°¸çº¢åŒº",
        230803: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚å‘é˜³åŒº",
        230804: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚å‰è¿›åŒº",
        230805: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚ä¸œé£ŽåŒº",
        230811: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚éƒŠåŒº",
        230822: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æ¡¦å—åŽ¿",
        230826: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æ¡¦å·åŽ¿",
        230828: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æ±¤åŽŸåŽ¿",
        230833: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æŠšè¿œåŽ¿",
        230881: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚åŒæ±Ÿå¸‚",
        230882: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚å¯Œé”¦å¸‚",
        230900: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚",
        230901: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚å¸‚è¾–åŒº",
        230902: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚æ–°å…´åŒº",
        230903: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚æ¡ƒå±±åŒº",
        230904: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚èŒ„å­æ²³åŒº",
        230921: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚å‹ƒåˆ©åŽ¿",
        231e3: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚",
        231001: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚å¸‚è¾–åŒº",
        231002: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚ä¸œå®‰åŒº",
        231003: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚é˜³æ˜ŽåŒº",
        231004: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚çˆ±æ°‘åŒº",
        231005: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚è¥¿å®‰åŒº",
        231024: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚ä¸œå®åŽ¿",
        231025: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚æž—å£åŽ¿",
        231081: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚ç»¥èŠ¬æ²³å¸‚",
        231083: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚æµ·æž—å¸‚",
        231084: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚å®å®‰å¸‚",
        231085: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚ç©†æ£±å¸‚",
        231100: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚",
        231101: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚å¸‚è¾–åŒº",
        231102: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚çˆ±è¾‰åŒº",
        231121: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚å«©æ±ŸåŽ¿",
        231123: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚é€Šå…‹åŽ¿",
        231124: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚å­™å´åŽ¿",
        231181: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚åŒ—å®‰å¸‚",
        231182: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚äº”å¤§è¿žæ± å¸‚",
        232300: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒº",
        232301: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºç»¥åŒ–å¸‚",
        232302: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºå®‰è¾¾å¸‚",
        232303: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºè‚‡ä¸œå¸‚",
        232304: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºæµ·ä¼¦å¸‚",
        232324: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºæœ›å¥ŽåŽ¿",
        232325: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºå…°è¥¿åŽ¿",
        232326: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºé’å†ˆåŽ¿",
        232330: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºåº†å®‰åŽ¿",
        232331: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºæ˜Žæ°´åŽ¿",
        232332: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºç»¥æ£±åŽ¿",
        232700: "é»‘é¾™æ±Ÿçœå¤§å…´å®‰å²­åœ°åŒº",
        232721: "é»‘é¾™æ±Ÿçœå¤§å…´å®‰å²­åœ°åŒºå‘¼çŽ›åŽ¿",
        232722: "é»‘é¾™æ±Ÿçœå¤§å…´å®‰å²­åœ°åŒºå¡”æ²³åŽ¿",
        232723: "é»‘é¾™æ±Ÿçœå¤§å…´å®‰å²­åœ°åŒºæ¼ æ²³åŽ¿",
        31e4: "ä¸Šæµ·å¸‚",
        310100: "ä¸Šæµ·å¸‚å¸‚è¾–åŒº",
        310101: "ä¸Šæµ·å¸‚é»„æµ¦åŒº",
        310102: "ä¸Šæµ·å¸‚å—å¸‚åŒº",
        310103: "ä¸Šæµ·å¸‚å¢æ¹¾åŒº",
        310104: "ä¸Šæµ·å¸‚å¾æ±‡åŒº",
        310105: "ä¸Šæµ·å¸‚é•¿å®åŒº",
        310106: "ä¸Šæµ·å¸‚é™å®‰åŒº",
        310107: "ä¸Šæµ·å¸‚æ™®é™€åŒº",
        310108: "ä¸Šæµ·å¸‚é—¸åŒ—åŒº",
        310109: "ä¸Šæµ·å¸‚è™¹å£åŒº",
        310110: "ä¸Šæµ·å¸‚æ¨æµ¦åŒº",
        310112: "ä¸Šæµ·å¸‚é—µè¡ŒåŒº",
        310113: "ä¸Šæµ·å¸‚å®å±±åŒº",
        310114: "ä¸Šæµ·å¸‚å˜‰å®šåŒº",
        310115: "ä¸Šæµ·å¸‚æµ¦ä¸œæ–°åŒº",
        310116: "ä¸Šæµ·å¸‚é‡‘å±±åŒº",
        310117: "ä¸Šæµ·å¸‚æ¾æ±ŸåŒº",
        310200: "ä¸Šæµ·å¸‚åŽ¿",
        310225: "ä¸Šæµ·å¸‚å—æ±‡åŽ¿",
        310226: "ä¸Šæµ·å¸‚å¥‰è´¤åŽ¿",
        310229: "ä¸Šæµ·å¸‚é’æµ¦åŽ¿",
        310230: "ä¸Šæµ·å¸‚å´‡æ˜ŽåŽ¿",
        32e4: "æ±Ÿè‹çœ",
        320100: "æ±Ÿè‹çœå—äº¬å¸‚",
        320101: "æ±Ÿè‹çœå—äº¬å¸‚å¸‚è¾–åŒº",
        320102: "æ±Ÿè‹çœå—äº¬å¸‚çŽ„æ­¦åŒº",
        320103: "æ±Ÿè‹çœå—äº¬å¸‚ç™½ä¸‹åŒº",
        320104: "æ±Ÿè‹çœå—äº¬å¸‚ç§¦æ·®åŒº",
        320105: "æ±Ÿè‹çœå—äº¬å¸‚å»ºé‚ºåŒº",
        320106: "æ±Ÿè‹çœå—äº¬å¸‚é¼“æ¥¼åŒº",
        320107: "æ±Ÿè‹çœå—äº¬å¸‚ä¸‹å…³åŒº",
        320111: "æ±Ÿè‹çœå—äº¬å¸‚æµ¦å£åŒº",
        320112: "æ±Ÿè‹çœå—äº¬å¸‚å¤§åŽ‚åŒº",
        320113: "æ±Ÿè‹çœå—äº¬å¸‚æ –éœžåŒº",
        320114: "æ±Ÿè‹çœå—äº¬å¸‚é›¨èŠ±å°åŒº",
        320121: "æ±Ÿè‹çœå—äº¬å¸‚æ±Ÿå®åŽ¿",
        320122: "æ±Ÿè‹çœå—äº¬å¸‚æ±Ÿæµ¦åŽ¿",
        320123: "æ±Ÿè‹çœå—äº¬å¸‚å…­åˆåŽ¿",
        320124: "æ±Ÿè‹çœå—äº¬å¸‚æº§æ°´åŽ¿",
        320125: "æ±Ÿè‹çœå—äº¬å¸‚é«˜æ·³åŽ¿",
        320200: "æ±Ÿè‹çœæ— é”¡å¸‚",
        320201: "æ±Ÿè‹çœæ— é”¡å¸‚å¸‚è¾–åŒº",
        320202: "æ±Ÿè‹çœæ— é”¡å¸‚å´‡å®‰åŒº",
        320203: "æ±Ÿè‹çœæ— é”¡å¸‚å—é•¿åŒº",
        320204: "æ±Ÿè‹çœæ— é”¡å¸‚åŒ—å¡˜åŒº",
        320211: "æ±Ÿè‹çœæ— é”¡å¸‚éƒŠåŒº",
        320281: "æ±Ÿè‹çœæ— é”¡å¸‚æ±Ÿé˜´å¸‚",
        320282: "æ±Ÿè‹çœæ— é”¡å¸‚å®œå…´å¸‚",
        320283: "æ±Ÿè‹çœæ— é”¡å¸‚é”¡å±±å¸‚",
        320300: "æ±Ÿè‹çœå¾å·žå¸‚",
        320301: "æ±Ÿè‹çœå¾å·žå¸‚å¸‚è¾–åŒº",
        320302: "æ±Ÿè‹çœå¾å·žå¸‚é¼“æ¥¼åŒº",
        320303: "æ±Ÿè‹çœå¾å·žå¸‚äº‘é¾™åŒº",
        320304: "æ±Ÿè‹çœå¾å·žå¸‚ä¹é‡ŒåŒº",
        320305: "æ±Ÿè‹çœå¾å·žå¸‚è´¾æ±ªåŒº",
        320311: "æ±Ÿè‹çœå¾å·žå¸‚æ³‰å±±åŒº",
        320321: "æ±Ÿè‹çœå¾å·žå¸‚ä¸°åŽ¿",
        320322: "æ±Ÿè‹çœå¾å·žå¸‚æ²›åŽ¿",
        320323: "æ±Ÿè‹çœå¾å·žå¸‚é“œå±±åŽ¿",
        320324: "æ±Ÿè‹çœå¾å·žå¸‚ç¢å®åŽ¿",
        320381: "æ±Ÿè‹çœå¾å·žå¸‚æ–°æ²‚å¸‚",
        320382: "æ±Ÿè‹çœå¾å·žå¸‚é‚³å·žå¸‚",
        320400: "æ±Ÿè‹çœå¸¸å·žå¸‚",
        320401: "æ±Ÿè‹çœå¸¸å·žå¸‚å¸‚è¾–åŒº",
        320402: "æ±Ÿè‹çœå¸¸å·žå¸‚å¤©å®åŒº",
        320404: "æ±Ÿè‹çœå¸¸å·žå¸‚é’Ÿæ¥¼åŒº",
        320405: "æ±Ÿè‹çœå¸¸å·žå¸‚æˆšå¢…å °åŒº",
        320411: "æ±Ÿè‹çœå¸¸å·žå¸‚éƒŠåŒº",
        320481: "æ±Ÿè‹çœå¸¸å·žå¸‚æº§é˜³å¸‚",
        320482: "æ±Ÿè‹çœå¸¸å·žå¸‚é‡‘å›å¸‚",
        320483: "æ±Ÿè‹çœå¸¸å·žå¸‚æ­¦è¿›å¸‚",
        320500: "æ±Ÿè‹çœè‹å·žå¸‚",
        320501: "æ±Ÿè‹çœè‹å·žå¸‚å¸‚è¾–åŒº",
        320502: "æ±Ÿè‹çœè‹å·žå¸‚æ²§æµªåŒº",
        320503: "æ±Ÿè‹çœè‹å·žå¸‚å¹³æ±ŸåŒº",
        320504: "æ±Ÿè‹çœè‹å·žå¸‚é‡‘é˜ŠåŒº",
        320511: "æ±Ÿè‹çœè‹å·žå¸‚éƒŠåŒº",
        320581: "æ±Ÿè‹çœè‹å·žå¸‚å¸¸ç†Ÿå¸‚",
        320582: "æ±Ÿè‹çœè‹å·žå¸‚å¼ å®¶æ¸¯å¸‚",
        320583: "æ±Ÿè‹çœè‹å·žå¸‚æ˜†å±±å¸‚",
        320584: "æ±Ÿè‹çœè‹å·žå¸‚å´æ±Ÿå¸‚",
        320585: "æ±Ÿè‹çœè‹å·žå¸‚å¤ªä»“å¸‚",
        320586: "æ±Ÿè‹çœè‹å·žå¸‚å´åŽ¿å¸‚",
        320600: "æ±Ÿè‹çœå—é€šå¸‚",
        320601: "æ±Ÿè‹çœå—é€šå¸‚å¸‚è¾–åŒº",
        320602: "æ±Ÿè‹çœå—é€šå¸‚å´‡å·åŒº",
        320611: "æ±Ÿè‹çœå—é€šå¸‚æ¸¯é—¸åŒº",
        320621: "æ±Ÿè‹çœå—é€šå¸‚æµ·å®‰åŽ¿",
        320623: "æ±Ÿè‹çœå—é€šå¸‚å¦‚ä¸œåŽ¿",
        320681: "æ±Ÿè‹çœå—é€šå¸‚å¯ä¸œå¸‚",
        320682: "æ±Ÿè‹çœå—é€šå¸‚å¦‚çš‹å¸‚",
        320683: "æ±Ÿè‹çœå—é€šå¸‚é€šå·žå¸‚",
        320684: "æ±Ÿè‹çœå—é€šå¸‚æµ·é—¨å¸‚",
        320700: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚",
        320701: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚å¸‚è¾–åŒº",
        320703: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚è¿žäº‘åŒº",
        320704: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚äº‘å°åŒº",
        320705: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚æ–°æµ¦åŒº",
        320706: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚æµ·å·žåŒº",
        320721: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚èµ£æ¦†åŽ¿",
        320722: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚ä¸œæµ·åŽ¿",
        320723: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚çŒäº‘åŽ¿",
        320724: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚çŒå—åŽ¿",
        320800: "æ±Ÿè‹çœæ·®é˜´å¸‚",
        320801: "æ±Ÿè‹çœæ·®é˜´å¸‚å¸‚è¾–åŒº",
        320802: "æ±Ÿè‹çœæ·®é˜´å¸‚æ¸…æ²³åŒº",
        320811: "æ±Ÿè‹çœæ·®é˜´å¸‚æ¸…æµ¦åŒº",
        320821: "æ±Ÿè‹çœæ·®é˜´å¸‚æ·®é˜´åŽ¿",
        320826: "æ±Ÿè‹çœæ·®é˜´å¸‚æ¶Ÿæ°´åŽ¿",
        320829: "æ±Ÿè‹çœæ·®é˜´å¸‚æ´ªæ³½åŽ¿",
        320830: "æ±Ÿè‹çœæ·®é˜´å¸‚ç›±çœ™åŽ¿",
        320831: "æ±Ÿè‹çœæ·®é˜´å¸‚é‡‘æ¹–åŽ¿",
        320882: "æ±Ÿè‹çœæ·®é˜´å¸‚æ·®å®‰å¸‚",
        320900: "æ±Ÿè‹çœç›åŸŽå¸‚",
        320901: "æ±Ÿè‹çœç›åŸŽå¸‚å¸‚è¾–åŒº",
        320902: "æ±Ÿè‹çœç›åŸŽå¸‚åŸŽåŒº",
        320921: "æ±Ÿè‹çœç›åŸŽå¸‚å“æ°´åŽ¿",
        320922: "æ±Ÿè‹çœç›åŸŽå¸‚æ»¨æµ·åŽ¿",
        320923: "æ±Ÿè‹çœç›åŸŽå¸‚é˜œå®åŽ¿",
        320924: "æ±Ÿè‹çœç›åŸŽå¸‚å°„é˜³åŽ¿",
        320925: "æ±Ÿè‹çœç›åŸŽå¸‚å»ºæ¹–åŽ¿",
        320928: "æ±Ÿè‹çœç›åŸŽå¸‚ç›éƒ½åŽ¿",
        320981: "æ±Ÿè‹çœç›åŸŽå¸‚ä¸œå°å¸‚",
        320982: "æ±Ÿè‹çœç›åŸŽå¸‚å¤§ä¸°å¸‚",
        321e3: "æ±Ÿè‹çœæ‰¬å·žå¸‚",
        321001: "æ±Ÿè‹çœæ‰¬å·žå¸‚å¸‚è¾–åŒº",
        321002: "æ±Ÿè‹çœæ‰¬å·žå¸‚å¹¿é™µåŒº",
        321011: "æ±Ÿè‹çœæ‰¬å·žå¸‚éƒŠåŒº",
        321023: "æ±Ÿè‹çœæ‰¬å·žå¸‚å®åº”åŽ¿",
        321027: "æ±Ÿè‹çœæ‰¬å·žå¸‚é‚—æ±ŸåŽ¿",
        321081: "æ±Ÿè‹çœæ‰¬å·žå¸‚ä»ªå¾å¸‚",
        321084: "æ±Ÿè‹çœæ‰¬å·žå¸‚é«˜é‚®å¸‚",
        321088: "æ±Ÿè‹çœæ‰¬å·žå¸‚æ±Ÿéƒ½å¸‚",
        321100: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚",
        321101: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚å¸‚è¾–åŒº",
        321102: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚äº¬å£åŒº",
        321111: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚æ¶¦å·žåŒº",
        321121: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚ä¸¹å¾’åŽ¿",
        321181: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚ä¸¹é˜³å¸‚",
        321182: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚æ‰¬ä¸­å¸‚",
        321183: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚å¥å®¹å¸‚",
        321200: "æ±Ÿè‹çœæ³°å·žå¸‚",
        321201: "æ±Ÿè‹çœæ³°å·žå¸‚å¸‚è¾–åŒº",
        321202: "æ±Ÿè‹çœæ³°å·žå¸‚æµ·é™µåŒº",
        321203: "æ±Ÿè‹çœæ³°å·žå¸‚é«˜æ¸¯åŒº",
        321281: "æ±Ÿè‹çœæ³°å·žå¸‚å…´åŒ–å¸‚",
        321282: "æ±Ÿè‹çœæ³°å·žå¸‚é–æ±Ÿå¸‚",
        321283: "æ±Ÿè‹çœæ³°å·žå¸‚æ³°å…´å¸‚",
        321284: "æ±Ÿè‹çœæ³°å·žå¸‚å§œå °å¸‚",
        321300: "æ±Ÿè‹çœå®¿è¿å¸‚",
        321301: "æ±Ÿè‹çœå®¿è¿å¸‚å¸‚è¾–åŒº",
        321302: "æ±Ÿè‹çœå®¿è¿å¸‚å®¿åŸŽåŒº",
        321321: "æ±Ÿè‹çœå®¿è¿å¸‚å®¿è±«åŽ¿",
        321322: "æ±Ÿè‹çœå®¿è¿å¸‚æ²­é˜³åŽ¿",
        321323: "æ±Ÿè‹çœå®¿è¿å¸‚æ³—é˜³åŽ¿",
        321324: "æ±Ÿè‹çœå®¿è¿å¸‚æ³—æ´ªåŽ¿",
        33e4: "æµ™æ±Ÿçœ",
        330100: "æµ™æ±Ÿçœæ­å·žå¸‚",
        330101: "æµ™æ±Ÿçœæ­å·žå¸‚å¸‚è¾–åŒº",
        330102: "æµ™æ±Ÿçœæ­å·žå¸‚ä¸ŠåŸŽåŒº",
        330103: "æµ™æ±Ÿçœæ­å·žå¸‚ä¸‹åŸŽåŒº",
        330104: "æµ™æ±Ÿçœæ­å·žå¸‚æ±Ÿå¹²åŒº",
        330105: "æµ™æ±Ÿçœæ­å·žå¸‚æ‹±å¢…åŒº",
        330106: "æµ™æ±Ÿçœæ­å·žå¸‚è¥¿æ¹–åŒº",
        330108: "æµ™æ±Ÿçœæ­å·žå¸‚æ»¨æ±ŸåŒº",
        330122: "æµ™æ±Ÿçœæ­å·žå¸‚æ¡åºåŽ¿",
        330127: "æµ™æ±Ÿçœæ­å·žå¸‚æ·³å®‰åŽ¿",
        330181: "æµ™æ±Ÿçœæ­å·žå¸‚è§å±±å¸‚",
        330182: "æµ™æ±Ÿçœæ­å·žå¸‚å»ºå¾·å¸‚",
        330183: "æµ™æ±Ÿçœæ­å·žå¸‚å¯Œé˜³å¸‚",
        330184: "æµ™æ±Ÿçœæ­å·žå¸‚ä½™æ­å¸‚",
        330185: "æµ™æ±Ÿçœæ­å·žå¸‚ä¸´å®‰å¸‚",
        330200: "æµ™æ±Ÿçœå®æ³¢å¸‚",
        330201: "æµ™æ±Ÿçœå®æ³¢å¸‚å¸‚è¾–åŒº",
        330203: "æµ™æ±Ÿçœå®æ³¢å¸‚æµ·æ›™åŒº",
        330204: "æµ™æ±Ÿçœå®æ³¢å¸‚æ±Ÿä¸œåŒº",
        330205: "æµ™æ±Ÿçœå®æ³¢å¸‚æ±ŸåŒ—åŒº",
        330206: "æµ™æ±Ÿçœå®æ³¢å¸‚åŒ—ä»‘åŒº",
        330211: "æµ™æ±Ÿçœå®æ³¢å¸‚é•‡æµ·åŒº",
        330225: "æµ™æ±Ÿçœå®æ³¢å¸‚è±¡å±±åŽ¿",
        330226: "æµ™æ±Ÿçœå®æ³¢å¸‚å®æµ·åŽ¿",
        330227: "æµ™æ±Ÿçœå®æ³¢å¸‚é„žåŽ¿",
        330281: "æµ™æ±Ÿçœå®æ³¢å¸‚ä½™å§šå¸‚",
        330282: "æµ™æ±Ÿçœå®æ³¢å¸‚æ…ˆæºªå¸‚",
        330283: "æµ™æ±Ÿçœå®æ³¢å¸‚å¥‰åŒ–å¸‚",
        330300: "æµ™æ±Ÿçœæ¸©å·žå¸‚",
        330301: "æµ™æ±Ÿçœæ¸©å·žå¸‚å¸‚è¾–åŒº",
        330302: "æµ™æ±Ÿçœæ¸©å·žå¸‚é¹¿åŸŽåŒº",
        330303: "æµ™æ±Ÿçœæ¸©å·žå¸‚é¾™æ¹¾åŒº",
        330304: "æµ™æ±Ÿçœæ¸©å·žå¸‚ç“¯æµ·åŒº",
        330322: "æµ™æ±Ÿçœæ¸©å·žå¸‚æ´žå¤´åŽ¿",
        330324: "æµ™æ±Ÿçœæ¸©å·žå¸‚æ°¸å˜‰åŽ¿",
        330326: "æµ™æ±Ÿçœæ¸©å·žå¸‚å¹³é˜³åŽ¿",
        330327: "æµ™æ±Ÿçœæ¸©å·žå¸‚è‹å—åŽ¿",
        330328: "æµ™æ±Ÿçœæ¸©å·žå¸‚æ–‡æˆåŽ¿",
        330329: "æµ™æ±Ÿçœæ¸©å·žå¸‚æ³°é¡ºåŽ¿",
        330381: "æµ™æ±Ÿçœæ¸©å·žå¸‚ç‘žå®‰å¸‚",
        330382: "æµ™æ±Ÿçœæ¸©å·žå¸‚ä¹æ¸…å¸‚",
        330400: "æµ™æ±Ÿçœå˜‰å…´å¸‚",
        330401: "æµ™æ±Ÿçœå˜‰å…´å¸‚å¸‚è¾–åŒº",
        330402: "æµ™æ±Ÿçœå˜‰å…´å¸‚ç§€åŸŽåŒº",
        330411: "æµ™æ±Ÿçœå˜‰å…´å¸‚éƒŠåŒº",
        330421: "æµ™æ±Ÿçœå˜‰å…´å¸‚å˜‰å–„åŽ¿",
        330424: "æµ™æ±Ÿçœå˜‰å…´å¸‚æµ·ç›åŽ¿",
        330481: "æµ™æ±Ÿçœå˜‰å…´å¸‚æµ·å®å¸‚",
        330482: "æµ™æ±Ÿçœå˜‰å…´å¸‚å¹³æ¹–å¸‚",
        330483: "æµ™æ±Ÿçœå˜‰å…´å¸‚æ¡ä¹¡å¸‚",
        330500: "æµ™æ±Ÿçœæ¹–å·žå¸‚",
        330501: "æµ™æ±Ÿçœæ¹–å·žå¸‚å¸‚è¾–åŒº",
        330521: "æµ™æ±Ÿçœæ¹–å·žå¸‚å¾·æ¸…åŽ¿",
        330522: "æµ™æ±Ÿçœæ¹–å·žå¸‚é•¿å…´åŽ¿",
        330523: "æµ™æ±Ÿçœæ¹–å·žå¸‚å®‰å‰åŽ¿",
        330600: "æµ™æ±Ÿçœç»å…´å¸‚",
        330601: "æµ™æ±Ÿçœç»å…´å¸‚å¸‚è¾–åŒº",
        330602: "æµ™æ±Ÿçœç»å…´å¸‚è¶ŠåŸŽåŒº",
        330621: "æµ™æ±Ÿçœç»å…´å¸‚ç»å…´åŽ¿",
        330624: "æµ™æ±Ÿçœç»å…´å¸‚æ–°æ˜ŒåŽ¿",
        330681: "æµ™æ±Ÿçœç»å…´å¸‚è¯¸æš¨å¸‚",
        330682: "æµ™æ±Ÿçœç»å…´å¸‚ä¸Šè™žå¸‚",
        330683: "æµ™æ±Ÿçœç»å…´å¸‚åµŠå·žå¸‚",
        330700: "æµ™æ±Ÿçœé‡‘åŽå¸‚",
        330701: "æµ™æ±Ÿçœé‡‘åŽå¸‚å¸‚è¾–åŒº",
        330702: "æµ™æ±Ÿçœé‡‘åŽå¸‚å©ºåŸŽåŒº",
        330721: "æµ™æ±Ÿçœé‡‘åŽå¸‚é‡‘åŽåŽ¿",
        330723: "æµ™æ±Ÿçœé‡‘åŽå¸‚æ­¦ä¹‰åŽ¿",
        330726: "æµ™æ±Ÿçœé‡‘åŽå¸‚æµ¦æ±ŸåŽ¿",
        330727: "æµ™æ±Ÿçœé‡‘åŽå¸‚ç£å®‰åŽ¿",
        330781: "æµ™æ±Ÿçœé‡‘åŽå¸‚å…°æºªå¸‚",
        330782: "æµ™æ±Ÿçœé‡‘åŽå¸‚ä¹‰ä¹Œå¸‚",
        330783: "æµ™æ±Ÿçœé‡‘åŽå¸‚ä¸œé˜³å¸‚",
        330784: "æµ™æ±Ÿçœé‡‘åŽå¸‚æ°¸åº·å¸‚",
        330800: "æµ™æ±Ÿçœè¡¢å·žå¸‚",
        330801: "æµ™æ±Ÿçœè¡¢å·žå¸‚å¸‚è¾–åŒº",
        330802: "æµ™æ±Ÿçœè¡¢å·žå¸‚æŸ¯åŸŽåŒº",
        330821: "æµ™æ±Ÿçœè¡¢å·žå¸‚è¡¢åŽ¿",
        330822: "æµ™æ±Ÿçœè¡¢å·žå¸‚å¸¸å±±åŽ¿",
        330824: "æµ™æ±Ÿçœè¡¢å·žå¸‚å¼€åŒ–åŽ¿",
        330825: "æµ™æ±Ÿçœè¡¢å·žå¸‚é¾™æ¸¸åŽ¿",
        330881: "æµ™æ±Ÿçœè¡¢å·žå¸‚æ±Ÿå±±å¸‚",
        330900: "æµ™æ±ŸçœèˆŸå±±å¸‚",
        330901: "æµ™æ±ŸçœèˆŸå±±å¸‚å¸‚è¾–åŒº",
        330902: "æµ™æ±ŸçœèˆŸå±±å¸‚å®šæµ·åŒº",
        330903: "æµ™æ±ŸçœèˆŸå±±å¸‚æ™®é™€åŒº",
        330921: "æµ™æ±ŸçœèˆŸå±±å¸‚å²±å±±åŽ¿",
        330922: "æµ™æ±ŸçœèˆŸå±±å¸‚åµŠæ³—åŽ¿",
        331e3: "æµ™æ±Ÿçœå°å·žå¸‚",
        331001: "æµ™æ±Ÿçœå°å·žå¸‚å¸‚è¾–åŒº",
        331002: "æµ™æ±Ÿçœå°å·žå¸‚æ¤’æ±ŸåŒº",
        331003: "æµ™æ±Ÿçœå°å·žå¸‚é»„å²©åŒº",
        331004: "æµ™æ±Ÿçœå°å·žå¸‚è·¯æ¡¥åŒº",
        331021: "æµ™æ±Ÿçœå°å·žå¸‚çŽ‰çŽ¯åŽ¿",
        331022: "æµ™æ±Ÿçœå°å·žå¸‚ä¸‰é—¨åŽ¿",
        331023: "æµ™æ±Ÿçœå°å·žå¸‚å¤©å°åŽ¿",
        331024: "æµ™æ±Ÿçœå°å·žå¸‚ä»™å±…åŽ¿",
        331081: "æµ™æ±Ÿçœå°å·žå¸‚æ¸©å²­å¸‚",
        331082: "æµ™æ±Ÿçœå°å·žå¸‚ä¸´æµ·å¸‚",
        332500: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒº",
        332501: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºä¸½æ°´å¸‚",
        332502: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºé¾™æ³‰å¸‚",
        332522: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºé’ç”°åŽ¿",
        332523: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºäº‘å’ŒåŽ¿",
        332525: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºåº†å…ƒåŽ¿",
        332526: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºç¼™äº‘åŽ¿",
        332527: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºé‚æ˜ŒåŽ¿",
        332528: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºæ¾é˜³åŽ¿",
        332529: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºæ™¯å®ç•²æ—è‡ªæ²»åŽ¿",
        34e4: "å®‰å¾½çœ",
        340100: "å®‰å¾½çœåˆè‚¥å¸‚",
        340101: "å®‰å¾½çœåˆè‚¥å¸‚å¸‚è¾–åŒº",
        340102: "å®‰å¾½çœåˆè‚¥å¸‚ä¸œå¸‚åŒº",
        340103: "å®‰å¾½çœåˆè‚¥å¸‚ä¸­å¸‚åŒº",
        340104: "å®‰å¾½çœåˆè‚¥å¸‚è¥¿å¸‚åŒº",
        340111: "å®‰å¾½çœåˆè‚¥å¸‚éƒŠåŒº",
        340121: "å®‰å¾½çœåˆè‚¥å¸‚é•¿ä¸°åŽ¿",
        340122: "å®‰å¾½çœåˆè‚¥å¸‚è‚¥ä¸œåŽ¿",
        340123: "å®‰å¾½çœåˆè‚¥å¸‚è‚¥è¥¿åŽ¿",
        340200: "å®‰å¾½çœèŠœæ¹–å¸‚",
        340201: "å®‰å¾½çœèŠœæ¹–å¸‚å¸‚è¾–åŒº",
        340202: "å®‰å¾½çœèŠœæ¹–å¸‚é•œæ¹–åŒº",
        340203: "å®‰å¾½çœèŠœæ¹–å¸‚é©¬å¡˜åŒº",
        340204: "å®‰å¾½çœèŠœæ¹–å¸‚æ–°èŠœåŒº",
        340207: "å®‰å¾½çœèŠœæ¹–å¸‚é¸ æ±ŸåŒº",
        340221: "å®‰å¾½çœèŠœæ¹–å¸‚èŠœæ¹–åŽ¿",
        340222: "å®‰å¾½çœèŠœæ¹–å¸‚ç¹æ˜ŒåŽ¿",
        340223: "å®‰å¾½çœèŠœæ¹–å¸‚å—é™µåŽ¿",
        340300: "å®‰å¾½çœèšŒåŸ å¸‚",
        340301: "å®‰å¾½çœèšŒåŸ å¸‚å¸‚è¾–åŒº",
        340302: "å®‰å¾½çœèšŒåŸ å¸‚ä¸œå¸‚åŒº",
        340303: "å®‰å¾½çœèšŒåŸ å¸‚ä¸­å¸‚åŒº",
        340304: "å®‰å¾½çœèšŒåŸ å¸‚è¥¿å¸‚åŒº",
        340311: "å®‰å¾½çœèšŒåŸ å¸‚éƒŠåŒº",
        340321: "å®‰å¾½çœèšŒåŸ å¸‚æ€€è¿œåŽ¿",
        340322: "å®‰å¾½çœèšŒåŸ å¸‚äº”æ²³åŽ¿",
        340323: "å®‰å¾½çœèšŒåŸ å¸‚å›ºé•‡åŽ¿",
        340400: "å®‰å¾½çœæ·®å—å¸‚",
        340401: "å®‰å¾½çœæ·®å—å¸‚å¸‚è¾–åŒº",
        340402: "å®‰å¾½çœæ·®å—å¸‚å¤§é€šåŒº",
        340403: "å®‰å¾½çœæ·®å—å¸‚ç”°å®¶åºµåŒº",
        340404: "å®‰å¾½çœæ·®å—å¸‚è°¢å®¶é›†åŒº",
        340405: "å®‰å¾½çœæ·®å—å¸‚å…«å…¬å±±åŒº",
        340406: "å®‰å¾½çœæ·®å—å¸‚æ½˜é›†åŒº",
        340421: "å®‰å¾½çœæ·®å—å¸‚å‡¤å°åŽ¿",
        340500: "å®‰å¾½çœé©¬éžå±±å¸‚",
        340501: "å®‰å¾½çœé©¬éžå±±å¸‚å¸‚è¾–åŒº",
        340502: "å®‰å¾½çœé©¬éžå±±å¸‚é‡‘å®¶åº„åŒº",
        340503: "å®‰å¾½çœé©¬éžå±±å¸‚èŠ±å±±åŒº",
        340504: "å®‰å¾½çœé©¬éžå±±å¸‚é›¨å±±åŒº",
        340505: "å®‰å¾½çœé©¬éžå±±å¸‚å‘å±±åŒº",
        340521: "å®‰å¾½çœé©¬éžå±±å¸‚å½“æ¶‚åŽ¿",
        340600: "å®‰å¾½çœæ·®åŒ—å¸‚",
        340601: "å®‰å¾½çœæ·®åŒ—å¸‚å¸‚è¾–åŒº",
        340602: "å®‰å¾½çœæ·®åŒ—å¸‚æœé›†åŒº",
        340603: "å®‰å¾½çœæ·®åŒ—å¸‚ç›¸å±±åŒº",
        340604: "å®‰å¾½çœæ·®åŒ—å¸‚çƒˆå±±åŒº",
        340621: "å®‰å¾½çœæ·®åŒ—å¸‚æ¿‰æºªåŽ¿",
        340700: "å®‰å¾½çœé“œé™µå¸‚",
        340701: "å®‰å¾½çœé“œé™µå¸‚å¸‚è¾–åŒº",
        340702: "å®‰å¾½çœé“œé™µå¸‚é“œå®˜å±±åŒº",
        340703: "å®‰å¾½çœé“œé™µå¸‚ç‹®å­å±±åŒº",
        340711: "å®‰å¾½çœé“œé™µå¸‚éƒŠåŒº",
        340721: "å®‰å¾½çœé“œé™µå¸‚é“œé™µåŽ¿",
        340800: "å®‰å¾½çœå®‰åº†å¸‚",
        340801: "å®‰å¾½çœå®‰åº†å¸‚å¸‚è¾–åŒº",
        340802: "å®‰å¾½çœå®‰åº†å¸‚è¿Žæ±ŸåŒº",
        340803: "å®‰å¾½çœå®‰åº†å¸‚å¤§è§‚åŒº",
        340811: "å®‰å¾½çœå®‰åº†å¸‚éƒŠåŒº",
        340822: "å®‰å¾½çœå®‰åº†å¸‚æ€€å®åŽ¿",
        340823: "å®‰å¾½çœå®‰åº†å¸‚æžžé˜³åŽ¿",
        340824: "å®‰å¾½çœå®‰åº†å¸‚æ½œå±±åŽ¿",
        340825: "å®‰å¾½çœå®‰åº†å¸‚å¤ªæ¹–åŽ¿",
        340826: "å®‰å¾½çœå®‰åº†å¸‚å®¿æ¾åŽ¿",
        340827: "å®‰å¾½çœå®‰åº†å¸‚æœ›æ±ŸåŽ¿",
        340828: "å®‰å¾½çœå®‰åº†å¸‚å²³è¥¿åŽ¿",
        340881: "å®‰å¾½çœå®‰åº†å¸‚æ¡åŸŽå¸‚",
        341e3: "å®‰å¾½çœé»„å±±å¸‚",
        341001: "å®‰å¾½çœé»„å±±å¸‚å¸‚è¾–åŒº",
        341002: "å®‰å¾½çœé»„å±±å¸‚å±¯æºªåŒº",
        341003: "å®‰å¾½çœé»„å±±å¸‚é»„å±±åŒº",
        341004: "å®‰å¾½çœé»„å±±å¸‚å¾½å·žåŒº",
        341021: "å®‰å¾½çœé»„å±±å¸‚æ­™åŽ¿",
        341022: "å®‰å¾½çœé»„å±±å¸‚ä¼‘å®åŽ¿",
        341023: "å®‰å¾½çœé»„å±±å¸‚é»ŸåŽ¿",
        341024: "å®‰å¾½çœé»„å±±å¸‚ç¥é—¨åŽ¿",
        341100: "å®‰å¾½çœæ»å·žå¸‚",
        341101: "å®‰å¾½çœæ»å·žå¸‚å¸‚è¾–åŒº",
        341102: "å®‰å¾½çœæ»å·žå¸‚ç…çŠåŒº",
        341103: "å®‰å¾½çœæ»å·žå¸‚å—è°¯åŒº",
        341122: "å®‰å¾½çœæ»å·žå¸‚æ¥å®‰åŽ¿",
        341124: "å®‰å¾½çœæ»å·žå¸‚å…¨æ¤’åŽ¿",
        341125: "å®‰å¾½çœæ»å·žå¸‚å®šè¿œåŽ¿",
        341126: "å®‰å¾½çœæ»å·žå¸‚å‡¤é˜³åŽ¿",
        341181: "å®‰å¾½çœæ»å·žå¸‚å¤©é•¿å¸‚",
        341182: "å®‰å¾½çœæ»å·žå¸‚æ˜Žå…‰å¸‚",
        341200: "å®‰å¾½çœé˜œé˜³å¸‚",
        341201: "å®‰å¾½çœé˜œé˜³å¸‚å¸‚è¾–åŒº",
        341202: "å®‰å¾½çœé˜œé˜³å¸‚é¢å·žåŒº",
        341203: "å®‰å¾½çœé˜œé˜³å¸‚é¢ä¸œåŒº",
        341204: "å®‰å¾½çœé˜œé˜³å¸‚é¢æ³‰åŒº",
        341221: "å®‰å¾½çœé˜œé˜³å¸‚ä¸´æ³‰åŽ¿",
        341222: "å®‰å¾½çœé˜œé˜³å¸‚å¤ªå’ŒåŽ¿",
        341223: "å®‰å¾½çœé˜œé˜³å¸‚æ¶¡é˜³åŽ¿",
        341224: "å®‰å¾½çœé˜œé˜³å¸‚è’™åŸŽåŽ¿",
        341225: "å®‰å¾½çœé˜œé˜³å¸‚é˜œå—åŽ¿",
        341226: "å®‰å¾½çœé˜œé˜³å¸‚é¢ä¸ŠåŽ¿",
        341227: "å®‰å¾½çœé˜œé˜³å¸‚åˆ©è¾›åŽ¿",
        341281: "å®‰å¾½çœé˜œé˜³å¸‚äº³å·žå¸‚",
        341282: "å®‰å¾½çœé˜œé˜³å¸‚ç•Œé¦–å¸‚",
        341300: "å®‰å¾½çœå®¿å·žå¸‚",
        341301: "å®‰å¾½çœå®¿å·žå¸‚å¸‚è¾–åŒº",
        341302: "å®‰å¾½çœå®¿å·žå¸‚ç”¬æ¡¥åŒº",
        341321: "å®‰å¾½çœå®¿å·žå¸‚ç €å±±åŽ¿",
        341322: "å®‰å¾½çœå®¿å·žå¸‚è§åŽ¿",
        341323: "å®‰å¾½çœå®¿å·žå¸‚çµç’§åŽ¿",
        341324: "å®‰å¾½çœå®¿å·žå¸‚æ³—åŽ¿",
        342400: "å®‰å¾½çœå…­å®‰åœ°åŒº",
        342401: "å®‰å¾½çœå…­å®‰åœ°åŒºå…­å®‰å¸‚",
        342422: "å®‰å¾½çœå…­å®‰åœ°åŒºå¯¿åŽ¿",
        342423: "å®‰å¾½çœå…­å®‰åœ°åŒºéœé‚±åŽ¿",
        342425: "å®‰å¾½çœå…­å®‰åœ°åŒºèˆ’åŸŽåŽ¿",
        342426: "å®‰å¾½çœå…­å®‰åœ°åŒºé‡‘å¯¨åŽ¿",
        342427: "å®‰å¾½çœå…­å®‰åœ°åŒºéœå±±åŽ¿",
        342500: "å®‰å¾½çœå®£åŸŽåœ°åŒº",
        342501: "å®‰å¾½çœå®£åŸŽåœ°åŒºå®£å·žå¸‚",
        342502: "å®‰å¾½çœå®£åŸŽåœ°åŒºå®å›½å¸‚",
        342522: "å®‰å¾½çœå®£åŸŽåœ°åŒºéƒŽæºªåŽ¿",
        342523: "å®‰å¾½çœå®£åŸŽåœ°åŒºå¹¿å¾·åŽ¿",
        342529: "å®‰å¾½çœå®£åŸŽåœ°åŒºæ³¾åŽ¿",
        342530: "å®‰å¾½çœå®£åŸŽåœ°åŒºæ—Œå¾·åŽ¿",
        342531: "å®‰å¾½çœå®£åŸŽåœ°åŒºç»©æºªåŽ¿",
        342600: "å®‰å¾½çœå·¢æ¹–åœ°åŒº",
        342601: "å®‰å¾½çœå·¢æ¹–åœ°åŒºå·¢æ¹–å¸‚",
        342622: "å®‰å¾½çœå·¢æ¹–åœ°åŒºåºæ±ŸåŽ¿",
        342623: "å®‰å¾½çœå·¢æ¹–åœ°åŒºæ— ä¸ºåŽ¿",
        342625: "å®‰å¾½çœå·¢æ¹–åœ°åŒºå«å±±åŽ¿",
        342626: "å®‰å¾½çœå·¢æ¹–åœ°åŒºå’ŒåŽ¿",
        342900: "å®‰å¾½çœæ± å·žåœ°åŒº",
        342901: "å®‰å¾½çœæ± å·žåœ°åŒºè´µæ± å¸‚",
        342921: "å®‰å¾½çœæ± å·žåœ°åŒºä¸œè‡³åŽ¿",
        342922: "å®‰å¾½çœæ± å·žåœ°åŒºçŸ³å°åŽ¿",
        342923: "å®‰å¾½çœæ± å·žåœ°åŒºé’é˜³åŽ¿",
        35e4: "ç¦å»ºçœ",
        350100: "ç¦å»ºçœç¦å·žå¸‚",
        350101: "ç¦å»ºçœç¦å·žå¸‚å¸‚è¾–åŒº",
        350102: "ç¦å»ºçœç¦å·žå¸‚é¼“æ¥¼åŒº",
        350103: "ç¦å»ºçœç¦å·žå¸‚å°æ±ŸåŒº",
        350104: "ç¦å»ºçœç¦å·žå¸‚ä»“å±±åŒº",
        350105: "ç¦å»ºçœç¦å·žå¸‚é©¬å°¾åŒº",
        350111: "ç¦å»ºçœç¦å·žå¸‚æ™‹å®‰åŒº",
        350121: "ç¦å»ºçœç¦å·žå¸‚é—½ä¾¯åŽ¿",
        350122: "ç¦å»ºçœç¦å·žå¸‚è¿žæ±ŸåŽ¿",
        350123: "ç¦å»ºçœç¦å·žå¸‚ç½—æºåŽ¿",
        350124: "ç¦å»ºçœç¦å·žå¸‚é—½æ¸…åŽ¿",
        350125: "ç¦å»ºçœç¦å·žå¸‚æ°¸æ³°åŽ¿",
        350128: "ç¦å»ºçœç¦å·žå¸‚å¹³æ½­åŽ¿",
        350181: "ç¦å»ºçœç¦å·žå¸‚ç¦æ¸…å¸‚",
        350182: "ç¦å»ºçœç¦å·žå¸‚é•¿ä¹å¸‚",
        350200: "ç¦å»ºçœåŽ¦é—¨å¸‚",
        350201: "ç¦å»ºçœåŽ¦é—¨å¸‚å¸‚è¾–åŒº",
        350202: "ç¦å»ºçœåŽ¦é—¨å¸‚é¼“æµªå±¿åŒº",
        350203: "ç¦å»ºçœåŽ¦é—¨å¸‚æ€æ˜ŽåŒº",
        350204: "ç¦å»ºçœåŽ¦é—¨å¸‚å¼€å…ƒåŒº",
        350205: "ç¦å»ºçœåŽ¦é—¨å¸‚ææž—åŒº",
        350206: "ç¦å»ºçœåŽ¦é—¨å¸‚æ¹–é‡ŒåŒº",
        350211: "ç¦å»ºçœåŽ¦é—¨å¸‚é›†ç¾ŽåŒº",
        350212: "ç¦å»ºçœåŽ¦é—¨å¸‚åŒå®‰åŒº",
        350300: "ç¦å»ºçœèŽ†ç”°å¸‚",
        350301: "ç¦å»ºçœèŽ†ç”°å¸‚å¸‚è¾–åŒº",
        350302: "ç¦å»ºçœèŽ†ç”°å¸‚åŸŽåŽ¢åŒº",
        350303: "ç¦å»ºçœèŽ†ç”°å¸‚æ¶µæ±ŸåŒº",
        350321: "ç¦å»ºçœèŽ†ç”°å¸‚èŽ†ç”°åŽ¿",
        350322: "ç¦å»ºçœèŽ†ç”°å¸‚ä»™æ¸¸åŽ¿",
        350400: "ç¦å»ºçœä¸‰æ˜Žå¸‚",
        350401: "ç¦å»ºçœä¸‰æ˜Žå¸‚å¸‚è¾–åŒº",
        350402: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ¢…åˆ—åŒº",
        350403: "ç¦å»ºçœä¸‰æ˜Žå¸‚ä¸‰å…ƒåŒº",
        350421: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ˜ŽæºªåŽ¿",
        350423: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ¸…æµåŽ¿",
        350424: "ç¦å»ºçœä¸‰æ˜Žå¸‚å®åŒ–åŽ¿",
        350425: "ç¦å»ºçœä¸‰æ˜Žå¸‚å¤§ç”°åŽ¿",
        350426: "ç¦å»ºçœä¸‰æ˜Žå¸‚å°¤æºªåŽ¿",
        350427: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ²™åŽ¿",
        350428: "ç¦å»ºçœä¸‰æ˜Žå¸‚å°†ä¹åŽ¿",
        350429: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ³°å®åŽ¿",
        350430: "ç¦å»ºçœä¸‰æ˜Žå¸‚å»ºå®åŽ¿",
        350481: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ°¸å®‰å¸‚",
        350500: "ç¦å»ºçœæ³‰å·žå¸‚",
        350501: "ç¦å»ºçœæ³‰å·žå¸‚å¸‚è¾–åŒº",
        350502: "ç¦å»ºçœæ³‰å·žå¸‚é²¤åŸŽåŒº",
        350503: "ç¦å»ºçœæ³‰å·žå¸‚ä¸°æ³½åŒº",
        350504: "ç¦å»ºçœæ³‰å·žå¸‚æ´›æ±ŸåŒº",
        350521: "ç¦å»ºçœæ³‰å·žå¸‚æƒ å®‰åŽ¿",
        350524: "ç¦å»ºçœæ³‰å·žå¸‚å®‰æºªåŽ¿",
        350525: "ç¦å»ºçœæ³‰å·žå¸‚æ°¸æ˜¥åŽ¿",
        350526: "ç¦å»ºçœæ³‰å·žå¸‚å¾·åŒ–åŽ¿",
        350527: "ç¦å»ºçœæ³‰å·žå¸‚é‡‘é—¨åŽ¿",
        350581: "ç¦å»ºçœæ³‰å·žå¸‚çŸ³ç‹®å¸‚",
        350582: "ç¦å»ºçœæ³‰å·žå¸‚æ™‹æ±Ÿå¸‚",
        350583: "ç¦å»ºçœæ³‰å·žå¸‚å—å®‰å¸‚",
        350600: "ç¦å»ºçœæ¼³å·žå¸‚",
        350601: "ç¦å»ºçœæ¼³å·žå¸‚å¸‚è¾–åŒº",
        350602: "ç¦å»ºçœæ¼³å·žå¸‚èŠ—åŸŽåŒº",
        350603: "ç¦å»ºçœæ¼³å·žå¸‚é¾™æ–‡åŒº",
        350622: "ç¦å»ºçœæ¼³å·žå¸‚äº‘éœ„åŽ¿",
        350623: "ç¦å»ºçœæ¼³å·žå¸‚æ¼³æµ¦åŽ¿",
        350624: "ç¦å»ºçœæ¼³å·žå¸‚è¯å®‰åŽ¿",
        350625: "ç¦å»ºçœæ¼³å·žå¸‚é•¿æ³°åŽ¿",
        350626: "ç¦å»ºçœæ¼³å·žå¸‚ä¸œå±±åŽ¿",
        350627: "ç¦å»ºçœæ¼³å·žå¸‚å—é–åŽ¿",
        350628: "ç¦å»ºçœæ¼³å·žå¸‚å¹³å’ŒåŽ¿",
        350629: "ç¦å»ºçœæ¼³å·žå¸‚åŽå®‰åŽ¿",
        350681: "ç¦å»ºçœæ¼³å·žå¸‚é¾™æµ·å¸‚",
        350700: "ç¦å»ºçœå—å¹³å¸‚",
        350701: "ç¦å»ºçœå—å¹³å¸‚å¸‚è¾–åŒº",
        350702: "ç¦å»ºçœå—å¹³å¸‚å»¶å¹³åŒº",
        350721: "ç¦å»ºçœå—å¹³å¸‚é¡ºæ˜ŒåŽ¿",
        350722: "ç¦å»ºçœå—å¹³å¸‚æµ¦åŸŽåŽ¿",
        350723: "ç¦å»ºçœå—å¹³å¸‚å…‰æ³½åŽ¿",
        350724: "ç¦å»ºçœå—å¹³å¸‚æ¾æºªåŽ¿",
        350725: "ç¦å»ºçœå—å¹³å¸‚æ”¿å’ŒåŽ¿",
        350781: "ç¦å»ºçœå—å¹³å¸‚é‚µæ­¦å¸‚",
        350782: "ç¦å»ºçœå—å¹³å¸‚æ­¦å¤·å±±å¸‚",
        350783: "ç¦å»ºçœå—å¹³å¸‚å»ºç“¯å¸‚",
        350784: "ç¦å»ºçœå—å¹³å¸‚å»ºé˜³å¸‚",
        350800: "ç¦å»ºçœé¾™å²©å¸‚",
        350801: "ç¦å»ºçœé¾™å²©å¸‚å¸‚è¾–åŒº",
        350802: "ç¦å»ºçœé¾™å²©å¸‚æ–°ç½—åŒº",
        350821: "ç¦å»ºçœé¾™å²©å¸‚é•¿æ±€åŽ¿",
        350822: "ç¦å»ºçœé¾™å²©å¸‚æ°¸å®šåŽ¿",
        350823: "ç¦å»ºçœé¾™å²©å¸‚ä¸Šæ­åŽ¿",
        350824: "ç¦å»ºçœé¾™å²©å¸‚æ­¦å¹³åŽ¿",
        350825: "ç¦å»ºçœé¾™å²©å¸‚è¿žåŸŽåŽ¿",
        350881: "ç¦å»ºçœé¾™å²©å¸‚æ¼³å¹³å¸‚",
        352200: "ç¦å»ºçœå®å¾·åœ°åŒº",
        352201: "ç¦å»ºçœå®å¾·åœ°åŒºå®å¾·å¸‚",
        352202: "ç¦å»ºçœå®å¾·åœ°åŒºç¦å®‰å¸‚",
        352203: "ç¦å»ºçœå®å¾·åœ°åŒºç¦é¼Žå¸‚",
        352225: "ç¦å»ºçœå®å¾·åœ°åŒºéœžæµ¦åŽ¿",
        352227: "ç¦å»ºçœå®å¾·åœ°åŒºå¤ç”°åŽ¿",
        352228: "ç¦å»ºçœå®å¾·åœ°åŒºå±å—åŽ¿",
        352229: "ç¦å»ºçœå®å¾·åœ°åŒºå¯¿å®åŽ¿",
        352230: "ç¦å»ºçœå®å¾·åœ°åŒºå‘¨å®åŽ¿",
        352231: "ç¦å»ºçœå®å¾·åœ°åŒºæŸ˜è£åŽ¿",
        36e4: "æ±Ÿè¥¿çœ",
        360100: "æ±Ÿè¥¿çœå—æ˜Œå¸‚",
        360101: "æ±Ÿè¥¿çœå—æ˜Œå¸‚å¸‚è¾–åŒº",
        360102: "æ±Ÿè¥¿çœå—æ˜Œå¸‚ä¸œæ¹–åŒº",
        360103: "æ±Ÿè¥¿çœå—æ˜Œå¸‚è¥¿æ¹–åŒº",
        360104: "æ±Ÿè¥¿çœå—æ˜Œå¸‚é’äº‘è°±åŒº",
        360105: "æ±Ÿè¥¿çœå—æ˜Œå¸‚æ¹¾é‡ŒåŒº",
        360111: "æ±Ÿè¥¿çœå—æ˜Œå¸‚éƒŠåŒº",
        360121: "æ±Ÿè¥¿çœå—æ˜Œå¸‚å—æ˜ŒåŽ¿",
        360122: "æ±Ÿè¥¿çœå—æ˜Œå¸‚æ–°å»ºåŽ¿",
        360123: "æ±Ÿè¥¿çœå—æ˜Œå¸‚å®‰ä¹‰åŽ¿",
        360124: "æ±Ÿè¥¿çœå—æ˜Œå¸‚è¿›è´¤åŽ¿",
        360200: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚",
        360201: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚å¸‚è¾–åŒº",
        360202: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚æ˜Œæ±ŸåŒº",
        360203: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚ç å±±åŒº",
        360222: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚æµ®æ¢åŽ¿",
        360281: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚ä¹å¹³å¸‚",
        360300: "æ±Ÿè¥¿çœèä¹¡å¸‚",
        360301: "æ±Ÿè¥¿çœèä¹¡å¸‚å¸‚è¾–åŒº",
        360302: "æ±Ÿè¥¿çœèä¹¡å¸‚å®‰æºåŒº",
        360313: "æ±Ÿè¥¿çœèä¹¡å¸‚æ¹˜ä¸œåŒº",
        360321: "æ±Ÿè¥¿çœèä¹¡å¸‚èŽ²èŠ±åŽ¿",
        360322: "æ±Ÿè¥¿çœèä¹¡å¸‚ä¸Šæ —åŽ¿",
        360323: "æ±Ÿè¥¿çœèä¹¡å¸‚èŠ¦æºªåŽ¿",
        360400: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚",
        360401: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚å¸‚è¾–åŒº",
        360402: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚åºå±±åŒº",
        360403: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æµ”é˜³åŒº",
        360421: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚ä¹æ±ŸåŽ¿",
        360423: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æ­¦å®åŽ¿",
        360424: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚ä¿®æ°´åŽ¿",
        360425: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æ°¸ä¿®åŽ¿",
        360426: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚å¾·å®‰åŽ¿",
        360427: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æ˜Ÿå­åŽ¿",
        360428: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚éƒ½æ˜ŒåŽ¿",
        360429: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æ¹–å£åŽ¿",
        360430: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚å½­æ³½åŽ¿",
        360481: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚ç‘žæ˜Œå¸‚",
        360500: "æ±Ÿè¥¿çœæ–°ä½™å¸‚",
        360501: "æ±Ÿè¥¿çœæ–°ä½™å¸‚å¸‚è¾–åŒº",
        360502: "æ±Ÿè¥¿çœæ–°ä½™å¸‚æ¸æ°´åŒº",
        360521: "æ±Ÿè¥¿çœæ–°ä½™å¸‚åˆ†å®œåŽ¿",
        360600: "æ±Ÿè¥¿çœé¹°æ½­å¸‚",
        360601: "æ±Ÿè¥¿çœé¹°æ½­å¸‚å¸‚è¾–åŒº",
        360602: "æ±Ÿè¥¿çœé¹°æ½­å¸‚æœˆæ¹–åŒº",
        360622: "æ±Ÿè¥¿çœé¹°æ½­å¸‚ä½™æ±ŸåŽ¿",
        360681: "æ±Ÿè¥¿çœé¹°æ½­å¸‚è´µæºªå¸‚",
        360700: "æ±Ÿè¥¿çœèµ£å·žå¸‚",
        360701: "æ±Ÿè¥¿çœèµ£å·žå¸‚å¸‚è¾–åŒº",
        360702: "æ±Ÿè¥¿çœèµ£å·žå¸‚ç« è´¡åŒº",
        360721: "æ±Ÿè¥¿çœèµ£å·žå¸‚èµ£åŽ¿",
        360722: "æ±Ÿè¥¿çœèµ£å·žå¸‚ä¿¡ä¸°åŽ¿",
        360723: "æ±Ÿè¥¿çœèµ£å·žå¸‚å¤§ä½™åŽ¿",
        360724: "æ±Ÿè¥¿çœèµ£å·žå¸‚ä¸ŠçŠ¹åŽ¿",
        360725: "æ±Ÿè¥¿çœèµ£å·žå¸‚å´‡ä¹‰åŽ¿",
        360726: "æ±Ÿè¥¿çœèµ£å·žå¸‚å®‰è¿œåŽ¿",
        360727: "æ±Ÿè¥¿çœèµ£å·žå¸‚é¾™å—åŽ¿",
        360728: "æ±Ÿè¥¿çœèµ£å·žå¸‚å®šå—åŽ¿",
        360729: "æ±Ÿè¥¿çœèµ£å·žå¸‚å…¨å—åŽ¿",
        360730: "æ±Ÿè¥¿çœèµ£å·žå¸‚å®éƒ½åŽ¿",
        360731: "æ±Ÿè¥¿çœèµ£å·žå¸‚äºŽéƒ½åŽ¿",
        360732: "æ±Ÿè¥¿çœèµ£å·žå¸‚å…´å›½åŽ¿",
        360733: "æ±Ÿè¥¿çœèµ£å·žå¸‚ä¼šæ˜ŒåŽ¿",
        360734: "æ±Ÿè¥¿çœèµ£å·žå¸‚å¯»ä¹ŒåŽ¿",
        360735: "æ±Ÿè¥¿çœèµ£å·žå¸‚çŸ³åŸŽåŽ¿",
        360781: "æ±Ÿè¥¿çœèµ£å·žå¸‚ç‘žé‡‘å¸‚",
        360782: "æ±Ÿè¥¿çœèµ£å·žå¸‚å—åº·å¸‚",
        362200: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒº",
        362201: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºå®œæ˜¥å¸‚",
        362202: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºä¸°åŸŽå¸‚",
        362203: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºæ¨Ÿæ ‘å¸‚",
        362204: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºé«˜å®‰å¸‚",
        362226: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºå¥‰æ–°åŽ¿",
        362227: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºä¸‡è½½åŽ¿",
        362228: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºä¸Šé«˜åŽ¿",
        362229: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºå®œä¸°åŽ¿",
        362232: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºé–å®‰åŽ¿",
        362233: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºé“œé¼“åŽ¿",
        362300: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒº",
        362301: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºä¸Šé¥¶å¸‚",
        362302: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºå¾·å…´å¸‚",
        362321: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºä¸Šé¥¶åŽ¿",
        362322: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºå¹¿ä¸°åŽ¿",
        362323: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºçŽ‰å±±åŽ¿",
        362324: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºé“…å±±åŽ¿",
        362325: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºæ¨ªå³°åŽ¿",
        362326: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºå¼‹é˜³åŽ¿",
        362329: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºä½™å¹²åŽ¿",
        362330: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºæ³¢é˜³åŽ¿",
        362331: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºä¸‡å¹´åŽ¿",
        362334: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºå©ºæºåŽ¿",
        362400: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒº",
        362401: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå‰å®‰å¸‚",
        362402: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºäº•å†ˆå±±å¸‚",
        362421: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå‰å®‰åŽ¿",
        362422: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå‰æ°´åŽ¿",
        362423: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå³¡æ±ŸåŽ¿",
        362424: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºæ–°å¹²åŽ¿",
        362425: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºæ°¸ä¸°åŽ¿",
        362426: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºæ³°å’ŒåŽ¿",
        362427: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºé‚å·åŽ¿",
        362428: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºä¸‡å®‰åŽ¿",
        362429: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå®‰ç¦åŽ¿",
        362430: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºæ°¸æ–°åŽ¿",
        362432: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå®å†ˆåŽ¿",
        362500: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒº",
        362502: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºä¸´å·å¸‚",
        362522: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå—åŸŽåŽ¿",
        362523: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºé»Žå·åŽ¿",
        362524: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå—ä¸°åŽ¿",
        362525: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå´‡ä»åŽ¿",
        362526: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºä¹å®‰åŽ¿",
        362527: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå®œé»„åŽ¿",
        362528: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºé‡‘æºªåŽ¿",
        362529: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºèµ„æºªåŽ¿",
        362531: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºä¸œä¹¡åŽ¿",
        362532: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå¹¿æ˜ŒåŽ¿",
        37e4: "å±±ä¸œçœ",
        370100: "å±±ä¸œçœæµŽå—å¸‚",
        370101: "å±±ä¸œçœæµŽå—å¸‚å¸‚è¾–åŒº",
        370102: "å±±ä¸œçœæµŽå—å¸‚åŽ†ä¸‹åŒº",
        370103: "å±±ä¸œçœæµŽå—å¸‚å¸‚ä¸­åŒº",
        370104: "å±±ä¸œçœæµŽå—å¸‚æ§è«åŒº",
        370105: "å±±ä¸œçœæµŽå—å¸‚å¤©æ¡¥åŒº",
        370112: "å±±ä¸œçœæµŽå—å¸‚åŽ†åŸŽåŒº",
        370123: "å±±ä¸œçœæµŽå—å¸‚é•¿æ¸…åŽ¿",
        370124: "å±±ä¸œçœæµŽå—å¸‚å¹³é˜´åŽ¿",
        370125: "å±±ä¸œçœæµŽå—å¸‚æµŽé˜³åŽ¿",
        370126: "å±±ä¸œçœæµŽå—å¸‚å•†æ²³åŽ¿",
        370181: "å±±ä¸œçœæµŽå—å¸‚ç« ä¸˜å¸‚",
        370200: "å±±ä¸œçœé’å²›å¸‚",
        370201: "å±±ä¸œçœé’å²›å¸‚å¸‚è¾–åŒº",
        370202: "å±±ä¸œçœé’å²›å¸‚å¸‚å—åŒº",
        370203: "å±±ä¸œçœé’å²›å¸‚å¸‚åŒ—åŒº",
        370205: "å±±ä¸œçœé’å²›å¸‚å››æ–¹åŒº",
        370211: "å±±ä¸œçœé’å²›å¸‚é»„å²›åŒº",
        370212: "å±±ä¸œçœé’å²›å¸‚å´‚å±±åŒº",
        370213: "å±±ä¸œçœé’å²›å¸‚æŽæ²§åŒº",
        370214: "å±±ä¸œçœé’å²›å¸‚åŸŽé˜³åŒº",
        370281: "å±±ä¸œçœé’å²›å¸‚èƒ¶å·žå¸‚",
        370282: "å±±ä¸œçœé’å²›å¸‚å³å¢¨å¸‚",
        370283: "å±±ä¸œçœé’å²›å¸‚å¹³åº¦å¸‚",
        370284: "å±±ä¸œçœé’å²›å¸‚èƒ¶å—å¸‚",
        370285: "å±±ä¸œçœé’å²›å¸‚èŽ±è¥¿å¸‚",
        370300: "å±±ä¸œçœæ·„åšå¸‚",
        370301: "å±±ä¸œçœæ·„åšå¸‚å¸‚è¾–åŒº",
        370302: "å±±ä¸œçœæ·„åšå¸‚æ·„å·åŒº",
        370303: "å±±ä¸œçœæ·„åšå¸‚å¼ åº—åŒº",
        370304: "å±±ä¸œçœæ·„åšå¸‚åšå±±åŒº",
        370305: "å±±ä¸œçœæ·„åšå¸‚ä¸´æ·„åŒº",
        370306: "å±±ä¸œçœæ·„åšå¸‚å‘¨æ‘åŒº",
        370321: "å±±ä¸œçœæ·„åšå¸‚æ¡“å°åŽ¿",
        370322: "å±±ä¸œçœæ·„åšå¸‚é«˜é’åŽ¿",
        370323: "å±±ä¸œçœæ·„åšå¸‚æ²‚æºåŽ¿",
        370400: "å±±ä¸œçœæž£åº„å¸‚",
        370401: "å±±ä¸œçœæž£åº„å¸‚å¸‚è¾–åŒº",
        370402: "å±±ä¸œçœæž£åº„å¸‚å¸‚ä¸­åŒº",
        370403: "å±±ä¸œçœæž£åº„å¸‚è–›åŸŽåŒº",
        370404: "å±±ä¸œçœæž£åº„å¸‚å³„åŸŽåŒº",
        370405: "å±±ä¸œçœæž£åº„å¸‚å°å„¿åº„åŒº",
        370406: "å±±ä¸œçœæž£åº„å¸‚å±±äº­åŒº",
        370481: "å±±ä¸œçœæž£åº„å¸‚æ»•å·žå¸‚",
        370500: "å±±ä¸œçœä¸œè¥å¸‚",
        370501: "å±±ä¸œçœä¸œè¥å¸‚å¸‚è¾–åŒº",
        370502: "å±±ä¸œçœä¸œè¥å¸‚ä¸œè¥åŒº",
        370503: "å±±ä¸œçœä¸œè¥å¸‚æ²³å£åŒº",
        370521: "å±±ä¸œçœä¸œè¥å¸‚åž¦åˆ©åŽ¿",
        370522: "å±±ä¸œçœä¸œè¥å¸‚åˆ©æ´¥åŽ¿",
        370523: "å±±ä¸œçœä¸œè¥å¸‚å¹¿é¥¶åŽ¿",
        370600: "å±±ä¸œçœçƒŸå°å¸‚",
        370601: "å±±ä¸œçœçƒŸå°å¸‚å¸‚è¾–åŒº",
        370602: "å±±ä¸œçœçƒŸå°å¸‚èŠç½˜åŒº",
        370611: "å±±ä¸œçœçƒŸå°å¸‚ç¦å±±åŒº",
        370612: "å±±ä¸œçœçƒŸå°å¸‚ç‰Ÿå¹³åŒº",
        370613: "å±±ä¸œçœçƒŸå°å¸‚èŽ±å±±åŒº",
        370634: "å±±ä¸œçœçƒŸå°å¸‚é•¿å²›åŽ¿",
        370681: "å±±ä¸œçœçƒŸå°å¸‚é¾™å£å¸‚",
        370682: "å±±ä¸œçœçƒŸå°å¸‚èŽ±é˜³å¸‚",
        370683: "å±±ä¸œçœçƒŸå°å¸‚èŽ±å·žå¸‚",
        370684: "å±±ä¸œçœçƒŸå°å¸‚è“¬èŽ±å¸‚",
        370685: "å±±ä¸œçœçƒŸå°å¸‚æ‹›è¿œå¸‚",
        370686: "å±±ä¸œçœçƒŸå°å¸‚æ –éœžå¸‚",
        370687: "å±±ä¸œçœçƒŸå°å¸‚æµ·é˜³å¸‚",
        370700: "å±±ä¸œçœæ½åŠå¸‚",
        370701: "å±±ä¸œçœæ½åŠå¸‚å¸‚è¾–åŒº",
        370702: "å±±ä¸œçœæ½åŠå¸‚æ½åŸŽåŒº",
        370703: "å±±ä¸œçœæ½åŠå¸‚å¯’äº­åŒº",
        370704: "å±±ä¸œçœæ½åŠå¸‚åŠå­åŒº",
        370705: "å±±ä¸œçœæ½åŠå¸‚å¥Žæ–‡åŒº",
        370724: "å±±ä¸œçœæ½åŠå¸‚ä¸´æœåŽ¿",
        370725: "å±±ä¸œçœæ½åŠå¸‚æ˜Œä¹åŽ¿",
        370781: "å±±ä¸œçœæ½åŠå¸‚é’å·žå¸‚",
        370782: "å±±ä¸œçœæ½åŠå¸‚è¯¸åŸŽå¸‚",
        370783: "å±±ä¸œçœæ½åŠå¸‚å¯¿å…‰å¸‚",
        370784: "å±±ä¸œçœæ½åŠå¸‚å®‰ä¸˜å¸‚",
        370785: "å±±ä¸œçœæ½åŠå¸‚é«˜å¯†å¸‚",
        370786: "å±±ä¸œçœæ½åŠå¸‚æ˜Œé‚‘å¸‚",
        370800: "å±±ä¸œçœæµŽå®å¸‚",
        370801: "å±±ä¸œçœæµŽå®å¸‚å¸‚è¾–åŒº",
        370802: "å±±ä¸œçœæµŽå®å¸‚å¸‚ä¸­åŒº",
        370811: "å±±ä¸œçœæµŽå®å¸‚ä»»åŸŽåŒº",
        370826: "å±±ä¸œçœæµŽå®å¸‚å¾®å±±åŽ¿",
        370827: "å±±ä¸œçœæµŽå®å¸‚é±¼å°åŽ¿",
        370828: "å±±ä¸œçœæµŽå®å¸‚é‡‘ä¹¡åŽ¿",
        370829: "å±±ä¸œçœæµŽå®å¸‚å˜‰ç¥¥åŽ¿",
        370830: "å±±ä¸œçœæµŽå®å¸‚æ±¶ä¸ŠåŽ¿",
        370831: "å±±ä¸œçœæµŽå®å¸‚æ³—æ°´åŽ¿",
        370832: "å±±ä¸œçœæµŽå®å¸‚æ¢å±±åŽ¿",
        370881: "å±±ä¸œçœæµŽå®å¸‚æ›²é˜œå¸‚",
        370882: "å±±ä¸œçœæµŽå®å¸‚å…–å·žå¸‚",
        370883: "å±±ä¸œçœæµŽå®å¸‚é‚¹åŸŽå¸‚",
        370900: "å±±ä¸œçœæ³°å®‰å¸‚",
        370901: "å±±ä¸œçœæ³°å®‰å¸‚å¸‚è¾–åŒº",
        370902: "å±±ä¸œçœæ³°å®‰å¸‚æ³°å±±åŒº",
        370911: "å±±ä¸œçœæ³°å®‰å¸‚éƒŠåŒº",
        370921: "å±±ä¸œçœæ³°å®‰å¸‚å®é˜³åŽ¿",
        370923: "å±±ä¸œçœæ³°å®‰å¸‚ä¸œå¹³åŽ¿",
        370982: "å±±ä¸œçœæ³°å®‰å¸‚æ–°æ³°å¸‚",
        370983: "å±±ä¸œçœæ³°å®‰å¸‚è‚¥åŸŽå¸‚",
        371e3: "å±±ä¸œçœå¨æµ·å¸‚",
        371001: "å±±ä¸œçœå¨æµ·å¸‚å¸‚è¾–åŒº",
        371002: "å±±ä¸œçœå¨æµ·å¸‚çŽ¯ç¿ åŒº",
        371081: "å±±ä¸œçœå¨æµ·å¸‚æ–‡ç™»å¸‚",
        371082: "å±±ä¸œçœå¨æµ·å¸‚è£æˆå¸‚",
        371083: "å±±ä¸œçœå¨æµ·å¸‚ä¹³å±±å¸‚",
        371100: "å±±ä¸œçœæ—¥ç…§å¸‚",
        371101: "å±±ä¸œçœæ—¥ç…§å¸‚å¸‚è¾–åŒº",
        371102: "å±±ä¸œçœæ—¥ç…§å¸‚ä¸œæ¸¯åŒº",
        371121: "å±±ä¸œçœæ—¥ç…§å¸‚äº”èŽ²åŽ¿",
        371122: "å±±ä¸œçœæ—¥ç…§å¸‚èŽ’åŽ¿",
        371200: "å±±ä¸œçœèŽ±èŠœå¸‚",
        371201: "å±±ä¸œçœèŽ±èŠœå¸‚å¸‚è¾–åŒº",
        371202: "å±±ä¸œçœèŽ±èŠœå¸‚èŽ±åŸŽåŒº",
        371203: "å±±ä¸œçœèŽ±èŠœå¸‚é’¢åŸŽåŒº",
        371300: "å±±ä¸œçœä¸´æ²‚å¸‚",
        371301: "å±±ä¸œçœä¸´æ²‚å¸‚å¸‚è¾–åŒº",
        371302: "å±±ä¸œçœä¸´æ²‚å¸‚å…°å±±åŒº",
        371311: "å±±ä¸œçœä¸´æ²‚å¸‚ç½—åº„åŒº",
        371312: "å±±ä¸œçœä¸´æ²‚å¸‚æ²³ä¸œåŒº",
        371321: "å±±ä¸œçœä¸´æ²‚å¸‚æ²‚å—åŽ¿",
        371322: "å±±ä¸œçœä¸´æ²‚å¸‚éƒ¯åŸŽåŽ¿",
        371323: "å±±ä¸œçœä¸´æ²‚å¸‚æ²‚æ°´åŽ¿",
        371324: "å±±ä¸œçœä¸´æ²‚å¸‚è‹å±±åŽ¿",
        371325: "å±±ä¸œçœä¸´æ²‚å¸‚è´¹åŽ¿",
        371326: "å±±ä¸œçœä¸´æ²‚å¸‚å¹³é‚‘åŽ¿",
        371327: "å±±ä¸œçœä¸´æ²‚å¸‚èŽ’å—åŽ¿",
        371328: "å±±ä¸œçœä¸´æ²‚å¸‚è’™é˜´åŽ¿",
        371329: "å±±ä¸œçœä¸´æ²‚å¸‚ä¸´æ²­åŽ¿",
        371400: "å±±ä¸œçœå¾·å·žå¸‚",
        371401: "å±±ä¸œçœå¾·å·žå¸‚å¸‚è¾–åŒº",
        371402: "å±±ä¸œçœå¾·å·žå¸‚å¾·åŸŽåŒº",
        371421: "å±±ä¸œçœå¾·å·žå¸‚é™µåŽ¿",
        371422: "å±±ä¸œçœå¾·å·žå¸‚å®æ´¥åŽ¿",
        371423: "å±±ä¸œçœå¾·å·žå¸‚åº†äº‘åŽ¿",
        371424: "å±±ä¸œçœå¾·å·žå¸‚ä¸´é‚‘åŽ¿",
        371425: "å±±ä¸œçœå¾·å·žå¸‚é½æ²³åŽ¿",
        371426: "å±±ä¸œçœå¾·å·žå¸‚å¹³åŽŸåŽ¿",
        371427: "å±±ä¸œçœå¾·å·žå¸‚å¤æ´¥åŽ¿",
        371428: "å±±ä¸œçœå¾·å·žå¸‚æ­¦åŸŽåŽ¿",
        371481: "å±±ä¸œçœå¾·å·žå¸‚ä¹é™µå¸‚",
        371482: "å±±ä¸œçœå¾·å·žå¸‚ç¦¹åŸŽå¸‚",
        371500: "å±±ä¸œçœèŠåŸŽå¸‚",
        371501: "å±±ä¸œçœèŠåŸŽå¸‚å¸‚è¾–åŒº",
        371502: "å±±ä¸œçœèŠåŸŽå¸‚ä¸œæ˜ŒåºœåŒº",
        371521: "å±±ä¸œçœèŠåŸŽå¸‚é˜³è°·åŽ¿",
        371522: "å±±ä¸œçœèŠåŸŽå¸‚èŽ˜åŽ¿",
        371523: "å±±ä¸œçœèŠåŸŽå¸‚èŒŒå¹³åŽ¿",
        371524: "å±±ä¸œçœèŠåŸŽå¸‚ä¸œé˜¿åŽ¿",
        371525: "å±±ä¸œçœèŠåŸŽå¸‚å† åŽ¿",
        371526: "å±±ä¸œçœèŠåŸŽå¸‚é«˜å”åŽ¿",
        371581: "å±±ä¸œçœèŠåŸŽå¸‚ä¸´æ¸…å¸‚",
        372300: "å±±ä¸œçœæ»¨å·žåœ°åŒº",
        372301: "å±±ä¸œçœæ»¨å·žåœ°åŒºæ»¨å·žå¸‚",
        372321: "å±±ä¸œçœæ»¨å·žåœ°åŒºæƒ æ°‘åŽ¿",
        372323: "å±±ä¸œçœæ»¨å·žåœ°åŒºé˜³ä¿¡åŽ¿",
        372324: "å±±ä¸œçœæ»¨å·žåœ°åŒºæ— æ££åŽ¿",
        372325: "å±±ä¸œçœæ»¨å·žåœ°åŒºæ²¾åŒ–åŽ¿",
        372328: "å±±ä¸œçœæ»¨å·žåœ°åŒºåšå…´åŽ¿",
        372330: "å±±ä¸œçœæ»¨å·žåœ°åŒºé‚¹å¹³åŽ¿",
        372900: "å±±ä¸œçœèæ³½åœ°åŒº",
        372901: "å±±ä¸œçœèæ³½åœ°åŒºèæ³½å¸‚",
        372922: "å±±ä¸œçœèæ³½åœ°åŒºæ›¹åŽ¿",
        372923: "å±±ä¸œçœèæ³½åœ°åŒºå®šé™¶åŽ¿",
        372924: "å±±ä¸œçœèæ³½åœ°åŒºæˆæ­¦åŽ¿",
        372925: "å±±ä¸œçœèæ³½åœ°åŒºå•åŽ¿",
        372926: "å±±ä¸œçœèæ³½åœ°åŒºå·¨é‡ŽåŽ¿",
        372928: "å±±ä¸œçœèæ³½åœ°åŒºéƒ“åŸŽåŽ¿",
        372929: "å±±ä¸œçœèæ³½åœ°åŒºé„„åŸŽåŽ¿",
        372930: "å±±ä¸œçœèæ³½åœ°åŒºä¸œæ˜ŽåŽ¿",
        41e4: "æ²³å—çœ",
        410100: "æ²³å—çœéƒ‘å·žå¸‚",
        410101: "æ²³å—çœéƒ‘å·žå¸‚å¸‚è¾–åŒº",
        410102: "æ²³å—çœéƒ‘å·žå¸‚ä¸­åŽŸåŒº",
        410103: "æ²³å—çœéƒ‘å·žå¸‚äºŒä¸ƒåŒº",
        410104: "æ²³å—çœéƒ‘å·žå¸‚ç®¡åŸŽå›žæ—åŒº",
        410105: "æ²³å—çœéƒ‘å·žå¸‚é‡‘æ°´åŒº",
        410106: "æ²³å—çœéƒ‘å·žå¸‚ä¸Šè¡—åŒº",
        410108: "æ²³å—çœéƒ‘å·žå¸‚é‚™å±±åŒº",
        410122: "æ²³å—çœéƒ‘å·žå¸‚ä¸­ç‰ŸåŽ¿",
        410181: "æ²³å—çœéƒ‘å·žå¸‚å·©ä¹‰å¸‚",
        410182: "æ²³å—çœéƒ‘å·žå¸‚è¥é˜³å¸‚",
        410183: "æ²³å—çœéƒ‘å·žå¸‚æ–°å¯†å¸‚",
        410184: "æ²³å—çœéƒ‘å·žå¸‚æ–°éƒ‘å¸‚",
        410185: "æ²³å—çœéƒ‘å·žå¸‚ç™»å°å¸‚",
        410200: "æ²³å—çœå¼€å°å¸‚",
        410201: "æ²³å—çœå¼€å°å¸‚å¸‚è¾–åŒº",
        410202: "æ²³å—çœå¼€å°å¸‚é¾™äº­åŒº",
        410203: "æ²³å—çœå¼€å°å¸‚é¡ºæ²³å›žæ—åŒº",
        410204: "æ²³å—çœå¼€å°å¸‚é¼“æ¥¼åŒº",
        410205: "æ²³å—çœå¼€å°å¸‚å—å…³åŒº",
        410211: "æ²³å—çœå¼€å°å¸‚éƒŠåŒº",
        410221: "æ²³å—çœå¼€å°å¸‚æžåŽ¿",
        410222: "æ²³å—çœå¼€å°å¸‚é€šè®¸åŽ¿",
        410223: "æ²³å—çœå¼€å°å¸‚å°‰æ°åŽ¿",
        410224: "æ²³å—çœå¼€å°å¸‚å¼€å°åŽ¿",
        410225: "æ²³å—çœå¼€å°å¸‚å…°è€ƒåŽ¿",
        410300: "æ²³å—çœæ´›é˜³å¸‚",
        410301: "æ²³å—çœæ´›é˜³å¸‚å¸‚è¾–åŒº",
        410302: "æ²³å—çœæ´›é˜³å¸‚è€åŸŽåŒº",
        410303: "æ²³å—çœæ´›é˜³å¸‚è¥¿å·¥åŒº",
        410304: "æ²³å—çœæ´›é˜³å¸‚å»›æ²³å›žæ—åŒº",
        410305: "æ²³å—çœæ´›é˜³å¸‚æ¶§è¥¿åŒº",
        410306: "æ²³å—çœæ´›é˜³å¸‚å‰åˆ©åŒº",
        410311: "æ²³å—çœæ´›é˜³å¸‚éƒŠåŒº",
        410322: "æ²³å—çœæ´›é˜³å¸‚å­Ÿæ´¥åŽ¿",
        410323: "æ²³å—çœæ´›é˜³å¸‚æ–°å®‰åŽ¿",
        410324: "æ²³å—çœæ´›é˜³å¸‚æ ¾å·åŽ¿",
        410325: "æ²³å—çœæ´›é˜³å¸‚åµ©åŽ¿",
        410326: "æ²³å—çœæ´›é˜³å¸‚æ±é˜³åŽ¿",
        410327: "æ²³å—çœæ´›é˜³å¸‚å®œé˜³åŽ¿",
        410328: "æ²³å—çœæ´›é˜³å¸‚æ´›å®åŽ¿",
        410329: "æ²³å—çœæ´›é˜³å¸‚ä¼Šå·åŽ¿",
        410381: "æ²³å—çœæ´›é˜³å¸‚åƒå¸ˆå¸‚",
        410400: "æ²³å—çœå¹³é¡¶å±±å¸‚",
        410401: "æ²³å—çœå¹³é¡¶å±±å¸‚å¸‚è¾–åŒº",
        410402: "æ²³å—çœå¹³é¡¶å±±å¸‚æ–°åŽåŒº",
        410403: "æ²³å—çœå¹³é¡¶å±±å¸‚å«ä¸œåŒº",
        410404: "æ²³å—çœå¹³é¡¶å±±å¸‚çŸ³é¾™åŒº",
        410411: "æ²³å—çœå¹³é¡¶å±±å¸‚æ¹›æ²³åŒº",
        410421: "æ²³å—çœå¹³é¡¶å±±å¸‚å®ä¸°åŽ¿",
        410422: "æ²³å—çœå¹³é¡¶å±±å¸‚å¶åŽ¿",
        410423: "æ²³å—çœå¹³é¡¶å±±å¸‚é²å±±åŽ¿",
        410425: "æ²³å—çœå¹³é¡¶å±±å¸‚éƒåŽ¿",
        410481: "æ²³å—çœå¹³é¡¶å±±å¸‚èˆžé’¢å¸‚",
        410482: "æ²³å—çœå¹³é¡¶å±±å¸‚æ±å·žå¸‚",
        410500: "æ²³å—çœå®‰é˜³å¸‚",
        410501: "æ²³å—çœå®‰é˜³å¸‚å¸‚è¾–åŒº",
        410502: "æ²³å—çœå®‰é˜³å¸‚æ–‡å³°åŒº",
        410503: "æ²³å—çœå®‰é˜³å¸‚åŒ—å…³åŒº",
        410504: "æ²³å—çœå®‰é˜³å¸‚é“è¥¿åŒº",
        410511: "æ²³å—çœå®‰é˜³å¸‚éƒŠåŒº",
        410522: "æ²³å—çœå®‰é˜³å¸‚å®‰é˜³åŽ¿",
        410523: "æ²³å—çœå®‰é˜³å¸‚æ±¤é˜´åŽ¿",
        410526: "æ²³å—çœå®‰é˜³å¸‚æ»‘åŽ¿",
        410527: "æ²³å—çœå®‰é˜³å¸‚å†…é»„åŽ¿",
        410581: "æ²³å—çœå®‰é˜³å¸‚æž—å·žå¸‚",
        410600: "æ²³å—çœé¹¤å£å¸‚",
        410601: "æ²³å—çœé¹¤å£å¸‚å¸‚è¾–åŒº",
        410602: "æ²³å—çœé¹¤å£å¸‚é¹¤å±±åŒº",
        410603: "æ²³å—çœé¹¤å£å¸‚å±±åŸŽåŒº",
        410611: "æ²³å—çœé¹¤å£å¸‚éƒŠåŒº",
        410621: "æ²³å—çœé¹¤å£å¸‚æµšåŽ¿",
        410622: "æ²³å—çœé¹¤å£å¸‚æ·‡åŽ¿",
        410700: "æ²³å—çœæ–°ä¹¡å¸‚",
        410701: "æ²³å—çœæ–°ä¹¡å¸‚å¸‚è¾–åŒº",
        410702: "æ²³å—çœæ–°ä¹¡å¸‚çº¢æ——åŒº",
        410703: "æ²³å—çœæ–°ä¹¡å¸‚æ–°åŽåŒº",
        410704: "æ²³å—çœæ–°ä¹¡å¸‚åŒ—ç«™åŒº",
        410711: "æ²³å—çœæ–°ä¹¡å¸‚éƒŠåŒº",
        410721: "æ²³å—çœæ–°ä¹¡å¸‚æ–°ä¹¡åŽ¿",
        410724: "æ²³å—çœæ–°ä¹¡å¸‚èŽ·å˜‰åŽ¿",
        410725: "æ²³å—çœæ–°ä¹¡å¸‚åŽŸé˜³åŽ¿",
        410726: "æ²³å—çœæ–°ä¹¡å¸‚å»¶æ´¥åŽ¿",
        410727: "æ²³å—çœæ–°ä¹¡å¸‚å°ä¸˜åŽ¿",
        410728: "æ²³å—çœæ–°ä¹¡å¸‚é•¿åž£åŽ¿",
        410781: "æ²³å—çœæ–°ä¹¡å¸‚å«è¾‰å¸‚",
        410782: "æ²³å—çœæ–°ä¹¡å¸‚è¾‰åŽ¿å¸‚",
        410800: "æ²³å—çœç„¦ä½œå¸‚",
        410801: "æ²³å—çœç„¦ä½œå¸‚å¸‚è¾–åŒº",
        410802: "æ²³å—çœç„¦ä½œå¸‚è§£æ”¾åŒº",
        410803: "æ²³å—çœç„¦ä½œå¸‚ä¸­ç«™åŒº",
        410804: "æ²³å—çœç„¦ä½œå¸‚é©¬æ‘åŒº",
        410811: "æ²³å—çœç„¦ä½œå¸‚å±±é˜³åŒº",
        410821: "æ²³å—çœç„¦ä½œå¸‚ä¿®æ­¦åŽ¿",
        410822: "æ²³å—çœç„¦ä½œå¸‚åšçˆ±åŽ¿",
        410823: "æ²³å—çœç„¦ä½œå¸‚æ­¦é™ŸåŽ¿",
        410825: "æ²³å—çœç„¦ä½œå¸‚æ¸©åŽ¿",
        410881: "æ²³å—çœç„¦ä½œå¸‚æµŽæºå¸‚",
        410882: "æ²³å—çœç„¦ä½œå¸‚æ²é˜³å¸‚",
        410883: "æ²³å—çœç„¦ä½œå¸‚å­Ÿå·žå¸‚",
        410900: "æ²³å—çœæ¿®é˜³å¸‚",
        410901: "æ²³å—çœæ¿®é˜³å¸‚å¸‚è¾–åŒº",
        410902: "æ²³å—çœæ¿®é˜³å¸‚å¸‚åŒº",
        410922: "æ²³å—çœæ¿®é˜³å¸‚æ¸…ä¸°åŽ¿",
        410923: "æ²³å—çœæ¿®é˜³å¸‚å—ä¹åŽ¿",
        410926: "æ²³å—çœæ¿®é˜³å¸‚èŒƒåŽ¿",
        410927: "æ²³å—çœæ¿®é˜³å¸‚å°å‰åŽ¿",
        410928: "æ²³å—çœæ¿®é˜³å¸‚æ¿®é˜³åŽ¿",
        411e3: "æ²³å—çœè®¸æ˜Œå¸‚",
        411001: "æ²³å—çœè®¸æ˜Œå¸‚å¸‚è¾–åŒº",
        411002: "æ²³å—çœè®¸æ˜Œå¸‚é­éƒ½åŒº",
        411023: "æ²³å—çœè®¸æ˜Œå¸‚è®¸æ˜ŒåŽ¿",
        411024: "æ²³å—çœè®¸æ˜Œå¸‚é„¢é™µåŽ¿",
        411025: "æ²³å—çœè®¸æ˜Œå¸‚è¥„åŸŽåŽ¿",
        411081: "æ²³å—çœè®¸æ˜Œå¸‚ç¦¹å·žå¸‚",
        411082: "æ²³å—çœè®¸æ˜Œå¸‚é•¿è‘›å¸‚",
        411100: "æ²³å—çœæ¼¯æ²³å¸‚",
        411101: "æ²³å—çœæ¼¯æ²³å¸‚å¸‚è¾–åŒº",
        411102: "æ²³å—çœæ¼¯æ²³å¸‚æºæ±‡åŒº",
        411121: "æ²³å—çœæ¼¯æ²³å¸‚èˆžé˜³åŽ¿",
        411122: "æ²³å—çœæ¼¯æ²³å¸‚ä¸´é¢åŽ¿",
        411123: "æ²³å—çœæ¼¯æ²³å¸‚éƒ¾åŸŽåŽ¿",
        411200: "æ²³å—çœä¸‰é—¨å³¡å¸‚",
        411201: "æ²³å—çœä¸‰é—¨å³¡å¸‚å¸‚è¾–åŒº",
        411202: "æ²³å—çœä¸‰é—¨å³¡å¸‚æ¹–æ»¨åŒº",
        411221: "æ²³å—çœä¸‰é—¨å³¡å¸‚æ¸‘æ± åŽ¿",
        411222: "æ²³å—çœä¸‰é—¨å³¡å¸‚é™•åŽ¿",
        411224: "æ²³å—çœä¸‰é—¨å³¡å¸‚å¢æ°åŽ¿",
        411281: "æ²³å—çœä¸‰é—¨å³¡å¸‚ä¹‰é©¬å¸‚",
        411282: "æ²³å—çœä¸‰é—¨å³¡å¸‚çµå®å¸‚",
        411300: "æ²³å—çœå—é˜³å¸‚",
        411301: "æ²³å—çœå—é˜³å¸‚å¸‚è¾–åŒº",
        411302: "æ²³å—çœå—é˜³å¸‚å®›åŸŽåŒº",
        411303: "æ²³å—çœå—é˜³å¸‚å§é¾™åŒº",
        411321: "æ²³å—çœå—é˜³å¸‚å—å¬åŽ¿",
        411322: "æ²³å—çœå—é˜³å¸‚æ–¹åŸŽåŽ¿",
        411323: "æ²³å—çœå—é˜³å¸‚è¥¿å³¡åŽ¿",
        411324: "æ²³å—çœå—é˜³å¸‚é•‡å¹³åŽ¿",
        411325: "æ²³å—çœå—é˜³å¸‚å†…ä¹¡åŽ¿",
        411326: "æ²³å—çœå—é˜³å¸‚æ·…å·åŽ¿",
        411327: "æ²³å—çœå—é˜³å¸‚ç¤¾æ——åŽ¿",
        411328: "æ²³å—çœå—é˜³å¸‚å”æ²³åŽ¿",
        411329: "æ²³å—çœå—é˜³å¸‚æ–°é‡ŽåŽ¿",
        411330: "æ²³å—çœå—é˜³å¸‚æ¡æŸåŽ¿",
        411381: "æ²³å—çœå—é˜³å¸‚é‚“å·žå¸‚",
        411400: "æ²³å—çœå•†ä¸˜å¸‚",
        411401: "æ²³å—çœå•†ä¸˜å¸‚å¸‚è¾–åŒº",
        411402: "æ²³å—çœå•†ä¸˜å¸‚æ¢å›­åŒº",
        411403: "æ²³å—çœå•†ä¸˜å¸‚ç¢é˜³åŒº",
        411421: "æ²³å—çœå•†ä¸˜å¸‚æ°‘æƒåŽ¿",
        411422: "æ²³å—çœå•†ä¸˜å¸‚ç¢åŽ¿",
        411423: "æ²³å—çœå•†ä¸˜å¸‚å®é™µåŽ¿",
        411424: "æ²³å—çœå•†ä¸˜å¸‚æŸ˜åŸŽåŽ¿",
        411425: "æ²³å—çœå•†ä¸˜å¸‚è™žåŸŽåŽ¿",
        411426: "æ²³å—çœå•†ä¸˜å¸‚å¤é‚‘åŽ¿",
        411481: "æ²³å—çœå•†ä¸˜å¸‚æ°¸åŸŽå¸‚",
        411500: "æ²³å—çœä¿¡é˜³å¸‚",
        411501: "æ²³å—çœä¿¡é˜³å¸‚å¸‚è¾–åŒº",
        411502: "æ²³å—çœä¿¡é˜³å¸‚å¸ˆæ²³åŒº",
        411503: "æ²³å—çœä¿¡é˜³å¸‚å¹³æ¡¥åŒº",
        411521: "æ²³å—çœä¿¡é˜³å¸‚ç½—å±±åŽ¿",
        411522: "æ²³å—çœä¿¡é˜³å¸‚å…‰å±±åŽ¿",
        411523: "æ²³å—çœä¿¡é˜³å¸‚æ–°åŽ¿",
        411524: "æ²³å—çœä¿¡é˜³å¸‚å•†åŸŽåŽ¿",
        411525: "æ²³å—çœä¿¡é˜³å¸‚å›ºå§‹åŽ¿",
        411526: "æ²³å—çœä¿¡é˜³å¸‚æ½¢å·åŽ¿",
        411527: "æ²³å—çœä¿¡é˜³å¸‚æ·®æ»¨åŽ¿",
        411528: "æ²³å—çœä¿¡é˜³å¸‚æ¯åŽ¿",
        412700: "æ²³å—çœå‘¨å£åœ°åŒº",
        412701: "æ²³å—çœå‘¨å£åœ°åŒºå‘¨å£å¸‚",
        412702: "æ²³å—çœå‘¨å£åœ°åŒºé¡¹åŸŽå¸‚",
        412721: "æ²³å—çœå‘¨å£åœ°åŒºæ‰¶æ²ŸåŽ¿",
        412722: "æ²³å—çœå‘¨å£åœ°åŒºè¥¿åŽåŽ¿",
        412723: "æ²³å—çœå‘¨å£åœ°åŒºå•†æ°´åŽ¿",
        412724: "æ²³å—çœå‘¨å£åœ°åŒºå¤ªåº·åŽ¿",
        412725: "æ²³å—çœå‘¨å£åœ°åŒºé¹¿é‚‘åŽ¿",
        412726: "æ²³å—çœå‘¨å£åœ°åŒºéƒ¸åŸŽåŽ¿",
        412727: "æ²³å—çœå‘¨å£åœ°åŒºæ·®é˜³åŽ¿",
        412728: "æ²³å—çœå‘¨å£åœ°åŒºæ²ˆä¸˜åŽ¿",
        412800: "æ²³å—çœé©»é©¬åº—åœ°åŒº",
        412801: "æ²³å—çœé©»é©¬åº—åœ°åŒºé©»é©¬åº—å¸‚",
        412821: "æ²³å—çœé©»é©¬åº—åœ°åŒºç¡®å±±åŽ¿",
        412822: "æ²³å—çœé©»é©¬åº—åœ°åŒºæ³Œé˜³åŽ¿",
        412823: "æ²³å—çœé©»é©¬åº—åœ°åŒºé‚å¹³åŽ¿",
        412824: "æ²³å—çœé©»é©¬åº—åœ°åŒºè¥¿å¹³åŽ¿",
        412825: "æ²³å—çœé©»é©¬åº—åœ°åŒºä¸Šè”¡åŽ¿",
        412826: "æ²³å—çœé©»é©¬åº—åœ°åŒºæ±å—åŽ¿",
        412827: "æ²³å—çœé©»é©¬åº—åœ°åŒºå¹³èˆ†åŽ¿",
        412828: "æ²³å—çœé©»é©¬åº—åœ°åŒºæ–°è”¡åŽ¿",
        412829: "æ²³å—çœé©»é©¬åº—åœ°åŒºæ­£é˜³åŽ¿",
        42e4: "æ¹–åŒ—çœ",
        420100: "æ¹–åŒ—çœæ­¦æ±‰å¸‚",
        420101: "æ¹–åŒ—çœæ­¦æ±‰å¸‚å¸‚è¾–åŒº",
        420102: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±Ÿå²¸åŒº",
        420103: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±Ÿæ±‰åŒº",
        420104: "æ¹–åŒ—çœæ­¦æ±‰å¸‚ä¹”å£åŒº",
        420105: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±‰é˜³åŒº",
        420106: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ­¦æ˜ŒåŒº",
        420107: "æ¹–åŒ—çœæ­¦æ±‰å¸‚é’å±±åŒº",
        420111: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ´ªå±±åŒº",
        420112: "æ¹–åŒ—çœæ­¦æ±‰å¸‚ä¸œè¥¿æ¹–åŒº",
        420113: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±‰å—åŒº",
        420114: "æ¹–åŒ—çœæ­¦æ±‰å¸‚è”¡ç”¸åŒº",
        420115: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±Ÿå¤åŒº",
        420116: "æ¹–åŒ—çœæ­¦æ±‰å¸‚é»„é™‚åŒº",
        420117: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ–°æ´²åŒº",
        420200: "æ¹–åŒ—çœé»„çŸ³å¸‚",
        420201: "æ¹–åŒ—çœé»„çŸ³å¸‚å¸‚è¾–åŒº",
        420202: "æ¹–åŒ—çœé»„çŸ³å¸‚é»„çŸ³æ¸¯åŒº",
        420203: "æ¹–åŒ—çœé»„çŸ³å¸‚çŸ³ç°çª‘åŒº",
        420204: "æ¹–åŒ—çœé»„çŸ³å¸‚ä¸‹é™†åŒº",
        420205: "æ¹–åŒ—çœé»„çŸ³å¸‚é“å±±åŒº",
        420222: "æ¹–åŒ—çœé»„çŸ³å¸‚é˜³æ–°åŽ¿",
        420281: "æ¹–åŒ—çœé»„çŸ³å¸‚å¤§å†¶å¸‚",
        420300: "æ¹–åŒ—çœåå °å¸‚",
        420301: "æ¹–åŒ—çœåå °å¸‚å¸‚è¾–åŒº",
        420302: "æ¹–åŒ—çœåå °å¸‚èŒ…ç®­åŒº",
        420303: "æ¹–åŒ—çœåå °å¸‚å¼ æ¹¾åŒº",
        420321: "æ¹–åŒ—çœåå °å¸‚éƒ§åŽ¿",
        420322: "æ¹–åŒ—çœåå °å¸‚éƒ§è¥¿åŽ¿",
        420323: "æ¹–åŒ—çœåå °å¸‚ç«¹å±±åŽ¿",
        420324: "æ¹–åŒ—çœåå °å¸‚ç«¹æºªåŽ¿",
        420325: "æ¹–åŒ—çœåå °å¸‚æˆ¿åŽ¿",
        420381: "æ¹–åŒ—çœåå °å¸‚ä¸¹æ±Ÿå£å¸‚",
        420500: "æ¹–åŒ—çœå®œæ˜Œå¸‚",
        420501: "æ¹–åŒ—çœå®œæ˜Œå¸‚å¸‚è¾–åŒº",
        420502: "æ¹–åŒ—çœå®œæ˜Œå¸‚è¥¿é™µåŒº",
        420503: "æ¹–åŒ—çœå®œæ˜Œå¸‚ä¼å®¶å²—åŒº",
        420504: "æ¹–åŒ—çœå®œæ˜Œå¸‚ç‚¹å†›åŒº",
        420505: "æ¹–åŒ—çœå®œæ˜Œå¸‚è™Žäº­åŒº",
        420521: "æ¹–åŒ—çœå®œæ˜Œå¸‚å®œæ˜ŒåŽ¿",
        420525: "æ¹–åŒ—çœå®œæ˜Œå¸‚è¿œå®‰åŽ¿",
        420526: "æ¹–åŒ—çœå®œæ˜Œå¸‚å…´å±±åŽ¿",
        420527: "æ¹–åŒ—çœå®œæ˜Œå¸‚ç§­å½’åŽ¿",
        420528: "æ¹–åŒ—çœå®œæ˜Œå¸‚é•¿é˜³åœŸå®¶æ—è‡ªæ²»åŽ¿",
        420529: "æ¹–åŒ—çœå®œæ˜Œå¸‚äº”å³°åœŸå®¶æ—è‡ªæ²»åŽ¿",
        420581: "æ¹–åŒ—çœå®œæ˜Œå¸‚å®œéƒ½å¸‚",
        420582: "æ¹–åŒ—çœå®œæ˜Œå¸‚å½“é˜³å¸‚",
        420583: "æ¹–åŒ—çœå®œæ˜Œå¸‚æžæ±Ÿå¸‚",
        420600: "æ¹–åŒ—çœè¥„æ¨Šå¸‚",
        420601: "æ¹–åŒ—çœè¥„æ¨Šå¸‚å¸‚è¾–åŒº",
        420602: "æ¹–åŒ—çœè¥„æ¨Šå¸‚è¥„åŸŽåŒº",
        420606: "æ¹–åŒ—çœè¥„æ¨Šå¸‚æ¨ŠåŸŽåŒº",
        420621: "æ¹–åŒ—çœè¥„æ¨Šå¸‚è¥„é˜³åŽ¿",
        420624: "æ¹–åŒ—çœè¥„æ¨Šå¸‚å—æ¼³åŽ¿",
        420625: "æ¹–åŒ—çœè¥„æ¨Šå¸‚è°·åŸŽåŽ¿",
        420626: "æ¹–åŒ—çœè¥„æ¨Šå¸‚ä¿åº·åŽ¿",
        420682: "æ¹–åŒ—çœè¥„æ¨Šå¸‚è€æ²³å£å¸‚",
        420683: "æ¹–åŒ—çœè¥„æ¨Šå¸‚æž£é˜³å¸‚",
        420684: "æ¹–åŒ—çœè¥„æ¨Šå¸‚å®œåŸŽå¸‚",
        420700: "æ¹–åŒ—çœé„‚å·žå¸‚",
        420701: "æ¹–åŒ—çœé„‚å·žå¸‚å¸‚è¾–åŒº",
        420702: "æ¹–åŒ—çœé„‚å·žå¸‚æ¢å­æ¹–åŒº",
        420703: "æ¹–åŒ—çœé„‚å·žå¸‚åŽå®¹åŒº",
        420704: "æ¹–åŒ—çœé„‚å·žå¸‚é„‚åŸŽåŒº",
        420800: "æ¹–åŒ—çœè†é—¨å¸‚",
        420801: "æ¹–åŒ—çœè†é—¨å¸‚å¸‚è¾–åŒº",
        420802: "æ¹–åŒ—çœè†é—¨å¸‚ä¸œå®åŒº",
        420821: "æ¹–åŒ—çœè†é—¨å¸‚äº¬å±±åŽ¿",
        420822: "æ¹–åŒ—çœè†é—¨å¸‚æ²™æ´‹åŽ¿",
        420881: "æ¹–åŒ—çœè†é—¨å¸‚é’Ÿç¥¥å¸‚",
        420900: "æ¹–åŒ—çœå­æ„Ÿå¸‚",
        420901: "æ¹–åŒ—çœå­æ„Ÿå¸‚å¸‚è¾–åŒº",
        420902: "æ¹–åŒ—çœå­æ„Ÿå¸‚å­å—åŒº",
        420921: "æ¹–åŒ—çœå­æ„Ÿå¸‚å­æ˜ŒåŽ¿",
        420922: "æ¹–åŒ—çœå­æ„Ÿå¸‚å¤§æ‚ŸåŽ¿",
        420923: "æ¹–åŒ—çœå­æ„Ÿå¸‚äº‘æ¢¦åŽ¿",
        420981: "æ¹–åŒ—çœå­æ„Ÿå¸‚åº”åŸŽå¸‚",
        420982: "æ¹–åŒ—çœå­æ„Ÿå¸‚å®‰é™†å¸‚",
        420983: "æ¹–åŒ—çœå­æ„Ÿå¸‚å¹¿æ°´å¸‚",
        420984: "æ¹–åŒ—çœå­æ„Ÿå¸‚æ±‰å·å¸‚",
        421e3: "æ¹–åŒ—çœè†å·žå¸‚",
        421001: "æ¹–åŒ—çœè†å·žå¸‚å¸‚è¾–åŒº",
        421002: "æ¹–åŒ—çœè†å·žå¸‚æ²™å¸‚åŒº",
        421003: "æ¹–åŒ—çœè†å·žå¸‚è†å·žåŒº",
        421022: "æ¹–åŒ—çœè†å·žå¸‚å…¬å®‰åŽ¿",
        421023: "æ¹–åŒ—çœè†å·žå¸‚ç›‘åˆ©åŽ¿",
        421024: "æ¹–åŒ—çœè†å·žå¸‚æ±Ÿé™µåŽ¿",
        421081: "æ¹–åŒ—çœè†å·žå¸‚çŸ³é¦–å¸‚",
        421083: "æ¹–åŒ—çœè†å·žå¸‚æ´ªæ¹–å¸‚",
        421087: "æ¹–åŒ—çœè†å·žå¸‚æ¾æ»‹å¸‚",
        421100: "æ¹–åŒ—çœé»„å†ˆå¸‚",
        421101: "æ¹–åŒ—çœé»„å†ˆå¸‚å¸‚è¾–åŒº",
        421102: "æ¹–åŒ—çœé»„å†ˆå¸‚é»„å·žåŒº",
        421121: "æ¹–åŒ—çœé»„å†ˆå¸‚å›¢é£ŽåŽ¿",
        421122: "æ¹–åŒ—çœé»„å†ˆå¸‚çº¢å®‰åŽ¿",
        421123: "æ¹–åŒ—çœé»„å†ˆå¸‚ç½—ç”°åŽ¿",
        421124: "æ¹–åŒ—çœé»„å†ˆå¸‚è‹±å±±åŽ¿",
        421125: "æ¹–åŒ—çœé»„å†ˆå¸‚æµ æ°´åŽ¿",
        421126: "æ¹–åŒ—çœé»„å†ˆå¸‚è•²æ˜¥åŽ¿",
        421127: "æ¹–åŒ—çœé»„å†ˆå¸‚é»„æ¢…åŽ¿",
        421181: "æ¹–åŒ—çœé»„å†ˆå¸‚éº»åŸŽå¸‚",
        421182: "æ¹–åŒ—çœé»„å†ˆå¸‚æ­¦ç©´å¸‚",
        421200: "æ¹–åŒ—çœå’¸å®å¸‚",
        421201: "æ¹–åŒ—çœå’¸å®å¸‚å¸‚è¾–åŒº",
        421202: "æ¹–åŒ—çœå’¸å®å¸‚å’¸å®‰åŒº",
        421221: "æ¹–åŒ—çœå’¸å®å¸‚å˜‰é±¼åŽ¿",
        421222: "æ¹–åŒ—çœå’¸å®å¸‚é€šåŸŽåŽ¿",
        421223: "æ¹–åŒ—çœå’¸å®å¸‚å´‡é˜³åŽ¿",
        421224: "æ¹–åŒ—çœå’¸å®å¸‚é€šå±±åŽ¿",
        422800: "æ¹–åŒ—çœæ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·ž",
        422801: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žæ©æ–½åŽ¿",
        422802: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žåˆ©å·å¸‚",
        422822: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå»ºå§‹åŽ¿",
        422823: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå·´ä¸œåŽ¿",
        422825: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå®£æ©åŽ¿",
        422826: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå’¸ä¸°åŽ¿",
        422827: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žæ¥å‡¤åŽ¿",
        422828: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žé¹¤å³°åŽ¿",
        429e3: "æ¹–åŒ—çœçœç›´è¾–åŽ¿çº§è¡Œæ”¿å•ä½",
        429001: "æ¹–åŒ—çœéšå·žå¸‚",
        429004: "æ¹–åŒ—çœä»™æ¡ƒå¸‚",
        429005: "æ¹–åŒ—çœæ½œæ±Ÿå¸‚",
        429006: "æ¹–åŒ—çœå¤©é—¨å¸‚",
        429021: "æ¹–åŒ—çœç¥žå†œæž¶æž—åŒº",
        43e4: "æ¹–å—çœ",
        430100: "æ¹–å—çœé•¿æ²™å¸‚",
        430101: "æ¹–å—çœé•¿æ²™å¸‚å¸‚è¾–åŒº",
        430102: "æ¹–å—çœé•¿æ²™å¸‚èŠ™è“‰åŒº",
        430103: "æ¹–å—çœé•¿æ²™å¸‚å¤©å¿ƒåŒº",
        430104: "æ¹–å—çœé•¿æ²™å¸‚å²³éº“åŒº",
        430105: "æ¹–å—çœé•¿æ²™å¸‚å¼€ç¦åŒº",
        430111: "æ¹–å—çœé•¿æ²™å¸‚é›¨èŠ±åŒº",
        430121: "æ¹–å—çœé•¿æ²™å¸‚é•¿æ²™åŽ¿",
        430122: "æ¹–å—çœé•¿æ²™å¸‚æœ›åŸŽåŽ¿",
        430124: "æ¹–å—çœé•¿æ²™å¸‚å®ä¹¡åŽ¿",
        430181: "æ¹–å—çœé•¿æ²™å¸‚æµé˜³å¸‚",
        430200: "æ¹–å—çœæ ªæ´²å¸‚",
        430201: "æ¹–å—çœæ ªæ´²å¸‚å¸‚è¾–åŒº",
        430202: "æ¹–å—çœæ ªæ´²å¸‚è·å¡˜åŒº",
        430203: "æ¹–å—çœæ ªæ´²å¸‚èŠ¦æ·žåŒº",
        430204: "æ¹–å—çœæ ªæ´²å¸‚çŸ³å³°åŒº",
        430211: "æ¹–å—çœæ ªæ´²å¸‚å¤©å…ƒåŒº",
        430221: "æ¹–å—çœæ ªæ´²å¸‚æ ªæ´²åŽ¿",
        430223: "æ¹–å—çœæ ªæ´²å¸‚æ”¸åŽ¿",
        430224: "æ¹–å—çœæ ªæ´²å¸‚èŒ¶é™µåŽ¿",
        430225: "æ¹–å—çœæ ªæ´²å¸‚ç‚Žé™µåŽ¿",
        430281: "æ¹–å—çœæ ªæ´²å¸‚é†´é™µå¸‚",
        430300: "æ¹–å—çœæ¹˜æ½­å¸‚",
        430301: "æ¹–å—çœæ¹˜æ½­å¸‚å¸‚è¾–åŒº",
        430302: "æ¹–å—çœæ¹˜æ½­å¸‚é›¨æ¹–åŒº",
        430304: "æ¹–å—çœæ¹˜æ½­å¸‚å²³å¡˜åŒº",
        430321: "æ¹–å—çœæ¹˜æ½­å¸‚æ¹˜æ½­åŽ¿",
        430381: "æ¹–å—çœæ¹˜æ½­å¸‚æ¹˜ä¹¡å¸‚",
        430382: "æ¹–å—çœæ¹˜æ½­å¸‚éŸ¶å±±å¸‚",
        430400: "æ¹–å—çœè¡¡é˜³å¸‚",
        430401: "æ¹–å—çœè¡¡é˜³å¸‚å¸‚è¾–åŒº",
        430402: "æ¹–å—çœè¡¡é˜³å¸‚æ±Ÿä¸œåŒº",
        430403: "æ¹–å—çœè¡¡é˜³å¸‚åŸŽå—åŒº",
        430404: "æ¹–å—çœè¡¡é˜³å¸‚åŸŽåŒ—åŒº",
        430411: "æ¹–å—çœè¡¡é˜³å¸‚éƒŠåŒº",
        430412: "æ¹–å—çœè¡¡é˜³å¸‚å—å²³åŒº",
        430421: "æ¹–å—çœè¡¡é˜³å¸‚è¡¡é˜³åŽ¿",
        430422: "æ¹–å—çœè¡¡é˜³å¸‚è¡¡å—åŽ¿",
        430423: "æ¹–å—çœè¡¡é˜³å¸‚è¡¡å±±åŽ¿",
        430424: "æ¹–å—çœè¡¡é˜³å¸‚è¡¡ä¸œåŽ¿",
        430426: "æ¹–å—çœè¡¡é˜³å¸‚ç¥ä¸œåŽ¿",
        430481: "æ¹–å—çœè¡¡é˜³å¸‚è€’é˜³å¸‚",
        430482: "æ¹–å—çœè¡¡é˜³å¸‚å¸¸å®å¸‚",
        430500: "æ¹–å—çœé‚µé˜³å¸‚",
        430501: "æ¹–å—çœé‚µé˜³å¸‚å¸‚è¾–åŒº",
        430502: "æ¹–å—çœé‚µé˜³å¸‚åŒæ¸…åŒº",
        430503: "æ¹–å—çœé‚µé˜³å¸‚å¤§ç¥¥åŒº",
        430511: "æ¹–å—çœé‚µé˜³å¸‚åŒ—å¡”åŒº",
        430521: "æ¹–å—çœé‚µé˜³å¸‚é‚µä¸œåŽ¿",
        430522: "æ¹–å—çœé‚µé˜³å¸‚æ–°é‚µåŽ¿",
        430523: "æ¹–å—çœé‚µé˜³å¸‚é‚µé˜³åŽ¿",
        430524: "æ¹–å—çœé‚µé˜³å¸‚éš†å›žåŽ¿",
        430525: "æ¹–å—çœé‚µé˜³å¸‚æ´žå£åŽ¿",
        430527: "æ¹–å—çœé‚µé˜³å¸‚ç»¥å®åŽ¿",
        430528: "æ¹–å—çœé‚µé˜³å¸‚æ–°å®åŽ¿",
        430529: "æ¹–å—çœé‚µé˜³å¸‚åŸŽæ­¥è‹—æ—è‡ªæ²»åŽ¿",
        430581: "æ¹–å—çœé‚µé˜³å¸‚æ­¦å†ˆå¸‚",
        430600: "æ¹–å—çœå²³é˜³å¸‚",
        430601: "æ¹–å—çœå²³é˜³å¸‚å¸‚è¾–åŒº",
        430602: "æ¹–å—çœå²³é˜³å¸‚å²³é˜³æ¥¼åŒº",
        430603: "æ¹–å—çœå²³é˜³å¸‚äº‘æºªåŒº",
        430611: "æ¹–å—çœå²³é˜³å¸‚å›å±±åŒº",
        430621: "æ¹–å—çœå²³é˜³å¸‚å²³é˜³åŽ¿",
        430623: "æ¹–å—çœå²³é˜³å¸‚åŽå®¹åŽ¿",
        430624: "æ¹–å—çœå²³é˜³å¸‚æ¹˜é˜´åŽ¿",
        430626: "æ¹–å—çœå²³é˜³å¸‚å¹³æ±ŸåŽ¿",
        430681: "æ¹–å—çœå²³é˜³å¸‚æ±¨ç½—å¸‚",
        430682: "æ¹–å—çœå²³é˜³å¸‚ä¸´æ¹˜å¸‚",
        430700: "æ¹–å—çœå¸¸å¾·å¸‚",
        430701: "æ¹–å—çœå¸¸å¾·å¸‚å¸‚è¾–åŒº",
        430702: "æ¹–å—çœå¸¸å¾·å¸‚æ­¦é™µåŒº",
        430703: "æ¹–å—çœå¸¸å¾·å¸‚é¼ŽåŸŽåŒº",
        430721: "æ¹–å—çœå¸¸å¾·å¸‚å®‰ä¹¡åŽ¿",
        430722: "æ¹–å—çœå¸¸å¾·å¸‚æ±‰å¯¿åŽ¿",
        430723: "æ¹–å—çœå¸¸å¾·å¸‚æ¾§åŽ¿",
        430724: "æ¹–å—çœå¸¸å¾·å¸‚ä¸´æ¾§åŽ¿",
        430725: "æ¹–å—çœå¸¸å¾·å¸‚æ¡ƒæºåŽ¿",
        430726: "æ¹–å—çœå¸¸å¾·å¸‚çŸ³é—¨åŽ¿",
        430781: "æ¹–å—çœå¸¸å¾·å¸‚æ´¥å¸‚å¸‚",
        430800: "æ¹–å—çœå¼ å®¶ç•Œå¸‚",
        430801: "æ¹–å—çœå¼ å®¶ç•Œå¸‚å¸‚è¾–åŒº",
        430802: "æ¹–å—çœå¼ å®¶ç•Œå¸‚æ°¸å®šåŒº",
        430811: "æ¹–å—çœå¼ å®¶ç•Œå¸‚æ­¦é™µæºåŒº",
        430821: "æ¹–å—çœå¼ å®¶ç•Œå¸‚æ…ˆåˆ©åŽ¿",
        430822: "æ¹–å—çœå¼ å®¶ç•Œå¸‚æ¡‘æ¤åŽ¿",
        430900: "æ¹–å—çœç›Šé˜³å¸‚",
        430901: "æ¹–å—çœç›Šé˜³å¸‚å¸‚è¾–åŒº",
        430902: "æ¹–å—çœç›Šé˜³å¸‚èµ„é˜³åŒº",
        430903: "æ¹–å—çœç›Šé˜³å¸‚èµ«å±±åŒº",
        430921: "æ¹–å—çœç›Šé˜³å¸‚å—åŽ¿",
        430922: "æ¹–å—çœç›Šé˜³å¸‚æ¡ƒæ±ŸåŽ¿",
        430923: "æ¹–å—çœç›Šé˜³å¸‚å®‰åŒ–åŽ¿",
        430981: "æ¹–å—çœç›Šé˜³å¸‚æ²…æ±Ÿå¸‚",
        431e3: "æ¹–å—çœéƒ´å·žå¸‚",
        431001: "æ¹–å—çœéƒ´å·žå¸‚å¸‚è¾–åŒº",
        431002: "æ¹–å—çœéƒ´å·žå¸‚åŒ—æ¹–åŒº",
        431003: "æ¹–å—çœéƒ´å·žå¸‚è‹ä»™åŒº",
        431021: "æ¹–å—çœéƒ´å·žå¸‚æ¡‚é˜³åŽ¿",
        431022: "æ¹–å—çœéƒ´å·žå¸‚å®œç« åŽ¿",
        431023: "æ¹–å—çœéƒ´å·žå¸‚æ°¸å…´åŽ¿",
        431024: "æ¹–å—çœéƒ´å·žå¸‚å˜‰ç¦¾åŽ¿",
        431025: "æ¹–å—çœéƒ´å·žå¸‚ä¸´æ­¦åŽ¿",
        431026: "æ¹–å—çœéƒ´å·žå¸‚æ±åŸŽåŽ¿",
        431027: "æ¹–å—çœéƒ´å·žå¸‚æ¡‚ä¸œåŽ¿",
        431028: "æ¹–å—çœéƒ´å·žå¸‚å®‰ä»åŽ¿",
        431081: "æ¹–å—çœéƒ´å·žå¸‚èµ„å…´å¸‚",
        431100: "æ¹–å—çœæ°¸å·žå¸‚",
        431101: "æ¹–å—çœæ°¸å·žå¸‚å¸‚è¾–åŒº",
        431102: "æ¹–å—çœæ°¸å·žå¸‚èŠå±±åŒº",
        431103: "æ¹–å—çœæ°¸å·žå¸‚å†·æ°´æ»©åŒº",
        431121: "æ¹–å—çœæ°¸å·žå¸‚ç¥é˜³åŽ¿",
        431122: "æ¹–å—çœæ°¸å·žå¸‚ä¸œå®‰åŽ¿",
        431123: "æ¹–å—çœæ°¸å·žå¸‚åŒç‰ŒåŽ¿",
        431124: "æ¹–å—çœæ°¸å·žå¸‚é“åŽ¿",
        431125: "æ¹–å—çœæ°¸å·žå¸‚æ±Ÿæ°¸åŽ¿",
        431126: "æ¹–å—çœæ°¸å·žå¸‚å®è¿œåŽ¿",
        431127: "æ¹–å—çœæ°¸å·žå¸‚è“å±±åŽ¿",
        431128: "æ¹–å—çœæ°¸å·žå¸‚æ–°ç”°åŽ¿",
        431129: "æ¹–å—çœæ°¸å·žå¸‚æ±ŸåŽç‘¶æ—è‡ªæ²»åŽ¿",
        431200: "æ¹–å—çœæ€€åŒ–å¸‚",
        431201: "æ¹–å—çœæ€€åŒ–å¸‚å¸‚è¾–åŒº",
        431202: "æ¹–å—çœæ€€åŒ–å¸‚é¹¤åŸŽåŒº",
        431221: "æ¹–å—çœæ€€åŒ–å¸‚ä¸­æ–¹åŽ¿",
        431222: "æ¹–å—çœæ€€åŒ–å¸‚æ²…é™µåŽ¿",
        431223: "æ¹–å—çœæ€€åŒ–å¸‚è¾°æºªåŽ¿",
        431224: "æ¹–å—çœæ€€åŒ–å¸‚æº†æµ¦åŽ¿",
        431225: "æ¹–å—çœæ€€åŒ–å¸‚ä¼šåŒåŽ¿",
        431226: "æ¹–å—çœæ€€åŒ–å¸‚éº»é˜³è‹—æ—è‡ªæ²»åŽ¿",
        431227: "æ¹–å—çœæ€€åŒ–å¸‚æ–°æ™ƒä¾—æ—è‡ªæ²»åŽ¿",
        431228: "æ¹–å—çœæ€€åŒ–å¸‚èŠ·æ±Ÿä¾—æ—è‡ªæ²»åŽ¿",
        431229: "æ¹–å—çœæ€€åŒ–å¸‚é–å·žè‹—æ—ä¾—æ—è‡ªæ²»åŽ¿",
        431230: "æ¹–å—çœæ€€åŒ–å¸‚é€šé“ä¾—æ—è‡ªæ²»åŽ¿",
        431281: "æ¹–å—çœæ€€åŒ–å¸‚æ´ªæ±Ÿå¸‚",
        432500: "æ¹–å—çœå¨„åº•åœ°åŒº",
        432501: "æ¹–å—çœå¨„åº•åœ°åŒºå¨„åº•å¸‚",
        432502: "æ¹–å—çœå¨„åº•åœ°åŒºå†·æ°´æ±Ÿå¸‚",
        432503: "æ¹–å—çœå¨„åº•åœ°åŒºæ¶Ÿæºå¸‚",
        432522: "æ¹–å—çœå¨„åº•åœ°åŒºåŒå³°åŽ¿",
        432524: "æ¹–å—çœå¨„åº•åœ°åŒºæ–°åŒ–åŽ¿",
        433e3: "æ¹–å—çœæ€€åŒ–å¸‚",
        433001: "æ¹–å—çœæ€€åŒ–å¸‚",
        433100: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·ž",
        433101: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå‰é¦–å¸‚",
        433122: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žæ³¸æºªåŽ¿",
        433123: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå‡¤å‡°åŽ¿",
        433124: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žèŠ±åž£åŽ¿",
        433125: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žä¿é–åŽ¿",
        433126: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå¤ä¸ˆåŽ¿",
        433127: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žæ°¸é¡ºåŽ¿",
        433130: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žé¾™å±±åŽ¿",
        44e4: "å¹¿ä¸œçœ",
        440100: "å¹¿ä¸œçœå¹¿å·žå¸‚",
        440101: "å¹¿ä¸œçœå¹¿å·žå¸‚å¸‚è¾–åŒº",
        440102: "å¹¿ä¸œçœå¹¿å·žå¸‚ä¸œå±±åŒº",
        440103: "å¹¿ä¸œçœå¹¿å·žå¸‚è”æ¹¾åŒº",
        440104: "å¹¿ä¸œçœå¹¿å·žå¸‚è¶Šç§€åŒº",
        440105: "å¹¿ä¸œçœå¹¿å·žå¸‚æµ·ç åŒº",
        440106: "å¹¿ä¸œçœå¹¿å·žå¸‚å¤©æ²³åŒº",
        440107: "å¹¿ä¸œçœå¹¿å·žå¸‚èŠ³æ‘åŒº",
        440111: "å¹¿ä¸œçœå¹¿å·žå¸‚ç™½äº‘åŒº",
        440112: "å¹¿ä¸œçœå¹¿å·žå¸‚é»„åŸ”åŒº",
        440181: "å¹¿ä¸œçœå¹¿å·žå¸‚ç•ªç¦ºå¸‚",
        440182: "å¹¿ä¸œçœå¹¿å·žå¸‚èŠ±éƒ½å¸‚",
        440183: "å¹¿ä¸œçœå¹¿å·žå¸‚å¢žåŸŽå¸‚",
        440184: "å¹¿ä¸œçœå¹¿å·žå¸‚ä»ŽåŒ–å¸‚",
        440200: "å¹¿ä¸œçœéŸ¶å…³å¸‚",
        440201: "å¹¿ä¸œçœéŸ¶å…³å¸‚å¸‚è¾–åŒº",
        440202: "å¹¿ä¸œçœéŸ¶å…³å¸‚åŒ—æ±ŸåŒº",
        440203: "å¹¿ä¸œçœéŸ¶å…³å¸‚æ­¦æ±ŸåŒº",
        440204: "å¹¿ä¸œçœéŸ¶å…³å¸‚æµˆæ±ŸåŒº",
        440221: "å¹¿ä¸œçœéŸ¶å…³å¸‚æ›²æ±ŸåŽ¿",
        440222: "å¹¿ä¸œçœéŸ¶å…³å¸‚å§‹å…´åŽ¿",
        440224: "å¹¿ä¸œçœéŸ¶å…³å¸‚ä»åŒ–åŽ¿",
        440229: "å¹¿ä¸œçœéŸ¶å…³å¸‚ç¿æºåŽ¿",
        440232: "å¹¿ä¸œçœéŸ¶å…³å¸‚ä¹³æºç‘¶æ—è‡ªæ²»åŽ¿",
        440233: "å¹¿ä¸œçœéŸ¶å…³å¸‚æ–°ä¸°åŽ¿",
        440281: "å¹¿ä¸œçœéŸ¶å…³å¸‚ä¹æ˜Œå¸‚",
        440282: "å¹¿ä¸œçœéŸ¶å…³å¸‚å—é›„å¸‚",
        440300: "å¹¿ä¸œçœæ·±åœ³å¸‚",
        440301: "å¹¿ä¸œçœæ·±åœ³å¸‚å¸‚è¾–åŒº",
        440303: "å¹¿ä¸œçœæ·±åœ³å¸‚ç½—æ¹–åŒº",
        440304: "å¹¿ä¸œçœæ·±åœ³å¸‚ç¦ç”°åŒº",
        440305: "å¹¿ä¸œçœæ·±åœ³å¸‚å—å±±åŒº",
        440306: "å¹¿ä¸œçœæ·±åœ³å¸‚å®å®‰åŒº",
        440307: "å¹¿ä¸œçœæ·±åœ³å¸‚é¾™å²—åŒº",
        440308: "å¹¿ä¸œçœæ·±åœ³å¸‚ç›ç”°åŒº",
        440400: "å¹¿ä¸œçœç æµ·å¸‚",
        440401: "å¹¿ä¸œçœç æµ·å¸‚å¸‚è¾–åŒº",
        440402: "å¹¿ä¸œçœç æµ·å¸‚é¦™æ´²åŒº",
        440421: "å¹¿ä¸œçœç æµ·å¸‚æ–—é—¨åŽ¿",
        440500: "å¹¿ä¸œçœæ±•å¤´å¸‚",
        440501: "å¹¿ä¸œçœæ±•å¤´å¸‚å¸‚è¾–åŒº",
        440506: "å¹¿ä¸œçœæ±•å¤´å¸‚è¾¾æ¿ åŒº",
        440507: "å¹¿ä¸œçœæ±•å¤´å¸‚é¾™æ¹–åŒº",
        440508: "å¹¿ä¸œçœæ±•å¤´å¸‚é‡‘å›­åŒº",
        440509: "å¹¿ä¸œçœæ±•å¤´å¸‚å‡å¹³åŒº",
        440510: "å¹¿ä¸œçœæ±•å¤´å¸‚æ²³æµ¦åŒº",
        440523: "å¹¿ä¸œçœæ±•å¤´å¸‚å—æ¾³åŽ¿",
        440582: "å¹¿ä¸œçœæ±•å¤´å¸‚æ½®é˜³å¸‚",
        440583: "å¹¿ä¸œçœæ±•å¤´å¸‚æ¾„æµ·å¸‚",
        440600: "å¹¿ä¸œçœä½›å±±å¸‚",
        440601: "å¹¿ä¸œçœä½›å±±å¸‚å¸‚è¾–åŒº",
        440602: "å¹¿ä¸œçœä½›å±±å¸‚åŸŽåŒº",
        440603: "å¹¿ä¸œçœä½›å±±å¸‚çŸ³æ¹¾åŒº",
        440681: "å¹¿ä¸œçœä½›å±±å¸‚é¡ºå¾·å¸‚",
        440682: "å¹¿ä¸œçœä½›å±±å¸‚å—æµ·å¸‚",
        440683: "å¹¿ä¸œçœä½›å±±å¸‚ä¸‰æ°´å¸‚",
        440684: "å¹¿ä¸œçœä½›å±±å¸‚é«˜æ˜Žå¸‚",
        440700: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚",
        440701: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚å¸‚è¾–åŒº",
        440703: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚è“¬æ±ŸåŒº",
        440704: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚æ±Ÿæµ·åŒº",
        440781: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚å°å±±å¸‚",
        440782: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚æ–°ä¼šå¸‚",
        440783: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚å¼€å¹³å¸‚",
        440784: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚é¹¤å±±å¸‚",
        440785: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚æ©å¹³å¸‚",
        440800: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚",
        440801: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å¸‚è¾–åŒº",
        440802: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚èµ¤åŽåŒº",
        440803: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚éœžå±±åŒº",
        440804: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å¡å¤´åŒº",
        440811: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚éº»ç« åŒº",
        440823: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚é‚æºªåŽ¿",
        440825: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å¾é—»åŽ¿",
        440881: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å»‰æ±Ÿå¸‚",
        440882: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚é›·å·žå¸‚",
        440883: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å´å·å¸‚",
        440900: "å¹¿ä¸œçœèŒ‚åå¸‚",
        440901: "å¹¿ä¸œçœèŒ‚åå¸‚å¸‚è¾–åŒº",
        440902: "å¹¿ä¸œçœèŒ‚åå¸‚èŒ‚å—åŒº",
        440923: "å¹¿ä¸œçœèŒ‚åå¸‚ç”µç™½åŽ¿",
        440981: "å¹¿ä¸œçœèŒ‚åå¸‚é«˜å·žå¸‚",
        440982: "å¹¿ä¸œçœèŒ‚åå¸‚åŒ–å·žå¸‚",
        440983: "å¹¿ä¸œçœèŒ‚åå¸‚ä¿¡å®œå¸‚",
        441200: "å¹¿ä¸œçœè‚‡åº†å¸‚",
        441201: "å¹¿ä¸œçœè‚‡åº†å¸‚å¸‚è¾–åŒº",
        441202: "å¹¿ä¸œçœè‚‡åº†å¸‚ç«¯å·žåŒº",
        441203: "å¹¿ä¸œçœè‚‡åº†å¸‚é¼Žæ¹–åŒº",
        441223: "å¹¿ä¸œçœè‚‡åº†å¸‚å¹¿å®åŽ¿",
        441224: "å¹¿ä¸œçœè‚‡åº†å¸‚æ€€é›†åŽ¿",
        441225: "å¹¿ä¸œçœè‚‡åº†å¸‚å°å¼€åŽ¿",
        441226: "å¹¿ä¸œçœè‚‡åº†å¸‚å¾·åº†åŽ¿",
        441283: "å¹¿ä¸œçœè‚‡åº†å¸‚é«˜è¦å¸‚",
        441284: "å¹¿ä¸œçœè‚‡åº†å¸‚å››ä¼šå¸‚",
        441300: "å¹¿ä¸œçœæƒ å·žå¸‚",
        441301: "å¹¿ä¸œçœæƒ å·žå¸‚å¸‚è¾–åŒº",
        441302: "å¹¿ä¸œçœæƒ å·žå¸‚æƒ åŸŽåŒº",
        441322: "å¹¿ä¸œçœæƒ å·žå¸‚åšç½—åŽ¿",
        441323: "å¹¿ä¸œçœæƒ å·žå¸‚æƒ ä¸œåŽ¿",
        441324: "å¹¿ä¸œçœæƒ å·žå¸‚é¾™é—¨åŽ¿",
        441381: "å¹¿ä¸œçœæƒ å·žå¸‚æƒ é˜³å¸‚",
        441400: "å¹¿ä¸œçœæ¢…å·žå¸‚",
        441401: "å¹¿ä¸œçœæ¢…å·žå¸‚å¸‚è¾–åŒº",
        441402: "å¹¿ä¸œçœæ¢…å·žå¸‚æ¢…æ±ŸåŒº",
        441421: "å¹¿ä¸œçœæ¢…å·žå¸‚æ¢…åŽ¿",
        441422: "å¹¿ä¸œçœæ¢…å·žå¸‚å¤§åŸ”åŽ¿",
        441423: "å¹¿ä¸œçœæ¢…å·žå¸‚ä¸°é¡ºåŽ¿",
        441424: "å¹¿ä¸œçœæ¢…å·žå¸‚äº”åŽåŽ¿",
        441426: "å¹¿ä¸œçœæ¢…å·žå¸‚å¹³è¿œåŽ¿",
        441427: "å¹¿ä¸œçœæ¢…å·žå¸‚è•‰å²­åŽ¿",
        441481: "å¹¿ä¸œçœæ¢…å·žå¸‚å…´å®å¸‚",
        441500: "å¹¿ä¸œçœæ±•å°¾å¸‚",
        441501: "å¹¿ä¸œçœæ±•å°¾å¸‚å¸‚è¾–åŒº",
        441502: "å¹¿ä¸œçœæ±•å°¾å¸‚åŸŽåŒº",
        441521: "å¹¿ä¸œçœæ±•å°¾å¸‚æµ·ä¸°åŽ¿",
        441523: "å¹¿ä¸œçœæ±•å°¾å¸‚é™†æ²³åŽ¿",
        441581: "å¹¿ä¸œçœæ±•å°¾å¸‚é™†ä¸°å¸‚",
        441600: "å¹¿ä¸œçœæ²³æºå¸‚",
        441601: "å¹¿ä¸œçœæ²³æºå¸‚å¸‚è¾–åŒº",
        441602: "å¹¿ä¸œçœæ²³æºå¸‚æºåŸŽåŒº",
        441621: "å¹¿ä¸œçœæ²³æºå¸‚ç´«é‡‘åŽ¿",
        441622: "å¹¿ä¸œçœæ²³æºå¸‚é¾™å·åŽ¿",
        441623: "å¹¿ä¸œçœæ²³æºå¸‚è¿žå¹³åŽ¿",
        441624: "å¹¿ä¸œçœæ²³æºå¸‚å’Œå¹³åŽ¿",
        441625: "å¹¿ä¸œçœæ²³æºå¸‚ä¸œæºåŽ¿",
        441700: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚",
        441701: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚å¸‚è¾–åŒº",
        441702: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚æ±ŸåŸŽåŒº",
        441721: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚é˜³è¥¿åŽ¿",
        441723: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚é˜³ä¸œåŽ¿",
        441781: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚é˜³æ˜¥å¸‚",
        441800: "å¹¿ä¸œçœæ¸…è¿œå¸‚",
        441801: "å¹¿ä¸œçœæ¸…è¿œå¸‚å¸‚è¾–åŒº",
        441802: "å¹¿ä¸œçœæ¸…è¿œå¸‚æ¸…åŸŽåŒº",
        441821: "å¹¿ä¸œçœæ¸…è¿œå¸‚ä½›å†ˆåŽ¿",
        441823: "å¹¿ä¸œçœæ¸…è¿œå¸‚é˜³å±±åŽ¿",
        441825: "å¹¿ä¸œçœæ¸…è¿œå¸‚è¿žå±±å£®æ—ç‘¶æ—è‡ªæ²»åŽ¿",
        441826: "å¹¿ä¸œçœæ¸…è¿œå¸‚è¿žå—ç‘¶æ—è‡ªæ²»åŽ¿",
        441827: "å¹¿ä¸œçœæ¸…è¿œå¸‚æ¸…æ–°åŽ¿",
        441881: "å¹¿ä¸œçœæ¸…è¿œå¸‚è‹±å¾·å¸‚",
        441882: "å¹¿ä¸œçœæ¸…è¿œå¸‚è¿žå·žå¸‚",
        441900: "å¹¿ä¸œçœä¸œèŽžå¸‚",
        441901: "å¹¿ä¸œçœä¸œèŽžå¸‚å¸‚è¾–åŒº",
        442e3: "å¹¿ä¸œçœä¸­å±±å¸‚",
        442001: "å¹¿ä¸œçœä¸­å±±å¸‚å¸‚è¾–åŒº",
        445100: "å¹¿ä¸œçœæ½®å·žå¸‚",
        445101: "å¹¿ä¸œçœæ½®å·žå¸‚å¸‚è¾–åŒº",
        445102: "å¹¿ä¸œçœæ½®å·žå¸‚æ¹˜æ¡¥åŒº",
        445121: "å¹¿ä¸œçœæ½®å·žå¸‚æ½®å®‰åŽ¿",
        445122: "å¹¿ä¸œçœæ½®å·žå¸‚é¥¶å¹³åŽ¿",
        445200: "å¹¿ä¸œçœæ­é˜³å¸‚",
        445201: "å¹¿ä¸œçœæ­é˜³å¸‚å¸‚è¾–åŒº",
        445202: "å¹¿ä¸œçœæ­é˜³å¸‚æ¦•åŸŽåŒº",
        445221: "å¹¿ä¸œçœæ­é˜³å¸‚æ­ä¸œåŽ¿",
        445222: "å¹¿ä¸œçœæ­é˜³å¸‚æ­è¥¿åŽ¿",
        445224: "å¹¿ä¸œçœæ­é˜³å¸‚æƒ æ¥åŽ¿",
        445281: "å¹¿ä¸œçœæ­é˜³å¸‚æ™®å®å¸‚",
        445300: "å¹¿ä¸œçœäº‘æµ®å¸‚",
        445301: "å¹¿ä¸œçœäº‘æµ®å¸‚å¸‚è¾–åŒº",
        445302: "å¹¿ä¸œçœäº‘æµ®å¸‚äº‘åŸŽåŒº",
        445321: "å¹¿ä¸œçœäº‘æµ®å¸‚æ–°å…´åŽ¿",
        445322: "å¹¿ä¸œçœäº‘æµ®å¸‚éƒå—åŽ¿",
        445323: "å¹¿ä¸œçœäº‘æµ®å¸‚äº‘å®‰åŽ¿",
        445381: "å¹¿ä¸œçœäº‘æµ®å¸‚ç½—å®šå¸‚",
        45e4: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒº",
        450100: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚",
        450101: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚å¸‚è¾–åŒº",
        450102: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚å…´å®åŒº",
        450103: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚æ–°åŸŽåŒº",
        450104: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚åŸŽåŒ—åŒº",
        450105: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚æ±Ÿå—åŒº",
        450106: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚æ°¸æ–°åŒº",
        450111: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚å¸‚éƒŠåŒº",
        450121: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚é‚•å®åŽ¿",
        450122: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚æ­¦é¸£åŽ¿",
        450200: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚",
        450201: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚å¸‚è¾–åŒº",
        450202: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚åŸŽä¸­åŒº",
        450203: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚é±¼å³°åŒº",
        450204: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚æŸ³å—åŒº",
        450205: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚æŸ³åŒ—åŒº",
        450211: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚å¸‚éƒŠåŒº",
        450221: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚æŸ³æ±ŸåŽ¿",
        450222: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚æŸ³åŸŽåŽ¿",
        450300: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚",
        450301: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å¸‚è¾–åŒº",
        450302: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚ç§€å³°åŒº",
        450303: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å å½©åŒº",
        450304: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚è±¡å±±åŒº",
        450305: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚ä¸ƒæ˜ŸåŒº",
        450311: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚é›å±±åŒº",
        450321: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚é˜³æœ”åŽ¿",
        450322: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚ä¸´æ¡‚åŽ¿",
        450323: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚çµå·åŽ¿",
        450324: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å…¨å·žåŽ¿",
        450325: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å…´å®‰åŽ¿",
        450326: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚æ°¸ç¦åŽ¿",
        450327: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚çŒé˜³åŽ¿",
        450328: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚é¾™èƒœå„æ—è‡ªæ²»åŽ¿",
        450329: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚èµ„æºåŽ¿",
        450330: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å¹³ä¹åŽ¿",
        450331: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚è”æµ¦åŽ¿",
        450332: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚æ­åŸŽç‘¶æ—è‡ªæ²»åŽ¿",
        450400: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚",
        450401: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚å¸‚è¾–åŒº",
        450403: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚ä¸‡ç§€åŒº",
        450404: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚è¶å±±åŒº",
        450411: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚å¸‚éƒŠåŒº",
        450421: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚è‹æ¢§åŽ¿",
        450422: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚è—¤åŽ¿",
        450423: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚è’™å±±åŽ¿",
        450481: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚å²‘æºªå¸‚",
        450500: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚",
        450501: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚å¸‚è¾–åŒº",
        450502: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚æµ·åŸŽåŒº",
        450503: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚é“¶æµ·åŒº",
        450512: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚é“å±±æ¸¯åŒº",
        450521: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚åˆæµ¦åŽ¿",
        450600: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚",
        450601: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚å¸‚è¾–åŒº",
        450602: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚æ¸¯å£åŒº",
        450603: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚é˜²åŸŽåŒº",
        450621: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚ä¸Šæ€åŽ¿",
        450681: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚ä¸œå…´å¸‚",
        450700: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚",
        450701: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚å¸‚è¾–åŒº",
        450702: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚é’¦å—åŒº",
        450703: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚é’¦åŒ—åŒº",
        450721: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚çµå±±åŽ¿",
        450722: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚æµ¦åŒ—åŽ¿",
        450800: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚",
        450801: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚å¸‚è¾–åŒº",
        450802: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚æ¸¯åŒ—åŒº",
        450803: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚æ¸¯å—åŒº",
        450821: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚å¹³å—åŽ¿",
        450881: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚æ¡‚å¹³å¸‚",
        450900: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚",
        450901: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚å¸‚è¾–åŒº",
        450902: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚çŽ‰å·žåŒº",
        450921: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚å®¹åŽ¿",
        450922: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚é™†å·åŽ¿",
        450923: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚åšç™½åŽ¿",
        450924: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚å…´ä¸šåŽ¿",
        450981: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚åŒ—æµå¸‚",
        452100: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒº",
        452101: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå‡­ç¥¥å¸‚",
        452122: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºæ¨ªåŽ¿",
        452123: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå®¾é˜³åŽ¿",
        452124: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºä¸Šæž—åŽ¿",
        452126: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºéš†å®‰åŽ¿",
        452127: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºé©¬å±±åŽ¿",
        452128: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºæ‰¶ç»¥åŽ¿",
        452129: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå´‡å·¦åŽ¿",
        452130: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå¤§æ–°åŽ¿",
        452131: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå¤©ç­‰åŽ¿",
        452132: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå®æ˜ŽåŽ¿",
        452133: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºé¾™å·žåŽ¿",
        452200: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒº",
        452201: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºåˆå±±å¸‚",
        452223: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºé¹¿å¯¨åŽ¿",
        452224: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºè±¡å·žåŽ¿",
        452225: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºæ­¦å®£åŽ¿",
        452226: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºæ¥å®¾åŽ¿",
        452227: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºèžå®‰åŽ¿",
        452228: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºä¸‰æ±Ÿä¾—æ—è‡ªæ²»åŽ¿",
        452229: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºèžæ°´è‹—æ—è‡ªæ²»åŽ¿",
        452230: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºé‡‘ç§€ç‘¶æ—è‡ªæ²»åŽ¿",
        452231: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºå¿»åŸŽåŽ¿",
        452400: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒº",
        452402: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒºè´ºå·žå¸‚",
        452424: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒºæ˜­å¹³åŽ¿",
        452427: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒºé’Ÿå±±åŽ¿",
        452428: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒºå¯Œå·ç‘¶æ—è‡ªæ²»åŽ¿",
        452600: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒº",
        452601: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºç™¾è‰²å¸‚",
        452622: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºç”°é˜³åŽ¿",
        452623: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºç”°ä¸œåŽ¿",
        452624: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºå¹³æžœåŽ¿",
        452625: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºå¾·ä¿åŽ¿",
        452626: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºé–è¥¿åŽ¿",
        452627: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºé‚£å¡åŽ¿",
        452628: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºå‡Œäº‘åŽ¿",
        452629: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºä¹ä¸šåŽ¿",
        452630: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºç”°æž—åŽ¿",
        452631: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºéš†æž—å„æ—è‡ªæ²»åŽ¿",
        452632: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºè¥¿æž—åŽ¿",
        452700: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒº",
        452701: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºæ²³æ± å¸‚",
        452702: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå®œå·žå¸‚",
        452723: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºç½—åŸŽä»«ä½¬æ—è‡ªæ²»åŽ¿",
        452724: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºçŽ¯æ±Ÿæ¯›å—æ—è‡ªæ²»åŽ¿",
        452725: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå—ä¸¹åŽ¿",
        452726: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå¤©å³¨åŽ¿",
        452727: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå‡¤å±±åŽ¿",
        452728: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºä¸œå…°åŽ¿",
        452729: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå·´é©¬ç‘¶æ—è‡ªæ²»åŽ¿",
        452730: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºéƒ½å®‰ç‘¶æ—è‡ªæ²»åŽ¿",
        452731: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå¤§åŒ–ç‘¶æ—è‡ªæ²»åŽ¿",
        46e4: "æµ·å—çœ",
        460001: "æµ·å—çœä¸‰äºšå¸‚é€šä»€å¸‚",
        460002: "æµ·å—çœä¸‰äºšå¸‚ç¼æµ·å¸‚",
        460003: "æµ·å—çœä¸‰äºšå¸‚å„‹å·žå¸‚",
        460004: "æµ·å—çœä¸‰äºšå¸‚ç¼å±±å¸‚",
        460005: "æµ·å—çœä¸‰äºšå¸‚æ–‡æ˜Œå¸‚",
        460006: "æµ·å—çœä¸‰äºšå¸‚ä¸‡å®å¸‚",
        460007: "æµ·å—çœä¸‰äºšå¸‚ä¸œæ–¹å¸‚",
        460025: "æµ·å—çœä¸‰äºšå¸‚å®šå®‰åŽ¿",
        460026: "æµ·å—çœä¸‰äºšå¸‚å±¯æ˜ŒåŽ¿",
        460027: "æµ·å—çœä¸‰äºšå¸‚æ¾„è¿ˆåŽ¿",
        460028: "æµ·å—çœä¸‰äºšå¸‚ä¸´é«˜åŽ¿",
        460030: "æµ·å—çœä¸‰äºšå¸‚ç™½æ²™é»Žæ—è‡ªæ²»åŽ¿",
        460031: "æµ·å—çœä¸‰äºšå¸‚æ˜Œæ±Ÿé»Žæ—è‡ªæ²»åŽ¿",
        460033: "æµ·å—çœä¸‰äºšå¸‚ä¹ä¸œé»Žæ—è‡ªæ²»åŽ¿",
        460034: "æµ·å—çœä¸‰äºšå¸‚é™µæ°´é»Žæ—è‡ªæ²»åŽ¿",
        460035: "æµ·å—çœä¸‰äºšå¸‚ä¿äº­é»Žæ—è‹—æ—è‡ªæ²»åŽ¿",
        460036: "æµ·å—çœä¸‰äºšå¸‚ç¼ä¸­é»Žæ—è‹—æ—è‡ªæ²»åŽ¿",
        460037: "æµ·å—çœè¥¿æ²™ç¾¤å²›",
        460038: "æµ·å—çœå—æ²™ç¾¤å²›",
        460039: "æµ·å—çœä¸­æ²™ç¾¤å²›çš„å²›ç¤åŠå…¶æµ·åŸŸ",
        460100: "æµ·å—çœæµ·å£å¸‚",
        460101: "æµ·å—çœæµ·å£å¸‚å¸‚è¾–åŒº",
        460102: "æµ·å—çœæµ·å£å¸‚æŒ¯ä¸œåŒº",
        460103: "æµ·å—çœæµ·å£å¸‚æ–°åŽåŒº",
        460104: "æµ·å—çœæµ·å£å¸‚ç§€è‹±åŒº",
        460200: "æµ·å—çœä¸‰äºšå¸‚",
        460201: "æµ·å—çœä¸‰äºšå¸‚å¸‚è¾–åŒº",
        5e5: "é‡åº†å¸‚",
        500100: "é‡åº†å¸‚å¸‚è¾–åŒº",
        500101: "é‡åº†å¸‚ä¸‡å·žåŒº",
        500102: "é‡åº†å¸‚æ¶ªé™µåŒº",
        500103: "é‡åº†å¸‚æ¸ä¸­åŒº",
        500104: "é‡åº†å¸‚å¤§æ¸¡å£åŒº",
        500105: "é‡åº†å¸‚æ±ŸåŒ—åŒº",
        500106: "é‡åº†å¸‚æ²™åªååŒº",
        500107: "é‡åº†å¸‚ä¹é¾™å¡åŒº",
        500108: "é‡åº†å¸‚å—å²¸åŒº",
        500109: "é‡åº†å¸‚åŒ—ç¢šåŒº",
        500110: "é‡åº†å¸‚ä¸‡ç››åŒº",
        500111: "é‡åº†å¸‚åŒæ¡¥åŒº",
        500112: "é‡åº†å¸‚æ¸åŒ—åŒº",
        500113: "é‡åº†å¸‚å·´å—åŒº",
        500200: "é‡åº†å¸‚åŽ¿",
        500221: "é‡åº†å¸‚é•¿å¯¿åŽ¿",
        500222: "é‡åº†å¸‚ç¶¦æ±ŸåŽ¿",
        500223: "é‡åº†å¸‚æ½¼å—åŽ¿",
        500224: "é‡åº†å¸‚é“œæ¢åŽ¿",
        500225: "é‡åº†å¸‚å¤§è¶³åŽ¿",
        500226: "é‡åº†å¸‚è£æ˜ŒåŽ¿",
        500227: "é‡åº†å¸‚ç’§å±±åŽ¿",
        500228: "é‡åº†å¸‚æ¢å¹³åŽ¿",
        500229: "é‡åº†å¸‚åŸŽå£åŽ¿",
        500230: "é‡åº†å¸‚ä¸°éƒ½åŽ¿",
        500231: "é‡åº†å¸‚åž«æ±ŸåŽ¿",
        500232: "é‡åº†å¸‚æ­¦éš†åŽ¿",
        500233: "é‡åº†å¸‚å¿ åŽ¿",
        500234: "é‡åº†å¸‚å¼€åŽ¿",
        500235: "é‡åº†å¸‚äº‘é˜³åŽ¿",
        500236: "é‡åº†å¸‚å¥‰èŠ‚åŽ¿",
        500237: "é‡åº†å¸‚å·«å±±åŽ¿",
        500238: "é‡åº†å¸‚å·«æºªåŽ¿",
        500239: "é‡åº†å¸‚é»”æ±ŸåœŸå®¶æ—è‹—æ—è‡ªæ²»åŽ¿",
        500240: "é‡åº†å¸‚çŸ³æŸ±åœŸå®¶æ—è‡ªæ²»åŽ¿",
        500241: "é‡åº†å¸‚ç§€å±±åœŸå®¶æ—è‹—æ—è‡ªæ²»åŽ¿",
        500242: "é‡åº†å¸‚é…‰é˜³åœŸå®¶æ—è‹—æ—è‡ªæ²»åŽ¿",
        500243: "é‡åº†å¸‚å½­æ°´è‹—æ—åœŸå®¶æ—è‡ªæ²»åŽ¿",
        500300: "é‡åº†å¸‚(å¸‚)",
        500381: "é‡åº†å¸‚æ±Ÿæ´¥å¸‚",
        500382: "é‡åº†å¸‚åˆå·å¸‚",
        500383: "é‡åº†å¸‚æ°¸å·å¸‚",
        500384: "é‡åº†å¸‚å—å·å¸‚",
        51e4: "å››å·çœ",
        510100: "å››å·çœæˆéƒ½å¸‚",
        510101: "å››å·çœæˆéƒ½å¸‚å¸‚è¾–åŒº",
        510104: "å››å·çœæˆéƒ½å¸‚é”¦æ±ŸåŒº",
        510105: "å››å·çœæˆéƒ½å¸‚é’ç¾ŠåŒº",
        510106: "å››å·çœæˆéƒ½å¸‚é‡‘ç‰›åŒº",
        510107: "å››å·çœæˆéƒ½å¸‚æ­¦ä¾¯åŒº",
        510108: "å››å·çœæˆéƒ½å¸‚æˆåŽåŒº",
        510112: "å››å·çœæˆéƒ½å¸‚é¾™æ³‰é©¿åŒº",
        510113: "å››å·çœæˆéƒ½å¸‚é’ç™½æ±ŸåŒº",
        510121: "å››å·çœæˆéƒ½å¸‚é‡‘å ‚åŽ¿",
        510122: "å››å·çœæˆéƒ½å¸‚åŒæµåŽ¿",
        510123: "å››å·çœæˆéƒ½å¸‚æ¸©æ±ŸåŽ¿",
        510124: "å››å·çœæˆéƒ½å¸‚éƒ«åŽ¿",
        510125: "å››å·çœæˆéƒ½å¸‚æ–°éƒ½åŽ¿",
        510129: "å››å·çœæˆéƒ½å¸‚å¤§é‚‘åŽ¿",
        510131: "å››å·çœæˆéƒ½å¸‚è’²æ±ŸåŽ¿",
        510132: "å››å·çœæˆéƒ½å¸‚æ–°æ´¥åŽ¿",
        510181: "å››å·çœæˆéƒ½å¸‚éƒ½æ±Ÿå °å¸‚",
        510182: "å››å·çœæˆéƒ½å¸‚å½­å·žå¸‚",
        510183: "å››å·çœæˆéƒ½å¸‚é‚›å´ƒå¸‚",
        510184: "å››å·çœæˆéƒ½å¸‚å´‡å·žå¸‚",
        510300: "å››å·çœè‡ªè´¡å¸‚",
        510301: "å››å·çœè‡ªè´¡å¸‚å¸‚è¾–åŒº",
        510302: "å››å·çœè‡ªè´¡å¸‚è‡ªæµäº•åŒº",
        510303: "å››å·çœè‡ªè´¡å¸‚è´¡äº•åŒº",
        510304: "å››å·çœè‡ªè´¡å¸‚å¤§å®‰åŒº",
        510311: "å››å·çœè‡ªè´¡å¸‚æ²¿æ»©åŒº",
        510321: "å››å·çœè‡ªè´¡å¸‚è£åŽ¿",
        510322: "å››å·çœè‡ªè´¡å¸‚å¯Œé¡ºåŽ¿",
        510400: "å››å·çœæ”€æžèŠ±å¸‚",
        510401: "å››å·çœæ”€æžèŠ±å¸‚å¸‚è¾–åŒº",
        510402: "å››å·çœæ”€æžèŠ±å¸‚ä¸œåŒº",
        510403: "å››å·çœæ”€æžèŠ±å¸‚è¥¿åŒº",
        510411: "å››å·çœæ”€æžèŠ±å¸‚ä»å’ŒåŒº",
        510421: "å››å·çœæ”€æžèŠ±å¸‚ç±³æ˜“åŽ¿",
        510422: "å››å·çœæ”€æžèŠ±å¸‚ç›è¾¹åŽ¿",
        510500: "å››å·çœæ³¸å·žå¸‚",
        510501: "å››å·çœæ³¸å·žå¸‚å¸‚è¾–åŒº",
        510502: "å››å·çœæ³¸å·žå¸‚æ±Ÿé˜³åŒº",
        510503: "å››å·çœæ³¸å·žå¸‚çº³æºªåŒº",
        510504: "å››å·çœæ³¸å·žå¸‚é¾™é©¬æ½­åŒº",
        510521: "å››å·çœæ³¸å·žå¸‚æ³¸åŽ¿",
        510522: "å››å·çœæ³¸å·žå¸‚åˆæ±ŸåŽ¿",
        510524: "å››å·çœæ³¸å·žå¸‚å™æ°¸åŽ¿",
        510525: "å››å·çœæ³¸å·žå¸‚å¤è”ºåŽ¿",
        510600: "å››å·çœå¾·é˜³å¸‚",
        510601: "å››å·çœå¾·é˜³å¸‚å¸‚è¾–åŒº",
        510603: "å››å·çœå¾·é˜³å¸‚æ—Œé˜³åŒº",
        510623: "å››å·çœå¾·é˜³å¸‚ä¸­æ±ŸåŽ¿",
        510626: "å››å·çœå¾·é˜³å¸‚ç½—æ±ŸåŽ¿",
        510681: "å››å·çœå¾·é˜³å¸‚å¹¿æ±‰å¸‚",
        510682: "å››å·çœå¾·é˜³å¸‚ä»€é‚¡å¸‚",
        510683: "å››å·çœå¾·é˜³å¸‚ç»µç«¹å¸‚",
        510700: "å››å·çœç»µé˜³å¸‚",
        510701: "å››å·çœç»µé˜³å¸‚å¸‚è¾–åŒº",
        510703: "å››å·çœç»µé˜³å¸‚æ¶ªåŸŽåŒº",
        510704: "å››å·çœç»µé˜³å¸‚æ¸¸ä»™åŒº",
        510722: "å››å·çœç»µé˜³å¸‚ä¸‰å°åŽ¿",
        510723: "å››å·çœç»µé˜³å¸‚ç›äº­åŽ¿",
        510724: "å››å·çœç»µé˜³å¸‚å®‰åŽ¿",
        510725: "å››å·çœç»µé˜³å¸‚æ¢“æ½¼åŽ¿",
        510726: "å››å·çœç»µé˜³å¸‚åŒ—å·åŽ¿",
        510727: "å››å·çœç»µé˜³å¸‚å¹³æ­¦åŽ¿",
        510781: "å››å·çœç»µé˜³å¸‚æ±Ÿæ²¹å¸‚",
        510800: "å››å·çœå¹¿å…ƒå¸‚",
        510801: "å››å·çœå¹¿å…ƒå¸‚å¸‚è¾–åŒº",
        510802: "å››å·çœå¹¿å…ƒå¸‚å¸‚ä¸­åŒº",
        510811: "å››å·çœå¹¿å…ƒå¸‚å…ƒååŒº",
        510812: "å››å·çœå¹¿å…ƒå¸‚æœå¤©åŒº",
        510821: "å››å·çœå¹¿å…ƒå¸‚æ—ºè‹åŽ¿",
        510822: "å››å·çœå¹¿å…ƒå¸‚é’å·åŽ¿",
        510823: "å››å·çœå¹¿å…ƒå¸‚å‰‘é˜åŽ¿",
        510824: "å››å·çœå¹¿å…ƒå¸‚è‹æºªåŽ¿",
        510900: "å››å·çœé‚å®å¸‚",
        510901: "å››å·çœé‚å®å¸‚å¸‚è¾–åŒº",
        510902: "å››å·çœé‚å®å¸‚å¸‚ä¸­åŒº",
        510921: "å››å·çœé‚å®å¸‚è“¬æºªåŽ¿",
        510922: "å››å·çœé‚å®å¸‚å°„æ´ªåŽ¿",
        510923: "å››å·çœé‚å®å¸‚å¤§è‹±åŽ¿",
        511e3: "å››å·çœå†…æ±Ÿå¸‚",
        511001: "å››å·çœå†…æ±Ÿå¸‚å¸‚è¾–åŒº",
        511002: "å››å·çœå†…æ±Ÿå¸‚å¸‚ä¸­åŒº",
        511011: "å››å·çœå†…æ±Ÿå¸‚ä¸œå…´åŒº",
        511024: "å››å·çœå†…æ±Ÿå¸‚å¨è¿œåŽ¿",
        511025: "å››å·çœå†…æ±Ÿå¸‚èµ„ä¸­åŽ¿",
        511028: "å››å·çœå†…æ±Ÿå¸‚éš†æ˜ŒåŽ¿",
        511100: "å››å·çœä¹å±±å¸‚",
        511101: "å››å·çœä¹å±±å¸‚å¸‚è¾–åŒº",
        511102: "å››å·çœä¹å±±å¸‚å¸‚ä¸­åŒº",
        511111: "å››å·çœä¹å±±å¸‚æ²™æ¹¾åŒº",
        511112: "å››å·çœä¹å±±å¸‚äº”é€šæ¡¥åŒº",
        511113: "å››å·çœä¹å±±å¸‚é‡‘å£æ²³åŒº",
        511123: "å››å·çœä¹å±±å¸‚çŠä¸ºåŽ¿",
        511124: "å››å·çœä¹å±±å¸‚äº•ç ”åŽ¿",
        511126: "å››å·çœä¹å±±å¸‚å¤¹æ±ŸåŽ¿",
        511129: "å››å·çœä¹å±±å¸‚æ²å·åŽ¿",
        511132: "å››å·çœä¹å±±å¸‚å³¨è¾¹å½æ—è‡ªæ²»åŽ¿",
        511133: "å››å·çœä¹å±±å¸‚é©¬è¾¹å½æ—è‡ªæ²»åŽ¿",
        511181: "å››å·çœä¹å±±å¸‚å³¨çœ‰å±±å¸‚",
        511300: "å››å·çœå—å……å¸‚",
        511301: "å››å·çœå—å……å¸‚å¸‚è¾–åŒº",
        511302: "å››å·çœå—å……å¸‚é¡ºåº†åŒº",
        511303: "å››å·çœå—å……å¸‚é«˜åªåŒº",
        511304: "å››å·çœå—å……å¸‚å˜‰é™µåŒº",
        511321: "å››å·çœå—å……å¸‚å—éƒ¨åŽ¿",
        511322: "å››å·çœå—å……å¸‚è¥å±±åŽ¿",
        511323: "å››å·çœå—å……å¸‚è“¬å®‰åŽ¿",
        511324: "å››å·çœå—å……å¸‚ä»ªé™‡åŽ¿",
        511325: "å››å·çœå—å……å¸‚è¥¿å……åŽ¿",
        511381: "å››å·çœå—å……å¸‚é˜†ä¸­å¸‚",
        511500: "å››å·çœå®œå®¾å¸‚",
        511501: "å››å·çœå®œå®¾å¸‚å¸‚è¾–åŒº",
        511502: "å››å·çœå®œå®¾å¸‚ç¿ å±åŒº",
        511521: "å››å·çœå®œå®¾å¸‚å®œå®¾åŽ¿",
        511522: "å››å·çœå®œå®¾å¸‚å—æºªåŽ¿",
        511523: "å››å·çœå®œå®¾å¸‚æ±Ÿå®‰åŽ¿",
        511524: "å››å·çœå®œå®¾å¸‚é•¿å®åŽ¿",
        511525: "å››å·çœå®œå®¾å¸‚é«˜åŽ¿",
        511526: "å››å·çœå®œå®¾å¸‚ç™åŽ¿",
        511527: "å››å·çœå®œå®¾å¸‚ç­ è¿žåŽ¿",
        511528: "å››å·çœå®œå®¾å¸‚å…´æ–‡åŽ¿",
        511529: "å››å·çœå®œå®¾å¸‚å±å±±åŽ¿",
        511600: "å››å·çœå¹¿å®‰å¸‚",
        511601: "å››å·çœå¹¿å®‰å¸‚å¸‚è¾–åŒº",
        511602: "å››å·çœå¹¿å®‰å¸‚å¹¿å®‰åŒº",
        511621: "å››å·çœå¹¿å®‰å¸‚å²³æ± åŽ¿",
        511622: "å››å·çœå¹¿å®‰å¸‚æ­¦èƒœåŽ¿",
        511623: "å››å·çœå¹¿å®‰å¸‚é‚»æ°´åŽ¿",
        511681: "å››å·çœå¹¿å®‰å¸‚åŽè“¥å¸‚",
        513e3: "å››å·çœè¾¾å·åœ°åŒº",
        513001: "å››å·çœè¾¾å·åœ°åŒºè¾¾å·å¸‚",
        513002: "å››å·çœè¾¾å·åœ°åŒºä¸‡æºå¸‚",
        513021: "å››å·çœè¾¾å·åœ°åŒºè¾¾åŽ¿",
        513022: "å››å·çœè¾¾å·åœ°åŒºå®£æ±‰åŽ¿",
        513023: "å››å·çœè¾¾å·åœ°åŒºå¼€æ±ŸåŽ¿",
        513029: "å››å·çœè¾¾å·åœ°åŒºå¤§ç«¹åŽ¿",
        513030: "å››å·çœè¾¾å·åœ°åŒºæ¸ åŽ¿",
        513100: "å››å·çœé›…å®‰åœ°åŒº",
        513101: "å››å·çœé›…å®‰åœ°åŒºé›…å®‰å¸‚",
        513122: "å››å·çœé›…å®‰åœ°åŒºåå±±åŽ¿",
        513123: "å››å·çœé›…å®‰åœ°åŒºè¥ç»åŽ¿",
        513124: "å››å·çœé›…å®‰åœ°åŒºæ±‰æºåŽ¿",
        513125: "å››å·çœé›…å®‰åœ°åŒºçŸ³æ£‰åŽ¿",
        513126: "å››å·çœé›…å®‰åœ°åŒºå¤©å…¨åŽ¿",
        513127: "å››å·çœé›…å®‰åœ°åŒºèŠ¦å±±åŽ¿",
        513128: "å››å·çœé›…å®‰åœ°åŒºå®å…´åŽ¿",
        513200: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·ž",
        513221: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žæ±¶å·åŽ¿",
        513222: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žç†åŽ¿",
        513223: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žèŒ‚åŽ¿",
        513224: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žæ¾æ½˜åŽ¿",
        513225: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žä¹å¯¨æ²ŸåŽ¿",
        513226: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žé‡‘å·åŽ¿",
        513227: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žå°é‡‘åŽ¿",
        513228: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žé»‘æ°´åŽ¿",
        513229: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žé©¬å°”åº·åŽ¿",
        513230: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žå£¤å¡˜åŽ¿",
        513231: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žé˜¿ååŽ¿",
        513232: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žè‹¥å°”ç›–åŽ¿",
        513233: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žçº¢åŽŸåŽ¿",
        513300: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·ž",
        513321: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žåº·å®šåŽ¿",
        513322: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žæ³¸å®šåŽ¿",
        513323: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žä¸¹å·´åŽ¿",
        513324: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žä¹é¾™åŽ¿",
        513325: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žé›…æ±ŸåŽ¿",
        513326: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žé“å­šåŽ¿",
        513327: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç‚‰éœåŽ¿",
        513328: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç”˜å­œåŽ¿",
        513329: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žæ–°é¾™åŽ¿",
        513330: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žå¾·æ ¼åŽ¿",
        513331: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç™½çŽ‰åŽ¿",
        513332: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žçŸ³æ¸ åŽ¿",
        513333: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žè‰²è¾¾åŽ¿",
        513334: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç†å¡˜åŽ¿",
        513335: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žå·´å¡˜åŽ¿",
        513336: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žä¹¡åŸŽåŽ¿",
        513337: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç¨»åŸŽåŽ¿",
        513338: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žå¾—è£åŽ¿",
        513400: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·ž",
        513401: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žè¥¿æ˜Œå¸‚",
        513422: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žæœ¨é‡Œè—æ—è‡ªæ²»åŽ¿",
        513423: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žç›æºåŽ¿",
        513424: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå¾·æ˜ŒåŽ¿",
        513425: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žä¼šç†åŽ¿",
        513426: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žä¼šä¸œåŽ¿",
        513427: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå®å—åŽ¿",
        513428: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žæ™®æ ¼åŽ¿",
        513429: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå¸ƒæ‹–åŽ¿",
        513430: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žé‡‘é˜³åŽ¿",
        513431: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žæ˜­è§‰åŽ¿",
        513432: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå–œå¾·åŽ¿",
        513433: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå†•å®åŽ¿",
        513434: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žè¶Šè¥¿åŽ¿",
        513435: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žç”˜æ´›åŽ¿",
        513436: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žç¾Žå§‘åŽ¿",
        513437: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žé›·æ³¢åŽ¿",
        513700: "å››å·çœå·´ä¸­åœ°åŒº",
        513701: "å››å·çœå·´ä¸­åœ°åŒºå·´ä¸­å¸‚",
        513721: "å››å·çœå·´ä¸­åœ°åŒºé€šæ±ŸåŽ¿",
        513722: "å››å·çœå·´ä¸­åœ°åŒºå—æ±ŸåŽ¿",
        513723: "å››å·çœå·´ä¸­åœ°åŒºå¹³æ˜ŒåŽ¿",
        513800: "å››å·çœçœ‰å±±åœ°åŒº",
        513821: "å››å·çœçœ‰å±±åœ°åŒºçœ‰å±±åŽ¿",
        513822: "å››å·çœçœ‰å±±åœ°åŒºä»å¯¿åŽ¿",
        513823: "å››å·çœçœ‰å±±åœ°åŒºå½­å±±åŽ¿",
        513824: "å››å·çœçœ‰å±±åœ°åŒºæ´ªé›…åŽ¿",
        513825: "å››å·çœçœ‰å±±åœ°åŒºä¸¹æ£±åŽ¿",
        513826: "å››å·çœçœ‰å±±åœ°åŒºé’ç¥žåŽ¿",
        513900: "å››å·çœçœ‰å±±åœ°åŒºèµ„é˜³åœ°åŒº",
        513901: "å››å·çœçœ‰å±±åœ°åŒºèµ„é˜³å¸‚",
        513902: "å››å·çœçœ‰å±±åœ°åŒºç®€é˜³å¸‚",
        513921: "å››å·çœçœ‰å±±åœ°åŒºå®‰å²³åŽ¿",
        513922: "å››å·çœçœ‰å±±åœ°åŒºä¹è‡³åŽ¿",
        52e4: "è´µå·žçœ",
        520100: "è´µå·žçœè´µé˜³å¸‚",
        520101: "è´µå·žçœè´µé˜³å¸‚å¸‚è¾–åŒº",
        520102: "è´µå·žçœè´µé˜³å¸‚å—æ˜ŽåŒº",
        520103: "è´µå·žçœè´µé˜³å¸‚äº‘å²©åŒº",
        520111: "è´µå·žçœè´µé˜³å¸‚èŠ±æºªåŒº",
        520112: "è´µå·žçœè´µé˜³å¸‚ä¹Œå½“åŒº",
        520113: "è´µå·žçœè´µé˜³å¸‚ç™½äº‘åŒº",
        520121: "è´µå·žçœè´µé˜³å¸‚å¼€é˜³åŽ¿",
        520122: "è´µå·žçœè´µé˜³å¸‚æ¯çƒ½åŽ¿",
        520123: "è´µå·žçœè´µé˜³å¸‚ä¿®æ–‡åŽ¿",
        520181: "è´µå·žçœè´µé˜³å¸‚æ¸…é•‡å¸‚",
        520200: "è´µå·žçœå…­ç›˜æ°´å¸‚",
        520201: "è´µå·žçœå…­ç›˜æ°´å¸‚é’Ÿå±±åŒº",
        520202: "è´µå·žçœå…­ç›˜æ°´å¸‚ç›˜åŽ¿ç‰¹åŒº",
        520203: "è´µå·žçœå…­ç›˜æ°´å¸‚å…­æžç‰¹åŒº",
        520221: "è´µå·žçœå…­ç›˜æ°´å¸‚æ°´åŸŽåŽ¿",
        520300: "è´µå·žçœéµä¹‰å¸‚",
        520301: "è´µå·žçœéµä¹‰å¸‚å¸‚è¾–åŒº",
        520302: "è´µå·žçœéµä¹‰å¸‚çº¢èŠ±å²—åŒº",
        520321: "è´µå·žçœéµä¹‰å¸‚éµä¹‰åŽ¿",
        520322: "è´µå·žçœéµä¹‰å¸‚æ¡æ¢“åŽ¿",
        520323: "è´µå·žçœéµä¹‰å¸‚ç»¥é˜³åŽ¿",
        520324: "è´µå·žçœéµä¹‰å¸‚æ­£å®‰åŽ¿",
        520325: "è´µå·žçœéµä¹‰å¸‚é“çœŸä»¡ä½¬æ—è‹—æ—è‡ªæ²»åŽ¿",
        520326: "è´µå·žçœéµä¹‰å¸‚åŠ¡å·ä»¡ä½¬æ—è‹—æ—è‡ªæ²»åŽ¿",
        520327: "è´µå·žçœéµä¹‰å¸‚å‡¤å†ˆåŽ¿",
        520328: "è´µå·žçœéµä¹‰å¸‚æ¹„æ½­åŽ¿",
        520329: "è´µå·žçœéµä¹‰å¸‚ä½™åº†åŽ¿",
        520330: "è´µå·žçœéµä¹‰å¸‚ä¹ æ°´åŽ¿",
        520381: "è´µå·žçœéµä¹‰å¸‚èµ¤æ°´å¸‚",
        520382: "è´µå·žçœéµä¹‰å¸‚ä»æ€€å¸‚",
        522200: "è´µå·žçœé“œä»åœ°åŒº",
        522201: "è´µå·žçœé“œä»åœ°åŒºé“œä»å¸‚",
        522222: "è´µå·žçœé“œä»åœ°åŒºæ±Ÿå£åŽ¿",
        522223: "è´µå·žçœé“œä»åœ°åŒºçŽ‰å±ä¾—æ—è‡ªæ²»åŽ¿",
        522224: "è´µå·žçœé“œä»åœ°åŒºçŸ³é˜¡åŽ¿",
        522225: "è´µå·žçœé“œä»åœ°åŒºæ€å—åŽ¿",
        522226: "è´µå·žçœé“œä»åœ°åŒºå°æ±ŸåœŸå®¶æ—è‹—æ—è‡ªæ²»åŽ¿",
        522227: "è´µå·žçœé“œä»åœ°åŒºå¾·æ±ŸåŽ¿",
        522228: "è´µå·žçœé“œä»åœ°åŒºæ²¿æ²³åœŸå®¶æ—è‡ªæ²»åŽ¿",
        522229: "è´µå·žçœé“œä»åœ°åŒºæ¾æ¡ƒè‹—æ—è‡ªæ²»åŽ¿",
        522230: "è´µå·žçœé“œä»åœ°åŒºä¸‡å±±ç‰¹åŒº",
        522300: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·ž",
        522301: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå…´ä¹‰å¸‚",
        522322: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå…´ä»åŽ¿",
        522323: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žæ™®å®‰åŽ¿",
        522324: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žæ™´éš†åŽ¿",
        522325: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žè´žä¸°åŽ¿",
        522326: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žæœ›è°ŸåŽ¿",
        522327: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå†Œäº¨åŽ¿",
        522328: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå®‰é¾™åŽ¿",
        522400: "è´µå·žçœæ¯•èŠ‚åœ°åŒº",
        522401: "è´µå·žçœæ¯•èŠ‚åœ°åŒºæ¯•èŠ‚å¸‚",
        522422: "è´µå·žçœæ¯•èŠ‚åœ°åŒºå¤§æ–¹åŽ¿",
        522423: "è´µå·žçœæ¯•èŠ‚åœ°åŒºé»”è¥¿åŽ¿",
        522424: "è´µå·žçœæ¯•èŠ‚åœ°åŒºé‡‘æ²™åŽ¿",
        522425: "è´µå·žçœæ¯•èŠ‚åœ°åŒºç»‡é‡‘åŽ¿",
        522426: "è´µå·žçœæ¯•èŠ‚åœ°åŒºçº³é›åŽ¿",
        522427: "è´µå·žçœæ¯•èŠ‚åœ°åŒºå¨å®å½æ—å›žæ—è‹—æ—è‡ªæ²»åŽ¿",
        522428: "è´µå·žçœæ¯•èŠ‚åœ°åŒºèµ«ç« åŽ¿",
        522500: "è´µå·žçœå®‰é¡ºåœ°åŒº",
        522501: "è´µå·žçœå®‰é¡ºåœ°åŒºå®‰é¡ºå¸‚",
        522526: "è´µå·žçœå®‰é¡ºåœ°åŒºå¹³ååŽ¿",
        522527: "è´µå·žçœå®‰é¡ºåœ°åŒºæ™®å®šåŽ¿",
        522528: "è´µå·žçœå®‰é¡ºåœ°åŒºå…³å²­å¸ƒä¾æ—è‹—æ—è‡ªæ²»åŽ¿",
        522529: "è´µå·žçœå®‰é¡ºåœ°åŒºé•‡å®å¸ƒä¾æ—è‹—æ—è‡ªæ²»åŽ¿",
        522530: "è´µå·žçœå®‰é¡ºåœ°åŒºç´«äº‘è‹—æ—å¸ƒä¾æ—è‡ªæ²»åŽ¿",
        522600: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·ž",
        522601: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå‡¯é‡Œå¸‚",
        522622: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé»„å¹³åŽ¿",
        522623: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žæ–½ç§‰åŽ¿",
        522624: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žä¸‰ç©—åŽ¿",
        522625: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé•‡è¿œåŽ¿",
        522626: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå²‘å·©åŽ¿",
        522627: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå¤©æŸ±åŽ¿",
        522628: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé”¦å±åŽ¿",
        522629: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå‰‘æ²³åŽ¿",
        522630: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå°æ±ŸåŽ¿",
        522631: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé»Žå¹³åŽ¿",
        522632: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žæ¦•æ±ŸåŽ¿",
        522633: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žä»Žæ±ŸåŽ¿",
        522634: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé›·å±±åŽ¿",
        522635: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žéº»æ±ŸåŽ¿",
        522636: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žä¸¹å¯¨åŽ¿",
        522700: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·ž",
        522701: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žéƒ½åŒ€å¸‚",
        522702: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žç¦æ³‰å¸‚",
        522722: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žè”æ³¢åŽ¿",
        522723: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žè´µå®šåŽ¿",
        522725: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žç“®å®‰åŽ¿",
        522726: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žç‹¬å±±åŽ¿",
        522727: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå¹³å¡˜åŽ¿",
        522728: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žç½—ç”¸åŽ¿",
        522729: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žé•¿é¡ºåŽ¿",
        522730: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žé¾™é‡ŒåŽ¿",
        522731: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žæƒ æ°´åŽ¿",
        522732: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žä¸‰éƒ½æ°´æ—è‡ªæ²»åŽ¿",
        53e4: "äº‘å—çœ",
        530100: "äº‘å—çœæ˜†æ˜Žå¸‚",
        530101: "äº‘å—çœæ˜†æ˜Žå¸‚å¸‚è¾–åŒº",
        530102: "äº‘å—çœæ˜†æ˜Žå¸‚äº”åŽåŒº",
        530103: "äº‘å—çœæ˜†æ˜Žå¸‚ç›˜é¾™åŒº",
        530111: "äº‘å—çœæ˜†æ˜Žå¸‚å®˜æ¸¡åŒº",
        530112: "äº‘å—çœæ˜†æ˜Žå¸‚è¥¿å±±åŒº",
        530113: "äº‘å—çœæ˜†æ˜Žå¸‚ä¸œå·åŒº",
        530121: "äº‘å—çœæ˜†æ˜Žå¸‚å‘ˆè´¡åŽ¿",
        530122: "äº‘å—çœæ˜†æ˜Žå¸‚æ™‹å®åŽ¿",
        530124: "äº‘å—çœæ˜†æ˜Žå¸‚å¯Œæ°‘åŽ¿",
        530125: "äº‘å—çœæ˜†æ˜Žå¸‚å®œè‰¯åŽ¿",
        530126: "äº‘å—çœæ˜†æ˜Žå¸‚çŸ³æž—å½æ—è‡ªæ²»åŽ¿",
        530127: "äº‘å—çœæ˜†æ˜Žå¸‚åµ©æ˜ŽåŽ¿",
        530128: "äº‘å—çœæ˜†æ˜Žå¸‚ç¦„åŠå½æ—è‹—æ—è‡ªæ²»åŽ¿",
        530129: "äº‘å—çœæ˜†æ˜Žå¸‚å¯»ç”¸å›žæ—å½æ—è‡ªæ²»åŽ¿",
        530181: "äº‘å—çœæ˜†æ˜Žå¸‚å®‰å®å¸‚",
        530300: "äº‘å—çœæ›²é–å¸‚",
        530301: "äº‘å—çœæ›²é–å¸‚å¸‚è¾–åŒº",
        530302: "äº‘å—çœæ›²é–å¸‚éº’éºŸåŒº",
        530321: "äº‘å—çœæ›²é–å¸‚é©¬é¾™åŽ¿",
        530322: "äº‘å—çœæ›²é–å¸‚é™†è‰¯åŽ¿",
        530323: "äº‘å—çœæ›²é–å¸‚å¸ˆå®—åŽ¿",
        530324: "äº‘å—çœæ›²é–å¸‚ç½—å¹³åŽ¿",
        530325: "äº‘å—çœæ›²é–å¸‚å¯ŒæºåŽ¿",
        530326: "äº‘å—çœæ›²é–å¸‚ä¼šæ³½åŽ¿",
        530328: "äº‘å—çœæ›²é–å¸‚æ²¾ç›ŠåŽ¿",
        530381: "äº‘å—çœæ›²é–å¸‚å®£å¨å¸‚",
        530400: "äº‘å—çœçŽ‰æºªå¸‚",
        530401: "äº‘å—çœçŽ‰æºªå¸‚å¸‚è¾–åŒº",
        530402: "äº‘å—çœçŽ‰æºªå¸‚çº¢å¡”åŒº",
        530421: "äº‘å—çœçŽ‰æºªå¸‚æ±Ÿå·åŽ¿",
        530422: "äº‘å—çœçŽ‰æºªå¸‚æ¾„æ±ŸåŽ¿",
        530423: "äº‘å—çœçŽ‰æºªå¸‚é€šæµ·åŽ¿",
        530424: "äº‘å—çœçŽ‰æºªå¸‚åŽå®åŽ¿",
        530425: "äº‘å—çœçŽ‰æºªå¸‚æ˜“é—¨åŽ¿",
        530426: "äº‘å—çœçŽ‰æºªå¸‚å³¨å±±å½æ—è‡ªæ²»åŽ¿",
        530427: "äº‘å—çœçŽ‰æºªå¸‚æ–°å¹³å½æ—å‚£æ—è‡ªæ²»åŽ¿",
        530428: "äº‘å—çœçŽ‰æºªå¸‚å…ƒæ±Ÿå“ˆå°¼æ—å½æ—å‚£æ—è‡ªæ²»åŽ¿",
        532100: "äº‘å—çœæ˜­é€šåœ°åŒº",
        532101: "äº‘å—çœæ˜­é€šåœ°åŒºæ˜­é€šå¸‚",
        532122: "äº‘å—çœæ˜­é€šåœ°åŒºé²ç”¸åŽ¿",
        532123: "äº‘å—çœæ˜­é€šåœ°åŒºå·§å®¶åŽ¿",
        532124: "äº‘å—çœæ˜­é€šåœ°åŒºç›æ´¥åŽ¿",
        532125: "äº‘å—çœæ˜­é€šåœ°åŒºå¤§å…³åŽ¿",
        532126: "äº‘å—çœæ˜­é€šåœ°åŒºæ°¸å–„åŽ¿",
        532127: "äº‘å—çœæ˜­é€šåœ°åŒºç»¥æ±ŸåŽ¿",
        532128: "äº‘å—çœæ˜­é€šåœ°åŒºé•‡é›„åŽ¿",
        532129: "äº‘å—çœæ˜­é€šåœ°åŒºå½è‰¯åŽ¿",
        532130: "äº‘å—çœæ˜­é€šåœ°åŒºå¨ä¿¡åŽ¿",
        532131: "äº‘å—çœæ˜­é€šåœ°åŒºæ°´å¯ŒåŽ¿",
        532300: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·ž",
        532301: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žæ¥šé›„å¸‚",
        532322: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žåŒæŸåŽ¿",
        532323: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žç‰Ÿå®šåŽ¿",
        532324: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žå—åŽåŽ¿",
        532325: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žå§šå®‰åŽ¿",
        532326: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žå¤§å§šåŽ¿",
        532327: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žæ°¸ä»åŽ¿",
        532328: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žå…ƒè°‹åŽ¿",
        532329: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žæ­¦å®šåŽ¿",
        532331: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žç¦„ä¸°åŽ¿",
        532500: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·ž",
        532501: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žä¸ªæ—§å¸‚",
        532502: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå¼€è¿œå¸‚",
        532522: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žè’™è‡ªåŽ¿",
        532523: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå±è¾¹è‹—æ—è‡ªæ²»åŽ¿",
        532524: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå»ºæ°´åŽ¿",
        532525: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žçŸ³å±åŽ¿",
        532526: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå¼¥å‹’åŽ¿",
        532527: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žæ³¸è¥¿åŽ¿",
        532528: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå…ƒé˜³åŽ¿",
        532529: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žçº¢æ²³åŽ¿",
        532530: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žé‡‘å¹³è‹—æ—ç‘¶æ—å‚£æ—è‡ªæ²»åŽ¿",
        532531: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žç»¿æ˜¥åŽ¿",
        532532: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žæ²³å£ç‘¶æ—è‡ªæ²»åŽ¿",
        532600: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·ž",
        532621: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žæ–‡å±±åŽ¿",
        532622: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žç šå±±åŽ¿",
        532623: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žè¥¿ç•´åŽ¿",
        532624: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žéº»æ —å¡åŽ¿",
        532625: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žé©¬å…³åŽ¿",
        532626: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žä¸˜åŒ—åŽ¿",
        532627: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žå¹¿å—åŽ¿",
        532628: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žå¯Œå®åŽ¿",
        532700: "äº‘å—çœæ€èŒ…åœ°åŒº",
        532701: "äº‘å—çœæ€èŒ…åœ°åŒºæ€èŒ…å¸‚",
        532722: "äº‘å—çœæ€èŒ…åœ°åŒºæ™®æ´±å“ˆå°¼æ—å½æ—è‡ªæ²»åŽ¿",
        532723: "äº‘å—çœæ€èŒ…åœ°åŒºå¢¨æ±Ÿå“ˆå°¼æ—è‡ªæ²»åŽ¿",
        532724: "äº‘å—çœæ€èŒ…åœ°åŒºæ™¯ä¸œå½æ—è‡ªæ²»åŽ¿",
        532725: "äº‘å—çœæ€èŒ…åœ°åŒºæ™¯è°·å‚£æ—å½æ—è‡ªæ²»åŽ¿",
        532726: "äº‘å—çœæ€èŒ…åœ°åŒºé•‡æ²…å½æ—å“ˆå°¼æ—æ‹‰ç¥œæ—è‡ªæ²»åŽ¿",
        532727: "äº‘å—çœæ€èŒ…åœ°åŒºæ±ŸåŸŽå“ˆå°¼æ—å½æ—è‡ªæ²»åŽ¿",
        532728: "äº‘å—çœæ€èŒ…åœ°åŒºå­Ÿè¿žå‚£æ—æ‹‰ç¥œæ—ä½¤æ—è‡ªæ²»åŽ¿",
        532729: "äº‘å—çœæ€èŒ…åœ°åŒºæ¾œæ²§æ‹‰ç¥œæ—è‡ªæ²»åŽ¿",
        532730: "äº‘å—çœæ€èŒ…åœ°åŒºè¥¿ç›Ÿä½¤æ—è‡ªæ²»åŽ¿",
        532800: "äº‘å—çœè¥¿åŒç‰ˆçº³å‚£æ—è‡ªæ²»å·ž",
        532801: "äº‘å—çœè¥¿åŒç‰ˆçº³å‚£æ—è‡ªæ²»å·žæ™¯æ´ªå¸‚",
        532822: "äº‘å—çœè¥¿åŒç‰ˆçº³å‚£æ—è‡ªæ²»å·žå‹æµ·åŽ¿",
        532823: "äº‘å—çœè¥¿åŒç‰ˆçº³å‚£æ—è‡ªæ²»å·žå‹è…ŠåŽ¿",
        532900: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·ž",
        532901: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå¤§ç†å¸‚",
        532922: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žæ¼¾æ¿žå½æ—è‡ªæ²»åŽ¿",
        532923: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žç¥¥äº‘åŽ¿",
        532924: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå®¾å·åŽ¿",
        532925: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå¼¥æ¸¡åŽ¿",
        532926: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå—æ¶§å½æ—è‡ªæ²»åŽ¿",
        532927: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå·å±±å½æ—å›žæ—è‡ªæ²»åŽ¿",
        532928: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žæ°¸å¹³åŽ¿",
        532929: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žäº‘é¾™åŽ¿",
        532930: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žæ´±æºåŽ¿",
        532931: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå‰‘å·åŽ¿",
        532932: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žé¹¤åº†åŽ¿",
        533e3: "äº‘å—çœä¿å±±åœ°åŒº",
        533001: "äº‘å—çœä¿å±±åœ°åŒºä¿å±±å¸‚",
        533022: "äº‘å—çœä¿å±±åœ°åŒºæ–½ç”¸åŽ¿",
        533023: "äº‘å—çœä¿å±±åœ°åŒºè…¾å†²åŽ¿",
        533024: "äº‘å—çœä¿å±±åœ°åŒºé¾™é™µåŽ¿",
        533025: "äº‘å—çœä¿å±±åœ°åŒºæ˜Œå®åŽ¿",
        533100: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·ž",
        533101: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žç•¹ç”ºå¸‚",
        533102: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žç‘žä¸½å¸‚",
        533103: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žæ½žè¥¿å¸‚",
        533122: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žæ¢æ²³åŽ¿",
        533123: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žç›ˆæ±ŸåŽ¿",
        533124: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žé™‡å·åŽ¿",
        533200: "äº‘å—çœä¸½æ±Ÿåœ°åŒº",
        533221: "äº‘å—çœä¸½æ±Ÿåœ°åŒºä¸½æ±Ÿçº³è¥¿æ—è‡ªæ²»åŽ¿",
        533222: "äº‘å—çœä¸½æ±Ÿåœ°åŒºæ°¸èƒœåŽ¿",
        533223: "äº‘å—çœä¸½æ±Ÿåœ°åŒºåŽåªåŽ¿",
        533224: "äº‘å—çœä¸½æ±Ÿåœ°åŒºå®è’—å½æ—è‡ªæ²»åŽ¿",
        533300: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·ž",
        533321: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·žæ³¸æ°´åŽ¿",
        533323: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·žç¦è´¡åŽ¿",
        533324: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·žè´¡å±±ç‹¬é¾™æ—æ€’æ—è‡ªæ²»åŽ¿",
        533325: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·žå…°åªç™½æ—æ™®ç±³æ—è‡ªæ²»åŽ¿",
        533400: "äº‘å—çœè¿ªåº†è—æ—è‡ªæ²»å·ž",
        533421: "äº‘å—çœè¿ªåº†è—æ—è‡ªæ²»å·žä¸­ç”¸åŽ¿",
        533422: "äº‘å—çœè¿ªåº†è—æ—è‡ªæ²»å·žå¾·é’¦åŽ¿",
        533423: "äº‘å—çœè¿ªåº†è—æ—è‡ªæ²»å·žç»´è¥¿å‚ˆåƒ³æ—è‡ªæ²»åŽ¿",
        533500: "äº‘å—çœä¸´æ²§åœ°åŒº",
        533521: "äº‘å—çœä¸´æ²§åœ°åŒºä¸´æ²§åŽ¿",
        533522: "äº‘å—çœä¸´æ²§åœ°åŒºå‡¤åº†åŽ¿",
        533523: "äº‘å—çœä¸´æ²§åœ°åŒºäº‘åŽ¿",
        533524: "äº‘å—çœä¸´æ²§åœ°åŒºæ°¸å¾·åŽ¿",
        533525: "äº‘å—çœä¸´æ²§åœ°åŒºé•‡åº·åŽ¿",
        533526: "äº‘å—çœä¸´æ²§åœ°åŒºåŒæ±Ÿæ‹‰ç¥œæ—ä½¤æ—å¸ƒæœ—æ—å‚£æ—è‡ªæ²»åŽ¿",
        533527: "äº‘å—çœä¸´æ²§åœ°åŒºè€¿é©¬å‚£æ—ä½¤æ—è‡ªæ²»åŽ¿",
        533528: "äº‘å—çœä¸´æ²§åœ°åŒºæ²§æºä½¤æ—è‡ªæ²»åŽ¿",
        54e4: "è¥¿è—è‡ªæ²»åŒº",
        540100: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚",
        540101: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å¸‚è¾–åŒº",
        540102: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚åŸŽå…³åŒº",
        540121: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚æž—å‘¨åŽ¿",
        540122: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å½“é›„åŽ¿",
        540123: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å°¼æœ¨åŽ¿",
        540124: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚æ›²æ°´åŽ¿",
        540125: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å †é¾™å¾·åº†åŽ¿",
        540126: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚è¾¾å­œåŽ¿",
        540127: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å¢¨ç«¹å·¥å¡åŽ¿",
        542100: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒº",
        542121: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºæ˜Œéƒ½åŽ¿",
        542122: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºæ±Ÿè¾¾åŽ¿",
        542123: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºè´¡è§‰åŽ¿",
        542124: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºç±»ä¹Œé½åŽ¿",
        542125: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºä¸é’åŽ¿",
        542126: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºå¯Ÿé›…åŽ¿",
        542127: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºå…«å®¿åŽ¿",
        542128: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºå·¦è´¡åŽ¿",
        542129: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºèŠ’åº·åŽ¿",
        542132: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºæ´›éš†åŽ¿",
        542133: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºè¾¹ååŽ¿",
        542134: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºç›äº•åŽ¿",
        542135: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºç¢§åœŸåŽ¿",
        542136: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºå¦¥ååŽ¿",
        542137: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºç”Ÿè¾¾åŽ¿",
        542200: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒº",
        542221: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºä¹ƒä¸œåŽ¿",
        542222: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæ‰Žå›ŠåŽ¿",
        542223: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºè´¡å˜ŽåŽ¿",
        542224: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæ¡‘æ—¥åŽ¿",
        542225: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºç¼ç»“åŽ¿",
        542226: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæ›²æ¾åŽ¿",
        542227: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæŽªç¾ŽåŽ¿",
        542228: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæ´›æ‰ŽåŽ¿",
        542229: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºåŠ æŸ¥åŽ¿",
        542231: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºéš†å­åŽ¿",
        542232: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºé”™é‚£åŽ¿",
        542233: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæµªå¡å­åŽ¿",
        542300: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒº",
        542301: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºæ—¥å–€åˆ™å¸‚",
        542322: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå—æœ¨æž—åŽ¿",
        542323: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºæ±Ÿå­œåŽ¿",
        542324: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå®šæ—¥åŽ¿",
        542325: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºè¨è¿¦åŽ¿",
        542326: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºæ‹‰å­œåŽ¿",
        542327: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºæ˜‚ä»åŽ¿",
        542328: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºè°¢é€šé—¨åŽ¿",
        542329: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºç™½æœ—åŽ¿",
        542330: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºä»å¸ƒåŽ¿",
        542331: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºåº·é©¬åŽ¿",
        542332: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå®šç»“åŽ¿",
        542333: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºä»²å·´åŽ¿",
        542334: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºäºšä¸œåŽ¿",
        542335: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå‰éš†åŽ¿",
        542336: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºè‚æ‹‰æœ¨åŽ¿",
        542337: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºè¨å˜ŽåŽ¿",
        542338: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå²—å·´åŽ¿",
        542400: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒº",
        542421: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºé‚£æ›²åŽ¿",
        542422: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºå˜‰é»ŽåŽ¿",
        542423: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºæ¯”å¦‚åŽ¿",
        542424: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºè‚è£åŽ¿",
        542425: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºå®‰å¤šåŽ¿",
        542426: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºç”³æ‰ŽåŽ¿",
        542427: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºç´¢åŽ¿",
        542428: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºç­æˆˆåŽ¿",
        542429: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºå·´é’åŽ¿",
        542430: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºå°¼çŽ›åŽ¿",
        542500: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒº",
        542521: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæ™®å…°åŽ¿",
        542522: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæœ­è¾¾åŽ¿",
        542523: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºå™¶å°”åŽ¿",
        542524: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæ—¥åœŸåŽ¿",
        542525: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºé©å‰åŽ¿",
        542526: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæ”¹åˆ™åŽ¿",
        542527: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæŽªå‹¤åŽ¿",
        542528: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºéš†æ ¼å°”åŽ¿",
        542600: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒº",
        542621: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºæž—èŠåŽ¿",
        542622: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºå·¥å¸ƒæ±Ÿè¾¾åŽ¿",
        542623: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºç±³æž—åŽ¿",
        542624: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºå¢¨è„±åŽ¿",
        542625: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºæ³¢å¯†åŽ¿",
        542626: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºå¯Ÿéš…åŽ¿",
        542627: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºæœ—åŽ¿",
        61e4: "é™•è¥¿çœ",
        610100: "é™•è¥¿çœè¥¿å®‰å¸‚",
        610101: "é™•è¥¿çœè¥¿å®‰å¸‚å¸‚è¾–åŒº",
        610102: "é™•è¥¿çœè¥¿å®‰å¸‚æ–°åŸŽåŒº",
        610103: "é™•è¥¿çœè¥¿å®‰å¸‚ç¢‘æž—åŒº",
        610104: "é™•è¥¿çœè¥¿å®‰å¸‚èŽ²æ¹–åŒº",
        610111: "é™•è¥¿çœè¥¿å®‰å¸‚çžæ¡¥åŒº",
        610112: "é™•è¥¿çœè¥¿å®‰å¸‚æœªå¤®åŒº",
        610113: "é™•è¥¿çœè¥¿å®‰å¸‚é›å¡”åŒº",
        610114: "é™•è¥¿çœè¥¿å®‰å¸‚é˜Žè‰¯åŒº",
        610115: "é™•è¥¿çœè¥¿å®‰å¸‚ä¸´æ½¼åŒº",
        610121: "é™•è¥¿çœè¥¿å®‰å¸‚é•¿å®‰åŽ¿",
        610122: "é™•è¥¿çœè¥¿å®‰å¸‚è“ç”°åŽ¿",
        610124: "é™•è¥¿çœè¥¿å®‰å¸‚å‘¨è‡³åŽ¿",
        610125: "é™•è¥¿çœè¥¿å®‰å¸‚æˆ·åŽ¿",
        610126: "é™•è¥¿çœè¥¿å®‰å¸‚é«˜é™µåŽ¿",
        610200: "é™•è¥¿çœé“œå·å¸‚",
        610201: "é™•è¥¿çœé“œå·å¸‚å¸‚è¾–åŒº",
        610202: "é™•è¥¿çœé“œå·å¸‚åŸŽåŒº",
        610203: "é™•è¥¿çœé“œå·å¸‚éƒŠåŒº",
        610221: "é™•è¥¿çœé“œå·å¸‚è€€åŽ¿",
        610222: "é™•è¥¿çœé“œå·å¸‚å®œå›åŽ¿",
        610300: "é™•è¥¿çœå®é¸¡å¸‚",
        610301: "é™•è¥¿çœå®é¸¡å¸‚å¸‚è¾–åŒº",
        610302: "é™•è¥¿çœå®é¸¡å¸‚æ¸­æ»¨åŒº",
        610303: "é™•è¥¿çœå®é¸¡å¸‚é‡‘å°åŒº",
        610321: "é™•è¥¿çœå®é¸¡å¸‚å®é¸¡åŽ¿",
        610322: "é™•è¥¿çœå®é¸¡å¸‚å‡¤ç¿”åŽ¿",
        610323: "é™•è¥¿çœå®é¸¡å¸‚å²å±±åŽ¿",
        610324: "é™•è¥¿çœå®é¸¡å¸‚æ‰¶é£ŽåŽ¿",
        610326: "é™•è¥¿çœå®é¸¡å¸‚çœ‰åŽ¿",
        610327: "é™•è¥¿çœå®é¸¡å¸‚é™‡åŽ¿",
        610328: "é™•è¥¿çœå®é¸¡å¸‚åƒé˜³åŽ¿",
        610329: "é™•è¥¿çœå®é¸¡å¸‚éºŸæ¸¸åŽ¿",
        610330: "é™•è¥¿çœå®é¸¡å¸‚å‡¤åŽ¿",
        610331: "é™•è¥¿çœå®é¸¡å¸‚å¤ªç™½åŽ¿",
        610400: "é™•è¥¿çœå’¸é˜³å¸‚",
        610401: "é™•è¥¿çœå’¸é˜³å¸‚å¸‚è¾–åŒº",
        610402: "é™•è¥¿çœå’¸é˜³å¸‚ç§¦éƒ½åŒº",
        610403: "é™•è¥¿çœå’¸é˜³å¸‚æ¨é™µåŒº",
        610404: "é™•è¥¿çœå’¸é˜³å¸‚æ¸­åŸŽåŒº",
        610422: "é™•è¥¿çœå’¸é˜³å¸‚ä¸‰åŽŸåŽ¿",
        610423: "é™•è¥¿çœå’¸é˜³å¸‚æ³¾é˜³åŽ¿",
        610424: "é™•è¥¿çœå’¸é˜³å¸‚ä¹¾åŽ¿",
        610425: "é™•è¥¿çœå’¸é˜³å¸‚ç¤¼æ³‰åŽ¿",
        610426: "é™•è¥¿çœå’¸é˜³å¸‚æ°¸å¯¿åŽ¿",
        610427: "é™•è¥¿çœå’¸é˜³å¸‚å½¬åŽ¿",
        610428: "é™•è¥¿çœå’¸é˜³å¸‚é•¿æ­¦åŽ¿",
        610429: "é™•è¥¿çœå’¸é˜³å¸‚æ—¬é‚‘åŽ¿",
        610430: "é™•è¥¿çœå’¸é˜³å¸‚æ·³åŒ–åŽ¿",
        610431: "é™•è¥¿çœå’¸é˜³å¸‚æ­¦åŠŸåŽ¿",
        610481: "é™•è¥¿çœå’¸é˜³å¸‚å…´å¹³å¸‚",
        610500: "é™•è¥¿çœæ¸­å—å¸‚",
        610501: "é™•è¥¿çœæ¸­å—å¸‚å¸‚è¾–åŒº",
        610502: "é™•è¥¿çœæ¸­å—å¸‚ä¸´æ¸­åŒº",
        610521: "é™•è¥¿çœæ¸­å—å¸‚åŽåŽ¿",
        610522: "é™•è¥¿çœæ¸­å—å¸‚æ½¼å…³åŽ¿",
        610523: "é™•è¥¿çœæ¸­å—å¸‚å¤§è”åŽ¿",
        610524: "é™•è¥¿çœæ¸­å—å¸‚åˆé˜³åŽ¿",
        610525: "é™•è¥¿çœæ¸­å—å¸‚æ¾„åŸŽåŽ¿",
        610526: "é™•è¥¿çœæ¸­å—å¸‚è’²åŸŽåŽ¿",
        610527: "é™•è¥¿çœæ¸­å—å¸‚ç™½æ°´åŽ¿",
        610528: "é™•è¥¿çœæ¸­å—å¸‚å¯Œå¹³åŽ¿",
        610581: "é™•è¥¿çœæ¸­å—å¸‚éŸ©åŸŽå¸‚",
        610582: "é™•è¥¿çœæ¸­å—å¸‚åŽé˜´å¸‚",
        610600: "é™•è¥¿çœå»¶å®‰å¸‚",
        610601: "é™•è¥¿çœå»¶å®‰å¸‚å¸‚è¾–åŒº",
        610602: "é™•è¥¿çœå»¶å®‰å¸‚å®å¡”åŒº",
        610621: "é™•è¥¿çœå»¶å®‰å¸‚å»¶é•¿åŽ¿",
        610622: "é™•è¥¿çœå»¶å®‰å¸‚å»¶å·åŽ¿",
        610623: "é™•è¥¿çœå»¶å®‰å¸‚å­é•¿åŽ¿",
        610624: "é™•è¥¿çœå»¶å®‰å¸‚å®‰å¡žåŽ¿",
        610625: "é™•è¥¿çœå»¶å®‰å¸‚å¿—ä¸¹åŽ¿",
        610626: "é™•è¥¿çœå»¶å®‰å¸‚å´æ——åŽ¿",
        610627: "é™•è¥¿çœå»¶å®‰å¸‚ç”˜æ³‰åŽ¿",
        610628: "é™•è¥¿çœå»¶å®‰å¸‚å¯ŒåŽ¿",
        610629: "é™•è¥¿çœå»¶å®‰å¸‚æ´›å·åŽ¿",
        610630: "é™•è¥¿çœå»¶å®‰å¸‚å®œå·åŽ¿",
        610631: "é™•è¥¿çœå»¶å®‰å¸‚é»„é¾™åŽ¿",
        610632: "é™•è¥¿çœå»¶å®‰å¸‚é»„é™µåŽ¿",
        610700: "é™•è¥¿çœæ±‰ä¸­å¸‚",
        610701: "é™•è¥¿çœæ±‰ä¸­å¸‚å¸‚è¾–åŒº",
        610702: "é™•è¥¿çœæ±‰ä¸­å¸‚æ±‰å°åŒº",
        610721: "é™•è¥¿çœæ±‰ä¸­å¸‚å—éƒ‘åŽ¿",
        610722: "é™•è¥¿çœæ±‰ä¸­å¸‚åŸŽå›ºåŽ¿",
        610723: "é™•è¥¿çœæ±‰ä¸­å¸‚æ´‹åŽ¿",
        610724: "é™•è¥¿çœæ±‰ä¸­å¸‚è¥¿ä¹¡åŽ¿",
        610725: "é™•è¥¿çœæ±‰ä¸­å¸‚å‹‰åŽ¿",
        610726: "é™•è¥¿çœæ±‰ä¸­å¸‚å®å¼ºåŽ¿",
        610727: "é™•è¥¿çœæ±‰ä¸­å¸‚ç•¥é˜³åŽ¿",
        610728: "é™•è¥¿çœæ±‰ä¸­å¸‚é•‡å·´åŽ¿",
        610729: "é™•è¥¿çœæ±‰ä¸­å¸‚ç•™ååŽ¿",
        610730: "é™•è¥¿çœæ±‰ä¸­å¸‚ä½›åªåŽ¿",
        612400: "é™•è¥¿çœå®‰åº·åœ°åŒº",
        612401: "é™•è¥¿çœå®‰åº·åœ°åŒºå®‰åº·å¸‚",
        612422: "é™•è¥¿çœå®‰åº·åœ°åŒºæ±‰é˜´åŽ¿",
        612423: "é™•è¥¿çœå®‰åº·åœ°åŒºçŸ³æ³‰åŽ¿",
        612424: "é™•è¥¿çœå®‰åº·åœ°åŒºå®é™•åŽ¿",
        612425: "é™•è¥¿çœå®‰åº·åœ°åŒºç´«é˜³åŽ¿",
        612426: "é™•è¥¿çœå®‰åº·åœ°åŒºå²šçš‹åŽ¿",
        612427: "é™•è¥¿çœå®‰åº·åœ°åŒºå¹³åˆ©åŽ¿",
        612428: "é™•è¥¿çœå®‰åº·åœ°åŒºé•‡åªåŽ¿",
        612429: "é™•è¥¿çœå®‰åº·åœ°åŒºæ—¬é˜³åŽ¿",
        612430: "é™•è¥¿çœå®‰åº·åœ°åŒºç™½æ²³åŽ¿",
        612500: "é™•è¥¿çœå•†æ´›åœ°åŒº",
        612501: "é™•è¥¿çœå•†æ´›åœ°åŒºå•†å·žå¸‚",
        612522: "é™•è¥¿çœå•†æ´›åœ°åŒºæ´›å—åŽ¿",
        612523: "é™•è¥¿çœå•†æ´›åœ°åŒºä¸¹å‡¤åŽ¿",
        612524: "é™•è¥¿çœå•†æ´›åœ°åŒºå•†å—åŽ¿",
        612525: "é™•è¥¿çœå•†æ´›åœ°åŒºå±±é˜³åŽ¿",
        612526: "é™•è¥¿çœå•†æ´›åœ°åŒºé•‡å®‰åŽ¿",
        612527: "é™•è¥¿çœå•†æ´›åœ°åŒºæŸžæ°´åŽ¿",
        612700: "é™•è¥¿çœæ¦†æž—åœ°åŒº",
        612701: "é™•è¥¿çœæ¦†æž—åœ°åŒºæ¦†æž—å¸‚",
        612722: "é™•è¥¿çœæ¦†æž—åœ°åŒºç¥žæœ¨åŽ¿",
        612723: "é™•è¥¿çœæ¦†æž—åœ°åŒºåºœè°·åŽ¿",
        612724: "é™•è¥¿çœæ¦†æž—åœ°åŒºæ¨ªå±±åŽ¿",
        612725: "é™•è¥¿çœæ¦†æž—åœ°åŒºé–è¾¹åŽ¿",
        612726: "é™•è¥¿çœæ¦†æž—åœ°åŒºå®šè¾¹åŽ¿",
        612727: "é™•è¥¿çœæ¦†æž—åœ°åŒºç»¥å¾·åŽ¿",
        612728: "é™•è¥¿çœæ¦†æž—åœ°åŒºç±³è„‚åŽ¿",
        612729: "é™•è¥¿çœæ¦†æž—åœ°åŒºä½³åŽ¿",
        612730: "é™•è¥¿çœæ¦†æž—åœ°åŒºå´å ¡åŽ¿",
        612731: "é™•è¥¿çœæ¦†æž—åœ°åŒºæ¸…æ¶§åŽ¿",
        612732: "é™•è¥¿çœæ¦†æž—åœ°åŒºå­æ´²åŽ¿",
        62e4: "ç”˜è‚ƒçœ",
        620100: "ç”˜è‚ƒçœå…°å·žå¸‚",
        620101: "ç”˜è‚ƒçœå…°å·žå¸‚å¸‚è¾–åŒº",
        620102: "ç”˜è‚ƒçœå…°å·žå¸‚åŸŽå…³åŒº",
        620103: "ç”˜è‚ƒçœå…°å·žå¸‚ä¸ƒé‡Œæ²³åŒº",
        620104: "ç”˜è‚ƒçœå…°å·žå¸‚è¥¿å›ºåŒº",
        620105: "ç”˜è‚ƒçœå…°å·žå¸‚å®‰å®åŒº",
        620111: "ç”˜è‚ƒçœå…°å·žå¸‚çº¢å¤åŒº",
        620121: "ç”˜è‚ƒçœå…°å·žå¸‚æ°¸ç™»åŽ¿",
        620122: "ç”˜è‚ƒçœå…°å·žå¸‚çš‹å…°åŽ¿",
        620123: "ç”˜è‚ƒçœå…°å·žå¸‚æ¦†ä¸­åŽ¿",
        620200: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚",
        620201: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚å¸‚è¾–åŒº",
        620300: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚é‡‘æ˜Œå¸‚",
        620301: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚å¸‚è¾–åŒº",
        620302: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚é‡‘å·åŒº",
        620321: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚æ°¸æ˜ŒåŽ¿",
        620400: "ç”˜è‚ƒçœç™½é“¶å¸‚",
        620401: "ç”˜è‚ƒçœç™½é“¶å¸‚å¸‚è¾–åŒº",
        620402: "ç”˜è‚ƒçœç™½é“¶å¸‚ç™½é“¶åŒº",
        620403: "ç”˜è‚ƒçœç™½é“¶å¸‚å¹³å·åŒº",
        620421: "ç”˜è‚ƒçœç™½é“¶å¸‚é–è¿œåŽ¿",
        620422: "ç”˜è‚ƒçœç™½é“¶å¸‚ä¼šå®åŽ¿",
        620423: "ç”˜è‚ƒçœç™½é“¶å¸‚æ™¯æ³°åŽ¿",
        620500: "ç”˜è‚ƒçœå¤©æ°´å¸‚",
        620501: "ç”˜è‚ƒçœå¤©æ°´å¸‚å¸‚è¾–åŒº",
        620502: "ç”˜è‚ƒçœå¤©æ°´å¸‚ç§¦åŸŽåŒº",
        620503: "ç”˜è‚ƒçœå¤©æ°´å¸‚åŒ—é“åŒº",
        620521: "ç”˜è‚ƒçœå¤©æ°´å¸‚æ¸…æ°´åŽ¿",
        620522: "ç”˜è‚ƒçœå¤©æ°´å¸‚ç§¦å®‰åŽ¿",
        620523: "ç”˜è‚ƒçœå¤©æ°´å¸‚ç”˜è°·åŽ¿",
        620524: "ç”˜è‚ƒçœå¤©æ°´å¸‚æ­¦å±±åŽ¿",
        620525: "ç”˜è‚ƒçœå¤©æ°´å¸‚å¼ å®¶å·å›žæ—è‡ªæ²»åŽ¿",
        622100: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒº",
        622101: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºçŽ‰é—¨å¸‚",
        622102: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºé…’æ³‰å¸‚",
        622103: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºæ•¦ç…Œå¸‚",
        622123: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºé‡‘å¡”åŽ¿",
        622124: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºè‚ƒåŒ—è’™å¤æ—è‡ªæ²»åŽ¿",
        622125: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºé˜¿å…‹å¡žå“ˆè¨å…‹æ—è‡ªæ²»åŽ¿",
        622126: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºå®‰è¥¿åŽ¿",
        622200: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒº",
        622201: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºå¼ æŽ–å¸‚",
        622222: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºè‚ƒå—è£•å›ºæ—è‡ªæ²»åŽ¿",
        622223: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºæ°‘ä¹åŽ¿",
        622224: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºä¸´æ³½åŽ¿",
        622225: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºé«˜å°åŽ¿",
        622226: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºå±±ä¸¹åŽ¿",
        622300: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒº",
        622301: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒºæ­¦å¨å¸‚",
        622322: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒºæ°‘å‹¤åŽ¿",
        622323: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒºå¤æµªåŽ¿",
        622326: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒºå¤©ç¥è—æ—è‡ªæ²»åŽ¿",
        622400: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒº",
        622421: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºå®šè¥¿åŽ¿",
        622424: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºé€šæ¸­åŽ¿",
        622425: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºé™‡è¥¿åŽ¿",
        622426: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºæ¸­æºåŽ¿",
        622427: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºä¸´æ´®åŽ¿",
        622428: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºæ¼³åŽ¿",
        622429: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºå²·åŽ¿",
        622600: "ç”˜è‚ƒçœé™‡å—åœ°åŒº",
        622621: "ç”˜è‚ƒçœé™‡å—åœ°åŒºæ­¦éƒ½åŽ¿",
        622623: "ç”˜è‚ƒçœé™‡å—åœ°åŒºå®•æ˜ŒåŽ¿",
        622624: "ç”˜è‚ƒçœé™‡å—åœ°åŒºæˆåŽ¿",
        622625: "ç”˜è‚ƒçœé™‡å—åœ°åŒºåº·åŽ¿",
        622626: "ç”˜è‚ƒçœé™‡å—åœ°åŒºæ–‡åŽ¿",
        622627: "ç”˜è‚ƒçœé™‡å—åœ°åŒºè¥¿å’ŒåŽ¿",
        622628: "ç”˜è‚ƒçœé™‡å—åœ°åŒºç¤¼åŽ¿",
        622629: "ç”˜è‚ƒçœé™‡å—åœ°åŒºä¸¤å½“åŽ¿",
        622630: "ç”˜è‚ƒçœé™‡å—åœ°åŒºå¾½åŽ¿",
        622700: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒº",
        622701: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºå¹³å‡‰å¸‚",
        622722: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºæ³¾å·åŽ¿",
        622723: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºçµå°åŽ¿",
        622724: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºå´‡ä¿¡åŽ¿",
        622725: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºåŽäº­åŽ¿",
        622726: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºåº„æµªåŽ¿",
        622727: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºé™å®åŽ¿",
        622800: "ç”˜è‚ƒçœåº†é˜³åœ°åŒº",
        622801: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºè¥¿å³°å¸‚",
        622821: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºåº†é˜³åŽ¿",
        622822: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºçŽ¯åŽ¿",
        622823: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºåŽæ± åŽ¿",
        622824: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºåˆæ°´åŽ¿",
        622825: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºæ­£å®åŽ¿",
        622826: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºå®åŽ¿",
        622827: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºé•‡åŽŸåŽ¿",
        622900: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·ž",
        622901: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žä¸´å¤å¸‚",
        622921: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žä¸´å¤åŽ¿",
        622922: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žåº·ä¹åŽ¿",
        622923: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žæ°¸é–åŽ¿",
        622924: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žå¹¿æ²³åŽ¿",
        622925: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žå’Œæ”¿åŽ¿",
        622926: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žä¸œä¹¡æ—è‡ªæ²»åŽ¿",
        622927: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žç§¯çŸ³å±±ä¿å®‰æ—ä¸œä¹¡æ—æ’’æ‹‰æ—è‡ªæ²»åŽ¿",
        623e3: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·ž",
        623001: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žåˆä½œå¸‚",
        623021: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žä¸´æ½­åŽ¿",
        623022: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žå“å°¼åŽ¿",
        623023: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žèˆŸæ›²åŽ¿",
        623024: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žè¿­éƒ¨åŽ¿",
        623025: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žçŽ›æ›²åŽ¿",
        623026: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žç¢Œæ›²åŽ¿",
        623027: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žå¤æ²³åŽ¿",
        63e4: "é’æµ·çœ",
        630100: "é’æµ·çœè¥¿å®å¸‚",
        630101: "é’æµ·çœè¥¿å®å¸‚å¸‚è¾–åŒº",
        630102: "é’æµ·çœè¥¿å®å¸‚åŸŽä¸œåŒº",
        630103: "é’æµ·çœè¥¿å®å¸‚åŸŽä¸­åŒº",
        630104: "é’æµ·çœè¥¿å®å¸‚åŸŽè¥¿åŒº",
        630105: "é’æµ·çœè¥¿å®å¸‚åŸŽåŒ—åŒº",
        630121: "é’æµ·çœè¥¿å®å¸‚å¤§é€šå›žæ—åœŸæ—è‡ªæ²»åŽ¿",
        632100: "é’æµ·çœæµ·ä¸œåœ°åŒº",
        632121: "é’æµ·çœæµ·ä¸œåœ°åŒºå¹³å®‰åŽ¿",
        632122: "é’æµ·çœæµ·ä¸œåœ°åŒºæ°‘å’Œå›žæ—åœŸæ—è‡ªæ²»åŽ¿",
        632123: "é’æµ·çœæµ·ä¸œåœ°åŒºä¹éƒ½åŽ¿",
        632124: "é’æµ·çœæµ·ä¸œåœ°åŒºæ¹Ÿä¸­åŽ¿",
        632125: "é’æµ·çœæµ·ä¸œåœ°åŒºæ¹ŸæºåŽ¿",
        632126: "é’æµ·çœæµ·ä¸œåœ°åŒºäº’åŠ©åœŸæ—è‡ªæ²»åŽ¿",
        632127: "é’æµ·çœæµ·ä¸œåœ°åŒºåŒ–éš†å›žæ—è‡ªæ²»åŽ¿",
        632128: "é’æµ·çœæµ·ä¸œåœ°åŒºå¾ªåŒ–æ’’æ‹‰æ—è‡ªæ²»åŽ¿",
        632200: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·ž",
        632221: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·žé—¨æºå›žæ—è‡ªæ²»åŽ¿",
        632222: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·žç¥è¿žåŽ¿",
        632223: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·žæµ·æ™åŽ¿",
        632224: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·žåˆšå¯ŸåŽ¿",
        632300: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·ž",
        632321: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·žåŒä»åŽ¿",
        632322: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·žå°–æ‰ŽåŽ¿",
        632323: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·žæ³½åº“åŽ¿",
        632324: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·žæ²³å—è’™å¤æ—è‡ªæ²»åŽ¿",
        632500: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·ž",
        632521: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žå…±å’ŒåŽ¿",
        632522: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žåŒå¾·åŽ¿",
        632523: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žè´µå¾·åŽ¿",
        632524: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žå…´æµ·åŽ¿",
        632525: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žè´µå—åŽ¿",
        632600: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·ž",
        632621: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žçŽ›æ²åŽ¿",
        632622: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žç­çŽ›åŽ¿",
        632623: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žç”˜å¾·åŽ¿",
        632624: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žè¾¾æ—¥åŽ¿",
        632625: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žä¹…æ²»åŽ¿",
        632626: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žçŽ›å¤šåŽ¿",
        632700: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·ž",
        632721: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žçŽ‰æ ‘åŽ¿",
        632722: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žæ‚å¤šåŽ¿",
        632723: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žç§°å¤šåŽ¿",
        632724: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žæ²»å¤šåŽ¿",
        632725: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žå›Šè°¦åŽ¿",
        632726: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žæ›²éº»èŽ±åŽ¿",
        632800: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·ž",
        632801: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žæ ¼å°”æœ¨å¸‚",
        632802: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žå¾·ä»¤å“ˆå¸‚",
        632821: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žä¹Œå…°åŽ¿",
        632822: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žéƒ½å…°åŽ¿",
        632823: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žå¤©å³»åŽ¿",
        64e4: "å®å¤å›žæ—è‡ªæ²»åŒº",
        640100: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚",
        640101: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚å¸‚è¾–åŒº",
        640102: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚åŸŽåŒº",
        640103: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚æ–°åŸŽåŒº",
        640111: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚éƒŠåŒº",
        640121: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚æ°¸å®åŽ¿",
        640122: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚è´ºå…°åŽ¿",
        640200: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚",
        640201: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚å¸‚è¾–åŒº",
        640202: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚å¤§æ­¦å£åŒº",
        640203: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚çŸ³å˜´å±±åŒº",
        640204: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚çŸ³ç‚­äº•åŒº",
        640221: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚å¹³ç½—åŽ¿",
        640222: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚é™¶ä¹åŽ¿",
        640223: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚æƒ å†œåŽ¿",
        640300: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚",
        640301: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚å¸‚è¾–åŒº",
        640302: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚åˆ©é€šåŒº",
        640321: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚ä¸­å«åŽ¿",
        640322: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚ä¸­å®åŽ¿",
        640323: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚ç›æ± åŽ¿",
        640324: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚åŒå¿ƒåŽ¿",
        640381: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚é’é“œå³¡å¸‚",
        640382: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚çµæ­¦å¸‚",
        642200: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒº",
        642221: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºå›ºåŽŸåŽ¿",
        642222: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºæµ·åŽŸåŽ¿",
        642223: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºè¥¿å‰åŽ¿",
        642224: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºéš†å¾·åŽ¿",
        642225: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºæ³¾æºåŽ¿",
        642226: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºå½­é˜³åŽ¿",
        65e4: "æ–°ç–†ç»´å¾å°”è‡ªæ²»åŒº",
        650100: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚",
        650101: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚å¸‚è¾–åŒº",
        650102: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚å¤©å±±åŒº",
        650103: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚æ²™ä¾å·´å…‹åŒº",
        650104: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚æ–°å¸‚åŒº",
        650105: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚æ°´ç£¨æ²ŸåŒº",
        650106: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚å¤´å±¯æ²³åŒº",
        650107: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚å—å±±çŸ¿åŒº",
        650108: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚ä¸œå±±åŒº",
        650121: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚ä¹Œé²æœ¨é½åŽ¿",
        650200: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚",
        650201: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚å¸‚è¾–åŒº",
        650202: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚ç‹¬å±±å­åŒº",
        650203: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚å…‹æ‹‰çŽ›ä¾åŒº",
        650204: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚ç™½ç¢±æ»©åŒº",
        650205: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚ä¹Œå°”ç¦¾åŒº",
        652100: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåé²ç•ªåœ°åŒº",
        652101: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåé²ç•ªåœ°åŒºåé²ç•ªå¸‚",
        652122: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåé²ç•ªåœ°åŒºé„¯å–„åŽ¿",
        652123: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåé²ç•ªåœ°åŒºæ‰˜å…‹é€ŠåŽ¿",
        652200: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå“ˆå¯†åœ°åŒº",
        652201: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå“ˆå¯†åœ°åŒºå“ˆå¯†å¸‚",
        652222: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå“ˆå¯†åœ°åŒºå·´é‡Œå¤å“ˆè¨å…‹è‡ªæ²»åŽ¿",
        652223: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå“ˆå¯†åœ°åŒºä¼Šå¾åŽ¿",
        652300: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·ž",
        652301: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žæ˜Œå‰å¸‚",
        652302: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žé˜œåº·å¸‚",
        652303: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žç±³æ³‰å¸‚",
        652323: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žå‘¼å›¾å£åŽ¿",
        652324: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žçŽ›çº³æ–¯åŽ¿",
        652325: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žå¥‡å°åŽ¿",
        652327: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žå‰æœ¨è¨å°”åŽ¿",
        652328: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žæœ¨åž’å“ˆè¨å…‹è‡ªæ²»åŽ¿",
        652700: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåšå°”å¡”æ‹‰è’™å¤è‡ªæ²»å·ž",
        652701: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåšå°”å¡”æ‹‰è’™å¤è‡ªæ²»å·žåšä¹å¸‚",
        652722: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåšå°”å¡”æ‹‰è’™å¤è‡ªæ²»å·žç²¾æ²³åŽ¿",
        652723: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåšå°”å¡”æ‹‰è’™å¤è‡ªæ²»å·žæ¸©æ³‰åŽ¿",
        652800: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·ž",
        652801: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žåº“å°”å‹’å¸‚",
        652822: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žè½®å°åŽ¿",
        652823: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žå°‰çŠåŽ¿",
        652824: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žè‹¥ç¾ŒåŽ¿",
        652825: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žä¸”æœ«åŽ¿",
        652826: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žç„‰è€†å›žæ—è‡ªæ²»åŽ¿",
        652827: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žå’Œé™åŽ¿",
        652828: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žå’Œç¡•åŽ¿",
        652829: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žåšæ¹–åŽ¿",
        652900: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒº",
        652901: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºé˜¿å…‹è‹å¸‚",
        652922: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæ¸©å®¿åŽ¿",
        652923: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºåº“è½¦åŽ¿",
        652924: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæ²™é›…åŽ¿",
        652925: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæ–°å’ŒåŽ¿",
        652926: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæ‹œåŸŽåŽ¿",
        652927: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºä¹Œä»€åŽ¿",
        652928: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºé˜¿ç“¦æåŽ¿",
        652929: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæŸ¯åªåŽ¿",
        653e3: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·ž",
        653001: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·žé˜¿å›¾ä»€å¸‚",
        653022: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·žé˜¿å…‹é™¶åŽ¿",
        653023: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·žé˜¿åˆå¥‡åŽ¿",
        653024: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·žä¹Œæ°åŽ¿",
        653100: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒº",
        653101: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå–€ä»€å¸‚",
        653121: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºç–é™„åŽ¿",
        653122: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºç–å‹’åŽ¿",
        653123: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºè‹±å‰æ²™åŽ¿",
        653124: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºæ³½æ™®åŽ¿",
        653125: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºèŽŽè½¦åŽ¿",
        653126: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå¶åŸŽåŽ¿",
        653127: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºéº¦ç›–æåŽ¿",
        653128: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå²³æ™®æ¹–åŽ¿",
        653129: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºä¼½å¸ˆåŽ¿",
        653130: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå·´æ¥šåŽ¿",
        653131: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå¡”ä»€åº“å°”å¹²å¡”å‰å…‹è‡ªæ²»åŽ¿",
        653200: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒº",
        653201: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºå’Œç”°å¸‚",
        653221: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºå’Œç”°åŽ¿",
        653222: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºå¢¨çŽ‰åŽ¿",
        653223: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºçš®å±±åŽ¿",
        653224: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºæ´›æµ¦åŽ¿",
        653225: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºç­–å‹’åŽ¿",
        653226: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºäºŽç”°åŽ¿",
        653227: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºæ°‘ä¸°åŽ¿",
        654e3: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·ž",
        654001: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žå¥Žå±¯å¸‚",
        654100: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žä¼ŠçŠåœ°åŒº",
        654101: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žä¼Šå®å¸‚",
        654121: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žä¼Šå®åŽ¿",
        654122: "æ–°ç–†è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žå¯Ÿå¸ƒæŸ¥å°”é”¡ä¼¯è‡ªæ²»åŽ¿",
        654123: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žéœåŸŽåŽ¿",
        654124: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žå·©ç•™åŽ¿",
        654125: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žæ–°æºåŽ¿",
        654126: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žæ˜­è‹åŽ¿",
        654127: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žç‰¹å…‹æ–¯åŽ¿",
        654128: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žå°¼å‹’å…‹åŽ¿",
        654200: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒº",
        654201: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºå¡”åŸŽå¸‚",
        654202: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºä¹Œè‹å¸‚",
        654221: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºé¢æ•åŽ¿",
        654223: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºæ²™æ¹¾åŽ¿",
        654224: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºæ‰˜é‡ŒåŽ¿",
        654225: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºè£•æ°‘åŽ¿",
        654226: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºå’Œå¸ƒå…‹èµ›å°”è’™å¤è‡ªæ²»åŽ¿",
        654300: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒº",
        654301: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºé˜¿å‹’æ³°å¸‚",
        654321: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºå¸ƒå°”æ´¥åŽ¿",
        654322: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºå¯Œè•´åŽ¿",
        654323: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºç¦æµ·åŽ¿",
        654324: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºå“ˆå·´æ²³åŽ¿",
        654325: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºé’æ²³åŽ¿",
        654326: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºå‰æœ¨ä¹ƒåŽ¿",
        659e3: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºç›´è¾–åŽ¿çº§è¡Œæ”¿å•ä½",
        659001: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºçŸ³æ²³å­å¸‚"
    };
    return e
});
!function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function () {
    "use strict";
    var e = function (f, W, e, t) {
        var g = {
            features: null, bind: function (e, t, n, i) {
                var r = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var o = 0; o < t.length; o++) t[o] && e[r](t[o], n, !1)
            }, isArray: function (e) {
                return e instanceof Array
            }, createEl: function (e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e), n
            }, getScrollY: function () {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            }, unbind: function (e, t, n) {
                g.bind(e, t, n, !0)
            }, removeClass: function (e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }, addClass: function (e, t) {
                g.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            }, hasClass: function (e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            }, getChildByClass: function (e, t) {
                for (var n = e.firstChild; n;) {
                    if (g.hasClass(n, t)) return n;
                    n = n.nextSibling
                }
            }, arraySearch: function (e, t, n) {
                for (var i = e.length; i--;) if (e[i][n] === t) return i;
                return -1
            }, extend: function (e, t, n) {
                for (var i in t) if (t.hasOwnProperty(i)) {
                    if (n && e.hasOwnProperty(i)) continue;
                    e[i] = t[i]
                }
            }, easing: {
                sine: {
                    out: function (e) {
                        return Math.sin(e * (Math.PI / 2))
                    }, inOut: function (e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                }, cubic: {
                    out: function (e) {
                        return --e * e * e + 1
                    }
                }
            }, detectFeatures: function () {
                if (g.features) return g.features;
                var e = g.createEl(), t = e.style, n = "", i = {};
                if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                    var r = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        o && o.length > 0 && (o = parseInt(o[1], 10), o >= 1 && o < 8 && (i.isOldIOSPhone = !0))
                    }
                    var a = r.match(/Android\s([0-9\.]*)/), s = a ? a[1] : 0;
                    s = parseFloat(s), s >= 1 && (s < 4.4 && (i.isOldAndroid = !0), i.androidVersion = s), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
                }
                for (var l, u, c = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], f = 0; f < 4; f++) {
                    n = d[f];
                    for (var h = 0; h < 3; h++) l = c[h], u = n + (n ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && u in t && (i[l] = u);
                    n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                }
                if (!i.raf) {
                    var p = 0;
                    i.raf = function (e) {
                        var t = (new Date).getTime(), n = Math.max(0, 16 - (t - p)), i = window.setTimeout(function () {
                            e(t + n)
                        }, n);
                        return p = t + n, i
                    }, i.caf = function (e) {
                        clearTimeout(e)
                    }
                }
                return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, g.features = i, i
            }
        };
        g.detectFeatures(), g.features.oldIE && (g.bind = function (e, t, n, i) {
            t = t.split(" ");
            for (var r, o = (i ? "detach" : "attach") + "Event", a = function () {
                n.handleEvent.call(n)
            }, s = 0; s < t.length; s++) if (r = t[s]) if ("object" == typeof n && n.handleEvent) {
                if (i) {
                    if (!n["oldIE" + r]) return !1
                } else n["oldIE" + r] = a;
                e[o]("on" + r, n["oldIE" + r])
            } else e[o]("on" + r, n)
        });
        var h = this, n = 25, z = 3, p = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function (e) {
                return "A" === e.tagName
            },
            getDoubleTapZoom: function (e, t) {
                return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        g.extend(p, t);
        var j, Y, i, m, V, a, q, U, r, v, $, G, Z, X, K, s, J, Q, ee, te, ne, ie, re, o, oe, ae, se, le, ue, ce, y, de,
            fe, he, pe, ge, me, ve, b, ye, be, xe, we, ke, x, w, _e, Se, d, k, _, Ce, Te, Me, De, Ae, Pe,
            Ie = function () {
                return {x: 0, y: 0}
            }, Ee = Ie(), Oe = Ie(), S = Ie(), l = {}, Le = 0, Fe = {}, c = Ie(), C = 0, Ne = !0, Re = [], He = {},
            Be = !1, We = function (e, t) {
                g.extend(h, t.publicMethods), Re.push(e)
            }, ze = function (e) {
                var t = F();
                return e > t - 1 ? e - t : e < 0 ? t + e : e
            }, je = {}, u = function (e, t) {
                return je[e] || (je[e] = []), je[e].push(t)
            }, T = function (e) {
                var t = je[e];
                if (t) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var i = 0; i < t.length; i++) t[i].apply(h, n)
                }
            }, M = function () {
                return (new Date).getTime()
            }, D = function (e) {
                De = e, h.bg.style.opacity = e * p.bgOpacity
            }, Ye = function (e, t, n, i, r) {
                (!Be || r && r !== h.currItem) && (i /= r ? r.fitRatio : h.currItem.fitRatio), e[ie] = G + t + "px, " + n + "px" + Z + " scale(" + i + ")"
            }, A = function (e) {
                k && (e && (v > h.currItem.fitRatio ? Be || (mn(h.currItem, !1, !0), Be = !0) : Be && (mn(h.currItem), Be = !1)), Ye(k, S.x, S.y, v))
            }, Ve = function (e) {
                e.container && Ye(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            }, qe = function (e, t) {
                t[ie] = G + e + "px, 0px" + Z
            }, Ue = function (e, t) {
                if (!p.loop && t) {
                    var n = m + (c.x * Le - e) / c.x, i = Math.round(e - St.x);
                    (n < 0 && i > 0 || n >= F() - 1 && i < 0) && (e = St.x + i * p.mainScrollEndFriction)
                }
                St.x = e, qe(e, V)
            }, $e = function (e, t) {
                var n = Ct[e] - Fe[e];
                return Oe[e] + Ee[e] + n - n * (t / $)
            }, P = function (e, t) {
                e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
            }, Ge = function (e) {
                e.x = Math.round(e.x), e.y = Math.round(e.y)
            }, Ze = null, Xe = function () {
                Ze && (g.unbind(document, "mousemove", Xe), g.addClass(f, "pswp--has_mouse"), p.mouseUsed = !0, T("mouseUsed")), Ze = setTimeout(function () {
                    Ze = null
                }, 100)
            }, Ke = function () {
                g.bind(document, "keydown", h), y.transform && g.bind(h.scrollWrap, "click", h), p.mouseUsed || g.bind(document, "mousemove", Xe), g.bind(window, "resize scroll orientationchange", h), T("bindEvents")
            }, Je = function () {
                g.unbind(window, "resize scroll orientationchange", h), g.unbind(window, "scroll", r.scroll), g.unbind(document, "keydown", h), g.unbind(document, "mousemove", Xe), y.transform && g.unbind(h.scrollWrap, "click", h), b && g.unbind(window, q, h), clearTimeout(de), T("unbindEvents")
            }, Qe = function (e, t) {
                var n = fn(h.currItem, l, e);
                return t && (d = n), n
            }, et = function (e) {
                return e || (e = h.currItem), e.initialZoomLevel
            }, tt = function (e) {
                return e || (e = h.currItem), e.w > 0 ? p.maxSpreadZoom : 1
            }, nt = function (e, t, n, i) {
                return i === h.currItem.initialZoomLevel ? (n[e] = h.currItem.initialPosition[e], !0) : (n[e] = $e(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
            }, it = function () {
                if (ie) {
                    var e = y.perspective && !o;
                    return G = "translate" + (e ? "3d(" : "("), void (Z = y.perspective ? ", 0px)" : ")")
                }
                ie = "left", g.addClass(f, "pswp--ie"), qe = function (e, t) {
                    t.left = e + "px"
                }, Ve = function (e) {
                    var t = e.fitRatio > 1 ? 1 : e.fitRatio, n = e.container.style, i = t * e.w, r = t * e.h;
                    n.width = i + "px", n.height = r + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                }, A = function () {
                    if (k) {
                        var e = k, t = h.currItem, n = t.fitRatio > 1 ? 1 : t.fitRatio, i = n * t.w, r = n * t.h;
                        e.width = i + "px", e.height = r + "px", e.left = S.x + "px", e.top = S.y + "px"
                    }
                }
            }, rt = function (e) {
                var t = "";
                p.escKey && 27 === e.keyCode ? t = "close" : p.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, h[t]()))
            }, ot = function (e) {
                e && (xe || be || _ || me) && (e.preventDefault(), e.stopPropagation())
            }, at = function () {
                h.setScrollOffset(0, g.getScrollY())
            }, I = {}, st = 0, lt = function (e) {
                I[e] && (I[e].raf && ae(I[e].raf), st--, delete I[e])
            }, ut = function (e) {
                I[e] && lt(e), I[e] || (st++, I[e] = {})
            }, ct = function () {
                for (var e in I) I.hasOwnProperty(e) && lt(e)
            }, dt = function (e, t, n, i, r, o, a) {
                var s, l = M();
                ut(e);
                var u = function () {
                    if (I[e]) {
                        if (s = M() - l, s >= i) return lt(e), o(n), void (a && a());
                        o((n - t) * r(s / i) + t), I[e].raf = oe(u)
                    }
                };
                u()
            }, ft = {
                shout: T, listen: u, viewportSize: l, options: p, isMainScrollAnimating: function () {
                    return _
                }, getZoomLevel: function () {
                    return v
                }, getCurrentIndex: function () {
                    return m
                }, isDragging: function () {
                    return b
                }, isZooming: function () {
                    return w
                }, setScrollOffset: function (e, t) {
                    Fe.x = e, ce = Fe.y = t, T("updateScrollOffset", Fe)
                }, applyZoomPan: function (e, t, n, i) {
                    S.x = t, S.y = n, v = e, A(i)
                }, init: function () {
                    if (!j && !Y) {
                        var e;
                        h.framework = g, h.template = f, h.bg = g.getChildByClass(f, "pswp__bg"), se = f.className, j = !0, y = g.detectFeatures(), oe = y.raf, ae = y.caf, ie = y.transform, ue = y.oldIE, h.scrollWrap = g.getChildByClass(f, "pswp__scroll-wrap"), h.container = g.getChildByClass(h.scrollWrap, "pswp__container"), V = h.container.style, h.itemHolders = s = [{
                            el: h.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {el: h.container.children[1], wrap: 0, index: -1}, {
                            el: h.container.children[2],
                            wrap: 0,
                            index: -1
                        }], s[0].el.style.display = s[2].el.style.display = "none", it(), r = {
                            resize: h.updateSize,
                            orientationchange: function () {
                                clearTimeout(de), de = setTimeout(function () {
                                    l.x !== h.scrollWrap.clientWidth && h.updateSize()
                                }, 500)
                            },
                            scroll: at,
                            keydown: rt,
                            click: ot
                        };
                        var t = y.isOldIOSPhone || y.isOldAndroid || y.isMobileOpera;
                        for (y.animationName && y.transform && !t || (p.showAnimationDuration = p.hideAnimationDuration = 0), e = 0; e < Re.length; e++) h["init" + Re[e]]();
                        if (W) {
                            var n = h.ui = new W(h, g);
                            n.init()
                        }
                        T("firstUpdate"), m = m || p.index || 0, (isNaN(m) || m < 0 || m >= F()) && (m = 0), h.currItem = on(m), (y.isOldIOSPhone || y.isOldAndroid) && (Ne = !1), f.setAttribute("aria-hidden", "false"), p.modal && (Ne ? f.style.position = "fixed" : (f.style.position = "absolute", f.style.top = g.getScrollY() + "px")), void 0 === ce && (T("initialLayout"), ce = le = g.getScrollY());
                        var i = "pswp--open ";
                        for (p.mainClass && (i += p.mainClass + " "), p.showHideOpacity && (i += "pswp--animate_opacity "), i += o ? "pswp--touch" : "pswp--notouch", i += y.animationName ? " pswp--css_animation" : "", i += y.svg ? " pswp--svg" : "", g.addClass(f, i), h.updateSize(), a = -1, C = null, e = 0; e < z; e++) qe((e + a) * c.x, s[e].el.style);
                        ue || g.bind(h.scrollWrap, U, h), u("initialZoomInEnd", function () {
                            h.setContent(s[0], m - 1), h.setContent(s[2], m + 1), s[0].el.style.display = s[2].el.style.display = "block", p.focus && f.focus(), Ke()
                        }), h.setContent(s[1], m), h.updateCurrItem(), T("afterInit"), Ne || (X = setInterval(function () {
                            st || b || w || v !== h.currItem.initialZoomLevel || h.updateSize()
                        }, 1e3)), g.addClass(f, "pswp--visible")
                    }
                }, close: function () {
                    j && (j = !1, Y = !0, T("close"), Je(), sn(h.currItem, null, !0, h.destroy))
                }, destroy: function () {
                    T("destroy"), en && clearTimeout(en), f.setAttribute("aria-hidden", "true"), f.className = se, X && clearInterval(X), g.unbind(h.scrollWrap, U, h), g.unbind(window, "scroll", h), Pt(), ct(), je = null
                }, panTo: function (e, t, n) {
                    n || (e > d.min.x ? e = d.min.x : e < d.max.x && (e = d.max.x), t > d.min.y ? t = d.min.y : t < d.max.y && (t = d.max.y)), S.x = e, S.y = t, A()
                }, handleEvent: function (e) {
                    e = e || window.event, r[e.type] && r[e.type](e)
                }, goTo: function (e) {
                    e = ze(e);
                    var t = e - m;
                    C = t, m = e, h.currItem = on(m), Le -= t, Ue(c.x * Le), ct(), _ = !1, h.updateCurrItem()
                }, next: function () {
                    h.goTo(m + 1)
                }, prev: function () {
                    h.goTo(m - 1)
                }, updateCurrZoomItem: function (e) {
                    if (e && T("beforeChange", 0), s[1].el.children.length) {
                        var t = s[1].el.children[0];
                        k = g.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                    } else k = null;
                    d = h.currItem.bounds, $ = v = h.currItem.initialZoomLevel, S.x = d.center.x, S.y = d.center.y, e && T("afterChange")
                }, invalidateCurrItems: function () {
                    K = !0;
                    for (var e = 0; e < z; e++) s[e].item && (s[e].item.needsUpdate = !0)
                }, updateCurrItem: function (e) {
                    if (0 !== C) {
                        var t, n = Math.abs(C);
                        if (!(e && n < 2)) {
                            h.currItem = on(m), Be = !1, T("beforeChange", C), n >= z && (a += C + (C > 0 ? -z : z), n = z);
                            for (var i = 0; i < n; i++) C > 0 ? (t = s.shift(), s[z - 1] = t, a++, qe((a + 2) * c.x, t.el.style), h.setContent(t, m - n + i + 1 + 1)) : (t = s.pop(), s.unshift(t), a--, qe(a * c.x, t.el.style), h.setContent(t, m + n - i - 1 - 1));
                            if (k && 1 === Math.abs(C)) {
                                var r = on(J);
                                r.initialZoomLevel !== v && (fn(r, l), mn(r), Ve(r))
                            }
                            C = 0, h.updateCurrZoomItem(), J = m, T("afterChange")
                        }
                    }
                }, updateSize: function (e) {
                    if (!Ne && p.modal) {
                        var t = g.getScrollY();
                        if (ce !== t && (f.style.top = t + "px", ce = t), !e && He.x === window.innerWidth && He.y === window.innerHeight) return;
                        He.x = window.innerWidth, He.y = window.innerHeight, f.style.height = He.y + "px"
                    }
                    if (l.x = h.scrollWrap.clientWidth, l.y = h.scrollWrap.clientHeight, at(), c.x = l.x + Math.round(l.x * p.spacing), c.y = l.y, Ue(c.x * Le), T("beforeResize"), void 0 !== a) {
                        for (var n, i, r, o = 0; o < z; o++) n = s[o], qe((o + a) * c.x, n.el.style), r = m + o - 1, p.loop && F() > 2 && (r = ze(r)), i = on(r), i && (K || i.needsUpdate || !i.bounds) ? (h.cleanSlide(i), h.setContent(n, r), 1 === o && (h.currItem = i, h.updateCurrZoomItem(!0)), i.needsUpdate = !1) : n.index === -1 && r >= 0 && h.setContent(n, r), i && i.container && (fn(i, l), mn(i), Ve(i));
                        K = !1
                    }
                    $ = v = h.currItem.initialZoomLevel, d = h.currItem.bounds, d && (S.x = d.center.x, S.y = d.center.y, A(!0)), T("resize")
                }, zoomTo: function (t, e, n, i, r) {
                    e && ($ = v, Ct.x = Math.abs(e.x) - S.x, Ct.y = Math.abs(e.y) - S.y, P(Oe, S));
                    var o = Qe(t, !1), a = {};
                    nt("x", o, a, t), nt("y", o, a, t);
                    var s = v, l = {x: S.x, y: S.y};
                    Ge(a);
                    var u = function (e) {
                        1 === e ? (v = t, S.x = a.x, S.y = a.y) : (v = (t - s) * e + s, S.x = (a.x - l.x) * e + l.x, S.y = (a.y - l.y) * e + l.y), r && r(e), A(1 === e)
                    };
                    n ? dt("customZoomTo", 0, 1, n, i || g.easing.sine.inOut, u) : u(1)
                }
            }, ht = 30, pt = 10, E = {}, gt = {}, O = {}, L = {}, mt = {}, vt = [], yt = {}, bt = [], xt = {}, wt = 0,
            kt = Ie(), _t = 0, St = Ie(), Ct = Ie(), Tt = Ie(), Mt = function (e, t) {
                return e.x === t.x && e.y === t.y
            }, Dt = function (e, t) {
                return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n
            }, At = function (e, t) {
                return xt.x = Math.abs(e.x - t.x), xt.y = Math.abs(e.y - t.y), Math.sqrt(xt.x * xt.x + xt.y * xt.y)
            }, Pt = function () {
                we && (ae(we), we = null)
            }, It = function () {
                b && (we = oe(It), $t())
            }, Et = function () {
                return !("fit" === p.scaleMode && v === h.currItem.initialZoomLevel)
            }, Ot = function (e, t) {
                return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Ot(e.parentNode, t)))
            }, Lt = {}, Ft = function (e, t) {
                return Lt.prevent = !Ot(e.target, p.isClickableElement), T("preventDragEvent", e, t, Lt), Lt.prevent
            }, Nt = function (e, t) {
                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
            }, Rt = function (e, t, n) {
                n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
            }, Ht = function (e, t, n) {
                if (e - he > 50) {
                    var i = bt.length > 2 ? bt.shift() : {};
                    i.x = t, i.y = n, bt.push(i), he = e
                }
            }, Bt = function () {
                var e = S.y - h.currItem.initialPosition.y;
                return 1 - Math.abs(e / (l.y / 2))
            }, Wt = {}, zt = {}, jt = [], Yt = function (e) {
                for (; jt.length > 0;) jt.pop();
                return re ? (Pe = 0, vt.forEach(function (e) {
                    0 === Pe ? jt[0] = e : 1 === Pe && (jt[1] = e), Pe++
                })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (jt[0] = Nt(e.touches[0], Wt), e.touches.length > 1 && (jt[1] = Nt(e.touches[1], zt))) : (Wt.x = e.pageX, Wt.y = e.pageY, Wt.id = "", jt[0] = Wt), jt
            }, Vt = function (e, t) {
                var n, i, r, o, a = 0, s = S[e] + t[e], l = t[e] > 0, u = St.x + t.x, c = St.x - yt.x;
                return n = s > d.min[e] || s < d.max[e] ? p.panEndFriction : 1, s = S[e] + t[e] * n, !p.allowPanToNext && v !== h.currItem.initialZoomLevel || (k ? "h" !== Ce || "x" !== e || be || (l ? (s > d.min[e] && (n = p.panEndFriction, a = d.min[e] - s, i = d.min[e] - Oe[e]), (i <= 0 || c < 0) && F() > 1 ? (o = u, c < 0 && u > yt.x && (o = yt.x)) : d.min.x !== d.max.x && (r = s)) : (s < d.max[e] && (n = p.panEndFriction, a = s - d.max[e], i = Oe[e] - d.max[e]), (i <= 0 || c > 0) && F() > 1 ? (o = u, c > 0 && u < yt.x && (o = yt.x)) : d.min.x !== d.max.x && (r = s))) : o = u, "x" !== e) ? void (_ || ke || v > h.currItem.fitRatio && (S[e] += t[e] * n)) : (void 0 !== o && (Ue(o, !0), ke = o !== yt.x), d.min.x !== d.max.x && (void 0 !== r ? S.x = r : ke || (S.x += t.x * n)), void 0 !== o)
            }, qt = function (e) {
                if (!("mousedown" === e.type && e.button > 0)) {
                    if (rn) return void e.preventDefault();
                    if (!ve || "mousedown" !== e.type) {
                        if (Ft(e, !0) && e.preventDefault(), T("pointerDown"), re) {
                            var t = g.arraySearch(vt, e.pointerId, "id");
                            t < 0 && (t = vt.length), vt[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
                        }
                        var n = Yt(e), i = n.length;
                        x = null, ct(), b && 1 !== i || (b = Te = !0, g.bind(window, q, h), ge = Ae = Me = me = ke = xe = ye = be = !1, Ce = null, T("firstTouchStart", n), P(Oe, S), Ee.x = Ee.y = 0, P(L, n[0]), P(mt, L), yt.x = c.x * Le, bt = [{
                            x: L.x,
                            y: L.y
                        }], he = fe = M(), Qe(v, !0), Pt(), It()), !w && i > 1 && !_ && !ke && ($ = v, be = !1, w = ye = !0, Ee.y = Ee.x = 0, P(Oe, S), P(E, n[0]), P(gt, n[1]), Rt(E, gt, Tt), Ct.x = Math.abs(Tt.x) - S.x, Ct.y = Math.abs(Tt.y) - S.y, _e = Se = At(E, gt))
                    }
                }
            }, Ut = function (e) {
                if (e.preventDefault(), re) {
                    var t = g.arraySearch(vt, e.pointerId, "id");
                    if (t > -1) {
                        var n = vt[t];
                        n.x = e.pageX, n.y = e.pageY
                    }
                }
                if (b) {
                    var i = Yt(e);
                    if (Ce || xe || w) x = i; else if (St.x !== c.x * Le) Ce = "h"; else {
                        var r = Math.abs(i[0].x - L.x) - Math.abs(i[0].y - L.y);
                        Math.abs(r) >= pt && (Ce = r > 0 ? "h" : "v", x = i)
                    }
                }
            }, $t = function () {
                if (x) {
                    var e = x.length;
                    if (0 !== e) if (P(E, x[0]), O.x = E.x - L.x, O.y = E.y - L.y, w && e > 1) {
                        if (L.x = E.x, L.y = E.y, !O.x && !O.y && Mt(x[1], gt)) return;
                        P(gt, x[1]), be || (be = !0, T("zoomGestureStarted"));
                        var t = At(E, gt), n = Jt(t);
                        n > h.currItem.initialZoomLevel + h.currItem.initialZoomLevel / 15 && (Ae = !0);
                        var i = 1, r = et(), o = tt();
                        if (n < r) if (p.pinchToClose && !Ae && $ <= h.currItem.initialZoomLevel) {
                            var a = r - n, s = 1 - a / (r / 1.2);
                            D(s), T("onPinchClose", s), Me = !0
                        } else i = (r - n) / r, i > 1 && (i = 1), n = r - i * (r / 3); else n > o && (i = (n - o) / (6 * r), i > 1 && (i = 1), n = o + i * r);
                        i < 0 && (i = 0), _e = t, Rt(E, gt, kt), Ee.x += kt.x - Tt.x, Ee.y += kt.y - Tt.y, P(Tt, kt), S.x = $e("x", n), S.y = $e("y", n), ge = n > v, v = n, A()
                    } else {
                        if (!Ce) return;
                        if (Te && (Te = !1, Math.abs(O.x) >= pt && (O.x -= x[0].x - mt.x), Math.abs(O.y) >= pt && (O.y -= x[0].y - mt.y)), L.x = E.x, L.y = E.y, 0 === O.x && 0 === O.y) return;
                        if ("v" === Ce && p.closeOnVerticalDrag && !Et()) {
                            Ee.y += O.y, S.y += O.y;
                            var l = Bt();
                            return me = !0, T("onVerticalDrag", l), D(l), void A()
                        }
                        Ht(M(), E.x, E.y), xe = !0, d = h.currItem.bounds;
                        var u = Vt("x", O);
                        u || (Vt("y", O), Ge(S), A())
                    }
                }
            }, Gt = function (e) {
                if (y.isOldAndroid) {
                    if (ve && "mouseup" === e.type) return;
                    e.type.indexOf("touch") > -1 && (clearTimeout(ve), ve = setTimeout(function () {
                        ve = 0
                    }, 600))
                }
                T("pointerUp"), Ft(e, !1) && e.preventDefault();
                var t;
                if (re) {
                    var n = g.arraySearch(vt, e.pointerId, "id");
                    if (n > -1) if (t = vt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse"; else {
                        var i = {4: "mouse", 2: "touch", 3: "pen"};
                        t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                    }
                }
                var r, o = Yt(e), a = o.length;
                if ("mouseup" === e.type && (a = 0), 2 === a) return x = null, !0;
                1 === a && P(mt, o[0]), 0 !== a || Ce || _ || (t || ("mouseup" === e.type ? t = {
                    x: e.pageX,
                    y: e.pageY,
                    type: "mouse"
                } : e.changedTouches && e.changedTouches[0] && (t = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch"
                })), T("touchRelease", e, t));
                var s = -1;
                if (0 === a && (b = !1, g.unbind(window, q, h), Pt(), w ? s = 0 : _t !== -1 && (s = M() - _t)), _t = 1 === a ? M() : -1, r = s !== -1 && s < 150 ? "zoom" : "swipe", w && a < 2 && (w = !1, 1 === a && (r = "zoomPointerUp"), T("zoomGestureEnded")), x = null, xe || be || _ || me) if (ct(), pe || (pe = Zt()), pe.calculateSwipeSpeed("x"), me) {
                    var l = Bt();
                    if (l < p.verticalDragRange) h.close(); else {
                        var u = S.y, c = De;
                        dt("verticalDrag", 0, 1, 300, g.easing.cubic.out, function (e) {
                            S.y = (h.currItem.initialPosition.y - u) * e + u, D((1 - c) * e + c), A()
                        }), T("onVerticalDrag", 1)
                    }
                } else {
                    if ((ke || _) && 0 === a) {
                        var d = Kt(r, pe);
                        if (d) return;
                        r = "zoomPointerUp"
                    }
                    if (!_) return "swipe" !== r ? void Qt() : void (!ke && v > h.currItem.fitRatio && Xt(pe))
                }
            }, Zt = function () {
                var t, n, i = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function (e) {
                        bt.length > 1 ? (t = M() - he + 50, n = bt[bt.length - 2][e]) : (t = M() - fe, n = mt[e]), i.lastFlickOffset[e] = L[e] - n, i.lastFlickDist[e] = Math.abs(i.lastFlickOffset[e]), i.lastFlickDist[e] > 20 ? i.lastFlickSpeed[e] = i.lastFlickOffset[e] / t : i.lastFlickSpeed[e] = 0, Math.abs(i.lastFlickSpeed[e]) < .1 && (i.lastFlickSpeed[e] = 0), i.slowDownRatio[e] = .95, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatio[e] = 1
                    },
                    calculateOverBoundsAnimOffset: function (t, e) {
                        i.backAnimStarted[t] || (S[t] > d.min[t] ? i.backAnimDestination[t] = d.min[t] : S[t] < d.max[t] && (i.backAnimDestination[t] = d.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, dt("bounceZoomPan" + t, S[t], i.backAnimDestination[t], e || 300, g.easing.sine.out, function (e) {
                            S[t] = e, A()
                        }))))
                    },
                    calculateAnimOffset: function (e) {
                        i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, S[e] += i.distanceOffset[e])
                    },
                    panAnimLoop: function () {
                        if (I.zoomPan && (I.zoomPan.raf = oe(i.panAnimLoop), i.now = M(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), A(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05)) return S.x = Math.round(S.x), S.y = Math.round(S.y), A(), void lt("zoomPan")
                    }
                };
                return i
            }, Xt = function (e) {
                return e.calculateSwipeSpeed("y"), d = h.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (ut("zoomPan"), e.lastNow = M(), void e.panAnimLoop())
            }, Kt = function (e, t) {
                var n;
                _ || (wt = m);
                var i;
                if ("swipe" === e) {
                    var r = L.x - mt.x, o = t.lastFlickDist.x < 10;
                    r > ht && (o || t.lastFlickOffset.x > 20) ? i = -1 : r < -ht && (o || t.lastFlickOffset.x < -20) && (i = 1)
                }
                var a;
                i && (m += i, m < 0 ? (m = p.loop ? F() - 1 : 0, a = !0) : m >= F() && (m = p.loop ? 0 : F() - 1, a = !0), a && !p.loop || (C += i, Le -= i, n = !0));
                var s, l = c.x * Le, u = Math.abs(l - St.x);
                return n || l > St.x == t.lastFlickSpeed.x > 0 ? (s = Math.abs(t.lastFlickSpeed.x) > 0 ? u / Math.abs(t.lastFlickSpeed.x) : 333, s = Math.min(s, 400), s = Math.max(s, 250)) : s = 333, wt === m && (n = !1), _ = !0, T("mainScrollAnimStart"), dt("mainScroll", St.x, l, s, g.easing.cubic.out, Ue, function () {
                    ct(), _ = !1, wt = -1, (n || wt !== m) && h.updateCurrItem(), T("mainScrollAnimComplete")
                }), n && h.updateCurrItem(!0), n
            }, Jt = function (e) {
                return 1 / Se * e * $
            }, Qt = function () {
                var e = v, t = et(), n = tt();
                v < t ? e = t : v > n && (e = n);
                var i, r = 1, o = De;
                return Me && !ge && !Ae && v < t ? (h.close(), !0) : (Me && (i = function (e) {
                    D((r - o) * e + o)
                }), h.zoomTo(e, 0, 200, g.easing.cubic.out, i), !0)
            };
        We("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var e = function (e, t, n, i, r) {
                        Q = e + t, ee = e + n, te = e + i, ne = r ? e + r : ""
                    };
                    re = y.pointerEvent, re && y.touch && (y.touch = !1), re ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : y.touch ? (e("touch", "start", "move", "end", "cancel"), o = !0) : e("mouse", "down", "move", "up"), q = ee + " " + te + " " + ne, U = Q, re && !o && (o = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), h.likelyTouchDevice = o, r[Q] = qt, r[ee] = Ut, r[te] = Gt, ne && (r[ne] = r[te]), y.touch && (U += " mousedown", q += " mousemove mouseup", r.mousedown = r[Q], r.mousemove = r[ee], r.mouseup = r[te]), o || (p.allowPanToNext = !1)
                }
            }
        });
        var en, tn, nn, rn, on, F, an, sn = function (s, e, l, t) {
            en && clearTimeout(en), rn = !0, nn = !0;
            var u;
            s.initialLayout ? (u = s.initialLayout, s.initialLayout = null) : u = p.getThumbBoundsFn && p.getThumbBoundsFn(m);
            var c = l ? p.hideAnimationDuration : p.showAnimationDuration, d = function () {
                lt("initialZoom"), l ? (h.template.removeAttribute("style"), h.bg.removeAttribute("style")) : (D(1), e && (e.style.display = "block"), g.addClass(f, "pswp--animated-in"), T("initialZoom" + (l ? "OutEnd" : "InEnd"))), t && t(), rn = !1
            };
            if (!c || !u || void 0 === u.x) return T("initialZoom" + (l ? "Out" : "In")), v = s.initialZoomLevel, P(S, s.initialPosition), A(), f.style.opacity = l ? 0 : 1, D(1), void (c ? setTimeout(function () {
                d()
            }, c) : d());
            var n = function () {
                var o = i, a = !h.currItem.src || h.currItem.loadError || p.showHideOpacity;
                s.miniImg && (s.miniImg.style.webkitBackfaceVisibility = "hidden"), l || (v = u.w / s.w, S.x = u.x, S.y = u.y - le, h[a ? "template" : "bg"].style.opacity = .001, A()), ut("initialZoom"), l && !o && g.removeClass(f, "pswp--animated-in"), a && (l ? g[(o ? "remove" : "add") + "Class"](f, "pswp--animate_opacity") : setTimeout(function () {
                    g.addClass(f, "pswp--animate_opacity")
                }, 30)), en = setTimeout(function () {
                    if (T("initialZoom" + (l ? "Out" : "In")), l) {
                        var t = u.w / s.w, n = {x: S.x, y: S.y}, i = v, r = De, e = function (e) {
                            1 === e ? (v = t, S.x = u.x, S.y = u.y - ce) : (v = (t - i) * e + i, S.x = (u.x - n.x) * e + n.x, S.y = (u.y - ce - n.y) * e + n.y), A(), a ? f.style.opacity = 1 - e : D(r - e * r)
                        };
                        o ? dt("initialZoom", 0, 1, c, g.easing.cubic.out, e, d) : (e(1), en = setTimeout(d, c + 20))
                    } else v = s.initialZoomLevel, P(S, s.initialPosition), A(), D(1), a ? f.style.opacity = 1 : D(1), en = setTimeout(d, c + 20)
                }, l ? 25 : 90)
            };
            n()
        }, N = {}, ln = [], un = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function () {
                return tn.length
            }
        }, cn = function () {
            return {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}}
        }, dn = function (e, t, n) {
            var i = e.bounds;
            i.center.x = Math.round((N.x - t) / 2), i.center.y = Math.round((N.y - n) / 2) + e.vGap.top, i.max.x = t > N.x ? Math.round(N.x - t) : i.center.x, i.max.y = n > N.y ? Math.round(N.y - n) + e.vGap.top : i.center.y, i.min.x = t > N.x ? 0 : i.center.x, i.min.y = n > N.y ? e.vGap.top : i.center.y
        }, fn = function (e, t, n) {
            if (e.src && !e.loadError) {
                var i = !n;
                if (i && (e.vGap || (e.vGap = {
                    top: 0,
                    bottom: 0
                }), T("parseVerticalMargin", e)), N.x = t.x, N.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                    var r = N.x / e.w, o = N.y / e.h;
                    e.fitRatio = r < o ? r : o;
                    var a = p.scaleMode;
                    "orig" === a ? n = 1 : "fit" === a && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = cn())
                }
                if (!n) return;
                return dn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
            }
            return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = cn(), e.initialPosition = e.bounds.center, e.bounds
        }, hn = function (e, t, n, i, r, o) {
            t.loadError || i && (t.imageAppended = !0, mn(t, i, t === h.currItem && Be), n.appendChild(i), o && setTimeout(function () {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
            }, 500))
        }, pn = function (e) {
            e.loading = !0, e.loaded = !1;
            var t = e.img = g.createEl("pswp__img", "img"), n = function () {
                e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
            };
            return t.onload = n, t.onerror = function () {
                e.loadError = !0, n()
            }, t.src = e.src, t
        }, gn = function (e, t) {
            if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = p.errorMsg.replace("%url%", e.src), !0
        }, mn = function (e, t, n) {
            if (e.src) {
                t || (t = e.container.lastChild);
                var i = n ? e.w : Math.round(e.w * e.fitRatio), r = n ? e.h : Math.round(e.h * e.fitRatio);
                e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = r + "px"), t.style.width = i + "px", t.style.height = r + "px"
            }
        }, vn = function () {
            if (ln.length) {
                for (var e, t = 0; t < ln.length; t++) e = ln[t], e.holder.index === e.index && hn(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                ln = []
            }
        };
        We("Controller", {
            publicMethods: {
                lazyLoadItem: function (e) {
                    e = ze(e);
                    var t = on(e);
                    t && (!t.loaded && !t.loading || K) && (T("gettingData", e, t), t.src && pn(t))
                }, initController: function () {
                    g.extend(p, un, !0), h.items = tn = e, on = h.getItemAt, F = p.getNumItemsFn, an = p.loop, F() < 3 && (p.loop = !1), u("beforeChange", function (e) {
                        var t, n = p.preload, i = null === e || e >= 0, r = Math.min(n[0], F()),
                            o = Math.min(n[1], F());
                        for (t = 1; t <= (i ? o : r); t++) h.lazyLoadItem(m + t);
                        for (t = 1; t <= (i ? r : o); t++) h.lazyLoadItem(m - t)
                    }), u("initialLayout", function () {
                        h.currItem.initialLayout = p.getThumbBoundsFn && p.getThumbBoundsFn(m)
                    }), u("mainScrollAnimComplete", vn), u("initialZoomInEnd", vn), u("destroy", function () {
                        for (var e, t = 0; t < tn.length; t++) e = tn[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        ln = null
                    })
                }, getItemAt: function (e) {
                    return e >= 0 && (void 0 !== tn[e] && tn[e])
                }, allowProgressiveImg: function () {
                    return p.forceProgressiveLoading || !o || p.mouseUsed || screen.width > 1200
                }, setContent: function (t, n) {
                    p.loop && (n = ze(n));
                    var e = h.getItemAt(t.index);
                    e && (e.container = null);
                    var i, r = h.getItemAt(n);
                    if (!r) return void (t.el.innerHTML = "");
                    T("gettingData", n, r), t.index = n, t.item = r;
                    var o = r.container = g.createEl("pswp__zoom-wrap");
                    if (!r.src && r.html && (r.html.tagName ? o.appendChild(r.html) : o.innerHTML = r.html), gn(r), fn(r, l), !r.src || r.loadError || r.loaded) r.src && !r.loadError && (i = g.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = r.src, mn(r, i), hn(n, r, o, i, !0)); else {
                        if (r.loadComplete = function (e) {
                            if (j) {
                                if (t && t.index === n) {
                                    if (gn(e, !0)) return e.loadComplete = e.img = null, fn(e, l), Ve(e), void (t.index === m && h.updateCurrZoomItem());
                                    e.imageAppended ? !rn && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null) : y.transform && (_ || rn) ? ln.push({
                                        item: e,
                                        baseDiv: o,
                                        img: e.img,
                                        index: n,
                                        holder: t,
                                        clearPlaceholder: !0
                                    }) : hn(n, e, o, e.img, _ || rn, !0)
                                }
                                e.loadComplete = null, e.img = null, T("imageLoadComplete", n, e)
                            }
                        }, g.features.transform) {
                            var a = "pswp__img pswp__img--placeholder";
                            a += r.msrc ? "" : " pswp__img--placeholder--blank";
                            var s = g.createEl(a, r.msrc ? "img" : "");
                            r.msrc && (s.src = r.msrc), mn(r, s), o.appendChild(s), r.placeholder = s
                        }
                        r.loading || pn(r), h.allowProgressiveImg() && (!nn && y.transform ? ln.push({
                            item: r,
                            baseDiv: o,
                            img: r.img,
                            index: n,
                            holder: t
                        }) : hn(n, r, o, r.img, !0, !0))
                    }
                    nn || n !== m ? Ve(r) : (k = o.style, sn(r, i || r.img)), t.el.innerHTML = "", t.el.appendChild(o)
                }, cleanSlide: function (e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var yn, bn = {}, xn = function (e, t, n) {
            var i = document.createEvent("CustomEvent"),
                r = {origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch"};
            i.initCustomEvent("pswpTap", !0, !0, r), e.target.dispatchEvent(i)
        };
        We("Tap", {
            publicMethods: {
                initTap: function () {
                    u("firstTouchStart", h.onTapStart), u("touchRelease", h.onTapRelease), u("destroy", function () {
                        bn = {}, yn = null
                    })
                }, onTapStart: function (e) {
                    e.length > 1 && (clearTimeout(yn), yn = null)
                }, onTapRelease: function (e, t) {
                    if (t && !xe && !ye && !st) {
                        var n = t;
                        if (yn && (clearTimeout(yn), yn = null, Dt(n, bn))) return void T("doubleTap", n);
                        if ("mouse" === t.type) return void xn(e, t, "mouse");
                        var i = e.target.tagName.toUpperCase();
                        if ("BUTTON" === i || g.hasClass(e.target, "pswp__single-tap")) return void xn(e, t);
                        P(bn, n), yn = setTimeout(function () {
                            xn(e, t), yn = null
                        }, 300)
                    }
                }
            }
        });
        var R;
        We("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    ue || (o ? u("mouseUsed", function () {
                        h.setupDesktopZoom()
                    }) : h.setupDesktopZoom(!0))
                }, setupDesktopZoom: function (e) {
                    R = {};
                    var t = "wheel mousewheel DOMMouseScroll";
                    u("bindEvents", function () {
                        g.bind(f, t, h.handleMouseWheel)
                    }), u("unbindEvents", function () {
                        R && g.unbind(f, t, h.handleMouseWheel)
                    }), h.mouseZoomedIn = !1;
                    var n, i = function () {
                        h.mouseZoomedIn && (g.removeClass(f, "pswp--zoomed-in"), h.mouseZoomedIn = !1), v < 1 ? g.addClass(f, "pswp--zoom-allowed") : g.removeClass(f, "pswp--zoom-allowed"), r()
                    }, r = function () {
                        n && (g.removeClass(f, "pswp--dragging"), n = !1)
                    };
                    u("resize", i), u("afterChange", i), u("pointerDown", function () {
                        h.mouseZoomedIn && (n = !0, g.addClass(f, "pswp--dragging"))
                    }), u("pointerUp", r), e || i()
                }, handleMouseWheel: function (e) {
                    if (v <= h.currItem.fitRatio) return p.modal && (!p.closeOnScroll || st || b ? e.preventDefault() : ie && Math.abs(e.deltaY) > 2 && (i = !0, h.close())), !0;
                    if (e.stopPropagation(), R.x = 0, "deltaX" in e) 1 === e.deltaMode ? (R.x = 18 * e.deltaX, R.y = 18 * e.deltaY) : (R.x = e.deltaX, R.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (R.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? R.y = -.16 * e.wheelDeltaY : R.y = -.16 * e.wheelDelta; else {
                        if (!("detail" in e)) return;
                        R.y = e.detail
                    }
                    Qe(v, !0);
                    var t = S.x - R.x, n = S.y - R.y;
                    (p.modal || t <= d.min.x && t >= d.max.x && n <= d.min.y && n >= d.max.y) && e.preventDefault(), h.panTo(t, n)
                }, toggleDesktopZoom: function (e) {
                    e = e || {x: l.x / 2 + Fe.x, y: l.y / 2 + Fe.y};
                    var t = p.getDoubleTapZoom(!0, h.currItem), n = v === t;
                    h.mouseZoomedIn = !n, h.zoomTo(n ? h.currItem.initialZoomLevel : t, e, 333), g[(n ? "remove" : "add") + "Class"](f, "pswp--zoomed-in")
                }
            }
        });
        var wn, kn, _n, Sn, Cn, Tn, H, Mn, Dn, An, B, Pn, In = {history: !0, galleryUID: 1}, En = function () {
            return B.hash.substring(1)
        }, On = function () {
            wn && clearTimeout(wn), _n && clearTimeout(_n)
        }, Ln = function () {
            var e = En(), t = {};
            if (e.length < 5) return t;
            var n, i = e.split("&");
            for (n = 0; n < i.length; n++) if (i[n]) {
                var r = i[n].split("=");
                r.length < 2 || (t[r[0]] = r[1])
            }
            if (p.galleryPIDs) {
                var o = t.pid;
                for (t.pid = 0, n = 0; n < tn.length; n++) if (tn[n].pid === o) {
                    t.pid = n;
                    break
                }
            } else t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
        }, Fn = function () {
            if (_n && clearTimeout(_n), st || b) return void (_n = setTimeout(Fn, 500));
            Sn ? clearTimeout(kn) : Sn = !0;
            var e = m + 1, t = on(m);
            t.hasOwnProperty("pid") && (e = t.pid);
            var n = H + "&gid=" + p.galleryUID + "&pid=" + e;
            Mn || B.hash.indexOf(n) === -1 && (An = !0);
            var i = B.href.split("#")[0] + "#" + n;
            Pn ? "#" + n !== window.location.hash && history[Mn ? "replaceState" : "pushState"]("", document.title, i) : Mn ? B.replace(i) : B.hash = n, Mn = !0, kn = setTimeout(function () {
                Sn = !1
            }, 60)
        };
        We("History", {
            publicMethods: {
                initHistory: function () {
                    if (g.extend(p, In, !0), p.history) {
                        B = window.location, An = !1, Dn = !1, Mn = !1, H = En(), Pn = "pushState" in history, H.indexOf("gid=") > -1 && (H = H.split("&gid=")[0], H = H.split("?gid=")[0]), u("afterChange", h.updateURL), u("unbindEvents", function () {
                            g.unbind(window, "hashchange", h.onHashChange)
                        });
                        var e = function () {
                            Tn = !0, Dn || (An ? history.back() : H ? B.hash = H : Pn ? history.pushState("", document.title, B.pathname + B.search) : B.hash = ""), On()
                        };
                        u("unbindEvents", function () {
                            i && e()
                        }), u("destroy", function () {
                            Tn || e()
                        }), u("firstUpdate", function () {
                            m = Ln().pid
                        });
                        var t = H.indexOf("pid=");
                        t > -1 && (H = H.substring(0, t), "&" === H.slice(-1) && (H = H.slice(0, -1))), setTimeout(function () {
                            j && g.bind(window, "hashchange", h.onHashChange)
                        }, 40)
                    }
                }, onHashChange: function () {
                    return En() === H ? (Dn = !0, void h.close()) : void (Sn || (Cn = !0, h.goTo(Ln().pid), Cn = !1))
                }, updateURL: function () {
                    On(), Cn || (Mn ? wn = setTimeout(Fn, 800) : Fn())
                }
            }
        }), g.extend(h, ft)
    };
    return e
});
!function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function () {
    "use strict";
    var e = function (i, s) {
        var t, l, r, o, n, a, u, c, d, e, f, h, p, g, m, v, y, b, x, w = this, k = !1, _ = !0, S = !0, N = {
            barsSize: {top: 44, bottom: "auto"},
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function (e, t) {
                return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
            getImageURLForShare: function () {
                return i.currItem.src || ""
            },
            getPageURLForShare: function () {
                return window.location.href
            },
            getTextForShare: function () {
                return i.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        }, C = function (e) {
            if (v) return !0;
            e = e || window.event, m.timeToIdle && m.mouseUsed && !d && E();
            for (var t, n, i = e.target || e.srcElement, r = i.getAttribute("class") || "", o = 0; o < F.length; o++) t = F[o], t.onTap && r.indexOf("pswp__" + t.name) > -1 && (t.onTap(), n = !0);
            if (n) {
                e.stopPropagation && e.stopPropagation(), v = !0;
                var a = s.features.isOldAndroid ? 600 : 30;
                y = setTimeout(function () {
                    v = !1
                }, a)
            }
        }, R = function () {
            return !i.likelyTouchDevice || m.mouseUsed || screen.width > m.fitControlsWidth
        }, T = function (e, t, n) {
            s[(n ? "add" : "remove") + "Class"](e, "pswp__" + t)
        }, M = function () {
            var e = 1 === m.getNumItemsFn();
            e !== g && (T(l, "ui--one-slide", e), g = e)
        }, D = function () {
            T(u, "share-modal--hidden", S)
        }, A = function () {
            return S = !S, S ? (s.removeClass(u, "pswp__share-modal--fade-in"), setTimeout(function () {
                S && D()
            }, 300)) : (D(), setTimeout(function () {
                S || s.addClass(u, "pswp__share-modal--fade-in")
            }, 30)), S || B(), !1
        }, H = function (e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            return i.shout("shareLinkClick", e, t), !!t.href && (!!t.hasAttribute("download") || (window.open(t.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), S || A(), !1))
        }, B = function () {
            for (var e, t, n, i, r, o = "", a = 0; a < m.shareButtons.length; a++) e = m.shareButtons[a], n = m.getImageURLForShare(e), i = m.getPageURLForShare(e), r = m.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(r)), o += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", m.parseShareButtonOut && (o = m.parseShareButtonOut(e, o));
            u.children[0].innerHTML = o, u.children[0].onclick = H
        }, P = function (e) {
            for (var t = 0; t < m.closeElClasses.length; t++) if (s.hasClass(e, "pswp__" + m.closeElClasses[t])) return !0
        }, I = 0, E = function () {
            clearTimeout(x), I = 0, d && w.setIdle(!1)
        }, O = function (e) {
            e = e ? e : window.event;
            var t = e.relatedTarget || e.toElement;
            t && "HTML" !== t.nodeName || (clearTimeout(x), x = setTimeout(function () {
                w.setIdle(!0)
            }, m.timeToIdleOutside))
        }, W = function () {
            m.fullscreenEl && !s.features.isOldAndroid && (t || (t = w.getFullscreenAPI()), t ? (s.bind(document, t.eventK, w.updateFullscreen), w.updateFullscreen(), s.addClass(i.template, "pswp--supports-fs")) : s.removeClass(i.template, "pswp--supports-fs"))
        }, z = function () {
            m.preloaderEl && (L(!0), e("beforeChange", function () {
                clearTimeout(p), p = setTimeout(function () {
                    i.currItem && i.currItem.loading ? (!i.allowProgressiveImg() || i.currItem.img && !i.currItem.img.naturalWidth) && L(!1) : L(!0)
                }, m.loadingIndicatorDelay)
            }), e("imageLoadComplete", function (e, t) {
                i.currItem === t && L(!0)
            }))
        }, L = function (e) {
            h !== e && (T(f, "preloader--active", !e), h = e)
        }, j = function (e) {
            var t = e.vGap;
            if (R()) {
                var n = m.barsSize;
                if (m.captionEl && "auto" === n.bottom) if (o || (o = s.createEl("pswp__caption pswp__caption--fake"), o.appendChild(s.createEl("pswp__caption__center")), l.insertBefore(o, r), s.addClass(l, "pswp__ui--fit")), m.addCaptionHTMLFn(e, o, !0)) {
                    var i = o.clientHeight;
                    t.bottom = parseInt(i, 10) || 44
                } else t.bottom = n.top; else t.bottom = "auto" === n.bottom ? 0 : n.bottom;
                t.top = n.top
            } else t.top = t.bottom = 0
        }, Y = function () {
            m.timeToIdle && e("mouseUsed", function () {
                s.bind(document, "mousemove", E), s.bind(document, "mouseout", O), b = setInterval(function () {
                    I++, 2 === I && w.setIdle(!0)
                }, m.timeToIdle / 2)
            })
        }, V = function () {
            e("onVerticalDrag", function (e) {
                _ && e < .95 ? w.hideControls() : !_ && e >= .95 && w.showControls()
            });
            var t;
            e("onPinchClose", function (e) {
                _ && e < .9 ? (w.hideControls(), t = !0) : t && !_ && e > .9 && w.showControls()
            }), e("zoomGestureEnded", function () {
                t = !1, t && !_ && w.showControls()
            })
        }, F = [{
            name: "caption", option: "captionEl", onInit: function (e) {
                r = e
            }
        }, {
            name: "share-modal", option: "shareEl", onInit: function (e) {
                u = e
            }, onTap: function () {
                A()
            }
        }, {
            name: "button--share", option: "shareEl", onInit: function (e) {
                a = e
            }, onTap: function () {
                A()
            }
        }, {name: "button--zoom", option: "zoomEl", onTap: i.toggleDesktopZoom}, {
            name: "counter",
            option: "counterEl",
            onInit: function (e) {
                n = e
            }
        }, {name: "button--close", option: "closeEl", onTap: i.close}, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: i.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: i.next}, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
                t.isFullscreen() ? t.exit() : t.enter()
            }
        }, {
            name: "preloader", option: "preloaderEl", onInit: function (e) {
                f = e
            }
        }], q = function () {
            var r, o, a, e = function (e) {
                if (e) for (var t = e.length, n = 0; n < t; n++) {
                    r = e[n], o = r.className;
                    for (var i = 0; i < F.length; i++) a = F[i], o.indexOf("pswp__" + a.name) > -1 && (m[a.option] ? (s.removeClass(r, "pswp__element--disabled"), a.onInit && a.onInit(r)) : s.addClass(r, "pswp__element--disabled"))
                }
            };
            e(l.children);
            var t = s.getChildByClass(l, "pswp__top-bar");
            t && e(t.children)
        };
        w.init = function () {
            s.extend(i.options, N, !0), m = i.options, l = s.getChildByClass(i.scrollWrap, "pswp__ui"), e = i.listen, V(), e("beforeChange", w.update), e("doubleTap", function (e) {
                var t = i.currItem.initialZoomLevel;
                i.getZoomLevel() !== t ? i.zoomTo(t, e, 333) : i.zoomTo(m.getDoubleTapZoom(!1, i.currItem), e, 333)
            }), e("preventDragEvent", function (e, t, n) {
                var i = e.target || e.srcElement;
                i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }), e("bindEvents", function () {
                s.bind(l, "pswpTap click", C), s.bind(i.scrollWrap, "pswpTap", w.onGlobalTap), i.likelyTouchDevice || s.bind(i.scrollWrap, "mouseover", w.onMouseOver)
            }), e("unbindEvents", function () {
                S || A(), b && clearInterval(b), s.unbind(document, "mouseout", O), s.unbind(document, "mousemove", E), s.unbind(l, "pswpTap click", C), s.unbind(i.scrollWrap, "pswpTap", w.onGlobalTap), s.unbind(i.scrollWrap, "mouseover", w.onMouseOver), t && (s.unbind(document, t.eventK, w.updateFullscreen), t.isFullscreen() && (m.hideAnimationDuration = 0, t.exit()), t = null)
            }), e("destroy", function () {
                m.captionEl && (o && l.removeChild(o), s.removeClass(r, "pswp__caption--empty")), u && (u.children[0].onclick = null), s.removeClass(l, "pswp__ui--over-close"), s.addClass(l, "pswp__ui--hidden"), w.setIdle(!1)
            }), m.showAnimationDuration || s.removeClass(l, "pswp__ui--hidden"), e("initialZoomIn", function () {
                m.showAnimationDuration && s.removeClass(l, "pswp__ui--hidden")
            }), e("initialZoomOut", function () {
                s.addClass(l, "pswp__ui--hidden")
            }), e("parseVerticalMargin", j), q(), m.shareEl && a && u && (S = !0), M(), Y(), W(), z()
        }, w.setIdle = function (e) {
            d = e, T(l, "ui--idle", e)
        }, w.update = function () {
            _ && i.currItem ? (w.updateIndexIndicator(), m.captionEl && (m.addCaptionHTMLFn(i.currItem, r), T(r, "caption--empty", !i.currItem.title)), k = !0) : k = !1, S || A(), M()
        }, w.updateFullscreen = function (e) {
            e && setTimeout(function () {
                i.setScrollOffset(0, s.getScrollY())
            }, 50), s[(t.isFullscreen() ? "add" : "remove") + "Class"](i.template, "pswp--fs")
        }, w.updateIndexIndicator = function () {
            m.counterEl && (n.innerHTML = i.getCurrentIndex() + 1 + m.indexIndicatorSep + m.getNumItemsFn())
        }, w.onGlobalTap = function (e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            if (!v) if (e.detail && "mouse" === e.detail.pointerType) {
                if (P(t)) return void i.close();
                s.hasClass(t, "pswp__img") && (1 === i.getZoomLevel() && i.getZoomLevel() <= i.currItem.fitRatio ? m.clickToCloseNonZoomable && i.close() : i.toggleDesktopZoom(e.detail.releasePoint))
            } else if (m.tapToToggleControls && (_ ? w.hideControls() : w.showControls()), m.tapToClose && (s.hasClass(t, "pswp__img") || P(t))) return void i.close()
        }, w.onMouseOver = function (e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            T(l, "ui--over-close", P(t))
        }, w.hideControls = function () {
            s.addClass(l, "pswp__ui--hidden"), _ = !1
        }, w.showControls = function () {
            _ = !0, k || w.update(), s.removeClass(l, "pswp__ui--hidden")
        }, w.supportsFullscreen = function () {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, w.getFullscreenAPI = function () {
            var e, t = document.documentElement, n = "fullscreenchange";
            return t.requestFullscreen ? e = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: n
            } : t.mozRequestFullScreen ? e = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + n
            } : t.webkitRequestFullscreen ? e = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + n
            } : t.msRequestFullscreen && (e = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), e && (e.enter = function () {
                return c = m.closeOnScroll, m.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? i.template[this.enterK]() : void i.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, e.exit = function () {
                return m.closeOnScroll = c, document[this.exitK]()
            }, e.isFullscreen = function () {
                return document[this.elementK]
            }), e
        }
    };
    return e
});
var QRCode;
!function () {
    function n(e) {
        this.mode = o.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
        for (var t = [], n = 0, i = this.data.length; i > n; n++) {
            var r = this.data.charCodeAt(n);
            r > 65536 ? (t[0] = 240 | (1835008 & r) >>> 18, t[1] = 128 | (258048 & r) >>> 12, t[2] = 128 | (4032 & r) >>> 6, t[3] = 128 | 63 & r) : r > 2048 ? (t[0] = 224 | (61440 & r) >>> 12, t[1] = 128 | (4032 & r) >>> 6, t[2] = 128 | 63 & r) : r > 128 ? (t[0] = 192 | (1984 & r) >>> 6, t[1] = 128 | 63 & r) : t[0] = r, this.parsedData = this.parsedData.concat(t)
        }
        this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function l(e, t) {
        this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    function y(e, t) {
        if (void 0 == e.length) throw new Error(e.length + "/" + t);
        for (var n = 0; n < e.length && 0 == e[n];) n++;
        this.num = new Array(e.length - n + t);
        for (var i = 0; i < e.length - n; i++) this.num[i] = e[i + n]
    }

    function c(e, t) {
        this.totalCount = e, this.dataCount = t
    }

    function u() {
        this.buffer = [], this.length = 0
    }

    function e() {
        return "undefined" != typeof CanvasRenderingContext2D
    }

    function i() {
        var e = !1, t = navigator.userAgent;
        return /android/i.test(t) && (e = !0, aMat = t.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (e = parseFloat(aMat[1]))), e
    }

    function t(e, t) {
        for (var n = 1, i = s(e), r = 0, o = h.length; o >= r; r++) {
            var a = 0;
            switch (t) {
                case d.L:
                    a = h[r][0];
                    break;
                case d.M:
                    a = h[r][1];
                    break;
                case d.Q:
                    a = h[r][2];
                    break;
                case d.H:
                    a = h[r][3]
            }
            if (a >= i) break;
            n++
        }
        if (n > h.length) throw new Error("Too long data");
        return n
    }

    function s(e) {
        var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return t.length + (t.length != e ? 3 : 0)
    }

    n.prototype = {
        getLength: function () {
            return this.parsedData.length
        }, write: function (e) {
            for (var t = 0, n = this.parsedData.length; n > t; t++) e.put(this.parsedData[t], 8)
        }
    }, l.prototype = {
        addData: function (e) {
            var t = new n(e);
            this.dataList.push(t), this.dataCache = null
        }, isDark: function (e, t) {
            if (0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw new Error(e + "," + t);
            return this.modules[e][t]
        }, getModuleCount: function () {
            return this.moduleCount
        }, make: function () {
            this.makeImpl(!1, this.getBestMaskPattern())
        }, makeImpl: function (e, t) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++) {
                this.modules[n] = new Array(this.moduleCount);
                for (var i = 0; i < this.moduleCount; i++) this.modules[n][i] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = l.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
        }, setupPositionProbePattern: function (e, t) {
            for (var n = -1; 7 >= n; n++) if (!(-1 >= e + n || this.moduleCount <= e + n)) for (var i = -1; 7 >= i; i++) -1 >= t + i || this.moduleCount <= t + i || (this.modules[e + n][t + i] = n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 2 && 4 >= n && i >= 2 && 4 >= i ? !0 : !1)
        }, getBestMaskPattern: function () {
            for (var e = 0, t = 0, n = 0; 8 > n; n++) {
                this.makeImpl(!0, n);
                var i = b.getLostPoint(this);
                (0 == n || e > i) && (e = i, t = n)
            }
            return t
        }, createMovieClip: function (e, t, n) {
            var i = e.createEmptyMovieClip(t, n), r = 1;
            this.make();
            for (var o = 0; o < this.modules.length; o++) for (var a = o * r, s = 0; s < this.modules[o].length; s++) {
                var l = s * r, u = this.modules[o][s];
                u && (i.beginFill(0, 100), i.moveTo(l, a), i.lineTo(l + r, a), i.lineTo(l + r, a + r), i.lineTo(l, a + r), i.endFill())
            }
            return i
        }, setupTimingPattern: function () {
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = 0 == e % 2);
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
        }, setupPositionAdjustPattern: function () {
            for (var e = b.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) for (var n = 0; n < e.length; n++) {
                var i = e[t], r = e[n];
                if (null == this.modules[i][r]) for (var o = -2; 2 >= o; o++) for (var a = -2; 2 >= a; a++) this.modules[i + o][r + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a ? !0 : !1
            }
        }, setupTypeNumber: function (e) {
            for (var t = b.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
                var i = !e && 1 == (1 & t >> n);
                this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = i
            }
            for (var n = 0; 18 > n; n++) {
                var i = !e && 1 == (1 & t >> n);
                this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i
            }
        }, setupTypeInfo: function (e, t) {
            for (var n = this.errorCorrectLevel << 3 | t, i = b.getBCHTypeInfo(n), r = 0; 15 > r; r++) {
                var o = !e && 1 == (1 & i >> r);
                6 > r ? this.modules[r][8] = o : 8 > r ? this.modules[r + 1][8] = o : this.modules[this.moduleCount - 15 + r][8] = o
            }
            for (var r = 0; 15 > r; r++) {
                var o = !e && 1 == (1 & i >> r);
                8 > r ? this.modules[8][this.moduleCount - r - 1] = o : 9 > r ? this.modules[8][15 - r - 1 + 1] = o : this.modules[8][15 - r - 1] = o
            }
            this.modules[this.moduleCount - 8][8] = !e
        }, mapData: function (e, t) {
            for (var n = -1, i = this.moduleCount - 1, r = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
                for (var s = 0; 2 > s; s++) if (null == this.modules[i][a - s]) {
                    var l = !1;
                    o < e.length && (l = 1 == (1 & e[o] >>> r));
                    var u = b.getMask(t, i, a - s);
                    u && (l = !l), this.modules[i][a - s] = l, r--, -1 == r && (o++, r = 7)
                }
                if (i += n, 0 > i || this.moduleCount <= i) {
                    i -= n, n = -n;
                    break
                }
            }
        }
    }, l.PAD0 = 236, l.PAD1 = 17, l.createData = function (e, t, n) {
        for (var i = c.getRSBlocks(e, t), r = new u, o = 0; o < n.length; o++) {
            var a = n[o];
            r.put(a.mode, 4), r.put(a.getLength(), b.getLengthInBits(a.mode, e)), a.write(r)
        }
        for (var s = 0, o = 0; o < i.length; o++) s += i[o].dataCount;
        if (r.getLengthInBits() > 8 * s) throw new Error("code length overflow. (" + r.getLengthInBits() + ">" + 8 * s + ")");
        for (r.getLengthInBits() + 4 <= 8 * s && r.put(0, 4); 0 != r.getLengthInBits() % 8;) r.putBit(!1);
        for (; ;) {
            if (r.getLengthInBits() >= 8 * s) break;
            if (r.put(l.PAD0, 8), r.getLengthInBits() >= 8 * s) break;
            r.put(l.PAD1, 8)
        }
        return l.createBytes(r, i)
    }, l.createBytes = function (e, t) {
        for (var n = 0, i = 0, r = 0, o = new Array(t.length), a = new Array(t.length), s = 0; s < t.length; s++) {
            var l = t[s].dataCount, u = t[s].totalCount - l;
            i = Math.max(i, l), r = Math.max(r, u), o[s] = new Array(l);
            for (var c = 0; c < o[s].length; c++) o[s][c] = 255 & e.buffer[c + n];
            n += l;
            var d = b.getErrorCorrectPolynomial(u), f = new y(o[s], d.getLength() - 1), h = f.mod(d);
            a[s] = new Array(d.getLength() - 1);
            for (var c = 0; c < a[s].length; c++) {
                var p = c + h.getLength() - a[s].length;
                a[s][c] = p >= 0 ? h.get(p) : 0
            }
        }
        for (var g = 0, c = 0; c < t.length; c++) g += t[c].totalCount;
        for (var m = new Array(g), v = 0, c = 0; i > c; c++) for (var s = 0; s < t.length; s++) c < o[s].length && (m[v++] = o[s][c]);
        for (var c = 0; r > c; c++) for (var s = 0; s < t.length; s++) c < a[s].length && (m[v++] = a[s][c]);
        return m
    };
    for (var o = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, d = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, r = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    }, b = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (e) {
            for (var t = e << 10; b.getBCHDigit(t) - b.getBCHDigit(b.G15) >= 0;) t ^= b.G15 << b.getBCHDigit(t) - b.getBCHDigit(b.G15);
            return (e << 10 | t) ^ b.G15_MASK
        },
        getBCHTypeNumber: function (e) {
            for (var t = e << 12; b.getBCHDigit(t) - b.getBCHDigit(b.G18) >= 0;) t ^= b.G18 << b.getBCHDigit(t) - b.getBCHDigit(b.G18);
            return e << 12 | t
        },
        getBCHDigit: function (e) {
            for (var t = 0; 0 != e;) t++, e >>>= 1;
            return t
        },
        getPatternPosition: function (e) {
            return b.PATTERN_POSITION_TABLE[e - 1]
        },
        getMask: function (e, t, n) {
            switch (e) {
                case r.PATTERN000:
                    return 0 == (t + n) % 2;
                case r.PATTERN001:
                    return 0 == t % 2;
                case r.PATTERN010:
                    return 0 == n % 3;
                case r.PATTERN011:
                    return 0 == (t + n) % 3;
                case r.PATTERN100:
                    return 0 == (Math.floor(t / 2) + Math.floor(n / 3)) % 2;
                case r.PATTERN101:
                    return 0 == t * n % 2 + t * n % 3;
                case r.PATTERN110:
                    return 0 == (t * n % 2 + t * n % 3) % 2;
                case r.PATTERN111:
                    return 0 == (t * n % 3 + (t + n) % 2) % 2;
                default:
                    throw new Error("bad maskPattern:" + e)
            }
        },
        getErrorCorrectPolynomial: function (e) {
            for (var t = new y([1], 0), n = 0; e > n; n++) t = t.multiply(new y([1, a.gexp(n)], 0));
            return t
        },
        getLengthInBits: function (e, t) {
            if (t >= 1 && 10 > t) switch (e) {
                case o.MODE_NUMBER:
                    return 10;
                case o.MODE_ALPHA_NUM:
                    return 9;
                case o.MODE_8BIT_BYTE:
                    return 8;
                case o.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + e)
            } else if (27 > t) switch (e) {
                case o.MODE_NUMBER:
                    return 12;
                case o.MODE_ALPHA_NUM:
                    return 11;
                case o.MODE_8BIT_BYTE:
                    return 16;
                case o.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + e)
            } else {
                if (!(41 > t)) throw new Error("type:" + t);
                switch (e) {
                    case o.MODE_NUMBER:
                        return 14;
                    case o.MODE_ALPHA_NUM:
                        return 13;
                    case o.MODE_8BIT_BYTE:
                        return 16;
                    case o.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + e)
                }
            }
        },
        getLostPoint: function (e) {
            for (var t = e.getModuleCount(), n = 0, i = 0; t > i; i++) for (var r = 0; t > r; r++) {
                for (var o = 0, a = e.isDark(i, r), s = -1; 1 >= s; s++) if (!(0 > i + s || i + s >= t)) for (var l = -1; 1 >= l; l++) 0 > r + l || r + l >= t || (0 != s || 0 != l) && a == e.isDark(i + s, r + l) && o++;
                o > 5 && (n += 3 + o - 5)
            }
            for (var i = 0; t - 1 > i; i++) for (var r = 0; t - 1 > r; r++) {
                var u = 0;
                e.isDark(i, r) && u++, e.isDark(i + 1, r) && u++, e.isDark(i, r + 1) && u++, e.isDark(i + 1, r + 1) && u++, (0 == u || 4 == u) && (n += 3)
            }
            for (var i = 0; t > i; i++) for (var r = 0; t - 6 > r; r++) e.isDark(i, r) && !e.isDark(i, r + 1) && e.isDark(i, r + 2) && e.isDark(i, r + 3) && e.isDark(i, r + 4) && !e.isDark(i, r + 5) && e.isDark(i, r + 6) && (n += 40);
            for (var r = 0; t > r; r++) for (var i = 0; t - 6 > i; i++) e.isDark(i, r) && !e.isDark(i + 1, r) && e.isDark(i + 2, r) && e.isDark(i + 3, r) && e.isDark(i + 4, r) && !e.isDark(i + 5, r) && e.isDark(i + 6, r) && (n += 40);
            for (var c = 0, r = 0; t > r; r++) for (var i = 0; t > i; i++) e.isDark(i, r) && c++;
            var d = Math.abs(100 * c / t / t - 50) / 5;
            return n += 10 * d
        }
    }, a = {
        glog: function (e) {
            if (1 > e) throw new Error("glog(" + e + ")");
            return a.LOG_TABLE[e]
        }, gexp: function (e) {
            for (; 0 > e;) e += 255;
            for (; e >= 256;) e -= 255;
            return a.EXP_TABLE[e]
        }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)
    }, f = 0; 8 > f; f++) a.EXP_TABLE[f] = 1 << f;
    for (var f = 8; 256 > f; f++) a.EXP_TABLE[f] = a.EXP_TABLE[f - 4] ^ a.EXP_TABLE[f - 5] ^ a.EXP_TABLE[f - 6] ^ a.EXP_TABLE[f - 8];
    for (var f = 0; 255 > f; f++) a.LOG_TABLE[a.EXP_TABLE[f]] = f;
    y.prototype = {
        get: function (e) {
            return this.num[e]
        }, getLength: function () {
            return this.num.length
        }, multiply: function (e) {
            for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++) for (var i = 0; i < e.getLength(); i++) t[n + i] ^= a.gexp(a.glog(this.get(n)) + a.glog(e.get(i)));
            return new y(t, 0)
        }, mod: function (e) {
            if (this.getLength() - e.getLength() < 0) return this;
            for (var t = a.glog(this.get(0)) - a.glog(e.get(0)), n = new Array(this.getLength()), i = 0; i < this.getLength(); i++) n[i] = this.get(i);
            for (var i = 0; i < e.getLength(); i++) n[i] ^= a.gexp(a.glog(e.get(i)) + t);
            return new y(n, 0).mod(e)
        }
    }, c.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], c.getRSBlocks = function (e, t) {
        var n = c.getRsBlockTable(e, t);
        if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
        for (var i = n.length / 3, r = [], o = 0; i > o; o++) for (var a = n[3 * o + 0], s = n[3 * o + 1], l = n[3 * o + 2], u = 0; a > u; u++) r.push(new c(s, l));
        return r
    }, c.getRsBlockTable = function (e, t) {
        switch (t) {
            case d.L:
                return c.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case d.M:
                return c.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case d.Q:
                return c.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case d.H:
                return c.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
                return void 0
        }
    }, u.prototype = {
        get: function (e) {
            var t = Math.floor(e / 8);
            return 1 == (1 & this.buffer[t] >>> 7 - e % 8)
        }, put: function (e, t) {
            for (var n = 0; t > n; n++) this.putBit(1 == (1 & e >>> t - n - 1))
        }, getLengthInBits: function () {
            return this.length
        }, putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
        }
    };
    var h = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
        p = function () {
            var e = function (e, t) {
                this._el = e, this._htOption = t
            };
            return e.prototype.draw = function (e) {
                function t(e, t) {
                    var n = document.createElementNS("http://www.w3.org/2000/svg", e);
                    for (var i in t) t.hasOwnProperty(i) && n.setAttribute(i, t[i]);
                    return n
                }

                var n = this._htOption, i = this._el, r = e.getModuleCount();
                Math.floor(n.width / r), Math.floor(n.height / r), this.clear();
                var o = t("svg", {
                    viewBox: "0 0 " + String(r) + " " + String(r),
                    width: "100%",
                    height: "100%",
                    fill: n.colorLight
                });
                o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), i.appendChild(o), o.appendChild(t("rect", {
                    fill: n.colorDark,
                    width: "1",
                    height: "1",
                    id: "template"
                }));
                for (var a = 0; r > a; a++) for (var s = 0; r > s; s++) if (e.isDark(a, s)) {
                    var l = t("use", {x: String(a), y: String(s)});
                    l.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), o.appendChild(l)
                }
            }, e.prototype.clear = function () {
                for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
            }, e
        }(), g = "svg" === document.documentElement.tagName.toLowerCase(), m = g ? p : e() ? function () {
            function e() {
                this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
            }

            function t(e, t) {
                var n = this;
                if (n._fFail = t, n._fSuccess = e, null === n._bSupportDataURI) {
                    var i = document.createElement("img"), r = function () {
                        n._bSupportDataURI = !1, n._fFail && _fFail.call(n)
                    }, o = function () {
                        n._bSupportDataURI = !0, n._fSuccess && n._fSuccess.call(n)
                    };
                    return i.onabort = r, i.onerror = r, i.onload = o, i.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", void 0
                }
                n._bSupportDataURI === !0 && n._fSuccess ? n._fSuccess.call(n) : n._bSupportDataURI === !1 && n._fFail && n._fFail.call(n)
            }

            if (this._android && this._android <= 2.1) {
                var u = 1 / window.devicePixelRatio, c = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function (e, t, n, i, r, o, a, s) {
                    if ("nodeName" in e && /img/i.test(e.nodeName)) for (var l = arguments.length - 1; l >= 1; l--) arguments[l] = arguments[l] * u; else "undefined" == typeof s && (arguments[1] *= u, arguments[2] *= u, arguments[3] *= u, arguments[4] *= u);
                    c.apply(this, arguments)
                }
            }
            var n = function (e, t) {
                this._bIsPainted = !1, this._android = i(), this._htOption = t, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = t.width, this._elCanvas.height = t.height, e.appendChild(this._elCanvas), this._el = e, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
            };
            return n.prototype.draw = function (e) {
                var t = this._elImage, n = this._oContext, i = this._htOption, r = e.getModuleCount(), o = i.width / r,
                    a = i.height / r, s = Math.round(o), l = Math.round(a);
                t.style.display = "none", this.clear();
                for (var u = 0; r > u; u++) for (var c = 0; r > c; c++) {
                    var d = e.isDark(u, c), f = c * o, h = u * a;
                    n.strokeStyle = d ? i.colorDark : i.colorLight, n.lineWidth = 1, n.fillStyle = d ? i.colorDark : i.colorLight, n.fillRect(f, h, o, a), n.strokeRect(Math.floor(f) + .5, Math.floor(h) + .5, s, l), n.strokeRect(Math.ceil(f) - .5, Math.ceil(h) - .5, s, l)
                }
                this._bIsPainted = !0
            }, n.prototype.makeImage = function () {
                this._bIsPainted && t.call(this, e)
            }, n.prototype.isPainted = function () {
                return this._bIsPainted
            }, n.prototype.clear = function () {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
            }, n.prototype.round = function (e) {
                return e ? Math.floor(1e3 * e) / 1e3 : e
            }, n
        }() : function () {
            var e = function (e, t) {
                this._el = e, this._htOption = t
            };
            return e.prototype.draw = function (e) {
                for (var t = this._htOption, n = this._el, i = e.getModuleCount(), r = Math.floor(t.width / i), o = Math.floor(t.height / i), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; i > s; s++) {
                    a.push("<tr>");
                    for (var l = 0; i > l; l++) a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + o + "px;background-color:" + (e.isDark(s, l) ? t.colorDark : t.colorLight) + ';"></td>');
                    a.push("</tr>")
                }
                a.push("</table>"), n.innerHTML = a.join("");
                var u = n.childNodes[0], c = (t.width - u.offsetWidth) / 2, d = (t.height - u.offsetHeight) / 2;
                c > 0 && d > 0 && (u.style.margin = d + "px " + c + "px")
            }, e.prototype.clear = function () {
                this._el.innerHTML = ""
            }, e
        }();
    QRCode = function (e, t) {
        if (this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: d.H
        }, "string" == typeof t && (t = {text: t}), t) for (var n in t) this._htOption[n] = t[n];
        "string" == typeof e && (e = document.getElementById(e)), this._android = i(), this._el = e, this._oQRCode = null, this._oDrawing = new m(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, QRCode.prototype.makeCode = function (e) {
        this._oQRCode = new l(t(e, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(e), this._oQRCode.make(), this._el.title = e, this._oDrawing.draw(this._oQRCode), this.makeImage()
    }, QRCode.prototype.makeImage = function () {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    }, QRCode.prototype.clear = function () {
        this._oDrawing.clear()
    }, QRCode.CorrectLevel = d
}();
"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

!function (e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t(e) : "function" == typeof define && define.amd ? define([], t) : e.LazyLoad = t(e)
}("undefined" != typeof global ? global : window, function (t) {
    "function" == typeof define && define.amd && (t = window);
    var n = {
        src: "data-original",
        srcset: "data-srcset",
        selector: ".lazyload",
        root: null,
        rootMargin: "0px",
        threshold: 0
    }, i = function n() {
        var i = {}, r = !1, e = 0, t = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (r = arguments[0], e++);
        for (var o = function (e) {
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r && "[object Object]" === Object.prototype.toString.call(e[t]) ? i[t] = n(!0, i[t], e[t]) : i[t] = e[t])
        }; e < t; e++) {
            o(arguments[e])
        }
        return i
    };

    function r(e, t) {
        this.settings = i(n, t || {}), this.images = e || document.querySelectorAll(this.settings.selector), this.observer = null, this.init()
    }

    if (r.prototype = {
        init: function () {
            if (t.IntersectionObserver) {
                var i = this, e = {
                    root: this.settings.root,
                    rootMargin: this.settings.rootMargin,
                    threshold: [this.settings.threshold]
                };
                this.observer = new IntersectionObserver(function (e) {
                    Array.prototype.forEach.call(e, function (e) {
                        if (e.isIntersecting) {
                            i.observer.unobserve(e.target);
                            var t = e.target.getAttribute(i.settings.src), n = e.target.getAttribute(i.settings.srcset);
                            "img" === e.target.tagName.toLowerCase() ? (t && (e.target.src = t), n && (e.target.srcset = n)) : e.target.style.backgroundImage = "url(" + t + ")"
                        }
                    })
                }, e), Array.prototype.forEach.call(this.images, function (e) {
                    i.observer.observe(e)
                })
            } else this.loadImages()
        }, loadAndDestroy: function () {
            this.settings && (this.loadImages(), this.destroy())
        }, loadImages: function () {
            if (this.settings) {
                var i = this;
                Array.prototype.forEach.call(this.images, function (e) {
                    var t = e.getAttribute(i.settings.src), n = e.getAttribute(i.settings.srcset);
                    "img" === e.tagName.toLowerCase() ? (t && (e.src = t), n && (e.srcset = n)) : e.style.backgroundImage = "url('" + t + "')"
                })
            }
        }, destroy: function () {
            this.settings && (this.observer.disconnect(), this.settings = null)
        }
    }, t.lazyload = function (e, t) {
        return new r(e, t)
    }, t.jQuery) {
        var o = t.jQuery;
        o.fn.lazyload = function (e) {
            return (e = e || {}).attribute = e.attribute || "data-original", new r(o.makeArray(this), e), this
        }
    }
    return r
});
!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = e()
    }
}(function () {
    return function o(a, s, l) {
        function u(n, e) {
            if (!s[n]) {
                if (!a[n]) {
                    var t = "function" == typeof require && require;
                    if (!e && t) return t(n, !0);
                    if (c) return c(n, !0);
                    var i = new Error("Cannot find module '" + n + "'");
                    throw i.code = "MODULE_NOT_FOUND", i
                }
                var r = s[n] = {exports: {}};
                a[n][0].call(r.exports, function (e) {
                    var t = a[n][1][e];
                    return u(t || e)
                }, r, r.exports, o, a, s, l)
            }
            return s[n].exports
        }

        for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) u(l[e]);
        return u
    }({
        1: [function (e, t, n) {
        }, {}], 2: [function (e, t, n) {
            var o = e(6);

            function i(e) {
                if (e) {
                    var t = [0, 0, 0], n = 1, i = e.match(/^#([a-fA-F0-9]{3})$/i);
                    if (i) {
                        i = i[1];
                        for (var r = 0; r < t.length; r++) t[r] = parseInt(i[r] + i[r], 16)
                    } else if (i = e.match(/^#([a-fA-F0-9]{6})$/i)) {
                        i = i[1];
                        for (r = 0; r < t.length; r++) t[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16)
                    } else if (i = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < t.length; r++) t[r] = parseInt(i[r + 1]);
                        n = parseFloat(i[4])
                    } else if (i = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(i[r + 1]));
                        n = parseFloat(i[4])
                    } else if (i = e.match(/(\w+)/)) {
                        if ("transparent" == i[1]) return [0, 0, 0, 0];
                        if (!(t = o[i[1]])) return
                    }
                    for (r = 0; r < t.length; r++) t[r] = c(t[r], 0, 255);
                    return n = n || 0 == n ? c(n, 0, 1) : 1, t[3] = n, t
                }
            }

            function r(e) {
                if (e) {
                    var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (t) {
                        var n = parseFloat(t[4]);
                        return [c(parseInt(t[1]), 0, 360), c(parseFloat(t[2]), 0, 100), c(parseFloat(t[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function a(e) {
                if (e) {
                    var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (t) {
                        var n = parseFloat(t[4]);
                        return [c(parseInt(t[1]), 0, 360), c(parseFloat(t[2]), 0, 100), c(parseFloat(t[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function s(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
            }

            function l(e, t) {
                return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
            }

            function u(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
            }

            function c(e, t, n) {
                return Math.min(Math.max(t, e), n)
            }

            function d(e) {
                var t = e.toString(16).toUpperCase();
                return t.length < 2 ? "0" + t : t
            }

            t.exports = {
                getRgba: i, getHsla: r, getRgb: function (e) {
                    var t = i(e);
                    return t && t.slice(0, 3)
                }, getHsl: function (e) {
                    var t = r(e);
                    return t && t.slice(0, 3)
                }, getHwb: a, getAlpha: function (e) {
                    var t = i(e);
                    {
                        if (t) return t[3];
                        if (t = r(e)) return t[3];
                        if (t = a(e)) return t[3]
                    }
                }, hexString: function (e) {
                    return "#" + d(e[0]) + d(e[1]) + d(e[2])
                }, rgbString: function (e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return s(e, t);
                    return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
                }, rgbaString: s, percentString: function (e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return l(e, t);
                    var n = Math.round(e[0] / 255 * 100), i = Math.round(e[1] / 255 * 100),
                        r = Math.round(e[2] / 255 * 100);
                    return "rgb(" + n + "%, " + i + "%, " + r + "%)"
                }, percentaString: l, hslString: function (e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return u(e, t);
                    return "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
                }, hslaString: u, hwbString: function (e, t) {
                    void 0 === t && (t = void 0 !== e[3] ? e[3] : 1);
                    return "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
                }, keyword: function (e) {
                    return f[e.slice(0, 3)]
                }
            };
            var f = {};
            for (var h in o) f[o[h]] = h
        }, {6: 6}], 3: [function (e, t, n) {
            var c = e(5), i = e(2), a = function (e) {
                return e instanceof a ? e : this instanceof a ? (this.valid = !1, this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                }, void ("string" == typeof e ? (t = i.getRgba(e)) ? this.setValues("rgb", t) : (t = i.getHsla(e)) ? this.setValues("hsl", t) : (t = i.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new a(e);
                var t
            };
            a.prototype = {
                isValid: function () {
                    return this.valid
                }, rgb: function () {
                    return this.setSpace("rgb", arguments)
                }, hsl: function () {
                    return this.setSpace("hsl", arguments)
                }, hsv: function () {
                    return this.setSpace("hsv", arguments)
                }, hwb: function () {
                    return this.setSpace("hwb", arguments)
                }, cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                }, rgbArray: function () {
                    return this.values.rgb
                }, hslArray: function () {
                    return this.values.hsl
                }, hsvArray: function () {
                    return this.values.hsv
                }, hwbArray: function () {
                    var e = this.values;
                    return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
                }, cmykArray: function () {
                    return this.values.cmyk
                }, rgbaArray: function () {
                    var e = this.values;
                    return e.rgb.concat([e.alpha])
                }, hslaArray: function () {
                    var e = this.values;
                    return e.hsl.concat([e.alpha])
                }, alpha: function (e) {
                    return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
                }, red: function (e) {
                    return this.setChannel("rgb", 0, e)
                }, green: function (e) {
                    return this.setChannel("rgb", 1, e)
                }, blue: function (e) {
                    return this.setChannel("rgb", 2, e)
                }, hue: function (e) {
                    return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
                }, saturation: function (e) {
                    return this.setChannel("hsl", 1, e)
                }, lightness: function (e) {
                    return this.setChannel("hsl", 2, e)
                }, saturationv: function (e) {
                    return this.setChannel("hsv", 1, e)
                }, whiteness: function (e) {
                    return this.setChannel("hwb", 1, e)
                }, blackness: function (e) {
                    return this.setChannel("hwb", 2, e)
                }, value: function (e) {
                    return this.setChannel("hsv", 2, e)
                }, cyan: function (e) {
                    return this.setChannel("cmyk", 0, e)
                }, magenta: function (e) {
                    return this.setChannel("cmyk", 1, e)
                }, yellow: function (e) {
                    return this.setChannel("cmyk", 2, e)
                }, black: function (e) {
                    return this.setChannel("cmyk", 3, e)
                }, hexString: function () {
                    return i.hexString(this.values.rgb)
                }, rgbString: function () {
                    return i.rgbString(this.values.rgb, this.values.alpha)
                }, rgbaString: function () {
                    return i.rgbaString(this.values.rgb, this.values.alpha)
                }, percentString: function () {
                    return i.percentString(this.values.rgb, this.values.alpha)
                }, hslString: function () {
                    return i.hslString(this.values.hsl, this.values.alpha)
                }, hslaString: function () {
                    return i.hslaString(this.values.hsl, this.values.alpha)
                }, hwbString: function () {
                    return i.hwbString(this.values.hwb, this.values.alpha)
                }, keyword: function () {
                    return i.keyword(this.values.rgb, this.values.alpha)
                }, rgbNumber: function () {
                    var e = this.values.rgb;
                    return e[0] << 16 | e[1] << 8 | e[2]
                }, luminosity: function () {
                    for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
                        var i = e[n] / 255;
                        t[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                }, contrast: function (e) {
                    var t = this.luminosity(), n = e.luminosity();
                    return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
                }, level: function (e) {
                    var t = this.contrast(e);
                    return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
                }, dark: function () {
                    var e = this.values.rgb;
                    return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
                }, light: function () {
                    return !this.dark()
                }, negate: function () {
                    for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
                    return this.setValues("rgb", e), this
                }, lighten: function (e) {
                    var t = this.values.hsl;
                    return t[2] += t[2] * e, this.setValues("hsl", t), this
                }, darken: function (e) {
                    var t = this.values.hsl;
                    return t[2] -= t[2] * e, this.setValues("hsl", t), this
                }, saturate: function (e) {
                    var t = this.values.hsl;
                    return t[1] += t[1] * e, this.setValues("hsl", t), this
                }, desaturate: function (e) {
                    var t = this.values.hsl;
                    return t[1] -= t[1] * e, this.setValues("hsl", t), this
                }, whiten: function (e) {
                    var t = this.values.hwb;
                    return t[1] += t[1] * e, this.setValues("hwb", t), this
                }, blacken: function (e) {
                    var t = this.values.hwb;
                    return t[2] += t[2] * e, this.setValues("hwb", t), this
                }, greyscale: function () {
                    var e = this.values.rgb, t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                    return this.setValues("rgb", [t, t, t]), this
                }, clearer: function (e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t - t * e), this
                }, opaquer: function (e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t + t * e), this
                }, rotate: function (e) {
                    var t = this.values.hsl, n = (t[0] + e) % 360;
                    return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
                }, mix: function (e, t) {
                    var n = this, i = e, r = void 0 === t ? .5 : t, o = 2 * r - 1, a = n.alpha() - i.alpha(),
                        s = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2, l = 1 - s;
                    return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * r + i.alpha() * (1 - r))
                }, toJSON: function () {
                    return this.rgb()
                }, clone: function () {
                    var e, t, n = new a, i = this.values, r = n.values;
                    for (var o in i) i.hasOwnProperty(o) && (e = i[o], "[object Array]" === (t = {}.toString.call(e)) ? r[o] = e.slice(0) : "[object Number]" === t ? r[o] = e : console.error("unexpected color value:", e));
                    return n
                }
            }, a.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, a.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, a.prototype.getValues = function (e) {
                for (var t = this.values, n = {}, i = 0; i < e.length; i++) n[e.charAt(i)] = t[e][i];
                return 1 !== t.alpha && (n.a = t.alpha), n
            }, a.prototype.setValues = function (e, t) {
                var n, i, r = this.values, o = this.spaces, a = this.maxes, s = 1;
                if (this.valid = !0, "alpha" === e) s = t; else if (t.length) r[e] = t.slice(0, e.length), s = t[e.length]; else if (void 0 !== t[e.charAt(0)]) {
                    for (n = 0; n < e.length; n++) r[e][n] = t[e.charAt(n)];
                    s = t.a
                } else if (void 0 !== t[o[e][0]]) {
                    var l = o[e];
                    for (n = 0; n < e.length; n++) r[e][n] = t[l[n]];
                    s = t.alpha
                }
                if (r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s)), "alpha" === e) return !1;
                for (n = 0; n < e.length; n++) i = Math.max(0, Math.min(a[e][n], r[e][n])), r[e][n] = Math.round(i);
                for (var u in o) u !== e && (r[u] = c[e][u](r[e]));
                return !0
            }, a.prototype.setSpace = function (e, t) {
                var n = t[0];
                return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
            }, a.prototype.setChannel = function (e, t, n) {
                var i = this.values[e];
                return void 0 === n ? i[t] : n === i[t] ? this : (i[t] = n, this.setValues(e, i), this)
            }, "undefined" != typeof window && (window.Color = a), t.exports = a
        }, {2: 2, 5: 5}], 4: [function (e, t, n) {
            function o(e) {
                var t, n, i = e[0] / 255, r = e[1] / 255, o = e[2] / 255, a = Math.min(i, r, o), s = Math.max(i, r, o),
                    l = s - a;
                return s == a ? t = 0 : i == s ? t = (r - o) / l : r == s ? t = 2 + (o - i) / l : o == s && (t = 4 + (i - r) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (a + s) / 2, [t, 100 * (s == a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
            }

            function i(e) {
                var t, n, i = e[0], r = e[1], o = e[2], a = Math.min(i, r, o), s = Math.max(i, r, o), l = s - a;
                return n = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? t = 0 : i == s ? t = (r - o) / l : r == s ? t = 2 + (o - i) / l : o == s && (t = 4 + (i - r) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, s / 255 * 1e3 / 10]
            }

            function a(e) {
                var t = e[0], n = e[1], i = e[2];
                return [o(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, i))), 100 * (i = 1 - 1 / 255 * Math.max(t, Math.max(n, i)))]
            }

            function s(e) {
                var t, n = e[0] / 255, i = e[1] / 255, r = e[2] / 255;
                return [100 * ((1 - n - (t = Math.min(1 - n, 1 - i, 1 - r))) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * t]
            }

            function l(e) {
                return C[JSON.stringify(e)]
            }

            function u(e) {
                var t = e[0] / 255, n = e[1] / 255, i = e[2] / 255;
                return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * i), 100 * (.0193 * t + .1192 * n + .9505 * i)]
            }

            function c(e) {
                var t = u(e), n = t[0], i = t[1], r = t[2];
                return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
            }

            function d(e) {
                var t, n, i, r, o, a = e[0] / 360, s = e[1] / 100, l = e[2] / 100;
                if (0 == s) return [o = 255 * l, o, o];
                t = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0];
                for (var u = 0; u < 3; u++) (i = a + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, o = 6 * i < 1 ? t + 6 * (n - t) * i : 2 * i < 1 ? n : 3 * i < 2 ? t + (n - t) * (2 / 3 - i) * 6 : t, r[u] = 255 * o;
                return r
            }

            function f(e) {
                var t = e[0] / 60, n = e[1] / 100, i = e[2] / 100, r = Math.floor(t) % 6, o = t - Math.floor(t),
                    a = 255 * i * (1 - n), s = 255 * i * (1 - n * o), l = 255 * i * (1 - n * (1 - o));
                i *= 255;
                switch (r) {
                    case 0:
                        return [i, l, a];
                    case 1:
                        return [s, i, a];
                    case 2:
                        return [a, i, l];
                    case 3:
                        return [a, s, i];
                    case 4:
                        return [l, a, i];
                    case 5:
                        return [i, a, s]
                }
            }

            function h(e) {
                var t, n, i, o, a = e[0] / 360, s = e[1] / 100, l = e[2] / 100, u = s + l;
                switch (u > 1 && (s /= u, l /= u), i = 6 * a - (t = Math.floor(6 * a)), 0 != (1 & t) && (i = 1 - i), o = s + i * ((n = 1 - l) - s), t) {
                    default:
                    case 6:
                    case 0:
                        r = n, g = o, b = s;
                        break;
                    case 1:
                        r = o, g = n, b = s;
                        break;
                    case 2:
                        r = s, g = n, b = o;
                        break;
                    case 3:
                        r = s, g = o, b = n;
                        break;
                    case 4:
                        r = o, g = s, b = n;
                        break;
                    case 5:
                        r = n, g = s, b = o
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function p(e) {
                var t = e[0] / 100, n = e[1] / 100, i = e[2] / 100, r = e[3] / 100;
                return [255 * (1 - Math.min(1, t * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r))]
            }

            function m(e) {
                var t, n, i, r = e[0] / 100, o = e[1] / 100, a = e[2] / 100;
                return n = -.9689 * r + 1.8758 * o + .0415 * a, i = .0557 * r + -.204 * o + 1.057 * a, t = (t = 3.2406 * r + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
            }

            function v(e) {
                var t = e[0], n = e[1], i = e[2];
                return n /= 100, i /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
            }

            function y(e) {
                var t, n, i, r, o = e[0], a = e[1], s = e[2];
                return o <= 8 ? r = (n = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((o + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (a / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + r, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3)]
            }

            function x(e) {
                var t, n = e[0], i = e[1], r = e[2];
                return (t = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(i * i + r * r), t]
            }

            function w(e) {
                return m(y(e))
            }

            function k(e) {
                var t, n = e[0], i = e[1];
                return t = e[2] / 360 * 2 * Math.PI, [n, i * Math.cos(t), i * Math.sin(t)]
            }

            function _(e) {
                return S[e]
            }

            t.exports = {
                rgb2hsl: o,
                rgb2hsv: i,
                rgb2hwb: a,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: u,
                rgb2lab: c,
                rgb2lch: function (e) {
                    return x(c(e))
                },
                hsl2rgb: d,
                hsl2hsv: function (e) {
                    var t = e[0], n = e[1] / 100, i = e[2] / 100;
                    if (0 === i) return [0, 0, 0];
                    return [t, 100 * (2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n)), 100 * ((i + n) / 2)]
                },
                hsl2hwb: function (e) {
                    return a(d(e))
                },
                hsl2cmyk: function (e) {
                    return s(d(e))
                },
                hsl2keyword: function (e) {
                    return l(d(e))
                },
                hsv2rgb: f,
                hsv2hsl: function (e) {
                    var t, n, i = e[0], r = e[1] / 100, o = e[2] / 100;
                    return t = r * o, [i, 100 * (t = (t /= (n = (2 - r) * o) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
                },
                hsv2hwb: function (e) {
                    return a(f(e))
                },
                hsv2cmyk: function (e) {
                    return s(f(e))
                },
                hsv2keyword: function (e) {
                    return l(f(e))
                },
                hwb2rgb: h,
                hwb2hsl: function (e) {
                    return o(h(e))
                },
                hwb2hsv: function (e) {
                    return i(h(e))
                },
                hwb2cmyk: function (e) {
                    return s(h(e))
                },
                hwb2keyword: function (e) {
                    return l(h(e))
                },
                cmyk2rgb: p,
                cmyk2hsl: function (e) {
                    return o(p(e))
                },
                cmyk2hsv: function (e) {
                    return i(p(e))
                },
                cmyk2hwb: function (e) {
                    return a(p(e))
                },
                cmyk2keyword: function (e) {
                    return l(p(e))
                },
                keyword2rgb: _,
                keyword2hsl: function (e) {
                    return o(_(e))
                },
                keyword2hsv: function (e) {
                    return i(_(e))
                },
                keyword2hwb: function (e) {
                    return a(_(e))
                },
                keyword2cmyk: function (e) {
                    return s(_(e))
                },
                keyword2lab: function (e) {
                    return c(_(e))
                },
                keyword2xyz: function (e) {
                    return u(_(e))
                },
                xyz2rgb: m,
                xyz2lab: v,
                xyz2lch: function (e) {
                    return x(v(e))
                },
                lab2xyz: y,
                lab2rgb: w,
                lab2lch: x,
                lch2lab: k,
                lch2xyz: function (e) {
                    return y(k(e))
                },
                lch2rgb: function (e) {
                    return w(k(e))
                }
            };
            var S = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }, C = {};
            for (var T in S) C[JSON.stringify(S[T])] = T
        }, {}], 5: [function (e, t, n) {
            var r = e(4), o = function () {
                return new u
            };
            for (var i in r) {
                o[i + "Raw"] = function (t) {
                    return function (e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), r[t](e)
                    }
                }(i);
                var a = /(\w+)2(\w+)/.exec(i), s = a[1], l = a[2];
                (o[s] = o[s] || {})[l] = o[i] = function (i) {
                    return function (e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var t = r[i](e);
                        if ("string" == typeof t || void 0 === t) return t;
                        for (var n = 0; n < t.length; n++) t[n] = Math.round(t[n]);
                        return t
                    }
                }(i)
            }
            var u = function () {
                this.convs = {}
            };
            u.prototype.routeSpace = function (e, t) {
                var n = t[0];
                return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n))
            }, u.prototype.setValues = function (e, t) {
                return this.space = e, this.convs = {}, this.convs[e] = t, this
            }, u.prototype.getValues = function (e) {
                var t = this.convs[e];
                if (!t) {
                    var n = this.space, i = this.convs[n];
                    t = o[n][e](i), this.convs[e] = t
                }
                return t
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
                u.prototype[t] = function (e) {
                    return this.routeSpace(t, arguments)
                }
            }), t.exports = o
        }, {4: 4}], 6: [function (e, t, n) {
            "use strict";
            t.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}], 7: [function (e, t, n) {
            var i = e(29)();
            i.helpers = e(45), e(27)(i), i.defaults = e(25), i.Element = e(26), i.elements = e(40), i.Interaction = e(28), i.layouts = e(30), i.platform = e(48), i.plugins = e(31), i.Ticks = e(34), e(22)(i), e(23)(i), e(24)(i), e(33)(i), e(32)(i), e(35)(i), e(55)(i), e(53)(i), e(54)(i), e(56)(i), e(57)(i), e(58)(i), e(15)(i), e(16)(i), e(17)(i), e(18)(i), e(19)(i), e(20)(i), e(21)(i), e(8)(i), e(9)(i), e(10)(i), e(11)(i), e(12)(i), e(13)(i), e(14)(i);
            var r = e(49);
            for (var o in r) r.hasOwnProperty(o) && i.plugins.register(r[o]);
            i.platform.initialize(), t.exports = i, "undefined" != typeof window && (window.Chart = i), i.Legend = r.legend._element, i.Title = r.title._element, i.pluginService = i.plugins, i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            40: 40,
            45: 45,
            48: 48,
            49: 49,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            8: 8,
            9: 9
        }], 8: [function (e, t, n) {
            "use strict";
            t.exports = function (n) {
                n.Bar = function (e, t) {
                    return t.type = "bar", new n(e, t)
                }
            }
        }, {}], 9: [function (e, t, n) {
            "use strict";
            t.exports = function (n) {
                n.Bubble = function (e, t) {
                    return t.type = "bubble", new n(e, t)
                }
            }
        }, {}], 10: [function (e, t, n) {
            "use strict";
            t.exports = function (n) {
                n.Doughnut = function (e, t) {
                    return t.type = "doughnut", new n(e, t)
                }
            }
        }, {}], 11: [function (e, t, n) {
            "use strict";
            t.exports = function (n) {
                n.Line = function (e, t) {
                    return t.type = "line", new n(e, t)
                }
            }
        }, {}], 12: [function (e, t, n) {
            "use strict";
            t.exports = function (n) {
                n.PolarArea = function (e, t) {
                    return t.type = "polarArea", new n(e, t)
                }
            }
        }, {}], 13: [function (e, t, n) {
            "use strict";
            t.exports = function (n) {
                n.Radar = function (e, t) {
                    return t.type = "radar", new n(e, t)
                }
            }
        }, {}], 14: [function (e, t, n) {
            "use strict";
            t.exports = function (n) {
                n.Scatter = function (e, t) {
                    return t.type = "scatter", new n(e, t)
                }
            }
        }, {}], 15: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(40), C = e(45);
            i._set("bar", {
                hover: {mode: "label"},
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {offsetGridLines: !0}
                    }], yAxes: [{type: "linear"}]
                }
            }), i._set("horizontalBar", {
                hover: {mode: "index", axis: "y"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom"}],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {offsetGridLines: !0}
                    }]
                },
                elements: {rectangle: {borderSkipped: "left"}},
                tooltips: {
                    callbacks: {
                        title: function (e, t) {
                            var n = "";
                            return e.length > 0 && (e[0].yLabel ? n = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (n = t.labels[e[0].index])), n
                        }, label: function (e, t) {
                            return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel
                        }
                    }, mode: "index", axis: "y"
                }
            }), t.exports = function (t) {
                t.controllers.bar = t.DatasetController.extend({
                    dataElementType: r.Rectangle, initialize: function () {
                        var e;
                        t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
                    }, update: function (e) {
                        var t, n, i = this.getMeta().data;
                        for (this._ruler = this.getRuler(), t = 0, n = i.length; t < n; ++t) this.updateElement(i[t], t, e)
                    }, updateElement: function (e, t, n) {
                        var i = this, r = i.chart, o = i.getMeta(), a = i.getDataset(), s = e.custom || {},
                            l = r.options.elements.rectangle;
                        e._xScale = i.getScaleForId(o.xAxisID), e._yScale = i.getScaleForId(o.yAxisID), e._datasetIndex = i.index, e._index = t, e._model = {
                            datasetLabel: a.label,
                            label: r.data.labels[t],
                            borderSkipped: s.borderSkipped ? s.borderSkipped : l.borderSkipped,
                            backgroundColor: s.backgroundColor ? s.backgroundColor : C.valueAtIndexOrDefault(a.backgroundColor, t, l.backgroundColor),
                            borderColor: s.borderColor ? s.borderColor : C.valueAtIndexOrDefault(a.borderColor, t, l.borderColor),
                            borderWidth: s.borderWidth ? s.borderWidth : C.valueAtIndexOrDefault(a.borderWidth, t, l.borderWidth)
                        }, i.updateElementGeometry(e, t, n), e.pivot()
                    }, updateElementGeometry: function (e, t, n) {
                        var i = this, r = e._model, o = i.getValueScale(), a = o.getBasePixel(), s = o.isHorizontal(),
                            l = i._ruler || i.getRuler(), u = i.calculateBarValuePixels(i.index, t),
                            c = i.calculateBarIndexPixels(i.index, t, l);
                        r.horizontal = s, r.base = n ? a : u.base, r.x = s ? n ? a : u.head : c.center, r.y = s ? c.center : n ? a : u.head, r.height = s ? c.size : void 0, r.width = s ? void 0 : c.size
                    }, getValueScaleId: function () {
                        return this.getMeta().yAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getValueScale: function () {
                        return this.getScaleForId(this.getValueScaleId())
                    }, getIndexScale: function () {
                        return this.getScaleForId(this.getIndexScaleId())
                    }, _getStacks: function (e) {
                        var t, n, i = this.chart, r = this.getIndexScale().options.stacked,
                            o = void 0 === e ? i.data.datasets.length : e + 1, a = [];
                        for (t = 0; t < o; ++t) (n = i.getDatasetMeta(t)).bar && i.isDatasetVisible(t) && (!1 === r || !0 === r && -1 === a.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === a.indexOf(n.stack))) && a.push(n.stack);
                        return a
                    }, getStackCount: function () {
                        return this._getStacks().length
                    }, getStackIndex: function (e, t) {
                        var n = this._getStacks(e), i = void 0 !== t ? n.indexOf(t) : -1;
                        return -1 === i ? n.length - 1 : i
                    }, getRuler: function () {
                        var e, t, n = this.getIndexScale(), i = this.getStackCount(), r = this.index,
                            o = n.isHorizontal(), a = o ? n.left : n.top, s = a + (o ? n.width : n.height), l = [];
                        for (e = 0, t = this.getMeta().data.length; e < t; ++e) l.push(n.getPixelForValue(null, e, r));
                        return {
                            min: C.isNullOrUndef(n.options.barThickness) ? function (e, t) {
                                var n, i, r, o, a = e.isHorizontal() ? e.width : e.height, s = e.getTicks();
                                for (r = 1, o = t.length; r < o; ++r) a = Math.min(a, t[r] - t[r - 1]);
                                for (r = 0, o = s.length; r < o; ++r) i = e.getPixelForTick(r), a = r > 0 ? Math.min(a, i - n) : a, n = i;
                                return a
                            }(n, l) : -1, pixels: l, start: a, end: s, stackCount: i, scale: n
                        }
                    }, calculateBarValuePixels: function (e, t) {
                        var n, i, r, o, a, s, l = this.chart, u = this.getMeta(), c = this.getValueScale(),
                            d = l.data.datasets, f = c.getRightValue(d[e].data[t]), h = c.options.stacked, p = u.stack,
                            g = 0;
                        if (h || void 0 === h && void 0 !== p) for (n = 0; n < e; ++n) (i = l.getDatasetMeta(n)).bar && i.stack === p && i.controller.getValueScaleId() === c.id && l.isDatasetVisible(n) && (r = c.getRightValue(d[n].data[t]), (f < 0 && r < 0 || f >= 0 && r > 0) && (g += r));
                        return o = c.getPixelForValue(g), {
                            size: s = ((a = c.getPixelForValue(g + f)) - o) / 2,
                            base: o,
                            head: a,
                            center: a + s / 2
                        }
                    }, calculateBarIndexPixels: function (e, t, n) {
                        var i, r, o, a, s, l, u, c, d, f, h, p, g, m, v, y, b, x = n.scale.options,
                            w = "flex" === x.barThickness ? (d = t, h = x, g = (f = n).pixels, m = g[d], v = d > 0 ? g[d - 1] : null, y = d < g.length - 1 ? g[d + 1] : null, b = h.categoryPercentage, null === v && (v = m - (null === y ? f.end - m : y - m)), null === y && (y = m + m - v), p = m - (m - v) / 2 * b, {
                                chunk: (y - v) / 2 * b / f.stackCount,
                                ratio: h.barPercentage,
                                start: p
                            }) : (i = t, r = n, l = (o = x).barThickness, u = r.stackCount, c = r.pixels[i], C.isNullOrUndef(l) ? (a = r.min * o.categoryPercentage, s = o.barPercentage) : (a = l * u, s = 1), {
                                chunk: a / u,
                                ratio: s,
                                start: c - a / 2
                            }), k = this.getStackIndex(e, this.getMeta().stack),
                            _ = w.start + w.chunk * k + w.chunk / 2,
                            S = Math.min(C.valueOrDefault(x.maxBarThickness, 1 / 0), w.chunk * w.ratio);
                        return {base: _ - S / 2, head: _ + S / 2, center: _, size: S}
                    }, draw: function () {
                        var e = this.chart, t = this.getValueScale(), n = this.getMeta().data, i = this.getDataset(),
                            r = n.length, o = 0;
                        for (C.canvas.clipArea(e.ctx, e.chartArea); o < r; ++o) isNaN(t.getRightValue(i.data[o])) || n[o].draw();
                        C.canvas.unclipArea(e.ctx)
                    }, setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, i = e.custom || {},
                            r = e._model;
                        r.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : C.valueAtIndexOrDefault(t.hoverBackgroundColor, n, C.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor ? i.hoverBorderColor : C.valueAtIndexOrDefault(t.hoverBorderColor, n, C.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : C.valueAtIndexOrDefault(t.hoverBorderWidth, n, r.borderWidth)
                    }, removeHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, i = e.custom || {},
                            r = e._model, o = this.chart.options.elements.rectangle;
                        r.backgroundColor = i.backgroundColor ? i.backgroundColor : C.valueAtIndexOrDefault(t.backgroundColor, n, o.backgroundColor), r.borderColor = i.borderColor ? i.borderColor : C.valueAtIndexOrDefault(t.borderColor, n, o.borderColor), r.borderWidth = i.borderWidth ? i.borderWidth : C.valueAtIndexOrDefault(t.borderWidth, n, o.borderWidth)
                    }
                }), t.controllers.horizontalBar = t.controllers.bar.extend({
                    getValueScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 16: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(40), p = e(45);
            i._set("bubble", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}],
                    yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e, t) {
                            var n = t.datasets[e.datasetIndex].label || "",
                                i = t.datasets[e.datasetIndex].data[e.index];
                            return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + i.r + ")"
                        }
                    }
                }
            }), t.exports = function (e) {
                e.controllers.bubble = e.DatasetController.extend({
                    dataElementType: r.Point, update: function (n) {
                        var i = this, e = i.getMeta().data;
                        p.each(e, function (e, t) {
                            i.updateElement(e, t, n)
                        })
                    }, updateElement: function (e, t, n) {
                        var i = this, r = i.getMeta(), o = e.custom || {}, a = i.getScaleForId(r.xAxisID),
                            s = i.getScaleForId(r.yAxisID), l = i._resolveElementOptions(e, t),
                            u = i.getDataset().data[t], c = i.index,
                            d = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof u ? u : NaN, t, c),
                            f = n ? s.getBasePixel() : s.getPixelForValue(u, t, c);
                        e._xScale = a, e._yScale = s, e._options = l, e._datasetIndex = c, e._index = t, e._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            radius: n ? 0 : l.radius,
                            skip: o.skip || isNaN(d) || isNaN(f),
                            x: d,
                            y: f
                        }, e.pivot()
                    }, setHoverStyle: function (e) {
                        var t = e._model, n = e._options;
                        t.backgroundColor = p.valueOrDefault(n.hoverBackgroundColor, p.getHoverColor(n.backgroundColor)), t.borderColor = p.valueOrDefault(n.hoverBorderColor, p.getHoverColor(n.borderColor)), t.borderWidth = p.valueOrDefault(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius
                    }, removeHoverStyle: function (e) {
                        var t = e._model, n = e._options;
                        t.backgroundColor = n.backgroundColor, t.borderColor = n.borderColor, t.borderWidth = n.borderWidth, t.radius = n.radius
                    }, _resolveElementOptions: function (e, t) {
                        var n, i, r, o = this.chart, a = o.data.datasets[this.index], s = e.custom || {},
                            l = o.options.elements.point, u = p.options.resolve, c = a.data[t], d = {},
                            f = {chart: o, dataIndex: t, dataset: a, datasetIndex: this.index},
                            h = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                        for (n = 0, i = h.length; n < i; ++n) d[r = h[n]] = u([s[r], a[r], l[r]], f, t);
                        return d.radius = u([s.radius, c ? c.r : void 0, a.radius, l.radius], f, t), d
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 17: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(40), P = e(45);
            i._set("doughnut", {
                animation: {animateRotate: !0, animateScale: !1},
                hover: {mode: "single"},
                legendCallback: function (e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    var n = e.data, i = n.datasets, r = n.labels;
                    if (i.length) for (var o = 0; o < i[0].data.length; ++o) t.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && t.push(r[o]), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (l) {
                            var u = l.data;
                            return u.labels.length && u.datasets.length ? u.labels.map(function (e, t) {
                                var n = l.getDatasetMeta(0), i = u.datasets[0], r = n.data[t], o = r && r.custom || {},
                                    a = P.valueAtIndexOrDefault, s = l.options.elements.arc;
                                return {
                                    text: e,
                                    fillStyle: o.backgroundColor ? o.backgroundColor : a(i.backgroundColor, t, s.backgroundColor),
                                    strokeStyle: o.borderColor ? o.borderColor : a(i.borderColor, t, s.borderColor),
                                    lineWidth: o.borderWidth ? o.borderWidth : a(i.borderWidth, t, s.borderWidth),
                                    hidden: isNaN(i.data[t]) || n.data[t].hidden,
                                    index: t
                                }
                            }) : []
                        }
                    }, onClick: function (e, t) {
                        var n, i, r, o = t.index, a = this.chart;
                        for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) (r = a.getDatasetMeta(n)).data[o] && (r.data[o].hidden = !r.data[o].hidden);
                        a.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e, t) {
                            var n = t.labels[e.index], i = ": " + t.datasets[e.datasetIndex].data[e.index];
                            return P.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                        }
                    }
                }
            }), i._set("pie", P.clone(i.doughnut)), i._set("pie", {cutoutPercentage: 0}), t.exports = function (t) {
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: r.Arc, linkScales: P.noop, getRingIndex: function (e) {
                        for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
                        return t
                    }, update: function (n) {
                        var i = this, e = i.chart, t = e.chartArea, r = e.options, o = r.elements.arc,
                            a = t.right - t.left - o.borderWidth, s = t.bottom - t.top - o.borderWidth,
                            l = Math.min(a, s), u = {x: 0, y: 0}, c = i.getMeta(), d = r.cutoutPercentage,
                            f = r.circumference;
                        if (f < 2 * Math.PI) {
                            var h = r.rotation % (2 * Math.PI),
                                p = (h += 2 * Math.PI * (h >= Math.PI ? -1 : h < -Math.PI ? 1 : 0)) + f,
                                g = Math.cos(h), m = Math.sin(h), v = Math.cos(p), y = Math.sin(p),
                                b = h <= 0 && p >= 0 || h <= 2 * Math.PI && 2 * Math.PI <= p,
                                x = h <= .5 * Math.PI && .5 * Math.PI <= p || h <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                                w = h <= -Math.PI && -Math.PI <= p || h <= Math.PI && Math.PI <= p,
                                k = h <= .5 * -Math.PI && .5 * -Math.PI <= p || h <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                                _ = d / 100, S = w ? -1 : Math.min(g * (g < 0 ? 1 : _), v * (v < 0 ? 1 : _)),
                                C = k ? -1 : Math.min(m * (m < 0 ? 1 : _), y * (y < 0 ? 1 : _)),
                                T = b ? 1 : Math.max(g * (g > 0 ? 1 : _), v * (v > 0 ? 1 : _)),
                                M = x ? 1 : Math.max(m * (m > 0 ? 1 : _), y * (y > 0 ? 1 : _)), D = .5 * (T - S),
                                A = .5 * (M - C);
                            l = Math.min(a / D, s / A), u = {x: -.5 * (T + S), y: -.5 * (M + C)}
                        }
                        e.borderWidth = i.getMaxBorderWidth(c.data), e.outerRadius = Math.max((l - e.borderWidth) / 2, 0), e.innerRadius = Math.max(d ? e.outerRadius / 100 * d : 0, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), e.offsetX = u.x * e.outerRadius, e.offsetY = u.y * e.outerRadius, c.total = i.calculateTotal(), i.outerRadius = e.outerRadius - e.radiusLength * i.getRingIndex(i.index), i.innerRadius = Math.max(i.outerRadius - e.radiusLength, 0), P.each(c.data, function (e, t) {
                            i.updateElement(e, t, n)
                        })
                    }, updateElement: function (e, t, n) {
                        var i = this, r = i.chart, o = r.chartArea, a = r.options, s = a.animation,
                            l = (o.left + o.right) / 2, u = (o.top + o.bottom) / 2, c = a.rotation, d = a.rotation,
                            f = i.getDataset(),
                            h = n && s.animateRotate ? 0 : e.hidden ? 0 : i.calculateCircumference(f.data[t]) * (a.circumference / (2 * Math.PI)),
                            p = n && s.animateScale ? 0 : i.innerRadius, g = n && s.animateScale ? 0 : i.outerRadius,
                            m = P.valueAtIndexOrDefault;
                        P.extend(e, {
                            _datasetIndex: i.index,
                            _index: t,
                            _model: {
                                x: l + r.offsetX,
                                y: u + r.offsetY,
                                startAngle: c,
                                endAngle: d,
                                circumference: h,
                                outerRadius: g,
                                innerRadius: p,
                                label: m(f.label, t, r.data.labels[t])
                            }
                        });
                        var v = e._model;
                        this.removeHoverStyle(e), n && s.animateRotate || (v.startAngle = 0 === t ? a.rotation : i.getMeta().data[t - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), e.pivot()
                    }, removeHoverStyle: function (e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    }, calculateTotal: function () {
                        var n, i = this.getDataset(), e = this.getMeta(), r = 0;
                        return P.each(e.data, function (e, t) {
                            n = i.data[t], isNaN(n) || e.hidden || (r += Math.abs(n))
                        }), r
                    }, calculateCircumference: function (e) {
                        var t = this.getMeta().total;
                        return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0
                    }, getMaxBorderWidth: function (e) {
                        for (var t, n, i = 0, r = this.index, o = e.length, a = 0; a < o; a++) t = e[a]._model ? e[a]._model.borderWidth : 0, i = (n = e[a]._chart ? e[a]._chart.config.data.datasets[r].hoverBorderWidth : 0) > (i = t > i ? t : i) ? n : i;
                        return i
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 18: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(40), p = e(45);
            i._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {mode: "label"},
                scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
            }), t.exports = function (e) {
                function h(e, t) {
                    return p.valueOrDefault(e.showLine, t.showLines)
                }

                e.controllers.line = e.DatasetController.extend({
                    datasetElementType: r.Line, dataElementType: r.Point, update: function (e) {
                        var t, n, i, r = this, o = r.getMeta(), a = o.dataset, s = o.data || [], l = r.chart.options,
                            u = l.elements.line, c = r.getScaleForId(o.yAxisID), d = r.getDataset(), f = h(d, l);
                        for (f && (i = a.custom || {}, void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), a._scale = c, a._datasetIndex = r.index, a._children = s, a._model = {
                            spanGaps: d.spanGaps ? d.spanGaps : l.spanGaps,
                            tension: i.tension ? i.tension : p.valueOrDefault(d.lineTension, u.tension),
                            backgroundColor: i.backgroundColor ? i.backgroundColor : d.backgroundColor || u.backgroundColor,
                            borderWidth: i.borderWidth ? i.borderWidth : d.borderWidth || u.borderWidth,
                            borderColor: i.borderColor ? i.borderColor : d.borderColor || u.borderColor,
                            borderCapStyle: i.borderCapStyle ? i.borderCapStyle : d.borderCapStyle || u.borderCapStyle,
                            borderDash: i.borderDash ? i.borderDash : d.borderDash || u.borderDash,
                            borderDashOffset: i.borderDashOffset ? i.borderDashOffset : d.borderDashOffset || u.borderDashOffset,
                            borderJoinStyle: i.borderJoinStyle ? i.borderJoinStyle : d.borderJoinStyle || u.borderJoinStyle,
                            fill: i.fill ? i.fill : void 0 !== d.fill ? d.fill : u.fill,
                            steppedLine: i.steppedLine ? i.steppedLine : p.valueOrDefault(d.steppedLine, u.stepped),
                            cubicInterpolationMode: i.cubicInterpolationMode ? i.cubicInterpolationMode : p.valueOrDefault(d.cubicInterpolationMode, u.cubicInterpolationMode)
                        }, a.pivot()), t = 0, n = s.length; t < n; ++t) r.updateElement(s[t], t, e);
                        for (f && 0 !== a._model.tension && r.updateBezierControlPoints(), t = 0, n = s.length; t < n; ++t) s[t].pivot()
                    }, getPointBackgroundColor: function (e, t) {
                        var n = this.chart.options.elements.point.backgroundColor, i = this.getDataset(),
                            r = e.custom || {};
                        return r.backgroundColor ? n = r.backgroundColor : i.pointBackgroundColor ? n = p.valueAtIndexOrDefault(i.pointBackgroundColor, t, n) : i.backgroundColor && (n = i.backgroundColor), n
                    }, getPointBorderColor: function (e, t) {
                        var n = this.chart.options.elements.point.borderColor, i = this.getDataset(),
                            r = e.custom || {};
                        return r.borderColor ? n = r.borderColor : i.pointBorderColor ? n = p.valueAtIndexOrDefault(i.pointBorderColor, t, n) : i.borderColor && (n = i.borderColor), n
                    }, getPointBorderWidth: function (e, t) {
                        var n = this.chart.options.elements.point.borderWidth, i = this.getDataset(),
                            r = e.custom || {};
                        return isNaN(r.borderWidth) ? !isNaN(i.pointBorderWidth) || p.isArray(i.pointBorderWidth) ? n = p.valueAtIndexOrDefault(i.pointBorderWidth, t, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = r.borderWidth, n
                    }, updateElement: function (e, t, n) {
                        var i, r, o = this, a = o.getMeta(), s = e.custom || {}, l = o.getDataset(), u = o.index,
                            c = l.data[t], d = o.getScaleForId(a.yAxisID), f = o.getScaleForId(a.xAxisID),
                            h = o.chart.options.elements.point;
                        void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius), void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius), i = f.getPixelForValue("object" == typeof c ? c : NaN, t, u), r = n ? d.getBasePixel() : o.calculatePointY(c, t, u), e._xScale = f, e._yScale = d, e._datasetIndex = u, e._index = t, e._model = {
                            x: i,
                            y: r,
                            skip: s.skip || isNaN(i) || isNaN(r),
                            radius: s.radius || p.valueAtIndexOrDefault(l.pointRadius, t, h.radius),
                            pointStyle: s.pointStyle || p.valueAtIndexOrDefault(l.pointStyle, t, h.pointStyle),
                            backgroundColor: o.getPointBackgroundColor(e, t),
                            borderColor: o.getPointBorderColor(e, t),
                            borderWidth: o.getPointBorderWidth(e, t),
                            tension: a.dataset._model ? a.dataset._model.tension : 0,
                            steppedLine: !!a.dataset._model && a.dataset._model.steppedLine,
                            hitRadius: s.hitRadius || p.valueAtIndexOrDefault(l.pointHitRadius, t, h.hitRadius)
                        }
                    }, calculatePointY: function (e, t, n) {
                        var i, r, o, a = this.chart, s = this.getMeta(), l = this.getScaleForId(s.yAxisID), u = 0,
                            c = 0;
                        if (l.options.stacked) {
                            for (i = 0; i < n; i++) if (r = a.data.datasets[i], "line" === (o = a.getDatasetMeta(i)).type && o.yAxisID === l.id && a.isDatasetVisible(i)) {
                                var d = Number(l.getRightValue(r.data[t]));
                                d < 0 ? c += d || 0 : u += d || 0
                            }
                            var f = Number(l.getRightValue(e));
                            return f < 0 ? l.getPixelForValue(c + f) : l.getPixelForValue(u + f)
                        }
                        return l.getPixelForValue(e)
                    }, updateBezierControlPoints: function () {
                        var e, t, n, i, r = this.getMeta(), o = this.chart.chartArea, a = r.data || [];

                        function s(e, t, n) {
                            return Math.max(Math.min(e, n), t)
                        }

                        if (r.dataset._model.spanGaps && (a = a.filter(function (e) {
                            return !e._model.skip
                        })), "monotone" === r.dataset._model.cubicInterpolationMode) p.splineCurveMonotone(a); else for (e = 0, t = a.length; e < t; ++e) n = a[e]._model, i = p.splineCurve(p.previousItem(a, e)._model, n, p.nextItem(a, e)._model, r.dataset._model.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                        if (this.chart.options.elements.line.capBezierPoints) for (e = 0, t = a.length; e < t; ++e) (n = a[e]._model).controlPointPreviousX = s(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = s(n.controlPointPreviousY, o.top, o.bottom), n.controlPointNextX = s(n.controlPointNextX, o.left, o.right), n.controlPointNextY = s(n.controlPointNextY, o.top, o.bottom)
                    }, draw: function () {
                        var e = this.chart, t = this.getMeta(), n = t.data || [], i = e.chartArea, r = n.length, o = 0;
                        for (p.canvas.clipArea(e.ctx, i), h(this.getDataset(), e.options) && t.dataset.draw(), p.canvas.unclipArea(e.ctx); o < r; ++o) n[o].draw(i)
                    }, setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, i = e.custom || {},
                            r = e._model;
                        r.radius = i.hoverRadius || p.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), r.backgroundColor = i.hoverBackgroundColor || p.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, p.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor || p.valueAtIndexOrDefault(t.pointHoverBorderColor, n, p.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth || p.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, r.borderWidth)
                    }, removeHoverStyle: function (e) {
                        var t = this, n = t.chart.data.datasets[e._datasetIndex], i = e._index, r = e.custom || {},
                            o = e._model;
                        void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), o.radius = r.radius || p.valueAtIndexOrDefault(n.pointRadius, i, t.chart.options.elements.point.radius), o.backgroundColor = t.getPointBackgroundColor(e, i), o.borderColor = t.getPointBorderColor(e, i), o.borderWidth = t.getPointBorderWidth(e, i)
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 19: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(40), w = e(45);
            i._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {display: !1},
                    gridLines: {circular: !0},
                    pointLabels: {display: !1},
                    ticks: {beginAtZero: !0}
                },
                animation: {animateRotate: !0, animateScale: !0},
                startAngle: -.5 * Math.PI,
                legendCallback: function (e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    var n = e.data, i = n.datasets, r = n.labels;
                    if (i.length) for (var o = 0; o < i[0].data.length; ++o) t.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && t.push(r[o]), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (s) {
                            var l = s.data;
                            return l.labels.length && l.datasets.length ? l.labels.map(function (e, t) {
                                var n = s.getDatasetMeta(0), i = l.datasets[0], r = n.data[t].custom || {},
                                    o = w.valueAtIndexOrDefault, a = s.options.elements.arc;
                                return {
                                    text: e,
                                    fillStyle: r.backgroundColor ? r.backgroundColor : o(i.backgroundColor, t, a.backgroundColor),
                                    strokeStyle: r.borderColor ? r.borderColor : o(i.borderColor, t, a.borderColor),
                                    lineWidth: r.borderWidth ? r.borderWidth : o(i.borderWidth, t, a.borderWidth),
                                    hidden: isNaN(i.data[t]) || n.data[t].hidden,
                                    index: t
                                }
                            }) : []
                        }
                    }, onClick: function (e, t) {
                        var n, i, r, o = t.index, a = this.chart;
                        for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) (r = a.getDatasetMeta(n)).data[o].hidden = !r.data[o].hidden;
                        a.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e, t) {
                            return t.labels[e.index] + ": " + e.yLabel
                        }
                    }
                }
            }), t.exports = function (t) {
                t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: r.Arc, linkScales: w.noop, update: function (n) {
                        var i = this, e = i.chart, t = e.chartArea, r = i.getMeta(), o = e.options, a = o.elements.arc,
                            s = Math.min(t.right - t.left, t.bottom - t.top);
                        e.outerRadius = Math.max((s - a.borderWidth / 2) / 2, 0), e.innerRadius = Math.max(o.cutoutPercentage ? e.outerRadius / 100 * o.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), i.outerRadius = e.outerRadius - e.radiusLength * i.index, i.innerRadius = i.outerRadius - e.radiusLength, r.count = i.countVisibleElements(), w.each(r.data, function (e, t) {
                            i.updateElement(e, t, n)
                        })
                    }, updateElement: function (e, t, n) {
                        for (var i = this, r = i.chart, o = i.getDataset(), a = r.options, s = a.animation, l = r.scale, u = r.data.labels, c = i.calculateCircumference(o.data[t]), d = l.xCenter, f = l.yCenter, h = 0, p = i.getMeta(), g = 0; g < t; ++g) isNaN(o.data[g]) || p.data[g].hidden || ++h;
                        var m = a.startAngle, v = e.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[t]),
                            y = m + c * h, b = y + (e.hidden ? 0 : c),
                            x = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[t]);
                        w.extend(e, {
                            _datasetIndex: i.index,
                            _index: t,
                            _scale: l,
                            _model: {
                                x: d,
                                y: f,
                                innerRadius: 0,
                                outerRadius: n ? x : v,
                                startAngle: n && s.animateRotate ? m : y,
                                endAngle: n && s.animateRotate ? m : b,
                                label: w.valueAtIndexOrDefault(u, t, u[t])
                            }
                        }), i.removeHoverStyle(e), e.pivot()
                    }, removeHoverStyle: function (e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    }, countVisibleElements: function () {
                        var n = this.getDataset(), e = this.getMeta(), i = 0;
                        return w.each(e.data, function (e, t) {
                            isNaN(n.data[t]) || e.hidden || i++
                        }), i
                    }, calculateCircumference: function (e) {
                        var t = this.getMeta().count;
                        return t > 0 && !isNaN(e) ? 2 * Math.PI / t : 0
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 20: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(40), u = e(45);
            i._set("radar", {scale: {type: "radialLinear"}, elements: {line: {tension: 0}}}), t.exports = function (e) {
                e.controllers.radar = e.DatasetController.extend({
                    datasetElementType: r.Line, dataElementType: r.Point, linkScales: u.noop, update: function (n) {
                        var i = this, e = i.getMeta(), t = e.dataset, r = e.data, o = t.custom || {},
                            a = i.getDataset(), s = i.chart.options.elements.line, l = i.chart.scale;
                        void 0 !== a.tension && void 0 === a.lineTension && (a.lineTension = a.tension), u.extend(e.dataset, {
                            _datasetIndex: i.index,
                            _scale: l,
                            _children: r,
                            _loop: !0,
                            _model: {
                                tension: o.tension ? o.tension : u.valueOrDefault(a.lineTension, s.tension),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : a.backgroundColor || s.backgroundColor,
                                borderWidth: o.borderWidth ? o.borderWidth : a.borderWidth || s.borderWidth,
                                borderColor: o.borderColor ? o.borderColor : a.borderColor || s.borderColor,
                                fill: o.fill ? o.fill : void 0 !== a.fill ? a.fill : s.fill,
                                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : a.borderCapStyle || s.borderCapStyle,
                                borderDash: o.borderDash ? o.borderDash : a.borderDash || s.borderDash,
                                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : a.borderDashOffset || s.borderDashOffset,
                                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : a.borderJoinStyle || s.borderJoinStyle
                            }
                        }), e.dataset.pivot(), u.each(r, function (e, t) {
                            i.updateElement(e, t, n)
                        }, i), i.updateBezierControlPoints()
                    }, updateElement: function (e, t, n) {
                        var i = this, r = e.custom || {}, o = i.getDataset(), a = i.chart.scale,
                            s = i.chart.options.elements.point, l = a.getPointPositionForValue(t, o.data[t]);
                        void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), u.extend(e, {
                            _datasetIndex: i.index,
                            _index: t,
                            _scale: a,
                            _model: {
                                x: n ? a.xCenter : l.x,
                                y: n ? a.yCenter : l.y,
                                tension: r.tension ? r.tension : u.valueOrDefault(o.lineTension, i.chart.options.elements.line.tension),
                                radius: r.radius ? r.radius : u.valueAtIndexOrDefault(o.pointRadius, t, s.radius),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : u.valueAtIndexOrDefault(o.pointBackgroundColor, t, s.backgroundColor),
                                borderColor: r.borderColor ? r.borderColor : u.valueAtIndexOrDefault(o.pointBorderColor, t, s.borderColor),
                                borderWidth: r.borderWidth ? r.borderWidth : u.valueAtIndexOrDefault(o.pointBorderWidth, t, s.borderWidth),
                                pointStyle: r.pointStyle ? r.pointStyle : u.valueAtIndexOrDefault(o.pointStyle, t, s.pointStyle),
                                hitRadius: r.hitRadius ? r.hitRadius : u.valueAtIndexOrDefault(o.pointHitRadius, t, s.hitRadius)
                            }
                        }), e._model.skip = r.skip ? r.skip : isNaN(e._model.x) || isNaN(e._model.y)
                    }, updateBezierControlPoints: function () {
                        var r = this.chart.chartArea, o = this.getMeta();
                        u.each(o.data, function (e, t) {
                            var n = e._model,
                                i = u.splineCurve(u.previousItem(o.data, t, !0)._model, n, u.nextItem(o.data, t, !0)._model, n.tension);
                            n.controlPointPreviousX = Math.max(Math.min(i.previous.x, r.right), r.left), n.controlPointPreviousY = Math.max(Math.min(i.previous.y, r.bottom), r.top), n.controlPointNextX = Math.max(Math.min(i.next.x, r.right), r.left), n.controlPointNextY = Math.max(Math.min(i.next.y, r.bottom), r.top), e.pivot()
                        })
                    }, setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e.custom || {}, i = e._index,
                            r = e._model;
                        r.radius = n.hoverRadius ? n.hoverRadius : u.valueAtIndexOrDefault(t.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : u.valueAtIndexOrDefault(t.pointHoverBackgroundColor, i, u.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : u.valueAtIndexOrDefault(t.pointHoverBorderColor, i, u.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : u.valueAtIndexOrDefault(t.pointHoverBorderWidth, i, r.borderWidth)
                    }, removeHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e.custom || {}, i = e._index,
                            r = e._model, o = this.chart.options.elements.point;
                        r.radius = n.radius ? n.radius : u.valueAtIndexOrDefault(t.pointRadius, i, o.radius), r.backgroundColor = n.backgroundColor ? n.backgroundColor : u.valueAtIndexOrDefault(t.pointBackgroundColor, i, o.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : u.valueAtIndexOrDefault(t.pointBorderColor, i, o.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : u.valueAtIndexOrDefault(t.pointBorderWidth, i, o.borderWidth)
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 21: [function (e, t, n) {
            "use strict";
            e(25)._set("scatter", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{id: "x-axis-1", type: "linear", position: "bottom"}],
                    yAxes: [{id: "y-axis-1", type: "linear", position: "left"}]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e) {
                            return "(" + e.xLabel + ", " + e.yLabel + ")"
                        }
                    }
                }
            }), t.exports = function (e) {
                e.controllers.scatter = e.controllers.line
            }
        }, {25: 25}], 22: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(26), o = e(45);
            i._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: o.noop,
                    onComplete: o.noop
                }
            }), t.exports = function (e) {
                e.Animation = r.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), e.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function (e, t, n, i) {
                        var r, o, a = this.animations;
                        for (t.chart = e, i || (e.animating = !0), r = 0, o = a.length; r < o; ++r) if (a[r].chart === e) return void (a[r] = t);
                        a.push(t), 1 === a.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function (t) {
                        var e = o.findIndex(this.animations, function (e) {
                            return e.chart === t
                        });
                        -1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                    },
                    requestAnimationFrame: function () {
                        var e = this;
                        null === e.request && (e.request = o.requestAnimFrame.call(window, function () {
                            e.request = null, e.startDigest()
                        }))
                    },
                    startDigest: function () {
                        var e = this, t = Date.now(), n = 0;
                        e.dropFrames > 1 && (n = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + n);
                        var i = Date.now();
                        e.dropFrames += (i - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
                    },
                    advance: function (e) {
                        for (var t, n, i = this.animations, r = 0; r < i.length;) n = (t = i[r]).chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), o.callback(t.render, [n, t], n), o.callback(t.onAnimationProgress, [t], n), t.currentStep >= t.numSteps ? (o.callback(t.onAnimationComplete, [t], n), n.animating = !1, i.splice(r, 1)) : ++r
                    }
                }, Object.defineProperty(e.Animation.prototype, "animationObject", {
                    get: function () {
                        return this
                    }
                }), Object.defineProperty(e.Animation.prototype, "chartInstance", {
                    get: function () {
                        return this.chart
                    }, set: function (e) {
                        this.chart = e
                    }
                })
            }
        }, {25: 25, 26: 26, 45: 45}], 23: [function (e, t, n) {
            "use strict";
            var d = e(25), f = e(45), r = e(28), o = e(30), h = e(48), l = e(31);
            t.exports = function (u) {
                function c(e) {
                    return "top" === e || "bottom" === e
                }

                u.types = {}, u.instances = {}, u.controllers = {}, f.extend(u.prototype, {
                    construct: function (e, t) {
                        var n, i, r = this;
                        (i = (n = (n = t) || {}).data = n.data || {}).datasets = i.datasets || [], i.labels = i.labels || [], n.options = f.configMerge(d.global, d[n.type], n.options || {}), t = n;
                        var o = h.acquireContext(e, t), a = o && o.canvas, s = a && a.height, l = a && a.width;
                        r.id = f.uid(), r.ctx = o, r.canvas = a, r.config = t, r.width = l, r.height = s, r.aspectRatio = s ? l / s : null, r.options = t.options, r._bufferedRender = !1, r.chart = r, r.controller = r, u.instances[r.id] = r, Object.defineProperty(r, "data", {
                            get: function () {
                                return r.config.data
                            }, set: function (e) {
                                r.config.data = e
                            }
                        }), o && a ? (r.initialize(), r.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    }, initialize: function () {
                        var e = this;
                        return l.notify(e, "beforeInit"), f.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), l.notify(e, "afterInit"), e
                    }, clear: function () {
                        return f.canvas.clear(this), this
                    }, stop: function () {
                        return u.animationService.cancelAnimation(this), this
                    }, resize: function (e) {
                        var t = this, n = t.options, i = t.canvas, r = n.maintainAspectRatio && t.aspectRatio || null,
                            o = Math.max(0, Math.floor(f.getMaximumWidth(i))),
                            a = Math.max(0, Math.floor(r ? o / r : f.getMaximumHeight(i)));
                        if ((t.width !== o || t.height !== a) && (i.width = t.width = o, i.height = t.height = a, i.style.width = o + "px", i.style.height = a + "px", f.retinaScale(t, n.devicePixelRatio), !e)) {
                            var s = {width: o, height: a};
                            l.notify(t, "resize", [s]), t.options.onResize && t.options.onResize(t, s), t.stop(), t.update(t.options.responsiveAnimationDuration)
                        }
                    }, ensureScalesHaveIDs: function () {
                        var e = this.options, t = e.scales || {}, n = e.scale;
                        f.each(t.xAxes, function (e, t) {
                            e.id = e.id || "x-axis-" + t
                        }), f.each(t.yAxes, function (e, t) {
                            e.id = e.id || "y-axis-" + t
                        }), n && (n.id = n.id || "scale")
                    }, buildOrUpdateScales: function () {
                        var a = this, e = a.options, s = a.scales || {}, t = [],
                            l = Object.keys(s).reduce(function (e, t) {
                                return e[t] = !1, e
                            }, {});
                        e.scales && (t = t.concat((e.scales.xAxes || []).map(function (e) {
                            return {options: e, dtype: "category", dposition: "bottom"}
                        }), (e.scales.yAxes || []).map(function (e) {
                            return {options: e, dtype: "linear", dposition: "left"}
                        }))), e.scale && t.push({
                            options: e.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), f.each(t, function (e) {
                            var t = e.options, n = t.id, i = f.valueOrDefault(t.type, e.dtype);
                            c(t.position) !== c(e.dposition) && (t.position = e.dposition), l[n] = !0;
                            var r = null;
                            if (n in s && s[n].type === i) (r = s[n]).options = t, r.ctx = a.ctx, r.chart = a; else {
                                var o = u.scaleService.getScaleConstructor(i);
                                if (!o) return;
                                r = new o({id: n, type: i, options: t, ctx: a.ctx, chart: a}), s[r.id] = r
                            }
                            r.mergeTicksOptions(), e.isDefault && (a.scale = r)
                        }), f.each(l, function (e, t) {
                            e || delete s[t]
                        }), a.scales = s, u.scaleService.addScalesToLayout(this)
                    }, buildOrUpdateControllers: function () {
                        var o = this, a = [], s = [];
                        return f.each(o.data.datasets, function (e, t) {
                            var n = o.getDatasetMeta(t), i = e.type || o.config.type;
                            if (n.type && n.type !== i && (o.destroyDatasetMeta(t), n = o.getDatasetMeta(t)), n.type = i, a.push(n.type), n.controller) n.controller.updateIndex(t), n.controller.linkScales(); else {
                                var r = u.controllers[n.type];
                                if (void 0 === r) throw new Error('"' + n.type + '" is not a chart type.');
                                n.controller = new r(o, t), s.push(n.controller)
                            }
                        }, o), s
                    }, resetElements: function () {
                        var n = this;
                        f.each(n.data.datasets, function (e, t) {
                            n.getDatasetMeta(t).controller.reset()
                        }, n)
                    }, reset: function () {
                        this.resetElements(), this.tooltip.initialize()
                    }, update: function (e) {
                        var t, n, i = this;
                        if (e && "object" == typeof e || (e = {
                            duration: e,
                            lazy: arguments[1]
                        }), n = (t = i).options, f.each(t.scales, function (e) {
                            o.removeBox(t, e)
                        }), n = f.configMerge(u.defaults.global, u.defaults[t.config.type], n), t.options = t.config.options = n, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = n.tooltips, t.tooltip.initialize(), l._invalidate(i), !1 !== l.notify(i, "beforeUpdate")) {
                            i.tooltip._data = i.data;
                            var r = i.buildOrUpdateControllers();
                            f.each(i.data.datasets, function (e, t) {
                                i.getDatasetMeta(t).controller.buildOrUpdateElements()
                            }, i), i.updateLayout(), i.options.animation && i.options.animation.duration && f.each(r, function (e) {
                                e.reset()
                            }), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], l.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = {
                                duration: e.duration,
                                easing: e.easing,
                                lazy: e.lazy
                            } : i.render(e)
                        }
                    }, updateLayout: function () {
                        !1 !== l.notify(this, "beforeLayout") && (o.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"))
                    }, updateDatasets: function () {
                        if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
                            for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                            l.notify(this, "afterDatasetsUpdate")
                        }
                    }, updateDataset: function (e) {
                        var t = this.getDatasetMeta(e), n = {meta: t, index: e};
                        !1 !== l.notify(this, "beforeDatasetUpdate", [n]) && (t.controller.update(), l.notify(this, "afterDatasetUpdate", [n]))
                    }, render: function (e) {
                        var t = this;
                        e && "object" == typeof e || (e = {duration: e, lazy: arguments[1]});
                        var n = e.duration, i = e.lazy;
                        if (!1 !== l.notify(t, "beforeRender")) {
                            var r = t.options.animation, o = function (e) {
                                l.notify(t, "afterRender"), f.callback(r && r.onComplete, [e], t)
                            };
                            if (r && (void 0 !== n && 0 !== n || void 0 === n && 0 !== r.duration)) {
                                var a = new u.Animation({
                                    numSteps: (n || r.duration) / 16.66,
                                    easing: e.easing || r.easing,
                                    render: function (e, t) {
                                        var n = f.easing.effects[t.easing], i = t.currentStep, r = i / t.numSteps;
                                        e.draw(n(r), r, i)
                                    },
                                    onAnimationProgress: r.onProgress,
                                    onAnimationComplete: o
                                });
                                u.animationService.addAnimation(t, a, n, i)
                            } else t.draw(), o(new u.Animation({numSteps: 0, chart: t}));
                            return t
                        }
                    }, draw: function (e) {
                        var t = this;
                        t.clear(), f.isNullOrUndef(e) && (e = 1), t.transition(e), !1 !== l.notify(t, "beforeDraw", [e]) && (f.each(t.boxes, function (e) {
                            e.draw(t.chartArea)
                        }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t._drawTooltip(e), l.notify(t, "afterDraw", [e]))
                    }, transition: function (e) {
                        for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                        this.tooltip.transition(e)
                    }, drawDatasets: function (e) {
                        var t = this;
                        if (!1 !== l.notify(t, "beforeDatasetsDraw", [e])) {
                            for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
                            l.notify(t, "afterDatasetsDraw", [e])
                        }
                    }, drawDataset: function (e, t) {
                        var n = this.getDatasetMeta(e), i = {meta: n, index: e, easingValue: t};
                        !1 !== l.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(t), l.notify(this, "afterDatasetDraw", [i]))
                    }, _drawTooltip: function (e) {
                        var t = this.tooltip, n = {tooltip: t, easingValue: e};
                        !1 !== l.notify(this, "beforeTooltipDraw", [n]) && (t.draw(), l.notify(this, "afterTooltipDraw", [n]))
                    }, getElementAtEvent: function (e) {
                        return r.modes.single(this, e)
                    }, getElementsAtEvent: function (e) {
                        return r.modes.label(this, e, {intersect: !0})
                    }, getElementsAtXAxis: function (e) {
                        return r.modes["x-axis"](this, e, {intersect: !0})
                    }, getElementsAtEventForMode: function (e, t, n) {
                        var i = r.modes[t];
                        return "function" == typeof i ? i(this, e, n) : []
                    }, getDatasetAtEvent: function (e) {
                        return r.modes.dataset(this, e, {intersect: !0})
                    }, getDatasetMeta: function (e) {
                        var t = this.data.datasets[e];
                        t._meta || (t._meta = {});
                        var n = t._meta[this.id];
                        return n || (n = t._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), n
                    }, getVisibleDatasetCount: function () {
                        for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++;
                        return e
                    }, isDatasetVisible: function (e) {
                        var t = this.getDatasetMeta(e);
                        return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
                    }, generateLegend: function () {
                        return this.options.legendCallback(this)
                    }, destroyDatasetMeta: function (e) {
                        var t = this.id, n = this.data.datasets[e], i = n._meta && n._meta[t];
                        i && (i.controller.destroy(), delete n._meta[t])
                    }, destroy: function () {
                        var e, t, n = this, i = n.canvas;
                        for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e) n.destroyDatasetMeta(e);
                        i && (n.unbindEvents(), f.canvas.clear(n), h.releaseContext(n.ctx), n.canvas = null, n.ctx = null), l.notify(n, "destroy"), delete u.instances[n.id]
                    }, toBase64Image: function () {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    }, initToolTip: function () {
                        var e = this;
                        e.tooltip = new u.Tooltip({
                            _chart: e,
                            _chartInstance: e,
                            _data: e.data,
                            _options: e.options.tooltips
                        }, e)
                    }, bindEvents: function () {
                        var t = this, n = t._listeners = {}, i = function () {
                            t.eventHandler.apply(t, arguments)
                        };
                        f.each(t.options.events, function (e) {
                            h.addEventListener(t, e, i), n[e] = i
                        }), t.options.responsive && (i = function () {
                            t.resize()
                        }, h.addEventListener(t, "resize", i), n.resize = i)
                    }, unbindEvents: function () {
                        var n = this, e = n._listeners;
                        e && (delete n._listeners, f.each(e, function (e, t) {
                            h.removeEventListener(n, t, e)
                        }))
                    }, updateHoverStyle: function (e, t, n) {
                        var i, r, o, a = n ? "setHoverStyle" : "removeHoverStyle";
                        for (r = 0, o = e.length; r < o; ++r) (i = e[r]) && this.getDatasetMeta(i._datasetIndex).controller[a](i)
                    }, eventHandler: function (e) {
                        var t = this, n = t.tooltip;
                        if (!1 !== l.notify(t, "beforeEvent", [e])) {
                            t._bufferedRender = !0, t._bufferedRequest = null;
                            var i = t.handleEvent(e);
                            n && (i = n._start ? n.handleEvent(e) : i | n.handleEvent(e)), l.notify(t, "afterEvent", [e]);
                            var r = t._bufferedRequest;
                            return r ? t.render(r) : i && !t.animating && (t.stop(), t.render(t.options.hover.animationDuration, !0)), t._bufferedRender = !1, t._bufferedRequest = null, t
                        }
                    }, handleEvent: function (e) {
                        var t, n = this, i = n.options || {}, r = i.hover;
                        return n.lastActive = n.lastActive || [], "mouseout" === e.type ? n.active = [] : n.active = n.getElementsAtEventForMode(e, r.mode, r), f.callback(i.onHover || i.hover.onHover, [e.native, n.active], n), "mouseup" !== e.type && "click" !== e.type || i.onClick && i.onClick.call(n, e.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), t = !f.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, t
                    }
                }), u.Controller = u
            }
        }, {25: 25, 28: 28, 30: 30, 31: 31, 45: 45, 48: 48}], 24: [function (e, t, n) {
            "use strict";
            var s = e(45);
            t.exports = function (e) {
                var o = ["push", "pop", "shift", "splice", "unshift"];

                function a(t, e) {
                    var n = t._chartjs;
                    if (n) {
                        var i = n.listeners, r = i.indexOf(e);
                        -1 !== r && i.splice(r, 1), i.length > 0 || (o.forEach(function (e) {
                            delete t[e]
                        }), delete t._chartjs)
                    }
                }

                e.DatasetController = function (e, t) {
                    this.initialize(e, t)
                }, s.extend(e.DatasetController.prototype, {
                    datasetElementType: null, dataElementType: null, initialize: function (e, t) {
                        this.chart = e, this.index = t, this.linkScales(), this.addElements()
                    }, updateIndex: function (e) {
                        this.index = e
                    }, linkScales: function () {
                        var e = this, t = e.getMeta(), n = e.getDataset();
                        null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id)
                    }, getDataset: function () {
                        return this.chart.data.datasets[this.index]
                    }, getMeta: function () {
                        return this.chart.getDatasetMeta(this.index)
                    }, getScaleForId: function (e) {
                        return this.chart.scales[e]
                    }, reset: function () {
                        this.update(!0)
                    }, destroy: function () {
                        this._data && a(this._data, this)
                    }, createMetaDataset: function () {
                        var e = this.datasetElementType;
                        return e && new e({_chart: this.chart, _datasetIndex: this.index})
                    }, createMetaData: function (e) {
                        var t = this.dataElementType;
                        return t && new t({_chart: this.chart, _datasetIndex: this.index, _index: e})
                    }, addElements: function () {
                        var e, t, n = this.getMeta(), i = this.getDataset().data || [], r = n.data;
                        for (e = 0, t = i.length; e < t; ++e) r[e] = r[e] || this.createMetaData(e);
                        n.dataset = n.dataset || this.createMetaDataset()
                    }, addElementAndReset: function (e) {
                        var t = this.createMetaData(e);
                        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                    }, buildOrUpdateElements: function () {
                        var r, e, t = this, n = t.getDataset(), i = n.data || (n.data = []);
                        t._data !== i && (t._data && a(t._data, t), e = t, (r = i)._chartjs ? r._chartjs.listeners.push(e) : (Object.defineProperty(r, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {listeners: [e]}
                        }), o.forEach(function (e) {
                            var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1), i = r[e];
                            Object.defineProperty(r, e, {
                                configurable: !0, enumerable: !1, value: function () {
                                    var t = Array.prototype.slice.call(arguments), e = i.apply(this, t);
                                    return s.each(r._chartjs.listeners, function (e) {
                                        "function" == typeof e[n] && e[n].apply(e, t)
                                    }), e
                                }
                            })
                        })), t._data = i), t.resyncElements()
                    }, update: s.noop, transition: function (e) {
                        for (var t = this.getMeta(), n = t.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(e);
                        t.dataset && t.dataset.transition(e)
                    }, draw: function () {
                        var e = this.getMeta(), t = e.data || [], n = t.length, i = 0;
                        for (e.dataset && e.dataset.draw(); i < n; ++i) t[i].draw()
                    }, removeHoverStyle: function (e, t) {
                        var n = this.chart.data.datasets[e._datasetIndex], i = e._index, r = e.custom || {},
                            o = s.valueAtIndexOrDefault, a = e._model;
                        a.backgroundColor = r.backgroundColor ? r.backgroundColor : o(n.backgroundColor, i, t.backgroundColor), a.borderColor = r.borderColor ? r.borderColor : o(n.borderColor, i, t.borderColor), a.borderWidth = r.borderWidth ? r.borderWidth : o(n.borderWidth, i, t.borderWidth)
                    }, setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, i = e.custom || {},
                            r = s.valueAtIndexOrDefault, o = s.getHoverColor, a = e._model;
                        a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r(t.hoverBackgroundColor, n, o(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r(t.hoverBorderColor, n, o(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r(t.hoverBorderWidth, n, a.borderWidth)
                    }, resyncElements: function () {
                        var e = this.getMeta(), t = this.getDataset().data, n = e.data.length, i = t.length;
                        i < n ? e.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
                    }, insertElements: function (e, t) {
                        for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
                    }, onDataPush: function () {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    }, onDataPop: function () {
                        this.getMeta().data.pop()
                    }, onDataShift: function () {
                        this.getMeta().data.shift()
                    }, onDataSplice: function (e, t) {
                        this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
                    }, onDataUnshift: function () {
                        this.insertElements(0, arguments.length)
                    }
                }), e.DatasetController.extend = s.inherits
            }
        }, {45: 45}], 25: [function (e, t, n) {
            "use strict";
            var i = e(45);
            t.exports = {
                _set: function (e, t) {
                    return i.merge(this[e] || (this[e] = {}), t)
                }
            }
        }, {45: 45}], 26: [function (e, t, n) {
            "use strict";
            var p = e(3), i = e(45);
            var r = function (e) {
                i.extend(this, e), this.initialize.apply(this, arguments)
            };
            i.extend(r.prototype, {
                initialize: function () {
                    this.hidden = !1
                }, pivot: function () {
                    var e = this;
                    return e._view || (e._view = i.clone(e._model)), e._start = {}, e
                }, transition: function (e) {
                    var t = this, n = t._model, i = t._start, r = t._view;
                    return n && 1 !== e ? (r || (r = t._view = {}), i || (i = t._start = {}), function (e, t, n, i) {
                        var r, o, a, s, l, u, c, d, f, h = Object.keys(n);
                        for (r = 0, o = h.length; r < o; ++r) if (u = n[a = h[r]], t.hasOwnProperty(a) || (t[a] = u), (s = t[a]) !== u && "_" !== a[0]) {
                            if (e.hasOwnProperty(a) || (e[a] = s), (c = typeof u) == typeof (l = e[a])) if ("string" === c) {
                                if ((d = p(l)).valid && (f = p(u)).valid) {
                                    t[a] = f.mix(d, i).rgbString();
                                    continue
                                }
                            } else if ("number" === c && isFinite(l) && isFinite(u)) {
                                t[a] = l + (u - l) * i;
                                continue
                            }
                            t[a] = u
                        }
                    }(i, r, n, e), t) : (t._view = n, t._start = null, t)
                }, tooltipPosition: function () {
                    return {x: this._model.x, y: this._model.y}
                }, hasValue: function () {
                    return i.isNumber(this._model.x) && i.isNumber(this._model.y)
                }
            }), r.extend = i.inherits, t.exports = r
        }, {3: 3, 45: 45}], 27: [function (e, t, n) {
            "use strict";
            var i = e(3), r = e(25), p = e(45);
            t.exports = function (l) {
                function c(e, t, n) {
                    var i;
                    return "string" == typeof e ? (i = parseInt(e, 10), -1 !== e.indexOf("%") && (i = i / 100 * t.parentNode[n])) : i = e, i
                }

                function d(e) {
                    return null != e && "none" !== e
                }

                function t(e, t, n) {
                    var i = document.defaultView, r = e.parentNode, o = i.getComputedStyle(e)[t],
                        a = i.getComputedStyle(r)[t], s = d(o), l = d(a), u = Number.POSITIVE_INFINITY;
                    return s || l ? Math.min(s ? c(o, e, n) : u, l ? c(a, r, n) : u) : "none"
                }

                p.configMerge = function () {
                    return p.merge(p.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (e, t, n, i) {
                            var r = t[e] || {}, o = n[e];
                            "scales" === e ? t[e] = p.scaleMerge(r, o) : "scale" === e ? t[e] = p.merge(r, [l.scaleService.getScaleDefaults(o.type), o]) : p._merger(e, t, n, i)
                        }
                    })
                }, p.scaleMerge = function () {
                    return p.merge(p.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (e, t, n, i) {
                            if ("xAxes" === e || "yAxes" === e) {
                                var r, o, a, s = n[e].length;
                                for (t[e] || (t[e] = []), r = 0; r < s; ++r) a = n[e][r], o = p.valueOrDefault(a.type, "xAxes" === e ? "category" : "linear"), r >= t[e].length && t[e].push({}), !t[e][r].type || a.type && a.type !== t[e][r].type ? p.merge(t[e][r], [l.scaleService.getScaleDefaults(o), a]) : p.merge(t[e][r], a)
                            } else p._merger(e, t, n, i)
                        }
                    })
                }, p.where = function (e, t) {
                    if (p.isArray(e) && Array.prototype.filter) return e.filter(t);
                    var n = [];
                    return p.each(e, function (e) {
                        t(e) && n.push(e)
                    }), n
                }, p.findIndex = Array.prototype.findIndex ? function (e, t, n) {
                    return e.findIndex(t, n)
                } : function (e, t, n) {
                    n = void 0 === n ? e : n;
                    for (var i = 0, r = e.length; i < r; ++i) if (t.call(n, e[i], i, e)) return i;
                    return -1
                }, p.findNextWhere = function (e, t, n) {
                    p.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < e.length; i++) {
                        var r = e[i];
                        if (t(r)) return r
                    }
                }, p.findPreviousWhere = function (e, t, n) {
                    p.isNullOrUndef(n) && (n = e.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var r = e[i];
                        if (t(r)) return r
                    }
                }, p.isNumber = function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                }, p.almostEquals = function (e, t, n) {
                    return Math.abs(e - t) < n
                }, p.almostWhole = function (e, t) {
                    var n = Math.round(e);
                    return n - t < e && n + t > e
                }, p.max = function (e) {
                    return e.reduce(function (e, t) {
                        return isNaN(t) ? e : Math.max(e, t)
                    }, Number.NEGATIVE_INFINITY)
                }, p.min = function (e) {
                    return e.reduce(function (e, t) {
                        return isNaN(t) ? e : Math.min(e, t)
                    }, Number.POSITIVE_INFINITY)
                }, p.sign = Math.sign ? function (e) {
                    return Math.sign(e)
                } : function (e) {
                    return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
                }, p.log10 = Math.log10 ? function (e) {
                    return Math.log10(e)
                } : function (e) {
                    var t = Math.log(e) * Math.LOG10E, n = Math.round(t);
                    return e === Math.pow(10, n) ? n : t
                }, p.toRadians = function (e) {
                    return e * (Math.PI / 180)
                }, p.toDegrees = function (e) {
                    return e * (180 / Math.PI)
                }, p.getAngleFromPoint = function (e, t) {
                    var n = t.x - e.x, i = t.y - e.y, r = Math.sqrt(n * n + i * i), o = Math.atan2(i, n);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {angle: o, distance: r}
                }, p.distanceBetweenPoints = function (e, t) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                }, p.aliasPixel = function (e) {
                    return e % 2 == 0 ? 0 : .5
                }, p.splineCurve = function (e, t, n, i) {
                    var r = e.skip ? t : e, o = t, a = n.skip ? t : n,
                        s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)), u = s / (s + l),
                        c = l / (s + l), d = i * (u = isNaN(u) ? 0 : u), f = i * (c = isNaN(c) ? 0 : c);
                    return {
                        previous: {x: o.x - d * (a.x - r.x), y: o.y - d * (a.y - r.y)},
                        next: {x: o.x + f * (a.x - r.x), y: o.y + f * (a.y - r.y)}
                    }
                }, p.EPSILON = Number.EPSILON || 1e-14, p.splineCurveMonotone = function (e) {
                    var t, n, i, r, o, a, s, l, u, c = (e || []).map(function (e) {
                        return {model: e._model, deltaK: 0, mK: 0}
                    }), d = c.length;
                    for (t = 0; t < d; ++t) if (!(i = c[t]).model.skip) {
                        if (n = t > 0 ? c[t - 1] : null, (r = t < d - 1 ? c[t + 1] : null) && !r.model.skip) {
                            var f = r.model.x - i.model.x;
                            i.deltaK = 0 !== f ? (r.model.y - i.model.y) / f : 0
                        }
                        !n || n.model.skip ? i.mK = i.deltaK : !r || r.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                    }
                    for (t = 0; t < d - 1; ++t) i = c[t], r = c[t + 1], i.model.skip || r.model.skip || (p.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (o = i.mK / i.deltaK, a = r.mK / i.deltaK, (l = Math.pow(o, 2) + Math.pow(a, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = o * s * i.deltaK, r.mK = a * s * i.deltaK)));
                    for (t = 0; t < d; ++t) (i = c[t]).model.skip || (n = t > 0 ? c[t - 1] : null, r = t < d - 1 ? c[t + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), r && !r.model.skip && (u = (r.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK))
                }, p.nextItem = function (e, t, n) {
                    return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
                }, p.previousItem = function (e, t, n) {
                    return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
                }, p.niceNum = function (e, t) {
                    var n = Math.floor(p.log10(e)), i = e / Math.pow(10, n);
                    return (t ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                }, p.requestAnimFrame = "undefined" == typeof window ? function (e) {
                    e()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                    return window.setTimeout(e, 1e3 / 60)
                }, p.getRelativePosition = function (e, t) {
                    var n, i, r = e.originalEvent || e, o = e.currentTarget || e.srcElement,
                        a = o.getBoundingClientRect(), s = r.touches;
                    s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = r.clientX, i = r.clientY);
                    var l = parseFloat(p.getStyle(o, "padding-left")), u = parseFloat(p.getStyle(o, "padding-top")),
                        c = parseFloat(p.getStyle(o, "padding-right")), d = parseFloat(p.getStyle(o, "padding-bottom")),
                        f = a.right - a.left - l - c, h = a.bottom - a.top - u - d;
                    return {
                        x: n = Math.round((n - a.left - l) / f * o.width / t.currentDevicePixelRatio),
                        y: i = Math.round((i - a.top - u) / h * o.height / t.currentDevicePixelRatio)
                    }
                }, p.getConstraintWidth = function (e) {
                    return t(e, "max-width", "clientWidth")
                }, p.getConstraintHeight = function (e) {
                    return t(e, "max-height", "clientHeight")
                }, p.getMaximumWidth = function (e) {
                    var t = e.parentNode;
                    if (!t) return e.clientWidth;
                    var n = parseInt(p.getStyle(t, "padding-left"), 10),
                        i = parseInt(p.getStyle(t, "padding-right"), 10), r = t.clientWidth - n - i,
                        o = p.getConstraintWidth(e);
                    return isNaN(o) ? r : Math.min(r, o)
                }, p.getMaximumHeight = function (e) {
                    var t = e.parentNode;
                    if (!t) return e.clientHeight;
                    var n = parseInt(p.getStyle(t, "padding-top"), 10),
                        i = parseInt(p.getStyle(t, "padding-bottom"), 10), r = t.clientHeight - n - i,
                        o = p.getConstraintHeight(e);
                    return isNaN(o) ? r : Math.min(r, o)
                }, p.getStyle = function (e, t) {
                    return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
                }, p.retinaScale = function (e, t) {
                    var n = e.currentDevicePixelRatio = t || window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = e.canvas, r = e.height, o = e.width;
                        i.height = r * n, i.width = o * n, e.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = o + "px")
                    }
                }, p.fontString = function (e, t, n) {
                    return t + " " + e + "px " + n
                }, p.longestText = function (t, e, n, i) {
                    var r = (i = i || {}).data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (r = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;
                    var a = 0;
                    p.each(n, function (e) {
                        null != e && !0 !== p.isArray(e) ? a = p.measureText(t, r, o, a, e) : p.isArray(e) && p.each(e, function (e) {
                            null == e || p.isArray(e) || (a = p.measureText(t, r, o, a, e))
                        })
                    });
                    var s = o.length / 2;
                    if (s > n.length) {
                        for (var l = 0; l < s; l++) delete r[o[l]];
                        o.splice(0, s)
                    }
                    return a
                }, p.measureText = function (e, t, n, i, r) {
                    var o = t[r];
                    return o || (o = t[r] = e.measureText(r).width, n.push(r)), o > i && (i = o), i
                }, p.numberOfLabelLines = function (e) {
                    var t = 1;
                    return p.each(e, function (e) {
                        p.isArray(e) && e.length > t && (t = e.length)
                    }), t
                }, p.color = i ? function (e) {
                    return e instanceof CanvasGradient && (e = r.global.defaultColor), i(e)
                } : function (e) {
                    return console.error("Color.js not found!"), e
                }, p.getHoverColor = function (e) {
                    return e instanceof CanvasPattern ? e : p.color(e).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {25: 25, 3: 3, 45: 45}], 28: [function (e, t, n) {
            "use strict";
            var i = e(45);

            function s(e, t) {
                return e.native ? {x: e.x, y: e.y} : i.getRelativePosition(e, t)
            }

            function l(e, t) {
                var n, i, r, o, a;
                for (i = 0, o = e.data.datasets.length; i < o; ++i) if (e.isDatasetVisible(i)) for (r = 0, a = (n = e.getDatasetMeta(i)).data.length; r < a; ++r) {
                    var s = n.data[r];
                    s._view.skip || t(s)
                }
            }

            function u(e, t) {
                var n = [];
                return l(e, function (e) {
                    e.inRange(t.x, t.y) && n.push(e)
                }), n
            }

            function c(e, i, r, o) {
                var a = Number.POSITIVE_INFINITY, s = [];
                return l(e, function (e) {
                    if (!r || e.inRange(i.x, i.y)) {
                        var t = e.getCenterPoint(), n = o(i, t);
                        n < a ? (s = [e], a = n) : n === a && s.push(e)
                    }
                }), s
            }

            function d(e) {
                var r = -1 !== e.indexOf("x"), o = -1 !== e.indexOf("y");
                return function (e, t) {
                    var n = r ? Math.abs(e.x - t.x) : 0, i = o ? Math.abs(e.y - t.y) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2))
                }
            }

            function r(i, e, t) {
                var n = s(e, i);
                t.axis = t.axis || "x";
                var r = d(t.axis), o = t.intersect ? u(i, n) : c(i, n, !1, r), a = [];
                return o.length ? (i.data.datasets.forEach(function (e, t) {
                    if (i.isDatasetVisible(t)) {
                        var n = i.getDatasetMeta(t).data[o[0]._index];
                        n && !n._view.skip && a.push(n)
                    }
                }), a) : []
            }

            t.exports = {
                modes: {
                    single: function (e, t) {
                        var n = s(t, e), i = [];
                        return l(e, function (e) {
                            if (e.inRange(n.x, n.y)) return i.push(e), i
                        }), i.slice(0, 1)
                    }, label: r, index: r, dataset: function (e, t, n) {
                        var i = s(t, e);
                        n.axis = n.axis || "xy";
                        var r = d(n.axis), o = n.intersect ? u(e, i) : c(e, i, !1, r);
                        return o.length > 0 && (o = e.getDatasetMeta(o[0]._datasetIndex).data), o
                    }, "x-axis": function (e, t) {
                        return r(e, t, {intersect: !1})
                    }, point: function (e, t) {
                        return u(e, s(t, e))
                    }, nearest: function (e, t, n) {
                        var i = s(t, e);
                        n.axis = n.axis || "xy";
                        var r = d(n.axis), o = c(e, i, n.intersect, r);
                        return o.length > 1 && o.sort(function (e, t) {
                            var n = e.getArea() - t.getArea();
                            return 0 === n && (n = e._datasetIndex - t._datasetIndex), n
                        }), o.slice(0, 1)
                    }, x: function (e, t, n) {
                        var i = s(t, e), r = [], o = !1;
                        return l(e, function (e) {
                            e.inXRange(i.x) && r.push(e), e.inRange(i.x, i.y) && (o = !0)
                        }), n.intersect && !o && (r = []), r
                    }, y: function (e, t, n) {
                        var i = s(t, e), r = [], o = !1;
                        return l(e, function (e) {
                            e.inYRange(i.y) && r.push(e), e.inRange(i.x, i.y) && (o = !0)
                        }), n.intersect && !o && (r = []), r
                    }
                }
            }
        }, {45: 45}], 29: [function (e, t, n) {
            "use strict";
            e(25)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {onHover: null, mode: "nearest", intersect: !0, animationDuration: 400},
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {padding: {top: 0, right: 0, bottom: 0, left: 0}}
            }), t.exports = function () {
                var e = function (e, t) {
                    return this.construct(e, t), this
                };
                return e.Chart = e, e
            }
        }, {25: 25}], 30: [function (e, t, n) {
            "use strict";
            var H = e(45);

            function B(e, t) {
                return H.where(e, function (e) {
                    return e.position === t
                })
            }

            function W(e, r) {
                e.forEach(function (e, t) {
                    return e._tmpIndex_ = t, e
                }), e.sort(function (e, t) {
                    var n = r ? t : e, i = r ? e : t;
                    return n.weight === i.weight ? n._tmpIndex_ - i._tmpIndex_ : n.weight - i.weight
                }), e.forEach(function (e) {
                    delete e._tmpIndex_
                })
            }

            t.exports = {
                defaults: {}, addBox: function (e, t) {
                    e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
                }, removeBox: function (e, t) {
                    var n = e.boxes ? e.boxes.indexOf(t) : -1;
                    -1 !== n && e.boxes.splice(n, 1)
                }, configure: function (e, t, n) {
                    for (var i, r = ["fullWidth", "position", "weight"], o = r.length, a = 0; a < o; ++a) i = r[a], n.hasOwnProperty(i) && (t[i] = n[i])
                }, update: function (t, n, e) {
                    if (t) {
                        var i = t.options.layout || {}, r = H.options.toPadding(i.padding), o = r.left, a = r.right,
                            s = r.top, l = r.bottom, u = B(t.boxes, "left"), c = B(t.boxes, "right"),
                            d = B(t.boxes, "top"), f = B(t.boxes, "bottom"), h = B(t.boxes, "chartArea");
                        W(u, !0), W(c, !1), W(d, !0), W(f, !1);
                        var p = n - o - a, g = e - s - l, m = g / 2, N = (n - p / 2) / (u.length + c.length),
                            R = (e - m) / (d.length + f.length), v = p, y = g, b = [];
                        H.each(u.concat(c, d, f), function (e) {
                            var t, n = e.isHorizontal();
                            n ? (t = e.update(e.fullWidth ? p : v, R), y -= t.height) : (t = e.update(N, y), v -= t.width), b.push({
                                horizontal: n,
                                minSize: t,
                                box: e
                            })
                        });
                        var x = 0, w = 0, k = 0, _ = 0;
                        H.each(d.concat(f), function (e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                x = Math.max(x, t.left), w = Math.max(w, t.right)
                            }
                        }), H.each(u.concat(c), function (e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                k = Math.max(k, t.top), _ = Math.max(_, t.bottom)
                            }
                        });
                        var S = o, C = a, T = s, M = l;
                        H.each(u.concat(c), L), H.each(u, function (e) {
                            S += e.width
                        }), H.each(c, function (e) {
                            C += e.width
                        }), H.each(d.concat(f), L), H.each(d, function (e) {
                            T += e.height
                        }), H.each(f, function (e) {
                            M += e.height
                        }), H.each(u.concat(c), function (t) {
                            var e = H.findNextWhere(b, function (e) {
                                return e.box === t
                            }), n = {left: 0, right: 0, top: T, bottom: M};
                            e && t.update(e.minSize.width, y, n)
                        }), S = o, C = a, T = s, M = l, H.each(u, function (e) {
                            S += e.width
                        }), H.each(c, function (e) {
                            C += e.width
                        }), H.each(d, function (e) {
                            T += e.height
                        }), H.each(f, function (e) {
                            M += e.height
                        });
                        var D = Math.max(x - S, 0);
                        S += D, C += Math.max(w - C, 0);
                        var A = Math.max(k - T, 0);
                        T += A, M += Math.max(_ - M, 0);
                        var P = e - T - M, I = n - S - C;
                        I === v && P === y || (H.each(u, function (e) {
                            e.height = P
                        }), H.each(c, function (e) {
                            e.height = P
                        }), H.each(d, function (e) {
                            e.fullWidth || (e.width = I)
                        }), H.each(f, function (e) {
                            e.fullWidth || (e.width = I)
                        }), y = P, v = I);
                        var E = o + D, O = s + A;
                        H.each(u.concat(d), F), E += v, O += y, H.each(c, F), H.each(f, F), t.chartArea = {
                            left: S,
                            top: T,
                            right: S + v,
                            bottom: T + y
                        }, H.each(h, function (e) {
                            e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(v, y)
                        })
                    }

                    function L(t) {
                        var e = H.findNextWhere(b, function (e) {
                            return e.box === t
                        });
                        if (e) if (t.isHorizontal()) {
                            var n = {left: Math.max(S, x), right: Math.max(C, w), top: 0, bottom: 0};
                            t.update(t.fullWidth ? p : v, g / 2, n)
                        } else t.update(e.minSize.width, y)
                    }

                    function F(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? o : S, e.right = e.fullWidth ? n - a : S + v, e.top = O, e.bottom = O + e.height, O = e.bottom) : (e.left = E, e.right = E + e.width, e.top = T, e.bottom = T + y, E = e.right)
                    }
                }
            }
        }, {45: 45}], 31: [function (e, t, n) {
            "use strict";
            var a = e(25), s = e(45);
            a._set("global", {plugins: {}}), t.exports = {
                _plugins: [], _cacheId: 0, register: function (e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function (e) {
                        -1 === t.indexOf(e) && t.push(e)
                    }), this._cacheId++
                }, unregister: function (e) {
                    var n = this._plugins;
                    [].concat(e).forEach(function (e) {
                        var t = n.indexOf(e);
                        -1 !== t && n.splice(t, 1)
                    }), this._cacheId++
                }, clear: function () {
                    this._plugins = [], this._cacheId++
                }, count: function () {
                    return this._plugins.length
                }, getAll: function () {
                    return this._plugins
                }, notify: function (e, t, n) {
                    var i, r, o, a, s, l = this.descriptors(e), u = l.length;
                    for (i = 0; i < u; ++i) if ("function" == typeof (s = (o = (r = l[i]).plugin)[t]) && ((a = [e].concat(n || [])).push(r.options), !1 === s.apply(o, a))) return !1;
                    return !0
                }, descriptors: function (e) {
                    var t = e.$plugins || (e.$plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var i = [], r = [], n = e && e.config || {}, o = n.options && n.options.plugins || {};
                    return this._plugins.concat(n.plugins || []).forEach(function (e) {
                        if (-1 === i.indexOf(e)) {
                            var t = e.id, n = o[t];
                            !1 !== n && (!0 === n && (n = s.clone(a.global.plugins[t])), i.push(e), r.push({
                                plugin: e,
                                options: n || {}
                            }))
                        }
                    }), t.descriptors = r, t.id = this._cacheId, r
                }, _invalidate: function (e) {
                    delete e.$plugins
                }
            }
        }, {25: 25, 45: 45}], 32: [function (e, t, n) {
            "use strict";
            var x = e(25), i = e(26), j = e(45), r = e(34);

            function S(e) {
                var t, n, i = [];
                for (t = 0, n = e.length; t < n; ++t) i.push(e[t].label);
                return i
            }

            function Y(e, t, n) {
                var i = e.getPixelForTick(t);
                return n && (i -= 0 === t ? (e.getPixelForTick(1) - i) / 2 : (i - e.getPixelForTick(t - 1)) / 2), i
            }

            x._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {display: !1, labelString: "", lineHeight: 1.2, padding: {top: 4, bottom: 4}},
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: r.formatters.values,
                    minor: {},
                    major: {}
                }
            }), t.exports = function (e) {
                function w(e, t, n) {
                    return j.isArray(t) ? j.longestText(e, n, t) : e.measureText(t).width
                }

                function k(e) {
                    var t = j.valueOrDefault, n = x.global, i = t(e.fontSize, n.defaultFontSize),
                        r = t(e.fontStyle, n.defaultFontStyle), o = t(e.fontFamily, n.defaultFontFamily);
                    return {size: i, style: r, family: o, font: j.fontString(i, r, o)}
                }

                function _(e) {
                    return j.options.toLineHeight(j.valueOrDefault(e.lineHeight, 1.2), j.valueOrDefault(e.fontSize, x.global.defaultFontSize))
                }

                e.Scale = i.extend({
                    getPadding: function () {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0
                        }
                    },
                    getTicks: function () {
                        return this._ticks
                    },
                    mergeTicksOptions: function () {
                        var e = this.options.ticks;
                        for (var t in !1 === e.minor && (e.minor = {display: !1}), !1 === e.major && (e.major = {display: !1}), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
                    },
                    beforeUpdate: function () {
                        j.callback(this.options.beforeUpdate, [this])
                    },
                    update: function (e, t, n) {
                        var i, r, o, a, s, l, u = this;
                        for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = j.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, n), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), s = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), o = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), u.ticks = o, i = 0, r = o.length; i < r; ++i) a = o[i], (l = s[i]) ? l.label = a : s.push(l = {
                            label: a,
                            major: !1
                        });
                        return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                    },
                    afterUpdate: function () {
                        j.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function () {
                        j.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function () {
                        var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                    },
                    afterSetDimensions: function () {
                        j.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function () {
                        j.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: j.noop,
                    afterDataLimits: function () {
                        j.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function () {
                        j.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: j.noop,
                    afterBuildTicks: function () {
                        j.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function () {
                        j.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function () {
                        var e = this.options.ticks;
                        this.ticks = this.ticks.map(e.userCallback || e.callback, this)
                    },
                    afterTickToLabelConversion: function () {
                        j.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function () {
                        j.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function () {
                        var e = this, t = e.ctx, n = e.options.ticks, i = S(e._ticks), r = k(n);
                        t.font = r.font;
                        var o = n.minRotation || 0;
                        if (i.length && e.options.display && e.isHorizontal()) for (var a, s = j.longestText(t, r.font, i, e.longestTextCache), l = s, u = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; l > u && o < n.maxRotation;) {
                            var c = j.toRadians(o);
                            if (a = Math.cos(c), Math.sin(c) * s > e.maxHeight) {
                                o--;
                                break
                            }
                            o++, l = a * s
                        }
                        e.labelRotation = o
                    },
                    afterCalculateTickRotation: function () {
                        j.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function () {
                        j.callback(this.options.beforeFit, [this])
                    },
                    fit: function () {
                        var e = this, t = e.minSize = {width: 0, height: 0}, n = S(e._ticks), i = e.options,
                            r = i.ticks, o = i.scaleLabel, a = i.gridLines, s = i.display, l = e.isHorizontal(),
                            u = k(r), c = i.gridLines.tickMarkLength;
                        if (t.width = l ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : s && a.drawTicks ? c : 0, t.height = l ? s && a.drawTicks ? c : 0 : e.maxHeight, o.display && s) {
                            var d = _(o) + j.options.toPadding(o.padding).height;
                            l ? t.height += d : t.width += d
                        }
                        if (r.display && s) {
                            var f = j.longestText(e.ctx, u.font, n, e.longestTextCache), h = j.numberOfLabelLines(n),
                                p = .5 * u.size, g = e.options.ticks.padding;
                            if (l) {
                                e.longestLabelWidth = f;
                                var m = j.toRadians(e.labelRotation), v = Math.cos(m),
                                    y = Math.sin(m) * f + u.size * h + p * (h - 1) + p;
                                t.height = Math.min(e.maxHeight, t.height + y + g), e.ctx.font = u.font;
                                var b = w(e.ctx, n[0], u.font), x = w(e.ctx, n[n.length - 1], u.font);
                                0 !== e.labelRotation ? (e.paddingLeft = "bottom" === i.position ? v * b + 3 : v * p + 3, e.paddingRight = "bottom" === i.position ? v * p + 3 : v * x + 3) : (e.paddingLeft = b / 2 + 3, e.paddingRight = x / 2 + 3)
                            } else r.mirror ? f = 0 : f += g + p, t.width = Math.min(e.maxWidth, t.width + f), e.paddingTop = u.size / 2, e.paddingBottom = u.size / 2
                        }
                        e.handleMargins(), e.width = t.width, e.height = t.height
                    },
                    handleMargins: function () {
                        var e = this;
                        e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
                    },
                    afterFit: function () {
                        j.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function () {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function () {
                        return this.options.fullWidth
                    },
                    getRightValue: function (e) {
                        if (j.isNullOrUndef(e)) return NaN;
                        if ("number" == typeof e && !isFinite(e)) return NaN;
                        if (e) if (this.isHorizontal()) {
                            if (void 0 !== e.x) return this.getRightValue(e.x)
                        } else if (void 0 !== e.y) return this.getRightValue(e.y);
                        return e
                    },
                    getLabelForIndex: j.noop,
                    getPixelForValue: j.noop,
                    getValueForPixel: j.noop,
                    getPixelForTick: function (e) {
                        var t = this, n = t.options.offset;
                        if (t.isHorizontal()) {
                            var i = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (n ? 0 : 1), 1),
                                r = i * e + t.paddingLeft;
                            n && (r += i / 2);
                            var o = t.left + Math.round(r);
                            return o += t.isFullWidth() ? t.margins.left : 0
                        }
                        var a = t.height - (t.paddingTop + t.paddingBottom);
                        return t.top + e * (a / (t._ticks.length - 1))
                    },
                    getPixelForDecimal: function (e) {
                        var t = this;
                        if (t.isHorizontal()) {
                            var n = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft,
                                i = t.left + Math.round(n);
                            return i += t.isFullWidth() ? t.margins.left : 0
                        }
                        return t.top + e * t.height
                    },
                    getBasePixel: function () {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function () {
                        var e = this.min, t = this.max;
                        return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
                    },
                    _autoSkip: function (e) {
                        var t, n, i, r, o = this, a = o.isHorizontal(), s = o.options.ticks.minor, l = e.length,
                            u = j.toRadians(o.labelRotation), c = Math.cos(u), d = o.longestLabelWidth * c, f = [];
                        for (s.maxTicksLimit && (r = s.maxTicksLimit), a && (t = !1, (d + s.autoSkipPadding) * l > o.width - (o.paddingLeft + o.paddingRight) && (t = 1 + Math.floor((d + s.autoSkipPadding) * l / (o.width - (o.paddingLeft + o.paddingRight)))), r && l > r && (t = Math.max(t, Math.floor(l / r)))), n = 0; n < l; n++) i = e[n], (t > 1 && n % t > 0 || n % t == 0 && n + t >= l) && n !== l - 1 && delete i.label, f.push(i);
                        return f
                    },
                    draw: function (C) {
                        var T = this, M = T.options;
                        if (M.display) {
                            var a = T.ctx, D = x.global, A = M.ticks.minor, e = M.ticks.major || A, P = M.gridLines,
                                t = M.scaleLabel, I = 0 !== T.labelRotation, E = T.isHorizontal(),
                                O = A.autoSkip ? T._autoSkip(T.getTicks()) : T.getTicks(),
                                s = j.valueOrDefault(A.fontColor, D.defaultFontColor), l = k(A),
                                u = j.valueOrDefault(e.fontColor, D.defaultFontColor), c = k(e),
                                L = P.drawTicks ? P.tickMarkLength : 0,
                                n = j.valueOrDefault(t.fontColor, D.defaultFontColor), i = k(t),
                                r = j.options.toPadding(t.padding), F = j.toRadians(T.labelRotation), N = [],
                                R = T.options.gridLines.lineWidth,
                                H = "right" === M.position ? T.right : T.right - R - L,
                                B = "right" === M.position ? T.right + L : T.right,
                                W = "bottom" === M.position ? T.top + R : T.bottom - L - R,
                                z = "bottom" === M.position ? T.top + R + L : T.bottom + R;
                            if (j.each(O, function (e, t) {
                                if (!j.isNullOrUndef(e.label)) {
                                    var n, i, r, o, a, s, l, u, c, d, f, h, p, g, m = e.label;
                                    t === T.zeroLineIndex && M.offset === P.offsetGridLines ? (n = P.zeroLineWidth, i = P.zeroLineColor, r = P.zeroLineBorderDash, o = P.zeroLineBorderDashOffset) : (n = j.valueAtIndexOrDefault(P.lineWidth, t), i = j.valueAtIndexOrDefault(P.color, t), r = j.valueOrDefault(P.borderDash, D.borderDash), o = j.valueOrDefault(P.borderDashOffset, D.borderDashOffset));
                                    var v = "middle", y = "middle", b = A.padding;
                                    if (E) {
                                        var x = L + b;
                                        "bottom" === M.position ? (y = I ? "middle" : "top", v = I ? "right" : "center", g = T.top + x) : (y = I ? "middle" : "bottom", v = I ? "left" : "center", g = T.bottom - x);
                                        var w = Y(T, t, P.offsetGridLines && O.length > 1);
                                        w < T.left && (i = "rgba(0,0,0,0)"), w += j.aliasPixel(n), p = T.getPixelForTick(t) + A.labelOffset, a = l = c = f = w, s = W, u = z, d = C.top, h = C.bottom + R
                                    } else {
                                        var k, _ = "left" === M.position;
                                        A.mirror ? (v = _ ? "left" : "right", k = b) : (v = _ ? "right" : "left", k = L + b), p = _ ? T.right - k : T.left + k;
                                        var S = Y(T, t, P.offsetGridLines && O.length > 1);
                                        S < T.top && (i = "rgba(0,0,0,0)"), S += j.aliasPixel(n), g = T.getPixelForTick(t) + A.labelOffset, a = H, l = B, c = C.left, f = C.right + R, s = u = d = h = S
                                    }
                                    N.push({
                                        tx1: a,
                                        ty1: s,
                                        tx2: l,
                                        ty2: u,
                                        x1: c,
                                        y1: d,
                                        x2: f,
                                        y2: h,
                                        labelX: p,
                                        labelY: g,
                                        glWidth: n,
                                        glColor: i,
                                        glBorderDash: r,
                                        glBorderDashOffset: o,
                                        rotation: -1 * F,
                                        label: m,
                                        major: e.major,
                                        textBaseline: y,
                                        textAlign: v
                                    })
                                }
                            }), j.each(N, function (e) {
                                if (P.display && (a.save(), a.lineWidth = e.glWidth, a.strokeStyle = e.glColor, a.setLineDash && (a.setLineDash(e.glBorderDash), a.lineDashOffset = e.glBorderDashOffset), a.beginPath(), P.drawTicks && (a.moveTo(e.tx1, e.ty1), a.lineTo(e.tx2, e.ty2)), P.drawOnChartArea && (a.moveTo(e.x1, e.y1), a.lineTo(e.x2, e.y2)), a.stroke(), a.restore()), A.display) {
                                    a.save(), a.translate(e.labelX, e.labelY), a.rotate(e.rotation), a.font = e.major ? c.font : l.font, a.fillStyle = e.major ? u : s, a.textBaseline = e.textBaseline, a.textAlign = e.textAlign;
                                    var t = e.label;
                                    if (j.isArray(t)) for (var n = t.length, i = 1.5 * l.size, r = T.isHorizontal() ? 0 : -i * (n - 1) / 2, o = 0; o < n; ++o) a.fillText("" + t[o], 0, r), r += i; else a.fillText(t, 0, 0);
                                    a.restore()
                                }
                            }), t.display) {
                                var o, d, f = 0, h = _(t) / 2;
                                if (E) o = T.left + (T.right - T.left) / 2, d = "bottom" === M.position ? T.bottom - h - r.bottom : T.top + h + r.top; else {
                                    var p = "left" === M.position;
                                    o = p ? T.left + h + r.top : T.right - h - r.top, d = T.top + (T.bottom - T.top) / 2, f = p ? -.5 * Math.PI : .5 * Math.PI
                                }
                                a.save(), a.translate(o, d), a.rotate(f), a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = n, a.font = i.font, a.fillText(t.labelString, 0, 0), a.restore()
                            }
                            if (P.drawBorder) {
                                a.lineWidth = j.valueAtIndexOrDefault(P.lineWidth, 0), a.strokeStyle = j.valueAtIndexOrDefault(P.color, 0);
                                var g = T.left, m = T.right + R, v = T.top, y = T.bottom + R,
                                    b = j.aliasPixel(a.lineWidth);
                                E ? (v = y = "top" === M.position ? T.bottom : T.top, v += b, y += b) : (g = m = "left" === M.position ? T.right : T.left, g += b, m += b), a.beginPath(), a.moveTo(g, v), a.lineTo(m, y), a.stroke()
                            }
                        }
                    }
                })
            }
        }, {25: 25, 26: 26, 34: 34, 45: 45}], 33: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(45), o = e(30);
            t.exports = function (e) {
                e.scaleService = {
                    constructors: {}, defaults: {}, registerScaleType: function (e, t, n) {
                        this.constructors[e] = t, this.defaults[e] = r.clone(n)
                    }, getScaleConstructor: function (e) {
                        return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
                    }, getScaleDefaults: function (e) {
                        return this.defaults.hasOwnProperty(e) ? r.merge({}, [i.scale, this.defaults[e]]) : {}
                    }, updateScaleDefaults: function (e, t) {
                        this.defaults.hasOwnProperty(e) && (this.defaults[e] = r.extend(this.defaults[e], t))
                    }, addScalesToLayout: function (t) {
                        r.each(t.scales, function (e) {
                            e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e)
                        })
                    }
                }
            }
        }, {25: 25, 30: 30, 45: 45}], 34: [function (e, t, n) {
            "use strict";
            var s = e(45);
            t.exports = {
                formatters: {
                    values: function (e) {
                        return s.isArray(e) ? e : "" + e
                    }, linear: function (e, t, n) {
                        var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                        Math.abs(i) > 1 && e !== Math.floor(e) && (i = e - Math.floor(e));
                        var r = s.log10(Math.abs(i)), o = "";
                        if (0 !== e) {
                            var a = -1 * Math.floor(r);
                            a = Math.max(Math.min(a, 20), 0), o = e.toFixed(a)
                        } else o = "0";
                        return o
                    }, logarithmic: function (e, t, n) {
                        var i = e / Math.pow(10, Math.floor(s.log10(e)));
                        return 0 === e ? "0" : 1 === i || 2 === i || 5 === i || 0 === t || t === n.length - 1 ? e.toExponential() : ""
                    }
                }
            }
        }, {45: 45}], 35: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(26), N = e(45);
            i._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: N.noop,
                        title: function (e, t) {
                            var n = "", i = t.labels, r = i ? i.length : 0;
                            if (e.length > 0) {
                                var o = e[0];
                                o.xLabel ? n = o.xLabel : r > 0 && o.index < r && (n = i[o.index])
                            }
                            return n
                        },
                        afterTitle: N.noop,
                        beforeBody: N.noop,
                        beforeLabel: N.noop,
                        label: function (e, t) {
                            var n = t.datasets[e.datasetIndex].label || "";
                            return n && (n += ": "), n += e.yLabel
                        },
                        labelColor: function (e, t) {
                            var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                            return {borderColor: n.borderColor, backgroundColor: n.backgroundColor}
                        },
                        labelTextColor: function () {
                            return this._options.bodyFontColor
                        },
                        afterLabel: N.noop,
                        afterBody: N.noop,
                        beforeFooter: N.noop,
                        footer: N.noop,
                        afterFooter: N.noop
                    }
                }
            }), t.exports = function (L) {
                function f(e, t) {
                    var n = N.color(e);
                    return n.alpha(t * n.alpha()).rgbaString()
                }

                function a(e, t) {
                    return t && (N.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
                }

                function F(e) {
                    var t = i.global, n = N.valueOrDefault;
                    return {
                        xPadding: e.xPadding,
                        yPadding: e.yPadding,
                        xAlign: e.xAlign,
                        yAlign: e.yAlign,
                        bodyFontColor: e.bodyFontColor,
                        _bodyFontFamily: n(e.bodyFontFamily, t.defaultFontFamily),
                        _bodyFontStyle: n(e.bodyFontStyle, t.defaultFontStyle),
                        _bodyAlign: e.bodyAlign,
                        bodyFontSize: n(e.bodyFontSize, t.defaultFontSize),
                        bodySpacing: e.bodySpacing,
                        titleFontColor: e.titleFontColor,
                        _titleFontFamily: n(e.titleFontFamily, t.defaultFontFamily),
                        _titleFontStyle: n(e.titleFontStyle, t.defaultFontStyle),
                        titleFontSize: n(e.titleFontSize, t.defaultFontSize),
                        _titleAlign: e.titleAlign,
                        titleSpacing: e.titleSpacing,
                        titleMarginBottom: e.titleMarginBottom,
                        footerFontColor: e.footerFontColor,
                        _footerFontFamily: n(e.footerFontFamily, t.defaultFontFamily),
                        _footerFontStyle: n(e.footerFontStyle, t.defaultFontStyle),
                        footerFontSize: n(e.footerFontSize, t.defaultFontSize),
                        _footerAlign: e.footerAlign,
                        footerSpacing: e.footerSpacing,
                        footerMarginTop: e.footerMarginTop,
                        caretSize: e.caretSize,
                        cornerRadius: e.cornerRadius,
                        backgroundColor: e.backgroundColor,
                        opacity: 0,
                        legendColorBackground: e.multiKeyBackground,
                        displayColors: e.displayColors,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth
                    }
                }

                L.Tooltip = r.extend({
                    initialize: function () {
                        this._model = F(this._options), this._lastActive = []
                    }, getTitle: function () {
                        var e = this._options.callbacks, t = e.beforeTitle.apply(this, arguments),
                            n = e.title.apply(this, arguments), i = e.afterTitle.apply(this, arguments), r = [];
                        return r = a(r = a(r = a(r, t), n), i)
                    }, getBeforeBody: function () {
                        var e = this._options.callbacks.beforeBody.apply(this, arguments);
                        return N.isArray(e) ? e : void 0 !== e ? [e] : []
                    }, getBody: function (e, n) {
                        var i = this, r = i._options.callbacks, o = [];
                        return N.each(e, function (e) {
                            var t = {before: [], lines: [], after: []};
                            a(t.before, r.beforeLabel.call(i, e, n)), a(t.lines, r.label.call(i, e, n)), a(t.after, r.afterLabel.call(i, e, n)), o.push(t)
                        }), o
                    }, getAfterBody: function () {
                        var e = this._options.callbacks.afterBody.apply(this, arguments);
                        return N.isArray(e) ? e : void 0 !== e ? [e] : []
                    }, getFooter: function () {
                        var e = this._options.callbacks, t = e.beforeFooter.apply(this, arguments),
                            n = e.footer.apply(this, arguments), i = e.afterFooter.apply(this, arguments), r = [];
                        return r = a(r = a(r = a(r, t), n), i)
                    }, update: function (e) {
                        var t, n, i, r, o, a, s, l, u, c, d, f, h, p, g, m, v, y, b, x, w = this, k = w._options,
                            _ = w._model, S = w._model = F(k), C = w._active, T = w._data,
                            M = {xAlign: _.xAlign, yAlign: _.yAlign}, D = {x: _.x, y: _.y},
                            A = {width: _.width, height: _.height}, P = {x: _.caretX, y: _.caretY};
                        if (C.length) {
                            S.opacity = 1;
                            var I = [], E = [];
                            P = L.Tooltip.positioners[k.position].call(w, C, w._eventPosition);
                            var O = [];
                            for (t = 0, n = C.length; t < n; ++t) O.push((m = C[t], v = void 0, y = void 0, void 0, void 0, v = m._xScale, y = m._yScale || m._scale, b = m._index, x = m._datasetIndex, {
                                xLabel: v ? v.getLabelForIndex(b, x) : "",
                                yLabel: y ? y.getLabelForIndex(b, x) : "",
                                index: b,
                                datasetIndex: x,
                                x: m._model.x,
                                y: m._model.y
                            }));
                            k.filter && (O = O.filter(function (e) {
                                return k.filter(e, T)
                            })), k.itemSort && (O = O.sort(function (e, t) {
                                return k.itemSort(e, t, T)
                            })), N.each(O, function (e) {
                                I.push(k.callbacks.labelColor.call(w, e, w._chart)), E.push(k.callbacks.labelTextColor.call(w, e, w._chart))
                            }), S.title = w.getTitle(O, T), S.beforeBody = w.getBeforeBody(O, T), S.body = w.getBody(O, T), S.afterBody = w.getAfterBody(O, T), S.footer = w.getFooter(O, T), S.x = Math.round(P.x), S.y = Math.round(P.y), S.caretPadding = k.caretPadding, S.labelColors = I, S.labelTextColors = E, S.dataPoints = O, M = function (e, t) {
                                var n, i, r, o, a, s = e._model, l = e._chart, u = e._chart.chartArea, c = "center",
                                    d = "center";
                                s.y < t.height ? d = "top" : s.y > l.height - t.height && (d = "bottom");
                                var f = (u.left + u.right) / 2, h = (u.top + u.bottom) / 2;
                                "center" === d ? (n = function (e) {
                                    return e <= f
                                }, i = function (e) {
                                    return e > f
                                }) : (n = function (e) {
                                    return e <= t.width / 2
                                }, i = function (e) {
                                    return e >= l.width - t.width / 2
                                }), r = function (e) {
                                    return e + t.width + s.caretSize + s.caretPadding > l.width
                                }, o = function (e) {
                                    return e - t.width - s.caretSize - s.caretPadding < 0
                                }, a = function (e) {
                                    return e <= h ? "top" : "bottom"
                                }, n(s.x) ? (c = "left", r(s.x) && (c = "center", d = a(s.y))) : i(s.x) && (c = "right", o(s.x) && (c = "center", d = a(s.y)));
                                var p = e._options;
                                return {xAlign: p.xAlign ? p.xAlign : c, yAlign: p.yAlign ? p.yAlign : d}
                            }(this, A = function (e, t) {
                                var n = e._chart.ctx, i = 2 * t.yPadding, r = 0, o = t.body,
                                    a = o.reduce(function (e, t) {
                                        return e + t.before.length + t.lines.length + t.after.length
                                    }, 0);
                                a += t.beforeBody.length + t.afterBody.length;
                                var s = t.title.length, l = t.footer.length, u = t.titleFontSize, c = t.bodyFontSize,
                                    d = t.footerFontSize;
                                i += s * u, i += s ? (s - 1) * t.titleSpacing : 0, i += s ? t.titleMarginBottom : 0, i += a * c, i += a ? (a - 1) * t.bodySpacing : 0, i += l ? t.footerMarginTop : 0, i += l * d, i += l ? (l - 1) * t.footerSpacing : 0;
                                var f = 0, h = function (e) {
                                    r = Math.max(r, n.measureText(e).width + f)
                                };
                                return n.font = N.fontString(u, t._titleFontStyle, t._titleFontFamily), N.each(t.title, h), n.font = N.fontString(c, t._bodyFontStyle, t._bodyFontFamily), N.each(t.beforeBody.concat(t.afterBody), h), f = t.displayColors ? c + 2 : 0, N.each(o, function (e) {
                                    N.each(e.before, h), N.each(e.lines, h), N.each(e.after, h)
                                }), f = 0, n.font = N.fontString(d, t._footerFontStyle, t._footerFontFamily), N.each(t.footer, h), {
                                    width: r += 2 * t.xPadding,
                                    height: i
                                }
                            }(this, S)), i = S, r = A, o = M, a = w._chart, s = i.x, l = i.y, u = i.caretSize, c = i.caretPadding, d = i.cornerRadius, f = o.xAlign, h = o.yAlign, p = u + c, g = d + c, "right" === f ? s -= r.width : "center" === f && ((s -= r.width / 2) + r.width > a.width && (s = a.width - r.width), s < 0 && (s = 0)), "top" === h ? l += p : l -= "bottom" === h ? r.height + p : r.height / 2, "center" === h ? "left" === f ? s += p : "right" === f && (s -= p) : "left" === f ? s -= g : "right" === f && (s += g), D = {
                                x: s,
                                y: l
                            }
                        } else S.opacity = 0;
                        return S.xAlign = M.xAlign, S.yAlign = M.yAlign, S.x = D.x, S.y = D.y, S.width = A.width, S.height = A.height, S.caretX = P.x, S.caretY = P.y, w._model = S, e && k.custom && k.custom.call(w, S), w
                    }, drawCaret: function (e, t) {
                        var n = this._chart.ctx, i = this._view, r = this.getCaretPosition(e, t, i);
                        n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
                    }, getCaretPosition: function (e, t, n) {
                        var i, r, o, a, s, l, u = n.caretSize, c = n.cornerRadius, d = n.xAlign, f = n.yAlign, h = e.x,
                            p = e.y, g = t.width, m = t.height;
                        if ("center" === f) s = p + m / 2, "left" === d ? (r = (i = h) - u, o = i, a = s + u, l = s - u) : (r = (i = h + g) + u, o = i, a = s - u, l = s + u); else if ("left" === d ? (i = (r = h + c + u) - u, o = r + u) : "right" === d ? (i = (r = h + g - c - u) - u, o = r + u) : (i = (r = n.caretX) - u, o = r + u), "top" === f) s = (a = p) - u, l = a; else {
                            s = (a = p + m) + u, l = a;
                            var v = o;
                            o = i, i = v
                        }
                        return {x1: i, x2: r, x3: o, y1: a, y2: s, y3: l}
                    }, drawTitle: function (e, t, n, i) {
                        var r = t.title;
                        if (r.length) {
                            n.textAlign = t._titleAlign, n.textBaseline = "top";
                            var o, a, s = t.titleFontSize, l = t.titleSpacing;
                            for (n.fillStyle = f(t.titleFontColor, i), n.font = N.fontString(s, t._titleFontStyle, t._titleFontFamily), o = 0, a = r.length; o < a; ++o) n.fillText(r[o], e.x, e.y), e.y += s + l, o + 1 === r.length && (e.y += t.titleMarginBottom - l)
                        }
                    }, drawBody: function (i, r, o, a) {
                        var s = r.bodyFontSize, t = r.bodySpacing, e = r.body;
                        o.textAlign = r._bodyAlign, o.textBaseline = "top", o.font = N.fontString(s, r._bodyFontStyle, r._bodyFontFamily);
                        var n = 0, l = function (e) {
                            o.fillText(e, i.x + n, i.y), i.y += s + t
                        };
                        o.fillStyle = f(r.bodyFontColor, a), N.each(r.beforeBody, l);
                        var u = r.displayColors;
                        n = u ? s + 2 : 0, N.each(e, function (e, t) {
                            var n = f(r.labelTextColors[t], a);
                            o.fillStyle = n, N.each(e.before, l), N.each(e.lines, function (e) {
                                u && (o.fillStyle = f(r.legendColorBackground, a), o.fillRect(i.x, i.y, s, s), o.lineWidth = 1, o.strokeStyle = f(r.labelColors[t].borderColor, a), o.strokeRect(i.x, i.y, s, s), o.fillStyle = f(r.labelColors[t].backgroundColor, a), o.fillRect(i.x + 1, i.y + 1, s - 2, s - 2), o.fillStyle = n), l(e)
                            }), N.each(e.after, l)
                        }), n = 0, N.each(r.afterBody, l), i.y -= t
                    }, drawFooter: function (t, n, i, e) {
                        var r = n.footer;
                        r.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = f(n.footerFontColor, e), i.font = N.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), N.each(r, function (e) {
                            i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing
                        }))
                    }, drawBackground: function (e, t, n, i, r) {
                        n.fillStyle = f(t.backgroundColor, r), n.strokeStyle = f(t.borderColor, r), n.lineWidth = t.borderWidth;
                        var o = t.xAlign, a = t.yAlign, s = e.x, l = e.y, u = i.width, c = i.height, d = t.cornerRadius;
                        n.beginPath(), n.moveTo(s + d, l), "top" === a && this.drawCaret(e, i), n.lineTo(s + u - d, l), n.quadraticCurveTo(s + u, l, s + u, l + d), "center" === a && "right" === o && this.drawCaret(e, i), n.lineTo(s + u, l + c - d), n.quadraticCurveTo(s + u, l + c, s + u - d, l + c), "bottom" === a && this.drawCaret(e, i), n.lineTo(s + d, l + c), n.quadraticCurveTo(s, l + c, s, l + c - d), "center" === a && "left" === o && this.drawCaret(e, i), n.lineTo(s, l + d), n.quadraticCurveTo(s, l, s + d, l), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke()
                    }, draw: function () {
                        var e = this._chart.ctx, t = this._view;
                        if (0 !== t.opacity) {
                            var n = {width: t.width, height: t.height}, i = {x: t.x, y: t.y},
                                r = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                                o = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                            this._options.enabled && o && (this.drawBackground(i, t, e, n, r), i.x += t.xPadding, i.y += t.yPadding, this.drawTitle(i, t, e, r), this.drawBody(i, t, e, r), this.drawFooter(i, t, e, r))
                        }
                    }, handleEvent: function (e) {
                        var t, n = this, i = n._options;
                        return n._lastActive = n._lastActive || [], "mouseout" === e.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(e, i.mode, i), (t = !N.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                            x: e.x,
                            y: e.y
                        }, n.update(!0), n.pivot())), t
                    }
                }), L.Tooltip.positioners = {
                    average: function (e) {
                        if (!e.length) return !1;
                        var t, n, i = 0, r = 0, o = 0;
                        for (t = 0, n = e.length; t < n; ++t) {
                            var a = e[t];
                            if (a && a.hasValue()) {
                                var s = a.tooltipPosition();
                                i += s.x, r += s.y, ++o
                            }
                        }
                        return {x: Math.round(i / o), y: Math.round(r / o)}
                    }, nearest: function (e, t) {
                        var n, i, r, o = t.x, a = t.y, s = Number.POSITIVE_INFINITY;
                        for (n = 0, i = e.length; n < i; ++n) {
                            var l = e[n];
                            if (l && l.hasValue()) {
                                var u = l.getCenterPoint(), c = N.distanceBetweenPoints(t, u);
                                c < s && (s = c, r = l)
                            }
                        }
                        if (r) {
                            var d = r.tooltipPosition();
                            o = d.x, a = d.y
                        }
                        return {x: o, y: a}
                    }
                }
            }
        }, {25: 25, 26: 26, 45: 45}], 36: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(26), c = e(45);
            i._set("global", {
                elements: {
                    arc: {
                        backgroundColor: i.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), t.exports = r.extend({
                inLabelRange: function (e) {
                    var t = this._view;
                    return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
                }, inRange: function (e, t) {
                    var n = this._view;
                    if (n) {
                        for (var i = c.getAngleFromPoint(n, {
                            x: e,
                            y: t
                        }), r = i.angle, o = i.distance, a = n.startAngle, s = n.endAngle; s < a;) s += 2 * Math.PI;
                        for (; r > s;) r -= 2 * Math.PI;
                        for (; r < a;) r += 2 * Math.PI;
                        var l = r >= a && r <= s, u = o >= n.innerRadius && o <= n.outerRadius;
                        return l && u
                    }
                    return !1
                }, getCenterPoint: function () {
                    var e = this._view, t = (e.startAngle + e.endAngle) / 2, n = (e.innerRadius + e.outerRadius) / 2;
                    return {x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n}
                }, getArea: function () {
                    var e = this._view;
                    return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
                }, tooltipPosition: function () {
                    var e = this._view, t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                        n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                    return {x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n}
                }, draw: function () {
                    var e = this._chart.ctx, t = this._view, n = t.startAngle, i = t.endAngle;
                    e.beginPath(), e.arc(t.x, t.y, t.outerRadius, n, i), e.arc(t.x, t.y, t.innerRadius, i, n, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 37: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(26), c = e(45), d = i.global;
            i._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: d.defaultColor,
                        borderWidth: 3,
                        borderColor: d.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), t.exports = r.extend({
                draw: function () {
                    var e, t, n, i, r = this._view, o = this._chart.ctx, a = r.spanGaps, s = this._children.slice(),
                        l = d.elements.line, u = -1;
                    for (this._loop && s.length && s.push(s[0]), o.save(), o.lineCap = r.borderCapStyle || l.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || l.borderDash), o.lineDashOffset = r.borderDashOffset || l.borderDashOffset, o.lineJoin = r.borderJoinStyle || l.borderJoinStyle, o.lineWidth = r.borderWidth || l.borderWidth, o.strokeStyle = r.borderColor || d.defaultColor, o.beginPath(), u = -1, e = 0; e < s.length; ++e) t = s[e], n = c.previousItem(s, e), i = t._view, 0 === e ? i.skip || (o.moveTo(i.x, i.y), u = e) : (n = -1 === u ? n : s[u], i.skip || (u !== e - 1 && !a || -1 === u ? o.moveTo(i.x, i.y) : c.canvas.lineTo(o, n._view, t._view), u = e));
                    o.stroke(), o.restore()
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 38: [function (e, t, n) {
            "use strict";
            var c = e(25), i = e(26), d = e(45), f = c.global.defaultColor;

            function r(e) {
                var t = this._view;
                return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
            }

            c._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: f,
                        borderColor: f,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), t.exports = i.extend({
                inRange: function (e, t) {
                    var n = this._view;
                    return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                }, inLabelRange: r, inXRange: r, inYRange: function (e) {
                    var t = this._view;
                    return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
                }, getCenterPoint: function () {
                    var e = this._view;
                    return {x: e.x, y: e.y}
                }, getArea: function () {
                    return Math.PI * Math.pow(this._view.radius, 2)
                }, tooltipPosition: function () {
                    var e = this._view;
                    return {x: e.x, y: e.y, padding: e.radius + e.borderWidth}
                }, draw: function (e) {
                    var t = this._view, n = this._model, i = this._chart.ctx, r = t.pointStyle, o = t.radius, a = t.x,
                        s = t.y, l = d.color, u = 0;
                    t.skip || (i.strokeStyle = t.borderColor || f, i.lineWidth = d.valueOrDefault(t.borderWidth, c.global.elements.point.borderWidth), i.fillStyle = t.backgroundColor || f, void 0 !== e && (n.x < e.left || 1.01 * e.right < n.x || n.y < e.top || 1.01 * e.bottom < n.y) && (n.x < e.left ? u = (a - n.x) / (e.left - n.x) : 1.01 * e.right < n.x ? u = (n.x - a) / (n.x - e.right) : n.y < e.top ? u = (s - n.y) / (e.top - n.y) : 1.01 * e.bottom < n.y && (u = (n.y - s) / (n.y - e.bottom)), u = Math.round(100 * u) / 100, i.strokeStyle = l(i.strokeStyle).alpha(u).rgbString(), i.fillStyle = l(i.fillStyle).alpha(u).rgbString()), d.canvas.drawPoint(i, r, o, a, s))
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 39: [function (e, t, n) {
            "use strict";
            var i = e(25), r = e(26);

            function l(e) {
                return void 0 !== e._view.width
            }

            function o(e) {
                var t, n, i, r, o = e._view;
                if (l(e)) {
                    var a = o.width / 2;
                    t = o.x - a, n = o.x + a, i = Math.min(o.y, o.base), r = Math.max(o.y, o.base)
                } else {
                    var s = o.height / 2;
                    t = Math.min(o.x, o.base), n = Math.max(o.x, o.base), i = o.y - s, r = o.y + s
                }
                return {left: t, top: i, right: n, bottom: r}
            }

            i._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: i.global.defaultColor,
                        borderColor: i.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), t.exports = r.extend({
                draw: function () {
                    var e, t, n, i, r, o, a, s = this._chart.ctx, l = this._view, u = l.borderWidth;
                    if (l.horizontal ? (e = l.base, t = l.x, n = l.y - l.height / 2, i = l.y + l.height / 2, r = t > e ? 1 : -1, o = 1, a = l.borderSkipped || "left") : (e = l.x - l.width / 2, t = l.x + l.width / 2, n = l.y, r = 1, o = (i = l.base) > n ? 1 : -1, a = l.borderSkipped || "bottom"), u) {
                        var c = Math.min(Math.abs(e - t), Math.abs(n - i)), d = (u = u > c ? c : u) / 2,
                            f = e + ("left" !== a ? d * r : 0), h = t + ("right" !== a ? -d * r : 0),
                            p = n + ("top" !== a ? d * o : 0), g = i + ("bottom" !== a ? -d * o : 0);
                        f !== h && (n = p, i = g), p !== g && (e = f, t = h)
                    }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                    var m = [[e, i], [e, n], [t, n], [t, i]], v = ["bottom", "left", "top", "right"].indexOf(a, 0);

                    function y(e) {
                        return m[(v + e) % 4]
                    }

                    -1 === v && (v = 0);
                    var b = y(0);
                    s.moveTo(b[0], b[1]);
                    for (var x = 1; x < 4; x++) b = y(x), s.lineTo(b[0], b[1]);
                    s.fill(), u && s.stroke()
                }, height: function () {
                    var e = this._view;
                    return e.base - e.y
                }, inRange: function (e, t) {
                    var n = !1;
                    if (this._view) {
                        var i = o(this);
                        n = e >= i.left && e <= i.right && t >= i.top && t <= i.bottom
                    }
                    return n
                }, inLabelRange: function (e, t) {
                    if (!this._view) return !1;
                    var n = o(this);
                    return l(this) ? e >= n.left && e <= n.right : t >= n.top && t <= n.bottom
                }, inXRange: function (e) {
                    var t = o(this);
                    return e >= t.left && e <= t.right
                }, inYRange: function (e) {
                    var t = o(this);
                    return e >= t.top && e <= t.bottom
                }, getCenterPoint: function () {
                    var e, t, n = this._view;
                    return l(this) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), {x: e, y: t}
                }, getArea: function () {
                    var e = this._view;
                    return e.width * Math.abs(e.y - e.base)
                }, tooltipPosition: function () {
                    var e = this._view;
                    return {x: e.x, y: e.y}
                }
            })
        }, {25: 25, 26: 26}], 40: [function (e, t, n) {
            "use strict";
            t.exports = {}, t.exports.Arc = e(36), t.exports.Line = e(37), t.exports.Point = e(38), t.exports.Rectangle = e(39)
        }, {36: 36, 37: 37, 38: 38, 39: 39}], 41: [function (e, t, n) {
            "use strict";
            var i = e(42);
            n = t.exports = {
                clear: function (e) {
                    e.ctx.clearRect(0, 0, e.width, e.height)
                }, roundedRect: function (e, t, n, i, r, o) {
                    if (o) {
                        var a = Math.min(o, i / 2), s = Math.min(o, r / 2);
                        e.moveTo(t + a, n), e.lineTo(t + i - a, n), e.quadraticCurveTo(t + i, n, t + i, n + s), e.lineTo(t + i, n + r - s), e.quadraticCurveTo(t + i, n + r, t + i - a, n + r), e.lineTo(t + a, n + r), e.quadraticCurveTo(t, n + r, t, n + r - s), e.lineTo(t, n + s), e.quadraticCurveTo(t, n, t + a, n)
                    } else e.rect(t, n, i, r)
                }, drawPoint: function (e, t, n, i, r) {
                    var o, a, s, l, u, c;
                    if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (o = t.toString()) && "[object HTMLCanvasElement]" !== o) {
                        if (!(isNaN(n) || n <= 0)) {
                            switch (t) {
                                default:
                                    e.beginPath(), e.arc(i, r, n, 0, 2 * Math.PI), e.closePath(), e.fill();
                                    break;
                                case"triangle":
                                    e.beginPath(), u = (a = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2, e.moveTo(i - a / 2, r + u / 3), e.lineTo(i + a / 2, r + u / 3), e.lineTo(i, r - 2 * u / 3), e.closePath(), e.fill();
                                    break;
                                case"rect":
                                    c = 1 / Math.SQRT2 * n, e.beginPath(), e.fillRect(i - c, r - c, 2 * c, 2 * c), e.strokeRect(i - c, r - c, 2 * c, 2 * c);
                                    break;
                                case"rectRounded":
                                    var d = n / Math.SQRT2, f = i - d, h = r - d, p = Math.SQRT2 * n;
                                    e.beginPath(), this.roundedRect(e, f, h, p, p, n / 2), e.closePath(), e.fill();
                                    break;
                                case"rectRot":
                                    c = 1 / Math.SQRT2 * n, e.beginPath(), e.moveTo(i - c, r), e.lineTo(i, r + c), e.lineTo(i + c, r), e.lineTo(i, r - c), e.closePath(), e.fill();
                                    break;
                                case"cross":
                                    e.beginPath(), e.moveTo(i, r + n), e.lineTo(i, r - n), e.moveTo(i - n, r), e.lineTo(i + n, r), e.closePath();
                                    break;
                                case"crossRot":
                                    e.beginPath(), s = Math.cos(Math.PI / 4) * n, l = Math.sin(Math.PI / 4) * n, e.moveTo(i - s, r - l), e.lineTo(i + s, r + l), e.moveTo(i - s, r + l), e.lineTo(i + s, r - l), e.closePath();
                                    break;
                                case"star":
                                    e.beginPath(), e.moveTo(i, r + n), e.lineTo(i, r - n), e.moveTo(i - n, r), e.lineTo(i + n, r), s = Math.cos(Math.PI / 4) * n, l = Math.sin(Math.PI / 4) * n, e.moveTo(i - s, r - l), e.lineTo(i + s, r + l), e.moveTo(i - s, r + l), e.lineTo(i + s, r - l), e.closePath();
                                    break;
                                case"line":
                                    e.beginPath(), e.moveTo(i - n, r), e.lineTo(i + n, r), e.closePath();
                                    break;
                                case"dash":
                                    e.beginPath(), e.moveTo(i, r), e.lineTo(i + n, r), e.closePath()
                            }
                            e.stroke()
                        }
                    } else e.drawImage(t, i - t.width / 2, r - t.height / 2, t.width, t.height)
                }, clipArea: function (e, t) {
                    e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
                }, unclipArea: function (e) {
                    e.restore()
                }, lineTo: function (e, t, n, i) {
                    if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y), void e.lineTo(n.x, n.y);
                    n.tension ? e.bezierCurveTo(i ? t.controlPointPreviousX : t.controlPointNextX, i ? t.controlPointPreviousY : t.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
                }
            };
            i.clear = n.clear, i.drawRoundedRectangle = function (e) {
                e.beginPath(), n.roundedRect.apply(n, arguments), e.closePath()
            }
        }, {42: 42}], 42: [function (e, t, n) {
            "use strict";
            var i, c = {
                noop: function () {
                }, uid: (i = 0, function () {
                    return i++
                }), isNullOrUndef: function (e) {
                    return null == e
                }, isArray: Array.isArray ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, isObject: function (e) {
                    return null !== e && "[object Object]" === Object.prototype.toString.call(e)
                }, valueOrDefault: function (e, t) {
                    return void 0 === e ? t : e
                }, valueAtIndexOrDefault: function (e, t, n) {
                    return c.valueOrDefault(c.isArray(e) ? e[t] : e, n)
                }, callback: function (e, t, n) {
                    if (e && "function" == typeof e.call) return e.apply(n, t)
                }, each: function (e, t, n, i) {
                    var r, o, a;
                    if (c.isArray(e)) if (o = e.length, i) for (r = o - 1; r >= 0; r--) t.call(n, e[r], r); else for (r = 0; r < o; r++) t.call(n, e[r], r); else if (c.isObject(e)) for (o = (a = Object.keys(e)).length, r = 0; r < o; r++) t.call(n, e[a[r]], a[r])
                }, arrayEquals: function (e, t) {
                    var n, i, r, o;
                    if (!e || !t || e.length !== t.length) return !1;
                    for (n = 0, i = e.length; n < i; ++n) if (r = e[n], o = t[n], r instanceof Array && o instanceof Array) {
                        if (!c.arrayEquals(r, o)) return !1
                    } else if (r !== o) return !1;
                    return !0
                }, clone: function (e) {
                    if (c.isArray(e)) return e.map(c.clone);
                    if (c.isObject(e)) {
                        for (var t = {}, n = Object.keys(e), i = n.length, r = 0; r < i; ++r) t[n[r]] = c.clone(e[n[r]]);
                        return t
                    }
                    return e
                }, _merger: function (e, t, n, i) {
                    var r = t[e], o = n[e];
                    c.isObject(r) && c.isObject(o) ? c.merge(r, o, i) : t[e] = c.clone(o)
                }, _mergerIf: function (e, t, n) {
                    var i = t[e], r = n[e];
                    c.isObject(i) && c.isObject(r) ? c.mergeIf(i, r) : t.hasOwnProperty(e) || (t[e] = c.clone(r))
                }, merge: function (e, t, n) {
                    var i, r, o, a, s, l = c.isArray(t) ? t : [t], u = l.length;
                    if (!c.isObject(e)) return e;
                    for (i = (n = n || {}).merger || c._merger, r = 0; r < u; ++r) if (t = l[r], c.isObject(t)) for (s = 0, a = (o = Object.keys(t)).length; s < a; ++s) i(o[s], e, t, n);
                    return e
                }, mergeIf: function (e, t) {
                    return c.merge(e, t, {merger: c._mergerIf})
                }, extend: function (n) {
                    for (var e = function (e, t) {
                        n[t] = e
                    }, t = 1, i = arguments.length; t < i; ++t) c.each(arguments[t], e);
                    return n
                }, inherits: function (e) {
                    var t = this, n = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                        return t.apply(this, arguments)
                    }, i = function () {
                        this.constructor = n
                    };
                    return i.prototype = t.prototype, n.prototype = new i, n.extend = c.inherits, e && c.extend(n.prototype, e), n.__super__ = t.prototype, n
                }
            };
            t.exports = c, c.callCallback = c.callback, c.indexOf = function (e, t, n) {
                return Array.prototype.indexOf.call(e, t, n)
            }, c.getValueOrDefault = c.valueOrDefault, c.getValueAtIndexOrDefault = c.valueAtIndexOrDefault
        }, {}], 43: [function (e, t, n) {
            "use strict";
            var i = e(42), r = {
                linear: function (e) {
                    return e
                }, easeInQuad: function (e) {
                    return e * e
                }, easeOutQuad: function (e) {
                    return -e * (e - 2)
                }, easeInOutQuad: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }, easeInCubic: function (e) {
                    return e * e * e
                }, easeOutCubic: function (e) {
                    return (e -= 1) * e * e + 1
                }, easeInOutCubic: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }, easeInQuart: function (e) {
                    return e * e * e * e
                }, easeOutQuart: function (e) {
                    return -((e -= 1) * e * e * e - 1)
                }, easeInOutQuart: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }, easeInQuint: function (e) {
                    return e * e * e * e * e
                }, easeOutQuint: function (e) {
                    return (e -= 1) * e * e * e * e + 1
                }, easeInOutQuint: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }, easeInSine: function (e) {
                    return 1 - Math.cos(e * (Math.PI / 2))
                }, easeOutSine: function (e) {
                    return Math.sin(e * (Math.PI / 2))
                }, easeInOutSine: function (e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                }, easeInExpo: function (e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                }, easeOutExpo: function (e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                }, easeInOutExpo: function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                }, easeInCirc: function (e) {
                    return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
                }, easeOutCirc: function (e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }, easeInOutCirc: function (e) {
                    return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }, easeInElastic: function (e) {
                    var t = 1.70158, n = 0, i = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n))
                }, easeOutElastic: function (e) {
                    var t = 1.70158, n = 0, i = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
                }, easeInOutElastic: function (e) {
                    var t = 1.70158, n = 0, i = 1;
                    return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), e < 1 ? i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
                }, easeInBack: function (e) {
                    return e * e * (2.70158 * e - 1.70158)
                }, easeOutBack: function (e) {
                    return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
                }, easeInOutBack: function (e) {
                    var t = 1.70158;
                    return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                }, easeInBounce: function (e) {
                    return 1 - r.easeOutBounce(1 - e)
                }, easeOutBounce: function (e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }, easeInOutBounce: function (e) {
                    return e < .5 ? .5 * r.easeInBounce(2 * e) : .5 * r.easeOutBounce(2 * e - 1) + .5
                }
            };
            t.exports = {effects: r}, i.easingEffects = r
        }, {42: 42}], 44: [function (e, t, n) {
            "use strict";
            var a = e(42);
            t.exports = {
                toLineHeight: function (e, t) {
                    var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1]) return 1.2 * t;
                    switch (e = +n[2], n[3]) {
                        case"px":
                            return e;
                        case"%":
                            e /= 100
                    }
                    return t * e
                }, toPadding: function (e) {
                    var t, n, i, r;
                    return a.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, i = +e.bottom || 0, r = +e.left || 0) : t = n = i = r = +e || 0, {
                        top: t,
                        right: n,
                        bottom: i,
                        left: r,
                        height: t + i,
                        width: r + n
                    }
                }, resolve: function (e, t, n) {
                    var i, r, o;
                    for (i = 0, r = e.length; i < r; ++i) if (void 0 !== (o = e[i]) && (void 0 !== t && "function" == typeof o && (o = o(t)), void 0 !== n && a.isArray(o) && (o = o[n]), void 0 !== o)) return o
                }
            }
        }, {42: 42}], 45: [function (e, t, n) {
            "use strict";
            t.exports = e(42), t.exports.easing = e(43), t.exports.canvas = e(41), t.exports.options = e(44)
        }, {41: 41, 42: 42, 43: 43, 44: 44}], 46: [function (e, t, n) {
            t.exports = {
                acquireContext: function (e) {
                    return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
                }
            }
        }, {}], 47: [function (e, t, n) {
            "use strict";
            var h = e(45), p = "$chartjs", g = "chartjs-", m = g + "render-monitor", v = g + "render-animation",
                y = ["animationstart", "webkitAnimationStart"], s = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function l(e, t) {
                var n = h.getStyle(e, t), i = n && n.match(/^(\d+)(\.\d+)?px$/);
                return i ? Number(i[1]) : void 0
            }

            var i = !!function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("e", null, t)
                } catch (e) {
                }
                return e
            }() && {passive: !0};

            function b(e, t, n) {
                e.addEventListener(t, n, i)
            }

            function a(e, t, n) {
                e.removeEventListener(t, n, i)
            }

            function x(e, t, n, i, r) {
                return {type: e, chart: t, native: r || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null}
            }

            function r(t, e, n) {
                var i, r, o, a, s, l, u, c, d = t[p] || (t[p] = {}), f = d.resizer = function (e) {
                    var t = document.createElement("div"), n = g + "size-monitor",
                        i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                    t.style.cssText = i, t.className = n, t.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                    var r = t.childNodes[0], o = t.childNodes[1];
                    t._reset = function () {
                        r.scrollLeft = 1e6, r.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6
                    };
                    var a = function () {
                        t._reset(), e()
                    };
                    return b(r, "scroll", a.bind(r, "expand")), b(o, "scroll", a.bind(o, "shrink")), t
                }((i = function () {
                    if (d.resizer) return e(x("resize", n))
                }, o = !1, a = [], function () {
                    a = Array.prototype.slice.call(arguments), r = r || this, o || (o = !0, h.requestAnimFrame.call(window, function () {
                        o = !1, i.apply(r, a)
                    }))
                }));
                l = function () {
                    if (d.resizer) {
                        var e = t.parentNode;
                        e && e !== f.parentNode && e.insertBefore(f, e.firstChild), f._reset()
                    }
                }, u = (s = t)[p] || (s[p] = {}), c = u.renderProxy = function (e) {
                    e.animationName === v && l()
                }, h.each(y, function (e) {
                    b(s, e, c)
                }), u.reflow = !!s.offsetParent, s.classList.add(m)
            }

            function o(e) {
                var t, n, i, r = e[p] || {}, o = r.resizer;
                delete r.resizer, n = (t = e)[p] || {}, (i = n.renderProxy) && (h.each(y, function (e) {
                    a(t, e, i)
                }), delete n.renderProxy), t.classList.remove(m), o && o.parentNode && o.parentNode.removeChild(o)
            }

            t.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document, initialize: function () {
                    var e, t, n, i = "from{opacity:0.99}to{opacity:1}";
                    t = "@-webkit-keyframes " + v + "{" + i + "}@keyframes " + v + "{" + i + "}." + m + "{-webkit-animation:" + v + " 0.001s;animation:" + v + " 0.001s;}", n = (e = this)._style || document.createElement("style"), e._style || (e._style = n, t = "/* Chart.js */\n" + t, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(t))
                }, acquireContext: function (e, t) {
                    "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                    var n = e && e.getContext && e.getContext("2d");
                    return n && n.canvas === e ? (function (e, t) {
                        var n = e.style, i = e.getAttribute("height"), r = e.getAttribute("width");
                        if (e[p] = {
                            initial: {
                                height: i,
                                width: r,
                                style: {display: n.display, height: n.height, width: n.width}
                            }
                        }, n.display = n.display || "block", null === r || "" === r) {
                            var o = l(e, "width");
                            void 0 !== o && (e.width = o)
                        }
                        if (null === i || "" === i) if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2); else {
                            var a = l(e, "height");
                            void 0 !== o && (e.height = a)
                        }
                    }(e, t), n) : null
                }, releaseContext: function (e) {
                    var n = e.canvas;
                    if (n[p]) {
                        var i = n[p].initial;
                        ["height", "width"].forEach(function (e) {
                            var t = i[e];
                            h.isNullOrUndef(t) ? n.removeAttribute(e) : n.setAttribute(e, t)
                        }), h.each(i.style || {}, function (e, t) {
                            n.style[t] = e
                        }), n.width = n.width, delete n[p]
                    }
                }, addEventListener: function (o, e, a) {
                    var t = o.canvas;
                    if ("resize" !== e) {
                        var n = a[p] || (a[p] = {});
                        b(t, e, (n.proxies || (n.proxies = {}))[o.id + "_" + e] = function (e) {
                            var t, n, i, r;
                            a((n = o, i = s[(t = e).type] || t.type, r = h.getRelativePosition(t, n), x(i, n, r.x, r.y, t)))
                        })
                    } else r(t, a, o)
                }, removeEventListener: function (e, t, n) {
                    var i = e.canvas;
                    if ("resize" !== t) {
                        var r = ((n[p] || {}).proxies || {})[e.id + "_" + t];
                        r && a(i, t, r)
                    } else o(i)
                }
            }, h.addEvent = b, h.removeEvent = a
        }, {45: 45}], 48: [function (e, t, n) {
            "use strict";
            var i = e(45), r = e(46), o = e(47), a = o._enabled ? o : r;
            t.exports = i.extend({
                initialize: function () {
                }, acquireContext: function () {
                }, releaseContext: function () {
                }, addEventListener: function () {
                }, removeEventListener: function () {
                }
            }, a)
        }, {45: 45, 46: 46, 47: 47}], 49: [function (e, t, n) {
            "use strict";
            t.exports = {}, t.exports.filler = e(50), t.exports.legend = e(51), t.exports.title = e(52)
        }, {50: 50, 51: 51, 52: 52}], 50: [function (e, t, n) {
            "use strict";
            var u = e(25), f = e(40), c = e(45);
            u._set("global", {plugins: {filler: {propagate: !0}}});
            var h = {
                dataset: function (e) {
                    var t = e.fill, n = e.chart, i = n.getDatasetMeta(t),
                        r = i && n.isDatasetVisible(t) && i.dataset._children || [], o = r.length || 0;
                    return o ? function (e, t) {
                        return t < o && r[t]._view || null
                    } : null
                }, boundary: function (e) {
                    var t = e.boundary, n = t ? t.x : null, i = t ? t.y : null;
                    return function (e) {
                        return {x: null === n ? e.x : n, y: null === i ? e.y : i}
                    }
                }
            };

            function p(e, t, n) {
                var i, r = e._model || {}, o = r.fill;
                if (void 0 === o && (o = !!r.backgroundColor), !1 === o || null === o) return !1;
                if (!0 === o) return "origin";
                if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return "-" !== o[0] && "+" !== o[0] || (i = t + i), !(i === t || i < 0 || i >= n) && i;
                switch (o) {
                    case"bottom":
                        return "start";
                    case"top":
                        return "end";
                    case"zero":
                        return "origin";
                    case"origin":
                    case"start":
                    case"end":
                        return o;
                    default:
                        return !1
                }
            }

            function g(e) {
                var t, n = e.el._model || {}, i = e.el._scale || {}, r = e.fill, o = null;
                if (isFinite(r)) return null;
                if ("start" === r ? o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? o = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : i.getBasePosition ? o = i.getBasePosition() : i.getBasePixel && (o = i.getBasePixel()), null != o) {
                    if (void 0 !== o.x && void 0 !== o.y) return o;
                    if ("number" == typeof o && isFinite(o)) return {
                        x: (t = i.isHorizontal()) ? o : null,
                        y: t ? null : o
                    }
                }
                return null
            }

            function m(e, t, n) {
                var i, r = e[t].fill, o = [t];
                if (!n) return r;
                for (; !1 !== r && -1 === o.indexOf(r);) {
                    if (!isFinite(r)) return r;
                    if (!(i = e[r])) return !1;
                    if (i.visible) return r;
                    o.push(r), r = i.fill
                }
                return !1
            }

            function b(e) {
                return e && !e.skip
            }

            function x(e, t, n, i, r) {
                var o;
                if (i && r) {
                    for (e.moveTo(t[0].x, t[0].y), o = 1; o < i; ++o) c.canvas.lineTo(e, t[o - 1], t[o]);
                    for (e.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; o > 0; --o) c.canvas.lineTo(e, n[o], n[o - 1], !0)
                }
            }

            t.exports = {
                id: "filler", afterDatasetsUpdate: function (e, t) {
                    var n, i, r, o, a, s, l, u = (e.data.datasets || []).length, c = t.propagate, d = [];
                    for (i = 0; i < u; ++i) o = null, (r = (n = e.getDatasetMeta(i)).dataset) && r._model && r instanceof f.Line && (o = {
                        visible: e.isDatasetVisible(i),
                        fill: p(r, i, u),
                        chart: e,
                        el: r
                    }), n.$filler = o, d.push(o);
                    for (i = 0; i < u; ++i) (o = d[i]) && (o.fill = m(d, i, c), o.boundary = g(o), o.mapper = (void 0, l = void 0, s = (a = o).fill, l = "dataset", !1 === s ? null : (isFinite(s) || (l = "boundary"), h[l](a))))
                }, beforeDatasetDraw: function (e, t) {
                    var n = t.meta.$filler;
                    if (n) {
                        var i = e.ctx, r = n.el, o = r._view, a = r._children || [], s = n.mapper,
                            l = o.backgroundColor || u.global.defaultColor;
                        s && l && a.length && (c.canvas.clipArea(i, e.chartArea), function (e, t, n, i, r, o) {
                            var a, s, l, u, c, d, f, h = t.length, p = i.spanGaps, g = [], m = [], v = 0, y = 0;
                            for (e.beginPath(), a = 0, s = h + !!o; a < s; ++a) c = n(u = t[l = a % h]._view, l, i), d = b(u), f = b(c), d && f ? (v = g.push(u), y = m.push(c)) : v && y && (p ? (d && g.push(u), f && m.push(c)) : (x(e, g, m, v, y), v = y = 0, g = [], m = []));
                            x(e, g, m, v, y), e.closePath(), e.fillStyle = r, e.fill()
                        }(i, a, s, o, l, r._loop), c.canvas.unclipArea(i))
                    }
                }
            }
        }, {25: 25, 40: 40, 45: 45}], 51: [function (e, t, n) {
            "use strict";
            var T = e(25), i = e(26), M = e(45), r = e(30), o = M.noop;

            function D(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }

            T._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (e, t) {
                        var n = t.datasetIndex, i = this.chart, r = i.getDatasetMeta(n);
                        r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40, padding: 10, generateLabels: function (n) {
                            var e = n.data;
                            return M.isArray(e.datasets) ? e.datasets.map(function (e, t) {
                                return {
                                    text: e.label,
                                    fillStyle: M.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                    hidden: !n.isDatasetVisible(t),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    datasetIndex: t
                                }
                            }, this) : []
                        }
                    }
                }, legendCallback: function (e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                }
            });
            var a = i.extend({
                initialize: function (e) {
                    M.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                }, beforeUpdate: o, update: function (e, t, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                }, afterUpdate: o, beforeSetDimensions: o, setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                }, afterSetDimensions: o, beforeBuildLabels: o, buildLabels: function () {
                    var t = this, n = t.options.labels || {}, e = M.callback(n.generateLabels, [t.chart], t) || [];
                    n.filter && (e = e.filter(function (e) {
                        return n.filter(e, t.chart.data)
                    })), t.options.reverse && e.reverse(), t.legendItems = e
                }, afterBuildLabels: o, beforeFit: o, fit: function () {
                    var i = this, e = i.options, r = e.labels, t = e.display, o = i.ctx, n = T.global,
                        a = M.valueOrDefault, s = a(r.fontSize, n.defaultFontSize),
                        l = a(r.fontStyle, n.defaultFontStyle), u = a(r.fontFamily, n.defaultFontFamily),
                        c = M.fontString(s, l, u), d = i.legendHitBoxes = [], f = i.minSize, h = i.isHorizontal();
                    if (h ? (f.width = i.maxWidth, f.height = t ? 10 : 0) : (f.width = t ? 10 : 0, f.height = i.maxHeight), t) if (o.font = c, h) {
                        var p = i.lineWidths = [0], g = i.legendItems.length ? s + r.padding : 0;
                        o.textAlign = "left", o.textBaseline = "top", M.each(i.legendItems, function (e, t) {
                            var n = D(r, s) + s / 2 + o.measureText(e.text).width;
                            p[p.length - 1] + n + r.padding >= i.width && (g += s + r.padding, p[p.length] = i.left), d[t] = {
                                left: 0,
                                top: 0,
                                width: n,
                                height: s
                            }, p[p.length - 1] += n + r.padding
                        }), f.height += g
                    } else {
                        var m = r.padding, v = i.columnWidths = [], y = r.padding, b = 0, x = 0, w = s + m;
                        M.each(i.legendItems, function (e, t) {
                            var n = D(r, s) + s / 2 + o.measureText(e.text).width;
                            x + w > f.height && (y += b + r.padding, v.push(b), b = 0, x = 0), b = Math.max(b, n), x += w, d[t] = {
                                left: 0,
                                top: 0,
                                width: n,
                                height: s
                            }
                        }), y += b, v.push(b), f.width += y
                    }
                    i.width = f.width, i.height = f.height
                }, afterFit: o, isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                }, draw: function () {
                    var d = this, f = d.options, h = f.labels, p = T.global, g = p.elements.line, m = d.width,
                        v = d.lineWidths;
                    if (f.display) {
                        var y, b = d.ctx, x = M.valueOrDefault, e = x(h.fontColor, p.defaultFontColor),
                            w = x(h.fontSize, p.defaultFontSize), t = x(h.fontStyle, p.defaultFontStyle),
                            n = x(h.fontFamily, p.defaultFontFamily), i = M.fontString(w, t, n);
                        b.textAlign = "left", b.textBaseline = "middle", b.lineWidth = .5, b.strokeStyle = e, b.fillStyle = e, b.font = i;
                        var k = D(h, w), _ = d.legendHitBoxes, S = d.isHorizontal();
                        y = S ? {x: d.left + (m - v[0]) / 2, y: d.top + h.padding, line: 0} : {
                            x: d.left + h.padding,
                            y: d.top + h.padding,
                            line: 0
                        };
                        var C = w + h.padding;
                        M.each(d.legendItems, function (e, t) {
                            var n, i, r, o, a, s = b.measureText(e.text).width, l = k + w / 2 + s, u = y.x, c = y.y;
                            S ? u + l >= m && (c = y.y += C, y.line++, u = y.x = d.left + (m - v[y.line]) / 2) : c + C > d.bottom && (u = y.x = u + d.columnWidths[y.line] + h.padding, c = y.y = d.top + h.padding, y.line++), function (e, t, n) {
                                if (!(isNaN(k) || k <= 0)) {
                                    b.save(), b.fillStyle = x(n.fillStyle, p.defaultColor), b.lineCap = x(n.lineCap, g.borderCapStyle), b.lineDashOffset = x(n.lineDashOffset, g.borderDashOffset), b.lineJoin = x(n.lineJoin, g.borderJoinStyle), b.lineWidth = x(n.lineWidth, g.borderWidth), b.strokeStyle = x(n.strokeStyle, p.defaultColor);
                                    var i = 0 === x(n.lineWidth, g.borderWidth);
                                    if (b.setLineDash && b.setLineDash(x(n.lineDash, g.borderDash)), f.labels && f.labels.usePointStyle) {
                                        var r = w * Math.SQRT2 / 2, o = r / Math.SQRT2, a = e + o, s = t + o;
                                        M.canvas.drawPoint(b, n.pointStyle, r, a, s)
                                    } else i || b.strokeRect(e, t, k, w), b.fillRect(e, t, k, w);
                                    b.restore()
                                }
                            }(u, c, e), _[t].left = u, _[t].top = c, n = e, i = s, o = k + (r = w / 2) + u, a = c + r, b.fillText(n.text, o, a), n.hidden && (b.beginPath(), b.lineWidth = 2, b.moveTo(o, a), b.lineTo(o + i, a), b.stroke()), S ? y.x += l + h.padding : y.y += C
                        })
                    }
                }, handleEvent: function (e) {
                    var t = this, n = t.options, i = "mouseup" === e.type ? "click" : e.type, r = !1;
                    if ("mousemove" === i) {
                        if (!n.onHover) return
                    } else {
                        if ("click" !== i) return;
                        if (!n.onClick) return
                    }
                    var o = e.x, a = e.y;
                    if (o >= t.left && o <= t.right && a >= t.top && a <= t.bottom) for (var s = t.legendHitBoxes, l = 0; l < s.length; ++l) {
                        var u = s[l];
                        if (o >= u.left && o <= u.left + u.width && a >= u.top && a <= u.top + u.height) {
                            if ("click" === i) {
                                n.onClick.call(t, e.native, t.legendItems[l]), r = !0;
                                break
                            }
                            if ("mousemove" === i) {
                                n.onHover.call(t, e.native, t.legendItems[l]), r = !0;
                                break
                            }
                        }
                    }
                    return r
                }
            });

            function s(e, t) {
                var n = new a({ctx: e.ctx, options: t, chart: e});
                r.configure(e, n, t), r.addBox(e, n), e.legend = n
            }

            t.exports = {
                id: "legend", _element: a, beforeInit: function (e) {
                    var t = e.options.legend;
                    t && s(e, t)
                }, beforeUpdate: function (e) {
                    var t = e.options.legend, n = e.legend;
                    t ? (M.mergeIf(t, T.global.legend), n ? (r.configure(e, n, t), n.options = t) : s(e, t)) : n && (r.removeBox(e, n), delete e.legend)
                }, afterEvent: function (e, t) {
                    var n = e.legend;
                    n && n.handleEvent(t)
                }
            }
        }, {25: 25, 26: 26, 30: 30, 45: 45}], 52: [function (e, t, n) {
            "use strict";
            var k = e(25), i = e(26), _ = e(45), r = e(30), o = _.noop;
            k._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var a = i.extend({
                initialize: function (e) {
                    _.extend(this, e), this.legendHitBoxes = []
                },
                beforeUpdate: o,
                update: function (e, t, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: o,
                beforeSetDimensions: o,
                setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: o,
                beforeBuildLabels: o,
                buildLabels: o,
                afterBuildLabels: o,
                beforeFit: o,
                fit: function () {
                    var e = this, t = _.valueOrDefault, n = e.options, i = n.display,
                        r = t(n.fontSize, k.global.defaultFontSize), o = e.minSize,
                        a = _.isArray(n.text) ? n.text.length : 1, s = _.options.toLineHeight(n.lineHeight, r),
                        l = i ? a * s + 2 * n.padding : 0;
                    e.isHorizontal() ? (o.width = e.maxWidth, o.height = l) : (o.width = l, o.height = e.maxHeight), e.width = o.width, e.height = o.height
                },
                afterFit: o,
                isHorizontal: function () {
                    var e = this.options.position;
                    return "top" === e || "bottom" === e
                },
                draw: function () {
                    var e = this, t = e.ctx, n = _.valueOrDefault, i = e.options, r = k.global;
                    if (i.display) {
                        var o, a, s, l = n(i.fontSize, r.defaultFontSize), u = n(i.fontStyle, r.defaultFontStyle),
                            c = n(i.fontFamily, r.defaultFontFamily), d = _.fontString(l, u, c),
                            f = _.options.toLineHeight(i.lineHeight, l), h = f / 2 + i.padding, p = 0, g = e.top,
                            m = e.left, v = e.bottom, y = e.right;
                        t.fillStyle = n(i.fontColor, r.defaultFontColor), t.font = d, e.isHorizontal() ? (a = m + (y - m) / 2, s = g + h, o = y - m) : (a = "left" === i.position ? m + h : y - h, s = g + (v - g) / 2, o = v - g, p = Math.PI * ("left" === i.position ? -.5 : .5)), t.save(), t.translate(a, s), t.rotate(p), t.textAlign = "center", t.textBaseline = "middle";
                        var b = i.text;
                        if (_.isArray(b)) for (var x = 0, w = 0; w < b.length; ++w) t.fillText(b[w], 0, x, o), x += f; else t.fillText(b, 0, 0, o);
                        t.restore()
                    }
                }
            });

            function s(e, t) {
                var n = new a({ctx: e.ctx, options: t, chart: e});
                r.configure(e, n, t), r.addBox(e, n), e.titleBlock = n
            }

            t.exports = {
                id: "title", _element: a, beforeInit: function (e) {
                    var t = e.options.title;
                    t && s(e, t)
                }, beforeUpdate: function (e) {
                    var t = e.options.title, n = e.titleBlock;
                    t ? (_.mergeIf(t, k.global.title), n ? (r.configure(e, n, t), n.options = t) : s(e, t)) : n && (r.removeBox(e, n), delete e.titleBlock)
                }
            }
        }, {25: 25, 26: 26, 30: 30, 45: 45}], 53: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                var t = e.Scale.extend({
                    getLabels: function () {
                        var e = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
                    }, determineDataLimits: function () {
                        var e, t = this, n = t.getLabels();
                        t.minIndex = 0, t.maxIndex = n.length - 1, void 0 !== t.options.ticks.min && (e = n.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = n.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex]
                    }, buildTicks: function () {
                        var e = this, t = e.getLabels();
                        e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
                    }, getLabelForIndex: function (e, t) {
                        var n = this, i = n.chart.data, r = n.isHorizontal();
                        return i.yLabels && !r ? n.getRightValue(i.datasets[t].data[e]) : n.ticks[e - n.minIndex]
                    }, getPixelForValue: function (e, t) {
                        var n, i = this, r = i.options.offset,
                            o = Math.max(i.maxIndex + 1 - i.minIndex - (r ? 0 : 1), 1);
                        if (null != e && (n = i.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) {
                            e = n || e;
                            var a = i.getLabels().indexOf(e);
                            t = -1 !== a ? a : t
                        }
                        if (i.isHorizontal()) {
                            var s = i.width / o, l = s * (t - i.minIndex);
                            return r && (l += s / 2), i.left + Math.round(l)
                        }
                        var u = i.height / o, c = u * (t - i.minIndex);
                        return r && (c += u / 2), i.top + Math.round(c)
                    }, getPixelForTick: function (e) {
                        return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
                    }, getValueForPixel: function (e) {
                        var t = this, n = t.options.offset, i = Math.max(t._ticks.length - (n ? 0 : 1), 1),
                            r = t.isHorizontal(), o = (r ? t.width : t.height) / i;
                        return e -= r ? t.left : t.top, n && (e -= o / 2), (e <= 0 ? 0 : Math.round(e / o)) + t.minIndex
                    }, getBasePixel: function () {
                        return this.bottom
                    }
                });
                e.scaleService.registerScaleType("category", t, {position: "bottom"})
            }
        }, {}], 54: [function (e, t, n) {
            "use strict";
            var i = e(25), d = e(45), r = e(34);
            t.exports = function (e) {
                var t = {position: "left", ticks: {callback: r.formatters.linear}}, n = e.LinearScaleBase.extend({
                    determineDataLimits: function () {
                        var a = this, s = a.options, l = a.chart, e = l.data.datasets, t = a.isHorizontal();

                        function u(e) {
                            return t ? e.xAxisID === a.id : e.yAxisID === a.id
                        }

                        a.min = null, a.max = null;
                        var i = s.stacked;
                        if (void 0 === i && d.each(e, function (e, t) {
                            if (!i) {
                                var n = l.getDatasetMeta(t);
                                l.isDatasetVisible(t) && u(n) && void 0 !== n.stack && (i = !0)
                            }
                        }), s.stacked || i) {
                            var c = {};
                            d.each(e, function (e, t) {
                                var i = l.getDatasetMeta(t),
                                    n = [i.type, void 0 === s.stacked && void 0 === i.stack ? t : "", i.stack].join(".");
                                void 0 === c[n] && (c[n] = {positiveValues: [], negativeValues: []});
                                var r = c[n].positiveValues, o = c[n].negativeValues;
                                l.isDatasetVisible(t) && u(i) && d.each(e.data, function (e, t) {
                                    var n = +a.getRightValue(e);
                                    isNaN(n) || i.data[t].hidden || (r[t] = r[t] || 0, o[t] = o[t] || 0, s.relativePoints ? r[t] = 100 : n < 0 ? o[t] += n : r[t] += n)
                                })
                            }), d.each(c, function (e) {
                                var t = e.positiveValues.concat(e.negativeValues), n = d.min(t), i = d.max(t);
                                a.min = null === a.min ? n : Math.min(a.min, n), a.max = null === a.max ? i : Math.max(a.max, i)
                            })
                        } else d.each(e, function (e, t) {
                            var i = l.getDatasetMeta(t);
                            l.isDatasetVisible(t) && u(i) && d.each(e.data, function (e, t) {
                                var n = +a.getRightValue(e);
                                isNaN(n) || i.data[t].hidden || (null === a.min ? a.min = n : n < a.min && (a.min = n), null === a.max ? a.max = n : n > a.max && (a.max = n))
                            })
                        });
                        a.min = isFinite(a.min) && !isNaN(a.min) ? a.min : 0, a.max = isFinite(a.max) && !isNaN(a.max) ? a.max : 1, this.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var e, t = this.options.ticks;
                        if (this.isHorizontal()) e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.width / 50)); else {
                            var n = d.valueOrDefault(t.fontSize, i.global.defaultFontSize);
                            e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)))
                        }
                        return e
                    }, handleDirectionalChanges: function () {
                        this.isHorizontal() || this.ticks.reverse()
                    }, getLabelForIndex: function (e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    }, getPixelForValue: function (e) {
                        var t = this, n = t.start, i = +t.getRightValue(e), r = t.end - n;
                        return t.isHorizontal() ? t.left + t.width / r * (i - n) : t.bottom - t.height / r * (i - n)
                    }, getValueForPixel: function (e) {
                        var t = this, n = t.isHorizontal(), i = n ? t.width : t.height,
                            r = (n ? e - t.left : t.bottom - e) / i;
                        return t.start + (t.end - t.start) * r
                    }, getPixelForTick: function (e) {
                        return this.getPixelForValue(this.ticksAsNumbers[e])
                    }
                });
                e.scaleService.registerScaleType("linear", n, t)
            }
        }, {25: 25, 34: 34, 45: 45}], 55: [function (e, t, n) {
            "use strict";
            var c = e(45);
            t.exports = function (t) {
                var e = c.noop;
                t.LinearScaleBase = t.Scale.extend({
                    getRightValue: function (e) {
                        return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e)
                    }, handleTickRangeOptions: function () {
                        var e = this, t = e.options.ticks;
                        if (t.beginAtZero) {
                            var n = c.sign(e.min), i = c.sign(e.max);
                            n < 0 && i < 0 ? e.max = 0 : n > 0 && i > 0 && (e.min = 0)
                        }
                        var r = void 0 !== t.min || void 0 !== t.suggestedMin,
                            o = void 0 !== t.max || void 0 !== t.suggestedMax;
                        void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), r !== o && e.min >= e.max && (r ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
                    }, getTickLimit: e, handleDirectionalChanges: e, buildTicks: function () {
                        var e = this, t = e.options.ticks, n = e.getTickLimit(), i = {
                            maxTicks: n = Math.max(2, n),
                            min: t.min,
                            max: t.max,
                            stepSize: c.valueOrDefault(t.fixedStepSize, t.stepSize)
                        }, r = e.ticks = function (e, t) {
                            var n, i = [];
                            if (e.stepSize && e.stepSize > 0) n = e.stepSize; else {
                                var r = c.niceNum(t.max - t.min, !1);
                                n = c.niceNum(r / (e.maxTicks - 1), !0)
                            }
                            var o = Math.floor(t.min / n) * n, a = Math.ceil(t.max / n) * n;
                            e.min && e.max && e.stepSize && c.almostWhole((e.max - e.min) / e.stepSize, n / 1e3) && (o = e.min, a = e.max);
                            var s = (a - o) / n;
                            s = c.almostEquals(s, Math.round(s), n / 1e3) ? Math.round(s) : Math.ceil(s);
                            var l = 1;
                            n < 1 && (l = Math.pow(10, n.toString().length - 2), o = Math.round(o * l) / l, a = Math.round(a * l) / l), i.push(void 0 !== e.min ? e.min : o);
                            for (var u = 1; u < s; ++u) i.push(Math.round((o + u * n) * l) / l);
                            return i.push(void 0 !== e.max ? e.max : a), i
                        }(i, e);
                        e.handleDirectionalChanges(), e.max = c.max(r), e.min = c.min(r), t.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                    }, convertTicksToLabels: function () {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }, {45: 45}], 56: [function (e, t, n) {
            "use strict";
            var f = e(45), i = e(34);
            t.exports = function (d) {
                var e = {position: "left", ticks: {callback: i.formatters.logarithmic}}, t = d.Scale.extend({
                    determineDataLimits: function () {
                        var a = this, n = a.options, s = a.chart, e = s.data.datasets, t = a.isHorizontal();

                        function l(e) {
                            return t ? e.xAxisID === a.id : e.yAxisID === a.id
                        }

                        a.min = null, a.max = null, a.minNotZero = null;
                        var i = n.stacked;
                        if (void 0 === i && f.each(e, function (e, t) {
                            if (!i) {
                                var n = s.getDatasetMeta(t);
                                s.isDatasetVisible(t) && l(n) && void 0 !== n.stack && (i = !0)
                            }
                        }), n.stacked || i) {
                            var u = {};
                            f.each(e, function (e, t) {
                                var r = s.getDatasetMeta(t),
                                    o = [r.type, void 0 === n.stacked && void 0 === r.stack ? t : "", r.stack].join(".");
                                s.isDatasetVisible(t) && l(r) && (void 0 === u[o] && (u[o] = []), f.each(e.data, function (e, t) {
                                    var n = u[o], i = +a.getRightValue(e);
                                    isNaN(i) || r.data[t].hidden || i < 0 || (n[t] = n[t] || 0, n[t] += i)
                                }))
                            }), f.each(u, function (e) {
                                if (e.length > 0) {
                                    var t = f.min(e), n = f.max(e);
                                    a.min = null === a.min ? t : Math.min(a.min, t), a.max = null === a.max ? n : Math.max(a.max, n)
                                }
                            })
                        } else f.each(e, function (e, t) {
                            var i = s.getDatasetMeta(t);
                            s.isDatasetVisible(t) && l(i) && f.each(e.data, function (e, t) {
                                var n = +a.getRightValue(e);
                                isNaN(n) || i.data[t].hidden || n < 0 || (null === a.min ? a.min = n : n < a.min && (a.min = n), null === a.max ? a.max = n : n > a.max && (a.max = n), 0 !== n && (null === a.minNotZero || n < a.minNotZero) && (a.minNotZero = n))
                            })
                        });
                        this.handleTickRangeOptions()
                    }, handleTickRangeOptions: function () {
                        var e = this, t = e.options.ticks, n = f.valueOrDefault;
                        e.min = n(t.min, e.min), e.max = n(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(f.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(f.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(f.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(f.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(f.log10(e.max))) : e.minNotZero = 1)
                    }, buildTicks: function () {
                        var e = this, t = e.options.ticks, n = !e.isHorizontal(), i = {min: t.min, max: t.max},
                            r = e.ticks = function (e, t) {
                                var n, i, r = [], o = f.valueOrDefault,
                                    a = o(e.min, Math.pow(10, Math.floor(f.log10(t.min)))),
                                    s = Math.floor(f.log10(t.max)), l = Math.ceil(t.max / Math.pow(10, s));
                                0 === a ? (n = Math.floor(f.log10(t.minNotZero)), i = Math.floor(t.minNotZero / Math.pow(10, n)), r.push(a), a = i * Math.pow(10, n)) : (n = Math.floor(f.log10(a)), i = Math.floor(a / Math.pow(10, n)));
                                for (var u = n < 0 ? Math.pow(10, Math.abs(n)) : 1; r.push(a), 10 == ++i && (i = 1, u = ++n >= 0 ? 1 : u), a = Math.round(i * Math.pow(10, n) * u) / u, n < s || n === s && i < l;) ;
                                var c = o(e.max, a);
                                return r.push(c), r
                            }(i, e);
                        e.max = f.max(r), e.min = f.min(r), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && r.reverse()
                    }, convertTicksToLabels: function () {
                        this.tickValues = this.ticks.slice(), d.Scale.prototype.convertTicksToLabels.call(this)
                    }, getLabelForIndex: function (e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    }, getPixelForTick: function (e) {
                        return this.getPixelForValue(this.tickValues[e])
                    }, _getFirstTickValue: function (e) {
                        var t = Math.floor(f.log10(e));
                        return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
                    }, getPixelForValue: function (e) {
                        var t, n, i, r, o, a = this, s = a.options.ticks.reverse, l = f.log10,
                            u = a._getFirstTickValue(a.minNotZero), c = 0;
                        return e = +a.getRightValue(e), s ? (i = a.end, r = a.start, o = -1) : (i = a.start, r = a.end, o = 1), a.isHorizontal() ? (t = a.width, n = s ? a.right : a.left) : (t = a.height, o *= -1, n = s ? a.top : a.bottom), e !== i && (0 === i && (t -= c = f.getValueOrDefault(a.options.ticks.fontSize, d.defaults.global.defaultFontSize), i = u), 0 !== e && (c += t / (l(r) - l(i)) * (l(e) - l(i))), n += o * c), n
                    }, getValueForPixel: function (e) {
                        var t, n, i, r, o = this, a = o.options.ticks.reverse, s = f.log10,
                            l = o._getFirstTickValue(o.minNotZero);
                        if (a ? (n = o.end, i = o.start) : (n = o.start, i = o.end), o.isHorizontal() ? (t = o.width, r = a ? o.right - e : e - o.left) : (t = o.height, r = a ? e - o.top : o.bottom - e), r !== n) {
                            if (0 === n) {
                                var u = f.getValueOrDefault(o.options.ticks.fontSize, d.defaults.global.defaultFontSize);
                                r -= u, t -= u, n = l
                            }
                            r *= s(i) - s(n), r /= t, r = Math.pow(10, s(n) + r)
                        }
                        return r
                    }
                });
                d.scaleService.registerScaleType("logarithmic", t, e)
            }
        }, {34: 34, 45: 45}], 57: [function (e, t, n) {
            "use strict";
            var i = e(25), w = e(45), r = e(34);
            t.exports = function (t) {
                var v = i.global, e = {
                    display: !0,
                    animate: !0,
                    position: "chartArea",
                    angleLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1},
                    gridLines: {circular: !1},
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2,
                        callback: r.formatters.linear
                    },
                    pointLabels: {
                        display: !0, fontSize: 10, callback: function (e) {
                            return e
                        }
                    }
                };

                function y(e) {
                    var t = e.options;
                    return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
                }

                function b(e) {
                    var t = e.options.pointLabels, n = w.valueOrDefault(t.fontSize, v.defaultFontSize),
                        i = w.valueOrDefault(t.fontStyle, v.defaultFontStyle),
                        r = w.valueOrDefault(t.fontFamily, v.defaultFontFamily);
                    return {size: n, style: i, family: r, font: w.fontString(n, i, r)}
                }

                function m(e, t, n, i, r) {
                    return e === i || e === r ? {start: t - n / 2, end: t + n / 2} : e < i || e > r ? {
                        start: t - n - 5,
                        end: t
                    } : {start: t, end: t + n + 5}
                }

                function x(e, t, n, i) {
                    if (w.isArray(t)) for (var r = n.y, o = 1.5 * i, a = 0; a < t.length; ++a) e.fillText(t[a], n.x, r), r += o; else e.fillText(t, n.x, n.y)
                }

                function s(e) {
                    return w.isNumber(e) ? e : 0
                }

                var n = t.LinearScaleBase.extend({
                    setDimensions: function () {
                        var e = this, t = e.options, n = t.ticks;
                        e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                        var i = w.min([e.height, e.width]), r = w.valueOrDefault(n.fontSize, v.defaultFontSize);
                        e.drawingArea = t.display ? i / 2 - (r / 2 + n.backdropPaddingY) : i / 2
                    }, determineDataLimits: function () {
                        var r = this, n = r.chart, o = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY;
                        w.each(n.data.datasets, function (e, t) {
                            if (n.isDatasetVisible(t)) {
                                var i = n.getDatasetMeta(t);
                                w.each(e.data, function (e, t) {
                                    var n = +r.getRightValue(e);
                                    isNaN(n) || i.data[t].hidden || (o = Math.min(n, o), a = Math.max(n, a))
                                })
                            }
                        }), r.min = o === Number.POSITIVE_INFINITY ? 0 : o, r.max = a === Number.NEGATIVE_INFINITY ? 0 : a, r.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var e = this.options.ticks, t = w.valueOrDefault(e.fontSize, v.defaultFontSize);
                        return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * t)))
                    }, convertTicksToLabels: function () {
                        var e = this;
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                    }, getLabelForIndex: function (e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    }, fit: function () {
                        var e, t;
                        this.options.pointLabels.display ? function (e) {
                            var t, n, i, r = b(e), o = Math.min(e.height / 2, e.width / 2),
                                a = {r: e.width, l: 0, t: e.height, b: 0}, s = {};
                            e.ctx.font = r.font, e._pointLabelSizes = [];
                            var l, u, c, d = y(e);
                            for (t = 0; t < d; t++) {
                                i = e.getPointPosition(t, o), l = e.ctx, u = r.size, c = e.pointLabels[t] || "", n = w.isArray(c) ? {
                                    w: w.longestText(l, l.font, c),
                                    h: c.length * u + 1.5 * (c.length - 1) * u
                                } : {w: l.measureText(c).width, h: u}, e._pointLabelSizes[t] = n;
                                var f = e.getIndexAngle(t), h = w.toDegrees(f) % 360, p = m(h, i.x, n.w, 0, 180),
                                    g = m(h, i.y, n.h, 90, 270);
                                p.start < a.l && (a.l = p.start, s.l = f), p.end > a.r && (a.r = p.end, s.r = f), g.start < a.t && (a.t = g.start, s.t = f), g.end > a.b && (a.b = g.end, s.b = f)
                            }
                            e.setReductions(o, a, s)
                        }(this) : (e = this, t = Math.min(e.height / 2, e.width / 2), e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0))
                    }, setReductions: function (e, t, n) {
                        var i = t.l / Math.sin(n.l), r = Math.max(t.r - this.width, 0) / Math.sin(n.r),
                            o = -t.t / Math.cos(n.t), a = -Math.max(t.b - this.height, 0) / Math.cos(n.b);
                        i = s(i), r = s(r), o = s(o), a = s(a), this.drawingArea = Math.min(Math.round(e - (i + r) / 2), Math.round(e - (o + a) / 2)), this.setCenterPoint(i, r, o, a)
                    }, setCenterPoint: function (e, t, n, i) {
                        var r = this, o = r.width - t - r.drawingArea, a = e + r.drawingArea, s = n + r.drawingArea,
                            l = r.height - i - r.drawingArea;
                        r.xCenter = Math.round((a + o) / 2 + r.left), r.yCenter = Math.round((s + l) / 2 + r.top)
                    }, getIndexAngle: function (e) {
                        return e * (2 * Math.PI / y(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    }, getDistanceFromCenterForValue: function (e) {
                        var t = this;
                        if (null === e) return 0;
                        var n = t.drawingArea / (t.max - t.min);
                        return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n
                    }, getPointPosition: function (e, t) {
                        var n = this.getIndexAngle(e) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(n) * t) + this.xCenter,
                            y: Math.round(Math.sin(n) * t) + this.yCenter
                        }
                    }, getPointPositionForValue: function (e, t) {
                        return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
                    }, getBasePosition: function () {
                        var e = this.min, t = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0)
                    }, draw: function () {
                        var o = this, e = o.options, a = e.gridLines, s = e.ticks, l = w.valueOrDefault;
                        if (e.display) {
                            var u = o.ctx, c = this.getIndexAngle(0), d = l(s.fontSize, v.defaultFontSize),
                                t = l(s.fontStyle, v.defaultFontStyle), n = l(s.fontFamily, v.defaultFontFamily),
                                f = w.fontString(d, t, n);
                            w.each(o.ticks, function (e, t) {
                                if (t > 0 || s.reverse) {
                                    var n = o.getDistanceFromCenterForValue(o.ticksAsNumbers[t]);
                                    if (a.display && 0 !== t && function (e, t, n, i) {
                                        var r = e.ctx;
                                        if (r.strokeStyle = w.valueAtIndexOrDefault(t.color, i - 1), r.lineWidth = w.valueAtIndexOrDefault(t.lineWidth, i - 1), e.options.gridLines.circular) r.beginPath(), r.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI), r.closePath(), r.stroke(); else {
                                            var o = y(e);
                                            if (0 === o) return;
                                            r.beginPath();
                                            var a = e.getPointPosition(0, n);
                                            r.moveTo(a.x, a.y);
                                            for (var s = 1; s < o; s++) a = e.getPointPosition(s, n), r.lineTo(a.x, a.y);
                                            r.closePath(), r.stroke()
                                        }
                                    }(o, a, n, t), s.display) {
                                        var i = l(s.fontColor, v.defaultFontColor);
                                        if (u.font = f, u.save(), u.translate(o.xCenter, o.yCenter), u.rotate(c), s.showLabelBackdrop) {
                                            var r = u.measureText(e).width;
                                            u.fillStyle = s.backdropColor, u.fillRect(-r / 2 - s.backdropPaddingX, -n - d / 2 - s.backdropPaddingY, r + 2 * s.backdropPaddingX, d + 2 * s.backdropPaddingY)
                                        }
                                        u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = i, u.fillText(e, 0, -n), u.restore()
                                    }
                                }
                            }), (e.angleLines.display || e.pointLabels.display) && function (e) {
                                var t = e.ctx, n = e.options, i = n.angleLines, r = n.pointLabels;
                                t.lineWidth = i.lineWidth, t.strokeStyle = i.color;
                                var o, a, s, l, u = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
                                    c = b(e);
                                t.textBaseline = "top";
                                for (var d = y(e) - 1; d >= 0; d--) {
                                    if (i.display) {
                                        var f = e.getPointPosition(d, u);
                                        t.beginPath(), t.moveTo(e.xCenter, e.yCenter), t.lineTo(f.x, f.y), t.stroke(), t.closePath()
                                    }
                                    if (r.display) {
                                        var h = e.getPointPosition(d, u + 5),
                                            p = w.valueAtIndexOrDefault(r.fontColor, d, v.defaultFontColor);
                                        t.font = c.font, t.fillStyle = p;
                                        var g = e.getIndexAngle(d), m = w.toDegrees(g);
                                        t.textAlign = 0 === (l = m) || 180 === l ? "center" : l < 180 ? "left" : "right", o = m, a = e._pointLabelSizes[d], s = h, 90 === o || 270 === o ? s.y -= a.h / 2 : (o > 270 || o < 90) && (s.y -= a.h), x(t, e.pointLabels[d] || "", h, c.size)
                                    }
                                }
                            }(o)
                        }
                    }
                });
                t.scaleService.registerScaleType("radialLinear", n, e)
            }
        }, {25: 25, 34: 34, 45: 45}], 58: [function (e, t, n) {
            "use strict";
            var b = e(1);
            b = "function" == typeof b ? b : window.moment;
            var a = e(25), m = e(45), g = Number.MIN_SAFE_INTEGER || -9007199254740991,
                v = Number.MAX_SAFE_INTEGER || 9007199254740991, x = {
                    millisecond: {common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]},
                    second: {common: !0, size: 1e3, steps: [1, 2, 5, 10, 30]},
                    minute: {common: !0, size: 6e4, steps: [1, 2, 5, 10, 30]},
                    hour: {common: !0, size: 36e5, steps: [1, 2, 3, 6, 12]},
                    day: {common: !0, size: 864e5, steps: [1, 2, 5]},
                    week: {common: !1, size: 6048e5, steps: [1, 2, 3, 4]},
                    month: {common: !0, size: 2628e6, steps: [1, 2, 3]},
                    quarter: {common: !1, size: 7884e6, steps: [1, 2, 3, 4]},
                    year: {common: !0, size: 3154e7}
                }, w = Object.keys(x);

            function y(e, t) {
                return e - t
            }

            function k(e) {
                var t, n, i, r = {}, o = [];
                for (t = 0, n = e.length; t < n; ++t) r[i = e[t]] || (r[i] = !0, o.push(i));
                return o
            }

            function _(e, t, n, i) {
                var r = function (e, t, n) {
                        for (var i, r, o, a = 0, s = e.length - 1; a >= 0 && a <= s;) {
                            if (r = e[(i = a + s >> 1) - 1] || null, o = e[i], !r) return {lo: null, hi: o};
                            if (o[t] < n) a = i + 1; else {
                                if (!(r[t] > n)) return {lo: r, hi: o};
                                s = i - 1
                            }
                        }
                        return {lo: o, hi: null}
                    }(e, t, n), o = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
                    a = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1], s = a[t] - o[t], l = s ? (n - o[t]) / s : 0,
                    u = (a[i] - o[i]) * l;
                return o[i] + u
            }

            function S(e, t) {
                var n = t.parser, i = t.parser || t.format;
                return "function" == typeof n ? n(e) : "string" == typeof e && "string" == typeof i ? b(e, i) : (e instanceof b || (e = b(e)), e.isValid() ? e : "function" == typeof i ? i(e) : e)
            }

            function C(e, t) {
                if (m.isNullOrUndef(e)) return null;
                var n = t.options.time, i = S(t.getRightValue(e), n);
                return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null
            }

            function T(e) {
                for (var t = w.indexOf(e) + 1, n = w.length; t < n; ++t) if (x[w[t]].common) return w[t]
            }

            function M(e, t, n, i) {
                var r, o = i.time, a = o.unit || function (e, t, n, i) {
                        var r, o, a, s = w.length;
                        for (r = w.indexOf(e); r < s - 1; ++r) if (a = (o = x[w[r]]).steps ? o.steps[o.steps.length - 1] : v, o.common && Math.ceil((n - t) / (a * o.size)) <= i) return w[r];
                        return w[s - 1]
                    }(o.minUnit, e, t, n), s = T(a), l = m.valueOrDefault(o.stepSize, o.unitStepSize),
                    u = "week" === a && o.isoWeekday, c = i.ticks.major.enabled, d = x[a], f = b(e), h = b(t), p = [];
                for (l || (l = function (e, t, n, i) {
                    var r, o, a, s = t - e, l = x[n], u = l.size, c = l.steps;
                    if (!c) return Math.ceil(s / (i * u));
                    for (r = 0, o = c.length; r < o && (a = c[r], !(Math.ceil(s / (u * a)) <= i)); ++r) ;
                    return a
                }(e, t, a, n)), u && (f = f.isoWeekday(u), h = h.isoWeekday(u)), f = f.startOf(u ? "day" : a), (h = h.startOf(u ? "day" : a)) < t && h.add(1, a), r = b(f), c && s && !u && !o.round && (r.startOf(s), r.add(~~((f - r) / (d.size * l)) * l, a)); r < h; r.add(l, a)) p.push(+r);
                return p.push(+r), p
            }

            t.exports = function (t) {
                var e = t.Scale.extend({
                    initialize: function () {
                        if (!b) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this)
                    }, update: function () {
                        var e = this.options;
                        return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments)
                    }, getRightValue: function (e) {
                        return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e)
                    }, determineDataLimits: function () {
                        var e, t, n, i, r, o, a = this, s = a.chart, l = a.options.time, u = l.unit || "day", c = v,
                            d = g, f = [], h = [], p = [];
                        for (e = 0, n = s.data.labels.length; e < n; ++e) p.push(C(s.data.labels[e], a));
                        for (e = 0, n = (s.data.datasets || []).length; e < n; ++e) if (s.isDatasetVisible(e)) if (r = s.data.datasets[e].data, m.isObject(r[0])) for (h[e] = [], t = 0, i = r.length; t < i; ++t) o = C(r[t], a), f.push(o), h[e][t] = o; else f.push.apply(f, p), h[e] = p.slice(0); else h[e] = [];
                        p.length && (p = k(p).sort(y), c = Math.min(c, p[0]), d = Math.max(d, p[p.length - 1])), f.length && (f = k(f).sort(y), c = Math.min(c, f[0]), d = Math.max(d, f[f.length - 1])), c = C(l.min, a) || c, d = C(l.max, a) || d, c = c === v ? +b().startOf(u) : c, d = d === g ? +b().endOf(u) + 1 : d, a.min = Math.min(c, d), a.max = Math.max(c + 1, d), a._horizontal = a.isHorizontal(), a._table = [], a._timestamps = {
                            data: f,
                            datasets: h,
                            labels: p
                        }
                    }, buildTicks: function () {
                        var e, t, n, i, r, o, a, s, l, u, c, d, f = this, h = f.min, p = f.max, g = f.options,
                            m = g.time, v = [], y = [];
                        switch (g.ticks.source) {
                            case"data":
                                v = f._timestamps.data;
                                break;
                            case"labels":
                                v = f._timestamps.labels;
                                break;
                            case"auto":
                            default:
                                v = M(h, p, f.getLabelCapacity(h), g)
                        }
                        for ("ticks" === g.bounds && v.length && (h = v[0], p = v[v.length - 1]), h = C(m.min, f) || h, p = C(m.max, f) || p, e = 0, t = v.length; e < t; ++e) (n = v[e]) >= h && n <= p && y.push(n);
                        return f.min = h, f.max = p, f._unit = m.unit || function (e, t, n, i) {
                            var r, o, a = b.duration(b(i).diff(b(n)));
                            for (r = w.length - 1; r >= w.indexOf(t); r--) if (o = w[r], x[o].common && a.as(o) >= e.length) return o;
                            return w[t ? w.indexOf(t) : 0]
                        }(y, m.minUnit, f.min, f.max), f._majorUnit = T(f._unit), f._table = function (e, t, n, i) {
                            if ("linear" === i || !e.length) return [{time: t, pos: 0}, {time: n, pos: 1}];
                            var r, o, a, s, l, u = [], c = [t];
                            for (r = 0, o = e.length; r < o; ++r) (s = e[r]) > t && s < n && c.push(s);
                            for (c.push(n), r = 0, o = c.length; r < o; ++r) l = c[r + 1], a = c[r - 1], s = c[r], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s || u.push({
                                time: s,
                                pos: r / (o - 1)
                            });
                            return u
                        }(f._timestamps.data, h, p, g.distribution), f._offsets = (i = f._table, r = y, o = h, a = p, c = 0, d = 0, (s = g).offset && r.length && (s.time.min || (l = r.length > 1 ? r[1] : a, u = r[0], c = (_(i, "time", l, "pos") - _(i, "time", u, "pos")) / 2), s.time.max || (l = r[r.length - 1], u = r.length > 1 ? r[r.length - 2] : o, d = (_(i, "time", l, "pos") - _(i, "time", u, "pos")) / 2)), {
                            left: c,
                            right: d
                        }), f._labelFormat = function (e, t) {
                            var n, i, r, o = e.length;
                            for (n = 0; n < o; n++) {
                                if (0 !== (i = S(e[n], t)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                0 === i.second() && 0 === i.minute() && 0 === i.hour() || (r = !0)
                            }
                            return r ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                        }(f._timestamps.data, m), function (e, t) {
                            var n, i, r, o, a = [];
                            for (n = 0, i = e.length; n < i; ++n) r = e[n], o = !!t && r === +b(r).startOf(t), a.push({
                                value: r,
                                major: o
                            });
                            return a
                        }(y, f._majorUnit)
                    }, getLabelForIndex: function (e, t) {
                        var n = this.chart.data, i = this.options.time,
                            r = n.labels && e < n.labels.length ? n.labels[e] : "", o = n.datasets[t].data[e];
                        return m.isObject(o) && (r = this.getRightValue(o)), i.tooltipFormat ? S(r, i).format(i.tooltipFormat) : "string" == typeof r ? r : S(r, i).format(this._labelFormat)
                    }, tickFormatFunction: function (e, t, n, i) {
                        var r = this.options, o = e.valueOf(), a = r.time.displayFormats, s = a[this._unit],
                            l = this._majorUnit, u = a[l], c = e.clone().startOf(l).valueOf(), d = r.ticks.major,
                            f = d.enabled && l && u && o === c, h = e.format(i || (f ? u : s)),
                            p = f ? d : r.ticks.minor, g = m.valueOrDefault(p.callback, p.userCallback);
                        return g ? g(h, t, n) : h
                    }, convertTicksToLabels: function (e) {
                        var t, n, i = [];
                        for (t = 0, n = e.length; t < n; ++t) i.push(this.tickFormatFunction(b(e[t].value), t, e));
                        return i
                    }, getPixelForOffset: function (e) {
                        var t = this, n = t._horizontal ? t.width : t.height, i = t._horizontal ? t.left : t.top,
                            r = _(t._table, "time", e, "pos");
                        return i + n * (t._offsets.left + r) / (t._offsets.left + 1 + t._offsets.right)
                    }, getPixelForValue: function (e, t, n) {
                        var i = null;
                        if (void 0 !== t && void 0 !== n && (i = this._timestamps.datasets[n][t]), null === i && (i = C(e, this)), null !== i) return this.getPixelForOffset(i)
                    }, getPixelForTick: function (e) {
                        var t = this.getTicks();
                        return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                    }, getValueForPixel: function (e) {
                        var t = this, n = t._horizontal ? t.width : t.height, i = t._horizontal ? t.left : t.top,
                            r = (n ? (e - i) / n : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right,
                            o = _(t._table, "pos", r, "time");
                        return b(o)
                    }, getLabelWidth: function (e) {
                        var t = this.options.ticks, n = this.ctx.measureText(e).width, i = m.toRadians(t.maxRotation),
                            r = Math.cos(i), o = Math.sin(i);
                        return n * r + m.valueOrDefault(t.fontSize, a.global.defaultFontSize) * o
                    }, getLabelCapacity: function (e) {
                        var t = this, n = t.options.time.displayFormats.millisecond,
                            i = t.tickFormatFunction(b(e), 0, [], n), r = t.getLabelWidth(i),
                            o = t.isHorizontal() ? t.width : t.height, a = Math.floor(o / r);
                        return a > 0 ? a : 1
                    }
                });
                t.scaleService.registerScaleType("time", e, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {autoSkip: !1, source: "auto", major: {enabled: !1}}
                })
            }
        }, {1: 1, 25: 25, 45: 45}]
    }, {}, [7])(7)
});
var Autocomplete = function () {
    "use strict";

    function k(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var i = function (e, t) {
        return e.matches ? e.matches(t) : e.msMatchesSelector ? e.msMatchesSelector(t) : e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : null
    }, S = function (e, t) {
        return e.closest ? e.closest(t) : function (e, t) {
            for (var n = e; n && 1 === n.nodeType;) {
                if (i(n, t)) return n;
                n = n.parentNode
            }
            return null
        }(e, t)
    }, C = function (e) {
        return Boolean(e && "function" == typeof e.then)
    }, y = function e() {
        var r = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.search,
            i = t.autoSelect, o = void 0 !== i && i, a = t.setValue, s = void 0 === a ? function () {
            } : a, l = t.setAttribute, u = void 0 === l ? function () {
            } : l, c = t.onUpdate, d = void 0 === c ? function () {
            } : c, f = t.onSubmit, h = void 0 === f ? function () {
            } : f, p = t.onShow, g = void 0 === p ? function () {
            } : p, m = t.onHide, v = void 0 === m ? function () {
            } : m, y = t.onLoading, b = void 0 === y ? function () {
            } : y, x = t.onLoaded, w = void 0 === x ? function () {
            } : x;
        k(this, e), _(this, "value", ""), _(this, "searchCounter", 0), _(this, "results", []), _(this, "selectedIndex", -1), _(this, "handleInput", function (e) {
            var t = e.target.value;
            r.updateResults(t), r.value = t
        }), _(this, "handleKeyDown", function (e) {
            var t = e.key;
            switch (t) {
                case"Up":
                case"Down":
                case"ArrowUp":
                case"ArrowDown":
                    var n = "ArrowUp" === t || "Up" === t ? r.selectedIndex - 1 : r.selectedIndex + 1;
                    e.preventDefault(), r.handleArrows(n);
                    break;
                case"Tab":
                    r.selectResult();
                    break;
                case"Enter":
                    var i = r.results[r.selectedIndex];
                    r.selectResult(), r.onSubmit(i);
                    break;
                case"Esc":
                case"Escape":
                    r.hideResults(), r.setValue();
                    break;
                default:
                    return
            }
        }), _(this, "handleFocus", function (e) {
            var t = e.target.value;
            r.updateResults(t), r.value = t
        }), _(this, "handleBlur", function () {
            r.hideResults()
        }), _(this, "handleResultMouseDown", function (e) {
            e.preventDefault()
        }), _(this, "handleResultClick", function (e) {
            var t = e.target, n = S(t, "[data-result-index]");
            if (n) {
                r.selectedIndex = parseInt(n.dataset.resultIndex, 10);
                var i = r.results[r.selectedIndex];
                r.selectResult(), r.onSubmit(i)
            }
        }), _(this, "handleArrows", function (e) {
            var t = r.results.length;
            r.selectedIndex = (e % t + t) % t, r.onUpdate(r.results, r.selectedIndex)
        }), _(this, "selectResult", function () {
            var e = r.results[r.selectedIndex];
            e && r.setValue(e), r.hideResults()
        }), _(this, "updateResults", function (e) {
            var t = ++r.searchCounter;
            r.onLoading(), r.search(e).then(function (e) {
                t === r.searchCounter && (r.results = e, r.onLoaded(), 0 !== r.results.length ? (r.selectedIndex = r.autoSelect ? 0 : -1, r.onUpdate(r.results, r.selectedIndex), r.showResults()) : r.hideResults())
            })
        }), _(this, "showResults", function () {
            r.setAttribute("aria-expanded", !0), r.onShow()
        }), _(this, "hideResults", function () {
            r.selectedIndex = -1, r.results = [], r.setAttribute("aria-expanded", !1), r.setAttribute("aria-activedescendant", ""), r.onUpdate(r.results, r.selectedIndex), r.onHide()
        }), _(this, "checkSelectedResultVisible", function (e) {
            var t = e.querySelector('[data-result-index="'.concat(r.selectedIndex, '"]'));
            if (t) {
                var n = e.getBoundingClientRect(), i = t.getBoundingClientRect();
                i.top < n.top ? e.scrollTop -= n.top - i.top : i.bottom > n.bottom && (e.scrollTop += i.bottom - n.bottom)
            }
        }), this.search = C(n) ? n : function (e) {
            return Promise.resolve(n(e))
        }, this.autoSelect = o, this.setValue = s, this.setAttribute = u, this.onUpdate = d, this.onSubmit = h, this.onShow = g, this.onHide = v, this.onLoading = b, this.onLoaded = w
    }, t = 0, b = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "".concat(e).concat(++t)
    }, x = function (e, t) {
        var n = e.getBoundingClientRect(), i = t.getBoundingClientRect();
        return n.bottom + i.height > window.innerHeight && window.innerHeight - n.bottom < n.top && window.pageYOffset + n.top - i.height > 0 ? "above" : "below"
    }, w = function (r, o, a) {
        var s;
        return function () {
            var e = this, t = arguments, n = function () {
                s = null, a || r.apply(e, t)
            }, i = a && !s;
            clearTimeout(s), s = setTimeout(n, o), i && r.apply(e, t)
        }
    }, T = function () {
        function i(e, t, n) {
            k(this, i), this.id = "".concat(n, "-result-").concat(e), this.class = "".concat(n, "-result"), this["data-result-index"] = e, this.role = "option", e === t && (this["aria-selected"] = "true")
        }

        var e, t, n;
        return e = i, (t = [{
            key: "toString", value: function () {
                var n = this;
                return Object.keys(this).reduce(function (e, t) {
                    return "".concat(e, " ").concat(t, '="').concat(n[t], '"')
                }, "")
            }
        }]) && r(e.prototype, t), n && r(e, n), i
    }();
    return function e(t) {
        var o = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = n.search,
            r = n.onSubmit, a = void 0 === r ? function () {
            } : r, s = n.onUpdate, l = void 0 === s ? function () {
            } : s, u = n.baseClass, c = void 0 === u ? "autocomplete" : u, d = n.autoSelect, f = n.getResultValue,
            h = void 0 === f ? function (e) {
                return e
            } : f, p = n.renderResult, g = n.debounceTime, m = void 0 === g ? 0 : g;
        k(this, e), _(this, "expanded", !1), _(this, "loading", !1), _(this, "position", {}), _(this, "resetPosition", !0), _(this, "initialize", function () {
            o.root.style.position = "relative", o.input.setAttribute("role", "combobox"), o.input.setAttribute("autocomplete", "off"), o.input.setAttribute("autocapitalize", "off"), o.input.setAttribute("autocorrect", "off"), o.input.setAttribute("spellcheck", "false"), o.input.setAttribute("aria-autocomplete", "list"), o.input.setAttribute("aria-haspopup", "listbox"), o.input.setAttribute("aria-expanded", "false"), o.resultList.setAttribute("role", "listbox"), o.resultList.style.position = "absolute", o.resultList.style.zIndex = "1", o.resultList.style.minWidth = "100%", o.resultList.style.boxSizing = "border-box", o.resultList.id || (o.resultList.id = b("".concat(o.baseClass, "-result-list-"))), o.input.setAttribute("aria-owns", o.resultList.id), document.body.addEventListener("click", o.handleDocumentClick), o.input.addEventListener("input", o.core.handleInput), o.input.addEventListener("keydown", o.core.handleKeyDown), o.input.addEventListener("focus", o.core.handleFocus), o.input.addEventListener("blur", o.core.handleBlur), o.resultList.addEventListener("mousedown", o.core.handleResultMouseDown), o.resultList.addEventListener("click", o.core.handleResultClick), o.updateStyle()
        }), _(this, "setAttribute", function (e, t) {
            o.input.setAttribute(e, t)
        }), _(this, "setValue", function (e) {
            o.input.value = e ? o.getResultValue(e) : ""
        }), _(this, "renderResult", function (e, t) {
            return "<li ".concat(t, ">").concat(o.getResultValue(e), "</li>")
        }), _(this, "handleUpdate", function (e, r) {
            o.resultList.innerHTML = "", e.forEach(function (e, t) {
                var n = new T(t, r, o.baseClass), i = o.renderResult(e, n);
                "string" == typeof i ? o.resultList.insertAdjacentHTML("beforeend", i) : o.resultList.insertAdjacentElement("beforeend", i)
            }), o.input.setAttribute("aria-activedescendant", r > -1 ? "".concat(o.baseClass, "-result-").concat(r) : ""), o.resetPosition && (o.resetPosition = !1, o.position = x(o.input, o.resultList), o.updateStyle()), o.core.checkSelectedResultVisible(o.resultList), o.onUpdate(e, r)
        }), _(this, "handleShow", function () {
            o.expanded = !0, o.updateStyle()
        }), _(this, "handleHide", function () {
            o.expanded = !1, o.resetPosition = !0, o.updateStyle()
        }), _(this, "handleLoading", function () {
            o.loading = !0, o.updateStyle()
        }), _(this, "handleLoaded", function () {
            o.loading = !1, o.updateStyle()
        }), _(this, "handleDocumentClick", function (e) {
            o.root.contains(e.target) || o.core.hideResults()
        }), _(this, "updateStyle", function () {
            o.root.dataset.expanded = o.expanded, o.root.dataset.loading = o.loading, o.root.dataset.position = o.position, o.resultList.style.visibility = o.expanded ? "visible" : "hidden", o.resultList.style.pointerEvents = o.expanded ? "auto" : "none", "below" === o.position ? (o.resultList.style.bottom = null, o.resultList.style.top = "100%") : (o.resultList.style.top = null, o.resultList.style.bottom = "100%")
        }), this.root = "string" == typeof t ? document.querySelector(t) : t, this.input = this.root.querySelector("input"), this.resultList = this.root.querySelector("ul"), this.baseClass = c, this.getResultValue = h, this.onUpdate = l, "function" == typeof p && (this.renderResult = p);
        var v = new y({
            search: i,
            autoSelect: d,
            setValue: this.setValue,
            setAttribute: this.setAttribute,
            onUpdate: this.handleUpdate,
            onSubmit: a,
            onShow: this.handleShow,
            onHide: this.handleHide,
            onLoading: this.handleLoading,
            onLoaded: this.handleLoaded
        });
        m > 0 && (v.handleInput = w(v.handleInput, m)), this.core = v, this.initialize()
    }
}();
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function () {
    return i = {}, r.m = n = [function (e, t) {
        e.exports = function (e) {
            var t;
            if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var n = e.hasAttribute("readonly");
                n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
            } else {
                e.hasAttribute("contenteditable") && e.focus();
                var i = window.getSelection(), r = document.createRange();
                r.selectNodeContents(e), i.removeAllRanges(), i.addRange(r), t = i.toString()
            }
            return t
        }
    }, function (e, t) {
        function n() {
        }

        n.prototype = {
            on: function (e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({fn: t, ctx: n}), this
            }, once: function (e, t, n) {
                var i = this;

                function r() {
                    i.off(e, r), t.apply(n, arguments)
                }

                return r._ = t, this.on(e, r, n)
            }, emit: function (e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, t);
                return this
            }, off: function (e, t) {
                var n = this.e || (this.e = {}), i = n[e], r = [];
                if (i && t) for (var o = 0, a = i.length; o < a; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
                return r.length ? n[e] = r : delete n[e], this
            }
        }, e.exports = n, e.exports.TinyEmitter = n
    }, function (e, t, n) {
        var f = n(3), h = n(4);
        e.exports = function (e, t, n) {
            if (!e && !t && !n) throw new Error("Missing required arguments");
            if (!f.string(t)) throw new TypeError("Second argument must be a String");
            if (!f.fn(n)) throw new TypeError("Third argument must be a Function");
            if (f.node(e)) return c = t, d = n, (u = e).addEventListener(c, d), {
                destroy: function () {
                    u.removeEventListener(c, d)
                }
            };
            if (f.nodeList(e)) return a = e, s = t, l = n, Array.prototype.forEach.call(a, function (e) {
                e.addEventListener(s, l)
            }), {
                destroy: function () {
                    Array.prototype.forEach.call(a, function (e) {
                        e.removeEventListener(s, l)
                    })
                }
            };
            if (f.string(e)) return i = e, r = t, o = n, h(document.body, i, r, o);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var i, r, o, a, s, l, u, c, d
        }
    }, function (e, n) {
        n.node = function (e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
        }, n.nodeList = function (e) {
            var t = Object.prototype.toString.call(e);
            return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
        }, n.string = function (e) {
            return "string" == typeof e || e instanceof String
        }, n.fn = function (e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }, function (e, t, n) {
        var a = n(5);

        function o(e, t, n, i, r) {
            var o = function (t, n, e, i) {
                return function (e) {
                    e.delegateTarget = a(e.target, n), e.delegateTarget && i.call(t, e)
                }
            }.apply(this, arguments);
            return e.addEventListener(n, o, r), {
                destroy: function () {
                    e.removeEventListener(n, o, r)
                }
            }
        }

        e.exports = function (e, t, n, i, r) {
            return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
                return o(e, t, n, i, r)
            }))
        }
    }, function (e, t) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        e.exports = function (e, t) {
            for (; e && 9 !== e.nodeType;) {
                if ("function" == typeof e.matches && e.matches(t)) return e;
                e = e.parentNode
            }
        }
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0), r = n.n(i), o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function s(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, s), this.resolveOptions(e), this.initSelection()
        }

        var l = (function (e, t, n) {
                return t && a(e.prototype, t), n && a(e, n), e
            }(s, [{
                key: "resolveOptions", value: function (e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                }
            }, {
                key: "initSelection", value: function () {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake", value: function () {
                    var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function () {
                        return e.removeFake()
                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = r()(this.fakeElem), this.copyText()
                }
            }, {
                key: "removeFake", value: function () {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                }
            }, {
                key: "selectTarget", value: function () {
                    this.selectedText = r()(this.target), this.copyText()
                }
            }, {
                key: "copyText", value: function () {
                    var t = void 0;
                    try {
                        t = document.execCommand(this.action)
                    } catch (e) {
                        t = !1
                    }
                    this.handleResult(t)
                }
            }, {
                key: "handleResult", value: function (e) {
                    this.emitter.emit(e ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection", value: function () {
                    this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy", value: function () {
                    this.removeFake()
                }
            }, {
                key: "action", set: function (e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : "copy";
                    if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                }, get: function () {
                    return this._action
                }
            }, {
                key: "target", set: function (e) {
                    if (void 0 !== e) {
                        if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = e
                    }
                }, get: function () {
                    return this._target
                }
            }]), s), u = n(1), c = n.n(u), d = n(2), f = n.n(d),
            h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, p = function (e, t, n) {
                return t && g(e.prototype, t), n && g(e, n), e
            };

        function g(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        var m = (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(v, c.a), p(v, [{
            key: "resolveOptions", value: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {};
                this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === h(t.container) ? t.container : document.body
            }
        }, {
            key: "listenClick", value: function (e) {
                var t = this;
                this.listener = f()(e, "click", function (e) {
                    return t.onClick(e)
                })
            }
        }, {
            key: "onClick", value: function (e) {
                var t = e.delegateTarget || e.currentTarget;
                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l({
                    action: this.action(t),
                    target: this.target(t),
                    text: this.text(t),
                    container: this.container,
                    trigger: t,
                    emitter: this
                })
            }
        }, {
            key: "defaultAction", value: function (e) {
                return y("action", e)
            }
        }, {
            key: "defaultTarget", value: function (e) {
                var t = y("target", e);
                if (t) return document.querySelector(t)
            }
        }, {
            key: "defaultText", value: function (e) {
                return y("text", e)
            }
        }, {
            key: "destroy", value: function () {
                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
            }
        }], [{
            key: "isSupported", value: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : ["copy", "cut"], n = "string" == typeof t ? [t] : t,
                    i = !!document.queryCommandSupported;
                return n.forEach(function (e) {
                    i = i && !!document.queryCommandSupported(e)
                }), i
            }
        }]), v);

        function v(e, t) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, v);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));
            return n.resolveOptions(t), n.listenClick(e), n
        }

        function y(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n)) return t.getAttribute(n)
        }

        t.default = m
    }], r.c = i, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
            return t[e]
        }.bind(null, i));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 6).default;

    function r(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {i: e, l: !1, exports: {}};
        return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }

    var n, i
});