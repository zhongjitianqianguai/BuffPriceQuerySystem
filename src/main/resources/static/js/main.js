BuffConfig = {
    MAX_SELL_PRICE: 15 * 1e4,
    MIN_PRICE: .01,
    PayMethod: {
        ALIPAY_BALANCE: 3,
        ALIPAY_PAGE: 4,
        EPAY_BALANCE: 1,
        EPAY_QUICK_PAY: 2,
        ALIPAY_PAGE: 4,
        WX_PAGE: 6,
        ALIPAY_PAGE_PCREDIT: 10
    },
    STEAM_TIMEOUT: 30 * 1e3,
    SteamAPP: {
        APPID_MAPS: {
            "-578080": "pubg_recycle",
            433850: "h1z1",
            570: "dota2",
            578080: "pubg",
            730: "csgo",
            440: "tf2",
            252490: "rust"
        },
        CONTEXTID_MAPS: {"-578080": "2", 433850: "1", 570: "2", 578080: "2", 730: "2", 440: "2", 252490: "2"},
        DEFAULT_GAME: "csgo"
    }
};

function i18n(e, a) {
    var i = i18nData.getValue(e);
    return i ? (a && Object.keys(a).map(function (e, t) {
        i = i.replace("{{" + e + "}}", a[e])
    }), i) : e
}

function toggleGallery(e) {
    var t = $(".tr_gallery").eq(e);
    "none" == t.css("display") ? (t.show(), $(".j_gallery_handler").eq(e).html(i18n("collapse"))) : (t.hide(), $(".j_gallery_handler").eq(e).html(i18n("expand")))
}

function cancelBubble(e) {
    var t = e || window.event;
    t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
}

function setShopRecommend() {
    var e = $("#j_recommend .slider-handle").eq(0), t = $("#j_recommend .slider-handle").eq(1),
        a = $("#j_recommend .list_card ul").eq(0), i = 0, r = 161, n = a.children().length;
    a.css({width: r * n}), n > 5 && t.addClass("clickable"), t.click(function () {
        $(this).hasClass("clickable") && (i++, a.animate({marginLeft: -r * i}, 400), e.addClass("clickable"), i + 5 >= n && $(this).removeClass("clickable"))
    }), e.click(function () {
        $(this).hasClass("clickable") && (i--, a.animate({marginLeft: -r * i}, 400), t.addClass("clickable"), i <= 0 && $(this).removeClass("clickable"))
    })
}

function isMobile() {
    for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], a = !1, i = 0; i < t.length; i++) if (e.indexOf(t[i]) > 0) {
        a = !0;
        break
    }
    var r = window.screen.width, n = window.screen.height;
    return r < 500 && n < 800 && (a = !0), a
}

var I18N = function () {
    function t(e) {
        var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
        if (t) {
            var a = "";
            try {
                a = decodeURIComponent(t[2])
            } catch (e) {
            }
            return a
        }
        return ""
    }

    var a = {zh: {}, en: {}, tw: {}, es: {}, pt: {}, ru: {}}, i = "zh", r = function () {
        var e = t("Locale-Supported") || i;
        return "zh-Hans" == e ? "zh" : e
    };
    return {
        updateData: function (e, t) {
            for (key in t) a[e][key] = t[key]
        }, getValue: function (e) {
            var t = r();
            return e in a[t] ? a[t][e] : ["es", "pt", "ru"].indexOf(t) > -1 && e in a.en ? a.en[e] : e in a[i] ? a[i][e] : e
        }
    }
}, i18nData = new I18N;
i18nData.updateData("zh", {
    collapse: "收起",
    expand: "展开",
    last_7_days_sell_stats: "最近7天出售统计",
    delivery_rate: "发货成功率",
    delivery_time: "平均发货时间"
}), i18nData.updateData("en", {
    collapse: "Collapse",
    expand: "Expand",
    last_7_days_sell_stats: "Last 7 days sell stats",
    delivery_rate: "Delivery rate",
    delivery_time: "Delivery time"
}), i18nData.updateData("tw", {
    collapse: "收起",
    expand: "展開",
    last_7_days_sell_stats: "最近7天出售統計",
    delivery_rate: "發貨成功率",
    delivery_time: "平均發貨時間"
}), i18nData.updateData("es", {
    collapse: "Cerrar",
    expand: "Expandir",
    last_7_days_sell_stats: "Last 7 days sell stats",
    delivery_rate: "Tasa de envíos",
    delivery_time: "Tiempo de envío"
}), i18nData.updateData("pt", {
    collapse: "Recolher",
    expand: "Expandir",
    last_7_days_sell_stats: "Last 7 days sell stats",
    delivery_rate: "Taxa de entrega",
    delivery_time: "Tempo de entrega"
}), i18nData.updateData("ru", {
    collapse: "Свернуть",
    expand: "Развернуть",
    last_7_days_sell_stats: "Last 7 days sell stats",
    delivery_rate: "Скорость отправки",
    delivery_time: "Срок отправки"
});
var mobile = isMobile(),
    mobilePopupList = ["j_popup_g101_bind", "j_popup_g101_bind_code", "j_popup_g101_bind_qr", "j_popup_epay", "j_popup_selling_preview", "j_popup_login"],
    bindResize = !1, Popup = {
        boxes: [], baseIndex: null, show: function (e, t) {
            var a = t && t.forceClose ? "" : "onclick='Popup.hide()'";
            $("body").append("<div class='cover'" + a + "></div>"), this.boxes.push($("#" + e));
            var i = this.boxes.length, r = this.boxes[i - 1];
            this.baseIndex = this.baseIndex || parseInt(r.css("z-index")), $(".cover").eq(i - 1).show().css("z-index", this.baseIndex + 2 * i);
            var n = {"margin-left": -r.width() / 2, "margin-top": -r.height() / 2, "z-index": this.baseIndex + 2 * i + 1};
            if (mobile && mobilePopupList.includes(e)) {
                var o = window.innerWidth < window.innerHeight ? window.innerWidth / r.width() : window.innerHeight / r.height();
                n.transform = "scale(" + .98 * o + ") translateZ(0) translate3d(0,0,0)", $(window).bind("resize", function () {
                    var e = window.innerWidth < window.innerHeight ? window.innerWidth / r.width() : window.innerHeight / r.height();
                    r.css("transform", "scale(" + .98 * e + ") translateZ(0) translate3d(0,0,0)")
                }), bindResize = !0
            }
            r.show().css(n), Buff.initSelect("#" + e + " .w-Select"), Buff.initSteper("#" + e + " .w-Steper"), Buff.pricePatten("#" + e + " .j_filter")
        }, hide: function () {
            var e = this.boxes.length;
            e > 0 && (this.boxes[e - 1].hide(), $(".cover").eq(e - 1).remove(), this.boxes.pop()), mobile && bindResize && ($(window).unbind("resize"), bindResize = !1)
        }
    }, Buff = {
        _timer_Toast: null, setCompValue: function (e, i) {
            var t = $("#" + e);
            if (t.hasClass("w-Search")) t.find("input").val(i); else if (t.hasClass("w-Counter")) {
                var a = t.find("input");
                i.min && a.eq(0).val(i.min), i.max && a.eq(1).val(i.max)
            } else if (t.hasClass("w-Order")) t.attr("value", i).addClass("w-Order_" + i); else if (t.hasClass("h1z1-selType")) t.children(".w-SelType").each(function (e, a) {
                if ($(a).find("p").attr("value") == i) return $(a).addClass("selected").attr("value", i), !1;
                $(a).find("li").each(function (e, t) {
                    if ($(t).attr("value") == i) return $(t).addClass("on"), $(a).addClass("selected").attr("value", i), !1
                })
            }); else if (t.hasClass("w-Select-Multi")) {
                t.attr("value", i);
                var r, n = "h6,p";
                t.find(n).each(function (e, t) {
                    if ($(t).is("p") ? $(t).remove("on") : $(t).parent().removeClass("on"), $(t).attr("value") == i) return $(t).is("p") ? $(t).addClass("on") : $(t).parent().addClass("on"), r = $(t), !1
                }), t.find("h3").html(r.html())
            } else {
                t.attr("value", i);
                var r, n = "li";
                if ((t.hasClass("w-Tag") || t.hasClass("w-Switcher")) && (n = "span,div"), t.find(n).removeClass("on").each(function (e, t) {
                    if ($(t).attr("value") == i) return $(t).addClass("on"), r = $(t), !1
                }), t.hasClass("w-Select") || t.hasClass("w-SelHero")) {
                    var o = r.attr("title") || r.html();
                    t.find("h3").html(o)
                }
            }
        }, message: function (e, t) {
            $("#j_Message").length <= 0 && $("body").append('<div id="j_Message">'), $Message = $("#j_Message");
            var a = 3e3,
                i = $('<div class="w-Message"><div class="w-Message-cont"></div><i class="w-Message-close">×</i></div>');
            t ? ("success" == t.type ? i.addClass("w-Message_success") : "warning" == t.type && i.addClass("w-Message_warning"), "string" == typeof t.delay ? i.find(".w-Message-close").show().on("click", function () {
                i.remove(), t.callback && t.callback()
            }) : ("number" == typeof t.delay && (a = t.delay), setTimeout(function () {
                i.remove(), t.callback && t.callback()
            }, a))) : setTimeout(function () {
                i.remove()
            }, a), i.find(".w-Message-cont").html(e), i.slideDown(100), $Message.prepend(i)
        }, toast: function (e, t) {
            var a = $("#j_w-Toast"), i = this;
            a.length < 1 && (a = $('<div id="j_w-Toast"></div>'), $("body").append(a)), a.hide(), a.attr("class", t && t.type ? "w-Toast_" + t.type : "");
            var r = $("<p></p>").text(e);
            t && t.type && r.prepend($('<i class="icon"></i>').addClass("icon_" + t.type + "_mid")), clearTimeout(i._timer_Toast), setTimeout(function () {
                a.html(r).show().css({
                    "margin-left": -a.outerWidth() / 2,
                    "margin-top": -a.outerHeight() / 2
                }), i._timer_Toast = setTimeout(function () {
                    a.fadeOut(function () {
                        a.html("")
                    })
                }, 2e3)
            }, 100)
        }, initSelect: function (e) {
            $(e).each(function (e, t) {
                var a = $(this);
                if (0 != $(this).find("ul").width() && "inited" != a.attr("init")) {
                    a.attr("init", "inited");
                    var i = $(this).find("ul").width() + 6, r = $(this).find("h3"), n = $(this).find("li");
                    i <= r.outerWidth() + 8 && (i = r.outerWidth() + 18), i < 100 && (i = 100), $(this).find("ul").width(i), $(this).width(i), n.width(i - 18).off().click(function () {
                        r.html($(this).html()), n.removeClass("on"), $(this).addClass("on");
                        var e = $(this).attr("value");
                        void 0 == e && (e = ""), a.removeClass("on").attr("value", e), a.trigger("change")
                    }), setTimeout(function () {
                        a.css("visibility", "visible")
                    }, 200);
                    var o;
                    $(this).off().mouseleave(function () {
                        o = setTimeout(function () {
                            a.removeClass("on")
                        }, 300)
                    }).mouseenter(function () {
                        clearTimeout(o)
                    }), r.off().click(function () {
                        a.toggleClass("on")
                    }), $.trim(r.html()) || (r.html(n.eq(0).html()), a.removeClass("on").attr("value", n.eq(0).attr("value")), n.eq(0).addClass("on"))
                }
            })
        }, initSelectMulti: function (e) {
            $(e).each(function (t, e) {
                var a = $(this);
                if (0 != $(this).find("ul").width() && "inited" != a.attr("init")) {
                    a.attr("init", "inited");
                    var i = $(this).find("ul").width() + 6, r = $(this).find("h3"), n = $(this).find("li");
                    i <= r.outerWidth() + 8 && (i = r.outerWidth() + 18), $(this).find("ul").width(i), "left" === $(this).attr("data-postion") ? $(this).find("li div").css({
                        left: "auto",
                        right: i + 1
                    }) : $(this).find("li div").css("left", i + 1), $(this).width(i);
                    var o = $(this).attr("data-multi"), s = $(this).attr("data-childSingle");
                    o ? $(this).find("ul").eq(0).on("click", "h6,p", function () {
                        if ($(this).is("p")) {
                            $(this).hasClass("on") ? $(this).removeClass("on") : ($(this).addClass("on"), s && $(this).siblings().removeClass("on"));
                            var i = a.find(".on"), r = [];
                            $.each(i, function (e, t) {
                                var a = i.eq(e).attr("value");
                                a && r.push(a)
                            }), a.attr("value", r.join(",")), a.trigger("change")
                        }
                    }) : $(this).find("ul").eq(0).on("click", "h6,p", function () {
                        if ($(this).attr("value") && "" != $(this).attr("value") || 0 == $(this).attr("value")) {
                            r.html($(this).html()), a.removeClass("on").find("li,p").removeClass("on"), $(this).is("p") ? $(this).addClass("on") : $(this).parent().addClass("on");
                            var e = $(this).attr("value");
                            void 0 == e && (e = ""), a.removeClass("on").attr("value", e), a.trigger("change")
                        }
                    });
                    var _ = [], c = [];
                    n.mouseenter(function () {
                        var o = $(this), e = o.index();
                        clearTimeout(_[e]), c[e] = setTimeout(function () {
                            var e = document.documentElement.clientHeight, t = o.offset(), a = o.find("div"),
                                i = a.height(), r = "auto", n = "auto";
                            t.top + i > e ? n = t.top - e + 30 : r = 1, o.find("div").css({
                                top: r,
                                bottom: n
                            }), o.addClass("hover")
                        }, 200)
                    }).mouseleave(function () {
                        var e = $(this);
                        t = e.index(), clearTimeout(c[t]), _[t] = setTimeout(function () {
                            e.removeClass("hover")
                        }, 200)
                    }), setTimeout(function () {
                        a.css("visibility", "visible")
                    }, 100);
                    var l;
                    $(this).off().mouseleave(function () {
                        l = setTimeout(function () {
                            a.removeClass("on")
                        }, 200)
                    }).mouseenter(function () {
                        clearTimeout(l)
                    }), r.off().click(function () {
                        a.toggleClass("on")
                    }), $.trim(r.html()) || (r.html(n.eq(0).html()), a.removeClass("on").attr("value", n.eq(0).attr("value")), n.eq(0).addClass("on"))
                }
            })
        }, initSteper: function (e) {
            $(e).each(function (e, t) {
                input_Timer = null;
                var a = $(this), i = a.find("input").eq(0), r = parseInt(a.attr("min")), n = parseInt(a.attr("max")), o = 1;
                a.attr("value") && !isNaN(parseInt(a.attr("value"))) && (o = parseInt(a.attr("value")));
                var s = o;
                a.attr("value", o), i.val(o), a.off().on("click", "span", function () {
                    if (0 == $(this).index()) {
                        var e = o - 1;
                        (!r || e >= r) && (a.attr("value", e), i.val(e), o = e, a.trigger("change"), $(this).siblings().removeClass("disabled"), e == r && $(this).addClass("disabled"))
                    } else {
                        var e = o + 1;
                        (!n || e <= n) && (a.attr("value", e), i.val(e), o = e, a.trigger("change"), $(this).siblings().removeClass("disabled"), e == n && $(this).addClass("disabled"))
                    }
                }), i.off().on("keypress", function (e) {
                    var t = e.keyCode || e.charCode;
                    return 9 == t || 13 == t || 37 == t || 39 == t || /[\b\d\-]/.test(String.fromCharCode(t))
                }).on("keyup", function (e) {
                    clearTimeout(input_Timer);
                    var t = $.trim($(this).val());
                    "" != t && "-" != t && (/[^0-9\.\-]/.test(t) && (t = t.replace(/[^0-9\.\-]/g, "")), t = parseInt(i.val()), t || (t = s), r && t <= r ? (t = r, a.find("span").eq(0).addClass("disabled"), a.find("span").eq(1).removeClass("disabled")) : r && t > r && a.find("span").eq(0).removeClass("disabled"), n && t >= n ? (t = n, a.find("span").eq(0).removeClass("disabled"), a.find("span").eq(1).addClass("disabled")) : n && t < n && a.find("span").eq(1).removeClass("disabled"), o = t, input_Timer = setTimeout(function () {
                        i.val(t), a.attr("value", t), a.trigger("change")
                    }, 300))
                }).on("blur", function () {
                    var e = $.trim($(this).val());
                    "" != e && "-" != e || (e = s, o = e, i.val(e), a.attr("value", e), a.trigger("change"))
                })
            })
        }, pricePatten: function (e) {
            var _ = null;
            $(e).each(function () {
                $(this).attr("pattened") || $(this).bind("input", function (e) {
                    var t = $(this).val(), a = t.replace(/[^\d.]/g, ""), i = a.indexOf(".");
                    -1 !== i && (a = a.replace(/\./g, ""), a = a.slice(0, i) + "." + a.slice(i, i + 2));
                    var r = a.split(".")[0], n = a.split(".")[1], o = "";
                    r ? (r = parseInt(r, 10).toString(10), o = r + (void 0 !== n ? "." + n : "")) : void 0 === n && "." !== a || (o = "0." + n), t !== o && $(this).val(o);
                    var s = $(this);
                    clearTimeout(_), _ = setTimeout(function () {
                        s.trigger("format", o)
                    }, 600)
                }).attr("pattened", !0)
            })
        }, getSelection: function () {
            var e = "";
            if (window.getSelection) if (!document.activeElement || "textarea" != document.activeElement.tagName.toLowerCase() && "input" != document.activeElement.tagName.toLowerCase()) {
                var t = window.getSelection();
                e = t.toString()
            } else {
                var a = document.activeElement.value;
                e = a.substring(document.activeElement.selectionStart, document.activeElement.selectionEnd)
            } else if (document.selection.createRange) {
                var i = document.selection.createRange();
                e = i.text
            }
            return e
        }, initSelectSearch: function (s) {
            var i = "on";
            $(document.body).on("mouseleave", s, function (e) {
                var t = $(this);
                setTimeout(function () {
                    t.removeClass(i)
                }, 200)
            }).on("click", s + " li", function (e) {
                var t = $(this);
                if (!t.hasClass("none")) {
                    var a = $(t.parents(s)), i = a.attr("value"), r = a.attr("title"), n = t.attr("value"),
                        o = t.attr("title");
                    a.mouseleave(), i === n && r === o || (a.find("h3").html(n ? t.html() : t.text()), a.attr("value", n).attr("title", o).trigger("change"))
                }
            }).on("click", s + " h3", function (e) {
                var t = $(this), a = $(t.parents(s));
                a.hasClass("w-Selectsearch--disable") || (a.hasClass(i) ? a.removeClass(i) : (a.addClass(i), a.find("input").focus(), a.trigger("init")))
            })
        }, initSelectBtn: function (e) {
            $(document.body).on("mouseenter", e + " .w-SelectBtn-arr", function (e) {
                var t = $(this), a = t.siblings(".w-SelectBtn_options");
                a.show();
                var i = null;
                return t.off().on("mouseleave", function () {
                    i = setTimeout(function () {
                        a.hide()
                    }, 200)
                }), a.on("mouseenter", function () {
                    clearTimeout(i), a.show()
                }).on("mouseleave", function () {
                    clearTimeout(i), a.hide()
                }), a.on("click", "li", function () {
                    clearTimeout(i), a.hide()
                }), !1
            })
        }, initCouponSelect: function (a, i, r) {
            if (!($("#" + a).length < 0)) {
                var n = $("#" + a);
                n.off();
                var e = "";
                if (!i.options || 0 == i.options.length) return i.placeholder = i18n("no_coupon_to_use"), n.css("cursor", "text"), void n.html(i18n("no_coupon_to_use"));
                var o = [];
                if ($.each(i.options, function (e, t) {
                    t.desc = t.desc || "", o.push('<li data-value="' + t.value + '"><span>' + t.label + "</span><small>" + t.desc + "</small></li>")
                }), e = "<ul>" + o.join("") + "</ul>", n.on("mouseenter", function () {
                    clearTimeout(window["couponTimmer" + a]), $(this).addClass("on")
                }).on("mouseleave", function () {
                    var e = this;
                    window["couponTimmer" + a] = setTimeout(function () {
                        $(e).removeClass("on")
                    }, 500)
                }).on("click", "li", function (e) {
                    var t = $(this);
                    n.removeClass("on"), r ? r($(this).attr("data-value"), a).then(function () {
                        n.find("h3 span").html(t.find("span").html()), n.find("li").removeClass("on"), n.attr("data-value", t.attr("data-value")), t.addClass("on"), "false" == t.attr("data-value") ? n.removeClass("setted").find("h3 span").html(i.placeholder) : n.addClass("setted"), n.trigger("change")
                    }, function () {
                    }) : (n.find("h3 span").html(t.find("span").html()), n.find("li").removeClass("on"), n.attr("data-value", t.attr("data-value")), t.addClass("on"), "false" == t.attr("data-value") ? n.removeClass("setted").find("h3 span").html(i18n("please_choose_coupon")) : n.addClass("setted"), n.trigger("change"))
                }), n.html("<h3><span>" + i.placeholder + '</span><i class="icon icon_arr_light_down"></i></h3>' + e), "defaultIndex" in i && -1 != i.defaultIndex) {
                    var t = n.find("li").eq(i.defaultIndex);
                    n.find("h3 span").html(t.find("span").html()), n.find("li").removeClass("on"), n.attr("data-value", t.attr("data-value")), t.addClass("on"), "false" == t.attr("data-value") ? n.removeClass("setted").find("h3 span").html(i18n("please_choose_coupon")) : n.addClass("setted")
                }
            }
        }, initTextArea: function (e) {
            $(document.body).on("input", e + " textarea", function (e) {
                var t = $(this), a = t.val(), i = a.length, r = t.attr("maxlength"),
                    n = t.parent().find(".w-TextArea-num").eq(0);
                n && (n.html(i + ""), r && i >= r ? n.css("color", "#D10D1C") : i > 0 ? n.css("color", "#3E3E3E") : n.css("color", ""))
            })
        }
    };
$(function () {
    function initSelHero(e) {
        e.toggleClass("on").off(), e.on("click", "li", function () {
            e.find("li").removeClass("on"), $(this).addClass("on"), e.removeClass("on"), e.find("h3").html($(this).attr("title")), e.attr("value", $(this).attr("value")), e.trigger("change")
        }).on("mouseleave", function () {
            timerSelHero = setTimeout(function () {
                e.removeClass("on")
            }, 300)
        }).on("mouseenter", function () {
            clearTimeout(timerSelHero)
        })
    }

    function initStone(t) {
        t.toggleClass("on").off(), t.on("click", "li", function () {
            t.find("li").removeClass("on"), $(this).addClass("on"), t.removeClass("on"), t.find("h3").html($(this).attr("title")), t.attr("value", $(this).attr("value")), t.trigger("change")
        }).on("mouseleave", function () {
            timerStone = setTimeout(function () {
                t.removeClass("on")
            }, 300)
        }).on("mouseenter", function () {
            clearTimeout(timerStone)
        }).on("click", "h5", function () {
            var e = $(this).index();
            $(this).addClass("on").siblings().removeClass("on"), t.find(".stone-list").hide().eq(e).show()
        })
    }

    /msie/.test(navigator.userAgent.toLowerCase()) && $("input[placeholder],textarea[placeholder],div[placeholder]").each(function (e, t) {
        var a = $(t).attr("placeholder");
        "" == $.trim($(t).val()) && $(t).addClass("c_placeholder").val(a), $(this).focus(function () {
            $.trim($(t).val()) == a && $(t).removeClass("c_placeholder").val("")
        }).blur(function () {
            "" != $.trim($(t).val()) && $.trim($(t).val()) != a || $(t).addClass("c_placeholder").val(a)
        })
    }), $("div[placeholder]").each(function (e, t) {
        var a = $(t).attr("placeholder");
        "" == $.trim($(t).html()) && $(t).addClass("c_placeholder").html(a), $(this).focus(function () {
            $.trim($(t).html()) == a && $(t).removeClass("c_placeholder").html("")
        }).blur(function () {
            "" != $.trim($(t).html()) && $.trim($(t).html()) != a && "<br>" != $.trim($(t).html()) || $(t).addClass("c_placeholder").html(a)
        })
    }), Buff.initSelect(".w-Select"), Buff.initSelectMulti(".w-Select-Multi"), Buff.initSteper(".w-Steper"), Buff.initSelectSearch(".w-Selectsearch"), Buff.initSelectBtn(".w-SelectBtn"), Buff.initTextArea(".w-TextArea"), $("#j_gamesel").on("mouseenter", function () {
        $(this).addClass("on")
    }).on("mouseleave", function () {
        $(this).removeClass("on")
    }).on("click", "div p", function () {
        $("#j_gamesel").removeClass("on").trigger("change", $(this).index()).find("h4").html($(this).html())
    }), $(".j_drop-handler").on("mouseenter", function () {
        $(this).addClass("showdrop")
    }).on("mouseleave", function () {
        $(this).removeClass("showdrop")
    }), $("body").on("click", ".w-SelHero h3", function () {
        initSelHero($(this).parent())
    }), $("body").on("click", ".w-Stone h3", function () {
        initStone($(this).parent())
    }), $("body").on("click", ".w-Switcher span", function () {
        $(this).hasClass("on") || ($(this).addClass("on").siblings().removeClass("on"), $(this).parent().attr("value", $(this).attr("value")), $(this).parent().trigger("change"))
    }), $("body").on("click", ".w-Order,.tb-Order", function () {
        var e = $(this).attr("value");
        e && "null" != e && "asc" != e ? "des" == e && $(this).attr({value: "asc"}).removeClass("w-Order_des").addClass("w-Order_asc") : $(this).attr({value: "des"}).removeClass("w-Order_asc").addClass("w-Order_des"), $(this).trigger("change")
    }), $("body").on("click", ".w-Tag span,.w-Tag div", function () {
        $(this).toggleClass("on").siblings().removeClass("on");
        var e = $(this).hasClass("on") ? $(this).attr("value") : "";
        $(this).parent().attr("value", e).trigger("change")
    }), $(".w-Counter").hover(function () {
        $(this).find(".w-Counter-pannel").show()
    }, function () {
        $(this).find(".w-Counter-pannel").hide()
    }).on("click", ".i_Btn_sub", function () {
        $(this).parent().parent().find(".i_Text").val("")
    }).on("click", ".i_Btn_main", function () {
        var e = $(this).parent().parent();
        e.find(".w-Counter-pannel").hide();
        var t = $.trim(e.find(".i_Text").eq(0).val()) || null, a = $.trim(e.find(".i_Text").eq(1).val()) || null;
        e.attr("value", t + "," + a).trigger("change")
    }), $("body").on("click", ".w-Checkbox span", function () {
        var a;
        $(this).index();
        if (a = $(this).parent().attr("value") && "" != $.trim($(this).parent().attr("value")) ? $(this).parent().attr("value").split(",") : new Array, $(this).hasClass("on")) {
            $(this).removeClass("on");
            var i = $(this).attr("value");
            $.each(a, function (e, t) {
                if (i == t) return a.splice(e, 1), !1
            }), $(this).parent().attr("value", a.toString())
        } else $(this).addClass("on"), a.push($(this).attr("value")), $(this).parent().attr("value", a.toString());
        $(this).parent().trigger("change")
    }), $("body").on("click", ".w-Checkbox span a", function (e) {
        e.stopPropagation()
    }), $("body").on("click", ".w-Radio span", function () {
        $(this).hasClass("on") || ($(this).addClass("on").siblings().removeClass("on"), $(this).parent().attr("value", $(this).attr("value")).trigger("change"))
    }), $(".w-Sel-Hero .hero-type").hover(function () {
        $(this).addClass("on")
    }, function () {
        $(this).removeClass("on")
    }).on("click", "li", function () {
        var e = $(this).parent().parent();
        $(this).hasClass("on") ? ($(this).removeClass("on"), e.parent().attr("value", "")) : (e.parent().attr("value", $(this).attr("value")).find("li").removeClass("on"), $(this).addClass("on")), e.parent().trigger("change")
    }), $(".w-SelType").hover(function () {
        $(this).addClass("on")
    }, function () {
        $(this).removeClass("on")
    }).on("click", "li", function (e) {
        var t = $(this).parent().parent();
        $(this).hasClass("on") ? ($(this).removeClass("on"), t.attr("value", ""), t.removeClass("selected")) : (t.attr("value", $(this).attr("value")).find("li").removeClass("on"), $(this).addClass("on"), t.addClass("selected"), t.parent().hasClass("h1z1-selType") && t.siblings(".selected").eq(0).removeClass("selected").attr("value", "").find(".on").removeClass("on")), e.stopPropagation(), t.trigger("change")
    }), $(".h1z1-selType").on("click", ".w-SelType", function () {
        $(this).hasClass("selected") && $(this).attr("value") == $(this).find("p").attr("value") ? $(this).attr("value", "").removeClass("selected").find(".on").removeClass("on") : ($(this).attr("value", $(this).find("p").attr("value")).addClass("selected").siblings(".selected").eq(0).removeClass("selected").attr("value", "").find(".on").removeClass("on"), $(this).find(".on").removeClass("on")), $(this).trigger("change")
    }), $("body").on("click", ".w-OrderGroup .w-Order", function (e, t) {
        $(this).siblings().attr({class: "w-Order", value: ""})
    });
    var tipsHandlerTimer = null;
    $("body").on("mouseenter", ".j_tips_handler", function (index, item) {
        if (clearTimeout(tipsHandlerTimer), $(this).attr("precalculate") && eval($(this).attr("precalculate")), $(this).attr("data-title") || $(this).attr("data-content")) {
            var $tip = $("#j_fixedtip");
            $tip.length <= 0 && ($tip = $('<div class="fixedtip" id="j_fixedtip"> <i class="icon icon_arr_big_right"></i> <h3></h3> <div></div> </div>'), $("body").append($tip)), $(this).attr("data-width") && $tip.css("width", $(this).attr("data-width")), $tip.find("h3").html($(this).attr("data-title")), $(this).attr("data-unsafe-content") ? $tip.find("div").html($(this).attr("data-unsafe-content")) : $(this).attr("data-content") ? $tip.find("div").html($(this).attr("data-content")) : $tip.find("div").html("");
            var left = $(this).offset().left, top = $(this).offset().top, direction = $(this).attr("data-direction");
            switch ($tip.attr("style", ""), $tip.removeClass("fixedtip2"), direction) {
                case"right":
                    $tip.find(".icon").attr("class", "icon icon_arr_big_left"), $tip.css({
                        left: left + $(this).width() + 16,
                        top: top,
                        marginTop: -.5 * ($tip.height() + 10)
                    }).show();
                    break;
                case"bottom":
                    $tip.addClass("fixedtip2"), $tip.find(".icon").attr("class", "icon icon_arr_big_left icon_arr_big_bot"), $tip.css({
                        left: left + $(this).width() / 2 - $tip.width() / 2 - 8,
                        top: top + $(this).height() + 10
                    }).show();
                    break;
                case"top":
                    $tip.addClass("fixedtip2"), $tip.find(".icon").attr("class", "icon icon_arr_big_left icon_arr_big_top"), $tip.css({
                        left: left + $(this).width() / 2 - $tip.width() / 2 - 8,
                        top: top - $tip.height() - $(this).height() + 5
                    }).show();
                    break;
                default:
                    $tip.find(".icon").attr("class", "icon  icon_arr_big_right"), $tip.css({
                        left: left,
                        top: top,
                        marginLeft: -1 * ($tip.width() + 40),
                        marginTop: -.5 * ($tip.height() + 10)
                    }).show()
            }
            var tipWidth = 160;
            $(this).attr("data-width") && (tipWidth = $(this).attr("data-width")), $tip.css("width", tipWidth + "px")
        }
        return !1
    }).on("mouseleave", ".j_tips_handler", function () {
        return tipsHandlerTimer = setTimeout(function () {
            $("#j_fixedtip").hide()
        }, 150), !1
    }).on("mouseenter", "#j_fixedtip", function () {
        return clearTimeout(tipsHandlerTimer), !1
    }).on("mouseleave", "#j_fixedtip", function () {
        return tipsHandlerTimer = setTimeout(function () {
            $("#j_fixedtip").hide()
        }, 150), !1
    }), $("body").on("mouseenter", ".j_rolluutips_handler", function (e, t) {
        var a = $("#j_rolluutip");
        a.length <= 0 && (a = $('<div class="rolluutip" id="j_rolluutip"><img src="' + $(this).attr("data-img") + '"></div>'), $("body").append(a));
        var i = $(this).offset().left, r = $(this).offset().top, n = "", o = "absolute";
        $.each($(this).parents(), function (e, t) {
            if ($(t).hasClass("popup")) return o = "fixed", "auto" !== r && (r -= $(window).scrollTop()), !1
        }), r + a.width() > $(window).height() ? (r = "auto", n = 10) : r -= 22, a.find(".icon").attr("class", "icon icon_arr_big_left"), a.css({
            left: i + $(this).width() + 10,
            top: r,
            bottom: n,
            position: o
        }).show()
    }).on("mouseleave", ".j_rolluutips_handler", function () {
        $("#j_rolluutip").hide()
    }), $("body").on("mouseenter", ".j_shoptip_handler", function (e, t) {
        if ($(this).attr("data-shop")) {
            var a = $("#j_fixedtip_shop");
            a.length <= 0 && (a = $('<div class="fixedtip fixedtip_shop" id="j_fixedtip_shop"> <i class="icon icon_arr_big_left"></i><h2>' + i18n("last_7_days_sell_stats") + '</h2><div class="line"></div><ul></ul></div>'), $("body").append(a));
            var i = $(this).attr("data-shop").split("|"), r = "-&nbsp;", n = "-&nbsp;";
            i[0] && (r = '<strong class="c_Blue">' + i[0] + "</strong>%"), i[1] && (i[1] <= 60 ? n = '<strong class="c_Blue">' + i[1] + "</strong>" + i18n("minutes") : (n = '<strong class="c_Blue">' + Math.floor(i[1] / 60) + "</strong>" + i18n("hours"), i[1] % 60 > 0 && (n += '<strong class="c_Blue">' + i[1] % 60 + "</strong>" + i18n("minute"))));
            var o = "<li><label>" + i18n("delivery_rate") + "</label><span>" + r + "</span></li><li><label>" + i18n("delivery_time") + "</label><span>" + n + "</span></li>";
            a.find("ul").html(o);
            var s = $(this).offset().left, _ = $(this).offset().top;
            a.css({left: s + $(this).width() + 16, top: _, marginTop: -.5 * (a.height() + 10)}).show()
        }
    }).on("mouseleave", ".j_shoptip_handler", function () {
        $("#j_fixedtip_shop").hide()
    });
    var ua = window.navigator.userAgent.toLowerCase();
    "ipad" != ua.match(/ipad/i) && "iphone" != ua.match(/iphone/i) || $("body div").on("click", function () {
    }), $("body").on("click", ".with-gallery", function (e) {
        toggleGallery($(".with-gallery").index(this))
    }), $("body").on("click", ".j_gallery_handler", function (e) {
        toggleGallery($(".j_gallery_handler").index(this))
    }), $.ajax({
        url: "https://websource.nie.netease.com/copyright/get/byreferer",
        type: "GET",
        dataType: "jsonp",
        success: function (e) {
            e && e.success && e.result.copyright && (e.result.copyright = e.result.copyright.replace("netease.1", "netease.2").replace("nie.1", "nie.2"), $("#NIE-copyRight").html(e.result.copyright))
        },
        error: function () {
        }
    });
    var $qqGroup = $("#j_bar-qq-list"), $qqGroups = $("#j_bar-qq-list li"), $qqGroupNav = $("#j_bar-qq-nav"),
        $qqGroupId = $("#j_qq-group-number"), $qqGroupName = $("#j_qq-group-name");
    $qqGroupId.html($qqGroups.eq(0).attr("data-group-id")), $qqGroupName.html($qqGroups.eq(0).attr("data-group-name")), $qqGroups.length > 1 && ($qqGroups.each(function (e, t) {
        $qqGroupNav.append("<span></span>")
    }), $qqGroupNav.find("span").eq(0).addClass("on"), $qqGroup.width(160 * $qqGroups.length), $qqGroupNav.on("click", "span", function (e) {
        var t = $("#j_bar-qq-nav span").index(this);
        $(this).addClass("on").siblings().removeClass("on"), $qqGroupId.html($qqGroups.eq(t).attr("data-group-id")), $qqGroupName.html($qqGroups.eq(t).attr("data-group-name")), $qqGroup.animate({marginLeft: -160 * t}, "fast")
    })), qqGroupTimer = null, $("#j_qq-gruop-handler").mouseenter(function () {
        clearTimeout(qqGroupTimer), $("#j_qq-group").show()
    }).mouseleave(function () {
        qqGroupTimer = setTimeout(function () {
            $("#j_qq-group").hide()
        }, 300)
    }), $("#j_qq-group").hover(function () {
        clearTimeout(qqGroupTimer)
    }, function () {
        qqGroupTimer = setTimeout(function () {
            $("#j_qq-group").hide()
        }, 300)
    })
});
buffPlugin = function () {
    var e = function () {
        Buff.alert = function (e) {
            var t = e.onClose;
            var a = e.error || false;
            var i = e.success;
            var r = e.cancel;
            var n = e.hide_popup_after_success;
            var o = e.hide_popup_after_cancel;
            var s = e.rememberDismiss;
            var _ = randomstring(10);
            if (s) {
                if (localStorage.getItem("remember_dismiss_" + s)) {
                    if (i) {
                        i(true);
                        return
                    }
                }
            }
            var c = template_render("alert_pat", {config: e, popup_id: _});
            $("body").append(c);
            $("#" + _ + " .i_Btn_sub").click(function (e) {
                e.preventDefault();
                if (typeof r != "undefined") {
                    r()
                }
                if (o || typeof o == "undefined") Popup.hide()
            });
            $("#" + _ + " .popup-close").click(function (e) {
                e.preventDefault();
                Popup.hide();
                if (typeof t != "undefined") {
                    t()
                }
            });
            $("#" + _ + " .i_Btn_main").click(function (e) {
                e.preventDefault();
                if ($("#remember-" + _).attr("value") === "1") {
                    localStorage.setItem("remember_dismiss_" + s, "1")
                }
                if (n || typeof n == "undefined") Popup.hide();
                if (typeof i != "undefined") {
                    i()
                }
            });
            Popup.show(_);
            return _
        }
    };
    var t = function () {
        Buff.guide = function (e) {
            var t = e.title || i18n("description");
            var a = e.hideClose || false;
            var i = e.confirmText || i18n("ok");
            var r = e.onConfirm;
            var n = e.rememberDismiss;
            var o = e.content || "";
            var s = randomstring(10);
            if (n) {
                if (localStorage.getItem("remember_dismiss_" + n)) {
                    if (typeof r != "undefined") {
                        r()
                    }
                    return
                }
            }
            var _ = '<div class="popup popup_guide_sell" id="' + s + '" style="width:600px;">';
            if (!a) {
                _ += '<a class="popup-close" href="javascript:;" onclick="Popup.hide()">×</a>'
            }
            _ += '<div class="popup-header"><h2>' + t + '</h2></div>                            <div class="popup-cont">' + o + '<div class="popup-btns">';
            if (n) {
                _ += '<div class="w-Checkbox f_14px" name="remember" value="">                                        <span value="1"><i class="icon icon_checkbox"></i>' + i18n("no_longer_prompt") + "</span>                                    </div>"
            }
            _ += '<a href="javascript:;" class="i_Btn i_Btn_main">' + i + "</a>                                </div>                            </div>                        </div>";
            $("body").append(_);
            $("#" + s + " .i_Btn_main").click(function (e) {
                e.preventDefault();
                if ($("#" + s + ' .w-Checkbox[name="remember"]').attr("value") === "1") {
                    localStorage.setItem("remember_dismiss_" + n, "1")
                }
                if (typeof r != "undefined") {
                    r()
                }
                Popup.hide()
            });
            Popup.show(s)
        }
    };
    var a = function () {
        Buff.dialog = function (e) {
            var t = e.title || i18n("description");
            var a = e.hideClose || false;
            var i = e.cancelText || i18n("cancel");
            var r = e.confirmText || i18n("ok");
            var n = e.onConfirm;
            var o = e.content || "";
            var s = randomstring(10);
            var _ = '<div class="popup_cover" id="popup_cover_' + s + '" style="z-index:600"><div class="popup popup_guide_sell" id="' + s + '" style="width:600px;">';
            if (!a) {
                _ += '<a class="popup-close" href="javascript:;">×</a>'
            }
            _ += '<div class="popup-header"><h2>' + t + '</h2></div>                            <div class="popup-cont">' + o + '<div class="popup-btns">';
            _ += '<a href="javascript:;" class="i_Btn i_Btn_sub">' + i + '</a>                                    <a href="javascript:;" class="i_Btn i_Btn_main">' + r + "</a>                                </div>                            </div>                        </div>";
            $("body").append(_);
            var c = $("#" + s);
            $("#" + s + " .popup-close").click(function (e) {
                Popup.hide();
                c.remove()
            });
            $("#" + s + " .i_Btn_sub").click(function (e) {
                Popup.hide();
                c.remove()
            });
            $("#" + s + " .i_Btn_main").click(function (e) {
                if (typeof n != "undefined") {
                    n(c)
                } else {
                    c.remove()
                }
            });
            Popup.show(s)
        }
    };
    var i = function () {
        e();
        t();
        a()
    };
    return {init: i}
}();
selectSearch = function (e) {
    this.bind = function () {
        var e = $(this.selector).attr("bind");
        if (e) {
            return
        }
        var i = null, r = this;
        $(this.selector + " .w-Search input").on("keyup", function (e) {
            var t = $(this), a = t.val();
            a = $.trim(a);
            if (a && a === r.val) {
                return false
            }
            clearTimeout(i);
            i = setTimeout(function () {
                r.get(a)
            }, 200)
        });
        $(this.selector).attr("bind", "true")
    };
    this.get = function (i) {
        var r = this;
        this.val = i;
        var e = Object.assign({}, this.queryData, this.setParams(this.val));
        $.ajax({url: this.url, data: e}).done(function (e) {
            if (i !== r.val) return;

            function t(e, t) {
                if (e.name < t.name) return -1;
                if (e.name > t.name) return 1;
                return 0
            }

            var a = e.data.items.sort(t);
            r.render(a)
        }).fail(function () {
            Buff.toast(i18n("network_request_failed"))
        })
    };
    this.render = function (e) {
        var t = format_html('<li value="" title="<%= i18n("all") %>"><span class="w-Selectsearch-img"><b class="icon icon_all"></b></span><%= i18n("all") %></li>');
        if (e.length) {
            for (var a = 0; a < e.length; a++) {
                var i = e[a];
                t += format_html('<li value="<%= item.id %>" title="<%= item.name %>"><span class="w-Selectsearch-img"><img src="<%= item.goods_info.icon_url %>"></span><%= item.name %></li>', {item: i})
            }
        } else {
            t = format_html('<li class="none"><%= i18n("not_found_to_contain_the") %>“<%= val %>”<%= i18n("jewelry") %></li>', {val: this.val})
        }
        $(this.selector + " .w-Selectsearch-list").html(t)
    };
    var t = function () {
    };
    this.val = "";
    this.selector = e.id;
    this.url = e.url;
    this.queryData = e.queryData || {};
    this.setParams = e.setParams || function (e) {
        return {key: e}
    };
    this.bind();
    this.get()
};

function waterFall(e) {
    this.init(e)
}

waterFall.prototype.init = function (e) {
    this.arrHeight = [];
    this.arrLeft = [];
    this.parentHeight = 0;
    this.config(e)
};
waterFall.prototype.config = function (e) {
    this.pageWidth = e.width;
    this.itemWidth = e.itemWidth;
    this.columns = e.colums;
    this.gap = (this.pageWidth - this.itemWidth * this.columns) / (this.columns - 1);
    this.$parent = $(e.id);
    this.parentTop = this.$parent.position().top
};
waterFall.prototype.isFirst = function () {
    return this.arrHeight.length < this.columns
};
waterFall.prototype.setPosition = function (e) {
    if (this.$parent.length < 1) return;
    var t = this;
    var a = [];
    e.find(".pinterest-img img").each(function () {
        var e = $.Deferred();
        if (this.complete) {
            e.resolve()
        } else {
            $(this).load(function () {
                e.resolve()
            })
        }
        a.push(e)
    });
    $.when.apply(null, a).done(function () {
        t.setHeight(e)
    })
};
waterFall.prototype.setHeight = function (e) {
    var n = this;
    e.each(function (e, t) {
        var a = $(t);
        if (n.isFirst()) {
            a.css({top: 0, left: (n.itemWidth + n.gap) * n.arrHeight.length});
            n.arrHeight.push(t.offsetHeight);
            n.arrLeft.push(t.offsetLeft)
        } else {
            var i = Math.min.apply(n.arrHeight, n.arrHeight);
            var r = $.inArray(i, n.arrHeight);
            a.css({top: i + n.gap, left: n.arrLeft[r]});
            n.arrHeight[r] += a.height() + n.gap
        }
    });
    this.setParentHeight()
};
waterFall.prototype.setParentHeight = function () {
    var e = Math.max.apply(this.arrHeight, this.arrHeight);
    this.parentHeight = e + this.gap;
    this.$parent.css({height: this.parentHeight})
};
waterFall.prototype.getClientHeight = function () {
    return this.parentHeight + this.parentTop
};

function TableScrollTb(e) {
    this.offset = 0;
    this.clientX = 0;
    this.width = 0;
    this.min = 0;
    this.max = 0;
    this.init(e)
}

TableScrollTb.prototype.init = function (e) {
    this.config(e);
    this.bind()
};
TableScrollTb.prototype.config = function (e) {
    this.$el = e.$el;
    this.$child = e.$child;
    this.width = this.$child.width();
    this.min = this.width * .5;
    this.max = this.width * 2
};
TableScrollTb.prototype.bind = function () {
    this.$el && this.$el.addEventListener("touchstart", this.handelDown.bind(this));
    this.bindResize()
};
TableScrollTb.prototype.bindResize = function () {
    var t = null;
    var a = this;
    $(window).resize(function (e) {
        clearTimeout(t);
        t = setTimeout(function () {
            a.resize()
        }, 200)
    })
};
TableScrollTb.prototype.resize = function () {
    this.offset = 0;
    this.$child.removeAttr("style");
    this.width = this.$child.width();
    this.min = this.width * .5;
    this.max = this.width * 2
};
TableScrollTb.prototype.bindMove = function () {
    if (!this.$el) return;
    this.$el.addEventListener("touchmove", this.handelMove.bind(this));
    this.$el.addEventListener("touchend", this.handelUp.bind(this))
};
TableScrollTb.prototype.unbindMove = function () {
    if (!this.$el) return;
    this.$el.removeEventListener("touchmove", this.handelMove);
    this.$el.removeEventListener("touchend", this.handelUp)
};
TableScrollTb.prototype.handelDown = function (e) {
    var t = e.target;
    if (t.nodeName.toLocaleLowerCase() === "a" || t.nodeName.toLocaleLowerCase() === "img") {
        return
    }
    var a = e.touches[0];
    this.offset = 0;
    this.clientX = a.clientX;
    e.stopPropagation();
    e.preventDefault();
    this.bindMove()
};
TableScrollTb.prototype.handelMove = function (e) {
    var t = e.touches[0].clientX;
    var a = this.clientX - t;
    this.move(this.width - a);
    e.stopPropagation();
    e.preventDefault()
};
TableScrollTb.prototype.handelUp = function () {
    this.width = this.offset;
    this.unbindMove()
};
TableScrollTb.prototype.move = function (e) {
    if (e <= this.min) {
        e = this.min
    } else if (e >= this.max) {
        e = this.max
    }
    this.offset = e;
    this.$child.width(this.offset)
};
TableScrollTb.prototype.unbind = function () {
    this.unbindMove();
    this.$el && this.$el.removeEventListener("touchstart", this.handelDown);
    $(window).off("resize");
    this.$el = null;
    this.$child = null
};
jQuery.xhrPool = [];
jQuery.xhrPool.abortAll = function () {
    var e = [];
    for (var t in this) {
        if (isFinite(t) === true) {
            e.push(this[t])
        }
    }
    for (t in e) {
        e[t].abort()
    }
};
jQuery.xhrPool.abort = function (e) {
    for (var t in this) {
        if (typeof this[t] == "object" && this[t].url.startsWith(e)) {
            this[t].abort();
            this.remove(this[t]);
            break
        }
    }
};
jQuery.xhrPool.remove = function (e) {
    for (var t in this) {
        if (this[t] === e) {
            jQuery.xhrPool.splice(t, 1);
            break
        }
    }
};
$(document).ajaxSend(function (e, t, a) {
    t.url = a.url;
    jQuery.xhrPool.push(t)
});
$(document).ajaxComplete(function (e, t, a) {
    jQuery.xhrPool.remove(t)
});
assetTagFilter = function () {
    var w = "";
    var o = null;
    var _ = null;
    var h = null;
    var c = "";
    var e = function () {
        $(w).show();
        Buff.initSelectMulti(w + " .w-Select-Multi")
    };
    var t = function () {
        $(w).hide()
    };
    var a = function () {
        var e = {tag_ids: "null", paintseed: "null", tier: "null", paintseed_group: "null"};
        var a = [];
        var t = {};
        t.id = $(w + " .w-Select-Multi[name=unlock_style]").attr("value");
        t.name = $(w + " .w-Select-Multi[name=unlock_style] h3").text();
        if (t.id) {
            a.push(t)
        }
        $(w + " .w-Select-Multi[name=gems]").each(function () {
            var e = $(this).attr("category");
            var t = $(this).attr("value") || h.get(e);
            if (!t) {
                return
            }
            $(this).find("li.on h6").each(function () {
                if (!$(this).attr("value")) {
                    return
                }
                a.push({
                    id: $(this).attr("value"),
                    name: $(this).text(),
                    category: $(this).parent().parent().parent().attr("category")
                })
            })
        });
        var i = [];
        for (var r = 0; r < a.length; r++) {
            i.push(a[r].id)
        }
        if (i) e["tag_ids"] = i.join(",");
        var n = $(w + " .w-Select-Multi[name=tier]").attr("value") || h.get("tier");
        if (n) {
            var o = n.split("-");
            e[o[0]] = o[1];
            var s = $(w + " .w-Select-Multi[name=tier]").find("h6[value=" + n + "]").text();
            a.push({id: n, name: s || o[1]})
        }
        var _ = $(w + ".w-Select-Multi input[name=paintseed]").attr("value") || h.get("paintseed");
        if (_) {
            e["paintseed"] = _
        }
        var c = $(w + " .w-Select-Multi[name=float_range]").attr("value") || h.get("float_range");
        if (c) {
            var l = rangeKeyParser.parse(c);
            e.min_paintwear = l[0];
            e.max_paintwear = l[1]
        } else {
            e.min_paintwear = e.max_paintwear = ""
        }
        var d = $(w + " .w-Select-Multi[name=fade_range]").attr("value") || h.get("fade_range");
        if (d) {
            var u = rangeKeyParser.parse(d);
            e.min_fade = u[0];
            e.max_fade = u[1]
        } else {
            e.min_fade = e.max_fade = ""
        }
        e.name_tag = $(w + " .w-Select-Multi[name=name_tag]").attr("value") || h.get("name_tag");
        var p = $(".w-Select-Multi[name=extra_tag_ids]");
        if (p) {
            var f = h.get("extra_tag_ids") || p.attr("value");
            if (f !== undefined && f !== "custom") {
                extraTagIdsParser.parse(f, e, $("#sticker_wearless_checkbox").attr("value") ? "1" : "")
            }
        }
        var m = $.trim($(w + " .w-Counter").find(".i_Text").eq(0).val()) || h.get("min_price") || "";
        e.min_price = m;
        e.max_price = $.trim($(w + " .w-Counter").find(".i_Text").eq(1).val()) || h.get("max_price") || "";
        e.page_num = 1;
        return {tags: a, hashParams: e}
    };
    var l = function () {
        var e = a();
        updateHashData(e.hashParams)
    };
    var d = function () {
        $(w + " .w-Select-Multi li").removeClass("on");
        $(w + " .w-Select-Multi p").removeClass("on");
        $(w + " .w-Select-Multi").attr("value", "");
        $(w + " .w-Select-Multi").each(function () {
            $(this).find("h3").text($(this).data("title"))
        });
        var e = getParamsFromHash();
        var t = e.tag_ids;
        t = t ? t.split(",") : [];
        if (e.tier) {
            var a = "tier-" + e.tier;
            t.push(a)
        } else if (e.paintseed) {
            var a = "paintseed-" + e.paintseed;
            t.push(a)
        } else if (e.paintseed_group) {
            var a = "paintseed_group-" + e.paintseed_group;
            t.push(a)
        }
        var i = {};
        if (t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                var o = $(w + " .w-Select-Multi h6[value=" + n + "]");
                var s = $(w + " .w-Select-Multi p[value=" + n + "]");
                var _ = s.parents(".w-Select-Multi");
                var c = o.parents(".w-Select-Multi");
                if (s.length > 0) {
                    s.addClass("on");
                    _.attr("value", n);
                    var l = s.text();
                    _.find("h3").text(l);
                    i[k(_.attr("name"), _.attr("category"))] = {text: l, value: n}
                }
                if (o.length > 0) {
                    c.attr("value", n);
                    o.parent().addClass("on");
                    var l = o.text();
                    c.find("h3").text(l);
                    i[k(c.attr("name"), c.attr("category"))] = {text: l, value: n}
                }
                if (n.indexOf("paintseed-") == 0) {
                    var d = $(w + " .w-Select-Multi[name=tier] input");
                    d.parents(".w-Select-Multi").attr("value", n);
                    var u = n.split("-")[1];
                    d.val(u);
                    d.parents(".w-Select-Multi").find("h3").text(u);
                    i["tier"] = {text: u, value: n}
                }
            }
        }
        if (!e.paintseed) {
            $(w + " .w-Select-Multi[name=tier] input").val("")
        }
        if (e.min_paintwear || e.max_paintwear) {
            var p = rangeKeyParser.deparse(e.min_paintwear, e.max_paintwear);
            $(w + ' .w-Select-Multi h6[value="' + p + '"]').parents("li").addClass("on");
            $(w + " .w-Select-Multi[name=float_range]").attr("value", p).find("h3").text(p);
            i["min_paintwear"] = {text: e.min_paintwear, value: e.min_paintwear};
            i["max_paintwear"] = {text: e.max_paintwear, value: e.max_paintwear}
        }
        if (e.min_fade || e.max_fade) {
            var p = rangeKeyParser.deparse(e.min_fade, e.max_fade);
            var f = rangeKeyParser.deparse(e.min_fade && e.min_fade + "%", e.max_fade && e.max_fade + "%");
            $(w + ' .w-Select-Multi h6[value="' + p + '"]').parents("li").addClass("on");
            $(w + " .w-Select-Multi[name=fade_range]").attr("value", p).find("h3").text(f);
            i["min_fade"] = {text: e.min_fade, value: e.min_fade};
            i["max_fade"] = {text: e.max_fade, value: e.max_fade}
        }
        if (e.name_tag) {
            var m = $(w + " .w-Select-Multi[name=name_tag]").find("h6[value=" + e.name_tag + "]");
            m.parents("li").addClass("on");
            $(w + " .w-Select-Multi[name=name_tag]").attr("value", e.name_tag).find("h3").text(m.text());
            i["name_tag"] = {text: m.text(), value: e.name_tag}
        }
        if (e.extra_tag_ids) {
            var h = e.extra_tag_ids;
            var v = h;
            if (h == "non_empty" && e.wearless_sticker) {
                v = "non_empty_wearless"
            } else if (h == "squad_combos" && e.wearless_sticker) {
                v = "squad_combos_wearless"
            } else if (["", "empty", "non_empty", "squad_combos"].indexOf(h) == -1) {
                v = "custom"
            }
            var g = $(w + ' .w-Select-Multi[name=extra_tag_ids] h6[value="' + v + '"]').parents("li");
            g.addClass("on");
            $(w + " .w-Select-Multi[name=extra_tag_ids]").attr("value", v).find("h3").text(g.text());
            i["extra_tag_ids"] = {text: g.text(), value: v}
        }
        if (e.min_price) {
            $(w + " .w-Counter .i_Text").eq(0).val(e.min_price);
            i["min_price"] = {text: e.min_price, value: e.min_price}
        } else {
            $(w + " .w-Counter .i_Text").eq(0).val("")
        }
        if (e.max_price) {
            $(w + " .w-Counter .i_Text").eq(1).val(e.max_price);
            i["max_price"] = {text: e.max_price, value: e.max_price}
        } else {
            $(w + " .w-Counter .i_Text").eq(1).val("")
        }
        if (e.max_price_only) {
            $(w + " .w-Checkbox[name=max_price_only]").attr("value", "yes").find("span").addClass("on")
        }
        var y = e.sort_by || "default";
        if (y) {
            var b = $(w + " .w-Select-Multi[name=sort]").find('h6[value="' + y + '"]');
            $(w + " .w-Select-Multi[name=sort]").attr("value", y).find("h3").html(b.html())
        }
        $(w + " .w-Order").each(function () {
            $(this).removeClass("w-Order_asc").removeClass("w-Order_des").attr("value", "");
            var e = $(this).attr("name");
            if (y.indexOf(e) > -1) {
                if (y.indexOf("asc") > -1) {
                    $(this).addClass("w-Order_asc");
                    $(this).attr("value", "asc")
                } else {
                    $(this).addClass("w-Order_des");
                    $(this).attr("value", "des")
                }
            }
        });
        return i
    };
    var k = function (e, t) {
        return e == "gems" || t && t.startsWith("gem") ? t : e
    };
    var u = function (n) {
        w = "#" + n.container;
        o = n.popup_callback || null;
        var s = "popup-container";
        var a = n.precision || 4;
        var _ = n.custom_min_placeholder;
        var c = n.custom_max_placeholder;
        if (n.data && n.data.paintwear_choices && n.data.paintwear_choices[0]) {
            var e = n.data.paintwear_choices;
            if (!_) {
                _ = e[0][0];
                e.forEach(function (e) {
                    if (e[0] < _) _ = e[0]
                })
            }
            if (!c) {
                c = e[0][1];
                e.forEach(function (e) {
                    if (e[1] > c) c = e[1]
                })
            }
            $(w + " #custom-float-range").off("click").click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                var t = $(w).find(".float_range").addBack(".float_range").attr("value");
                var a = "";
                var i = "";
                if (t) {
                    var r = rangeKeyParser.parse(t);
                    a = r[0];
                    i = r[1]
                }
                var n = {custom_min_placeholder: _, custom_max_placeholder: c, custom_min_val: a, custom_max_val: i};
                var o = template_render("custom-paintwear-pat", n);
                $("#" + s).html(o);
                l();
                Popup.show("custom-paintwear-container")
            });
            var l = function () {
                var i = "#custom-paintwear-container input[name=custom_min]";
                var r = "#custom-paintwear-container input[name=custom_max]";
                $(i).on("focus", function () {
                    var e = $(this).attr("placeholder");
                    var t = $(this).val();
                    if (!t) {
                        $(this).val(e.split(".")[0] + ".")
                    }
                }).on("blur", function () {
                    var e = $(this).val();
                    if (!e) {
                        $(this).val("");
                        return
                    }
                    if (e == "0.") {
                        $(this).val("");
                        return
                    }
                    if (e < $(this).attr("placeholder")) {
                        $(this).val($(this).attr("placeholder"));
                        return
                    }
                    var t = $(r).attr("placeholder");
                    var a = $(r).val() || t;
                    if (e > a) {
                        $(this).val(a > t ? t : a);
                        $(r).val(e > t ? t : e)
                    }
                    if (e.indexOf(".") == e.length - 1) {
                        $(this).val(e.replace(".", ""))
                    }
                }).on("keyup", function (e) {
                    var t = e.keyCode || e.charCode;
                    $(this).val($(this).val().replace(new RegExp("^\\D*(\\d*(?:\\.\\d{0," + a + "})?).*$", "g"), "$1"));
                    if (t == 13) {
                        if ($(this).val().length > 0) {
                            $(this).trigger("blur");
                            $("#" + s + " #custom_paintwear_confirm").trigger("click")
                        }
                    }
                });
                $(r).on("focus", function () {
                    var e = $(this).attr("placeholder");
                    if (!e) {
                        return
                    }
                    var t = $(this).val();
                    if (!t) {
                        $(this).val(e.split(".")[0] + ".")
                    }
                }).on("blur", function () {
                    var e = $(this).val();
                    if (!e) {
                        $(this).val("");
                        return
                    }
                    if (e == "0.") {
                        $(this).val("");
                        return
                    }
                    if (e > $(this).attr("placeholder")) {
                        $(this).val($(this).attr("placeholder"));
                        return
                    }
                    var t = $(i).attr("placeholder");
                    var a = $(i).val() || t;
                    if (e < a) {
                        if (e < a) {
                            $(this).val(a < t ? t : a);
                            $(i).val(e < t ? t : e)
                        }
                    }
                    if (e.indexOf(".") == e.length - 1) {
                        $(this).val(e.replace(".", ""))
                    }
                }).on("keyup", function (e) {
                    var t = e.keyCode || e.charCode;
                    $(this).val($(this).val().replace(new RegExp("^\\D*(\\d*(?:\\.\\d{0," + a + "})?).*$", "g"), "$1"));
                    if (t == 13) {
                        if ($(this).val().length > 0) {
                            $(this).trigger("blur");
                            $("#" + s + " #custom_paintwear_confirm").trigger("click")
                        }
                    }
                });
                $("#" + s + " #custom_paintwear_reset").on("click", function () {
                    $(i).val("");
                    $(r).val("");
                    Popup.hide(s);
                    if (o) {
                        o({event: "custom_paintwear_reset", data: {}})
                    }
                });
                $("#" + s + " #custom_paintwear_confirm").on("click", function () {
                    Popup.hide();
                    var e = $(i).val().toString();
                    var t = $(r).val().toString();
                    if (n.allow_empty === false) {
                        if (!e) e = _;
                        if (!t) t = c
                    }
                    var a = rangeKeyParser.deparse(e, t);
                    if (o) {
                        o({event: "custom_paintwear_confirm", data: {custom_painwear_val: a}})
                    }
                })
            }
        }
    };
    var i = function (e) {
        w = "#" + e.container;
        c = e.tab;
        o = e.popup_callback || null;
        _ = e.data_observer || null;
        h = e.fdm || function () {
            return {
                sync: function (e) {
                }
            }
        };
        var t = template_render("asset-tag-filter-pat", e.data);
        $(w).html(t);
        var a = w + " .w-Select-Multi";
        $(document).on("click", ".tb-Order", function () {
            var e = $("div[name='sort']");
            e.children("h3:first").html(e.attr("default"))
        });
        $("body").on("change", a, function () {
            var e = $(this).attr("name");
            if (e == "tier") {
                $(this).find("input").val("")
            }
            if (e == "extra_tag_ids") {
                if ($(this).attr("value") == "custom") {
                    return
                }
                if (_) {
                    _("last_extra_tag_ids", $(this).attr("value"))
                }
            } else if (e == "sort") {
                updateHashData({page_num: 1, sort_by: $(this).attr("value")});
                return
            }
            var t = {text: $(this).find("h3").text()};
            h.sync(k(e, $(this).attr("category")), $(this).attr("value"), t);
            l()
        });
        $("body").on("change", a + " input", function (e) {
            var t = $(this).val();
            if (t.length > 0) {
                var t = parseInt(t);
                if (Number.isNaN(t) || t < 0 || t > 1e3) {
                    Buff.toast(i18n("please_input_01000_between_the"), {type: "error"});
                    return
                }
                $(this).parents(".w-Select-Multi").attr("value", "paintseed-" + t);
                $(this).parents(".w-Select-Multi").find("li").removeClass("on")
            } else {
                $(this).parents(".w-Select-Multi").attr("value", "")
            }
            h.sync($(this).parents(".w-Select-Multi").attr("name"), $(this).parents(".w-Select-Multi").attr("value"));
            l();
            e.stopPropagation()
        });
        $(w + " .w-Checkbox[name=max_price_only]").change(function () {
            updateHashData({max_price_only: $(this).attr("value"), page_num: 1})
        });
        $(w + " .w-Counter").hover(function () {
            $(this).find(".w-Counter-pannel").show()
        }, function () {
            $(this).find(".w-Counter-pannel").hide()
        }).on("click", ".i_Btn_sub", function () {
            var e = $(this).parent().parent();
            e.find(".i_Text").val("");
            var t = $(e.find(".i_Text")[0]);
            h.sync(t.attr("name"), "");
            var a = $(e.find(".i_Text")[1]);
            h.sync(a.attr("name"), "");
            l()
        }).on("click", ".i_Btn_main", function () {
            var e = $(this).parent().parent();
            var t = $(e.find(".i_Text")[0]);
            h.sync(t.attr("name"), t.val());
            var a = $(e.find(".i_Text")[1]);
            h.sync(a.attr("name"), a.val());
            l()
        });
        u(e);
        var s = "popup-container";
        if (e.data && e.data.has_fade_name) {
            $(w + " #custom-fade-range").click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                var t = $(w + " .w-Select-Multi[name=fade_range]").attr("value");
                var a = "";
                var i = "";
                if (t) {
                    var r = rangeKeyParser.parse(t);
                    a = r[0];
                    i = r[1]
                }
                var n = {
                    custom_min_placeholder: "79.0",
                    custom_max_placeholder: "100.0",
                    custom_min_val: a,
                    custom_max_val: i
                };
                var o = template_render("custom-fade-pat", n);
                $("#" + s).html(o);
                Popup.show("custom-fade-container")
            });
            var r = "#custom-fade-container input[name=custom_min]";
            var n = "#custom-fade-container input[name=custom_max]";
            $(document).on("focus", r, function () {
                var e = $(this).attr("placeholder");
                var t = $(this).val();
                if (!t) {
                    $(this).val(e)
                }
            }).on("blur", r, function () {
                var e = $(this).val();
                if (!e) {
                    $(this).val("");
                    return
                }
                var t = parseFloat(e);
                if (t < $(this).attr("placeholder")) {
                    $(this).val($(this).attr("placeholder"));
                    return
                }
                var a = parseFloat($(n).attr("placeholder"));
                var i = $(n).val() || a;
                if (t > i) {
                    $(this).val(i > a ? a : i);
                    $(n).val(t > a ? a : t)
                }
                if (e.indexOf(".") == e.length - 1) {
                    $(this).val(e.replace(".", ""))
                }
            }).on("keyup", r, function (e) {
                var t = e.keyCode || e.charCode;
                $(this).val($(this).val().replace(/^\D*(\d*(?:\.\d{0,1})?).*$/g, "$1"));
                if (t == 13) {
                    if ($(this).val().length > 0) {
                        $(this).trigger("blur");
                        $("#" + s + " #custom_fade_confirm").trigger("click")
                    }
                }
            });
            $(document).on("focus", n, function () {
                var e = $(this).attr("placeholder");
                if (!e) {
                    return
                }
                var t = $(this).val();
                if (!t) {
                    $(this).val(e)
                }
            }).on("blur", n, function () {
                var e = $(this).val();
                if (!e) {
                    $(this).val("");
                    return
                }
                var t = parseFloat(e);
                if (t > $(this).attr("placeholder")) {
                    $(this).val($(this).attr("placeholder"));
                    return
                }
                var a = parseFloat($(r).attr("placeholder"));
                var i = $(r).val() || a;
                if (t < i) {
                    if (e < i) {
                        $(this).val(i < a ? a : i);
                        $(r).val(e < a ? a : e)
                    }
                }
                if (e.indexOf(".") == e.length - 1) {
                    $(this).val(e.replace(".", ""))
                }
            }).on("keyup", n, function (e) {
                var t = e.keyCode || e.charCode;
                $(this).val($(this).val().replace(/^\D*(\d*(?:\.\d{0,1})?).*$/g, "$1"));
                if (t == 13) {
                    if ($(this).val().length > 0) {
                        $(this).trigger("blur");
                        $("#" + s + " #custom_fade_confirm").trigger("click")
                    }
                }
            });
            $(document).on("click", "#" + s + " #custom_fade_reset", function () {
                $(r).val("");
                $(n).val("");
                Popup.hide(s);
                if (o) {
                    o({event: "custom_fade_reset", data: {}})
                }
            });
            $(document).on("click", "#" + s + " #custom_fade_confirm", function () {
                Popup.hide();
                var e = $(r).val().toString();
                var t = $(n).val().toString();
                var a = rangeKeyParser.deparse(e, t);
                var i = rangeKeyParser.deparse(e && e + "%", t && t + "%");
                if (o) {
                    o({event: "custom_fade_confirm", data: {custom_fade_val: a, custom_fade_text: i}})
                }
            })
        }
        Buff.pricePatten("input[name=min_price]");
        Buff.pricePatten("input[name=max_price]");
        $(window).on("hashchange", d);
        var i = d();
        if (c == "selling") {
            h.sync_tab_from_hash(i, c)
        }
        return this
    };
    return {init: i, init_float_range_filter: u, show: e, hide: t}
};
var getParams = function (e) {
    var e = e || window.location.search.substring(1);
    var t = {};
    var a = decodeURIComponent(e);
    if (a == "") {
        return {}
    }
    var i = a.split("&");
    for (var r = 0; r < i.length; r++) {
        var n = i[r].split("=");
        t[n[0]] = n[1]
    }
    return t
};
var getParamsFromHash = function () {
    if (!window.location.hash) {
        return {}
    }
    return getParams(window.location.hash.substring(1))
};
var updateHash = function (e, t, a) {
    var i = getParamsFromHash();
    if (t === undefined || t === "") {
        delete i[e]
    } else {
        i[e] = t
    }
    window.location.hash = "#" + $.param(i).replace(/\+/g, "%20") + (a ? "&" + a : "")
};
var updateHash2 = function (e, t) {
    var a = getParamsFromHash();
    if (t === undefined || t === "") {
        delete a[e]
    } else {
        a[e] = t
    }
    var i = window.location.href.split("#")[0];
    window.location.replace(i + "#" + $.param(a).replace(/\+/g, "%20"))
};
var updateHashData = function (e, t) {
    var a = getParamsFromHash();
    for (var i in e) {
        var r = e[i];
        if (r.length < 1 || r === "null") {
            delete a[i]
        } else {
            a[i] = r
        }
    }
    window.location.hash = "#" + $.param(a).replace(/\+/g, "%20") + (t ? "&" + t : "")
};
var isValidLink = function (e) {
    if (!e) return true;
    return e.startsWith("/") || e.startsWith("http")
};
var goBack = function (e) {
    if (document.referrer) {
        window.history.back()
    } else if (isValidLink(e)) {
        window.location.href = e
    }
};
var formatPriceBigYuan = function (e, t) {
    return (t === undefined ? "¥ " : "") + formatPrice(e, "big")
};
var formatPriceNormalYuan = function (e, t) {
    return (t === undefined ? "¥ " : "") + formatPrice(e, "normal")
};
var formatPriceYuan = function (e, t) {
    return (t === undefined ? "¥ " : "") + formatPrice(e)
};
var formatPriceDollar = function (e, t) {
    return (t === undefined ? "$ " : "") + formatPrice(e)
};
var formatPriceBigCustom = function (e, t, a) {
    return formatPriceCustom(e, t, "big", a)
};
var formatPriceNormalCustom = function (e, t, a) {
    return formatPriceCustom(e, t, "normal", a)
};
var formatPriceCustom = function (e, t, a, i, r) {
    var n = g.currency.rate_base_cny;
    if (i == "USD") {
        n = g.currency.rate_base_usd
    }
    var o = e * n;
    o = r ? parseInt(o) : o.toFixed(2);
    if (e > 0 && o == "0.00") {
        o = "0.01"
    }
    return (t === undefined ? g.currency.symbol + " " : "") + formatPrice(o, a)
};
var formatPrice = function (e, t) {
    var a = parseFloat(e).toFixed(2).replace(/0+$/, "").replace(/\.+$/, "");
    var i = a.split(".");
    if (i.length > 1) {
        if (t == "big") {
            return "<big>" + i[0] + "</big>." + i[1]
        } else if (t == "normal") {
            return "" + a
        } else {
            return "" + i[0] + "<small>." + i[1] + "</small>"
        }
    } else {
        if (t == "big") {
            return "<big>" + i[0] + "</big>"
        }
        return "" + a
    }
};
var isClientVersionGreater = function (e, t) {
    if (typeof WebViewInfo == "undefined" || !WebViewInfo.webview_from) {
        return false
    }
    var a = getDeviceOS();
    if (a == "ios") {
        var i = WebViewInfo.webview_app_version;
        return i.split(".") >= e.split(".")
    } else if (a == "android") {
        var r = WebViewInfo.webview_app_version_code;
        return parseInt(r) >= parseInt(t)
    }
    return false
};
var renderPagination = function (e) {
    var t = e.pager_name || ".pager";
    if (e.total_count < 1 || e.page_size >= e.total_count) {
        $(t).html("").hide();
        return
    }
    $(t).show();
    $(t).pagination({
        items: e.total_count,
        itemsOnPage: e.page_size,
        displayedPages: e.displayed_pages || 9,
        cssStyle: "light-theme",
        currentPage: e.page_num,
        hrefTextPrefix: "#page_num=",
        prevText: i18n("prev_page"),
        nextText: i18n("next_page"),
        onPageClick: e.onPageClick
    });
    if (e.show_size_select == true) {
        var a = e.size_selects || [30, 50, 100, 200];
        page_size_html = '<div id="search-page_size" class="w-Select" name="page_size" value="' + e.page_size + '">            <h3>' + i18n("page_size") + e.page_size + '</h3>            <i class="icon icon_drop"></i>            <ul>';
        for (var i = 0; i < a.length; i++) {
            var r = a[i];
            page_size_html += '<li value="' + r + '">' + i18n("page_size") + r + "</li>"
        }
        page_size_html += "</ul></div>";
        $(t).append(page_size_html);
        Buff.initSelect("#search-page_size")
    }
};
var updateSearch = function (e, t) {
    var a = getParams();
    if (t.length < 1 || t === "null") {
        delete a[e]
    } else {
        a[e] = t
    }
    if ("page_num" in a) {
        delete a["page_num"]
    }
    updateHash("page_num", undefined);
    window.location.search = $.param(a).replace(/\+/g, "%20")
};
var updateSearchData = function (e) {
    var t = getParams();
    for (var a in e) {
        var i = e[a];
        if (i.length < 1 || i === "null") {
            delete t[a]
        } else {
            t[a] = i
        }
        if ("page_num" in t) {
            delete t["page_num"]
        }
        updateHash("page_num", undefined)
    }
    window.location.search = $.param(t).replace(/\+/g, "%20")
};
var updateSearchPage = function (e, t) {
    var a = getParams() || {};
    if (t > 0) {
        a[e] = t
    } else {
        delete a[e]
    }
    window.location.search = $.param(a).replace(/\+/g, "%20")
};

function randomstring(e) {
    var t = "";
    var a = function () {
        var e = Math.floor(Math.random() * 62);
        if (e < 10) return e;
        if (e < 36) return String.fromCharCode(e + 55);
        return String.fromCharCode(e + 61)
    };
    while (t.length < e) t += a();
    return t
}

function formatRelativeTime(e) {
    var t = new Date / 1e3;
    var a = Math.abs(t - e);
    if (a <= 1) {
        return "刚刚"
    }
    var i = [60, 60, 24, 365, 100];
    var r = ["秒", "分钟", "小时", "天", "年", "世纪"];
    var n = parseInt(a);
    for (var o = 0; o < i.length; o++) {
        if (n < i[o]) {
            return "" + n + r[o] + (t > e ? "前" : "后")
        }
        n = Math.floor(n / i[o])
    }
    return "" + values + "秒"
}

function formatTimestamp(e, t) {
    return moment(e, "X").format(t || "YYYY-MM-DD HH:mm")
}

function formatPaintWear(e) {
    return parseFloat(e) * 100
}

if (typeof template != "undefined") {
    template.defaults.imports.formatTimestamp = formatTimestamp;
    template.defaults.imports.formatRelativeTime = formatRelativeTime;
    template.defaults.imports.formatPriceYuan = formatPriceYuan;
    template.defaults.imports.formatPriceDollar = formatPriceDollar;
    template.defaults.imports.formatPriceBigYuan = formatPriceBigYuan;
    template.defaults.imports.formatPriceNormalYuan = formatPriceNormalYuan;
    template.defaults.imports.formatPriceCustom = formatPriceCustom;
    template.defaults.imports.formatPriceBigCustom = formatPriceBigCustom;
    template.defaults.imports.formatPriceNormalCustom = formatPriceNormalCustom;
    template.defaults.imports.formatPrice = formatPrice;
    template.defaults.imports.parseFloat = parseFloat;
    template.defaults.imports.JSON = JSON;
    template.defaults.imports.i18n = i18n;
    template.defaults.imports.ceil = Math.ceil;
    template.defaults.imports.moment = moment;
    template.defaults.imports.abs = Math.abs;
    template.defaults.imports.g = g;
    template.defaults.imports.formatPaintWear = formatPaintWear;
    template.defaults.imports.RegExp = RegExp;
    template.defaults.imports.Date = Date
}
var _template_cache = {};
var template_render = function (e, t) {
    var a = _template_cache[e];
    if (a === undefined) {
        var i = document.getElementById(e);
        if (i) {
            var r = i.value || i.innerHTML;
            a = template.compile(r);
            _template_cache[e] = a
        }
    }
    if (a !== undefined) {
        return a(t)
    }
};
var format_html = function (e, t) {
    var a = template.compile(e);
    return a(t)
};
var formatHtml = format_html;
var processing = {};
var tryCount = {};
var sendRequest = function (a, i) {
    i.error = i.error || function (e) {
        if (i.showLoading !== false) {
            $("#loading-cover").hide()
        }
        if (e.statusText != "abort") {
            if (i.showError != false) {
                if (e.status == 429) {
                    try {
                        Buff.toast(e.responseJSON.error)
                    } catch (e) {
                        Buff.toast(i18n("request_in_queue"))
                    }
                } else if (["timeout", "error"].indexOf(e.statusText) > -1) {
                    if (tryCount[a] === undefined) {
                        tryCount[a] = 0
                    }
                    tryCount[a]++;
                    if (tryCount[a] <= this.retryLimit) {
                        setTimeout(function () {
                            sendRequest(a, i)
                        }, 100);
                        return
                    }
                    Buff.toast(i18n("network_error"))
                } else if (e.status == 500) {
                    Buff.toast(i18n("system_busy_error"))
                }
            }
        }
    };
    i.cache = i.cache || false;
    i.timeout = i.timeout || 5e3;
    i.original_data = i.original_data || i.data || {};
    i.ignoreCode = i.ignoreCode || [];
    i.tryCount = 0;
    i.retryLimit = i.method.toUpperCase() == "POST" ? 0 : 2;
    i.beforeSend = function (e, t) {
        if (processing[a] === true) {
            return false
        }
        processing[a] = true
    };
    var t = i.complete;
    i.complete = function (e) {
        processing[a] = false;
        t && t(e)
    };
    if (i.showLoading !== false) {
        $("#loading-cover").show()
    }
    if (processing[a]) {
        return
    }
    var r = i.success;
    i.success = function (t) {
        if (i.showLoading !== false) {
            $("#loading-cover").hide()
        }
        if (i.ignoreCode.indexOf(t.code) > -1) {
            if (t.code == "OK" && t.msg != null) {
                Buff.toast(t.msg)
            }
            r(t);
            return
        }
        if (t.code === "Login Required") {
            loginModule.showLogin()
        } else if (t.code == "Internal Server Error") {
            if (i.from_app_inspect) {
                Buff.toast(i18n("app_inspect_server_error"));
                return
            }
            if (i.showError != false) {
                Buff.toast(i18n("system_busy_error"))
            }
        } else if (t.code == "Action Forbidden") {
            Buff.toast(t.error, {type: "error"})
        } else if (t.code == "User Frozen") {
            Buff.toast(t.error, {type: "error"})
        } else if (t.code == "Steam Binding Required") {
            Buff.alert({
                title: i18n("unbound_steam"),
                hideCancel: true,
                message: i18n("unbound_steam_notice"),
                confirmText: i18n("go_to_bind"),
                success: function () {
                    window.open("/user-center/profile", "_blank")
                }
            })
        } else if (t.code == "Steam Trade URL Binding Required") {
            Buff.alert({
                title: i18n("set_up_steam_trade_url"),
                safeMessage: escapeHtml(t.error) + '<a href="/help#N_steam_setting" target="_blank">如何绑定</a>',
                success: function () {
                    window.open("/user-center/profile")
                },
                confirmText: i18n("go_to_bind")
            })
        } else if (t.code == "Steam Trade Hold Duration Invalid") {
            Buff.alert({
                title: i18n("prompt"), message: t.error, confirmText: i18n("go_to_view"), success: function () {
                    window.open("/help#why_cant_i_trade", "_blank")
                }
            })
        } else if (t.code == "Steam Trade Limit") {
            Buff.alert({
                title: i18n("prompt"),
                message: i18n("steam_trade_limit"),
                confirmText: i18n("go_to_view"),
                success: function () {
                    window.open("/help#before_trade", "_blank")
                }
            })
        } else if (t.code == "Realname Required") {
            Buff.alert({
                title: i18n("prompt"),
                message: t.error,
                confirmText: i18n("go_to_verify"),
                success: function () {
                    bindCard.show_cert_popup(function () {
                        document.location.reload()
                    })
                }
            })
        } else if (t.code == "Epay Account Required") {
            Buff.alert({
                title: i18n("prompt"),
                message: t.error,
                confirmText: i18n("go_to_bind_card"),
                success: function () {
                    var e = null;
                    if (t.extra.name) {
                        e = t.extra
                    }
                    bindCard.show_bind_card_popup(e, function () {
                        document.location.reload()
                    })
                }
            })
        } else if (t.code == "Epay Account Grade Failure") {
            Buff.alert({
                title: i18n("prompt"),
                message: t.error,
                hideCancel: true,
                confirmText: i18n("ok"),
                success: function () {
                }
            })
        } else if (t.code == "Steam API Key Not Set" || t.code == "Steam API Key Invalid") {
            Buff.alert({
                title: i18n("prompt"), message: t.error, success: function () {
                    window.open("/user-center/profile")
                }, confirmText: i18n("go_to_set")
            })
        } else if (t.code == "Backpack Is Private") {
            Buff.alert({
                title: i18n("prompt"), message: t.error, confirmText: i18n("go_to_set"), success: function () {
                    window.open("https://steamcommunity.com/my/edit/settings")
                }
            })
        } else if (t.code == "Steam Logged In Needs Verification") {
            loggedInFromSteamVerifyManager(t.extra.mobile).init()
        } else if (t.code == "EJZB Need Auth") {
            ejzbAuthVerifyManager().process({mobile: g.user.mobile, state: t.code}, null, null, null, function () {
                location.reload()
            })
        } else if (t.code == "Partner Role Not Bound") {
            userProfile().initBindBadlanders();
            Popup.show("j_popup_g101_bind")
        } else {
            if (t.code == "OK" && t.msg != null) {
                Buff.toast(t.msg)
            } else if (t.code != "OK") {
                if (t.code == "Card Need Verify" || t.code == "Get Share Code Retry Later") {
                    r(t);
                    return
                }
                if (t.confirm_entry) {
                    var e = t.confirm_entry;
                    Buff.alert({
                        title: e.title,
                        message: e.messages,
                        hideCancel: e.button_cancel == "",
                        cancelText: e.button_cancel,
                        hideConfirm: e.button_noted == "" && e.button_open_url == "",
                        confirmText: e.button_noted || e.button_open_url,
                        success: function () {
                            if (e.entry) {
                                window.open(e.entry.url)
                            }
                            Popup.hide()
                        }
                    });
                    return
                }
            }
            r(t)
        }
    };
    var e = i.method.toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].indexOf(e) > -1) {
        i.contentType = i.contentType || "application/json";
        i.headers = i.headers || {};
        var n = getCookie("csrf_token");
        i.headers["X-CSRFToken"] = n;
        if (i.contentType === "application/json") {
            i.data = JSON.stringify(i.original_data)
        }
    }
    i["type"] = e;
    i["url"] = a;
    return $.ajax(i)
};

function isTextSelected(e) {
    if (typeof e.selectionStart == "number") {
        return e.selectionStart != e.value.length
    } else if (typeof document.selection != "undefined") {
        e.focus();
        return document.selection.createRange().text == e.value
    }
}

function getUrlRelativePath() {
    var e = document.location.toString();
    var t = e.split("//");
    var a = t[1].indexOf("/");
    var i = t[1].substring(a);
    if (i.indexOf("?") != -1) {
        i = i.split("?")[0]
    }
    if (i.indexOf("#") != -1) {
        i = i.split("#")[0]
    }
    return i
}

function openPageOnNewTab(e) {
    var t = $("<a href='" + e + "' target='_blank' style='display:none'>buff</a>").get(0);
    var a = document.createEvent("MouseEvents");
    a.initEvent("click", true, true);
    t.dispatchEvent(a)
}

function getCookie(e) {
    var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
    if (t) {
        var a = "";
        try {
            a = decodeURIComponent(t[2])
        } catch (e) {
        }
        return a
    }
    return ""
}

function setCookie(e, t, a) {
    var i = "";
    if (a) {
        var r = new Date;
        r.setTime(r.getTime() + a * 24 * 60 * 60 * 1e3);
        i = "; expires=" + r.toUTCString()
    }
    document.cookie = e + "=" + (t || "") + i + "; path=/"
}

function removeCookie(e, t) {
    document.cookie = e + "=;Path=" + (t || "/") + ";"
}

function isUserLogined() {
    if (g.user) return true;
    return false
}

var gameNavigator = function () {
    var n = [];
    var e = function (e, t) {
        document.cookie = "game=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = "game=" + e + "; path=/";
        var a = function () {
            var e = [];
            var t = getParams();
            for (var a = 0; a < n.length; a++) {
                var i = n[a];
                if (t[i]) {
                    e.push(i + "=" + t[i])
                }
            }
            return e.join("&")
        };
        if (g.game == e) return;
        if (t) {
            if (t == "/market/" + g.game) {
                window.location.href = t.replace(g.game, e)
            } else {
                if (t == "/market/sell_order/on_sale" && n.length) {
                    window.location.href = t + "?game=" + e + "&" + a()
                } else {
                    window.location.href = t + "?game=" + e
                }
            }
        } else {
            var i = n.length > 0 ? a() : "";
            var r = window.location.pathname + "?game=" + e + "&" + i;
            window.location.href = r
        }
    };
    var t = function (e) {
        n = e
    };
    return {switchGame: e, setKeepParams: t}
}();
var updateNavbarCashAmount = function () {
    sendRequest("/api/asset/get_brief_asset/", {
        method: "GET",
        dataType: "json",
        showLoading: false,
        success: function (e) {
            $("#navbar-cash-amount").html(formatPriceYuan(e.data.cash_amount))
        }
    })
};

function sleep(e) {
    var t = (new Date).getTime();
    while ((new Date).getTime() < t + e) ;
}

function sendNotification(a) {
    if (localStorage.getItem("_notification_" + a.tag)) {
        return
    } else {
        localStorage.setItem("_notification_" + a.tag, true)
    }
    if (Notification && Notification.permission === "granted") {
        var e = new Notification(a.title, {body: a.body, tag: a.tag, icon: "/static/images/favicon.ico"});
        e.onclick = a.onclick
    } else if (Notification && ["default", "denied"].indexOf(Notification.permission) > -1) {
        Notification.requestPermission(function (e) {
            if (Notification.permission !== e) {
                Notification.permission = e
            }
            if (e == "granted") {
                var t = new Notification(a.title, {body: a.body, tag: a.tag, icon: "/static/images/favicon.ico"});
                t.onclick = a.onclick
            }
        })
    }
}

var uploadFile = function (t) {
    var e = function (e) {
        var t = 0, a = 1024;
        while (e >= a || -e >= a) {
            e /= a;
            t++
        }
        return (t ? e.toFixed(1) + " " : e) + " KMGTPEZY"[t] + "B"
    };
    if (t.file == undefined) return;
    if (t.file.size > t.max_file_size) {
        alert("允许上传的最大文件为： " + e(t.max_file_size));
        return
    }
    var a = t.error || Buff.toast;
    var i = new XMLHttpRequest;
    i.open("POST", t.upload_url);
    i.upload.onprogress = t.onprogress;
    i.onload = function () {
        switch (i.status) {
            case 200:
                var e = JSON.parse(i.responseText);
                t.callback(e);
                break;
            case 400:
                if (i.responseText == "File Size Invalid") {
                    a("悲剧，您上传的文件超过5M了！！")
                } else if (i.responseText == "File Type Invalid") {
                    a("矮油，只能上传图片哦！！")
                } else if (i.responseText == "Require Upload File") {
                    a("没有选中图片呀！")
                } else {
                    a("这不科学，上传出现了意想不到的错误，赶紧联系管理员！！")
                }
                break;
            default:
                a("这不科学，上传出现了意想不到的错误，赶紧联系管理员！！")
        }
    };
    i.onerror = function () {
        a("网络异常，请稍后重试！")
    };
    i.setRequestHeader("Authorization", t.token);
    i.send(t.file)
};

function getDeviceOS() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(e)) {
        return "android"
    }
    if (/iPad|iPhone|iPod/i.test(e) && !window.MSStream) {
        return "ios"
    }
    return "web"
}

var callNative = function (e, t) {
    if (typeof WebViewInfo == "undefined" || !WebViewInfo.webview_from) {
        return
    }
    var t = t || {};
    if (getDeviceOS() === "android") {
        var a = JSON.stringify({api: e, params: JSON.stringify(t)});
        try {
            var i = buffAndroidApi;
            var r = "";
            while (r.length < 40) {
                r += ("" + Math.random()).substr(2)
            }
            if (prompt(JSON.stringify({api: e, token: r})) === "OK") {
                return i.call(r, a)
            }
        } catch (e) {
            if (e instanceof ReferenceError) {
                try {
                    return prompt(a)
                } catch (e) {
                    console.log(e)
                }
            }
        }
        return null
    } else if (getDeviceOS() === "ios") {
        try {
            window.webkit.messageHandlers[e].postMessage(JSON.stringify(t))
        } catch (e) {
            return null
        }
    } else {
        return
    }
};

function setClipboard(e) {
    var t = document.createElement("input");
    t.style = "position: absolute; left: -1000px; top: -1000px";
    t.value = e;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t)
}

function escapeHtml(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}

var htmlDecode = function (e) {
    var t = document.createElement("textarea");
    t.innerHTML = e;
    return t.childNodes.length === 0 ? "" : t.childNodes[0].nodeValue
};
var initCustomCurrency = function (e) {
    if (e == undefined) {
        var t = g.currency.code.toLowerCase();
        var a = document.createElement("style");
        a.innerHTML = ".hide-" + t + " {display:none;}";
        document.body.appendChild(a);
        e = document
    }
    $(e).find(".custom-currency").each(function () {
        var e = parseFloat($(this).data("price"));
        var t = $(this).data("no-symbol");
        var a = $(this).data("type");
        var i = $(this).data("original-currency");
        var r = $(this).data("filter-digits");
        $(this).replaceWith(formatPriceCustom(e, t, a, i, r))
    })
};
var initLocalTimeDisplay = function (e) {
    if (e == undefined) {
        e = document
    }
    $(e).find(".moment-ts").each(function () {
        $(this).text(moment($(this).data("ts") * 1e3).format($(this).data("fmt")))
    })
};
if (typeof Object.assign != "function") {
    Object.assign = function (e, t) {
        "use strict";
        if (e == null) {
            throw new TypeError("Cannot convert undefined or null to object")
        }
        var a = Object(e);
        for (var i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            if (r != null) {
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        a[n] = r[n]
                    }
                }
            }
        }
        return a
    }
}
String.prototype.gblen = function () {
    var e = 0;
    for (var t = 0; t < this.length; t++) {
        if (this.charCodeAt(t) > 127 || this.charCodeAt(t) == 94) {
            e += 2
        } else {
            e++
        }
    }
    return e
};
String.prototype.getGblenPosition = function (e) {
    var t = 0;
    for (var a = 0; a < this.length; a++) {
        if (this.charCodeAt(a) > 127 || this.charCodeAt(a) == 94) {
            t += 2
        } else {
            t++
        }
        if (t > e) {
            return a
        }
    }
    return this.length - 1
};

function wxPayUpdateRemainTime(e) {
    var t = 0, a = 0;
    if (e > 0) {
        t = Math.floor(e / 60);
        a = e % 60
    }
    var i = t + i18n("minutes") + a + i18n("seconds");
    $("#pay-remain-time").text(i)
}

function wxPayShowQrcode(e, t, a, i) {
    $("#j_popup_wx").remove();
    var r = template_render("wx_pay_pat", {price: e});
    $("body").append(r);
    $("#wx-pay-qrcode").html("");
    new QRCode(document.getElementById("wx-pay-qrcode"), {text: t, width: 140, height: 140});
    $("#wx-pay-qrcode").attr("title", "");
    wxPayUpdateRemainTime(a);
    $("#j_popup_wx .popup-close").click(function () {
        Popup.hide();
        if ($("#j_popup_wx").hasClass("expired")) {
            return
        }
        if (i) i()
    });
    Popup.hide();
    Popup.show("j_popup_wx")
}

function payWaitResult(e, t, a, i) {
    var r = a;
    var n = false;
    var o = undefined;
    var s = $.Deferred();
    s.done(function () {
        n = true;
        clearInterval(o);
        o = undefined;
        Popup.hide();
        $("#loading-cover").hide()
    });
    s.fail(function () {
        n = true;
        clearInterval(o);
        o = undefined;
        Popup.hide();
        $("#loading-cover").hide();
        Buff.alert({
            title: i18n("prompt"), message: i18n("pay_failed"), hideCancel: true, success: function () {
                window.location.reload()
            }
        })
    });
    s.progress(function () {
        n = true
    });
    var _ = 0;
    o = setInterval(function () {
        _ += 1;
        if (_ == 1 || _ <= r && n) {
            n = false;
            i(e, s)
        } else if (_ > r) {
            clearInterval(o);
            o = undefined;
            if (t == BuffConfig.PayMethod.WX_PAGE) {
                $("#j_popup_wx").addClass("expired");
                $("#j_popup_wx .popup-cont.paying").hide();
                $("#j_popup_wx .popup-cont.expired").show()
            } else {
                Popup.hide();
                $("#loading-cover").hide();
                Buff.alert({
                    title: i18n("payment"),
                    message: i18n("payment_system_is_busy_please"),
                    hideCancel: true,
                    success: function () {
                        window.location.reload()
                    }
                })
            }
        }
        if (t == BuffConfig.PayMethod.WX_PAGE) {
            wxPayUpdateRemainTime(Math.max(r - _, 0))
        }
    }, 1e3)
}

var padLeft = function (e, t) {
    e = parseInt(e);
    var a = ("" + e).length;
    e = (a < t ? "0" : "") + e;
    return e
};
var convertTime = function (e) {
    var t = Math.floor(e / 3600);
    var a = Math.floor(e % 3600 / 60);
    var i = e % 3600 % 60;
    return t == "00" ? padLeft(a, 2) + ":" + padLeft(i, 2) : padLeft(t, 2) + ":" + padLeft(a, 2) + ":" + padLeft(i, 2)
};
var OriginConst = function () {
    return {
        SELLING: "selling-list",
        MY_SELLING: "my-selling",
        TOP_BOOKMARK: "top-bookmark",
        STORE: "store",
        INVENTORY: "inventory",
        BOOKMARK_ORDER: "bookmark-order",
        SELECTOR_MAP: {
            "selling-list": "tr.selling",
            "my-selling": "li.my_selling",
            "top-bookmark": "li.top_bookmark",
            store: "li.my_shop_selling",
            inventory: "li.my_inventory",
            "bookmark-order": "tr.bookmark_order"
        },
        PARENT_SELECTOR_MAP: {
            store: "#j_list_card",
            "selling-list": "#market-selling-list",
            "my-selling": "#j_list_card",
            "top-bookmark": "#j_market_card",
            inventory: "#j_list_card",
            "bookmark-order": "#bookmark_sell_order_list"
        }
    }
}();
i18nData.updateData("en", {
    "1_seconds": "1 second",
    _piece_of_goods_has: "items fail because it has already been purchased",
    _piece_of_goods_off: "items succeed",
    a_period_of_time_: "a period of time: ",
    a_picture_is_not_uploaded: "Some images have not been uploaded successfully",
    a_successful_purchase: "Success",
    access_to_the_steam_encounters: "Got a problem with Steam?",
    account_can_be_withdraw_the: "Unable to withdraw, insufficient balance in the BUFF Balance-Other",
    acknowledgment_is_bound_to_the: "Are you sure to bind to this Steam account?\nSteam nickname：",
    acquisition_fee_failed_please_try: "Failed to get the fee, please try again later",
    add_a_description: "Add a description",
    add_description: "Add a description",
    add_in_5_minutes_to: "Please send offer in BUFF APP within 5 minutes.",
    add_in_the_buyers_payment: " Please deliver within 12 hours after the buyer pays, otherwise the item will be removed from sale and your selling function will be banned.",
    add_the_other_card: "Add another bank card",
    all: "All",
    already_have_an_account_click: "Click here to login",
    analysis: "Inspecting",
    analysis_figure: "Screenshot",
    api_key_format_error: "API key format error",
    api_key_successfully_set: "Success",
    application_authentication_failure_please_contact: "Verification failed, please contact support",
    artificial_assist: "Contact Support",
    authentication: "Verification",
    back_for_refresh: "Back for refresh",
    backpack_capacity_is_insufficient_can: "The backpack has insufficient capacity to continue buying",
    bargain_price_must_be_lower: "The bargain price must be lower than the sale price",
    being_prepaid_in: "Topping up",
    beware_of_phishing_scams_please: "Beware of scams, please check if the API key was created? If it was maliciously created, please delete it and change Steam password immediately.",
    binding_acknowledgment: "Confirm",
    binding_steam: "Bind Steam",
    binding_steam_before_you_can: "Connect your steam account to enjoy buff.",
    binding_transaction_link_the_immediate: "Set your steam trade url to begin trading on BUFF",
    bound_to_fail: "Failure",
    buff_backpack_capacity_is_insufficient: "BUFF backpack has insufficient capacity and has been adjusted to buy the maximum quantity",
    buy_price_cannot_be_less: "The purchase price cannot be less than ￥0.01",
    buy_pubgrecycled_transactionitems_not_get: "PUBG items are not withdrawable",
    buy_success: "Success",
    buying_in_bulk_quantity_can: "The number of bulk buy cannot exceed",
    buying_in_bulk_results: "Result",
    can_not_supply_your_own: "Can't supply the items you purchase",
    cancel: "Cancel",
    cancel_buying_success: "Success",
    cancel_delivery_success: "Success",
    cancel_recommend: "Cancel recommend",
    cancel_the_shipment: "Cancel deliver",
    cannot_be_resolved_the_goods: "Unable to inspect, the item has been sold or the network is bad",
    cannot_purchase_your_own_items: "Can't buy your own items",
    card_limit_is_reached: "Bank card reaches the upper limit",
    cardsp: "bank cards",
    century: "Century",
    change_price_of_failure: "Failure",
    clear_the_api_key_after: "After clearing the API key, your store will be offline and items will not be bought. Are you sure you want to clear?",
    click_on_upload_picture: "Click to upload image",
    click_to_collapse: "Collapse",
    click_to_expand: "Expand",
    close_failed_please_try_again: "Fail to close, try again",
    complete: "Complete",
    confirm: "Confirm",
    confirm_and_opened: "Open",
    confirm_clear: "Clear",
    confirm_leave: "Leave",
    confirm_to_cancel_the_transaction: "Confirm",
    confirmation_of_payment: "Confirm",
    "congratulations_to_you!_welcome_to": "Welcome to BUFF, you can start trading now!",
    consignment_goods_shelf_will_be: "The consignment items will be returned to your BUFF backpack after they are removed.",
    content_length_can_not_be: "Content length cannot be greater than 1024 characters",
    continue_to_pay: "Continue to pay",
    counteroffer_price_cannot_be_lower: "The bargain price must be higher than the minimum bid price",
    counteroffer_request_has_been_sent: "Bargain request has been sent",
    create_a_package_of_trading: "Success",
    create_buying_success: "Success",
    csgo_deposit_notice: 'Due to changes in the trade rules of CS:GO/DOTA2, the items wiil be available for trade again after 7 days.<a href="/help#csgo_trade_cooldown" target="_blank">CS:GO/DOTA2交易机制改动</a>',
    currently_does_not_support_the: "The card number is not supported currently. Please change the card.",
    currently_have_to_wait_for: "There is still a feedback waiting for replying. If you still need feedback, please go to supplementary.",
    day: "day",
    days: "days",
    delete_confirmation: "Confirmation",
    delete_failed: "Failure",
    delivery_prompt: "Notification",
    delivery_timeout: "Delivery timeout",
    deposit_backpack: "Deposit",
    deposit_failed: "Failure",
    description: "Description",
    detect_fail_try_later: "Detection failed, please try again later",
    detected_you_are_using_steam: "You just logged in with Steam. In order to protect your account safety, we need to verify your mobile number.",
    detection_failed_please_try_again: "Detection failed, please try again later",
    detects_network_anomalies_please_try: "Network error, please try again later",
    detects_that_you_are_also: "You have not yet bound Steam, please bind first.",
    determine_the_selected_accessories_to: "Are you sure to unlist the selected items?",
    determined_to_be_removed_from: "Are you sure you want to cancel your collection?",
    do_not_exceed_24_characters: "Do not exceed 24 characters",
    edit_description: "Edit description",
    edit_the_description: "Edit description",
    enter_the_verification_code: "Enter the code",
    error_code: "Error code:",
    failure_to_modify: "Failure",
    feedback_success: "Success",
    for_the_protection_of_your: "In order to protect your account safety, we need to verify the Steam account bound to this account.",
    fraud_notice: "Beware of scams, please check if the API key was created? If it was maliciously created, please delete and change Steam password immediately.",
    listing_instructions_title: "Listing instructions",
    listing_instructions_message: " has a stacking situation, you can only list one of them. You can only continue to list the other parts after completing the transaction or removing it from the selling list.",
    listing_instructions_confirm: "Continue to list",
    deposit_instructions_title: "Deposit instructions",
    deposit_instructions_message: " has a stacking situation, so it will be treated as one item only when it is deposited into the BUFF backpack. Please set the quantity to 1 when depositing.",
    deposit_instructions_confirm: "Deposit",
    get_in: "Get in...",
    get_steam_trading_link: "Get trade url",
    get_the_package_deal_failed: "Failure",
    get_the_verification_code: "Get code",
    go_to_bind: "Bind",
    go_to_bind_card: "Bind",
    go_to_check: "Check",
    go_to_market: "View market",
    go_to_set: "Set",
    go_to_settings: "Set",
    go_to_verify: "Verify",
    go_to_view: "View",
    greater_than_the_extraction_amount: "Greater than the amount available",
    has_been_sent: "Has been sent",
    has_been_used: "Has been used",
    hour: "hour",
    hours: "hours",
    i_first_look_at_the: "Have a look",
    i_know: "I know",
    i_think_again: "Think again",
    id_card_number_errors_please: "The ID number is wrong, please re-enter",
    id_number_can_not_be: "ID number cannot be empty",
    in_order_to_your_funds: "For your account safety, please fill in the following information",
    input_content_too_long_to_40_words: "The input is too long, please less than 40 words",
    instrongmy_counterofferstrongattention_counteroffer_status_the: 'After the seller accepts the bargain and send offer, you need go to <strong>Buy History</strong> to accept the offer. or the <strong class="c_Yellow">2%</strong> bargain amount will be deducted to the seller as a compensation.',
    is_being_processed_you_can: "Being processed, you can check the latest progress in withdrawal records.",
    is_being_uploaded: "Uploading...",
    it_detects_your_steam_account: "Your steam account looks good to trade.",
    it_is_determined_to_cancel: "Are you sure to cancel the delivery?",
    items_on_the_shelves_successful: "Success",
    jewelry: "item",
    less_than: "less than",
    login: "Login",
    member: "piece",
    pluar_s: "s",
    minimum_price_can_not_be: "The min price can't be higher than the max price",
    minute: " minute ",
    minutes: " minutes ",
    modify_the_price: "Change price",
    modify_the_success: "Success",
    nickname_modify_too_frequently_notice: "Change too often, please change after {{time}}",
    need_to_first_agree_to: "Agree to the payment agreement first",
    network_error: "Network error, please try again later",
    network_request_failed: "Network request failed",
    next_page: "Next page",
    no_available_items: "No available items",
    no_longer_prompt: "Do not remind again",
    no_meet_the_requirements_of: "No items meet the requirement",
    no_related: "No related items",
    not_found_to_contain_the: "Search result is empty",
    not_my_phone_number_please: "Not my phone number? please",
    not_support_credit_card: "Credit card is not supported",
    number: "Number：",
    quantity: "Quantity：",
    of_buying_ityuan: "purchase？￥",
    off_the_shelves_results: "Result",
    ok: "OK",
    on_frame_failure: "Failure",
    out_collection: "Cancel collection",
    package_deal: "Package trade",
    packaged_transaction_within_the_test: "This function is not available.",
    page_size: "Number per page",
    page_temporarily_does_not_support: "The webpage does not support bulk buy. Please go to BUFF APP.",
    pattern_template: "Paint seed",
    pay_failed: "Payment failed",
    payment: "Paying",
    payment_system_is_busy_please: "The payment system is busy, please check the payment result in Buy History.",
    piece_of_goods: "items",
    piece_of_goods_please_go: "items，please check in Buy History",
    please_agree_to_the_service: "Please agree to the service agreement first.",
    please_be_patient: "please wait patiently",
    please_choose_to_be_a: "Please choose items",
    please_choose_to_be_on: "Please choose items",
    please_do_the_safety_confirmation: "Please confirm the security and enter",
    please_enter: "Please enter ",
    please_enter_image_verification_code: "Please enter image verification code",
    please_enter_or_select_the: "Please enter or select a top up amount\\n",
    please_enter_pricing: "Please enter price",
    please_enter_the_account_password: "Enter password",
    please_enter_the_auto_logoff: "Please enter the auto offline time",
    please_enter_the_correct_invite: "Please enter the correct invitation code",
    please_enter_the_netease_mobile: "Enter mobile number",
    please_enter_the_question_content: "Please enter feedback content",
    please_enter_the_redemption_code: "Please enter the code",
    please_enter_the_registered_phone: "Please enter mobile phone",
    please_enter_the_sms_verification: "Enter code",
    please_enter_the_verification_code: "Enter code",
    please_enter_your_steam_trade: "Enter trade url",
    please_fill_out_the_trading: "Please fill in the trade url",
    please_get_a_sms_verification: "Please get the code first",
    please_get_a_verification_code: "Please get the code first",
    please_go_to_buff_the: "Please send offer in BUFF APP",
    please_go_to_my_sell: "Please deliver in My Sale",
    please_in_the_backpack_view: "Please check in backpack",
    please_input_01000_between_the: "Please enter a paint seed between 0-1000",
    please_input_the_correct_mailbox: "please enter your valid email",
    please_modify_the_nickname: "Please change your nickname",
    please_select_deposit_item: "Please choose items",
    please_select_from_the_available: "Please select an available coupon",
    please_select_item: "Please choose items",
    "please_select_recharge_way\\n": "Please select the top up method\\n",
    please_select_the_bank_account: "Please select bank account",
    "please_select_the_card\\n": "Please select bank card\\n",
    please_select_the_you_want: "Please choose items",
    please_select_to_ship_the: "Please choose items",
    please_tick_the_below_statement: "Please tick the statement below",
    please_upload_picture: "Please upload an image",
    please_wait: "Please wait...",
    please_wait_for_seller_to: "Please wait for the seller to send offer and accept it",
    please_wait_for_the_seller: "Please wait for seller to send offer. After that, you need to accept offer",
    please_wait_patiently_have_been: "Please be patient, have waited",
    pmost_can_only_be_bound: "Can only be bound at most",
    press_and_hold_the_slider: "Hold down the slider and drag to complete the puzzle above",
    prev_page: "Previous page",
    price_must_be_greater_than: "The price must be greater than: ",
    private_transaction_within_the_test: "This function is not available.",
    private_transactions: "Private trade",
    prompt: "Tips",
    purchase: "Buying",
    purchase_failed: "Failure",
    purchase_failure_reason_as_follows: "failed, reasons:",
    purchase_price_not_greater_than: "Purchase price cannot be greater than ",
    ranking_total_ranking: "Total rank",
    reacquire_the_print_data: "Re-acquire sticker data",
    receive_sms_verification_code: " SMS code received.",
    recharge_failed: "Failure",
    recharge_successful: "Success",
    recharge_with_cash_only_support: "Top up and withdrawal only support Debit card",
    recharge_yuan: "Top up ￥",
    recommended_use_of_the_netease: 'It is recommended to use the NetEase UU booster,<a href="/help#steam_network">查看更多解决方案</a>',
    refresh: "Refresh",
    refresh_in_the: "Refresh...",
    refreshing: "Refresh",
    register_a_new_account: "register new account",
    registration: "register",
    reminder: "Reminder",
    replicated: "Copied",
    reply_success: "Success",
    request: "Request in",
    require_minimal_packaging_of_two: "Need to pack at least two items",
    resend: "Resend",
    retrieval_failure: "Failed to retrieve",
    retrieve_the_process_description: "Retrieve process introduction",
    reupload: "Re-upload",
    sale_amount: "Sale amount",
    sale_amount_yuan: "Sale amount: ",
    sale_number_: "Sale number: ",
    save: "Save",
    seconds: " seconds",
    select_to_change_the_price: "Please choose items",
    select_to_retrieve_the_goods: "Please choose items",
    select_up_to_200_pieces: "Choose up to 200 items",
    send_a_verification_code_failed: "Send verification code failed",
    sent_successfully_please_note_the: "Successfully sent",
    set_success: "Success",
    set_the_boot: "Guide",
    set_to_fail: "Failure",
    set_up_steam_trade_url: "Set Steam trade url",
    set_up_trading_links: "Set trade url",
    settings_failed_please_try_again: "Failure",
    shelve_failed: "Failure",
    shelve_notice: "Please deliver within 12 hours after the buyer pays, otherwise the item will be removed from list and your selling function will be banned.",
    shelve_success: "Success",
    shelves_successful: "Success",
    since_the_csgo_official_trading: 'Due to changes in the official trade rules of CS:GO, the items will not be retrieved within 7 days after depositing.<a href="/help#csgo_trade_cooldown" target="_blank">CS:GO交易机制改动</a>',
    skip_maybe_next_time: "Skip",
    sold_number_of_pieces: "Sale number",
    steam_trade_limit: "Your Steam account cannot trade at the moment. Please check steam help.",
    successful_supply: "Success",
    successful_upload: "Success",
    successfully_submitted: "Success",
    supply_failure: "Failure",
    supply_success: "Success",
    sure_you_want_to_delete: "Are you sure you want to delete this card??",
    system_busy_error: "The system is busy, please try again later",
    termination_buying: "Cancel purchase",
    timeout: "Timeout",
    the_account_can_be_withdrawal: "Unable to withdraw, insufficient balance in the BUFF Balance-Other",
    the_amount_of_recharge_need: "The amount needs to be a number",
    the_authentication_is_successful: "Success",
    the_bank_card_number_can: "Bank card number cannot be empty",
    the_bank_card_number_errors: "Bank card number is wrong, please re-enter",
    the_binding_is_successful: "Success",
    the_content_of_the_input: "The input is too long, please less than 40 words",
    the_current_balance_of_dollar: ", current balance ￥",
    the_current_page_is_no: "No items",
    the_degree_of_wear_get: "Acquiring...",
    the_goods_can_not_a: "The item cannot be priced automatically , please enter it",
    the_goods_is_not_buying: "This item is not available for purchase.",
    the_lack_of_balance: "Insufficient balance",
    the_maximum_allowable_amount_of: "The maximum allowable top up amount is",
    the_minimum_allowable_amount_of: "The minimum allowable top up amount is",
    the_modified_price_of_success: "Success",
    the_payment_is_successful: "Success",
    the_phone_number_cannot_be: "Phone number can not be empty",
    the_phone_number_has_been: "Has the phone number been changed? please",
    the_phone_number_is_incorrect: "The phone number is wrong, please re-enter",
    the_phone_receives_the_verification: "Verification code received",
    the_picture_is_being_resolved: "Inspecting, please click to view later",
    the_price_can_not_be: "The price cannot be greater than: ",
    the_purchase_amount_can_not: "The quantity of bulk buy cannot exceed the quantity in sale that meet the conditions.",
    the_quote_failed_to_send: "Failure: ",
    the_real_name_can_not: "Real name can not be empty",
    the_recommended_bit_is_already: "Recommended position is full",
    the_set_of_recommended_items: "Recommend",
    the_shelves: "Unlist",
    the_shelves_after_the_goods: "Are you sure to unlist the selected items?",
    the_system_is_busy: "The system is busy",
    the_system_is_busy_please: "The system is busy, please check in buy history",
    the_system_is_busy_you: "The system is busy, you can check the latest progress of the recharge in the recharge record.",
    the_system_is_busyplease_try: "The system is busy, please try again later",
    the_system_supports_the_maximum: "The system supports a maximum of 64 characters.",
    the_validation_is_successful: "Success",
    the_verification_code_is_incorrect: "Incorrect verification code",
    there_goods_is_not_input: "There are items not priced",
    tied_the_card_fails_please: "Failed. Please confirm that the information you entered is correct.",
    to_bind: "Bind",
    to_check: "Check",
    to_guarantee_your_safety_of: "Enter your mobile number",
    to_obtain_the_dynamic_code: "Failure",
    to_receive_the_success: "Success",
    to_shipping: "Deliver",
    to_steam: "Connect Steam",
    trade_url_setting_successful: "Success",
    trading_link_format_error: "Trade url format error",
    unbound_steam: "Unbound Steam",
    unbound_steam_notice: "You have not yet bound Steam, please bind first.",
    unbound_steam_trading_link_whether: "Unbound Steam trade url, please set first?",
    undelivered_notice: "Since you failed to deliver it last time, you will not be able to sell within {{hours}} hours {{minutes}} minutes.",
    unset_price_item: "There are items not priced",
    up_to_200_items: "Choose up to 200 items",
    "upload_success!_your_players_show": "Uploaded successfully! Your skins show is under review",
    user_login: "Login/Register",
    user_registration: "Register",
    valuation: "Valuation：",
    verification_code_cannot_be_empty: "verification code must be filled",
    verify: "Verify",
    view_a_player_show_please: "Please log in first",
    view_history_please_login: "Please log in first",
    view_more: "View more",
    view_more_long_time_of: "To view longer-term price trend, please exchange Observer.",
    view_more_long_time_of_for_premium: "You can join BUFF Plus to see the price trend for 6 months.",
    view_more_long_time_exchange: "To exchange",
    view_my_steam_inventory: "View my Steam inventory",
    view_price_trends_please_login: "Please log in first",
    view_top_bookmarked_please_login: "Please log in first",
    view_wear_ranking_please_log: "Please log in first",
    waiting_for_payment: "wait for payment",
    whether_the_problem_has_been: "Problem resolved?",
    whether_to_terminate_the_purchase: "Whether to terminate the current progress as {{progress}}?\n {{refund_desc}}",
    withdraw_cash_price_of_dollar: "Withdraw￥",
    withdraw_the_maximum_amount_of: "The maximum amount of withdrawal is",
    withdrawal_failure: "Failure",
    withdrawal_has_been_filed: "Has applied for withdrawal",
    withdrawal_minimum_amount_is: "The minimum amount to withdraw is",
    years: "years",
    you_can_recharge_in_a: "You can check the latest progress in the top-up record.",
    you_have_new_orders_need: "You have a new order to deliver.",
    you_have_yet_to_bind: "You have not yet bound the Steam trade url, please go to set",
    you_havent_successfully_paid_the: "You have not paid successfully, the order can be paid within 3 minutes, please pay as soon as possible.",
    you_must_be_over_18: "You must be at least 18 years old to use our service.",
    your_buying_price_is_higher: "Your purchase price is higher than the sale price, you may buy items higher than the market price, confirm?",
    your_current_steam_account_cant: "Your current Steam account cannot be traded. Please check our help documentation.",
    your_mobile_phone_account_occurs: "Your mobile account has been changed. In order to protect account safety, we need to verify your mobile account.",
    urs_password_login_need_verify: "In order to protect account safety, we need to verify your mobile account.",
    your_phone_account_through_a: "Your mobile account has changed and we need to verify your bound Steam account.",
    your_steam_account_halt: "Detected that your Steam account is in trade hold",
    your_steam_account_tradable: "Your Steam account looks good to trade.",
    your_steam_acctoun_trade_limit: "Your Steam account is unable to trade",
    your_steam_trade_url_invalid: "Your trade url has expired, please fetch it from Steam",
    yuan: "Yuan",
    some_etc: "{{count}} items",
    buying_num: "{{num}} demand",
    selling_num: "{{num}} on sale",
    inspecting: "Inspecting, please try again later",
    platform_name: "BUFF163 Skins marketplace",
    slogan: "Support games like CS:GO, DOTA2, etc.",
    download: "Download",
    check_sticker_wear_in_detail: "You can check whether the stickers are scratched at the bottom of the item page, please confirm before buying",
    get_code: "Get code",
    login_with_password: "Login with password",
    login_with_sms: "Login with SMS",
    login_register: "Login/Register",
    please_agree: "Please check the agreements first.",
    gift_card_buy_success: "Success! Share the gift card redemption code with the recipient, and you can also check it in My Coupon.\nRecipient nickname: {{nickname}}\nRedemption code: {{sn}}",
    gift_card_receiver_nickname_error: "BUFF nickname does not exist",
    gift_card_receiver_info: "BUFF avatar and nickname",
    disable_sms_notification_alert: "You will no longer receive order SMS alerts after this feature is turned off, please keep an eye on the app push message and process your order promptly.",
    disable_antiscam: "System will no longer help you intercept fake offer, please be vigilant and be aware of hijack scams.",
    scratch_sticker_notice: "The seller needs to ensure that the sticker information is consistent with the inventory after listing on the market. Scraping the stickers before delivering will result in the account being banned.",
    reconfirm: "Reconfirm",
    continue_selling: "Continue",
    please_input_store_name: "Please enter the store name",
    have_not_modify_store_name: "You have not modified the store name",
    determine_use_store_name_coupon: "This rename needs to consume 1 store rename coupon, are you sure to change it?",
    please_exchange_store_name_coupon_at_app: "Please exchange store rename coupon in BUFF APP",
    must_allow_epay_or_alipay: "You must accept one of Alipay and Wechat payment",
    cms_inspect_success_title: "inspect in server",
    cms_inspect_success_message: "CSGO game client will be launched to connect to the server for inspecting. The function is forbidden to be used for other purposes except inspecting before buying items. A 10-minute inspection time per day is provided during the beta test. ",
    buy_order_min_price: "Not less than {{min_price}}",
    premium_buy_success: "Purchase Premium Successfully",
    premium_buy_fail: "Purchase failed, please try again later",
    premium_will_expire_content: "Your membership is about to expire on {{date}}. You will lost your membership benefits such as Exclusive Identifier, Inspect in Server and Extra Listing Limit.",
    premium_expired_content: "Your membership has expired on {{date}}. To update your benefits, you can renew your membership.",
    premium_expired_renew_now: "Renew now",
    premium_waiting_for_payment: "wait for payment",
    premium_havent_successfully_paid: "you have not yet paid successfully, please pay as soon as possible.",
    premium_continue_to_pay: "Continue to pay",
    premium_confirm_leave: "Leave",
    user_asset_admin_frozen_notification: "Some balances have been frozen due to abnormal operation of the account, please submit feedback.",
    remain_withdrawal_count_today: "Number of withdrawal remains today:",
    please_choose_coupon: "Coupon",
    not_use_coupon: "Do not use",
    expired_coupon_switch: "The coupon has expired and will be voided if replaced or cancelled.",
    no_coupon_to_use: "No coupon",
    notes: "Notes",
    notes_exceed_max_len: "Add no more than 40 characters. This is not item description and can only be seen by yourself.",
    purchased: " Purchased",
    submitted: "Submitted",
    edit_notes: "Edit Notes",
    add_notes: "Add Notes",
    notes_desc: "Notes(Private):",
    add_notes_desc: "Add Notes(Private)",
    coupon_dispense_sources_both: "You can get access to this benefit by upgrading to Plus or redeeming coupons with points in APP",
    coupon_dispense_sources_points: "You can get access to this benefit by redeeming coupons with points in APP",
    coupon_dispense_sources_vip: "You can get access to this benefit by upgrading to Plus",
    unuse_coupon_state: "Unused",
    used_coupon_state: "Used",
    preview_screenshots: "Preview Screenshots",
    to_view_figure: "Screenshot",
    buy_order_wx_pay_unfrozen: "Your buy order will be cancelled if not been supplied within 30 days, and the amount will be returned to your WeChat account.",
    will_be_returned_to_you_buff_b: "{{money}} will be refunded to your BUFF Balance",
    will_be_returned_to_origin: "{{money}} will return your WeChat account within 30 minutes",
    split_pay_min_amount_invalidate: "Not less than {{amount}}",
    split_pay_max_amount_invalidate: "Not higher than {{amount}}",
    split_pay_cancel_order_title: "Cancel purchase",
    split_pay_cancel_order_content: "Cancel the purchase? Please do not pay again after cancellation.",
    split_pay_continue_to_pay: "Not now",
    split_pay_confirm_leave: "Cancel purchase",
    unpaid_amount: "Unpaid amount",
    paid_success: "Paid",
    gift_card_query_title: "Notice",
    cash_detail_alipay: "Paid via Alipay",
    cash_detail_alipay_small: "(Can be used to buy items or withdraw cash to bank card)",
    cash_detail_epay: "Paid via WeChat",
    cash_detail_epay_small: "(Can be used to buy items or withdraw cash to bank card)",
    balances_detail: "Detail",
    currently_does_not_support_the_and_change: "Please select the bank manually",
    search_result: "Result",
    add_a_bank_card: "Add a Bank card",
    verify_tips: "Notice",
    verify_tips_text: "We have upgraded our wallets to help improve your asset security, please complete the verification before withdrawing.",
    withdraw_verify_tips: "Withdrawal Verification",
    withdraw_verify_tips_text: "This bank card has not completed verification, please complete the verification before withdrawing.",
    verify_now_btn_text: "Verify now",
    supply_max_limit: "Supply up to 50 items at the same time",
    sticker_copy: "Copy",
    no_field_for_more_sticker: "No field for more stickers",
    no_field_for_more_patch: "No field for more patches",
    sticker_search_entry: "Applied",
    weapon_case_entry: "Weapon case",
    in_collection: "Collection",
    item_contained: "Items Contained",
    an_rare_special_item: "An exceedingly rare special item",
    balance_authorization: "Balance authorization",
    ejzb_auth_title: "This payment requires authorisation",
    auth_entry_zhima_title: "Alipay Verification",
    auth_entry_zhima_text: " ",
    auth_entry_bankcard_title: "Bank Card Verification",
    auth_entry_bankcard_text: " ",
    auth_entry_manual_title: "Manual Verification",
    auth_entry_manual_text: "Global user verification method",
    auth_entry_kyc_title: "Passport Verification",
    auth_entry_kyc_text: "Global user verification method",
    manual_cert_upload_pic: "Please upload a screenshot of the real name page of your Alipay account and ID card",
    balance_authorization_expired: "Balance authorization has expired, ",
    re_authorisation: "reset it",
    manual_cert_processing: "manual cert is processing",
    error_picture: "Upload error, please upload jpeg or png format image",
    please_upload_manual_cert: "please upload image",
    auth_success: "success",
    manual_cert_finish: "success",
    request_in_queue: "The system is busy, please try again later",
    first_use_epay_balance: "Use BUFF Balance-Other first",
    first_use_alipay_balance: "Use BUFF Balance-Alipay first",
    manual_cert_title: "Manual verification",
    manual_cert_please_upload_screenshot: "Please upload a screenshot of the real name page of your Alipay account",
    manual_cert_please_upload_passport_pic: "Please upload your ID card",
    manual_cert_submit: "Submit",
    screenshot: "Screenshot",
    copy_to_clipboard_success: "Screenshot link successfully copied to clipboard",
    on_the_frame: "Sell",
    on_sale: "On sale",
    stat_view_count_text: "{{view_count}} viewed",
    stat_bookmark_count_text: "{{bookmark_count}} watchers",
    stat_bargain_count_text: "{{bargain_count}} bargained",
    order_pay_success_partner: 'The progress of the item delivery can be checked in <a href="/market/buy_order/history?game={{game}}">Buy History</a>. The item(s) will be sent to you via in-game mail message. Please check them in time.',
    badlanders_quality_100: "Purple",
    balanders_quality_5: "Gold",
    balanders_quality_4: "Purple",
    balanders_quality_3: "Blue",
    balanders_quality_2: "Green",
    balanders_quality_1: "White",
    refresh_success: "Success",
    recreate_buy_order_message: "You have an existing buy order for ¥{{old_price}}, do you want to replace it with a new buy order for ¥{{new_price}}?",
    recreate: "Replace",
    cancel_buy_order_and_recreate: "Existing buy order canceled. Failed to create the new one because: ",
    partial: "Partial ",
    cs2_inspect_input_share_link: "paste item sharing link here",
    cs2_inspect_success: "Inspecting, please click to view later",
    cs2_inspect_finish: "Generated, click to view.",
    cs2_inspect_delete: "Deleted"
});
i18nData.updateData("tw", {});
i18nData.updateData("es", {
    "1_seconds": "1 segundo",
    _piece_of_goods_has: "Se produjo un error, el artículo ya fue comprado",
    _piece_of_goods_off: "artículos exitosos",
    a_period_of_time_: "un periodo de tiempo: ",
    a_picture_is_not_uploaded: "Algunas imágenes no se subieron con éxito",
    a_successful_purchase: "Exitoso",
    access_to_the_steam_encounters: "¿Tiene algún problema con Steam?",
    account_can_be_withdraw_the: "No se puede retirar, saldo insuficiente en Saldo de BUFF - Otro",
    acknowledgment_is_bound_to_the: "¿Seguro que quiere de vincular esta cuenta de Steam?\nNombre de Steam:",
    acquisition_fee_failed_please_try: "Error al obtener la tasa. Por favor, inténtelo de nuevo más tarde",
    add_a_bank_card: "Añadir tarjeta bancaria",
    add_a_description: "Añadir una descripción",
    add_description: "Añadir una descripción",
    add_in_5_minutes_to: "Por favor, envíe la oferta en la app de BUFF en un plazo de 5 minutos.",
    add_in_the_buyers_payment: "Por favor, envíe en un plazo de 12 horas después de que el comprador pague, si no, se cancelará la venta del artículo y su función de venta será suspendida.",
    add_notes: "Añadir notas",
    add_the_other_card: "Añadir otra tarjeta bancaria",
    all: "Todo",
    already_have_an_account_click: "Pulse aquí para iniciar sesión",
    analysis: "Inspeccionando",
    analysis_figure: "Pantallazo",
    api_key_format_error: "Error en la clave API",
    api_key_successfully_set: "Exitoso",
    application_authentication_failure_please_contact: "Verificación fallida. Por favor, contacte con asistencia",
    artificial_assist: "Contactar con la asistencia",
    auth_entry_bankcard_text: "Retirar a tarjeta bancaria del mismo nombre",
    auth_entry_bankcard_title: "Verificación de nombre real",
    auth_entry_manual_text: "Retirada no disponible, requiere mucho tiempo",
    auth_entry_manual_title: "Verificación manual",
    auth_entry_zhima_text: "Retirar a tarjeta bancaria del mismo nombre",
    auth_entry_zhima_title: "Verificar por Alipay",
    auth_success: "Exitoso",
    authentication: "Verificación",
    back_for_refresh: "Atrás para actualizar",
    backpack_capacity_is_insufficient_can: "La capacidad de la mochila es insuficiente para la compra",
    balance_authorization: "Autorización de saldo",
    balance_authorization_expired: "Autorización de saldo caducada ",
    balances_detail: "Detalles",
    bargain_price_must_be_lower: "El precio de la contraoferta debe ser inferior al precio de venta",
    being_prepaid_in: "Recargar",
    beware_of_phishing_scams_please: "Cuidado con los fraudes. Por favor, compruebe si su clave API ya fue creada Si se creó de forma maliciosa, por favor, elimínela y cambie su contraseña de Steam inmediatamente.",
    binding_acknowledgment: "Confirmar",
    binding_steam: "Conectar la cuenta de Steam",
    binding_steam_before_you_can: "Conecte su cuenta de Steam para disfrutar de BUFF.",
    binding_transaction_link_the_immediate: "Establezca su URL de intercambio de Steam para empezar a intercambiar en BUFF",
    bound_to_fail: "Error",
    buff_backpack_capacity_is_insufficient: "Espacio en la mochila insuficiente, se ajustó la cantidad máxima que puede usted comprar",
    buy_order_min_price: "No menos de {{min_price}}",
    buy_order_wx_pay_unfrozen: "Su solicitud de compra será cancelada si no se hace el suministro en un plazo de 30 días, y la cantidad le será reembolsada en su cuenta de WeChat.",
    buy_price_cannot_be_less: "El precio de compra no puede ser inferior a ￥0.01",
    buy_pubgrecycled_transactionitems_not_get: "Los artículos de PUBG no pueden retirarse",
    buy_success: "Exitoso",
    buying_in_bulk_quantity_can: "No se puede superar el número de compra por lotes",
    buying_in_bulk_results: "Resultado",
    buying_num: "{{num}} petición",
    can_not_supply_your_own: "No se pueden suministrar los artículos que compró",
    cancel: "Cancelar",
    cancel_buying_success: "Exitoso",
    cancel_delivery_success: "Exitoso",
    cancel_recommend: "Cancelar recomendación",
    cancel_the_shipment: "Cancelar envío",
    cannot_be_resolved_the_goods: "No se puede inspeccionar. El artículo se vendió o la conexión a la red no es buena",
    cannot_purchase_your_own_items: "No puede comprar sus propios artículos",
    card_limit_is_reached: "La tarjeta bancaria alcanzó el límite",
    cardsp: "Tarjetas bancarias",
    cash_detail_alipay: "Pagado mediante Alipay",
    cash_detail_alipay_small: "(Pueden usarse para comprar artículos o hacer retiradas a las tarjetas bancarias)",
    cash_detail_epay: "Pagado mediante WeChat",
    cash_detail_epay_small: "(Pueden usarse para comprar artículos o hacer retiradas a las tarjetas bancarias)",
    century: "Siglo",
    change_price_of_failure: "Error",
    check_sticker_wear_in_detail: "Puede comprobar el desgaste de las calcomanías en la parte inferior de la página del artículo. Por favor, compruébelo antes de la compra",
    clear_the_api_key_after: "Cuando borre la clave API, su tienda se desconectará y los artículos no podrán comprarse. ¿Está seguro de que quiere eliminarla?",
    click_on_upload_picture: "Pulse para subir imagen",
    click_to_collapse: "Cerrar",
    click_to_expand: "Expandir",
    close_failed_please_try_again: "Error al cerrar. Reinténtelo",
    cms_inspect_success_message: "El cliente del juego CSGO se ejecutará y se conectará al servidor para inspeccionarse. No está permitido usar la función para cualquier otro fin a excepción de inspeccionar antes de comprar artículos. Durante la beta se permite realizar una inspección de 10 minutos al día. ",
    cms_inspect_success_title: "inspeccionar en servidor",
    complete: "Completar",
    confirm: "Confirmar",
    confirm_and_opened: "Abrir",
    confirm_clear: "Eliminar",
    confirm_leave: "Salir",
    confirm_to_cancel_the_transaction: "Confirmar",
    confirmation_of_payment: "Confirmar",
    "congratulations_to_you!_welcome_to": "¡Le damos la bienvenida a BUFF, ya puede empezar a intercambiar!",
    consignment_goods_shelf_will_be: "Los artículos en consignación le serán devueltos a su mochila de BUFF cuando sean eliminados.",
    content_length_can_not_be: "El contenido no puede tener más de 1024 caracteres",
    continue_selling: "Continuar",
    continue_to_pay: "Continuar para pagar",
    counteroffer_price_cannot_be_lower: "El precio de la contraoferta debe ser superior que el precio de puja mínimo",
    counteroffer_request_has_been_sent: "Se envió la solicitud de contraoferta",
    coupon_dispense_sources_both: "Puede obtener este beneficio mejorando a Plus o al canjear vales con puntos en la app",
    coupon_dispense_sources_points: "Puede obtener este beneficio al canjear vales con puntos en la app",
    coupon_dispense_sources_vip: "Puede obtener este beneficio al mejorar a Plus",
    create_a_package_of_trading: "Exitoso",
    create_buying_success: "Exitoso",
    csgo_deposit_notice: 'Debido a cambios en las reglas de intercambio de CS:GO/DOTA2, los artículos estarán disponibles para intercambiarse otra vez después de 7 días.<a href="/help#csgo_trade_cooldown" target="_blank">CS:GO/DOTA2交易机制改动</a>',
    currently_does_not_support_the: "Actualmente no se admite el número de la tarjeta. Cambie la tarjeta, por favor.",
    currently_does_not_support_the_and_change: "Por favor, seleccione el banco manualmente",
    currently_have_to_wait_for: "Todavía hay un comentario esperando respuesta. Si necesita añadir más comentarios, por favor, vaya a suplementario.",
    day: "Día",
    days: "días",
    delete_confirmation: "Confirmación",
    delete_failed: "Error",
    delivery_prompt: "Notificación",
    delivery_timeout: "Envío caducado",
    deposit_backpack: "Depositar",
    deposit_failed: "Error",
    deposit_instructions_confirm: "Depositar",
    deposit_instructions_message: "Hay una situación de acumulación, así que se considerará como un único artículo cuando se deposite en la mochila de BUFF. Por favor, establezca la cantidad como 1 al depositar.",
    deposit_instructions_title: "Instrucciones para depositar",
    description: "Descripción",
    detect_fail_try_later: "Error en la detección. Por favor, inténtelo de nuevo más tarde",
    detected_you_are_using_steam: "Acaba de iniciar sesión con Steam. Necesitamos verificar su número de celular para garantizar la seguridad de su cuenta.",
    detection_failed_please_try_again: "Error en la detección. Por favor, inténtelo de nuevo más tarde",
    detects_network_anomalies_please_try: "Error de red. Por favor, reinténtelo más tarde",
    detects_that_you_are_also: "Por favor, vincule primero a Steam.",
    determine_the_selected_accessories_to: "¿Está seguro de quitar de la lista los artículos seleccionados?",
    determine_use_store_name_coupon: "Este cambio de nombre requiere consumir 1 cupón de cambio de nombre. ¿Seguro que quiere cambiarlo?",
    determined_to_be_removed_from: "¿Seguro que quiere cancelar su colección?",
    disable_antiscam: "El sistema dejará de ayudarle a interceptar ofertas falsas. Por favor, tenga cuidado con las estafas.",
    disable_sms_notification_alert: "No recibirá más alertas de pedidos por SMS si deshabilita esta función. Por favor, esté atento a las notificaciones de su celular y prepare el pedido rápidamente.",
    do_not_exceed_24_characters: "No puede tener más de 24 caracteres",
    download: "Descargar",
    edit_description: "Editar descripción",
    edit_notes: "Editar notas",
    edit_the_description: "Editar descripción",
    ejzb_auth_title: "Este pago requiere autorización",
    enter_the_verification_code: "Introduzca el código",
    error_code: "Código de error:",
    error_picture: "Error en la subida, por favor, suba imágenes en formato jpeg o png",
    expired_coupon_switch: "El vale caducó y se anulará si se cambia o se cancela.",
    failure_to_modify: "Error",
    feedback_success: "Exitoso",
    for_the_protection_of_your: "Tenemos que verificar la cuenta de Steam vinculada a esta cuenta para garantizar la seguridad de su cuenta.",
    fraud_notice: "Cuidado con los fraudes. Por favor, compruebe si su clave API ya fue creada Si se creó de forma maliciosa, por favor, elimínela y cambie su contraseña de Steam inmediatamente.",
    get_code: "Conseguir código",
    get_in: "Obteniendo",
    get_steam_trading_link: "Obtener URL de intercambio",
    get_the_package_deal_failed: "Error",
    get_the_verification_code: "Conseguir código",
    gift_card_buy_success: "¡Hecho! Comparta el código de canje de la tarjeta de regalo con el destinatario. También puede comprobarlo en Mis vales.\nNombre del recipiente: {{nickname}}\nCódigo de canje: {{sn}}",
    gift_card_query_title: "Aviso",
    gift_card_receiver_info: "Nombre y avatar de BUFF",
    gift_card_receiver_nickname_error: "El nombre de usuario de BUFF no existe",
    go_to_bind: "Vincular",
    go_to_bind_card: "Vincular",
    go_to_check: "Comprobar",
    go_to_market: "Ver tienda",
    go_to_set: "Configurar",
    go_to_settings: "Configurar",
    go_to_verify: "Ir a verificar",
    go_to_view: "Ver",
    greater_than_the_extraction_amount: "Excedido",
    has_been_sent: "Enviado",
    has_been_used: "Utilizado",
    have_not_modify_store_name: "No modificó el nombre de la tienda",
    hour: "hora",
    hours: "horas",
    i_first_look_at_the: "Echar un vistazo",
    i_know: "Entendido",
    i_think_again: "Más tarde",
    id_card_number_errors_please: "El número de ID es incorrecto. Vuelva a introducirlo, por favor",
    id_number_can_not_be: "El número de la ID no puede estar vacío",
    in_order_to_your_funds: "Por favor, introduzca los datos siguientes para garantizar la seguridad de su cuenta",
    input_content_too_long_to_40_words: "Por favor, introduzca menos de 40 palabras",
    inspecting: "Inspeccionando. Por favor, inténtelo de nuevo más tarde",
    instrongmy_counterofferstrongattention_counteroffer_status_the: 'Cuando el vendedor acepte la contraoferta y le envíe una oferta, tiene que ir a <strong>Historial de compras</strong> para aceptar la oferta, de lo contrario se le restará un <strong class="c_Yellow">2%</strong> de la contraoferta y se le enviará al vendedor como compensación.',
    is_being_processed_you_can: "Se está procesando. Puede comprobar el progreso en el historial de retiradas.",
    is_being_uploaded: "Subiendo...",
    it_detects_your_steam_account: "Su cuenta de Steam parece que puede intercambiar.",
    it_is_determined_to_cancel: "¿Seguro que quiere cancelar el envío?",
    items_on_the_shelves_successful: "Exitoso",
    jewelry: "Artículo",
    less_than: "menos de",
    listing_instructions_confirm: "Continuar para poner a la venta",
    listing_instructions_message: "Se produjo una acumulación. Solo se puede poner uno a la venta. Solo puede continuar poniendo a la venta el resto después de completar la transacción o eliminarlo de la lista de venta.",
    listing_instructions_title: "Instrucciones para poner a la venta",
    login: "Iniciar sesión",
    login_register: "Iniciar sesión/Registrarse",
    login_with_password: "Iniciar sesión con la contraseña",
    login_with_sms: "Iniciar sesión mediante SMS",
    manual_cert_finish: "Exitoso",
    manual_cert_processing: "Bajo revisión",
    manual_cert_upload_pic: "Por favor, suba una captura de pantalla de la página del nombre real de su cuenta de Alipay y de su carnet de identidad",
    member: " Artículos",
    minimum_price_can_not_be: "El precio mínimo no puede ser más alto que el precio máximo",
    minute: " minuto ",
    minutes: " minutos ",
    modify_the_price: "Cambiar precio",
    modify_the_success: "Exitoso",
    must_allow_epay_or_alipay: "Tiene que aceptar uno de los pagos de Alipay y WeChat",
    need_to_first_agree_to: "Acepte primero el acuerdo de pago",
    network_error: "Error de red. Por favor, reinténtelo más tarde",
    network_request_failed: "Solicitud de red fallida",
    next_page: "Siguiente",
    nickname_modify_too_frequently_notice: "Cambios con demasiada frecuencia, por favor cambie después de {{time}}",
    no_available_items: "No hay artículos disponibles",
    no_coupon_to_use: "No hay vales",
    no_field_for_more_patch: "No hay espacio para más parches",
    no_field_for_more_sticker: "No hay espacio para más calcomanías",
    no_longer_prompt: "No volver a recordar",
    no_meet_the_requirements_of: "No hay artículos que cumplan los requisitos",
    no_related: "No hay artículos relacionados",
    not_found_to_contain_the: "La búsqueda no dio resultados",
    not_my_phone_number_please: "¿No es su número de teléfono? Por favor,",
    not_support_credit_card: "No se admite la tarjeta de crédito",
    not_use_coupon: "No utilizar",
    notes: "Notas",
    notes_desc: "Notas (privado):",
    notes_exceed_max_len: "No añada más de 40 caracteres. Esto no es una descripción de un artículo, y solo usted puede verla.",
    number: "Número:",
    of_buying_ityuan: "¿Comprar?￥",
    off_the_shelves_results: "Resultado",
    ok: "OK",
    on_frame_failure: "Error",
    out_collection: "Cancelar colección",
    package_deal: "Intercambio de paquetes",
    packaged_transaction_within_the_test: "Función no disponible.",
    page_size: "Número por página",
    page_temporarily_does_not_support: "La web no admite compras por lotes. Por favor, vaya a la app de BUFF.",
    paid_success: "Pagado",
    pattern_template: "Semilla de pintura",
    pay_failed: "Pago fallido",
    payment: "Pagando",
    payment_system_is_busy_please: "El sistema de pagos está ocupado. Por favor, compruebe el resultado del pago en Historial de compras.",
    piece_of_goods: "Artículos",
    piece_of_goods_please_go: "artículos. Por favor, compruebe su historial de compras",
    platform_name: "Tienda de aspectos de BUFF163",
    please_agree: "Por favor, compruebe el acuerdo primero.",
    please_agree_to_the_service: "Por favor, acepte primero el acuerdo del servicio.",
    please_be_patient: "Por favor, tenga paciencia",
    please_choose_coupon: "Vale",
    please_choose_to_be_a: "Por favor, elija artículos",
    please_choose_to_be_on: "Por favor, elija artículos",
    please_do_the_safety_confirmation: "Por favor, realice la confirmación de seguridad e introduzca",
    please_enter: "Por favor, introduzca ",
    please_enter_image_verification_code: "Por favor, introduzca el código de verificación de la imagen",
    please_enter_or_select_the: "Por favor, introduzca o seleccione una cantidad a recargar\\n",
    please_enter_pricing: "por favor, introduzca un precio",
    please_enter_the_account_password: "Introducir contraseña",
    please_enter_the_auto_logoff: "Por favor, introduzca un tiempo de desconexión automática",
    please_enter_the_correct_invite: "Por favor, introduzca el código de invitación correcto.",
    please_enter_the_netease_mobile: "Introduzca el número de celular",
    please_enter_the_question_content: "Por favor, introduzca el contenido del comentario",
    please_enter_the_redemption_code: "Por favor, introduzca el código",
    please_enter_the_registered_phone: "Por favor, introduzca un número de celular",
    please_enter_the_sms_verification: "Introduzca el código",
    please_enter_the_verification_code: "Introduzca el código",
    please_enter_your_steam_trade: "Introducir la URL de intercambio",
    please_exchange_store_name_coupon_at_app: "Por favor, canjee el vale de cambio de nombre de tienda en la app de BUFF",
    please_fill_out_the_trading: "Por favor, introduzca la URL de intercambio",
    please_get_a_sms_verification: "Por favor, consiga el código primero",
    please_get_a_verification_code: "Por favor, consiga el código primero",
    please_go_to_buff_the: "Por favor,envíe las ofertas en la app de BUFF",
    please_go_to_my_sell: "Por favor, entréguelo en Mis ventas",
    please_in_the_backpack_view: "Por favor, compruébelo en su mochila.",
    please_input_01000_between_the: "Por favor, introduzca una semilla de pintura de entre 0 y 1000",
    please_input_store_name: "Por favor, introduzca un nombre de la tienda",
    please_input_the_correct_mailbox: "Por favor, introduzca un correo válido",
    please_modify_the_nickname: "Por favor, cambie su nombre",
    please_select_deposit_item: "Por favor, elija artículos",
    please_select_from_the_available: "Por favor, seleccione un vale disponible",
    please_select_item: "Por favor, elija artículos",
    "please_select_recharge_way\\n": "Por favor, seleccione el método de recarga\\n",
    please_select_the_bank_account: "Por favor, seleccione una cuenta del banco",
    "please_select_the_card\\n": "Por favor, seleccione una tarjeta bancaria\\n",
    please_select_the_you_want: "Por favor, elija artículos",
    please_select_to_ship_the: "Por favor, elija artículos",
    please_tick_the_below_statement: "Por favor, marque la casilla inferior",
    please_upload_manual_cert: "Por favor, suba una imagen",
    please_upload_picture: "Por favor, suba una imagen",
    please_wait: "Espere, por favor...",
    please_wait_for_seller_to: "Por favor, espere a que el vendedor envíe la oferta y acéptela",
    please_wait_for_the_seller: "Por favor, espere a que el vendedor envíe la oferta. Después de eso, usted tendrá que aceptar la oferta",
    please_wait_patiently_have_been: "Tenga paciencia, por favor",
    pluar_s: "s",
    pmost_can_only_be_bound: "Como máximo se puede vincular",
    premium_buy_fail: "Compra fallida. Por favor, inténtelo de nuevo más tarde",
    premium_buy_success: "Cuenta Premium comprada con éxito",
    premium_confirm_leave: "Salir",
    premium_continue_to_pay: "Continuar para pagar",
    premium_expired_content: "Su membresía caducó el {{date}}. Renueve su membresía para mejorar sus beneficios.",
    premium_expired_renew_now: "Renovar ahora",
    premium_havent_successfully_paid: "Aún no pagó con éxito. Por favor, pague cuanto antes.",
    premium_waiting_for_payment: "esperando al pago",
    premium_will_expire_content: "Su membresía caducará en {{date}}. Perderá los beneficios de su membresía, como por ejemplo el identificador exclusivo, la inspección en el servidor o el límite extra de la lista.",
    press_and_hold_the_slider: "Mantenga pulsado el deslizador y arrástrelo para completar el puzle de arriba",
    prev_page: "Página anterior",
    preview_screenshots: "Capturas de pantalla",
    price_must_be_greater_than: "El precio debe ser superior a: ",
    private_transaction_within_the_test: "Función no disponible.",
    private_transactions: "intercambio privado",
    prompt: "Consejo",
    purchase: "Comprando",
    purchase_failed: "Error",
    purchase_failure_reason_as_follows: "fallido, motivos:",
    purchase_price_not_greater_than: "El precio de compra no puede ser superior a ",
    purchased: "Comprado",
    quantity: "Cantidad:",
    ranking_total_ranking: "Clasificación total",
    re_authorisation: "Restablecer",
    reacquire_the_print_data: "Volver a conseguir los datos de la calcomanía",
    receive_sms_verification_code: "Código SMS recibido.",
    recharge_failed: "Error",
    recharge_successful: "Exitoso",
    recharge_with_cash_only_support: "Las recargas y retiradas solo son compatibles con tarjetas de débito",
    recharge_yuan: "Recargar ￥",
    recommended_use_of_the_netease: 'Se recomienda usar el acelerador NetEase UU.<a href="/help#steam_network">查看更多解决方案</a>',
    reconfirm: "Reconfirmar",
    refresh: "Actualizar",
    refresh_in_the: "Actualizar...",
    refreshing: "Actualizar",
    register_a_new_account: "Registrar nueva cuenta",
    registration: "Registrarse",
    remain_withdrawal_count_today: "Número de retiradas restantes disponibles para hoy:",
    reminder: "Recordatorio",
    replicated: "Copiado",
    reply_success: "Exitoso",
    request: "Creando",
    request_in_queue: "El sistema está colapsado. Por favor, inténtelo de nuevo más tarde",
    require_minimal_packaging_of_two: "Necesita empacar al menos dos elementos",
    resend: "Reenviar",
    retrieval_failure: "No se pudo hacer la retirada",
    retrieve_the_process_description: "Presentación del proceso de recuperación",
    reupload: "Volver a subir",
    sale_amount: "Importe de venta",
    sale_amount_yuan: "Importe de venta: ",
    sale_number_: "Número de venta: ",
    save: "Guardar",
    scratch_sticker_notice: "Tiene que asegurarse de que la información de la calcomanía coincide con la del inventario al ponerla en la tienda. Raspar las calcomanías antes de enviarlas hará que su cuenta sea bloqueada.",
    search_result: "Resultado",
    seconds: " segundos",
    select_to_change_the_price: "Por favor, elija artículos",
    select_to_retrieve_the_goods: "Por favor, elija artículos",
    select_up_to_200_pieces: "Elija hasta 200 artículos",
    selling_num: "{{num}} en venta",
    send_a_verification_code_failed: "No se pudo enviar el código de verificación",
    sent_successfully_please_note_the: "Enviado con éxito",
    set_success: "Exitoso",
    set_the_boot: "Guía",
    set_to_fail: "Error",
    set_up_steam_trade_url: "Configurar URL de intercambio de Steam",
    set_up_trading_links: "Configurar URL de intercambio",
    settings_failed_please_try_again: "Error",
    shelve_failed: "Error",
    shelve_notice: "Por favor, envíe en un plazo de 12 horas después de que el comprador pague, si no el artículo será eliminado de la lista y su función de venta será suspendida.",
    shelve_success: "Exitoso",
    shelves_successful: "Exitoso",
    since_the_csgo_official_trading: 'Debido a cambios en las reglas de intercambio oficiales de CS:GO, los artículos no se recuperarán en un plazo de 7 días después de depositarlo.<a href="/help#csgo_trade_cooldown" target="_blank">CS:GO交易机制改动</a>',
    skip_maybe_next_time: "Saltar",
    slogan: "Soporta juegos como CS:GO, DOTA2, etc.",
    sold_number_of_pieces: "Número de venta",
    some_etc: "{{count}} artículos",
    split_pay_cancel_order_content: "¿Cancelar compra? Por favor, no pague después de cancelar.",
    split_pay_cancel_order_title: "Cancelar compra",
    split_pay_confirm_leave: "Cancelar compra",
    split_pay_continue_to_pay: "Más tarde",
    split_pay_max_amount_invalidate: "No es mayor que {{amount}}",
    split_pay_min_amount_invalidate: "No menos de {{amount}}",
    steam_trade_limit: "Su cuenta de Steam no puede intercambiar por el momento. Por favor, compruebe la ayuda de Steam.",
    sticker_copy: "Copiar",
    sticker_search_entry: "Aplicado",
    weapon_case_entry: "Caja de armas",
    in_collection: "Colección",
    item_contained: "Artículos que contiene",
    an_rare_special_item: "Artículo especial muy raro",
    submitted: "Enviado",
    successful_supply: "Exitoso",
    successful_upload: "Exitoso",
    successfully_submitted: "Exitoso",
    supply_failure: "Error",
    supply_max_limit: "Suministrar hasta 50 artículos a la vez",
    supply_success: "Exitoso",
    sure_you_want_to_delete: "¿Seguro que quiere borrar esta tarjeta?",
    system_busy_error: "El sistema está colapsado. Por favor, inténtelo de nuevo más tarde",
    termination_buying: "Cancelar compra",
    the_account_can_be_withdrawal: "No se puede retirar, saldo insuficiente en Saldo de BUFF - Otro",
    the_amount_of_recharge_need: "La cantidad tiene que ser un número",
    the_authentication_is_successful: "Exitoso",
    the_bank_card_number_can: "El número de la tarjeta bancaria no puede estar vacío",
    the_bank_card_number_errors: "El número de la tarjeta bancaria es incorrecto. Vuelva a introducirlo, por favor",
    the_binding_is_successful: "Exitoso",
    the_content_of_the_input: "Por favor, introduzca menos de 40 palabras",
    the_current_balance_of_dollar: ", saldo actual ￥",
    the_current_page_is_no: "No hay artículos",
    the_degree_of_wear_get: "Obteniendo...",
    the_goods_can_not_a: "El precio del artículo no se puede asignar automáticamente, por favor asígnele uno",
    the_goods_is_not_buying: "Este artículo no está disponible para su compra.",
    the_lack_of_balance: "Saldo insuficiente",
    the_maximum_allowable_amount_of: "La cantidad máxima de recarga es",
    the_minimum_allowable_amount_of: "La cantidad mínima de recarga es",
    the_modified_price_of_success: "Exitoso",
    the_payment_is_successful: "Exitoso",
    the_phone_number_cannot_be: "El número de teléfono no puede estar vacío",
    the_phone_number_has_been: "¿Cambió de número de teléfono? Por favor,",
    the_phone_number_is_incorrect: "El número de teléfono es incorrecto. Vuelva a introducirlo, por favor",
    the_phone_receives_the_verification: "Código de verificación recibido",
    the_picture_is_being_resolved: "Inspeccionando. Por favor, pulse para verlo más tarde",
    the_price_can_not_be: "El precio no puede ser superior a: ",
    the_purchase_amount_can_not: "No puede superar el número de artículos que cumplen las condiciones",
    the_quote_failed_to_send: "Error: ",
    the_real_name_can_not: "El nombre real no puede estar vacío",
    the_recommended_bit_is_already: "La posición recomendada está llena",
    the_set_of_recommended_items: "Recomendar",
    the_shelves: "Quitado de la lista",
    the_shelves_after_the_goods: "¿Está seguro de quitar de la lista los artículos seleccionados?",
    the_system_is_busy: "El sistema está ocupado",
    the_system_is_busy_please: "El sistema está ocupado. Por favor, compruebe el historial de compras",
    the_system_is_busy_you: "El sistema está ocupado. Puede comprobar el progreso de recarga más reciente en el historial de recargas.",
    the_system_is_busyplease_try: "El sistema está colapsado. Por favor, inténtelo de nuevo más tarde",
    the_system_supports_the_maximum: "El sistema admite hasta 64 caracteres.",
    the_validation_is_successful: "Exitoso",
    the_verification_code_is_incorrect: "Código de verificación incorrecto",
    there_goods_is_not_input: "Hay artículos sin precio",
    tied_the_card_fails_please: "Error. Por favor, confirme que la información introducida es correcta.",
    timeout: "Caducado",
    to_bind: "Vincular",
    to_check: "Comprobar",
    to_guarantee_your_safety_of: "Introduzca su número de celular",
    to_obtain_the_dynamic_code: "Error",
    to_receive_the_success: "Exitoso",
    to_shipping: "Envío",
    to_steam: "Conectar a Steam",
    to_view_figure: "Pantallazo",
    trade_url_setting_successful: "Exitoso",
    trading_link_format_error: "Error en el formato de la URL de intercambio",
    unbound_steam: "Primero conecte la cuenta de Steam",
    unbound_steam_notice: "Por favor, vincule primero a Steam.",
    unbound_steam_trading_link_whether: "URL de intercambio de Steam no vinculada, vaya a configurarlo primero.",
    undelivered_notice: "La última vez no completó el envío, así que no podrá vender en un plazo de {{hours}} horas y {{minutes}} minutos.",
    unpaid_amount: "Cantidad no pagada",
    unset_price_item: "Hay artículos sin precio",
    unuse_coupon_state: "No utilizado",
    up_to_200_items: "Elija hasta 200 artículos",
    "upload_success!_your_players_show": "¡Subido correctamente! Su muestra de aspectos está bajo revisión",
    urs_password_login_need_verify: "Necesitamos verificar su cuenta de celular para garantizar la seguridad de su cuenta.",
    used_coupon_state: "Utilizado",
    user_asset_admin_frozen_notification: "Se bloquearon algunos saldos debido a operaciones anómalas en la cuenta. Por favor, envíe un comentario.",
    user_login: "Iniciar sesión/Registrarse",
    user_registration: "Registrarse",
    valuation: "Valoración:",
    verification_code_cannot_be_empty: "El código está vacío",
    verify: "Verificar",
    verify_now_btn_text: "Verificar ahora",
    verify_tips: "Aviso",
    verify_tips_text: "Mejoramos nuestras carteras para mejorar la seguridad de sus bienes. Por favor, complete la verificación antes de retirar.",
    view_a_player_show_please: "Por favor, inicie sesión primero",
    view_history_please_login: "Por favor, inicie sesión primero",
    view_more: "Ver más",
    view_more_long_time_exchange: "Intercambiar",
    view_more_long_time_of: "Para ver la tendencia de los precios a largo plazo, por favor, cambie a Observador",
    view_more_long_time_of_for_premium: "Puede unirse a BUFF Plus para ver la tendencia de precios de los últimos 6 meses.",
    view_my_steam_inventory: "Ver mi inventario de Steam",
    view_price_trends_please_login: "Por favor, inicie sesión primero",
    view_top_bookmarked_please_login: "Por favor, inicie sesión primero",
    view_wear_ranking_please_log: "Por favor, inicie sesión primero",
    waiting_for_payment: "esperando al pago",
    whether_the_problem_has_been: "¿Se resolvió el problema?",
    whether_to_terminate_the_purchase: "¿Terminar el progreso en curso como {{progress}}?\n{{refund_desc}}",
    will_be_returned_to_origin: "{{money}} regresará a su cuenta de WeChat en un plazo de 30 minutos",
    will_be_returned_to_you_buff_b: "{{money}} se reembolsará en su saldo de BUFF",
    withdraw_cash_price_of_dollar: "Retirar￥",
    withdraw_the_maximum_amount_of: "La cantidad máxima de retirada es",
    withdraw_verify_tips: "Verificación de retirada",
    withdraw_verify_tips_text: "Tarjeta bancaria no verificada. Por favor, verifíquela antes de retirar fondos.",
    withdrawal_failure: "Error",
    withdrawal_has_been_filed: "Solicitó una retirada",
    withdrawal_minimum_amount_is: "La cantidad mínima a retirar es",
    years: "Año",
    you_can_recharge_in_a: "Puede comprobar los últimos progresos en el historial de recargas.",
    you_have_new_orders_need: "Tiene un nuevo pedido por enviar.",
    you_have_yet_to_bind: "Todavía no vinculó la URL de intercambio en Steam, por favor, vaya a configurarlo",
    you_havent_successfully_paid_the: "No realizó el pago con éxito. El pedido se puede pagar en un plazo de 3 minutos. Por favor, pague cuanto antes.",
    you_must_be_over_18: "Debe tener al menos 18 años para poder usar nuestro servicio.",
    your_buying_price_is_higher: "El precio de su solicitud de compra es superior al precio en tienda ¿Continuar?",
    your_current_steam_account_cant: "Su cuenta de Steam actual no puede intercambiar Por favor, compruebe nuestra documentación de ayuda.",
    your_mobile_phone_account_occurs: "Su cuenta de celular se cambió. Necesitamos verificar su cuenta de celular para garantizar la seguridad de su cuenta.",
    your_phone_account_through_a: "Su cuenta de celular cambió y tenemos que verificar su cuenta de Steam vinculada.",
    your_steam_account_halt: "Se detectó que su cuenta de Steam tiene retenidos los intercambios.",
    your_steam_account_tradable: "Su cuenta de Steam parece que puede intercambiar.",
    your_steam_acctoun_trade_limit: "Su cuenta de Steam no puede intercambiar",
    your_steam_trade_url_invalid: "Su URL de intercambio caducó. Por favor, vaya a Steam para obtenerla",
    yuan: "yuan",
    refresh_success: "Exitoso",
    cs2_inspect_input_share_link: "paste item sharing link here",
    cs2_inspect_success: "Inspeccionando. Por favor, pulse para verlo más tarde",
    cs2_inspect_finish: "Generado, haz clic para ver.",
    cs2_inspect_delete: "Eliminado",
    copy_to_clipboard_success: "Enlace de captura de pantalla copiado al portapapeles con éxito"
});
i18nData.updateData("pt", {
    "1_seconds": "1 segundo",
    _piece_of_goods_has: "os itens falharam porque já foram comprados",
    _piece_of_goods_off: "itens bem-sucedidos",
    a_period_of_time_: "Um período de tempo: ",
    a_picture_is_not_uploaded: "Algumas imagens não foram carregadas com sucesso",
    a_successful_purchase: "Sucesso",
    access_to_the_steam_encounters: "Teve algum problema com o Steam?",
    account_can_be_withdraw_the: "Não é possível sacar, saldo insuficiente no Saldo do BUFF - Outro",
    acknowledgment_is_bound_to_the: "Tem certeza de que deseja vincular a esta conta do Steam?\nApelido do Steam:",
    acquisition_fee_failed_please_try: "Falha ao receber a taxa, tente novamente mais tarde",
    add_a_bank_card: "Adicione uma Conta bancária",
    add_a_description: "Inserir uma descrição",
    add_description: "Inserir uma descrição",
    add_in_5_minutes_to: "Envie a oferta no aplicativo do BUFF dentro de 5 minutos.",
    add_in_the_buyers_payment: "Entregue dentro de 12 horas após o pagamento do comprador, do contrário o item será removido da venda e sua função de venda será banida.",
    add_notes: "Adicionar Notas",
    add_the_other_card: "Adicionar outra conta bancária",
    all: "Tudo",
    already_have_an_account_click: "Clique aqui para logar",
    analysis: "Inspecionando",
    analysis_figure: "Captura de tela",
    api_key_format_error: "Erro no formato da Chave API",
    api_key_successfully_set: "Sucesso",
    application_authentication_failure_please_contact: "Falha na verificação, entre em contato com o Suporte",
    artificial_assist: "Falar com o Suporte",
    auth_entry_bankcard_text: "Saque para cartão bancário sob mesmo nome",
    auth_entry_bankcard_title: "Verificação de nome real",
    auth_entry_manual_text: "Saque não suportado e tempo gasto",
    auth_entry_manual_title: "Verificação manual",
    auth_entry_zhima_text: "Saque para cartão bancário sob mesmo nome",
    auth_entry_zhima_title: "Verificar pelo Alipay",
    auth_success: "Sucesso",
    authentication: "Verificação",
    back_for_refresh: "Voltar para atualizar",
    backpack_capacity_is_insufficient_can: "Espaço da mochila insuficiente",
    balance_authorization: "Autorização de saldo",
    balance_authorization_expired: "A autorização de saldo expirou, ",
    balances_detail: "Detalhe",
    bargain_price_must_be_lower: "O preço de barganha deve ser menor que o preço de venda",
    being_prepaid_in: "Carregando",
    beware_of_phishing_scams_please: "Cuidado com golpes, verifique se a chave de API foi criada? Se foi criado com malícia, exclua e altere a senha do Steam imediatamente.",
    binding_acknowledgment: "Confirmar",
    binding_steam: "Conectar à Conta do Steam",
    binding_steam_before_you_can: "Conecte sua conta do Steam para aproveitar o buff.",
    binding_transaction_link_the_immediate: "Defina seu URL de negociação no Steam para começar a negociar no BUFF",
    bound_to_fail: "Falha",
    buff_backpack_capacity_is_insufficient: "Espaço na mochila insuficiente. Ajustando o limite de compra disponível.",
    buy_order_min_price: "Não menos que {{min_price}}",
    buy_order_wx_pay_unfrozen: "Seu pedido de compra será cancelado se não for fornecido em 30 dias. Nesse caso, o valor será reembolsado na sua conta do WeChat.",
    buy_price_cannot_be_less: "O preço de compra não pode ser inferior a ￥0,01",
    buy_pubgrecycled_transactionitems_not_get: "Os itens de PUBG não são retiráveis",
    buy_success: "Sucesso",
    buying_in_bulk_quantity_can: "O número de compras em massa não pode exceder",
    buying_in_bulk_results: "Resultado",
    buying_num: "{{num}} demanda",
    can_not_supply_your_own: "Não é possível fornecer os itens que você compra",
    cancel: "Cancelar",
    cancel_buying_success: "Sucesso",
    cancel_delivery_success: "Sucesso",
    cancel_recommend: "Cancelar recomendação",
    cancel_the_shipment: "Cancelar Entrega",
    cannot_be_resolved_the_goods: "Não foi possível inspecionar, o item foi vendido ou a rede é ruim",
    cannot_purchase_your_own_items: "Você não pode comprar seu próprio item.",
    card_limit_is_reached: "Cartão bancário atinge o limite superior",
    cardsp: "cartões bancários",
    cash_detail_alipay: "Pago via Alipay",
    cash_detail_alipay_small: "(Pode ser usado para comprar itens ou sacar dinheiro no cartão bancário)",
    cash_detail_epay: "Pagar via WeChat",
    cash_detail_epay_small: "(Pode ser usado para comprar itens ou sacar dinheiro no cartão bancário)",
    century: "Século",
    change_price_of_failure: "Falha",
    check_sticker_wear_in_detail: "Você pode conferir se os adesivos foram raspados no fim da página do item. Confirme ante de comprar.",
    clear_the_api_key_after: "Após revocar a chave API, sua loja ficará offline e os itens não serão comprados. Tem certeza que deseja limpar?",
    click_on_upload_picture: "Clique para carregar a imagem",
    click_to_collapse: "Recolher",
    click_to_expand: "Expandir",
    close_failed_please_try_again: "Falha ao fechar, tente novamente",
    cms_inspect_success_message: "O cliente do jogo CSGO será iniciado para se conectar ao servidor para inspeção. É proibido usar a função para outros fins que não inspecionar antes de comprar itens. Um tempo de inspeção de 10 minutos por dia é fornecido durante o teste beta. ",
    cms_inspect_success_title: "inspecionar no servidor",
    complete: "Concluir",
    confirm: "Confirmar",
    confirm_and_opened: "Aberto",
    confirm_clear: "Limpar",
    confirm_leave: "Sair",
    confirm_to_cancel_the_transaction: "Confirmar",
    confirmation_of_payment: "Confirmar",
    "congratulations_to_you!_welcome_to": "Boas-vindas ao BUFF, você pode começar a negociar agora!",
    consignment_goods_shelf_will_be: "Os itens em consignação serão devolvidos à sua mochila do BUFF após serem removidos.",
    content_length_can_not_be: "O comprimento do conteúdo não pode ser maior que 1.024 caracteres",
    continue_selling: "Continuar",
    continue_to_pay: "Continuar pagando",
    counteroffer_price_cannot_be_lower: "O preço de barganha deve ser superior ao preço mínimo de oferta",
    counteroffer_request_has_been_sent: "Solicitação de Barganha enviada",
    coupon_dispense_sources_both: "Você pode ter acesso a esse benefício atualizando para Plus ou resgatando cupons com pontos no aplicativo",
    coupon_dispense_sources_points: "Você pode ter acesso a esse benefício resgatando cupons com pontos no aplicativo",
    coupon_dispense_sources_vip: "Você pode obter acesso a esse benefício atualizando para o Plus",
    create_a_package_of_trading: "Sucesso",
    create_buying_success: "Sucesso",
    csgo_deposit_notice: 'Devido a mudanças nas regras de negociação do CS:GO/DOTA2, os itens estarão disponíveis para negociação novamente após 7 dias.<a href="/help#csgo_trade_cooldown" target="_blank">CS:GO/DOTA2交易机制改动</a>',
    currently_does_not_support_the: "O número do cartão não é suportado atualmente. Mude o cartão.",
    currently_does_not_support_the_and_change: "Selecione a conta bancária manualmente",
    currently_have_to_wait_for: "Ainda há um feedback aguardando resposta. Se você ainda precisar de feedback, vá para suplementar.",
    day: "Dia",
    days: "dias",
    delete_confirmation: "Confirmação",
    delete_failed: "Falha",
    delivery_prompt: "Notificação",
    delivery_timeout: "Tempo limite de entrega",
    deposit_backpack: "Depositar",
    deposit_failed: "Falha",
    deposit_instructions_confirm: "Depositar",
    deposit_instructions_message: "tem uma situação de empilhamento, então será tratado como um item apenas quando for depositado na mochila do BUFF. Defina a quantidade para 1 ao depositar.",
    deposit_instructions_title: "Instruções de depósito",
    description: "Descrição",
    detect_fail_try_later: "Falha na detecção, tente novamente mais tarde",
    detected_you_are_using_steam: "Você acabou de fazer login com o Steam. Para proteger a segurança de sua conta, precisamos verificar seu número de celular.",
    detection_failed_please_try_again: "Falha na detecção, tente novamente mais tarde",
    detects_network_anomalies_please_try: "Erro de conexão, tente de novo mais tarde",
    detects_that_you_are_also: "Você ainda não vinculou o Steam, vincule primeiro.",
    determine_the_selected_accessories_to: "Tem certeza que deseja retirar os itens selecionados da lista?",
    determine_use_store_name_coupon: "Esta renomeação precisa consumir 1 cupom de renomeação de loja. Tem certeza que quer alterá-lo?",
    determined_to_be_removed_from: "Tem certeza de que deseja cancelar sua coleção?",
    disable_antiscam: "O sistema não irá mais ajudá-lo a interceptar ofertas falsas, fique atento e esteja ciente dos golpes de sequestro de conta.",
    disable_sms_notification_alert: "Você não receberá mais alertas de SMS após desativar este recurso. Fique de olho nas notificações do aplicativos para processar seus pedidos a tempo.",
    do_not_exceed_24_characters: "Não exceda 24 caracteres",
    download: "Baixar",
    edit_description: "Editar descrição",
    edit_notes: "Editar Notas",
    edit_the_description: "Editar descrição",
    ejzb_auth_title: "Este pagamento requer autorização",
    enter_the_verification_code: "Insira o código",
    error_code: "Código de erro:",
    error_picture: "Falha no envio. Envie a imagem no formato jpeg ou png.",
    expired_coupon_switch: "O cupom expirou e será anulado se for substituído ou cancelado.",
    failure_to_modify: "Falha",
    feedback_success: "Sucesso",
    for_the_protection_of_your: "Para proteger a segurança da sua conta, precisamos verificar a conta do Steam vinculada a esta conta.",
    fraud_notice: "Cuidado com golpes, verifique se a chave de API foi criada? Se foi criado malícia, exclua e altere a senha do Steam imediatamente.",
    get_code: "Obter código",
    get_in: "Adquirindo",
    get_steam_trading_link: "Obter url de negociação",
    get_the_package_deal_failed: "Falha",
    get_the_verification_code: "Obter código",
    gift_card_buy_success: "Sucesso! Compartilhe o código de resgate do vale-presente com o destinatário. Você também pode verificá-lo em Meu Cupom.\nApelido do destinatário: {{nickname}}\nCódigo de resgate: {{sn}}",
    gift_card_query_title: "Aviso",
    gift_card_receiver_info: "Apelido e avatar do BUFF",
    gift_card_receiver_nickname_error: "O apelido do BUFF não existe",
    go_to_bind: "Vincular",
    go_to_bind_card: "Vincular",
    go_to_check: "Conferir",
    go_to_market: "Ver mercado",
    go_to_set: "Configurar",
    go_to_settings: "Configurar",
    go_to_verify: "Verificar",
    go_to_view: "Visualizar",
    greater_than_the_extraction_amount: "Excedido",
    has_been_sent: "Foi enviado",
    has_been_used: "Usado",
    have_not_modify_store_name: "Você não modificou o nome da loja",
    hour: "hora",
    hours: "horas",
    i_first_look_at_the: "Dar uma olhada",
    i_know: "Eu sei",
    i_think_again: "Pense novamente",
    id_card_number_errors_please: "O número de identificação está errado, digite novamente",
    id_number_can_not_be: "O número da ID não pode estar vazio",
    in_order_to_your_funds: "Para a segurança da sua conta, preencha as seguintes informações",
    input_content_too_long_to_40_words: "A entrada é muito longa, use menos de 40 palavras",
    inspecting: "Inspecionando, tente novamente mais tarde",
    instrongmy_counterofferstrongattention_counteroffer_status_the: 'Após o vendedor aceitar a barganha e enviar a oferta, você precisa acessar o <strong>Histórico de Compras</strong> para aceitar a oferta, ou <strong class="c_Yellow">2%</strong> do valor da barganha será deduzido ao vendedor como compensação.',
    is_being_processed_you_can: "Sendo processado, você pode verificar o progresso mais recente nos registros de saque.",
    is_being_uploaded: "Carregando...",
    it_detects_your_steam_account: "Sua conta do Steam parece boa para negociar.",
    it_is_determined_to_cancel: "Tem certeza que deseja cancelar a entrega?",
    items_on_the_shelves_successful: "Sucesso",
    jewelry: "Item",
    less_than: "não menos que",
    listing_instructions_confirm: "Continuar a listar",
    listing_instructions_message: "tem uma situação de empilhamento, você só pode listar um deles. Você só pode continuar listando as outras peças depois de concluir a transação ou removê-la da lista de vendas.",
    listing_instructions_title: "Listando instruções",
    login: "Login",
    login_register: "Login/Registrar",
    login_with_password: "Entrar com senha",
    login_with_sms: "Login com SMS",
    manual_cert_finish: "Sucesso",
    manual_cert_processing: "Sob Revisão",
    manual_cert_upload_pic: "Faça o upload de uma captura de tela da página de nome real da sua conta do Alipay e cartão de identificação",
    member: " itens",
    minimum_price_can_not_be: "O preço mínimo não pode ser maior que o preço máximo",
    minute: " minuto ",
    minutes: " minutos ",
    modify_the_price: "Mudar o preço",
    modify_the_success: "Sucesso",
    must_allow_epay_or_alipay: "Você deve aceitar um entre Alipay ou pagamento WeChat",
    need_to_first_agree_to: "Concorde com o acordo de pagamento primeiro",
    network_error: "Erro de conexão, tente de novo mais tarde",
    network_request_failed: "A solicitação de rede falhou",
    next_page: "Próxima página",
    nickname_modify_too_frequently_notice: "Alterações muito frequentes, altere após {{time}}",
    no_available_items: "Nenhum item disponível",
    no_coupon_to_use: "Sem cupons",
    no_field_for_more_patch: "Nenhum campo para mais emblemas",
    no_field_for_more_sticker: "Sem espaço em branco para mais adesivos",
    no_longer_prompt: "Não me lembrar novamente",
    no_meet_the_requirements_of: "Nenhum item atende ao requisito",
    no_related: "Nenhum item relacionado",
    not_found_to_contain_the: "O resultado da busca está vazio",
    not_my_phone_number_please: "Não é o meu número de telefone?",
    not_support_credit_card: "Cartão de crédito não é suportado",
    not_use_coupon: "Não use",
    notes: "Notas",
    notes_desc: "Notas (Particular):",
    notes_exceed_max_len: "Adicione não mais que 40 caracteres. Esta não é a descrição do item e só pode ser vista por você.",
    number: "Número:",
    of_buying_ityuan: "comprar？￥",
    off_the_shelves_results: "Resultado",
    ok: "OK",
    on_frame_failure: "Falha",
    out_collection: "Cancelar coleção",
    package_deal: "Negociação de pacotes",
    packaged_transaction_within_the_test: "Esta função não está disponível.",
    page_size: "Número por página",
    page_temporarily_does_not_support: "A página da web não oferece suporte para compra em massa. Acesse o aplicativo BUFF.",
    paid_success: "Pago",
    pattern_template: "Paint Seed",
    pay_failed: "Falha no pagamento",
    payment: "Pagando",
    payment_system_is_busy_please: "O sistema de pagamento está ocupado, verifique o resultado do pagamento no Histórico de Compras.",
    piece_of_goods: "itens",
    piece_of_goods_please_go: "itens, verifique no Histórico de Compras",
    platform_name: "Mercado de Skins do BUFF163",
    please_agree: "Verifique os acordos primeiro.",
    please_agree_to_the_service: "Concorde primeiro com o contrato de serviço.",
    please_be_patient: "aguarde pacientemente",
    please_choose_coupon: "Cupom",
    please_choose_to_be_a: "Escolha itens",
    please_choose_to_be_on: "Escolha itens",
    please_do_the_safety_confirmation: "Confirme a segurança e digite",
    please_enter: "Insira ",
    please_enter_image_verification_code: "Insira o código de verificação da imagem",
    please_enter_or_select_the: "Insira ou selecione um valor de recarga\\n",
    please_enter_pricing: "Insira o preço",
    please_enter_the_account_password: "Inserir senha",
    please_enter_the_auto_logoff: "Insira o tempo offline automático",
    please_enter_the_correct_invite: "Insira o código de convite correto",
    please_enter_the_netease_mobile: "Insira o número de celular",
    please_enter_the_question_content: "Insira o conteúdo do feedback",
    please_enter_the_redemption_code: "Insira o código",
    please_enter_the_registered_phone: "Insira o telefone celular",
    please_enter_the_sms_verification: "Inserir código",
    please_enter_the_verification_code: "Inserir código",
    please_enter_your_steam_trade: "Insira a URL de negociação",
    please_exchange_store_name_coupon_at_app: "Troque o cupom de troca de nome de loja no aplicativo BUFF",
    please_fill_out_the_trading: "Preencha a URL de negociação",
    please_get_a_sms_verification: "Obtenha o código primeiro",
    please_get_a_verification_code: "Obtenha o código primeiro",
    please_go_to_buff_the: "Envie a proposta no aplicativo BUFF",
    please_go_to_my_sell: "Entregue em Minha Venda",
    please_in_the_backpack_view: "Confira a sua mochila.",
    please_input_01000_between_the: "Insira uma semente de tinta entre 0-1000",
    please_input_store_name: "Insira um nome para a loja",
    please_input_the_correct_mailbox: "Insira seu e-mail válido",
    please_modify_the_nickname: "Mude seu apelido",
    please_select_deposit_item: "Escolha itens",
    please_select_from_the_available: "Selecione um cupom disponível",
    please_select_item: "Escolha itens",
    "please_select_recharge_way\\n": "Selecione o método de recarga\\n",
    please_select_the_bank_account: "Selecione a conta bancária",
    "please_select_the_card\\n": "Selecione a conta bancária\\n",
    please_select_the_you_want: "Escolha itens",
    please_select_to_ship_the: "Escolha itens",
    please_tick_the_below_statement: "Marque a afirmação abaixo",
    please_upload_manual_cert: "carregue a imagem",
    please_upload_picture: "Carregue uma imagem",
    please_wait: "Espere...",
    please_wait_for_seller_to: "Aguarde o vendedor enviar a proposta e aceite-a",
    please_wait_for_the_seller: "Aguarde o vendedor enviar a oferta. Depois disso, você precisa aceitar a oferta",
    please_wait_patiently_have_been: "Seja paciente",
    pluar_s: "s",
    pmost_can_only_be_bound: "Só pode ser vinculado no máximo",
    premium_buy_fail: "Falha na compra, tente novamente mais tarde",
    premium_buy_success: "Compra Premium com Sucesso",
    premium_confirm_leave: "Sair",
    premium_continue_to_pay: "Continuar pagando",
    premium_expired_content: "Sua membresia expirou em {{date}}. Para atualizar seus benefícios, você pode renovar sua assinatura.",
    premium_expired_renew_now: "Renovar agora",
    premium_havent_successfully_paid: "você ainda não pagou com sucesso, pague o mais rápido possível.",
    premium_waiting_for_payment: "aguarde o pagamento",
    premium_will_expire_content: "Sua membresia está prestes a expirar em {{date}}. Você perderá seus benefícios de associação, como Identificador Exclusivo, Inspecionar no Servidor e Limite Extra de Listagem.",
    press_and_hold_the_slider: "Mantenha pressionado o controle deslizante e arraste para completar o quebra-cabeça acima",
    prev_page: "Página anterior",
    preview_screenshots: "Capturas de Tela",
    price_must_be_greater_than: "O preço deve ser superior a: ",
    private_transaction_within_the_test: "Esta função não está disponível.",
    private_transactions: "negociação particular",
    prompt: "Dica",
    purchase: "Comprando",
    purchase_failed: "Falha",
    purchase_failure_reason_as_follows: "falhou, razões:",
    purchase_price_not_greater_than: "O preço de compra não pode ser superior a ",
    purchased: "Comprado",
    quantity: "Quantidade:",
    ranking_total_ranking: "Rank total",
    re_authorisation: "reinicie",
    reacquire_the_print_data: "Readquirir dados de adesivo",
    receive_sms_verification_code: "Código SMS recebido.",
    recharge_failed: "Falha",
    recharge_successful: "Sucesso",
    recharge_with_cash_only_support: "Recarga e saque apenas com cartão de débito",
    recharge_yuan: "Reabastecer ￥",
    recommended_use_of_the_netease: 'Recomenda-se usar o acelerador NetEase UU.<a href="/help#steam_network">查看更多解决方案</a>',
    reconfirm: "Reconfirmar",
    refresh: "Atualizar",
    refresh_in_the: "Atualizar...",
    refreshing: "Atualizar",
    register_a_new_account: "registrar nova conta",
    registration: "Registrar",
    remain_withdrawal_count_today: "Número de saque restantes hoje:",
    reminder: "Lembrete",
    replicated: "Copiado",
    reply_success: "Sucesso",
    request: "Criando",
    request_in_queue: "O sistema está ocupado. Tente mais tarde!",
    require_minimal_packaging_of_two: "É necessário empacotar pelo menos 2 itens",
    resend: "Reenviar",
    retrieval_failure: "Falhar o enviar",
    retrieve_the_process_description: "Recuperar introdução do processo",
    reupload: "Reenviar",
    sale_amount: "Quantidade de vendas",
    sale_amount_yuan: "Valor de venda: ",
    sale_number_: "Número de venda: ",
    save: "Salvar",
    scratch_sticker_notice: "Você precisa garantir que a informação do adesivo é consistente com o inventário após listá-lo no mercado. Raspar os adesivos antes da entrega levará a sua conta ser banida.",
    search_result: "Resultado",
    seconds: " segundos",
    select_to_change_the_price: "Escolha itens",
    select_to_retrieve_the_goods: "Escolha itens",
    select_up_to_200_pieces: "Escolha até 200 itens",
    selling_num: "{{num}} à venda",
    send_a_verification_code_failed: "Falha ao enviar o código de verificação",
    sent_successfully_please_note_the: "Enviada com sucesso",
    set_success: "Sucesso",
    set_the_boot: "Guia",
    set_to_fail: "Falha",
    set_up_steam_trade_url: "Definir URL de Troca do Steam",
    set_up_trading_links: "Definir URL de negociação",
    settings_failed_please_try_again: "Falha",
    shelve_failed: "Falha",
    shelve_notice: "Entregue dentro de 12 horas após o pagamento do comprador, caso contrário, o item será removido da lista e sua função de venda será bloqueada.",
    shelve_success: "Sucesso",
    shelves_successful: "Sucesso",
    since_the_csgo_official_trading: 'Devido a mudanças nas regras comerciais oficiais do CS:GO, os itens não serão recuperados em até 7 dias após o depósito. <a href="/help#csgo_trade_cooldown" target="_blank">CS:GO交易机制改动</a>',
    skip_maybe_next_time: "Pular",
    slogan: "Suporte para jogos como CS:GO, DOTA2, etc.",
    sold_number_of_pieces: "Número de venda",
    some_etc: "{{count}} itens",
    split_pay_cancel_order_content: "Cancelar a compra? Não pague novamente após o cancelamento.",
    split_pay_cancel_order_title: "Cancelar compra",
    split_pay_confirm_leave: "Cancelar compra",
    split_pay_continue_to_pay: "Agora não",
    split_pay_max_amount_invalidate: "Não superior a {{amount}}",
    split_pay_min_amount_invalidate: "Não menos que {{amount}}",
    steam_trade_limit: "Sua conta do Steam não pode negociar no momento. Verifique a ajuda do Steam.",
    sticker_copy: "Copiar",
    sticker_search_entry: "Aplicado",
    weapon_case_entry: "Caixa de arma",
    in_collection: "Coleção",
    item_contained: "Itens Contidos",
    an_rare_special_item: "Um item extremamente raro e especial",
    submitted: "Enviado",
    successful_supply: "Sucesso",
    successful_upload: "Sucesso",
    successfully_submitted: "Sucesso",
    supply_failure: "Falha",
    supply_max_limit: "Forneça até 50 itens ao mesmo tempo",
    supply_success: "Sucesso",
    sure_you_want_to_delete: "Tem certeza que deseja excluir este cartão??",
    system_busy_error: "O sistema está ocupado. Tente mais tarde!",
    termination_buying: "Cancelar compra",
    the_account_can_be_withdrawal: "Não é possível sacar, saldo insuficiente no Saldo do BUFF - Outro",
    the_amount_of_recharge_need: "O valor precisa ser um número",
    the_authentication_is_successful: "Sucesso",
    the_bank_card_number_can: "O número da conta bancária não pode estar vazio",
    the_bank_card_number_errors: "O número do cartão bancário está errado, digite novamente",
    the_binding_is_successful: "Sucesso",
    the_content_of_the_input: "A entrada é muito longa, use menos de 40 palavras",
    the_current_balance_of_dollar: ", saldo atual ￥",
    the_current_page_is_no: "Sem itens",
    the_degree_of_wear_get: "Adquirindo...",
    the_goods_can_not_a: "O item não pode ser precificado automaticamente, digite",
    the_goods_is_not_buying: "Este item não está disponível para compra.",
    the_lack_of_balance: "Saldo insuficiente",
    the_maximum_allowable_amount_of: "O valor máximo de recarga permitido é",
    the_minimum_allowable_amount_of: "O valor mínimo de recarga permitido é",
    the_modified_price_of_success: "Sucesso",
    the_payment_is_successful: "Sucesso",
    the_phone_number_cannot_be: "O número de telefone não pode estar vazio",
    the_phone_number_has_been: "O número de telefone foi alterado?",
    the_phone_number_is_incorrect: "O número de telefone está errado, digite novamente",
    the_phone_receives_the_verification: "Código de verificação recebido",
    the_picture_is_being_resolved: "Inspecionando, clique para ver mais tarde",
    the_price_can_not_be: "O preço não pode ser superior a: ",
    the_purchase_amount_can_not: "Não é possível exceder o número de itens que atendem às condições.",
    the_quote_failed_to_send: "Falha: ",
    the_real_name_can_not: "O nome real não pode estar vazio",
    the_recommended_bit_is_already: "A posição recomendada está cheia",
    the_set_of_recommended_items: "Recomendar",
    the_shelves: "Tirar da lista",
    the_shelves_after_the_goods: "Tem certeza que deseja retirar os itens selecionados da lista?",
    the_system_is_busy: "Sistema ocupado",
    the_system_is_busy_please: "O sistema está ocupado, verifique no histórico de compras",
    the_system_is_busy_you: "O sistema está ocupado, você pode verificar o último andamento da recarga no registro de recarga.",
    the_system_is_busyplease_try: "O sistema está ocupado. Tente mais tarde!",
    the_system_supports_the_maximum: "O sistema suporta um máximo de 64 caracteres.",
    the_validation_is_successful: "Sucesso",
    the_verification_code_is_incorrect: "Código de verificação incorreto",
    there_goods_is_not_input: "Existem itens sem preço",
    tied_the_card_fails_please: "Falhou. Confirme se as informações inseridas estão corretas.",
    timeout: "Tempo esgotado",
    to_bind: "Vincular",
    to_check: "Conferir",
    to_guarantee_your_safety_of: "Digite seu número de celular",
    to_obtain_the_dynamic_code: "Falha",
    to_receive_the_success: "Sucesso",
    to_shipping: "Entregar",
    to_steam: "Conectar Steam",
    to_view_figure: "Captura de tela",
    trade_url_setting_successful: "Sucesso",
    trading_link_format_error: "Erro no formado da URL de Troca",
    unbound_steam: "Conecte a sua conta do Steam primeiro",
    unbound_steam_notice: "Você ainda não vinculou o Steam, vincule primeiro.",
    unbound_steam_trading_link_whether: "URL de comércio do Steam não vinculado, defina primeiro?",
    undelivered_notice: "Como você não conseguiu entregá-lo da última vez, não poderá vender dentro de {{hours}} horas e {{minutes}} minutos.",
    unpaid_amount: "Valor não pago",
    unset_price_item: "Existem itens sem preço",
    unuse_coupon_state: "Não usado",
    up_to_200_items: "Escolha até 200 itens",
    "upload_success!_your_players_show": "Carregado! A exibição de skins está em análise",
    urs_password_login_need_verify: "Para proteger a segurança da conta, precisamos verificar sua conta de celular.",
    used_coupon_state: "Usado",
    user_asset_admin_frozen_notification: "Alguns saldos foram congelados devido à operação anormal da conta, envie feedback.",
    user_login: "Login/Registrar",
    user_registration: "Registrar",
    valuation: "Avaliação:",
    verification_code_cannot_be_empty: "Código vazio",
    verify: "Verificar",
    verify_now_btn_text: "Verificar agora",
    verify_tips: "Aviso",
    verify_tips_text: "Atualizamos nossas carteiras para ajudar a melhorar a segurança de seus ativos, conclua a verificação antes de sacar.",
    view_a_player_show_please: "Faça o login primeiro",
    view_history_please_login: "Faça o login primeiro",
    view_more: "Ver mais",
    view_more_long_time_exchange: "Para troca",
    view_more_long_time_of: "Para ver a tendência de preço à longo prazo, troque o Observador.",
    view_more_long_time_of_for_premium: "Você pode se inscrever no BUFF Plus para ver a tendência de preços por 6 meses.",
    view_my_steam_inventory: "Exibir meu inventário do Steam",
    view_price_trends_please_login: "Faça o login primeiro",
    view_top_bookmarked_please_login: "Faça o login primeiro",
    view_wear_ranking_please_log: "Faça o login primeiro",
    waiting_for_payment: "aguarde o pagamento",
    whether_the_problem_has_been: "Problema resolvido?",
    whether_to_terminate_the_purchase: "Se deve terminar o progresso atual como {{progress}}?\n{{refund_desc}}",
    will_be_returned_to_origin: "{{money}} retornará sua conta do WeChat em 30 minutos",
    will_be_returned_to_you_buff_b: "{{money}} será devolvido ao seu saldo do BUFF",
    withdraw_cash_price_of_dollar: "Sacar￥",
    withdraw_the_maximum_amount_of: "O valor máximo de saque é",
    withdraw_verify_tips: "Verificação de Saque",
    withdraw_verify_tips_text: "Este cartão bancário não concluiu a verificação, conclua a verificação antes de sacar.",
    withdrawal_failure: "Falha",
    withdrawal_has_been_filed: "Aplicou para retirada",
    withdrawal_minimum_amount_is: "O valor mínimo para saque é",
    years: "Ano",
    you_can_recharge_in_a: "Você pode verificar o progresso mais recente no registro de recarga.",
    you_have_new_orders_need: "Você tem um novo pedido para entregar.",
    you_have_yet_to_bind: "Você ainda não vinculou um URL de Troca do Steam. Faça isso.",
    you_havent_successfully_paid_the: "Você não pagou, o pedido pode ser pago em 3 minutos, pague o mais rápido possível.",
    you_must_be_over_18: "Você deve ter pelo menos 18 anos para usar nosso serviço.",
    your_buying_price_is_higher: "O preço do seu pedido de compra é maior que o do preço de mercado. Continuar?",
    your_current_steam_account_cant: "Sua conta atual do Steam não pode ser trocada. Verifique nossa documentação de ajuda.",
    your_mobile_phone_account_occurs: "Sua conta de celular foi alterada. Para proteger a segurança da conta, precisamos verificar sua conta de celular.",
    your_phone_account_through_a: "Sua conta móvel foi alterada e precisamos verificar sua conta do Steam vinculada.",
    your_steam_account_halt: "Detectado que sua conta do Steam está em retenção de negociação",
    your_steam_account_tradable: "Sua conta do Steam parece boa para negociar.",
    your_steam_acctoun_trade_limit: "Sua conta do Steam está incapacitada de negociar",
    your_steam_trade_url_invalid: "Sua URL de negociação expirou, obtenha-a no Steam",
    yuan: "yuan",
    refresh_success: "Sucesso",
    cs2_inspect_input_share_link: "paste item sharing link here",
    cs2_inspect_success: "Inspecionando, clique para ver mais tarde",
    cs2_inspect_finish: "Gerado, clique para visualizar",
    cs2_inspect_delete: "Excluído",
    copy_to_clipboard_success: "Link de captura de tela copiado com sucesso para a área de transferência"
});
i18nData.updateData("ru", {
    "1_seconds": "1 секунда",
    _piece_of_goods_has: "предмет не удалось, поскольку он уже куплен",
    _piece_of_goods_off: "предметы без ошибок",
    a_period_of_time_: "период времени: ",
    a_picture_is_not_uploaded: "Некоторые изображения загрузить не удалось",
    a_successful_purchase: "Успешно",
    access_to_the_steam_encounters: "Проблема со Steam?",
    account_can_be_withdraw_the: "Вывод невозможен, недостаточный баланс BUFF-Прочие",
    acknowledgment_is_bound_to_the: "Вы уверены, что хотите привязать эту учетную запись Steam?\nИмя пользователя Steam:",
    acquisition_fee_failed_please_try: "Не удалось получить комиссию, повторите попытку позже",
    add_a_bank_card: "Добавить банковскую карту",
    add_a_description: "Добавить описание",
    add_description: "Добавить описание",
    add_in_5_minutes_to: "Отправьте предложение в приложение BUFF в течение 5 минут.",
    add_in_the_buyers_payment: "Отправьте в течение 12 часов после оплаты покупателем, иначе предмет будет снят с продажи, а ваша функция продаж будет отключена.",
    add_notes: "Добавить примечания",
    add_the_other_card: "Добавьте другую банковскую карту",
    all: "Все",
    already_have_an_account_click: "Щелкните для входа",
    analysis: "Проверяется",
    analysis_figure: "Скриншот",
    api_key_format_error: "Неверный формат ключа API",
    api_key_successfully_set: "Успешно",
    application_authentication_failure_please_contact: "Проверка не удалась, обратитесь в службу поддержки",
    artificial_assist: "Обратиться в службу поддержки",
    auth_entry_bankcard_text: "Вывод на банковскую карту на то же имя",
    auth_entry_bankcard_title: "Подтверждение настоящего имени",
    auth_entry_manual_text: "Вывод не поддерживается и время, необходимое",
    auth_entry_manual_title: "Подтверждение вручную",
    auth_entry_zhima_text: "Вывод на банковскую карту на то же имя",
    auth_entry_zhima_title: "Подтвердить с помощью Alipay",
    auth_success: "Успешно",
    authentication: "Подтверждение",
    back_for_refresh: "Назад чтобы обновить",
    backpack_capacity_is_insufficient_can: "Недостаточно места в рюкзаке для покупки",
    balance_authorization: "Подтверждение баланса",
    balance_authorization_expired: "Срок подтверждения баланса истек, ",
    balances_detail: "Детали",
    bargain_price_must_be_lower: "Ставка должна быть ниже цены продажи",
    being_prepaid_in: "Пополнение",
    beware_of_phishing_scams_please: "Остерегайтесь мошенников, проверьте, создан ли у вас ключ API. Если он был создан злоумышленниками, а не вами, удалите его и немедленно измените пароль Steam.",
    binding_acknowledgment: "Подтвердить",
    binding_steam: "Подключите аккаунт Steam",
    binding_steam_before_you_can: "Для использования BUFF подключите свой аккаунт Steam.",
    binding_transaction_link_the_immediate: "Задайте торговый URL Steam, чтобы начать торговлю в BUFF",
    bound_to_fail: "Не удалось выполнить",
    buff_backpack_capacity_is_insufficient: "Недостаточно места в рюкзаке. Подогнано под максимальное количество, которое вы можете купить",
    buy_order_min_price: "Не менее {{min_price}}",
    buy_order_wx_pay_unfrozen: "Если ваш заказ на покупку не будет выполнен в течение 30 дней, он будет отменен, и оплаченная сумма будет возвращена на ваш счет WeChat.",
    buy_price_cannot_be_less: "Цена покупки не может быть ниже ￥0,01",
    buy_pubgrecycled_transactionitems_not_get: "Предметы PUBG нельзя вывести",
    buy_success: "Успешно",
    buying_in_bulk_quantity_can: "Число предметов оптовой покупки не может превышать",
    buying_in_bulk_results: "Результат",
    buying_num: "{{num}} запрос",
    can_not_supply_your_own: "Передать купленные вами предметы невозможно",
    cancel: "Отменить",
    cancel_buying_success: "Успешно",
    cancel_delivery_success: "Успешно",
    cancel_recommend: "Отменить рекомендацию",
    cancel_the_shipment: "Отменить отправку",
    cannot_be_resolved_the_goods: "Проверка невозможна, предмет продан или ошибка сети",
    cannot_purchase_your_own_items: "Нельзя купить собственный предмет",
    card_limit_is_reached: "Банковская карта достигла верхнего предела",
    cardsp: "банковские карты",
    cash_detail_alipay: "Оплачено через Alipay",
    cash_detail_alipay_small: "(Можно использовать для покупки предметов или вывода средств на банковские карты)",
    cash_detail_epay: "Оплата через WeChat",
    cash_detail_epay_small: "(Можно использовать для покупки предметов или вывода средств на банковские карты)",
    century: "Век",
    change_price_of_failure: "Не удалось выполнить",
    check_sticker_wear_in_detail: "В нижней части страницы предмета можно проверить, не поцарапаны ли наклейки. Убедитесь перед покупкой",
    clear_the_api_key_after: "После очистки ключа API ваш магазин будет отключен, и товары нельзя будет купить. Вы уверены, что хотите очистить?",
    click_on_upload_picture: "Нажмите для загрузки изображения",
    click_to_collapse: "Свернуть",
    click_to_expand: "Развернуть",
    close_failed_please_try_again: "Не удалось закрыть, попробуйте снова",
    cms_inspect_success_message: "Клиент игры CSGO будет запущен для соединения с сервером для проверки. Функция запрещена к использованию с целями, отличными от проверки предметов перед покупкой. Во время бета-тестирования на проверки предоставляется 10 минут. ",
    cms_inspect_success_title: "проверка на сервере",
    complete: "Завершить",
    confirm: "Подтвердить",
    confirm_and_opened: "Открыть",
    confirm_clear: "Очистить",
    confirm_leave: "Выйти",
    confirm_to_cancel_the_transaction: "Подтвердить",
    confirmation_of_payment: "Подтвердить",
    "congratulations_to_you!_welcome_to": "Добро пожаловать в BUFF, можете начать торговать!",
    consignment_goods_shelf_will_be: "После удаления предметы для комиссионной продажи будут возвращены в рюкзак BUFF.",
    content_length_can_not_be: "Длина содержания не может превышать 1024 символов",
    continue_selling: "Продолжить",
    continue_to_pay: "Продолжить платеж",
    counteroffer_price_cannot_be_lower: "Ставка должна быть выше минимальной цены",
    counteroffer_request_has_been_sent: "Отправлена заявка на ставку",
    coupon_dispense_sources_both: "Вы можете получить доступ к этой привилегии, повысив статус до Plus или получив купоны с очками в приложении",
    coupon_dispense_sources_points: "Вы можете получить доступ к этой привилегии, получив купоны с баллами в приложении",
    coupon_dispense_sources_vip: "Вы можете получить доступ к привилегиям, улучшив аккаунт до Plus",
    create_a_package_of_trading: "Успешно",
    create_buying_success: "Успешно",
    csgo_deposit_notice: 'Из-за изменений в правилах торговли в CS:GO/DOTA2, предметы будут доступны для продажи через 7 дней.<a href="/help#csgo_trade_cooldown" target="_blank">CS:GO/DOTA2交易机制改动</a>',
    currently_does_not_support_the: "Такой номер карты в настоящее время не поддерживается. Измените карту.",
    currently_does_not_support_the_and_change: "Выберите банк вручную",
    currently_have_to_wait_for: "Отзыв все еще ожидает вашего ответа. Если все еще нужно отправить отзыв, перейдите в дополнительный раздел.",
    day: "День",
    days: "дней",
    delete_confirmation: "Подтверждение",
    delete_failed: "Не удалось выполнить",
    delivery_prompt: "Уведомление",
    delivery_timeout: "Срок отправки истек",
    deposit_backpack: "Внести",
    deposit_failed: "Не удалось выполнить",
    deposit_instructions_confirm: "Внести",
    deposit_instructions_message: "ситуация суммирования. Будет считаться одним предметом только при внесении в рюкзак BUFF. При внесении укажите количество как 1.",
    deposit_instructions_title: "Инструкции по внесению",
    description: "Описание",
    detect_fail_try_later: "Определение не удалось, попробуйте позже",
    detected_you_are_using_steam: "Вы должны зайти через Steam Чтобы защитить аккаунт, нам нужно проверить номер телефона.",
    detection_failed_please_try_again: "Определение не удалось, попробуйте позже",
    detects_network_anomalies_please_try: "Ошибка сети, попробуйте позже.",
    detects_that_you_are_also: "Вы еще не привязали Steam, сначала привяжите.",
    determine_the_selected_accessories_to: "Вы уверены, что хотите исключить эти предметы из списка?",
    determine_use_store_name_coupon: "Для переименования требуется израсходовать 1 купон на переименование магазина, вы уверены, что хотите этого?",
    determined_to_be_removed_from: "Вы уверены, что хотите отменить свой набор?",
    disable_antiscam: "Система более не будет перехватывать ложные предложения, будьте бдительны и помните о мошенниках.",
    disable_sms_notification_alert: "После отключения этой функции вы больше не будете получать СМС-уведомления о заказах. Чтобы оперативно обрабатывать заказы, следите за пуш-уведомлениями приложения.",
    do_not_exceed_24_characters: "Не более 24 символов",
    download: "Загрузить",
    edit_description: "Изменить описание",
    edit_notes: "Редактировать примечания",
    edit_the_description: "Изменить описание",
    ejzb_auth_title: "Данный платеж требует подтверждения личности",
    enter_the_verification_code: "Введите код",
    error_code: "Код ошибки:",
    error_picture: "Ошибка, загружайте изображения в формате jpeg или png",
    expired_coupon_switch: "Срок действия купона истек, и он будет аннулирован в случае замены или отмены.",
    failure_to_modify: "Не удалось выполнить",
    feedback_success: "Успешно",
    for_the_protection_of_your: "Для защиты вашего аккаунта нам требуется проверить аккаунт Steam, привязанный к этому аккаунту.",
    fraud_notice: "Остерегайтесь мошенников, проверьте, создан ли у вас ключ API. Если он был создан злоумышленниками, а не вами, удалите его и немедленно измените пароль Steam.",
    get_code: "Получить код",
    get_in: "Получение",
    get_steam_trading_link: "Получить торговый URL",
    get_the_package_deal_failed: "Не удалось выполнить",
    get_the_verification_code: "Получить код",
    gift_card_buy_success: "Успешно! Сообщите получателю код погашения подарочной карты. Также его можно проверить в «Моих купонах».\nИмя пользователя получателя: {{nickname}}\nКод погашения: {{sn}}",
    gift_card_query_title: "Уведомление",
    gift_card_receiver_info: "Аватар и имя пользователя BUFF",
    gift_card_receiver_nickname_error: "Такое имя пользователя BUFF не существует",
    go_to_bind: "Привязать",
    go_to_bind_card: "Привязать",
    go_to_check: "Проверить",
    go_to_market: "Обзор рынка",
    go_to_set: "Установлен",
    go_to_settings: "Установлен",
    go_to_verify: "Перейти к подтверждению",
    go_to_view: "Смотреть",
    greater_than_the_extraction_amount: "Превышено",
    has_been_sent: "Отправлено",
    has_been_used: "Использовано",
    have_not_modify_store_name: "Вы не изменили название магазина",
    hour: "час",
    hours: "часов",
    i_first_look_at_the: "Посмотрите",
    i_know: "Я знаю",
    i_think_again: "Подумайте еще раз",
    id_card_number_errors_please: "Неверный номер удостоверения личности, введите еще раз",
    id_number_can_not_be: "Поле «Номер удостоверения личности» не может быть пустым",
    in_order_to_your_funds: "Для безопасности аккаунта введите следующие данные",
    input_content_too_long_to_40_words: "Слишком длинное сообщение, должно быть не более 40 слов",
    inspecting: "Проверка, попробуйте позже",
    instrongmy_counterofferstrongattention_counteroffer_status_the: 'После принятия ставки продавцом и отправки предложения вам нужно перейти в <strong>«Историю покупок»</strong>, чтобы принять предложение, в противном случае в пользу продавца будет удержано <strong class="c_Yellow">2%</strong> от суммы ставки в качестве компенсации.',
    is_being_processed_you_can: "Обрабатывается, последние действия см. в архиве вывода средств.",
    is_being_uploaded: "Загрузка...",
    it_detects_your_steam_account: "Ваш аккаунт Steam подходит для торговли.",
    it_is_determined_to_cancel: "Вы уверены, что хотите отменить отправку?",
    items_on_the_shelves_successful: "Успешно",
    jewelry: "Предмет",
    less_than: "не менее",
    listing_instructions_confirm: "Продолжить выставление",
    listing_instructions_message: "ситуация суммирования, можно выставить только один из них. Вы можете продолжить выставлять другие части после завершения транзакции или удаления из списка на продажу.",
    listing_instructions_title: "Инструкции по выставлению",
    login: "Войти",
    login_register: "Войти/Зарегистрироваться",
    login_with_password: "Войти с паролем",
    login_with_sms: "Вход по СМС",
    manual_cert_finish: "Успешно",
    manual_cert_processing: "На рассмотрении",
    manual_cert_upload_pic: "Загрузите скриншот страницы аккаунта Alipay с вашим настоящим именем и удостоверение личности",
    member: " предметы",
    minimum_price_can_not_be: "Минимальная цена не может быть выше максимальной",
    minute: " минута ",
    minutes: " минут ",
    modify_the_price: "Изменить цену",
    modify_the_success: "Успешно",
    must_allow_epay_or_alipay: "Вы должны принять один из способов оплаты Alipay и WeChat",
    need_to_first_agree_to: "Сначала согласитесь с соглашением об оплате",
    network_error: "Ошибка сети, попробуйте позже.",
    network_request_failed: "Сетевой запрос не удался",
    next_page: "Следующая страница",
    nickname_modify_too_frequently_notice: "Слишком частая смена, изменить можно через {{time}}",
    no_available_items: "Нет доступных предметов",
    no_coupon_to_use: "Купонов нет",
    no_field_for_more_patch: "Нет больше места для нашивок",
    no_field_for_more_sticker: "Нет больше места для наклеек",
    no_longer_prompt: "Не напоминать больше",
    no_meet_the_requirements_of: "Отвечающих требованиям предметов нет",
    no_related: "Сопутствующие предметы отсутствуют",
    not_found_to_contain_the: "Результат поиска пуст",
    not_my_phone_number_please: "Не мой номер телефона?",
    not_support_credit_card: "Кредитная карта не поддерживается",
    not_use_coupon: "Не использовать",
    notes: "Примечания",
    notes_desc: "Заметки (лично):",
    notes_exceed_max_len: "Добавьте не более 40 символов. Это не описание предмета и видно только вам.",
    number: "Номер:",
    of_buying_ityuan: "покупку?￥",
    off_the_shelves_results: "Результат",
    ok: "OK",
    on_frame_failure: "Не удалось выполнить",
    out_collection: "Отменить набор",
    package_deal: "Пакетная продажа",
    packaged_transaction_within_the_test: "Эта функция недоступна.",
    page_size: "Число на странице",
    page_temporarily_does_not_support: "Страница не поддерживает оптовые покупки. Перейдите в приложение BUFF.",
    paid_success: "Оплачено",
    pattern_template: "Шаблон изображения",
    pay_failed: "Не удалось оплатить",
    payment: "Оплата",
    payment_system_is_busy_please: "Платежная система занята, проверьте результат в «Истории покупок».",
    piece_of_goods: "предметы",
    piece_of_goods_please_go: "предметы, проверьте историю покупок",
    platform_name: "Рынок скинов BUFF163",
    please_agree: "Сначала проверьте соглашение.",
    please_agree_to_the_service: "Сначала согласитесь с сервисным соглашением.",
    please_be_patient: "ожидайте",
    please_choose_coupon: "Купон",
    please_choose_to_be_a: "Выберите предметы",
    please_choose_to_be_on: "Выберите предметы",
    please_do_the_safety_confirmation: "Пройдите проверку и войдите",
    please_enter: "Введите ",
    please_enter_image_verification_code: "Введите проверочный код изображения",
    please_enter_or_select_the: "Введите или выберите сумму пополнения\\n",
    please_enter_pricing: "введите цену",
    please_enter_the_account_password: "Введите пароль",
    please_enter_the_auto_logoff: "Введите время до автоматического отключения от сети",
    please_enter_the_correct_invite: "Введите верный код приглашения",
    please_enter_the_netease_mobile: "Введите номер телефона",
    please_enter_the_question_content: "Введите текст обратной связи",
    please_enter_the_redemption_code: "Введите код",
    please_enter_the_registered_phone: "Введите номер мобильного телефона",
    please_enter_the_sms_verification: "Введите код",
    please_enter_the_verification_code: "Введите код",
    please_enter_your_steam_trade: "Введите торговый URL",
    please_exchange_store_name_coupon_at_app: "Обменяйте купон на переименование магазина в приложении BUFF",
    please_fill_out_the_trading: "Введите торговый URL",
    please_get_a_sms_verification: "Сначала получите код",
    please_get_a_verification_code: "Сначала получите код",
    please_go_to_buff_the: "Отправьте предложение в приложении BUFF",
    please_go_to_my_sell: "Отправьте в «Мои продажи»",
    please_in_the_backpack_view: "Проверьте в рюкзаке.",
    please_input_01000_between_the: "Введите шаблон изображения от 0 до 1000",
    please_input_store_name: "Введите название магазина",
    please_input_the_correct_mailbox: "введите свое действующий email",
    please_modify_the_nickname: "Смените имя пользователя",
    please_select_deposit_item: "Выберите предметы",
    please_select_from_the_available: "Выберите доступный купон",
    please_select_item: "Выберите предметы",
    "please_select_recharge_way\\n": "Выберите способ пополнения\\n",
    please_select_the_bank_account: "Выберите банковский счет",
    "please_select_the_card\\n": "Выберите банковскую карту\\n",
    please_select_the_you_want: "Выберите предметы",
    please_select_to_ship_the: "Выберите предметы",
    please_tick_the_below_statement: "Отметьте утверждение ниже",
    please_upload_manual_cert: "загрузите изображение",
    please_upload_picture: "Загрузите изображение",
    please_wait: "Подождите...",
    please_wait_for_seller_to: "Подождите, пока продавец отправит предложение и примите его.",
    please_wait_for_the_seller: "Подождите, пока продавец отправит предложение. После этого вам нужно принять предложение",
    please_wait_patiently_have_been: "Ожидайте, время ожидания",
    pluar_s: "s",
    pmost_can_only_be_bound: "Можно привязать не более",
    premium_buy_fail: "Купить не удалось, попробуйте позже",
    premium_buy_success: "Premium куплен успешно",
    premium_confirm_leave: "Выйти",
    premium_continue_to_pay: "Продолжить платеж",
    premium_expired_content: "Срок действия вашего членства истек {{date}}. Для обновления привилегий можно продлить членство.",
    premium_expired_renew_now: "Обновить сейчас",
    premium_havent_successfully_paid: "вы еще не завершили оплату, оплатите как можно скорее.",
    premium_waiting_for_payment: "ожидайте оплаты",
    premium_will_expire_content: "Срок действия вашего членства истекает {{date}}. Вы потеряете свои привилегии членства, такие как эксклюзивный идентификатор, проверка на сервере и расширенный лимит списка.",
    press_and_hold_the_slider: "Удерживая бегунок, передвигайте его, чтобы решить головоломку выше",
    prev_page: "Предыдущая страница",
    preview_screenshots: "Скриншоты",
    price_must_be_greater_than: "Цена не должна быть выше: ",
    private_transaction_within_the_test: "Эта функция недоступна.",
    private_transactions: "приватная продажа",
    prompt: "Совет",
    purchase: "Покупка",
    purchase_failed: "Не удалось выполнить",
    purchase_failure_reason_as_follows: "не удалось, причина:",
    purchase_price_not_greater_than: "Цена не может быть выше ",
    purchased: "Куплено",
    quantity: "Количество:",
    ranking_total_ranking: "Общий рейтинг",
    re_authorisation: "сбросить",
    reacquire_the_print_data: "Повторно получить данные наклейки",
    receive_sms_verification_code: "Получен СМС-код.",
    recharge_failed: "Не удалось выполнить",
    recharge_successful: "Успешно",
    recharge_with_cash_only_support: "Для пополнения и вывода средств поддерживаются только дебетовые карты",
    recharge_yuan: "Внести ￥",
    recommended_use_of_the_netease: 'Рекомендуем использовать ускоритель NetEase UU,<a href="/help#steam_network">查看更多解决方案</a>',
    reconfirm: "Подтвердить еще раз",
    refresh: "Обновить",
    refresh_in_the: "Обновить...",
    refreshing: "Обновить",
    register_a_new_account: "зарегистрировать новый аккаунт",
    registration: "Зарегистрироваться",
    remain_withdrawal_count_today: "Количество выводов, оставшихся на сегодня:",
    reminder: "Напоминание",
    replicated: "Скопировано",
    reply_success: "Успешно",
    request: "Создается",
    request_in_queue: "Система занята, попробуйте позже",
    require_minimal_packaging_of_two: "Нужно упаковать не менее двух предметов",
    resend: "Отправить повторно",
    retrieval_failure: "Не удалось вывести",
    retrieve_the_process_description: "Описание процесса восстановления",
    reupload: "Загрузить повторно",
    sale_amount: "Сумма продажи",
    sale_amount_yuan: "Сумма продажи: ",
    sale_number_: "Номер продажи: ",
    save: "Сохранить",
    scratch_sticker_notice: "После размещения на рынке убедитесь, что информация о наклейках соответствует инвентарю. Удаление наклеек перед отправкой приведет к блокировке вашего аккаунта.",
    search_result: "Результат",
    seconds: " секунд",
    select_to_change_the_price: "Выберите предметы",
    select_to_retrieve_the_goods: "Выберите предметы",
    select_up_to_200_pieces: "Выберите до 200 предметов",
    selling_num: "{{num}} в продаже",
    send_a_verification_code_failed: "Не удалось отправить проверочный код",
    sent_successfully_please_note_the: "Успешно отправлено",
    set_success: "Успешно",
    set_the_boot: "Руководство",
    set_to_fail: "Не удалось выполнить",
    set_up_steam_trade_url: "Установить торговый URL Steam",
    set_up_trading_links: "Настроить торговый URL",
    settings_failed_please_try_again: "Не удалось выполнить",
    shelve_failed: "Не удалось выполнить",
    shelve_notice: "Отправьте в течение 12 часов после оплаты покупателем, иначе предмет будет удален из списка, а ваша функция продаж будет отключена.",
    shelve_success: "Успешно",
    shelves_successful: "Успешно",
    since_the_csgo_official_trading: 'Из-за изменения правил торговли в CS:GO предметы нельзя вернуть 7 дней после внесения.<a href="/help#csgo_trade_cooldown" target="_blank">CS:GO交易机制改动</a>',
    skip_maybe_next_time: "Пропустить",
    slogan: "Поддерживаются такие игры, как CS:GO, DOTA2 и пр.",
    sold_number_of_pieces: "Номер продажи",
    some_etc: "{{count}} предметов",
    split_pay_cancel_order_content: "Отменить покупку? Не оплачивайте повторно после отмены.",
    split_pay_cancel_order_title: "Отменить покупку",
    split_pay_confirm_leave: "Отменить покупку",
    split_pay_continue_to_pay: "Не сейчас",
    split_pay_max_amount_invalidate: "Не выше {{amount}}",
    split_pay_min_amount_invalidate: "Не менее {{amount}}",
    steam_trade_limit: "В данный момент с вашего аккаунта Steam торговля невозможна. См. справку Steam.",
    sticker_copy: "Копировать",
    sticker_search_entry: "Применено",
    weapon_case_entry: "Оружейный кейс",
    in_collection: "Набор",
    item_contained: "Содержащиеся предметы",
    an_rare_special_item: "Чрезвычайно редкий особый предмет",
    submitted: "Отправлено",
    successful_supply: "Успешно",
    successful_upload: "Успешно",
    successfully_submitted: "Успешно",
    supply_failure: "Не удалось выполнить",
    supply_max_limit: "Передать до 50 предметов одновременно",
    supply_success: "Успешно",
    sure_you_want_to_delete: "Вы уверены, что хотите удалить эту карту?",
    system_busy_error: "Система занята, попробуйте позже",
    termination_buying: "Отменить покупку",
    the_account_can_be_withdrawal: "Вывод невозможен, недостаточный баланс BUFF-Прочие",
    the_amount_of_recharge_need: "Сумма должна быть числом",
    the_authentication_is_successful: "Успешно",
    the_bank_card_number_can: "Поле «Номер банковской карты» не может быть пустым",
    the_bank_card_number_errors: "Неверный номер банковской карты, введите еще раз",
    the_binding_is_successful: "Успешно",
    the_content_of_the_input: "Слишком длинное сообщение, должно быть не более 40 слов",
    the_current_balance_of_dollar: ", текущий баланс ￥",
    the_current_page_is_no: "Нет предметов",
    the_degree_of_wear_get: "Получение...",
    the_goods_can_not_a: "Цена на предмет не может быть установлена автоматически, введите ее",
    the_goods_is_not_buying: "Предмет нельзя купить.",
    the_lack_of_balance: "Недостаточно средств",
    the_maximum_allowable_amount_of: "Максимально допустимая сумма пополнения",
    the_minimum_allowable_amount_of: "Минимально допустимая сумма пополнения",
    the_modified_price_of_success: "Успешно",
    the_payment_is_successful: "Успешно",
    the_phone_number_cannot_be: "Поле «Номер телефона» не может быть пустым",
    the_phone_number_has_been: "Изменился номер телефона?",
    the_phone_number_is_incorrect: "Неверный номер телефона, введите еще раз",
    the_phone_receives_the_verification: "Получен код подтверждения",
    the_picture_is_being_resolved: "Проверяется, щелкните, чтобы просмотреть позже",
    the_price_can_not_be: "Цена не может быть выше: ",
    the_purchase_amount_can_not: "Не может превышать количество предметов, соответствующих условиям.",
    the_quote_failed_to_send: "Не удалось выполнить: ",
    the_real_name_can_not: "Поле настоящего имени не может быть пустым",
    the_recommended_bit_is_already: "Рекомендованная позиция заполнена",
    the_set_of_recommended_items: "Рекомендовать",
    the_shelves: "Исключить из списка",
    the_shelves_after_the_goods: "Вы уверены, что хотите исключить эти предметы из списка?",
    the_system_is_busy: "Система занята",
    the_system_is_busy_please: "Система занята, проверьте в истории покупок",
    the_system_is_busy_you: "Система занята, проверить ход перезаряда можно в истории перезаряда.",
    the_system_is_busyplease_try: "Система занята, попробуйте позже",
    the_system_supports_the_maximum: "Система поддерживает до 64 символов.",
    the_validation_is_successful: "Успешно",
    the_verification_code_is_incorrect: "Неверный проверочный код",
    there_goods_is_not_input: "Имеются предметы без цены",
    tied_the_card_fails_please: "Не удалось. Подтвердите правильность введенной информации.",
    timeout: "Превышено время",
    to_bind: "Привязать",
    to_check: "Проверить",
    to_guarantee_your_safety_of: "Введите свой номер телефона",
    to_obtain_the_dynamic_code: "Не удалось выполнить",
    to_receive_the_success: "Успешно",
    to_shipping: "Отправить",
    to_steam: "Подключить Steam",
    to_view_figure: "Скриншот",
    trade_url_setting_successful: "Успешно",
    trading_link_format_error: "Ошибка формата торгового URL",
    unbound_steam: "Сначала подключите аккаунт Steam",
    unbound_steam_notice: "Вы еще не привязали Steam, сначала привяжите.",
    unbound_steam_trading_link_whether: "Не привязанный торговый URL Steam, сначала настроить?",
    undelivered_notice: "Поскольку вы не отправили вовремя в предыдущий раз, вы не сможете продавать {{hours}} часов {{minutes}} минут.",
    unpaid_amount: "Неоплаченная сумма",
    unset_price_item: "Имеются предметы без цены",
    unuse_coupon_state: "Неиспользованные",
    up_to_200_items: "Выберите до 200 предметов",
    "upload_success!_your_players_show": "Успешно загружено! Ваши скины просматривают",
    urs_password_login_need_verify: "Чтобы защитить аккаунт, нам нужно проверить мобильный счет.",
    used_coupon_state: "Использовано",
    user_asset_admin_frozen_notification: "Часть денежных средств была заморожена из-за подозрительных операций, дайте обратную связь.",
    user_login: "Войти/Зарегистрироваться",
    user_registration: "Зарегистрироваться",
    valuation: "Оценка:",
    verification_code_cannot_be_empty: "Поле «Код» не заполнено",
    verify: "Проверить",
    verify_now_btn_text: "Подтвердить сейчас",
    verify_tips: "Уведомление",
    verify_tips_text: "Мы обновили свои кошельки, чтобы повысить безопасность средств, перед выводом пройдите проверку личности.",
    view_a_player_show_please: "Сначала войдите",
    view_history_please_login: "Сначала войдите",
    view_more: "Больше",
    view_more_long_time_exchange: "Обменять",
    view_more_long_time_of: "Для просмотра долгосрочных ценовых тенденций подключите услугу «Обозреватель».",
    view_more_long_time_of_for_premium: "Чтобы увидеть ценовую тенденцию за 6 месяцев, получите BUFF Plus.",
    view_my_steam_inventory: "Просмотр инвентаря Steam",
    view_price_trends_please_login: "Сначала войдите",
    view_top_bookmarked_please_login: "Сначала войдите",
    view_wear_ranking_please_log: "Сначала войдите",
    waiting_for_payment: "ожидайте оплаты",
    whether_the_problem_has_been: "Проблема решена?",
    whether_to_terminate_the_purchase: "Прервать текущее действие как {{progress}}?\n{{refund_desc}}",
    will_be_returned_to_origin: "{{money}} вернет ваш аккаунт WeChat в течение 30 минут",
    will_be_returned_to_you_buff_b: "{{money}} будет возвращено на ваш баланс BUFF",
    withdraw_cash_price_of_dollar: "Вывод средств ￥",
    withdraw_the_maximum_amount_of: "Максимальная сумма вывода составляет",
    withdraw_verify_tips: "Подтверждение вывода",
    withdraw_verify_tips_text: "Эта банковская карта не прошла проверку, перед выводом средств завершите проверку.",
    withdrawal_failure: "Не удалось выполнить",
    withdrawal_has_been_filed: "Отправил заявку на вывод",
    withdrawal_minimum_amount_is: "Минимальная сумма вывода составляет",
    years: "Год",
    you_can_recharge_in_a: "Вы можете проверить ход в истории пополнений.",
    you_have_new_orders_need: "У вас новый заказ на отправку.",
    you_have_yet_to_bind: "Вы еще не привязали торговый URL Steam, перейдите в настройки",
    you_havent_successfully_paid_the: "Вы не оплатили, заказ может быть оплачен в течение 3 минут, оплатите как можно скорее.",
    you_must_be_over_18: "Чтобы пользоваться нашим сервисом, вам должно быть не менее 18 лет.",
    your_buying_price_is_higher: "Цена вашего заказа на покупку выше рыночной цены. Продолжить?",
    your_current_steam_account_cant: "Нельзя торговать в текущем аккаунте Steam. См. в справке.",
    your_mobile_phone_account_occurs: "Мобильный аккаунт изменен. Чтобы защитить аккаунт, нам нужно проверить мобильный счет.",
    your_phone_account_through_a: "Ваш мобильны аккаунт изменился, и нам нужно проверить привязанные аккаунт Steam.",
    your_steam_account_halt: "Обнаружено, что продажи с вашего аккаунта Steam приостановлены",
    your_steam_account_tradable: "Ваш аккаунт Steam подходит для торговли.",
    your_steam_acctoun_trade_limit: "Обмен с вашего аккаунта Steam невозможен",
    your_steam_trade_url_invalid: "Срок действия вашего торгового url истек, получите новый в Steam",
    yuan: "юань",
    refresh_success: "Успешно",
    cs2_inspect_input_share_link: "paste item sharing link here",
    cs2_inspect_success: "Проверяется, щелкните, чтобы просмотреть позже",
    cs2_inspect_finish: "Сгенерировано, нажмите, чтобы просмотреть.",
    cs2_inspect_delete: "Удалено",
    copy_to_clipboard_success: "Ссылка на скриншот успешно скопирована в буфер обмена"
});
i18nData.updateData("zh", {
    "1_seconds": "1秒",
    _piece_of_goods_has: " 件饰品已被买家购买支付中，下架失败",
    _piece_of_goods_off: " 件饰品下架成功",
    a_period_of_time_: "一段时间: ",
    a_picture_is_not_uploaded: "有图片未上传成功",
    a_successful_purchase: "成功购买",
    access_to_the_steam_encounters: "访问遇到问题？",
    account_can_be_withdraw_the: "账户内可提现的BUFF余额-其他不足，无法提现",
    acknowledgment_is_bound_to_the: "确认绑定到这个Steam帐号吗？\nSteam昵称：",
    acquisition_fee_failed_please_try: "获取手续费失败，请稍后再试",
    add_a_description: "添加描述",
    add_description: "添加描述",
    add_in_5_minutes_to: "请在5分钟内前往网易BUFF APP购买记录发送报价",
    add_in_the_buyers_payment: "请在买家付款后12小时内手动发货，否则系统将下架该类饰品并扣除信用值",
    add_the_other_card: "添加其他银行卡",
    all: "全选",
    already_have_an_account_click: "已有帐号？点这里登录",
    analysis: "解析中",
    analysis_figure: "检视图",
    api_key_format_error: "API key格式错误",
    api_key_successfully_set: "API key设置成功",
    application_authentication_failure_please_contact: "申请认证失败，请联系客服人员",
    artificial_assist: "人工协助",
    authentication: "身份验证",
    back_for_refresh: "再回到当前页面点击刷新按钮",
    backpack_capacity_is_insufficient_can: "背包容量不足，无法继续购买",
    bargain_price_must_be_lower: "还价价格必须低于饰品在售价格",
    being_prepaid_in: "正在充值中",
    beware_of_phishing_scams_please: "慎防钓鱼诈骗，请先检查Steam账号是否被创建API key！如发现被恶意创建，请马上删除并更改密码。",
    binding_acknowledgment: "绑定确认",
    binding_steam: "绑定Steam",
    binding_steam_before_you_can: "绑定Steam后才可以使用BUFF账号拥有更多权限。",
    binding_transaction_link_the_immediate: "绑定交易链接，立即体验BUFF交易",
    bound_to_fail: "绑定失败",
    buff_backpack_capacity_is_insufficient: "BUFF背包容量不足，已调整为可购买最大数量",
    buy_price_cannot_be_less: "求购价格不能小于0.01",
    buy_pubgrecycled_transactionitems_not_get: "购买PUBG(回收交易)的物品无法取回到游戏中，需要等待PUBG游戏官方开放个人交易才可取回。",
    buy_success: "购买成功",
    buying_in_bulk_quantity_can: "批量购买数量不能超过",
    buying_in_bulk_results: "批量购买结果",
    can_not_supply_your_own: "不能供应自己求购的物品",
    cancel: "取消",
    cancel_buying_success: "取消求购成功",
    cancel_delivery_success: "取消发货成功",
    cancel_recommend: "取消推荐",
    cancel_the_shipment: "取消发货",
    cannot_be_resolved_the_goods: "无法解析，该饰品已被出售或网络不好",
    cannot_purchase_your_own_items: "不能购买自己出售的物品",
    card_limit_is_reached: "银行卡达到上限",
    cardsp: "张银行卡",
    century: "世纪",
    change_price_of_failure: "改价失败",
    clear_the_api_key_after: "清除API key后，你的店铺将离线，自售中的饰品将无法被购买。确定要清除吗？",
    click_on_upload_picture: "点击上传图片",
    click_to_collapse: "点击收起",
    click_to_expand: "点击展开",
    close_failed_please_try_again: "关闭失败，请重试",
    complete: "完成",
    confirm: "确认",
    confirm_and_opened: "确认并开通",
    confirm_clear: "确认清除",
    confirm_leave: "确认离开",
    confirm_to_cancel_the_transaction: "确认取消交易",
    confirmation_of_payment: "确认付款",
    "congratulations_to_you!_welcome_to": "恭喜您！欢迎来到BUFF，您可以立马开始交易了！",
    consignment_goods_shelf_will_be: "寄售饰品下架后将返回你的BUFF背包。",
    content_length_can_not_be: "内容长度不能大约1024个字符",
    continue_to_pay: "继续支付",
    counteroffer_price_cannot_be_lower: "还价价格不能低于饰品的最低出价",
    counteroffer_request_has_been_sent: "还价请求已发送",
    create_a_package_of_trading: "创建打包交易成功",
    create_buying_success: "求购发布成功",
    csgo_deposit_notice: '由于V社修改了饰品交易规则，该饰品购买后需要7天才能再次交易，详情查看<a href="/help#csgo_trade_cooldown" target="_blank">CSGO/DOTA2交易机制改动</a>',
    currently_does_not_support_the: "目前不支持该卡号，请更换卡号",
    currently_have_to_wait_for: "当前已有等待客服处理的反馈，如果还需反馈，请前往补充",
    day: "天",
    days: "天",
    delete_confirmation: "删除确认",
    delete_failed: "删除失败",
    delivery_prompt: "发货提示",
    delivery_timeout: "发货超时",
    deposit_backpack: "存入背包",
    deposit_failed: "存入失败",
    description: "说明",
    detect_fail_try_later: "检测失败，请稍后再试",
    detected_you_are_using_steam: "检测到你是用Steam登录，为了保障帐号财产安全，需要验证手机帐号。",
    detection_failed_please_try_again: "检测失败，请稍后再试",
    detects_network_anomalies_please_try: "检测到网络异常，请稍后再试",
    detects_that_you_are_also: "检测到您还未绑定Steam，继续操作前请先完成Steam账号绑定",
    determine_the_selected_accessories_to: "确定将选中的饰品下架？",
    determined_to_be_removed_from: "确定要移出收藏吗？",
    do_not_exceed_24_characters: "不要超过24个字符",
    edit_description: "编辑描述",
    edit_the_description: "编辑描述",
    enter_the_verification_code: "输入验证码",
    error_code: "错误码：",
    failure_to_modify: "修改失败",
    feedback_success: "反馈成功",
    for_the_protection_of_your: "为保障你的帐号资产安全，需要验证该帐号绑定的Steam帐号",
    fraud_notice: "慎防钓鱼诈骗，请先检查Steam账号是否被创建API key！如发现被恶意创建，请马上删除并更改密码。",
    listing_instructions_title: "上架须知",
    listing_instructions_message: "存在堆叠情况，你只能上架其中的一件。完成交易或下架后，才能继续上架其他部分。",
    listing_instructions_confirm: "继续上架",
    deposit_instructions_title: "存入须知",
    deposit_instructions_message: "存在堆叠情况，存入BUFF背包时仅视为一件处理。存入时请设置数量为1。",
    deposit_instructions_confirm: "继续存入",
    get_in: "获取中...",
    get_steam_trading_link: "获取Steam交易链接",
    get_the_package_deal_failed: "获取打包交易失败",
    get_the_verification_code: "获取验证码",
    go_to_bind: "前往绑定",
    go_to_bind_card: "去绑卡",
    go_to_check: "前往检查",
    go_to_market: "去市场看看",
    go_to_set: "前往设置",
    go_to_settings: "前往设置",
    go_to_verify: "去认证",
    go_to_view: "前往查看",
    greater_than_the_extraction_amount: "大于可提金额",
    has_been_sent: "已发送",
    has_been_used: "已使用",
    hour: "小时",
    hours: "小时",
    i_first_look_at_the: "我先看看",
    i_know: "我知道了",
    i_think_again: "我再想想",
    id_card_number_errors_please: "身份证号错误，请重新输入",
    id_number_can_not_be: "身份证号不能为空",
    in_order_to_your_funds: "为了您的资金和交易安全，请完善以下资料",
    input_content_too_long_to_40_words: "输入的内容太长，请少于40个字",
    instrongmy_counterofferstrongattention_counteroffer_status_the: '在<strong>我的还价</strong>关注还价状态，卖家接受还价并发起报价后，立即前往<strong>购买记录</strong>接受报价，超时未接受报价将扣除<strong class="c_Yellow">2%</strong>还价金额给卖家作为补偿。',
    is_being_processed_you_can: "正在处理中，你可以在提现记录中查看最新进度。",
    is_being_uploaded: "正在上传...",
    it_detects_your_steam_account: "检测到你的Steam账号可以正常交易了",
    it_is_determined_to_cancel: "确定取消发货吗？",
    items_on_the_shelves_successful: "物品上架成功",
    jewelry: "的饰品",
    less_than: "小于",
    login: "登录",
    member: "件",
    pluar_s: " ",
    minimum_price_can_not_be: "最低价不能高于最高价",
    minute: "分",
    minutes: "分钟",
    modify_the_price: "修改价格",
    modify_the_success: "修改成功",
    nickname_modify_too_frequently_notice: "修改太频繁，请{{time}}后再修改",
    need_to_first_agree_to: "需要先同意支付协议",
    network_error: "检测到网络异常，请稍后再试",
    network_request_failed: "网络请求失败",
    next_page: "下一页",
    no_available_items: "当前页无可选择上架或存入的饰品",
    no_longer_prompt: "不再提示",
    no_meet_the_requirements_of: "暂无符合要求的饰品",
    no_related: "暂无相关饰品",
    not_found_to_contain_the: "没有搜到包含关键词",
    not_my_phone_number_please: "不是本人的手机号？请寻求",
    not_support_credit_card: "暂不支持信用卡",
    number: "件数：",
    quantity: "件数：",
    of_buying_ityuan: "的求购？￥",
    off_the_shelves_results: "下架结果",
    ok: "确定",
    on_frame_failure: "上架失败",
    out_collection: "移出收藏",
    package_deal: "打包交易",
    packaged_transaction_within_the_test: "打包交易内测中，敬请期待",
    page_size: "每页显示数",
    page_temporarily_does_not_support: "网页暂不支持批量购买，请前往APP操作，支持合并报价更便捷。",
    pattern_template: "图案模板",
    pay_failed: "支付失败",
    payment: "支付中",
    payment_system_is_busy_please: "支付系统繁忙，请在购买记录查看支付结果。",
    piece_of_goods: "件饰品",
    piece_of_goods_please_go: "件饰品，请到购买记录中查看",
    please_agree_to_the_service: "请先同意服务协议",
    please_be_patient: "请耐心等待",
    please_choose_to_be_a: "请选择要私密交易的物品",
    please_choose_to_be_on: "请选择要上架的物品",
    please_do_the_safety_confirmation: "请进行安全确认，输入",
    please_enter: "请输入",
    please_enter_image_verification_code: "请输入图片验证码",
    please_enter_or_select_the: "请输入或选择充值金额\\n",
    please_enter_pricing: "请输入定价",
    please_enter_the_account_password: "请输入帐号密码",
    please_enter_the_auto_logoff: "请输入自动下线时间",
    please_enter_the_correct_invite: "请输入正确的邀请码",
    please_enter_the_netease_mobile: "请输入网易手机帐号",
    please_enter_the_question_content: "请输入问题内容",
    please_enter_the_redemption_code: "请输入兑换码",
    please_enter_the_registered_phone: "请输入注册手机号",
    please_enter_the_sms_verification: "请输入短信验证码",
    please_enter_the_verification_code: "请输入验证码",
    please_enter_your_steam_trade: "请输入您的Steam交易链接",
    please_fill_out_the_trading: "请填写交易链接",
    please_get_a_sms_verification: "请先获取短信验证码",
    please_get_a_verification_code: "请先获取验证码",
    please_go_to_buff_the: "请前往BUFF APP发送报价",
    please_go_to_my_sell: "请前往我的出售发货",
    please_in_the_backpack_view: "请在背包中查看。",
    please_input_01000_between_the: "请输入0-1000之间的模板编号",
    please_input_the_correct_mailbox: "请输入正确的邮箱",
    please_modify_the_nickname: "请修改昵称",
    please_select_deposit_item: "请选择要存入的物品",
    please_select_from_the_available: "请选择可用的提现券",
    please_select_item: "请选择要上架的物品",
    "please_select_recharge_way\\n": "请选择充值方式\\n",
    please_select_the_bank_account: "请选择银行账户",
    "please_select_the_card\\n": "请选择银行卡\\n",
    please_select_the_you_want: "请选择要下架的物品",
    please_select_to_ship_the: "请选择要发货的饰品",
    please_tick_the_below_statement: "请先勾选下方声明",
    please_upload_picture: "请上传图片",
    please_wait: "请稍候...",
    please_wait_for_seller_to: "请等待卖家发起报价，后续需确认收货",
    please_wait_for_the_seller: "请等待卖家发货，可在购买记录查看进度。",
    please_wait_patiently_have_been: "请耐心等待，已等待",
    pmost_can_only_be_bound: "最多只能绑定",
    press_and_hold_the_slider: "按住滑块，拖动完成上方拼图",
    prev_page: "上一页",
    price_must_be_greater_than: "价格必须大于:",
    private_transaction_within_the_test: "私密交易内测中，敬请期待",
    private_transactions: "私密交易",
    prompt: "提示",
    purchase: "购买中",
    purchase_failed: "购买失败",
    purchase_failure_reason_as_follows: "购买失败，原因如下：",
    purchase_price_not_greater_than: "求购价格不能大于",
    ranking_total_ranking: "排行总榜",
    reacquire_the_print_data: "重新获取印花数据中",
    receive_sms_verification_code: "收到的短信验证码。",
    recharge_failed: "充值失败",
    recharge_successful: "充值成功",
    recharge_with_cash_only_support: "充值与提现只支持储蓄卡",
    recharge_yuan: "充值 ￥",
    recommended_use_of_the_netease: '建议使用网易UU加速器，<a href="/help#steam_network">查看更多解决方案</a>',
    refresh: "刷新",
    refresh_in_the: "刷新中...",
    refreshing: "刷新中",
    register_a_new_account: "注册新帐号",
    registration: "注册",
    reminder: "温馨提醒",
    replicated: "已复制",
    reply_success: "回复成功",
    request: "请求中",
    require_minimal_packaging_of_two: "需要最少打包两件饰品",
    resend: "重新发送",
    retrieval_failure: "取回失败",
    retrieve_the_process_description: "取回流程简介",
    reupload: "重新上传",
    sale_amount: "出售金额",
    sale_amount_yuan: "出售金额: ",
    sale_number_: "出售数量: ",
    save: "保存",
    seconds: "秒",
    select_to_change_the_price: "请选择要改价的物品",
    select_to_retrieve_the_goods: "请选择要取回的饰品",
    select_up_to_200_pieces: "最多选择200件饰品",
    send_a_verification_code_failed: "发送验证码失败",
    sent_successfully_please_note_the: "发送成功，请留意手机短信",
    set_success: "设置成功",
    set_the_boot: "设置引导",
    set_to_fail: "设置失败：",
    set_up_steam_trade_url: "设置Steam交易链接",
    set_up_trading_links: "设置交易链接",
    settings_failed_please_try_again: "设置失败，请稍后再试",
    shelve_failed: "上架失败",
    shelve_notice: "请在买家付款后12小时内发货，否则系统将下架该类饰品并扣除信用值",
    shelve_success: "上架成功",
    shelves_successful: "下架成功",
    since_the_csgo_official_trading: '由于 CS:GO 官方交易规则改动，该饰品购买后需要7天后才能取回，详情查看<a href="/help#csgo_trade_cooldown" target="_blank">CS:GO交易机制改动</a>',
    skip_maybe_next_time: "跳过，下次再说",
    sold_number_of_pieces: "出售件数",
    steam_trade_limit: "你当前Steam帐号无法交易，请查看我们的帮助文档",
    successful_supply: "成功供应",
    successful_upload: "上传成功",
    successfully_submitted: "提交成功",
    supply_failure: "供应失败",
    supply_success: "供应成功",
    sure_you_want_to_delete: "确定要删除该银行卡吗?",
    system_busy_error: "系统繁忙，请稍后再试",
    termination_buying: "终止求购",
    timeout: "超时",
    the_account_can_be_withdrawal: "帐户内可提现的BUFF余额-支付宝不足，无法提现",
    the_amount_of_recharge_need: "充值金额需要是数字",
    the_authentication_is_successful: "认证成功",
    the_bank_card_number_can: "银行卡号不能为空",
    the_bank_card_number_errors: "银行卡号错误, 请重新输入",
    the_binding_is_successful: "绑定成功",
    the_content_of_the_input: "输入的内容太长，请少于40个字",
    the_current_balance_of_dollar: "，当前余额 ￥",
    the_current_page_is_no: "当前页无可选择上架或取回的饰品",
    the_degree_of_wear_get: "磨损度获取中...",
    the_goods_can_not_a: "该饰品无法一键定价，请手动输入",
    the_goods_is_not_buying: "该饰品不可求购",
    the_lack_of_balance: "余额不足",
    the_maximum_allowable_amount_of: "最大允许充值金额是",
    the_minimum_allowable_amount_of: "最小允许充值金额是",
    the_modified_price_of_success: "改价成功",
    the_payment_is_successful: "支付成功",
    the_phone_number_cannot_be: "手机号码不能为空",
    the_phone_number_has_been: "手机号已更换？请寻求",
    the_phone_number_is_incorrect: "手机号码错误，请重新输入",
    the_phone_receives_the_verification: "手机收到的验证码",
    the_picture_is_being_resolved: "图片正在解析中，请稍后点击查看",
    the_price_can_not_be: "价格不能大于:",
    the_purchase_amount_can_not: "购买数量不能超过满足条件的在售数量",
    the_quote_failed_to_send: "报价发送失败: ",
    the_real_name_can_not: "真实姓名不能为空",
    the_recommended_bit_is_already: "推荐位已满",
    the_set_of_recommended_items: "设为推荐项",
    the_shelves: "下架",
    the_shelves_after_the_goods: "下架后，饰品将返回你的BUFF背包。确定要取消",
    the_system_is_busy: "系统繁忙",
    the_system_is_busy_please: "系统繁忙，请前往购买记录查看",
    the_system_is_busy_you: "系统繁忙，你可以在充值记录中查看该笔充值的最新进度",
    the_system_is_busyplease_try: "系统繁忙,请稍候再试",
    the_system_supports_the_maximum: "系统支持最长姓名为64个字",
    the_validation_is_successful: "验证成功",
    the_verification_code_is_incorrect: "验证码不正确",
    there_goods_is_not_input: "有饰品未输入定价",
    tied_the_card_fails_please: "绑卡失败，请确认你输入的信息无误",
    to_bind: "前往绑定",
    to_check: "前往检查",
    to_guarantee_your_safety_of: "为保障你的资金安全，提现操作需要验证手机短信，请输入BUFF帐号绑定的手机号码",
    to_obtain_the_dynamic_code: "获取动态验证码失败",
    to_receive_the_success: "领取成功",
    to_shipping: "前往发货",
    to_steam: "前往Steam",
    trade_url_setting_successful: "交易URL设置成功",
    trading_link_format_error: "交易链接格式错误",
    unbound_steam: "未绑定Steam",
    unbound_steam_notice: "检测到您还未绑定Steam，继续操作前请先完成Steam账号绑定",
    unbound_steam_trading_link_whether: "未绑定Steam交易链接，是否前往设置？",
    undelivered_notice: "由于你上一次交易未能成功发货，无法上架该类物品还剩：{{hours}}小时{{minutes}}分",
    unset_price_item: "有饰品未输入定价",
    up_to_200_items: "最多选择200件饰品",
    "upload_success!_your_players_show": "上传成功！你的玩家秀正在审核中",
    user_login: "帐号登录/注册",
    user_registration: "用户注册",
    valuation: "估值：",
    verification_code_cannot_be_empty: "验证码不能为空",
    verify: "验证",
    view_a_player_show_please: "查看玩家秀请先登录BUFF",
    view_history_please_login: "查看成交记录请先登录BUFF",
    view_more: "查看更多",
    view_more_long_time_of: '使用积分兑换"价格走势侦察"，查看更长时间饰品价格趋势。',
    view_more_long_time_of_for_premium: "查看6个月的价格趋势，请前往会员页面开通。",
    view_more_long_time_exchange: "前往",
    view_my_steam_inventory: "查看我的Steam库存",
    view_price_trends_please_login: "查看价格趋势请先登录BUFF",
    view_top_bookmarked_please_login: "查看热门关注请先登录BUFF",
    view_wear_ranking_please_log: "查看磨损排行请先登录BUFF",
    waiting_for_payment: "等待支付",
    whether_the_problem_has_been: "是否问题已解决？",
    whether_to_terminate_the_purchase: "是否终止当前进度为{{progress}}的求购？\n{{refund_desc}}",
    withdraw_cash_price_of_dollar: "提现￥",
    withdraw_the_maximum_amount_of: "提现的最高金额为",
    withdrawal_failure: "提现失败",
    withdrawal_has_been_filed: "提现已申请",
    withdrawal_minimum_amount_is: "提现的最低金额为",
    years: "年",
    you_can_recharge_in_a: "你可以在充值记录中查看最新进度。",
    you_have_new_orders_need: "你有新的订单需要发货",
    you_have_yet_to_bind: "你尚未绑定Steam交易链接，请前往设置",
    you_havent_successfully_paid_the: "你还没有支付成功，支付有效期为三分钟，请尽快支付。",
    you_must_be_over_18: "你必须年满18岁才能使用我们的服务。",
    your_buying_price_is_higher: "你的求购价格高于在售价格，可能会买到高于市场价的饰品，确认要付款吗？",
    your_current_steam_account_cant: "你当前Steam帐号无法交易，请查看我们的帮助文档",
    your_mobile_phone_account_occurs: "你的手机帐号发生过换号操作，为了保障帐号财产安全，需要验证手机帐号",
    urs_password_login_need_verify: "为了保障帐号财产安全，需要验证手机帐号",
    your_phone_account_through_a: "您的手机帐号发生过换号操作，需要验证绑定的Steam帐号",
    your_steam_account_halt: "检测到你的Steam账号处于交易暂挂期",
    your_steam_account_tradable: "检测到你的Steam账号可以正常交易了",
    your_steam_acctoun_trade_limit: "检测到你的Steam账号交易受限",
    your_steam_trade_url_invalid: "你的交易链接已经失效，请前往Steam重新获取",
    yuan: "元",
    some_etc: "等{{count}}件饰品",
    buying_num: "{{num}}件需求",
    selling_num: "{{num}}件在售",
    inspecting: "正在解析中，请稍后重试",
    platform_name: "网易BUFF饰品交易平台",
    slogan: "支持DOTA2，CSGO等热门游戏",
    download: "下载",
    check_sticker_wear_in_detail: "印花磨损可在详情页下拉查看，购买前请先确认",
    get_code: "获取验证码",
    login_with_password: "使用密码验证登录",
    login_with_sms: "使用短信验证登录",
    login_register: "登录/注册",
    please_agree: "请先同意用户协议和隐私政策",
    gift_card_buy_success: "成功购买礼品卡！快将礼品卡兑换码分享给获赠人吧，你也可以在我的卡券中查看。\n获赠人BUFF昵称：{{nickname}}\n礼品卡兑换码：{{sn}}",
    gift_card_receiver_nickname_error: "BUFF昵称不存在，请检查是否正确",
    gift_card_receiver_info: "该用户BUFF头像与昵称",
    disable_sms_notification_alert: "关闭该功能后你将不再收到交易短信提醒，请留意APP推送信息并及时处理订单。",
    disable_antiscam: "系统将不再为你拦截仿冒交易报价，敬请提高警惕，谨防交易被劫持诈骗。",
    scratch_sticker_notice: "卖家需要确保上架后饰品印花信息与库存一致，发货前刮印花的行为会导致帐号被封禁。",
    reconfirm: "重新确认",
    continue_selling: "继续上架",
    please_input_store_name: "请输入店铺名称",
    have_not_modify_store_name: "您尚未修改店铺名称",
    determine_use_store_name_coupon: "本次改名需要消耗1张店铺改名券，是否确定修改？",
    please_exchange_store_name_coupon_at_app: "请前往BUFF APP兑换店铺改名券",
    must_allow_epay_or_alipay: "必须接受支付宝付款或微信支付付款中的一个",
    cms_inspect_success_title: "检视须知",
    cms_inspect_success_message: "将打开CSGO客户端，连接服务器进行检视，该功能仅限购买前检视参考饰品外观信息，禁止用于其他用途，如需使用饰品请购买在售饰品。因服务器负载量有限，内测期间提供单日10分钟的检视时长，如果连接失败，请检查CSGO客户端登录的Steam账号与BUFF绑定的是否一致。\n如需使用蒸汽平台检视，可在账号设置中修改。",
    buy_order_min_price: "最低 {{min_price}}",
    premium_buy_success: "开通会员成功",
    premium_buy_fail: "开通失败，请稍后再试",
    premium_will_expire_content: "会员将于{{date}}过期，过期后将失去会员标识、社区服检视、上架数量扩容等特权，可前往网页续费。",
    premium_expired_content: "会员已于{{date}}过期，继续享受会员特权可前往网页续费。",
    premium_expired_renew_now: "前往续费",
    premium_waiting_for_payment: "等待支付",
    premium_havent_successfully_paid: "你还没有支付成功，请尽快支付。",
    premium_continue_to_pay: "继续支付",
    premium_confirm_leave: "确认离开",
    user_asset_admin_frozen_notification: "账户存在异常操作，部分资金已锁定，如有疑问，请联系客服。",
    remain_withdrawal_count_today: "今天剩余提现次数：",
    please_choose_coupon: "选择优惠券",
    not_use_coupon: "不使用",
    expired_coupon_switch: "该折扣券已过期，若替换或取消使用将作废。",
    no_coupon_to_use: "暂无可用",
    notes: "备注",
    notes_exceed_max_len: "添加不超过40字备注。备注非商品描述，仅自己可见。",
    purchased: "购入",
    submitted: "修改成功",
    edit_notes: "编辑备注",
    add_notes: "添加备注",
    notes_desc: "备注（仅自己可见）：",
    add_notes_desc: "添加备注（仅自己可见）",
    coupon_dispense_sources_both: "可开通会员或在APP积分兑换获得该权益",
    coupon_dispense_sources_points: "可在APP积分兑换获得该权益",
    coupon_dispense_sources_vip: "可开通会员获得该权益",
    unuse_coupon_state: "未使用",
    used_coupon_state: "已使用",
    preview_screenshots: "预览检视图",
    to_view_figure: "检视图",
    buy_order_wx_pay_unfrozen: "求购发布成功。30天内未成交将自动终止求购，求购金额将原路退回。",
    will_be_returned_to_you_buff_b: "{{money}} 将退回到你的BUFF余额",
    will_be_returned_to_origin: "未求购成功的金额将退回你的微信账户，{{money}} 预计半小时内到账",
    split_pay_min_amount_invalidate: "不能低于{{amount}}",
    split_pay_max_amount_invalidate: "不能高于{{amount}}",
    split_pay_cancel_order_title: "取消购买",
    split_pay_cancel_order_content: "确认要取消购买吗？取消后请不要再支付原订单。多次取消可能会导致限制。",
    split_pay_continue_to_pay: "暂不",
    split_pay_confirm_leave: "取消购买",
    unpaid_amount: "待支付金额",
    paid_success: "支付完成",
    gift_card_query_title: "提示",
    cash_detail_alipay: "支付宝充值/收入",
    cash_detail_alipay_small: "(可购买、提现至银行卡)",
    cash_detail_epay: "微信支付收入",
    cash_detail_epay_small: "(可购买、提现至银行卡)",
    balances_detail: "明细",
    currently_does_not_support_the_and_change: "无法识别卡类型，请手动选择",
    search_result: "搜索结果",
    add_a_bank_card: "添加银行卡",
    verify_tips: "提示",
    verify_tips_text: "为提升BUFF用户的资金安全，现已对钱包作全面升级，请完成认证后再提现。",
    withdraw_verify_tips: "提现认证",
    withdraw_verify_tips_text: "该银行卡暂未完成认证，请完成认证后再提现。",
    verify_now_btn_text: "马上认证",
    supply_max_limit: "最多同时供应50件饰品",
    sticker_copy: "复制",
    no_field_for_more_sticker: "请先留出空位以添加印花",
    no_field_for_more_patch: "请先留出空位以添加印章",
    sticker_search_entry: "印花搜枪",
    weapon_case_entry: "所属武器箱",
    in_collection: "所属收藏品",
    item_contained: "包含物品",
    an_rare_special_item: "一件极其罕见的特殊物品",
    balance_authorization: "余额额度授权",
    ejzb_auth_title: "当笔支付授权失效或超过限额",
    auth_entry_zhima_title: "支付宝身份认证",
    auth_entry_zhima_text: " ",
    auth_entry_bankcard_title: "银行卡实名认证",
    auth_entry_kyc_title: "护照认证",
    auth_entry_kyc_text: "不支持中国大陆身份证",
    auth_entry_bankcard_text: " ",
    auth_entry_manual_title: "人工实名认证",
    auth_entry_manual_text: "不支持中国大陆身份证",
    manual_cert_upload_pic: "请上传支付宝账户实名页面截图和证件截图",
    balance_authorization_expired: "余额额度授权已过期，",
    re_authorisation: "重新设置",
    manual_cert_processing: "审核中",
    error_picture: "上传错误，请上传jpeg或png格式图片",
    please_upload_manual_cert: "请上传图片",
    auth_success: "授权成功",
    manual_cert_finish: "上传成功",
    request_in_queue: "系统繁忙, 请求排队中，请稍后重试……",
    first_use_epay_balance: "优先使用银行卡余额",
    first_use_alipay_balance: "优先使用支付宝余额",
    manual_cert_title: "人工实名认证",
    manual_cert_please_upload_screenshot: "请上传支付宝账户实名页面截图",
    manual_cert_please_upload_passport_pic: "请上传您的证件照",
    manual_cert_submit: "提交",
    screenshot: "检视图",
    copy_to_clipboard_success: "复制成功",
    on_the_frame: "上架",
    on_sale: "出售中",
    stat_view_count_text: "{{view_count}}次浏览",
    stat_bookmark_count_text: "{{bookmark_count}}人关注",
    stat_bargain_count_text: "{{bargain_count}}次还价",
    order_pay_success_partner: '物品发放进度可在<a href="/market/buy_order/history?game={{game}}">购买记录</a>中查询。物品将以邮件形式在游戏内发放，请及时领取。',
    badlanders_quality_100: "粉",
    balanders_quality_5: "金",
    balanders_quality_4: "紫",
    balanders_quality_3: "蓝",
    balanders_quality_2: "绿",
    balanders_quality_1: "白",
    refresh_success: "刷新成功",
    recreate_buy_order_message: "你正在以¥{{old_price}}求购该饰品，是否重新以¥{{new_price}}发起求购？",
    recreate: "重新发起",
    cancel_buy_order_and_recreate: "求购取消成功，重新发起失败原因：",
    partial: "部分",
    cs2_inspect_input_share_link: "请填入饰品的分享链接",
    cs2_inspect_success: "图片正在解析中，请稍后点击查看",
    cs2_inspect_finish: "检视图已生成，点击查看",
    cs2_inspect_delete: "已删除"
});
var renderGameNotification = function (i) {
    var r = {};
    ["to_accept_offer_order", "to_deliver_order", "to_handle_bargain", "to_pay_order", "to_receive_order", "to_pay_bargain", "to_pay_buy_order"].forEach(function (e) {
        var t = i[e];
        for (var a in t) {
            r[a] = r[a] || 0;
            r[a] += t[a]
        }
    });
    var a = 0;
    $("#j_game-switcher .j_drop img").each(function () {
        var e = r[$(this).attr("data-game")] || 0;
        var t = $(this).siblings(".tag_status");
        if (e > 0) {
            a = a + e;
            if (e > 99) {
                e = "99+"
            }
            t.show();
            t.text(e)
        } else {
            t.hide()
        }
    });
    if (a > 0) {
        var e = $("#j_game-switcher h3 .tag_status");
        if (a > 99) {
            a = "99+"
        }
        e.show();
        e.text(a)
    }
};
var notification = function () {
    var t = true;
    var e = function (m) {
        sendRequest("/api/message/notification", {
            method: "GET", showLoading: false, showError: false, success: function (e) {
                if (e.code == "OK") {
                    var t = 0;
                    var a = 0;
                    var i = 0;
                    var r = 0;
                    var n = 0;
                    var o = 0;
                    var s = 0;
                    if (e.data.to_send_offer_order) {
                        e.data.to_pay_order = e.data.to_pay_order || {};
                        for (var _ in e.data.to_send_offer_order) {
                            e.data.to_pay_order[_] = (e.data.to_pay_order[_] || 0) + e.data.to_send_offer_order[_]
                        }
                    }
                    for (var c in e.data) {
                        if (c == "to_deliver_order") {
                            var l = "dota2";
                            var d = 0;
                            for (var _ in e.data[c]) {
                                if (g.game != _) {
                                    continue
                                }
                                var u = e.data[c][_];
                                d += u;
                                if (u > 0) {
                                    l = _
                                }
                                a += u;
                                if (u > 0 && $(".to_deliver a").length > 0 && $(".to_deliver a").attr("href").indexOf("game=" + _) != -1) {
                                    $(".to_deliver a").attr("href", "/market/sell_order/to_deliver?game=" + _)
                                }
                                if (u > 0 && $("#j_myselling a").attr("href").indexOf("game=" + _) != -1) {
                                    $("#j_myselling a").attr("href", "/market/sell_order/to_deliver?game=" + _)
                                }
                            }
                            if (a > 0) {
                                if (a > 99) {
                                    a = "99+"
                                }
                                if ($(".cont-tab .to_deliver span.tag_status").length > 0) {
                                    $(".cont-tab .to_deliver span.tag_status").text(a)
                                } else {
                                    $(".cont-tab .to_deliver").append($('<span class="tag_status"></span>').text(a))
                                }
                            } else {
                                $(".cont-tab .to_deliver span.tag_status").remove()
                            }
                            $("#current-game-to-deliver").text(e.data[c][g.game]);
                            if (d > 0) {
                                var p = {
                                    tag: "to_deliver_order_" + e.data.updated_at[c],
                                    title: i18n("delivery_prompt"),
                                    body: i18n("you_have_new_orders_need"),
                                    icon: "/static/images/favicon.ico",
                                    onclick: function () {
                                        window.open("/market/sell_order/to_deliver?game=" + l)
                                    }
                                };
                                sendNotification(p)
                            }
                        } else if (c == "to_accept_offer_order") {
                            for (var _ in e.data[c]) {
                                if (g.game != _) {
                                    continue
                                }
                                var u = e.data[c][_];
                                i += u
                            }
                            if (i > 0) {
                                if (i > 99) {
                                    i = "99+"
                                }
                                if ($(".cont-tab .to_accept_offer span.tag_status").length > 0) {
                                    $(".cont-tab .to_accept_offer span.tag_status").text(i)
                                } else {
                                    $(".cont-tab .to_accept_offer").append($('<span class="tag_status"></span>').text(i))
                                }
                            } else {
                                $(".cont-tab .to_accept_offer span.tag_status").remove()
                            }
                        } else if (c == "to_receive_order") {
                            for (var _ in e.data[c]) {
                                if (g.game != _) {
                                    continue
                                }
                                var u = e.data[c][_];
                                t += u
                            }
                            if (t > 0) {
                                if (t > 99) {
                                    t = "99+"
                                }
                                var f = t;
                                if ($(".cont-tab .my_backpack span.tag_status").length > 0) {
                                    $(".cont-tab .my_backpack span.tag_status").text(f)
                                } else {
                                    $(".cont-tab .my_backpack").append($('<span class="tag_status tag_status_get"></span>').text(f))
                                }
                            } else {
                                $(".cont-tab .my_backpack span.tag_status").remove()
                            }
                        } else if (c == "to_handle_bargain") {
                            for (var _ in e.data[c]) {
                                if (g.game != _) {
                                    continue
                                }
                                var u = e.data[c][_];
                                r += u
                            }
                            if (r > 0) {
                                if (r > 99) {
                                    r = "99+"
                                }
                                if ($(".cont-tab .to_handle_bargain span.tag_status").length > 0) {
                                    $(".cont-tab .to_handle_bargain span.tag_status").text(r)
                                } else {
                                    $(".cont-tab .to_handle_bargain").append($('<span class="tag_status"></span>').text(r))
                                }
                            } else {
                                $(".cont-tab .to_handle_bargain span.tag_status").remove()
                            }
                        } else if (c == "to_pay_order") {
                            for (var _ in e.data[c]) {
                                if (g.game != _) {
                                    continue
                                }
                                var u = e.data[c][_];
                                n += u
                            }
                            if (n > 0) {
                                if (n > 99) {
                                    n = "99+"
                                }
                                if ($(".cont-tab .to_pay_order span.tag_status").length > 0) {
                                    $(".cont-tab .to_pay_order span.tag_status").text(n)
                                } else {
                                    $(".cont-tab .to_pay_order").append($('<span class="tag_status"></span>').text(n))
                                }
                            } else {
                                $(".cont-tab .to_pay_order span.tag_status").remove()
                            }
                        } else if (c == "to_pay_bargain") {
                            for (var _ in e.data[c]) {
                                if (g.game != _) {
                                    continue
                                }
                                var u = e.data[c][_];
                                o += u
                            }
                            if (o > 0) {
                                if (o > 99) {
                                    o = "99+"
                                }
                                if ($(".cont-tab .to_pay_bargain span.tag_status").length > 0) {
                                    $(".cont-tab .to_pay_bargain span.tag_status").text(o)
                                } else {
                                    $(".cont-tab .to_pay_bargain").append($('<span class="tag_status"></span>').text(o))
                                }
                            } else {
                                $(".cont-tab .to_pay_bargain span.tag_status").remove()
                            }
                        } else if (c == "to_pay_buy_order") {
                            for (var _ in e.data[c]) {
                                if (g.game != _) {
                                    continue
                                }
                                var u = e.data[c][_];
                                s += u
                            }
                            if (s > 0) {
                                if (s > 99) {
                                    s = "99+"
                                }
                                if ($(".cont-tab .to_pay_buy_order span.tag_status").length > 0) {
                                    $(".cont-tab .to_pay_buy_order span.tag_status").text(s)
                                } else {
                                    $(".cont-tab .to_pay_buy_order").append($('<span class="tag_status"></span>').text(s))
                                }
                            } else {
                                $(".cont-tab .to_pay_buy_order span.tag_status").remove()
                            }
                        } else if (c == "unread_message" || c == "unread_system_message") {
                            if (e.data["unread_message"].total > 0 || e.data["unread_system_message"].total > 0) {
                                $(".floatbar .message-bar span.icon_new").show();
                                $(".my-menu .icon_menu_msg").siblings(".icon_new").show();
                                $(".nav .message .icon_new").show()
                            } else {
                                $(".floatbar .message-bar span.icon_new").hide();
                                $(".my-menu .icon_menu_msg").siblings(".icon_new").hide();
                                $(".nav .message .icon_new").hide()
                            }
                            if (e.data["unread_message"].total > 0) {
                                $("#j_mail-tab li[message_type=trade] .icon_new").css({display: "inline"})
                            } else {
                                $("#j_mail-tab li[message_type=trade] .icon_new").hide()
                            }
                            if (e.data["unread_system_message"].total > 0) {
                                $("#j_mail-tab li[message_type=system] .icon_new").css({display: "inline"})
                            } else {
                                $("#j_mail-tab li[message_type=system] .icon_new").hide()
                            }
                            if (e.data["unread_message"].total == 0 && e.data["unread_system_message"].total > 0) {
                                $(".floatbar .message-bar a").attr("href", "/user-center/message?type=system");
                                $(".my-menu .icon_menu_msg").parent().attr("href", "/user-center/message?type=system");
                                $(".nav .message a").attr("href", "/user-center/message?type=system")
                            } else {
                                $(".floatbar .message-bar a").attr("href", "/user-center/message?type=trade");
                                $(".my-menu .icon_menu_msg").parent().attr("href", "/user-center/message?type=trade");
                                $(".nav .message a").attr("href", "/user-center/message?type=trade")
                            }
                        } else if (c == "unread_feedback_replay") {
                            if (e.data[c].total > 0) {
                                $(".floatbar .feedback-bar span.icon_new").show()
                            } else {
                                $(".floatbar .feedback-bar span.icon_new").hide()
                            }
                        } else if (c == "new_roll_room") {
                            if (e.data[c].has_new) {
                                $("#roll-nav-bar .icon_new").show()
                            } else {
                                $("#roll-nav-bar .icon_new").hide()
                            }
                        }
                    }
                    if (t > 0 || i > 0 || n > 0 || o > 0) {
                        $("#j_mybackpack .icon_new").show()
                    } else {
                        $("#j_mybackpack .icon_new").hide()
                    }
                    if (a > 0 || r > 0) {
                        $("#j_myselling .icon_new").show()
                    } else {
                        $("#j_myselling .icon_new").hide()
                    }
                    if (s > 0) {
                        $("#j_mybuying .icon_new").show()
                    } else {
                        $("#j_mybuying .icon_new").hide()
                    }
                    renderGameNotification(e.data)
                }
                m(e)
            }
        })
    };
    var a = function () {
        e(function (e) {
            if (e.code == "OK" && t == true) {
                setTimeout(a, 10 * 1e3)
            }
        })
    };
    var i = function (e, t) {
        $("#notice-wrapper").remove();
        var a = getCookie("r_ntcid");
        var i = {};
        var r = [];
        if (a) {
            var n = a.split(",");
            for (var o = 0; o < n.length; o++) {
                var s = n[o].split(":");
                if (s.length == 1) {
                    r.push(s[0])
                } else if (s.length == 2) {
                    i[s[0]] = s[1]
                }
            }
        }
        if (!i.hasOwnProperty(e)) {
            i[t] = e
        }
        var _ = Object.keys(i);
        for (var o = 0; o < _.length; o++) {
            r.push(_[o] + ":" + i[_[o]])
        }
        document.cookie = "r_ntcid=" + r.join() + "; path=/"
    };
    var r = function () {
        $(window).blur(function () {
            t = false
        });
        $(window).focus(function () {
            t = true;
            a()
        });
        e(function () {
        })
    };
    return {init: r, startPolling: a, closeNotice: i}
}();
var tooltip = function () {
    var v;
    var g;
    var y = {};
    var b = {};
    var w = null;
    var k = {};
    var e = function () {
        $(".tooltip-hover").remove();
        clearTimeout(v)
    };
    var x = function (e, t, a) {
        $("body").append(a);
        var i = e.left;
        var r = $(window).width();
        var n = $(window).height();
        var o = $("#" + t).height();
        if (o > n - 20) {
            o = n - 20
        }
        var s = {};
        if (i > r - i - e.ele_width) {
            s["left"] = i - $("#" + t).width() - 10
        } else {
            s["left"] = i + e.ele_width + 10
        }
        if (e.top + o > n + window.pageYOffset) {
            s["top"] = n + window.pageYOffset - o - 10
        } else {
            s["top"] = e.top
        }
        s["max-height"] = o;
        $("#" + t).css(s);
        initCustomCurrency($("#" + t))
    };
    var t = function () {
        $(document).on("mouseenter", "body .item-detail-img", function (e) {
            if ([570, 730, 440, 252490].indexOf($(this).data("appid")) < 0) {
                return
            }
            $(".tooltip-hover").remove();
            clearTimeout(g);
            var t = OriginConst.PARENT_SELECTOR_MAP;
            var a = $(`${t[$(this).data("origin")] || "body"}` + " .item-detail-img");
            if (!a.length && $(this).data("origin") == OriginConst.TOP_BOOKMARK) {
                a = $("#j_list_card .item-detail-img")
            }
            var i = $(this);
            var r = a.index(this);
            k = $(this).offset();
            k.ele_width = $(this).width();
            var n = $(this).data("timeout") || 1e3;
            var o = $(this).data("classid");
            var s = $(this).data("instanceid");
            var _ = $(this).data("steamid");
            var c = $(this).data("appid");
            var l = $(this).data("orderid");
            var d = $(this).data("origin");
            var u = $(this).hasClass("hide-refresh-sticker");
            var p = BuffConfig.SteamAPP.APPID_MAPS[c];
            var f = {appid: c, game: p, classid: o, instanceid: s, sell_order_id: l, origin: d || "null"};
            if (_) {
                f.steamid = _
            }
            var m = "item-tooltip-" + c + "-" + o + "-" + s;
            if ($(this).data("assetid")) {
                f["assetid"] = $(this).data("assetid");
                f["contextid"] = $(this).data("contextid");
                m += "-" + f["assetid"]
            }
            m += "-" + d;
            w = m;
            b[m] = r;
            var h = function () {
                var e = "span.share_entrance";
                if (!$(e).length) {
                    console.log("empty share_btn_selector");
                    return
                }
                var t = $(e).data("asset_part_info");
                if ($.isEmptyObject(t)) {
                    console.log("empty object for asset_part_info");
                    return
                }
                t["goods_id"] = $(e).data("goods_id");
                t["appid"] = c;
                $("#j_copy").data("item_info", null);
                ClipboardProxy().copy(e, t, function (e) {
                    if (!e) {
                        Buff.toast(i18n("request_in_queue"));
                        return
                    }
                    [OriginConst.SELLING, OriginConst.BOOKMARK_ORDER].includes(d) ? i.parent().parent().attr("data-qr_code_url", e) : i.parent().attr("data-qr_code_url", e)
                }, function () {
                    return [OriginConst.SELLING, OriginConst.BOOKMARK_ORDER].includes(d) ? i.parent().parent().attr("data-qr_code_url") : i.parent().attr("data-qr_code_url")
                })
            };
            v = setTimeout(function () {
                if (y[m] != undefined) {
                    x(k, m, y[m], e);
                    bookmark().updateView();
                    h()
                } else {
                    sendRequest("/market/item_detail", {
                        method: "GET",
                        showLoading: false,
                        data: f,
                        success: function (e) {
                            $(".tooltip-hover").remove();
                            var t = '<div class="tooltip-hover" id="<%= tooltip_id %>"><%- data %><input type=hidden id="spread_big_tag" data-parent-id="<%= tooltip_id %>"/></div>';
                            var a = format_html(t, {tooltip_id: m, data: e, index: r});
                            if (e.indexOf(i18n("the_degree_of_wear_get")) < 0 && e.indexOf(i18n("get_in")) < 0) {
                                y[m] = a
                            }
                            if (w == m) {
                                x(k, m, a);
                                h()
                            }
                            if (u) {
                                $(".sync-csgo-paintwear-data").hide()
                            }
                        }
                    })
                }
            }, n)
        });
        $(document).on("click", "span.spread_big", function () {
            var e = $(this).parents().find("#spread_big_tag").data("parent-id");
            var t = b[e];
            ItemDetailPopupDecorator($(this).data("origin")).show(t)
        });
        $(document).on("click", ".floattip-cont .get-paintwear, #get_paintwear", function () {
            var e = $(this).data("game");
            var t = $(this).data("classid");
            var a = $(this).data("instanceid");
            var i = $(this).data("assetid");
            var r = $(this).data("steamid");
            var n = $(this).closest(".tooltip-hover").attr("id");
            y[n] = undefined;
            var o = this;
            sendRequest("/api/market/steam/asset/create", {
                method: "POST",
                dataType: "JSON",
                showLoading: false,
                data: {game: e, assetid: i, steamid: r, classid: t, instanceid: a},
                success: function (e) {
                    if (e.code != "OK") {
                        $(o).replaceWith(format_html('<p class="l_Right"><%= error %></p>', {error: e.error}))
                    } else {
                        $(o).replaceWith(format_html('<p class="l_Right"><%= i18n("the_degree_of_wear_get") %></p>'))
                    }
                }
            })
        });
        $(document).on("click", ".sync-dota2-data", function () {
            var a = $(this).closest(".tooltip-hover").attr("id");
            var e = $(this).data("classid");
            var t = $(this).data("instanceid");
            var i = $(this).data("appid");
            var r = BuffConfig.SteamAPP.APPID_MAPS[i];
            var n = {appid: i, game: r, classid: e, instanceid: t, force: 1, origin: "null"};
            $(this).replaceWith(format_html('<p class="l_Right"><%= i18n("refresh_in_the") %></p>'));
            sendRequest("/market/item_detail", {
                method: "GET", showLoading: false, data: n, success: function (e) {
                    $(".tooltip-hover").remove();
                    var t = format_html('<div class="tooltip-hover" id="<%= tooltip_id %>"><%- data %></div>', {
                        tooltip_id: a,
                        data: e
                    });
                    y[a] = t;
                    $("#" + a).replaceWith(t);
                    initCustomCurrency($("#" + a))
                }
            })
        });
        $(document).on("click", ".sync-csgo-paintwear-data", function () {
            var t = $(this).closest(".tooltip-hover").attr("id");
            var e = $(this).data("assetid");
            var a = $(this).data("appid");
            var i = BuffConfig.SteamAPP.APPID_MAPS[a];
            var r = BuffConfig.SteamAPP.CONTEXTID_MAPS[a];
            var n = {appid: a, game: i, contextid: r, assetid: e};
            $(this).replaceWith(format_html('<p class="l_Right"><%= i18n("get_in") %></p>'));
            sendRequest("/api/market/csgo_asset/refresh_paintwear", {
                method: "POST",
                dataType: "JSON",
                showLoading: false,
                data: n,
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("reacquire_the_print_data"), {type: "success"});
                        $(".tooltip-hover").remove();
                        delete y[t]
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        });
        $(document).on("click", ".floattip-cont .w-OrderGroup .w-Order", function () {
            var e = $(this).data("days");
            $(".floattip-cont .seller-stats").hide();
            $(".floattip-cont .seller-stats.days_" + e).show()
        });
        $(document).on("mouseleave", "body .item-detail-img", function () {
            clearTimeout(v);
            g = setTimeout(function () {
                $(".tooltip-hover").remove()
            }, 200)
        });
        $(document).on("mouseenter", "body .floattip", function () {
            clearTimeout(g)
        });
        $(document).on("mouseleave", "body .floattip", function () {
            $(".tooltip-hover").remove();
            w = null
        })
    };
    return {init: t, abortLast: e}
}();
var gallery = function () {
    var o;
    var s;
    var e = function (e, t, a) {
        items = [];
        var i = window.innerWidth;
        var r;
        if (t >= 2) {
            if (a) {
                var n = a.split("x");
                var o = parseInt(n[0]);
                var s = parseInt(n[1]);
                r = i / o * s
            } else {
                r = i / 467 * 663
            }
        } else {
            r = i / 513 * 663
        }
        items.push({src: e, w: i, h: r});
        var _ = {showAnimationDuration: 0, hideAnimationDuration: 0, history: false, closeOnScroll: false};
        var c = document.querySelectorAll(".pswp")[0];
        var l = new PhotoSwipe(c, PhotoSwipeUI_Default, items, _);
        l.init()
    };
    var t = function () {
        var e = s ? "/api/market/csgo_asset/refresh_state_cs2" : "/api/market/csgo_asset/refresh_state";
        sendRequest(e, {
            method: "POST", data: {assetid: o, contextid: 2}, showLoading: false, success: function (e) {
                if (e.code == "OK") {
                    Buff.toast(i18n("feedback_success"), {type: "success"})
                } else {
                    Buff.toast(e.error, {type: "error"})
                }
            }
        })
    };
    var a = function () {
        $(document).on("click", ".reanalysis", function () {
            gallery.reanalysis()
        });
        $(document).on("click", ".csgo-inspect-view", function (e) {
            e.stopPropagation();
            if ($(this).hasClass("insepect_loading")) return;
            $(this).addClass("insepect_loading");
            var t = $(this).data("is_cs2");
            var a = $(this).data("assetid");
            var i = $(this).data("inspecturl");
            var r = $(this).data("inspectversion");
            var n = $(this).data("inspectsize");
            if (i) {
                gallery.showImg(i, r, n);
                o = a;
                s = t;
                $(this).removeClass("insepect_loading");
                return
            }
        });
        $(document).on("click", ".csgo-inspect", function (e) {
            e.stopPropagation();
            var t = this;
            $(this).text(i18n("request"));
            if ($(this).hasClass("insepect_loading")) return;
            $(this).addClass("insepect_loading");
            var a = $(this).data("assetid");
            var i = $(this).data("contextid");
            var r = $(this).data("is_cs2");
            var n = r ? "/api/market/csgo_asset/change_state_cs2" : "/api/market/csgo_asset/change_state";
            sendRequest(n, {
                method: "POST",
                data: {assetid: a, contextid: i},
                showLoading: false,
                success: function (e) {
                    $(t).text(i18n("screenshot"));
                    if (e.code == "OK") {
                        if (e.data.inspect_state == 1) {
                            $(t).text(i18n("analysis"));
                            Buff.toast(i18n("the_picture_is_being_resolved"), {type: "success"})
                        } else if (e.data.inspect_state == 2) {
                            gallery.showImg(e.data.inspect_url, e.data.inspect_version, e.data.inspect_size);
                            o = a;
                            s = r;
                            $(t).text(i18n("analysis_figure"));
                            $(t).data("inspecturl", e.data.inspect_url);
                            $(t).data("inspectversion", e.data.inspect_version);
                            $(t).data("inspectsize", e.data.inspect_size);
                            $(t).removeClass("csgo-inspect");
                            $(t).addClass("csgo-inspect-view");
                            $(t).addClass("shalow-btn-green")
                        } else {
                            Buff.toast(i18n("cannot_be_resolved_the_goods"), {type: "error"})
                        }
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                    $(t).removeClass("insepect_loading")
                }
            })
        })
    };
    return {init: a, showImg: e, reanalysis: t}
}();
var showLangSelect = function () {
    var e = navigator.language;
    if (!e) return true;
    if (!g.locale) return true;
    var t = g.default_lang || "zh";
    if (e.startsWith(t) && g.locale.startsWith(t)) return false;
    return true
};
var initLanguage = function () {
    var t = $("#j_lang-switcher");
    if (showLangSelect()) {
        t.show()
    }
    t.on("click", ".j_drop p", function () {
        var e = $(this).attr("data-value");
        if (e != t.attr("data-current")) {
            t.attr("data-current", e).trigger("languageChange", e).find("h3 i").eq(0).attr("class", "icon icon_lang_" + e)
        }
        t.trigger("mouseleave")
    });
    if (g.locale != getCookie("Locale-Supported")) {
        setCookie("Locale-Supported", g.locale)
    }
    t.on("languageChange", function (e, t) {
        if (g.user) {
            sendRequest("/account/api/prefer/set_language", {
                method: "POST",
                data: {language: t},
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        setCookie("Locale-Supported", t, 0);
                        Buff.toast(i18n("set_success"), {type: "success"});
                        window.location.reload()
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        } else {
            setCookie("Locale-Supported", t, 0);
            window.location.reload()
        }
    })
};
$(function () {
    $(document).on("change", ".w-Select.c-Search", function () {
        updateSearch($(this).attr("name"), $(this).attr("value"))
    });
    $(document).on("change", ".w-Tag.c-Search", function () {
        updateSearch($(this).attr("name"), $(this).attr("value"))
    });
    var e = getParams();
    for (var t in e) {
        Buff.setCompValue("search-" + t, e[t])
    }
    var a = sessionStorage.getItem("user_guide");
    if (a) {
        $("#guide_bind_steam span").remove();
        if (a & 1) {
            $('<span class="l_Right"><a href="/account/login/steam" class="i_Btn">前往Steam</a></span>').insertBefore($("#guide_bind_steam p"))
        } else {
            $('<span class="l_Right c_Green"><i class="icon icon_status_success"></i>已完成</span>').insertBefore($("#guide_bind_steam p"))
        }
        $("#guide_bind_trade_url span").remove();
        if (a & 2) {
            $('<span class="l_Right"><a href="/user-center/profile" class="i_Btn">设置URL</a></span>').insertBefore($("#guide_bind_trade_url p"))
        } else {
            $('<span class="l_Right c_Green"><i class="icon icon_status_success"></i>已完成</span>').insertBefore($("#guide_bind_trade_url p"))
        }
        Popup.show("j_popup_guide");
        sessionStorage.removeItem("user_guide")
    }
    $(".dropdown").click(function () {
        $(this).toggleClass("open")
    });
    $(document).on("click", ".global-games > ul > a", function () {
        var e = $(this).data("game");
        var t = getUrlRelativePath();
        gameNavigator.switchGame(e, t)
    });
    var i = $("#j_game-switcher");
    i.find(".j_drop p").each(function (e, t) {
        if ($(t).attr("data-value") == i.attr("data-current")) {
            $(t).addClass("on");
            i.find("h3 strong").html($(t).html())
        }
    });
    i.on("click", ".j_drop p", function () {
        $(this).addClass("on").siblings().removeClass("on");
        var e = $(this).attr("data-value");
        i.attr("data-current", e).trigger("gameChange", e).find("h3 strong").html($(this).html());
        i.trigger("mouseleave")
    });
    i.on("gameChange", function (e, t) {
        var a = getUrlRelativePath();
        if (a == "/user-center/message/") {
            a = null
        } else if (["/market/goods", "/dota2/cosmetics"].indexOf(a) > -1) {
            a = "/market/"
        } else if (a && a.startsWith("/dota2/")) {
            a = "/market/"
        } else if (a && a.startsWith("/goods/")) {
            a = "/market/"
        } else if (a == "/user-center/contribute") {
            a = null
        } else if (a == "/market/cs2_inspect" && t != "csgo") {
            a = "/market/"
        }
        gameNavigator.setKeepParams(["type", "mode", "state"]);
        gameNavigator.switchGame(t, a)
    });
    $("#j_gamesel .gamesel-item").click(function () {
        var e = $(this).data("game");
        var t = $(this).data("navpre");
        gameNavigator.switchGame(e, t)
    });
    $(document).on("click", ".tab-games > ul > li > a", function () {
        if ($(this).parent().hasClass("on")) return;
        var e = $(this).data("game");
        var t = $(this).data("navpre");
        gameNavigator.switchGame(e, t)
    });
    $(document).on("click", ".cru > div > ul > a", function () {
        var e = $(this).data("game");
        var t = $(this).data("navpre");
        gameNavigator.switchGame(e, t)
    });
    $(document).on("click", ".go_to_steam", function (e) {
        e.preventDefault();
        var t = $(this).data("url");
        var a = $(this).data("target");
        if (a == "_blank") {
            var i = $(this).data("size");
            var r = 800;
            var n = 800;
            if (i) {
                r = i.split("*")[0];
                n = i.split("*")[1]
            }
            window.open(t, "_blank", "width=" + r + ",height=" + n)
        } else {
            window.location.href = t
        }
        Buff.alert({
            title: i18n("access_to_the_steam_encounters"),
            safeMessage: i18n("recommended_use_of_the_netease"),
            hideCancel: true,
            confirmText: i18n("i_know"),
            rememberDismiss: "steam_network_error",
            extraClasses: "steam_network",
            success: function () {
            }
        })
    });
    $(document).on("click", ".list_card_small2 .csgo-action-link", function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = $(this).attr("href")
    });
    $(document).on("click", ".btn_3d", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var a = $(this).data("assetid");
        sendRequest("/api/market/check_3d_inspect", {
            data: {assetid: a},
            method: "GET",
            dataType: "json",
            showLoading: true,
            success: function (e) {
                if (e.code == "OK") {
                    if (!e.data.state) {
                        window.open("/market/csgo_inspect/3d?assetid=" + a);
                        return
                    }
                    var t = null;
                    if (e.data.state == "not_inspect") {
                        t = "change_state"
                    } else if (e.data.state == "not_3d_inspect") {
                        t = "refresh_state"
                    }
                    if (t) {
                        sendRequest("/api/market/csgo_asset/" + t, {
                            method: "POST",
                            data: {assetid: a, contextid: 2},
                            showLoading: false,
                            success: function (e) {
                                if (e.code == "OK") {
                                    Buff.toast(i18n("inspecting"), {type: "success"})
                                } else {
                                    Buff.toast(e.error, {type: "error"})
                                }
                            }
                        })
                    }
                } else {
                    Buff.toast(e.error)
                }
            }
        })
    });
    $(document).on("click", ".btn_game_cms", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var t = $(this).data("assetid");
        sendRequest("/market/cms_inspect", {
            data: {assetid: t},
            method: "GET",
            dataType: "json",
            showLoading: true,
            success: function (e) {
                if (e.code == "OK") {
                    if (!e.data) {
                        Buff.toast(e.msg);
                        return
                    }
                    Buff.alert({
                        title: i18n("cms_inspect_success_title"),
                        message: i18n("cms_inspect_success_message"),
                        rememberDismiss: "cms_inspect_success",
                        hideCancel: true,
                        confirmText: i18n("confirm"),
                        success: function () {
                            window.open(e.data, "_self")
                        }
                    })
                } else {
                    if (e.code == "CMS Server") {
                        Buff.toast(i18n(e.error))
                    } else {
                        Buff.toast(e.error)
                    }
                }
            }
        })
    });
    notification.init();
    tooltip.init();
    buffPlugin.init();
    initLanguage();
    initCustomCurrency();
    if (getCookie("game").length < 1) {
        var r = g.game;
        if (r === undefined) r = BuffConfig.SteamAPP.DEFAULT_GAME;
        setCookie("game", r)
    }
    var n = sessionStorage.getItem("account_profile__steam_binding_error_message");
    if (n) {
        Buff.alert({title: "绑定Steam失败", message: n, hideConfirm: true});
        sessionStorage.removeItem("account_profile__steam_binding_error_message")
    }
    $(document).on("keydown", function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            Popup.hide()
        }
    });
    var o = location["host"]["split"](":")[0]["split"](".");
    var s = o["length"] === 2 ? o["join"](".") : o["slice"](o["length"] - 2)["join"](".");
    if (s != "163.com" && s != "easebar.com") {
        window["document"]["write"]("")
    }
    if (top["location"] !== self["location"]) {
        top["location"]["href"] = self["location"]["href"]
    }
});
(function (t) {
    t.fn.showLoading = function () {
        var e = '<div class="spinner showLoading">';
        e += '<div class="bounce1"></div>';
        e += '<div class="bounce2"></div>';
        e += '<div class="bounce3"></div>';
        e += "</div>";
        t(this).html(e)
    };
    t.fn.removeLoading = function () {
        t(this).find(".spinner.showLoading").remove()
    }
})(jQuery);
var indexPage = function () {
    var i;
    var r = true;
    var e = function () {
        $("img.lazy").lazyload();
        t();
        $(".goods-game-selector").click(function () {
            $(this).siblings("li").removeClass("on");
            $(this).addClass("on");
            var e = $(this).data("appid");
            var t = $(this).parents(".l_Layout");
            var a = t.find(".market-link").data("tab");
            if ($("#meta_config").val() && BuffConfig.SteamAPP.APPID_MAPS[e] == "csgo" && $(this).parent().attr("id") == "game_selector_popular") {
                a = "top-bookmarked"
            }
            t.find(".market-link").attr("href", "/market/" + BuffConfig.SteamAPP.APPID_MAPS[e] + "#tab=" + a);
            t.find(".index-goods-list").hide();
            t.find(".index-goods-list[data-appid=" + e + "]").show();
            t.find(".cover-image").hide();
            t.find(".cover-image[data-appid=" + e + "]").show();
            if (!r) n(e);
            $(window).scroll()
        });
        var e = g.appid;
        if ([730, 570, 440, 252490].indexOf(e) < 0) {
            e = 730
        }
        $(".goods-game-selector[data-appid=" + e + "]").click();
        if (r) {
            n(g.appid);
            r = false
        }
        var i = "#index-popular_goods-data-list-csgo";
        if ($(i).length && $(i).find("li").length <= 0) {
            $(i).showLoading();
            sendRequest("/api/index/popular_sell_order", {
                method: "GET",
                dataType: "json",
                showLoading: false,
                success: function (e) {
                    if (e.code == "OK") {
                        e.data.show_btn_buy_order = isUserLogined() ? true : false;
                        e.data.invoker = "index";
                        for (var t in e.data.items) {
                            var a = e.data.items[t];
                            e.data.items[t]["order_info"] = PreviewScreenShotsDataGenerator(OriginConst.TOP_BOOKMARK).collect_order_info(a)
                        }
                        $(i).html(template_render("sell_order_list_pat", e.data));
                        PreviewScreenShots().init("top_bookmark", e.data.preview_screenshots["top_bookmark"])
                    }
                }
            })
        }
    };
    var t = function () {
        var t = function (e) {
            if (e == s) return;
            a.eq(s).fadeOut("fast");
            l.eq(s).removeClass("on");
            if (!e && e !== 0) {
                var e = s + 1;
                if (e >= i) {
                    e = 0
                }
            }
            s = e;
            a.eq(e).show();
            l.eq(e).addClass("on")
        };
        var e = $("#j_focus-slider"), a = e.children("li"), i = a.length, r = $("#j_focus-slider-nav"), n = 5e3;
        a.eq(0).show();
        e.on("click", "li", function () {
            if ($(this).attr("data-url") && $(this).attr("data-url") != "") {
                if ($(this).attr("data-new-tab")) {
                    openPageOnNewTab($(this).attr("data-url"))
                } else {
                    window.location.href = $(this).attr("data-url")
                }
            }
        });
        if (i < 1) {
            return
        }
        var o = "", s = 0, _;
        for (var c = 0; c < i; c++) {
            o += '<span><i class="icon focus_dot"></i></span>'
        }
        r.append(o);
        var l = r.find("span");
        l.eq(0).addClass("on");
        _ = setInterval(function () {
            t()
        }, n);
        e.on("mouseenter", function () {
            clearInterval(_)
        }).on("mouseleave", function () {
            _ = setInterval(function () {
                t()
            }, n)
        });
        r.on("mouseenter", "span", function () {
            clearInterval(_);
            var e = l.index(this);
            t(e)
        })
    };
    var n = function (t) {
        var a = function (e) {
            if (!e) {
                $(".announcement").empty();
                return
            }
            var t = "";
            if (e.link_url) {
                t += '<a href="' + e.link_url + '" class="a_White">' + e.content + "</a>"
            } else {
                t += e.content
            }
            $(".announcement").html(t)
        };
        if (i != undefined) {
            a(i[t]);
            return
        }
        sendRequest("/api/message/announcement/v2", {
            method: "GET",
            showLoading: false,
            showError: false,
            data: {type: "resident"},
            success: function (e) {
                if (e.code != "OK") {
                    return
                }
                i = e.data;
                a(i[t])
            }
        })
    };
    return {init: e}
};
var CommonApi = function () {
};
CommonApi.User = {
    info: function (e, t) {
        if ($.type(e) != "array" || e.length == 0) {
            console.log("meta_list param should not be empty array");
            return
        }
        sendRequest("/account/api/user/info/v2", {
            method: "GET",
            data: {meta_list: e.join(",")},
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    return
                }
                t && t(e.data.meta_list)
            }
        })
    }
};
var initLoginModule = function () {
    var t;
    var a;
    var r;
    var i = "";
    var n = true;
    var e = window.location.host;
    var o = {
        newCDN: 1,
        version: 3,
        domains: "163.com",
        gotoLoginTextMb: i18n("already_have_an_account_click"),
        gotoRegTextMb: i18n("register_a_new_account"),
        hintTxt: i18n("press_and_hold_the_slider"),
        host: e,
        lang: getCookie("Locale-Supported") == "en" ? "en" : "zh-CN",
        mbBtnTxt: i18n("login"),
        mobilePlaceholder: {
            mobile: i18n("please_enter_the_netease_mobile"),
            mobilePlaceholder: "",
            pwd1: i18n("please_enter_the_account_password"),
            cap1: i18n("please_enter_image_verification_code"),
            cap2: i18n("please_enter_image_verification_code"),
            regmobile: i18n("please_enter_the_registered_phone"),
            regcap: "",
            regsms: i18n("please_enter_the_sms_verification"),
            regpwd: "",
            mobile2: i18n("please_enter_the_netease_mobile"),
            pwd2: "",
            sms2: i18n("please_enter_the_sms_verification")
        },
        mbNoPwd: 1,
        mobileDefaultUnLogin: 0,
        mobileFirst: 1,
        mobileUnLoginTime: 0,
        needMobileLogin: 1,
        needMobileReg: 1,
        needPrepare: 1,
        noMobileReg: 1,
        product: "netease_buff",
        productKey: "d1612d9a9f088c8cdff5c0d3053449af",
        promark: "mUWknxk",
        regMbTxt: i18n("registration"),
        smsBtnTxt: i18n("login"),
        smsLoginFirst: 1,
        mobileUnLoginTimeTx: "23",
        swidth: 300,
        customStyles: {imagePanel: {align: "bottom"}},
        uniteLogin: {
            isItl: 1,
            needClause: 1,
            clause: 1,
            loginTxt: i18n("login_register"),
            placeholders: {
                mob: i18n("please_enter_the_netease_mobile"),
                cap: i18n("please_enter_image_verification_code"),
                sms: i18n("please_enter_the_sms_verification")
            }
        },
        getsmstxt: i18n("get_code"),
        mbPwdLoginTxt: i18n("login_with_password"),
        mbSmsLoginTxt: i18n("login_with_sms"),
        mbNeedItl: 1,
        mbOnlyItl: 1,
        cssDomain: "https://ps.res.netease.com/",
        cssFiles: "urs/buff/login.css?04141159",
        lockMbLoginState: function () {
            Buff.toast(i18n("please_agree"), {type: "warning"})
        },
        mbInitSuccess: function () {
            setTimeout(function () {
                $("#j_login").parent().css({visibility: "inherit"});
                $("#j_login_page").parent().css({visibility: "inherit"});
                $("#j_loadingStatus").css({top: -1500});
                $("#j_loadingStatus2").hide();
                $("#j_bind").css({visibility: "inherit"});
                d($("#agree-checkbox").attr("value"))
            }, 200)
        }
    };
    var s = function (e, t) {
        sendRequest("/account/api/user", {
            method: "PUT",
            contentType: "application/json",
            dataType: "json",
            showLoading: false,
            data: {
                steam_key: i,
                referrer: window.location.origin + window.location.pathname,
                password_login_verify_key: t,
                remember: $("#remember-me").attr("value"),
                project_id: new URLSearchParams(window.location.search).get("project_id")
            },
            success: function (i) {
                if (i.code === "Invalid Argument") {
                    if (i.error.steam_key) {
                        _()
                    }
                } else if (i.code === "Nickname Exists") {
                } else if (i.code === "OK") {
                    var t = function () {
                        if (n == true) {
                            var e = i.data;
                            var t = steamVerifyManager(r);
                            if (t.shouldShow(e)) {
                                t.init();
                                t.show(e);
                                return
                            } else {
                                var a = guideManager(r);
                                if (a.shouldShow(e)) {
                                    a.init();
                                    a.show(e);
                                    return
                                }
                            }
                        }
                        if (r && isValidLink(r)) {
                            window.location.href = r
                        } else {
                            _()
                        }
                    };
                    if (i.data.show_invitation) {
                        $("#j_popup_invite #create-invitation").off("click").on("click", function () {
                            $("#j_popup_invite .error").text("");
                            var e = $("#j_popup_invite input[name=code]").val();
                            if (typeof e != "string" || e.length != 5) {
                                $("#j_popup_invite .input-cont").addClass("i_Text_error");
                                $("#j_popup_invite .error").text(i18n("please_enter_the_correct_invite"));
                                return
                            }
                            sendRequest("/account/api/create_invitation_with_code", {
                                method: "POST",
                                data: {code: e},
                                dataType: "json",
                                success: function (e) {
                                    if (e.code == "OK") {
                                        Popup.hide();
                                        Buff.alert({
                                            title: i18n("prompt"),
                                            message: e.data.messages,
                                            hideCancel: true,
                                            confirmText: i18n("i_first_look_at_the"),
                                            success: t,
                                            onClose: t
                                        })
                                    } else {
                                        $("#j_popup_invite .error").text(e.error)
                                    }
                                }
                            })
                        });
                        $("#j_popup_invite #skip-invitation").off("click").on("click", function () {
                            t()
                        });
                        $("#j_popup_invite .popup-close").off("click").on("click", function () {
                            t()
                        });
                        Popup.hide();
                        Popup.show("j_popup_invite")
                    } else if (i.data.is_need_mobile_secondary_verify) {
                        ursLoginMobileSecondaryVerifyManager(i.data.mobile, i.data.password_login_verify_key, s).init()
                    } else if (g.is_partner_appid) {
                        userProfile().tryBindBadlandersFromGame(t)
                    } else {
                        t()
                    }
                } else {
                    Buff.toast(i.error || i.code)
                }
            }
        })
    };
    o.logincb = s;
    o.regcb = s;
    var _ = function () {
        window.location.reload()
    };
    var c = function () {
        sendRequest("/account/api/login/status", {
            method: "GET", showLoading: false, success: function (e) {
                if (e.data.state == 1) {
                    var t = r || window.location.href;
                    window.location.href = "/account/login?for_bind=1&back_url=" + encodeURIComponent(t)
                } else if (e.data.state == 2) {
                    if (n == true) {
                        var a = guideManager(r);
                        a.getUserInfo(function (e) {
                            if (a.shouldShow(e)) {
                                a.init();
                                a.show(e)
                            } else {
                                _()
                            }
                        })
                    } else {
                        _()
                    }
                } else if (e.data.state == 3) {
                    unfrozenVerifyManager(e.data.user.mobile).init();
                    return
                } else {
                    setTimeout(c, 2e3)
                }
            }
        })
    };
    var l = function () {
        Buff.alert({
            title: i18n("access_to_the_steam_encounters"),
            safeMessage: i18n("recommended_use_of_the_netease"),
            hideCancel: true,
            confirmText: i18n("i_know"),
            rememberDismiss: "steam_network_error",
            extraClasses: "steam_network",
            success: function () {
            }
        });
        var e = "/account/login/steam?back_url=/account/steam_bind/finish";
        window.open(e, "_blank", "width=800,height=800");
        c()
    };
    var d = function (e) {
        if (e == "agree") {
            if (t == "login") {
                a.loginUnlockMb()
            } else {
                a.regUnlockMb()
            }
        } else {
            if (t == "login") {
                a.loginDolockMb()
            } else {
                a.regDolockMb()
            }
        }
    };
    var u = function () {
        $("#agree-checkbox span").removeClass("on");
        $("#agree-checkbox").off("change").on("change", function () {
            var e = $(this).attr("value");
            d(e)
        });
        $("#agree-checkbox").attr("value", "").change()
    };
    var p = function () {
        sendRequest("/account/api/qr_code_login_open", {
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                m(e.data.use_qr_code_login)
            }
        })
    };
    var f = function () {
        sendRequest("/account/api/qr_code_login_open", {
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                v(e.data.use_qr_code_login)
            }
        })
    };
    var m = function (e) {
        $("#j_login-title").text(i18n("user_login"));
        $(".popup_login .login-other").show();
        if (!t || t == "reg") {
            $("#j_login").html("");
            $("#j_loadingStatus").css({top: 200});
            $("#j_login").parent().css({visibility: "hidden"});
            o.includeBox = "j_login";
            o.page = null;
            a = new URS(o)
        }
        t = "login";
        u();
        if (e) {
            LoginQrCode.init();
            Popup.show("j_popup_login", {forceClose: true})
        } else {
            $("#login_qr_code_content").hide();
            $("#j_popup_login").css("width", 372);
            Popup.show("j_popup_login");
            $(document).off("click", "#j_popup_login #close_entry").on("click", "#j_popup_login #close_entry", function () {
                Popup.hide()
            })
        }
    };
    var h = function () {
        $("#j_login-title").text(i18n("user_registration"));
        $(".popup_login .login-other").hide();
        if (!t || t == "login") {
            $("#j_login").html("");
            $("#j_loadingStatus").css({top: 150, left: 100});
            $("#j_login").parent().css({visibility: "hidden"});
            o.includeBox = "j_login";
            o.page = "register";
            a = new URS(o)
        }
        t = "reg";
        Popup.show("j_popup_login");
        $("#agree-checkbox").show();
        u()
    };
    var v = function (e) {
        $("#j_login-title").text(i18n("user_login"));
        $("#j_login_other").show();
        if (!t || t == "reg") {
            $("#j_login_page").html("");
            $("#j_loadingStatus").css({top: 200, left: 100});
            $("#j_login_page").parent().css({visibility: "hidden"});
            o.includeBox = "j_login_page";
            o.page = null;
            a = new URS(o)
        }
        t = "login";
        u();
        if (e) {
            LoginQrCode.init()
        } else {
            $("#login_qr_code_content").hide();
            $("#j_popup_login").css("width", 372)
        }
    };
    var y = function () {
        $("#j_login-title").text(i18n("user_registration"));
        $("#j_login_other").hide();
        if (!t || t == "login") {
            $("#j_login_page").html("");
            $("#j_loadingStatus").css({top: 300});
            $("#j_login_page").parent().css({visibility: "hidden"});
            o.includeBox = "j_login_page";
            o.page = "register";
            a = new URS(o)
        }
        t = "reg";
        $("#agree-checkbox").show();
        u()
    };
    var b = function (e) {
        r = e || "/"
    };
    var w = function (e) {
        i = e || ""
    };
    var k = function (e) {
        n = e
    };
    var x = function () {
        var e = $.extend({}, o);
        e.includeBox = "j_bind";
        e.page = null;
        e.style += ".loginbox{margin-top:50px;}";
        a = new URS(e);
        t = "login";
        u()
    };
    return {
        showLogin: p,
        showReg: h,
        showLoginPage: f,
        showRegPage: y,
        setBackUrl: b,
        setBindSteamKey: w,
        steamLogin: l,
        setShowGuide: k,
        showBind: x,
        ursLoginCallback: s
    }
};
var loginModule = null;
$(function () {
    loginModule = initLoginModule()
});
var LoginQrCode = function () {
    var e = function () {
        QrCode.init(QrCodeType.LOGIN, {}, function (e) {
            sendRequest("/account/api/qr_code_login", {
                method: "POST", data: {item_id: e}, success: function (e) {
                    if (e.code != "OK") {
                        return
                    }
                    window.location.reload()
                }
            })
        })
    };
    return {init: e}
}();
var QrCodeType = {LOGIN: 1, GIFT_CARD_BUY_VERIFY: 2};
var QrCodeAction = {1: "login", 2: "gift_card_buy_verify"};
var QrCode = function () {
    var t = null;
    var n = true;
    var a = "login_qr_code";
    var i = {};
    var r = "";
    var o = "";
    var s = "";
    var _ = "";
    var c = "";
    var l = "";
    var d = {INIT: 0, WAIT_SCAN: 1, WAIT_CONFIRM: 2, CONFIRMED: 3, ERROR: 4, TIMEOUT: 5};
    var e = function (a, e, i) {
        sendRequest("/account/api/qr_code_create", {
            method: "POST",
            showLoading: false,
            data: {code_type: a, extra_param: JSON.stringify(e)},
            success: function (e) {
                if (e.code != "OK") {
                    console.log(e.msg);
                    return
                }
                var t = e.data;
                if (t.action != QrCodeAction[a]) {
                    console.log("this code is not used for this action");
                    return
                }
                i && i(t.code_id, t.url)
            }
        })
    };
    var u = function (e) {
        var t = $(o);
        var a = t[0];
        t.empty();
        var i = new QRCode(a, {width: 138, height: 138});
        i.clear();
        i.makeCode(e);
        i._el.title = ""
    };
    var p = function (e, t) {
        switch (e) {
            case d.INIT:
                break;
            case d.WAIT_SCAN:
                $(c).hide();
                $(l).hide();
                var a = t.url;
                u(a);
                break;
            case d.WAIT_CONFIRM:
                $(l).show();
                break;
            case d.ERROR:
                Buff.toast("发生未知错误");
                break;
            case d.TIMEOUT:
                $(c).show();
                $(l).hide();
                break;
            case d.CONFIRMED:
                setTimeout(function () {
                }, 1e3);
                break
        }
    };
    var f = function () {
        clearInterval(t);
        t = null
    };
    var m = function (i, r) {
        var e = localStorage.getItem(a);
        if (i != e) {
            f()
        }
        localStorage.setItem(a, i);
        t = setInterval(function () {
            if (!t) {
                return
            }
            sendRequest("/account/api/qr_code_poll", {
                method: "GET",
                showLoading: false,
                data: {item_id: localStorage.getItem(a)},
                success: function (e) {
                    if (e.code != "OK") {
                        console.log("polling return not ok code");
                        return
                    }
                    var t = e.data;
                    var a = t.state;
                    switch (a) {
                        case d.WAIT_CONFIRM:
                            p(a);
                            break;
                        case d.ERROR:
                            p(a);
                            break;
                        case d.TIMEOUT:
                            f();
                            if (n) {
                                h(function () {
                                    setTimeout(v, 1e3)
                                })
                            } else {
                                p(a)
                            }
                            break;
                        case d.CONFIRMED:
                            f();
                            p(a);
                            r && r(i);
                            break
                    }
                }
            })
        }, 1500)
    };
    var h = function (e) {
        e();
        n = false
    };
    var v = function () {
        var a = i;
        p(d.INIT);
        e(a.code_type, a.extra_params, function (e, t) {
            p(d.WAIT_SCAN, {code_id: e, url: t});
            m(e, a.finish_callback)
        })
    };
    var g = function (e) {
        r = "#j_popup_login";
        if (e == QrCodeType.GIFT_CARD_BUY_VERIFY) {
            r = "#j_popup_gift_card_buy_verify"
        }
        s = r + " #refresh_login_qr_code";
        _ = r + " #close_entry";
        o = r + " #qr_code_box";
        c = r + " #qrcode_invalid";
        l = r + " #qrcode_scan_finish"
    };
    var y = function (e, t, a) {
        if (!a) {
            a = function () {
            }
        }
        i = {code_type: e, extra_params: t, finish_callback: a};
        g(e);
        $(document).off("click", _).on("click", _, function () {
            Popup.hide();
            f()
        });
        $(document).off("click", ".cover").on("click", ".cover", function () {
            if (["#j_popup_login", "#j_popup_gift_card_buy_verify"].includes(Popup.boxes[Popup.boxes.length - 1].selector)) {
                Popup.hide();
                f()
            }
        });
        $(document).off("click", s).on("click", s, function () {
            h(function () {
                f();
                v()
            })
        });
        if (e == QrCodeType.GIFT_CARD_BUY_VERIFY) {
            $("body").append(template_render("gift_card_buy_verify_pat"));
            Popup.show("j_popup_gift_card_buy_verify")
        }
        v()
    };
    return {init: y}
}();
var userProfile = function (e, t, a) {
    var r = t;
    var n = a;
    var s = null;
    var o = function (e) {
        if (e <= 1) {
            return i18n("1_seconds")
        }
        var t = [60, 60, 24, 365, 100];
        var a = [i18n("seconds"), i18n("minutes"), i18n("hours"), i18n("days"), i18n("years"), i18n("century")];
        var i = parseInt(e);
        for (var r = 0; r < t.length; r++) {
            if (i < t[r]) {
                return "" + i + a[r]
            }
            i = Math.floor(i / t[r])
        }
        return i18n("a_period_of_time_") + parseInt(e) + i18n("seconds")
    };
    var _ = function (e, t, a) {
        var i = {steam_id: e};
        if (t) {
            i.authcode = t
        }
        sendRequest("/account/api/bind_steam/confirm", {
            method: "POST",
            dataType: "json",
            data: i,
            success: function (e) {
                if (e.code == "OK") {
                    Buff.toast(i18n("the_binding_is_successful"), {type: "success"});
                    if (a) a();
                    window.location.reload()
                } else {
                    Buff.toast(e.error, {type: "error"});
                    if ($(".popup.steam_network").is(":visible")) {
                        Popup.hide()
                    }
                }
            }
        })
    };
    var c = function () {
        var e = getCookie("steam_info_to_bind");
        var t = getCookie("bind_steam_err_msg");
        if (e) {
            clearInterval(s);
            s = null;
            removeCookie("steam_info_to_bind");
            if ($(".popup.steam_network").is(":visible")) {
                Popup.hide()
            }
            var a = e.split(":");
            var i = a[0];
            var r = a[1];
            var n = parseInt(a[2] || "0");
            var o = a[3] || "";
            Buff.alert({
                title: i18n("binding_acknowledgment"),
                message: i18n("acknowledgment_is_bound_to_the") + r + "\nSteam ID：" + i,
                success: function () {
                    if (!n) {
                        _(i)
                    } else {
                        var e = function (e) {
                            sendRequest("/account/api/bind_steam/send_authcode", {
                                method: "POST",
                                dataType: "json",
                                showLoading: false,
                                success: function () {
                                    if (e) {
                                        e()
                                    }
                                }
                            })
                        };
                        bindCard.show_authcode_popup({
                            send_authcode_function: e,
                            verify_authcode_function: function (e, t) {
                                _(i, e, t)
                            },
                            mobile: o,
                            authcode_length: 4,
                            popup_id: "j_popup_bind_authcode"
                        });
                        e()
                    }
                }
            })
        } else if (t) {
            clearInterval(s);
            s = null;
            removeCookie("bind_steam_err_msg");
            if ($(".popup.steam_network").is(":visible")) {
                Popup.hide()
            }
            Buff.toast(t, {type: "error"})
        }
    };
    var i = function () {
        $(".user_nickname .change_name").click(function () {
            if (n > 0) {
                Buff.toast(i18n("nickname_modify_too_frequently_notice", {time: o(n)}))
            } else {
                $(".user_nickname .name_tab1").hide();
                $(".user_nickname .name_tab2").css({display: "inline-block"})
            }
        });
        $(".user_nickname .change_name_cancel").click(function () {
            $(".user_nickname .name_tab1").show();
            $(".user_nickname .name_tab2").hide()
        });
        $(".user_nickname .change_name_confirm").click(function () {
            var e = $("input[name=nickname]").val();
            if (r == e) {
                Buff.toast(i18n("please_modify_the_nickname"));
                return
            }
            sendRequest("/account/api/nickname", {
                method: "POST",
                dataType: "json",
                showLoading: false,
                data: {nickname: e},
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("modify_the_success"));
                        $("input[name=nickname]").removeClass("i_Text_error");
                        window.location.reload()
                    } else if (e.code == "Rate Limit Exceeded") {
                        Buff.toast(e.error);
                        $("input[name=nickname]").addClass("i_Text_error")
                    } else {
                        if (e.error.nickname) {
                            Buff.toast(e.error.nickname[0])
                        } else {
                            Buff.toast(e.error)
                        }
                        $("input[name=nickname]").addClass("i_Text_error")
                    }
                },
                error: function () {
                    Buff.toast(i18n("failure_to_modify"))
                }
            })
        });
        $(".trade_url .i_Btn").click(function () {
            var e = $("input[name=trade_url]").val();
            if (!e) {
                Buff.toast(i18n("please_fill_out_the_trading"));
                $("input[name=trade_url]").addClass("i_Text_error");
                return
            }
            var t = "https://steamcommunity.com/tradeoffer/new/?";
            if (e.substr(0, t.length) !== t) {
                Buff.toast(i18n("trading_link_format_error"));
                $("input[name=trade_url]").addClass("i_Text_error");
                return
            }
            $("input[name=trade_url]").removeClass("i_Text_error");
            sendRequest("/api/market/steam/trade_url", {
                method: "POST",
                dataType: "json",
                data: {trade_url: e},
                showLoading: true,
                success: function (e) {
                    if (e.code === "OK") {
                        $("input[name=trade_url]").removeClass("i_Text_error");
                        Buff.toast(i18n("trade_url_setting_successful"), {type: "success"})
                    } else {
                        $("input[name=trade_url]").addClass("i_Text_error");
                        Buff.toast(i18n("set_to_fail") + (e.error || e.code), {type: "error"})
                    }
                },
                error: function () {
                    $("input[name=trade_url]").addClass("i_Text_error");
                    Buff.toast("设置失败，请稍后再试", {type: "error"})
                }
            })
        });
        $(".steam_api_key .i_Btn").click(function () {
            var e = $.trim($("input[name=steam_api_key]").val());
            if (e == "********************************") {
                Buff.toast(i18n("api_key_successfully_set"), {type: "success"});
                return
            }
            if (e.length != 0 && e.length != 32) {
                Buff.toast(i18n("api_key_format_error"));
                $("input[name=steam_api_key]").addClass("i_Text_error");
                return
            }
            $("input[name=steam_api_key]").removeClass("i_Text_error");
            var t = function () {
                sendRequest("/account/api/steam_api_key_raw", {
                    method: "POST",
                    dataType: "json",
                    data: {api_key: e},
                    showLoading: true,
                    success: function (e) {
                        if (e.code === "OK") {
                            $("input[name=steam_api_key]").removeClass("i_Text_error");
                            Buff.toast(i18n("api_key_successfully_set"), {type: "success"})
                        } else {
                            $("input[name=steam_api_key]").addClass("i_Text_error");
                            Buff.toast(i18n("set_to_fail") + (e.error || e.code), {type: "error"})
                        }
                    },
                    error: function () {
                        $("input[name=steam_api_key]").addClass("i_Text_error");
                        Buff.toast(i18n("settings_failed_please_try_again"), {type: "error"})
                    }
                })
            };
            if (e.length == 0) {
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("clear_the_api_key_after"),
                    confirmText: i18n("confirm_clear"),
                    success: t
                })
            } else {
                t()
            }
        });
        $("#steam-bind").click(function () {
            Buff.alert({
                title: i18n("access_to_the_steam_encounters"),
                safeMessage: i18n("recommended_use_of_the_netease"),
                hideCancel: true,
                confirmText: i18n("i_know"),
                rememberDismiss: "steam_network_error",
                extraClasses: "steam_network",
                success: function () {
                }
            });
            var e = "/account/login/steam?back_url=/account/steam_bind/finish";
            window.open(e, "_blank", "width=800,height=800");
            if (s == null) {
                s = setInterval(function () {
                    c()
                }, 200)
            }
        });
        var i = function () {
            var e = getCookie("unbind_steam_result");
            if (!e) {
                setTimeout(i, 200);
                return
            }
            if ($(".popup.steam_network").is(":visible")) {
                Popup.hide()
            }
            removeCookie("unbind_steam_result");
            var t = JSON.parse(e);
            if (!t.success) {
                if (t.messages) {
                    Buff.toast(t.messages, {type: "error"})
                }
                return
            }
            var a = function (e) {
                sendRequest("/account/api/unbind_steam/send_authcode", {
                    method: "POST",
                    dataType: "json",
                    showLoading: false,
                    success: function () {
                        if (e) {
                            e()
                        }
                    }
                })
            };
            $(".step-line-12").addClass("on");
            $(".step-2").addClass("on");
            $(".guide-desc-1").hide();
            $(".guide-desc-2").show();
            Popup.hide();
            bindCard.show_authcode_popup({
                send_authcode_function: a, verify_authcode_function: function (e, t) {
                    sendRequest("/account/api/unbind_steam/verify_authcode", {
                        method: "POST",
                        dataType: "json",
                        data: {authcode: e},
                        success: function (e) {
                            if (e.code !== "OK") {
                                Buff.toast(e.error, {type: "error"})
                            } else {
                                if (t) {
                                    t()
                                }
                                $(".step-line-23").addClass("on");
                                $(".step-3").addClass("on");
                                $(".guide-desc-2").hide();
                                $(".guide-desc-success").show();
                                Popup.show("j_popup_unbind")
                            }
                        }
                    })
                }, mobile: $("#mobile").text(), authcode_length: 4, popup_id: "j_popup_unbind"
            });
            a()
        };
        var t = function () {
            Buff.alert({
                title: i18n("access_to_the_steam_encounters"),
                safeMessage: i18n("recommended_use_of_the_netease"),
                hideCancel: true,
                confirmText: i18n("i_know"),
                rememberDismiss: "steam_network_error",
                extraClasses: "steam_network",
                success: function () {
                }
            });
            var e = "/account/unbind_steam/openid_login";
            window.open(e, "_blank", "width=800,height=800");
            setTimeout(function () {
                i()
            }, 200)
        };
        $("#steam-unbind").click(function () {
            sendRequest("/account/api/unbind_steam/check", {
                method: "GET", dataType: "json", success: function (e) {
                    if (e.code !== "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    Popup.show("j_popup_unbind");
                    $("#btn-verify-steam").on("click", function () {
                        t()
                    })
                }
            })
        });
        $("#user-prefer-allow_buyer_bargain").change(function () {
            var e = $(this).attr("value") == "allow" ? "true" : "false";
            sendRequest("/account/api/prefer/allow_buyer_bargain", {
                method: "POST",
                data: {allow_buyer_bargain: e},
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("set_success"), {type: "success"})
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        });
        $("#user-prefer-allow_alipay").change(function () {
            var e = $(this).attr("value") == "allow" ? "true" : "false";
            if (e == "false") {
                if ($("#user-prefer-allow_epay span.on").attr("value") != "allow") {
                    Buff.toast(i18n("must_allow_epay_or_alipay"), {type: "error"});
                    $(this).find("span").toggleClass("on");
                    return
                }
            }
            sendRequest("/account/api/prefer/allow_alipay", {
                method: "POST",
                data: {allow_alipay: e},
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("set_success"), {type: "success"})
                    } else {
                        Buff.toast(e.error, {type: "error"});
                        $("#user-prefer-allow_alipay span").toggleClass("on")
                    }
                }
            })
        });
        $("#user-prefer-allow_epay").change(function () {
            var e = $(this).attr("value") == "allow" ? "true" : "false";
            if (e == "false") {
                if ($("#user-prefer-allow_alipay span.on").attr("value") != "allow") {
                    Buff.toast(i18n("must_allow_epay_or_alipay"), {type: "error"});
                    $(this).find("span").toggleClass("on");
                    return
                }
            }
            sendRequest("/account/api/prefer/allow_epay", {
                method: "POST",
                data: {allow_epay: e},
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("set_success"), {type: "success"})
                    } else {
                        Buff.toast(e.error, {type: "error"});
                        $("#user-prefer-allow_epay span").toggleClass("on")
                    }
                }
            })
        });
        $("#user-prefer-allow_shop_display").change(function () {
            var t = $(this).attr("value") == "allow" ? "true" : "false";
            sendRequest("/account/api/prefer/allow_shop_display", {
                method: "POST",
                data: {allow_shop_display: t},
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("set_success"), {type: "success"})
                    } else {
                        Buff.toast(e.error, {type: "error"});
                        $("#user-prefer-allow_shop_display span").toggleClass("on");
                        $("#user-prefer-allow_shop_display").attr("value", t ? "" : "allow")
                    }
                }
            })
        });
        $("#user-prefer-buff-price-currency").change(function () {
            var e = $(this).attr("value");
            sendRequest("/account/api/prefer/buff_price_currency", {
                method: "POST",
                data: {buff_price_currency: e},
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("set_success"), {type: "success"})
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        });
        $("#user-prefer-game-cms-client").change(function () {
            var e = $(this).attr("value");
            sendRequest("/account/api/prefer/game_cms_client", {
                method: "POST",
                data: {game_cms_client: e},
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("set_success"), {type: "success"})
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        });
        $("#user-prefer-force_buyer_send_offer").change(function () {
            var t = $(this).attr("value") == "allow" ? "true" : "false";
            sendRequest("/account/api/prefer/force_buyer_send_offer", {
                method: "POST",
                data: {force_buyer_send_offer: t},
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("set_success"), {type: "success"})
                    } else {
                        Buff.toast(e.error, {type: "error"});
                        $("#user-prefer-force_buyer_send_offer span").toggleClass("on");
                        $("#user-prefer-force_buyer_send_offer").attr("value", t ? "" : "allow")
                    }
                }
            })
        });
        $("#user-prefer-allow_sms_notification").change(function () {
            var e = function (t) {
                sendRequest("/account/api/prefer/allow_sms_notification", {
                    method: "POST",
                    data: {allow_sms_notification: t},
                    dataType: "json",
                    success: function (e) {
                        if (e.code == "OK") {
                            Buff.toast(i18n("set_success"), {type: "success"})
                        } else {
                            Buff.toast(e.error, {type: "error"});
                            $("#user-prefer-allow_sms_notification span").toggleClass("on");
                            $("#user-prefer-allow_sms_notification").attr("value", t ? "" : "allow")
                        }
                    }
                })
            };
            var t = $(this).attr("value") == "allow" ? "true" : "false";
            if (t == "false") {
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("disable_sms_notification_alert"),
                    hideCancel: true,
                    success: function () {
                        e(t)
                    },
                    onClose: function () {
                        $("#user-prefer-allow_sms_notification span").addClass("on");
                        $("#user-prefer-allow_sms_notification").attr("value", "allow")
                    }
                })
            } else {
                e(t)
            }
        });
        $("#user-prefer-inventory-price").change(function () {
            var e = $(this).attr("value");
            sendRequest("/account/api/prefer/inventory_price", {
                method: "POST",
                data: {inventory_price: e},
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("set_success"), {type: "success"})
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        });
        $("#user-prefer-antiscam_level").change(function () {
            var e = function (e) {
                sendRequest("/account/api/prefer/antiscam_level", {
                    method: "POST",
                    data: {antiscam_level: e},
                    dataType: "json",
                    success: function (e) {
                        if (e.code == "OK") {
                            Buff.toast(i18n("set_success"), {type: "success"})
                        } else {
                            Buff.toast(e.error, {type: "error"})
                        }
                    }
                })
            };
            var t = parseInt($(this).attr("value"));
            if (t == 1) {
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("disable_antiscam"),
                    hideCancel: true,
                    success: function () {
                        e(t)
                    }
                })
            } else {
                e(t)
            }
        });
        $("#user-prefer-allow_auto_remark").change(function () {
            var e = function (t) {
                sendRequest("/account/api/prefer/allow_auto_remark", {
                    method: "POST",
                    data: {allow_auto_remark: t},
                    dataType: "json",
                    success: function (e) {
                        if (e.code == "OK") {
                            Buff.toast(i18n("set_success"), {type: "success"})
                        } else {
                            Buff.toast(e.error, {type: "error"});
                            $("#user-prefer-allow_auto_remark span").toggleClass("on");
                            $("#user-prefer-allow_auto_remark").attr("value", t ? "" : "allow")
                        }
                    }
                })
            };
            var t = $(this).attr("value") == "allow" ? "true" : "false";
            e(t)
        });
        $(".Btn_realname_cert").click(function () {
            bindCard.show_cert_popup(function () {
                document.location.reload()
            })
        });
        $(".Btn_bind_card").click(function () {
            bindCard.show_bind_card_popup(e, function () {
                document.location.reload()
            })
        });
        $(document).on("click", "#j_popup_goodsbg ul li", function () {
            $(this).addClass("on").siblings().removeClass("on");
            var e = $(this).attr("data-index");
            var t = $(this).find("img").attr("src");
            sendRequest("/account/api/prefer/switch_inspect_bg", {
                method: "POST",
                data: {img_index: e},
                dataType: "json",
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    Buff.toast(i18n("set_success"), {type: "success"});
                    $("#user-prefer-inspect_bg_img").attr({src: t})
                }
            })
        });
        var a = function () {
            window.BAS.AS.reset();
            sendRequest("/api/asset/basisid/token/", {
                method: "POST", timeout: 3e4, success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    window.BAS.AS.initFrame({
                        key: "prod-ZoJaaVfisIlrhtIIiGSEbGBfGpFCczWF",
                        bas_gw: "https://api.basisid.com/",
                        container_id: "bas-widget-container",
                        ui: {width: "100%", height: "705px", style: "", mobile_height: "auto"},
                        options: {api_form_token: e.data.token},
                        events: {
                            onLoad: function () {
                                Popup.show("j_popup_kyc_cert")
                            }, onManualCheck: function (e) {
                                if (e.status === "ok") {
                                    if (e.user_hash) {
                                        sendRequest("/api/asset/basisid/verify/", {
                                            method: "POST",
                                            timeout: 3e4,
                                            data: {user_hash: e.user_hash},
                                            success: function (e) {
                                                window.location.reload()
                                            }
                                        })
                                    }
                                } else {
                                    window.location.reload()
                                }
                            }
                        }
                    })
                }
            })
        };
        if ($("#kyc_cert").length > 0) {
            sendRequest("/api/asset/basisid/state/", {
                method: "GET",
                timeout: 3e4,
                showLoading: false,
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    $("#kyc_cert ." + e.data.cert.state).show();
                    $("#kyc_cert .placeholder1").hide();
                    if (e.data.cert.messages) {
                        $("#kyc_cert ." + e.data.cert.state).find(".message").attr("data-content", e.data.cert.messages).show()
                    }
                    $("#kyc_cert .state-text").text(e.data.cert.state);
                    if (["Pending", "Approved"].indexOf(e.data.cert.state) < 0) {
                        $("#kyc_cert .t_Right").show();
                        $("#kyc_cert .placeholder2").hide()
                    }
                    if (e.data.allow_to_verify) {
                        $(".Btn_kyc_cert").click(a)
                    } else {
                        $(".Btn_kyc_cert").click(function () {
                            Buff.toast(e.data.not_allow_message, {type: "error"})
                        })
                    }
                }
            })
        }
        u();
        $("#bind-badlanders").click(function () {
            Popup.show("j_popup_g101_bind")
        })
    };
    var l = function () {
        if (!g.user) {
            if (window.location.pathname == "/account/login") {
                return
            }
            loginModule.showLogin();
            return
        }
        Popup.show("j_popup_weixin");
        var r = null;
        var n = function () {
            sendRequest("/account/api/bind_wechat/get_dynamic_code", {
                method: "GET",
                showLoading: false,
                success: function (t) {
                    if (t.code != "OK") {
                        Buff.toast(i18n("to_obtain_the_dynamic_code"), {type: "error"});
                        return
                    }
                    $("#j_progress").width("0%");
                    var e = t.data.code;
                    var a = "";
                    e.split("").map(function (e) {
                        a += format_html('<span class="flipInX"><%= elem %></span>', {elem: e})
                    });
                    $("#j_qrcode").html(a);
                    var i = 0;
                    r = setInterval(function () {
                        var e = 100 / t.data.refresh;
                        i += e;
                        $("#j_progress").width(i + "%");
                        if (i >= 100) {
                            clearInterval(r);
                            n()
                        }
                    }, 1e3);
                    $("#j_popup_weixin .popup-close").off("click").click(function () {
                        Popup.hide();
                        clearInterval(r)
                    })
                }
            })
        };
        n()
    };
    var d = function (e) {
        e.force = true;
        ejzbAuthVerifyManager().process(e, null, null, null, function () {
            location.reload()
        })
    };
    var u = function () {
        if ($("#j_popup_g101_bind").attr("inited")) return;
        $("#confirm-bind-badlanders").click(function () {
            var e = $(this).parents(".popup");
            var t = e.find("input[name=role_id]").val();
            var a = e.find("input[name=token]").val();
            sendRequest("/account/api/partner/bind_role", {
                method: "POST",
                data: {role_id: t, token: a, game: g.game},
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    Buff.toast(i18n("the_binding_is_successful"), {type: "success"});
                    setTimeout(function () {
                        window.location.reload()
                    }, 2e3)
                }
            })
        });
        $("#j_popup_g101_bind .popup-select-code").click(function () {
            Popup.hide();
            Popup.show("j_popup_g101_bind_code")
        });
        var n = undefined;
        var o = function (e, t, a) {
            a = a || "0";
            e = e + "";
            return e.length >= t ? e : new Array(t - e.length + 1).join(a) + e
        };
        $("#j_popup_g101_bind .popup-select-qr").click(function () {
            Popup.hide();
            Popup.show("j_popup_g101_bind_qr");
            s()
        });
        var s = function () {
            if (n) {
                clearInterval(n);
                n = undefined
            }
            $("#bind-badlanders-qrcode-time").text("");
            sendRequest("/account/api/partner/get_dynamic_code", {
                method: "GET", data: {game: g.game}, success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    var i = e.data.expire_time;
                    var t = "https://nie.res.netease.com/comm/gamestart/index.html?kw=" + e.data.user_token + "#id=banzhuan";
                    $("#bind-badlanders-qrcode").html("");
                    new QRCode(document.getElementById("bind-badlanders-qrcode"), {text: t, width: 140, height: 140});
                    $("#bind-badlanders-qrcode").attr("title", "");
                    var r = 0;
                    n = setInterval(function () {
                        var e = i - Math.round(Date.now() / 1e3);
                        if (e <= 0) {
                            clearInterval(n);
                            n = undefined;
                            e = 0;
                            $("#bind-badlanders-qrcode").html('<img src="/static/images/2x/icon_goodsdetail_16_refresh_normal.png" style="margin-top: 54px; cursor: pointer;">');
                            $("#bind-badlanders-qrcode img").click(function () {
                                s()
                            })
                        }
                        var t = Math.floor(e / 60);
                        e = e % 60;
                        var a = o(t, 2) + ":" + o(e, 2);
                        $("#bind-badlanders-qrcode-time").text(a);
                        if (Date.now() - r > 5e3) {
                            r = Date.now();
                            sendRequest("/account/api/user/info/v2", {
                                method: "GET",
                                showLoading: false,
                                showError: false,
                                success: function (e) {
                                    if (e.code != "OK") return;
                                    if (e.data.user_info.partner_role_info && e.data.user_info.partner_role_info[g.game]) {
                                        Popup.hide();
                                        clearInterval(n);
                                        n = undefined;
                                        Buff.toast(i18n("the_binding_is_successful"), {type: "success"});
                                        setTimeout(function () {
                                            window.location.reload()
                                        }, 2e3)
                                    }
                                }
                            })
                        }
                    }, 1e3)
                }
            })
        };
        $(".popup_g101_bind_qr .popup-close").click(function () {
            clearInterval(n);
            n = undefined
        });
        $("#j_popup_g101_bind .popup-select-launch").click(function () {
            sendRequest("/account/api/partner/get_dynamic_code", {
                method: "GET",
                data: {game: g.game},
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    var t = "https://nie.res.netease.com/comm/gamestart/index.html?kw=" + e.data.user_token + "#id=banzhuan";
                    window.location.href = t
                }
            })
        });
        $("#j_popup_g101_bind").attr("inited", "1")
    };
    var p = function (t) {
        if (!sessionStorage.getItem("badlanders_bind")) {
            if (t) t();
            return
        }
        var a = JSON.parse(sessionStorage.getItem("badlanders_bind"));
        if (a.time < Date.now() - 1800 * 1e3) {
            if (t) t();
            return
        }
        sendRequest("/account/api/user/info/v2", {
            method: "GET", success: function (e) {
                if (e.code != "OK") {
                    if (t) t();
                    return
                }
                sessionStorage.setItem("badlanders_bind", undefined);
                if (e.data.user_info.partner_role_info && e.data.user_info.partner_role_info[g.game]) {
                    if (t) t();
                    return
                }
                sendRequest("/account/api/partner/bind_role", {
                    method: "POST",
                    data: {role_id: a.role_id, token: a.token, game: a.game},
                    success: function (e) {
                        if (e.code != "OK") {
                            Buff.toast(e.error, {type: "error"});
                            if (t) {
                                setTimeout(t, 2e3)
                            }
                            return
                        }
                        Buff.toast(i18n("the_binding_is_successful"), {type: "success"});
                        if (t) {
                            setTimeout(t, 2e3);
                            return
                        }
                        setTimeout(function () {
                            window.location.reload()
                        }, 2e3)
                    }
                })
            }
        })
    };
    return {init: i, showWechatPopup: l, showEjzbAuthPopup: d, initBindBadlanders: u, tryBindBadlandersFromGame: p}
};
var guideManager = function (i) {
    var i = i || "";
    var s = false;
    var e = format_html('<div class="popup popup_guide" id="j_popup_guide" style="width:600px;">    <a class="popup-close" href="javascript:;" onclick="window.location.reload()">×</a>    <div class="popup-header"><h2><%= i18n("set_the_boot") %></h2></div>    <p class="popup-tip c_Green"><%= i18n("in_order_to_your_funds") %></p>    <div class="popup-cont" style="min-height:410px;">        <div class="guide-steps">        </div>        <div class="guide-desc">        </div>    </div></div>');
    var r = function (e, t) {
        var a = "";
        if (typeof e == "string" && e.length > 0) {
            a += format_html('            <div class="step-1">                <i class="icon icon_success_big"></i>                <h5><%= i18n("binding_steam") %></h5>            </div>            <div class="step-line on"></div>');
            s = false
        } else {
            a += format_html('            <div class="step-1">                <span>1</span>                <h5><%= i18n("binding_steam") %></h5>            </div>            <div class="step-line"></div>');
            s = true
        }
        if (typeof t == "string" && t.length > 0) {
            a += format_html('            <div class="step-1">                <i class="icon icon_success_big"></i>                <h5><%= i18n("set_up_trading_links") %></h5>            </div>')
        } else {
            a += format_html('            <div class="step-1">                <span>2</span>                <h5><%= i18n("set_up_trading_links") %></h5>            </div>')
        }
        a += '<p class="clear"></p>';
        $("#j_popup_guide .guide-steps").html(a)
    };
    var n = function (e, t) {
        var a = "";
        if (typeof e != "string" || e.length == 0) {
            a = format_html('            <div class="guide-block">                <p><%= i18n("binding_steam_before_you_can") %></p>                <p><a href="javascript:;" data-url="/account/login/steam?back_url=/account/steam_bind/finish" data-target="_blank" class="i_Btn go_to_steam"><%= i18n("to_steam") %></a></p>            </div>            <a href="javascript:;" onclick="window.location.reload()"><%= i18n("skip_maybe_next_time") %></a></p>')
        } else if (typeof t != "string" || t.length == 0) {
            a = format_html('            <div class="guide-block trade-url">                <p class="t_Left"><span class="l_Right"><a class="go_to_steam" href="javascript:;" data-url="https://steamcommunity.com/my/tradeoffers/privacy#trade_offer_access_url" data-size="1200*800" data-target="_blank"><%= i18n("get_steam_trading_link") %></a><i class="icon icon_arr_right_small"></i></span><%= i18n("binding_transaction_link_the_immediate") %></p>                <p class="t_Left"><input type="text" name="trade_url" class="i_Text" placeholder="<%= i18n("please_enter_your_steam_trade") %>"><a href="javascript:;" class="i_Btn"><%= i18n("save") %></a></p>            </div>            <p class="t_Right">            <a href="javascript:;" onclick="window.location.reload()"><%= i18n("skip_maybe_next_time") %></a></p>')
        }
        if (a.length == 0) {
            a = format_html('            <div class="guide-block guide-block_success">                <p style="line-height:70px;"><%= i18n("congratulations_to_you!_welcome_to") %></p>            </div>');
            if (i.length > 0 && isValidLink(i)) {
                a += format_html('<p><a href="<%= backUrl %>" class="i_Btn i_Btn_long" onclick="window.location.reload()"><%= i18n("complete") %></a></p>', {backUrl: i})
            } else {
                a += format_html('<p><a href="/market/steam_inventory" class="i_Btn i_Btn_long"><%= i18n("view_my_steam_inventory") %></a></p>')
            }
        }
        $("#j_popup_guide .guide-desc").html(a)
    };
    var t = function (t) {
        sendRequest("/account/api/user/info", {
            method: "GET",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code == "OK") {
                    t(e.data)
                } else {
                    Buff.toast(e.error)
                }
            }
        })
    };
    var a = function () {
        $("body").append(e);
        $(document).on("click", ".trade-url .i_Btn", function () {
            var e = $("input[name=trade_url]").val();
            if (!e) {
                Buff.toast(i18n("please_fill_out_the_trading"));
                $("input[name=trade_url]").addClass("i_Text_error");
                return
            }
            var t = "https://steamcommunity.com/tradeoffer/new/?";
            if (e.substr(0, t.length) !== t) {
                Buff.toast(i18n("trading_link_format_error"));
                $("input[name=trade_url]").addClass("i_Text_error");
                return
            }
            $("input[name=trade_url]").removeClass("i_Text_error");
            sendRequest("/api/market/steam/trade_url", {
                method: "POST",
                dataType: "json",
                data: {trade_url: e},
                showLoading: true,
                success: function (e) {
                    if (e.code === "OK") {
                        $("input[name=trade_url]").removeClass("i_Text_error");
                        sendRequest("/account/api/user/info", {
                            method: "GET",
                            showLoading: false,
                            showError: false,
                            success: function (e) {
                                if (e.code != "OK") {
                                    Buff.toast(e.error);
                                    return
                                } else {
                                    r(e.data.steamid, e.data.trade_url);
                                    n(e.data.steamid, e.data.trade_url)
                                }
                            }
                        })
                    } else {
                        $("input[name=trade_url]").addClass("i_Text_error");
                        Buff.toast(i18n("set_to_fail") + (e.error || e.code))
                    }
                },
                error: function () {
                    $("input[name=trade_url]").addClass("i_Text_error");
                    Buff.toast(i18n("settings_failed_please_try_again"))
                }
            })
        })
    };
    var _ = function (t, e, a) {
        var i = {steam_id: t};
        if (e) {
            i.authcode = e
        }
        sendRequest("/account/api/bind_steam/confirm", {
            method: "POST",
            dataType: "json",
            data: i,
            success: function (e) {
                if (e.code == "OK") {
                    if (a) a();
                    r(t, null);
                    n(t, null)
                } else {
                    Buff.toast(e.error, {type: "error"});
                    if ($(".popup.steam_network").is(":visible")) {
                        Popup.hide()
                    }
                }
            }
        })
    };
    var c = function () {
        if ($("#j_popup_bind_authcode").length == 0) {
            var e = format_html('    <div class="popup" id="j_popup_bind_authcode">        <a class="popup-close" href="javascript:;">×</a>        <div class="popup-cont">            <h2><%= i18n("enter_the_verification_code") %></h2>            <div class="popup-desc">                <p><%= i18n("please_do_the_safety_confirmation") %><span id="mobile"></span><%= i18n("the_phone_receives_the_verification") %></p>                <p class="t_Center">                    <input type="text" class="i_Text" name="authcode" placeholder="<%= i18n("please_enter_the_verification_code") %>" size="38">                </p>            </div>        </div>        <div class="popup-btns">            <a href="javascript:;" class="i_Btn i_Btn_sub i_Btn_disabled" id="resend_authcode"><%= i18n("get_the_verification_code") %></a><a href="javascript:;" class="i_Btn i_Btn_main i_Btn_disabled" id="verify_authcode"><%= i18n("ok") %></a>        </div>    </div>');
            $("body").append($(e))
        }
    };
    var o = function () {
        if (s) {
            var e = getCookie("steam_info_to_bind");
            var t = getCookie("bind_steam_err_msg");
            if (e) {
                removeCookie("steam_info_to_bind");
                if ($(".popup.steam_network").is(":visible")) {
                    Popup.hide()
                }
                var a = e.split(":");
                var i = a[0];
                var r = a[1];
                var n = parseInt(a[2] || "0");
                var o = a[3] || "";
                Buff.alert({
                    title: i18n("binding_acknowledgment"),
                    message: i18n("acknowledgment_is_bound_to_the") + r + "\nSteam ID：" + i,
                    success: function () {
                        if (!n) {
                            _(i)
                        } else {
                            c();
                            var e = function (e) {
                                sendRequest("/account/api/bind_steam/send_authcode", {
                                    method: "POST",
                                    dataType: "json",
                                    showLoading: false,
                                    success: function () {
                                        if (e) {
                                            e()
                                        }
                                    }
                                })
                            };
                            bindCard.show_authcode_popup({
                                send_authcode_function: e,
                                verify_authcode_function: function (e, t) {
                                    _(i, e, t)
                                },
                                mobile: o,
                                authcode_length: 4,
                                popup_id: "j_popup_bind_authcode"
                            });
                            e()
                        }
                    }
                })
            } else if (t) {
                removeCookie("bind_steam_err_msg");
                if ($(".popup.steam_network").is(":visible")) {
                    Popup.hide()
                }
                Buff.toast(t, {type: "error"})
            }
        }
    };
    var l = function (e) {
        Popup.hide();
        var t = e.steamid || null;
        var a = e.trade_url || "";
        Popup.show("j_popup_guide");
        r(t, a);
        n(t, a);
        setInterval(o, 200)
    };
    var d = function (e) {
        if (g.is_partner_appid) return false;
        if (typeof e.steamid != "string" || e.steamid.length == 0) return true;
        if (typeof e.trade_url != "string" || e.trade_url.length == 0) return true;
        return false
    };
    return {init: a, show: l, shouldShow: d, getUserInfo: t}
};
var steamVerifyManager = function (e) {
    var e = e || "";
    var t = false;
    var a = format_html('    <div class="popup popup_guide" id="j_popup_guide" style="width:600px; height: 400px;">    <div class="popup-header"><h2><%= i18n("authentication") %></h2></div>    <p class="popup-tip c_Green"><%= i18n("for_the_protection_of_your") %></p>    <div class="popup-cont" style="min-height:410px;">        <div class="guide-desc">            <div class="guide-block">                <p><%= i18n("your_phone_account_through_a") %></p>                <p><a href="javascript:;" data-url="/account/steam/openid_login?back_url=/account/steam/openid_verifier" data-target="_blank" class="i_Btn go_to_steam"><%= i18n("verify") %></a></p>            </div>        </div>    </div></div>');
    var i = function () {
        $("body").append(a)
    };
    var r = function () {
        var e = getCookie("steam_verify_result");
        if (!e) {
            setTimeout(function () {
                r()
            }, 200);
            return
        }
        removeCookie("steam_verify_result");
        var t = JSON.parse(e);
        if (t.success) {
            Buff.toast(t.messages, {type: "success"});
            setTimeout(function () {
                window.location.reload()
            }, 1e3)
        } else {
            if (t.messages) {
                Buff.toast(t.messages, {type: "error"})
            }
            setTimeout(function () {
                r()
            }, 200)
        }
    };
    var n = function (e) {
        Popup.hide();
        removeCookie("steam_verify_result");
        Popup.show("j_popup_guide");
        setTimeout(function () {
            r()
        }, 200)
    };
    var o = function (e) {
        return e.is_need_steam_verify && e.login_from == 1
    };
    return {init: i, show: n, shouldShow: o}
};
var authcodeVerifyManager = function (e) {
    var t = function () {
        Popup.hide();
        Popup.show(e)
    };
    var r = function () {
        Popup.hide();
        $("#" + e).remove()
    };
    var n = undefined;
    var a = 0;

    function o(e, t) {
        if (t || a > 0) {
            if (t) {
                a = t
            } else {
                a--
            }
            e.addClass("i_Btn_disabled");
            e.html(i18n("resend") + "<small>(" + a + ")</small>");
            n = setTimeout(function () {
                o(e)
            }, 1e3)
        } else if (a == 0) {
            e.removeClass("i_Btn_disabled");
            e.text(i18n("get_the_verification_code"));
            n = undefined
        }
    }

    var i = function (e, t, a, i, r) {
        if (!t) {
            t = {}
        }
        if (!i) {
            i = 60
        }
        a.text(i18n("has_been_sent")).addClass("i_Btn_disabled");
        sendRequest(e, {
            method: "POST", dataType: "json", data: t, showLoading: false, success: function (e) {
                if (e.code == "OK") {
                    Buff.toast(i18n("sent_successfully_please_note_the"), {type: "success"});
                    if (n === undefined) {
                        o(a, i)
                    }
                    if (r) {
                        r(e.data)
                    }
                } else {
                    Buff.toast(e.error || e.msg || i18n("error_code") + e.code, {type: "error"});
                    a.removeClass("i_Btn_disabled").text(i18n("get_the_verification_code"))
                }
            }
        })
    };
    var s = function (e, t, a, i) {
        if (!t || t.length != 4 && t.length != 6) {
            Buff.toast(i18n("the_verification_code_is_incorrect"));
            return
        }
        if (!a) {
            a = {authcode: t}
        } else {
            a["authcode"] = t
        }
        sendRequest(e, {
            method: "POST", dataType: "json", data: a, success: function (e) {
                if (e.code == "OK") {
                    r();
                    if (i) {
                        i(e.data)
                    }
                } else {
                    Buff.toast(e.error || e.msg || i18n("error_code") + e.code, {type: "error"})
                }
            }
        })
    };
    return {show: t, clear: r, sendAuthcode: i, verifyAuthcode: s}
};
var commonAuthcodeVerifyManager = function (e, t, a, i, r, n) {
    var o = format_html('        <div class="popup popup_guide" id="j_popup_common_authcode_verify" style="width:600px;">            <a class="popup-close" href="javascript:;">×</a>            <div class="popup-header"><h2><%= i18n("authentication") %></h2></div>            <p class="popup-tip c_Green"><%= i18n("urs_password_login_need_verify") %></p>            <div class="popup-cont">                <div class="guide-desc" style="display:;">                    <div class="guide-block">                        <p class="c_Gray f_12px"><%= i18n("please_enter") %><%= mobile %><%= i18n("receive_sms_verification_code") %></p>                        <p class="t_Left">                            <input type="text" name="authcode" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>">                            <a id="btn-common-send-authcode" href="#" class="i_Btn i_Btn_hollow" onclick="">                                <%= i18n("get_the_verification_code") %>                            </a>                        </p>                        \x3c!-- 发送后给i_Btn加i_Btn_disabled，如下示例： --\x3e                        \x3c!--                        <p class="t_Left"><input type="text" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>"><a href="#" class="i_Btn i_Btn_hollow i_Btn_disabled"><%= i18n("has_been_sent") %>(29)</a></p>                        --\x3e                    </div>                    <p><a id="btn-common-verify-authcode" href="javascript:;" class="i_Btn i_Btn_long"><%= i18n("complete") %></a></p>                </div>            </div>        </div>    ', {mobile: e});
    var s = "j_popup_common_authcode_verify";
    var _ = authcodeVerifyManager(s);
    var c = function () {
        $("body").append(o);
        $("#" + s + " .popup-close").click(function () {
            _.clear()
        });
        var e = $("#btn-common-send-authcode");
        e.click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            _.sendAuthcode(t, a, e)
        });
        $("#btn-common-verify-authcode").click(function () {
            var e = $("#" + s + " input[name=authcode]").val();
            n = n || function () {
                Buff.toast(i18n("the_validation_is_successful"), {type: "success"});
                window.location.reload()
            };
            _.verifyAuthcode(i, e, r, n)
        });
        _.show()
    };
    return {init: c}
};
var loggedInFromSteamVerifyManager = function (e) {
    var t = format_html('        <div class="popup popup_guide" id="j_popup_logged_in_from_steam_verify" style="width:600px;">            <a class="popup-close" href="javascript:;" onclick="Popup.hide()">×</a>            <div class="popup-header"><h2><%= i18n("authentication") %></h2></div>            <p class="popup-tip c_Green"><%= i18n("detected_you_are_using_steam") %></p>            <div class="popup-cont">                <div class="guide-desc" style="display:;">                    <div class="guide-block">                        <p class="c_Gray f_12px"><%= i18n("please_enter") %><%= mobile %><%= i18n("receive_sms_verification_code") %></p>                        <p class="t_Left">                            <input id="input-unfrozen-authcode" type="text" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>">                            <a id="btn-unfrozen-send" href="#" class="i_Btn i_Btn_hollow" onclick="">                                <%= i18n("get_the_verification_code") %>                            </a>                        </p>                        \x3c!-- 发送后给i_Btn加i_Btn_disabled，如下示例： --\x3e                        \x3c!--                        <p class="t_Left"><input type="text" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>"><a href="#" class="i_Btn i_Btn_hollow i_Btn_disabled"><%= i18n("has_been_sent") %>(29)</a></p>                        --\x3e                    </div>                    <p><a id="btn-unfrozen-verify" href="javascript:;" class="i_Btn i_Btn_long"><%= i18n("complete") %></a></p>                    <ul class="c_Gray f_12px t_Left f_line24" >                        <li><%= i18n("the_phone_number_has_been") %><a href="/user-center/feedback/" target="_blank" class="c_Blue"><%= i18n("artificial_assist") %></a></li>                    </ul>                </div>            </div>        </div>    ', {mobile: e});
    var a = "j_popup_logged_in_from_steam_verify";
    var i = authcodeVerifyManager(a);
    var r = function () {
        $("body").append(t);
        $("#" + a + " .popup-close").click(function () {
            i.clear()
        });
        var e = $("#btn-unfrozen-send");
        e.click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            i.sendAuthcode("/account/api/logged_in_from_steam/send_authcode", null, e)
        });
        $("#btn-unfrozen-verify").click(function () {
            var e = $("#input-unfrozen-authcode").val();
            i.verifyAuthcode("/account/api/logged_in_from_steam/verify_authcode", e, null, function () {
                Buff.toast(i18n("the_validation_is_successful"), {type: "success"});
                window.location.reload()
            })
        });
        i.show()
    };
    return {init: r}
};
var ursLoginMobileSecondaryVerifyManager = function (e, t, a) {
    var i = format_html('        <div class="popup popup_guide" id="j_popup_login_mobile_verify" style="width:600px;">            <a class="popup-close" href="javascript:;">×</a>            <div class="popup-header"><h2><%= i18n("authentication") %></h2></div>            <p class="popup-tip c_Green"><%= i18n("urs_password_login_need_verify") %></p>            <div class="popup-cont">                <div class="guide-desc" style="display:;">                    <div class="guide-block">                        <p class="c_Gray f_12px"><%= i18n("please_enter") %><%= mobile %><%= i18n("receive_sms_verification_code") %></p>                        <p class="t_Left">                            <input id="input-login-authcode" type="text" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>">                            <a id="btn-login-send" href="#" class="i_Btn i_Btn_hollow" onclick="">                                <%= i18n("get_the_verification_code") %>                            </a>                        </p>                        \x3c!-- 发送后给i_Btn加i_Btn_disabled，如下示例： --\x3e                        \x3c!--                        <p class="t_Left"><input type="text" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>"><a href="#" class="i_Btn i_Btn_hollow i_Btn_disabled"><%= i18n("has_been_sent") %>(29)</a></p>                        --\x3e                    </div>                    <p><a id="btn-login-verify" href="javascript:;" class="i_Btn i_Btn_long"><%= i18n("complete") %></a></p>                </div>            </div>        </div>    ', {mobile: e});
    var r = "j_popup_login_mobile_verify";
    var n = authcodeVerifyManager(r);
    var o = function () {
        $("body").append(i);
        $("#" + r + " .popup-close").click(function () {
            n.clear()
        });
        var e = $("#btn-login-send");
        e.click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            n.sendAuthcode("/account/api/urs_password_login/send_authcode", {verify_key: t}, e)
        });
        $("#btn-login-verify").click(function () {
            var e = $("#input-login-authcode").val();
            n.verifyAuthcode("/account/api/urs_password_login/verify_authcode", e, {verify_key: t}, function () {
                if (a) {
                    a(null, t)
                }
            })
        });
        n.show()
    };
    return {init: o}
};
var unfrozenVerifyManager = function (e) {
    var t = format_html('        <div class="popup popup_guide" id="j_popup_unfrozen_mobile_verify" style="width:600px;">            <a class="popup-close" href="javascript:;" onclick="Popup.hide()">×</a>            <div class="popup-header"><h2><%= i18n("authentication") %></h2></div>            <p class="popup-tip c_Green"><%= i18n("your_mobile_phone_account_occurs") %></p>            <div class="popup-cont">                <div class="guide-desc" style="display:;">                    <div class="guide-block">                        <p class="c_Gray f_12px"><%= i18n("please_enter") %><%= mobile %><%= i18n("receive_sms_verification_code") %></p>                        <p class="t_Left">                            <input id="input-unfrozen-authcode" type="text" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>">                            <a id="btn-unfrozen-send" href="#" class="i_Btn i_Btn_hollow" onclick="">                                <%= i18n("get_the_verification_code") %>                            </a>                        </p>                        \x3c!-- 发送后给i_Btn加i_Btn_disabled，如下示例： --\x3e                        \x3c!--                        <p class="t_Left"><input type="text" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>"><a href="#" class="i_Btn i_Btn_hollow i_Btn_disabled"><%= i18n("has_been_sent") %>(29)</a></p>                        --\x3e                    </div>                    <p><a id="btn-unfrozen-verify" href="javascript:;" class="i_Btn i_Btn_long"><%= i18n("complete") %></a></p>                    <ul class="c_Gray f_12px t_Left f_line24" >                        <li><%= i18n("not_my_phone_number_please") %><a href="/user-center/feedback/" target="_blank" class="c_Blue"><%= i18n("artificial_assist") %></a></li>                    </ul>                </div>            </div>        </div>    ', {mobile: e});
    var a = "j_popup_unfrozen_mobile_verify";
    var i = authcodeVerifyManager(a);
    var r = function () {
        $("body").append(t);
        $("#" + a + " .popup-close").click(function () {
            i.clear()
        });
        var e = $("#btn-unfrozen-send");
        e.click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            i.sendAuthcode("/account/api/unfrozen/send_authcode", null, e)
        });
        $("#btn-unfrozen-verify").click(function () {
            var e = $("#input-unfrozen-authcode").val();
            i.verifyAuthcode("/account/api/unfrozen/verify_authcode", e, null, function () {
                Buff.toast(i18n("the_validation_is_successful"), {type: "success"});
                window.location.reload()
            })
        });
        i.show()
    };
    return {init: r}
};
var ejzbAuthVerifyManager = function () {
    var o = function (e, t, a, i) {
        var r = format_html('        <div class="popup popup_guide" id="j_popup_ejzb_auth_verify" style="width:600px;">            <a class="popup-close" href="javascript:;">×</a>            <div class="popup-header"><h2><%= title %></h2></div>            <div class="popup-cont">                <div class="guide-desc" style="display:;">                    <div class="guide-block">                        <p class="c_Gray f_12px"><%= i18n("please_enter") %><%= mobile %><%= i18n("receive_sms_verification_code") %></p>                        <p class="t_Left">                            <input type="text" name="authcode" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>">                            <a id="btn-ejzb-auth-send" href="javascript:;" class="i_Btn i_Btn_hollow" onclick="">                                <%= i18n("get_the_verification_code") %>                            </a>                        </p>                        \x3c!-- 发送后给i_Btn加i_Btn_disabled，如下示例： --\x3e                        \x3c!--                        <p class="t_Left"><input type="text" class="i_Text" placeholder="<%= i18n("enter_the_verification_code") %>"><a href="#" class="i_Btn i_Btn_hollow i_Btn_disabled"><%= i18n("has_been_sent") %>(29)</a></p>                        --\x3e                    </div>                    <p><a id="btn-ejzb-auth-verify" href="javascript:;" class="i_Btn i_Btn_long"><%= i18n("complete") %></a></p>                </div>            </div>        </div>        ', {
            mobile: e,
            title: t || i18n("balance_authorization")
        });
        var n = "j_popup_ejzb_auth_verify";
        var o = authcodeVerifyManager(n);
        $("body").append(r);
        $("#" + n + " .popup-close").click(function () {
            o.clear()
        });
        var s = {};
        var _ = $("#btn-ejzb-auth-send");
        _.click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            var e = "/api/asset/ejzb_auth/request/";
            var t = function (e) {
                s["auth_id"] = e["auth_id"]
            };
            o.sendAuthcode(e, {amount: a}, _, 120, t)
        });
        $("#btn-ejzb-auth-verify").click(function () {
            var e = $("#" + n + " input[name=authcode]").val();
            var t = "/api/asset/ejzb_auth/verify/";
            o.verifyAuthcode(t, e, s, function () {
                Buff.toast(i18n("auth_success"));
                i()
            })
        });
        o.show()
    };
    var e = function (e, i, r, t, a) {
        var n = false;
        if (!$.isEmptyObject(e)) {
            if (e.force) {
                n = true
            } else if (e.state == "VALID") {
                if (t != null && e.auth_type == 2 && parseFloat(e.left_amount) < parseFloat(t)) {
                    n = true
                }
            } else {
                n = true
            }
        }
        if (n) {
            if (!a) {
                a = function () {
                    Popup.hide();
                    CommonApi.User.info(["ejzb_auth"], function (e) {
                        for (var t in r.pay_methods) {
                            var a = r.pay_methods[t];
                            if (a.hasOwnProperty("ejzb_auth")) {
                                a.ejzb_auth = e.ejzb_auth
                            }
                        }
                        i.show(r)
                    })
                };
                e.title = i18n("ejzb_auth_title")
            }
            o(e.mobile, e.title, t, a);
            return true
        }
        return false
    };
    return {process: e}
};
var bookmark = function () {
    var e, o = {}, t = function () {
        if (e) return;
        $(document).on("click", ".add-bookmark", function (e) {
            e.stopPropagation();
            var t = this;
            var a = $(t).data("target-type");
            var i = $(t).data("target-id");
            sendRequest("/account/api/add_bookmark", {
                method: "PUT",
                data: {target_type: a, target_id: i},
                showLoading: false,
                success: function (e) {
                    if (e.code !== "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    o[a + "_" + i] = "delete";
                    $(".add-bookmark[data-target-type=" + a + "][data-target-id=" + i + "]").hide();
                    $(".delete-bookmark[data-target-type=" + a + "][data-target-id=" + i + "]").show()
                }
            })
        });
        $(document).on("click", ".delete-bookmark", function (e) {
            e.stopPropagation();
            var t = this;
            var a = $(t).data("target-type");
            var i = $(t).data("target-id");
            var r = $(t).data("confirm");
            var n = function () {
                sendRequest("/account/api/delete_bookmark", {
                    method: "DELETE",
                    data: {target_type: a, target_id: i},
                    showLoading: false,
                    success: function (e) {
                        if (e.code !== "OK") {
                            Buff.toast(e.error, {type: "error"});
                            return
                        }
                        o[a + "_" + i] = "add";
                        $(".add-bookmark[data-target-type=" + a + "][data-target-id=" + i + "]").show();
                        $(".delete-bookmark[data-target-type=" + a + "][data-target-id=" + i + "]").hide();
                        if (r) {
                            window.location.reload()
                        }
                    }
                })
            };
            if (r) {
                Buff.alert({
                    title: i18n("out_collection"),
                    message: i18n("determined_to_be_removed_from"),
                    success: function () {
                        n()
                    }
                })
            } else {
                n()
            }
        })
    };
    updateView = function () {
        Object.keys(o).map(function (e, t) {
            var a = o[e], i = e.split("_"), r = i[0], n = i[1];
            if (a == "add") {
                $(".add-bookmark[data-target-type=" + r + "][data-target-id=" + n + "]").show();
                $(".delete-bookmark[data-target-type=" + r + "][data-target-id=" + n + "]").hide()
            } else if (a == "delete") {
                $(".add-bookmark[data-target-type=" + r + "][data-target-id=" + n + "]").hide();
                $(".delete-bookmark[data-target-type=" + r + "][data-target-id=" + n + "]").show()
            }
        })
    };
    setCacheData = function (e, t, a) {
        o[e + "_" + t] = a ? "delete" : "add"
    };
    return function () {
        if (!e) {
            t();
            e = {init: t, updateView: updateView, setCacheData: setCacheData}
        }
        return e
    }
}();
var normalBuy = function (e) {
    var c = e;
    var a = g.game;
    var r = 0;
    var o;
    var s = 6;
    var _ = 10;
    var n = 18;
    var l = {};
    var i = function (a, i, e, r) {
        if (e == "buyer_bargain") {
            var t = "/api/market/buyer_bargain/wx_pay_qrcode";
            var n = {bargain_id: a}
        } else if (e == "buy_order") {
            var t = "/api/market/buy_order/wx_pay_qrcode";
            var n = {buy_order_id: a}
        } else {
            var t = "/api/market/bill_order/wx_pay_qrcode";
            var n = {bill_order_id: a}
        }
        sendRequest(t, {
            method: "GET", data: n, dataType: "json", success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
                $("#j_popup_wx").remove();
                var t = template_render("wx_pay_pat", {price: i});
                $("body").append(t);
                $("#wx-pay-qrcode").html("");
                new QRCode(document.getElementById("wx-pay-qrcode"), {text: e.data.url, width: 140, height: 140});
                $("#wx-pay-qrcode").attr("title", "");
                u(e.data.pay_expire_timeout);
                $("#j_popup_wx .popup-close").click(function () {
                    Popup.hide();
                    if ($("#j_popup_wx").hasClass("expired")) return;
                    Buff.alert({
                        title: i18n("waiting_for_payment"),
                        message: i18n("you_havent_successfully_paid_the"),
                        confirmText: i18n("continue_to_pay"),
                        cancelText: i18n("confirm_leave"),
                        success: function () {
                            Popup.show("j_popup_wx")
                        },
                        cancel: function () {
                            window.location.reload()
                        },
                        onClose: function () {
                            window.location.reload()
                        }
                    })
                });
                Popup.hide();
                Popup.show("j_popup_wx");
                r = r || m;
                r(a, s);
                return
            }
        })
    };
    var d = function (t) {
        sendRequest("/api/market/bill_order/pcredit_page_pay", {
            method: "GET",
            data: {bill_order_id: t},
            dataType: "json",
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
                openPageOnNewTab(e.data.elements.url);
                Popup.hide();
                m(t, _)
            }
        })
    };
    var u = function (e) {
        var t = 0, a = 0;
        if (e > 0) {
            t = Math.floor(e / 60);
            a = e % 60
        }
        var i = t + i18n("minutes") + a + i18n("seconds");
        $("#pay-remain-time").text(i)
    };
    var p = function (e) {
        var t = l.pay_method;
        sendRequest("/api/market/goods/buy", {
            data: {
                game: l.game || a,
                goods_id: l.goods_id,
                sell_order_id: l.sell_order_id,
                price: l.price,
                pay_method: l.pay_method,
                allow_tradable_cooldown: r,
                token: getParams().token || "",
                cdkey_id: l.cdkey_id,
                password: e
            }, dataType: "json", method: "POST", success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "warning"});
                    return
                }
                bill_order_id = e.data.id;
                if (t == s) {
                    i(bill_order_id, e.data.price)
                } else if (t == _) {
                    d(bill_order_id)
                } else {
                    m(bill_order_id, t)
                }
            }, error: function () {
                $("#loading-cover").hide();
                Popup.hide();
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("the_system_is_busy_please"),
                    hideCancel: true,
                    success: function () {
                        window.location.href = "/market/buy_order/history?game=" + (l.game || a)
                    }
                })
            }, complete: function (e) {
                if (e.responseJSON.code == "Realname Required" || e.responseJSON.code == "Market Ban Epay Balance" || e.responseJSON.code == "Seller Realname Required") {
                    $(".pay-btn").removeClass("i_Btn_disabled")
                }
            }
        })
    };
    var f = function (e, t) {
        sendRequest("/api/market/bill_order/notify_buyer_to_send_offer", {
            method: "POST",
            dataType: "json",
            data: {bill_order_id: e.id, game: e.game},
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
                if (t) t()
            }
        })
    };
    var m = function (e, r) {
        var t = 0;
        var n = false;
        var a = function (i) {
            sendRequest("/api/market/bill_order/batch/info", {
                data: {bill_orders: i},
                dataType: "json",
                method: "GET",
                timeout: 2e3,
                showLoading: false,
                showError: false,
                success: function (e) {
                    if (e.code != "OK") {
                        return
                    }
                    if (e.data.items.length != 1) {
                        return
                    }
                    n = true;
                    var t = e.data.items[0];
                    if ((t.mode == 2 && t.state == "TO_DELIVER" || t.mode == 5 && t.progress == 305 || t.mode == 7 && t.progress == 202 || t.state == "SUCCESS") && o != undefined) {
                        clearInterval(o);
                        o = undefined;
                        Popup.hide();
                        if (t.mode == 5) {
                            $("#j_popup_payed").remove();
                            var a = template_render("manual_plus_pay_success_pat");
                            $("body").append(a);
                            $("#j_popup_payed #go_to_app,.popup-close").click(function () {
                                Popup.hide();
                                f(t);
                                Buff.toast(i18n("add_in_5_minutes_to"), {type: "success"});
                                setTimeout(function () {
                                    window.location.reload()
                                }, 3e3)
                            });
                            $("#j_popup_payed #ask_seller").click(function () {
                                Popup.hide();
                                sendRequest("/api/market/bill_order/ask_seller_to_send_offer", {
                                    method: "POST",
                                    dataType: "json",
                                    data: {bill_orders: [i], game: t.game},
                                    success: function (e) {
                                        if (e.code != "OK") {
                                            Buff.toast(e.error, {type: "error"})
                                        } else if (e.data[i] != "OK") {
                                            Buff.toast(e.data[i], {type: "error"})
                                        } else {
                                            Buff.toast(i18n("please_wait_for_seller_to"), {type: "success"})
                                        }
                                        setTimeout(function () {
                                            window.location.reload()
                                        }, 3e3)
                                    }
                                })
                            });
                            Popup.show("j_popup_payed", {forceClose: true})
                        } else if (t.mode == 7) {
                            Buff.alert({
                                type: "success",
                                title: i18n("the_payment_is_successful"),
                                safeMessage: i18n("order_pay_success_partner", {game: t.game}),
                                hideCancel: true,
                                success: function () {
                                    window.location.reload()
                                }
                            })
                        } else {
                            Buff.alert({
                                type: "success",
                                title: t.mode == 2 ? i18n("the_payment_is_successful") : i18n("buy_success"),
                                message: t.mode == 2 ? i18n("please_wait_for_the_seller") : t.mode == 7 ? i18n("buy_success") : i18n("please_in_the_backpack_view"),
                                hideCancel: true,
                                success: function () {
                                    window.location.reload()
                                }
                            })
                        }
                    }
                    if (r == s) {
                        if (t.progress == 104 || t.progress == 102 && t.pay_expire_timeout <= 0) {
                            clearInterval(o);
                            o = undefined;
                            $("#j_popup_wx").addClass("expired");
                            $("#j_popup_wx .popup-cont.paying").hide();
                            $("#j_popup_wx .popup-cont.expired").show()
                        } else if (t.progress == 102) {
                            u(t.pay_expire_timeout)
                        }
                    } else if (r == _) {
                        if (t.progress == 104 || t.progress == 102 && t.pay_expire_timeout <= 0) {
                            clearInterval(o);
                            o = undefined;
                            Popup.hide();
                            Buff.alert({
                                title: i18n("prompt"),
                                message: i18n("pay_failed"),
                                hideCancel: true,
                                success: function () {
                                    window.location.reload()
                                }
                            })
                        }
                    }
                },
                error: function () {
                    n = true
                }
            })
        };
        if (r != s) {
            Popup.hide();
            Buff.alert({title: i18n("payment"), message: i18n("please_wait"), hideCancel: true, hideConfirm: true})
        }
        var i = r == s || r == _ ? 300 : 5;
        o = setInterval(function () {
            t += 1;
            if (t == 1 || t <= i && n) {
                n = false;
                a(e)
            } else if (t > i) {
                clearInterval(o);
                o = undefined;
                Popup.hide();
                Buff.alert({
                    title: i18n("payment"),
                    message: i18n("payment_system_is_busy_please"),
                    hideCancel: true,
                    success: function () {
                        window.location.reload()
                    }
                })
            }
        }, 1e3)
    };
    var t = function (e) {
        var t = function (t) {
            sendRequest("/api/asset/send_pay_authcode/", {
                data: {bill_order_id: e},
                dataType: "json",
                method: "POST",
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "warning"});
                        return
                    }
                    t()
                }
            })
        };
        return t
    };
    var h = function (t, a) {
        var e = function (e) {
            sendRequest("/api/asset/verify_pay_authcode/", {
                data: {bill_order_id: t, authcode: e},
                dataType: "json",
                method: "POST",
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "warning"});
                        return
                    }
                    m(t, a)
                }
            })
        };
        return e
    };
    var v = function (i) {
        sendRequest("/api/market/goods/buy/preview", {
            data: {
                game: l.game || a,
                sell_order_id: l.sell_order_id,
                goods_id: l.goods_id,
                price: l.price,
                allow_tradable_cooldown: r,
                cdkey_id: l.cdkey_id
            }, dataType: "json", method: "GET", success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "warning"});
                    return
                }
                Popup.hide();
                var t = payMethodPopup();
                var a = {
                    payment_tips: e.data.payment_tips,
                    pay_methods: e.data.pay_methods,
                    price: e.data.discounted_price,
                    onPaymethodChange: function (e, t, a) {
                        l.pay_method = e;
                        l.free_password = t !== "false";
                        l.ejzb_auth = a
                    },
                    onConfirm: function () {
                        if (l.pay_method == n) {
                            Popup.hide();
                            l.allow_tradable_cooldown = r;
                            l.discounted_price = e.data.discounted_price;
                            splitPayPopup().show(l);
                            return
                        }
                        if (ejzbAuthVerifyManager().process(l.ejzb_auth, t, a, e.data.discounted_price)) {
                            return
                        }
                        if (!l.free_password) {
                            Popup.hide();
                            payPasswordPopup(e.data.discounted_price, function (e) {
                                Popup.hide();
                                p(e)
                            }, function () {
                                Popup.hide();
                                t.show(a);
                                y()
                            }).show();
                            return
                        }
                        p()
                    }
                };
                t.show(a);
                if (i) {
                    if (i == 8 || i == 9) {
                        $("#j_popup_epay .mix-item").closest(".pay-item").data("value", i).click();
                        $("#j_popup_epay .mix-item").show();
                        $('#j_popup_epay .mix-item[data-value="' + i + '"]').hide()
                    } else {
                        $('#j_popup_epay .pay-item[data-value="' + i + '"]').click()
                    }
                }
                y()
            }
        })
    };
    var y = function () {
        sendRequest("/api/activity/coupon/my/", {
            method: "GET",
            data: {state: "unuse", coupon_type: "reduction", order_amount: l.price, sell_order_id: l.sell_order_id},
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
                var t = e.data.items;
                var a = template_render("coupon_info_pat", {items: e.data.items});
                $("#j_popup_epay").find(".coupon-container").html(a);
                Buff.initSelect("#j_select_coupon");
                $('#j_select_coupon li[value="' + l.cdkey_id + '"]').click();
                $("#j_select_coupon").on("change", function () {
                    if (l.cdkey_id == $(this).attr("value")) {
                        return
                    }
                    l.cdkey_id = $(this).attr("value");
                    v($(".pay-item.on").data("value"))
                })
            }
        })
    };
    var b = function () {
        $(document).on("click", ".btn-buy-order", function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass("i_Btn_disabled")) {
                Buff.toast($(this).data("disabled-click-text"), {type: "warning"});
                return
            }
            $(".floattip").trigger("mouseleave");
            var t = $(this).data("sellerid");
            var a = $(this).data("orderid");
            var i = $(this).data("goodsid");
            var r = {
                icon_url: $(this).data("goods-icon-url"),
                name: $(this).data("goods-name"),
                sell_min_price: $(this).data("goods-sell-min-price")
            };
            var n = $(this).data("price");
            var o = $(this).data("mode");
            var s = $(this).data("asset-info");
            if (t == c) {
                Buff.toast(i18n("cannot_purchase_your_own_items"), {type: "warning"});
                return
            }
            l = {};
            l.sell_order_id = a;
            l.goods_id = i;
            l.price = n;
            l.discounted_price = n;
            l.goods = r;
            l.cdkey_id = "";
            l.game = $(this).data("game");
            var _ = function () {
                if (localStorage.getItem("remember_dismiss_check_sticker_wear")) {
                    return v()
                }
                if (!s || !s.info || !s.info.stickers) {
                    return v()
                }
                var e = s.info.stickers;
                var t = false;
                for (var a = 0; a < e.length; a++) {
                    if (e[a].wear > 0) {
                        Buff.alert({
                            title: i18n("prompt"),
                            message: i18n("check_sticker_wear_in_detail"),
                            success: function () {
                                localStorage.setItem("remember_dismiss_check_sticker_wear", "1")
                            },
                            hideCancel: true,
                            confirmText: i18n("i_know")
                        });
                        t = true;
                        break
                    }
                }
                if (!t) {
                    v()
                }
            };
            _()
        });
        $(document).on("click", ".item-detail-img", function (e) {
            if (g.item_detail_popup_appids.indexOf(g.appid) == -1) {
                return
            }
            ItemDetailPopupDecorator("selling-list").show($("tr.selling").index($(this).parent().parent()));
            ItemDetailPopupDecorator("top-bookmark").show($("li.top_bookmark").index($(this).parent()))
        })
    };
    return {init: b, show_wx_pay_qrcode: i, open_pcredit_pay: d, goods_after_pay: m}
};
var supplyBuy = function (e) {
    var t = e;
    var s = g.game;
    var _ = {num: 1};
    var a;
    var c = 6;
    var o;
    var l = function (e) {
    };
    var d = function () {
        var a = [];
        $("#j_popup_supply .w-Select.specific-buy").each(function () {
            var e = $(this).attr("value");
            var t = $(this).data("specific-type");
            if (e) a.push({specific_type: t, value: e})
        });
        var e = $("#j_popup_supply .w-Select.specific-paintwear").attr("value");
        if (e) {
            paintwears = rangeKeyParser.parse(e);
            if (paintwears[0]) a.push({specific_type: "min_paintwear", value: paintwears[0]});
            if (paintwears[1]) a.push({specific_type: "max_paintwear", value: paintwears[1]})
        }
        return a
    };
    var u = function (i, t) {
        var e = _.goods.id;
        var r = _.price;
        var n = _.num;
        var o = _.pay_method;
        var a = d();
        sendRequest("/api/market/buy_order/create", {
            data: {
                game: s,
                goods_id: e,
                price: r,
                num: n,
                pay_method: o,
                allow_tradable_cooldown: $("#buy-order-cooldown").attr("value") ? 1 : 0,
                specific: a,
                password: i
            }, dataType: "json", method: "POST", timeout: 1e4, success: function (e) {
                if (e.code == "BuyOrder Goods Already Buy" || e.code == "BuyOrder Duplicate Conditions") {
                    var a = e.data.buy_order_id;
                    Buff.alert({
                        title: i18n("prompt"),
                        message: i18n("recreate_buy_order_message", {old_price: e.data.price, new_price: r}),
                        confirmText: i18n("recreate"),
                        success: function () {
                            var t = function () {
                                sendRequest("/api/market/buy_order/cancel", {
                                    method: "POST",
                                    data: {game: s, buy_orders: [a]},
                                    success: function (e) {
                                        if (e.code != "OK") {
                                            Buff.toast(e.error, {type: "error"});
                                            return
                                        }
                                        if (e.data[a] != "OK") {
                                            Buff.toast(e.data[a], {type: "error"});
                                            return
                                        }
                                        u(i, i18n("cancel_buy_order_and_recreate"))
                                    }
                                })
                            };
                            sendRequest("/api/market/buy_order/cancel/check_rate_limit", {
                                data: {
                                    game: s,
                                    buy_orders: [a],
                                    early_stop: "1"
                                }, dataType: "json", method: "POST", success: function (e) {
                                    if (e.code == "OK") {
                                        t()
                                    } else {
                                        Buff.toast(e.error, {type: "error"})
                                    }
                                }
                            })
                        }
                    });
                    return
                }
                if (e.code != "OK") {
                    Buff.toast((t || "") + e.error, {type: "error"});
                    $(".pay-btn").removeClass("i_Btn_disabled");
                    return
                }
                Popup.hide();
                if (o == c) {
                    normalBuy(g.user.id).show_wx_pay_qrcode(e.data.id, e.data.frozen_amount, "buy_order", f)
                } else {
                    Buff.toast(i18n("create_buying_success"), {type: "success"});
                    updateNavbarCashAmount();
                    l(n)
                }
            }, complete: function (e) {
                if (e.responseJSON.code == "Realname Required") {
                    $(".pay-btn").removeClass("i_Btn_disabled")
                }
            }
        })
    };
    var p = function (e) {
        var t = 0, a = 0;
        if (e > 0) {
            t = Math.floor(e / 60);
            a = e % 60
        }
        var i = t + i18n("minutes") + a + i18n("seconds");
        $("#pay-remain-time").text(i)
    };
    var f = function (e, t) {
        var a = 0;
        var i = false;
        var r = function (e) {
            sendRequest("/api/market/buy_order/check_state", {
                data: {buy_order_id: e},
                dataType: "json",
                method: "GET",
                timeout: 2e3,
                showLoading: false,
                showError: false,
                success: function (e) {
                    i = true;
                    if (e.code != "OK") {
                        return
                    }
                    var t = e.data.state;
                    if (t == 7 || t == 6 && e.data.pay_expire_timeout < 0) {
                        clearInterval(o);
                        o = undefined;
                        $("#j_popup_wx").addClass("expired");
                        $("#j_popup_wx .popup-cont.paying").hide();
                        $("#j_popup_wx .popup-cont.expired").show()
                    } else if (t == 6) {
                        p(e.data.pay_expire_timeout)
                    } else {
                        clearInterval(o);
                        o = undefined;
                        Popup.hide();
                        Buff.toast(i18n("buy_order_wx_pay_unfrozen"), {type: "success"});
                        l(e.data.num)
                    }
                },
                error: function () {
                    i = true
                }
            })
        };
        var n = 300;
        o = setInterval(function () {
            a += 1;
            if (a == 1 || a <= n && i) {
                i = false;
                r(e)
            } else if (a > n) {
                clearInterval(o);
                o = undefined;
                Popup.hide();
                Buff.alert({
                    title: i18n("payment"),
                    message: i18n("payment_system_is_busy_please"),
                    hideCancel: true,
                    success: function () {
                        window.location.reload()
                    }
                })
            }
        }, 1e3)
    };
    var n = function (e) {
        switch (e.event) {
            case"custom_paintwear_reset":
                $("#j_select-specific-paintwear").find("li").eq(0).click();
                break;
            case"custom_paintwear_confirm":
                var t = e.data["custom_painwear_val"];
                if (!t) {
                    $("#j_select-specific-paintwear").find("li").eq(0).click();
                    break
                }
                $("#j_select-specific-paintwear").find("li").removeClass("on");
                $("#j_select-specific-paintwear").find("#custom-float-range").addClass("on");
                $("#j_select-specific-paintwear h3").text(t);
                $("#j_select-specific-paintwear").attr("value", t);
                $("#j_select-specific-paintwear").trigger("change");
                break
        }
    };
    var i = function () {
        sendRequest("/api/market/goods/info", {
            data: {goods_id: _.goods_id, game: s}, method: "GET", success: function (e) {
                if (!e.data.can_buy) {
                    Buff.toast(i18n("the_goods_is_not_buying"), {type: "error"});
                    return
                }
                _.specific_items = e.data.goods_info.specific;
                _.specific_paintwears = e.data.goods_info.specific_paintwear_buying_choices || [];
                _.goods = e.data;
                _.max_num = MAX_NUM[e.data.appid];
                $("#j_popup_supply").remove();
                $("body").append($(template_render("supply_buy_detail_pat", _)));
                Popup.show("j_popup_supply");
                if (_.specific) {
                    for (var t = 0; t < _.specific.length; t++) {
                        var a = _.specific[t];
                        if (a.type == "unlock_style") {
                            $("#j_popup_supply #j_select-unlock_style").find('li[value="' + a.values[0] + '"]').click()
                        } else if (a.type == "paintwear") {
                            var i = rangeKeyParser.deparse(a.values[0], a.values[1]);
                            var r = $("#j_select-specific-paintwear").find('li[value="' + i + '"]');
                            if (r.length > 0) {
                                r.click()
                            } else {
                                n({event: "custom_paintwear_confirm", data: {custom_painwear_val: i}})
                            }
                        }
                    }
                    _.specific = null
                }
                assetTagFilter().init_float_range_filter({
                    container: "j_select-specific-paintwear",
                    data: {paintwear_choices: e.data.goods_info.specific_paintwear_buying_choices || []},
                    precision: 2,
                    custom_min_placeholder: e.data.paintwear_range[0],
                    custom_max_placeholder: e.data.paintwear_range[1],
                    popup_callback: n,
                    allow_empty: false
                })
            }, error: function (e) {
                Buff.toast(e, {type: "error"})
            }
        })
    };
    var r = function () {
        sendRequest("/api/market/buy_order/create/preview", {
            data: {
                game: s,
                goods_id: _.goods_id,
                price: _.price,
                num: _.num,
                specific: d()
            }, dataType: "json", method: "POST", timeout: 1e4, success: function (i) {
                if (i.code != "OK") {
                    Buff.toast(i.error, {type: "warning"});
                    return
                }
                var e = function () {
                    _.pay_methods = i.data.pay_methods;
                    var e = payMethodPopup();
                    var t = m();
                    var a = {
                        pay_methods: _.pay_methods, price: t, onPaymethodChange: function (e, t, a) {
                            _.pay_method = e;
                            _.free_password = t !== "false";
                            _.ejzb_auth = a
                        }, onConfirm: function () {
                            Popup.hide();
                            if (ejzbAuthVerifyManager().process(_.ejzb_auth, e, a, t)) {
                                return
                            }
                            if (!_.free_password) {
                                payPasswordPopup(t, function (e) {
                                    Popup.hide();
                                    u(e)
                                }, function () {
                                    Popup.hide();
                                    e.show(a)
                                }).show();
                                return
                            }
                            u()
                        }
                    };
                    e.show(a)
                };
                if (i.data.pay_confirm) {
                    var t = i.data.pay_confirm;
                    Buff.alert({
                        title: t.title,
                        message: t.messages,
                        cancelText: t.button_cancel,
                        confirmText: t.button_noted,
                        cancel: function () {
                            $("#j_popup_supply .supply-buy-confirm-btn").removeClass("i_Btn_disabled");
                            $("#j_popup_supply input[name=price]").focus()
                        },
                        success: function () {
                            e()
                        }
                    })
                } else {
                    e()
                }
            }
        })
    };
    var m = function () {
        return (_.price * _.num).toFixed(2)
    };
    var h = function () {
        if (_.price && _.num) {
            var e = m();
            $("#j_popup_supply .total_amount").html(formatPriceYuan(e));
            $("#j_popup_supply .total_amount_custom").html(formatPriceCustom(e))
        }
    };
    var v = function (e) {
        var e = e || {};
        l = e.onFinishCreateBuying || function () {
        };
        $(document).on("click", ".btn-supply-buy", function (e) {
            e.preventDefault();
            var t = $(this).data("goodsid");
            _ = {num: 1};
            _.goods_id = t;
            _.specific = $(this).data("specific");
            var a = this;
            sendRequest("/account/api/user/info/v2", {
                dataType: "json", method: "GET", success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error);
                        return
                    }
                    if (g.is_partner_appid) {
                        if (e.data.user_info.partner_role_info && e.data.user_info.partner_role_info[g.game]) {
                            i()
                        } else {
                            userProfile().initBindBadlanders();
                            Popup.show("j_popup_g101_bind")
                        }
                        return
                    }
                    if (e.data.user_info.steamid) {
                        if (e.data.user_info.trade_url) {
                            i()
                        } else {
                            Buff.alert({
                                title: i18n("prompt"),
                                message: i18n("you_have_yet_to_bind"),
                                hideCancel: true,
                                success: function () {
                                    window.open("/user-center/profile", "_blank")
                                }
                            })
                        }
                    } else {
                        Buff.alert({
                            title: i18n("unbound_steam"),
                            message: i18n("detects_that_you_are_also"),
                            hideCancel: true,
                            confirmText: i18n("to_bind"),
                            success: function () {
                                window.open("/user-center/profile", "_blank")
                            }
                        })
                    }
                }
            })
        });
        $(document).on("change", ".w-Select.specific-buy,.w-Select.specific-paintwear", function () {
            var e = d();
            var t = $(this).data("goodsid");
            sendRequest("/api/market/buy_order/specific_preview", {
                data: {game: s, goods_id: t, specific: e}, dataType: "json", method: "POST", success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    $("#j_popup_supply .iconWrapper img").attr("src", e.data.icon_url);
                    if (e.data.buy_max_price == "-") {
                        $("#j_popup_supply .buy-MaxPrice").text("-");
                        $("#j_popup_supply .buy-MaxPrice").siblings(".hide-cny").text("")
                    } else {
                        $("#j_popup_supply .buy-MaxPrice").text(formatPriceNormalYuan(e.data.buy_max_price));
                        $("#j_popup_supply .buy-MaxPrice").siblings(".hide-cny").text("(" + formatPriceNormalCustom(e.data.buy_max_price) + ")")
                    }
                    if (e.data.sell_min_price == "-") {
                        $("#j_popup_supply .sell-MinPrice").text("-");
                        $("#j_popup_supply .sell-MinPrice").siblings(".hide-cny").text("")
                    } else {
                        $("#j_popup_supply .sell-MinPrice").text(formatPriceNormalYuan(e.data.sell_min_price));
                        $("#j_popup_supply .sell-MinPrice").siblings(".hide-cny").text("(" + formatPriceNormalCustom(e.data.sell_min_price) + ")")
                    }
                    if ("buy_min_price_limit" in e.data) {
                        var t = $("#j_popup_supply .buyPrice").val();
                        if (t && parseFloat(t) < parseFloat(e.data.buy_min_price_limit)) {
                            $("#j_popup_supply .buyPrice").val("")
                        }
                        $("#j_popup_supply .buyPrice").attr("placeholder", i18n("buy_order_min_price", {min_price: e.data.buy_min_price_limit}))
                    }
                }
            })
        });
        $(document).on("input", "#j_popup_supply input[name=price]", function () {
            if (a) {
                clearTimeout(a)
            }
            $("#j_popup_supply").find("#purchase-price-custom").text("");
            var e = parseFloat($("#j_popup_supply input[name=price]").val());
            if (e < .01) {
                a = setTimeout(function () {
                    Buff.toast(i18n("buy_price_cannot_be_less"), {type: "error"})
                }, 1e3);
                $("#j_popup_supply .supply-buy-confirm-btn").addClass("i_Btn_disabled");
                return
            }
            if (Number.isNaN(e)) {
                $("#j_popup_supply .supply-buy-confirm-btn").addClass("i_Btn_disabled");
                return
            }
            _.price = e;
            $("#j_popup_supply .supply-buy-confirm-btn").removeClass("i_Btn_disabled");
            h();
            $("#j_popup_supply").find("#purchase-price-custom").text(formatPriceNormalCustom(e, true))
        });
        $(document).on("change", "#j_popup_supply .w-Steper", function () {
            var e = parseInt($("#j_popup_supply input[name=num]").val());
            _.num = e;
            h()
        });
        $(document).on("click", "#j_popup_supply .supply-buy-confirm-btn", function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            r()
        })
    };
    return {init: v, onFinishCreateBuying: l, polling_after_pay: f}
};
var bargain = function () {
    var n = {};
    var e = null;
    var t = 6;
    var o;
    var i = function () {
        var e = parseFloat($("#bargain-price").val() || 0);
        $(".bargain-confirm-btn").addClass("i_Btn_disabled");
        $(".total_amount").html(formatPriceYuan(e));
        if (e > 0 && e < n.lowest_bargain_price) {
            Buff.toast(i18n("counteroffer_price_cannot_be_lower"), {type: "error"});
            return
        }
        if (e > 0 && e >= n.selling_price) {
            Buff.toast(i18n("bargain_price_must_be_lower"), {type: "error"});
            return
        }
        if (e > 0) {
            $(".bargain-confirm-btn").removeClass("i_Btn_disabled")
        }
        return e
    };
    var a = function () {
        Buff.pricePatten("#bargain-price")
    };
    var r = function () {
        $("#j_popup_pay").remove();
        $("#j_popup_batchbuy").remove();
        $("#j_popup_supply").remove();
        $("#j_popup_bargain").remove();
        var e = template_render("bargain_detail_pat", n);
        $("body").append(e);
        Popup.show("j_popup_bargain");
        a();
        $('#pay_method li[data-selected="true"]').click()
    };
    var s = function (e) {
        sendRequest("/api/market/buyer_bargain/create", {
            method: "POST",
            data: {
                sell_order_id: n.sell_order_id,
                price: $("#bargain-price").val(),
                pay_method: n.pay_method,
                password: e
            },
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
                Popup.hide();
                if (n.pay_method == t) {
                    normalBuy(g.user.id).show_wx_pay_qrcode(e.data.id, e.data.price, "buyer_bargain", l);
                    return
                }
                _()
            }
        })
    };
    var _ = function () {
        if ($(".bargain-confirm-btn").data("mode") == 5) {
            Buff.alert({
                title: i18n("counteroffer_request_has_been_sent"),
                message: i18n("instrongmy_counterofferstrongattention_counteroffer_status_the"),
                hidecancel: true
            })
        } else {
            Buff.toast(i18n("counteroffer_request_has_been_sent"), {type: "success"})
        }
    };
    var c = function (e) {
        var t = 0, a = 0;
        if (e > 0) {
            t = Math.floor(e / 60);
            a = e % 60
        }
        var i = t + i18n("minutes") + a + i18n("seconds");
        $("#pay-remain-time").text(i)
    };
    var l = function (e, t) {
        var a = 0;
        var i = false;
        var r = function (e) {
            sendRequest("/api/market/buyer_bargain/check_state", {
                data: {bargain_id: e},
                dataType: "json",
                method: "GET",
                timeout: 2e3,
                showLoading: false,
                showError: false,
                success: function (e) {
                    i = true;
                    if (e.code != "OK") {
                        return
                    }
                    var t = e.data.state;
                    if (t == 7 || t == 6 && e.data.pay_expire_timeout < 0) {
                        clearInterval(o);
                        o = undefined;
                        $("#j_popup_wx").addClass("expired");
                        $("#j_popup_wx .popup-cont.paying").hide();
                        $("#j_popup_wx .popup-cont.expired").show()
                    } else if (t == 6) {
                        c(e.data.pay_expire_timeout)
                    } else {
                        clearInterval(o);
                        o = undefined;
                        Popup.hide();
                        _()
                    }
                },
                error: function () {
                    i = true
                }
            })
        };
        var n = 300;
        o = setInterval(function () {
            a += 1;
            if (a == 1 || a <= n && i) {
                i = false;
                r(e)
            } else if (a > n) {
                clearInterval(o);
                o = undefined;
                Popup.hide();
                Buff.alert({
                    title: i18n("payment"),
                    message: i18n("payment_system_is_busy_please"),
                    hideCancel: true,
                    success: function () {
                        window.location.reload()
                    }
                })
            }
        }, 1e3)
    };
    var d = function () {
        $("body").on("click", ".bargain", function (e) {
            e.stopPropagation();
            $(".floattip").trigger("mouseleave");
            var t = {
                goods: {
                    id: $(this).data("goodsid"),
                    name: $(this).data("goods-name"),
                    icon_url: $(this).data("goods-icon-url")
                },
                price: $(this).data("price"),
                lowest_bargain_price: $(this).data("lowest-bargain-price"),
                sell_order_id: $(this).data("orderid"),
                mode: $(this).data("mode"),
                selling_price: $(this).data("price"),
                asset_info: $(this).data("asset-info")
            };
            n = t;
            r()
        });
        $(document).on("input", "#bargain-price", function () {
            $("#bargain-price-custom").html("");
            $("#j_popup_bargain .bargain-confirm-btn").removeClass("i_Btn_disabled");
            var e = $(this).val();
            if (e) $("#bargain-price-custom").html(formatPriceNormalCustom(e, true))
        });
        $(document).on("change", "#bargain-price", function () {
            i()
        });
        $(document).on("click", "#j_popup_bargain .bargain-confirm-btn", function () {
            if ($(this).hasClass("i_Btn_disabled")) return;
            $(this).addClass("i_Btn_disabled");
            var a = i();
            n.price = a;
            var e = $(this).data("asset-info");
            var r = function () {
                sendRequest("/api/market/buyer_bargain/create/preview", {
                    data: {
                        sell_order_id: n.sell_order_id,
                        price: n.price
                    }, dataType: "json", method: "GET", success: function (e) {
                        if (e.code != "OK") {
                            Buff.toast(e.error, {type: "warning"});
                            return
                        }
                        n.pay_methods = e.data.pay_methods;
                        var t = function () {
                            var e = payMethodPopup();
                            var t = {
                                pay_methods: n.pay_methods, price: a, onPaymethodChange: function (e, t, a) {
                                    n.pay_method = e;
                                    n.free_password = t !== "false";
                                    n.ejzb_auth = a
                                }, onConfirm: function () {
                                    Popup.hide();
                                    if (ejzbAuthVerifyManager().process(n.ejzb_auth, e, t, a)) {
                                        return
                                    }
                                    if (!n.free_password) {
                                        payPasswordPopup(a, function (e) {
                                            Popup.hide();
                                            s(e)
                                        }, function () {
                                            Popup.hide();
                                            e.show(t)
                                        }).show();
                                        return
                                    }
                                    s()
                                }
                            };
                            e.show(t)
                        };
                        if (e.data.pay_confirm) {
                            Buff.alert({
                                title: e.data.pay_confirm.title,
                                message: e.data.pay_confirm.messages,
                                confirmText: e.data.pay_confirm.button_noted,
                                cancelText: e.data.pay_confirm.button_cancel,
                                success: t
                            })
                        } else {
                            t()
                        }
                    }
                })
            };
            var t = function () {
                if (localStorage.getItem("remember_dismiss_check_sticker_wear")) {
                    return r()
                }
                var e = n.asset_info;
                if (!e || !e.info || !e.info.stickers) {
                    return r()
                }
                var t = e.info.stickers;
                var a = false;
                for (var i = 0; i < t.length; i++) {
                    if (t[i].wear > 0) {
                        Buff.alert({
                            title: i18n("prompt"),
                            message: i18n("check_sticker_wear_in_detail"),
                            success: function () {
                                localStorage.setItem("remember_dismiss_check_sticker_wear", "1")
                            },
                            hideCancel: true,
                            confirmText: i18n("i_know")
                        });
                        a = true;
                        break
                    }
                }
                if (!a) {
                    r()
                }
            };
            t()
        })
    };
    return {init: d, polling_after_pay: l}
};
var payMethodPopup = function () {
    "use strict";
    var e, o = function () {
    }, s = function () {
    }, _ = function () {
    }, c = function () {
    }, t = function (e) {
        var t = e.payment_tips || "";
        var a = e.pay_methods || [];
        var i = e.price || "0";
        var r = e.pay_content || "";
        o = e.onPaymethodChange || function () {
        };
        s = e.onPayContentChange || function () {
        };
        _ = e.onConfirm || function () {
        };
        c = e.onClose || function () {
        };
        $("#j_popup_epay").remove();
        $("body").append($(template_render("pay_popup_confirm", {
            payment_tips: t,
            pay_methods: a,
            price: i,
            pay_content: r
        })));
        Popup.show("j_popup_epay");
        $("#j_popup_epay .pay-item.on").click();
        var n = $("#ul-container ul li.on");
        n.click();
        s(n.data("value"), n.data("price-value"))
    }, r = function (e, t) {
        if (!t) {
            return e
        }
        var a = parseFloat(e) * 100;
        var i = a * parseFloat(t) / 100;
        var r = parseInt(Math.ceil(a + i));
        return r / 100
    }, a = function () {
        $(document).on("click", "#j_popup_epay .pay-item", function () {
            $("#j_popup_epay .pay-item").removeClass("on");
            $(this).addClass("on");
            var e = $(this).data("method");
            $("#j_popup_epay .pay-btn").text(e.btn_text);
            $("#j_popup_epay .pay-btn").removeClass("error-pay");
            $("#j_popup_epay .pay-btn").removeClass("i_Btn_disabled");
            if (e.error_entry) {
                $("#j_popup_epay .pay-btn").addClass("error-pay");
                $("#j_popup_epay .pay-btn").data("url", e.error_entry.url)
            } else {
                if (e.error) {
                    $("#j_popup_epay .pay-btn").addClass("i_Btn_disabled")
                }
                o($(this).data("value"), $(this).attr("data-free_password"), $(this).data("ejzb_auth") || {})
            }
            var t = e.pay_fee_rate;
            var a = $("#ul-container ul li.on").data("price-value");
            var i = r(a, t);
            $("#j_popup_epay .total_price").text(formatPriceNormalYuan(i));
            $("#j_popup_epay .total_price_custom").text(formatPriceNormalCustom(i));
            if ($(this).data("value") == 43) {
                $("#j_popup_epay .scope-count:not(.balance-not-frozen)").hide();
                $("#j_popup_epay .scope-count.balance-not-frozen").show()
            } else {
                $("#j_popup_epay .scope-count.balance-not-frozen").hide();
                $("#j_popup_epay .scope-count:not(.balance-not-frozen)").show()
            }
        });
        $(document).on("click", "#ul-container ul li", function () {
            $("#ul-container ul li").removeClass("on");
            $(this).addClass("on");
            s($(this).data("value"), $(this).data("price-value"));
            var e = $("#j_popup_epay .pay-item.on").data("method");
            if (!e) {
                console.log("no pay method selected");
                return
            }
            var t = e.pay_fee_rate;
            var a = $(this).data("price-value");
            var i = r(a, t);
            $("#j_popup_epay .total_price").text(formatPriceNormalYuan(i));
            $("#j_popup_epay .total_price_custom").text(formatPriceNormalCustom(i));
            if ($(this).data("value") == 43) {
                $("#j_popup_epay .scope-count:not(.balance-not-frozen)").hide();
                $("#j_popup_epay .scope-count.balance-not-frozen").show()
            } else {
                $("#j_popup_epay .scope-count.balance-not-frozen").hide();
                $("#j_popup_epay .scope-count:not(.balance-not-frozen)").show()
            }
        });
        $(document).on("click", "#j_popup_epay .mix-shift", function (e) {
            e.stopPropagation();
            $("#j_popup_epay .mix-item").show();
            $(this).parent(".mix-item").hide();
            var t = $(this).parent(".mix-item").data("value");
            var a = $(this).parent(".mix-item").attr("data-free_password");
            if ($(this).closest(".pay-item").hasClass("on")) o(t, a);
            $(this).closest(".pay-item").data("value", t)
        });
        $(document).on("click", "#j_popup_epay .first-use-shift", function (e) {
            e.stopPropagation();
            var t = $(this).data("first-use") == "alipay" ? "epay" : "alipay";
            var a = $(this);
            sendRequest("/account/api/prefer/balance_first_use", {
                method: "POST",
                data: {balance_first_use: t},
                showLoading: false,
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    Buff.toast(i18n("set_success"), {type: "success"});
                    a.parent().get(0).childNodes[0].nodeValue = i18n("first_use_" + t + "_balance");
                    a.data("first-use", t)
                }
            })
        });
        $(document).on("click", "#j_popup_epay .pay-btn", function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            if ($(this).hasClass("error-pay")) {
                window.open($(this).data("url"))
            } else {
                _()
            }
        });
        $(document).on("click", "#j_popup_epay .popup-close", function () {
            Popup.hide();
            c()
        });
        $(document).on("click", "#j_popup_epay #j_fold-handler", function () {
            $("#j_popup_epay .pay-method-list").css("height", $(this).attr("data-total-height"));
            $(this).parent().remove()
        })
    }, i = function (e, t) {
        t = $.isEmptyObject(t) ? "" : t;
        var a = "data-" + e;
        $("#j_popup_epay .pay-item").each(function () {
            var e = $(this).attr(a);
            if (typeof e !== "undefined" && e !== false) {
                $(this).attr(a, JSON.stringify(t))
            }
        })
    };
    return function () {
        if (!e) {
            a();
            e = {show: t, update_attr: i}
        }
        return e
    }
}();
var supplySell = function (e) {
    var o = e;
    var s = g.game;
    var a;
    var _ = 50;
    var t;
    var c = [];
    var r = function (e, t, a) {
        if (g.is_partner_appid) {
            var i = "/api/market/goods/supply/partner";
            var r = false;
            var n = false
        } else {
            var r = $("#j_popup_supply_sell_preview #jNav li.inventory").hasClass("on");
            var n = $(".inventory").hasClass("allow-plus");
            var i = "/api/market/goods/supply";
            if (r) {
                if (n) {
                    i = "/api/market/goods/supply/manual_plus"
                } else {
                    i = "/api/market/goods/supply/manual"
                }
            }
        }
        sendRequest(i, {
            data: {
                game: s,
                assets: a,
                price: t.price,
                buy_order_id: t.id,
                buyer_auto_accept: t.buyer_auto_accept
            },
            dataType: "json",
            method: "POST",
            timeout: BuffConfig.STEAM_TIMEOUT + 1e3 * a.length,
            success: function (e) {
                Popup.hide();
                if (e.code != "OK") {
                    Buff.alert({
                        title: i18n("supply_failure"),
                        message: e.error,
                        hideCancel: true,
                        success: function () {
                            window.location.reload()
                        }
                    });
                    return
                }
                if (r) {
                    if (n) {
                        Buff.alert({
                            title: i18n("prompt"),
                            message: i18n("please_go_to_buff_the"),
                            hideCancel: true,
                            success: function () {
                                window.location.reload()
                            }
                        })
                    } else {
                        Buff.alert({
                            title: i18n("prompt"),
                            message: i18n("please_go_to_my_sell"),
                            hideCancel: true,
                            confirmText: i18n("to_shipping"),
                            success: function () {
                                window.location.href = "/market/sell_order/to_deliver?game=" + s
                            }
                        })
                    }
                } else {
                    Buff.alert({
                        title: i18n("supply_success"),
                        message: i18n("successful_supply") + a.length + i18n("piece_of_goods"),
                        hideCancel: true,
                        success: function () {
                            window.location.reload()
                        }
                    })
                }
            }
        })
    };
    var l = function (e, i) {
        $("#j_popup_supply_sell_preview").remove();
        var t = template_render("supply_sell_preview_pat", {goods: e, buy_order: i});
        $("body").append($(t));
        Popup.show("j_popup_supply_sell_preview");
        $("#j_popup_supply_sell_preview .packlist").showLoading();
        $("#j_popup_supply_sell_preview").find("#supply-confirm").click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            $(this).addClass("i_Btn_disabled");
            r(e, i, c)
        });
        $("#j_popup_supply_sell_preview #jNav li").click(function () {
            if ($(this).hasClass("on")) return;
            jQuery.xhrPool.abort(a);
            $("#j_popup_supply_sell_preview #jNav li").removeClass("on");
            $(this).addClass("on");
            $("#j_popup_supply_sell_preview .packlist").showLoading();
            $("#j_popup_supply_sell_preview").find("#supply-confirm").addClass("i_Btn_disabled");
            $("#supply_sell_fee").html(formatPriceNormalYuan(0));
            $("#supply_sell_total_price").html(formatPriceYuan(0));
            $("#supply_sell_total_price_custom").html(formatPriceNormalCustom(0));
            $("#selected-backpack-num").text(0);
            c = [];
            n(e, i, $(this).hasClass("inventory"))
        });
        $("#j_popup_supply_sell_preview .refresh-inventory").click(function () {
            $(this).hide();
            $("#j_popup_supply_sell_preview .packlist").showLoading();
            $("#j_popup_supply_sell_preview").find("#supply-confirm").addClass("i_Btn_disabled");
            $("#supply_sell_fee").html(formatPriceNormalYuan(0));
            $("#supply_sell_total_price").html(formatPriceYuan(0));
            $("#supply_sell_total_price_custom").html(formatPriceNormalCustom(0));
            $("#selected-backpack-num").text(0);
            c = [];
            n(e, i, true, 1)
        });
        $("#j_popup_supply_sell_preview #supply_all").change(function () {
            if (!$(this).attr("value")) {
                var e = "#j_popup_supply_sell_preview .packcard li.on, #j_popup_supply_sell_preview .card_csgo li.on";
                $(e).each(function (e, t) {
                    $(t).trigger("click")
                });
                return
            }
            var t = c.length;
            var a = Math.min(i.remain_num, _) - t;
            var e = "#j_popup_supply_sell_preview .packcard li:not(.on), #j_popup_supply_sell_preview .card_csgo li:not(.on)";
            $(e).splice(0, a).forEach(function (e) {
                $(e).trigger("click")
            })
        });
        c = [];
        n(e, i, $("#j_popup_supply_sell_preview #jNav li.inventory").hasClass("on"))
    };
    var n = function (r, n, o, e) {
        if (g.is_partner_appid) {
            var t = "/api/market/goods/supply/preview/partner/v2"
        } else {
            var t = o ? "/api/market/goods/supply/preview/manual/v2" : "/api/market/goods/supply/preview/v2"
        }
        a = t;
        sendRequest(t, {
            data: {buy_order_id: n.id, game: s, force_update: e},
            dataType: "json",
            showLoading: false,
            timeout: BuffConfig.STEAM_TIMEOUT,
            method: "GET",
            success: function (a) {
                var e = "";
                if (a.code != "OK") {
                    Buff.toast(a.error, {type: "error"});
                    e = template_render("supply_sell_preview_list_pat", {error: a.error})
                } else {
                    e = template_render("supply_sell_preview_list_pat", {
                        backpacks: a.data.items,
                        matched_assetids: a.data.matched_assetids,
                        goods: r,
                        buy_order: n,
                        manual: o,
                        preview_screenshots: a.data.preview_screenshots || {}
                    });
                    $("#total-backpack-num").text(a.data.items.length);
                    if (o && a.data.allow_plus) {
                        $(".inventory").addClass("allow-plus")
                    } else {
                        $(".inventory").removeClass("allow-plus")
                    }
                }
                $("#j_popup_supply_sell_preview .packlist").html(e);
                var i = function (e) {
                    switch (e) {
                        case"off":
                            Buff.setCompValue("supply_all", "");
                            $("#supply_all span").removeClass("on");
                            break;
                        case"on":
                            Buff.setCompValue("supply_all", $("#supply_all span").attr("value"));
                            $("#supply_all span").addClass("on");
                            break
                    }
                };
                i("off");
                var t = "#j_popup_supply_sell_preview .packcard li:not(.disabled), #j_popup_supply_sell_preview .card_csgo li:not(.disabled)";
                $(document).off("click", t).on("click", t, function () {
                    var e = {
                        game: $(this).attr("data-game"),
                        contextid: $(this).attr("data-contextid"),
                        assetid: $(this).attr("data-assetid"),
                        classid: $(this).attr("data-classid"),
                        instanceid: $(this).attr("data-instanceid"),
                        market_hash_name: $(this).attr("data-market-hash-name")
                    };
                    if ($(this).hasClass("on")) {
                        $(this).removeClass("on");
                        var t = 0;
                        for (; t < c.length; t++) {
                            if (c[t].contextid === e.contextid && c[t].assetid === e.assetid && c[t].classid === e.classid && c[t].instanceid === e.instanceid) {
                                break
                            }
                        }
                        if (t < c.length) {
                            c.splice(t, 1)
                        }
                    } else {
                        if (c.length >= n.remain_num) return;
                        if (c.length >= _) {
                            Buff.toast(i18n("supply_max_limit"), {type: "warning"});
                            return
                        }
                        $(this).addClass("on");
                        c.push(e)
                    }
                    $("#selected-backpack-num").text(c.length);
                    if (c.length > 0) {
                        $("#j_popup_supply_sell_preview").find("#supply-confirm").removeClass("i_Btn_disabled")
                    } else {
                        $("#j_popup_supply_sell_preview").find("#supply-confirm").addClass("i_Btn_disabled")
                    }
                    if (c.length >= Math.min(_, n.remain_num) || c.length >= a.data.matched_assetids.length) {
                        $("#j_popup_supply_sell_preview").find(".packcard li,.card_csgo li").each(function () {
                            if (!$(this).hasClass("on")) {
                                $(this).find(".mask").css("display", "block")
                            } else {
                                $(this).find(".mask").hide()
                            }
                        });
                        i("on")
                    } else {
                        $("#j_popup_supply_sell_preview").find(".mask").hide();
                        i("off")
                    }
                    $("#supply_sell_fee").html(formatPriceNormalYuan(c.length * a.data.fee));
                    $("#supply_sell_total_price").html(formatPriceYuan(c.length * (n.price - a.data.fee)));
                    $("#supply_sell_total_price_custom").html(formatPriceNormalCustom(c.length * (n.price - a.data.fee)))
                });
                if (o) {
                    $("#j_popup_supply_sell_preview").find(".refresh-inventory").show()
                } else {
                    $("#j_popup_supply_sell_preview").find(".refresh-inventory").hide()
                }
            }
        })
    };
    var i = function () {
        $(document).on("click", ".btn-supply-sell", function (e) {
            e.preventDefault();
            var t = $(this).data("buyerid");
            var a = $(this).data("orderid");
            var i = {
                icon_url: $(this).data("goods-icon-url"),
                name: $(this).data("goods-name"),
                sell_min_price: $(this).data("goods-sell-min-price"),
                market_hash_name: $(this).data("goods-market-hash-name"),
                rarity: $(this).data("goods-rarity"),
                can_inspect: $(this).data("can-inspect"),
                can_3d_inspect: $(this).data("can-3d-inspect")
            };
            var r = $(this).data("price");
            if (t == o) {
                Buff.toast(i18n("can_not_supply_your_own"), {type: "warning"});
                return
            }
            var n = {
                id: a,
                user_id: t,
                remain_num: $(this).data("remain-num"),
                price: r,
                specific: $(this).data("specific"),
                buyer_auto_accept: $(this).data("buyer-auto-accept")
            };
            l(i, n)
        })
    };
    return {init: i}
};
var custom_sticker = function (e) {
    var a = null;
    var i = false;
    var t = null;
    var d = null;
    var u = "#custom_sticker_use_suggestion";
    var r = "sticker";
    var p = "patch";
    var n = function (e, t) {
        var a = {};
        if (e) {
            a["category"] = e;
            a["add_category_tag"] = i
        }
        if (f()) {
            a = {tag_name: p}
        }
        if (t) {
            a["search"] = t
        }
        return a
    };
    var f = function () {
        return e == p ? true : false
    };
    var m = function () {
        return e == r ? true : false
    };
    var s = function (i, r) {
        clearTimeout(t);
        t = setTimeout(function () {
            var e = "/api/market/order_tags";
            var t = {page_num: r || 1, game: "csgo", page_size: 20, use_suggestion: $(u).val()};
            for (var a in i) {
                t[a] = i[a]
            }
            if ($(u).attr("tag_ids")) {
                t["tag_ids"] = $(u).attr("tag_ids")
            }
            d = i["search"];
            sendRequest(e, {
                method: "GET",
                data: t,
                dataType: "json",
                showLoading: true,
                async: false,
                success: function (e) {
                    var t = "";
                    var a = "#popup_order_tags_list";
                    $(a).showLoading();
                    if (e.code == "OK") {
                        $("#stickers_list_pager").remove();
                        $(a).removeLoading();
                        t = template_render("sticks_list_pat", e.data);
                        $(a).html(t);
                        $("#popup_custom_sticker #popup_flower-con").scrollTop(0);
                        $("#popup_custom_patch #popup_flower-con").scrollTop(0);
                        if (e.data.total_page > 1) {
                            $(a).append('<div class="pager" id="stickers_list_pager"></div>');
                            renderPagination({
                                pager_name: "#stickers_list_pager",
                                total_count: e.data.total_count,
                                page_size: e.data.page_size,
                                page_num: r,
                                displayed_pages: 3,
                                onPageClick: function (e, t) {
                                    t.preventDefault();
                                    s(i, e)
                                }
                            })
                        }
                    } else {
                        $(a).removeLoading();
                        $(a).html(t);
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        }, 200)
    };
    var h = function () {
        var e = $("#search_input").val();
        if (e) {
            s(n("", e));
            $("#popup_flower-aside-con").find("li.sticker_item").css("background", "")
        }
    };

    function c(e, t) {
        var a = 300;
        if (a) {
            var i = t.getBoundingClientRect();
            if (e.nodeType === 1) {
                e = e.getBoundingClientRect()
            }
            o(t, "transition", "none");
            o(t, "transform", "translate3d(" + (e.left - i.left) + "px," + (e.top - i.top) + "px,0)");
            t.offsetWidth;
            o(t, "transition", "all " + a + "ms");
            o(t, "transform", "translate3d(0,0,0)");
            clearTimeout(t.animated);
            t.animated = setTimeout(function () {
                o(t, "transition", "");
                o(t, "transform", "");
                t.animated = false
            }, a)
        }
    }

    function o(e, t, a) {
        var i = e && e.style;
        if (i) {
            if (a === void 0) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    a = document.defaultView.getComputedStyle(e, "")
                } else if (e.currentStyle) {
                    a = e.currentStyle
                }
                return t === void 0 ? a : a[t]
            } else {
                if (!(t in i)) {
                    t = "-webkit-" + t
                }
                i[t] = a + (typeof a === "string" ? "" : "px")
            }
        }
    }

    var l = function (e, t) {
        if ($("#search_input").val()) {
            h()
        } else {
            var a = function (e) {
                var t = e.split(",");
                var a = [];
                var i = {};
                var r = /slot_(\d)_/;
                for (var n in t) {
                    var o = t[n];
                    var s = o.match(r);
                    if (s) {
                        i[s[1]] = o.replace(s[0], "")
                    } else {
                        a.push({slot_index: n, tag_id: o})
                    }
                }
                if (a.length) {
                    return a
                }
                for (var n = 0; n < 4; n++) {
                    var o = i[n.toString()];
                    if (o) {
                        a.push({slot_index: n, tag_id: o})
                    }
                }
                return a
            };
            var i = k();
            var r = false;
            if (!i) {
                i = t || getParamsFromHash().extra_tag_ids;
                if (i && !["empty", "non_empty", "squad_combos"].includes(i)) {
                    v();
                    var l = a(i);
                    var n = [];
                    l.forEach(function (e) {
                        n.push(e.tag_id)
                    });
                    var o = "/api/market/order_tags";
                    var s = {game: g.game, tag_ids: n.join(",")};
                    if (f()) {
                        s["tag_name"] = p
                    }
                    sendRequest(o, {
                        method: "GET",
                        data: s,
                        dataType: "json",
                        showLoading: false,
                        success: function (e) {
                            if (e.code != "OK") {
                                Buff.toast(e.error, {type: "error"});
                                return
                            }
                            var t = e.data.items;
                            var a = {};
                            for (var i = 0; i < t.length; i++) {
                                var r = t[i];
                                a[r.id.toString()] = r
                            }
                            var n = $("#sticker-drag").find("li");
                            for (var i = 0; i < l.length; i++) {
                                var o = l[i];
                                var s = a[o.tag_id];
                                var _ = n[o.slot_index];
                                var c = $(_).find("div");
                                y(c, s.id, s.value, s.icon_url, _)
                            }
                        }
                    })
                }
                $("#popup_flower-aside-con ul li.sticker_item").first().trigger("click")
            } else {
                r = true
            }
        }
        var _ = function (e, t) {
            switch (t) {
                case"off":
                    Buff.setCompValue(e, "");
                    $("#" + e + " span").removeClass("on");
                    break;
                case"on":
                    Buff.setCompValue(e, $("#" + e + " span").attr("value"));
                    $("#" + e + " span").addClass("on");
                    break
            }
        };
        if (t && m()) {
            $("#popup_custom_sticker #confirm").attr("event", "custom_sticker_confirm_jump")
        }
        Popup.show(e);
        var c = r ? {extra_tag_ids: k(), wearless_sticker: w()} : getParamsFromHash();
        if ("extra_tag_ids" in c || "wearless_sticker" in c) {
            _("sticker_position_checkbox", "off");
            _("sticker_wearless_checkbox", "off")
        }
        c.extra_tag_ids && c.extra_tag_ids.includes("slot_") ? $("#sticker_position_checkbox").find("span").trigger("click") : "";
        c.wearless_sticker ? _("sticker_wearless_checkbox", "on") : "";
        setTimeout(function () {
            if ($(".custom_sticker_search_input-result-list").length == 0) {
                $("#custom_sticker_search_input").append('<ul class="custom_sticker_search_input-result-list"></ul>')
            }
            new Autocomplete("#custom_sticker_search_input", {
                search: function (n) {
                    return new Promise(function (t, e) {
                        var a = n.trim();
                        if (a.length < 1) {
                            return t([])
                        }
                        var i = "/api/market/sticker/suggest?";
                        var r = {text: a, game: g.game};
                        sendRequest(i, {
                            method: "GET",
                            data: r,
                            dataType: "json",
                            showLoading: false,
                            success: function (e) {
                                if (e.code != "OK") {
                                    Buff.toast(e.error, {type: "error"});
                                    return
                                }
                                if (d != a) {
                                    $(u).val("0");
                                    $(u).removeAttr("tag_ids")
                                }
                                if (!e.data || !e.data.suggestions) {
                                    return t([])
                                }
                                t(e.data.suggestions)
                            }
                        })
                    })
                }, getResultValue: function (e) {
                    return e.option
                }, onSubmit: function (e) {
                    if (!$.isEmptyObject(e)) {
                        $(u).val("1");
                        $(u).attr("tag_ids", e.tag_ids)
                    }
                    $("#search_input").trigger("change")
                }
            })
        }, 1e3)
    };
    var v = function () {
        var a = $("#sticker-drag").find("li");
        a.filter(function (e) {
            var t = a.eq(e);
            if (t.find("img").length) {
                t.find(".icon_delete").trigger("click")
            }
        })
    };
    var y = function (e, t, a, i, r) {
        var n = document.createElement("i");
        n.className = "icon icon_delete";
        var o = e[0];
        $(n).insertBefore(o);
        var s = document.createElement("img");
        s.src = i;
        $(s).attr("id", t);
        $(o).append(s);
        $(o).append(s);
        $(o).append('<span class="scope-copy"><i class="icon2x icon_copy"></i>' + i18n("sticker_copy") + "</span>");
        $(r).attr("data-title", a)
    };
    var b = function () {
        return $("#sticker_position_checkbox").attr("value")
    };
    var w = function () {
        return $("#sticker_wearless_checkbox").attr("value")
    };
    var k = function () {
        var e = b();
        var i = e ? "slot_" : "";
        var r = [];
        $("#sticker-drag").find("li").each(function (e, t) {
            var a = $(t).find("img");
            if (a.length) {
                if (i) {
                    r.push(i + e + "_" + $(a[0]).attr("id"))
                } else {
                    r.push($(a[0]).attr("id"))
                }
            }
        });
        return r.join(",")
    };
    var _ = function (e, t) {
        a = e || null;
        i = t || false;
        $(document).on("click", "#custom_sticker, #custom_patch", function () {
            l("popup_" + $(this).attr("id"))
        });
        $("#search_btn").click(function () {
            h()
        });
        $(document).on("change", "#search_input", function () {
            h()
        });
        $(document).on("click", "#popup_flower-aside-con ul li.sticker_item", function () {
            $(this).parent().find("li").css("background", "");
            $(this).css("background", "#F8F8F8");
            s(n($(this).attr("value"), ""))
        });
        var o = function (e, t, a) {
            var i = f() ? 3 : 4;
            if ($("#sticker-drag").find("li > div > img").length == i) {
                var r = "no_field_for_more_sticker";
                if (f()) {
                    r = "no_field_for_more_patch"
                }
                Buff.toast(i18n(r));
                return
            }
            var n = $("#sticker-drag").find("li");
            for (var o in n) {
                var s = $(n[o]).find("div");
                if (s.length && !$(s).find("img").length) {
                    y(s, a, t, e, n[o]);
                    break
                }
            }
        };
        $(document).on("click", ".single_sticker_row", function () {
            var e = $(this).attr("icon_url");
            var t = $(this).attr("id");
            var a = $(this).attr("name");
            o(e, a, t)
        });
        $(document).on("change", "#sticker_position_checkbox", function () {
            var e = b();
            if (e) {
                $("#sticker-drag").removeClass("disabled");
                $("#sticker-drag").find("li").attr("draggable", true)
            } else {
                $("#sticker-drag").addClass("disabled");
                var a = $("#sticker-drag").find("li");
                a.filter(function (e) {
                    var t = a.eq(e);
                    if (!t.find("img").length) {
                        t.insertAfter(a.last())
                    }
                })
            }
        });
        $("#sticker-drag").on("click", ".icon_delete", function () {
            if ($(this).parent().find("img").length) {
                var e = b();
                if (!e) {
                    $(this).parent().parent().append('<li class="jDrag j_tips_handler" draggable="true" data-direction="top"><div></div></li>');
                    $(this).parent().remove()
                } else {
                    $(this).parent().removeAttr("data-title");
                    $(this).parent().find("div").empty();
                    $(this).remove()
                }
            }
        });
        var _ = null;
        $("#sticker-drag").on("dragstart", "li.jDrag", function (e) {
            _ = e.currentTarget;
            $(_).addClass("on")
        });
        $("#sticker-drag").on("dragover", "li.jDrag", function (e) {
            e.preventDefault();
            var t = e.currentTarget;
            if (t !== _) {
                var a = t.getBoundingClientRect();
                var i = _.getBoundingClientRect();
                if (t) {
                    if (t.animated) {
                        return
                    }
                }
                var r = $(t);
                var n = $(_);
                var o = r.index();
                var s = n.index();
                if (s < o) {
                    t.parentNode.insertBefore(_, t.nextSibling)
                } else {
                    t.parentNode.insertBefore(_, t)
                }
                c(i, _);
                c(a, t);
                $(_).removeClass("on")
            }
        });
        $(document).on("click", "#sticker-drag li div span.scope-copy", function (e) {
            e.preventDefault();
            var t = e.currentTarget;
            var a = $(t).parent().find("img");
            if (!a) {
                return
            }
            var i = a.attr("id");
            var r = a.attr("src");
            var n = $(t).parent().parent().data("title");
            o(r, n, i)
        });
        $(document).on("click", "#popup_custom_sticker #reset, #popup_custom_patch #reset", function () {
            $("#search_input").val("");
            var e = b();
            if (e) {
                $("#sticker_position_checkbox").find("span").trigger("click")
            }
            var t = w();
            if (t) {
                $("#sticker_wearless_checkbox").find("span").trigger("click")
            }
            v();
            $("#popup_flower-aside-con ul li.sticker_item").first().trigger("click")
        });
        $(document).on("click", "#popup_custom_sticker #confirm, #popup_custom_patch #confirm", function () {
            var e = k();
            Popup.hide();
            if (a) {
                a({event: $(this).attr("event") || "custom_sticker_confirm", data: {extra_tag_ids_val: e}})
            }
        });
        $(document).on("click", "#popup_custom_sticker #cancel, #popup_custom_patch #cancel", function () {
            Popup.hide();
            if (a) {
                a({event: "custom_sticker_cancel", data: {extra_tag_ids_val: ""}})
            }
        })
    };
    return {init: _, show: l}
};
var weapon_case = function (a, i, r) {
    var a = a;
    var i = i || false;
    var r = r;
    var n = [];
    var o;
    var s = {has_unusual: false, item_list: []};
    var _ = {
        contraband: "#e4ae39",
        ancient_weapon: "#eb4b4b",
        ancient: "#eb4b4b",
        ancient_character: "#eb4b4b",
        legendary_weapon: "#d32ce6",
        legendary: "#d32ce6",
        legendary_character: "#d32ce6",
        mythical_weapon: "#8847ff",
        mythical: "#8847ff",
        mythical_character: "#8847ff",
        rare_weapon: "#4b69ff",
        rare: "#4b69ff",
        rare_character: "#4b69ff",
        uncommon_weapon: "#5e98d9",
        common_weapon: "#b0c3d9",
        common: "#b0c3d9"
    };
    var t = function () {
        var e;
        if (r == "itemset") {
            e = i18n("in_collection")
        } else if (i) {
            e = i18n("item_contained")
        } else {
            e = i18n("weapon_case_entry")
        }
        return e
    };
    var c = function (e, t) {
        sendRequest("/api/market/csgo_container", {
            method: "GET",
            data: {container: t, is_container: i ? 1 : 0, container_type: r},
            showLoading: false,
            success: function (t) {
                if (t.code == "OK") {
                    s = {has_unusual: false, item_list: []};
                    s.has_unusual = t.data.has_unusual;
                    for (let e of t.data.items) {
                        item_entry = {
                            localized_name: e.goods.tags.rarity.localized_name,
                            internal_name: e.goods.tags.rarity.internal_name,
                            icon_url: e.goods.original_icon_url,
                            name: e.goods.name,
                            goods_id: e.goods.goods_id,
                            max_price: e.max_price,
                            min_price: e.min_price
                        };
                        s.item_list.push(item_entry)
                    }
                    e(s)
                } else {
                    Buff.toast(t.error, {type: "error"})
                }
            }
        })
    };
    var l = function (t) {
        sendRequest("/api/market/csgo_goods_containers", {
            method: "GET",
            data: {goods_id: a},
            showLoading: false,
            async: false,
            success: function (e) {
                if (e.code == "OK") {
                    n = [];
                    r = e.data.container_type;
                    if (e.data.containers.length > 0) {
                        o = e.data.containers[0].container;
                        for (let t of e.data.containers) {
                            let e = {
                                container: t.container,
                                goods_id: t.goods_id,
                                icon_url: t.icon_url,
                                name: t.name,
                                sell_min_price: t.sell_min_price
                            };
                            n.push(e)
                        }
                    }
                    t(n)
                } else {
                    Buff.toast(e.error, {type: "error"})
                }
            }
        })
    };
    var e = function () {
        var e = t();
        $(document).find(".popup-header h2").text(e);
        l(f, a);
        c(p, o);
        Popup.show("j_popup_box");
        $(".weapon-col2 .hide_weapon_cate").off("click");
        $(".weapon-col2 .hide_weapon_cate").on("click", "li", function (e) {
            var t = $(e.target).closest("li");
            t.toggleClass("on");
            var a = $("#hide_weapon_list");
            if (a.is(":hidden")) {
                a.show();
                m()
            } else {
                a.hide()
            }
        });
        $(".weapon-col2").on("click", '.weapon-list:not("#hide_weapon_list_tab")', function (e) {
            var t = $(e.target).closest("li");
            var a = t.find(".pic-desc h3 a").attr("href");
            window.location.href = a
        });
        $(".weapon-col1 ul.weapon-list li").on("click", function () {
            o = $(this).find("[id]").attr("id");
            c(p, o)
        });
        $(".weapon-col1").on("click", ".weapon-list", function (e) {
            var t = $(e.target).closest("li");
            $(".weapon-col1").find("li").removeClass("on");
            t.addClass("on")
        })
    };
    var d = function (e, t, a) {
        var i = "";
        if (e == 0 && t == 0) {
            i = "-"
        } else if (e == 0) {
            i = a(t)
        } else if (t == e) {
            i = a(e)
        } else {
            i = a(e) + "&nbsp;-&nbsp;" + a(t)
        }
        return i
    };
    var u = function (t) {
        $("#hide_weapon_list").empty();
        for (let e of t) {
            $("#hide_weapon_list").append("<li>" + '<div class="weapon-pic">' + '<div class="pic-cont">' + '<img src="' + e.icon_url + '">' + "</div>" + "</div>" + '<div class="pic-desc">' + "<div>" + '<h3><a href="/goods/' + e.goods_id + '">' + e.name.split(" (")[0] + "</a></h3>" + '<h4 class="c_Yellow f_12px">' + d(e.min_price, e.max_price, formatPriceNormalYuan) + "</h4>" + "</div>" + "</div>" + "</li>");
            if (g.currency.symbol != "¥" && e.max_price != 0) {
                $(`#hide_weapon_list h4:last`).after('<p class="f_12px c_Gray">' + d(e.min_price, e.max_price, formatPriceCustom) + "</small></p>")
            }
        }
    };
    var p = function (t) {
        $(".weapon-col2").find("*").not(".hide_weapon_cate, #hide_weapon_list").remove();
        $("#hide_weapon_list_tab").empty();
        $("#hide_weapon_list").empty();
        $("#hide_weapon_list").hide();
        if (t.has_unusual) {
            $(".weapon-col2 .hide_weapon_cate").show();
            $("#hide_weapon_list_tab").append(`<li class="on"><div class="weapon-pic"><div class="pic-cont"><img src="https://g.fp.ps.netease.com/market/file/641c063ed99519519ef538d9ogzOGUgR04"></div></div><div class="pic-desc"><div><h3><i class="l_Right icon2x icon_arr_up_big"></i>` + i18n("an_rare_special_item") + `</h3></div></div></li>`)
        } else {
            $(".weapon-col2 .hide_weapon_cate").hide()
        }
        var a = 0;
        for (let e of t.item_list) {
            var i;
            if (i != e.internal_name) {
                var r = a == 0 && !t.has_unusual;
                a += 1;
                i = e.internal_name;
                $(".weapon-col2").append('<div class="weapon-cate" >' + e.localized_name + "</div>" + '<ul id="weapon-list_' + a + '" class="weapon-list"></ul>');
                $(".weapon-col2 .weapon-cate:last").css({
                    background: _[e.internal_name],
                    "margin-top": r ? "16px" : "0px"
                })
            }
            $("#weapon-list_" + a).append("<li>" + '<div class="weapon-pic">' + '<div class="pic-cont">' + '<img src="' + e.icon_url + '">' + "</div>" + "</div>" + '<div class="pic-desc">' + "<div>" + '<h3><a href="/goods/' + e.goods_id + '">' + e.name.split(" (")[0] + "</a></h3>" + '<h4 class="c_Yellow f_12px">' + d(e.min_price, e.max_price, formatPriceNormalYuan) + "</h4>" + "</div>" + "</div>" + "</li>");
            if (g.currency.symbol != "¥" && e.max_price != 0) {
                $(`.weapon-col2 h4:last`).after('<p class="f_12px c_Gray">' + d(e.min_price, e.max_price, formatPriceCustom) + "</small></p>")
            }
        }
    };
    var f = function (t) {
        $(".weapon-col1 .weapon-list").empty();
        var a = true;
        for (let e of t) {
            var i = e.goods_id != undefined ? "/goods/" + e.goods_id : "javascript:;";
            $(".weapon-col1 .weapon-list").append('<li><div id="' + e.container + '"class="weapon-pic">' + '<div class="pic-cont">' + '<img src="' + e.icon_url + '">' + "</div>" + "</div>" + '<div class="pic-desc">' + "<div>" + '<h3><a href="' + i + '">' + e.name + "</a></h3>" + "</div> " + "</div></li>");
            if (r == "weaponcase") {
                $(".weapon-col1 .weapon-list h3:last").append('<h4 class="c_Yellow f_12px">' + d(e.sell_min_price, e.sell_min_price, formatPriceNormalYuan) + "</h4>");
                if (g.currency.symbol != "¥" && e.sell_min_price != 0) {
                    $(".weapon-col1 .weapon-list h4:last").append('<span class="c_Gray f_Normal">&nbsp;(' + d(e.sell_min_price, e.sell_min_price, formatPriceCustom) + ")</span>")
                }
            }
            if (a) {
                $(".weapon-list .weapon-pic").addClass("on");
                a = false
            }
        }
    };
    var m = function () {
        sendRequest("/api/market/csgo_container", {
            method: "GET",
            data: {container: o, is_container: i ? 1 : 0, container_type: r, unusual_only: 1},
            showLoading: false,
            success: function (t) {
                if (t.code == "OK") {
                    var a = [];
                    for (let e of t.data.items) {
                        item_entry = {
                            localized_name: e.localized_name,
                            internal_name: e.goods.tags.rarity.internal_name,
                            icon_url: e.goods.original_icon_url,
                            name: e.goods.short_name,
                            goods_id: e.goods.goods_id,
                            max_price: e.max_price,
                            min_price: e.min_price
                        };
                        a.push(item_entry)
                    }
                    u(a)
                } else {
                    Buff.toast(t.error, {type: "error"})
                }
            }
        })
    };
    return {show: e}
};
var market = function () {
    var l = g.game;
    var p = [];
    var e = null;
    var t = null;
    var f = null;
    var m = function (e, t, a) {
        if (g.appid != 570) return;
        for (var i = 0; i < p.length; i++) {
            if (p[i].name == e) {
                p.splice(i, 1);
                break
            }
        }
        if (typeof a != "undefined") {
            p.push({name: e, value: t, title: a})
        }
        var r = 0;
        if (r < 0) r = 0;
        var n = p.slice().splice(r, p.length);
        $(".criteria-cont .w-Key").html("");
        for (var i = 0; i < n.length; i++) {
            if (n[i].name == "search") continue;
            var o = $("<span />").text(n[i].title).attr("name", n[i].name);
            o.append("<i>×</i>");
            $(".criteria-cont .w-Key").append(o)
        }
    };
    var h = function () {
        if (g.appid != 433850) return;
        var e = $(".w-SelType.selected").attr("value");
        var t = $(".w-SelType.selected p").attr("value");
        if (e == t) {
            title = $(".w-SelType.selected p").text()
        } else {
            title = $('.w-SelType.selected li[value="' + e + '"]').text()
        }
        if (title) {
            var a = $("<span />").text(title);
            a.append("<i>×</i>");
            $(".criteria-cont .w-Key").html(a)
        } else {
            $(".criteria-cont .w-Key").html("")
        }
    };
    var v = function () {
        var e = "/api/market/goods";
        var t = "selling";
        if ($("#buying").hasClass("on")) {
            e = "/api/market/goods/buying";
            t = "buying"
        } else if ($("#bundle").hasClass("on")) {
            e = "/api/market/goods/bundle";
            t = "bundle"
        } else if ($("#top-bookmarked").hasClass("on")) {
            e = "/api/market/sell_order/top_bookmarked";
            t = "top-bookmarked"
        } else if ($("#bugged-ethereal").hasClass("on")) {
            e = "/api/market/sell_order/bugged_ethereal";
            t = "bugged-ethereal"
        }
        return {url: e, tab: t}
    };
    var y = function () {
        var e = [];
        if ($("body").hasClass("dota2")) {
            for (var t = 0; t < p.length; t++) {
                e.push(p[t].title)
            }
        } else if ($("body").hasClass("pubg")) {
            var a = $(".w-Tag > .on > p").text();
            if (a) {
                e.push(a)
            }
        } else if ($("body").hasClass("h1z1") || $("body").hasClass("csgo")) {
            a = $(".w-SelType.selected > ul > li.on").text() || $(".w-SelType.selected > p").text();
            if (a) {
                e.push(a)
            }
        }
        return e
    };
    var b = function (e) {
        var a = {game: l, page_num: e};
        for (var t = 0; t < p.length; t++) {
            var i = p[t];
            a[i.name] = i.value
        }
        var r = $(".w-Tag[name=category_group]").attr("value");
        if (r) {
            a["category_group"] = r
        }
        var n = $(".w-SelType.selected").attr("value");
        if (n) {
            var r = $(".w-SelType.selected p").attr("value");
            if ($(".w-SelType.selected").attr("name")) {
                a[$(".w-SelType.selected").attr("name")] = n
            } else if (n == r) {
                a["category_group"] = n
            } else {
                a["category"] = n
            }
        }
        var o = $("input[name=search]").val();
        if (o && o.length > 0) {
            a["search"] = o
        }
        var s = $(".w-Order[name=price]").attr("value");
        if (s && s.length > 0) {
            if (s == "des") a["sort_by"] = "price.desc"; else a["sort_by"] = "price.asc"
        }
        var _ = $("input[name=min_price]").val();
        if (_) {
            a["min_price"] = parseFloat(_)
        }
        var c = $("input[name=max_price]").val();
        if (c) {
            a["max_price"] = parseFloat(c)
        }
        $(".w-Select,.w-Select-Multi").each(function () {
            var e = $(this).attr("name");
            var t = $(this).attr("value");
            if (typeof e != "undefined" && typeof t != "undefined" && t) {
                a[e] = t
            }
        });
        if (a["extra_tag_ids"]) a["wearless_sticker"] = $("#sticker_wearless_checkbox").attr("value") ? "1" : "";
        return a
    };
    var w = function (u) {
        clearTimeout(t);
        t = setTimeout(function () {
            var e = v();
            var i = e["tab"];
            var t = e["url"];
            if (i == "top-bookmarked") {
                $(".block-header .w-OrderGroup").hide()
            } else {
                $(".block-header .w-OrderGroup").show()
            }
            if (i == "selling") {
                $("#search-extra_tag_ids").show();
                $("#quantity_li").show()
            } else {
                $("#search-extra_tag_ids").hide();
                $("#quantity_li").hide()
            }
            u = u || 1;
            var a = b(u);
            if ("min_price" in a && "max_price" in a && a["min_price"] > a["max_price"]) {
                Buff.toast(i18n("minimum_price_can_not_be"), {type: "warning"});
                return
            }
            if (i != "selling") {
                delete a["extra_tag_ids"];
                delete a["wearless_sticker"]
            } else {
                if ("extra_tag_ids" in a && a["extra_tag_ids"] == "custom") {
                    delete a["extra_tag_ids"];
                    delete a["wearless_sticker"]
                }
            }
            var r = "#tab=" + i + "&";
            for (var n in a) {
                if (["game"].indexOf(n) < 0) r += n + "=" + a[n] + "&"
            }
            window.location.hash = r.slice(0, -1);
            var o = y();
            var s = o.slice(0, 2).join("、") + (o.length > 2 ? "等" : "");
            $("span.cru-filter").text(s);
            sessionStorage.setItem("breadcrumb_text", s);
            sessionStorage.setItem("breadcrumb_hash", window.location.hash);
            if (o.length > 0) {
                $(".cru-filter").show()
            } else {
                $(".cru-filter").hide()
            }
            if (!isUserLogined() && i == "top-bookmarked") {
                var _ = format_html('<div class="nodata"><p><i class="icon icon_nodata"></i></p><p><%= i18n("view_top_bookmarked_please_login") %></p><a href="javascript:;" onclick="loginModule.showLogin()" class="i_Btn i_Btn_hollow"><%= i18n("login") %></a></div>');
                $("#j_market_card").html(_);
                return
            }
            if (!isUserLogined() && (a.page_num > 1 || a.page_size > 20 || a.min_price || a.max_price || a.search || a.sort_by || p.length > 0)) {
                loginModule.showLogin();
                return
            }
            $("#j_market_card").showLoading();
            $(".pager").html("").hide();
            var c = Object.assign({}, a);
            if (c.min_price > 0) {
                c.min_price /= g.currency.rate_base_cny
            }
            if (c.max_price > 0) {
                c.max_price /= g.currency.rate_base_cny
            }
            if (i == "selling") {
                c["use_suggestion"] = $("#use_suggestion").val();
                if ($("#use_suggestion").attr("goods_ids")) {
                    c["goods_ids"] = $("#use_suggestion").attr("goods_ids")
                }
                f = c["search"]
            }
            var l = $("div[name=sort_by]").attr("value");
            if (i != "selling" && l == "sell_num.desc") {
                var d = $("div[name=sort_by] ul li:first h6").text();
                $("div[name=sort_by]").attr("value", "");
                $("div[name=sort_by] h3 span").text(d);
                updateHash("sort_by", "");
                delete c.sort_by
            }
            sendRequest(t, {
                method: "GET", data: c, dataType: "json", showLoading: false, success: function (e) {
                    var t = "";
                    if (e.code == "OK") {
                        e.data.isBuying = i == "buying";
                        e.data.extra_tag_ids = c["extra_tag_ids"];
                        e.data.wearless_sticker = c["wearless_sticker"];
                        var a = "goods_list_pat";
                        e.data.show_btn_buy_order = true;
                        e.data.invoker = "market";
                        $("#preview_screenshots").hide();
                        if (i == "bundle") {
                            a = "bundle_list_pat"
                        } else if (i == "top-bookmarked" || i == "bugged-ethereal") {
                            a = "sell_order_list_pat";
                            if (i == "bugged-ethereal") {
                                e.data.preview_screenshots = {}
                            }
                            PreviewScreenShotsDataGenerator(OriginConst.TOP_BOOKMARK).process(e.data.items, e.data.preview_screenshots.bg_img || "", "top_bookmark", 14)
                        }
                        t = template_render(a, e.data)
                    }
                    $("#j_market_card").html(t);
                    if (i == "top-bookmarked") {
                        $("#preview_screenshots").show();
                        PreviewScreenShots().init("top_bookmark", e.data.preview_screenshots["top_bookmark"])
                    }
                    $("img.lazy").lazyload();
                    if (e.code == "OK") {
                        renderPagination({
                            total_count: e.data.total_count,
                            page_size: e.data.page_size,
                            page_num: u,
                            onPageClick: function (e, t) {
                                t.preventDefault();
                                w(e);
                                $("html,body").scrollTop(0)
                            }
                        })
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            });
            if (i == "bundle") {
                sendRequest("/api/market/goods/bundle/transact_history", {
                    method: "GET",
                    data: {game: g.game, page_size: 10},
                    dataType: "json",
                    showLoading: false,
                    success: function (e) {
                        var t = "";
                        if (e.code == "OK") {
                            t = template_render("bundle_history_pat", e.data)
                        } else {
                            Buff.toast(e.error, {type: "error"})
                        }
                        $("#j_items_container2").html(t);
                        $("img.lazy").lazyload()
                    }
                })
            } else {
                $("#j_items_container2").html("")
            }
        }, 200)
    };
    var a = function () {
        return f
    };
    var i = function (a) {
        $(document).on("click", ".criteria-cont .w-Key i", function () {
            var e = $(this).parent().attr("name");
            m(e, "", undefined);
            if (e == "hero") {
                $(".w-Sel-Hero li").removeClass("on");
                $(".w-Sel-Hero").attr({value: ""})
            } else if (e == "search") {
                $("input[name=search]").val("")
            } else if (e == "custom") {
                $(".w-Tag[name=custom]").attr("value", "");
                $(".w-Tag[name=custom] span").removeClass("on")
            } else {
                $('.w-SelType[name="' + e + '"] li').removeClass("on");
                $('.w-SelType[name="' + e + '"]').attr({value: ""})
            }
            if (g.appid == 433850) {
                $(".w-SelType.selected").attr("value", "");
                $(".w-SelType").removeClass("selected");
                $(".w-SelType li").removeClass("on");
                h()
            }
            w()
        });
        $(document).on("change", ".w-Sel-Hero", function () {
            var e = $(this).attr("name");
            var t = $(this).attr("value");
            var a = $(this).find("li.on").attr("title");
            m(e, t, a);
            w()
        });
        $(document).on("change", ".w-SelType", function () {
            var e = $(this).attr("name");
            var t = $(this).attr("value");
            var a = $(this).find("li.on").attr("title");
            m(e, t, a);
            h();
            w()
        });
        $(document).on("click", ".w-Counter-pannel a", function () {
            w()
        });
        $(document).on("click", "#search_btn_csgo", function () {
            w(null)
        });
        $(document).on("change", "input[name=search]", function () {
            var e = "search";
            var t = $(this).val();
            var a = t;
            m(e, t, a);
            w(null)
        });
        $(document).on("change", ".market-list .w-Order", function () {
            $(this).siblings().attr("value", "");
            w()
        });
        $(document).on("change", ".w-Tag", function () {
            var e = $(this).attr("value");
            if (e) {
                m("custom", e, $(this).find(".on").text())
            } else {
                m("custom", "", undefined)
            }
            w()
        });
        $(document).on("change", ".w-Select,.w-Select-Multi", function () {
            var e = $(this).attr("name");
            if (e) {
                var t = $(this).attr("value");
                if (e == "extra_tag_ids") {
                    if (t == "custom") {
                        return
                    }
                    if (a) {
                        a("last_extra_tag_ids", t)
                    }
                }
                w()
            }
        });
        var e = getParams(window.location.hash.substring(1));
        for (var t in e) {
            if (!e[t]) continue;
            if (t == "min_price") {
                $("input[name=min_price]").val(e[t])
            } else if (t == "max_price") {
                $("input[name=max_price]").val(e[t])
            } else if (t == "search") {
                if (e[t].length > 0) {
                    $("input[name=search]").val(e[t]);
                    m(t, e[t], e[t])
                }
            } else if (t == "sort_by") {
                var i = e[t].split(".");
                $(".w-Order").removeClass("w-Order_des");
                if (i[1] == "desc") {
                    $(".w-Order").attr({value: "des"});
                    $('.w-Order[name="' + i[0] + '"]').addClass("w-Order_des")
                } else if (i[1] == "asc") {
                    $(".w-Order").attr({value: "asc"});
                    $('.w-Order[name="' + i[0] + '"]').addClass("w-Order_asc")
                }
            } else if (["dota2"].indexOf(g.game) > -1 && t == "custom") {
                $(".w-Tag[name=custom]").attr("value", e[t]);
                $(".w-Tag[name=custom] span[value=" + e[t] + "]").addClass("on");
                var r = $(".w-Tag[name=custom] span[value=" + e[t] + "]").text();
                m(t, e[t], r)
            } else if (t == "extra_tag_ids") {
                $(".w-Select[name=extra_tag_ids] li").removeClass("on");
                var n = e[t];
                $(".w-Select[name=extra_tag_ids]").attr("value", n);
                var o = n;
                if (["", "empty", "non_empty"].indexOf(n) == -1) {
                    o = "custom"
                }
                var s = $('.w-Select[name=extra_tag_ids] li[value="' + o + '"]');
                s.addClass("on");
                $(".w-Select[name=extra_tag_ids]").attr("value", n).find("h3").text(s.text())
            } else if (t == "wearless_sticker") {
                $("#sticker_wearless_checkbox span").click()
            } else if (["page_num", "sort_by"].indexOf(t) < 0) {
                if (["h1z1", "csgo"].indexOf(g.game) > -1 && ["category", "category_group"].indexOf(t) > -1) {
                    Buff.setCompValue("j_h1z1-selType", e[t])
                } else if (g.game == "tf2" && t == "type") {
                    Buff.setCompValue("j_h1z1-selType", e[t])
                } else {
                    Buff.setCompValue("search-" + t, e[t])
                }
                var _ = $("#search-" + t).attr("value");
                var c = $("#search-" + t + " li.on").attr("title");
                m(t, _, c);
                h()
            }
        }
        if (e["tab"] == "buying" || e["tab"] == "bundle" || e["tab"] == "top-bookmarked" || e["tab"] == "bugged-ethereal") {
            $("#selling").removeClass("on");
            $("#" + e["tab"]).addClass("on")
        }
        var l = e["page_num"] || 1;
        w(l);
        Buff.pricePatten("input[name=min_price]");
        Buff.pricePatten("input[name=max_price]");
        $(document).on("click", ".tab li", function () {
            $(".tab li").removeClass("on");
            $(this).addClass("on");
            w()
        });
        $(".w-SelType.no-click").on("click", function (e) {
            e.stopPropagation()
        });
        FilterDataManager().reset();
        if (g.is_partner_appid) {
            if (getParams().param) {
                var d = getParams().param;
                console.log("badlanders param " + d);
                history && history.replaceState(history.state, null, window.location.href.replace("param=" + d, ""));
                try {
                    var u = decodeURIComponent(escape(window.atob(d)));
                    u = JSON.parse(u)
                } catch (e) {
                    console.log("badlanders param failed: " + e);
                    var u = {}
                }
                if (u.event == "auto_bind") {
                    sessionStorage.setItem("badlanders_bind", JSON.stringify({
                        role_id: u.role_id,
                        token: u.token,
                        game: g.game,
                        time: Date.now()
                    }));
                    userProfile().tryBindBadlandersFromGame()
                }
            } else if (g.user) {
                userProfile().tryBindBadlandersFromGame()
            }
        }
    };
    return {init: i, get_last_query_search: a}
};
var marketShow = function (C, e) {
    var N = e;
    var j = g.game;
    var l = null;
    var t = 150, d = "", u = 0;
    _preview_slide_page_num = 0;
    var c = {};
    var p = [];
    var f = null;
    var m = null;
    var w = "";
    var n = false;
    var o = "";
    var s = "";
    var k = null;
    var _ = null;
    var h = null;
    var v = null;
    var y = "";
    // var b = function (a) {
    //     var e = document.getElementById("myChart");
    //     var l = undefined;
    //     var d = undefined;
    //
    //     function t(e) {
    //         var t = [], n = [];
    //         var a = {}, o = [];
    //         var i = 0, r = 1;
    //         var s = null;
    //         $.each(e, function (e, t) {
    //             var a = t[1], i = t[0], r = null;
    //             o.push(a);
    //             n.push({x: moment(i).format("YYYY-MM-DD HH:mm:ss"), y: a})
    //         });
    //         if (e.length > 0) {
    //             l = parseInt(moment(e[0][0]).startOf("day").format("x"));
    //             if (l < e[0][0]) {
    //                 l += 864e5
    //             }
    //             d = parseInt(moment(e[e.length - 1][0]).startOf("day").format("x"));
    //             var _ = (d - l) / 10;
    //             _ = Math.ceil(_ / 864e5) * 864e5;
    //             if (_ > 0) {
    //                 for (var c = l; c <= d; c += _) {
    //                     t.push(moment(c).format("YYYY-MM-DD HH:mm:ss"))
    //                 }
    //             }
    //             if (t.length == 0) {
    //                 l = e[0][0];
    //                 t.push(moment(e[0][0]).format("YYYY-MM-DD HH:mm:ss"))
    //             }
    //         }
    //         if (o.length) {
    //             i = Math.min.apply(null, o) || 0;
    //             r = Math.max.apply(null, o) || 1
    //         }
    //         if (e.length) {
    //             s = moment(e[e.length - 1][0]).format("YYYY/MM/DD HH:mm:ss")
    //         }
    //         return {maxTime: s, min: i, max: r, labels: t, datasets: n}
    //     }
    //
    //     var i = t(a.price_history);
    //     var r = i.min * .98;
    //     var n = i.max * 1.03;
    //     var o = {
    //         suggestedMin: r, suggestedMax: n, beginAtZero: false, callback: function (e) {
    //             return a.currency_symbol + e
    //         }
    //     };
    //     if (r == 0) {
    //         o.beginAtZero = true
    //     }
    //     var s = Math.round((i.max - i.min) / 7);
    //     if (s < 1 && n > 0) {
    //         s = n / 7;
    //         if (s < .01) {
    //             o.stepSize = .01
    //         } else {
    //             o.maxTicksLimit = 7
    //         }
    //     }
    //     var _ = new Chart(e, {
    //         type: "line",
    //         data: {
    //             labels: i.labels,
    //             datasets: [{data: i.datasets, borderColor: "#7cb5ec", fill: false, borderWidth: 2, lineTension: .3}]
    //         },
    //         options: {
    //             borderWidth: 1,
    //             title: {
    //                 display: false,
    //                 text: a.price_type + "(" + a.currency + ")",
    //                 fontColor: "#000",
    //                 fontSize: "14",
    //                 padding: 30
    //             },
    //             tooltips: {
    //                 mode: "index",
    //                 axis: "x",
    //                 displayColors: false,
    //                 intersect: false,
    //                 callbacks: {
    //                     label: function (e, t) {
    //                         return a.price_type + a.currency_symbol + parseFloat(e.yLabel).toFixed(2)
    //                     }
    //                 },
    //                 filter: function (e) {
    //                     if (parseInt(moment(e.xLabel).format("x")) < l) {
    //                         return false
    //                     }
    //                     return true
    //                 },
    //                 backgroundColor: "rgba(255,255,255,0.8)",
    //                 titleFontColor: "#000",
    //                 bodyFontColor: "#000",
    //                 borderWidth: 1,
    //                 borderColor: "#7cb5ec"
    //             },
    //             layout: {padding: {left: 50, right: 50, top: 0, bottom: 50}},
    //             legend: {display: false},
    //             elements: {point: {radius: 0, hitRadius: 6}, line: {tension: 0}},
    //             scales: {
    //                 xAxes: [{
    //                     type: "time",
    //                     bounds: "ticks",
    //                     distribution: "linear",
    //                     ticks: {source: "labels"},
    //                     time: {max: i.maxTime, unit: "day", displayFormats: {day: "MM-DD"}},
    //                     gridLines: {}
    //                 }], yAxes: [{ticks: o}]
    //             }
    //         }
    //     })
    // };
    var x = function () {
        var e = getParamsFromHash().tag_ids;
        if (!e) return e;
        var t = e.split(",");
        var a = [];
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            if ($(".criteria:visible .w-Select-Multi h6[value=" + r + "]").length > 0) {
                a.push(r)
            }
        }
        return a.join(",") || undefined
    };
    var P = function () {
        $(".new-tab li").removeClass("on");
        $(".new-tab li.selling").addClass("on");
        $("#batch-buy-btn").parent().show();
        if (k) k.show();
        if ($(".new-tab li.selling").hasClass("has-market-min-price")) {
            var e = template_render("market_min_price_pat");
            $(".detail-tab-cont").html(e);
            initCustomCurrency($(".detail-tab-cont"));
            return
        }
        var t = getParamsFromHash();
        var a = t.page_num || 1;
        var i = t.sort_by || "default";
        var r = t.mode || "";
        var n = t.allow_tradable_cooldown || 1;
        var o = x();
        var s = t.paintseed;
        var _ = t.paintseed_group;
        var c = t.tier;
        var l = t.min_paintwear;
        var d = t.max_paintwear;
        var u = t.min_fade;
        var p = t.max_fade;
        var f = t.name_tag;
        var m = t.min_price;
        var h = t.max_price;
        var v = t.extra_tag_ids;
        var y = t.wearless_sticker;
        if (m > 0 && h > 0 && parseFloat(m) > parseFloat(h)) {
            Buff.toast(i18n("minimum_price_can_not_be"), {type: "warning"});
            return
        }
        if (m > 0) {
            m /= g.currency.rate_base_cny
        }
        if (h > 0) {
            h /= g.currency.rate_base_cny
        }
        if (!isUserLogined() && (a > 1 || i != "default" || o || s || _ || c || l || d || u || p || f || m || h)) {
            loginModule.showLogin();
            return
        }
        $(".detail-tab-cont").showLoading();
        w = "/api/market/goods/sell_order";
        var b = {
            game: j,
            goods_id: C,
            page_num: a,
            sort_by: i,
            mode: r,
            allow_tradable_cooldown: n,
            tag_ids: o,
            paintseed: s,
            paintseed_group: _,
            tier: c,
            min_paintwear: l,
            max_paintwear: d,
            min_fade: u,
            max_fade: p,
            name_tag: f,
            min_price: m,
            max_price: h
        };
        if (v && v != "custom") {
            b["extra_tag_ids"] = v;
            b["wearless_sticker"] = y
        }
        sendRequest("/api/market/goods/sell_order", {
            data: b,
            method: "GET",
            dataType: "json",
            showLoading: false,
            retryLimit429: 10,
            retryCount429: 0,
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
                e.data.mode = r;
                if (g.item_detail_popup_appids.indexOf(g.appid) != -1) {
                    PreviewScreenShotsDataGenerator(OriginConst.SELLING).process(e.data.items, e.data.preview_screenshots.bg_img || "", "selling", 10)
                }
                var t = template_render("selling_list_pat", e.data);
                $(".detail-tab-cont").html(t);
                Buff.initSelect("#mode-select");
                Buff.setCompValue("mode-select", r || undefined);
                if (g.appid == 730) {
                    PreviewScreenShots().init("selling", e.data.preview_screenshots["selling"], function (e, t, a) {
                        if (e != "selling") {
                            return
                        }
                        t.removeClass("shalow-btn-green");
                        if (a == "on") {
                            t.removeClass("shalow-btn");
                            t.removeClass("shalow-btn-green");
                            t.html('<i class="icon icon_zoom"></i>')
                        } else {
                            t.addClass("shalow-btn");
                            t.addClass("shalow-btn-green");
                            t.html(i18n("to_view_figure"))
                        }
                    })
                }
                $("img.lazy").lazyload();
                renderPagination({
                    total_count: e.data.total_count,
                    page_size: e.data.page_size,
                    page_num: e.data.page_num,
                    onPageClick: function (e, t) {
                        t.preventDefault();
                        updateHash("page_num", e);
                        window.scrollTo(0, 0)
                    }
                })
            },
            error: function (e) {
                if (e.statusText != "abort") {
                    if (this.showError != false) {
                        if (e.status == 429) {
                            this.retryCount429++;
                            if (this.retryCount429 <= this.retryLimit429) {
                                var t = this;
                                setTimeout(function () {
                                    $.ajax(t)
                                }, 2e3);
                                return
                            } else {
                                try {
                                    Buff.toast(e.responseJSON.error)
                                } catch (e) {
                                    Buff.toast(i18n("request_in_queue"))
                                }
                            }
                        } else if (["timeout", "error"].indexOf(e.statusText) > -1) {
                            this.tryCount++;
                            if (this.tryCount <= this.retryLimit) {
                                $.ajax(this);
                                return
                            }
                            Buff.toast(i18n("network_error"))
                        } else if (e.status == 500) {
                            Buff.toast(i18n("system_busy_error"))
                        }
                    }
                    $(".detail-tab-cont").removeLoading()
                }
            }
        })
    };
    var T = function () {
        $(".new-tab li").removeClass("on");
        $(".new-tab li.buying").addClass("on");
        if (h) h.show();
        var e = getParamsFromHash();
        var t = e.page_num || 1;
        var a = x();
        var i = e.tier;
        var r = e.min_paintwear;
        var n = e.max_paintwear;
        var o = e.max_price_only;
        if (!isUserLogined() && (t > 1 || a)) {
            loginModule.showLogin();
            return
        }
        $(".detail-tab-cont").showLoading();
        w = "/api/market/goods/buy_order";
        sendRequest("/api/market/goods/buy_order", {
            data: {
                game: j,
                goods_id: C,
                page_num: t,
                tag_ids: a,
                tier: i,
                min_paintwear: r,
                max_paintwear: n,
                max_price_only: o
            }, method: "GET", dataType: "json", showLoading: false, success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
                var t = template_render("buying_list_pat", e.data);
                $(".detail-tab-cont").html(t);
                renderPagination({
                    total_count: e.data.total_count,
                    page_size: e.data.page_size,
                    page_num: e.data.page_num,
                    onPageClick: function (e, t) {
                        t.preventDefault();
                        updateHash("page_num", e);
                        window.scrollTo(0, 0)
                    }
                })
            }, error: function (e) {
                if (e.statusText == "abort") return;
                if (e.status == 500) {
                    Buff.toast(i18n("the_system_is_busy_please"))
                } else {
                    Buff.toast(i18n("detects_network_anomalies_please_try"))
                }
                $(".detail-tab-cont").removeLoading()
            }
        })
    };
    var B = function () {
        $(".new-tab li").removeClass("on");
        $(".new-tab li.history").addClass("on");
        if (_) _.show();
        if ($(".new-tab li.history").hasClass("need-login")) {
            var t = format_html('<div class="nodata"><p><i class="icon icon_nodata"></i></p><p><%= i18n("view_history_please_login") %></p><a href="javascript:;" onclick="loginModule.showLogin()" class="i_Btn i_Btn_hollow"><%= i18n("login") %></a></div>');
            $(".detail-tab-cont").html(t);
            return
        }
        $(".detail-tab-cont").showLoading();
        w = "/api/market/goods/bill_order";
        var e = getParamsFromHash();
        var a = x();
        var i = e.paintseed;
        var r = e.tier;
        sendRequest("/api/market/goods/bill_order", {
            data: {game: j, goods_id: C, tag_ids: a, paintseed: i, tier: r},
            method: "GET",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
                t = template_render("history_list_pat", e.data);
                $(".detail-tab-cont").html(t);
                renderPagination({total_count: 0, page_size: 0, page_num: 0})
            },
            error: function (e) {
                if (e.statusText == "abort") return;
                if (e.status == 500) {
                    Buff.toast(i18n("the_system_is_busy_please"))
                } else {
                    Buff.toast(i18n("detects_network_anomalies_please_try"))
                }
                $(".detail-tab-cont").removeLoading()
            }
        })
    };
    var S = function () {
        $(".new-tab li").removeClass("on");
        $(".new-tab li.price-chart").addClass("on");
        if (v) {
            if (getParamsFromHash().history == "steam") {
                v.hide()
            } else {
                v.show()
            }
        }
        if ($(".new-tab li.price-chart").hasClass("need-login")) {
            var t = format_html('<div class="nodata"><p><i class="icon icon_nodata"></i></p><p><%= i18n("view_price_trends_please_login") %></p><a href="javascript:;" onclick="loginModule.showLogin()" class="i_Btn i_Btn_hollow"><%= i18n("login") %></a></div>');
            $(".detail-tab-cont").html(t);
            return
        }
        $(".detail-tab-cont").showLoading();
        var e = "/api/market/goods/price_history";
        var a = "/api/market/goods/price_history/steam/days";
        var i = g.currency.code;
        var r = localStorage.getItem("history_price_days_" + g.appid) || 30;
        if (getParamsFromHash().days) {
            r = getParamsFromHash().days
        }
        var n = [];
        var o;
        var s = [];
        var _ = false;
        if (getParamsFromHash().history == "buff" || has_buff_price_history && getParamsFromHash().history != "steam") {
            e = "/api/market/goods/price_history/buff";
            a = "/api/market/goods/price_history/buff/days";
            var c = "/api/market/goods/price_history/buff/price_options";
            _ = true;
            if (has_buff_min_price_history) {
                w = c;
                sendRequest(c, {
                    data: {game: j, goods_id: C},
                    method: "GET",
                    dataType: "json",
                    showLoading: false,
                    success: function (e) {
                        if (e.code != "OK") {
                            Buff.toast(e.error, {type: "error"});
                            return
                        }
                        n = e.data.options
                    },
                    error: function (e) {
                        if (e.statusText == "abort") return;
                        if (e.status == 500) {
                            Buff.toast(i18n("the_system_is_busy_please"))
                        } else {
                            Buff.toast(i18n("detects_network_anomalies_please_try"))
                        }
                        $(".detail-tab-cont").removeLoading()
                    }
                })
            }
        }
        if (has_buff_min_price_history) {
            o = localStorage.getItem("buff_price_type_" + g.appid) || 2
        } else {
            o = localStorage.getItem("buff_price_type_" + g.appid) || 1
        }
        if (getParamsFromHash().buff_price_type) {
            if (getParamsFromHash().buff_price_type == 1 || has_buff_min_price_history) {
                o = getParamsFromHash().buff_price_type
            }
        }
        w = a;
        sendRequest(a, {
            data: {game: j, goods_id: C},
            method: "GET",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
                s = e.data.options
            },
            error: function (e) {
                if (e.statusText == "abort") return;
                if (e.status == 500) {
                    Buff.toast(i18n("the_system_is_busy_please"))
                } else {
                    Buff.toast(i18n("detects_network_anomalies_please_try"))
                }
                $(".detail-tab-cont").removeLoading()
            }
        });
        w = e;
        sendRequest(e, {
            data: {
                game: j,
                goods_id: C,
                currency: i,
                days: r,
                tier: getParamsFromHash().tier,
                tag_ids: x(),
                buff_price_type: o
            }, method: "GET", dataType: "json", showLoading: false, success: function (e) {
                $(".detail-tab-cont").removeLoading();
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
                e.data.has_buff_price_history = has_buff_price_history;
                e.data.has_buff_min_price_history = has_buff_min_price_history;
                e.data.buff_price_type_options = n;
                e.data.days_options = s;
                e.data.days = r;
                e.data.buff_price_type = o;
                e.data.in_buff_price_tab = _;
                t = template_render("price-chart", e.data);
                $(".detail-tab-cont").html(t);
                Buff.initSelect("#price-history-days");
                Buff.initSelect("#price-history-type");
                b(e.data)
            }, error: function (e) {
                if (e.statusText == "abort") return;
                if (e.status == 500) {
                    Buff.toast(i18n("the_system_is_busy_please"))
                } else {
                    Buff.toast(i18n("detects_network_anomalies_please_try"))
                }
                $(".detail-tab-cont").removeLoading()
            }
        })
    };
    var O = function () {
        $(".new-tab li").removeClass("on");
        $(".new-tab li.related").addClass("on");
        $(".detail-tab-cont").showLoading();
        w = "/api/market/goods/related_recommendation";
        sendRequest("/api/market/goods/related_recommendation", {
            data: {game: j, goods_id: C},
            method: "GET",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
                html = template_render("related_list_pat", e.data);
                $(".detail-tab-cont").html(html)
            },
            error: function (e) {
                if (e.statusText == "abort") return;
                if (e.status == 500) {
                    Buff.toast(i18n("the_system_is_busy_please"))
                } else {
                    Buff.toast(i18n("detects_network_anomalies_please_try"))
                }
                $(".detail-tab-cont").removeLoading()
            }
        })
    };
    var q = function () {
        $(".new-tab li").removeClass("on");
        $(".new-tab li.user-preview").addClass("on");
        if ($(".new-tab li.user-preview").hasClass("need-login")) {
            var e = format_html('<div class="nodata"><p><i class="icon icon_nodata"></i></p><p><%= i18n("view_a_player_show_please") %></p><a href="javascript:;" onclick="loginModule.showLogin()" class="i_Btn i_Btn_hollow"><%= i18n("login") %></a></div>');
            $(".detail-tab-cont").html(e);
            return
        } else {
            e = template_render("user-preview", {});
            $(".detail-tab-cont").html(e)
        }
        Buff.initSelectMulti("#j_select-Order");
        var t = $("#j-open"), a = $("#j-packup"), i = $("#reset-filter"), r = $("#j-select");
        t.click(function (e) {
            t.hide();
            a.show();
            i.show();
            r.show();
            return false
        });
        a.click(function (e) {
            t.show();
            a.hide();
            i.hide();
            r.hide();
            return false
        });
        R(true)
    };
    var E = function () {
        $(".new-tab li").removeClass("on");
        $(".new-tab li.paintwear-rank").addClass("on");
        if ($(".new-tab li.paintwear-rank").hasClass("need-login")) {
            var e = format_html('<div class="nodata"><p><i class="icon icon_nodata"></i></p><p><%= i18n("view_wear_ranking_please_log") %></p><a href="javascript:;" onclick="loginModule.showLogin()" class="i_Btn i_Btn_hollow"><%= i18n("login") %></a></div>');
            $(".detail-tab-cont").html(e);
            return
        }
        $(".rank-Type").show();
        Buff.initSelect("#rank_type-Select");
        w = "/api/market/paintwear_rank";
        var t = getParamsFromHash();
        var a = t.page_num || 1;
        var i = t.rank_type || 0;
        Buff.setCompValue("rank_type-Select", i);
        $(".detail-tab-cont").showLoading();
        sendRequest("/api/market/paintwear_rank", {
            data: {game: j, goods_id: C, page_num: a, rank_type: i},
            method: "GET",
            dataType: "JSON",
            showLoading: false,
            success: function (e) {
                var t = format_html('<div class="nodata"><p><i class="icon icon_nodata"></i></p><p><%= i18n("no_meet_the_requirements_of") %></p></div>');
                $(".detail-tab-cont").removeLoading();
                if (e.code == "OK") {
                    if (e.data.ranks) {
                        t = template_render("paintwear_rank_pat", e.data);
                        $(".detail-tab-cont").html(t)
                    } else {
                        $(".detail-tab-cont").html(t);
                        return
                    }
                    $("#rank-title span").text($("#rank_type-Select").find("h3").text() || i18n("ranking_total_ranking"));
                    renderPagination({
                        total_count: e.data.total_count,
                        page_size: e.data.page_size,
                        page_num: e.data.page_num,
                        onPageClick: function (e, t) {
                            t.preventDefault();
                            updateHash("page_num", e);
                            window.scrollTo(0, 0)
                        }
                    })
                } else if (e.code == "Not Found") {
                    $(".detail-tab-cont").html(t)
                } else {
                    Buff.toast(e.error);
                    return
                }
            },
            error: function (e) {
                if (e.statusText == "abort") return;
                if (e.status == 500) {
                    Buff.toast(i18n("the_system_is_busy_please"))
                } else {
                    Buff.toast(i18n("detects_network_anomalies_please_try"))
                }
                $(".detail-tab-cont").removeLoading()
            }
        })
    };
    var R = function (e) {
        if (d == "loading") return;
        d = "loading";
        var t = [];
        $(".pinterest-selects .w-Selectsearch").each(function () {
            var e = $(this).attr("value");
            if (e) t.push(e)
        });
        var a = false;
        if (e) {
            $("#j_waterfull").html("");
            l = new waterFall({id: "#j_waterfull", width: 1140, itemWidth: 212, colums: 5});
            u = 0;
            _preview_slide_page_num = 0;
            a = true;
            p = []
        } else {
            $("#j_waterfull-loading").showLoading()
        }
        u += 1;
        _preview_slide_page_num += 1;
        c = {game: j, page_num: u};
        c["sort_by"] = $("#j_select-Order").attr("value");
        if (t.length > 0) {
            c.goods_ids = t.join(",")
        }
        $("#preview-total-count").text("");
        w = "/api/market/preview";
        sendRequest("/api/market/preview", {
            method: "GET", data: c, showLoading: a, success: function (e) {
                $("#j_waterfull-loading").removeLoading();
                d = "";
                if (e.code == "OK") {
                    if (e.data.items.length == 0 && e.data.page_num == 1) {
                        $(".pinterest-cont .nodata_tip").show();
                        $("#j_waterfull").css({height: 0});
                        $("#j_select-Order").hide()
                    } else {
                        $(".pinterest-cont .nodata_tip").hide();
                        $("#j_select-Order").show()
                    }
                    var t = e.data.items;
                    var a = e.data.page_size;
                    var i = e.data.page_num;
                    if (p.length >= e.data.total_count || t.length == 0) {
                        d = "end";
                        return
                    } else {
                        u = e.data.page_num
                    }
                    var r = e.data.user_infos;
                    var n = "";
                    for (var o = 0; o < e.data.items.length; o++) {
                        var s = e.data.items[o];
                        p.push(s);
                        var _ = template_render("pinterest_item_pat", {item: s, user_infos: r, index: p.length - 1});
                        n += $.trim(_)
                    }
                    var c = $(n);
                    $("#j_waterfull").append(c);
                    if (l == null) {
                        l = new waterFall({id: "#j_waterfull", width: 1140, itemWidth: 212, colums: 5})
                    }
                    l.setPosition(c)
                } else {
                    $("#j_waterfull-loading").removeLoading();
                    Buff.toast(e.error)
                }
            }
        })
    };
    var F = function () {
        var e = BuffConfig.MAX_SELL_PRICE;
        var _ = undefined;
        var t = undefined;
        var a = undefined;
        var c = [];
        var i = 0;
        var o = 0;
        var l = 0;
        var d;
        var s;
        var u;
        var p = {};
        var f = [];
        var m = function (e) {
            var t = 0, a = 0;
            var i = [];
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                if (n.success) {
                    t += 1
                } else {
                    a += 1;
                    if (i.indexOf(n.error) < 0) {
                        i.push(n.error)
                    }
                }
            }
            $("#loading-cover").hide();
            Popup.hide();
            if (d == 6 && t > 0 && e.length == 1) {
                normalBuy(g.user.id).show_wx_pay_qrcode(e[0].data.id, e[0].data.price);
                return
            }
            if (d == 10 && t > 0 && e.length == 1) {
                normalBuy(g.user.id).open_pcredit_pay(e[0].data.id);
                return
            }
            var o = "";
            if (t > 0) {
                o = i18n("a_successful_purchase") + " " + t + " " + i18n("piece_of_goods_please_go")
            }
            if (a > 0) {
                if (t > 0) {
                    o += "\n" + i18n("partial")
                }
                o += i18n("purchase_failure_reason_as_follows");
                for (r in i) {
                    o += "\n" + i[r]
                }
            }
            Buff.alert({
                title: i18n("buying_in_bulk_results"), message: o, hideCancel: true, success: function () {
                    window.location.reload()
                }
            })
        };
        var h = function (e) {
            if (!i || !e.length) return;
            Buff.alert({
                title: i18n("purchase"),
                message: i18n("please_wait"),
                hideCancel: true,
                hideConfirm: true,
                extraClasses: "batch_buying"
            });
            $("#loading-cover").show();
            var o = [];
            var s = function (r) {
                if (r >= i || r >= e.length) {
                    m(o);
                    return
                }
                var t = e[r];
                var n = undefined;
                sendRequest("/api/market/goods/buy", {
                    data: {
                        game: j,
                        goods_id: C,
                        sell_order_id: t.id,
                        price: t.price,
                        batch: 1,
                        pay_method: d,
                        allow_tradable_cooldown: l,
                        password_token: u
                    },
                    dataType: "json",
                    method: "POST",
                    showLoading: false,
                    ignoreCode: ["Internal Server Error"],
                    success: function (e) {
                        if (e.code != "OK") {
                            n = {success: false, orderid: t.id, error: e.error}
                        } else {
                            n = {success: true, orderid: t.id, data: e.data}
                        }
                    },
                    error: function (e) {
                        n = {success: false, orderid: t.id, error: e}
                    },
                    complete: function (e) {
                        if (e.responseJSON.code == "Realname Required") {
                            $("#j_popup_batchbuy .i_Btn_main").removeClass("i_Btn_disabled")
                        }
                        if (!n) {
                            $("#loading-cover").hide();
                            var t = Popup.boxes;
                            var a = t.length;
                            if (a >= 2 && !t[a - 1].hasClass("batch_buying")) {
                                var i = t[a - 1];
                                t[a - 1] = t[a - 2];
                                t[a - 2] = i
                            }
                            Popup.hide();
                            return
                        } else if (u && e.responseJSON.code == "Pay Password Error") {
                            Buff.toast(e.responseJSON.error);
                            return
                        }
                        o.push(n);
                        s(r + 1)
                    }
                })
            };
            s(0)
        };
        var v = function (s) {
            if (!a) {
                c = [];
                $("#batch-buy-total-count").parent().hide();
                y();
                return
            }
            sendRequest("/api/market/goods/sell_order", {
                data: {
                    game: j,
                    goods_id: C,
                    sort_by: "price.asc",
                    mode: "",
                    max_price: a,
                    page_size: _,
                    exclude_current_user: "1",
                    allow_tradable_cooldown: l
                }, method: "GET", showLoading: false, success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "warning"});
                        return
                    }
                    var t = e.data.items;
                    var a = [];
                    var i = 0;
                    var r = [];
                    f = [];
                    for (var n = 0; n < t.length; n++) {
                        if (g.is_partner_appid && t[n].asset_info && t[n].asset_info.tradable_unfrozen_time > Date.now() / 1e3) {
                            continue
                        }
                        i += parseFloat(t[n].price);
                        f.push(t[n].id);
                        a.push(i);
                        r.push(t[n])
                    }
                    c = a;
                    var o = e.data.total_count;
                    if (o <= _) {
                        o = r.length
                    }
                    if (o > 1e3) {
                        o = "1000+"
                    }
                    if (o == 1) {
                        o += " " + i18n("member")
                    } else {
                        o += " " + i18n("member") + i18n("pluar_s")
                    }
                    $("#batch-buy-total-count").text(o);
                    $("#batch-buy-total-count").parent().show();
                    y(s);
                    if (s) {
                        h(r)
                    }
                }
            })
        };
        var y = function (e) {
            if (!c.length || i <= 0) {
                o = 0;
                $("#j_popup_batchbuy .total_amount").html(formatPriceYuan(0));
                $("#j_popup_batchbuy .total_amount_custom").html(formatPriceCustom(0));
                $("#j_popup_batchbuy .i_Btn_main").addClass("i_Btn_disabled");
                return
            }
            if (i > _ && _ <= c.length) {
                Buff.toast(i18n("buying_in_bulk_quantity_can") + _ + i18n("member"));
                $("#batch-buy-num").val(_).trigger("change");
                return
            }
            if (i > c.length) {
                Buff.toast(i18n("the_purchase_amount_can_not"), {type: "error"});
                $("#batch-buy-num").val(c.length).trigger("change");
                return
            }
            o = c[i - 1];
            $("#j_popup_batchbuy .total_amount").html(formatPriceYuan(o));
            $("#j_popup_batchbuy .total_amount_custom").html(formatPriceCustom(o));
            if (!e) {
                $("#j_popup_batchbuy .i_Btn_main").removeClass("i_Btn_disabled")
            }
        };
        var b = function (e, t, a) {
            sendRequest("/account/api/pay_password/verify", {
                data: {password: e, type: 1, sell_orders: t},
                dataType: "json",
                method: "POST",
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "warning"});
                        return
                    }
                    a(e.data.password_token)
                }
            })
        };
        var r = function () {
            $("#batch-buy-search-sell-orders").click(function () {
                v(false)
            });
            $("#batch-buy-max-price").on("input", function () {
                $("#batch-buy-price-custom").text("");
                var e = $(this).val();
                if (!e) return;
                $("#batch-buy-price-custom").text(formatPriceNormalCustom(e, true))
            });
            $("#batch-buy-max-price").change(function () {
                a = $(this).val();
                if (a > e) {
                    $(this).val(e).trigger("change").trigger("input")
                }
                v(false)
            }).trigger("change");
            $("#batch-buy-cooldown").change(function () {
                l = $(this).attr("value") ? 1 : 0;
                v(false)
            }).trigger("change");
            $("#batch-buy-num").on("keypress", function () {
                var e = event.keyCode || event.charCode;
                if (e >= 48 && e <= 57) return true;
                return false
            });
            $("#batch-buy-num").change(function () {
                i = $(this).val();
                y()
            }).trigger("change");
            $("#j_popup_batchbuy .i_Btn_main").click(function () {
                if ($(this).hasClass("i_Btn_disabled")) return;
                $(this).addClass("i_Btn_disabled");
                var r = this;
                a = $("#batch-buy-max-price").val();
                i = $("#batch-buy-num").val();
                var n = [];
                for (var e = 0; e < f.length && n.length < i; e++) {
                    n.push(f[e])
                }
                if (n.length == 0) return;
                sendRequest("/api/market/goods/batch_buy/preview", {
                    data: {game: j, goods_id: C, sell_orders: n},
                    dataType: "json",
                    method: "POST",
                    success: function (e) {
                        $(r).removeClass("i_Btn_disabled");
                        if (e.code != "OK") {
                            Buff.toast(e.error, {type: "warning"});
                            return
                        }
                        var t = e.data.price;
                        var a = payMethodPopup();
                        var i = {
                            pay_methods: e.data.pay_methods, price: t, onPaymethodChange: function (e, t, a) {
                                d = e;
                                s = t !== "false";
                                p = a
                            }, onConfirm: function () {
                                Popup.hide();
                                if (ejzbAuthVerifyManager().process(p, a, i, t)) {
                                    return
                                }
                                if (!s) {
                                    payPasswordPopup(o, function (e) {
                                        Popup.hide();
                                        b(e, n, function (e) {
                                            u = e;
                                            v(true)
                                        })
                                    }, function () {
                                        Popup.hide();
                                        a.show(i)
                                    }).show();
                                    return
                                }
                                v(true)
                            }
                        };
                        a.show(i)
                    }
                })
            })
        };
        var n = function () {
            $("#j_popup_pay").remove();
            $("#j_popup_batchbuy").remove();
            $("#j_popup_supply").remove();
            $("#j_popup_bargain").remove();
            var e = template_render("batch_buy_pat", {goods: t, capacity: _});
            $("body").append(e);
            Popup.show("j_popup_batchbuy");
            r()
        };
        var w = function () {
            sendRequest("/api/market/goods/batch_buy/preview", {
                data: {game: j, goods_id: C, sell_orders: []},
                dataType: "json",
                method: "POST",
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "warning"});
                        return
                    }
                    pay_methods = e.data.pay_methods;
                    n(pay_methods)
                }
            })
        };
        var k = function () {
            sendRequest("/api/market/goods/info", {
                data: {goods_id: C, game: j, with_sell_max_price: "1"},
                method: "GET",
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "warning"});
                        return
                    }
                    t = e.data;
                    n()
                }
            })
        };
        var x = function () {
            sendRequest("/api/market/backpack", {
                data: {game: j}, method: "GET", success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "warning"});
                        return
                    }
                    _ = e.data.backpack_limit - e.data.backpack_count;
                    if (_ <= 0) {
                        Buff.alert({
                            title: i18n("purchase_failed"),
                            message: i18n("backpack_capacity_is_insufficient_can")
                        });
                        return
                    }
                    k()
                }
            })
        };
        _ = 50;
        k()
    };
    var a = function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
    var i = function () {
        return window.pageYOffset || document.documentElement.scrollTop
    };
    var I = function () {
        $(document).on("change", ".pinterest-selects .w-Selectsearch", function () {
            R(true)
        });
        $(document).on("click", "#upload_file_label", function () {
            $("#upload_file").click()
        });
        $(document).on("change", "#upload_file", function (e) {
            var t = e.target.files;
            var a = t[0];
            sendRequest("/api/feedback/gen_token", {
                method: "GET", showLoading: false, success: function (e) {
                    options = {
                        file: a,
                        upload_url: e.data.url,
                        max_file_size: e.data.max_size,
                        token: e.data.token,
                        callback: function (e) {
                            $("#upload_file_label .fileupload").html(format_html('<a href="<%= data.url %>" target="_blank" onclick="event.stopPropagation();"><img src="<%= data.url %>"/></a>', {data: e}));
                            $("#upload_file_label span").text(i18n("click_on_upload_picture"))
                        },
                        onprogress: function (e) {
                            if (e.lengthComputable) {
                                var t = (e.loaded / e.total * 100).toFixed(2);
                                $("#upload_file_label span").text(i18n("is_being_uploaded") + t + "%")
                            }
                        }
                    };
                    uploadFile(options)
                }
            })
        });
        $(document).on("click", "#j_popup_pubgwiki .i_Btn_main.enabled", function () {
            var t = this;
            var e = $("#upload_file_label img").attr("src");
            if (!e) {
                Buff.toast(i18n("please_upload_picture"));
                return
            }
            var a = $("#j_popup_pubgwiki .input-cont input").val();
            if (a && a.length > 24) {
                Buff.toast(i18n("do_not_exceed_24_characters"));
                return
            }
            $(this).removeClass("enabled");
            setTimeout(function () {
                $(t).addClass("enabled")
            }, 500);
            var i = {icon_url: e, desc: a, appid: g.appid};
            var r = [];
            $("#j_popup_pubgwiki .w-Selectsearch").each(function () {
                var e = $(this).attr("value");
                if (e) r.push(e)
            });
            if (r.length > 0) {
                i.goods_ids = r.join(",")
            }
            sendRequest("/api/market/preview/create", {
                method: "POST",
                showLoading: true,
                data: i,
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.toast(i18n("upload_success!_your_players_show"), {type: "success"});
                        setTimeout(function () {
                            window.location.reload()
                        }, 1e3)
                    } else {
                        $(t).addClass("enabled");
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        });
        $(document).on("click", "#reset-filter", function () {
            q()
        });
        $(document).on("change", "#j_select-Order", function () {
            R(true)
        });
        $(document).on("click", ".pinterest-action", function (e) {
            e.stopPropagation();
            if ($(this).hasClass("disabled")) return;
            $(this).addClass("disabled");
            var i = $(this).data("previewid");
            var r = $('.pinterest-action[data-previewid="' + i + '"]');
            if ($(this).hasClass("on")) {
                sendRequest("/api/market/preview/cancel/up", {
                    method: "POST",
                    data: {preview_id: i, game: j},
                    showLoading: false,
                    success: function (e) {
                        r.removeClass("disabled");
                        if (e.code == "OK") {
                            r.find("span").text(e.data.ups_num);
                            r.removeClass("on");
                            for (var t = 0; t < p.length; t++) {
                                var a = p[t];
                                if (a.id == i) {
                                    a.up = false;
                                    a.ups_num = e.data.ups_num;
                                    break
                                }
                            }
                        } else {
                            Buff.toast(e.error, {type: "error"})
                        }
                    },
                    complete: function () {
                        r.removeClass("disabled")
                    }
                })
            } else {
                sendRequest("/api/market/preview/up", {
                    method: "POST",
                    data: {preview_id: i, game: j},
                    showLoading: false,
                    success: function (e) {
                        r.removeClass("disabled");
                        if (e.code == "OK") {
                            r.find("span").text(e.data.ups_num);
                            r.addClass("on");
                            for (var t = 0; t < p.length; t++) {
                                var a = p[t];
                                if (a.id == i) {
                                    a.up = true;
                                    a.ups_num = e.data.ups_num;
                                    break
                                }
                            }
                        } else {
                            Buff.toast(e.error, {type: "error"})
                        }
                    },
                    complete: function () {
                        r.removeClass("disabled")
                    }
                })
            }
        });
        $(window).on("scroll", function () {
            var e = $(".new-tab li.user-preview").hasClass("on");
            if (e && l && a() + i() + t > l.getClientHeight()) {
                if (d === "loading" || d === "end" || d === "empty") {
                    return false
                }
                R()
            }
        });
        $(document).on("init", ".pinterest-selects .w-Selectsearch", function () {
            if ($(this).data("init")) return;
            $(this).data("init", true);
            var e = $(this).data("categorygroup");
            new selectSearch({
                id: "#j_Selectsearch-" + e,
                url: "/api/market/goods/all",
                queryData: {game: j, category_group: e, sort_by: "price.desc", page_size: 200},
                setParams: function (e) {
                    return {search: e}
                }
            })
        });
        $(document).on("init", "#j_popup_pubgwiki .w-Selectsearch", function () {
            if ($(this).data("init")) return;
            $(this).data("init", true);
            var e = $(this).data("categorygroup");
            new selectSearch({
                id: "#j_Selectsearch_upload-" + e,
                url: "/api/market/goods/all",
                queryData: {game: j, category_group: e, sort_by: "price.desc", page_size: 200},
                setParams: function (e) {
                    return {search: e}
                }
            })
        });
        $(document).on("click", ".pinterest-img", function () {
            Popup.show("j_popup_slide");
            var e = $(this).data("index");
            var t = $(this).data("previewid");
            var r = '<div class="popup_slide-main swiper-container" id="j_slideBox">                    <ul class="popup_slide-pic swiper-wrapper">                    </ul>                    <a class="popup_slide-prev icon_slide_left2 swiper-button-prev" href="javascript:void(0)" ></a>                    <a class="popup_slide-next icon_slide_right2 swiper-button-next" href="javascript:void(0)"></a>                </div>';
            $("#j_slideWrapper").html(r);
            var t = $(this).data("previewid");
            var a = {game: j, direction: "larger", cursor: t, goods_ids: c.goods_ids, sort_by: c.sort_by};
            var i = {game: j, direction: "smaller", cursor: t, goods_ids: c.goods_ids, sort_by: c.sort_by};
            var n = function (e) {
                if (f) {
                    clearTimeout(f)
                }
                if (m) {
                    m.abort()
                }
                $(".popup_slide_list ul").html("");
                f = setTimeout(function () {
                    e = e || $("#j_slideBox .swiper-slide-active").data("previewid");
                    m = sendRequest("/api/market/preview/goods", {
                        method: "GET",
                        data: {preview_id: e, game: j},
                        showLoading: false,
                        showError: false,
                        success: function (e) {
                            if (e.code == "OK") {
                                var t = "";
                                for (var a = 0; a < e.data.items.length; a++) {
                                    var i = e.data.items[a];
                                    t += format_html('<li><span><%- formatPriceNormalCustom(item.sell_reference_price) %></span><a href="/goods/<%= item.id %>" target="_blank"><img src="<%= item.goods_info.icon_url %>"/></a></li>', {item: i})
                                }
                                $(".popup_slide_list ul").html(t)
                            }
                        }
                    })
                }, 500)
            };
            var o = new Swiper(".swiper-container", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }, on: {
                    slideChange: function () {
                        var e = this.slides.length, t = this;
                        n(null);
                        if (e - this.activeIndex <= 5) {
                            _preview_slide_page_num += 1;
                            var a = Object.assign({}, c);
                            a.page_num = _preview_slide_page_num;
                            sendRequest("/api/market/preview", {
                                method: "GET",
                                data: a,
                                showLoading: false,
                                success: function (e) {
                                    if (e.code == "OK") {
                                        if (_preview_slide_page_num > e.data.total_page) {
                                            return
                                        }
                                        r = [];
                                        for (var t = 0; t < e.data.items.length; t++) {
                                            var a = e.data.items[t];
                                            var i = template_render("swiper_slide_pat", {item: a});
                                            r.push(i)
                                        }
                                        o.appendSlide(r)
                                    }
                                }
                            })
                        }
                    }
                }
            });
            var r = [];
            for (var s = 0; s < p.length; s++) {
                var _ = template_render("swiper_slide_pat", {item: p[s]});
                r.push(_)
            }
            o.appendSlide(r);
            o.slideTo(e, 0, false);
            n(t)
        });
        $(document).on("click", "#j-showall", function () {
            $(this).hide();
            $("#j-hideall").show();
            $("#j_popup_pubgwiki .w-Selectsearch.isextra").toggle()
        });
        $(document).on("click", "#j-hideall", function () {
            $(this).hide();
            $("#j-showall").show();
            $("#j_popup_pubgwiki .w-Selectsearch.isextra").toggle()
        })
    };
    var r = function (i, a) {
        if (!i) {
            i = function (e) {
                return {
                    tag_ids: "",
                    page_num: "",
                    min_paintwear: "",
                    max_paintwear: "",
                    min_fade: "",
                    max_fade: "",
                    min_price: "",
                    max_price: "",
                    extra_tag_ids: "",
                    sort_by: "",
                    name_tag: "",
                    wearless_sticker: ""
                }
            }
        }
        if (!a) {
            a = function (e, t) {
                return ""
            }
        }
        y = getParamsFromHash().tab || "selling";
        $(".new-tab li a").click(function (e) {
            e.preventDefault();
            if ($(this).parent().hasClass("on")) {
                return
            }
            $("#batch-buy-btn").parent().hide();
            $(".rank-Type").hide();
            jQuery.xhrPool.abort(w);
            if ($(this).parent().hasClass("selling")) {
                var t = a(y, "selling");
                extraTagIdsParser.parse(t.extra_tag_ids, t);
                t.page_num = "";
                t.tab = "selling";
                updateHashData(t);
                y = "selling"
            } else if ($(this).parent().hasClass("buying")) {
                var t = a(y, "buying");
                t.page_num = "";
                t.tab = "buying";
                updateHashData(t);
                y = "buying"
            } else if ($(this).parent().hasClass("history")) {
                var t = a(y, "history");
                t.page_num = "";
                t.tab = "history";
                updateHashData(t);
                y = "history"
            } else if ($(this).parent().hasClass("price-chart")) {
                var t = a(y, "price-chart");
                t.tab = "price-chart";
                updateHashData(t);
                y = "price-chart"
            } else if ($(this).parent().hasClass("related")) {
                updateHash("tab", "related")
            } else if ($(this).parent().hasClass("user-preview")) {
                var t = a(y, "user-preview");
                t.tab = "user-preview";
                updateHashData(t);
                y = "user-preview"
            } else if ($(this).parent().hasClass("paintwear-rank")) {
                var t = a(y, "paintwear-rank");
                t.page_num = 1;
                t.tab = "paintwear-rank";
                updateHashData(t);
                y = "paintwear-rank"
            }
        });
        $("#not-allow-tradable-cooldown").change(function () {
            if ($(this).attr("value")) {
                updateHash("allow_tradable_cooldown", 0)
            } else {
                updateHash("allow_tradable_cooldown", 1)
            }
        });
        I();
        if (getParamsFromHash().allow_tradable_cooldown == "0") {
            $("#not-allow-tradable-cooldown").attr("value", "yes");
            $("#not-allow-tradable-cooldown span").addClass("on")
        }
        $(window).on("hashchange", function () {
            if (n) {
                return
            }
            if (k) k.hide();
            if (_) _.hide();
            if (h) h.hide();
            if (v) v.hide();
            var e = getParamsFromHash().tab;
            if (e == "buying") {
                T()
            } else if (e == "history") {
                B()
            } else if (e == "price-chart") {
                S()
            } else if (e == "related") {
                O()
            } else if (e == "user-preview") {
                q()
            } else if (e == "paintwear-rank") {
                E()
            } else {
                P()
            }
        }).trigger("hashchange");
        $("body").on("change", "#order-by-paintwear", function () {
            if ($(this).hasClass("w-Order_asc")) {
                updateHashData({page_num: 1, sort_by: "paintwear.asc"})
            } else {
                updateHashData({page_num: 1, sort_by: "paintwear.desc"})
            }
        });
        $("body").on("change", "#order-by-price", function () {
            if ($(this).hasClass("w-Order_asc")) {
                updateHashData({page_num: 1, sort_by: "price.asc"})
            } else {
                updateHashData({page_num: 1, sort_by: "price.desc"})
            }
        });
        $("body").on("change", "#order-by-cooldown", function () {
            if ($(this).hasClass("w-Order_asc")) {
                updateHashData({page_num: 1, sort_by: "cooldown.asc"})
            } else {
                updateHashData({page_num: 1, sort_by: "cooldown.desc"})
            }
        });
        $("body").on("change", "#mode-select", function () {
            updateHashData({page_num: 1, mode: $(this).attr("value")})
        });
        $("body").on("change", "#history-type", function () {
            updateHash("history", $(this).attr("value"))
        });
        $("body").on("click", "#batch-buy-btn, #batch-buy-btn2", function () {
            if (g.game == "csgo" && $(this).attr("id") == "batch-buy-btn") {
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("page_temporarily_does_not_support"),
                    hideCancel: true
                });
                return
            }
            sendRequest("/account/api/user/info/v2", {
                dataType: "json", method: "GET", success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error);
                        return
                    }
                    if (g.is_partner_appid) {
                        if (e.data.user_info.partner_role_info && e.data.user_info.partner_role_info[g.game]) {
                            F()
                        } else {
                            userProfile().initBindBadlanders();
                            Popup.show("j_popup_g101_bind")
                        }
                        return
                    }
                    if (e.data.user_info.steamid) {
                        if (e.data.user_info.trade_url) {
                            F()
                        } else {
                            Buff.alert({
                                title: i18n("prompt"),
                                message: i18n("you_have_yet_to_bind"),
                                hideCancel: true,
                                success: function () {
                                    window.open("/user-center/profile", "_blank")
                                }
                            })
                        }
                    } else {
                        Buff.alert({
                            title: i18n("unbound_steam"),
                            message: i18n("detects_that_you_are_also"),
                            hideCancel: true,
                            confirmText: i18n("to_bind"),
                            success: function () {
                                window.open("/user-center/profile", "_blank")
                            }
                        })
                    }
                }
            })
        });
        $("body").on("click", ".cancel-buy-order", function () {
            var e = $(this).data("orderid");
            var t = $(this).data("real-num") + "/" + $(this).data("num");
            var a = formatPriceNormalYuan(parseFloat($(this).data("price") * ($(this).data("num") - $(this).data("real-num"))));
            var i = $(this).data("pay-method");
            var r = "";
            if (i == 6 || i == 7) {
                r = i18n("will_be_returned_to_origin", {money: a})
            } else if (i != 43) {
                r = i18n("will_be_returned_to_you_buff_b", {money: a})
            }
            Buff.alert({
                title: i18n("termination_buying"),
                message: i18n("whether_to_terminate_the_purchase", {progress: t, refund_desc: r}),
                success: function () {
                    var t = function () {
                        sendRequest("/api/market/buy_order/cancel", {
                            data: {game: g.game, buy_orders: [e]},
                            dataType: "json",
                            method: "POST",
                            success: function (e) {
                                if (e.code == "OK") {
                                    var t = Object.values(e.data)[0];
                                    if (t === "OK") {
                                        Buff.toast(i18n("cancel_buying_success"), {type: "success"});
                                        setTimeout(function () {
                                            window.location.reload()
                                        }, 1e3)
                                    } else {
                                        Buff.toast(t, {type: "error"})
                                    }
                                } else {
                                    Buff.toast(e.error, {type: "error"})
                                }
                            }
                        })
                    };
                    sendRequest("/api/market/buy_order/cancel/check_rate_limit", {
                        data: {game: g.game, buy_orders: [e]},
                        dataType: "json",
                        method: "POST",
                        success: function (e) {
                            if (e.code == "OK") {
                                t()
                            } else if (e.code == "Request Rate Will Be Limited") {
                                Buff.alert({title: i18n("termination_buying"), message: e.error, success: t})
                            } else {
                                Buff.toast(e.error, {type: "error"})
                            }
                        }
                    })
                }
            })
        });
        $("body").on("click", ".j_Goods-jump", function () {
            var e = $(this).data("goodsid");
            n = true;
            var t = $(this).data("is_change");
            var a = i(t);
            extraTagIdsParser.parse(a.extra_tag_ids, a);
            if (!t) {
                a["min_paintwear"] = "";
                a["max_paintwear"] = ""
            }
            a["tag_ids"] = "";
            a["paintseed_group"] = "";
            a["page_num"] = 1;
            updateHashData(a);
            window.location.href = "/goods/" + e + "#" + $.param(getParamsFromHash()).replace(/\+/g, "%20")
        });
        if (getParams()["from"] === "market") {
            var e = sessionStorage.getItem("breadcrumb_text");
            var t = sessionStorage.getItem("breadcrumb_hash") || "";
            if (t && t.substr(0, 1) != "#") {
                t = "#" + t
            }
            if (e) {
                $("span.cru-filter").append($("<a />", {href: "/market/" + j + t, text: e}));
                $(".cru-filter").show()
            } else {
                $("span.cru-market a").attr("href", "/market/" + j + t)
            }
        }
        $("#j_showpackage").hover(function () {
            var e = $(this).offset().top, t = e - 20, a = "auto";
            if (e + $("#j_packagebox").height() > $(window).height()) {
                t = "auto";
                a = 10 - $(window).scrollTop()
            }
            $("#j_packagebox").css({left: $(this).offset().left + $(this).width() + 10, top: t, bottom: a}).show()
        }, function () {
            boxTimer = setTimeout(function () {
                $("#j_packagebox").hide()
            }, 200)
        });
        $("#j_packagebox").hover(function () {
            if (boxTimer) {
                clearTimeout(boxTimer)
            }
        }, function () {
            $(this).hide()
        });
        $("body").on("click", ".table-toggle a", function () {
            if ($(".my-paintwear-rank.need-hide").css("display") === "none") {
                $(".my-paintwear-rank.need-hide").css("display", "table-row");
                $(this).html(format_html('<%= i18n("click_to_collapse") %>&nbsp<div class="icon_arrow down"></div>'))
            } else {
                $(".my-paintwear-rank.need-hide").css("display", "none");
                $(this).html(format_html('<%= i18n("click_to_expand") %>&nbsp<div class="icon_arrow up"></div>'))
            }
        });
        $("body").on("change", "#rank_type-Select", function () {
            var e = $(this).attr("value");
            updateHashData({page_num: 1, tab: "paintwear-rank", rank_type: e})
        });
        o = "";
        s = $("#price-history-days").find("h3").text();
        $("body").on("change", "#price-history-days", function () {
            var e = function () {
                var e = "#price-history-days";
                if (o) {
                    $(e + " ul li").removeClass("on");
                    $(e).find("ul li[value=" + o + "]").addClass("on")
                }
                if (s) {
                    $(e).find("h3").text(s)
                }
            };
            var t = $(this).attr("value");
            var a = $(this).find("li[value=" + t + "]");
            if (a && a.data("disabled")) {
                var i = false;
                var r = i18n("view_more_long_time_of");
                Buff.alert({
                    title: i18n("prompt"),
                    message: r,
                    hideCancel: true,
                    hideConfirm: true,
                    success: function () {
                        e()
                    },
                    cancel: function () {
                        e()
                    },
                    onClose: function () {
                        e()
                    }
                });
                return
            }
            o = t;
            s = a.text();
            updateHash2("days", t);
            localStorage.setItem("history_price_days_" + g.appid, t)
        });
        $("body").on("change", "#price-history-type", function () {
            var e = $(this).attr("value");
            var t = $(this).find("li[value=" + e + "]");
            $("#price-history-type").find("h3").text(t.text());
            updateHash2("buff_price_type", e);
            localStorage.setItem("buff_price_type_" + g.appid, e)
        });
        var r = null;
        $("#j_fav").on("mouseenter", function () {
            clearTimeout(r);
            if ($("#j_fav_list").is(":visible")) return;
            var e = [];
            $("#j_fav_list li.add-bookmark").each(function () {
                if ($(this).data("target-type") == 5) {
                    e.push($(this).data("target-id"))
                }
            });
            sendRequest("/account/api/check_bookmark/batch", {
                method: "GET",
                data: {target_type: 5, target_ids: e.join(",")},
                showLoading: false,
                showError: false,
                success: function (t) {
                    if (t.code != "OK") return;
                    var a = bookmark();
                    Object.keys(t.data.bookmarked).forEach(function (e) {
                        a.setCacheData(5, e, t.data.bookmarked[e])
                    });
                    a.updateView();
                    $("#j_fav_list").show()
                }
            })
        });
        $("#j_fav").on("mouseleave", function () {
            r = setTimeout(function () {
                $("#j_fav_list").hide()
            }, 400)
        });
        $("body").on("click", "a.csgo_inspect_img_btn_to_login", function (e) {
            e.stopPropagation();
            loginModule.showLogin()
        })
    };
    var L = function (e) {
        k = e
    };
    var z = function (e) {
        _ = e
    };
    var A = function (e) {
        h = e
    };
    var M = function (e) {
        v = e
    };
    return {init: r, setTagFilter: L, setTagFilterHistory: z, setTagFilterBuyOrder: A, setTagFilterChart: M}
};
var FilterDataManager = function () {
    var h = {global: {}};
    var l = ["goods_id", "tab"];
    var d = ["tag_ids", "paintseed", "tier", "paintseed_group", "float_range", "fade_range", "name_tag", "min_price", "max_price", "rank_type", "extra_tag_ids"];
    var u = ["tag_ids", "paintseed", "tier", "paintseed_group", "min_paintwear", "max_paintwear", "min_fade", "max_fade", "name_tag", "min_price", "max_price", "rank_type", "extra_tag_ids"];
    return {
        get_key: function () {
            return "fdm_data"
        }, current_tab: function () {
            return getParamsFromHash().tab || "selling"
        }, get_exclusive_groups: function () {
            return [["paintseed", "tier", "paintseed_group"]]
        }, get_data_imp: function (e, t, a) {
            if (t == "tag_ids") {
                var i = [];
                for (var r in e) {
                    if (r == "unlock_style" || r.indexOf("gem") !== -1) {
                        if (!a && !e[r]["value"]) {
                            continue
                        }
                        var n = e[r];
                        n["key"] = r;
                        i.push(n)
                    }
                }
                return i
            }
            if (["float_range", "fade_range"].includes(t)) {
                var o = [], s = {float_range: ["min_paintwear", "max_paintwear"], fade_range: ["min_fade", "max_fade"]},
                    _ = s[t];
                for (var c = 0; c < _.length; c++) {
                    var l = _[c];
                    if (e[l]) {
                        o.push(e[l])
                    }
                }
                return o
            }
            return e[t] ? [e[t]] : []
        }, get_data: function (e, t) {
            var t = t || h[this.current_tab()].data;
            return this.get_data_imp(t, e, false)
        }, get_remain_data: function (e, t) {
            var t = t || h[this.current_tab()].remain_data;
            return this.get_data_imp(t, e, true)
        }, parse_tag_ids_imp: function (e, t) {
            var o = {};
            for (var a = 0; a < e.length; a++) {
                var i = e[a].split("--");
                var r = null;
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    var _ = function (e, t, a) {
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            if (r.id && r.name) {
                                var n = [t, r.name].join("--");
                                if (n == a) {
                                    o[n] = r.id.toString();
                                    return true
                                }
                            }
                        }
                        return false
                    };
                    r = null;
                    if (s.depth == 1) {
                        if (s.category == i[0] || s.type == i[0]) {
                            r = s
                        }
                    } else if (s.depth == 2) {
                        for (var c = 0; c < s.items.length; c++) {
                            if (s.items[c].category == i[0]) {
                                r = s.items[c];
                                break
                            }
                        }
                    }
                    if (!r) {
                        continue
                    }
                    if (_(r.items, r.category || r.type, e[a])) {
                        break
                    }
                }
            }
            return o
        }, parse_tag_ids: function (e, t, a) {
            if (!t || !a || !a.asset_tags) {
                return t ? {data: {}, remain_data: t.split(",")} : {}
            }
            var i = t.split(",");
            var r = this.parse_tag_ids_imp(i, a.asset_tags);
            var n = Object.keys(r);
            var o = i.filter(function (e) {
                return n.indexOf(e) == -1
            });
            return {data: r, remain_data: o}
        }, parse_tier_paintseed_group: function (e, t) {
            if (!t) {
                return {}
            }
            var a = e.split("--");
            var i = t.paintseed_filters;
            if (!i) {
                return {}
            }
            var r = [];
            if (a[0] == "tier" || a[0] == "paintseed_group") {
                for (var n = 0; n < i.length; n++) {
                    if (i[n].type != a[0]) {
                        continue
                    }
                    r = i[n].items;
                    break
                }
            } else if (a[0] == "paintseed") {
                if (i.length >= 3) {
                    if (i[2].type == a[0]) {
                        r = i[2].items
                    }
                } else if (i.length == 0 || i.length == 1 && i[0].type == a[0]) {
                    var o = {};
                    o[e] = a[1];
                    return o
                }
            }
            for (var s = 0; s < r.length; s++) {
                var _ = r[s];
                if (_.name == a[1]) {
                    var o = {};
                    o[e] = _.value;
                    return o
                }
            }
            return {}
        }, parse_float_fade_range_imp: function (e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                var r = [i[0], i[1]].join("-");
                if (r == e) {
                    return true
                }
            }
            return false
        }, parse_float_fade_range: function (e, t, a) {
            var i = function (e) {
                var t = [];
                var a = {items: [], text: t};
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    var n = r.split("--");
                    var o = n[0], s = n.length == 2 ? n[1] : "";
                    t.push(s);
                    a["items"].push({key: o, text: s})
                }
                a["text"] = rangeKeyParser.deparse(t[0], t[1]);
                return a
            };
            var r = t.split(",");
            var n = i(r);
            if (n["text"].indexOf("-") !== -1) {
                var o = a.matcher;
                if (!o) {
                    return
                }
                var s = {float_range: o["paintwear_choices"], fade_range: o["fade_choices"]};
                var _ = s[e] || [];
                var c = false;
                if (_.length) {
                    c = true
                }
            } else if (n["text"].indexOf("≥") != -1 || n["text"].indexOf("≤") != -1) {
                var c = true
            }
            if (c) {
                for (var l = 0; l < n.items.length; l++) {
                    n.items[l].value = n.items[l].text;
                    var d = n.items[l];
                    var u = {};
                    u[[d.key, d.text].join("--")] = d.value;
                    this.merge_data_ele(a["data"], this.translate_data(u))
                }
            } else {
                var p = [];
                for (var l = 0; l < n.items.length; l++) {
                    var d = n.items[l];
                    p.push([d.key, d.text].join("--"))
                }
                this.merge_data_ele(a["remain_data"], this.translate_remain_data(p))
            }
        }, parse_paintseed_group_hash_name: function (e, t) {
            var a = [];
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                var n = "";
                var o = t[1].type;
                var s = t[1].name;
                var _ = t[1].items;
                for (var c = 0; c < _.length; c++) {
                    var l = _[c];
                    if (l.value && l.value == r) {
                        n = [[s, o].join("_"), l.name].join(":");
                        a.push(n)
                    }
                }
            }
            return a
        }, parse_tag_ids_hash_name: function (e, t) {
            var a = {};
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (o.depth == 1) {
                        for (var s = 0; s < o.items.length; s++) {
                            var _ = o.items[s];
                            if (_.category && _.id && _.id == r) {
                                a[r] = [["deep1", [o.type].join("_")].join("="), _.name].join("--")
                            }
                        }
                    } else if (o.depth == 2) {
                        for (var s = 0; s < o.items.length; s++) {
                            for (var c = 0; c < o.items[s].items.length; c++) {
                                var _ = o.items[s].items[c];
                                if (_.category && _.id && _.id == r) {
                                    a[r] = [["deep2", [o.type, o.items[s].category].join("_")].join("="), _.name].join("--")
                                }
                            }
                        }
                    }
                }
            }
            return a
        }, parse_key_hash_name: function (e, t, a) {
            if (!t.length) {
                return {}
            }
            var i = {};
            switch (e) {
                case"tag_ids":
                    i = this.parse_tag_ids_hash_name(t, a["asset_tags"]);
                    break;
                case"paintseed_group":
                    i = this.parse_paintseed_group_hash_name(t, a["paintseed_group"]);
                    break;
                default:
                    break
            }
            var r = Object.keys(i);
            var n = t.filter(function (e) {
                return r.indexOf(e) == -1
            });
            return {data: i, remain_data: n.join(",")}
        }, register: function (e) {
            if (!h[e.tab]) {
                h[e.tab] = {data: {}, remain_data: {}}
            }
            h[e.tab].matcher = e.matcher;
            h[e.tab].serialize_data = ""
        }, translate_data_ele: function (e, t) {
            var a = e.split("--");
            var i = {};
            i[a[0]] = {key: a[0], text: a[1]};
            if (t) {
                i[a[0]]["value"] = t
            }
            return i
        }, translate_data: function (e) {
            var t = {};
            for (var a in e) {
                var i = e[a];
                var r = this.translate_data_ele(a, i);
                for (var n in r) {
                    t[n] = r[n]
                }
            }
            return t
        }, translate_remain_data: function (e) {
            var t = {};
            for (var a = 0; a < e.length; a++) {
                var i = e[a];
                var r = this.translate_data_ele(i);
                for (var n in r) {
                    t[n] = r[n]
                }
            }
            return t
        }, de_translate_data_ele: function (e) {
            var t = [];
            for (var a = 0; a < e.length; a++) {
                var i = e[a];
                t.push([i.key, i.text].join("--"))
            }
            return t.join(",")
        }, apply: function (e, t) {
            var a = function (e, t) {
                var a = {};
                for (var i = 0; i < e.length; i++) {
                    var r = e[i].split(":");
                    var n = r[1];
                    if (r[0] in t) {
                        continue
                    }
                    a[r[0]] = n
                }
                return a
            };
            var i = localStorage.getItem(this.get_key());
            if (!i) {
                return
            }
            e = e || {};
            var r = a(i.split(";"), e);
            if (!("goods_id" in r)) {
                localStorage.removeItem(this.get_key());
                return
            }
            if (t.length && !t.includes(r["goods_id"])) {
                localStorage.removeItem(this.get_key());
                return
            }
            var n = h[this.current_tab()];
            if (!n) {
                h[this.current_tab()] = {serialize_data: "", data: {}, remain_data: {}};
                n = h[this.current_tab()]
            }
            for (var o in r) {
                if (l.includes(o)) {
                    h["global"][o] = r[o]
                } else if (o == "tag_ids") {
                    var s = this.parse_tag_ids(o, r[o], n.matcher);
                    if (!$.isEmptyObject(s)) {
                        this.merge_data_ele(n["data"], this.translate_data(s["data"]));
                        this.merge_data_ele(n["remain_data"], this.translate_remain_data(s["remain_data"]))
                    }
                } else if (["paintseed_group", "paintseed", "tier"].includes(o)) {
                    var _ = [o, r[o]].join("--");
                    if (o == "paintseed_group") {
                        _ = r[o]
                    }
                    var c = this.parse_tier_paintseed_group(_, n.matcher);
                    if (!$.isEmptyObject(c)) {
                        this.merge_data_ele(n["data"], this.translate_data(c))
                    } else {
                        this.merge_data_ele(n["remain_data"], this.translate_remain_data([_]))
                    }
                } else if (["float_range", "fade_range"].includes(o)) {
                    this.parse_float_fade_range(o, r[o], n)
                }
            }
        }, serialize: function (e, t) {
            var a = [];
            if (!h[this.current_tab()]) {
                return
            }
            for (var i = 0; i < d.length; i++) {
                var r = d[i];
                if (!t && r == "float_range") {
                    continue
                }
                var n = this.get_data(r);
                var o = this.de_translate_data_ele(n);
                var s = this.get_remain_data(r);
                var _ = this.de_translate_data_ele(s);
                var c = [];
                if (o) {
                    c.push(o)
                }
                if (_) {
                    c.push(_)
                }
                if (c.length) {
                    a.push([r, c.join(",")].join(":"))
                }
            }
            a.push(["goods_id", e].join(":"));
            a.push(["tab", this.current_tab()].join(":"));
            localStorage.setItem(this.get_key(), a.join(";"))
        }, parse_sync_key_value: function (e, t, a) {
            a = a || {};
            var i = {};
            var r = e;
            var n = t;
            if (["tier", "paintseed", "paintseed_group"].includes(e)) {
                var o = t.split("-");
                r = o[0];
                n = o[1];
                e == "tier" && r == "paintseed" ? a["text"] = n : ""
            } else if (["float_range", "fade_range"].includes(e)) {
                var o = rangeKeyParser.parse(t);
                var s = {float_range: ["min_paintwear", "max_paintwear"], fade_range: ["min_fade", "max_fade"]};
                var _ = s[e];
                var c = [o[0], o[1]];
                var l = [];
                for (var d = 0; d < _.length; d++) {
                    var i = {};
                    r = _[d];
                    n = c[d];
                    i["key"] = r;
                    i["text"] = n;
                    i["value"] = n;
                    l.push({key: r, value: i})
                }
                return l
            }
            var l = [];
            i["key"] = r;
            a["value"] = n;
            for (var u in a) {
                i[u] = a[u]
            }
            l.push({key: r, value: i});
            return l
        }, sync: function (e, t, a, i) {
            var r = i || this.current_tab();
            var n = h[r];
            if (!t) {
                var o = [e];
                if (["float_range", "fade_range"].includes(e)) {
                    var s = {float_range: ["min_paintwear", "max_paintwear"], fade_range: ["min_fade", "max_fade"]};
                    o = s[e]
                }
                for (var _ in o) {
                    var c = o[_];
                    delete n["data"][c];
                    delete n["remain_data"][c]
                }
                var l = this.get_exclusive_groups();
                for (var _ = 0; _ < l.length; _++) {
                    var l = l[_];
                    if (l.includes(e)) {
                        for (var d = 0; d < l.length; d++) {
                            var u = l[d];
                            delete n["data"][u];
                            delete n["remain_data"][u]
                        }
                    }
                }
                for (var i in h) {
                    if (i == r) {
                        continue
                    }
                    if (!h[i]) {
                        continue
                    }
                    if (h[i].data) {
                        for (var _ in o) {
                            delete h[i]["data"][o[_]]
                        }
                    }
                    if (h[i].remain_data) {
                        for (var _ in o) {
                            delete h[i]["remain_data"][o[_]]
                        }
                    }
                }
                return
            }
            var p = this.parse_sync_key_value(e, t, a);
            for (var _ = 0; _ < p.length; _++) {
                var f = p[_]["value"];
                var m = p[_]["key"];
                n["data"][m] = f;
                delete n["remain_data"][m]
            }
            this.process_exclusive_group_keys(n, m)
        }, process_exclusive_group_keys: function (e, t) {
            var a = this.get_exclusive_groups();
            for (var i = 0; i < a.length; i++) {
                var r = a[i];
                if (r.indexOf(t) !== -1) {
                    for (var n = 0; n < r.length; n++) {
                        var o = a[i][n];
                        if (o !== t) {
                            delete e["data"][o];
                            delete e["remain_data"][o]
                        }
                    }
                }
            }
        }, merge_data_ele: function (e, t) {
            for (var a in t) {
                e[a] = t[a]
            }
        }, sync_tab_tag_ids: function (e, t, a) {
            var i = h[a];
            var r = i.matcher;
            var n = this.get_data(e, h[t]["data"]);
            if (n.length) {
                var o = this.de_translate_data_ele(n);
                var s = this.parse_tag_ids(e, o, r);
                var _ = this.translate_data(s["data"]);
                var c = this.translate_remain_data(s["remain_data"]);
                this.merge_data_ele(i["data"], _);
                this.merge_data_ele(i["remain_data"], c)
            }
            var l = this.get_remain_data(e, h[t]["remain_data"]);
            if (l.length) {
                var d = this.de_translate_data_ele(l);
                var u = this.parse_tag_ids(e, d, r);
                var p = this.translate_data(u["data"]);
                var f = this.translate_remain_data(u["remain_data"]);
                this.merge_data_ele(i["data"], p);
                this.merge_data_ele(i["remain_data"], f)
            }
        }, sync_tab_tier_paintseed_group: function (e, t, a) {
            var i = h[a];
            var r = i.matcher;
            var n = this.get_data(e, h[t]["data"]);
            if (n.length) {
                var o = this.de_translate_data_ele(n);
                var s = this.parse_tier_paintseed_group(o, r);
                if (!$.isEmptyObject(s)) {
                    this.merge_data_ele(i["data"], this.translate_data(s));
                    this.process_exclusive_group_keys(i, e)
                } else {
                    this.merge_data_ele(i["remain_data"], this.translate_remain_data([o]));
                    this.process_exclusive_group_keys(i, e)
                }
            } else {
                delete i["data"][e]
            }
            var _ = this.get_data(e, h[t]["remain_data"]);
            if (_.length) {
                var c = this.de_translate_data_ele(_);
                var l = this.parse_tier_paintseed_group(c, r);
                if (!$.isEmptyObject(l)) {
                    this.merge_data_ele(i["data"], this.translate_data(l));
                    this.process_exclusive_group_keys(i, e)
                } else {
                    this.merge_data_ele(i["remain_data"], this.translate_remain_data([c]));
                    this.process_exclusive_group_keys(i, e)
                }
            }
        }, sync_tab_float_fade_range: function (e, t, a) {
            var i = h[a];
            var r = this.get_data(e, h[t]["data"]);
            if (r.length) {
                var n = this.de_translate_data_ele(r);
                this.parse_float_fade_range(e, n, i)
            } else {
                var o = this.get_data(e, h[t]["remain_data"]);
                if (o.length) {
                    var s = this.de_translate_data_ele(o);
                    this.parse_float_fade_range(e, s, i)
                }
            }
        }, sync_tab_specify_tab_key: function (e, t, a) {
            var i = h[a];
            if (e == "rank_type") {
                if (a == "paintwear-rank") {
                    if (e in h[t]["remain_data"]) {
                        i["data"][e] = h[t]["remain_data"][e];
                        return
                    }
                } else if (t == "paintwear-rank") {
                    if (e in h[t]["data"]) {
                        i["remain_data"][e] = h[t]["data"][e];
                        return
                    }
                } else {
                    if (e in h[t]["remain_data"]) {
                        i["remain_data"][e] = h[t]["remain_data"][e];
                        return
                    }
                }
            } else if (t == "selling") {
                i["remain_data"][e] = h[t]["data"][e] || h[t]["remain_data"][e]
            } else if (a == "selling") {
                if (!(e in i["remain_data"])) {
                    i["data"][e] = h[t]["remain_data"][e]
                }
            } else {
                if (e in h[t]["remain_data"]) {
                    i["remain_data"][e] = h[t]["remain_data"][e]
                }
            }
        }, sync_tab: function (e, t) {
            if (!h[e]) {
                return
            }
            if (!h[t]) {
                h[t] = {data: {}, remain_data: {}, serialize_data: ""}
            }
            for (var a = 0; a < d.length; a++) {
                var i = d[a];
                switch (i) {
                    case"tag_ids":
                        this.sync_tab_tag_ids(i, e, t);
                        break;
                    case"tier":
                    case"paintseed":
                    case"paintseed_group":
                        this.sync_tab_tier_paintseed_group(i, e, t);
                        break;
                    case"float_range":
                    case"fade_range":
                        this.sync_tab_float_fade_range(i, e, t);
                        break;
                    case"name_tag":
                    case"rank_type":
                    case"extra_tag_ids":
                    case"min_price":
                    case"max_price":
                        this.sync_tab_specify_tab_key(i, e, t);
                        break;
                    default:
                        break
                }
            }
        }, get_all: function (e, t, a) {
            var e = e == undefined ? true : e;
            var t = t || this.current_tab();
            if (!a && (!h[t] || $.isEmptyObject(h[t].data))) {
                return e ? "" : {}
            }
            if (a && (!h[t] || $.isEmptyObject(h[t].data) && $.isEmptyObject(h[t].remain_data))) {
                return e ? "" : {}
            }
            var i = {};
            for (var r = 0; r < u.length; r++) {
                var n = u[r];
                var o = this.get(n, t, a);
                if (o) {
                    i[n] = o
                }
            }
            var s = i;
            if (e) {
                var _ = [];
                for (var c in i) {
                    _.push([c, i[c]].join("="))
                }
                s = _.join("&")
            }
            return s
        }, get: function (e, t, a) {
            var t = t || this.current_tab();
            if (!h[t]) {
                return ""
            }
            var i = this.get_data(e, h[t].data);
            if (!i.length && a) {
                var i = this.get_remain_data(e, h[t].remain_data);
                if (i.length) {
                    for (var r = 0; r < i.length; r++) {
                        if (!i[r]["value"]) {
                            i[r]["value"] = specifyKeyParser.parse(e, i[r]["text"]) || i[r]["text"]
                        }
                    }
                }
            }
            var n = [];
            for (var r = 0; r < i.length; r++) {
                n.push(i[r]["value"])
            }
            var o = ["float_range", "fade_range"].includes(e) ? "-" : ",";
            return n.join(o)
        }, reset: function () {
            localStorage.removeItem(this.get_key())
        }, sync_tab_from_hash: function (e, t) {
            if (!h[t]) {
                h[t] = {data: {}, remain_data: {}, serialize_data: ""}
            }
            if (!$.isEmptyObject(e)) {
                for (var a in e) {
                    this.sync(a, e[a]["value"], {text: e[a]["text"]}, t)
                }
                var i = ["buying", "history", "user-preview", "price-chart", "paintwear-rank"];
                for (var r in i) {
                    var t = i[r];
                    this.sync_tab("selling", t)
                }
            }
        }
    }
};
var specifyKeyParser = function () {
    var e = function (e, t) {
        if (!["paintseed", "name_tag", "tier"].includes(e)) {
            return
        }
        if (e == "name_tag") {
            if (["有", "Renamed"].includes(t)) {
                return "1"
            }
            if (["无", "None"].includes(t)) {
                return "0"
            }
        }
        if (e == "tier") {
            return t.replace("T", "Tier")
        }
    };
    return {parse: e}
}();
var extraTagIdsParser = function () {
    var e = function (e, t, a) {
        if (e === undefined) {
            t.wearless_sticker = "";
            t.extra_tag_ids = "";
            return
        }
        if (e === "non_empty" || e === "squad_combos" || e === "empty" || e === "") {
            t.wearless_sticker = ""
        } else if (e === "non_empty_wearless") {
            t.wearless_sticker = "1";
            e = "non_empty"
        } else if (e === "squad_combos_wearless") {
            t.wearless_sticker = "1";
            e = "squad_combos"
        } else {
            if (a === undefined) {
                var i = getParamsFromHash();
                if (!$.isEmptyObject(i) && i.wearless_sticker) {
                    t.wearless_sticker = i.wearless_sticker
                }
            } else {
                t.wearless_sticker = a
            }
        }
        if (e === "custom") {
            t.extra_tag_ids = getParamsFromHash().extra_tag_ids
        } else {
            t.extra_tag_ids = e
        }
    };
    return {parse: e}
}();
var rangeKeyParser = function () {
    var e = function (e) {
        var t = "";
        var a = "";
        if (e.includes("-")) {
            t = e.split("-")[0];
            a = e.split("-")[1]
        } else if (e.includes("≥")) {
            t = e.split("≥")[1]
        } else if (e.includes("≤")) {
            a = e.split("≤")[1]
        }
        return [t, a]
    };
    var t = function (e, t) {
        var a = "";
        if (t && e) {
            a = e + "-" + t
        }
        if (!t && e) {
            a = "≥" + e
        }
        if (t && !e) {
            a = "≤" + t
        }
        return a
    };
    return {parse: e, deparse: t}
}();
var assetInfoMgr = function () {
    var e = null;
    var i = {};
    var t = function (e) {
        for (var t in e) {
            var a = e[t];
            i[a.assetid] = a
        }
    };
    var a = function (e) {
        return i[e]
    };
    return function () {
        if (!e) {
            e = {save: t, get_item: a}
        }
        return e
    }
}();
var steamInventory = function (l) {
    var e = null;
    var d = g.game;
    var u = [];
    var p = [];
    var _ = {};
    var c = {};
    var f = {};
    var m = "false";
    var h = 0;
    var t = BuffConfig.MAX_SELL_PRICE;
    var a = BuffConfig.MIN_PRICE;
    var v = false;
    var i = null;
    var y = function () {
        return Object.keys(_).sort(function (e, t) {
            return _[e] - _[t]
        })
    };
    var b = function () {
        var e = $("#j_list_card > ul > li.on").length;
        var t = $("#j_list_card > ul > li.salable").length;
        if (e < t || e === 0) {
            $(".w-Checkbox[name=select-all] span").removeClass("on");
            $(".w-Checkbox[name=select-all]").attr({value: ""})
        } else {
            $(".w-Checkbox[name=select-all] span").addClass("on");
            $(".w-Checkbox[name=select-all]").attr({value: "selectall"})
        }
    };
    var w = function (e) {
        var t = y();
        $("#j_overpage-handler").find(".selected-count").text(t.length);
        $("#j_overpage-handler").find(".total-count").text(h);
        var a = 0;
        var i = {};
        t.forEach(function (e) {
            var t = assetInfoMgr().get_item(e);
            a += parseFloat(t.steam_price);
            i[e] = t
        });
        if (!e || t.length == 0) {
            $("#j_overpagetip").html(template_render("overpagetip_template", {selected: t, total_price: a, infos: i}))
        } else {
            $("#j_overpagetip").find(".f_Strong").html(formatPriceNormalCustom(a, undefined, "USD"));
            $("#j_overpagetip").find("#selected-count").text(t.length)
        }
    };
    var k = function () {
        $("#j_list_card > ul > li.salable").each(function () {
            var e = $(this).data("assetid");
            if (_[e]) {
                $(this).addClass("on")
            } else {
                $(this).removeClass("on")
            }
        })
    };
    var x = sellingPricing().check_price_value;
    var C = function () {
        clearTimeout(i);
        jQuery.xhrPool.abort("/api/market/batch/fee");
        i = setTimeout(function () {
            var e = [];
            var a = [];
            var i = 0;
            var r = 0;
            var t = [];
            var n = [];
            for (var o = 0; o < p.length; o++) {
                if (!p[o]) continue;
                if (p[o].price > 0) {
                    if (x(p[o].price, false) == false) {
                        return
                    }
                    if (!p[o].has_market_min_price) {
                        e.push(p[o].price);
                        a.push(o);
                        n.push(p[o].goods_id);
                        i += p[o].price;
                        if (f[p[o].assetid] != m) {
                            t.push(f[p[o].assetid])
                        } else {
                            t.push("")
                        }
                    } else {
                        i += p[o].income
                    }
                }
            }
            if (e.length < 1) {
                $("#j_popup_selling_preview span.sale_fee").html(formatPriceYuan(r));
                $("#j_popup_selling_preview span.real_income").html(formatPriceYuan(i - r));
                $("#j_popup_selling_preview span.real_income_custom").html(formatPriceNormalCustom(i - r));
                return
            }
            $("#j_popup_selling_preview .confirm").addClass("i_Btn_disabled");
            sendRequest("/api/market/batch/fee", {
                data: {game: d, prices: e.join(","), cdkey_ids: t.join(","), goods_ids: n.join(",")},
                dataType: "json",
                method: "GET",
                showLoading: false,
                success: function (t) {
                    if (t.code == "OK") {
                        $("#j_popup_selling_preview .confirm").removeClass("i_Btn_disabled");
                        r += parseFloat(t.data.total_fee);
                        $("#j_popup_selling_preview span.sale_fee").html(formatPriceYuan(r));
                        $("#j_popup_selling_preview span.real_income").html(formatPriceYuan(i - parseFloat(r)));
                        $("#j_popup_selling_preview span.real_income_custom").html(formatPriceNormalCustom(i - parseFloat(r)));
                        $("#j_popup_selling_preview input[name=income]").each(function () {
                            var e = $(this).data("index") - 1;
                            if (a.indexOf(e) != -1) {
                                if (!$(this).is(":focus")) {
                                    p[e].income = p[e].price - parseFloat(t.data.fees[a.indexOf(e)]);
                                    $(this).val(p[e].income.toFixed(2));
                                    $(this).parents("tr").find(".sell-income-custom").text(formatPriceNormalCustom(p[e].income, true));
                                    $(this).removeClass("i_Text_error")
                                }
                            }
                        });
                        s()
                    } else {
                        Buff.toast(t.error, {type: "error"})
                    }
                },
                error: function (e) {
                    if (e.statusText != "abort") {
                        Buff.toast("获取手续费失败，请稍后再试")
                    }
                }
            })
        }, 500)
    };
    var s = function () {
        var e = false;
        for (var t in f) {
            if (f[t] && f[t] != m) {
                e = true;
                break
            }
        }
        if (e) {
            $("#discount_icon").show()
        } else {
            $("#discount_icon").hide()
        }
    };
    var n = function (e) {
        e.forEach(function (e) {
            $("#" + e).hide()
        })
    };
    var j = function (e, t, a) {
        var t = parseInt(t) || 1;
        var e = e || 0;
        var a = a || $(".w-Select[name=page_size]").attr("value") || 50;
        var r = {game: d, force: e, page_num: t, page_size: a};
        r["search"] = $(".w-Search input").val() || "";
        var i = $(".w-Order.selected").attr("name");
        var n = $(".w-Order.selected").attr("value");
        if (typeof i != "undefined") {
            if (n == "des") r["sort_by"] = i + ".desc"; else if (n == "asc") r["sort_by"] = i + ".asc"
        }
        $(".w-Select").each(function () {
            var e = $(this).attr("name");
            var t = $(this).attr("value");
            if (typeof t != "undefined" && t != "0") {
                r[e] = t
            }
        });
        $(".w-Tag").each(function () {
            var e = $(this).attr("name");
            var t = $(this).attr("value");
            if (typeof t != "undefined" && t != "0") {
                r[e] = t
            }
        });
        var o = $(".w-SelHero").attr("value");
        if (typeof o != "undefined" && o != "0") {
            r["hero"] = o
        }
        $(".w-Select-Multi").each(function () {
            var e = $(this).attr("name");
            if (e == "rarity") {
                var t = $(this).attr("value");
                if (typeof t != "undefined" && t != "0") {
                    r[e] = t
                }
                return
            }
            var a = $(this).attr("value");
            if (typeof a != "undefined") {
                var i = $('.w-Select-Multi h6[value="' + a + '"]').attr("value");
                if (a == i) {
                    r["category_group"] = a
                } else {
                    r["category"] = a
                }
            }
        });
        var s = "#";
        for (var _ in r) {
            if (["game", "force"].indexOf(_) < 0) s += _ + "=" + r[_] + "&"
        }
        window.location.hash = s.slice(0, -1);
        $("#refresh").text(i18n("refreshing"));
        $("#j_list_card").showLoading();
        var c = "/api/market/steam_inventory";
        if (l) c = "/api/market/partner_inventory";
        sendRequest(c, {
            data: r,
            method: "GET",
            dataType: "json",
            showLoading: false,
            timeout: BuffConfig.STEAM_TIMEOUT,
            ignoreCode: ["Steam Binding Required", "Backpack Is Private"],
            success: function (a) {
                var e = "";
                if (a.code == "OK") {
                    h = a.data.total_count;
                    if ($("#j_list_card > ul > li.salable.on.punishing").length || v) {
                        $("#shelve").addClass("i_Btn_disabled")
                    } else {
                        $("#shelve").removeClass("i_Btn_disabled")
                    }
                    $("#inventory_price").val(a.data.inventory_price);
                    $(".brief-info").html(format_html('<span><%= i18n("quantity") %><strong class="c_Yellow f_Normal"><%= data.data.total_count %></strong> <%= i18n("valuation") %><strong class="c_Yellow f_Normal"><%- formatPriceNormalCustom(data.data.total_amount_usd, undefined, "USD") %></strong></span>', {data: a}));
                    u = a.data.items;
                    if (u.length < 1) {
                        e = format_html('<div class="nodata">                                    <p><i class="icon icon_nodata"></i></p>                                    <p><%= i18n("no_related") %></p>                                    <div><a href="/market/<%= game %><%= hash %>" class="i_Btn i_Btn_hollow"><%= i18n("go_to_market") %></a></div>                                </div>', {
                            game: d,
                            hash: window.location.hash
                        })
                    } else {
                        PreviewScreenShotsDataGenerator(OriginConst.INVENTORY).process(a.data.items, a.data.preview_screenshots.bg_img || "", "my_inventory", 14);
                        e = template_render("item_card_pat", a.data)
                    }
                    assetInfoMgr().save(u);
                    renderPagination({
                        total_count: a.data.total_count,
                        page_size: a.data.page_size,
                        page_num: t,
                        show_size_select: false,
                        onPageClick: function (e, t) {
                            t.preventDefault();
                            j(0, e, a.data.page_size);
                            window.scrollTo(0, 0)
                        }
                    })
                } else if (a.code == "Backpack Is Private") {
                    e = format_html('<div class="nodata">                                <p><i class="icon icon_unbind"></i></p>                                <p><%= data.error %></p>                                <div><a href="https://steamcommunity.com/my/edit/settings" target="_blank" class="i_Btn i_Btn_hollow"><%= i18n("go_to_set") %></a></div>                            </div>', {data: a})
                } else if (a.code == "Steam Binding Required") {
                    e = format_html('<div class="nodata">                                <p><i class="icon icon_unbind"></i></p>                                <p><%= i18n("unbound_steam_notice") %><%= i18n("back_for_refresh") %></p>                                <div><a href="/user-center/profile" target="_blank" class="i_Btn i_Btn_hollow"><%= i18n("go_to_bind") %></a></div>                            </div>')
                } else {
                    Buff.toast(a.error)
                }
                $("#j_list_card").html(e);
                PreviewScreenShots().init("my_inventory", a.data.preview_screenshots["my_inventory"]);
                $("img.lazy").lazyload();
                k();
                b();
                w()
            },
            complete: function () {
                $("#refresh").text(i18n("refresh"));
                $("#j_list_card").removeLoading()
            }
        })
    };
    var r = function () {
        sendRequest("/account/api/user/info/v2", {
            method: "GET",
            dataType: "json",
            showLoading: false,
            timeout: 15e3,
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                } else if (e.data.user_info.trade_url_state != 0) {
                    $("#trade_state_tip").show();
                    $("#deposit").addClass("i_Btn_disabled");
                    $("#shelve").addClass("i_Btn_disabled");
                    v = true
                }
            }
        })
    };
    var o = function () {
        $(document).on("click", "#j_list_card > ul > li.salable", function () {
            $(this).toggleClass("on");
            $(this).trigger("change");
            b();
            w()
        });
        $(document).on("change", "#j_list_card > ul > li.salable", function () {
            var e = $(this).data("assetid");
            if ($(this).hasClass("on")) {
                if (Object.keys(_).length >= 200 && !_[e]) {
                    Buff.toast(i18n("up_to_200_items"));
                    $(this).toggleClass("on");
                    return
                }
                _[e] = Date.now()
            } else {
                delete _[e]
            }
        });
        $(document).on("click", "#j_list_card > ul > li.unsalable", function () {
            if ($(this).data("state-toast")) {
                Buff.toast($(this).data("state-toast"))
            }
        });
        $(document).on("click", "#refresh", function () {
            j(1)
        });
        $(document).on("change", ".w-Select", function () {
            j()
        });
        $(document).on("change", ".w-Select-Multi", function () {
            j()
        });
        $(document).on("change", ".w-Tag", function () {
            j()
        });
        $(document).on("change", ".w-SelHero", function () {
            j()
        });
        $(document).on("change", ".h1z1-selType", function () {
            var e = $(".w-SelType.selected").attr("value");
            if (e != "csgo_type_other") {
                j()
            }
        });
        $(document).on("change", ".w-Order", function () {
            $(".w-Order").removeClass("selected");
            $(this).addClass("selected");
            $(".w-Order:not(.selected)").attr({value: null, class: "w-Order"});
            j()
        });
        $(document).on("change", ".w-Search input", function () {
            j()
        });
        $(document).on("click", "#recheck_trade_state", function () {
            sendRequest("/api/market/steam/trade_url_state/refresh", {
                method: "POST",
                dataType: "json",
                timeout: 15e3,
                success: function (e) {
                    if (e.code == "OK") {
                        if (e.data.trade_url_state == 0) {
                            Buff.toast(i18n("your_steam_account_tradable"));
                            $("#trade_state_tip").hide();
                            $("#deposit").removeClass("i_Btn_disabled");
                            $("#shelve").removeClass("i_Btn_disabled");
                            v = false
                        } else if (e.data.trade_url_state == 1) {
                            Buff.toast(i18n("your_steam_account_halt"), {type: "error"})
                        } else if (e.data.trade_url_state == 2) {
                            Buff.toast(i18n("your_steam_acctoun_trade_limit"), {type: "error"})
                        }
                    } else {
                        Buff.toast(i18n("detect_fail_try_later"))
                    }
                }
            })
        });
        var e = window.location.hash;
        var t = getParams(e.substring(1));
        for (name in t) {
            if (!t[name]) continue;
            if (name == "sort_by") {
                var a = t[name].split(".")[0];
                $(".w-Order").attr({value: ""});
                $(".w-Order").removeClass("w-Order_des");
                if (t[name].indexOf("desc") > 0) {
                    $(".w-Order[name=" + a + "]").attr({value: "des"});
                    $(".w-Order[name=" + a + "]").addClass("w-Order_des")
                } else {
                    $(".w-Order[name=" + a + "]").attr({value: "asc"});
                    $(".w-Order[name=" + a + "]").addClass("w-Order_asc")
                }
                $(".w-Order[name=" + a + "]").addClass("selected")
            } else if (["page_num"].indexOf(name) < 0) {
                if (name == "category_group") {
                    Buff.setCompValue("search-category", t[name])
                } else {
                    Buff.setCompValue("search-" + name, t[name])
                }
            }
        }
        var i = t["page_num"] || 1;
        var r = t["page_size"] || 50;
        j(0, i, r);
        $(".w-Checkbox[name=select-all]").change(function () {
            var e = $(this).attr("value");
            if (e == "selectall") {
                $("#j_list_card > ul > li.salable").addClass("on");
                if ($("#j_list_card > ul > li.salable").length < 1) {
                    Buff.toast(i18n("no_available_items"))
                }
            } else {
                $("#j_list_card > ul > li.salable").removeClass("on")
            }
            $("#j_list_card > ul > li.salable").trigger("change");
            b();
            w()
        });
        $("#shelve").click(function () {
            T(y(), false)
        });
        var n = function () {
            $("#j_popup_selling_preview tr.assets-item input[name=price]").each(function () {
                var e = $(this).data("index") - 1;
                var t = parseFloat($(this).val());
                if (isNaN(t) || $(this).val().length == 0) {
                    p[e].price = ""
                } else {
                    p[e].price = t
                }
            });
            $("#j_popup_selling_preview tr.assets-item input[name=income]").each(function () {
                var e = $(this).data("index") - 1;
                var t = parseFloat($(this).val());
                if (isNaN(t) || $(this).val().length == 0) {
                    p[e].income = ""
                } else {
                    p[e].income = t
                }
            })
        };
        $(document).on("change", ".w-Checkbox[name=combine]", function () {
            var e = $(this).attr("value");
            if (e == "combine") {
                var t = $("#j_popup_selling_preview").data("group-key");
                for (var a in t) {
                    if (t[a].assetids.length > 1) {
                        $("#j_popup_selling_preview tr.group_key_" + a + ":not(:first)").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + ":first .name-cont p.num").remove();
                        $("#j_popup_selling_preview tr.group_key_" + a + ":first .name-cont").append('<p class="num c_Gray" style="font-size: 13px;"> ×' + t[a].assetids.length + "</p>");
                        $("#j_popup_selling_preview tr.group_key_" + a + " input").val("");
                        $("#j_popup_selling_preview tr.group_key_" + a + " .sell-price-custom").html("");
                        $("#j_popup_selling_preview tr.group_key_" + a + " .sell-income-custom").html("");
                        $("#j_popup_selling_preview tr.group_key_" + a + " .pic-cont .item-count").show();
                        $("#j_popup_selling_preview tr.group_key_" + a).next(".des_row").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + " td").css("border-bottom", "1px solid #E9E9E9");
                        $("#j_popup_selling_preview tr.group_key_" + a + " .edit_order_desc a").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + " .edit_order_desc .w-Select-coupon").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + " .paint-wear").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + " .csgo_sticker_inline").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + " .group_key_notice").show();
                        $("#j_popup_selling_preview tr.group_key_" + a + " div.notes").hide()
                    }
                }
                n();
                C()
            } else {
                $("#j_popup_selling_preview tr.assets-item").show();
                $("#j_popup_selling_preview tr.assets-item .edit_order_desc a").show();
                $("#j_popup_selling_preview tr.assets-item .edit_order_desc .w-Select-coupon").show();
                $("#j_popup_selling_preview tr.assets-item .paint-wear").show();
                $("#j_popup_selling_preview tr.assets-item .csgo_sticker_inline").show();
                $("#j_popup_selling_preview tr.assets-item.has_des").next().show();
                $("#j_popup_selling_preview tr.assets-item.has_des td").css("border-bottom", "0");
                $("#j_popup_selling_preview tr.assets-item .name-cont p.num").remove();
                $("#j_popup_selling_preview tr.assets-item .pic-cont .item-count").hide();
                $("#j_popup_selling_preview tr.assets-item .group_key_notice").hide();
                $("#j_popup_selling_preview tr.assets-item div.notes").show()
            }
        });
        $(document).on("input", "#j_popup_selling_preview input[name=price]", function () {
            var e = $(this).data("index") - 1;
            var t = $(this).val();
            var a = $(this).parents("tr").find("input[name=income]").val();
            var i = parseFloat(t);
            var r = parseFloat(a);
            var n = parseFloat($(this).data("market-min-price"));
            if (n > 0 && i < n) {
                i = n
            }
            if (x($(this).val())) {
                $(this).removeClass("i_Text_error")
            } else {
                $(this).addClass("i_Text_error")
            }
            p[e].price = i;
            p[e].income = r;
            p[e].has_market_min_price = n > 0;
            var o = $(".w-Checkbox[name=combine]").attr("value");
            if (o == "combine") {
                var s = $("#j_popup_selling_preview").data("group-key");
                var _ = $(this).data("group-key");
                var c = s[_].assetids;
                for (var l = 0; l < p.length; l++) {
                    if (c.indexOf(p[l].assetid) > -1) {
                        p[l].price = p[e].price;
                        p[l].income = p[e].income;
                        p[l].has_market_min_price = p[e].has_market_min_price
                    }
                }
                $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=price]").val(t);
                $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=income]").val(a);
                $("#j_popup_selling_preview tr.group_key_" + _ + " .sell-price-custom").html(i ? formatPriceNormalCustom(i, true) : "");
                $("#j_popup_selling_preview tr.group_key_" + _ + " .sell-price-income").html(r ? formatPriceNormalCustom(r, true) : "");
                if ($(this).hasClass("i_Text_error")) {
                    $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=price]").addClass("i_Text_error");
                    $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=income]").addClass("i_Text_error")
                } else {
                    $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=price]").removeClass("i_Text_error");
                    $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=income]").removeClass("i_Text_error");
                    $("#j_popup_selling_preview tr.group_key_" + _ + " .cannot-quick-pricing").remove()
                }
            }
            if (i) {
                $(this).parents("tr").find(".sell-price-custom").html(formatPriceNormalCustom(i, true))
            } else {
                $(this).parents("tr").find(".sell-price-custom").html("")
            }
            C()
        });
        $(document).on("change", "#j_popup_selling_preview input[name=price]", function () {
            if (x($(this).val(), true)) {
                C()
            }
        });
        var o = sellingPricing();
        $(document).on("input", "#j_popup_selling_preview input[name=income]", function () {
            var e = $(this).parents("tr");
            var t = $(e).attr("id").replace("asset_", "");
            var a = f[t] != "false" ? f[t] : "";
            o.get_price_from_income(e, a);
            var i = $(this).val();
            if (i) {
                $(this).parents("tr").find(".sell-income-custom").html(formatPriceNormalCustom(i, true))
            } else {
                $(this).parents("tr").find(".sell-income-custom").html("")
            }
        });
        $(document).on("change", "#j_popup_selling_preview input[name=income]", function () {
            if (x($(this).val(), true)) {
                var e = $(this).parents("tr");
                var t = $(e).attr("id").replace("asset_", "");
                var a = f[t] != "false" ? f[t] : "";
                o.get_price_from_income(e, a)
            }
        });
        $(document).on("click", "#j_popup_selling_preview #quick-pricing", function () {
            o.quick_pricing($("#j_popup_selling_preview"));
            C()
        });
        $(document).on("click", "#j_popup_selling_preview .confirm:not(.i_Btn_disabled)", function () {
            for (var e = 0; e < p.length; e++) {
                if (x(p[e].price, true) == false) {
                    return
                }
            }
            var r = function () {
                var a = [];
                p.forEach(function (e) {
                    var t = f[e.assetid] || "";
                    if (t != m) {
                        e["cdkey_id"] = t
                    }
                    a.push(e)
                });
                sendRequest("/api/market/sell_order/create/" + $("#shelve").data("mode"), {
                    data: {game: d, assets: p},
                    method: "POST",
                    timeout: BuffConfig.STEAM_TIMEOUT + 1e3 * p.length,
                    success: function (e) {
                        if (e.code == "OK") {
                            var t = "";
                            var a = 0;
                            var i = [];
                            for (var r = 0; r < p.length; r++) {
                                var n = p[r].assetid;
                                var o = e.data[n];
                                if (o == "OK") {
                                    a += 1;
                                    delete _[n]
                                } else {
                                    i.push({asset: p[r], reason: o, info: assetInfoMgr().get_item(n)})
                                }
                            }
                            if (i.length > 0) {
                                Popup.hide();
                                var s = template_render("result_pat", {failures: i, success: a});
                                $("#popup-container").html(s);
                                Popup.show("j_popup_charge-result")
                            } else {
                                if ($(".c_Yellow.offline_tips").is(":visible")) {
                                    Popup.hide();
                                    Buff.alert({
                                        title: i18n("shelve_success"),
                                        message: i18n("shelve_notice"),
                                        rememberDismiss: "deliver_tips",
                                        hideCancel: true,
                                        success: function (e) {
                                            if (e) {
                                                Buff.toast(i18n("shelve_success"), {type: "success"});
                                                Popup.hide()
                                            }
                                        }
                                    })
                                } else {
                                    Buff.toast(i18n("shelve_success"), {type: "success"});
                                    Popup.hide()
                                }
                            }
                            j(0, $(".pager li.active .current").html())
                        } else if (e.code == "Invalid Argument" && e.error.indexOf("price") > -1) {
                            Buff.toast(i18n("unset_price_item"), {type: "error"})
                        } else {
                            Buff.toast(e.error || e.code, {type: "warning"})
                        }
                    }
                })
            };
            o.find_unusual_price($("#j_popup_selling_preview"), function () {
                var e = false;
                for (var t = 0; t < p.length; t++) {
                    var a = assetInfoMgr().get_item(p[t].assetid).asset_info.info.stickers;
                    if (a && a.length > 0) {
                        for (var i = 0; i < a.length; i++) {
                            if (a[i].category != "patch") {
                                e = true;
                                break
                            }
                        }
                    }
                    if (e) break
                }
                if (e) {
                    Buff.alert({
                        title: i18n("prompt"),
                        message: i18n("scratch_sticker_notice"),
                        cancelText: i18n("reconfirm"),
                        confirmText: i18n("continue_selling"),
                        rememberDismiss: "scratch_sticker_notice",
                        success: r
                    })
                } else {
                    r()
                }
            })
        });
        $("#deposit").click(function () {
            if ($(this).hasClass("i_Btn_disabled")) return;
            var e = function () {
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("fraud_notice"),
                    cancelText: i18n("go_to_check"),
                    confirmText: i18n("i_know"),
                    rememberDismiss: "fraud_notice",
                    hide_popup_after_cancel: false,
                    success: s,
                    cancel: function () {
                        openPageOnNewTab("https://steamcommunity.com/dev/apikey")
                    }
                })
            };
            if (d == "csgo") {
                Buff.alert({
                    title: i18n("deposit_backpack"),
                    safeMessage: i18n("csgo_deposit_notice"),
                    rememberDismiss: "csgo_deposit",
                    success: e
                })
            } else {
                e()
            }
        });
        var s = function () {
            p = [];
            var a = 0;
            var i = undefined;
            y().forEach(function (e) {
                var t = assetInfoMgr().get_item(e);
                p.push({
                    game: t.game,
                    market_hash_name: t.market_hash_name,
                    contextid: t.contextid,
                    assetid: t.assetid,
                    classid: t.classid,
                    instanceid: t.instanceid
                });
                if (t.amount > 0) {
                    i = t;
                    a += t.amount
                }
            });
            if (p.length < 1) {
                Buff.toast(i18n("please_select_deposit_item"));
                return
            }
            var e = function () {
                sendRequest("/api/market/backpack/deposit", {
                    data: {game: d, assets: p},
                    dataType: "json",
                    method: "POST",
                    success: function (e) {
                        if (e.code == "OK") {
                            bot_trades = {};
                            bot_trades[e.data.id] = e.data;
                            update_bot();
                            _ = {};
                            j()
                        } else if (e.code == "Steam Trade URL Failure") {
                            Buff.alert({
                                title: i18n("prompt"),
                                message: i18n("your_steam_trade_url_invalid"),
                                success: function () {
                                    window.open("/user-center/profile", "_blank")
                                },
                                cancel: function () {
                                    Buff.toast(i18n("deposit_failed"))
                                }
                            })
                        } else {
                            Buff.alert({
                                type: "error",
                                title: i18n("deposit_failed"),
                                message: e.error,
                                hideCancel: true
                            })
                        }
                    }
                })
            };
            if (a > p.length) {
                Buff.alert({
                    title: i18n("deposit_instructions_title"),
                    message: i["name"] + i18n("deposit_instructions_message"),
                    confirmText: i18n("deposit_instructions_confirm"),
                    success: e
                })
            } else {
                e()
            }
        };
        $(document).on("click", ".edit_order_desc a", function () {
            var e = $(this).data("assetid");
            Popup.show("j_pupup_add_desc");
            var t = $("#asset_" + e).next().find(".desc_content").text();
            $("#j_pupup_add_desc .addDesWrapper textarea").focus().val(t).trigger("input");
            $("#j_pupup_add_desc .i_Btn_main").data("assetid", e)
        });
        $(document).on("click", "#j_pupup_add_desc .i_Btn_main", function () {
            var e = $(this).data("assetid");
            var t = $("#j_pupup_add_desc .addDesWrapper textarea").val();
            if (t.length > 40) {
                Buff.toast(i18n("input_content_too_long_to_40_words"))
            } else {
                $("#asset_" + e).next().find(".desc_content").text(t);
                for (var a = 0; a < p.length; a++) {
                    if (p[a].assetid == e) {
                        p[a].desc = t
                    }
                }
                if (t.length > 0) {
                    $("#asset_" + e).next().show();
                    $("#asset_" + e).addClass("has_des");
                    $("#asset_" + e + " td").css("border-bottom", "0");
                    $("#asset_" + e + " .edit_order_desc a").text(i18n("edit_description"))
                } else {
                    $("#asset_" + e + " td").css("border-bottom", "1px solid #E9E9E9");
                    $("#asset_" + e).next().hide();
                    $("#asset_" + e).removeClass("has_des");
                    $("#asset_" + e + " .edit_order_desc a").text(i18n("add_description"))
                }
                Popup.hide()
            }
        });
        $(document).on("click", ".overpage-del", function () {
            delete _[$(this).data("id")];
            $(this).parent().remove();
            w(true);
            k();
            b()
        });
        gallery.init()
    };
    update_bot({
        polling: true, onStateChange: function () {
            setTimeout(function () {
                j()
            }, 5e3)
        }, onBotStatusClose: function () {
            j()
        }
    });
    window.showPunishRemain = function (e, t) {
        var a = Date.now() / 1e3;
        if (t <= a) {
            $(e).attr("data-content", "");
            return
        }
        var i = Math.floor((t - a) / 3600);
        var r = Math.ceil((t - a) % 3600 / 60);
        var n = i18n("undelivered_notice", {hours: i, minutes: r});
        $(e).attr("data-content", n)
    };
    var P = function (e, t) {
        if (t) {
            for (var a in e) {
                var i = e[a];
                $(`#j_list_card>ul>li[id=${i}]`).trigger("click")
            }
        }
        B(e)
    };
    var T = function (e, t) {
        if ($(this).hasClass("i_Btn_disabled")) {
            return
        }
        var a = $("#shelve_mode").val();
        if (localStorage.getItem("remember_dismiss_" + a + "_sell_2") || l) {
            P(e, t);
            return
        }
        $("#j_popup_sell" + a).data("assetids", e);
        $("#j_popup_sell" + a).data("should_delegate", t);
        Popup.show("j_popup_sell" + a);
        $(document).off("click", ".confirm-shelve").on("click", ".confirm-shelve", function (e) {
            e.preventDefault();
            var t = $("#shelve").data("mode");
            if ($("#j_popup_sell" + t + " .w-Checkbox").attr("value") === "dontshow") {
                localStorage.setItem("remember_dismiss_" + t + "_sell_2", "1")
            }
            Popup.hide();
            P($("#j_popup_sell" + t).data("assetids"), $("#j_popup_sell" + t).data("should_delegate"))
        })
    };
    var B = function (e) {
        p = [];
        var a = 0;
        var i = undefined;
        e.forEach(function (e) {
            var t = assetInfoMgr().get_item(e);
            p.push({
                game: t.game,
                market_hash_name: t.market_hash_name,
                contextid: t.contextid,
                assetid: t.assetid,
                classid: t.classid,
                instanceid: t.instanceid,
                goods_id: t.goods_id,
                price: "",
                income: "",
                has_market_min_price: false
            });
            if (t.amount > 0) {
                i = t;
                a += t.amount
            }
        });
        if (p.length < 1) {
            Buff.toast(i18n("please_select_item"));
            return
        }
        var t = function (e, t, r) {
            sendRequest("/api/activity/coupon/my/", {
                method: "GET",
                data: {game: e, state: "unuse", coupon_type: "fee_discount", only_coupon: 1},
                dataType: "json",
                showLoading: false,
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    var t = e.data.items;
                    if (t.length < 1) {
                        r([], true);
                        return
                    }
                    var a = [];
                    var i = false;
                    t.forEach(function (e) {
                        if (e.state != "using") {
                            a.push({
                                label: e.name,
                                value: e.id,
                                desc: e.expire_time.messages + "&nbsp" + formatTimestamp(e.expire_time.time, "YYYY-MM-DD")
                            });
                            i = true
                        }
                    });
                    if (a.length > 0) {
                        a.push({value: m, label: i18n("not_use_coupon"), desc: ""})
                    }
                    r(a, !i && a.length < 1)
                }
            })
        };
        var r = function () {
            sendRequest("/market/sell_order/preview/" + $("#shelve").data("mode"), {
                data: {game: d, assets: p},
                dataType: "json",
                method: "POST",
                timeout: BuffConfig.STEAM_TIMEOUT + 1e3 * p.length,
                success: function (e) {
                    if (e.code == "OK") {
                        $("#popup-container").html(e.data);
                        initCustomCurrency($("#j_popup_selling_preview"));
                        Popup.show("j_popup_selling_preview");
                        Buff.pricePatten("input[name=price]");
                        Buff.pricePatten("input[name=income]");
                        t(d, "unuse", function (_, e) {
                            c = {};
                            f = {};
                            var t = [];
                            var a = "coupon_sel_";
                            p.forEach(function (e) {
                                t.push(a + e.assetid)
                            });
                            if (e) {
                                n(t);
                                return
                            }
                            p.forEach(function (e) {
                                f[e.assetid] = ""
                            });
                            _.forEach(function (e) {
                                c[e.value] = true
                            });
                            var i = function (e, t) {
                                var a = $("#" + t);
                                var i = a.attr("data-value");
                                c[i] = true;
                                c[e] = false;
                                f[a.attr("assetid")] = e;
                                return new Promise(function (e, t) {
                                    C();
                                    e()
                                })
                            };
                            var r = function (e) {
                                var t = $("#" + e).attr("assetid");
                                var a = f[t];
                                var i = false;
                                var r = -1;
                                var n = -1;
                                var o = [];
                                _.forEach(function (e) {
                                    if (c[e.value] || a == e.value) {
                                        if (e.value == m) {
                                            i = true
                                        }
                                        o.push({value: e.value, label: e.label, desc: e.desc});
                                        r += 1;
                                        if (a == e.value) {
                                            n = r
                                        }
                                    }
                                });
                                if (!i) {
                                    o.push({value: m, label: i18n("not_use_coupon"), desc: ""})
                                }
                                if (o.length <= 1) {
                                    o = []
                                }
                                var s = {placeholder: i18n("please_choose_coupon"), options: o};
                                if (n != -1) {
                                    s.defaultIndex = n
                                }
                                return s
                            };
                            t.forEach(function (e) {
                                var t = r(e);
                                Buff.initCouponSelect(e, t, i)
                            });
                            t.forEach(function (e) {
                                $("body").on("change", "#" + e, function () {
                                    var a = $(this).attr("id");
                                    t.forEach(function (e) {
                                        if (e == a) {
                                            return
                                        }
                                        var t = r(e);
                                        Buff.initCouponSelect(e, t, i)
                                    })
                                })
                            })
                        })
                    } else {
                        Buff.alert({type: "error", title: i18n("shelve_failed"), message: e.error, hideCancel: true})
                    }
                }
            })
        };
        if (a > p.length) {
            Buff.alert({
                title: i18n("listing_instructions_title"),
                message: i["name"] + i18n("listing_instructions_message"),
                confirmText: i18n("listing_instructions_confirm"),
                success: r
            })
        } else {
            r()
        }
    };
    return {init: o, CreateSellOrderPreview: T}
};
var selling = function (t) {
    var t = t;
    var d = g.game;
    var u = [];
    var e = BuffConfig.MAX_SELL_PRICE;
    var a = BuffConfig.MIN_PRICE;
    var i = false;
    var r = null;
    var p = {};
    var f = {};
    var m = {};
    var h = "false";
    var s = function () {
        var e = $("#j_list_card li.on").length;
        $(".w-Checkbox[name=select-all] span").html(format_html('<i class="icon icon_checkbox"></i><%= i18n("all") %> (<%= count %>/<%= total_count %>)', {
            count: e,
            total_count: t
        }));
        if (e < 1) {
            $(".w-Checkbox[name=select-all] span").removeClass("on");
            $(".w-Checkbox[name=select-all]").attr({value: ""})
        }
    };
    var v = sellingPricing().check_price_value;
    var y = function () {
        clearTimeout(r);
        jQuery.xhrPool.abort("/api/market/batch/fee");
        r = setTimeout(function () {
            var e = [];
            var a = [];
            var i = 0;
            var r = 0;
            var t = [];
            var n = [];
            for (var o = 0; o < u.length; o++) {
                if (u[o].price > 0) {
                    if (v(u[o].price, false, u[o].origin_price) == false) {
                        return
                    }
                    if (!u[o].has_market_min_price) {
                        e.push(u[o].price);
                        a.push(o);
                        n.push(u[o].goods_id);
                        i += u[o].price;
                        if (f[u[o].sell_order_id] != h) {
                            t.push(f[u[o].sell_order_id])
                        } else {
                            t.push("")
                        }
                    } else {
                        i += u[o].income
                    }
                }
            }
            if (e.length < 1) {
                $("#j_popup_selling_change_preview span.sale_fee").html(formatPriceYuan(r));
                $("#j_popup_selling_change_preview span.real_income").html(formatPriceYuan(i - r));
                $("#j_popup_selling_change_preview span.real_income_custom").html(formatPriceNormalCustom(i - r));
                return
            }
            $("#j_popup_selling_change_preview a.confirm").addClass("i_Btn_disabled");
            sendRequest("/api/market/batch/fee", {
                data: {game: d, prices: e.join(","), cdkey_ids: t.join(","), goods_ids: n.join(",")},
                dataType: "json",
                method: "GET",
                showLoading: false,
                success: function (t) {
                    if (t.code == "OK") {
                        $("#j_popup_selling_change_preview a.confirm").removeClass("i_Btn_disabled");
                        r += parseFloat(t.data.total_fee);
                        $("#j_popup_selling_change_preview span.sale_fee").html(formatPriceYuan(r));
                        $("#j_popup_selling_change_preview span.real_income").html(formatPriceYuan(i - parseFloat(r)));
                        $("#j_popup_selling_change_preview span.real_income_custom").html(formatPriceNormalCustom(i - parseFloat(r)));
                        $("#j_popup_selling_change_preview input[name=income]").each(function () {
                            var e = $(this).data("index") - 1;
                            if (a.indexOf(e) != -1) {
                                if (!$(this).is(":focus")) {
                                    u[e].income = u[e].price - parseFloat(t.data.fees[a.indexOf(e)]);
                                    $(this).val(u[e].income.toFixed(2));
                                    $(this).parents("tr").find(".sell-income-custom").text(formatPriceNormalCustom(u[e].income, true));
                                    $(this).removeClass("i_Text_error")
                                }
                            }
                        });
                        b()
                    } else {
                        Buff.toast(t.error, {type: "error"})
                    }
                },
                error: function (e) {
                    if (e.statusText != "abort") {
                        Buff.toast(i18n("acquisition_fee_failed_please_try"))
                    }
                }
            })
        }, 500)
    };
    var b = function () {
        var e = false;
        for (var t in f) {
            if (f[t] && f[t] != h) {
                e = true;
                break
            }
        }
        if (e) {
            $("#discount_icon").show()
        } else {
            $("#discount_icon").hide()
        }
    };
    var w = function (e) {
        e.forEach(function (e) {
            $("#" + e).hide()
        })
    };
    var n = function () {
        gameNavigator.setKeepParams(["mode"]);
        s();
        $(document).on("click", "#j_list_card > ul > li", function () {
            $(this).toggleClass("on");
            s()
        });
        $(".w-Checkbox[name=select-all]").change(function () {
            var e = $(this).attr("value");
            if (e == "selectall") {
                $("#j_list_card > ul > li").addClass("on")
            } else {
                $("#j_list_card > ul > li").removeClass("on")
            }
            s()
        });
        $(document).on("click", "#j_list_card .icon_recommend,#j_list_card .icon_fav2", function (e) {
            var t = this;
            sendRequest("/api/market/sell_order/featured", {
                data: {
                    sell_order: $(this).data("orderid"),
                    featured: $(this).hasClass("on") ? 0 : 1
                }, dataType: "json", method: "PUT", showLoading: false, success: function (e) {
                    if (e.code == "Featured Limit Excceed") {
                        Buff.alert({title: i18n("the_recommended_bit_is_already"), message: e.error, hideCancel: true});
                        return
                    }
                    if (e.code == "OK") {
                        $(t).toggleClass("on");
                        if ($(t).hasClass("on")) {
                            $(t).attr("data-title", i18n("cancel_recommend"));
                            $("#j_fixedtip h3").text(i18n("cancel_recommend"))
                        } else {
                            $(t).attr("data-title", i18n("the_set_of_recommended_items"));
                            $("#j_fixedtip h3").text(i18n("the_set_of_recommended_items"))
                        }
                        return
                    }
                    Buff.toast(e.error, {type: "error"})
                }
            });
            e.stopPropagation()
        });
        o();
        _()
    };
    var o = function () {
        var t = function (e) {
            u = e;
            if (e.length < 1) {
                Buff.toast(i18n("please_select_the_you_want"));
                return
            }
            Buff.alert({
                title: i18n("the_shelves"),
                message: $("#mode").val() === "manual" || $("#mode").val() === "partner" || [2, 5, 7].includes(u[0].mode) ? i18n("determine_the_selected_accessories_to") : i18n("consignment_goods_shelf_will_be"),
                success: function () {
                    var r = [];
                    for (var e = 0; e < u.length; e++) {
                        r.push(u[e]["sell_order_id"])
                    }
                    var t = function () {
                        sendRequest("/api/market/sell_order/cancel", {
                            data: {game: d, sell_orders: r},
                            method: "POST",
                            processData: false,
                            timeout: Math.max(5e3, 1e3 * r.length),
                            success: function (e) {
                                if (e.code == "OK") {
                                    var t = 0;
                                    var a = 0;
                                    for (orderid in e.data) {
                                        if (e.data[orderid] == "OK") {
                                            t += 1
                                        } else {
                                            a += 1
                                        }
                                    }
                                    if (t == r.length) {
                                        Buff.toast(i18n("shelves_successful"), {type: "success"});
                                        window.location.reload()
                                    } else {
                                        var i = t + i18n("_piece_of_goods_off");
                                        i += "\n" + a + i18n("_piece_of_goods_has");
                                        Buff.alert({
                                            title: i18n("off_the_shelves_results"),
                                            message: i,
                                            hideCancel: true,
                                            success: function () {
                                                window.location.reload()
                                            }
                                        })
                                    }
                                    $("#j_list_card > ul > li").removeClass("on")
                                }
                            }
                        })
                    };
                    sendRequest("/api/market/sell_order/cancel/check_rate_limit", {
                        data: {game: d, sell_orders: r},
                        method: "POST",
                        processData: false,
                        timeout: Math.max(5e3, 1e3 * r.length),
                        success: function (e) {
                            if (e.code == "OK") {
                                t()
                            } else if (e.code == "Request Rate Will Be Limited") {
                                Buff.alert({title: i18n("the_shelves"), message: e.error, success: t})
                            } else {
                                Buff.toast(e.error, {type: "error"})
                            }
                        }
                    })
                }
            })
        };
        $(document).off("click", "#cancel-order").on("click", "#cancel-order", function () {
            var e = [];
            $("#j_list_card > ul > li.on").each(function () {
                e.push({sell_order_id: $(this).data("orderid"), price: parseFloat($(this).data("price"))})
            });
            t(e)
        });
        $(document).off("click", "#my-selling-cancel-order").on("click", "#my-selling-cancel-order", function () {
            var e = $(this);
            t([{sell_order_id: e.data("orderid"), price: parseFloat(e.data("price")), mode: e.data("order-mode")}])
        })
    };
    var _ = function () {
        var t = function () {
            if (u.length < 1) {
                Buff.toast(i18n("select_to_change_the_price"));
                return
            }
            var t = function (e, t, r) {
                sendRequest("/api/activity/coupon/my/", {
                    method: "GET",
                    data: {game: e, state: "unuse", coupon_type: "fee_discount", only_coupon: 1},
                    dataType: "json",
                    showLoading: false,
                    success: function (e) {
                        if (e.code != "OK") {
                            Buff.toast(e.error, {type: "error"});
                            return
                        }
                        var t = e.data.items;
                        if (t.length < 1) {
                            r([], true);
                            return
                        }
                        var a = [];
                        var i = {};
                        t.forEach(function (e) {
                            if (e.state != "using") {
                                a.push({
                                    label: e.name,
                                    value: e.id,
                                    desc: e.expire_time.messages + "&nbsp" + formatTimestamp(e.expire_time.time, "YYYY-MM-DD")
                                })
                            } else {
                                i[e.id] = e
                            }
                        });
                        a.push({value: h, label: i18n("not_use_coupon"), desc: ""});
                        r(a, i, Object.keys(i).length < 0 && a.length <= 1)
                    }
                })
            };
            sendRequest("/market/sell_order/change_preview", {
                method: "POST", data: {game: d, sell_orders: u}, dataType: "json", success: function (e) {
                    if (e.code == "OK") {
                        $("#popup-container").html(e.data);
                        initCustomCurrency($("#j_popup_selling_change_preview"));
                        Popup.show("j_popup_selling_change_preview");
                        Buff.pricePatten("input[name=price]");
                        Buff.pricePatten("input[name=income]");
                        i();
                        m = {};
                        f = {};
                        var o = {};
                        var l = {};
                        var s = [];
                        var _ = "coupon_sel_";
                        u.forEach(function (e) {
                            var t = e.sell_order_id;
                            var a = $("#sell_order_" + t);
                            var i = a.data("coupon-infos");
                            if (i) {
                                var r = i[0];
                                var n = r.cdkey_id;
                                o[t] = i;
                                f[t] = n;
                                m[n] = {state: false, value: n, original_order_id: t};
                                s.push(_ + t);
                                l[n] = {value: n, label: r.cdkey_text, desc: "loading....."}
                            }
                        });
                        var c = function (e) {
                            var t = [];
                            var a = $("#" + e).attr("order_id");
                            var i = f[a];
                            var r = false;
                            var n = -1;
                            var o = -1;
                            for (var s in l) {
                                var _ = l[s];
                                if (m[_.value]["state"] || i == _.value) {
                                    if (_.value == h) {
                                        r = true
                                    }
                                    t.push({value: _.value, label: _.label, desc: _.desc});
                                    n += 1;
                                    if (i == _.value) {
                                        o = n
                                    }
                                }
                            }
                            if (!r && t.length > 0) {
                                t.push({value: h, label: i18n("not_use_coupon"), desc: ""})
                            }
                            if (t.length <= 1) {
                                t = []
                            }
                            var c = {placeholder: i18n("please_choose_coupon"), options: t};
                            if (o != -1) {
                                c.defaultIndex = o
                            }
                            return c
                        };
                        s.forEach(function (e) {
                            b()
                        });
                        t(d, "unuse", function (e, i, t) {
                            l = {};
                            m = {};
                            f = {};
                            var r = [];
                            var a = "coupon_sel_";
                            u.forEach(function (e) {
                                r.push(a + e.sell_order_id)
                            });
                            if (t) {
                                w(r);
                                return
                            }
                            u.forEach(function (e) {
                                var a = e.sell_order_id;
                                if (o[a]) {
                                    o[a].forEach(function (e) {
                                        if (e.coupon_type == "fee_discount") {
                                            var t = i[e.cdkey_id];
                                            l[e.cdkey_id] = {
                                                value: e.cdkey_id,
                                                label: t.name,
                                                desc: t.expire_time.messages + "&nbsp" + formatTimestamp(t.expire_time.time, "YYYY-MM-DD")
                                            };
                                            m[e.cdkey_id] = {
                                                state: false,
                                                value: e.cdkey_id,
                                                is_expired: t.expire_time.is_expired,
                                                original_order_id: a
                                            };
                                            f[a] = e.cdkey_id
                                        }
                                    })
                                }
                            });
                            if (e.length <= 1 && Object.keys(o).length == 0) {
                                w(r);
                                return
                            }
                            e.forEach(function (e) {
                                l[e.value] = e;
                                m[e.value] = {state: true, value: e.value, is_expired: false}
                            });
                            var n = function (a, e) {
                                var t = $("#" + e);
                                var i = t.attr("order_id");
                                var r = t.attr("data-value");
                                var n = m[r];
                                if (r && n.is_expired && n.original_order_id == i) {
                                    return new Promise(function (e, t) {
                                        Buff.alert({
                                            message: i18n("expired_coupon_switch"), cancel: function () {
                                                t()
                                            }, success: function () {
                                                f[i] = a;
                                                m[a]["state"] = false;
                                                console.log(m, l);
                                                delete m[r];
                                                delete l[r];
                                                console.log(m, l);
                                                y();
                                                e()
                                            }
                                        })
                                    })
                                } else {
                                    f[i] = a;
                                    if (r) {
                                        m[r]["state"] = true
                                    }
                                    m[a]["state"] = false;
                                    return new Promise(function (e, t) {
                                        y();
                                        e()
                                    })
                                }
                            };
                            r.forEach(function (e) {
                                var t = c(e);
                                Buff.initCouponSelect(e, t, n);
                                b()
                            });
                            r.forEach(function (e) {
                                $("body").on("change", "#" + e, function () {
                                    var a = $(this).attr("id");
                                    r.forEach(function (e) {
                                        if (e == a) {
                                            return
                                        }
                                        var t = c(e);
                                        Buff.initCouponSelect(e, t, n)
                                    })
                                })
                            })
                        })
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        };
        $("#change-price").click(function () {
            u = [];
            $("#j_list_card > ul > li.on").each(function () {
                u.push({
                    sell_order_id: $(this).data("orderid"),
                    price: "",
                    income: "",
                    has_market_min_price: false,
                    goods_id: $(this).data("goodsid")
                });
                p[$(this).data("orderid")] = {
                    name: $(this).data("goods-name"),
                    icon_url: $(this).data("icon-url"),
                    tags: $(this).data("goods-tags"),
                    appid: $(this).data("appid"),
                    assetid: $(this).data("assetid").toString()
                }
            });
            t()
        });
        $(document).on("click", ".change-price-btn", function (e) {
            e.stopPropagation();
            u = [{
                sell_order_id: $(this).data("orderid"),
                price: "",
                income: "",
                has_market_min_price: false,
                goods_id: $(this).data("goodsid")
            }];
            p[$(this).data("orderid")] = {
                name: $(this).data("goods-name"),
                icon_url: $(this).data("icon-url"),
                tags: $(this).data("goods-tags"),
                appid: $(this).data("appid")
            };
            t()
        });
        var i = function () {
            $("#j_popup_selling_change_preview tr.assets-item input[name=price]").each(function () {
                var e = $(this).data("index") - 1;
                var t = parseFloat($(this).val());
                if (isNaN(t) || $(this).val().length == 0) {
                    u[e].price = ""
                } else {
                    u[e].price = t
                }
                u[e].has_market_min_price = parseFloat($(this).data("market-min-price")) > 0
            });
            $("#j_popup_selling_change_preview tr.assets-item input[name=income]").each(function () {
                var e = $(this).data("index") - 1;
                var t = parseFloat($(this).val());
                if (isNaN(t) || $(this).val().length == 0) {
                    u[e].income = ""
                } else {
                    u[e].income = t
                }
            })
        };
        $(document).on("change", ".w-Checkbox[name=combine]", function () {
            var e = $(this).attr("value");
            if (e == "combine") {
                var t = $("#j_popup_selling_change_preview").data("group-key");
                for (var a in t) {
                    if (t[a].assetids.length > 1) {
                        $("#j_popup_selling_change_preview tr.group_key_" + a + ":not(:first)").hide();
                        $("#j_popup_selling_change_preview tr.group_key_" + a + ":first .name-cont p.num").remove();
                        $("#j_popup_selling_change_preview tr.group_key_" + a + ":first .name-cont").append('<p class="num c_Gray" style="font-size: 13px;"> ×' + t[a].assetids.length + "</p>");
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " input").val("");
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " .sell-price-custom").html("");
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " .sell-income-custom").html("");
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " .pic-cont .item-count").show();
                        $("#j_popup_selling_change_preview tr.group_key_" + a).next(".des_row").hide();
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " td").css("border-bottom", "1px solid #E9E9E9");
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " .edit_order_desc a").hide();
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " .edit_order_desc .w-Select-coupon").hide();
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " .paint-wear").hide();
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " .csgo_sticker_inline").hide();
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " .group_key_notice").show();
                        $("#j_popup_selling_change_preview tr.group_key_" + a + " div.notes").hide()
                    }
                }
                i();
                y()
            } else {
                $("#j_popup_selling_change_preview tr.assets-item").show();
                $("#j_popup_selling_change_preview tr.assets-item .edit_order_desc a").show();
                $("#j_popup_selling_change_preview tr.assets-item .edit_order_desc .w-Select-coupon").show();
                $("#j_popup_selling_change_preview tr.assets-item .paint-wear").show();
                $("#j_popup_selling_change_preview tr.assets-item .csgo_sticker_inline").show();
                $("#j_popup_selling_change_preview tr.assets-item.has_des").next().show();
                $("#j_popup_selling_change_preview tr.assets-item.has_des td").css("border-bottom", "0");
                $("#j_popup_selling_change_preview tr.assets-item .name-cont p.num").remove();
                $("#j_popup_selling_change_preview tr.assets-item .pic-cont .item-count").hide();
                $("#j_popup_selling_change_preview tr.assets-item .group_key_notice").hide();
                $("#j_popup_selling_change_preview tr.assets-item div.notes").show()
            }
        });
        $(document).on("input", "#j_popup_selling_change_preview input[name=price]", function () {
            var e = $(this).data("index") - 1;
            var t = $(this).val();
            var a = $(this).parents("tr").find("input[name=income]").val();
            var i = parseFloat(t);
            var r = parseFloat(a);
            var n = parseFloat($(this).data("market-min-price"));
            if (n > 0 && i < n) {
                i = n
            }
            if (v($(this).val(), false, $(this).attr("value"))) {
                $(this).removeClass("i_Text_error")
            } else {
                $(this).addClass("i_Text_error")
            }
            u[e].price = i;
            u[e].origin_price = $(this).attr("value");
            u[e].income = r;
            u[e].has_market_min_price = n > 0;
            var o = $(".w-Checkbox[name=combine]").attr("value");
            if (o == "combine") {
                var s = $("#j_popup_selling_change_preview").data("group-key");
                var _ = $(this).data("group-key");
                var c = s[_].assetids;
                for (var l = 0; l < u.length; l++) {
                    if (c.indexOf(p[u[l].sell_order_id].assetid) > -1) {
                        u[l].price = u[e].price;
                        u[l].income = u[e].income;
                        u[l].has_market_min_price = u[e].has_market_min_price
                    }
                }
                $("#j_popup_selling_change_preview tr.group_key_" + _ + " input[name=price]").val(t);
                $("#j_popup_selling_change_preview tr.group_key_" + _ + " input[name=income]").val(a);
                $("#j_popup_selling_change_preview tr.group_key_" + _ + " .sell-price-custom").html(i ? formatPriceNormalCustom(i, true) : "");
                $("#j_popup_selling_change_preview tr.group_key_" + _ + " .sell-price-income").html(r ? formatPriceNormalCustom(r, true) : "");
                if ($(this).hasClass("i_Text_error")) {
                    $("#j_popup_selling_change_preview tr.group_key_" + _ + " input[name=price]").addClass("i_Text_error");
                    $("#j_popup_selling_change_preview tr.group_key_" + _ + " input[name=income]").addClass("i_Text_error")
                } else {
                    $("#j_popup_selling_change_preview tr.group_key_" + _ + " input[name=price]").removeClass("i_Text_error");
                    $("#j_popup_selling_change_preview tr.group_key_" + _ + " input[name=income]").removeClass("i_Text_error");
                    $("#j_popup_selling_change_preview tr.group_key_" + _ + " .cannot-quick-pricing").remove()
                }
            }
            $(this).parents("tr").find(".sell-price-custom").html(i ? formatPriceNormalCustom(i, true) : "");
            y()
        });
        $(document).on("change", "#j_popup_selling_change_preview input[name=price]", function () {
            if (v($(this).val(), true, $(this).attr("value"))) {
                y()
            }
        });
        var r = sellingPricing();
        $(document).on("input", "#j_popup_selling_change_preview input[name=income]", function () {
            var e = $(this).parents("tr");
            var t = $(e).attr("id").replace("sell_order_change_", "");
            var a = f[t] != "false" ? f[t] : "";
            r.get_price_from_income(e, a);
            var i = $(this).val();
            $(this).parents("tr").find(".sell-income-custom").html(i ? formatPriceNormalCustom(i, true) : "")
        });
        $(document).on("change", "#j_popup_selling_change_preview input[name=income]", function () {
            if (v($(this).val(), true)) {
                var e = $(this).parents("tr");
                var t = $(e).attr("id").replace("sell_order_change_", "");
                var a = f[t] != "false" ? f[t] : "";
                r.get_price_from_income(e, a)
            }
        });
        $(document).on("click", "#j_popup_selling_change_preview #quick-pricing", function () {
            r.quick_pricing($("#j_popup_selling_change_preview"));
            y()
        });
        $(document).on("click", "#j_popup_selling_change_preview a.confirm:not(.i_Btn_disabled)", function () {
            for (var e = 0; e < u.length; e++) {
                var t = u[e];
                if (v(t.price, true, t.origin_price) == false) {
                    return
                }
                var a = $("#sell_order_change_" + t.sell_order_id).next().find(".desc_content").text();
                t.desc = a
            }
            r.find_unusual_price($("#j_popup_selling_change_preview"), function () {
                u.forEach(function (e) {
                    var t = f[e.sell_order_id] || "";
                    if (t != h) {
                        e["cdkey_id"] = t
                    }
                });
                sendRequest("/api/market/sell_order/change", {
                    method: "POST",
                    data: {game: d, sell_orders: u},
                    timeout: Math.max(5e3, 1e3 * u.length),
                    success: function (e) {
                        if (e.code == "OK") {
                            var t = 0;
                            var a = [];
                            for (var i = 0; i < u.length; i++) {
                                var r = u[i].sell_order_id;
                                var n = e.data[r];
                                if (n == "OK") {
                                    t += 1;
                                    $("#sell_order_" + r).find(".sell_order_price").html(formatPriceCustom(u[i].price));
                                    $("#sell_order_" + r).data("price", u[i].price)
                                } else {
                                    a.push({order: u[i], reason: n, info: p[r]})
                                }
                            }
                            if (a.length > 0) {
                                Popup.hide();
                                var o = template_render("change_price_result_pat", {failures: a, success: t});
                                $("#popup-container").html(o);
                                Popup.show("j_popup_change_price_result")
                            } else {
                                if ($(".c_Yellow.offline_tips").is(":visible")) {
                                    Popup.hide();
                                    Buff.alert({
                                        title: i18n("the_modified_price_of_success"),
                                        message: i18n("add_in_the_buyers_payment"),
                                        hideCancel: true,
                                        rememberDismiss: "deliver_tips",
                                        success: function (e) {
                                            if (e) {
                                                Buff.toast(i18n("the_modified_price_of_success"), {type: "success"});
                                                Popup.hide()
                                            }
                                            setTimeout(function () {
                                                window.location.reload()
                                            }, 2e3)
                                        }
                                    })
                                } else {
                                    Buff.toast(i18n("the_modified_price_of_success"), {type: "success"});
                                    Popup.hide();
                                    setTimeout(function () {
                                        window.location.reload()
                                    }, 2e3)
                                }
                                $("#select-all").removeClass("all");
                                $("#j_list_card > ul > li").removeClass("on")
                            }
                            s()
                        } else if (e.code == "Invalid Argument") {
                            Buff.toast(e.error || e.code, {type: "warning"})
                        } else {
                            Buff.toast(e.error || i18n("change_price_of_failure"), {type: "error"})
                        }
                    }
                })
            }, true)
        });
        $(document).on("click", ".edit_order_desc a", function () {
            var e = $(this).data("orderid");
            Popup.show("j_pupup_add_desc");
            var t = $("#sell_order_change_" + e).next().find(".desc_content").text();
            $("#j_pupup_add_desc .addDesWrapper textarea").focus().val(t).trigger("input");
            $("#j_pupup_add_desc .i_Btn_main").data("orderid", e)
        });
        $(document).on("click", "#j_pupup_add_desc .i_Btn_main", function () {
            var e = $(this).data("orderid");
            var t = $("#j_pupup_add_desc .addDesWrapper textarea").val();
            if (t.length > 40) {
                Buff.toast(i18n("the_content_of_the_input"))
            } else {
                $("#sell_order_change_" + e).next().find(".desc_content").text(t);
                for (var a = 0; a < u.length; a++) {
                    if (u[a].sell_order_id == e) {
                        u[a].desc = t
                    }
                }
                if (t.length > 0) {
                    $("#sell_order_change_" + e).next().show();
                    $("#sell_order_change_" + e).addClass("has_des");
                    $("#sell_order_change_" + e + " td").css("border-bottom", "0");
                    $("#sell_order_change_" + e + " .edit_order_desc a").text(i18n("edit_the_description"))
                } else {
                    $("#sell_order_change_" + e + " td").css("border-bottom", "1px solid #E9E9E9");
                    $("#sell_order_change_" + e).next().hide();
                    $("#sell_order_change_" + e).removeClass("has_des");
                    $("#sell_order_change_" + e + " .edit_order_desc a").text(i18n("add_a_description"))
                }
                Popup.hide()
            }
        })
    };
    return {init: n, init_change_price: _, init_cancel_order: o}
};
var sellingToDeliver = function (e, t) {
    var r = g.game;
    var e = e;
    var n = [];
    var o = function () {
        var e = $(".deliver-order.TO_DELIVER .pic-cont.on").length;
        $(".w-Checkbox[name=select-all] span").html(format_html('<i class="icon icon_checkbox"></i><%= i18n("all") %> (<%= count %>/<%= total_count %>)', {
            count: e,
            total_count: t
        }));
        if (e < 1) {
            $(".w-Checkbox[name=select-all] span").removeClass("on");
            $(".w-Checkbox[name=select-all]").attr({value: ""})
        }
    };
    var i = function (e) {
        if (e == 0) {
            return "00"
        } else if (e > 0 && e < 10) {
            return "0" + e
        }
        return "" + e
    };
    var s = function (e) {
        $("span.count-down").each(function () {
            var e = $(this).data("expire");
            $(this).data("expire", e - 1);
            e = parseInt(e);
            var t = i18n("delivery_timeout");
            if (e > 0) {
                var a = moment.duration(e, "seconds");
                t = i(parseInt(a.asHours())) + ":" + i(a.minutes()) + ":" + i(a.seconds())
            }
            $(this).text(t)
        });
        if (e == true) setTimeout(function () {
            s(true)
        }, 1e3)
    };
    s(true);
    var _ = function (a) {
        sendRequest("/market/sell_order/to_deliver/batch", {
            data: {game: r, bill_orders: e.join(",")},
            showLoading: false,
            showError: false,
            method: "GET",
            dataType: "json",
            success: function (e) {
                if (e.code == "OK") {
                    $("table.list_tb tbody").html(e.data);
                    initCustomCurrency($("table.list_tb tbody"));
                    for (var t = 0; t < n.length; t++) {
                        $("#bill_order_" + n[t] + " .pic-cont").addClass("on")
                    }
                    s();
                    if (a == true) setTimeout(function () {
                        _(true)
                    }, 5e3)
                } else {
                    Buff.toast(e.error)
                }
            }
        })
    };
    if (e.length > 0) _(true);
    update_bot({
        polling: true, onStateChange: function () {
            _()
        }
    });
    var a = function () {
        o();
        $(".w-Checkbox[name=select-all]").change(function () {
            var e = $(this).attr("value");
            if (e == "selectall") {
                $(".deliver-order.TO_DELIVER .pic-cont").addClass("on")
            } else {
                $(".deliver-order.TO_DELIVER .pic-cont").removeClass("on")
            }
            n = [];
            $(".deliver-order.TO_DELIVER .pic-cont.on").each(function () {
                var e = $(this).data("orderid");
                n.push(e)
            });
            o()
        });
        $("#deliver").click(function () {
            Buff.alert({
                title: i18n("prompt"),
                message: i18n("beware_of_phishing_scams_please"),
                cancelText: i18n("to_check"),
                confirmText: i18n("i_know"),
                rememberDismiss: "fraud_notice",
                hide_popup_after_cancel: false,
                success: e,
                cancel: function () {
                    openPageOnNewTab("https://steamcommunity.com/dev/apikey")
                }
            })
        });
        var e = function () {
            n = [];
            $(".deliver-order.TO_DELIVER .pic-cont.on").each(function () {
                var e = $(this).data("orderid");
                n.push(e)
            });
            a(n)
        };
        var a = function (e) {
            if (e.length < 1) {
                Buff.toast(i18n("please_select_to_ship_the"));
                return
            }
            sendRequest("/api/market/bill_order/deliver", {
                data: {game: r, bill_orders: e},
                dataType: "json",
                method: "POST",
                success: function (e) {
                    if (e.code == "OK") {
                        bot_trades = {};
                        bot_trades[e.data.id] = e.data;
                        update_bot();
                        _()
                    } else if (e.code == "Steam Trade URL Binding Required") {
                        Buff.alert({
                            title: i18n("prompt"),
                            message: i18n("unbound_steam_trading_link_whether"),
                            success: function () {
                                window.open("/user-center/profile", "_blank")
                            },
                            cancel: function () {
                                Buff.toast(i18n("the_quote_failed_to_send"))
                            }
                        })
                    } else {
                        Buff.toast(i18n("the_quote_failed_to_send") + e.error)
                    }
                }
            })
        };
        $(document).on("click", ".cancel-deliver", function (e) {
            e.stopPropagation();
            var t = $(this).data("orderid");
            sendRequest("/api/market/bill_order/deliver/cancel/preview", {
                data: {game: r, bill_order_id: t},
                dataType: "json",
                method: "GET",
                success: function (e) {
                    if (e.code == "OK") {
                        Buff.alert({
                            title: i18n("cancel_the_shipment"),
                            message: e.data.messages,
                            cancelText: i18n("i_think_again"),
                            confirmText: i18n("cancel_the_shipment"),
                            success: function () {
                                sendRequest("/api/market/bill_order/deliver/cancel", {
                                    data: {game: r, bill_order_id: t},
                                    dataType: "json",
                                    method: "POST",
                                    success: function (e) {
                                        if (e.code == "OK") {
                                            _();
                                            Buff.toast(i18n("cancel_delivery_success"))
                                        } else {
                                            Buff.toast(e.error, {type: "error"})
                                        }
                                    }
                                })
                            }
                        })
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        });
        $(document).on("click", ".replace-asset", function (e) {
            e.stopPropagation();
            var t = $(this).data("orderid");
            i(t, false)
        });
        $(document).on("click", ".refresh-inventory", function (e) {
            $(this).hide();
            $("#j_popup_replace_asset .packlist").showLoading();
            $("#j_popup_replace_asset").find("#deliver-confirm").addClass("i_Btn_disabled");
            $("#j_popup_replace_asset").find("#fee").html(formatPriceNormalYuan(0));
            $("#j_popup_replace_asset").find("#total_price").html(formatPriceYuan(0));
            $("#j_popup_replace_asset").find("#total_price_custom").html(formatPriceNormalCustom(0));
            var t = $(this).data("orderid");
            i(t, true)
        });
        var i = function (e, t) {
            var a = t ? 1 : undefined;
            sendRequest("/api/market/bill_order/replace_asset/preview", {
                method: "GET",
                timeout: BuffConfig.STEAM_TIMEOUT,
                data: {bill_order_id: e, force_update: a},
                showLoading: !t,
                success: function (a) {
                    if (a.code != "OK") {
                        Buff.toast(a.error, {type: "error"});
                        return
                    }
                    var e = template_render("replace_asset_pat", a.data);
                    $("#popup-container").html(e);
                    var i = null;
                    $("#j_popup_replace_asset").find(".packcard li").click(function () {
                        var e = $(this).attr("data-assetid");
                        if ($(this).hasClass("on")) {
                            $(this).removeClass("on");
                            if (i == e) i = null
                        } else {
                            if (i && i != e) return;
                            $(this).addClass("on");
                            i = e
                        }
                        $("#j_popup_replace_asset").find("#deliver-confirm").data("assetid", i);
                        var t = i ? 1 : 0;
                        $("#selected-backpack-num").text(t);
                        if (i) {
                            $("#j_popup_replace_asset").find("#deliver-confirm").removeClass("i_Btn_disabled")
                        } else {
                            $("#j_popup_replace_asset").find("#deliver-confirm").addClass("i_Btn_disabled")
                        }
                        if (i) {
                            $("#j_popup_replace_asset").find(".packcard li").each(function () {
                                if (!$(this).hasClass("on")) {
                                    $(this).find(".mask").css("display", "block")
                                } else {
                                    $(this).find(".mask").hide()
                                }
                            })
                        } else {
                            $("#j_popup_replace_asset").find(".mask").hide()
                        }
                        $("#j_popup_replace_asset").find("#fee").html(formatPriceNormalYuan(t * parseFloat(a.data.bill_order.fee)));
                        $("#j_popup_replace_asset").find("#total_price").html(formatPriceYuan(t * (a.data.bill_order.price - a.data.bill_order.fee)));
                        $("#j_popup_replace_asset").find("#total_price_custom").html(formatPriceNormalCustom(t * (a.data.bill_order.price - a.data.bill_order.fee)))
                    });
                    if (t) {
                        Popup.hide()
                    }
                    Popup.show("j_popup_replace_asset")
                }
            })
        };
        $(document).on("click", "#j_popup_replace_asset #deliver-confirm", function () {
            if ($(this).hasClass("i_Btn_disabled")) return;
            $(this).addClass("i_Btn_disabled");
            var t = $(this).data("orderid");
            var e = $(this).data("assetid");
            sendRequest("/api/market/bill_order/replace_asset", {
                method: "POST",
                data: {bill_order_id: t, assetid: e},
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    Popup.hide();
                    a([t])
                }
            })
        });
        $(document).on("click", ".deliver-order.TO_DELIVER", function () {
            $(this).find(".pic-cont").toggleClass("on");
            n = [];
            $(".deliver-order.TO_DELIVER .pic-cont.on").each(function () {
                var e = $(this).data("orderid");
                n.push(e)
            });
            o()
        })
    };
    return {init: a}
};
var sellingPricing = function () {
    var e = function (e) {
        e.find('input[name="price"]').each(function () {
            var e = $(this).data("quick-price");
            if (e > 0) {
                $(this).val(e).trigger("input")
            } else {
                $(this).val("");
                $(this).parents("tr").find('input[name="income"]').val("");
                $(this).trigger("input");
                $(this).parents("tr").find('input[name="income"]').trigger("input");
                var t = $(this).data("error");
                if (t.length < 1) t = i18n("the_goods_can_not_a");
                var t = $("<p />", {class: "c_Gray cannot-quick-pricing"}).append($("<small />", {text: t})).css({
                    "padding-top": "5px",
                    position: "absolute"
                });
                $(this).parent().append(t)
            }
        })
    };
    var t = function (e, t, a) {
        var i = e.find('input[name="price"]');
        var r = [];
        var n = [];
        for (var o = 0; o < i.length; o++) {
            var s = $(i[o]).data("goodsid");
            r.push($(i[o]).val());
            n.push(s)
        }
        sendRequest("/api/market/batch/fee", {
            method: "GET",
            dataType: "json",
            data: {game: g.game, prices: r.join(","), goods_ids: n.join(","), is_change: a ? 1 : 0, check_price: 1},
            showLoading: false,
            success: function (e) {
                if (e.code !== "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
                if (e.data.unusual) {
                    Buff.alert({
                        title: e.data.title,
                        message: e.data.messages,
                        cancelText: e.data.cancel_text,
                        confirmText: e.data.confirm_text,
                        success: function () {
                            t()
                        }
                    })
                } else {
                    t()
                }
            }
        })
    };
    var n = function (e, t, a) {
        var i = BuffConfig.MIN_PRICE;
        var r = BuffConfig.MAX_SELL_PRICE;
        if (typeof e == "string" && e.length == 0 || typeof e == "object" || isNaN(e)) {
            if (t) {
                Buff.toast(i18n("there_goods_is_not_input"), {type: "error"})
            }
            return false
        }
        e = parseFloat(e);
        a = a && parseFloat(a) || 0;
        if (e < i) {
            if (t) {
                Buff.toast(i18n("price_must_be_greater_than") + i)
            }
            return false
        }
        return true
    };
    var o = {};
    var s = {};
    var a = function (t, a) {
        var e = $(t).find("input[name=income]");
        var i = $(t).attr("id");
        var r = $(e).data("goodsid");
        if (n($(e).val())) {
            $(e).removeClass("i_Text_error")
        } else {
            $(e).addClass("i_Text_error")
        }
        clearTimeout(o[i]);
        if (s[i]) s[i].abort();
        o[i] = setTimeout(function () {
            var e = $(t).find("input[name=income]").val();
            if (n(e, false)) {
                sendRequest("/api/market/get_prices_from_incomes", {
                    data: {
                        game: g.game,
                        incomes: e,
                        cdkey_ids: a,
                        goods_ids: r
                    }, dataType: "json", method: "GET", showLoading: false, success: function (e) {
                        if (e.code != "OK") {
                            Buff.toast(e.error, {type: "error"});
                            return
                        }
                        $(t).find("input[name=price]").val(e.data.prices[0]).trigger("input")
                    }, beforeSend: function (e, t) {
                        s[i] = e
                    }
                })
            }
        }, 500)
    };
    $(document).on("input", '.popup input[name="price"]', function () {
        $(this).parent().find(".cannot-quick-pricing").remove()
    });
    return {quick_pricing: e, find_unusual_price: t, get_price_from_income: a, check_price_value: n}
};
var backpack = function () {
    var o = g.game;
    var n = {};
    var s = {};
    var _ = {};
    var d = [];
    var c = {};
    var l = {};
    var e = BuffConfig.MAX_SELL_PRICE;
    var t = BuffConfig.MIN_PRICE;
    var a = undefined;
    var u = undefined;
    var i = undefined;
    var r = 0;
    var p = null;
    var f = function () {
        return Object.keys(c).sort(function (e, t) {
            return c[e] - c[t]
        })
    };
    var m = function () {
        var e = $("#j_list_card > ul > li.on").length;
        var t = $("#j_list_card > ul > li.salable").length;
        if (e < t || e === 0) {
            $(".w-Checkbox[name=select-all] span").removeClass("on");
            $(".w-Checkbox[name=select-all]").attr({value: ""})
        } else {
            $(".w-Checkbox[name=select-all] span").addClass("on");
            $(".w-Checkbox[name=select-all]").attr({value: "selectall"})
        }
    };
    var h = function (e) {
        var t = f();
        var a = u;
        $("#j_overpage-handler").find(".selected-count").text(t.length);
        $("#j_overpage-handler").find(".total-count").text(u);
        var i = 0;
        var r = {};
        t.forEach(function (e) {
            var t = s[n[e].goods_id];
            var a = n[e].asset_info;
            i += parseFloat(t.steam_price);
            r[e] = {
                appid: t.appid,
                name: t.name,
                assetid: a.assetid,
                contextid: a.contextid,
                classid: a.classid,
                instanceid: a.instanceid,
                icon_url: a.info.icon_url || t.icon_url
            }
        });
        if (!e || t.length == 0) {
            $("#j_overpagetip").html(template_render("overpagetip_template", {selected: t, total_price: i, infos: r}))
        } else {
            $("#j_overpagetip").find(".f_Strong").html(formatPriceNormalCustom(i, undefined, "USD"));
            $("#j_overpagetip").find("#selected-count").text(t.length)
        }
    };
    var v = function () {
        var e = template_render("brief_info_pat", {
            backpack_count: a,
            visible_backpack_count: u,
            backpack_limit: i,
            total_amount: r
        });
        $(".brief-info").html(e)
    };
    var y = sellingPricing().check_price_value;
    var b = function () {
        clearTimeout(p);
        jQuery.xhrPool.abort("/api/market/batch/fee");
        p = setTimeout(function () {
            var e = [];
            var a = [];
            var t = [];
            var i = 0;
            var r = 0;
            for (var n = 0; n < d.length; n++) {
                if (!d[n]) continue;
                if (d[n].price > 0) {
                    if (y(d[n].price, false) == false) {
                        return
                    }
                    if (!d[n].has_market_min_price) {
                        t.push(d[n].goods_id);
                        e.push(d[n].price);
                        a.push(n);
                        i += d[n].price
                    } else {
                        i += d[n].income
                    }
                }
            }
            if (e.length < 1) {
                $("#j_popup_selling_preview span.sale_fee").html(formatPriceYuan(r));
                $("#j_popup_selling_preview span.real_income").html(formatPriceYuan(i - r));
                $("#j_popup_selling_preview span.real_income_custom").html(formatPriceNormalCustom(i - r));
                return
            }
            $("#j_popup_selling_preview .confirm").addClass("i_Btn_disabled");
            sendRequest("/api/market/batch/fee", {
                data: {game: o, prices: e.join(","), goods_ids: t.join(",")},
                dataType: "json",
                method: "GET",
                showLoading: false,
                success: function (t) {
                    if (t.code == "OK") {
                        $("#j_popup_selling_preview .confirm").removeClass("i_Btn_disabled");
                        r += parseFloat(t.data.total_fee);
                        $("#j_popup_selling_preview span.sale_fee").html(formatPriceYuan(r));
                        $("#j_popup_selling_preview span.real_income").html(formatPriceYuan(i - parseFloat(r)));
                        $("#j_popup_selling_preview span.real_income_custom").html(formatPriceNormalCustom(i - parseFloat(r)));
                        $("#j_popup_selling_preview input[name=income]").each(function () {
                            var e = $(this).data("index") - 1;
                            if (a.indexOf(e) != -1) {
                                if (!$(this).is(":focus")) {
                                    d[e].income = d[e].price - parseFloat(t.data.fees[a.indexOf(e)]);
                                    $(this).val(d[e].income.toFixed(2));
                                    $(this).parents("tr").find(".sell-income-custom").text(formatPriceNormalCustom(d[e].income, true));
                                    $(this).removeClass("i_Text_error")
                                }
                            }
                        })
                    } else {
                        Buff.toast(t.error, {type: "error"})
                    }
                },
                error: function (e) {
                    if (e.statusText != "abort") {
                        Buff.toast(i18n("acquisition_fee_failed_please_try"))
                    }
                }
            })
        }, 500)
    };
    var w = function (e) {
        $("#backpack_list").showLoading();
        var t = getParams();
        t.page_num = getParamsFromHash().page_num || 1;
        sendRequest("/api/market/backpack", {
            method: "GET",
            data: t,
            showLoading: false,
            ignoreCode: ["Steam Binding Required"],
            success: function (e) {
                if (e.code == "OK") {
                    x(e.data);
                    if (e.notice) {
                        var t = "";
                        $(".market-tip.backpack-tip").show();
                        if (e.notice.extra) {
                            t = format_html('<span class="j_tips_handler" data-title=" " data-content="<%= data.notice.extra %>"><i class="icon icon_qa"></i></span>', {data: e})
                        }
                        $(".market-tip.backpack-tip").html(format_html("<div><p><%= data.notice.text %><%- tip %></p></div>", {
                            data: e,
                            tip: t
                        }));
                        $(".market-tip.backpack-tip").addClass("market-tip_" + e.notice.type)
                    } else {
                        $(".market-tip.backpack-tip").show()
                    }
                }
            },
            complete: function () {
                $("#backpack_list").removeLoading()
            }
        });
        if (!e) {
            C()
        }
    };
    var k = function () {
        $("#j_list_card > ul > li.salable").each(function () {
            if (c[$(this).data("backpackid")]) {
                $(this).addClass("on")
            } else {
                $(this).removeClass("on")
            }
        })
    };
    var x = function (e) {
        var t = template_render("backpack_list_pat", e);
        $("#backpack_list").html(t);
        e.items.forEach(function (e) {
            n[e.id] = e
        });
        s = $.extend(s, e.goods_infos);
        a = e.backpack_count;
        i = e.backpack_limit;
        u = e.total_count;
        v();
        k();
        m();
        h();
        renderPagination({
            total_count: e.total_count,
            page_size: e.page_size,
            page_num: e.page_num,
            show_size_select: false,
            onPageClick: function (e, t) {
                t.preventDefault();
                updateHash("page_num", e);
                w(true)
            }
        })
    };
    var C = function () {
    };
    var j = function () {
        sendRequest("/account/api/user/info/v2", {
            method: "GET",
            dataType: "json",
            showLoading: false,
            timeout: 15e3,
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                } else if ([0, 1].indexOf(e.data.user_info.trade_url_state) == -1) {
                    $("#trade_state_tip").show();
                    $("#withdraw").addClass("i_Btn_disabled")
                }
            }
        })
    };
    var P = function () {
        w();
        $(document).on("click", "#recheck_trade_state", function () {
            sendRequest("/api/market/steam/trade_url_state/refresh", {
                method: "POST",
                dataType: "json",
                timeout: 15e3,
                success: function (e) {
                    if (e.code == "OK") {
                        if ([0, 1].indexOf(e.data.trade_url_state) > -1) {
                            Buff.toast(i18n("it_detects_your_steam_account"));
                            $("#trade_state_tip").hide();
                            $("#withdraw").removeClass("i_Btn_disabled")
                        } else if (e.data.trade_url_state == 2) {
                            Buff.toast(i18n("it_detects_your_steam_account"), {type: "error"})
                        }
                    } else {
                        Buff.toast(i18n("detection_failed_please_try_again"))
                    }
                }
            })
        });
        $("#withdraw").click(function () {
            if ($(this).hasClass("i_Btn_disabled")) return;
            Buff.guide({
                title: i18n("retrieve_the_process_description"),
                rememberDismiss: "backpack_withdraw",
                hideClose: false,
                onConfirm: e,
                content: '<img style="width:100%;margin-top: 20px;" src="/static/images/first_fetch_from_backpack.png"/><div class="guide-strong"><a href="/help#how_to_fetch_cosmetics" target="_blank" class="f_14px">查看取回饰品详细教程</a></div>'
            })
        });
        var e = function () {
            var e = f();
            if (e.length == 0) {
                Buff.toast(i18n("select_to_retrieve_the_goods"));
                return
            }
            sendRequest("/api/market/backpack/withdraw", {
                data: {game: o, backpack_ids: e},
                showLoading: false,
                method: "POST",
                dataType: "json",
                success: function (e) {
                    if (e.code == "OK") {
                        for (var t = 0; t < e.data.length; t++) {
                            bot_trades[e.data[t].id] = e.data[t]
                        }
                        c = {};
                        w();
                        render_bot()
                    } else if (e.code == "Steam Trade URL Binding Required") {
                        Buff.alert({
                            title: i18n("prompt"),
                            message: i18n("unbound_steam_trading_link_whether"),
                            success: function () {
                                window.open("/user-center/profile", "_blank")
                            },
                            cancel: function () {
                                Buff.toast(i18n("retrieval_failure"))
                            }
                        })
                    } else if (e.code == "Steam Trade Limit") {
                        Buff.alert({
                            title: i18n("prompt"),
                            message: i18n("your_current_steam_account_cant"),
                            success: function () {
                                window.open("/help#before_trade", "_blank")
                            },
                            cancel: function () {
                                Buff.toast(i18n("retrieval_failure"))
                            }
                        })
                    } else if (e.code == "Steam Trade URL Failure") {
                        Buff.alert({
                            title: i18n("prompt"),
                            message: i18n("your_steam_trade_url_invalid"),
                            success: function () {
                                window.open("/user-center/profile", "_blank")
                            },
                            cancel: function () {
                                Buff.toast(i18n("retrieval_failure"))
                            }
                        })
                    } else {
                        Buff.toast(e.error)
                    }
                }
            })
        };
        update_bot({
            polling: true, onStateChange: function (e, t) {
                w()
            }
        });
        $(document).on("click", "#j_list_card > ul > li.salable", function () {
            $(this).toggleClass("on");
            $(this).trigger("change");
            m();
            h()
        });
        $(document).on("change", "#j_list_card > ul > li.salable", function () {
            var e = $(this).data("backpackid");
            if ($(this).hasClass("on")) {
                if (Object.keys(c).length >= 200 && !c[e]) {
                    Buff.toast(i18n("select_up_to_200_pieces"));
                    $(this).toggleClass("on");
                    return
                }
                c[e] = Date.now()
            } else {
                delete c[e]
            }
        });
        $(".w-Checkbox[name=select-all]").change(function () {
            var e = $(this).attr("value");
            if (e == "selectall") {
                $("#j_list_card > ul > li.salable").addClass("on");
                if ($("#j_list_card > ul > li.salable").length < 1) {
                    Buff.toast(i18n("the_current_page_is_no"))
                }
            } else {
                $("#j_list_card > ul > li.salable").removeClass("on")
            }
            $("#j_list_card > ul > li.salable").trigger("change");
            m();
            h()
        });
        $("#confirm-shelve").click(function () {
            if ($("#j_popup_sellauto .w-Checkbox").attr("value") === "dontshow") {
                localStorage.setItem("remember_dismiss_auto_sell", "1")
            }
            t()
        });
        $("#shelve").click(function () {
            if (localStorage.getItem("remember_dismiss_auto_sell")) {
                t();
                return
            }
            Popup.show("j_popup_sellauto")
        });
        var t = function () {
            var a = [];
            f().forEach(function (e) {
                var t = n[e];
                a.push({
                    game: t.game,
                    market_hash_name: s[t.goods_id].market_hash_name,
                    contextid: t.asset_info.contextid,
                    assetid: t.asset_info.assetid,
                    classid: t.asset_info.classid,
                    instanceid: t.asset_info.instanceid,
                    goods_id: t.goods_id,
                    price: "",
                    income: "",
                    has_market_min_price: false
                });
                _[t.asset_info.assetid] = s[t.goods_id];
                l[t.asset_info.assetid] = e
            });
            d = a;
            if (d.length < 1) {
                Buff.toast(i18n("please_choose_to_be_on"));
                return
            }
            sendRequest("/market/sell_order/preview/auto", {
                data: {game: o, assets: d},
                dataType: "json",
                method: "POST",
                success: function (e) {
                    if (e.code == "OK") {
                        $("#popup-container").html(e.data);
                        initCustomCurrency($("#j_popup_selling_preview"));
                        Popup.show("j_popup_selling_preview");
                        Buff.pricePatten("input[name=price]");
                        Buff.pricePatten("input[name=income]")
                    } else {
                        Buff.alert({type: "error", title: i18n("on_frame_failure"), message: e.error, hideCancel: true})
                    }
                }
            })
        };
        var i = function () {
            $("#j_popup_selling_preview tr.assets-item input[name=price]").each(function () {
                var e = $(this).data("index") - 1;
                var t = parseFloat($(this).val());
                if (isNaN(t) || $(this).val().length == 0) {
                    d[e].price = ""
                } else {
                    d[e].price = t
                }
            });
            $("#j_popup_selling_preview tr.assets-item input[name=income]").each(function () {
                var e = $(this).data("index") - 1;
                var t = parseFloat($(this).val());
                if (isNaN(t) || $(this).val().length == 0) {
                    d[e].income = ""
                } else {
                    d[e].income = t
                }
            })
        };
        $(document).on("change", ".w-Checkbox[name=combine]", function () {
            var e = $(this).attr("value");
            if (e == "combine") {
                var t = $("#j_popup_selling_preview").data("group-key");
                for (var a in t) {
                    if (t[a].assetids.length > 1) {
                        $("#j_popup_selling_preview tr.group_key_" + a + ":not(:first)").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + ":first .name-cont p.num").remove();
                        $("#j_popup_selling_preview tr.group_key_" + a + ":first .name-cont").append('<p class="num c_Gray" style="font-size: 13px;"> ×' + t[a].assetids.length + "</p>");
                        $("#j_popup_selling_preview tr.group_key_" + a + " input").val("");
                        $("#j_popup_selling_preview tr.group_key_" + a + " .sell-price-custom").html("");
                        $("#j_popup_selling_preview tr.group_key_" + a + " .sell-income-custom").html("");
                        $("#j_popup_selling_preview tr.group_key_" + a + " .pic-cont .item-count").show();
                        $("#j_popup_selling_preview tr.group_key_" + a).next(".des_row").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + " td").css("border-bottom", "1px solid #E9E9E9");
                        $("#j_popup_selling_preview tr.group_key_" + a + " .edit_order_desc a").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + " .paint-wear").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + " .csgo_sticker_inline").hide();
                        $("#j_popup_selling_preview tr.group_key_" + a + " .group_key_notice").show()
                    }
                }
                i();
                b()
            } else {
                $("#j_popup_selling_preview tr.assets-item").show();
                $("#j_popup_selling_preview tr.assets-item .edit_order_desc a").show();
                $("#j_popup_selling_preview tr.assets-item .paint-wear").show();
                $("#j_popup_selling_preview tr.assets-item .csgo_sticker_inline").show();
                $("#j_popup_selling_preview tr.assets-item.has_des").next().show();
                $("#j_popup_selling_preview tr.assets-item.has_des td").css("border-bottom", "0");
                $("#j_popup_selling_preview tr.assets-item .name-cont p.num").remove();
                $("#j_popup_selling_preview tr.assets-item .pic-cont .item-count").hide();
                $("#j_popup_selling_preview tr.assets-item .group_key_notice").hide()
            }
        });
        $(document).on("input", "#j_popup_selling_preview input[name=price], #j_popup_trans input[name=price], #j_popup_private input[name=price]", function () {
            var e = $(this).data("index") - 1;
            var t = $(this).val();
            var a = $(this).parents("tr").find("input[name=income]").val();
            var i = parseFloat(t);
            var r = parseFloat(a);
            var n = parseFloat($(this).data("market-min-price"));
            if (n > 0 && i < n) {
                i = n
            }
            if (y($(this).val())) {
                $(this).removeClass("i_Text_error")
            } else {
                $(this).addClass("i_Text_error")
            }
            d[e].price = i;
            d[e].income = r;
            d[e].has_market_min_price = n > 0;
            var o = $(".w-Checkbox[name=combine]").attr("value");
            if (o == "combine") {
                var s = $("#j_popup_selling_preview").data("group-key");
                var _ = $(this).data("group-key");
                var c = s[_].assetids;
                for (var l = 0; l < d.length; l++) {
                    if (c.indexOf(d[l].assetid) > -1) {
                        d[l].price = d[e].price;
                        d[l].income = d[e].income;
                        d[l].has_market_min_price = d[e].has_market_min_price
                    }
                }
                $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=price]").val(t);
                $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=income]").val(a);
                $("#j_popup_selling_preview tr.group_key_" + _ + " .sell-price-custom").html(i ? formatPriceNormalCustom(i, true) : "");
                $("#j_popup_selling_preview tr.group_key_" + _ + " .sell-price-income").html(r ? formatPriceNormalCustom(r, true) : "");
                if ($(this).hasClass("i_Text_error")) {
                    $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=price]").addClass("i_Text_error");
                    $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=income]").addClass("i_Text_error")
                } else {
                    $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=price]").removeClass("i_Text_error");
                    $("#j_popup_selling_preview tr.group_key_" + _ + " input[name=income]").removeClass("i_Text_error");
                    $("#j_popup_selling_preview tr.group_key_" + _ + " .cannot-quick-pricing").remove()
                }
            }
            if (i) {
                $(this).parents("tr").find(".sell-price-custom").html(formatPriceNormalCustom(i, true))
            } else {
                $(this).parents("tr").find(".sell-price-custom").html("")
            }
            b()
        });
        $(document).on("change", "#j_popup_selling_preview input[name=price], #j_popup_trans input[name=price], #j_popup_private input[name=price]", function () {
            if (y($(this).val(), true)) {
                b()
            }
        });
        var a = sellingPricing();
        $(document).on("input", "#j_popup_selling_preview input[name=income]", function () {
            a.get_price_from_income($(this).parents("tr"));
            var e = $(this).val();
            if (e) {
                $(this).parents("tr").find(".sell-income-custom").html(formatPriceNormalCustom(e, true))
            } else {
                $(this).parents("tr").find(".sell-income-custom").html("")
            }
        });
        $(document).on("change", "#j_popup_selling_preview input[name=income]", function () {
            if (y($(this).val(), true)) {
                a.get_price_from_income($(this).parents("tr"))
            }
        });
        $(document).on("click", "#j_popup_selling_preview #quick-pricing", function () {
            a.quick_pricing($("#j_popup_selling_preview"));
            b()
        });
        $(document).on("click", "#j_popup_selling_preview .confirm:not(.i_Btn_disabled)", function () {
            for (var e = 0; e < d.length; e++) {
                if (y(d[e].price, true) == false) {
                    return
                }
            }
            a.find_unusual_price($("#j_popup_selling_preview"), function () {
                sendRequest("/api/market/sell_order/create/auto", {
                    data: {game: o, assets: d},
                    method: "POST",
                    timeout: Math.max(5e3, 1e3 * d.length),
                    success: function (e) {
                        if (e.code == "OK") {
                            var t = "";
                            var a = 0;
                            var i = [];
                            for (var r = 0; r < d.length; r++) {
                                var n = d[r].assetid;
                                var o = e.data[n];
                                if (o == "OK") {
                                    a += 1;
                                    delete c[l[n]]
                                } else {
                                    i.push({asset: d[r], reason: o, info: _[n]})
                                }
                            }
                            if (i.length > 0) {
                                Popup.hide();
                                var s = template_render("result_pat", {failures: i, success: a});
                                $("#popup-container").html(s);
                                Popup.show("j_popup_charge-result")
                            } else {
                                Buff.toast(i18n("items_on_the_shelves_successful"), {type: "success"});
                                Popup.hide()
                            }
                            w()
                        } else if (e.code == "Invalid Argument" && e.error.indexOf("price") > -1) {
                            Buff.toast(i18n("there_goods_is_not_input"), {type: "error"})
                        } else {
                            Buff.toast(e.error || e.code, {type: "warning"})
                        }
                    }
                })
            })
        });
        $(document).on("click", ".edit_order_desc a", function () {
            var e = $(this).data("assetid");
            Popup.show("j_pupup_add_desc");
            var t = $("#asset_" + e).next().find(".desc_content").text();
            $("#j_pupup_add_desc .addDesWrapper textarea").focus().val(t).trigger("input");
            $("#j_pupup_add_desc .i_Btn_main").data("assetid", e)
        });
        $(document).on("click", "#j_pupup_add_desc .i_Btn_main", function () {
            var e = $(this).data("assetid");
            var t = $("#j_pupup_add_desc .addDesWrapper textarea").val();
            if (t.length > 40) {
                Buff.toast(i18n("the_content_of_the_input"))
            } else {
                $("#asset_" + e).next().find(".desc_content").text(t);
                for (var a = 0; a < d.length; a++) {
                    if (d[a].assetid == e) {
                        d[a].desc = t
                    }
                }
                if (t.length > 0) {
                    $("#asset_" + e).next().show();
                    $("#asset_" + e).addClass("has_des");
                    $("#asset_" + e + " .edit_order_desc a").text(i18n("edit_the_description"))
                } else {
                    $("#asset_" + e).next().hide();
                    $("#asset_" + e).removeClass("has_des");
                    $("#asset_" + e + " .edit_order_desc a").text(i18n("add_a_description"))
                }
                Popup.hide()
            }
        });
        $("#bundle-shelve").click(function () {
            if (!$(this).data("has-perm")) {
                Buff.toast(i18n("packaged_transaction_within_the_test"), {type: "warning"});
                return
            }
            var e = f();
            if (e.length < 2) {
                Buff.toast(i18n("require_minimal_packaging_of_two"));
                return
            }
            d = [{price: 0}];
            var t = 0;
            for (var a = 0; a < e.length; a++) {
                t += parseFloat(s[n[e[a]].goods_id].steam_price_cny)
            }
            var i = template_render("bundle_pat", {selected: e, items: n, goods_infos: s, sum_price: t});
            $("#popup-container").html(i);
            Popup.show("j_popup_trans")
        });
        $(document).on("click", "#j_popup_trans .confirm", function () {
            var e = $("#j_popup_trans input[name=price]").val();
            var t = $("#j_popup_trans input[name=description]").val();
            var a = [];
            $("#j_popup_trans #uploaded-pics img.success").each(function (e, t) {
                a.push($(t).data("src"))
            });
            if (!e || !e.length) {
                Buff.toast(i18n("please_enter_pricing"), {type: "error"});
                return
            }
            if ($(".upload-item:not(.success)").length > 0) {
                Buff.toast(i18n("a_picture_is_not_uploaded"), {type: "error"});
                return
            }
            if (y(e, true) == false) {
                return
            }
            sendRequest("/api/market/sell_order/create/bundle", {
                method: "POST",
                dataType: "json",
                data: {game: g.game, backpack_ids: f(), price: e, description: t, images: a},
                success: function (e) {
                    if (e.code !== "OK") {
                        Buff.toast(e.error, {type: "error"})
                    } else {
                        Buff.toast(i18n("create_a_package_of_trading"), {type: "success"});
                        c = {};
                        w();
                        Popup.hide()
                    }
                }
            })
        });
        $("#private-shelve").click(function () {
            if (!$(this).data("has-perm")) {
                Buff.toast(i18n("private_transaction_within_the_test"), {type: "warning"});
                return
            }
            var e = f();
            if (e.length < 1) {
                Buff.toast(i18n("please_choose_to_be_a"));
                return
            }
            d = [{price: 0}];
            var t = 0;
            for (var a = 0; a < e.length; a++) {
                t += parseFloat(s[n[e[a]].goods_id].steam_price_cny)
            }
            var i = template_render("bundle_pat", {
                selected: e,
                items: n,
                goods_infos: s,
                sum_price: t,
                isPrivate: true
            });
            $("#popup-container").html(i);
            Popup.show("j_popup_private")
        });
        $(document).on("click", "#j_popup_private .confirm", function () {
            var a = $("#j_popup_private input[name=price]").val();
            if (!a || !a.length) {
                Buff.toast(i18n("please_enter_pricing"), {type: "error"});
                return
            }
            if (y(a, true) == false) {
                return
            }
            if ($(".upload-item:not(.success)").length > 0) {
                Buff.toast(i18n("a_picture_is_not_uploaded"), {type: "error"});
                return
            }
            var i = [];
            $("#j_popup_private #uploaded-pics img.success").each(function (e, t) {
                i.push($(t).data("src"))
            });
            Popup.hide();
            var e = function (e) {
                sendRequest("/api/market/sell_order/create/private/send_authcode", {
                    method: "POST",
                    dataType: "json",
                    showLoading: false,
                    success: function () {
                        if (e) {
                            e()
                        }
                    }
                })
            };
            bindCard.show_authcode_popup({
                send_authcode_function: e, verify_authcode_function: function (e, t) {
                    sendRequest("/api/market/sell_order/create/private", {
                        method: "POST",
                        data: {game: g.game, backpack_ids: f(), price: a, authcode: e, images: i},
                        success: function (e) {
                            if (e.code !== "OK") {
                                Buff.toast(e.error, {type: "error"})
                            } else {
                                t();
                                $("#j_popup_private-link").find(".i_Text").text(e.data.link);
                                $("#j_popup_private-link").find(".i_Btn_main").click(function () {
                                    setClipboard(e.data.link);
                                    Buff.toast(i18n("replicated"), {type: "success"})
                                });
                                Popup.show("j_popup_private-link");
                                c = {};
                                w()
                            }
                        }
                    })
                }, mobile: $("#mobile").text(), authcode_length: 4, popup_id: "j_popup_private-check"
            });
            e()
        });
        $(document).on("click", ".overpage-del", function () {
            delete c[$(this).data("id")];
            $(this).parent().remove();
            h(true);
            k();
            m()
        });
        gallery.init()
    };
    return {init: P}
};
var storeInfo = function () {
    var a = function () {
        $("body").on("focus", ".timepicker input", function () {
            if ($(this).parent().hasClass("disabled")) {
                $(this).blur();
                return false
            } else {
                var e = $(".timepicker input").index(this);
                $(".timepicker-drop").eq(e).show()
            }
        }).on("blur", ".timepicker input", function () {
            var t = this;
            setTimeout(function () {
                var e = $(".timepicker input").index(t);
                $(".timepicker-drop").eq(e).hide()
            }, 200)
        }).on("keypress", ".timepicker input", function () {
            return false
        }).on("click", ".timepicker-drop li", function () {
            $(this).addClass("on").siblings().removeClass("on");
            var e = $(this).parent().attr("data-for");
            $("#" + e).val($(this).html())
        }).on("change", "#j_autoClose", function () {
            if ($(this).attr("value") != "") {
                $("#j_timepicker").removeClass("disabled")
            } else {
                $("#j_timepicker").addClass("disabled")
            }
        }).on("click", "#set_store_name, #modify_store_name", function () {
            $("#store_name").find(".store_name_tab1").hide();
            $("#store_name").find(".store_name_tab2").show();
            $("#store_name_input").val($("span.store_name_span").attr("pre_text"))
        }).on("click", "#change_store_name_cancel", function () {
            $("#store_name").find(".store_name_tab1").show();
            $("#store_name").find(".store_name_tab2").hide()
        }).on("click", "#change_store_name_confirm", function () {
            var t = $("#store_name_input").val();
            if (!t) {
                Buff.toast(i18n("please_input_store_name"));
                return
            }
            if ($("span.store_name_span").attr("pre_text") == t) {
                Buff.toast(i18n("have_not_modify_store_name"));
                return
            }
            var a = function (e) {
                sendRequest("/api/market/user_store/change_name", {
                    method: "POST",
                    data: {name: t, cdkey_id: e},
                    success: function (e) {
                        if (e.code === "OK") {
                            $("#store_name").find(".store_name_tab1").show();
                            $("#store_name").find(".store_name_tab2").hide();
                            $("#store_name_input").val("");
                            $("span.store_name_span").text(t);
                            $("span.store_name_span").attr("has_set", t);
                            $("span.store_name_span").attr("pre_text", t);
                            Buff.toast(i18n("set_success"), {type: "success"})
                        } else {
                            Buff.toast(e.error, {type: "error"})
                        }
                    }
                })
            };
            if (!$("span.store_name_span").attr("has_set")) {
                a();
                return
            }
            Buff.alert({
                title: i18n("prompt"), message: i18n("determine_use_store_name_coupon"), success: function () {
                    sendRequest("/api/activity/coupon/my/", {
                        method: "GET",
                        data: {state: "unuse", coupon_type: "store_rename"},
                        success: function (e) {
                            if (e.data && e.data.items.length == 0) {
                                Buff.toast(i18n("please_exchange_store_name_coupon_at_app"));
                                return
                            }
                            a(e.data.items[0].id)
                        }
                    })
                }
            })
        });
        $("#j_popup_shop a.confirm").click(function () {
            var e = $("#j_autoClose").attr("value") || "0";
            var t = $("#j_input-hour").val();
            var a = $("#j_input-minute").val();
            if (e !== "0" && (!t || !a)) {
                Buff.toast(i18n("please_enter_the_auto_logoff"));
                return
            }
            sendRequest("/api/market/user_store/change_state", {
                method: "POST",
                data: {
                    state: $("#j_storeState").attr("value"),
                    auto_offline: e,
                    auto_offline_hour: t,
                    auto_offline_minute: a
                },
                success: function (e) {
                    if (e.code === "OK") {
                        Popup.hide();
                        Buff.toast(i18n("set_success"), {type: "success"});
                        if ($("#j_storeState").attr("value") == 0) {
                            $(".has-store, .icon-store").removeClass("store-offline").addClass("store-online");
                            $(".c_Yellow.offline_tips").hide();
                            $(".c_Yellow.deliver_tips").show()
                        } else {
                            $(".has-store, .icon-store").removeClass("store-online").addClass("store-offline")
                        }
                    } else {
                        Buff.toast(e.error, {type: "error"})
                    }
                }
            })
        });
        $("#store_name").find(".store_name_tab1").show();
        $("#store_name").find(".store_name_tab2").hide()
    };
    var e = function () {
        sendRequest("/api/market/user_store/info", {
            method: "GET", data: {user_id: g.user.id}, success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
                $("#j_popup_shop").remove();
                var t = template_render("shop_popup_tmpl", e.data);
                $("body").append(t);
                a();
                Popup.show("j_popup_shop")
            }
        })
    };
    return {init: a, showPopup: e}
};
var buyingToCreate = function () {
    var e = g.game;
    var t = function () {
        $("#j_list_card").showLoading();
        var e = getParams();
        e.page_size = 70;
        sendRequest("/api/market/goods/all", {
            data: e, method: "GET", showLoading: false, success: function (e) {
                var t = template_render("goods_list_pat", e.data);
                $("#j_list_card").html(t);
                renderPagination({
                    total_count: e.data.total_count,
                    page_size: e.data.page_size,
                    page_num: e.data.page_num,
                    show_size_select: false,
                    size_selects: [70, 140, 210],
                    onPageClick: function (e, t) {
                        t.preventDefault();
                        updateSearchPage("page_num", e);
                        $("html,body").scrollTop(0)
                    }
                })
            }, complete: function () {
                $("#j_list_card").removeLoading()
            }
        })
    };
    var a = function () {
        t();
        $(document).on("click", "li.salable a.goods_link", function (e) {
            e.stopPropagation()
        })
    };
    return {init: a}
};
var buyingSupplied = function (e) {
    var r = g.game;
    var t = function () {
        $(".with-gallery").click(function () {
            var e = $(".with-gallery").index(this);
            t(e)
        });
        $(".j_gallery_handler").click(function () {
            var e = $(".j_gallery_handler").index(this);
            t(e)
        });
        var t = function (e) {
            var a = $(".j_gallery_handler").eq(e);
            var i = $(".tr_gallery").eq(e).find("td");
            if (i.html()) return;
            i.find("td").showLoading();
            sendRequest("/api/market/buy_order/supplied/bill_orders", {
                data: {
                    game: r,
                    buy_order_id: $(a).data("orderid")
                }, method: "GET", showLoading: false, success: function (e) {
                    e.data.goods = {
                        icon_url: $(a).data("goods-icon-url"),
                        rarity: $(a).data("goods-rarity"),
                        name: $(a).data("goods-name")
                    };
                    var t = template_render("supplied_bill_orders_pat", e.data);
                    i.html(t)
                }, error: function (e) {
                    Buff.toast(e.error, {type: "error"});
                    i.removeLoading()
                }
            })
        };
        var a = function (e) {
            $("span.count-down").each(function () {
                var e = $(this).data("count-down-format") || "HH:mm:ss";
                var t = $(this).data("expire");
                $(this).data("expire", t - 1);
                var t = parseInt(t);
                var a = $(this).data("action") + i18n("timeout");
                if (t > 0) {
                    if (e != "HH:mm:ss" && t < 86400) {
                        t = t * 1e3;
                        a = ($(this).data("prefix") || "") + moment.utc(t).format(e)
                    } else {
                        a = ($(this).data("prefix") || "") + convertTime(t)
                    }
                } else {
                    $(".hide-when-expire").hide()
                }
                $(this).html(a)
            });
            if (e == true) setTimeout(function () {
                a(true)
            }, 1e3)
        };
        a(true)
    };
    return {init: t}
};
var userStore = function (t, a, i) {
    var r = function () {
        $("#recent-deal-container").showLoading();
        sendRequest("/api/market/shop/" + t + "/bill_order", {
            method: "GET",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    e.data = {items: []}
                }
                $("#recent-deal-container").html(template_render("recent_deal_template", e.data))
            }
        })
    };
    var n = function () {
        $("#recommend-container").showLoading();
        sendRequest("/api/market/shop/" + t + "/featured", {
            method: "GET",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    e.data = {items: []}
                }
                $("#recommend-container").html(template_render("recommend_template", e.data));
                if (e.data.items.length) {
                    $(".featured").show();
                    setShopRecommend()
                }
            }
        })
    };
    var o = function () {
        var e = getParamsFromHash();
        $("#orders-container").showLoading();
        sendRequest("/api/market/shop/" + t + "/sell_order", {
            data: e,
            method: "GET",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    e.data = {items: []}
                }
                PreviewScreenShotsDataGenerator(OriginConst.STORE).process(e.data.items, e.data.preview_screenshots.bg_img || "", "my_shop_selling", 14);
                $("#orders-container").html(template_render("sell_order_template", e.data));
                PreviewScreenShots().init("my_shop_selling", e.data.preview_screenshots["top_bookmark"]);
                $("img.lazy").lazyload();
                if (e.data.items) {
                    renderPagination({
                        total_count: e.data.total_count,
                        page_size: e.data.page_size,
                        page_num: e.data.page_num,
                        show_size_select: false,
                        onPageClick: function (e, t) {
                            t.preventDefault();
                            updateHash("page_num", e);
                            window.scrollTo(0, 0)
                        }
                    })
                }
            }
        })
    };
    var s = function () {
        var e = getParamsFromHash();
        $("#orders-container").showLoading();
        sendRequest("/api/market/shop/" + t + "/buy_order", {
            data: e,
            method: "GET",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    e.data = {items: []}
                }
                $("#orders-container").html(template_render("buy_order_template", e.data));
                if (e.data.items) {
                    renderPagination({
                        total_count: e.data.total_count,
                        page_size: e.data.page_size,
                        page_num: e.data.page_num,
                        show_size_select: false,
                        onPageClick: function (e, t) {
                            t.preventDefault();
                            updateHash("page_num", e);
                            window.scrollTo(0, 0)
                        }
                    })
                }
            }
        })
    };
    var _ = function () {
        var e = getParamsFromHash();
        $(".store-game-selector").parent().removeClass("on");
        $(".store-game-selector[data-game=" + e.game + "]").parent().addClass("on");
        $("#item-filters-container").html(template_render(e.game + "_filters_template", {}));
        Buff.initSelect(".w-Select");
        Buff.initSelectMulti(".w-Select-Multi");
        $("#tab-selector > li").removeClass("on");
        $("#tab-selector > li[data-tab=" + e.tab + "]").addClass("on");
        if (e.tab == "buying") {
            s()
        } else {
            o()
        }
    };
    var e = function () {
        normalBuy(a).init();
        supplySell(a).init();
        gameNavigator.setKeepParams(["user_id"]);
        $("#j_mw").change(function () {
            $(".shop-info-wrap").hide();
            $(".shop-info-wrap." + $(this).attr("value")).show()
        });
        r();
        n();
        var e = getParamsFromHash();
        if (!e.tab) {
            e.tab = "selling"
        }
        if (!e.game) {
            e.game = i
        }
        updateHashData(e);
        _();
        $("#tab-selector > li").click(function () {
            if ($(this).hasClass("on")) return;
            updateHashData({tab: $(this).data("tab"), page_num: 1})
        });
        $(".store-game-selector").click(function () {
            if ($(this).parent().hasClass("on")) return;
            var e = $(this).data("game");
            var t = getParamsFromHash();
            for (key in t) {
                if (key !== "tab" && key !== "sort_by" && key !== "mode") {
                    t[key] = ""
                }
            }
            t.game = e;
            updateHashData(t)
        });
        $(window).on("hashchange", function () {
            _()
        });
        window.updateSearch = function (e, t) {
            updateHash(e, t);
            updateHash("page_num", 1)
        };
        window.updateSearchData = function (e) {
            e.page_num = 1;
            updateHashData(e)
        }
    };
    return {init: e}
};
var bundleList = function () {
    var r = g.game;
    var e = BuffConfig.MAX_SELL_PRICE;
    var a = BuffConfig.MIN_PRICE;
    var n = false;
    var s = [];
    var o = function (e, t) {
        if (typeof e == "string" && e.length == 0 || typeof e == "object" || isNaN(e)) {
            if (t) {
                Buff.toast(i18n("there_goods_is_not_input"), {type: "error"})
            }
            return false
        }
        e = parseFloat(e);
        if (e < a) {
            if (t) {
                Buff.toast(i18n("price_must_be_greater_than") + a)
            }
            return false
        }
        return true
    };
    var t = function () {
        if (n == true) {
            n = false
        } else {
            return
        }
        var e = [];
        var t = [];
        var a = 0;
        for (var i = 0; i < s.length; i++) {
            if (!s[i]) continue;
            if (s[i].price > 0) {
                if (o(s[i].price, false) == false) {
                    return
                }
                t.push(s[i].goods_id);
                e.push(s[i].price);
                a += s[i].price
            }
        }
        if (e.length < 1) {
            $("span.sale_fee").html("￥0");
            $("span.real_income").html("￥0");
            return
        }
        sendRequest("/api/market/batch/fee", {
            data: {game: r, prices: e.join(","), goods_ids: t.join(",")},
            dataType: "json",
            method: "GET",
            showLoading: false,
            success: function (e) {
                if (e.code == "OK") {
                    var t = e.data.total_fee;
                    $("span.sale_fee").html("￥" + t);
                    $("span.real_income").html(formatPriceYuan("" + (a - parseFloat(t)).toFixed(2)))
                } else {
                    Buff.toast(e.error, {type: "error"})
                }
            }
        })
    };
    var i = function () {
        gameNavigator.setKeepParams(["mode"]);
        $(".cancel-bundle").click(function () {
            var t = $(this).parents("tr").data("orderid");
            var e = getParams().mode == 4 ? i18n("private_transactions") : i18n("package_deal");
            Buff.alert({
                title: i18n("confirm_to_cancel_the_transaction"),
                message: i18n("the_shelves_after_the_goods") + e + "?",
                success: function () {
                    sendRequest("/api/market/sell_order/cancel", {
                        method: "POST",
                        data: {sell_orders: [t], game: g.game},
                        success: function (e) {
                            if (e.code !== "OK") {
                                Buff.toast(e.error, {type: "error"});
                                return
                            }
                            if (e.data[t] !== "OK") {
                                Buff.toast(e.data[t], {type: "error"});
                                return
                            }
                            Buff.toast(i18n("shelves_successful"), {type: "success"});
                            setTimeout(function () {
                                window.location.reload()
                            }, 1e3)
                        }
                    })
                }
            })
        });
        $(".edit-bundle").click(function () {
            s = [{price: 0}];
            var o = $(this).parents("tr").data("orderid");
            sendRequest("/api/market/bundle_detail/" + o, {
                data: {game: g.game},
                method: "GET",
                showLoading: false,
                success: function (t) {
                    if (t.code !== "OK") {
                        Buff.toast(t.error, {type: "error"});
                        return
                    }
                    var a = [];
                    var i = {};
                    var r = 0;
                    t.data.items.forEach(function (e) {
                        a.push(e.assetid);
                        i[e.assetid] = {asset_info: e, goods_id: e.goods_id};
                        r += parseFloat(t.data.goods_infos[e.goods_id].steam_price_cny)
                    });
                    var e = template_render("bundle_pat", {
                        selected: a,
                        items: i,
                        goods_infos: t.data.goods_infos,
                        sum_price: r,
                        isChange: 1
                    });
                    $("#popup-container").html(e);
                    Popup.show("j_popup_trans");
                    $("#j_popup_trans input[name=price]").val(t.data.price).trigger("input").trigger("change");
                    $("#j_popup_trans input[name=description]").val(t.data.description).trigger("input").trigger("change");
                    var n = bundleSell();
                    (t.data.images || []).forEach(function (e) {
                        n.addUploadItem(e)
                    });
                    $("#j_popup_trans .confirm").attr("data-orderid", o)
                },
                error: function () {
                    Buff.toast(i18n("get_the_package_deal_failed"), {type: "error"})
                }
            })
        });
        $(document).on("click", "#j_popup_trans .confirm", function () {
            var e = $("#j_popup_trans input[name=price]").val();
            var t = $("#j_popup_trans input[name=description]").val();
            if (!e || !e.length) {
                Buff.toast(i18n("please_enter_pricing"), {type: "error"});
                return
            }
            var a = [];
            $("#j_popup_trans #uploaded-pics img.success").each(function (e, t) {
                a.push($(t).data("src"))
            });
            if ($(".upload-item:not(.success)").length > 0) {
                Buff.toast(i18n("a_picture_is_not_uploaded"), {type: "error"});
                return
            }
            var i = $(this).data("orderid");
            sendRequest("/api/market/sell_order/change", {
                method: "POST",
                dataType: "json",
                data: {game: g.game, sell_orders: [{sell_order_id: i, price: e, desc: t, images: a}]},
                success: function (e) {
                    if (e.code !== "OK") {
                        Buff.toast(e.error, {type: "error"})
                    } else {
                        Buff.toast(i18n("modify_the_success"), {type: "success"});
                        setTimeout(function () {
                            window.location.reload()
                        }, 1e3)
                    }
                }
            })
        });
        $(document).on("mousemove", "#j_popup_trans", function () {
            t()
        });
        $(document).on("input", "#j_popup_trans input[name=price]", function () {
            var e = $(this).data("index") - 1;
            var t = parseFloat($(this).val());
            if (o($(this).val())) {
                $(this).removeClass("i_Text_error")
            } else {
                $(this).addClass("i_Text_error")
            }
            s[e].price = t;
            n = true
        });
        $(document).on("change", "#j_popup_trans input[name=price]", function () {
            var e = parseFloat($(this).val());
            if (o($(this).val(), true)) {
                t()
            }
        });
        $(document).on("click", ".copy-private-link", function () {
            setClipboard($(this).data("link"));
            Buff.toast(i18n("replicated"), {type: "success"})
        })
    };
    return {init: i}
};
var bundleSell = function (r) {
    var e = [];
    var n = 5;
    var o = function (e) {
        if (e.indexOf("?") != -1) {
            return e
        }
        return e + "?fop=imageView/0/w/96/h/96"
    };
    var s = function (e) {
        var t = $("<div />", {class: "upload-item"});
        t.append($("<img />"));
        t.append($('<a href="javascript:;" class="delete-upload-img"><i class="icon icon_delete"></i></a>'));
        t.append($('<div class="upload-single-progressing"><span>0%</span></div>'));
        t.append($('<div class="upload-single-fail"><span>重试</span></div>'));
        $("#uploaded-pics").append(t);
        var a = parseInt($("#uploaded-count").text()) + 1;
        $("#uploaded-count").text(a);
        if (a >= n) {
            $("#upload-bundle-img-btn").hide();
            $("#click-to-upload").hide()
        }
        if (e) {
            t.find("img").addClass("success").attr("src", o(e)).data("src", e);
            t.addClass("success")
        } else {
            t.addClass("progressing")
        }
        return t
    };
    var _ = function (e) {
        var a = s(undefined);
        var t = new FileReader;
        t.onload = function (e) {
            a.find("img").attr("src", e.target.result)
        };
        t.readAsDataURL(e);
        var i = {
            file: e, upload_url: r.url, max_file_size: r.max_size, token: r.token, callback: function (e) {
                a.find("img").addClass("success").attr("src", o(e.url)).data("src", e.url);
                a.removeClass("progressing").addClass("success")
            }, onprogress: function (e) {
                if (e.lengthComputable) {
                    var t = (e.loaded / e.total * 100).toFixed(2);
                    a.find(".upload-single-progressing").text(t + "%")
                }
            }, error: function (e) {
                Buff.toast(e, {type: "error"});
                a.removeClass("progressing").addClass("fail");
                a.find(".upload-single-fail span").css("cursor", "pointer").off("click").on("click", function () {
                    a.removeClass("fail").addClass("progressing");
                    uploadFile(i)
                })
            }
        };
        uploadFile(i)
    };
    var t = function () {
        $(document).on("click", "#upload-bundle-img", function () {
            $(this).val("")
        });
        $(document).on("change", "#upload-bundle-img", function (e) {
            var t = e.target.files;
            var a = t.length + $("#uploaded-pics img").length;
            if (a > n) {
                Buff.toast("最多上传" + n + "张图片", {type: "error"});
                return
            }
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                _(r)
            }
        });
        $(document).on("click", ".delete-upload-img", function () {
            $(this).parents(".upload-item").remove();
            $("#uploaded-count").text(parseInt($("#uploaded-count").text()) - 1);
            $("#upload-bundle-img-btn").show();
            $("#click-to-upload").show()
        });
        $(document).on("click", "#upload_file_label", function () {
            $("#upload-bundle-img").click()
        })
    };
    return {addUploadItem: s, init: t}
};
var evaluation = function () {
    var o = null;
    var s = function () {
        var e = localStorage.getItem("evaluation_history");
        if (e) {
            return e.split(",")
        } else {
            return []
        }
    };
    var _ = function (e) {
        var t = s();
        if (t.indexOf(e) == -1) {
            t.unshift(e);
            localStorage.setItem("evaluation_history", t)
        }
    };
    var c = function (e) {
        var t = s();
        var a = [];
        for (var i = 0; i < t.length; i++) {
            if (t[i] != e) a.push(t[i])
        }
        localStorage.setItem("evaluation_history", a)
    };
    var e = function (r, e) {
        o = e;
        var t = getParamsFromHash();
        for (var a in t) {
            if (["min_price", "max_price", "search"].indexOf(a) > -1) {
                $("input[name=" + a + "]").val(t[a])
            } else if (a == "category_group") {
                Buff.setCompValue("search-category", t[a])
            } else {
                Buff.setCompValue("search-" + a, t[a])
            }
        }
        $(document).on("focus", "input[name=steamid]", function () {
            var e = s();
            var t = "";
            for (var a = 0; a < e.length; a++) {
                t += format_html('<li><div class="steamid-item"><%= item %></div><div class="steamid-delete icon icon_delete"></div></li>', {item: e[a]})
            }
            $(".steamid-history ul").html(t);
            $(".steamid-history").css({left: $(this).offset().left + "px"});
            $(".steamid-history").show()
        });
        $(document).on("blur", "input[name=steamid]", function () {
            setTimeout(function () {
                $(".steamid-history").hide()
            }, 200)
        });
        $(document).on("click", ".steamid-history li", function () {
            var e = $(this).find(".steamid-item").text();
            $("input[name=steamid]").val(e)
        });
        $(document).on("click", ".steamid-history li .steamid-delete", function (e) {
            e.stopPropagation();
            var t = $(this).parent().find(".steamid-item").text();
            c(t)
        });
        var n = getParams();
        $(document).on("change", ".w-Select_game", function () {
            var e = getParamsFromHash();
            for (var t in e) {
                e[t] = ""
            }
            updateHashData(e);
            var a = {game: $(this).attr("value"), steamid: $("input[name=steamid]").val()};
            updateSearchData(a)
        });
        $(document).on("change", ".w-Select:not(.w-Select_game)", function () {
            updateHash($(this).attr("name"), $(this).attr("value"))
        });
        $(document).on("change", ".w-Tag", function () {
            updateHash($(this).attr("name"), $(this).attr("value"))
        });
        $(document).on("change", ".w-SelHero", function () {
            updateHash("hero", $(this).attr("value"))
        });
        $(document).on("change", ".w-Search input", function () {
            updateHash("search", $(this).val())
        });
        $(document).on("change", "input[name=min_price]", function () {
            updateHash("min_price", $(this).val())
        });
        $(document).on("change", "input[name=max_price]", function () {
            updateHash("max_price", $(this).val())
        });
        $(document).on("click", ".w-Counter-pannel .i_Btn_sub", function () {
            updateHashData({min_price: "", max_price: ""})
        });
        $(document).on("change", ".w-Select-Multi", function () {
            var e = $(this).attr("name");
            if (e == "rarity") {
                var t = $(this).attr("value");
                if (typeof t != "undefined" && t != "0") {
                    updateHashData({rarity: t})
                }
                return
            }
            var a = $(".w-Select-Multi").attr("value");
            if (typeof a != "undefined") {
                var i = $('.w-Select-Multi h6[value="' + a + '"]').attr("value");
                if (a == i) {
                    updateHashData({category_group: a, category: ""})
                } else {
                    updateHashData({category_group: "", category: a})
                }
            }
        });
        $(document).on("click", "#btn-refresh", function () {
            i(null, 1)
        });
        Buff.pricePatten("input[name=min_price]");
        Buff.pricePatten("input[name=max_price]");
        var i = function (e, t) {
            var a = n.steamid;
            $("#j_list_card").showLoading();
            var i = getParamsFromHash();
            i.game = r;
            i.steamid = a;
            i.page_num = e || i.page_num;
            i.force = t || 0;
            if (r == "csgo") {
                i.state = i.state || "all"
            }
            sendRequest("/api/market/evaluation", {
                data: i,
                dataType: "json",
                method: "GET",
                showLoading: false,
                timeout: BuffConfig.STEAM_TIMEOUT,
                ignoreCode: ["Backpack Is Private"],
                success: function (e) {
                    $("#j_list_card").removeLoading();
                    var t = "";
                    if (e.code == "OK") {
                        $("#total-count").text(e.data.total_count);
                        $("#total-value").text("$" + (e.data.total_price / 100).toFixed(2));
                        t = template_render("evaluation_card_list_pat", e.data);
                        if (e.data.items.length > 0) {
                            _(a)
                        }
                        renderPagination({
                            total_count: e.data.total_count,
                            page_size: e.data.page_size,
                            page_num: e.data.page_num,
                            show_size_select: true,
                            onPageClick: function (e, t) {
                                t.preventDefault();
                                updateHash("page_num", e);
                                window.scrollTo(0, 0)
                            }
                        })
                    } else if (e.code == "Backpack Is Private") {
                        t = format_html('<div class="nodata"><p><i class="icon icon_unbind"></i></p><p><%= data.error %></p>', {data: e});
                        if (a == o) {
                            t += format_html('<div><a href="https://steamcommunity.com/my/edit/settings" target="_blank" class="i_Btn i_Btn_hollow"><%= i18n("go_to_settings") %></a></div></div>')
                        } else {
                            t += "</div>"
                        }
                        $(".pager").html("")
                    } else {
                        Buff.toast(e.error)
                    }
                    $("#j_list_card").html(t);
                    $("img.lazy").lazyload()
                },
                error: function (e) {
                    $("#j_list_card").removeLoading()
                }
            })
        };
        if (n.steamid) {
            i()
        }
        $(window).on("hashchange", function () {
            i()
        });
        if (getParams().game == "pubg_recycle") {
            updateSearch("game", "pubg")
        }
    };
    return {init: e}
};
var lockCompensate = function () {
    var a;
    var i = function () {
        var e = getParamsFromHash().page_num || 1;
        var t = {period: a, page_num: e};
        sendRequest("/api/market/lock/goods", {
            data: t,
            dataType: "json",
            method: "GET",
            showLoading: true,
            success: function (e) {
                if (e.data.items.length == 0) {
                    $("#compensate").addClass("i_Btn_disabled")
                }
                var t = template_render("goods_list_pat", e.data);
                $("#j_list_card").html(t);
                renderPagination({
                    total_count: e.data.total_count,
                    page_size: e.data.page_size,
                    page_num: e.data.page_num,
                    show_size_select: false,
                    size_selects: [70, 140, 210],
                    onPageClick: function (e, t) {
                        t.preventDefault();
                        updateHash("page_num", e);
                        i()
                    }
                });
                t = template_render("brief_info_pat", {lock_goods_count: e.data.total_count});
                $(".brief-info").html(t);
                $("#total_compensate_count").text(e.data.total_count);
                $("#total_compensate_price").text(e.data.total_compensation)
            }
        })
    };
    var t = function () {
        sendRequest("/api/market/lock/compensate", {
            data: {period: a},
            dataType: "json",
            method: "POST",
            showLoading: true,
            success: function (e) {
                Buff.toast(i18n("to_receive_the_success"), {type: "success"});
                Popup.hide();
                i()
            }
        })
    };
    var e = function (e) {
        a = e;
        i();
        $("#compensate").click(function () {
            Popup.show("j_popup_compensate")
        });
        $("#j_popup_compensate .i_Btn_main").click(function () {
            if (!$("#agreen").hasClass("on")) {
                Buff.toast(i18n("please_tick_the_below_statement"), {type: "warning"});
                return
            }
            t()
        })
    };
    return {init: e}
}();
// var sellingStat = function (t) {
//     // var a = function (t, a) {
//     //     var e = document.getElementById("myChart");
//     //     var i = [];
//     //     var r = [];
//     //     Object.keys(t).forEach(function (e) {
//     //         i.push(moment(parseInt(e)).format("YYYY-MM-DD"));
//     //         if (a == "amount") {
//     //             r.push(g.currency.rate_base_cny * parseFloat(t[e][a]))
//     //         } else {
//     //             r.push(parseFloat(t[e][a]))
//     //         }
//     //     });
//     //     var n = {
//     //         suggestedMax: Math.max(Math.max.apply(null, r) * 1.03, .01),
//     //         beginAtZero: true,
//     //         callback: function (e) {
//     //             return g.currency.symbol + " " + e
//     //         }
//     //     };
//     //     var o = {
//     //         suggestedMax: Math.max(Math.max.apply(null, r) * 1.03, 1), beginAtZero: true, callback: function (e) {
//     //             return e
//     //         }
//     //     };
//     //     var s = [];
//     //     if (a == "count") {
//     //         s.push({
//     //             label: i18n("sold_number_of_pieces"),
//     //             data: r,
//     //             borderColor: "#426BBB",
//     //             backgroundColor: "#426BBB",
//     //             fill: false,
//     //             borderWidth: 2
//     //         })
//     //     } else {
//     //         s.push({
//     //             label: i18n("sale_amount"),
//     //             data: r,
//     //             borderColor: "#EEA20E",
//     //             backgroundColor: "#EEA20E",
//     //             fill: false,
//     //             borderWidth: 2
//     //         })
//     //     }
//     //     var _ = new Chart(e, {
//     //         type: "line",
//     //         data: {labels: i, datasets: s},
//     //         options: {
//     //             borderWidth: 1,
//     //             tooltips: {
//     //                 mode: "index",
//     //                 axis: "x",
//     //                 displayColors: false,
//     //                 intersect: false,
//     //                 callbacks: {
//     //                     label: function (e, t) {
//     //                         if (a == "count") {
//     //                             return i18n("sale_number_") + e.yLabel
//     //                         } else {
//     //                             return i18n("sale_amount_yuan") + g.currency.symbol + " " + e.yLabel
//     //                         }
//     //                     }
//     //                 },
//     //                 backgroundColor: "rgba(255,255,255,0.8)",
//     //                 titleFontColor: "#000",
//     //                 bodyFontColor: "#000",
//     //                 borderWidth: 1,
//     //                 borderColor: "#7cb5ec"
//     //             },
//     //             layout: {padding: {left: 50, right: 50, top: 0, bottom: 50}},
//     //             legend: {display: false},
//     //             elements: {point: {radius: 3, borderWidth: 0, hitRadius: 6}, line: {tension: 0}},
//     //             scales: {
//     //                 xAxes: [{
//     //                     type: "time",
//     //                     bounds: "ticks",
//     //                     distribution: "linear",
//     //                     ticks: {source: "labels"},
//     //                     time: {unit: "day", displayFormats: {day: "MM-DD"}},
//     //                     gridLines: {}
//     //                 }], yAxes: [{id: "A", position: "left", ticks: a == "count" ? o : n}]
//     //             }
//     //         }
//     //     })
//     // };
//     var e = function () {
//         $("#j_fold-handler").click(function () {
//             if ($(this).hasClass("on")) {
//                 $(this).removeClass("on").find("span").text(i18n("view_more"));
//                 $("#j_sold-count").animate({height: 170}, "fast")
//             } else {
//                 $(this).addClass("on").find("span").text(i18n("click_to_collapse"));
//                 $("#j_sold-count").animate({height: 356}, "fast")
//             }
//         });
//         $("#chart-switcher span").on("click", function () {
//             var e = $(this).data("field");
//             $("#myChart").parent().html('<canvas id="myChart"></canvas>');
//             a(t, e)
//         });
//         a(t, "amount");
//         g.game = getParams().game
//     };
//     return {init: e}
// };
var adjust_edit_entry_display = function (e, t) {
    var a = t.remark;
    e.data("buy_price", t.buy_price);
    if (!a) {
        if (e.hasClass("without-class-change")) {
            e.text("");
            e.hide()
        } else {
            e.removeClass("shalow-btn_long");
            e.addClass("shalow-btn_hidden");
            e.text(i18n("notes"))
        }
    } else {
        if (!e.hasClass("without-class-change")) {
            e.removeClass("shalow-btn_hidden");
            e.addClass("shalow-btn_long");
            e.text(a)
        } else {
            e.text(i18n("notes_desc") + a)
        }
    }
    e.data("content", a);
    if (!e.hasClass("without-class-change")) {
        if (!a) {
            if (e.hasClass("remark_without_stickers")) {
                e.parent().removeClass("tagBoxB_inline")
            } else if (e.hasClass("with-gem-list") && e.hasClass("with-other-gem-list")) {
                e.parent().removeClass("tagBoxB_RT2");
                e.parent().addClass("tagBoxB_RT")
            } else if (e.hasClass("with-gem-list")) {
                e.parent().addClass("tagBoxB_RT")
            } else {
                e.parent().removeClass("tagBoxB_RT")
            }
        } else {
            if (e.hasClass("remark_without_stickers")) {
                e.parent().addClass("tagBoxB_inline")
            } else if (e.hasClass("with-gem-list") && e.hasClass("with-other-gem-list")) {
                e.parent().addClass("tagBoxB_RT2");
                e.parent().removeClass("tagBoxB_RT")
            } else if (e.hasClass("with-gem-list") || e.hasClass("with-other-gem-list")) {
                e.parent().addClass("tagBoxB_RT");
                e.parent().removeClass("tagBoxB_RT2")
            }
        }
    }
};
var sync_container_data = function (e, t) {
    e.data("order-extra", t)
};
var SteamAssetRemark = function () {
    var l = g.game;
    var e = function (e, c) {
        if (!e) {
            e = ".asset-remark-edit"
        }
        if (!c) {
            c = function (e, t, a) {
                sync_container_data(e.parent().parent().parent(), a);
                adjust_edit_entry_display(e, a)
            }
        }
        $(document).off("click", e);
        $(document).on("click", e, function (e) {
            e.preventDefault();
            e.stopPropagation();
            var a = $(this);
            var i = $(this).data("assetid");
            var t = $(this).data("content") || "";
            var r = $(this).data("buy_price") || "";
            var n = "";
            var o = $("#j_popup_common_notes");
            var s = $("#j_popup_common_notes").find("textarea").focus().val(t).trigger("input");
            var _ = o.find(".auto-fit-buy-price");
            _.find("span").text("");
            _.hide();
            _.parent().hide();
            s.val("");
            setTimeout(function () {
                s.val("");
                s.focus().val(t);
                s.trigger("input")
            }, 300);
            if (r) {
                n = "￥" + r + i18n("purchased");
                _.find("span").text(n);
                _.show();
                _.parent().show()
            }
            if (t) {
                o.find(".popup-title").text(i18n("edit_notes"))
            } else {
                o.find(".popup-title").text(i18n("add_notes"))
            }
            _.unbind("click").click(function (e) {
                e.preventDefault();
                var t = s.val();
                if (n) {
                    var a = t + n;
                    if (a.length > 40) {
                        a = a.slice(0, 40)
                    }
                    s.val("");
                    s.focus().val(a);
                    s.trigger("input")
                }
            });
            o.find(".confirm:not(.i_Btn_disabled)").unbind("click").click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (s.val().length > 40) {
                    Buff.toast(i18n("notes_exceed_max_len"), {type: "warning"});
                    return
                }
                var t = [{remark: s.val(), assetid: i}];
                sendRequest("/api/market/steam_asset_remark/change", {
                    data: {game: l, assets: t},
                    method: "POST",
                    timeout: BuffConfig.STEAM_TIMEOUT + 1e3 * t.length,
                    success: function (e) {
                        if (e.code == "OK") {
                            Buff.toast(i18n("submitted"), {type: "success"});
                            var t = s.val();
                            c && c(a, i, {remark: t, buy_price: r});
                            Popup.hide()
                        } else {
                            Buff.toast(e.error || e.code, {type: "warning"})
                        }
                    }
                })
            });
            Popup.show("j_popup_common_notes")
        })
    };
    return {init: e}
};
var SearchBankCardPopup = function () {
    var e = "search_bank_card";
    var t = e + "_pat";
    var a = "j_popup_" + e;
    var r = "#" + a;
    var c = true;
    var l = function (e) {
        return template_render("banks_item_list_pat", {items: e})
    };
    var o = function (e) {
        $(r).remove();
        $("body").append(template_render(t, {banks_item_list: l(e)}));
        Popup.show(a)
    };
    var i = function (s, n) {
        o(s);
        var e = r + " .search input";
        var t = ".bank a";
        var a = r + " .popup-back";
        $(document).off("click", a).on("click", a, function () {
            if (c) {
                Popup.hide();
                n({})
            } else {
                $(e).val("");
                _(l(s));
                c = true
            }
        });
        $(document).off("mouseenter", t).on("mouseenter", t, function () {
            $(this).addClass("bank_hover")
        }).off("mouseleave", ".bank a").on("mouseleave", ".bank a", function () {
            $(this).removeClass("bank_hover")
        });
        $(document).off("click", t).on("click", t, function (e) {
            var t = $(e.target).data("id");
            var a = $(e.target).data("name");
            var i = $(e.target).data("icon");
            var r = $(e.target).data("card_type");
            Popup.hide();
            c = true;
            n({bank_id: t, bank_name: a, icon: i, card_type: r})
        });
        $(document).off("focus", e).on("focus", e, function () {
            $(this).addClass("active_ipt")
        }).off("blur", e).on("blur", e, function () {
            $(this).removeClass("active_ipt")
        });
        var _ = function (e) {
            $(r).find(".bank_list").html(e)
        };
        var i = function (e) {
            c = false;
            var t = [];
            for (var a = 0; a < s.length; a++) {
                var i = s[a];
                for (var r = 0; r < i.items.length; r++) {
                    var n = i.items[r];
                    if (n.bank_name.indexOf(e) !== -1) {
                        t.push(n)
                    }
                }
            }
            var o = "";
            if (t.length == 0) {
                o = l([])
            } else {
                o = l([{groups: i18n("search_result"), items: t}])
            }
            _(o)
        };
        $(document).off("input", e).on("input", e, function () {
            if (this.value) {
                c = false;
                i(this.value)
            } else {
                c = true;
                _(l(s))
            }
        })
    };
    return {show: i}
}();
var CertDlgDecorator = function () {
    var c = function (e, t) {
        if (t && t.length) {
            if (t.includes(e)) {
                return
            }
        }
        var a = {
            epay: {
                html: {title: i18n("auth_entry_bankcard_title"), text: i18n("auth_entry_bankcard_text")},
                container: "#j_popup_card #auth_type_entry",
                li_id_selector: "change_to_card"
            },
            zhima: {
                html: {title: i18n("auth_entry_zhima_title"), text: i18n("auth_entry_zhima_text")},
                container: "#j_popup_zhima #auth_type_entry",
                li_id_selector: "change_to_zhima"
            },
            kyc: {
                html: {title: i18n("auth_entry_kyc_title"), text: i18n("auth_entry_kyc_text")},
                container: "#j_popup_kyc #auth_type_entry",
                li_id_selector: "change_to_kyc"
            },
            manual: {
                html: {title: i18n("auth_entry_manual_title"), text: i18n("auth_entry_manual_text")},
                container: "#j_popup_manual_cert #auth_type_entry",
                li_id_selector: "change_to_manual"
            }
        };
        var i = $(a[e]["container"]);
        i.empty();
        if (i.parent().hasClass("popup-foot-normal")) {
            i.parent().removeClass("popup-foot-normal");
            i.parent().addClass("auth-type-entry");
            i.next().remove();
            i.parent().parent().append('<div class="blank20"></div>')
        }
        for (var r in a) {
            if (r == e) {
                continue
            }
            if (t && t.length && t.includes(r)) {
                continue
            }
            var n = a[r];
            i.append("<li id=" + n.li_id_selector + "><h4>" + n.html.title + '<i class="icon icon_arr_right"></i></h4><p>' + n.html.text + "</p></li>")
        }
    };
    var e = function (_) {
        sendRequest("/api/asset/get_realname/v2/", {
            method: "get", dataType: "json", success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
                var t = e.data.supported_cert_types;
                if (t.length == 0) {
                    return
                }
                var a = {
                    epay: "j_popup_card",
                    zhima: "j_popup_zhima",
                    manual: "j_popup_manual_cert",
                    kyc: "j_popup_kyc"
                };
                var i = [];
                for (var r in a) {
                    if (!t.includes(r)) {
                        i.push(r);
                        continue
                    }
                    if (e.data.cert_type_info.hasOwnProperty(r)) {
                        var n = e.data.cert_type_info[r];
                        var o = false;
                        if (r == "kyc") {
                            if (n.state == "Pending") {
                                o = true
                            } else if (n.left_count == 0) {
                                i.push(r)
                            }
                        } else if (r == "manual") {
                            if (n.state == "PROCESSING") {
                                o = true
                            }
                        }
                        if (o) {
                            location.href = "/user-center/asset/withdraw/";
                            return
                        }
                    }
                }
                var s = undefined;
                if (e.data.name && e.data.id_card) {
                    s = {name: e.data.name, id_card: e.data.id_card}
                }
                _(s, a[e.data.recommended_cert_type], e.data.supported_cert_types.length > 2 ? function (e) {
                    var t = {
                        j_popup_card: "epay",
                        j_popup_zhima: "zhima",
                        j_popup_manual_cert: "manual",
                        j_popup_kyc: "kyc"
                    };
                    c(t[e], i)
                } : null, e.data.manual_cert_state)
            }
        })
    };
    return {init: e}
};
var bindCard = function () {
    var wait = undefined;
    var realname = null;
    var max_bank_card_count = null;
    var auto_highlight_bank_card = false;
    var send_authcode_status = false;
    var is_ejzb = g.switch_ejzb;

    function luhm_check(e) {
        var t = e.length;
        var a = 0;
        for (var i = 1; i < t; i++) {
            if (i % 2 == 1) {
                var r = parseInt(e[t - 1 - i]) * 2;
                a += r > 9 ? r - 9 : r
            } else {
                a += parseInt(e[t - 1 - i])
            }
        }
        if (parseInt(e[t - 1]) == a * 9 % 10) {
            return true
        } else {
            return false
        }
    }

    var countdown_handler = undefined;

    function countdown(e, t) {
        if (wait === undefined) {
            wait = t
        }
        if (wait == 0) {
            e.removeClass("i_Btn_disabled");
            e.text(i18n("get_the_verification_code"));
            wait = t == undefined ? 60 : t;
            countdown_handler = undefined
        } else {
            e.addClass("i_Btn_disabled");
            e.html(format_html('<%= i18n("resend") %><small>(<%= wait %>)</small>', {wait: wait}));
            wait--;
            countdown_handler = setTimeout(function () {
                countdown(e, t)
            }, 1e3)
        }
    }

    var input_error = function (i) {
        var e = function (e, t) {
            var a = $("#" + i);
            if (typeof e == "string") {
                if (t) {
                    t.siblings(".error").text(e)
                } else {
                    a.find(".c_Error").text(e)
                }
            }
            if (t) {
                t.parent().addClass("i_Text_error")
            }
        };
        var t = function (e) {
            var t = $("#" + i);
            if (e) {
                e.siblings(".error").text("");
                e.parent().removeClass("i_Text_error")
            } else {
                t.find(".c_Error").html("&nbsp;")
            }
        };
        var a = function () {
            var e = $("#" + i);
            e.find(".i_Text_error").removeClass("i_Text_error");
            e.find(".i_Text_error").removeClass("extra_i_Text_error");
            e.find(".error").text("");
            e.find(".c_Error").html("&nbsp;")
        };
        return {show: e, clear: t, clear_all: a}
    };
    var check_realname = function (e) {
        if (!e) {
            return i18n("the_real_name_can_not")
        } else if (e.length > 64) {
            return i18n("the_system_supports_the_maximum")
        }
    };
    var check_id_card = function (e) {
        var t = new IDValidator(GB2260);
        if (!e) {
            return i18n("id_number_can_not_be")
        } else if (!t.isValid(e)) {
            return i18n("id_card_number_errors_please")
        }
    };
    var init_card_popup = function (e, t, a) {
        realname = e;
        if (!a) {
            a = function () {
            }
        }
        var h = input_error("j_popup_card");
        var r = {
            data: {}, error_msg: "", show_error: true, add_text_error: function (e) {
                if (this.show_error) {
                    h.show(this.error_msg, e)
                }
            }, get: function (e) {
                var t = $("#j_popup_card");
                var a = false;
                h.clear_all();
                this.error_msg = "";
                var i = t.find("input[name=realname]");
                if (i.length > 0) {
                    var r = i.val().replace(/\s*/g, "");
                    this.error_msg = check_realname(r);
                    if (this.error_msg) {
                        this.add_text_error(i);
                        return undefined
                    }
                    this.data["realname"] = r
                }
                var n = t.find("input[name=id_card]");
                if (n.length > 0) {
                    var o = n.val().replace(/\s*/g, "");
                    this.error_msg = check_id_card(o);
                    if (this.error_msg) {
                        this.add_text_error(n);
                        return undefined
                    }
                    this.data["id_card"] = o
                }
                var s = t.find("input[name=card_number]");
                var _ = s.val().replace(/\s*/g, "");
                var c = t.find("input[name=bank_id]").val();
                var l = t.find("input[name=card_type]").val();
                if (!_) {
                    this.error_msg = i18n("the_bank_card_number_can");
                    this.add_text_error(s);
                    return undefined
                }
                if (!c) {
                    this.error_msg = i18n("currently_does_not_support_the")
                } else if (c != "9998" && c != "9999" && !luhm_check(_)) {
                    this.error_msg = i18n("the_bank_card_number_errors")
                } else if (l == "credit") {
                    this.error_msg = i18n("not_support_credit_card")
                }
                if (this.error_msg) {
                    if (is_ejzb) {
                        s.css("border", "1px solid red");
                        s.addClass("extra_i_Text_error")
                    }
                    this.add_text_error();
                    return undefined
                }
                if (is_ejzb) {
                    s.css("border", "1px solid #e3e3e3")
                }
                this.data["card_number"] = _;
                this.data["bank_id"] = c;
                this.data["card_type"] = l;
                var d = t.find("input[name=mobile]");
                var u = d.val().replace(/\s*/g, "");
                if (!u) {
                    this.error_msg = i18n("the_phone_number_cannot_be")
                } else if (!/^(11|13|14|15|16|17|18|19)\d{9}$/.test(u)) {
                    this.error_msg = i18n("the_phone_number_is_incorrect")
                }
                if (this.error_msg) {
                    this.add_text_error(d);
                    return undefined
                }
                this.data["mobile"] = u;
                if (e) {
                    var p = t.find("input[name=card_id]").val();
                    if (!p) {
                        this.error_msg = i18n("please_get_a_sms_verification")
                    }
                    if (this.error_msg) {
                        this.add_text_error();
                        return undefined
                    }
                    this.data["card_id"] = p;
                    var f = t.find("input[name=authcode]");
                    var m = f.val().replace(/\s*/g, "");
                    if (!m) {
                        this.error_msg = i18n("verification_code_cannot_be_empty")
                    } else if (!/^\d{6}$/.test(m)) {
                        this.error_msg = i18n("the_verification_code_is_incorrect")
                    }
                    if (this.error_msg) {
                        this.add_text_error(f);
                        return undefined
                    }
                    this.data["authcode"] = m;
                    if ($("#agreement").length > 0 && !$("#agreement").hasClass("on")) {
                        this.error_msg = i18n("need_to_first_agree_to");
                        this.add_text_error();
                        return undefined
                    }
                }
                return true
            }, clear: function () {
                $("input[name=card_number]").val("");
                $("input[name=mobile]").val("");
                $("input[name=authcode]").val("")
            }, show_bank_info: function (e, t) {
                if (!t) {
                    t = function () {
                    }
                }
                $("input[name=bank_id]").val(e["bank_id"]);
                $("input[name=card_type]").val(e["card_type"]);
                if (is_ejzb) {
                    $(".card-name").find("span").text(e["bank_name"])
                } else {
                    $(".card-name").find("i").addClass("b_" + e["bank_style_id"]).next().text(e["bank_name"])
                }
                $(".card-name").show()
            }, clear_bank_info: function () {
                $("input[name=bank_id]").val("");
                $("input[name=card_type]").val("");
                var e = $(".card-name").find("i").attr("class");
                $(".card-name").find("i").attr("class", e.replace(/b_\d+/, "")).next().text("");
                $(".card-name").hide()
            }
        };
        var i = function (t) {
            sendRequest("/api/asset/support_banks", {
                method: "get",
                dataType: "json",
                showLoading: false,
                success: function (e) {
                    if (e.code != "OK") {
                        return
                    }
                    t(e.data.banks)
                }
            })
        };
        var n = function (t, a) {
            var t = t || "#manual_select_card";
            var e = t == ".card-name" ? "#manual_select_card" : ".card-name";
            $(t).show();
            $(e).hide();
            if (!a) {
                a = function () {
                }
            }
            $(document).off("click", t).on("click", t, function () {
                i(function (e) {
                    if (e.length == 0) {
                        console.log("get support banks empty");
                        return
                    }
                    Popup.hide();
                    SearchBankCardPopup.show(e, function (e) {
                        Popup.show("j_popup_card");
                        if (!$.isEmptyObject(e)) {
                            $(t).hide();
                            a(e)
                        }
                    })
                })
            })
        };
        var o = function () {
            var t = function (e) {
                r.show_bank_info({
                    bank_id: e["bank_id"],
                    card_type: e["card_type"],
                    bank_name: e["bank_name"],
                    bank_icon: e["icon"]
                })
            };
            n(".card-name", function (e) {
                t(e)
            })
        };
        var s = function (e) {
            var t = function (e) {
                r.show_bank_info({
                    bank_id: e["bank_id"],
                    card_type: e["card_type"],
                    bank_name: e["bank_name"],
                    bank_icon: e["icon"]
                });
                o()
            };
            r.clear_bank_info();
            h.clear();
            var a = e.length;
            if (a < 16 || a > 19) return;
            if (/^6666/.test(e)) {
                if (a != 16 && a != 18) return
            } else if (!luhm_check(e)) {
                if (is_ejzb) {
                    n("", function (e) {
                        t(e)
                    })
                }
                return
            }
            if (is_ejzb) {
                sendRequest("/api/asset/get_card_info/v2", {
                    data: {card_number: e},
                    method: "get",
                    dataType: "json",
                    showLoading: false,
                    success: function (e) {
                        if (e.code == "Card Bank Empty" || e.code == "Card Not Supported") {
                            h.show(e.error, $("input[name=card_number]"));
                            return
                        } else if ($.isEmptyObject(e.data)) {
                            n("", function (e) {
                                t(e)
                            });
                            return
                        }
                        t(e.data)
                    }
                })
            } else {
                sendRequest("/api/asset/get_card_info/", {
                    data: {card_number: e},
                    method: "get",
                    dataType: "json",
                    showLoading: false,
                    success: function (e) {
                        if (e.code != "OK" || $.isEmptyObject(e.data)) {
                            return
                        }
                        r.show_bank_info(e.data)
                    }
                })
            }
        };
        var _ = function () {
            if (r.get(false) == undefined) {
                return
            }
            var e = is_ejzb ? "/api/asset/bind_card/v2" : "/api/asset/bind_card/";
            var t = is_ejzb ? 120 : 60;
            var a = r.data;
            $("input[name=card_id]").val("");
            var i = ENV == "prod" ? 5e3 : 15e3;
            sendRequest(e, {
                data: a, method: "post", dataType: "json", timeout: i, success: function (e) {
                    if (e.code != "OK") {
                        if (e.code == "Card Type Error") {
                            a.add_text_error(i18n("recharge_with_cash_only_support"))
                        } else {
                            Buff.alert({
                                type: "error",
                                title: i18n("bound_to_fail"),
                                message: e.code == "Epay Response Error" ? e.error || i18n("tied_the_card_fails_please") : e.error,
                                hideCancel: true
                            })
                        }
                        return
                    }
                    $("input[name=card_id]").val(e.data.card_id);
                    countdown($("#send_authcode"), t);
                    send_authcode_status = true
                }
            })
        };
        var c = function () {
            if (r.get(true) == undefined) {
                return
            }
            var e = is_ejzb ? "/api/asset/bind_card_verify/v2" : "/api/asset/bind_card_verify/";
            var t = r.data;
            sendRequest(e, {
                data: t, method: "post", dataType: "json", success: function (e) {
                    if (e.code != "OK") {
                        if (e.code == "Card Type Error") {
                            t.add_text_error(i18n("recharge_with_cash_only_support"))
                        } else {
                            Buff.alert({
                                type: "error",
                                title: "绑定失败",
                                message: e.code == "Epay Response Error" ? e.error || i18n("tied_the_card_fails_please") : e.error,
                                hideCancel: true
                            })
                        }
                        return
                    }
                    Buff.toast(i18n("the_binding_is_successful"), {type: "success"});
                    sleep(1e3);
                    Popup.hide();
                    if (!realname) {
                        realname = {name: t["realname"], id_card: t["id_card"]};
                        init_card_popup(realname);
                        wait = 0
                    } else {
                        r.clear();
                        r.clear_bank_info();
                        wait = 0
                    }
                    a(e.data.card_info)
                }
            })
        };
        $("#j_popup_card").remove();
        $("body").append(template_render(is_ejzb ? "popup_ejzb_card_pat" : "popup_epay_card_pat", {
            realname: realname,
            for_cert: t
        }));
        $("input[name=card_number]").unbind().bind("input propertychange", function (e) {
            var t = $(this).val().replace(/\s*/g, "");
            if (t != "" && !/^\d+$/.test(t)) {
                return
            }
            h.clear($(this));
            if (!t) {
                $(".card-tip").hide();
                r.clear_bank_info()
            } else {
                $(".card-tip").show();
                var a = "";
                for (var i = 0; i < t.length; ++i) {
                    if (i % 4 == 3) {
                        a += t[i] + " "
                    } else {
                        a += t[i]
                    }
                }
                $(".card-tip span:first").text(a);
                s(t)
            }
        }).bind("mouseleave focusout", function () {
            $(".card-tip").hide()
        });
        $("#agreement").unbind().bind("click", function (e) {
            if ($(this).hasClass("on")) {
                $(this).removeClass("on");
                $("#bind_card").addClass("i_Btn_disabled")
            } else {
                $(this).addClass("on");
                $("#bind_card").removeClass("i_Btn_disabled")
            }
            e.stopPropagation()
        });
        $("#send_authcode").unbind().bind("click", function () {
            _()
        });
        $("#bind_card").unbind().bind("click", function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return false
            }
            c()
        })
    };
    var get_selected_card = function () {
        var e = $("#bank_card_select .select-list-item.on");
        if (e.length > 0) {
            var t = e.attr("card_id");
            var a = e.attr("mobile");
            var i = e.attr("card_number");
            var r = e.attr("support_withdraw") != undefined ? true : false;
            var n = e.attr("need_verify");
            return {card_id: t, mobile: a, support_withdraw: r, card_number: i, need_verify: n}
        }
    };
    var highlight_card = function () {
        auto_highlight_bank_card = true;
        var e = $("#bank_card_select .selected");
        if (e.find(".bank-name").length > 0) {
            e.addClass("on")
        }
    };
    var cancel_highlight_card = function () {
        auto_highlight_bank_card = false;
        $("#bank_card_select .selected").removeClass("on")
    };
    var init_card_list = function (e, t, r) {
        realname = e;
        max_bank_card_count = t;
        if (!r) {
            r = function () {
            }
        }
        var n = function (e) {
            if (!e) {
                if ($("#bank_card_select .select-list-item").hasClass("on")) {
                    e = $("#bank_card_select .select-list-item.on")
                } else {
                    e = $("#bank_card_select .select-list-item").first()
                }
            }
            var t = $("#bank_card_select .selected");
            if (!e || e.hasClass("card-list-add")) {
                var a = format_html('<i class="icon icon_select_bank_small"></i><span class="c_Gray"><%= i18n("please_select_the_bank_account") %></span>');
                t.html(a);
                return
            }
            var i = e.attr("bank_name");
            var r = e.attr("card_number");
            var a = format_html('<i class="icon icon_select_bank_small"></i><span class="bank-name"><%= name %></span><span class="card-number"><%= number %></span>', {
                name: i,
                number: r
            });
            t.html(a);
            if (auto_highlight_bank_card) {
                t.addClass("on")
            }
            if (!e.hasClass("card-list-add")) {
                e.siblings().removeClass("on");
                e.addClass("on")
            }
        };
        var i = function (e) {
            var t = $(template_render("card_detail_pat", {card: e}));
            $("#bank_card_select .select-list-item:last").before(t);
            $("#bank_card_select").show();
            var a = $("#bank_card_select .select-list-item").length - 1;
            if (max_bank_card_count != null) {
                if (a >= max_bank_card_count) {
                    $("#bank_card_select .card-list-add").hide()
                }
                if (a == 1) {
                    $("#bank_card_select .card-list-add span").text(i18n("add_the_other_card"))
                }
            }
            n(t)
        };
        var a = function (a) {
            var i = a.attr("card_id");
            sendRequest("/api/asset/delete_card/", {
                data: {card_id: i},
                method: "post",
                dataType: "json",
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.alert({type: "error", title: i18n("delete_failed"), message: e.error, hideCancel: true});
                        return
                    }
                    a.remove();
                    $("#bank_card_select .select-list-item[card_id=" + i + "]").remove();
                    if (max_bank_card_count != null) {
                        var t = $("#bank_card_select .select-list-item").length - 1;
                        if (t < max_bank_card_count) {
                            $("#bank_card_select .card-list-add").show()
                        } else {
                            $("#bank_card_select .card-list-add").hide()
                        }
                    }
                    n();
                    r(true)
                }
            })
        };
        $(window).click(function () {
            $("#bank_card_select .select-list").hide()
        });
        $("#bank_card_select .selected, #bank_card_select .icon_expand").click(function (e) {
            e.stopPropagation();
            $("#bank_card_select .select-list").toggle()
        });
        $("#bank_card_select").delegate(".select-list-item", "click", function (e) {
            if ($(this).hasClass("card-list-add")) {
                var t = $("#card-list li").length - 1;
                if (max_bank_card_count != null && t >= max_bank_card_count) {
                    Buff.alert({
                        type: "error",
                        title: i18n("card_limit_is_reached"),
                        message: i18n("pmost_can_only_be_bound") + max_bank_card_count + i18n("cardsp"),
                        hideCancel: true
                    })
                } else {
                    var a = function (e) {
                        i(e);
                        r(true)
                    };
                    show_bind_card_popup(realname, a)
                }
            } else {
                $("#bank_card_select .select-list-item").removeClass("on");
                $(this).addClass("on");
                $("#bank_card_select .select-list").toggle();
                n($(this));
                r()
            }
        });
        n();
        $("#bank_card_select").delegate(".Btn_delete", "click", function () {
            var e = $(this).parent();
            Buff.alert({
                title: i18n("delete_confirmation"),
                message: i18n("sure_you_want_to_delete"),
                success: function () {
                    a(e)
                }
            })
        })
    };
    var init_zhima_cert = function (t) {
        if (!t) {
            t = function () {
            }
        }
        var n = input_error("j_popup_zhima");
        var e = {
            data: {}, error_msg: "", show_error: true, add_text_error: function (e) {
                if (this.show_error) {
                    n.show(this.error_msg, e)
                }
            }, get: function () {
                n.clear_all();
                var e = $("#j_popup_zhima");
                var t = e.find("input[name=realname]");
                var a = t.val().replace(/\s/, "");
                this.error_msg = check_realname(a);
                if (this.error_msg) {
                    this.add_text_error(t);
                    return undefined
                }
                this.data["realname"] = a;
                var i = e.find("input[name=id_card]");
                var r = i.val().replace(/\s/, "");
                this.error_msg = check_id_card(r);
                if (this.error_msg) {
                    this.add_text_error(i);
                    return undefined
                }
                this.data["id_card"] = r;
                if (!$("#zhima-cert-allow-check").hasClass("on")) {
                    this.error_msg = i18n("please_agree_to_the_service");
                    this.add_text_error();
                    return undefined
                }
                return true
            }
        };
        var a = function () {
            if (e.get() == undefined) {
                return
            }
            sendRequest("/api/asset/zhima_cert/", {
                data: e.data,
                method: "post",
                dataType: "json",
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        if (e.code == "Realname Certed") {
                            setTimeout("location.reload();", 2e3)
                        }
                        return
                    }
                    var t = e.data["cert_url"];
                    if (!t) {
                        Buff.toast(i18n("application_authentication_failure_please_contact"), {type: "error"});
                        return
                    }
                    if (getDeviceOS() != "web") {
                        location.href = t;
                        return
                    }
                    $("#zhima-cert-qrcode").empty();
                    new QRCode(document.getElementById("zhima-cert-qrcode"), {text: t, width: 200, height: 200});
                    $("#zhima-cert-qrcode").attr("title", "");
                    Popup.show("j_popup_zhima_cert_qrcode");
                    var a = e.data["zhima_cert_id"];
                    var i = 60;
                    wait_query_handler = setInterval(function () {
                        i -= 1;
                        if (i < 0) {
                            clearInterval(wait_query_handler);
                            wait_query_handler = undefined;
                            console.debug("stop querying state.");
                            return
                        }
                        r(a)
                    }, 5e3)
                }
            })
        };
        var r = function (e) {
            sendRequest("/api/asset/zhima_cert/query/", {
                data: {zhima_cert_id: e},
                method: "get",
                dataType: "json",
                showLoading: false,
                success: function (e) {
                    if (e.data["state"] == 2) {
                        Buff.toast(i18n("the_authentication_is_successful"), {type: "success"});
                        clearInterval(wait_query_handler);
                        wait_query_handler = undefined;
                        t()
                    }
                }
            })
        };
        $("#j_popup_zhima .i_Btn_main").unbind().bind("click", function () {
            a()
        });
        $("#zhima-cert-allow-check").unbind().bind("click", function () {
            if ($(this).hasClass("on")) {
                $(this).removeClass("on");
                $("#j_popup_zhima .i_Btn_main").addClass("i_Btn_disabled")
            } else {
                $(this).addClass("on");
                $("#j_popup_zhima .i_Btn_main").removeClass("i_Btn_disabled")
            }
            event.stopPropagation()
        })
    };
    var init_manual_cert = function (t) {
        if (!t) {
            t = function () {
            }
        }
        var e = {
            data: {}, get: function () {
                var e = $("#j_popup_manual_cert .pic_container").find("img");
                if (e.length < 2) {
                    Buff.toast(i18n("manual_cert_upload_pic"), {type: "error"});
                    return
                }
                this.data = {pictures: []};
                for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    this.data.pictures.push($(a).attr("src"))
                }
                return true
            }
        };
        var a = function () {
            if (e.get() == undefined) {
                return
            }
            Popup.hide();
            sendRequest("/api/asset/manual_cert/", {
                showLoading: true,
                data: {pictures: e.data.pictures.join(",")},
                method: "post",
                dataType: "json",
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    Buff.toast(i18n("manual_cert_finish"));
                    t && t()
                }
            })
        };
        var r = function (e) {
            if (!(e && e.type.match(/\/(bmp|jpeg|png|gif)$/))) {
                Buff.toast(i18n("error_picture"));
                return false
            }
            return true
        };
        $(document).on("change", "#j_popup_manual_cert .upload_file", function (e) {
            var a = this;
            var i = e.target.files;
            if (!(i && i[0] && r(i[0]))) {
                return
            }
            sendRequest("/api/feedback/gen_token", {
                method: "GET", showLoading: true, success: function (e) {
                    var t = {
                        file: i[0],
                        upload_url: e.data.url,
                        max_file_size: e.data.max_size,
                        token: e.data.token,
                        callback: function (e) {
                            $(a).parent().find("div.pic_container").html("");
                            $(a).parent().find("div.pic_container").append(format_html('<img src="<%= url %>" />', {url: e.url}))
                        }
                    };
                    uploadFile(t)
                }
            })
        });
        $(document).on("click", "#j_popup_manual_cert .i_Btn_main", function () {
            a()
        })
    };
    var show_cert_popup = function (n) {
        CertDlgDecorator().init(function (e, t, a, i) {
            var r = function (e) {
                var t = {j_popup_card: "card_bottom_bar", j_popup_zhima: "zhima_bottom_bar"};
                $("#" + e).find(".popup-foot-normal").remove();
                $("#" + e).find(".auth-type-entry").next().remove();
                $("#" + e).find(".auth-type-entry").remove();
                $("#" + e).append(template_render(t[e]))
            };
            init_card_popup(e, true, n);
            init_zhima_cert(n);
            init_manual_cert(n);
            Popup.show(t);
            r(t);
            a && a(t);
            $(document).off("click", "#change_to_zhima").on("click", "#change_to_zhima", function () {
                Popup.hide();
                Popup.show("j_popup_zhima");
                r("j_popup_zhima");
                a && a("j_popup_zhima")
            });
            $(document).off("click", "#change_to_card").on("click", "#change_to_card", function () {
                Popup.hide();
                Popup.show("j_popup_card");
                r("j_popup_card");
                a && a("j_popup_card")
            });
            $(document).off("click", "#change_to_manual").on("click", "#change_to_manual", function () {
                if (i == "PROCESSING") {
                    Buff.toast(i18n("manual_cert_processing"));
                    return
                }
                Popup.hide();
                var e = format_html('                <div class="popup" id="j_popup_manual_cert" style="width: 600px; display: none; margin-left: -300px; margin-top: -302px; z-index: 503;">                    <a class="popup-close" href="javascript:;" onclick="Popup.hide()">×</a>                    <div class="popup-header"><h2><%= i18n("manual_cert_title") %></h2></div>                    <div class="popup-cont">                        <div class="popup-cert-manual">                            <div class="scope-uploads">                                <h4>{{ i18n("manual_cert_please_upload_screenshot") }}</h4>                                <div class="scope-file">                                    <div><img src="https://g.fp.ps.netease.com/market/file/637f33a0672a524042fe1d7adikiEAt804"></div>                                    <div class="scope-upload-btn">                                        <i class="icon icon_upload"></i>                                        <input type="file" class="upload_file">                                        \x3c!-- 以下空 div，用来放上传后的图片预览图 --\x3e                                        <div class="pic_container">                                            \x3c!-- <img src="../images/pics/pic_sample1.jpg"> --\x3e                                        </div>                                    </div>                                </div>                            </div>                            <div class="scope-uploads">                                <h4>{{ i18n("manual_cert_please_upload_passport_pic") }}</h4>                                <div class="scope-file">                                    <div><img src="https://g.fp.ps.netease.com/market/file/637f32c7052dfe3089674a68h6dsurpw04"></div>                                    <div class="scope-upload-btn">                                        <i class="icon icon_upload"></i>                                        <input type="file" class="upload_file">                                        \x3c!-- 以下空 div，用来放上传后的图片预览图 --\x3e                                        <div class="pic_container">                                            \x3c!-- <img src="../images/pics/pic_sample2.jpg"> --\x3e                                        </div>                                    </div>                                </div>                            </div>                            <p class="t_Right">                                <a href="javascript:;" class="i_Btn i_Btn_main">{{ i18n("manual_cert_submit") }}</a>                            </p>                        </div>                    </div>                    <div class="blank20"></div>                </div>                ');
                $("body").append(e);
                Popup.show("j_popup_manual_cert")
            });
            $(document).off("click", "#change_to_kyc").on("click", "#change_to_kyc", function () {
                sendRequest("/api/asset/zignsec/get_url/", {
                    method: "post", dataType: "json", success: function (e) {
                        if (e.code != "OK") {
                            Buff.toast(e.error, {type: "error"});
                            return
                        }
                        openPageOnNewTab(e.data.redirect_url);
                        Popup.hide()
                    }
                })
            })
        })
    };
    var show_bind_card_popup = function (e, t) {
        init_card_popup(e, false, t);
        Popup.show("j_popup_card")
    };
    var show_authcode_popup = function (config) {
        var mobile = config.mobile;
        var send_authcode_function = config.send_authcode_function;
        var verify_authcode_function = config.verify_authcode_function;
        var cancel_function = config.cancel_function;
        var content = config.content;
        var authcode_length = config.authcode_length || 6;
        var popup_id = config.popup_id || "j_popup_authcode";
        var wait_time = 60;
        var $j_popup_authcode = $("#" + popup_id);
        var $authcode = $j_popup_authcode.find("input[name=authcode]");
        eval("var reg = /^\\d{" + authcode_length + "}$/;");
        $authcode.unbind("input").bind("input", function () {
            var e = $(this).val();
            if (reg.test(e)) {
                $j_popup_authcode.find("#verify_authcode").removeClass("i_Btn_disabled")
            } else {
                $j_popup_authcode.find("#verify_authcode").addClass("i_Btn_disabled")
            }
        });
        $j_popup_authcode.find("#resend_authcode").unbind("click").bind("click", function (e) {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            send_authcode_function(function () {
                countdown($j_popup_authcode.find("#resend_authcode"), wait_time)
            }, true);
            e.stopPropagation()
        });
        $j_popup_authcode.find("#verify_authcode").unbind("click").bind("click", function (e) {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            var t = $authcode.val();
            if (!reg.test(t)) {
                Buff.toast(i18n("please_enter_the_verification_code"), {type: "warning"});
                return
            }
            verify_authcode_function(t, function () {
                wait = wait == wait_time ? wait_time : 0;
                Popup.hide();
                countdown_handler = undefined;
                $j_popup_authcode.find("#verify_authcode").addClass("i_Btn_disabled");
                e.stopPropagation()
            })
        });
        $j_popup_authcode.find(".popup-close").unbind("click").bind("click", function () {
            wait = wait == wait_time ? wait_time : 0;
            Popup.hide();
            $j_popup_authcode.find("#verify_authcode").addClass("i_Btn_disabled");
            if (cancel_function) {
                cancel_function()
            }
        });
        $authcode.val("");
        if (content) {
            $j_popup_authcode.find(".popup-desc p:first").text(content)
        } else {
            $j_popup_authcode.find("#mobile").text(mobile)
        }
        Popup.show(popup_id);
        if (countdown_handler === undefined) {
            countdown($j_popup_authcode.find("#resend_authcode"), wait_time)
        }
    };
    return {
        init_card_popup: init_card_popup,
        show_cert_popup: show_cert_popup,
        show_bind_card_popup: show_bind_card_popup,
        show_authcode_popup: show_authcode_popup,
        init_card_list: init_card_list,
        get_selected_card: get_selected_card,
        highlight_card: highlight_card,
        cancel_highlight_card: cancel_highlight_card
    }
}();
var Recharge = function () {
    var r = 5;
    var n = 2e4;
    var o;
    var s = 2;
    var t = 4;
    var _ = 10;
    var c = 13;
    var l = 14;
    var d = function (e, t) {
        sendRequest("/api/asset/recharge/fee/", {
            method: "get",
            data: {amount: e, pay_method: t},
            showLoading: false,
            success: function (e) {
                var t = e.data;
                $("#actual_pay").html(formatPriceNormalYuan(t.amount, true));
                $("#total_fee").html(formatPriceNormalYuan(t.fee, true))
            }
        })
    };
    var a = {
        data: {}, error_msg: "", get: function () {
            var e = false;
            this.error_msg = "";
            var t = $("#amount_list").attr("value");
            if (t == "custom" || t === undefined || t == "") {
                t = parseFloat($("#amount_list input[type=text][name=amount]").val().replace(/[^0-9\.]/g, ""))
            } else {
                $("input[type=text][name=amount]").val("")
            }
            if (isNaN(t)) {
                t = 0
            }
            if (t) {
                this.data["amount"] = t
            } else {
                e = true;
                this.error_msg = i18n("please_enter_or_select_the");
                return undefined
            }
            var a = $("#recharge_method li.on").attr("value");
            if (a) {
                this.data["pay_method"] = parseInt(a)
            } else {
                e = true;
                this.error_msg = i18n("please_select_recharge_way\n");
                return undefined
            }
            d(this.data["amount"], this.data["pay_method"]);
            var i = false;
            if (a == s) {
                i = true
            }
            if (i) {
                var r = bindCard.get_selected_card();
                if (r) {
                    this.data["card_id"] = r.card_id;
                    this.data["mobile"] = r.mobile
                } else {
                    e = true;
                    this.error_msg = i18n("please_select_the_card\n");
                    return undefined
                }
            }
            if (e) {
                return undefined
            }
            return true
        }
    };
    var e = function () {
        if (a.get() == undefined) {
            $("#send_recharge_authcode").addClass("i_Btn_disabled").removeClass("i_Btn_main");
            bindCard.cancel_highlight_card()
        } else {
            $("#send_recharge_authcode").removeClass("i_Btn_disabled").addClass("i_Btn_main");
            bindCard.highlight_card()
        }
    };
    var u = e;
    var p = function (e, t) {
        if (e == undefined) {
            e = 1
        }
        sendRequest("/api/asset/recharge_log/", {
            data: {page_num: e},
            method: "get",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    return
                }
                var t = e.data;
                if (t.length == 0) {
                    $("#recharge_logs .nodata").show()
                } else {
                    var a = $("#recharge_logs .list_tb");
                    a.find('tr:not(":first")').remove();
                    a.append(template_render("recharge_log_pat", {recharge_logs: t["items"]}));
                    a.show()
                }
                t.onPageClick = p;
                renderPagination(t);
                m()
            },
            error: function () {
            }
        })
    };
    var f;
    var m = function (a) {
        var e = "/api/asset/recharge_state_check/?";
        if (a != undefined) {
            e += "recharge_id=" + a
        } else {
            var t = $('#recharge_logs tr[state="CONFIRMING"]');
            if (t.length == 0) {
                return
            }
            var i = [];
            t.each(function () {
                i.push($(this).attr("recharge_id"))
            });
            e += "recharge_id=" + i.join()
        }
        sendRequest(e, {
            method: "get", dataType: "json", showLoading: false, showError: false, success: function (e) {
                if (e.code == "OK") {
                    for (var t in e.data.items) {
                        show_brief_asset();
                        break
                    }
                    if (a && e.data.items.hasOwnProperty(a) && o) {
                        if (e.data.items[a].state[0] == "CONFIRMING") {
                            return
                        }
                        clearInterval(o);
                        o = undefined;
                        Popup.hide();
                        Buff.alert({
                            type: "success",
                            title: i18n("recharge_successful"),
                            message: i18n("recharge_yuan") + e.data.items[a].amount + i18n("the_current_balance_of_dollar") + e.data.cash_amount,
                            hideCancel: true
                        });
                        m()
                    }
                    for (var t in e.data.items) {
                        $("#recharge_logs tr[recharge_id=" + t + "]").replaceWith(template_render("recharge_log_pat", {recharge_logs: [e.data.items[t]]}))
                    }
                }
                if (a === undefined) {
                    f = setTimeout(m, 5e3)
                }
            }
        })
    };
    var h = function () {
        if (a.get() == undefined) {
            Buff.toast(a.error_msg);
            return
        }
        var e = a.data;
        var t = e.amount;
        if (t) {
            if (!$.isNumeric(t)) {
                Buff.alert({
                    type: "error",
                    title: i18n("recharge_failed"),
                    message: i18n("the_amount_of_recharge_need"),
                    hideCancel: true
                });
                return
            }
            if (t > n) {
                Buff.alert({
                    type: "error",
                    title: i18n("recharge_failed"),
                    message: i18n("the_maximum_allowable_amount_of") + n + i18n("yuan"),
                    hideCancel: true
                });
                return
            }
            if (t < r) {
                Buff.alert({
                    type: "error",
                    title: i18n("recharge_failed"),
                    message: i18n("the_minimum_allowable_amount_of") + r + i18n("yuan"),
                    hideCancel: true
                });
                return
            }
        }
        return e
    };
    var v = function () {
        var a = function (e) {
            if (e == s) {
                y()
            } else if ([l, c, t, _].indexOf(e) != -1) {
                w()
            }
        };
        var i = h();
        if (i == undefined) {
            return
        }
        sendRequest("/api/asset/recharge/preview/", {
            data: i,
            method: "POST",
            dataType: "json",
            ignoreCode: ["Recharge Repeat"],
            success: function (e) {
                if (e.code != "OK") {
                    var t = e.confirm_entry;
                    if (t) {
                        Buff.alert({
                            type: "warning",
                            title: e.confirm_entry.title,
                            message: e.confirm_entry.messages,
                            cancelText: e.confirm_entry.button_cancel,
                            confirmText: e.confirm_entry.button_noted,
                            success: function () {
                                a(i.pay_method)
                            }
                        })
                    } else {
                        Buff.toast(e.error)
                    }
                    return
                }
                a(i.pay_method)
            }
        })
    };
    var g = undefined;
    var y = function (t, e) {
        var a = h();
        if (a == undefined) {
            return
        }
        var i = function () {
            bindCard.show_authcode_popup({mobile: a.mobile, send_authcode_function: y, verify_authcode_function: b})
        };
        if (!e) {
            g = undefined
        }
        sendRequest("/api/asset/recharge/", {
            data: a, method: "post", dataType: "json", success: function (e) {
                if (e.code != "OK") {
                    Buff.alert({
                        type: "error",
                        title: i18n("send_a_verification_code_failed"),
                        message: e.code == "Epay Response Error" ? e.error || i18n("the_system_is_busy_please") : e.error,
                        hideCancel: true
                    });
                    return
                }
                if (g === undefined) {
                    i()
                }
                g = e.data.recharge_id;
                if (t) {
                    t()
                }
            }
        })
    };
    var b = function (e, r) {
        if (!g || !e) {
            Buff.toast(i18n("please_get_a_verification_code"));
            return
        }
        sendRequest("/api/asset/recharge_verify/", {
            data: {authcode: e, recharge_id: g},
            method: "post",
            dataType: "json",
            success: function (e) {
                if (e.code != "OK") {
                    Buff.alert({
                        type: "error",
                        title: "支付失败",
                        message: e.code == "Epay Response Error" ? e.error || i18n("the_system_is_busy_you") : e.error,
                        hideCancel: true
                    });
                    return
                }
                $("#amount_list li.on").removeClass("on");
                $("input[type=text][name=amount]").val("");
                $("#recharge_amount").text("");
                var t = g;
                g = undefined;
                u();
                if (r) {
                    r()
                }
                p();
                var a = Buff.alert({
                    title: i18n("being_prepaid_in"),
                    message: i18n("please_be_patient"),
                    hideCancel: true,
                    hideConfirm: true
                });
                if (f) {
                    clearTimeout(f)
                }
                var i = 0;
                o = setInterval(function () {
                    i += 1;
                    if (i <= 10) {
                        $("#" + a + " p").text(i18n("please_wait_patiently_have_been") + i + "s...");
                        m(t)
                    } else {
                        clearInterval(o);
                        o = undefined;
                        Popup.hide();
                        Buff.alert({
                            title: i18n("the_system_is_busy"),
                            message: i18n("you_can_recharge_in_a"),
                            hideCancel: true
                        });
                        m()
                    }
                }, 1e3)
            }
        })
    };
    var w = function () {
        var e = h();
        if (e == undefined) {
            return
        }
        var t = "/api/asset/recharge_alipay_page/";
        if (e.pay_method == _) {
            t = "/api/asset/recharge_pcredit_page/"
        }
        if (e.pay_method == c) {
            t = "/api/asset/recharge_paypal_page/"
        }
        if (e.pay_method == l) {
            t = "/api/asset/recharge_cnp_page/"
        }
        sendRequest(t, {
            data: e, method: "post", dataType: "json", timeout: 3e4, success: function (e) {
                if (e.code != "OK") {
                    Buff.alert({
                        type: "error",
                        title: i18n("recharge_failed"),
                        message: e.code == "Epay Response Error" ? e.error || i18n("the_system_is_busy_please") : e.error,
                        hideCancel: true
                    });
                    return
                }
                location.href = e.data.redirect_url
            }
        })
    };
    var i = function (e) {
        n = e.amount_max;
        r = e.amount_min;
        var a = "input[type=text][name=amount]";
        $("#amount_list").bind("change", function () {
            var e = $(this).find("span.on").attr("value");
            if (e != undefined && e != "custom") {
                $("#amount_list").attr("value", "custom");
                $(a).val(e)
            }
            u()
        });
        var i = false;
        $(a).bind("change paste keyup", function (e) {
            if (parseFloat($(this).val()) > n) {
                if (!i) {
                    $(this).unbind("keypress").bind("keypress", function () {
                        return false
                    });
                    $(this).val(n);
                    i = true
                }
            } else if (i) {
                var t = parseFloat($(this).val());
                if (isNaN(t) || isTextSelected($(a)[0]) || t < n) {
                    $(this).unbind("keypress");
                    Buff.pricePatten(a);
                    i = false
                }
            }
            u()
        }).bind("mouseover", function (e) {
            var t = $("#amount_list span.on");
            if (t.attr("value") == "custom") {
                return false
            }
            t.removeClass("on")
        });
        Buff.pricePatten(a);
        $(a).focus().click();
        $("#recharge_method li").click(function () {
            var e = parseInt($(this).attr("value"));
            if (!e) {
                Buff.toast($(this).attr("title"), {type: "warning"});
                return
            }
            $(this).parent("ul").find("li").removeClass("on");
            $(this).addClass("on");
            if (e == s) {
                $("#recharge_bank_cards").show();
                $("#notice-alipay").hide();
                $("#notice-pcredit").hide();
                $("#notice-bank").show();
                $("#service_fee").hide()
            } else {
                $("#recharge_bank_cards").hide();
                if (e == t) {
                    $("#notice-alipay").show();
                    $("#notice-pcredit").hide();
                    $("#service_fee").hide()
                } else if (e == _) {
                    $("#notice-pcredit").show();
                    $("#notice-alipay").hide();
                    $("#service_fee").show()
                }
                $("#notice-bank").hide()
            }
            u()
        });
        $("#recharge_method li:first").click();
        $("#send_recharge_authcode").click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return false
            }
            v()
        });
        p();
        u();
        bindCard.init_card_list(e.realname, e.max_card_count, u)
    };
    return {init: i, enable_or_disable_button: u}
}();
var Withdraw = function () {
    var u = 10;
    var n = 5e4;
    var p = {};
    var e = null;
    var t = 0;
    var a = null;
    var o = false;
    var s = null;
    var f = null;
    var m = function (e, t, a) {
        var i = function (e, t, a) {
            var i = $("#alipay_received");
            if (e > 0) {
                i.find("span").html(formatPriceNormalYuan(e, true));
                i.css("visibility", "visible")
            } else {
                i.css("visibility", "hidden")
            }
            var r = $("#epay_received");
            if (t > 0) {
                r.find("span").html(formatPriceNormalYuan(t, true));
                r.css("visibility", "visible")
            } else {
                r.css("visibility", "hidden")
            }
            $("#total_fee").html(formatPriceNormalYuan(a, true))
        };
        if (e > 0 && e < u || t > 0 && t < u) {
            return
        }
        sendRequest("/api/asset/withdraw_together/fee/", {
            method: "get",
            data: {epay_amount: t, alipay_amount: e, cdkey_id: a},
            showLoading: false,
            success: function (e) {
                var t = e.data;
                i(t.alipay.real_amount, t.epay.real_amount, t.total.fee);
                s = t
            }
        })
    };
    var _ = function (e) {
        if (e === undefined) {
            e = h(true)
        }
        var t = e.epay_amount;
        var a = e.alipay_amount;
        var i = true;
        var r = true;
        var n = false;
        var o = false;
        var s = $("#epay_received");
        var _ = $("#epay_amount_error");
        var c = $("#alipay_received");
        var l = $("#alipay_amount_error");
        if (t > 0 && t < u) {
            _.text(i18n("less_than") + u + i18n("yuan"))
        } else if (t > p.epay_amount) {
            _.text(i18n("greater_than_the_extraction_amount"))
        } else {
            i = false
        }
        if (i) {
            bindCard.cancel_highlight_card();
            s.css("visibility", "hidden");
            s.parent().removeClass("on");
            _.css("visibility", "visible")
        } else {
            _.css("visibility", "hidden");
            if (t > 0) {
                s.parent().addClass("on");
                bindCard.highlight_card();
                o = true
            } else {
                s.parent().removeClass("on");
                bindCard.cancel_highlight_card()
            }
        }
        if (a > 0 && a < u) {
            l.text(i18n("less_than") + u + i18n("yuan"))
        } else if (a > p.alipay_amount) {
            l.text(i18n("greater_than_the_extraction_amount"))
        } else {
            r = false
        }
        if (r) {
            x();
            c.css("visibility", "hidden");
            c.parent().removeClass("on");
            l.css("visibility", "visible")
        } else {
            l.css("visibility", "hidden");
            if (a > 0) {
                c.parent().addClass("on");
                k();
                n = true
            } else {
                c.parent().removeClass("on");
                x()
            }
        }
        if (!r && !i) {
            m(e["alipay_amount"], e["epay_amount"], e["cdkey_id"])
        }
        var d = false;
        if (a == 0 && t == 0 || r || i) {
            d = true
        } else if (a > 0 && (!e["alipay_account"] && !e["alipay_account_id"])) {
            d = true
        } else if (t > 0 && !e["card_id"]) {
            d = true
        }
        if (d) {
            $("#withdraw_btn").removeClass("i_Btn_main").addClass("i_Btn_disabled")
        } else {
            $("#withdraw_btn").removeClass("i_Btn_disabled").addClass("i_Btn_main")
        }
        if (n && o) {
            $("#remain_withdraw_count_today_span").show();
            $("#remain_withdraw_count_today").text(i18n("remain_withdrawal_count_today") + " " + f["together"])
        } else if (n) {
            $("#remain_withdraw_count_today_span").show();
            $("#remain_withdraw_count_today").text(i18n("remain_withdrawal_count_today") + " " + f["alipay"])
        } else if (o) {
            $("#remain_withdraw_count_today_span").show();
            $("#remain_withdraw_count_today").text(i18n("remain_withdrawal_count_today") + " " + f["epay"])
        } else {
            $("#remain_withdraw_count_today_span").hide();
            $("#remain_withdraw_count_today").text("")
        }
        return !d
    };
    var h = function (e, t) {
        var a = {};
        var i = 0;
        var r = 0;
        $("input[name=alipay_amount],input[name=epay_amount]").each(function () {
            var e = $(this).val();
            e = e.replace(/[^0-9\.]/g, "");
            if (e) {
                e = parseFloat(e)
            } else {
                e = 0
            }
            if ($(this).attr("name") == "alipay_amount") {
                i = e
            } else {
                r = e
            }
        });
        a["alipay_amount"] = i;
        a["epay_amount"] = r;
        var n = bindCard.get_selected_card();
        if (n) {
            a["card_id"] = n.card_id
        }
        var o = C();
        if (o) {
            a["alipay_account"] = o.account;
            a["alipay_account_id"] = o.account_id
        }
        var s = P();
        if (s) {
            a["cdkey_id"] = s["cdkey_id"]
        }
        if (e) {
            return a
        }
        if (t) {
            if (_(a)) {
                return a
            }
            return undefined
        }
        setTimeout(_, 200)
    };
    var i = function () {
        $("input[name=alipay_amount],input[name=epay_amount]").each(function () {
            $(this).val("")
        });
        _()
    };
    var c = function () {
        return h(false, true)
    };
    var r = function () {
        h(false, false)
    };
    var l = r;
    var d = function (e) {
        if (e.epay_amount > 0 && e.epay_amount < u || e.alipay_amount > 0 && e.alipay_amount < u) {
            Buff.alert({
                type: "error",
                title: i18n("withdrawal_failure"),
                message: i18n("withdrawal_minimum_amount_is") + u + i18n("yuan"),
                hideCancel: true
            });
            return false
        }
        if (e.epay_amount + e.alipay_amount > n) {
            Buff.alert({
                type: "error",
                title: i18n("withdrawal_failure"),
                message: i18n("withdraw_the_maximum_amount_of") + n + i18n("yuan"),
                hideCancel: true
            });
            return false
        }
        return true
    };
    var v = false;
    var g = function (t, e) {
        var a = c();
        var i = function (e) {
            bindCard.show_authcode_popup({
                send_authcode_function: g,
                verify_authcode_function: y,
                content: i18n("to_guarantee_your_safety_of") + e + i18n("receive_sms_verification_code"),
                authcode_length: 4
            })
        };
        if (!e) {
            v = false
        }
        sendRequest("/api/asset/withdraw_together/authcode/", {
            data: a,
            method: "post",
            dataType: "json",
            success: function (e) {
                if (e.code != "OK") {
                    if (e.code == "Withdraw Alipay Not Enough") {
                        Buff.alert({
                            type: "error",
                            title: i18n("the_lack_of_balance"),
                            message: i18n("the_account_can_be_withdrawal"),
                            hideCancel: true
                        })
                    } else if (e.code == "Withdraw Cash Not Enough") {
                        Buff.alert({
                            type: "error",
                            title: i18n("the_lack_of_balance"),
                            message: i18n("account_can_be_withdraw_the"),
                            hideCancel: true
                        })
                    } else {
                        Buff.alert({
                            type: "error",
                            title: i18n("send_a_verification_code_failed"),
                            message: e.code == "Epay Response Error" ? e.error || i18n("the_system_is_busy_please") : e.error,
                            hideCancel: true
                        })
                    }
                    return
                }
                if (!v) {
                    i(e.data.mobile)
                }
                v = true;
                if (t) {
                    t()
                }
            }
        })
    };
    var y = function (e, t) {
        var a = c();
        a["authcode"] = e;
        sendRequest("/api/asset/withdraw_together/verify/", {
            data: a,
            method: "post",
            dataType: "json",
            success: function (e) {
                if (e.code == "Withdraw Need Authcode") {
                    g();
                    return
                }
                if (e.code != "OK") {
                    Buff.alert({
                        type: "error",
                        title: i18n("withdrawal_failure"),
                        message: e.code == "Epay Response Error" ? e.error || i18n("the_system_is_busyplease_try") : e.error,
                        hideCancel: true
                    });
                    return
                }
                i();
                if (t) {
                    t()
                }
                b();
                show_brief_asset();
                Buff.alert({
                    title: i18n("withdrawal_has_been_filed"),
                    message: i18n("withdraw_cash_price_of_dollar") + (a.alipay_amount + a.epay_amount).toFixed(2) + i18n("is_being_processed_you_can"),
                    hideCancel: true,
                    success: function () {
                        document.location.reload()
                    }
                })
            }
        })
    };
    var b = function (e, t) {
        if (e == undefined) {
            e = 1
        }
        sendRequest("/api/asset/withdraw_log/", {
            data: {page_num: e},
            method: "get",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    return
                }
                var t = e.data;
                if (t.length == 0) {
                    $("#withdraw_logs .nodata").show()
                } else {
                    var a = $("#withdraw_logs .list_tb");
                    a.find('tr:not(":first")').remove();
                    a.append(template_render("withdraw_log_pat", {withdraw_logs: t["items"]}));
                    a.show()
                }
                t.onPageClick = b;
                renderPagination(t);
                w()
            },
            error: function () {
            }
        })
    };
    var w = function () {
        var e = $('#withdraw_logs tr[state="CONFIRM"], #withdraw_logs tr[state="CREATED"]');
        if (e.length == 0) {
            return
        }
        var t = "/api/asset/withdraw_state_check/?";
        var a = [];
        e.each(function () {
            a.push($(this).attr("withdraw_id"))
        });
        t += "withdraw_id=" + a.join();
        sendRequest(t, {
            method: "get", dataType: "json", showLoading: false, showError: false, success: function (e) {
                if (e.code != "OK") {
                    setTimeout(w, 3e4);
                    return
                }
                for (var t in e.data.items) {
                    $("#withdraw_logs tr[withdraw_id=" + t + "]").replaceWith(template_render("withdraw_log_pat", {withdraw_logs: [e.data.items[t]]}))
                }
                setTimeout(w, 3e4)
            }
        })
    };
    var k = function () {
        o = true;
        var e = $("#alipay_account_select .selected");
        if (e.find(".bank-name").length > 0) {
            e.addClass("on")
        }
    };
    var x = function () {
        o = false;
        $("#alipay_account_select .selected").removeClass("on")
    };
    var C = function () {
        var e = $("#alipay_account_select .select-list-item.on");
        if (e.length > 0) {
            var t = e.attr("account");
            var a = e.attr("account_id");
            return {account: t, account_id: a}
        }
    };
    var j = function () {
        var a = function (e) {
            if (!e) {
                if ($("#alipay_account_select .select-list-item").hasClass("on")) {
                    e = $("#alipay_account_select .select-list-item.on")
                } else {
                    e = $("#alipay_account_select .select-list-item").first()
                }
            }
            if (!e || e.hasClass("card-list-add")) {
                return
            }
            var t = e.attr("account");
            var a = e.attr("account_id");
            var i = format_html('<i class="icon icon_select_alipay_small"></i><span class="bank-name"><%= account %></span>', {account: t});
            var r = $("#alipay_account_select .selected");
            r.html(i);
            if (o) {
                r.addClass("on")
            }
            if (!e.hasClass("card-list-add")) {
                e.siblings().removeClass("on");
                e.addClass("on")
            }
            l()
        };
        $(window).click(function () {
            $("#alipay_account_select .select-list").hide()
        });
        $("#alipay_account_select .selected, #alipay_account_select .icon_expand").click(function (e) {
            e.stopPropagation();
            $("#alipay_account_select .select-list").toggle()
        });
        $("#alipay_account_select").delegate(".select-list-item", "click", function (e) {
            if ($(this).hasClass("card-list-add")) {
                Popup.show("j_popup_bind_alipay_account")
            } else {
                $("#alipay_account_select .select-list").toggle();
                a($(this));
                l()
            }
        });
        a();
        var i = $('<div class="select-list-item"></div>');
        var r = $('<i class="icon icon_select_alipay_small"></i>');
        var n = $('<span class="bank-name"></span>');
        $("#bind_alipay_account_verify_btn").click(function () {
            var e = $("#j_popup_bind_alipay_account input[name=alipay_account]");
            var t = e.val().trim();
            if (!t) {
                e.parent().addClass("i_Text_error");
                return
            }
            e.parent().removeClass("i_Text_error");
            e.val("");
            n.text(t);
            i.attr("account", t);
            i.empty();
            i.append(r).append(n);
            $("#alipay_account_select .card-list-add").before(i);
            a(i);
            i.hide();
            Popup.hide()
        })
    };
    var P = function () {
        var e = $("#coupon_select .select-list-item.on");
        if (e.length > 0) {
            return {cdkey_id: e.attr("cdkey_id")}
        }
    };
    var T = function () {
        sendRequest("/api/activity/coupon/my/?coupon_type=withdraw&state=unuse&page_size=15", {
            method: "get", dataType: "json", showLoading: false, showError: false, success: function (e) {
                var t = [];
                if (e.code == "OK") {
                    t = e.data.items
                }
                $("#coupon_select .select-list").append(template_render("coupons_pat", {coupons: t}));
                $(window).click(function () {
                    $("#coupon_select .select-list").hide()
                });
                $("#coupon_select .selected, #coupon_select .icon_expand").click(function (e) {
                    e.stopPropagation();
                    $("#coupon_select .select-list").toggle()
                });
                $("#coupon_select").delegate(".select-list-item", "click", function (e) {
                    if ($(this).hasClass("scope-none")) {
                        return
                    }
                    if ($(this).find(".pay-tip").length > 0) {
                        $(this).find(".pay-tip").remove();
                        $(this).removeClass("on");
                        $("#coupon_select .selected .coupon-name").addClass("c_Gray").text(i18n("please_select_from_the_available"))
                    } else {
                        $(this).siblings().each(function () {
                            $(this).find(".pay-tip").remove();
                            $(this).removeClass("on")
                        });
                        $(this).append($('<span class="pay-tip c_Blue f_12px">' + i18n("has_been_used") + "</span>"));
                        $(this).addClass("on");
                        $("#coupon_select .selected .coupon-name").removeClass("c_Gray").text($(this).find(".coupon-name").text());
                        $("#coupon_select .select-list").toggle()
                    }
                    _()
                })
            }
        })
    };
    var B = function (i) {
        u = i.withdraw_min_amount;
        n = i.withdraw_max_amount;
        p = {alipay_amount: i.alipay_amount, epay_amount: i.epay_amount};
        e = i.realname || {};
        f = i.remain_withdraw_counts || {};
        var r = "input[name=alipay_amount], input[name=epay_amount]";
        $(r).each(function () {
            var a = false;
            $(this).bind("change paste keyup", function (e) {
                if (parseFloat($(this).val()) > n) {
                    if (!a) {
                        $(this).unbind("keypress").bind("keypress", function () {
                            return false
                        });
                        $(this).val(n);
                        a = true
                    }
                } else if (a) {
                    var t = parseFloat($(this).val());
                    if (isNaN(t) || isTextSelected($(r)[0]) || t < n) {
                        $(this).unbind("keypress");
                        Buff.pricePatten(r);
                        a = false
                    }
                }
                l()
            })
        });
        Buff.pricePatten(r);
        $(document).on("input", "input", function () {
            $(this).removeClass("i_Text_error")
        });
        j();
        T();
        b();
        $("#withdraw_btn").click(function () {
            var e = c();
            if (e == undefined || !d(e)) {
                return
            }
            var t = function () {
                if (i.withdraw_need_authcode) {
                    g()
                } else {
                    y()
                }
            };
            if (s) {
                var a = [s.total.amount, s.total.fee, s.alipay.real_amount, s.epay.real_amount];
                $("#j_withdraw_confirm .popup-desc strong").each(function (e) {
                    $(this).text(a[e])
                });
                $("#j_withdraw_confirm .i_Btn_main").unbind().bind("click", function () {
                    t();
                    Popup.hide()
                });
                Popup.show("j_withdraw_confirm")
            } else {
                t()
            }
        });
        bindCard.init_card_list(e, i.max_card_count, l);
        if ($.isEmptyObject(e)) {
            $(".card-list-add").click(function () {
                bindCard.show_cert_popup(function () {
                    document.location.reload()
                })
            })
        }
    };
    return {init: B, enable_or_disable_button: l}
}();
var Withdraw_V2 = function () {
    var s = 10;
    var o = 5e4;
    var _ = {};
    var c = null;
    var l = null;
    var d = null;
    var u = function (e, t) {
        var a = function (e, t) {
            var a = $("#epay_received");
            if (e > 0) {
                a.find("span").html(formatPriceNormalYuan(e, true));
                a.css("visibility", "visible")
            } else {
                a.css("visibility", "hidden")
            }
            $("#total_fee").html(formatPriceNormalYuan(t, true))
        };
        if (e > 0 && e < s) {
            return
        }
        sendRequest("/api/asset/withdraw_merge/fee", {
            method: "get",
            data: {amount: e, cdkey_id: t},
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    console.log(e.error);
                    return
                }
                var t = e.data;
                a(t.real_amount, t.fee);
                l = t
            }
        })
    };
    var n = function (e) {
        if (e === undefined) {
            e = p(true)
        }
        var t = e.epay_amount;
        var a = true;
        var i = false;
        var r = $("#epay_received");
        var n = $("#epay_amount_error");
        if (t > 0 && t < s) {
            n.text(i18n("less_than") + s + i18n("yuan"))
        } else if (t > _.epay_amount) {
            n.text(i18n("greater_than_the_extraction_amount"))
        } else {
            a = false
        }
        if (a) {
            bindCard.cancel_highlight_card();
            r.css("visibility", "hidden");
            r.parent().removeClass("on");
            n.css("visibility", "visible")
        } else {
            n.css("visibility", "hidden");
            if (t > 0) {
                r.parent().addClass("on");
                bindCard.highlight_card();
                i = true
            } else {
                r.parent().removeClass("on");
                bindCard.cancel_highlight_card()
            }
        }
        if (!a) {
            u(t, e["cdkey_id"])
        }
        var o = false;
        if (t == 0 || a || t > 0 && !e["card_id"]) {
            o = true
        }
        if (o) {
            $("#withdraw_btn").removeClass("i_Btn_main").addClass("i_Btn_disabled")
        } else {
            $("#withdraw_btn").removeClass("i_Btn_disabled").addClass("i_Btn_main")
        }
        if (i) {
            $("#remain_withdraw_count_today_span").show();
            $("#remain_withdraw_count_today").text(i18n("remain_withdrawal_count_today") + " " + d)
        } else {
            $("#remain_withdraw_count_today_span").hide();
            $("#remain_withdraw_count_today").text("")
        }
        return !o
    };
    var p = function (e, t) {
        var a = {};
        $("input[name=epay_amount]").each(function () {
            var e = $(this).val();
            e = e.replace(/[^0-9\.]/g, "");
            if (e) {
                e = parseFloat(e)
            } else {
                e = 0
            }
            a["amount"] = e;
            a["epay_amount"] = e
        });
        var i = bindCard.get_selected_card();
        if (i) {
            a["card_id"] = i.card_id
        }
        var r = w();
        if (r) {
            a["cdkey_id"] = r["cdkey_id"]
        }
        if (e) {
            return a
        }
        if (t) {
            if (n(a)) {
                return a
            }
            return undefined
        }
        setTimeout(n, 200)
    };
    var i = function () {
        $("input[name=epay_amount]").each(function () {
            $(this).val("")
        });
        n()
    };
    var f = function () {
        return p(false, true)
    };
    var e = function () {
        p(false, false)
    };
    var m = e;
    var h = function (e) {
        if (e.epay_amount > 0 && e.epay_amount < s) {
            Buff.alert({
                type: "error",
                title: i18n("withdrawal_failure"),
                message: i18n("withdrawal_minimum_amount_is") + s + i18n("yuan"),
                hideCancel: true
            });
            return false
        }
        if (e.epay_amount > o) {
            Buff.alert({
                type: "error",
                title: i18n("withdrawal_failure"),
                message: i18n("withdraw_the_maximum_amount_of") + o + i18n("yuan"),
                hideCancel: true
            });
            return false
        }
        return true
    };
    var r = false;
    var v = function (t, e) {
        var a = f();
        var i = function (e) {
            bindCard.show_authcode_popup({
                send_authcode_function: v,
                verify_authcode_function: g,
                content: i18n("to_guarantee_your_safety_of") + e + i18n("receive_sms_verification_code"),
                authcode_length: 4
            })
        };
        if (!e) {
            r = false
        }
        sendRequest("/api/asset/withdraw_merge/authcode/", {
            data: a,
            method: "post",
            dataType: "json",
            success: function (e) {
                if (e.code != "OK") {
                    if (e.code == "Withdraw Alipay Not Enough") {
                        Buff.alert({
                            type: "error",
                            title: i18n("the_lack_of_balance"),
                            message: i18n("the_account_can_be_withdrawal"),
                            hideCancel: true
                        })
                    } else if (e.code == "Withdraw Cash Not Enough") {
                        Buff.alert({
                            type: "error",
                            title: i18n("the_lack_of_balance"),
                            message: i18n("account_can_be_withdraw_the"),
                            hideCancel: true
                        })
                    } else {
                        Buff.alert({
                            type: "error",
                            title: i18n("send_a_verification_code_failed"),
                            message: e.code == "Epay Response Error" ? e.error || i18n("the_system_is_busy_please") : e.error,
                            hideCancel: true
                        })
                    }
                    return
                }
                if (!r) {
                    i(e.data.mobile)
                }
                r = true;
                if (t) {
                    t()
                }
            }
        })
    };
    var g = function (e, t) {
        var a = f();
        a["authcode"] = e;
        sendRequest("/api/asset/withdraw_merge", {
            data: a, method: "post", dataType: "json", success: function (e) {
                if (e.code == "Withdraw Need Authcode") {
                    v();
                    return
                }
                if (e.code != "OK") {
                    if (e.code == "Card Need Verify") {
                        VerifyPhone.show(c, bindCard.get_selected_card(), null, true);
                        return
                    }
                    Buff.alert({
                        type: "error",
                        title: i18n("withdrawal_failure"),
                        message: e.code == "Epay Response Error" ? e.error || i18n("the_system_is_busyplease_try") : e.error,
                        hideCancel: true
                    });
                    return
                }
                i();
                if (t) {
                    t()
                }
                y();
                show_brief_asset();
                Buff.alert({
                    title: i18n("withdrawal_has_been_filed"),
                    message: i18n("withdraw_cash_price_of_dollar") + a.amount.toFixed(2) + i18n("is_being_processed_you_can"),
                    hideCancel: true,
                    success: function () {
                        document.location.reload()
                    }
                })
            }
        })
    };
    var y = function (e, t) {
        if (e == undefined) {
            e = 1
        }
        sendRequest("/api/asset/withdraw_log/", {
            data: {page_num: e},
            method: "get",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    return
                }
                var t = e.data;
                if (t.length == 0) {
                    $("#withdraw_logs .nodata").show()
                } else {
                    var a = $("#withdraw_logs .list_tb");
                    a.find('tr:not(":first")').remove();
                    a.append(template_render("withdraw_log_pat", {withdraw_logs: t["items"]}));
                    a.show()
                }
                t.onPageClick = y;
                renderPagination(t);
                b()
            },
            error: function () {
            }
        })
    };
    var b = function () {
        var e = $('#withdraw_logs tr[state="CONFIRM"], #withdraw_logs tr[state="CREATED"]');
        if (e.length == 0) {
            return
        }
        var t = "/api/asset/withdraw_state_check/?";
        var a = [];
        e.each(function () {
            a.push($(this).attr("withdraw_id"))
        });
        t += "withdraw_id=" + a.join();
        sendRequest(t, {
            method: "get", dataType: "json", showLoading: false, showError: false, success: function (e) {
                if (e.code != "OK") {
                    setTimeout(b, 3e4);
                    return
                }
                for (var t in e.data.items) {
                    $("#withdraw_logs tr[withdraw_id=" + t + "]").replaceWith(template_render("withdraw_log_pat", {withdraw_logs: [e.data.items[t]]}))
                }
                setTimeout(b, 3e4)
            }
        })
    };
    var w = function () {
        var e = $("#coupon_select .select-list-item.on");
        if (e.length > 0) {
            return {cdkey_id: e.attr("cdkey_id")}
        }
    };
    var k = function () {
        sendRequest("/api/activity/coupon/my/?coupon_type=withdraw&state=unuse&page_size=15", {
            method: "get", dataType: "json", showLoading: false, showError: false, success: function (e) {
                var t = [];
                if (e.code == "OK") {
                    t = e.data.items
                }
                $("#coupon_select .select-list").append(template_render("coupons_pat", {coupons: t}));
                $(window).click(function () {
                    $("#coupon_select .select-list").hide()
                });
                $("#coupon_select .selected, #coupon_select .icon_expand").click(function (e) {
                    e.stopPropagation();
                    $("#coupon_select .select-list").toggle()
                });
                $("#coupon_select").delegate(".select-list-item", "click", function (e) {
                    if ($(this).hasClass("scope-none")) {
                        return
                    }
                    if ($(this).find(".pay-tip").length > 0) {
                        $(this).find(".pay-tip").remove();
                        $(this).removeClass("on");
                        $("#coupon_select .selected .coupon-name").addClass("c_Gray").text(i18n("please_select_from_the_available"))
                    } else {
                        $(this).siblings().each(function () {
                            $(this).find(".pay-tip").remove();
                            $(this).removeClass("on")
                        });
                        $(this).append($('<span class="pay-tip c_Blue f_12px">' + i18n("has_been_used") + "</span>"));
                        $(this).addClass("on");
                        $("#coupon_select .selected .coupon-name").removeClass("c_Gray").text($(this).find(".coupon-name").text());
                        $("#coupon_select .select-list").toggle()
                    }
                    n()
                })
            }
        })
    };
    var t = function (t) {
        s = t.withdraw_min_amount;
        o = t.withdraw_max_amount;
        _ = {epay_amount: parseFloat($("#cash_amount_val").val())};
        c = t.realname || {};
        d = t.remain_withdraw_counts || {};
        var i = "input[name=epay_amount]";
        $(i).each(function () {
            var a = false;
            $(this).bind("change paste keyup", function (e) {
                if (parseFloat($(this).val()) > o) {
                    if (!a) {
                        $(this).unbind("keypress").bind("keypress", function () {
                            return false
                        });
                        $(this).val(o);
                        a = true
                    }
                } else if (a) {
                    var t = parseFloat($(this).val());
                    if (isNaN(t) || isTextSelected($(i)[0]) || t < o) {
                        $(this).unbind("keypress");
                        Buff.pricePatten(i);
                        a = false
                    }
                }
                m()
            })
        });
        Buff.pricePatten(i);
        $(document).on("input", "input", function () {
            $(this).removeClass("i_Text_error")
        });
        var e = function () {
            var e = $("#notice-alipay");
            e.empty();
            e.append(template_render("notices_list_pat", {notices: t.notices.split("\n")}));
            e.show()
        };
        e();
        var r = function (e) {
            if (e) {
                if ($("#card_list_add_btn").length == 0) {
                    var t = format_html('<div class="select-list-item card-list-add" id="card_list_add_btn" style="text-align: center;"><i class="icon icon_add_2" style="margin:-4px 10px 0 0;"></i><span><%= add_bank_text %></span></div>', {add_bank_text: i18n("add_a_bank_card")});
                    $("#card_list_content").append(t)
                }
            } else {
                $("#card_list_add_btn").remove()
            }
        };
        var a = function (e, t) {
            var a = $("#card_list");
            a.empty();
            a.append(template_render("card_list_pat", {card_list_content: e.length ? template_render("card_list_item", {card_list: e}) : ""}));
            r(t);
            a.show();
            bindCard.init_card_list(c, null, function (e) {
                m();
                if (e) {
                    n()
                }
            })
        };
        a(t.card_list || [], t.can_bind_card);
        k();
        y();
        var n = function () {
            sendRequest("/api/asset/withdraw_merge/info", {
                method: "GET",
                dataType: "json",
                showLoading: false,
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    r(e.data.can_bind_card)
                }
            })
        };
        $("#withdraw_btn").click(function () {
            var e = f();
            if (e == undefined || !h(e)) {
                return
            }
            var t = bindCard.get_selected_card();
            if (t.need_verify == "true") {
                VerifyPhone.show(c, t, function () {
                    var e = $("#bank_card_select .select-list-item.on");
                    if (e.length > 0) {
                        e.attr("need_verify", "false")
                    }
                });
                return
            }
            var a = function () {
                sendRequest("/api/asset/withdraw_merge/risk_check", {
                    data: f(),
                    method: "get",
                    dataType: "json",
                    success: function (e) {
                        if (e.code != "OK") {
                            Buff.toast(e.error);
                            return
                        }
                        e.data.need_authcode ? v() : g()
                    }
                })
            };
            if (l) {
                var i = [l.amount, l.fee, l.real_amount];
                $("#j_withdraw_confirm .popup-desc strong").each(function (e) {
                    $(this).text(i[e])
                });
                $("#j_withdraw_confirm .i_Btn_main").unbind().bind("click", function () {
                    a();
                    Popup.hide()
                });
                Popup.show("j_withdraw_confirm")
            } else {
                a()
            }
        });
        if ($.isEmptyObject(c)) {
            $(".card-list-add").click(function () {
                bindCard.show_cert_popup(true, function () {
                    document.location.reload()
                })
            })
        }
    };
    return {init: t, enable_or_disable_button: m}
}();
var VerifyPhone = function () {
    var h = 120;
    var v = h;
    var g = false;
    var t = undefined;

    function y(e) {
        if (v == 0) {
            e.removeClass("i_Btn_disabled");
            e.text(i18n("get_the_verification_code"));
            v = h;
            t = undefined
        } else {
            e.addClass("i_Btn_disabled");
            e.html(format_html('<%= i18n("resend") %><small>(<%= wait %>)</small>', {wait: v}));
            v--;
            t = setTimeout(function () {
                y(e)
            }, 1e3)
        }
    }

    var b = function (i) {
        var e = function (e, t) {
            var a = $("#" + i);
            if (typeof e == "string") {
                if (t) {
                    t.siblings(".error").text(e)
                } else {
                    a.find(".c_Error").text(e)
                }
            }
            if (t) {
                t.parent().addClass("i_Text_error")
            }
        };
        var t = function (e) {
            var t = $("#" + i);
            if (e) {
                e.siblings(".error").text("");
                e.parent().removeClass("i_Text_error")
            } else {
                t.find(".c_Error").html("&nbsp;")
            }
        };
        var a = function () {
            var e = $("#" + i);
            e.find(".i_Text_error").removeClass("i_Text_error");
            e.find(".error").text("");
            e.find(".c_Error").html("&nbsp;")
        };
        return {show: e, clear: t, clear_all: a}
    };
    var e = function (p, f, m, e) {
        if (!m) {
            m = function () {
            }
        }
        var t = "need_verify", a = t + "_pat", i = "j_popup_" + t, r = "#" + i;
        var n = i18n("verify_tips"), o = i18n("verify_tips_text"), s = i18n("verify_now_btn_text");
        if (e) {
            n = i18n("withdraw_verify_tips");
            o = i18n("withdraw_verify_tips_text");
            h = 60
        }
        $(r).remove();
        $("body").append(template_render(a, {verify_tips: n, verify_tips_text: o, verify_now_btn_text: s}));
        Popup.show(i);
        var _ = "#j_popup_need_verify .i_Btn_main";
        $(document).off("click", _).on("click", _, function () {
            Popup.hide();
            var e = "verify_phone", t = e + "_pat", a = "j_popup_" + e, _ = "#" + a;
            $(_).remove();
            var i = {realname: p.realname, id_card: p.id_card, card_info: f};
            var r = template_render(t, i);
            $("body").append(r);
            Popup.show(a);
            var c = b(a);
            var n = {
                data: {}, error_msg: "", show_error: true, add_text_error: function (e) {
                    if (this.show_error) {
                        c.show(this.error_msg, e)
                    }
                }, get: function (e, t) {
                    var a = $(_);
                    c.clear_all();
                    this.error_msg = "";
                    var i = a.find("input[name=mobile]");
                    if (t && i) {
                        var r = i.val().replace(/\s*/g, "");
                        if (!r) {
                            this.error_msg = i18n("the_phone_number_cannot_be")
                        } else if (!/^(13|14|15|16|17|18|19)\d{9}$/.test(r)) {
                            this.error_msg = i18n("the_phone_number_is_incorrect")
                        }
                        if (this.error_msg) {
                            this.add_text_error();
                            return undefined
                        }
                        this.data["mobile"] = r
                    }
                    var n = a.find("input[name=card_id]").val();
                    if (!n) {
                        this.error_msg = i18n("please_get_a_sms_verification");
                        this.add_text_error();
                        return undefined
                    }
                    this.data["card_id"] = n;
                    if (e) {
                        var o = a.find("input[name=authcode]");
                        var s = o.val().replace(/\s*/g, "");
                        if (!s) {
                            this.error_msg = i18n("verification_code_cannot_be_empty")
                        } else if (!/^\d{6}$/.test(s)) {
                            this.error_msg = i18n("the_verification_code_is_incorrect")
                        }
                        if (this.error_msg) {
                            this.add_text_error();
                            return undefined
                        }
                        this.data["authcode"] = s;
                        if ($("#agreement").length > 0 && !$("#agreement").hasClass("on")) {
                            this.error_msg = i18n("need_to_first_agree_to");
                            this.add_text_error();
                            return undefined
                        }
                    }
                    return true
                }, clear: function () {
                    $("input[name=card_number]").val("");
                    $("input[name=mobile]").val("");
                    $("input[name=authcode]").val("")
                }, show_bank_info: function (e) {
                    $("input[name=bank_id]").val(e["bank_id"]);
                    $("input[name=card_type]").val(e["card_type"]);
                    $(".card-name").find("i").addClass("b_" + e["bank_style_id"]).next().text(e["bank_name"]);
                    $(".card-name").find("img").attr("src", e["bank_icon"]).next().text(e["bank_name"]);
                    $(".card-name").show()
                }, clear_bank_info: function () {
                    $("input[name=bank_id]").val("");
                    $("input[name=card_type]").val("");
                    var e = $(".card-name").find("i").attr("class");
                    $(".card-name").find("i").attr("class", e.replace(/b_\d+/, "")).next().text("");
                    $(".card-name").hide()
                }
            };
            var o = [_, "#change_mobile_btn"].join(" ");
            var s = false;
            $(o).click(function () {
                $(this).parent().hide();
                var e = [_, "#change_mobile_container", "input[name=mobile]"].join(" ");
                $(e).val("");
                var t = [_, "#change_mobile_container"].join(" ");
                $(t).show();
                s = true
            });
            var l = function (e) {
                if (!s) {
                    delete e["mobile"]
                }
                return e
            };
            var d = [_, "#send_authcode"].join(" ");
            $(d).unbind().bind("click", function () {
                if (n.get(false, s) == undefined) {
                    return
                }
                var e = l(n.data);
                var t = [_, "input[name=card_id]"].join(" ");
                var a = ENV == "prod" ? 5e3 : 15e3;
                sendRequest("/api/asset/bind_card/v2", {
                    data: e,
                    method: "post",
                    dataType: "json",
                    timeout: a,
                    success: function (e) {
                        if (e.code != "OK") {
                            if (e.code == "Card Type Error") {
                                f.add_text_error(i18n("recharge_with_cash_only_support"))
                            } else {
                                Buff.alert({
                                    type: "error",
                                    title: i18n("bound_to_fail"),
                                    message: e.code == "Epay Response Error" ? e.error || i18n("tied_the_card_fails_please") : e.error,
                                    hideCancel: true
                                })
                            }
                            return
                        }
                        $(t).val(e.data.card_id);
                        v = h;
                        y($(d));
                        g = true
                    }
                })
            });
            var u = [_, "#bind_card"].join(" ");
            $(u).unbind().bind("click", function () {
                if ($(this).hasClass("i_Btn_disabled")) {
                    return false
                }
                if (n.get(true, s) == undefined) {
                    return
                }
                var e = l(n.data);
                sendRequest("/api/asset/bind_card_verify/v2", {
                    data: e,
                    method: "post",
                    dataType: "json",
                    success: function (e) {
                        if (e.code != "OK") {
                            if (e.code == "Card Type Error") {
                                f.add_text_error(i18n("recharge_with_cash_only_support"))
                            } else {
                                Buff.alert({
                                    type: "error",
                                    title: "绑定失败",
                                    message: e.code == "Epay Response Error" ? e.error || i18n("tied_the_card_fails_please") : e.error,
                                    hideCancel: true
                                })
                            }
                            return
                        }
                        Buff.toast(i18n("the_binding_is_successful"), {type: "success"});
                        sleep(1e3);
                        Popup.hide();
                        m(e.data.card_info)
                    }
                })
            })
        })
    };
    return {show: e}
}();
var Message = function () {
    var t = function (e) {
        var t = [104, 108, 111, 112, 115, 151, 117, 118, 122, 125, 127, 133, 140, 160, 161, 162];
        var a = [104, 105, 109, 114, 125, 126, 130, 131, 132, 163, 164];
        e.content = escapeHtml(e.content);
        if (e.template_type == 103 || e.template_type == 107) {
            e.content = e.content.replace(/\[(.*)\]/, format_html('<a href="/market/backpack?game=<%= game %>" style="text-decoration: underline;"><%= text %></a>', {
                text: "$1",
                game: e.game
            }))
        }
        if (e.template_type == 101) {
            e.content = e.content.replace(/\[(.*)\]/, format_html('<a href="/market/sell_order/to_deliver?game=<%= game %>" style="text-decoration: underline;"><%= text %></a>', {
                text: "$1",
                game: e.game
            }))
        }
        if (t.includes(e.template_type)) {
            e.content = e.content.replace(/\[\[sell_order_history\](.*)\[(.*)\]\]/, format_html('<a href="/market/sell_order/history?game=<%= game %>&search=<%= search %>" style="text-decoration: underline;"><%= text %></a>', {
                game: e.game,
                search: "$1",
                text: "$2"
            }))
        }
        if (a.includes(e.template_type)) {
            e.content = e.content.replace(/\[\[buy_order_history\](.*)\[(.*)\]\]/, format_html('<a href="/market/buy_order/history?game=<%= game %>&search=<%= search %>" style="text-decoration: underline;"><%= text %></a>', {
                game: e.game,
                search: "$1",
                text: "$2"
            }))
        }
        if (e.template_type == 138) {
            e.content = e.content.replace(/\[buy_order_format_id\]\[(.*)\]/, format_html('<a href="/market/buy_order/supplied?game=<%= game %>&buy_order_id=<%= buy_order_id %>" style="text-decoration: underline;"><%= text %></a>', {
                buy_order_id: "$1",
                game: e.game,
                text: " (" + i18n("go_to_view") + ")"
            }))
        }
        if (e.template_type == 139) {
            e.content = e.content.replace(/\[\[buy_order_history\](.*)\[(.*)\]\]/, format_html('<a href="/market/buy_order/supplied?game=<%= game %>&buy_order_id=<%= buy_order_id %>" style="text-decoration: underline;"><%= text %></a>', {
                game: e.game,
                buy_order_id: "$1",
                text: "$2"
            }))
        }
        if (e.template_type == 106 || e.template_type == 141 || e.template_type == 142) {
            e.content = e.content.replace(/\[\[buy_order_supplied\](.*)\[(.*)\]\]/, format_html('<a href="/market/buy_order/supplied?game=<%= game %>&buy_order_id=<%= buy_order_id %>" style="text-decoration: underline;"><%= text %></a>', {
                game: e.game,
                buy_order_id: "$1",
                text: "$2"
            }))
        }
        if (e.template_type == 116) {
            e.content = e.content.replace(/\[(.*)\]/, format_html('<a href="/market/steam_inventory?game=<%= game %>" style="text-decoration: underline;"><%= text %></a>', {
                text: "$1",
                game: e.game
            }))
        }
        if (e.template_type == 119 || e.template_type == 123) {
            e.content = e.content.replace(/\[\[goods_selling\](.*)\[(.*)\]\]/, format_html('<a href="/goods/<%= goods_id %>#tab=selling" style="text-decoration: underline;"><%= text %></a>', {
                goods_id: "$1",
                text: "$2"
            }));
            e.content = e.content.replace(/\[\[goods_buying\](.*)\[(.*)\]\]/, format_html('<a href="/goods/<%= goods_id %>#tab=buying" style="text-decoration: underline;"><%= text %></a>', {
                goods_id: "$1",
                text: "$2"
            }))
        }
        if (e.template_type == 120) {
            e.content = e.content.replace(/\[(.*)\]/, format_html('<a href="/market/sell_order/received_bargain?game=<%= game %>" style="text-decoration: underline;"><%= text %></a>', {
                text: "$1",
                game: e.game
            }))
        }
        if (e.template_type == 121) {
            e.content = e.content.replace(/\[(.*)\]/, format_html('<a href="/market/buy_order/to_receive?game=<%= game %>" style="text-decoration: underline;"><%= text %></a>', {
                text: "$1",
                game: e.game
            }))
        }
        if (e.template_type == 124 || e.template_type == 165) {
            e.content = e.content.replace(/\[(.*)\]/, format_html('<a href="/market/buy_order/sent_bargain?game=<%= game %>" style="text-decoration: underline;"><%= text %></a>', {
                text: "$1",
                game: e.game
            }))
        }
        if (e.template_type == 128) {
            e.content = e.content.replace(/\[(.*)\]/, format_html('<a href="/user-center/bookmark/sell_order?game=<%= game %>" style="text-decoration: underline;"><%= text %></a>', {
                text: "$1",
                game: e.game
            }))
        }
        return e.content
    };
    var a = function (e) {
        e.content = e.content.replace(/\[\[user_backpack\](.*)\[(.*)\]\]/, format_html('<a href="/market/backpack?game=<%= game %>"><%= text %></a>', {
            game: "$1",
            text: "$2"
        }));
        e.content = e.content.replace(/\[\[market_preview\](.*),(.*)\[(.*)\]\]/, format_html('<a href="/goods/<%= goods_id %>#tab=user-preview"><%= text %></a>', {
            goods_id: "$2",
            text: "$3"
        }));
        e.content = e.content.replace(/\[\[settings_api_key\](.*)\]/, format_html('<a href="/user-center/profile#steam_api_key"><%= text %></a>', {text: "$1"}));
        e.content = e.content.replace(/\[\[bind_card\](.*)\]/, format_html('<a href="/user-center/asset/withdraw/"><%= text %></a>', {text: "$1"}));
        e.content = e.content.replace(/\[\[device_management\](.*)\]/, format_html("<%= text %>", {text: "$1"}));
        e.content = e.content.replace(/\[\[settings_preference\](.*)\]/, format_html("<%= text %>", {text: "$1"}));
        e.content = e.content.replace(/\[\[my_coupon\]\[(.*)\](.*)\]/, format_html('<a href="/user-center/coupon/<%= type %>"><%= text %></a>', {
            type: "$1",
            text: "$2"
        }));
        e.content = e.content.replace(/\[\[steam_login\](.*)\]/, format_html("<%= text %>", {text: "$1"}));
        return e.content
    };
    var o = function (e) {
        if (e == undefined) {
            e = 1
        }
        var n = $("#j_mail-tab .on").attr("message_type");
        sendRequest("/api/message/messages", {
            data: {page_num: e, type: n},
            method: "get",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    alert(e.error);
                    return
                }
                var t = e.data;
                var a = "";
                var i = "";
                if (n == "trade") {
                    a = "#trade_message";
                    i = "trade_message_pat"
                } else if (n == "system") {
                    a = "#system_message";
                    i = "system_message_pat"
                }
                $(a + " table tr:not(:first)").remove();
                var r = "";
                if (t.items.length == 0) {
                    $(a + " table").hide();
                    $(a + " .nodata").show()
                } else {
                    r = template_render(i, {messages: t.items});
                    $(a + " .nodata").hide();
                    $(a + " table").append(r).show()
                }
                t.pager_name = a + " .pager";
                t.onPageClick = o;
                renderPagination(t)
            }
        })
    };
    var e = function () {
        template.defaults.imports.trade_message_format = t;
        template.defaults.imports.system_message_format = a;
        var e = getParams(window.location.search.substring(1));
        if (e.type == "system") {
            $("#j_mail-tab li[message_type=system]").addClass("on");
            $("#system_message").show()
        } else {
            $("#j_mail-tab li[message_type=trade]").addClass("on");
            $("#trade_message").show()
        }
        o();
        $("#system_message").delegate(".msg-folder-handler", "click", function () {
            $(this).toggleClass("on");
            var e = $("#system_message .msg-folder-handler").index(this);
            $("#system_message .msg-folder").eq(e).toggle()
        });
        gameNavigator.setKeepParams(["type"])
    };
    return {init: e, format_trade_message: t, format_system_message: a}
}();
var Feedback = function () {
    var e = {
        data: {}, error_msg: "", show_error: function (e) {
            if (e) {
                e.addClass("i_Text_error")
            }
            $(".c_Red").text(this.error_msg)
        }, clear_error: function (e) {
            e.removeClass("i_Text_error")
        }, get: function () {
            this.error_msg = "";
            var e = $("input[name=email]");
            var t = e.val().trim();
            if (t && !/^[\w-]+[\w._-]*@[\w-]+(\.[\w-]+)+$/.test(t)) {
                this.error_msg = i18n("please_input_the_correct_mailbox")
            }
            if (this.error_msg) {
                this.show_error(e);
                return
            }
            this.data["email"] = t;
            var a = $("textarea[name=content]");
            var i = a.val().trim();
            var r = 1024;
            if (!i) {
                this.error_msg = i18n("please_enter_the_question_content")
            } else if (i.length > r) {
                this.error_msg = i18n("content_length_can_not_be")
            }
            if (this.error_msg) {
                this.show_error(a);
                return
            }
            this.data["content"] = i;
            var n = $(".upload-pics .upload-item img").attr("src");
            if (n) {
                this.data["img_url"] = n
            }
            return true
        }
    };
    var a = function () {
        if (e.get() == undefined) {
            return
        }
        $(".c_Red").text("");
        sendRequest("/api/feedback/add/v2", {
            data: e.data, method: "post", dataType: "json", success: function (e) {
                if (e.code != "OK") {
                    $(".c_Red").text(e.error);
                    return
                }
                Buff.toast(i18n("successfully_submitted"), {type: "success"});
                location.reload()
            }
        })
    };
    var i = function (e, t) {
        var a = e.target.files;
        var i = a[0];
        options = {
            file: i, upload_url: t.url, max_file_size: t.max_size, token: t.token, callback: function (e) {
                $(".upload-btn").hide();
                $(".upload-pics").show().find(".upload-item").html(format_html('<img src="<%= url %>" />', {url: e.url}));
                $(".upload-btn").next().html(format_html('<i class="icon icon_status_success"></i><%= i18n("successful_upload") %><a href="javascript:;" class="f_12px f_Underline"><%= i18n("reupload") %></a>')).find("a").click(function () {
                    $("#upload_file").click()
                })
            }, onprogress: function (e) {
                if (e.lengthComputable) {
                    var t = (e.loaded / e.total * 100).toFixed(2);
                    $(".upload-btn .upload-progressing").show();
                    $(".upload-btn").next().text(i18n("is_being_uploaded") + t + "%")
                }
            }
        };
        uploadFile(options)
    };
    var t = function (t) {
        $("#feedback_type,input[name=email],input[name=title],textarea[name=content]").bind("input change propertychange", function () {
            e.clear_error($(this))
        });
        $("#submit").click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            a()
        });
        $("#upload_file").change(function (e) {
            i(e, t)
        })
    };
    return {init: t, upload_image: i}
}();
var FeedbackList = function () {
    var a = function (e, t) {
        if (e == undefined) {
            e = 1
        }
        sendRequest("/api/feedback/list/", {
            data: {page_num: e}, method: "get", dataType: "json", showLoading: false, success: function (e) {
                if (e.code != "OK") {
                    return
                }
                var t = e.data;
                if (t.has_unreplay) {
                    $(".Btn_to_submit").addClass("i_Btn_disabled").unbind().bind("click", function () {
                        Buff.toast(i18n("currently_have_to_wait_for"))
                    })
                } else {
                    $(".Btn_to_submit").removeClass("i_Btn_disabled").unbind().bind("click", function () {
                        Popup.show("j_popup_feedback")
                    })
                }
                $("#feedback_logs").show();
                $("#feedback_logs tr:not(:first)").remove();
                $("#feedback_logs tr").after(template_render("feedback_log_pat", {feedbacks: t["items"]}));
                t.onPageClick = a;
                renderPagination(t);
                $("#feedback_logs").delegate("td", "mouseover", function () {
                    $(this).css("cursor", "pointer")
                }).delegate("td", "click", function () {
                    var e = $(this).parent().attr("feedback_id");
                    location.href = "/user-center/feedback/detail/?id=" + e
                });
                if (t.announcement) {
                    $("#j_popup_feedback .popup-tip").html(t.announcement).show();
                    if (t.announcement_entry.url) {
                        $("#j_popup_feedback .popup-tip").bind("mouseover", function () {
                            $(this).css("cursor", "pointer")
                        }).bind("click", function () {
                            openPageOnNewTab(t.announcement_entry.url)
                        })
                    }
                } else {
                    $("#j_popup_feedback .popup-tip").html("").hide()
                }
            }
        })
    };
    var e = function (e) {
        a();
        Feedback.init(e)
    };
    return {init: e}
}();
var FeedbackDetail = function () {
    var i;
    var e = function () {
        sendRequest("/api/feedback/detail/", {
            data: {id: i}, method: "get", dataType: "json", success: function (e) {
                if (e.code != "OK") {
                    return
                }
                $(".list_tb:first").html(template_render("feedback_replay_pat", {feedback_replays: [e.data.feedback]}));
                $(".list_tb:first").append(template_render("feedback_replay_pat", {feedback_replays: e.data.feedback_replays}));
                if (e.data.can_replay) {
                    $(".feedback-form").show()
                } else {
                    $(".feedback-form").remove()
                }
            }
        })
    };
    var t = {
        data: {}, error_msg: "", get: function () {
            var e = $("textarea[name=content]").val().trim();
            if (!e) {
                this.error_msg = i18n("please_enter_the_question_content");
                return
            }
            var t = 1024;
            if (e.length > t) {
                this.error_msg = i18n("content_length_can_not_be");
                return
            }
            this.data["content"] = e;
            this.data["id"] = i;
            var a = $(".upload-pics .upload-item img").attr("src");
            if (a) {
                this.data["img_url"] = a
            }
            return true
        }
    };
    var a = function () {
        if (t.get() == undefined) {
            $("#submit").addClass("i_Btn_disabled").removeClass("i_Btn_main")
        } else {
            $("#submit").removeClass("i_Btn_disabled").addClass("i_Btn_main")
        }
    };
    var r = function () {
        if (t.get() == undefined) {
            $(".c_Red").text(t.error_msg);
            return
        }
        $(".c_Red").text("");
        sendRequest("/api/feedback/replay/", {
            data: t.data, method: "post", dataType: "json", success: function (e) {
                if (e.code != "OK") {
                    $(".c_Red").text(e.error);
                    return
                }
                Buff.toast(i18n("reply_success"), {type: "success"});
                location.reload()
            }
        })
    };
    var n = function () {
        Buff.alert({
            title: i18n("confirm"),
            message: i18n("whether_the_problem_has_been"),
            confirmText: i18n("ok"),
            success: function () {
                sendRequest("/api/feedback/close/", {
                    data: {id: i},
                    method: "post",
                    dataType: "json",
                    success: function (e) {
                        if (e.code != "OK") {
                            Buff.toast(i18n("close_failed_please_try_again"), {type: "error"})
                        }
                        location.reload()
                    }
                })
            }
        })
    };
    var o = function (t) {
        i = getParams().id;
        if (!i) {
            return
        }
        e();
        $("textarea[name=content]").bind("input change propertychange", a);
        $("#submit").click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            r()
        });
        $("#close").click(function () {
            n()
        });
        $("#upload_file").change(function (e) {
            Feedback.upload_image(e, t)
        })
    };
    return {init: o}
}();
var Flow = function () {
    var r = function (e) {
        if (e == undefined) {
            e = 1
        }
        var t = {page_num: e};
        var a = $("#log_category").attr("value");
        var i = $("#pay_category").attr("value");
        if (a) {
            t["log_category"] = a
        }
        t["pay_category"] = i;
        sendRequest("/api/asset/flow/log/", {
            data: t,
            method: "get",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    alert(e.error);
                    return
                }
                var t = e.data;
                $("#flow table tr:not(:first)").remove();
                if (t.items.length == 0) {
                    $("#flow table").hide();
                    $("#flow .nodata").show()
                } else {
                    $("#flow .nodata").hide();
                    $("#flow table").append(template_render("flow_pat", {flow: t.items, pay_category: i})).show()
                }
                t.pager_name = "#flow .pager";
                t.onPageClick = r;
                renderPagination(t)
            }
        })
    };
    var e = function () {
        $("#log_category").change(function () {
            r()
        });
        $("#pay_category").change(function () {
            r()
        });
        r()
    };
    return {init: e}
}();
var Flow_V2 = function () {
    var r = function (e) {
        if (e == undefined) {
            e = 1
        }
        var t = {page_num: e};
        var a = $("#log_category").attr("value");
        var i = $("#pay_category").attr("value");
        if (a) {
            t["log_category"] = a
        }
        t["pay_category"] = i;
        sendRequest("/api/asset/flow/log/v2", {
            data: t,
            method: "get",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    alert(e.error);
                    return
                }
                var t = e.data;
                $("#flow table tr:not(:first)").remove();
                if (t.items.length == 0) {
                    $("#flow table").hide();
                    $("#flow .nodata").show()
                } else {
                    $("#flow .nodata").hide();
                    $("#flow table").append(template_render("flow_pat", {flow: t.items, pay_category: i})).show()
                }
                t.pager_name = "#flow .pager";
                t.onPageClick = r;
                renderPagination(t)
            }
        })
    };
    var e = function () {
        $("#log_category").change(function () {
            r()
        });
        $("#pay_category").change(function () {
            r()
        });
        r()
    };
    return {init: e}
}();
var Coupon = function () {
    var o = function (e) {
        if (e == undefined) {
            e = 1
        }
        var t = {game: g.game, page_num: e, page_size: 12, state: $("#coupon_state").attr("value"), only_coupon: 1};
        sendRequest("/api/activity/coupon/my/", {
            data: t,
            method: "get",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    return
                }
                var t = $("#user-coupon-list");
                t.empty();
                var a = e.data;
                var i = a["items"];
                if (i.length == 0) {
                    $(".nodata").show();
                    return
                }
                var r = {1: "user-rights-tag_points", 4: "user-rights-tag_vip"};
                for (var n = 0; n < i.length; n++) {
                    if ($("#coupon_state").attr("value") == "used") {
                        i[n].tab_class = "user-coupon-gray"
                    }
                    if (i[n].dispense_source) {
                        i[n].dispense_source["tag_class"] = r[i[n].dispense_source.value];
                        i[n].dispense_source["is_point_dispense_sources"] = i[n].dispense_source.value == 4 ? true : false
                    }
                }
                $(".nodata").hide();
                t.append(template_render("coupon_detail_pat", {coupons: i}));
                t.show();
                a.onPageClick = o;
                a.displayed_pages = 7;
                renderPagination(a)
            },
            error: function () {
            }
        })
    };
    var e = function (e) {
        o();
        $("#coupon_state").change(function () {
            o()
        });
        $("#exchange_key").click(function () {
            var e = $("input[name=cdkey]").val();
            if (!e) {
                Buff.toast(i18n("please_enter_the_redemption_code"), {type: "error"});
                return
            }
            var t = {cdkey: e};
            sendRequest("/api/activity/cdkey/exchange/", {
                data: t,
                method: "post",
                dataType: "json",
                showLoading: false,
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    Buff.toast(e.data.messages, {type: "success"});
                    setTimeout(function () {
                        location.reload()
                    }, 3e3)
                }
            })
        })
    };
    return {init: e}
}();
var MyBenefit = function () {
    var e;
    var t = function () {
        sendRequest("/api/activity/benefit/my/", {
            method: "get", dataType: "json", showLoading: false, success: function (e) {
                if (e.code != "OK") {
                    return
                }
                var t = e.data;
                if (t.length == 0) {
                    $(".nodata").show();
                    $("#data_container").hide();
                    return
                }
                var a = [];
                var i = [];
                var r = {1: "user-rights-tag_points", 4: "user-rights-tag_vip"};
                var n = {1: "points", 4: "vip"};
                for (var o = 0; o < t.length; o++) {
                    var s = t[o].dispense_sources;
                    if (s.length) {
                        var _ = "both";
                        if (s.length < 2) {
                            _ = n[s[0].value]
                        }
                        t[o].coupon_dispense_sources = _;
                        s.forEach(function (e, t) {
                            s[t]["tag_class"] = r[e.value];
                            s[t]["is_point_dispense_sources"] = e.value == 4 ? true : false
                        })
                    }
                    t[o].has_benefit ? a.push(t[o]) : i.push(t[o])
                }
                $(".nodata").hide();
                if (a.length) {
                    var c = $("#user-rights-list-own");
                    c.empty();
                    c.append(template_render("my_benefit_pat", {items: a}));
                    c.show()
                }
                if (i.length) {
                    var l = $("#user-rights-list-not-owned");
                    l.empty();
                    l.append(template_render("my_benefit_pat", {items: i}));
                    l.show()
                }
                $("#data_container").show();
                $("#user-rights-list-not-owned li").click(function () {
                    var e = $(this).data("coupon_dispense_sources");
                    var t = {
                        both: i18n("coupon_dispense_sources_both"),
                        points: i18n("coupon_dispense_sources_points"),
                        vip: i18n("coupon_dispense_sources_vip")
                    };
                    Buff.toast(t[e])
                })
            }, error: function () {
            }
        })
    };
    var a = function (e) {
        t()
    };
    return {init: a}
}();
var GiftCard = function () {
    var i = {};
    var _ = "data-ejzb_auth";
    var t = function () {
        var a = $("#receiver_info");
        var e = $("input[name=nickname]").val().trim();
        if (e == i["nickname"]) {
            return
        }
        i = {};
        a.hide();
        r();
        if (!e) {
            return
        }
        sendRequest("/api/activity/gift_card/receiver_info/", {
            method: "get",
            data: {nickname: e},
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
                i = e.data;
                if (i.id) {
                    var t = format_html('<div style="margin-top: 5px"><%= i18n("gift_card_receiver_info") %>&nbsp;<img width="26" height="26" src="<%= receiverInfo.avatar %>">&nbsp;<a href="/shop/<%= receiverInfo.id %>" target="_blank"><strong><%= receiverInfo.nickname %></strong></a></div>', {receiverInfo: i});
                    a.html(t);
                    a.show();
                    r()
                } else {
                    Buff.toast(i18n("gift_card_receiver_nickname_error"))
                }
            }
        })
    };
    var c = function () {
        var e = $("#amount_list").attr("value");
        if (e) {
            e = parseInt(e)
        }
        var t = $("input[name=nickname]").val();
        var a = i.id;
        return {amount: e, receiver_nickname: t, receiver_id: a}
    };
    var r = function () {
        var e = c();
        var t = $("#confirm_buy");
        if (e["amount"] && e["receiver_nickname"] && e["receiver_id"]) {
            t.removeClass("i_Btn_disabled")
        } else {
            t.addClass("i_Btn_disabled")
        }
    };
    var e = function () {
        var e = c();
        sendRequest("/api/activity/gift_card/fee/", {
            method: "get", data: e, success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
                var t = [i["nickname"], e.data["amount"], e.data["fee"], e.data["real_amount"]];
                $("#j_gift_card_buy_confirm .popup-desc strong").each(function (e) {
                    $(this).text(t[e])
                });
                $("#j_gift_card_buy_confirm .i_Btn_main").attr("validate_way", e.data["validate_way"]);
                var a = {
                    receiver_nickname: i["nickname"],
                    avatar: i["avatar"],
                    receiver_id: i["id"],
                    amount: e.data["amount"],
                    fee: e.data["fee"],
                    real_amount: e.data["real_amount"]
                };
                $("#j_gift_card_buy_confirm .i_Btn_main").data("buy_info", a);
                $("#j_gift_card_buy_confirm .i_Btn_main").attr(_, JSON.stringify(e.data["ejzb_auth"]));
                Popup.hide();
                Popup.show("j_gift_card_buy_confirm")
            }
        })
    };
    var l = function (e, t) {
        var a = commonAuthcodeVerifyManager(e, "/api/activity/gift_card/send_authcode/", null, "/api/activity/gift_card/buy/", c(), t);
        a.init()
    };
    var d = function (e, a) {
        QrCode.init(QrCodeType.GIFT_CARD_BUY_VERIFY, e, function (e) {
            var t = c();
            t["authcode"] = "aucode";
            t["qr_code_id"] = e;
            sendRequest("/api/activity/gift_card/buy/", {
                method: "POST", data: t, success: function (e) {
                    if (e.code != "OK") {
                        return
                    }
                    a(e.data)
                }
            })
        })
    };
    var a = function (t) {
        sendRequest("/api/activity/gift_card/query_buy_info/", {
            method: "get", success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
                t && t(e.data)
            }
        })
    };
    var n = function (o) {
        $("#amount_list").bind("change", function () {
            r()
        });
        $("input[name=nickname]").change(function (e) {
            t()
        });
        $("#confirm_buy").click(function () {
            if ($(this).hasClass("i_Btn_disabled")) {
                return
            }
            e()
        });
        var s = function (e) {
            Popup.hide();
            Buff.alert({
                title: i18n("buy_success"),
                message: i18n("gift_card_buy_success", {nickname: i["nickname"], sn: e.sn}),
                hideCancel: true,
                confirmText: i18n("ok"),
                success: function () {
                    window.location.reload()
                }
            })
        };
        $("#j_gift_card_buy_confirm .i_Btn_main").click(function () {
            var t = $(this);
            var e = $("#j_gift_card_buy_confirm #actual_payment").text();
            var a = JSON.parse(t.attr(_) || "{}");
            var i = function () {
                Popup.hide();
                CommonApi.User.info(["ejzb_auth"], function (e) {
                    Popup.show("j_gift_card_buy_confirm");
                    t.attr(_, JSON.stringify(e.ejzb_auth))
                })
            };
            if (ejzbAuthVerifyManager().process(a, null, null, e, i)) {
                return
            }
            var r = $(this).attr("validate_way");
            if (r == "pay_password") {
                payPasswordPopup(e, function (e) {
                    Popup.hide();
                    var t = c();
                    t["authcode"] = e;
                    sendRequest("/api/activity/gift_card/buy/", {
                        method: "post", data: t, success: function (e) {
                            if (e.code != "OK") {
                                Buff.toast(e.error);
                                return
                            }
                            s(e.data)
                        }
                    })
                }, function () {
                    Popup.hide();
                    Popup.show("j_gift_card_buy_confirm")
                }, false).show()
            } else if (r == "qr_code") {
                var n = $(this).data("buy_info");
                d(n, s)
            } else {
                l(o, s)
            }
        });
        $("#amount_list").bind("click", function () {
            a(function (e) {
                if (e.month_buy_count >= e.max_month_buy_count || parseInt(e.month_buy_amount) >= parseInt(e.max_month_buy_amount)) {
                    r();
                    Buff.alert({
                        title: i18n("gift_card_query_title"),
                        message: e.buy_info,
                        hideCancel: true,
                        confirmText: i18n("ok")
                    });
                    return
                }
            })
        });
        $("#query_gift_card_info").click(function () {
            a(function (e) {
                var t = e.buy_info;
                Buff.alert({
                    title: i18n("gift_card_query_title"),
                    message: t,
                    hideCancel: true,
                    confirmText: i18n("ok")
                })
            })
        })
    };
    return {init: n}
}();
var Premium = function () {
    var s = {};
    var e = function () {
    };
    var t = function (e, t, a) {
    };
    var _ = function () {
        sendRequest("/account/api/premium_buy", {
            data: s, dataType: "json", method: "POST", success: function (e) {
                if (e.code != "OK") {
                    var t = e.error || i18n("premium_buy_fail");
                    Buff.toast(t, {type: "warning"});
                    return
                }
                var a = function () {
                    Buff.alert({
                        title: i18n("premium_waiting_for_payment"),
                        message: i18n("premium_havent_successfully_paid"),
                        confirmText: i18n("premium_continue_to_pay"),
                        cancelText: i18n("premium_confirm_leave"),
                        success: function () {
                            Popup.show("j_popup_wx")
                        },
                        cancel: function () {
                            window.location.reload()
                        },
                        onClose: function () {
                            window.location.reload()
                        }
                    })
                };
                var i = 5;
                if (s.pay_method == BuffConfig.PayMethod.WX_PAGE) {
                    var r = e.data.pay_params;
                    i = r.pay_expire_timeout;
                    wxPayShowQrcode(s.price, r.url, i, a)
                } else if (s.pay_method == BuffConfig.PayMethod.ALIPAY_PAGE) {
                    var r = e.data.pay_params;
                    location.href = r.url
                } else {
                    $("#loading-cover").show()
                }
                n(e.data.order_id, s.pay_method, i, true)
            }, error: function (e) {
                $("#loading-cover").hide();
                Popup.hide();
                Buff.alert({title: i18n("prompt"), message: i18n("the_system_is_busy_please"), hideCancel: true})
            }
        })
    };
    var n = function (e, t, a, i) {
        var r = function (e, t) {
            sendRequest("/account/api/premium_record", {
                data: {order_id: e},
                dataType: "json",
                showLoading: false,
                method: "GET",
                success: function (e) {
                    t.notify();
                    if (e.code != "OK") {
                        return
                    }
                    if (e.data.items.length != 1) {
                        return
                    }
                    order = e.data.items[0];
                    if (order.state == "PAY_SUCCESS") {
                        Buff.toast(i18n("premium_buy_success"), {type: "success"});
                        t.resolve();
                        if (i) {
                            setTimeout(function () {
                                window.location.reload()
                            }, 500)
                        }
                    } else if (order.state == "PAY_FAILED") {
                        t.reject()
                    }
                }
            })
        };
        payWaitResult(e, t, a, r)
    };
    var a = function () {
        sendRequest("/account/api/premium_package", {
            data: {}, dataType: "json", method: "GET", success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "warning"});
                    return
                }
                Popup.hide();
                var t = e.data.pay_methods;
                var a = e.data.packages;
                var i = template_render("pay_content_premium", {premium_package: a});
                var r = a[0];
                var n = payMethodPopup();
                var o = {
                    pay_methods: e.data.pay_methods,
                    price: r.discount_price,
                    pay_content: i,
                    onPaymethodChange: function (e, t, a) {
                        s.pay_method = e;
                        s.free_password = t !== "false";
                        s.ejzb_auth = a
                    },
                    onPayContentChange: function (e, t) {
                        s.package_id = e;
                        s.price = t
                    },
                    onConfirm: function () {
                        if (ejzbAuthVerifyManager().process(s.ejzb_auth, n, o, s.price)) {
                            return
                        }
                        if (!s.free_password) {
                            Popup.hide();
                            payPasswordPopup(s.price, function (e) {
                                Popup.hide();
                                s.password = e;
                                _()
                            }, function () {
                                Popup.hide();
                                n.show(o)
                            }).show();
                            return
                        }
                        _()
                    }
                };
                n.show(o)
            }
        })
    };
    return {init: e, join_plus: a, show_expired_popup: t, check_after_pay: n}
}();
var createRollRoom = function (r) {
    var n = [];
    var i = [];
    var o = {};
    var l = {};
    var d = {NORMAL: 0, PASSWORD: 1};
    var r = r || 100;
    var s = "";

    function u(e) {
        var t = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if (!t.test(e)) {
            return false
        } else {
            return true
        }
    }

    var t = function () {
        var e = 0;
        for (var t = 0; t < n.length; t++) {
            if (n[t].selected == true) {
                e += 1
            }
        }
        return e
    };
    var _ = function () {
        var e = 0;
        var t = 0;
        for (var a = 0; a < n.length; a++) {
            if (n[a].selected == true) {
                t += parseFloat(o[n[a].goods_id].steam_price_cny);
                e += 1
            }
        }
        $("#reward_count").text(e + "/" + r);
        $(".input-hud").text("≤" + e);
        $("#total_price").text("￥" + t.toFixed(2));
        var i = template_render("prize_pool_pat", {count: e, items: n, goods_infos: o});
        $(".prize_pool .switch_box").html(i)
    };
    var c = function () {
        var e = 0;
        for (var t = 0; t < n.length; t++) {
            if (n[t].selected != true) e += 1
        }
        var a = template_render("buff_backpack_pat", {
            count: e,
            items: n,
            goods_infos: o,
            search: s.toLocaleLowerCase()
        });
        $(".buff_backpack .switch_box").html(a)
    };
    var e = function () {
        $(".step_tab").removeClass("active");
        $(".step_tab.info").addClass("active");
        $("#tab_info").show();
        $("#tab_pool").hide()
    };
    var a = function () {
        $(".step_tab").removeClass("active");
        $(".step_tab.pool").addClass("active");
        $("#tab_info").hide();
        $("#tab_pool").show()
    };
    var p = function () {
        var e = $('input[name="name"]').val().trim();
        if (e.length < 1) {
            Buff.toast("请填写活动名称");
            $('input[name="name"]').addClass("i_Text_error");
            return false
        } else if (e.length > 12) {
            Buff.toast("活动名称不能超过12个字");
            $('input[name="name"]').addClass("i_Text_error");
            return false
        }
        var t = $('textarea[name="brief"]').val().trim();
        if (t.length < 5) {
            Buff.toast("活动介绍不小于5个字");
            $('textarea[name="brief"]').addClass("i_Text_error");
            return false
        } else if (t.length > 200) {
            Buff.toast("活动介绍不超过200个字");
            $('textarea[name="brief"]').addClass("i_Text_error");
            return false
        }
        var a = $('.w-Select[name="date"]').attr("value");
        if (typeof a == "undefined" || a.length < 1) {
            Buff.toast("请选择开奖日期");
            $('.w-Select[name="date"]').addClass("i_Text_error");
            return false
        }
        var i = $('input[name="hours"]').val();
        var r = $('input[name="minutes"]').val();
        if (i == "小时") {
            Buff.toast("请选择开奖时间");
            $('input[name="hours"]').addClass("i_Text_error");
            return false
        }
        if (r == "分钟") {
            Buff.toast("请选择开奖时间");
            $('input[name="minutes"]').addClass("i_Text_error");
            return false
        }
        var n = a + " " + i + ":" + r + ":00";
        if (moment(n, "YYYY-MM-DD hh:mm:ss") - moment().add(10, "minutes") < 0) {
            Buff.toast("开奖时间必须晚于10分钟之后");
            $('input[name="hours"]').addClass("i_Text_error");
            $('input[name="minutes"]').addClass("i_Text_error");
            return false
        }
        var o = $('.w-Select[name="type"]').attr("value");
        if (typeof o == "undefined") {
            Buff.toast("请选择活动类型");
            $('.w-Select[name="type"]').addClass("i_Text_error");
            return false
        }
        var s = $('input[name="password"]').val();
        if (o == d.PASSWORD) {
            if (s.length < 4) {
                Buff.toast("请输入大于4位的密码");
                $('input[name="password"]').addClass("i_Text_error");
                return false
            } else if (s.length > 24) {
                Buff.toast("请输入小于24位的密码");
                $('input[name="password"]').addClass("i_Text_error");
                return false
            }
            l.password = s
        } else {
            delete l.password
        }
        var _ = $('input[name="intro_name"]').val();
        if (_.length > 24) {
            Buff.toast("链接文本不能超过24个字");
            $('input[name="intro_name"]').addClass("i_Text_error");
            return false
        } else if (_.length > 0 && _.length < 2) {
            Buff.toast("链接文本不能少于2个字");
            $('input[name="intro_name"]').addClass("i_Text_error");
            return false
        }
        var c = $('input[name="intro_url"]').val();
        if (c.length > 0 && u(c) == false) {
            Buff.toast("请输入正确的链接");
            $('input[name="intro_url"]').addClass("i_Text_error");
            return false
        }
        if (c.length > 0 && _.length < 1) {
            Buff.toast("请输入链接文字");
            $('input[name="intro_name"]').addClass("i_Text_error");
            return false
        }
        if (_.length > 0 && c < 1) {
            Buff.toast("请输入链接地址");
            $('input[name="intro_url"]').addClass("i_Text_error");
            return false
        }
        l.appid = $('.w-Select[name="appid"]').attr("value");
        l.name = e;
        l.brief = t;
        l.draw_time = n;
        l.type = o;
        if (_.length > 0) {
            l.intro_name = _
        } else {
            delete l.intro_name
        }
        if (c.length > 0) {
            l.intro_url = c
        } else {
            delete l.intro_url
        }
        return true
    };
    var f = function () {
        var e = 0;
        var t = [];
        for (var a = 0; a < n.length; a++) {
            if (n[a].selected == true) {
                t.push(n[a].id);
                e += 1
            }
        }
        if (e < 1) {
            Buff.toast("请选择至少一件饰品");
            return false
        }
        var i = parseInt($('input[name="reward_count"]').val());
        if (isNaN(i) || i < 1) {
            Buff.toast("请输入获奖人数");
            $('input[name="reward_count"]').addClass("i_Text_error");
            return false
        } else if (i > e) {
            Buff.toast("可获奖人数需小于等于奖池饰品数量");
            $('input[name="reward_count"]').addClass("i_Text_error");
            return false
        }
        l.reward_count = i;
        l.backpack_ids = t.join(",");
        return true
    };
    var m = function () {
        sendRequest("/api/market/backpack", {
            data: {appid: l.appid, page_size: 1e3},
            showLoading: false,
            method: "GET",
            success: function (e) {
                o = e.data.goods_infos;
                var t = [];
                for (var a = 0; a < n.length; a++) {
                    if (n[a].selected == true) {
                        t.push(n[a].asset_info.assetid)
                    }
                }
                n = [];
                for (var a = 0; a < e.data.items.length; a++) {
                    var i = e.data.items[a].asset_info.assetid;
                    if (t.indexOf(i) > -1) {
                        e.data.items[a].selected = true
                    }
                }
                n = e.data.items;
                c();
                _()
            }
        })
    };
    var h = function () {
        $("body").on("focus", ".timepicker input", function () {
            if ($(this).parent().hasClass("disabled")) {
                $(this).blur();
                return false
            } else {
                var e = $(".timepicker input").index(this);
                $(".timepicker-drop").eq(e).show()
            }
        }).on("blur", ".timepicker input", function () {
            $(this).removeClass("i_Text_error");
            $('input[name="hours"]').removeClass("i_Text_error");
            $('input[name="minutes"]').removeClass("i_Text_error");
            var t = this;
            setTimeout(function () {
                var e = $(".timepicker input").index(t);
                $(".timepicker-drop").eq(e).hide()
            }, 200)
        }).on("keypress", ".timepicker input", function () {
            return false
        }).on("keypress", "input[name='reward_count']", function () {
            var e = event.keyCode || event.charCode;
            var t = String.fromCharCode(e);
            return /\d/.test(t)
        }).on("click", ".timepicker-drop li", function () {
            $(this).addClass("on").siblings().removeClass("on");
            var e = $(this).parent().attr("data-for");
            $("#" + e).val($(this).html())
        }).on("change", '.w-Select[name="type"]', function () {
            var e = $(this).attr("value");
            if (e == d.PASSWORD) {
                $("#row_password").show()
            } else {
                $("#row_password").hide()
            }
        }).on("click", ".buff_backpack .switch_box .item-card", function () {
            tooltip.abortLast();
            var e = $(this).data("index");
            var t = 0;
            for (var a = 0; a < n.length; a++) {
                if (n[a].selected == true) t += 1
            }
            if (t >= r) {
                Buff.toast("超过最大可添加件数");
                return
            }
            n[e].selected = true;
            i.push(n[e]);
            c();
            _()
        }).on("click", ".prize_pool .switch_box .item-card", function () {
            tooltip.abortLast();
            var e = $(this).data("index");
            n[e].selected = false;
            c();
            _()
        }).on("change", '.w-Select[name="appid"]', function () {
            var e = $(this).attr("value");
            if (typeof l.appid != "undefined" && l.appid != e && t() > 0) {
                Buff.alert({
                    title: "切换游戏",
                    message: "切换游戏后，将清除已添加的奖池信息，你可以从“我的背包”中添加物品。",
                    type: "error",
                    confirmText: "确定切换",
                    success: function () {
                        l.appid = e;
                        n = []
                    },
                    cancel: function () {
                        Buff.setCompValue("app-select", l.appid)
                    },
                    onClose: function () {
                        Buff.setCompValue("app-select", l.appid)
                    }
                })
            }
        }).on("blur", "#search", function () {
            if (s.length < 1) {
                $("#search-area").hide();
                $("#btn-search").show()
            }
        }).on("input", "#search", function () {
            s = $(this).val();
            c()
        }).on("change", "input,textarea,.w-Select", function () {
            $(this).removeClass("i_Text_error")
        }).on("click", "#go_steam_inventory", function () {
            window.open("/market/steam_inventory?game=" + BuffConfig.SteamAPP.APPID_MAPS[l.appid])
        });
        $("#refresh_backpack").click(function () {
            m()
        });
        $(".step_tab.info").click(function () {
            e()
        });
        $(".step_tab.pool").click(function () {
            if (p()) {
                a();
                m()
            }
        });
        $("#set_pool").click(function () {
            if (p()) {
                a();
                m()
            }
        });
        $("#publish_room").click(function () {
            if (f()) {
                Buff.alert({
                    title: "创建免费饰品活动",
                    message: "免费饰品活动创建后不能取消，请确认是否创建。",
                    success: function () {
                        sendRequest("/api/roll/room/create", {
                            method: "POST", data: l, success: function (e) {
                                if (e.code != "OK") {
                                    Buff.toast(e.error)
                                } else {
                                    window.location.href = "/roll/room/" + e.data.id
                                }
                            }
                        })
                    },
                    confirmText: "确认创建",
                    cancelText: "取消创建"
                })
            }
        });
        $("#set_info").click(function () {
            e()
        });
        $("#btn-search").click(function () {
            $(this).hide();
            $("#search-area").css({display: "inline-block"})
        })
    };
    return {init: h}
};
$(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (typeof WebViewInfo != "undefined" && WebViewInfo.webview_from) return;
        if (getCookie("webview_from")) return;
        if (window.g && window.g.is_partner_appid) return;
        var e = '<div id="app-download-bar" style="">' + '<img src="/static/images/app_logo.jpg" class="app-logo">' + "<h3>" + i18n("platform_name") + "</h3>" + "<h5>" + i18n("slogan") + "</h5>" + '<a class="download-btn" href="https://adl.netease.com/d/g/buff/c/gw">' + i18n("download") + "</a>" + "</div>";
        $("body").prepend(e);
        var t = parseInt($("body").css("padding-top")) || $("#app-download-bar").height();
        $("body").css({"padding-top": t})
    }
});
var PreviewScreenShots = function () {
    var s = "";
    var _ = function () {
        return s == "my_shop_selling" ? "top_bookmark" : s
    };
    var n = function (e) {
        var t = {tab: _(), switch_val: e};
        sendRequest("/api/market/inspect_show_switch_config", {
            data: t,
            method: "POST",
            dataType: "json",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
            }
        })
    };
    var o = function (r, n) {
        var o = {
            selling: {row: "tr.selling", img: "td.img_td img"},
            top_bookmark: {row: "li.top_bookmark", img: "a.img_a img"},
            my_inventory: {row: "li.my_inventory", img: "a.img_a img"},
            my_selling: {row: "li.my_selling", img: "a.img_a img"},
            my_shop_selling: {row: "li.my_shop_selling", img: "a.img_a img"}
        };
        $(o[s]["row"]).each(function (e) {
            var t = $(this);
            var a = t.find(o[s]["img"]);
            if (a.data(r)) {
                var i = a.parent();
                if (r == "inspect_trn_url" && !a.data("src_url_max_width")) {
                    if (_() == "my_selling") {
                        a.data("src_url_max_width", "70%");
                        a.data("src_url_max_height", "none")
                    } else {
                        a.data("src_url_max_width", a.css("max-width"));
                        a.data("src_url_max_height", a.css("max-height"))
                    }
                    a.data("inspect_trn_url_max_width", "90%");
                    a.data("inspect_trn_url_max_height", "65%")
                }
                if (a.hasClass("lazy")) {
                    a.attr("data-original", a.data(r))
                }
                i.css("background-image", "url('" + i.data(r + "_background") + "')");
                a.attr("src", a.data(r));
                if (_() != "selling") {
                    a.css("max-width", a.data(r + "_max_width"));
                    a.css("max-height", a.data(r + "_max_height"))
                }
            }
            if (n) {
                n(a.siblings("a.csgo-inspect-view").first(), a.data(r))
            }
        })
    };
    var a = function () {
        var e = i18n("preview_screenshots");
        $("#preview_screenshots").html('<span value="inspect_trn_url"><i class="icon icon_checkbox"></i>' + e + "</span>")
    };
    var e = function (e, t, i) {
        s = e;
        if (t) {
            a()
        }
        var r = function (e, t, a) {
            if (_() == "selling" && i) {
                i(_(), e, t ? a : "off")
            }
        };
        $(".w-Checkbox[name=preview_screenshots]").change(function () {
            var e = $(this);
            var t = e.attr("value");
            var a = t == "inspect_trn_url" ? "on" : "off";
            n(a);
            o(t || "src_url", function (e, t) {
                r(e, t, a)
            })
        });
        if (t == "on") {
            $(".w-Checkbox[name=preview_screenshots] span").addClass("on");
            o("inspect_trn_url", function (e, t) {
                r(e, t, "on")
            })
        }
    };
    return {init: e}
};
var PreviewScreenShotsDataGenerator = function (h) {
    var e = function (e, t, a, i) {
        var r = $("#inventory_price").val();
        var n = "sell_min_price";
        var o = g.currency.default;
        if (r && r == "steam") {
            n = "steam_price";
            o = "USD"
        }
        for (var s = 0; s < e.length; s++) {
            var _ = e[s];
            var c = s >= i ? "lazy" : "";
            var l = _.asset_info.info.inspect_trn_url;
            var d = _.asset_info.info.icon_url;
            var u = _.can_use_inspect_trn_url;
            var p = "";
            var f = u ? l : d;
            if (c) {
                p = u ? l : d;
                f = u ? t : ""
            }
            e[s]["lazy_class"] = c;
            e[s]["original_img"] = p;
            e[s]["img_src"] = f;
            if (h == OriginConst.INVENTORY) {
                var m = _[n] || 0;
                e[s]["item_info"] = {
                    price: m,
                    state: _.state,
                    state_text: _.state_text,
                    tradable_text: _.tradable_text,
                    original_currency: o,
                    sell_order_id: _.sell_order_id,
                    sell_order_mode: _.sell_order_mode
                }
            } else {
                e[s]["order_info"] = v(_)
            }
        }
    };
    var v = function (e) {
        return {
            id: e.id,
            goods_id: e.goods_id,
            price: e.price,
            allow_bargain: e.allow_bargain,
            user_id: e.user_id,
            description: e.description,
            lowest_bargain_price: e.lowest_bargain_price,
            mode: e.mode,
            bookmarked: e.bookmarked,
            state: e.state
        }
    };
    return {process: e, collect_order_info: v}
};
var splitPayPopup = function () {
    "use strict";
    var t = 6;
    var i = 18;
    var a = g.game;
    var s = 0;
    var _ = null;
    var o = null;
    var e, c, l, d, u = null, p = null, f = function (t, e) {
        sendRequest("/api/market/bill_order/split_pay/amount_hint", {
            data: {total_price: t},
            dataType: "json",
            method: "GET",
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "warning"});
                    return
                }
                $(".splitpay-moneys").append(template_render("pay_amount_pat", {items: e.data.hints}));
                if (!o) {
                    o = {
                        min_amount: parseFloat(e.data.min_amount).toFixed(2) * 100,
                        max_amount: parseFloat(e.data.max_amount).toFixed(2) * 100,
                        total_price: t
                    }
                }
                if (!d) {
                    $(".splitpay-moneys span:first").click()
                }
            },
            error: function () {
                $("#loading-cover").hide();
                Popup.hide();
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("the_system_is_busy_please"),
                    hideCancel: true,
                    success: function () {
                        window.location.href = "/market/buy_order/history?game=" + a
                    }
                })
            }
        })
    }, r = function (t) {
        sendRequest("/api/market/goods/buy", {
            data: {
                game: a,
                goods_id: l.goods_id,
                sell_order_id: l.sell_order_id,
                price: l.price,
                pay_method: l.pay_method,
                allow_tradable_cooldown: l.allow_tradable_cooldown,
                token: getParams().token || "",
                cdkey_id: l.cdkey_id
            }, dataType: "json", method: "POST", success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "warning"});
                    return
                }
                d = e.data.id;
                m(t)
            }, error: function () {
                $("#loading-cover").hide();
                Popup.hide();
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("the_system_is_busy_please"),
                    hideCancel: true,
                    success: function () {
                        window.location.href = "/market/buy_order/history?game=" + a
                    }
                })
            }, complete: function (e) {
                if (e.responseJSON.code == "Realname Required" || e.responseJSON.code == "Market Ban Epay Balance" || e.responseJSON.code == "Seller Realname Required") {
                    $(".pay-btn").removeClass("i_Btn_disabled")
                }
            }
        })
    }, m = function (e) {
        sendRequest("/api/market/bill_order/split_pay/pay", {
            data: {
                game: a,
                bill_order_id: d,
                amount: e,
                pay_method: t
            }, dataType: "json", method: "POST", success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "warning"});
                    return
                }
                C()
            }, error: function () {
            }
        })
    }, n = function (e) {
        if (e == 0) {
            return "00"
        } else if (e > 0 && e < 10) {
            return "0" + e
        }
        return "" + e
    }, h = function (e) {
        var t = $("span.split-pay-count-down");
        var a = parseInt(e);
        if (a >= 0) {
            var i = moment.duration(a, "seconds");
            t.text(n(i.minutes()) + ":" + n(i.seconds()));
            $(".tip_count_down").show()
        }
    }, v = function (e) {
        sendRequest("/api/market/bill_order/notify_buyer_to_send_offer", {
            method: "POST",
            dataType: "json",
            data: {bill_order_id: e.id, game: e.game},
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"});
                    return
                }
            }
        })
    }, y = function (e) {
        var t = e.id;
        sendRequest("/api/market/bill_order/ask_seller_to_send_offer", {
            method: "POST",
            dataType: "json",
            data: {bill_orders: [t], game: e.game},
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "error"})
                } else if (e.data[t] != "OK") {
                    Buff.toast(e.data[t], {type: "error"})
                } else {
                    Buff.toast(i18n("please_wait_for_seller_to"), {type: "success"})
                }
                setTimeout(function () {
                    window.location.reload()
                }, 3e3)
            }
        })
    }, b = function (e) {
        return e.mode == 2 && e.state == "TO_DELIVER" || e.mode == 5 && e.progress == 305 || e.state == "SUCCESS" || false
    }, w = function (e, a) {
        sendRequest("/api/market/bill_order/batch/info", {
            data: {bill_orders: e},
            dataType: "json",
            method: "GET",
            showLoading: false,
            showError: false,
            success: function (e) {
                if (e.code != "OK") {
                    return
                }
                if (e.data.items.length != 1) {
                    return
                }
                var t = e.data.items[0];
                a.notify(t);
                if (b(t)) {
                    a.resolve(t)
                }
                if (l.pay_method == i) {
                    if (t.progress == 104 || t.progress == 102 && t.pay_expire_timeout <= 0) {
                        a.reject(t)
                    } else if (t.progress == 102) {
                        a.progress()
                    }
                }
            },
            error: function () {
            }
        })
    }, k = function () {
        $("#j_popup_wx").addClass("expired");
        $("#popup_cont_paying").hide();
        $("#popup_cont_expired").show();
        $(".tip_count_down").hide();
        $(".tip_timeout").show()
    }, x = function (e, t) {
        if (p) {
            return
        }
        if (t <= -1) {
            return
        }
        var a = 0, i = t, r = false;
        var n = $.Deferred();
        n.done(function (e) {
            r = true;
            Popup.hide();
            clearInterval(u);
            u = undefined;
            if (e.mode == 5) {
                $("#j_popup_payed").remove();
                var t = template_render("manual_plus_pay_success_pat");
                $("body").append(t);
                $("#j_popup_payed #go_to_app,.popup-close").click(function () {
                    Popup.hide();
                    v(e);
                    Buff.toast(i18n("add_in_5_minutes_to"), {type: "success"});
                    setTimeout(function () {
                        window.location.reload()
                    }, 3e3)
                });
                $("#j_popup_payed #ask_seller").click(function () {
                    Popup.hide();
                    y(e)
                });
                Popup.show("j_popup_payed")
            } else {
                Buff.alert({
                    type: "success",
                    title: e.mode == 2 ? i18n("the_payment_is_successful") : i18n("buy_success"),
                    message: e.mode == 2 ? i18n("please_wait_for_the_seller") : i18n("please_in_the_backpack_view"),
                    hideCancel: true,
                    success: function () {
                        window.location.reload()
                    }
                })
            }
        });
        n.fail(function (e) {
            r = true;
            clearInterval(u);
            u = undefined;
            if (e.progress == 104) {
                $(".tip_count_down").hide()
            } else if (e.progress == 102 && e.pay_expire_timeout <= 0) {
                k()
            }
        });
        n.progress(function () {
            r = true;
            if (u) {
                j()
            }
        });
        if (u) {
            return
        }
        u = setInterval(function () {
            a += 1;
            if (a == 1 || a <= i && r) {
                r = false;
                e(d, n)
            } else if (a > i) {
                if (!u) {
                    return
                }
                clearInterval(u);
                u = null;
                if (!p) {
                    k()
                }
                return
            }
            h(Math.max(i - a, 0))
        }, 1e3)
    }, C = function () {
        sendRequest("/api/market/bill_order/wx_pay_qrcode", {
            data: {bill_order_id: d},
            dataType: "json",
            method: "GET",
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "warning"});
                    return
                }
                $("#wx-pay-qrcode").html("");
                $("#wx-pay-qrcode").attr("title", "");
                var t = e.data;
                var a = t.pay_expire_timeout;
                new QRCode(document.getElementById("wx-pay-qrcode"), {text: t.url, width: 140, height: 140});
                B("paying");
                if (!u) {
                    clearInterval(p);
                    p = null;
                    $(".tip_count_down").hide();
                    setTimeout(function () {
                        x(w, a)
                    }, 2500)
                }
            },
            error: function () {
            }
        })
    }, j = function (o) {
        sendRequest("/api/market/bill_order/split_pay/order_info", {
            data: {game: a, bill_order_id: d},
            dataType: "json",
            method: "GET",
            showLoading: false,
            success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(e.error, {type: "warning"});
                    return
                }
                s = e.data.paid_price;
                $("#paid_amount_text").text(formatPriceNormalYuan(s));
                c = e.data.remained_price;
                var a = e.data.pay_expire_timeout;
                if (a != -1) {
                    $("#unpaid_amount_text").text(formatPriceNormalYuan(c))
                }
                var t = parseFloat(parseInt(s) / (parseInt(c) + parseInt(s))).toFixed(2) * 100 + "%";
                $(".scope-progress-bar").css("width", t);
                var i = e.data.pay_orders;
                var r = {
                    PAYING: "c_Orange",
                    PAY_SUCCESS: "c_Green",
                    REFUNDING: "c_Red",
                    REFUNDED: "c_Red",
                    FAILURE: "c_Red"
                };
                _ = null;
                for (var n = 0; n < i.length; n++) {
                    if (i[n].state == "PAYING") {
                        _ = i[n]
                    }
                    i[n].state_text_class = r[i[n].state];
                    i[n].real_price_text_class = i[n].state == "PAYING" || i[n].state == "PAY_SUCCESS" ? "c_Orange" : "c_Gray"
                }
                $("#splitpay-list").html("");
                if (o && !_ && a <= -1) {
                    d = null;
                    s = 0;
                    T("");
                    $("#paid_amount_text").text("");
                    $(".scope-progress-bar").css("width", "0%");
                    return
                }
                $("#splitpay-list").html(template_render("pay_record_list_pat", {items: i}));
                $("#splitpay-list").show();
                if (c == 0) {
                    return
                }
                if (_) {
                    if (o) {
                        T(_.real_price);
                        m(_.real_price)
                    } else if (_.real_price == $(".i_Text_splitpay").val()) {
                        B("paying")
                    }
                } else {
                    clearInterval(u);
                    u = null;
                    $(".tip_count_down").hide();
                    B();
                    setTimeout(function () {
                        if (u) {
                            return
                        }
                        if (p) {
                            return
                        }
                        if (a <= -1) {
                            return
                        }
                        var e = 0, t = a;
                        p = setInterval(function () {
                            if (!p) {
                                return
                            }
                            e += 1;
                            if (e > t) {
                                clearInterval(p);
                                p = null;
                                if (!u) {
                                    k()
                                }
                                return
                            }
                            h(Math.max(t - e, 0))
                        }, 1e3)
                    }, 2e3)
                }
            },
            error: function () {
                $("#loading-cover").hide();
                Popup.hide();
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("the_system_is_busy_please"),
                    hideCancel: true,
                    success: function () {
                        window.location.href = "/market/buy_order/history?game=" + a
                    }
                })
            }
        })
    }, P = function (e, t) {
        l = e;
        var a, i, r, n = true, o = false, s = false, _;
        if (!$.isEmptyObject(t)) {
            r = t.price;
            _ = "";
            d = t.id;
            l = t;
            l.discounted_price = r;
            if (b(t)) {
                a = false;
                i = true;
                o = true
            } else {
                switch (t.state) {
                    case"FAIL":
                        a = false;
                        i = true;
                        _ = "¥0";
                        n = false;
                        break;
                    case"PAYING":
                        a = true;
                        i = false;
                        break;
                    default:
                        a = false;
                        i = true;
                        o = true;
                        break
                }
                if (t.state == "FAIL" && (t.progress == 106 || t.progress == 105)) {
                    o = true;
                    n = true
                }
                if (t.state == "FAIL" && t.progress == 104) {
                    s = true
                }
                if (t.state == "PAYING" && t.pay_expire_timeout <= -1) {
                    i = true;
                    a = false
                }
            }
        } else {
            r = l.discounted_price;
            _ = formatPriceNormalYuan(r);
            i = false;
            a = true
        }
        $("#j_popup_wx").remove();
        $("body").append($(template_render("split_pay_pat", {
            unpaid_amount: _,
            total_price: r,
            total_price_text: formatPriceNormalYuan(r),
            paid_amount_text: "¥0",
            only_order_list: i,
            show_progress_bar: n,
            show_paid_info: o,
            show_fail_reason: s
        })));
        Popup.show("j_popup_wx");
        Buff.pricePatten("input[name=paid_amount]");
        f(r, a);
        if (d) {
            j(a)
        }
    }, T = function (e) {
        $(".i_Text_splitpay").val(e)
    }, B = function (e) {
        if (e == "paying") {
            $("#popup_cont_paying").show();
            $("#popup_cont_expired").hide()
        } else {
            $("#popup_cont_paying").hide();
            $("#popup_cont_expired").show()
        }
    }, S = function (e) {
        var t = parseFloat(c).toFixed(2) * 100;
        if (e > t) {
            $(".i_Text_splitpay").val(c)
        }
    }, O = function (e) {
        var t = parseFloat(e).toFixed(2) * 100;
        var a = o["min_amount"];
        var i = o["max_amount"];
        if (t < a) {
            if (t != parseFloat(l.discounted_price - s).toFixed(2) * 100) {
                var r = parseFloat(a / 100);
                Buff.toast(i18n("split_pay_min_amount_invalidate", {amount: formatPriceNormalYuan(r)}));
                $(".i_Text_splitpay").addClass("i_Text_splitpay_error");
                return false
            }
        }
        if (t > i) {
            var n = parseFloat(i / 100);
            Buff.toast(i18n("split_pay_max_amount_invalidate", {amount: formatPriceNormalYuan(n)}));
            $(".i_Text_splitpay").addClass("i_Text_splitpay_error");
            return false
        }
        S(t);
        return true
    }, q = function () {
        $(document).on("blur", ".i_Text_splitpay", function () {
            var e = $(this).val();
            if (e) {
                if (!O(e)) {
                    return
                }
            }
            if (_ && e == _.real_price) {
                return
            }
            B()
        });
        $(document).on("click", ".splitpay-moneys span.normal", function () {
            $(".i_Text_splitpay").removeClass("i_Text_splitpay_error");
            T($(this).text());
            S(parseFloat($(this).text()).toFixed(2) * 100);
            B()
        });
        $(document).on("click", ".splitpay-moneys span.remaining_all", function () {
            $(".i_Text_splitpay").removeClass("i_Text_splitpay_error");
            var e = parseInt(l.discounted_price * 1e3 / 10), t = parseInt(s * 1e3 / 10);
            T((e - t) / 100);
            B()
        });
        $(document).on("click", ".i_Btn_splitpay", function () {
            if (!$(".i_Text_splitpay").val()) {
                Buff.toast("请填写金额");
                return
            }
            if (!O($(".i_Text_splitpay").val())) {
                return
            }
            var e = $(".i_Text_splitpay").val();
            if (!d) {
                r(e)
            } else {
                m(e)
            }
        });
        $(document).on("click", "#splitpay-list li", function () {
            if ($(this).data("state") == "PAYING") {
                var e = $(this).data("price");
                T(e)
            }
        });
        $(document).on("click", ".cancel_split_pay", function () {
            Popup.hide();
            if (!d) {
                window.location.reload();
                return
            }
            Buff.alert({
                title: i18n("split_pay_cancel_order_title"),
                message: i18n("split_pay_cancel_order_content"),
                confirmText: i18n("split_pay_continue_to_pay"),
                cancelText: i18n("split_pay_confirm_leave"),
                success: function () {
                    Popup.show("j_popup_wx")
                },
                cancel: function () {
                    $("#loading-cover").show();
                    sendRequest("/api/market/bill_order/close_pay_order", {
                        data: {game: a, bill_order_id: d},
                        dataType: "json",
                        method: "POST",
                        success: function (e) {
                            if (e.code != "OK") {
                                Buff.toast(e.error, {type: "warning"});
                                return
                            }
                            Buff.toast("取消成功", {type: "success"});
                            window.location.reload()
                        },
                        error: function () {
                            $("#loading-cover").hide();
                            Buff.toast(i18n("the_system_is_busy_please"), {type: "warning"})
                        }
                    })
                }
            })
        });
        $(document).on("click", "#j_popup_wx .popup-split-pay-close", function () {
            Popup.hide();
            if (!d || $("#j_popup_wx").hasClass("expired")) {
                window.location.reload();
                return
            }
            var e = $.Deferred();
            e.done(function (e) {
            });
            e.fail(function (e) {
            });
            e.progress(function (e) {
                if (e.pay_expire_timeout > -1) {
                    Buff.alert({
                        title: i18n("waiting_for_payment"),
                        message: i18n("you_havent_successfully_paid_the"),
                        confirmText: i18n("continue_to_pay"),
                        cancelText: i18n("confirm_leave"),
                        success: function () {
                            Popup.show("j_popup_wx")
                        },
                        cancel: function () {
                            window.location.reload()
                        },
                        onClose: function () {
                            window.location.reload()
                        }
                    })
                }
            });
            w(d, e)
        })
    };
    return function () {
        if (!e) {
            q();
            e = {show: P}
        }
        return e
    }
}();
var payPasswordPopup = function (t, i, e, a) {
    var r = "j_popup_pay_password", n = "#" + r, o = "#j_passwords input", s = "#j_password_hidden input";
    var _ = function () {
        console.log(t);
        var e = $(n);
        e.remove();
        a = a == undefined ? true : a;
        $("body").append($(template_render("pay_password_pat", {
            pay_price: formatPriceNormalYuan(t),
            other_pay_way: a
        })));
        Popup.show(r);
        $(o).eq(0).focus()
    };
    var c = function () {
        return $(o)
    };
    var l = function () {
        return $(s)
    };
    var d = function () {
        $(document).off("click", n + " .other_pay_method");
        $(document).on("click", n + " .other_pay_method", function () {
            e()
        });
        $(document).off("input", o).off("keydown", o).off("focus", o);
        $(document).on("input", o, function (e) {
            var t = c();
            var a = l();
            var i = t.index(this);
            a.eq(i).val($(this).val());
            r();
            if ($(this).val() == "") {
                if (i != 0) {
                    t.eq(i - 1).focus()
                }
            } else {
                $(this).val("*");
                if (i != 5) {
                    t.eq(i + 1).focus()
                } else {
                }
            }
        }).on("keydown", o, function (e) {
            var t = c();
            var a = t.index(this);
            if (e.keyCode == 32) {
                e.preventDefault();
                return false
            } else if (e.keyCode == 8) {
                if (a != 0 && $(this).val() == "") {
                    t.eq(a - 1).focus()
                }
            } else {
                if (a != 5 && $(this).val() != "") {
                    setTimeout(function () {
                        t.eq(a + 1).focus()
                    }, 300)
                }
            }
        }).on("focus", o, function (e) {
        });

        function r() {
            var e = l();
            var a = "";
            $.each(e, function (e, t) {
                a += $.trim($(t).val())
            });
            if (a.length == 6) {
                setTimeout(function () {
                    i(a)
                }, 300)
            }
        }
    };
    d();
    return {show: _}
};
var ItemDetailPopupDecorator = function (_) {
    var a = function () {
        var e = OriginConst.SELECTOR_MAP;
        var s = [];
        $(e[_]).each(function (e, t) {
            var a = $(this);
            var i = null;
            var r = null;
            if ([OriginConst.INVENTORY, OriginConst.MY_SELLING].includes(_) && a.data("order-extra")) {
                r = a.data("order-extra") || {}
            }
            var n = a.data("order-info");
            if ([OriginConst.INVENTORY].includes(_)) {
                n = null;
                i = a.data("item-info")
            }
            var o = {
                goods_info: a.data("goods-info"),
                asset_info: a.data("asset-info"),
                seller: null,
                seller_stats: null
            };
            o["order_extra"] = r || {};
            if (n) {
                o["sell_order"] = n
            }
            if (i) {
                o["item_info"] = i
            }
            s.push(o)
        });
        return s
    };
    var e = function (e) {
        var t = a();
        if (!t.length) {
            return
        }
        ItemDetailPopup(_, e).show(t)
    };
    return {show: e}
};
var request_share_qr_code = function (e, t) {
    sendRequest("/api/market/get_share_qr_code", {
        method: "POST",
        async: false,
        showLoading: false,
        data: e,
        success: function (e) {
            t && t(e)
        }
    })
};
var ClipboardProxy = function () {
    var e = null;
    var t = null;
    var a = function (e, i, r, n) {
        if (t) {
            t.destroy()
        }
        if (r || n) {
            t = new ClipboardJS(e, {
                text: function (t) {
                    if (n) {
                        var e = n();
                        if (e) {
                            return e
                        }
                    }
                    var a = $("#j_copy").data("item_info") || i;
                    request_share_qr_code(a, function (e) {
                        if (e.code == "Get Share Code Retry Later" || !e.data) {
                            $(t).attr("data-copy_text", "");
                            return
                        }
                        $(t).attr("data-copy_text", e.data)
                    });
                    var e = $(t).attr("data-copy_text");
                    r && r(e);
                    return e
                }
            })
        } else {
            t = new ClipboardJS(e)
        }
        t.on("success", function (e) {
            Buff.toast(i18n("copy_to_clipboard_success"), {type: "success"})
        });
        t.on("error", function (e) {
            Buff.toast(i18n("request_in_queue"), {type: "error"})
        })
    };
    return function () {
        if (!e) {
            e = {copy: a}
        }
        return e
    }
}();
var ItemDetailPopup = function (d, r) {
    var c = "j_popup_item_detail";
    var n = 20;
    var l = [];
    var u = {};
    var p = null;
    var f = 20;
    var a = 88;
    var i = 0;
    var m = "#j_inspect_down", h = "#j_inspect_up", v = "#j_inspect-nav-list", y = v + " ul", o = v + " li";
    var s = function () {
        $("html").css("overflow-y", "hidden")
    };
    var b = function () {
        $("html").css("overflow-y", "auto")
    };
    var _ = function () {
        var e = $(o).index($(o + ".on"));
        $("#j_inspect-nav-list").scrollTop(e * a)
    };
    var w = function () {
        var a = $.map(Object.keys(u), function (e) {
            return parseInt(e)
        });
        var e = OriginConst.SELECTOR_MAP;
        $(e[d]).each(function (e, t) {
            if (a.includes(e)) {
                sync_container_data($(t), l[e].order_extra);
                adjust_edit_entry_display($(t).find("a.asset-remark-edit"), l[e].order_extra)
            }
        })
    };
    var k = function (e) {
        var t = OriginConst.SELECTOR_MAP;
        $(t[d]).eq(p).attr("data-qr_code_url", e)
    };
    var x = function () {
        var e = OriginConst.SELECTOR_MAP;
        return $(e[d]).eq(p).attr("data-qr_code_url")
    };
    var C = function () {
        var t = function () {
            $("#" + c).hide();
            b();
            w()
        };
        $(document).off("click", "#j_close_respect").on("click", "#j_close_respect", function () {
            t()
        });
        window.close_popup = function () {
            if (window.event.target.id == c) {
                t()
            }
        };
        var a = function (e) {
            if (p != e) {
                $(".item_detail_popup_nav_item").removeClass("on");
                $(".item_detail_popup_nav_item").eq(e).addClass("on");
                p = e;
                O(l[e])
            }
        };
        $(document).keydown(function (e) {
            if (e.keyCode == 38) {
                a(Math.max(p - 1, 0))
            } else if (e.keyCode == 40) {
                a(Math.min(p + 1, l.length - 1))
            } else if (e.keyCode == 27) {
                t()
            }
        });
        $(document).off("click", ".item_detail_popup_nav_item").on("click", ".item_detail_popup_nav_item", function () {
            var e = $(".item_detail_popup_nav_item").index(this);
            a(e)
        });
        $(document).off("click", "#j_switcher_seller_stats span").on("click", "#j_switcher_seller_stats span", function () {
            var e = $(this).data("days");
            $("ul.seller-stats").hide();
            $("ul.seller-stats.days_" + e).show()
        });
        var i;
        $(document).off("mousedown", m).on("mousedown", m, function () {
            var t = $(y).height();
            i = setInterval(function () {
                var e = $(v).scrollTop();
                $(v).scrollTop(e + 5);
                if (e >= t - 656) {
                    clearInterval(i);
                    $(v).scrollTop(t - 656)
                }
            }, 10)
        }).off("mouseup", m).on("mouseup", m, function () {
            clearInterval(i)
        });
        $(document).off("mousedown", h).on("mousedown", h, function () {
            i = setInterval(function () {
                var e = $(v).scrollTop();
                $(v).scrollTop(e - 5);
                if (e <= 0) {
                    clearInterval(i);
                    $(v).scrollTop(0)
                }
            }, 10)
        }).off("mouseup", h).on("mouseup", h, function () {
            clearInterval(i)
        });
        $(document).off("mousewheel DOMMouseScroll", v).on("mousewheel DOMMouseScroll", v, function (e) {
            e.stopPropagation();
            var t = e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1) || e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1);
            var a = $(v).scrollTop();
            if (t < 0) {
                $(v).scrollTop(a + f)
            } else if (t > 0) {
                $(v).scrollTop(a - f)
            }
        });
        var e = null, r = null;
        var n = "#j_share_respect", o = "#j_share_popop";
        $(document).off("mouseenter", n).on("mouseenter", n, function () {
            clearTimeout(r);
            if ($(o).is(":visible")) return;
            $(o).show()
        }).off("mouseleave", n).on("mouseleave", n, function () {
            e = setTimeout(function () {
                $(o).hide()
            }, 400)
        });
        $(document).off("mouseenter", o).on("mouseenter", o, function () {
            clearTimeout(e);
            if ($(o).is(":visible")) return;
            $(o).show()
        }).off("mouseleave", o).on("mouseleave", o, function () {
            r = setTimeout(function () {
                $(o).hide()
            }, 400)
        });
        var s = selling();
        s.init_cancel_order();
        if (d == OriginConst.INVENTORY) {
            s.init_change_price()
        }
        $(document).off("click", ".sticker_item").on("click", ".sticker_item", function () {
            var e = $(this).data("goods-id");
            if (e) {
                window.open(`/goods/${e}`, "_blank")
            }
        });
        $(document).off("click", "span.inspected").on("click", "span.inspected", function () {
            var e = $(this).data("action_link");
            window.open(e, "_blank")
        });
        if ([OriginConst.INVENTORY, OriginConst.MY_SELLING].includes(d)) {
            var _ = "#asset-remark-edit-place-holder";
            SteamAssetRemark().init(_, function (e, t, a) {
                $("#remark_content").text(a.remark || "");
                $(_).data("content", a.remark);
                $(_).data("buy_price", a.buy_price);
                l[p].order_extra = a;
                u[p] = true;
                w()
            })
        }
    };
    var j = function () {
        var e = $(v);
        var t = $(o).length;
        if (t >= n) {
            $(v).parent().addClass("inspect-nav_small");
            f = 40;
            a = 56
        }
        if (e.find("ul").height() > 656) {
            $(h).show();
            $(m).show()
        }
        s()
    };
    var e = function (e, t) {
        if (!t) {
            t = function (e) {
                console.log(e)
            }
        }
        var a = e.asset_info;
        var i = {
            appid: a.appid,
            classid: a.classid,
            instanceid: a.instanceid,
            origin: d,
            assetid: a.assetid,
            contextid: a.contextid
        };
        if (e.sell_order && e.sell_order.id) {
            i["sell_order_id"] = e.sell_order.id
        }
        if (d == OriginConst.INVENTORY && e.item_info.sell_order_id) {
            i["sell_order_id"] = e.item_info.sell_order_id
        }
        sendRequest("/api/market/item_desc_detail", {
            data: i, dataType: "json", method: "GET", success: function (e) {
                if (e.code != "OK") {
                    Buff.toast(i18n("the_system_is_busyplease_try"));
                    $("#" + c).hide();
                    return
                }
                t(e.data)
            }, error: function () {
                $("#loading-cover").hide();
                Popup.hide();
                Buff.alert({
                    title: i18n("prompt"),
                    message: i18n("the_system_is_busyplease_try"),
                    hideCancel: true,
                    success: function () {
                    }
                })
            }
        })
    };
    var P = function (e) {
        var t = "bottom_btns_pat";
        if (d == OriginConst.INVENTORY) {
            var a = {STEAM_UNTRADABLE: 1, MARKET_UNTRADABLE: 2, MARKET_TRADABLE: 3};
            var i = e.item_info;
            var r = i.state, n = i.state_text, o = i.tradable_text, s = false, _ = i18n("on_the_frame");
            if (r == a.STEAM_UNTRADABLE) {
                s = true;
                _ = o || n
            } else if (r == a.MARKET_UNTRADABLE) {
                s = true;
                _ = n
            }
            var c = {
                price: e.price_info.price,
                goods_info: e.goods_info,
                asset_info: e.asset_info,
                sell_order: null,
                user: g.user,
                button_disabled: s,
                button_disabled_text: _,
                show_sell_or_disabled_btn: true
            };
            e["show_game_cms_icon"] = false;
            if (i.sell_order_id) {
                c["button_disabled_text"] = i18n("on_sale");
                c["button_disabled"] = true
            }
            return template_render(t, c)
        }
        var l = e.price_info;
        return template_render("bottom_btns_pat", {
            price: l.price,
            price_display: l.price_display,
            goods_info: e.goods_info,
            asset_info: e.asset_info,
            sell_order: e.sell_order,
            user: g.user,
            show_change_order_btn: [OriginConst.MY_SELLING, OriginConst.SELLING, OriginConst.STORE].includes(d),
            show_cancel_order_btn: [OriginConst.MY_SELLING, OriginConst.STORE].includes(d),
            show_sell_or_disabled_btn: false
        })
    };
    var T = function (e) {
        e["show_order_extra_remark"] = [OriginConst.MY_SELLING, OriginConst.INVENTORY].includes(d);
        if (e["show_order_extra_remark"]) {
            e["add_notes_text"] = e["order_extra"].remark ? i18n("notes_desc") : i18n("add_notes_desc")
        }
        e["bottom_html"] = P(e);
        e["user"] = g.user;
        e["show_bookmark_entry"] = ![OriginConst.MY_SELLING, OriginConst.INVENTORY].includes(d);
        var t = template_render("item_detail_popup_content_pat", e);
        var a = "inspect-content-container";
        $("#" + a).empty();
        $("#" + a).append(t);
        $("#" + c).show();
        var i = {
            goods_id: e.goods_info.goods_id,
            appid: e.goods_info.appid,
            assetid: e.asset_info.assetid,
            instanceid: e.asset_info.instanceid,
            classid: e.asset_info.classid,
            contextid: e.asset_info.contextid,
            qr_code_url: e.qr_code_url
        };
        $("#j_copy").data("item_info", null);
        S(i);
        j()
    };
    var B = function (e, t) {
        var a = new QRCode("share_qr_code", {width: 130, height: 130});
        a.clear();
        a.makeCode(t);
        a._el.title = "";
        ClipboardProxy().copy("#j_copy", e, null, function () {
            return x()
        })
    };
    var S = function (t) {
        $("#share_qr_code").empty();
        $("#j_copy").data("item_info", t);
        var e = x() || t.qr_code_url;
        if (e) {
            if ($(OriginConst.SELECTOR_MAP[d]).length == $(o).length) {
                k(e)
            }
            B(t, e);
            i = 0;
            return
        }
        request_share_qr_code(t, function (e) {
            if (e.code == "Get Share Code Retry Later" || !e.data) {
                if (i < 3) {
                    setTimeout(function () {
                        i++;
                        S(t)
                    }, 1e3)
                } else {
                    i = 0
                }
                return
            }
            i = 0;
            if ($(OriginConst.SELECTOR_MAP[d]).length == $(o).length) {
                k(e.data)
            }
            B(t, e.data)
        })
    };
    var O = function (t, a) {
        e(t, function (e) {
            t["asset_info"]["descriptions"] = e.descriptions;
            t["asset_info"]["info"]["fraudwarnings"] = e.fraudwarnings;
            t["asset_info"]["info"]["stickers"] = e.stickers;
            if (d != OriginConst.INVENTORY && t.sell_order) {
                t["sell_order"]["bookmarked"] = e.bookmarked
            }
            t["csgo_inspect_allowed"] = e.csgo_inspect_allowed;
            t["csgo_paintwear_allowed"] = e.csgo_paintwear_allowed;
            t["csgo_paintwear_load_success"] = e.csgo_paintwear_load_success;
            t["show_game_cms_icon"] = e.show_game_cms_icon;
            t["click_store_name_jump"] = false;
            if (![OriginConst.INVENTORY, OriginConst.MY_SELLING, OriginConst.STORE].includes(d)) {
                t["seller_stats"] = !$.isEmptyObject(e.seller_stats) ? e.seller_stats : null;
                t["seller"] = !$.isEmptyObject(e.seller) ? e.seller : null;
                t["click_store_name_jump"] = !$.isEmptyObject(e.seller) ? true : false
            }
            t["tier_name"] = e.tier_name;
            t["fade_name"] = e.fade_name;
            t["ice_fire_name"] = e.ice_fire_name;
            t["phase_name"] = e.phase_name;
            t["phase_color"] = e.phase_color;
            t["rank"] = e.rank;
            t["rank_order_type"] = e.rank_order_type;
            t["qr_code_url"] = e.qr_code_url;
            t["stats"] = null;
            t["content_pic"] = e.content_pic;
            t["pic_with_bg"] = e.pic_with_bg;
            t["qr_code_url"] = e.qr_code_url;
            if (!$.isEmptyObject(e.stats)) {
                t["stats"] = {
                    view_count_text: i18n("stat_view_count_text", {view_count: e.stats.view_count}),
                    bookmark_count_text: i18n("stat_bookmark_count_text", {bookmark_count: e.stats.bookmark_count}),
                    bargain_count_text: i18n("stat_bargain_count_text", {bargain_count: e.stats.bargain_count})
                }
            }
            T(t);
            if (a) {
                _()
            }
        })
    };
    var q = function (e, t) {
        var a;
        var i = "";
        if (e == OriginConst.INVENTORY) {
            var r = t.item_info;
            a = r && !$.isEmptyObject(r) ? formatPriceCustom(r.price, undefined, undefined, r.original_currency) : "";
            return {price: a, price_display: i}
        }
        if (!t.sell_order) {
            return {price: "", price_display: ""}
        }
        a = formatPriceYuan(t.sell_order.price);
        if ([OriginConst.MY_SELLING, OriginConst.TOP_BOOKMARK, OriginConst.STORE].includes(e)) {
            a = formatPriceCustom(t.sell_order.price, undefined, undefined)
        }
        if (e == OriginConst.SELLING && g.currency.rate_base_cny != 1) {
            i = formatPriceNormalCustom(t.sell_order.price)
        }
        return {price: a, price_display: i}
    };
    var t = function (e) {
        C();
        for (var t in e) {
            e[t]["price_info"] = q(d, e[t])
        }
        $("#" + c).remove();
        l = e;
        p = r;
        var a = e[p];
        var i = template_render("item_detail_popup_navi_pat", {selected_index: p, items: e, show_price: e.length < n});
        $("body").append(template_render("item_detail_popup_pat", {navi_bar: i}));
        O(a, true)
    };
    return {show: t}
};
var CS2Inspect = function () {
    var e = function () {
        var e = getParamsFromHash();
        var t = e.page_num || 1;
        sendRequest("/api/market/cs2_inspect", {
            method: "GET",
            data: {page_num: t},
            dataType: "json",
            showLoading: false,
            retryLimit429: 10,
            retryCount429: 0,
            success: function (e) {
                console.log(e);
                if (e.code != "OK") {
                    Buff.toast(e.error);
                    return
                }
                var t = [];
                var a = e.data.items;
                PreviewScreenShotsDataGenerator(OriginConst.SELLING).process(a, e.data.preview_screenshots.bg_img || "", "selling", 10);
                for (var i = 0; i < a.length; i++) {
                    t.push(template_render("inspect_item_pat", {
                        item: a[i],
                        goods_info: e.data.goods_info[a[i].asset_info.goods_id]
                    }))
                }
                var r = template_render("inspect_list_pat", {items_str: t.join("")});
                $(".detail-tab-cont").html(r);
                $("img.lazy").lazyload();
                ClipboardProxy().copy(".icon_clipboard");
                renderPagination({
                    total_count: e.data.total_count,
                    page_size: e.data.page_size,
                    page_num: e.data.page_num,
                    onPageClick: function (e, t) {
                        t.preventDefault();
                        updateHash("page_num", e);
                        window.scrollTo(0, 0)
                    }
                })
            }
        })
    };
    var t = function () {
        $(window).on("hashchange", function () {
            e()
        });
        $(document).off("click", ".icon_good_delete").on("click", ".icon_good_delete", function () {
            var t = $(this);
            var e = t.attr("item_id");
            sendRequest("/api/market/remove_cs2_inspect", {
                method: "POST",
                data: {item_id: e},
                showLoading: true,
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    t.parent().parent().remove();
                    Buff.toast(i18n("cs2_inspect_delete"))
                }
            })
        });
        var a = function () {
            if ($("#parse").hasClass("need_login")) {
                loginModule.showLogin();
                return
            }
            var e = $("#share_link_url").val();
            if (!e) {
                Buff.toast(i18n("cs2_inspect_input_share_link"));
                return
            }
            sendRequest("/api/market/add_cs2_inspect", {
                method: "POST",
                data: {link: e},
                showLoading: true,
                success: function (e) {
                    if (e.code != "OK") {
                        Buff.toast(e.error, {type: "error"});
                        return
                    }
                    var t = e.data.item;
                    if (!$("#inspect_item_" + t.id).length) {
                        var a = template_render("inspect_item_pat", {
                            item: t,
                            goods_info: e.data.goods_info[t.asset_info.goods_id]
                        });
                        $(".list_tb_csgo").find("tr").eq(0).after(a);
                        ClipboardProxy().copy(".icon_clipboard")
                    }
                    var i = "cs2_inspect_success";
                    if (t.asset_info.info.inspect_state == 2) {
                        i = "cs2_inspect_finish"
                    }
                    Buff.toast(i18n(i))
                }
            })
        };
        $(document).on("keyup", "#share_link_url", function (e) {
            var t = e.keyCode || e.charCode;
            if (t == 13) {
                a()
            }
        });
        $(document).off("click", "#parse").on("click", "#parse", function (e) {
            e.preventDefault();
            a()
        });
        e()
    };
    return {init: t}
};
$(".w-Select-Multi").click(
    function () {
        console.log("click");
    }

)