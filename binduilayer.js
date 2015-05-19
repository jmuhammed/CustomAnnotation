Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    if (typeof omn == "undefined") omn = {};
    window.$iTagTracker = function() {
        this.map = {
            "layertrack": function() {
                try {
                    var i = 0;
                    var readyStateCheckInterval = setInterval(function() {
                        if (typeof s.t == "function") {
                            clearInterval(readyStateCheckInterval);
                            if (typeof clearevents == "function") clearevents();
                            if (args.length > 1) {
                                var layerVals = "layer" + $itag.PageId + "vals";
                                var o;
                                var c;
                                omn.pagename = args[1];
                                for (o in $iTagData[layerVals])
                                    if (typeof $iTagData[layerVals][o] ==
                                        "function") {
                                        window[o] = $iTagData[layerVals][o]();
                                        c = o.replace("omn_", "");
                                        omn[c] = $iTagData[layerVals][o]()
                                    } else {
                                        window[o] = $iTagData[layerVals][o];
                                        c = o.replace("omn_", "");
                                        omn[c] = $iTagData[layerVals][o]
                                    }
                                if ($iTagData["layer" + $itag.PageId + args[1].replace(/:|-|&|,/g, "_") + "vals"] != undefined) {
                                    layerVals = "layer" + $itag.PageId + args[1].replace(/:|-|&|,/g, "_") + "vals";
                                    if (layerVals != null && layerVals != "")
                                        for (o in $iTagData[layerVals])
                                            if (typeof $iTagData[layerVals][o] == "function") {
                                                window[o] = $iTagData[layerVals][o]();
                                                c =
                                                    o.replace("omn_", "");
                                                omn[c] = $iTagData[layerVals][o]()
                                            } else {
                                                window[o] = $iTagData[layerVals][o];
                                                c = o.replace("omn_", "");
                                                omn[c] = $iTagData[layerVals][o]
                                            }
                                }
                                try {
                                    s_code = s.t();
                                    if (s_code) document.write(s_code)
                                } catch (e) {
                                    console.warn("Exception occured while calling s.t() in layer track" + e)
                                }
                                if (typeof clearevents == "function") clearevents()
                            }
                        } else {
                            i = i + 1;
                            if (i >= 10) clearInterval(readyStateCheckInterval)
                        }
                    }, 1E3)
                } catch (e) {
                    console.warn("Exception occured  in layer track" + e)
                }
            },
            "rmaction": function() {
                try {
                    if (typeof omn_rmaction ==
                        "function")
                        if (args.length > 1) {
                            var rmvals = "page" + $itag.PageId + "rmvals";
                            if ($iTagData["page" + $itag.PageId + args[1].replace(/:|-|&|,/g, "_") + "rmvals"] != undefined) rmvals = "page" + $itag.PageId + args[1].replace(/:|-|&|,/g, "_") + "rmvals";
                            if ($iTagData[rmvals] != undefined && $iTagData[rmvals]["vars"] != undefined) {
                                var o;
                                for (o in $iTagData[rmvals]["vars"]) omn_rmvar(o, $iTagData[rmvals]["vars"][o])
                            }
                            if ($iTagData[rmvals] != undefined) {
                                var rmtype = $iTagData[rmvals]["rmtype"] != undefined ? $iTagData[rmvals]["rmtype"] : null;
                                var rmdelay =
                                    $iTagData[rmvals]["rmdelay"] != undefined ? $iTagData[rmvals]["rmdelay"] : null;
                                omn_rmaction($iTagData[rmvals]["rmhierarchy"], args[1].replace("_", "\x3e"), rmtype, rmdelay)
                            }
                        }
                } catch (e) {
                    console.log("Exception occured while in the method rmaction")
                }
            }
        };
        var args = Array.prototype.slice.call(arguments);
        var thisFun = map[args[0]];
        if (typeof $iTagData == "object")
            if (thisFun) thisFun(args)
    };
    var $iTagData = {
        page13011vals: {
            pagename: "LandingPage",
            hierarchy: "US|AMEX|Loy|CorpCards|Waldo",
            language: "en",
            newpagename: "yes",
            domainPeriods: 2,
            ReqId: "4832",
            PageId: "13011",
            rwd: "rwd"
        },
        layer13011vals: {
            hierarchy: "US|AMEX|Loy|CorpCards|Waldo",
            language: "en",
            newpagename: "yes",
            rwd: "rwd"
        },
        layer13011MerchantDetailsvals: {
            intlinkimp: function() {
                return itagmerchantid()
            },
            itagerror: function() {
                var msg = "";
                msg += itagmerchantiderrmsg();
                return msg
            }
        },
        page13011click_Filterrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011rmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_Searchrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_SearchApplyrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_FilterApplyrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_ShowNextrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_Refreshrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_Compassrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_MapPinrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_Addressrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_EmailLocInformvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_TripAdvisorrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_phonermvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011click_TripAdvisorReadOrReviewrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011send_Report_IncorrectNamermvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011send_Report_Closedrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011send_Report_AMEXNotAcceptedrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        },
        page13011send_Report_Otherrmvals: {
            rmhierarchy: "US:AMEX:Loy:CorpCards:Waldo"
        }
    };

    function clearevents() {
        if (omn.events != undefined) s.events = omn.events = "";
        if (omn.products != undefined) s.products = omn.products = "";
        if (omn.acctstatus != undefined) omn.acctstatus = "";
        if (omn.conversiontype != undefined) omn.conversiontype = "";
        if (omn.cardtype != undefined) omn.cardtype = ""
    }

    function itagmerchantid() {
        var v = "";
        if (window.itag_merchantid != undefined && window.itag_merchantid != "") v = window.itag_merchantid;
        else if (omn.intlinkimp != undefined && omn.intlinkimp != "") v = omn.intlinkimp;
        return v
    }

    function itagmerchantiderrmsg() {
        var v =
            "";
        if (omn.intlinkimp != undefined && omn.intlinkimp == "") v += "itag_merchantid is missing";
        return v
    }

    function initItagData() {
        var pageVals = "page" + $itag.PageId + "vals";
        var o;
        for (o in $iTagData[pageVals])
            if (typeof $iTagData[pageVals][o] == "function") omn[o] = $iTagData[pageVals][o]();
            else omn[o] = $iTagData[pageVals][o]
    }
    if (typeof initItagData == "function") initItagData()
}, 800680, 308753);
