
var init = new google.maps.Map(document.getElementById("mapContainer"));

function e(e) {
    $(".mainWrapper").removeClass("res_Large res_Medium res_Small"), $(".mainWrapper").addClass(e)
}

function a() {
    e($(window).width() <= 660 ? $("body").hasClass("res_Medium") ? "res_Medium" : "res_Small" : $(window).width() > 660 && $(window).width() <= 846 ? "res_Medium" : "res_Large")
}

function o(e, a) {
    "function" == typeof $iTagTracker ? $iTagTracker(e, a) : null
}

function n(e, a, n, t, r) {
    var i, s, c, l = {},
        h = new google.maps.Geocoder,
        d = $("#currcateg").html();
    l = "" !== a ? {
        address: a
    } : {
        latLng: e
    }, r && (d = "#WindowContainer" === n && $(".mainWrapper").hasClass("res_Small") ? $("#merchantCat").val() : Ba), so = ro = io = to = "", h.geocode(l, function(e, r) {
        if (r !== google.maps.GeocoderStatus.OK) return "ZERO_RESULTS" === r && ($(n).hide(), "#MainContainer" == n && $(".mainWrapper").hasClass("res_Small") && $(".longErrorHeading").addClass("mobservdown"), $(".genricloader").removeClass("genric"), $(".genricloader,.preLoader,.dining").hide(), $(".longErrorHeading").html(invalidSearchError), $(".longErrorContainer").show()), !1;
        for (s = 0; s < e.length; s++) {
            if (i = e[s].address_components, $.each(i, function(e, a) {
                    "country" === a.types[0] && (so = a.long_name, c = a.short_name), -1 !== $.inArray("postal_code", a.types) && (ro = a.long_name), -1 !== $.inArray("locality", a.types) && (io = a.long_name), "administrative_area_level_1" === a.types[0] && (to = a.long_name)
                }), d === atmname) {
                oo = e[0].geometry.location.lat(), no = e[0].geometry.location.lng();
                break
            }
            if (oo = e[s].geometry.location.lat(), no = e[s].geometry.location.lng(), -1 !== $.inArray(c, co)) break;
            so = ro = io = to = ""
        }
        return "" === a && (Ea = e[0].formatted_address), d !== atmname && -1 === $.inArray(c, co) ? ($(".mainWrapper").addClass("locationnotsupourt"), $(".mainWrapper").css("height", $(".unsupportedErrorContainer").height()), $(n).hide(), "mapview" === ao && "#WindowContainer" === n && $(n).show(), $(".mainWrapper").hasClass("res_Small") && $("#suggestionsListContainer").hide(), $(".unsupportedErrorContainer").show(), $(".genricloader,.preLoader").hide(), $(".compassIcon div").addClass("myLocationIcon").removeClass("myLocationBlueIcon"), o("layertrack", "ErrorPage"), !1) : void t()
    })
}

function t() {
    clearTimeout(zo), $(".genricloader").hasClass("genric") && (Ya = Ho, $(".genricloader").removeClass("genric")), $.inArray(Lo, vo) < 0 && null !== Po && Po.abort()
}

function r(e, a) {
    var o;
    for (o = 0; o < a.length; o++) a[o].setMap(e)
}

function i(e) {
    r(null, e)
}

function s(e) {
    r(ea, e)
}

function c(e, a) {
    o("layertrack", "ErrorPage");
    var n;
    switch (a = ".genricloader, .preLoader, " + a, e) {
        case "MERLI105":
        case "1006":
            n = noResultError;
            break;
        case "MERDT102":
            n = noMerDetailsError;
            break;
        case "MERDT900":
        case "MERLI900":
        case "ATMLI900":
        default:
            n = serviceDownError
    }
    $(a).hide(), $("body,html").scrollTop(0), $(".longErrorHeading").html(n), $(".longErrorContainer").show()
}

function l(e, a, o, n, t, r) {
    var i = o ? "application/json" : "application/x-www-form-urlencoded; charset=UTF-8";
    "get" === a ? ($.ajaxSetup({
        url: e,
        type: "GET",
        contentType: i
    }), null != n && $.ajaxSetup({
        data: n
    })) : $.ajaxSetup({
        url: e,
        type: "POST",
        data: n,
        contentType: i
    }), null !== Po && Po.abort(), $.ajax({
        dataType: "json",
        timeout: ajaxTimeout,
        success: function(e) {
            void 0 !== t && t(e, n)
        },
        error: function() {
            void 0 !== r && r()
        }
    })
}

function h(e, a, o, n, t, r) {
    var i = o ? "application/json" : "application/x-www-form-urlencoded; charset=UTF-8";
    $.ajaxSetup("get" === a ? {
        url: e,
        type: "GET",
        contentType: i
    } : {
        url: e,
        type: "POST",
        data: n,
        contentType: i
    }), $.inArray(Lo, vo) < 0 && null !== Po && Po.abort(), Lo = e, Po = $.ajax({
        dataType: "json",
        timeout: ajaxTimeout,
        success: function(e) {
            void 0 !== t && t(e)
        },
        error: function() {
            void 0 !== r && r()
        }
    })
}

function d(e) {
    var a;
    for (a = 0; a < e.length; a++) co.push(e[a].code)
}

function p(e) {
    if (0 !== e.length) {
        $("#filterContainerMain .visual #merchantCat").html(""), $(".filterContainerDesktop .visual ul").html("");
        var a, o = "",
            n = "";
        for (a = 0; a < e.length; a++) {
            var t = e[a].split("|");
            o = "", n = "", o += '<li data-cat="' + t[0] + '" tabindex="0">' + t[1] + "</li>", n += '<option value="' + t[1] + '"', t[1] === diningname && (n += "selected "), n += ">" + t[1] + "</option>", $("#filterContainerMain .visual #merchantCat").append(n), $(".filterContainerDesktop .visual ul").append(o)
        }
    }
}

function g(e) {
    var a;
    return a = e == atmname ? "ATMs|" + atmname : e == diningname ? "Dining|" + diningname : "Hotels|" + e
}

function m(e) {
    var a;
    return a = e == atmname ? "ATMs" : e == diningname ? "Dining" : "Hotels"
}

function u(e) {
    var a = "";
    return a = e == faqgenhead ? "General" : e == faqmerhead ? "Merchant" : "CardMember"
}

function C(e, a) {
    var o, n = e.split("|"),
        t = $.map(a[e], function(e, a) {
            return a
        }),
        r = [],
        i = [],
        s = 0,
        c = 0,
        l = "",
        h = "";
    for (o = 0; o < t.length; o++) r = $.merge(r, $.map(a[e][t[o]], function(e) {
        return e.subCtgryUIDesc
    })), i = $.merge(i, $.map(a[e][t[o]], function(e) {
        return e.subCtgryDesc
    }));
    for ($(".filterDesktop .filterCuisine h2").html(t[0]), $("#filtermobilechanger .filter_title").html(t[0]), $(".filterDesktop .filterCuisine .filterSubcategoryWrapper").html(""), $("#filtermobilechanger #merchantSubCat").html(""), o = 0; o < r.length; o++) l = "", h = "", r[o] !== allcat ? (l = l + '<div class="filterSubcategoryContainer" title="' + r[o] + '">', l += '<span class="filterSubcategory checkboxImage sprite-desk">', l = l + '<label for="' + r[o] + '"></label><input id="' + r[o] + '" type="checkbox" name="country" title="' + r[o] + '" value="' + i[o + c] + '"/>', l += "</span> ", l = l + '<span class="filterSubcategoryText">' + r[o] + "</span>", l += "</div>") : c = 0, r[o] === allcat ? (h = '<option value=" " selected ', s = 0) : h = '<option value="' + i[o + s] + '"', h = h + ">" + r[o] + "</option>", $(".filterDesktop .filterCuisine .filterSubcategoryWrapper").append(l), r[o] === allcat ? $("#filtermobilechanger #merchantSubCat").html(h + $("#filtermobilechanger #merchantSubCat").html()) : $("#filtermobilechanger #merchantSubCat").append(h);
    $("#merchantCat").val(n[1]), n[1] === atmname ? ($("#filtermobilechanger").hide(""), $("#filtermobilerecchanger").hide(""), $(".filterDesktop").hide(), $("#WindowContainer .diningCategorySelect").css("width", "65%"), $(".filterCuisine").hide(), $(".subcatDesk").html(""), $(".subcatDesk1").html(""), $(".comma").html(""), $(".searchMerchant").callplaceholder(atmplaceholder)) : ($("#filtermobilechanger").show(), $("#filtermobilerecchanger").show()), $(".searchDesktopDropdown .searchCategory").html(searchin + " " + n[1] + '<span class="sprite-desk arrowSelect"></span>'), $(".filterDropdownCategory .flterCategory").html(filterin + " " + n[1] + '<span class="sprite-desk arrowSelect"></span>'), $(".filterSubcategoryWrapper").find(".filterSubcategoryContainer span.checkboxImage").addClass("selectedCheckbox"), $(".filterSubcategoryWrapper").find(".filterSubcategoryContainer span.checkboxImage").prop("checked", !0), $("#checkboxShowAll").parent("span").addClass("selectedCheckbox"), $("#checkboxShowAll").prop("checked", !0)
}

function v(e) {
    var a = $.map(e.ctgryInfoList, function(e, a) {
        return a
    });
    $a = e.ctgryInfoList, p(a), C("Dining|" + diningname, e.ctgryInfoList)
}

function f(e, a) {
    if ($(".currcat").html() != atmname) {
        var o, n, t = "";
        t = e > Ka ? Ka : e, n = void 0 === b("dom_country") ? "" : b("dom_country"), o = {
            merchantCount: e,
            noOfResultsInThisPage: t,
            pageNum: 0,
            perPageResults: Ka,
            category: a,
            dom_country: n
        }, l(uo, "post", !1, o)
    }
}

function b(e) {
    return decodeURI((new RegExp(e + "=(.+?)(&|$)").exec(location.search) || [null])[1])
}

function w(e, a) {
    var o;
    if ("US" == a) o = e.length > 6 ? e.replace(/[^\d]+/g, "").replace(/(\d{3})(\d{3})(\d*)/, "($1) $2-$3") : e.length > 3 ? 6 == e.length ? e.replace(/[^\d]+/g, "").replace(/(\d{3})(\d{3})/, "($1) $2") : e.replace(/[^\d]+/g, "").replace(/(\d{3})(\d*)/, "($1) $2") : e.replace(/[^\d]+/g, "").replace(/(\d*)/, "($1) ");
    else if ("AU" == a) o = e.length > 6 ? e.replace(/[^\d]+/g, "").replace(/(\d{2})(\d{4})(\d*)/, "($1) $2 $3") : e.length > 2 ? 6 == e.length ? e.replace(/[^\d]+/g, "").replace(/(\d{2})(\d{4})/, "($1) $2 ") : e.replace(/[^\d]+/g, "").replace(/(\d{2})(\d*)/, "($1) $2 ") : e.replace(/[^\d]+/g, "").replace(/(\d*)/, "($1)  ");
    else if ("GB" == a) o = "07" != e.substr(0, 2) ? e.length > 5 ? e.replace(/[^\d]+/g, "").replace(/(\d{5})(\d*)/, "($1) $2") : e.replace(/[^\d]+/g, "").replace(/(\d*)/, "($1)") : e.length > 5 ? e.replace(/[^\d]+/g, "").replace(/(\d{5})(\d*)/, "$1 $2") : e.replace(/[^\d]+/g, "").replace(/(\d*)/, "$1");
    else {
        var n = 0;
        for (e = e.replace(/[^\d]+/g, ""), o = ""; n < e.length;) 0 == n ? o = "+33 (" + e.charAt(0) + ")" : 1 == n ? o += " " + e.charAt(1) : n + 1 >= e.length ? o += " " + e.substr(n) : (o += " " + e.substr(n, 2), n++), n++
    }
    return o
}

function k(e) {
    $("#suggestionsListContainer").show(), $("#suggestionsListContainer").addClass("userClicked"), e.setAnimation(google.maps.Animation.DROP), e.setZIndex(1e3);
    var a = e.getIcon();
    a.origin.y = a.origin.y + 60, e.setIcon(a), "" !== Fa && (ia = Fa.getIcon(), ia.origin.y = ia.origin.y - 60, Fa.setIcon(ia), Fa.setZIndex(100)), Fa = e;
    var o = e.position.toString().slice(1, e.position.toString().lastIndexOf(".") + 7),
        n = o.split(",");
    o = parseFloat(n[0]).toFixed(7) + ", " + parseFloat(n[1]).toFixed(4)
}

function y() {
    $(".first").addClass("active");
    var e = Oa[0];
    "" != Fa && (ia = Fa.getIcon(), ia.origin.y = ia.origin.y - 60, Fa.setIcon(ia), Fa.setZIndex(100));
    var a = e.getIcon();
    a.origin.y = a.origin.y + 60, e.setIcon(a), e.setZIndex(1e3), Fa = e
}

function L(e, a, o) {
    if ($(".currcat").html() != atmname) {
        var n = "";
        void 0 != b("dom_country") && (n = b("dom_country"));
        var t = {
            merchantID: e,
            category: a,
            reqid: o,
            dom_country: n
        };
        l(Co, "post", !1, t)
    }
}

function S() {
    var e = "",
        a = contextPath + "/resources/images/markersprite" + (Math.floor(Xa / 10) + 1) + ".png";
    e = "REC000" !== za[Na].recommID ? 0 === Na && $(".mainWrapper").hasClass("res_Small") && void 0 === ha ? new google.maps.MarkerImage(a, new google.maps.Size(40, 60), new google.maps.Point(40 * Math.floor(Xa % 10), 180), new google.maps.Point(20, 60), new google.maps.Size(400, 240)) : ha - 1 === Xa && $("#suggestionsListContainer").hasClass("userClicked") ? new google.maps.MarkerImage(a, new google.maps.Size(40, 60), new google.maps.Point(40 * Math.floor(Xa % 10), 180), new google.maps.Point(20, 60), new google.maps.Size(400, 240)) : new google.maps.MarkerImage(a, new google.maps.Size(40, 60), new google.maps.Point(40 * Math.floor(Xa % 10), 120), new google.maps.Point(20, 60), new google.maps.Size(400, 240)) : 0 === Na && $(".mainWrapper").hasClass("res_Small") && void 0 === ha ? new google.maps.MarkerImage(a, new google.maps.Size(40, 60), new google.maps.Point(40 * Math.floor(Xa % 10), 60), new google.maps.Point(20, 60), new google.maps.Size(400, 240)) : ha - 1 === Xa && $("#suggestionsListContainer").hasClass("userClicked") ? new google.maps.MarkerImage(a, new google.maps.Size(40, 60), new google.maps.Point(40 * Math.floor(Xa % 10), 60), new google.maps.Point(20, 60), new google.maps.Size(400, 240)) : new google.maps.MarkerImage(a, new google.maps.Size(40, 60), new google.maps.Point(40 * Math.floor(Xa % 10), 0), new google.maps.Point(20, 60), new google.maps.Size(400, 240));
    var n = new google.maps.Marker({
        position: qa[Na],
        animation: google.maps.Animation.DROP,
        map: ea,
        title: za[Na].merchantName,
        icon: e,
        zIndex: 100
    });
    n.metadata = {
        type: "point",
        id: Xa
    }, 0 === Na && $(".mainWrapper").hasClass("res_Small") ? (Fa = n, Fa.setZIndex(1e3)) : void 0 !== ha && ha - 1 === Xa && (Fa = n, Fa.setZIndex(1e3)), Na += 1, Xa += 1, Oa.push(n), google.maps.event.addListener(n, "click", function() {
        if (o("rmaction", "click_MapPin"), Fa !== this) {
            var e, a = "",
                n = this.metadata.id,
                t = "";
            if ($(".active").removeClass("active"), $(".suggestion .merchantDetailsContainer").each(function() {
                    return e = $(this).find(".sno").html(), e == n + 1 ? (a = $(this).closest(".suggestion"), $(this).closest(".suggestion").addClass("active"), t = $(this).closest(".merchantDetailsContainer").attr("id"), !1) : void 0
                }), "block" != $("#locationDeatailsContainer").css("display") && k(this), "block" != $("#locationDeatailsContainer").css("display") || $(".mainWrapper").hasClass("res_Small")) $("#suggestionList").scrollTo($(".active"), 500);
            else if ($(".currcat").html() != atmname) {
                k(this);
                var r = da,
                    i = JSON.stringify({
                        merchantId: t,
                        latitude: Ga,
                        longitude: Va,
                        language: na
                    });
                l(r, "post", !0, i, Go)
            } else {
                $(".active").removeClass("active"), $(a).addClass("active");
                var s, c = Oa[$(a).find(".merchantDetailsContainer .sno").text() - 1 - Qa];
                t = $(a).find(".merchantDetailsContainer").attr("id"), t = $.trim(t), "" != Fa && (ia = Fa.getIcon(), ia.origin.y = ia.origin.y - 60, Fa.setIcon(ia), Fa.setZIndex(100)), s = c.getIcon(), s.origin.y = s.origin.y + 60, c.setIcon(s), c.setZIndex(1e3), Fa = Oa[$(a).find(".merchantDetailsContainer .sno").text() - 1 - Qa], $("#suggestionList").scrollTo($(".active"), 500), $(".genricloader").hide(), $("#merchantTitle").text($(a).find(".merchantName").html()), $("#address").html($(a).find(".address1").html()), $(".locationDetailText .distance").html($(a).find(".actdistance").html()), $("#locationDeatailsContainer").show(), $(".locationDetailsInner .ratingContainer .ratingCount,.locationDetailsInner .ratingContainer .ratingImage").hide(), $("").hide(), $("#TripAdvisorReviewContainer").hide(), $(".locationClose h2").html("  "), $(".atm").hide()
            }
        }
    })
}

function D(e) {
    return (Wo > 0 || Ao > 0 || Ro > 0 || _o > 0 || Oo > 0) && 0 > No && e.length > 14 && (e = e.substr(0, 14), e += "..."), e
}

function M(e) {
    za.push(e);
    var a, o = "";
    Na += 1, o = '<li class="suggestion ', 1 == Na && void 0 === ha ? (o += "first ", $(".mainWrapper").hasClass("res_Small") && (o += "active ")) : void 0 !== ha && (1 === Na && (o += "first "), ha == Xa && $("#suggestionsListContainer").hasClass("userClicked") && (o += "active ")), o += '">', o += '<div class="merchantDetailsContainer ', Na % 2 == 0 && (o += "even"), o = o + '" title="' + merchanttaptitle + '"id="' + e.merchantId + '">', o += '<div class="sno ', Xa >= 100 && (o += " threedigit"), o = o + '">' + Xa + "</div>", o += '<div class="detailsOuterContainer">', o += '<div class="detailscontainer', $(".currcat").html() == atmname && (o += " atmdetails"), o += '">', o = o + '<div class="merchantName">' + D(e.merchantName) + "</div>", $(".currcat").html() != atmname ? (o += '<div class="ratingContainer">', 0 != e.mrchntTAReviewCnt ? o = o + '<div class="ratingImage"><img alt="' + e.mrchntTARatingImg + ' of 5.0" title="' + e.mrchntTARatingImg + ' of 5.0" src="' + e.mrchntTARating + '" /></div><div class="ratingCount">' + e.mrchntTAReviewCnt + "  TripAdvisor Reviews</div>" : $(".currcat").html() != atmname && (a = o.indexOf("suggestion"), o = o.substr(0, a) + "noreview " + o.substr(a)), "REC000" != e.recommID && (o = o + '<div class="recomendationType">' + frequentedtext + "</div>", a = o.indexOf("suggestion"), o = o.substr(0, a) + "recomended " + o.substr(a)), o += "</div>") : (o += '<div class="address1">', null != e.merchAddrBean.addressLine1 ? o = o + e.merchAddrBean.addressLine1 + "<br>" : o += "&nbsp;", o += '<div class="addressline2">', null != e.merchAddrBean.city && (o = o + e.merchAddrBean.city + ", "), null != e.merchAddrBean.state && (o = o + e.merchAddrBean.state + ", "), null != e.merchAddrBean.countryCode && (o = o + e.merchAddrBean.countryCode + ", "), null != e.merchAddrBean.zipCode && (o += e.merchAddrBean.zipCode), o += "</div>", o += "</div>"), o += "</div>", o = o + '<div class="distance"><span class="actdistance">' + e.distance + " " + units + '</span><span class="rec" title="' + frequentedtext + '"></span></div>', o += "</div>", o += "</div>", o += "</li>", $("#suggestionList").append(o)
}

function I() {
    "" != ja && (Wa = !0, $(".mainWrapper").hasClass("ie9") ? (setTimeout(function() {
        $(".searchLocation").val(mylocationplaceholder)
    }, 0), $(".searchLocation").css("color", "black")) : ($(".searchLocation").val(mylocationplaceholder), $(".searchLocation").css("color", "black")), $(".searchLocateIcon").addClass("searchMyLocateIcon"), $(".searchMyLocateIcon").removeClass("searchLocateIcon"), $(".searchLocateIconDesk").addClass("searchMyLocateIconDesk"), $(".searchMyLocateIconDesk").addClass("searchLocateIconDesk"))
}

function x(e) {
    La ? (ja = e.coords.latitude, Ua = e.coords.longitude, (Wo > 0 || _o > 0 || Fo > 0) && 0 > No && $(".heading-search").css("padding", "45px"), void 0 !== google && (Ha = new google.maps.LatLng(ja, Ua)), $(".mainWrapper").hasClass("res_Small") ? $(".diningDesktopContainer").hide() : ($(".desktopLoginContainer").show(), $(".diningDesktopContainer").show()), $(".preLoader").hide(), $("#MainContainer").show(), $("body").css("background-color", "#f3f3f3"), $(" .promptImageMobile .prompt").show(), $(".promptImageMobile #locationServicesPrompt").hide(), -1 == jo && To > -1 && -1 == Zo && -1 == Bo ? ($(".mainWrapper").hasClass("res_Small") && $(".promptImageMobile #shortcuPrompt").show(), $(".mainWrapper").addClass(" safari ")) : $(".promptImageMobile #shortcuPrompt").hide(), "en_gb" != oa && "fr_fr" != oa && $("#ukdisclaimer,.ukdisclaimer").hide(), $("body,html").scrollTop(0), La = !1, I(), setTimeout(function() {
        o("rmaction", "share_Location")
    }, 3e3)) : (ja = e.coords.latitude, Ua = e.coords.longitude, Ha = new google.maps.LatLng(ja, Ua), "" != So && So.setMap(null), So = new google.maps.Marker({
        position: Ha,
        map: ea,
        title: mylocationplaceholder,
        icon: contextPath + "/resources/images/MyLocation.png"
    })), $(".promptImageMobile #locationServicesPrompt").hide(), $("#search").removeClass("noLocation"), "home" === ko && $("#mylocationicon .myLocationIcon,#mylocationicon .compassIcon").show()
}

function P(e) {
    La && (void 0 === !e && (La = !1), $("#search").addClass("noLocation"), $(" .promptImageMobile .prompt").show(), $(".promptImageMobile #shortcuPrompt,.promptImageMobile #locationServicesPrompt").show(), -1 == jo && To > -1 && -1 == Zo && -1 == Bo ? ($(".mainWrapper").hasClass("res_Small") && $(".promptImageMobile #shortcuPrompt").show(), $(".mainWrapper").addClass(" safari ")) : $(".promptImageMobile #shortcuPrompt").hide(), "en_gb" != oa && "fr_fr" != oa && $("#ukdisclaimer,.ukdisclaimer").hide(), $("body").css("background-color", "#f3f3f3"), (Wo > 0 || _o > 0 || Fo > 0) && 0 > No && $(".heading-search").css("padding", "45px"), $(".mainWrapper").hasClass("res_Small") ? $(".diningDesktopContainer").hide() : ($(".desktopLoginContainer").show(), $(".diningDesktopContainer").show()), $("#MainContainer").show(), $(".preLoader").hide(), $(".searchLocateIcon").removeClass("searchMyLocateIcon"), $(".searchLocateIconDesk").removeClass("searchMyLocateIconDesk")), $("#mylocationicon .myLocationIcon,#mylocationicon .compassIcon").hide()
}

function T() {
    if (navigator.geolocation) {
        var e = {
            timeout: 1e4
        };
        navigator.geolocation.watchPosition(x, P, e)
    } else P()
}

function W() {
    P(), T(), $(".searchLocation").attr("placeholder", locationplaceholder), $(".searchLocation").callplaceholder(locationplaceholder), $(".mainWrapper").hasClass("ie9") && $(".searchLocation").css("color", "grey")
}

function _(e) {
    if ("mapview" === ao) {
        if ($(window).width() <= 660) "home" == ko && $("#mapContainer").css("height", "250px"), (Wo > 0 || Fo > 0 || _o > 0) && 0 > No && $("#mapContainer").css("height", "140px"), "block" === $("#locationDeatailsContainer").css("display") && $("#mapContainer").css("height", "125px"), $("#suggestionList").height() > 300 && $("#mapContainer").css("height", $("#suggestionsListContainer").height()), google.maps.event.trigger(ea, "resize");
        else {
            $("#mapContainer").show();
            var a = $(window).width();
            $(window).width() > 660 && $(window).width() <= 810 ? $("#mapContainer").css("height", $("#suggestionsListContainer").height()) : ($("#mapContainer").css("height", "640px"), $("#mapContainer").css("overflow", "hidden"), "block" === $("#locationDeatailsContainer").css("display") && (a -= $("#locationDeatailsContainer").width())), "block" === $("#suggestionsListContainer").css("display") && (a -= $("#suggestionsListContainer").width()), $("#mapContainer").css("width", a), $("#mapContainer").css("float", "right"), google.maps.event.trigger(ea, "resize"), "" != Fa && ea.panTo(Fa.getPosition())
        }
        "block" === $("#suggestionsListContainer").css("display") ? (ea.fitBounds(Ja), google.maps.event.trigger(ea, "resize"), ea.setCenter(e)) : ea.setCenter(Fa.getPosition())
    }
}

function A() {
    $(".mainWrapper").hasClass("res_Small") && "home" != ko || ($(".genricloader").hide(), $.inArray(Lo, vo) < 0 && null != Po && Po.abort(), clearTimeout(zo), zo = setTimeout(function() {
        $(".genricloader").addClass("genric"), $(".genricloader").show(), Qo()
    }, 1e3))
}

function R(e, a, n) {
    var t, r;
    for (ao = "mapview", eo = "", $("#mapContainer").css("overflow", "hidden"), $("#searchContainer").hide(), $(".mainWrapper").hasClass("res_Small") && ($("#mapContainer").css("height", "250px"), (Wo > 0 || _o > 0 || Fo > 0) && 0 > No && $("#mapContainer").css("height", "140px")), $("#suggestionList").text(""), t = 0; t < Oa.length; t++) Oa[t].setMap(null);
    Oa = [], za = [], qa = [], r = a, Fa = "", Na = 0, Ja = new google.maps.LatLngBounds;
    var i, s = [{
        featureType: "transit.station.airport",
        elementType: "labels.text",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "transit.station.airport",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }];
    if (i = {
            zoom: 10,
            center: r,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: s,
            streetViewControl: !1,
            draggable: !0,
            zoomControl: !0,
            scrollwheel: !0,
            disableDoubleClickZoom: !1,
            mapTypeControl: !1,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.MEDIUM,
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            panControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }, void 0 === ea) {
        ea = init;
        var c = $("#mapContainer");
        Ko(c[0], "mousewheel", A, !0), Ko(c[0], "wheel", A, !0), Ko(c[0], "DOMMouseScroll", A, !0)
    }
    ea.setOptions(i), google.maps.event.addListener(ea, "dragend", function() {
        $.inArray(Lo, vo) < 0 && null != Po && Po.abort(), $(".genricloader").hide(), clearTimeout(zo), zo = setTimeout(function() {
            $(".genricloader").addClass("genric"), $(".genricloader").show(), Qo()
        }, 1e3)
    }), Xa = Qa, Ka = $(".mainWrapper").hasClass("res_Small") ? 10 : 25;
    var l, h = 0;
    for (t = Qa; t < e.length && Ka > h; t++) h += 1, l = e[t], Xa += 1, M(l);
    var d = '<li class="paggination">';
    for (0 == Qa && e.length > Qa + Ka ? d = d + '<div id="showmore" title="' + nexttitle + '">' + next + " " + Ka + '<div class="sprite-mob next-icon"></div></div>' : 0 != Qa && (d += '<div id="prevnextele" style="display:block">', d = d + '<div class="prevnext" title="' + previoustitle + '" style="display:block" id="previous"><div class="sprite-mob prev-icon"></div>' + prev + " " + Ka + "</div>", e.length > Qa + Ka && (d = d + '<div class="prevnext" title="' + nexttitle + '" style="display:block"  id="next">' + next + " " + Ka + '<div class="sprite-mob next-icon"></div></div> '), d += "</div>"), d += "</li>", $("#suggestionList").append(d), l = "", t = 0; t < za.length; t++) l = za[t], qa.push(new google.maps.LatLng(l.merchantLat, l.merchantLong));
    for (Na = 0, Xa = Qa, Ja = new google.maps.LatLngBounds, t = 0; t < qa.length; t++) S(), Ja.extend(qa[t]);
    $("mainWrapper").hasClass("res_Small") || ($("#mapContainer").css("width", "100%"), $("#mapContainer").css("float", "none"), google.maps.event.trigger(ea, "resize")), google.maps.event.trigger(ea, "resize"), ea.fitBounds(Ja), r = ea.getCenter(), google.maps.event.addDomListener(window, "resize", function() {
        _(r)
    }), $(".compassIcon div").hasClass("myLocationBlueIcon") && (ea.getBounds().contains(new google.maps.LatLng(ja, Ua)) ? $(".compassIcon div").addClass("myLocationBlueIcon").removeClass("myLocationIcon") : $(".compassIcon div").addClass("myLocationIcon").removeClass("myLocationBlueIcon")), "" != ja && ($("#mylocationicon .myLocationIcon,#mylocationicon .compassIcon").show(), "" != So && So.setMap(null), So = new google.maps.Marker({
        position: Ha,
        map: ea,
        title: mylocationplaceholder,
        icon: contextPath + "/resources/images/MyLocation.png"
    })), $("body").scrollTo($(".mainWrapper"), 500, {
        axis: "y"
    }), $("#suggestionList").append('<li class="empty"></li>'), $("#suggestionList").scrollTo($(".first"), 500), void 0 !== ha && $("#suggestionsListContainer").hasClass("userClicked") && $("#suggestionList").scrollTo($(".active"), 500), void 0 == n ? o("layertrack", "SearchDetails:ListView") : o("layertrack", "SearchDetails:ListView:" + n)
}

function O(e, a, o) {
    if ($(".currcat").html() != atmname) {
        var n = JSON.stringify({
            noOfResultsInThisPage: e,
            pageNum: a,
            perPageResults: o,
            language: na
        });
        l(mo, "post", !0, n)
    }
}

function E() {
    if ($(".genricloader").removeClass("genric"), $(".genricloader").hide(), ya = ya.replace("desk", "mob"), ya = ya.replace("tab", "mob"), Io = fa, $(".CatologueMenu .currcat").css("color", "#ffffff"), $(".searchIconOverlay").css("background-position", "-79px -52px"), $(".CatologueMenu .caret").css("background-position", "-106px -66px"), $("#MainContainer").css("overflow", "visible"), C(g($("#currcateg").html()), $a), $(".prompt").show(), -1 == jo && To > -1 && -1 == Zo && $(".promptImageMobile").show(), $(" .promptImageMobile .prompt").show(), "" != ja ? $(".promptImageMobile #locationServicesPrompt").hide() : $(".promptImageMobile #locationServicesPrompt").show(), -1 == jo && To > -1 && -1 == Zo && -1 == Bo ? ($(".mainWrapper").hasClass("res_Small") && $(".promptImageMobile #shortcuPrompt").show(), $(".mainWrapper").addClass(" safari ")) : $(".promptImageMobile #shortcuPrompt").hide(), "en_gb" != oa && "fr_fr" != oa && $("#ukdisclaimer,.ukdisclaimer").hide(), $(".diningDesktopContainer,.desktopLoginContainer,#languageInfoContainer").hide(), "mapview" === ao ? ($("#mapOverlay").show(), $(".dining").removeClass("fixed")) : $("#WindowContainer,#filterContainerMain,.diningDesktopContainer,.desktopLoginContainer").hide(), "mapview" === ao) {
        $("#filterContainerMain,#searchContainer").hide(), $(".faqOuterContainer").hide(), ha = $(".active").find(".sno").html();
        var e = "";
        if (void 0 !== ha) {
            e = Oa[ha - 1 - Qa].getPosition();
            var a = Math.floor(ha / 10);
            Qa = ha % 10 != 0 ? 10 * a : 10 * (a - 1)
        } else 0 != Qa && (Qa -= Qa % 10);
        R(Ya, Za);
        var o = 0;
        o = Ya.length < Qa + Ka ? Ya.length % Ka : Ka, O(o, Qa / Ka, Ka), "block" === $("#locationDeatailsContainer").css("display") && ($("#suggestionsListContainer").hide(), "" != ja && $("#mylocationicon .myLocationIcon,#mylocationicon .compassIcon").hide(), $(".mainWrapper").hasClass("res_Small") && (i(Oa), Fa.setMap(ea)), ea.setOptions({
            draggable: !1,
            zoomControl: !1,
            scrollwheel: !1,
            disableDoubleClickZoom: !0
        }), $("#mapContainer").css("height", "125px"), $("#mapContainer").css("float", "none"), google.maps.event.trigger(ea, "resize"), void 0 !== ha && ea.panTo(e), ea.setZoom(16)), "report" === ko && ($("#filterContainerMain,#searchContainer,#suggestionsListContainer,#locationDeatailsContainer,.dining #mapContainer,#mylocationicon .myLocationIcon,#mylocationicon .compassIcon").hide(), $("#ReportProblemContainer,.dining #mapOverlay").show(), ea.setOptions({
            draggable: !1,
            zoomControl: !1,
            scrollwheel: !1,
            disableDoubleClickZoom: !0
        }), $("#mapContainer").css("height", "125px"), google.maps.event.trigger(ea, "resize"), void 0 !== ha && ea.panTo(e), ea.setZoom(16))
    }
    "block" == $(".unsupportedErrorContainer").css("display") && ($(".mainWrapper").css("height", $(".unsupportedErrorContainer").height()), $("#suggestionsListContainer,#locationDeatailsContainer").hide()), $(".mainWrapper").css({
        "background-image": "url(" + contextPath + "/resources/images/" + ya + ")"
    })
}

function B() {
    var e, a = 0;
    $(".genricloader").removeClass("genric"), $(".genricloader").hide(), $("#MainContainer").css("overflow", "hidden"), $(".prompt").hide(), fa = Io, C(g($("#currcateg").html()), $a), "mapview" === ao && (ha = $(".active").find(".sno").html(), "" != ja && $("#mylocationicon .myLocationIcon,#mylocationicon .compassIcon").show(), void 0 !== ha ? (e = Math.floor(ha / 25), Qa = ha % 25 != 0 ? 25 * e : 25 * (e - 1)) : (e = Math.floor(Qa % 25), Qa -= e), R(Ya, Za), a = Ya.length < Qa + Ka ? Ya.length % Ka : Ka, O(a, Qa / Ka, Ka)), "mapview" === ao ? ($("#searchContainer").hide(), $("#suggestionsListContainer").show(), void 0 !== ha && $("#suggestionsListContainer").hasClass("userClicked") && $("#suggestionList").scrollTo($(".active"), 500), $("#filterContainerMain,.desktopLoginContainer").hide(), $(".filterContainerDesktop").addClass("filterMapView"), $("#currcateg").html() != atmname || $(".currcat").html() != atmname ? ($(".filterDesktop").show(), $(".mainWrapper").hasClass("res_Medium") && $("#WindowContainer .diningCategorySelect").css("width", "33%")) : ($("#WindowContainer .diningCategorySelect").css("width", "65%"), $(".filterDesktop").hide()), $(".searchDesktop,#LoginContainerDesktop,#suggestionsListContainer").show(), $("#loginPromptContainer,.searchFieldMerchant,.searchFieldLocation,#MainContainer .dining-button,.dining #mapOverlay").hide(), $("#MainContainer .dining-inner").addClass("activeLarge")) : ($("#WindowContainer,.validationContainer").hide(), $("#MainContainer,.diningDesktopContainer,.desktopLoginContainer,#languageInfoContainer").show()), $(".mainWrapper").hasClass("res_Medium") ? (ya = ya.replace("desk", "tab"), ya = ya.replace("mob", "tab"), $(".dining #mapOverlay").hide()) : (ya = ya.replace("mob", "desk"), ya = ya.replace("tab", "desk")), "block" == $(".longErrorContainer").css("display") && ($(".mainWrapper").css("height", $(".longErrorContainer").height()), $("#MainContainer,.desktopLoginContainer").hide()), "block" == $(".unsupportedErrorContainer").css("display") && ($(".mainWrapper").css("height", $(".unsupportedErrorContainer").height()), $("#MainContainer,.desktopLoginContainer").hide()), $(".mainWrapper").css({
        "background-image": "url(" + contextPath + "/resources/images/" + ya + ")"
    })
}

function F() {
    "block" == $(".unsupportedErrorContainer").css("display") && $(".mainWrapper").css("height", $(".unsupportedErrorContainer").height()), $(window).width() <= 660 ? $(".mainWrapper").hasClass("res_Small") ? $(window).width() > 400 && "block" === $(".questionMark").css("display") && ($(".mainWrapper").hasClass("res_Medium") || (e("res_Medium"), B())) : (e("res_Small"), "block" == $(".longErrorContainer").css("display") && $(".mainWrapper").css("height", "auto"), "block" == $(".unsupportedErrorContainer").css("display") && ($(".mainWrapper").css("height", $(".unsupportedErrorContainer").height()), $("#suggestionsListContainer").hide()), E(), $(window).width() > 400 && "block" === $(".questionMark").css("display") && ($(".mainWrapper").hasClass("res_Medium") || (e("res_Medium"), B()))) : ($(window).width() > 660 && $(window).width() <= 810 ? $(".mainWrapper").hasClass("res_Medium") || (e("res_Medium"), B()) : $(".mainWrapper").hasClass("res_Large") || (e("res_Large"), B()), "block" == $(".faqOuterContainer").css("display") && $(".faqOuterContainer").show().css("height", $("#MainContainer").height()))
}

function N() {
    $(".res_Small .navOptions,#ReportProblemContainer,.navOptions,#reportFeedbackConformation").hide(), $("#mapContainer,#locationDeatailsContainer").show(), $("body,html").scrollTop(0), $("#locationDeatailsContainer").scrollTop(0), $(".mainWrapper").hasClass("res_Small") && (i(Oa), Fa.setMap(ea)), $("#report").removeAttr("disabled"), ko = "details", google.maps.event.trigger(ea, "resize"), ea.fitBounds(Ja), ea.setZoom(16), ea.panTo(Fa.getPosition())
}

function z() {
    s(Oa), $("#mapContainer").show(), $("#mapContainer").css("height", "250px"), (Wo > 0 || _o > 0 || Fo > 0) && 0 > No && $("#mapContainer").css("height", "140px"), $(".dining").removeClass("fixed"), $("#locationDeatailsContainer").removeClass("locationfixed"), $(".navOptions").removeClass("navfixed"), $(".navOptions,#ReportProblemContainer,#locationDeatailsContainer").hide(), $("#mapContainer").css("margin-top", "0px"), $("#suggestionsListContainer").show(), "" != ja && $("#mylocationicon .myLocationIcon,#mylocationicon .compassIcon").show(), ea.setZoom(12), ea.setOptions({
        draggable: !0,
        zoomControl: !0,
        scrollwheel: !0,
        disableDoubleClickZoom: !1
    }), $("#mapOverlay").show(), $("#suggestionList").scrollTo($(".active"), 500), google.maps.event.trigger(ea, "resize"), ea.fitBounds(Ja)
}

function H() {
    $("#searchContainer,#suggestionsListContainer,#mylocationicon .myLocationIcon,#mylocationicon .compassIcon,.navOptions,#ReportProblemContainer").hide(), $("#locationDeatailsContainer,#mapOverlay,#mapContainer").show()
}

function J() {
    var e;
    switch ($(".currcat").html(sa), $("#cat").html(sa), $(".filterDesktop, .filterCuisine").show(), $("#WindowContainer .diningCategorySelect").css("width", "40%"), $(".mainWrapper").hasClass("res_Medium") && $("#WindowContainer .diningCategorySelect").css("width", "33%"), C(g(sa), $a), $(".subcatDesk, .subcatDesk1").html(allcat), $(".comma").html(",&nbsp;"), $(".searchMerchant").val(""), sa) {
        case diningname:
            e = diningplaceholder;
            break;
        case travelname:
            e = hotelplaceholder;
            break;
        case atmname:
            e = atmplaceholder, $(".filterDesktop, .filterCuisine").hide(), $("#WindowContainer .diningCategorySelect").css("width", "65%"), $(".subcatDesk, .subcatDesk1, .comma").html("")
    }
    $(".searchMerchant").callplaceholder(e), $(".filterContainerDesktop").hide(), $(".dining_selectMenu #currcateg").html(sa), $(".searchDesktopDropdown .searchCategory").html(searchin + " " + sa + '<span class="sprite-desk arrowSelect"></span>'), $(".filterDropdownCategory .flterCategory").html(filterin + " " + sa + '<span class="sprite-desk arrowSelect"></span>'), xa = Ma = "", $(".searchMerchant").css("color", "grey"), $(".validationContainer").hide()
}

function q(e, a, o) {
    $("#locationDeatailsContainer").hide(), $("#ReportProblemContainer").hide(), ko = "home", Qa = 0;
    var n = e.merchListRespBean.merchDtlsBeanList;
    $(".SearchSuggestionsList").text(""), Ya = n, $("#suggestionsListContainer").removeClass("userClicked"), $(".active").removeClass("active"), ha = $(".active").find(".sno").html(), Za = new google.maps.LatLng(Ga, Va), o ? ("fr_fr" == oa && (sa = m(sa)), R(n, Za, sa)) : R(n, Za), $("#MainContainer .dining-inner").addClass("activeLarge"), $(".filterContainerDesktop").addClass("filterMapView"), $("#WindowContainer,#MainContainer .diningDesktopContainer,#mapContainer,#suggestionsListContainer,.SearchSuggestionsList,#LoginContainerDesktop,.searchDesktop,.dining").show(), $("#loginPromptContainer,.searchFieldMerchant,.searchFieldLocation,#MainContainer .dining-button,.dining #mapOverlay,.desktopLoginContainer,.genricloader").hide(), $("#suggestionList").scrollTo($(".first"), 500);
    var t = e.merchListRespBean.merchantCount;
    f(t, JSON.parse(a).category), 1 == t && (y(), Go(e))
}

function U() {
    var e = "";
    if (pa = ho + "//" + lo + contextPath + "/mersearch/getMerchantList" + aa, $(".searchIconOverlay").css("background-position", "-79px -52px"), "" == $("#searchContainer .searchLocation").val() && "" === ja) $(".longErrorContainer").show(), $(".longErrorHeading").html(emptySerachError), $("#searchContainer,.preLoader,.dining").hide();
    else {
        var a = $(".CatologueMenu .currcat").html(),
            o = "",
            t = "";
        oo = "", no = "";
        var r = "";
        if ("" != $("#searchContainer .searchMerchant").val() && $("#searchContainer .searchMerchant").val() != $("#searchContainer .searchMerchant").attr("placeholder") ? (r = $("#searchContainer .searchMerchant").val(), yo = $("#searchContainer .searchMerchant").val()) : yo = "", $(".currcat").html() === atmname && (pa = ga, o = "", t = ""), $(".preLoader").show(), $("#MainContainer,.dining,#searchContainer").hide(), "" == $("#searchContainer .searchLocation").val() || Wa) "" != ja ? 0 === $("#searchContainer .searchLocation").val().length ? ($(".longErrorContainer").show(), $(".longErrorHeading").html(emptySerachError), $("#searchContainer,.preLoader,.dining").hide()) : (Io = "", Za = new google.maps.LatLng(ja, Ua), n(Za, "", "#searchContainer", function() {
            e = JSON.stringify({
                merchantName: r,
                category: m(a),
                subCategory: o,
                latitude: ja,
                longitude: Ua,
                recommId: t,
                language: na
            }), l(pa, "post", !0, e, nn, en)
        }, !1)) : ($(".longErrorContainer").show(), $(".longErrorHeading").html(emptySerachError), $("#searchContainer,.preLoader,.dining").hide());
        else {
            var i = $("#searchContainer .searchLocation").val();
            "" != i && (Io = i), n("", i, "#searchContainer", function() {
                e = JSON.stringify({
                    merchantName: r,
                    category: m(a),
                    subCategory: o,
                    latitude: oo,
                    longitude: no,
                    recommId: t,
                    language: na
                }), l(pa, "post", !0, e, nn, en)
            }, !1)
        }
    }
}

function j(e, a, o) {
    if ($(".currcat").html() != atmname) {
        if (-1 == $.inArray(e.keyCode, Jo) && (o.find("#searchSuggestionsContainer .SearchSuggestionsList").hide(), o.find("#searchSuggestionsContainer").hide(), a.css("color", "#000"), o.find(".SearchSuggestionsList").text(""), o.find(" #suggestionType").text(""), $(".merchantActive").removeClass("merchantActive"), a.val().length >= 3)) {
            var n = ho + "//" + lo + contextPath + "/mersearch/getMerchantNameSubCtg";
            $.ajax({
                url: n,
                type: "POST",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                timeout: ajaxTimeout,
                data: {
                    searchString: a.val()
                },
                success: function(e) {
                    var a;
                    o.find(".SearchSuggestionsList").html(""), o.find("#searchSuggestionsContainer .SearchSuggestionsList").hide();
                    var n = e.merNmSubCtgList;
                    o.find(".searchFieldMerchant .SearchSuggestionsList").text("");
                    var t, r = 0;
                    for (t = 0; t < n.length; t++) a = "", a += '<div class="searchMerchantSuggestion  ', a = a + ' suggestionContent" >' + n[t] + "</div>", o.find(".SearchSuggestionsList").append(a), a = "", r = 1;
                    1 == r ? (o.find("#searchSuggestionsContainer").show(), o.find("#searchSuggestionsContainer .SearchSuggestionsList").show()) : (o.find("#searchSuggestionsContainer .SearchSuggestionsList").hide(), o.find("#searchSuggestionsContainer").hide())
                }
            })
        }
        var t = 0;
        o = $(o.selector), 40 == e.keyCode && (Ra = !0, o.find("#searchSuggestionsContainer .SearchSuggestionsList .searchMerchantSuggestion").each(function() {
            return $(this).hasClass("merchantActive") ? ($(this).removeClass("merchantActive"), $(this).next().addClass("merchantActive"), t = 1, !1) : void 0
        }), 0 == t && o.find("#searchSuggestionsContainer .searchMerchantSuggestion").first().addClass("merchantActive")), t = 0, 38 == e.keyCode && (Ra = !0, o.find("#searchSuggestionsContainer .SearchSuggestionsList .searchMerchantSuggestion").each(function() {
            return $(this).hasClass("merchantActive") ? ($(this).removeClass("merchantActive"), $(this).prev().addClass("merchantActive"), t = 1, !1) : void 0
        }), 0 == t && o.find("#searchSuggestionsContainer .SearchSuggestionsList .searchMerchantSuggestion").first().addClass("merchantActive")), 0 != $(".merchantActive").length && (o.find("#searchSuggestionsContainer .SearchSuggestionsList").scrollTo($(".merchantActive"), 100), a.val($.trim($(".merchantActive").text())))
    }
}

function Z(e) {
    var a = {
        en_AU: [langaus, "AU"],
        fr_FR: [langfr, "FR"],
        en_GB: [languk, "UK"],
        en_US: [langus, "US"]
    };
    $(".langSelected").html(a[e][0]);
    var o = '<select class="changelang">';
    $.each(a, function(a, n) {
        o += "<option ", e == a && (o += "selected "), o = o + 'value="' + n[1] + '">' + n[0] + "</option>"
    }), o += "</select>", $(".languageSelection").html(o), $(".langSelectedContainer").append(o)
}

function G() {
    aa = b("sys"), na = b("intcLang"), oa = b("intcLang").toLowerCase(), Z(b("intcLang")), a(), $(".searchMerchant").placeholder(), $(".preLoader").show(), $(".filterComplete, .searchComplete,#reportFeedbackConformation").hide(), $(".mainWrapper").hasClass("res_Large") ? ya = wa[Math.floor(Math.random() * wa.length)] : $(".mainWrapper").hasClass("res_Medium") && (ya = ka[Math.floor(Math.random() * ka.length)]), $(".mainWrapper").css({
        "background-image": "url(" + contextPath + "/resources/images/" + ya + ")"
    }), aa = "bigdata" === aa ? "/BigData" : "undefined" !== aa ? "/" + aa : "", da = ho + "//" + lo + contextPath + "/mersearch/getMerchantDetails" + aa, pa = ho + "//" + lo + contextPath + "/mersearch/getMerchantList" + aa, ga = pa.replace("getMerchantList", "getATMList"), "en_us" != oa && "fr_fr" != oa && $(".subscript").hide();
    var e = {
        dom_country: b("dom_country")
    };
    if (l(go, "get", !0, null, d), l(po, "get", !1, e, v), $(".mainWrapper").hasClass("ie8") ? P() : W(), "en_gb" === oa ? ($(".mainWrapper").addClass("uk"), $("#ukdisclaimer,.ukdisclaimer").show()) : "fr_fr" == oa ? ($(".mainWrapper").addClass("fr"), $("#ukdisclaimer,.ukdisclaimer").show()) : $("#ukdisclaimer,.ukdisclaimer").hide(), va = "us", "en_gb" == oa ? va = "uk" : "fr_fr" == oa ? va = "fr" : "en_au" == oa && (va = "au"), Eo > 0 && $(window).height() < 300 && (Fo = 1), -1 == jo && To > -1 && -1 == Zo && -1 == Bo ? ($(".mainWrapper").hasClass("res_Small") && $(".promptImageMobile #shortcuPrompt").show(), $(".mainWrapper").addClass(" safari ")) : $(".promptImageMobile #shortcuPrompt").hide(), void 0 !== google) {
        {
            Aa("locationsuggest"), Aa("searchOverlay"), Aa("mobilesearchField"), Aa("mobilefiltersearchField"), Aa("mobileLandSearchField")
        }
        google.maps.visualRefresh = !0, $(".changelang").on("change", function() {
            var e = $(this).val();
            window.location.href = ho + "//" + lo + contextPath + "/mersearch/index?dom_country=" + e + "&linknav=" + e.toLowerCase() + "-loy-corpcards-waldo-changelang"
        })
    }
}

function V(e) {
    google.maps.event.addListener(e.googleobject, "place_changed", function() {
        Pa = !1;
        var a = "#" + e.inputID;
        Uo = $(a).val()
    })
}

function K() {
    La = !1;
    var e;
    if ("" == $("#SearchTypeContainer .searchLocation").val() && "" === ja) $(".longErrorContainer").show(), $(".longErrorHeading").addClass("mobservdown"), $(".longErrorHeading").html(emptySerachError), $("#MainContainer,.preLoader,.dining").hide();
    else if (Ja = "", pa = ho + "//" + lo + contextPath + "/mersearch/getMerchantList" + aa, oo = "", no = "", $(".preLoader").show(), $("#MainContainer").hide(), "" == $("#SearchTypeContainer .searchLocation").val() || Wa) "" != ja ? "" == $("#SearchTypeContainer .searchLocation").val() ? ($(".longErrorContainer").show(), $(".longErrorHeading").addClass("mobservdown"), $(".longErrorHeading").html(emptySerachError), $("#MainContainer,.preLoader,.dining").hide()) : (Io = "", Za = new google.maps.LatLng(ja, Ua), n(Za, "", "#MainContainer", function() {
        e = JSON.stringify({
            merchantName: "",
            category: "dining",
            subCategory: "",
            latitude: ja,
            longitude: Ua,
            recommId: "",
            language: na
        }), l(pa, "post", !0, e, rn, Xo)
    }, !1)) : ($(".longErrorContainer").show(), $(".longErrorHeading").addClass("mobservdown"), $(".longErrorHeading").html(emptySerachError), $("#MainContainer,.preLoader,.dining").hide());
    else {
        var a = $("#SearchTypeContainer .searchLocation").val();
        "" != a && (Io = a), n("", a, "#MainContainer", function() {
            e = JSON.stringify({
                merchantName: "",
                category: "dining",
                subCategory: "",
                latitude: oo,
                longitude: no,
                recommId: "",
                language: na
            }), l(pa, "post", !0, e, rn, Xo)
        }, !1)
    }
}

function Q(e) {
    if (e.altKey || e.ctrlKey) return !0;
    var a = 0;
    switch (e.keyCode) {
        case 9:
            $(".filterContainerDesktop .visual ul li").removeClass("catActive"), $(" .filterContainerDesktop").hide();
            break;
        case 40:
            return "none" != $(".filterContainerDesktop").css("display") && ($(".filterContainerDesktop .visual ul li").each(function() {
                return $(this).hasClass("catActive") ? ($(this).removeClass("catActive"), $(this).next().addClass("catActive"), $(this).next().focus(), a = 1, !1) : void 0
            }), 0 == a && ($(".filterContainerDesktop .visual ul li").first().addClass("catActive"), $(".filterContainerDesktop .visual ul li").first().focus()), a = 0), e.preventDefault(), e.stopPropagation(), !1;
        case 38:
            return "none" != $(".filterContainerDesktop").css("display") && ($(".filterContainerDesktop .visual ul li").each(function() {
                return $(this).hasClass("catActive") ? ($(this).removeClass("catActive"), $(this).prev().addClass("catActive"), $(this).prev().focus(), a = 1, !1) : void 0
            }), 0 == a && ($(".filterContainerDesktop .visual ul li").first().addClass("catActive"), $(".filterContainerDesktop .visual ul li").first().focus())), e.preventDefault(), e.stopPropagation(), !1;
        case 13:
        case 32:
            return "none" == $(".filterContainerDesktop").css("display") ? ($(".filterContainerDesktop").show(), $(".filterContainerDesktop").isOnScreen()) : $(".filterContainerDesktop .visual ul li.catActive").click(), e.preventDefault(), e.stopPropagation(), !1;
        case 27:
            $(".filterContainerDesktop").hide()
    }
}

function Y(e) {
    setTimeout(function() {
        e.prev().val("").focus()
    }, 0), e.prev().hasClass("searchMerchant") ? Ma = xa = "" : e.prev().hasClass("searchLocation") && (Pa = !0, $(".searchMyLocateIcon").addClass("searchLocateIcon"), $(".searchLocateIcon").removeClass("searchMyLocateIcon"), $(".searchMyLocateIconDesk").addClass("searchLocateIconDesk"), $(".searchLocateIconDesk").removeClass("searchMyLocateIconDesk")), e.hide()
}

function X() {
    "" != Uo ? (Pa = !1, Uo != mylocationplaceholder ? $(".mainWrapper").hasClass("ie9") ? Uo != locationplaceholder ? setTimeout(function() {
        $(".searchLocation").val(Uo), $(".searchLocation").css("color", "black")
    }, 0) : setTimeout(function() {
        $(".searchLocation").val(locationplaceholder), $(".searchLocation").css("color", "grey")
    }, 0) : ($(".searchLocation").val(Uo), Ta = !1) : I()) : "" == Io || Ta || Pa ? "" != ja ? Pa ? $(".mainWrapper").hasClass("ie9") ? ($(".searchLocation").val(locationplaceholder), $(".searchLocation").css("color", "grey"), Uo = "") : ($(".searchLocation").val(""), $(".searchLocation").css("color", "grey"), Uo = "", Ta = !1) : I() : $(".mainWrapper").hasClass("ie9") ? ($(".searchLocation").val(locationplaceholder), $(".searchLocation").css("color", "grey")) : ($(".searchLocation").val(""), $(".searchLocation").css("color", "grey"), Uo = "", Ta = !1) : ($(".searchLocation").val(Io), $(".searchLocation").css("color", "black"), Ta = !1)
}
var ea, aa, oa, na, ta, ra, ia, sa, ca, la, ha, da, pa, ga, ma, $a, ua, Ca, va, fa = "",
    ba = ["bg-mob-breakfast.jpg", "bg-mob-cooking.jpg", "bg-mob-hotelbell.jpg"],
    wa = ["bg-desk-breakfast.jpg", "bg-desk-cooking.jpg", "bg-desk-hotelbell.jpg"],
    ka = ["bg-tab-breakfast.jpg", "bg-tab-cooking.jpg", "bg-tab-hotelbell.jpg"],
    ya = ba[Math.floor(Math.random() * ba.length)],
    La = !0,
    Sa = !1,
    Da = !1,
    Ma = "",
    Ia = !0,
    xa = "",
    Pa = !1,
    Ta = !1,
    Wa = !1,
    _a = [],
    Aa = function(e) {
        var a = [],
            o = {
                types: ["(regions)"]
            };
        return a.googleobject = new google.maps.places.Autocomplete(document.getElementById(e), o), a.inputID = e, _a[e] = a, V(a), a
    },
    Ra = !1,
    Oa = [],
    Ea = "",
    Ba = "",
    Fa = "",
    Na = 0,
    za = [],
    Ha = "",
    Ja = "",
    qa = [],
    Ua = "",
    ja = "",
    Za = "",
    Ga = "",
    Va = "",
    Ka = "",
    Qa = 0,
    Ya = "",
    Xa = "",
    eo = "",
    ao = "",
    oo = "",
    no = "",
    to = "",
    ro = "",
    io = "",
    so = "",
    co = [],
    lo = location.host,
    ho = location.protocol,
    po = ho + "//" + lo + contextPath + "/mersearch/getCategoryInfo",
    go = ho + "//" + lo + contextPath + "/mersearch/getAllowedCountryList",
    mo = ho + "//" + lo + contextPath + "/mersearch/eosRecording",
    $o = ho + "//" + lo + contextPath + "/mersearch/reportProblem",
    uo = ho + "//" + lo + contextPath + "/mersearch/eosListReport",
    Co = ho + "//" + lo + contextPath + "/mersearch/eosMerchantDetailReport",
    vo = [go, po, $o, uo],
    fo = "",
    bo = "",
    wo = "",
    ko = "",
    yo = "",
    Lo = "",
    So = "",
    Do = " ",
    Mo = "",
    Io = "",
    xo = !1,
    Po = null,
    To = navigator.userAgent.toLowerCase(),
    Wo = To.indexOf("blackberry 9900"),
    _o = To.indexOf("bb10; kbd"),
    Ao = To.indexOf("gt-p3110"),
    Ro = To.indexOf("gt-p5110"),
    Oo = To.indexOf("gt_p6800"),
    Eo = To.indexOf("blackberry"),
    Bo = To.indexOf("bb10"),
    Fo = -1,
    No = To.indexOf("chrome"),
    zo = "",
    Ho = "",
    Jo = [38, 40, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 45],
    qo = $(".deskRec").html(),
    Uo = "",
    jo = To.indexOf("chrome/"),
    Zo = To.indexOf("android");
To = To.indexOf("safari/"), $.fn.isOnScreen = function() {
    var e = $("body").scrollTop(),
        a = $(window),
        o = {
            top: a.scrollTop(),
            left: a.scrollLeft()
        };
    o.right = o.left + a.width(), o.bottom = o.top + a.height();
    var n = this.offset();
    n.right = n.left + this.outerWidth(), n.bottom = n.top + this.outerHeight();
    var t = n.bottom - o.bottom + e + 20;
    if (t > 0 && o.bottom < n.bottom) {
        var r = $("html, body");
        r.animate({
            scrollTop: t
        }, "500", "swing")
    }
};
var Go = function(e) {
        var a;
        if ("SUCCESS" != e.globalRespBean.explnDesc) return void c(e.globalRespBean.explnCode, "#WindowContainer");
        $(".recType").show(), ko = "details", o("layertrack", "MerchantDetails"), $(".res_Small #suggestionsListContainer, .res_Medium #suggestionsListContainer,.res_Small #mylocationicon .myLocationIcon,.res_Small #mylocationicon .compassIcon").hide();
        var n = e.merchListRespBean.merchDtlsBeanList[0];
        $("#suggestionsListContainer").addClass("userClicked");
        var t = n;
        $(".SearchSuggestionsList").text(""), $("#merchantTitle").html(t.merchantName);
        var r, i;
        "" != t.merchAddrBean.addressLine1 && null != t.merchAddrBean.addressLine1 && (r = t.merchAddrBean.addressLine1, i = t.merchAddrBean.addressLine1, r += ",<br> ", i += ".<br> "), "" != t.merchAddrBean.addressLine2 && null != t.merchAddrBean.addressLine2 && (r += t.merchAddrBean.addressLine2, i += t.merchAddrBean.addressLine2, r += ",<br> ", i += ".<br> "), "" != t.merchAddrBean.city && null != t.merchAddrBean.city && (r = r + t.merchAddrBean.city + " ", i = i + t.merchAddrBean.city + ", "), "" != t.merchAddrBean.state && null != t.merchAddrBean.state && (r = r + t.merchAddrBean.state + " ", i = i + t.merchAddrBean.state + " "), "" != t.merchAddrBean.zipCode && null != t.merchAddrBean.zipCode && (r = r + t.merchAddrBean.zipCode + ".", i = i + t.merchAddrBean.zipCode + "."), $("#address").html(r);
        var s;
        s = r, $(".locationDetailText .distance").html(t.distance + " " + units), "en_gb" === oa && $(".locationDetailText .content").addClass("contentuk"), $(".locationClose h2").html(t.subCategory), $(".recType").text("REC000" != t.recommID ? frequentedtext : ""), $(".atm").show(), "" != t.merchantPhone && null != t.merchantPhone ? ($("#phone a").text(w(t.merchantPhone, t.merchAddrBean.countryCode)), $("#phone a").attr("href", "tel:" + t.merchantPhone), $("#phone").closest(".atm").show(), s = s + "<br> Contact No:" + $("#phone a").text()) : $("#phone").closest(".atm").hide(), s = s.replace(/\<br\>/g, "%0D%0A");
        var l = "mailto:?to=&subject=" + encodeURIComponent(t.merchantName) + " " + emailSub + "&body=" + s;
        $("#mail a").attr("href", l), 0 != t.mrchntTAReviewCnt ? ($(".locationDetailsInner .ratingContainer .ratingCount,.locationDetailsInner .ratingContainer .ratingImage").show(), $(".locationDetailsInner .ratingContainer .ratingCount").text(t.mrchntTAReviewCnt + " TripAdvisor Reviews"), $(".locationDetailsInner .ratingContainer .ratingImage img").attr("src", t.mrchntTARating)) : $(".locationDetailsInner .ratingContainer .ratingCount,.locationDetailsInner .ratingContainer .ratingImage").hide();
        var h = t.tripAdvsrReviewBeanList;
        $("#reviewInnerContainer").html("");
        var d;
        for (a = 0; a < h.length; a++) 0 == a && $("#ReviewHeadingContiner").html('<div class="ReviewHeading"><div class="heading"> <span class="sprite-mob advisorIcon"></span> Reviews</div><!--<div class="subHeading">Take me to TripAdvisor.com</div>--></div>'), d = "", d = d + '<li><div class="review"><div class="ReviewHeading"><div class="Heading">"' + h[a].reviewTitle + '"</div><div class="SubTitleContainer"><div class="ratingImg" ><img src="' + h[a].reviewRating + '" alt="' + h[a].reviewRatingImg + ' of 5.0" title="' + h[a].reviewRatingImg + ' of 5.0"></div><div class="RatingDuration">' + h[a].noOfDaysAgo + ' days ago</div></div></div><div class="ReviewContent"><span class="shortcmt">' + h[a].reviewShortCmnt + '</span><span class="longcmt">' + h[a].reviewLongCmnt + "</span>", h[a].reviewLongCmnt.length > 200 && (d += '<span class="dots">... </span>', d += '<div class="more">more</div>'), d += "</div></div></li>", $("#reviewInnerContainer").append(d);
        0 == h.length ? $("#TripAdvisorReviewContainer").hide() : $("#TripAdvisorReviewContainer").show(), $("#probcont,#revdisc").show(), $("#Taurl").attr("href", t.mrchtTAURL);
        var p = new google.maps.LatLng(t.merchantLat, t.merchantLong),
            g = "";
        if ($(".res_Small #suggestionsListContainer, .res_Medium #suggestionsListContainer").hide(), $("#locationDeatailsContainer").show(), $(".mainWrapper").hasClass("res_Small")) ea.setOptions({
            draggable: !1,
            zoomControl: !1,
            scrollwheel: !1,
            disableDoubleClickZoom: !0
        }), $("#mapContainer").css("height", "125px"), google.maps.event.trigger(ea, "resize"), ea.panTo(p), ea.setZoom(16), g = $(".CatologueMenu .currcat").html();
        else {
            g = $("#currcateg").text();
            var m = $(window).width();
            m -= $("#locationDeatailsContainer").width(), "block" === $("#suggestionsListContainer").css("display") && (m -= $("#suggestionsListContainer").width()), $("#mapContainer").css("width", m), $("#mapContainer").css("float", "right"), google.maps.event.trigger(ea, "resize"), ea.panTo(p)
        }
        var u = t.merchantId;
        L(u, g, e.globalRespBean.requestId), $(".genricloader").hide(), $("#ReportProblemContainer").hide(), $(".mainWrapper").hasClass("res_Small") && $("body,html").scrollTop(0), $("#suggestionList").scrollTo($(".active"), 500), $("#revdisc .disclamierurl").attr("target", "_blank"), $("#Taurl").attr("target", "_blank")
    },
    Vo = function(e) {
        var a;
        if (null != e.merchListRespBean && (a = e.merchListRespBean.merchDtlsBeanList), Za = new google.maps.LatLng(oo, no), "SUCCESS" != e.globalRespBean.explnDesc) return $(".genricloader").removeClass("genric"), $(".compassIcon div").addClass("myLocationIcon").removeClass("myLocationBlueIcon"), void c(e.globalRespBean.explnCode, "#WindowContainer");
        Qa = 0, $(".SearchSuggestionsList").text(""), "" != io ? $(".searchSubheadingPincode").html(io) : "" != ro ? $(".searchSubheadingPincode").html(ro) : "" != to && $(".searchSubheadingPincode").html(to), Io = fa = Ea, $(".searchLocation").val(fa), $("#locationDeatailsContainer,#ReportProblemContainer").hide(), ko = "home", Ga = oo, Va = no, Za = new google.maps.LatLng(Ga, Va), $(".active").removeClass("active"), ha = $(".active").find(".sno").html(), R(a, Za), $("#suggestionsListContainer").removeClass("userClicked"), $("#suggestionsListContainer").show(), $(".preLoader,.genricloader").hide(), Ya = a;
        var o = e.merchListRespBean.merchantCount;
        f(o, $("#currcateg").html()), 1 == o && (y(), Go(e)), $(".genricloader").removeClass("genric"), $(".genricloader").hide()
    },
    Ko = function() {
        return window.addEventListener ? function(e, a, o, n) {
            e.addEventListener(a, o, n)
        } : window.attachEvent ? function(e, a, o) {
            e.attachEvent("on" + a, o)
        } : void 0
    }(),
    Qo = function(e) {
        var a = $(".searchSubheadingCity").html().replace($(".searchMerchant").attr("placeholder"), ""),
            t = new google.maps.LatLng(ea.getCenter().lat(), ea.getCenter().lng());
        void 0 === e ? (oo = t.lat(), no = t.lng(), o("rmaction", "click_Refresh")) : (oo = e.lat(), no = e.lng());
        var r = $(".subcatDesk").text();
        $(".mainWrapper").hasClass("res_Small") && (r = Do, fo = Mo), r == allcat && (r = ""), pa = ho + "//" + lo + contextPath + "/mersearch/getMerchantList" + aa, $("#currcateg").html() === atmname && (pa = ga, r = ""), Ho = Ya, n(new google.maps.LatLng(oo, no), "", "#WindowContainer", function() {
            var e = JSON.stringify({
                merchantName: a,
                category: m($("#currcateg").html()),
                subCategory: r,
                latitude: oo,
                longitude: no,
                recommId: fo,
                language: na
            });
            h(pa, "post", !0, e, Vo)
        }, !1)
    },
    Yo = function() {
        $("#MainContainer, .genricloader, .preLoader").hide(), $(".longErrorHeading").html(serviceDownError), $(".longErrorContainer").show(), $("body,html").scrollTop(0)
    },
    Xo = function() {
        $(".preLoader").hide(), $("body,html").scrollTop(0)
    },
    en = function() {
        $("#searchContainer, .genricloader, .preLoader, .dining").hide(), $(".longErrorHeading").html(serviceDownError), $(".longErrorContainer").show(), $("body,html").scrollTop(0)
    },
    an = function() {
        $("#WindowContainer,.genricloader").hide(), $(".longErrorHeading").html(serviceDownError), $(".longErrorContainer").show(), $("body,html").scrollTop(0)
    },
    on = function(e, a) {
        var o;
        if (null != e.merchListRespBean && (o = e.merchListRespBean.merchDtlsBeanList), "" != $("#filterContainerMain .searchLocation").val() ? (Ga = oo, Va = no) : (Ga = ja, Va = Ua), "SUCCESS" != e.globalRespBean.explnDesc) return void c(e.globalRespBean.explnCode, "#MainContainer, #WindowContainer");
        var n;
        $("#cat").html($("#merchantCat").val()), $(".currcat").html($("#merchantCat").val()), $("#currcateg").html($("#merchantCat").val()), $(".searchDesktopDropdown .searchCategory").html(searchin + " " + $("#merchantCat").val() + '<span class="sprite-desk arrowSelect"></span>'), $(".filterDropdownCategory .flterCategory").html(filterin + " " + $("#merchantCat").val() + '<span class="sprite-desk arrowSelect"></span>');
        var t = $("#merchantCat").val();
        for (t === diningname && ($("#WindowContainer .diningCategorySelect").css("width", "40%"), $(".subcatDesk").html(allcat), $(".subcatDesk1").html(allcat), $(".comma").html(",&nbsp;"), C(g(t), $a), $(".searchMerchant").callplaceholder(diningplaceholder), $("#filtermobilechanger,#filtermobilerecchanger,.filterCuisine").show()), t === travelname && ($("#WindowContainer .diningCategorySelect").css("width", "40%"), $(".subcatDesk").html(allcat), $(".subcatDesk1").html(allcat), $(".comma").html(",&nbsp;"), C(g(t), $a), $("#filtermobilechanger,#filtermobilerecchanger,.filterCuisine").show(), $(".searchMerchant").callplaceholder(hotelplaceholder)), t === atmname && ($("#filtermobilechanger,#filtermobilerecchanger,.filterCuisine").hide(), $("#WindowContainer .diningCategorySelect").css("width", "65%"), $(".subcatDesk").html(""), $(".subcatDesk1").html(""), $(".comma").html(""), $(".searchMerchant").callplaceholder(atmplaceholder)), ko = "home", Qa = 0, n = 0; n < Oa.length; n++) Oa[n].setMap(null);
        var r = o;
        Za = new google.maps.LatLng(Ga, Va), $(".SearchSuggestionsList").text(""), Ya = r, Za = new google.maps.LatLng(Ga, Va), "" != ja && $("#mylocationicon  .myLocationIcon,#mylocationicon .compassIcon").show(), $(".preLoader,#searchContainer").hide(), $("#WindowContainer,#mapContainer").show(), $("body,html").scrollTop(0), $("#suggestionType").text(""), $("#searchContainer .SearchSuggestionsList").text(""), $(".active").removeClass("active"), ha = $(".active").find(".sno").html(), $("#suggestionsListContainer").removeClass("userClicked"), $(".searchSubheadingPincode").html(mylocationplaceholder), "" != io ? $(".searchSubheadingPincode").html(io) : "" != to ? $(".searchSubheadingPincode").html(to) : "" != ro ? $(".searchSubheadingPincode").html(ro) : "" != so && $(".searchSubheadingPincode").html(so), R(r, Za), $("#WindowContainer #loginPromptContainer").hide(), $(".dining,#mapContainer,#mapOverlay").show(), "" != $.trim($("#searchContainer .searchMerchant").val()) ? ($(".searchSubheadingCity").html($("#searchContainer .searchMerchant").val()), $(".searchComa").show()) : ($(".searchSubheadingCity").html(""), $(".searchComa").hide()), google.maps.event.trigger(ea, "resize"), $("#mapContainer").css("margin-top", "0px"), $("#suggestionsListContainer,#mapOverlay").show(), $("#suggestionList").scrollTo($(".active"), 500), $("#mapContainer").css("margin-top", "0px"), $("#loginPromptContainer").hide();
        var i = e.merchListRespBean.merchantCount;
        f(i, $("#merchantCat").val()), 1 == i && (y(), Go(e)), JSON.parse(a).latitude == ja && JSON.parse(a).longitude == Ua ? $(".compassIcon div").addClass("myLocationBlueIcon").removeClass("myLocationIcon") : $(".compassIcon div").addClass("myLocationIcon").removeClass("myLocationBlueIcon")
    },
    nn = function(e, a) {
        var o;
        if (null != e.merchListRespBean && (o = e.merchListRespBean.merchDtlsBeanList), "SUCCESS" != e.globalRespBean.explnDesc) return void c(e.globalRespBean.explnCode, "#searchContainer");
        JSON.parse(a).latitude == ja && JSON.parse(a).longitude == Ua ? (Ga = ja, Va = Ua, $(".searchSubheadingPincode").html(mylocationplaceholder)) : (Ga = oo, Va = no, "" != io ? $(".searchSubheadingPincode").html(io) : "" != to ? $(".searchSubheadingPincode").html(to) : "" != ro ? $(".searchSubheadingPincode").html(ro) : "" != so && $(".searchSubheadingPincode").html(so)), Qa = 0, ko = "home", $("#searchContainer,#loginPromptContainer").hide();
        var n = o;
        $(".SearchSuggestionsList").text(""), Ya = n, $(".active").removeClass("active"), ha = $(".active").find(".sno").html(), $("#suggestionsListContainer").removeClass("userClicked"), Za = new google.maps.LatLng(Ga, Va), "" != ja && $("#mylocationicon  .myLocationIcon,#mylocationicon .compassIcon").show(), $("body,html").scrollTop(0), $("#suggestionType").text(""), $("#searchContainer .SearchSuggestionsList").text(""), $(".dining").show(), $("#searchContainer,.preLoader,#WindowContainer #loginPromptContainer").hide(), $("#WindowContainer,.dining,#mapContainer,#mapOverlay").show(), "" != $.trim($("#searchContainer .searchMerchant").val()) && $("#searchContainer .searchMerchant").val() != $("#searchContainer .searchMerchant").attr("placeholder") ? ($(".searchSubheadingCity").html($("#searchContainer .searchMerchant").val()), $(".searchComa").show()) : ($(".searchSubheadingCity").html(""), $(".searchComa").hide()), R(n, Za), google.maps.event.trigger(ea, "resize"), $("#mapContainer").css("margin-top", "0px"), $("#suggestionsListContainer").show(), $("#suggestionList").scrollTo($(".active"), 500);
        var t = e.merchListRespBean.merchantCount,
            r = $(".CatologueMenu .currcat").html();
        f(t, r), 1 == t && (y(), Go(e)), JSON.parse(a).latitude == ja && JSON.parse(a).longitude == Ua ? $(".compassIcon div").addClass("myLocationBlueIcon").removeClass("myLocationIcon") : $(".compassIcon div").addClass("myLocationIcon").removeClass("myLocationBlueIcon")
    },
    tn = function(e, a) {
        var o;
        if (null != e.merchListRespBean && (o = e.merchListRespBean.merchDtlsBeanList), "SUCCESS" != e.globalRespBean.explnDesc) return void c(e.globalRespBean.explnCode, "#MainContainer");
        JSON.parse(a).latitude == ja && JSON.parse(a).longitude == Ua ? (Ga = ja, Va = Ua, $(".searchSubheadingPincode").html(mylocationplaceholder), yo = $(".diningDesktopContainer .searchMerchant").val()) : (Ga = oo, Va = no, "" != io ? $(".searchSubheadingPincode").html(io) : "" != to ? $(".searchSubheadingPincode").html(to) : "" != ro ? $(".searchSubheadingPincode").html(ro) : "" != so && $(".searchSubheadingPincode").html(so), "" != $("#searchMerchantDeskHome").val() && (yo = $("#searchMerchantDeskHome").val()), $(".searchLocation").val(fa)), ko = "home", Qa = 0, ao = "mapview";
        var n = o;
        $(".SearchSuggestionsList").text(""), Ya = n, $("#suggestionsListContainer").removeClass("userClicked"), $(".active").removeClass("active"), ha = $(".active").find(".sno").html(), Za = new google.maps.LatLng(Ga, Va), R(n, Za), $(".filterContainerDesktop").addClass("filterMapView"), $("#currcateg").html() != atmname ? $(".filterDesktop").show() : $("#WindowContainer .diningCategorySelect").css("width", "65%"), $("#loginPromptContainer,.searchFieldMerchant,.searchFieldLocation,#MainContainer .dining-button,.dining #mapOverlay").hide(), $("#suggestionsListContainer,#WindowContainer,#mapContainer,.searchDesktop,#LoginContainerDesktop").show(), google.maps.event.trigger(ea, "resize"), ea.fitBounds(Ja), "" != $.trim($(".diningDesktopContainer .searchMerchant").val()) ? ($(".searchSubheadingCity").html($(".diningDesktopContainer .searchMerchant").val()), $(".searchComa").show(), $(".searchmerchant").val($(".diningDesktopContainer .searchMerchant").val())) : ($(".searchSubheadingCity").html(""), $(".searchComa").hide()), $(".desktopLoginContainer").hide(), $(".SearchSuggestionsList,#MainContainer .diningDesktopContainer").show(), $("#MainContainer .dining-inner").addClass("activeLarge"), $(".preLoader").hide(), $("#MainContainer").show(), $("#MainContainer").slideUp(1e3), $("#suggestionList").scrollTo($(".first"), 500), $(".dining").show();
        var t = e.merchListRespBean.merchantCount;
        f(t, $("#currcateg").html()), 1 == t && (y(), Go(e)), JSON.parse(a).latitude == ja && JSON.parse(a).longitude == Ua ? $(".compassIcon div").addClass("myLocationBlueIcon").removeClass("myLocationIcon") : $(".compassIcon div").addClass("myLocationIcon").removeClass("myLocationBlueIcon")
    },
    rn = function(e, a) {
        var o;
        if (null != e.merchListRespBean && (o = e.merchListRespBean.merchDtlsBeanList), "SUCCESS" != e.globalRespBean.explnDesc) return $(".longErrorHeading").addClass("mobservdown"), void c(e.globalRespBean.explnCode, "#MainContainer, .dining");
        var n = o;
        ko = "home", $(".SearchSuggestionsList").text(""), JSON.parse(a).latitude == ja && JSON.parse(a).longitude == Ua ? (Za = new google.maps.LatLng(ja, Ua), Ga = ja, Va = Ua) : (Ga = oo, Va = no, Za = new google.maps.LatLng(oo, no), "" != io ? $(".searchSubheadingPincode").html(io) : "" != to ? $(".searchSubheadingPincode").html(to) : "" != ro ? $(".searchSubheadingPincode").html(ro) : "" != so && $(".searchSubheadingPincode").html(so)), Ya = n, $(".active").removeClass("active"), ha = $(".active").find(".sno").html(), $("#suggestionsListContainer").removeClass("userClicked"), R(n, Za), $(".preLoader").hide(), $("#mapOverlay").show(), $(".dining").show(), $("#WindowContainer").show(), $("#mapContainer").show(), $("#suggestionsListContainer").show(), google.maps.event.trigger(ea, "resize"), $(".SearchSuggestionsList").show(), $("#suggestionList").scrollTo($(".active"), 500), $(".searchSubheadingPincode").html(mylocationplaceholder);
        var t = e.merchListRespBean.merchantCount;
        f(t, "dining"), $(".searchComa").hide(), 1 == t && (y(), Go(e), $(".res_Small #suggestionsListContainer, .res_Medium #suggestionsListContainer").hide(500), $("body,html").scrollTop(0)), JSON.parse(a).latitude == ja && JSON.parse(a).longitude == Ua ? $(".compassIcon div").addClass("myLocationBlueIcon").removeClass("myLocationIcon") : $(".compassIcon div").addClass("myLocationIcon").removeClass("myLocationBlueIcon")
    },
    sn = function(e, a) {
        return "SUCCESS" != e.globalRespBean.explnDesc ? void c(e.globalRespBean.explnCode, "#WindowContainer") : (JSON.parse(a).latitude == ja && JSON.parse(a).longitude == Ua ? (Ga = ja, Va = Ua, $(".searchSubheadingPincode").html(mylocationplaceholder)) : (Ga = oo, Va = no, "" != io ? $(".searchSubheadingPincode").html(io) : "" != to ? $(".searchSubheadingPincode").html(to) : "" != ro ? $(".searchSubheadingPincode").html(ro) : "" != so && $(".searchSubheadingPincode").html(so)), "" != $.trim($(".searchDesktop .searchMerchant").val()) ? ($(".searchSubheadingCity").html($(".searchDesktop .searchMerchant").val()), $(".searchComa").show()) : ($(".searchSubheadingCity").html(""), $(".searchComa").hide()), $(".subcatDesk").html(allcat), $(".subcatDesk1").html(allcat), Io = fa = $(".searchDesktop .searchLocation").val(), $(".searchLocation").val(fa), $("#locationDeatailsContainer").hide(), yo = $(".searchDesktop .searchMerchant").val(), $("#ReportProblemContainer").hide(), $(".filterSubcategoryWrapper").find(".filterSubcategoryContainer span.checkboxImage").addClass("selectedCheckbox"), $(".filterSubcategoryWrapper").find(".filterSubcategoryContainer span.checkboxImage").prop("checked", !0), $("#checkboxShowAll").parent("span").addClass("selectedCheckbox"), $("#checkboxShowAll").prop("checked", !0), $(".searchLocation").val(""), $(".searchLocation").callplaceholder(), $("#searchSuggestionsContainer").hide(), $(".searchMerchant").val($(".searchDesktop .searchMerchant").val()), q(e, a, !1), void(JSON.parse(a).latitude == ja && JSON.parse(a).longitude == Ua ? $(".compassIcon div").addClass("myLocationBlueIcon").removeClass("myLocationIcon") : $(".compassIcon div").addClass("myLocationIcon").removeClass("myLocationBlueIcon")))
    },
    cn = function(e, a) {
        return "SUCCESS" != e.globalRespBean.explnDesc ? ($(".subcatDesk1").text(ta), $(".subcatDesk").text(ra), void c(e.globalRespBean.explnCode, "#WindowContainer")) : (bo = fo = wo, $("#locationDeatailsContainer,#ReportProblemContainer").hide(), $(".deskRec").html(qo), void q(e, a, !1))
    },
    ln = function(e, a) {
        return "SUCCESS" != e.globalRespBean.explnDesc ? ($(".searchDesktopDropdown .searchMerchant").val(""), void c(e.globalRespBean.explnCode, "#WindowContainer")) : (J(), $(".searchSubheadingCity").html(""), $(".searchComa").hide(), void q(e, a, !0))
    },
    hn = function() {
        if (La = !1, $("body,html").scrollTop(0), $(".dining-inner .searchFieldLocation .searchLocation").val() === $(".dining-inner .searchFieldLocation .searchLocation").attr("placeholder") && $(".dining-inner .searchFieldLocation .searchLocation").val(""), $(".diningDesktopContainer .searchMerchant").val($(".diningDesktopContainer .searchMerchant").val().replace($(".diningDesktopContainer .searchMerchant").attr("placeholder"), "")), pa = ho + "//" + lo + contextPath + "/mersearch/getMerchantList" + aa, $("#currcateg").html() === atmname && (pa = ga), $(".preLoader").show(), $("#MainContainer").hide(), oo = "", no = "", 0 === $(".dining-inner .searchFieldLocation .searchLocation").val().length || Wa) "" != ja ? 0 === $(".dining-inner .searchFieldLocation .searchLocation").val().length ? ($(".preLoader").hide(), $("#MainContainer,.validationContainer").show()) : (Za = new google.maps.LatLng(ja, Ua), n(Za, "", "#MainContainer,.desktopLoginContainer", function() {
            var e = JSON.stringify({
                merchantName: $(".diningDesktopContainer .searchMerchant").val(),
                category: m($("#currcateg").text()),
                subCategory: "",
                latitude: ja,
                longitude: Ua,
                recommId: "",
                language: na
            });
            l(pa, "post", !0, e, tn, Yo)
        }, !1)) : ($(".preLoader").hide(), $("#MainContainer,.validationContainer").show());
        else {
            var e = $(".dining-inner .searchFieldLocation .searchLocation").val();
            Io = fa = e, n("", e, "#MainContainer,.desktopLoginContainer", function() {
                var e = JSON.stringify({
                    merchantName: $(".diningDesktopContainer .searchMerchant").val(),
                    category: m($("#currcateg").text()),
                    subCategory: "",
                    latitude: oo,
                    longitude: no,
                    recommId: "",
                    language: na
                });
                l(pa, "post", !0, e, tn, Yo)
            }, !1)
        }
    },
    dn = function() {
        o("rmaction", "click_SearchApply"), $(".searchDesktop .searchLocation").val() === $(".searchDesktop .searchLocation").attr("placeholder") && $(".searchDesktop .searchLocation").val("");
        var e = "";
        if ($(".searchDesktop .searchMerchant").val($(".searchDesktop .searchMerchant").val().replace($(".searchDesktop .searchMerchant").attr("placeholder"), "")), pa = ho + "//" + lo + contextPath + "/mersearch/getMerchantList" + aa, $("#currcateg").html() === atmname && (pa = ga), oo = "", no = "", $(".genricloader").show(), "" == $(".searchDesktop .searchLocation").val() || Wa) {
            if ("" == ja) return $("#WindowContainer,.genricloader").hide(), $(".longErrorHeading").html(emptySerachError), void $(".longErrorContainer").show();
            if (0 === $(".searchDesktop .searchLocation").val().length) return $("#WindowContainer,.genricloader").hide(), $(".longErrorHeading").html(emptySerachError), void $(".longErrorContainer").show();
            Za = new google.maps.LatLng(ja, Ua), n(Za, "", "#WindowContainer", function() {
                var a = JSON.stringify({
                    merchantName: $.trim($(".searchDesktop .searchMerchant").val()),
                    category: m($("#currcateg").html()),
                    subCategory: e,
                    latitude: ja,
                    longitude: Ua,
                    recommId: fo,
                    language: na
                });
                l(pa, "post", !0, a, sn)
            }, !1)
        } else {
            var a = $(".searchDesktop .searchLocation").val();
            n("", a, "#WindowContainer", function() {
                var a = JSON.stringify({
                    merchantName: $.trim($(".searchDesktop .searchMerchant").val()),
                    category: m($("#currcateg").html()),
                    subCategory: e,
                    latitude: oo,
                    longitude: no,
                    recommId: fo,
                    language: na
                });
                l(pa, "post", !0, a, sn, an)
            }, !1)
        }
        $(".searchDesktopDropdown").hide()
    },
    pn = function() {
        $(".CatologueMenu .currcat").css("color", "#ffffff"), $(".CatologueMenu .caret").css("background-position", "-106px -66px"), $("#filterContainerMain").hide(), pa = ho + "//" + lo + contextPath + "/mersearch/getMerchantList" + aa, $("#merchantCat").val() === atmname && (pa = ga);
        var e = $("#merchantSubCat").val();
        if (void 0 === e && (e = ""), oo = "", no = "", "" === Ga && (Ga = ja, Va = Ua), "" != $.trim($("#filterContainerMain .searchLocation").val()) && (Io = $("#filterContainerMain .searchLocation").val(), $("#filterContainerMain .searchLocation").val($.trim($("#filterContainerMain .searchLocation").val())), $("#searchContainer .searchLocation").val($.trim($("#filterContainerMain .searchLocation").val())), $(".mainWrapper").hasClass("ie9") && $(".searchLocation").callplaceholder($.trim($("#filterContainerMain .searchLocation").val()))), Do = e, Mo = $("#recCat").val(), $("#WindowContainer").hide(), $(".preLoader").show(), Io = "", "" == $("#filterContainerMain .searchLocation").val() || Wa) "" != ja ? 0 === $("#filterContainerMain .searchLocation").val().length ? ($("#filterContainerMain,.preLoader,.genricloader,.dining").hide(), $("#WindowContainer,.longErrorContainer").show(), $(".longErrorHeading").html(emptySerachError)) : (Za = new google.maps.LatLng(ja, Ua), n(Za, "", "#WindowContainer", function() {
            var a = JSON.stringify({
                merchantName: yo,
                category: m($("#merchantCat").val()),
                subCategory: e,
                latitude: ja,
                longitude: Ua,
                recommId: Mo,
                language: na
            });
            l(pa, "post", !0, a, on, Yo), $("#mapOverlay").show(), $("#mapContainer").css("margin-top", "0px"), $("#suggestionsListContainer").show(), $("#loginPromptContainer").hide()
        }, !0)) : ($("#filterContainerMain,.preLoader,.genricloader,.dining").hide(), $("#WindowContainer,.longErrorContainer").show(), $(".longErrorHeading").html(emptySerachError));
        else {
            var a = $("#filterContainerMain .searchLocation").val();
            n("", a, "#WindowContainer", function() {
                var a = JSON.stringify({
                    merchantName: yo,
                    category: m($("#merchantCat").val()),
                    subCategory: e,
                    latitude: oo,
                    longitude: no,
                    recommId: Mo,
                    language: na
                });
                l(pa, "post", !0, a, on, Yo), $("#mapOverlay,#suggestionsListContainer").show(), $("#mapContainer").css("margin-top", "0px"), $("#loginPromptContainer").hide()
            }, !0)
        }
    };
$("#mobileLandSearchField").keypress(function(e) {
    13 == e.keyCode && (e.preventDefault(), K())
}), $("#mobLandSearch").on("click", K), $("#suggestionsListContainer").on("click ", ".suggestion", function() {
    t(), $(".genricloader").removeClass("genric"), $(".genricloader").show(), "en_gb" === oa && $(".locationDetailText .content").addClass("contentuk"), $("#locationDeatailsContainer").scrollTop(0), $(".active").removeClass("active"), $(".res_Small #mylocationicon .myLocationIcon,.res_Small #mylocationicon .compassIcon").hide(), $(this).addClass("active");
    var e = $(this).find(".merchantDetailsContainer").attr("id");
    e = $.trim(e), itag_merchantid = va + "-loy-corpcards-waldo-merchant-" + e;
    var a = Oa[$(this).find(".merchantDetailsContainer .sno").text() - 1 - Qa];
    "" != Fa && (ia = Fa.getIcon(), ia.origin.y = ia.origin.y - 60, Fa.setIcon(ia), Fa.setZIndex(100));
    var n = a.getIcon();
    if (n.origin.y = n.origin.y + 60, a.setIcon(n), a.setZIndex(1e3), Fa = Oa[$(this).find(".merchantDetailsContainer .sno").text() - 1 - Qa], $(".mainWrapper").hasClass("res_Small") && (i(Oa), Fa.setMap(ea)), $(".currcat").html() != atmname) {
        $(".mainWrapper").hasClass("res_Small") && $("body,html").scrollTop(0), $("#WindowContainer #loginPromptContainer").hide(), $("#mapContainer").css("margin-top", "0px"), "" === Ga && (Ga = ja, Va = Ua);
        var r = da,
            s = JSON.stringify({
                merchantId: e,
                latitude: Ga,
                longitude: Va,
                language: na
            });
        l(r, "post", !0, s, Go, an), $(".mainWrapper").hasClass("res_Small") && $("body,html").scrollTop(0)
    } else {
        o("layertrack", "MerchantDetails"), $(".recType").hide(), ko = "details", $(".res_Small #suggestionsListContainer, .res_Medium #suggestionsListContainer").hide(), $("#suggestionsListContainer").addClass("userClicked"), $("#suggestionList").scrollTo($(".active"), 500), $(".genricloader").hide(), $("#merchantTitle").html($(this).find(".merchantName").html()), $("#address").html($(this).find(".address1").html()), $(".locationDetailText .distance").html($(this).find(".actdistance").html()), $("#locationDeatailsContainer").show(), $(".locationDetailsInner .ratingContainer .ratingCount,.locationDetailsInner .ratingContainer .ratingImage,#TripAdvisorReviewContainer,.atm,#ReportProblemContainer").hide(), $(".locationClose h2").html("  ");
        var c = Fa.getPosition();
        if (ea.panTo(c), $(".mainWrapper").hasClass("res_Small")) ea.setOptions({
            draggable: !1,
            zoomControl: !1,
            scrollwheel: !1,
            disableDoubleClickZoom: !0
        }), $("#mapContainer").css("height", "125px"), google.maps.event.trigger(ea, "resize"), ea.panTo(c), ea.setZoom(16);
        else {
            var h = $(window).width();
            h -= $("#locationDeatailsContainer").width(), "block" === $("#suggestionsListContainer").css("display") && (h -= $("#suggestionsListContainer").width()), $("#mapContainer").css("width", h), $("#mapContainer").css("float", "right"), google.maps.event.trigger(ea, "resize"), ea.panTo(c)
        }
    }
}), $(".mainWrapper").on("click ", ".more", function() {
    $(this).parent().find(".shortcmt").hide(), $(this).parent().find(".dots").hide(), $(this).parent().find(".longcmt").show(), $(this).hide()
}), $(".reportProblem").on("click ", function() {
    o("layertrack", "ReportAProblem"), ko = "report", $(".mainWrapper").hasClass("res_Small") && ($(".dining #mapContainer").hide(), $(".dining #mapOverlay").show()), $(".reportProblemCategories span").hasClass("selected") && ($(".reportProblemCategories span.radio-class").removeClass("selected"), $("#ReportProblemContainer .reportProblemCategories input").removeAttr("checked")), $(".reportProblemCategories.firstRep span.firstrep").addClass("selected"), ca = $(".reportProblemCategories.firstRep").find(".reportProbText").html(), la = $(".reportProblemCategories.firstRep").find("input").val(), $("#reportFeedback").val(""), $(".reportProblemCategoriesFeedback,.CounterShow,#singleChar,#locationDeatailsContainer,#reportFeedbackConformation").hide(), $("#reportremainingCounter").html(500), $(".ReportFooter,.reportProblemCategories").show(), $(".Counterhide,#ReportProblemContainer").show(), $("body,html").scrollTop(0), $("#report").removeAttr("disabled"), xo = !1
}), $(".mainClose").on("click ", N), $("#ReportProblemContainer .ReportFooter").on("click", function() {
    xo && (ca = $("#reportFeedback").val().replace(/\s{2,}/g, " ").replace(/^\s+|\s+$/g, ""));
    var e = $(".active .merchantDetailsContainer").attr("id");
    if (0 != $.trim(ca).length) {
        var a = {
            merchantName: $("#merchantTitle").html(),
            merchantID: e,
            merAddress: $("#address").text(),
            reportDesc: $.trim(ca),
            otherFlag: xo
        };
        l($o, "post", !1, a), o("rmaction", "send_Report:" + la), $("#report").attr("disabled", "disabled"), $(".ReportFooter,.reportProblemCategories,.reportProblemCategoriesFeedback").hide(), $("#reportFeedbackConformation").show()
    } else $(".reportError").show(), $("#reportFeedback").addClass("reportFieldError")
}), $("#reportFeedback").keyup(function() {
    if ($("#report").removeAttr("disabled"), $("#reportFeedbackConformation").hide(), $(this).val().length > 0) {
        var e = $(this).val().replace(/\s{2,}/g, " ").replace(/^\s+|\s+$/g, "");
        e.length > 500 ? ($("#reportremainingCounter").html(500), $(this).val($(this).val().substr(0, $(this).val().length - (e.length - 500)))) : ($("#reportremainingCounter").html(e.length), $(".CounterShow").show(), $("#reportFeedback").removeClass("reportFieldError"), $(".Counterhide,.reportError").hide(), 1 == e.length ? $("#singleChar").hide() : $("#singleChar").show())
    } else $("#reportremainingCounter").html(500), $(".CounterShow,#singleChar").hide(), $(".Counterhide,.reportError").show(), $("#reportFeedback").addClass("reportFieldError")
}), $(".ListCloseContainer").on("click ", function() {
    $(".mainWrapper").hasClass("res_Small") ? (z(), ko = "home", $("body").scrollTo($(".mainWrapper"), 500, {
        axis: "y"
    })) : (ko = "home", $("#locationDeatailsContainer").hide(), $("#suggestionsListContainer").show(), "" != ja && $("#mylocationicon .myLocationIcon,#mylocationicon .compassIcon").show(), $("#mapContainer").css("width", "100%"), $("#mapContainer").css("float", "right"), google.maps.event.trigger(ea, "resize"), ea.panTo(Fa.getPosition()))
}), $(".filterMainClose").on("click ", function() {
    $(".CatologueMenu .currcat").css("color", "#ffffff"), $(".CatologueMenu .caret").css("background-position", "-106px -66px"), eo = "", "mapview" === ao ? "home" === ko ? (z(), $("#filterContainerMain").hide(), $("body,html").scrollTo($(".mainWrapper"), 500, {
        axis: "y"
    })) : ($("#filterContainerMain").hide(), "details" === ko ? (H(), $("body,html").scrollTo($(".mainWrapper"), 500, {
        axis: "y"
    })) : "report" === ko && $("#ReportProblemContainer").show()) : ($("#filterContainerMain,#mapOverlay,#loginPromptContainer,#searchContainer").hide(), $("#MainContainer").show(), eo = "")
}), $("#searchIconContainer").on("click ", function() {
    t(), $(".genricloader,.unsupportedErrorContainer,#suggestionsListContainer,#filterContainerMain,.longErrorContainer,#mapContainer,#mylocationicon .myLocationIcon,#mylocationicon .compassIcon,#ReportProblemContainer, #locationDeatailsContainer").hide(), eo = "search", $(".searchIconOverlay").css("background-position", "-52px -52px"), $(".CatologueMenu .currcat").css("color", "#ffffff"), $(".CatologueMenu .caret").css("background-position", "-106px -66px"), $("#searchContainer,#loginPromptContainer,#mapOverlay,#promptContainer").show(), ("" != $.trim(yo) || "" != Io) && ($("#searchContainer .searchMerchant").val($.trim(yo)), "" == $("#searchContainer .searchLocation").val() && Wa && I(), $(".mainWrapper").hasClass("ie9") && ($(".searchMerchant").blur(), $(".searchLocation").blur())), 0 == $("#searchContainer .searchMerchant").val().length ? ($(".currcat").html() === diningname && $("#searchContainer .searchMerchant").callplaceholder(diningplaceholder), $(".currcat").html() === travelname && $("#searchContainer .searchMerchant").callplaceholder(hotelplaceholder), $(".currcat").html() === atmname && $("#searchContainer .searchMerchant").callplaceholder(atmplaceholder), $("#searchContainer .searchMerchant").css("color", "grey")) : $("#searchContainer .searchMerchant").css("color", "black")
}), $(".searchMainClose").on("click ", ".searchCloseIcon", function() {
    $(".searchIconOverlay").css("background-position", "-79px -52px"), eo = "", "mapview" === ao ? "home" === ko ? ($("body,html").scrollTo(".mainWrapper", 500, {
        axis: "y"
    }), $("#searchContainer").hide(), z()) : "details" === ko ? H() : "report" === ko && ($("#filterContainerMain,#searchContainer").hide(), $("#ReportProblemContainer").show()) : ($("#MainContainer").show(), $("#mapOverlay,#loginPromptContainer,#searchContainer").hide(), eo = "")
}), $(".searchLocateIconDesk,.searchLocateIcon,.searchMyLocateIconDesk,.searchMyLocateIcon").on("click", function() {
    "" != ja && (Ta = !0, Pa = !1, $(".searchLocation").val(""), I(), $(".mainWrapper").hasClass("ie9") && $(".searchLocation").callplaceholder())
}), $("#searchContainer .searchMerchant, #searchContainer .searchLocation").keypress(function(e) {
    13 == e.keyCode && (e.preventDefault(), U())
}), $("#searchContainer").on("click touchstart", "#searchMobile", U), $("#searchMerchantDeskHome, #locationsuggest").keypress(function(e) {
    13 == e.keyCode && (e.preventDefault(), hn())
}), $("#search-large").on("click ", hn), $(".SearchFieldsContainerDesktop #merchant, .SearchFieldsContainerDesktop #searchOverlay").keypress(function(e) {
    13 == e.keyCode && (e.preventDefault(), dn())
}), $(".searchDesktopDropdown").on("click ", ".searchButtonDesktop #searchLarge", dn), $("#searchLocationIcon").on("click ", function() {
    eo = "search", $(".searchIconOverlay").css("background-position", "-52px -52px"), $(".searchMerchant").val(""), $(".searchMerchant").callplaceholder(), $(".searchLocation").val(""), $(".searchLocation").callplaceholder(), I(), $("#searchContainer,#promptContainer,#WindowContainer,#mapOverlay,#WindowContainer #loginPromptContainer,#promptContainer").show(), $("#MainContainer,#WindowContainer .dining #mapContainer, #WindowContainer .dining #mylocationicon .myLocationIcon,#mylocationicon .compassIcon,#searchSuggestionsContainer,#WindowContainer #suggestionsListContainer").hide()
}), $(".searchField,.searchFieldLocation,.searchFieldDesktop").on("click ", function() {
    $(".SearchSuggestionsList").hide()
}), $(".SearchSuggestionsList").on("click ", ".searchMerchantSuggestion", function() {
    $(".searchMerchant").val($(this).text()), Ma = $(this).text(), xa = $(this).text(), $(".SearchSuggestionsList,#searchSuggestionsContainer").hide(), $(".searchMerchant").attr("id", $(this).attr("id")), o("rmaction", "select_SearchAhead"), Ra = !1, $(".searchMerchant").css("color", "black")
}), $(".filterContainerButton").on("click", pn), $("#mobilefiltersearchField").keypress(function(e) {
    13 == e.keyCode && (e.preventDefault(), pn())
}), $("#suggestionsListContainer").on("click ", "#previous", function() {
    t(), $(".genricloader,#locationDeatailsContainer").hide(), Qa -= $(".mainWrapper").hasClass("res_Small") ? 10 : 25, $(".prevnext").show(), $(".active").removeClass("active"), ha = $(".active").find(".sno").html(), R(Ya, Za, "page" + (Qa / Ka + 1));
    var e = 0;
    e = Ya.length < Qa + Ka ? Ya.length % Ka : Ka, O(e, Qa / Ka, Ka)
}), $("#suggestionsListContainer").on("click ", "#showmore, #next", function() {
    t(), $(".genricloader").hide(), o("rmaction", "click_ShowNext"), $("#locationDeatailsContainer").hide(), Qa += $(".mainWrapper").hasClass("res_Small") ? 10 : 25, $(".active").removeClass("active"), ha = $(".active").find(".sno").html(), R(Ya, Za, "page" + (Qa / Ka + 1)), $(".prevnext").show(), $("#showmore").hide();
    var e = 0;
    e = Ya.length < Qa + Ka ? Ya.length % Ka : Ka, O(e, Qa / Ka, Ka)
}), $(window).resize(function() {
    clearTimeout(ma), ma = setTimeout(F, 100)
}), $("#mylocationicon .myLocationIcon,#mylocationicon .compassIcon").on("click ", function() {
    t(), $(".genricloader").show(), o("rmaction", "click_Compass"), Qo(Ha), $(".compassIcon div").addClass("myLocationBlueIcon").removeClass("myLocationIcon")
}), $("#mapContainer").on("click", 'div[title="Pan left"],div[title="Pan right"],div[title="Pan up"],div[title="Pan down"],div[title="Déplacer vers la gauche"],div[title="Déplacer vers la droite"],div[title="Déplacer vers le haut"],div[title="Déplacer vers le bas"]', function() {
    $(".genricloader").hide(), $.inArray(Lo, vo) < 0 && null !== Po && Po.abort(), clearTimeout(zo), zo = setTimeout(function() {
        $(".genricloader").addClass("genric"), $(".genricloader").show(), Qo()
    }, 1e3)
}), $(".diningCategorySelectMenu,.diningCategoryDropdwn").on("click ", function(e) {
    e.stopPropagation(), $(".searchDesktopDropdown").hide(), $(".filterDropdown").hide(), "none" == $(".filterContainerDesktop").css("display") ? ($(".filterContainerDesktop").show(), $(".filterContainerDesktop").isOnScreen()) : $(" .filterContainerDesktop").hide(), $(".filterContainerDesktop").click(function(e) {
        e.stopPropagation()
    })
}), $(".dining_select").on("click", "a", function(e) {
    e.preventDefault(), e.stopPropagation(), $(".searchDesktopDropdown").hide(), $(".filterDropdown").hide(), "none" == $(".filterContainerDesktop").css("display") ? ($(".filterContainerDesktop").show(), $(".filterContainerDesktop").isOnScreen()) : $(" .filterContainerDesktop").hide(), $(".filterContainerDesktop").click(function(e) {
        e.stopPropagation()
    });
    var a = $(this);
    $(this).unbind("keydown"), a.on("keydown", Q), a.on("mouseenter", function() {
        $(".filterContainerDesktop .visual ul li").removeClass("catActive"), $(".filterContainerDesktop .visual ul li").blur()
    }), $(".filterContainerDesktop .visual ul li").removeClass("catActive"), a.focus()
}), $(".filterDesktopMenu,.flterCategory").on("click ", function(e) {
    o("rmaction", "click_Filter"), e.stopPropagation(), $(".searchDesktopDropdown,.filterContainerDesktop").hide(), "none" == $(".filterDropdown").css("display") ? $(".filterDropdown").show() : ($(".filterDesktop").css("background-color", "#002664"), $(".filterDropdown").hide()), $(".filterDropdown").click(function(e) {
        e.stopPropagation()
    })
}), $(".searchDesktopMenu,.searchCategory").on("click ", function(e) {
    o("rmaction", "click_Search"), e.stopPropagation(), $(".filterDropdown,.filterContainerDesktop,.SearchSuggestionsList").hide(), "none" == $(".searchDesktopDropdown").css("display") ? ($(".searchDesktopDropdown").show(), $(".searchMerchant").val($(".searchDesktopMenu .searchSubheadingCity").text()), 0 == $(".searchMerchant").val().length && ($(".currcat").html() === diningname && $(".searchMerchant").callplaceholder(diningplaceholder), $(".currcat").html() === travelname && $(".searchMerchant").callplaceholder(hotelplaceholder), $(".currcat").html() === atmname && $(".searchMerchant").callplaceholder(atmplaceholder), $(".searchMerchant").css("color", "grey")), $(".mainWrapper").hasClass("ie9") ? setTimeout(function() {
        $(".searchLocation").val(fa)
    }, 0) : ($(".searchLocation").val(fa), $(".searchLocation").css("color", "black")), Uo = fa, $(".compassIcon div").hasClass("myLocationBlueIcon") ? ($(".searchMyLocateIcon").removeClass("searchLocateIcon"), $(".searchMyLocateIconDesk").removeClass("searchLocateIconDesk"), $(".searchLocateIcon").addClass("searchMyLocateIcon"), $(".searchLocateIconDesk").addClass("searchMyLocateIconDesk")) : ($(".searchMyLocateIcon").addClass("searchLocateIcon"), $(".searchMyLocateIconDesk").addClass("searchLocateIconDesk"), $(".searchLocateIcon").removeClass("searchMyLocateIcon"), $(".searchLocateIconDesk").removeClass("searchMyLocateIconDesk")), $(".mainWrapper").hasClass("ie9") && $(".searchDesktop .searchMerchant").blur(), "" == $(".searchLocation").val() && Wa ? (I(), Uo = "", $(".searchLocation").val(mylocationplaceholder)) : "" != $(".searchLocation").val() ? $(".searchLocation").val() == mylocationplaceholder ? I() : ($(".searchLocation").val(fa), Wa = !1) : Wa = !1) : $(".searchDesktopDropdown").hide(), $(".searchDesktopDropdown").click(function(e) {
        e.stopPropagation()
    })
}), $(".pac-container").on("click", function(e) {
    e.stopPropagation(), "block" == $(".pac-container").css("display") ? e.stopPropagation() : $(".pac-container").hide(), $(".pac-container .pac-item").click(function(e) {
        "block" == $(this).css("display") && e.stopPropagation()
    })
}), $(".CatologueMenu").on("click ", function(e) {
    $(".mainWrapper").hasClass("res_Small") ? (t(), $(".genricloader,.unsupportedErrorContainer").hide(), "none" == $("#filterContainerMain").css("display") && ($(".CatologueMenu .currcat").css("color", "#335183"), $(".CatologueMenu .caret").css("background-position", "-106px -52px"), $(".searchIconOverlay").css("background-position", "-79px -52px"), $(".CatologueMenu span").removeClass("caret"), $(".CatologueMenu span").addClass("arrow-up"), $("#filterContainerMain").show(), C(g($("#currcateg").html()), $a), $("#merchantSubCat").val(Do), $("#recCat").val(Mo), $(".dining #mapContainer,.dining #mylocationicon .myLocationIcon,.dining #mylocationicon .compassIcon,#suggestionsListContainer,#ReportProblemContainer,#locationDeatailsContainer,.longErrorContainer,#searchContainer").hide(), $("#loginPromptContainer").show(), eo = "filter"), ("" != $.trim($("#searchContainer .searchMerchant").val()) || "" != $.trim(Io)) && $(".mainWrapper").hasClass("ie9") && $(".searchLocation").blur()) : (e.stopPropagation(), "none" == $(".dining #filterContainerMain").css("display") ? ($(".dining #filterContainerMain").show(), $(".dining .CatologueMenu").html('MERCHANT CATEGORY<span class="caret"></span>')) : ($(".dining #filterContainerMain").hide(), $(".dining .CatologueMenu").html('DINING<span class="caret"></span>')))
}), $(".res_Small .filterCategoryMenuCuisines").on("click ", function() {
    "none" == $(".cuisinesMenu").css("display") && ($(".filterCategoryMenuCuisines span").removeClass("arrowDown"), $(".filterCategoryMenuCuisines span").addClass("arrowUp"), $(".cuisinesMenu").show(), $(".recomdMenu").hide())
}), $(".res_Small .filterCategoryMenuRecom").on("click ", function() {
    "none" == $(".recomdMenu").css("display") && ($(".filterCategoryMenuRecom span").removeClass("arrowDown"), $(".filterCategoryMenuRecom span").addClass("arrowUp"), $(".recomdMenu").show(), $(".cuisinesMenu").hide())
}), $(".dining-inner .searchMerchant").click(function() {
    o("rmaction", "click_SubCategorySearch")
}), $(".dining-inner .searchMerchant").keyup(function(e) {
    j(e, $(this), $(".dining-inner"))
}), $("#searchContainer .searchMerchant").keyup(function(e) {
    j(e, $(this), $("#searchContainer"))
}), $(".searchDesktop .searchMerchant").keyup(function(e) {
    j(e, $(this), $(".searchDesktop"))
}), $(".searchMerchant").on("focus click keydown keyup", function(e) {
    "" != $(this).val() ? $(this).next().show() : $(this).next().hide(), $(".searchMerchant").attr("placeholder", ""), "keydown" == e.type && ($(".searchMerchant").css("color", "black"), 9 == e.keyCode && Ra && (Ra = !1, o("rmaction", "select_SearchAhead")))
}), $(".searchMerchant").on("focus click", function() {
    Ma = $(this).val(), $(".searchMerchant").css("color", "black"), "" == xa && ($(".searchMerchant").callplaceholder(), $(".searchMerchant").css("color", "grey")), Sa = !1, $(".SearchSuggestionsList").hide()
}), $(".searchLocation").on("focus click keydown keyup", function(e) {
    if ($(".searchLocation").css("color", "black"), "click" == e.type && Ia && navigator.userAgent.indexOf("Chrome") > 0) {
        var a = this.value.length;
        this.setSelectionRange(a, a), Ia = !1
    } else if ("focus" == e.type && Ia && navigator.userAgent.indexOf("Chrome") < 0) {
        var a = this.value.length;
        this.setSelectionRange(a, a), Ia = !1
    }
    if ("click" == e.type && o("rmaction", "click_LocationSearch"), "keydown" == e.type && 9 == e.keyCode) {
        var n = $(this).attr("id");
        google.maps.event.trigger(_a[n].googleobject, "place_changed")
    }
    "" != $(this).val() ? $(this).next().show() : $(this).next().hide(), $(".searchLocation").attr("placeholder", ""), $(".SearchSuggestionsList").hide()
}), $(".searchLocation").on("blur", function() {
    $(this).next().hide(), Ia = !0, Pa ? ($(".searchLocation").val(""), $(".searchLocation").callplaceholder(locationplaceholder)) : $(".searchLocation").callplaceholder(locationplaceholder)
}), $(".searchMerchant").on("blur", function() {
    Sa || (Da ? "" != xa && $(".mainWrapper").hasClass("ie9") && Da && $(this).val(xa) : $(this).val(Ma), $(this).next().hide()), "" == $(this).val() ? ($(".currcat").html() === diningname && $(".searchMerchant").callplaceholder(diningplaceholder), $(".currcat").html() === travelname && $(".searchMerchant").callplaceholder(hotelplaceholder), $(".currcat").html() === atmname && $(".searchMerchant").callplaceholder(atmplaceholder), $(".searchMerchant").css("color", "grey"), Ma = xa = "") : Ma = xa = $(this).val()
}), $(".searchMerchant").on("keydown", function(e) {
    "keydown" == e.type && 9 == e.keyCode && (Sa = !0, $(this).next().hide())
}), $(".searchMerchant").on("keyup", function() {
    xa = $(this).val()
}), $(".dining_select,.searchFieldLocation,.dining-button,.SearchFieldsContainer,.searchContainerMobileButton,.searchFieldDesktop,.searchButtonDesktop").on("mouseover", function() {
    Da = !0
}), $(".dining_select,.searchFieldLocation,.dining-button,.SearchFieldsContainer,.searchContainerMobileButton,.searchFieldDesktop,.searchButtonDesktop").on("mouseout", function() {
    Da = !1, Sa = !1
}), $(".removeIcon,.removeIconDesk").on("mouseover", function() {
    Sa = !0
}), $(".removeIcon,.removeIconDesk").on("mouseout", function() {
    Sa = !1
}), $(".removeIcon,.removeIconDesk").on("click", function() {
    Y($(this))
}), $(".searchLocation").on("input propertychange paste", function() {
    Wa = !1, $(".searchMyLocateIcon").addClass("searchLocateIcon"), $(".searchMyLocateIconDesk").addClass("searchLocateIconDesk"), $(".searchLocateIcon").removeClass("searchMyLocateIcon"), $(".searchLocateIconDesk").removeClass("searchMyLocateIconDesk")
}), $(".filterContainerDesktop .visual").on("keydown ", "li", function(e) {
    $(this).unbind("keydown"), Q(e)
}), $(".filterContainerDesktop .visual , .filterContainerDesktop .visual").on("click ", "li", function() {
    sa = $(this).html();
    var e = $(this).attr("data-cat");
    if ("mapview" === ao)
        if ($(".currcat").html() != sa) {
            t(), $(".searchDesktopDropdown .searchMerchant").val($(".searchDesktopDropdown .searchMerchant").val().replace($(".searchDesktopDropdown .searchMerchant").attr("placeholder"), "")), yo = "", $(".genricloader").show(), pa = ho + "//" + lo + contextPath + "/mersearch/getMerchantList" + aa, sa === atmname && (pa = ga), "" === Ga && (Ga = ja, Va = Ua), Ba = $(this).html();
            var a = "";
            a === allcat && (a = ""), $(".subcatDesk, .subcatDesk1").html(allcat), Za = new google.maps.LatLng(Ga, Va), n(Za, "", "#MainContainer", function() {
                var o = JSON.stringify({
                    merchantName: "",
                    category: e,
                    subCategory: a,
                    latitude: Ga,
                    longitude: Va,
                    recommId: fo,
                    language: na
                });
                l(pa, "post", !0, o, ln, an)
            }, !0)
        } else $(".filterContainerDesktop").hide();
    else J(), o("rmaction", "click_CategoryChange")
}), $(document).on("mouseup ", function(e) {
    0 == $(e.target).closest(".pac-item").length && 0 == $(e.target).closest(".searchDesktopDropdown").length && 0 == $(e.target).closest(".filterDropdown").length && 0 == $(e.target).closest(".diningCategoryDropdwn").length && 0 == $(e.target).closest(".dining_selectMenu").length && 0 == $(e.target).closest(".filterContainerButton").length && $(".searchDesktopDropdown,.filterDropdown,.filterContainerDesktop").hide(), $(".SearchSuggestionsList,#searchContainer #searchSuggestionsContainer").hide(), Ra = !1
}), $(document).on("mousedown", function(e) {
    if ($(e.target).hasClass("smField") || $(e.target).hasClass("slField")) {
        if ($(e.target).hasClass("slField")) return void(Pa ? setTimeout(function() {
            $(e.target).find(".searchLocation").val("").focus()
        }, 0) : setTimeout(function() {
            $(e.target).find(".searchLocation").focus()
        }, 0));
        setTimeout(function() {
            $(e.target).find(".searchMerchant").val(xa).focus()
        }, 10)
    }
    0 == $(e.target).closest(".pac-item").length && 0 == $(e.target).closest(".pac-container").length && 0 == $(e.target).closest(".dining_select").length && 0 == $(e.target).closest(".searchMerchant").length && 0 == $(e.target).closest(".searchLocation").length && 0 == $(e.target).closest(".dining-button").length && 0 == $(e.target).closest(".searchfieldContainer").length && 0 == $(e.target).closest("#searchMobile").length && 0 == $(e.target).closest("#searchLarge").length ? 0 == $(e.target).closest(".searchLocateIcon").length && 0 == $(e.target).closest(".searchLocateIconDesk").length && 0 == $(e.target).closest(".searchMyLocateIcon").length && 0 == $(e.target).closest(".searchMyLocateIconDesk").length ? 0 == $(e.target).closest(".removeIcon").length && 0 == $(e.target).closest(".removeIconDesk").length ? setTimeout(function() {
        X()
    }, 0) : $(e.target).prev().hasClass("searchLocation") && (Pa = !0, Y($(e.target)), Uo = "") : "" != ja && (Uo = mylocationplaceholder) : (0 == $(e.target).closest(".pac-item").length && ($(".mainWrapper").hasClass("ie9") && "" != $.trim($(e.target).parents(".populateSearch").find(".searchLocation").val()) ? $($(e.target).parents(".populateSearch").find(".searchLocation").css("color", "black")) : $(".mainWrapper").hasClass("ie9") && $($(e.target).parents(".populateSearch").find(".searchLocation").css("color", "grey")), Uo = $(e.target).parents(".populateSearch").find(".searchLocation").val()), e.stopPropagation())
}), $("#ReportProblemContainer .reportProblemCategories input").on("click touchstart", function() {
    la = $(this).val(), ca != $(this).closest(".reportProblemCategories").find(".reportProbText").text() && ($(this).closest(".reportProblemCategories").hasClass("LastRec") ? ca != $("#reportFeedback").val().replace(/\s{2,}/g, " ").replace(/^\s+|\s+$/g, "") && ($("#report").removeAttr("disabled"), $("#reportFeedbackConformation").hide()) : ($("#report").removeAttr("disabled"), $("#reportFeedbackConformation").hide())), $(".reportProblemCategories span").hasClass("selected") && ($(".reportProblemCategories span.radio-class").removeClass("selected"), $("#ReportProblemContainer .reportProblemCategories input").removeAttr("checked")), $(this).prop("checked", !0), $(this).closest(".reportProblemCategories span").addClass("selected"), ca = $(this).closest(".reportProblemCategories").find(".reportProbText").text(), $(this).closest(".reportProblemCategories").hasClass("LastRec") ? ($(".reportProblemCategoriesFeedback").show(), $(".reportError").hide(), $("#reportFeedback").removeClass("reportFieldError"), xo = !0) : (xo = !1, $(".reportProblemCategoriesFeedback").hide(), $("#reportremainingCounter").html(500), $(".CounterShow").hide(), $(".Counterhide").show(), $("#singleChar").hide(), $("#reportFeedback").removeClass("reportFieldError"), $("#reportFeedback").val(""))
}), $(".filterDropdown .filterRecomnd .filterSubcategory input").on("click touchstart", function() {
    $(".filterRecomnd .filterSubcategoryContainer span").hasClass("selected") && ($(".filterRecomnd .filterSubcategoryContainer span.radioImage").removeClass("selected"), $(".filterDropdown .filterRecomnd .filterSubcategory input").removeAttr("checked")), $(this).prop("checked", !0), $(this).closest(".filterRecomnd .filterSubcategoryContainer span").addClass("selected")
}), $("#checkboxShowAll").on("click touchstart ", function() {
    $(this).prop("checked") ? ($(".filterSubcategoryWrapper").find(".filterSubcategoryContainer span.checkboxImage").addClass("selectedCheckbox"), $(".filterSubcategoryWrapper").find(".filterSubcategoryContainer span.checkboxImage").prop("checked", !0), $(this).parent("span").addClass("selectedCheckbox")) : ($(".filterSubcategoryWrapper").find(".filterSubcategoryContainer span").removeClass("selectedCheckbox"), $(".filterSubcategoryWrapper").find(".filterSubcategoryContainer span.checkboxImage").prop("checked", !1), $(this).parent("span").removeClass("selectedCheckbox"))
}), $(".filterDropdown .filterSubcategoryWrapper").on("click touchstart", "span.filterSubcategory", function(e) {
    "touchstart" == e.type ? (ua = $(".filterDropdown .filterSubcategoryWrapper").find("span.checkboxImage"), $(this).hasClass("selectedCheckbox") ? ($(this).removeClass("selectedCheckbox"), $(this).find("input").prop("checked", !1), $("#checkboxShowAll").prop("checked", !1), $("#checkboxShowAll").parent("span").removeClass("selectedCheckbox")) : ($(this).addClass("selectedCheckbox"), $(this).find("input").prop("checked", !0), Ca = $(".filterDropdown .filterSubcategoryWrapper").find("span.selectedCheckbox"), ua.length == Ca.length && ($("#checkboxShowAll").prop("checked", !0), $("#checkboxShowAll").parent("span").addClass("selectedCheckbox"))), e.stopPropagation(), e.preventDefault()) : (ua = $(".filterDropdown .filterSubcategoryWrapper").find("span.checkboxImage"), $(this).hasClass("selectedCheckbox") ? ($(this).removeClass("selectedCheckbox"), $(this).find("input").prop("checked", !1), $("#checkboxShowAll").prop("checked", !1), $("#checkboxShowAll").parent("span").removeClass("selectedCheckbox")) : ($(this).addClass("selectedCheckbox"), $(this).find("input").prop("checked", !0), Ca = $(".filterDropdown .filterSubcategoryWrapper").find("span.selectedCheckbox"), ua.length == Ca.length && ($("#checkboxShowAll").prop("checked", !0), $("#checkboxShowAll").parent("span").addClass("selectedCheckbox"))))
}), $(".filterDropdown .filterRecomnd ").on("click ", ".filterSubcategory input", function() {
    $(".filterRecomnd .filterSubcategoryContainer span").hasClass("selected") && ($(".filterRecomnd .filterSubcategoryContainer span.radioImage").removeClass("selected"), $(".filterDropdown .filterRecomnd .filterSubcategory input").removeAttr("checked")), $(this).prop("checked", !0), $(this).closest(".filterRecomnd .filterSubcategoryContainer span").addClass("selected"), qo = $(this).closest(".filterRecomnd .filterSubcategoryContainer").find(".filterSubcategoryText").html()
}), $(".longErrorContainer .loginBenefitsClose,.longErrorContainer .longErrorButton").on("click ", function() {
    $(".longErrorContainer").hide(), $(".mainWrapper").hasClass("res_Small") ? $(".longErrorHeading").hasClass("mobservdown") ? ($("#MainContainer").show(), X(), $(".longErrorHeading").removeClass("mobservdown")) : ($("#WindowContainer").show(), "home" == ko ? $("#searchContainer").hide() : $("#searchContainer").show(), $(".dining").show(), "mapview" == ao && (google.maps.event.trigger(ea, "resize"), ea.fitBounds(Ja))) : ($(".longErrorHeading").removeClass("mobservdown"), "mapview" != ao ? ($("#MainContainer").show(), $(".mainWrapper").css("height", "auto"), X(), $(".desktopLoginContainer").show(), $(".longErrorHeading").html(invalidSearchError)) : ($("#WindowContainer").show(), $(".dining").show(), $(".longErrorHeading").html(invalidSearchError), google.maps.event.trigger(ea, "resize"), ea.fitBounds(Ja)))
}), $(".loginBenefitsClose").on("click ", function() {
    $(".mainWrapper").css("height", "auto"), $(".unsupportedErrorContainer").hide(), $(".mainWrapper").hasClass("res_Small") ? $(".mainWrapper").hasClass("locationnotsupourt") && "search" != eo && "filter" != eo && "mapview" != ao ? ($(".mainWrapper").removeClass("locationnotsupourt"), $("#MainContainer").show(), X(), "mapview" == ao && google.maps.event.trigger(ea, "resize")) : "search" === eo ? ($("#searchContainer,#WindowContainer,.dining,#mapOverlay").show(), $(".searchIconOverlay").css("background-position", "-52px -52px")) : "filter" === eo ? ($("#WindowContainer,#filterContainerMain,#loginPromptContainer").show(), $(".CatologueMenu .caret").css("background-position", "-106px -52px"), $(".searchIconOverlay").css("background-position", "-79px -52px"), $(".CatologueMenu .currcat").css("color", "#335183"), $(".CatologueMenu span").removeClass("caret"), $(".CatologueMenu span").addClass("arrow-up"), $(".dining #mapContainer,.dining #mylocationicon .myLocationIcon,.dining #mylocationicon .compassIcon,#suggestionsListContainer,#ReportProblemContainer,#locationDeatailsContainer,.longErrorContainer,#searchContainer").hide(), eo = "filter") : $(".longErrorHeading").hasClass("mobservdown") ? ($("#MainContainer").show(), $(".longErrorContainer").hide(), $(".longErrorHeading").removeClass("mobservdown")) : "mapview" == ao && ($("#WindowContainer").show(), "home" == ko ? $("#suggestionsListContainer").show() : "details" == ko && $("#locationDeatailsContainer").show(), $(".longErrorContainer").hide(), google.maps.event.trigger(ea, "resize"), ea.fitBounds(Ja)) : $(".mainWrapper").hasClass("locationnotsupourt") ? "mapview" != ao ? ($(".searchLocation").val(""), $(".searchLocation").callplaceholder(), $(".mainWrapper").removeClass("locationnotsupourt"), $("#MainContainer").show(), $(".desktopLoginContainer").show()) : ($("#WindowContainer").show(), google.maps.event.trigger(ea, "resize"), ea.fitBounds(Ja), $(".mainWrapper").removeClass("locationnotsupourt")) : ($(".searchLocation").val(""), $(".searchLocation").callplaceholder())
}), $("#merchantCat").on("change ", function() {
    var e = $(this).val();
    $("#merchantCat").val($(this).val()), $(".searchDesktopDropdown .searchCategory").html(searchin + " " + e + '<span class="sprite-desk arrowSelect"></span>'), $(".filterDropdownCategory .flterCategory").html(filterin + " " + e + '<span class="sprite-desk arrowSelect"></span>');
    var a = $("#filtermobilerecchanger").html();
    (e === diningname || e === travelname) && ($("#filtermobilerecchanger").html(a), C(g(e), $a), $("#filtermobilechanger,#filtermobilerecchanger").show()), e === atmname && $("#filtermobilechanger,#filtermobilerecchanger").hide(), o("layertrack", "Filter:" + m(e))
}), $("#filterLarge").on("click ", function() {
    $(".searchDesktopDropdown,.filterContainerDesktop,.filterDropdown").hide(), $(".filterDesktop").css("background-color", "#002664"), o("rmaction", "click_FilterApply"), $(".genricloader").show(), oo = "", no = "", pa = ho + "//" + lo + contextPath + "/mersearch/getMerchantList" + aa, $("#currcateg").html() === atmname && (pa = ga), "" === Ga && (oo = ja, no = Ua);
    var e = "",
        a = "",
        n = "",
        t = "";
    if (wo = $(".filterRecomnd .filterSubcategoryContainer span.selected input").val(), ta = $(".subcatDesk1").text(), ra = $(".subcatDesk").text(), $(".filterSubcategory input").parent(".selectedCheckbox").each(function() {
            n = $(this).find("input").attr("title"), t = $(this).find("input").val(), "" != $.trim(e) && (e += "|"), "Show All" != t && (e += n), "" != $.trim(a) && (a += "|"), a += t
        }), "" == $.trim(e) || $("#checkboxShowAll").prop("checked") ? ($(".comma").show(), $(".subcatDesk").text(allcat), $(".subcatDesk1").text(allcat), e = allcat, a = "") : $(".comma").show(), e != ta || wo != bo) {
        $(".subcatDesk1").text(e), $(".subcatDesk").text(a);
        var r = JSON.stringify({
            merchantName: yo,
            category: m($("#currcateg").text()),
            subCategory: a,
            latitude: Ga,
            longitude: Va,
            recommId: wo,
            language: na
        });
        l(pa, "post", !0, r, cn, an)
    } else $(".genricloader").hide()
}), $(".questionMark, .questionMarkMobile").on("click ", function() {
    La = !1, o("layertrack", "FAQ"), $(".mainWrapper").hasClass("res_Small") ? $(".faqOuterContainer").show() : $(".faqOuterContainer").show().css("height", $("#MainContainer").height()), $(".faqOuterContainer .panelContentInner a").attr("target", "_blank"), "mapview" === ao && $(".faqOuterContainer").css("height", "718px"), "mapview" === ao && $(window).height() > 1050 && $(".faqOuterContainer").css("height", "879px"), $(".mainWrapper").css({
        "background-image": "url(" + contextPath + "/resources/images/" + ya + ")"
    }), $(".mainWrapper").hasClass("res_Small") && ($("#MainContainer").css("overflow", "hidden"), $("#MainContainer").css("height", "820px")), $(".faqOuterContainer").scrollTop(0), $("body").scrollTop(0)
}), $(".faqClose").on("click ", function() {
    $(".faqOuterContainer").hide(), $(".faqOuterContainer .panelContentInner a").removeAttr("target"), $(".panelContent").slideUp(), $(".collapsibleHeading").find(".icon").hasClass("collapse") && ($(".collapsibleHeading").find(".icon").addClass("expand"), $(".collapsibleHeading").find(".icon").removeClass("collapse")), $("#MainContainer").css("height", "auto"), $(".mainWrapper").hasClass("res_Small") && $("#MainContainer").css("overflow", "visible")
}), $(".collapsibleHeading").on("click ", function() {
    $(".panelContent").slideUp(), $(this).parents(".faqContent").children(".panelContent:hidden").slideDown(), $(this).parent().siblings(".faqContent").find(".collapsibleHeading .icon").addClass("expand"), $(this).parent().siblings(".faqContent").find(".collapsibleHeading .icon").removeClass("collapse"), $(this).find(".icon").hasClass("expand") ? (omn_rmassistaction("viewFAQ", "FAQ:Vicinity" + u($(this).attr("data-faqtype")), $(this).attr("data-faq")), $(this).find(".icon").addClass("collapse"), $(this).find(".icon").removeClass("expand")) : ($(this).find(".icon").addClass("expand"), $(this).find(".icon").removeClass("collapse"));
    var e = $(this).siblings(".panelContent").children(".panelContentInner").offset(),
        a = e.top + $(this).siblings(".panelContent").children(".panelContentInner").height() + 30;
    if (a > $(window).height()) {
        var o = a - $(window).height() + $(".faqOuterContainer").scrollTop();
        $(".faqOuterContainer").animate({
            scrollTop: o
        }, "500", "swing")
    }
}), $("#probcont a").on("click ", function(e) {
    e.preventDefault(), o("rmaction", "click_TripAdvisorReadOrReview");
    var a = $(this).attr("href");
    window.open(a, "_blank")
}), $(".reviewDisclaimer a").on("click ", function(e) {
    e.preventDefault(), o("rmaction", "click_TripAdvisor");
    var a = $(this).attr("href");
    window.open(a, "_blank")
}), $(".goToAdvisor").on("click ", function(e) {
    e.preventDefault();
    var a = tripadvisorLink;
    window.open(a, "_blank")
}), $("#phone").on("click", function() {
    o("rmaction", "click_phone")
}), $("#mail").on("click", function() {
    o("rmaction", "click_EmailLocInfo")
}), $("#address").on("click", function() {
    o("rmaction", "click_Address")
}), $(".ukdisclaimer p,.traveltips p,.unsupportedSubOptions,#ukdisclaimer").on("click", "a", function(e) {
    e.preventDefault();
    var a = $(this).attr("href");
    window.open(a, "_blank")
}), G();
