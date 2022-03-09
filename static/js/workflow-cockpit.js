var workflowCockpit = (function (n) {
  var o = {};
  function i(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  return (
    (i.m = n),
    (i.c = o),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          i.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 0))
  );
})([
  function (e, t, n) {
    e.exports = n(1);
  },
  function (e, t, n) {
    n(2);
    var o = n(6),
      i = n(7);
    e.exports = Object.assign(i.workflowCockpit, { version: o.version });
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(3);
  },
  function (e, t, n) {
    (t.iframeResizer = n(4)), (t.iframeResizerContentWindow = n(5));
  },
  function (B, V, e) {
    var U, J, _;
    !(function (l) {
      "use strict";
      if ("undefined" != typeof window) {
        var e,
          d = 0,
          f = !1,
          t = !1,
          w = "message".length,
          y = "[iFrameSizer]",
          b = y.length,
          v = null,
          r = window.requestAnimationFrame,
          m = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
          k = {},
          n = null,
          g = {
            autoResize: !0,
            bodyBackground: null,
            bodyMargin: null,
            bodyMarginV1: 8,
            bodyPadding: null,
            checkOrigin: !0,
            inPageLinks: !1,
            enablePublicMethods: !0,
            heightCalculationMethod: "bodyOffset",
            id: "iFrameResizer",
            interval: 32,
            log: !1,
            maxHeight: 1 / 0,
            maxWidth: 1 / 0,
            minHeight: 0,
            minWidth: 0,
            resizeFrom: "parent",
            scrolling: !1,
            sizeHeight: !0,
            sizeWidth: !1,
            warningTimeout: 5e3,
            tolerance: 0,
            widthCalculationMethod: "scroll",
            closedCallback: function () {},
            initCallback: function () {},
            messageCallback: function () {
              I("MessageCallback function not defined");
            },
            resizedCallback: function () {},
            scrollCallback: function () {
              return !0;
            },
          },
          E = {};
        window.jQuery &&
          ((e = window.jQuery).fn
            ? e.fn.iFrameResize ||
              (e.fn.iFrameResize = function (n) {
                return this.filter("iframe")
                  .each(function (e, t) {
                    u(t, n);
                  })
                  .end();
              })
            : M("", "Unable to bind to jQuery, it is not fully loaded.")),
          (J = []),
          (_ = "function" == typeof (U = D) ? U.apply(V, J) : U) === l ||
            (B.exports = _),
          (window.iFrameResize = window.iFrameResize || D());
      }
      function p() {
        return (
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver
        );
      }
      function T(e, t, n) {
        "addEventListener" in window
          ? e.addEventListener(t, n, !1)
          : "attachEvent" in window && e.attachEvent("on" + t, n);
      }
      function O(e, t, n) {
        "removeEventListener" in window
          ? e.removeEventListener(t, n, !1)
          : "detachEvent" in window && e.detachEvent("on" + t, n);
      }
      function i(e) {
        return (
          y +
          "[" +
          ((n = "Host page: " + (t = e)),
          window.top !== window.self &&
            (n =
              window.parentIFrame && window.parentIFrame.getId
                ? window.parentIFrame.getId() + ": " + t
                : "Nested host page: " + t),
          n) +
          "]"
        );
        var t, n;
      }
      function o(e) {
        return k[e] ? k[e].log : f;
      }
      function S(e, t) {
        a("log", e, t, o(e));
      }
      function M(e, t) {
        a("info", e, t, o(e));
      }
      function I(e, t) {
        a("warn", e, t, !0);
      }
      function a(e, t, n, o) {
        !0 === o && "object" == typeof window.console && console[e](i(t), n);
      }
      function c(t) {
        function a() {
          e("Height"),
            e("Width"),
            A(
              function () {
                P(p), z(h), f("resizedCallback", p);
              },
              p,
              "init"
            );
        }
        function e(e) {
          var t = Number(k[h]["max" + e]),
            n = Number(k[h]["min" + e]),
            o = e.toLowerCase(),
            i = Number(p[o]);
          S(h, "Checking " + o + " is in range " + n + "-" + t),
            i < n && ((i = n), S(h, "Set " + o + " to min value")),
            t < i && ((i = t), S(h, "Set " + o + " to max value")),
            (p[o] = "" + i);
        }
        function c(e) {
          return g.substr(g.indexOf(":") + w + e);
        }
        function u(n, o) {
          var e, t, i;
          (e = function () {
            var e, t;
            L(
              "Send Page Info",
              "pageInfo:" +
                ((e = document.body.getBoundingClientRect()),
                (t = p.iframe.getBoundingClientRect()),
                JSON.stringify({
                  iframeHeight: t.height,
                  iframeWidth: t.width,
                  clientHeight: Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  ),
                  clientWidth: Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0
                  ),
                  offsetTop: parseInt(t.top - e.top, 10),
                  offsetLeft: parseInt(t.left - e.left, 10),
                  scrollTop: window.pageYOffset,
                  scrollLeft: window.pageXOffset,
                })),
              n,
              o
            );
          }),
            (t = 32),
            E[(i = o)] ||
              (E[i] = setTimeout(function () {
                (E[i] = null), e();
              }, t));
        }
        function s(e) {
          var t = e.getBoundingClientRect();
          return (
            N(h),
            {
              x: Math.floor(Number(t.left) + Number(v.x)),
              y: Math.floor(Number(t.top) + Number(v.y)),
            }
          );
        }
        function l(e) {
          var t = e ? s(p.iframe) : { x: 0, y: 0 },
            n = { x: Number(p.width) + t.x, y: Number(p.height) + t.y };
          S(
            h,
            "Reposition requested from iFrame (offset x:" +
              t.x +
              " y:" +
              t.y +
              ")"
          ),
            window.top !== window.self
              ? window.parentIFrame
                ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](
                    n.x,
                    n.y
                  )
                : I(
                    h,
                    "Unable to scroll to requested position, window.parentIFrame not found"
                  )
              : ((v = n), d(), S(h, "--"));
        }
        function d() {
          !1 !== f("scrollCallback", v) ? z(h) : F();
        }
        function f(e, t) {
          return x(h, e, t);
        }
        var n,
          o,
          i,
          r,
          m,
          g = t.data,
          p = {},
          h = null;
        "[iFrameResizerChild]Ready" === g
          ? (function () {
              for (var e in k)
                L("iFrame requested init", j(e), document.getElementById(e), e);
            })()
          : y === ("" + g).substr(0, b) && g.substr(b).split(":")[0] in k
          ? ((m = g.substr(b).split(":")),
            (p = {
              iframe: k[m[0]] && k[m[0]].iframe,
              id: m[0],
              height: m[1],
              width: m[2],
              type: m[3],
            }),
            (h = p.id),
            k[h] && (k[h].loaded = !0),
            (r = p.type in { true: 1, false: 1, undefined: 1 }) &&
              S(h, "Ignoring init message from meta parent page"),
            !r &&
              ((i = !0),
              k[(o = h)] ||
                ((i = !1),
                I(p.type + " No settings for " + o + ". Message was: " + g)),
              i) &&
              (S(h, "Received: " + g),
              (n = !0),
              null === p.iframe &&
                (I(h, "IFrame (" + p.id + ") not found"), (n = !1)),
              n &&
                (function () {
                  var e,
                    n = t.origin,
                    o = k[h] && k[h].checkOrigin;
                  if (
                    o &&
                    "" + n != "null" &&
                    !(o.constructor === Array
                      ? (function () {
                          var e = 0,
                            t = !1;
                          for (
                            S(
                              h,
                              "Checking connection is from allowed list of origins: " +
                                o
                            );
                            e < o.length;
                            e++
                          )
                            if (o[e] === n) {
                              t = !0;
                              break;
                            }
                          return t;
                        })()
                      : ((e = k[h] && k[h].remoteHost),
                        S(h, "Checking connection is from: " + e),
                        n === e))
                  )
                    throw new Error(
                      "Unexpected message received from: " +
                        n +
                        " for " +
                        p.iframe.id +
                        ". Message was: " +
                        t.data +
                        ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
                    );
                  return !0;
                })() &&
                (function () {
                  switch (
                    (k[h] && k[h].firstRun && k[h] && (k[h].firstRun = !1),
                    p.type)
                  ) {
                    case "close":
                      k[h].closeRequestCallback
                        ? x(h, "closeRequestCallback", k[h].iframe)
                        : C(p.iframe);
                      break;
                    case "message":
                      (r = c(6)),
                        S(
                          h,
                          "MessageCallback passed: {iframe: " +
                            p.iframe.id +
                            ", message: " +
                            r +
                            "}"
                        ),
                        f("messageCallback", {
                          iframe: p.iframe,
                          message: JSON.parse(r),
                        }),
                        S(h, "--");
                      break;
                    case "scrollTo":
                      l(!1);
                      break;
                    case "scrollToOffset":
                      l(!0);
                      break;
                    case "pageInfo":
                      u(k[h] && k[h].iframe, h),
                        (function () {
                          function e(t, n) {
                            function o() {
                              k[r] ? u(k[r].iframe, r) : i();
                            }
                            ["scroll", "resize"].forEach(function (e) {
                              S(r, t + e + " listener for sendPageInfo"),
                                n(window, e, o);
                            });
                          }
                          function i() {
                            e("Remove ", O);
                          }
                          var r = h;
                          e("Add ", T), k[r] && (k[r].stopPageInfo = i);
                        })();
                      break;
                    case "pageInfoStop":
                      k[h] &&
                        k[h].stopPageInfo &&
                        (k[h].stopPageInfo(), delete k[h].stopPageInfo);
                      break;
                    case "inPageLink":
                      (e = c(9)),
                        (n = e.split("#")[1] || ""),
                        (o = decodeURIComponent(n)),
                        (i =
                          document.getElementById(o) ||
                          document.getElementsByName(o)[0])
                          ? ((t = s(i)),
                            S(
                              h,
                              "Moving to in page link (#" +
                                n +
                                ") at x: " +
                                t.x +
                                " y: " +
                                t.y
                            ),
                            (v = { x: t.x, y: t.y }),
                            d(),
                            S(h, "--"))
                          : window.top !== window.self
                          ? window.parentIFrame
                            ? window.parentIFrame.moveToAnchor(n)
                            : S(
                                h,
                                "In page link #" +
                                  n +
                                  " not found and window.parentIFrame not found"
                              )
                          : S(h, "In page link #" + n + " not found");
                      break;
                    case "reset":
                      R(p);
                      break;
                    case "init":
                      a(), f("initCallback", p.iframe);
                      break;
                    default:
                      a();
                  }
                  var e, t, n, o, i, r;
                })()))
          : M(h, "Ignored: " + g);
      }
      function x(e, t, n) {
        var o = null,
          i = null;
        if (k[e]) {
          if ("function" != typeof (o = k[e][t]))
            throw new TypeError(t + " on iFrame[" + e + "] is not a function");
          i = o(n);
        }
        return i;
      }
      function h(e) {
        var t = e.id;
        delete k[t];
      }
      function C(e) {
        var t = e.id;
        S(t, "Removing iFrame: " + t);
        try {
          e.parentNode && e.parentNode.removeChild(e);
        } catch (e) {}
        x(t, "closedCallback", t), S(t, "--"), h(e);
      }
      function N(e) {
        null === v &&
          S(
            e,
            "Get page position: " +
              (v = {
                x:
                  window.pageXOffset !== l
                    ? window.pageXOffset
                    : document.documentElement.scrollLeft,
                y:
                  window.pageYOffset !== l
                    ? window.pageYOffset
                    : document.documentElement.scrollTop,
              }).x +
              "," +
              v.y
          );
      }
      function z(e) {
        null !== v &&
          (window.scrollTo(v.x, v.y),
          S(e, "Set page position: " + v.x + "," + v.y),
          F());
      }
      function F() {
        v = null;
      }
      function R(e) {
        S(
          e.id,
          "Size reset requested by " +
            ("init" === e.type ? "host page" : "iFrame")
        ),
          N(e.id),
          A(
            function () {
              P(e), L("reset", "reset", e.iframe, e.id);
            },
            e,
            "reset"
          );
      }
      function P(n) {
        function o(e) {
          t ||
            "0" !== n[e] ||
            ((t = !0),
            S(i, "Hidden iFrame detected, creating visibility listener"),
            (function () {
              function t() {
                function e(t) {
                  function e(e) {
                    return "0px" === (k[t] && k[t].iframe.style[e]);
                  }
                  k[t] &&
                    null !== k[t].iframe.offsetParent &&
                    (e("height") || e("width")) &&
                    L("Visibility change", "resize", k[t].iframe, t);
                }
                for (var t in k) e(t);
              }
              function e(e) {
                S(
                  "window",
                  "Mutation observed: " + e[0].target + " " + e[0].type
                ),
                  s(t, 16);
              }
              var n = p();
              n &&
                ((o = document.querySelector("body")),
                (i = {
                  attributes: !0,
                  attributeOldValue: !1,
                  characterData: !0,
                  characterDataOldValue: !1,
                  childList: !0,
                  subtree: !0,
                }),
                new n(e).observe(o, i));
              var o, i;
            })());
        }
        function e(e) {
          var t;
          (t = e),
            n.id
              ? ((n.iframe.style[t] = n[t] + "px"),
                S(n.id, "IFrame (" + i + ") " + t + " set to " + n[t] + "px"))
              : S("undefined", "messageData id not set"),
            o(e);
        }
        var i = n.iframe.id;
        k[i] && (k[i].sizeHeight && e("height"), k[i].sizeWidth && e("width"));
      }
      function A(e, t, n) {
        n !== t.type && r ? (S(t.id, "Requesting animation frame"), r(e)) : e();
      }
      function L(e, t, n, o, i) {
        var r,
          a = !1;
        (o = o || n.id),
          k[o] &&
            (n && "contentWindow" in n && null !== n.contentWindow
              ? ((r = k[o] && k[o].targetOrigin),
                S(
                  o,
                  "[" +
                    e +
                    "] Sending msg to iframe[" +
                    o +
                    "] (" +
                    t +
                    ") targetOrigin: " +
                    r
                ),
                n.contentWindow.postMessage(y + t, r))
              : I(o, "[" + e + "] IFrame(" + o + ") not found"),
            i &&
              k[o] &&
              k[o].warningTimeout &&
              (k[o].msgTimeout = setTimeout(function () {
                !k[o] ||
                  k[o].loaded ||
                  a ||
                  ((a = !0),
                  I(
                    o,
                    "IFrame has not responded within " +
                      k[o].warningTimeout / 1e3 +
                      " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
                  ));
              }, k[o].warningTimeout)));
      }
      function j(e) {
        return (
          e +
          ":" +
          k[e].bodyMarginV1 +
          ":" +
          k[e].sizeWidth +
          ":" +
          k[e].log +
          ":" +
          k[e].interval +
          ":" +
          k[e].enablePublicMethods +
          ":" +
          k[e].autoResize +
          ":" +
          k[e].bodyMargin +
          ":" +
          k[e].heightCalculationMethod +
          ":" +
          k[e].bodyBackground +
          ":" +
          k[e].bodyPadding +
          ":" +
          k[e].tolerance +
          ":" +
          k[e].inPageLinks +
          ":" +
          k[e].resizeFrom +
          ":" +
          k[e].widthCalculationMethod
        );
      }
      function u(n, e) {
        var t,
          o,
          i,
          r,
          a,
          c,
          u,
          s =
            ((t = n.id),
            "" === t &&
              ((n.id =
                ((o = (e && e.id) || g.id + d++),
                null !== document.getElementById(o) && (o += d++),
                (t = o))),
              (f = (e || {}).log),
              S(t, "Added missing iframe ID: " + t + " (" + n.src + ")")),
            t);
        s in k && "iFrameResizer" in n
          ? I(s, "Ignored iFrame, already setup.")
          : ((c = (c = e) || {}),
            (k[s] = {
              firstRun: !0,
              iframe: n,
              remoteHost: n.src.split("/").slice(0, 3).join("/"),
            }),
            (function (e) {
              if ("object" != typeof e)
                throw new TypeError("Options is not an object");
            })(c),
            (function (e) {
              for (var t in g)
                g.hasOwnProperty(t) &&
                  (k[s][t] = e.hasOwnProperty(t) ? e[t] : g[t]);
            })(c),
            k[s] &&
              (k[s].targetOrigin =
                !0 === k[s].checkOrigin
                  ? "" === (u = k[s].remoteHost) || "file://" === u
                    ? "*"
                    : u
                  : "*"),
            (function () {
              switch (
                (S(
                  s,
                  "IFrame scrolling " +
                    (k[s] && k[s].scrolling ? "enabled" : "disabled") +
                    " for " +
                    s
                ),
                (n.style.overflow =
                  !1 === (k[s] && k[s].scrolling) ? "hidden" : "auto"),
                k[s] && k[s].scrolling)
              ) {
                case "omit":
                  break;
                case !0:
                  n.scrolling = "yes";
                  break;
                case !1:
                  n.scrolling = "no";
                  break;
                default:
                  n.scrolling = k[s] ? k[s].scrolling : "no";
              }
            })(),
            (function () {
              function e(e) {
                1 / 0 !== k[s][e] &&
                  0 !== k[s][e] &&
                  ((n.style[e] = k[s][e] + "px"),
                  S(s, "Set " + e + " = " + k[s][e] + "px"));
              }
              function t(e) {
                if (k[s]["min" + e] > k[s]["max" + e])
                  throw new Error(
                    "Value for min" + e + " can not be greater than max" + e
                  );
              }
              t("Height"),
                t("Width"),
                e("maxHeight"),
                e("minHeight"),
                e("maxWidth"),
                e("minWidth");
            })(),
            ("number" != typeof (k[s] && k[s].bodyMargin) &&
              "0" !== (k[s] && k[s].bodyMargin)) ||
              ((k[s].bodyMarginV1 = k[s].bodyMargin),
              (k[s].bodyMargin = k[s].bodyMargin + "px")),
            (i = j(s)),
            (a = p()) &&
              ((r = a),
              n.parentNode &&
                new r(function (e) {
                  e.forEach(function (e) {
                    Array.prototype.slice
                      .call(e.removedNodes)
                      .forEach(function (e) {
                        e === n && C(n);
                      });
                  });
                }).observe(n.parentNode, { childList: !0 })),
            T(n, "load", function () {
              var e, t;
              L("iFrame.onload", i, n, l, !0),
                (e = k[s] && k[s].firstRun),
                (t = k[s] && k[s].heightCalculationMethod in m),
                !e && t && R({ iframe: n, height: 0, width: 0, type: "init" });
            }),
            L("init", i, n, l, !0),
            Function.prototype.bind &&
              k[s] &&
              (k[s].iframe.iFrameResizer = {
                close: C.bind(null, k[s].iframe),
                removeListeners: h.bind(null, k[s].iframe),
                resize: L.bind(null, "Window resize", "resize", k[s].iframe),
                moveToAnchor: function (e) {
                  L("Move to anchor", "moveToAnchor:" + e, k[s].iframe, s);
                },
                sendMessage: function (e) {
                  L(
                    "Send Message",
                    "message:" + (e = JSON.stringify(e)),
                    k[s].iframe,
                    s
                  );
                },
              }));
      }
      function s(e, t) {
        null === n &&
          (n = setTimeout(function () {
            (n = null), e();
          }, t));
      }
      function W(e) {
        S("window", "Trigger event: " + e),
          s(function () {
            H("Window " + e, "resize");
          }, 16);
      }
      function q() {
        "hidden" !== document.visibilityState &&
          (S("document", "Trigger event: Visiblity change"),
          s(function () {
            H("Tab Visable", "resize");
          }, 16));
      }
      function H(e, t) {
        for (var n in k)
          k[(o = n)] &&
            "parent" === k[o].resizeFrom &&
            k[o].autoResize &&
            !k[o].firstRun &&
            L(e, t, document.getElementById(n), n);
        var o;
      }
      function D() {
        function o(e, t) {
          t &&
            (!(function () {
              if (!t.tagName)
                throw new TypeError("Object is not a valid DOM element");
              if ("IFRAME" !== t.tagName.toUpperCase())
                throw new TypeError(
                  "Expected <IFRAME> tag, found <" + t.tagName + ">"
                );
            })(),
            u(t, e),
            i.push(t));
        }
        var i;
        return (
          (function () {
            var e,
              t = ["moz", "webkit", "o", "ms"];
            for (e = 0; e < t.length && !r; e += 1)
              r = window[t[e] + "RequestAnimationFrame"];
            r || S("setup", "RequestAnimationFrame not supported");
          })(),
          T(window, "message", c),
          T(window, "resize", function () {
            W("resize");
          }),
          T(document, "visibilitychange", q),
          T(document, "-webkit-visibilitychange", q),
          T(window, "focusin", function () {
            W("focus");
          }),
          T(window, "focus", function () {
            W("focus");
          }),
          function (e, t) {
            var n;
            switch (
              ((i = []),
              (n = e) &&
                n.enablePublicMethods &&
                I(
                  "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
                ),
              typeof t)
            ) {
              case "undefined":
              case "string":
                Array.prototype.forEach.call(
                  document.querySelectorAll(t || "iframe"),
                  o.bind(l, e)
                );
                break;
              case "object":
                o(e, t);
                break;
              default:
                throw new TypeError("Unexpected data type (" + typeof t + ")");
            }
            return i;
          }
        );
      }
    })();
  },
  function (ze, e, t) {
    !(function (d) {
      "use strict";
      if ("undefined" != typeof window) {
        var n = !0,
          i = 10,
          o = "",
          r = 0,
          a = "",
          t = null,
          c = "",
          u = !1,
          s = { resize: 1, click: 1 },
          l = 128,
          f = !0,
          m = 1,
          g = "bodyOffset",
          p = g,
          h = !0,
          w = "",
          y = {},
          b = 32,
          e = null,
          v = !1,
          k = "[iFrameSizer]",
          E = k.length,
          T = "",
          O = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
          S = "child",
          M = !0,
          I = window.parent,
          x = "*",
          C = 0,
          N = !1,
          z = null,
          F = 16,
          R = 1,
          P = "scroll",
          A = P,
          L = window,
          j = function () {
            ce("MessageCallback function not defined");
          },
          W = function () {},
          q = function () {},
          H = {
            height: function () {
              return (
                ce("Custom height calculation function not defined"),
                document.documentElement.offsetHeight
              );
            },
            width: function () {
              return (
                ce("Custom width calculation function not defined"),
                document.body.scrollWidth
              );
            },
          },
          D = {},
          B = !1;
        try {
          var V = Object.create(
            {},
            {
              passive: {
                get: function () {
                  B = !0;
                },
              },
              once: {
                get: function () {
                  !0;
                },
              },
            }
          );
          window.addEventListener("test", te, V),
            window.removeEventListener("test", te, V);
        } catch (e) {}
        var U,
          J,
          _,
          Q,
          X,
          Y,
          K,
          G =
            Date.now ||
            function () {
              return new Date().getTime();
            },
          $ = {
            bodyOffset: function () {
              return (
                document.body.offsetHeight +
                ye("marginTop") +
                ye("marginBottom")
              );
            },
            offset: function () {
              return $.bodyOffset();
            },
            bodyScroll: function () {
              return document.body.scrollHeight;
            },
            custom: function () {
              return H.height();
            },
            documentElementOffset: function () {
              return document.documentElement.offsetHeight;
            },
            documentElementScroll: function () {
              return document.documentElement.scrollHeight;
            },
            max: function () {
              return Math.max.apply(null, ve($));
            },
            min: function () {
              return Math.min.apply(null, ve($));
            },
            grow: function () {
              return $.max();
            },
            lowestElement: function () {
              return Math.max(
                $.bodyOffset() || $.documentElementOffset(),
                be("bottom", Ee())
              );
            },
            taggedElement: function () {
              return ke("bottom", "data-iframe-height");
            },
          },
          Z = {
            bodyScroll: function () {
              return document.body.scrollWidth;
            },
            bodyOffset: function () {
              return document.body.offsetWidth;
            },
            custom: function () {
              return H.width();
            },
            documentElementScroll: function () {
              return document.documentElement.scrollWidth;
            },
            documentElementOffset: function () {
              return document.documentElement.offsetWidth;
            },
            scroll: function () {
              return Math.max(Z.bodyScroll(), Z.documentElementScroll());
            },
            max: function () {
              return Math.max.apply(null, ve(Z));
            },
            min: function () {
              return Math.min.apply(null, ve(Z));
            },
            rightMostElement: function () {
              return be("right", Ee());
            },
            taggedElement: function () {
              return ke("right", "data-iframe-width");
            },
          },
          ee =
            ((U = Te),
            (X = null),
            (Y = 0),
            (K = function () {
              (Y = G()), (X = null), (Q = U.apply(J, _)), X || (J = _ = null);
            }),
            function () {
              var e = G();
              Y || (Y = e);
              var t = F - (e - Y);
              return (
                (J = this),
                (_ = arguments),
                t <= 0 || F < t
                  ? (X && (clearTimeout(X), (X = null)),
                    (Y = e),
                    (Q = U.apply(J, _)),
                    X || (J = _ = null))
                  : X || (X = setTimeout(K, t)),
                Q
              );
            });
        ne(window, "message", Ce), ne(window, "readystatechange", Ne), Ne();
      }
      function te() {}
      function ne(e, t, n, o) {
        "addEventListener" in window
          ? e.addEventListener(t, n, !!B && (o || {}))
          : "attachEvent" in window && e.attachEvent("on" + t, n);
      }
      function oe(e, t, n) {
        "removeEventListener" in window
          ? e.removeEventListener(t, n, !1)
          : "detachEvent" in window && e.detachEvent("on" + t, n);
      }
      function ie(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      function re(e) {
        return k + "[" + T + "] " + e;
      }
      function ae(e) {
        v && "object" == typeof window.console && console.log(re(e));
      }
      function ce(e) {
        "object" == typeof window.console && console.warn(re(e));
      }
      function ue() {
        var e;
        !(function () {
          function e(e) {
            return "true" === e;
          }
          var t = w.substr(E).split(":");
          (T = t[0]),
            (r = d !== t[1] ? Number(t[1]) : r),
            (u = d !== t[2] ? e(t[2]) : u),
            (v = d !== t[3] ? e(t[3]) : v),
            (b = d !== t[4] ? Number(t[4]) : b),
            (n = d !== t[6] ? e(t[6]) : n),
            (a = t[7]),
            (p = d !== t[8] ? t[8] : p),
            (o = t[9]),
            (c = t[10]),
            (C = d !== t[11] ? Number(t[11]) : C),
            (y.enable = d !== t[12] && e(t[12])),
            (S = d !== t[13] ? t[13] : S),
            (A = d !== t[14] ? t[14] : A);
        })(),
          ae("Initialising iFrame (" + location.href + ")"),
          (function () {
            function e(e, t) {
              return (
                "function" == typeof e &&
                  (ae("Setup custom " + t + "CalcMethod"),
                  (H[t] = e),
                  (e = "custom")),
                e
              );
            }
            "iFrameResizer" in window &&
              Object === window.iFrameResizer.constructor &&
              ((t = window.iFrameResizer),
              ae("Reading data from page: " + JSON.stringify(t)),
              (j = "messageCallback" in t ? t.messageCallback : j),
              (W = "readyCallback" in t ? t.readyCallback : W),
              (x = "targetOrigin" in t ? t.targetOrigin : x),
              (p =
                "heightCalculationMethod" in t ? t.heightCalculationMethod : p),
              (A =
                "widthCalculationMethod" in t ? t.widthCalculationMethod : A),
              (p = e(p, "height")),
              (A = e(A, "width")));
            var t;
            ae("TargetOrigin for parent set to: " + x);
          })(),
          (function () {
            d === a && (a = r + "px");
            se(
              "margin",
              (function (e, t) {
                -1 !== t.indexOf("-") &&
                  (ce("Negative CSS value ignored for " + e), (t = ""));
                return t;
              })("margin", a)
            );
          })(),
          se("background", o),
          se("padding", c),
          ((e = document.createElement("div")).style.clear = "both"),
          (e.style.display = "block"),
          document.body.appendChild(e),
          me(),
          ge(),
          (document.documentElement.style.height = ""),
          (document.body.style.height = ""),
          ae('HTML & body height set to "auto"'),
          ae("Enable public methods"),
          (L.parentIFrame = {
            autoResize: function (e) {
              return (
                !0 === e && !1 === n
                  ? ((n = !0), pe())
                  : !1 === e && !0 === n && ((n = !1), he()),
                n
              );
            },
            close: function () {
              xe(0, 0, "close"),
                ae("Disable outgoing messages"),
                (M = !1),
                ae("Remove event listener: Message"),
                oe(window, "message", Ce),
                !0 === n && he();
            },
            getId: function () {
              return T;
            },
            getPageInfo: function (e) {
              "function" == typeof e
                ? ((q = e), xe(0, 0, "pageInfo"))
                : ((q = function () {}), xe(0, 0, "pageInfoStop"));
            },
            moveToAnchor: function (e) {
              y.findTarget(e);
            },
            reset: function () {
              Ie("parentIFrame.reset");
            },
            scrollTo: function (e, t) {
              xe(t, e, "scrollTo");
            },
            scrollToOffset: function (e, t) {
              xe(t, e, "scrollToOffset");
            },
            sendMessage: function (e, t) {
              xe(0, 0, "message", JSON.stringify(e), t);
            },
            setHeightCalculationMethod: function (e) {
              (p = e), me();
            },
            setWidthCalculationMethod: function (e) {
              (A = e), ge();
            },
            setTargetOrigin: function (e) {
              ae("Set targetOrigin: " + e), (x = e);
            },
            size: function (e, t) {
              var n = (e || "") + (t ? "," + t : "");
              Oe("size", "parentIFrame.size(" + n + ")", e, t);
            },
          }),
          pe(),
          (y = (function () {
            function r(e) {
              var t = e.getBoundingClientRect(),
                n = {
                  x:
                    window.pageXOffset !== d
                      ? window.pageXOffset
                      : document.documentElement.scrollLeft,
                  y:
                    window.pageYOffset !== d
                      ? window.pageYOffset
                      : document.documentElement.scrollTop,
                };
              return {
                x: parseInt(t.left, 10) + parseInt(n.x, 10),
                y: parseInt(t.top, 10) + parseInt(n.y, 10),
              };
            }
            function n(e) {
              var t,
                n = e.split("#")[1] || e,
                o = decodeURIComponent(n),
                i =
                  document.getElementById(o) ||
                  document.getElementsByName(o)[0];
              d !== i
                ? ((t = r(i)),
                  ae(
                    "Moving to in page link (#" +
                      n +
                      ") at x: " +
                      t.x +
                      " y: " +
                      t.y
                  ),
                  xe(t.y, t.x, "scrollToOffset"))
                : (ae(
                    "In page link (#" +
                      n +
                      ") not found in iFrame, so sending to parent"
                  ),
                  xe(0, 0, "inPageLink", "#" + n));
            }
            function e() {
              "" !== location.hash && "#" !== location.hash && n(location.href);
            }
            function t() {
              Array.prototype.forEach.call(
                document.querySelectorAll('a[href^="#"]'),
                function (e) {
                  function t(e) {
                    e.preventDefault(), n(this.getAttribute("href"));
                  }
                  "#" !== e.getAttribute("href") && ne(e, "click", t);
                }
              );
            }
            y.enable
              ? Array.prototype.forEach && document.querySelectorAll
                ? (ae("Setting up location.hash handlers"),
                  t(),
                  ne(window, "hashchange", e),
                  setTimeout(e, l))
                : ce(
                    "In page linking not fully supported in this browser! (See README.md for IE8 workaround)"
                  )
              : ae("In page linking not enabled");
            return { findTarget: n };
          })()),
          Oe("init", "Init message from host page"),
          W();
      }
      function se(e, t) {
        d !== t &&
          "" !== t &&
          "null" !== t &&
          ae("Body " + e + ' set to "' + (document.body.style[e] = t) + '"');
      }
      function le(n) {
        var e = {
          add: function (e) {
            function t() {
              Oe(n.eventName, n.eventType);
            }
            (D[e] = t), ne(window, e, t, { passive: !0 });
          },
          remove: function (e) {
            var t = D[e];
            delete D[e], oe(window, e, t);
          },
        };
        n.eventNames && Array.prototype.map
          ? ((n.eventName = n.eventNames[0]), n.eventNames.map(e[n.method]))
          : e[n.method](n.eventName),
          ae(ie(n.method) + " event listener: " + n.eventType);
      }
      function de(e) {
        le({
          method: e,
          eventType: "Animation Start",
          eventNames: ["animationstart", "webkitAnimationStart"],
        }),
          le({
            method: e,
            eventType: "Animation Iteration",
            eventNames: ["animationiteration", "webkitAnimationIteration"],
          }),
          le({
            method: e,
            eventType: "Animation End",
            eventNames: ["animationend", "webkitAnimationEnd"],
          }),
          le({ method: e, eventType: "Input", eventName: "input" }),
          le({ method: e, eventType: "Mouse Up", eventName: "mouseup" }),
          le({ method: e, eventType: "Mouse Down", eventName: "mousedown" }),
          le({
            method: e,
            eventType: "Orientation Change",
            eventName: "orientationchange",
          }),
          le({
            method: e,
            eventType: "Print",
            eventName: ["afterprint", "beforeprint"],
          }),
          le({
            method: e,
            eventType: "Ready State Change",
            eventName: "readystatechange",
          }),
          le({ method: e, eventType: "Touch Start", eventName: "touchstart" }),
          le({ method: e, eventType: "Touch End", eventName: "touchend" }),
          le({
            method: e,
            eventType: "Touch Cancel",
            eventName: "touchcancel",
          }),
          le({
            method: e,
            eventType: "Transition Start",
            eventNames: [
              "transitionstart",
              "webkitTransitionStart",
              "MSTransitionStart",
              "oTransitionStart",
              "otransitionstart",
            ],
          }),
          le({
            method: e,
            eventType: "Transition Iteration",
            eventNames: [
              "transitioniteration",
              "webkitTransitionIteration",
              "MSTransitionIteration",
              "oTransitionIteration",
              "otransitioniteration",
            ],
          }),
          le({
            method: e,
            eventType: "Transition End",
            eventNames: [
              "transitionend",
              "webkitTransitionEnd",
              "MSTransitionEnd",
              "oTransitionEnd",
              "otransitionend",
            ],
          }),
          "child" === S &&
            le({ method: e, eventType: "IFrame Resized", eventName: "resize" });
      }
      function fe(e, t, n, o) {
        return (
          t !== e &&
            (e in n ||
              (ce(e + " is not a valid option for " + o + "CalculationMethod."),
              (e = t)),
            ae(o + ' calculation method set to "' + e + '"')),
          e
        );
      }
      function me() {
        p = fe(p, g, $, "height");
      }
      function ge() {
        A = fe(A, P, Z, "width");
      }
      function pe() {
        var e;
        !0 === n
          ? (de("add"),
            (e = b < 0),
            window.MutationObserver || window.WebKitMutationObserver
              ? e
                ? we()
                : (t = (function () {
                    function t(e) {
                      function t(e) {
                        !1 === e.complete &&
                          (ae("Attach listeners to " + e.src),
                          e.addEventListener("load", i, !1),
                          e.addEventListener("error", r, !1),
                          u.push(e));
                      }
                      "attributes" === e.type && "src" === e.attributeName
                        ? t(e.target)
                        : "childList" === e.type &&
                          Array.prototype.forEach.call(
                            e.target.querySelectorAll("img"),
                            t
                          );
                    }
                    function o(e) {
                      var t;
                      ae("Remove listeners from " + e.src),
                        e.removeEventListener("load", i, !1),
                        e.removeEventListener("error", r, !1),
                        (t = e),
                        u.splice(u.indexOf(t), 1);
                    }
                    function n(e, t, n) {
                      o(e.target), Oe(t, n + ": " + e.target.src, d, d);
                    }
                    function i(e) {
                      n(e, "imageLoad", "Image loaded");
                    }
                    function r(e) {
                      n(e, "imageLoadFailed", "Image load failed");
                    }
                    function e(e) {
                      Oe(
                        "mutationObserver",
                        "mutationObserver: " + e[0].target + " " + e[0].type
                      ),
                        e.forEach(t);
                    }
                    var a,
                      c,
                      u = [],
                      s =
                        window.MutationObserver ||
                        window.WebKitMutationObserver,
                      l =
                        ((a = document.querySelector("body")),
                        (c = {
                          attributes: !0,
                          attributeOldValue: !1,
                          characterData: !0,
                          characterDataOldValue: !1,
                          childList: !0,
                          subtree: !0,
                        }),
                        (l = new s(e)),
                        ae("Create body MutationObserver"),
                        l.observe(a, c),
                        l);
                    return {
                      disconnect: function () {
                        "disconnect" in l &&
                          (ae("Disconnect body MutationObserver"),
                          l.disconnect(),
                          u.forEach(o));
                      },
                    };
                  })())
              : (ae("MutationObserver not supported in this browser!"), we()))
          : ae("Auto Resize disabled");
      }
      function he() {
        de("remove"), null !== t && t.disconnect(), clearInterval(e);
      }
      function we() {
        0 !== b &&
          (ae("setInterval: " + b + "ms"),
          (e = setInterval(function () {
            Oe("interval", "setInterval: " + b);
          }, Math.abs(b))));
      }
      function ye(e, o) {
        var t = 0;
        return (
          (o = o || document.body),
          (t =
            "defaultView" in document &&
            "getComputedStyle" in document.defaultView
              ? null !== (t = document.defaultView.getComputedStyle(o, null))
                ? t[e]
                : 0
              : (function (e) {
                  if (/^\d+(px)?$/i.test(e)) return parseInt(e, i);
                  var t = o.style.left,
                    n = o.runtimeStyle.left;
                  return (
                    (o.runtimeStyle.left = o.currentStyle.left),
                    (o.style.left = e || 0),
                    (e = o.style.pixelLeft),
                    (o.style.left = t),
                    (o.runtimeStyle.left = n),
                    e
                  );
                })(o.currentStyle[e])),
          parseInt(t, i)
        );
      }
      function be(e, t) {
        for (
          var n, o = t.length, i = 0, r = 0, a = ie(e), c = G(), u = 0;
          u < o;
          u++
        )
          r < (i = t[u].getBoundingClientRect()[e] + ye("margin" + a, t[u])) &&
            (r = i);
        return (
          (c = G() - c),
          ae("Parsed " + o + " HTML elements"),
          ae("Element position calculated in " + c + "ms"),
          F / 2 < (n = c) &&
            ae("Event throttle increased to " + (F = 2 * n) + "ms"),
          r
        );
      }
      function ve(e) {
        return [
          e.bodyOffset(),
          e.bodyScroll(),
          e.documentElementOffset(),
          e.documentElementScroll(),
        ];
      }
      function ke(e, t) {
        var n = document.querySelectorAll("[" + t + "]");
        return (
          0 === n.length &&
            (ce("No tagged elements (" + t + ") found on page"),
            document.querySelectorAll("body *")),
          be(e, n)
        );
      }
      function Ee() {
        return document.querySelectorAll("body *");
      }
      function Te(e, t, n, o) {
        var i, r;
        !(function () {
          function e(e, t) {
            return !(Math.abs(e - t) <= C);
          }
          return (
            (i = d !== n ? n : $[p]()),
            (r = d !== o ? o : Z[A]()),
            e(m, i) || (u && e(R, r))
          );
        })() && "init" !== e
          ? e in { init: 1, interval: 1, size: 1 } || !(p in O || (u && A in O))
            ? e in { interval: 1 } || ae("No change in size detected")
            : Ie(t)
          : (Se(), xe((m = i), (R = r), e));
      }
      function Oe(e, t, n, o) {
        N && e in s
          ? ae("Trigger event cancelled: " + e)
          : (e in { reset: 1, resetPage: 1, init: 1 } ||
              ae("Trigger event: " + t),
            "init" === e ? Te(e, t, n, o) : ee(e, t, n, o));
      }
      function Se() {
        N || ((N = !0), ae("Trigger event lock on")),
          clearTimeout(z),
          (z = setTimeout(function () {
            (N = !1), ae("Trigger event lock off"), ae("--");
          }, l));
      }
      function Me(e) {
        (m = $[p]()), (R = Z[A]()), xe(m, R, e);
      }
      function Ie(e) {
        var t = p;
        (p = g), ae("Reset trigger event: " + e), Se(), Me("reset"), (p = t);
      }
      function xe(e, t, n, o, i) {
        var r;
        !0 === M &&
          (d === i ? (i = x) : ae("Message targetOrigin: " + i),
          ae(
            "Sending message to host page (" +
              (r = T + ":" + e + ":" + t + ":" + n + (d !== o ? ":" + o : "")) +
              ")"
          ),
          I.postMessage(k + r, i));
      }
      function Ce(t) {
        var n = {
          init: function () {
            (w = t.data),
              (I = t.source),
              ue(),
              (f = !1),
              setTimeout(function () {
                h = !1;
              }, l);
          },
          reset: function () {
            h
              ? ae("Page reset ignored by init")
              : (ae("Page size reset by host page"), Me("resetPage"));
          },
          resize: function () {
            Oe("resizeParent", "Parent window requested size check");
          },
          moveToAnchor: function () {
            y.findTarget(i());
          },
          inPageLink: function () {
            this.moveToAnchor();
          },
          pageInfo: function () {
            var e = i();
            ae("PageInfoFromParent called from parent: " + e),
              q(JSON.parse(e)),
              ae(" --");
          },
          message: function () {
            var e = i();
            ae("MessageCallback called from parent: " + e),
              j(JSON.parse(e)),
              ae(" --");
          },
        };
        function o() {
          return t.data.split("]")[1].split(":")[0];
        }
        function i() {
          return t.data.substr(t.data.indexOf(":") + 1);
        }
        function r() {
          return t.data.split(":")[2] in { true: 1, false: 1 };
        }
        function e() {
          var e = o();
          e in n
            ? n[e]()
            : (!ze.exports && "iFrameResize" in window) ||
              ("jQuery" in window &&
                "iFrameResize" in window.jQuery.prototype) ||
              r() ||
              ce("Unexpected message (" + t.data + ")");
        }
        k === ("" + t.data).substr(0, E) &&
          (!1 === f
            ? e()
            : r()
            ? n.init()
            : ae(
                'Ignored message of type "' +
                  o() +
                  '". Received before initialization.'
              ));
      }
      function Ne() {
        "loading" !== document.readyState &&
          window.parent.postMessage("[iFrameResizerChild]Ready", "*");
      }
    })();
  },
  function (e) {
    e.exports = {
      name: "@seniorsistemas/workflow-cockpit",
      version: "2.0.7",
      description:
        "Biblioteca Senior Business Planning Model (BPM) para integração com WorkFlow G7.",
      main: "dist/workflow-cockpit.min.js",
      types: "dist/workflow-cockpit.d.ts",
      typings: "dist/workflow-cockpit.d.ts",
      license: "SEE LICENSE IN LICENCE.md",
      repository: {
        type: "git",
        url: "http://git.senior.com.br/arquitetura/workflow-cockpit/",
      },
      publishConfig: {
        registry:
          "http://maven.senior.com.br:8081/artifactory/api/npm/npm-local/",
      },
      files: ["dist/"],
      keywords: ["Senior", "BPM", "Workflow", "g7"],
      scripts: {
        prepack: "npm run build",
        lint: "./node_modules/.bin/eslint .",
        "lint:fix": "npm run lint -- --fix",
        pretest: "npm run lint",
        test: 'echo "Error: no test specified" && exit 1',
        build:
          "node scripts/build.js && npm run build:lib && npm run build:standalone",
        "build:wp": "./node_modules/.bin/webpack",
        "build:lib": "npm run build:wp -- --config-name lib",
        "build:standalone": "npm run build:wp -- --config-name standalone",
      },
      dependencies: { "iframe-resizer": "^3.5.14" },
      devDependencies: {
        "@babel/core": "^7.3.4",
        "@babel/preset-env": "^7.3.4",
        "babel-loader": "^8.0.5",
        eslint: "^5.15.3",
        "eslint-config-airbnb-base": "^13.1.0",
        "eslint-plugin-import": "^2.16.0",
        rimraf: "^2.6.3",
        "uglifyjs-webpack-plugin": "^2.1.2",
        webpack: "^4.29.6",
        "webpack-cli": "^3.3.0",
      },
    };
  },
  function (e, t, n) {
    "use strict";
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function l(e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e))
        return (function (e, t) {
          var n,
            o,
            i,
            r = [],
            a = !0,
            c = !1;
          try {
            for (
              o = e[Symbol.iterator]();
              !a && (r.push(i.value), !t || r.length !== t);
              a = !0
            )
              a = (i = o.next()).done;
            return;
          } catch (e) {
            (c = !0), (n = e);
          } finally {
            try {
              !a && o.return && o.return();
            } finally {
              if (c) throw n;
            }
          }
          return r;
        })(e, t);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
    n.r(t);
    var c =
      "function" == typeof Symbol && "symbol" === o(Symbol.iterator)
        ? function (e) {
            return o(e);
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : o(e);
          };
    n.d(t, "workflowCockpit", function () {
      return b;
    });
    var i = function () {},
      u = { onSubmit: i, onError: i, data: i },
      r = !1,
      s = {};
    function d(e) {
      r &&
        "object" === c(window.console) &&
        console.log("[WorkflowCockpit] ".concat(e));
    }
    function a(e, t) {
      var n,
        o = !0,
        i = !1,
        r = e
          .slice(e.indexOf("?") + 1)
          .split("&")
          [Symbol.iterator]();
      try {
        for (var a; !o; o = !0) {
          var c = l(a.value.split("="), 2),
            u = c[0],
            s = c[1];
          if (u === t) return void 0 === s || decodeURIComponent(s);
          o = a = r.next().done;
        }
        return;
      } catch (e) {
        return (i = !0), void (n = e);
      } finally {
        try {
          !o && r.return && r.return();
        } finally {
          if (i) throw n;
        }
      }
    }
    function f(e) {
      return a(window.location.search, e) || a(window.location.hash, e);
    }
    function m(e) {
      var t;
      window.parent &&
        ((t =
          window.location.href === document.referrer
            ? ""
            : window.location !== window.parent.location
            ? document.referrer
            : document.location.href),
        /\/\/localhost/.test(t) && (t = ""),
        window.parent.postMessage(JSON.stringify(e), t || "*"));
    }
    function g(n) {
      return new Promise(function (e, t) {
        window.parent
          ? ((s[n] = { resolve: e, reject: t }), m({ request: n }))
          : e();
      });
    }
    var p = {
        isRequestNew: function () {
          return "true" === f("new");
        },
        getUserData: function () {
          return g("userData");
        },
        getPlatformData: function () {
          return g("platformData");
        },
        getInfoFromProcessVariables: function () {
          return g("infoFromProcessVariables");
        },
        getTaskData: function () {
          return g("taskData");
        },
      },
      h = function (e, t) {
        return e(t, p);
      },
      w = function (a) {
        var e;
        try {
          e = JSON.parse(a.data);
        } catch (e) {
          return void d("Message data is not a valid JSON: ".concat(a.data));
        }
        !(function (e) {
          if (e.request) {
            var t = s[e.request];
            return delete s[e.request], t.resolve(e.data);
          }
          if (e.type in u) {
            var n,
              o = { id: e.id },
              i = function () {
                return a.source.postMessage(JSON.stringify(o), a.origin);
              };
            try {
              var r = h(u[e.type], e.data);
              (n = r),
                Promise.resolve(n).then(
                  function (e) {
                    (o.data = e), i();
                  },
                  function (e) {
                    (o.error = e), i();
                  }
                );
            } catch (e) {
              (o.error = {
                message:
                  "object" === (void 0 === e ? "undefined" : c(e))
                    ? e.message
                    : e,
              }),
                i();
            }
          } else d("No handler found for message: ".concat(e));
        })(e);
      };
    var y,
      b =
        ((y = function (e) {
          var t;
          (function (e) {
            if ("object" !== (void 0 === e ? "undefined" : c(e)))
              throw new TypeError("Options is not an object");
          })((e = e || {})),
            (t = e),
            Object.keys(u).forEach(function (e) {
              Object.prototype.hasOwnProperty.call(u, e) &&
                Object.prototype.hasOwnProperty.call(t, e) &&
                (u[e] = t[e]);
            }),
            (r = t.logging);
        }),
        function (e) {
          var t, n, o;
          return (
            y(e),
            (t = window),
            (n = "message"),
            (o = w),
            "addEventListener" in window
              ? t.addEventListener(n, o, !1)
              : "attachEvent" in window && t.attachEvent("on".concat(n), o),
            m({ id: "formReady" }),
            (function (e) {
              var t,
                n =
                  ((t = Number(f("processInstanceId"))),
                  Number.isNaN(t) ? null : t),
                o = e.init;
              if (o && "function" == typeof o) {
                var i = n ? { processInstanceId: n } : {};
                h(o, i);
              }
            })(e),
            p
          );
        });
    t.default = b;
  },
]);
