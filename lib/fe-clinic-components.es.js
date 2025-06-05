import se from "react";
var v = { exports: {} }, m = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ce() {
  if (F) return m;
  F = 1;
  var t = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function a(o, c, i) {
    var b = null;
    if (i !== void 0 && (b = "" + i), c.key !== void 0 && (b = "" + c.key), "key" in c) {
      i = {};
      for (var y in c)
        y !== "key" && (i[y] = c[y]);
    } else i = c;
    return c = i.ref, {
      $$typeof: t,
      type: o,
      key: b,
      ref: c !== void 0 ? c : null,
      props: i
    };
  }
  return m.Fragment = s, m.jsx = a, m.jsxs = a, m;
}
var w = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function _e() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case E:
          return "Fragment";
        case X:
          return "Profiler";
        case G:
          return "StrictMode";
        case K:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case V:
            return "Portal";
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case re:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case P:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function a(e) {
      try {
        s(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, _ = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), s(e);
      }
    }
    function o(e) {
      if (e === E) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function y(e, r) {
      function n() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function z() {
      var e = t(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function J(e, r, n, _, p, u, R, k) {
      return n = u.ref, e = {
        $$typeof: O,
        type: e,
        key: r,
        props: u,
        _owner: p
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: z
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, r, n, _, p, u, R, k) {
      var l = r.children;
      if (l !== void 0)
        if (_)
          if (ne(l)) {
            for (_ = 0; _ < l.length; _++)
              A(l[_]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(l);
      if (N.call(r, "key")) {
        l = t(e);
        var d = Object.keys(r).filter(function(ae) {
          return ae !== "key";
        });
        _ = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", I[l + _] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          l,
          d,
          l
        ), I[l + _] = !0);
      }
      if (l = null, n !== void 0 && (a(n), l = "" + n), b(r) && (a(r.key), l = "" + r.key), "key" in r) {
        n = {};
        for (var T in r)
          T !== "key" && (n[T] = r[T]);
      } else n = r;
      return l && y(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), J(
        e,
        l,
        u,
        p,
        c(),
        n,
        R,
        k
      );
    }
    function A(e) {
      typeof e == "object" && e !== null && e.$$typeof === O && e._store && (e._store.validated = 1);
    }
    var g = se, O = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), h = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, ne = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var C, $ = {}, Y = g["react-stack-bottom-frame"].bind(
      g,
      i
    )(), B = x(o(i)), I = {};
    w.Fragment = E, w.jsx = function(e, r, n, _, p) {
      var u = 1e4 > h.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        n,
        !1,
        _,
        p,
        u ? Error("react-stack-top-frame") : Y,
        u ? x(o(e)) : B
      );
    }, w.jsxs = function(e, r, n, _, p) {
      var u = 1e4 > h.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        n,
        !0,
        _,
        p,
        u ? Error("react-stack-top-frame") : Y,
        u ? x(o(e)) : B
      );
    };
  }()), w;
}
var M;
function le() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? v.exports = ce() : v.exports = _e()), v.exports;
}
var f = le();
const ie = "_relative_woyer_2", ue = "_contents_woyer_2", fe = "_flex_woyer_2", pe = "_transform_woyer_2", de = "_border_woyer_2", be = "_peer_woyer_2", ye = "_disabled_woyer_2", me = "_loading_woyer_2", we = "_neutral_woyer_2", ge = "_clicked_woyer_2", ve = "_spin_woyer_1", Ee = {
  "sr-only": "_sr-only_woyer_2",
  relative: ie,
  static: "_static_woyer_2",
  contents: ue,
  flex: fe,
  "inline-block": "_inline-block_woyer_2",
  "h-5": "_h-5_woyer_2",
  "h-6": "_h-6_woyer_2",
  "h-9": "_h-9_woyer_2",
  "h-full": "_h-full_woyer_2",
  "w-5": "_w-5_woyer_2",
  "w-6": "_w-6_woyer_2",
  "w-full": "_w-full_woyer_2",
  transform: pe,
  "animate-spin": "_animate-spin_woyer_2",
  "cursor-pointer": "_cursor-pointer_woyer_2",
  "flex-col": "_flex-col_woyer_2",
  "items-center": "_items-center_woyer_2",
  "justify-center": "_justify-center_woyer_2",
  "space-x-2": "_space-x-2_woyer_2",
  "rounded-sm": "_rounded-sm_woyer_2",
  border: de,
  "border-1": "_border-1_woyer_2",
  "border-gray-700": "_border-gray-700_woyer_2",
  "p-2": "_p-2_woyer_2",
  "text-base": "_text-base_woyer_2",
  "text-white": "_text-white_woyer_2",
  "opacity-25": "_opacity-25_woyer_2",
  "opacity-75": "_opacity-75_woyer_2",
  "transition-colors": "_transition-colors_woyer_2",
  "duration-200": "_duration-200_woyer_2",
  "outline-none": "_outline-none_woyer_2",
  "peer-checked:border-blue-600": "_peer-checked:border-blue-600_woyer_2",
  peer: be,
  "peer-checked:bg-blue-600": "_peer-checked:bg-blue-600_woyer_2",
  disabled: ye,
  loading: me,
  neutral: we,
  clicked: ge,
  spin: ve
}, he = "_btnBase_1ep9p_2", U = {
  btnBase: he
};
function L(t) {
  var s, a, o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var c = t.length;
    for (s = 0; s < c; s++) t[s] && (a = L(t[s])) && (o && (o += " "), o += a);
  } else for (a in t) t[a] && (o && (o += " "), o += a);
  return o;
}
function j() {
  for (var t, s, a = 0, o = "", c = arguments.length; a < c; a++) (t = arguments[a]) && (s = L(t)) && (o && (o += " "), o += s);
  return o;
}
const xe = () => /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsxs(
  "svg",
  {
    className: "animate-spin h-5 w-5 text-white",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ f.jsx(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        }
      )
    ]
  }
) }), Ie = ({ children: t, isLoading: s = !1, disabled: a = !1, ...o }) => {
  const c = () => a ? "disabled" : s ? "loading" : "neutral", i = j(
    U.btnBase,
    Ee[c()]
  );
  return /* @__PURE__ */ f.jsx("button", { className: i, type: "button", disabled: a || s, ...o, children: s ? /* @__PURE__ */ f.jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ f.jsx(xe, {}) }) : t });
}, Re = "_neutral_3gbi7_2", ke = {
  neutral: Re
}, Fe = (t) => {
  const { children: s, ...a } = t, o = j(
    U.btnBase,
    ke.neutral
  );
  return /* @__PURE__ */ f.jsx("button", { className: o, type: "button", ...a, children: s });
}, Te = "_relative_rpogf_2", je = "_contents_rpogf_2", Se = "_flex_rpogf_2", Ae = "_transform_rpogf_2", Oe = "_border_rpogf_2", Pe = "_peer_rpogf_2", Ne = "_cardBase_rpogf_2", Ce = "_primary_rpogf_2", $e = "_secondary_rpogf_2", Ye = "_spin_rpogf_1", W = {
  "sr-only": "_sr-only_rpogf_2",
  relative: Te,
  static: "_static_rpogf_2",
  contents: je,
  flex: Se,
  "inline-block": "_inline-block_rpogf_2",
  "h-5": "_h-5_rpogf_2",
  "h-6": "_h-6_rpogf_2",
  "h-9": "_h-9_rpogf_2",
  "h-full": "_h-full_rpogf_2",
  "w-5": "_w-5_rpogf_2",
  "w-6": "_w-6_rpogf_2",
  "w-full": "_w-full_rpogf_2",
  transform: Ae,
  "animate-spin": "_animate-spin_rpogf_2",
  "cursor-pointer": "_cursor-pointer_rpogf_2",
  "flex-col": "_flex-col_rpogf_2",
  "items-center": "_items-center_rpogf_2",
  "justify-center": "_justify-center_rpogf_2",
  "space-x-2": "_space-x-2_rpogf_2",
  "rounded-sm": "_rounded-sm_rpogf_2",
  border: Oe,
  "border-1": "_border-1_rpogf_2",
  "border-gray-700": "_border-gray-700_rpogf_2",
  "p-2": "_p-2_rpogf_2",
  "text-base": "_text-base_rpogf_2",
  "text-white": "_text-white_rpogf_2",
  "opacity-25": "_opacity-25_rpogf_2",
  "opacity-75": "_opacity-75_rpogf_2",
  "transition-colors": "_transition-colors_rpogf_2",
  "duration-200": "_duration-200_rpogf_2",
  "outline-none": "_outline-none_rpogf_2",
  "peer-checked:border-blue-600": "_peer-checked:border-blue-600_rpogf_2",
  peer: Pe,
  "peer-checked:bg-blue-600": "_peer-checked:bg-blue-600_rpogf_2",
  cardBase: Ne,
  primary: Ce,
  secondary: $e,
  spin: Ye
};
var q = /* @__PURE__ */ ((t) => (t.Primary = "primary", t.Secondary = "secondary", t))(q || {});
const De = ({ children: t, type: s = q.Primary }) => {
  const a = j(W.cardBase, W[s]);
  return /* @__PURE__ */ f.jsx("div", { className: a, children: t });
};
export {
  Ie as ButtonPrimary,
  Fe as ButtonSecondary,
  De as Card
};
