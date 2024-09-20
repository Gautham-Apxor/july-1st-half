var Tt = Object.defineProperty;
var Ot = (s, e, t) => e in s ? Tt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => Ot(s, typeof e != "symbol" ? e + "" : e, t);
const me = (s) => typeof s > "u", ve = (s) => s === null, g = (s) => typeof s < "u" && !ve(s), ct = (s) => !g(s), v = (s) => typeof s == "function", U = (s) => typeof s == "string", oe = (s) => typeof s == "boolean", k = (s) => g(s) && !ve(s) && !isNaN(s), R = (s) => s instanceof Object, Se = ["log", "debug", "info", "warn", "error"], Q = Se.reduce(
  (s, e) => (s[e] = e, s),
  {}
), He = (s) => {
  if (me(s)) {
    const e = () => null;
    return Se.reduce((t, i) => (t[i] = e, t), {});
  }
  return s;
}, f = class f {
  static set enabled(e) {
    f._enabled = e;
  }
  static set level(e) {
    f._level = e;
  }
  static set console(e) {
    f._console = He(e);
  }
};
r(f, "_console", He()), r(f, "_enabled", !1), r(f, "_level", "error"), r(f, "_render", (e) => (...t) => {
  const i = Se.indexOf(e) >= Se.indexOf(f._level);
  f._enabled && i && f._console[e].apply(f._console, t);
}), r(f, "log", f._render(Q.log)), r(f, "info", f._render(Q.info)), r(f, "debug", f._render(Q.debug)), r(f, "warn", f._render(Q.warn)), r(f, "error", f._render(Q.error));
let u = f;
const Re = 0, Nt = 730, yt = {
  enable: !0,
  api_root: "https://server.apxor.com/v2/api",
  auto_track_events: ["click", "submit"],
  cookie_expiration: Nt,
  name: "",
  domain: "",
  cookie_prefix: "_apx_",
  idle_time_out: 1800,
  //secs
  ed_t_time: -1,
  // Default: 1800000ms => 30 mins
  sct_time: 108e5,
  // Deafult: 10800000 => 3 hours
  events: {
    stop: [],
    action: []
  }
}, Je = {
  debug: !1,
  honorDNT: !1,
  idle_time_out: 1800,
  //Secs
  client_id: null,
  session_id: null,
  version: "ALL",
  events_upload_time: -1,
  retry_time: -1,
  bulk_upload: !0,
  auto_event_logging: !1,
  api_root: ""
}, y = "apx_", q = "local_storage", Xe = "session_storage", dt = "on";
var gt = /* @__PURE__ */ ((s) => (s.OperaMini = "Opera Mini", s.Opera = "Opera", s.BlackBerry = "BlackBerry", s.IEMobile = "Internet Explorer Mobile", s.Edge = "Microsoft Edge", s.FB = "Facebook Mobile", s.Chrome = "Chrome", s.ChromeIOS = "Chrome iOS", s.UC = "UC Browser", s.FirefoxIOS = "Firefox iOS", s.SafariMobile = "Mobile Safari", s.Safari = "Safari", s.AndroidMobile = "Android Mobile", s.Konqueror = "Konqueror", s.Firefox = "Firefox", s.IE = "Internet Explorer", s.Mozilla = "Mozilla", s.Brave = "Brave", s))(gt || {});
const ye = "apx_id", Pe = "_apx_config", ie = "_apx_ua", Pt = "_apx_sc", De = "_apx_evl", Me = "_apx_ledt", xe = "_apx_lef", de = "_apx_ch", Le = "_apx_lct", Ge = "_apx_uih", ge = "apx_in", se = "apx_ver", Ue = "apx_lbgt", Ye = "details", Mt = "apxor_status", xt = "APXOR_STATUS_SUCCESS", Be = "visible", _t = "FOREGROUND", Lt = "BACKGROUND", Ut = "APX_PAGE_OPENED", Ft = "apx_app_opened", We = "referrer", Rt = "automation", Bt = "platform", Kt = "data_save_mode", $t = "network", Ce = "SYSTEM_EVENT", qt = "NAVIGATION_EVENT", ee = "APP_EVENT", he = "CLIENT_EVENT", je = "apx_retained_session", zt = "device_type", ne = "_apx_lEt", W = "_apx_sId", _e = "_apx_cd", fe = "_apx_od", re = "_apx_lt_count", pe = "_apx_use", Fe = "_apx_scnm", Vt = "apx_retained_days", Te = "apx_sst", Ht = [
  "apx_debug_enable",
  "apx_log_level",
  "_apx_config",
  "apx_id",
  "apx_ver",
  "apx_in",
  "_apx_od",
  "_apx_use",
  "_apx_cd",
  "qe_state",
  "apx_retained_session",
  "apx_retained_days",
  "_apx_ua",
  "_apx_sc",
  "_apx_ledt",
  "_apx_lef",
  "_apx_ch",
  "_apx_lct",
  "_apx_uih",
  "apx_lbgt",
  "_apx_lEt",
  "_apx_sId",
  "_apx_lt_count",
  "apx_sst",
  "apx_termination_ID",
  "_apx_ew",
  "_apx_scnm",
  "0__lcfht",
  "1__lcfht",
  "_apx_td",
  "apx-last-shown-times",
  "apx-last-shown-session"
], Jt = "file:", Xt = "localhost", Gt = "production", Yt = "development", Wt = "apx_pii_mask_elements";
class ae {
}
r(ae, "isCookieAvailable", () => {
  try {
    const e = new Date(
      Date.now() + 864e5
    ).toUTCString();
    document.cookie = `cookie_set=cookie_value; expires=${e}`;
    const t = document.cookie.split(";");
    for (let i = 0; i < t.length; i++)
      if (t[i].indexOf("cookie_set") !== -1)
        return document.cookie = "cookie_set=cookie_value; expires=Thu, 01 Jan 1970 00:00:01 GMT;", !0;
    return !1;
  } catch (e) {
    return u.error(`Cookie : ${e}`), !1;
  }
}), /**
 *
 * @param name
 * @returns {string | null}
 */
r(ae, "get", (e) => {
  if (window.document) {
    const t = e + "=", i = window.document.cookie.split(";");
    for (let n = 0; n < i.length; n++) {
      let o = i[n];
      for (; o.charAt(0) === " "; )
        o = o.substring(1);
      if (o.indexOf(t) === 0)
        return decodeURIComponent(o.substring(t.length));
    }
  }
  return null;
});
const Ie = (s, e = !0) => {
  var n, o;
  const t = (c) => c < 10 ? "0" + c : c, i = s.getFullYear() + "-" + t(s.getMonth() + 1) + "-" + t(s.getDate()) + "T" + t(s.getHours()) + ":" + t(s.getMinutes()) + ":" + t(s.getSeconds());
  return e ? i + ((o = (n = s == null ? void 0 : s.toTimeString()) == null ? void 0 : n.split(" ")[1]) == null ? void 0 : o.replace(/GMT([+|-])(\d{2})(\d{2})/, "$1$2:$3")) : i;
}, ft = (s) => {
  const { navigator: e = {} } = s, { userAgent: t = "", vendor: i = "" } = e, {
    OperaMini: n,
    Opera: o,
    BlackBerry: c,
    IEMobile: a,
    Edge: l,
    FB: h,
    Chrome: d,
    ChromeIOS: p,
    UC: O,
    FirefoxIOS: S,
    SafariMobile: H,
    Safari: N,
    AndroidMobile: P,
    Konqueror: J,
    Firefox: X,
    IE: M,
    Mozilla: _,
    Brave: m
  } = gt, K = (() => {
    if (e != null && e.brave)
      return m;
    switch (!0) {
      case t.includes(" OPR/"):
        return t.includes("Mini") ? n : o;
      case /(BlackBerry|PlayBook|BB10)/i.test(t):
        return c;
      case (t.includes("IEMobile") || t.includes("WPDesktop")):
        return a;
      case t.includes("FBIOS"):
        return h;
      case t.includes("Chrome"):
        return d;
      case t.includes("CriOS"):
        return p;
      case t.includes("Edge"):
        return l;
      case (t.includes("UCWEB") || t.includes("UCBrowser")):
        return O;
      case t.includes("FxiOS"):
        return S;
      case i.includes("Apple"):
        return t.includes("Mobile") ? H : N;
      case t.includes("Android"):
        return P;
      case t.includes("Konqueror"):
        return J;
      case t.includes("Firefox"):
        return X;
      case (t.includes("MSIE") || t.includes("Trident/")):
        return M;
      case t.includes("Gecko"):
        return _;
      default:
        return "";
    }
  })(), $ = () => {
    const Z = {
      [a]: /rv:(\d+(\.\d+)?)/,
      [l]: /Edge\/(\d+(\.\d+)?)/,
      [d]: /Chrome\/(\d+(\.\d+)?)/,
      [p]: /CriOS\/(\d+(\.\d+)?)/,
      [O]: /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
      [N]: /Version\/(\d+(\.\d+)?)/,
      [H]: /Version\/(\d+(\.\d+)?)/,
      [o]: /(Opera|OPR)\/(\d+(\.\d+)?)/,
      [X]: /Firefox\/(\d+(\.\d+)?)/,
      [S]: /FxiOS\/(\d+(\.\d+)?)/,
      [J]: /Konqueror:(\d+(\.\d+)?)/,
      [c]: /BlackBerry (\d+(\.\d+)?)/,
      [P]: /android\s(\d+(\.\d+)?)/,
      [M]: /(rv:|MSIE )(\d+(\.\d+)?)/,
      [_]: /rv:(\d+(\.\d+)?)/
    }[K];
    if (Z === void 0)
      return null;
    const Y = t.match(Z);
    return Y ? parseFloat(Y[Y.length - 2]) : null;
  }, ue = () => {
    switch (!0) {
      case /Windows/i.test(t):
        return /Phone/.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : "Windows";
      case /(iPhone|iPad|iPod)/.test(t):
        return "iOS";
      case /Android/.test(t):
        return "Android";
      case /(BlackBerry|PlayBook|BB10)/i.test(t):
        return "BlackBerry";
      case /Mac/i.test(t):
        return "Mac OS X";
      case /Linux/.test(t):
        return "Linux";
      case /CrOS/.test(t):
        return "Chrome OS";
      default:
        return "";
    }
  }, Et = () => {
    const {
      screen: { height: Ae, width: Z } = { width: 0, height: 0 },
      devicePixelRatio: Y = 1
    } = s, qe = (Dt) => {
      const ze = Math.round(Dt) * Y, Ve = ze % 10;
      return ze + (Ve > 0 ? 10 : 0) - Ve;
    };
    return {
      dimensions: {
        width: Z,
        height: Ae
      },
      dimensions_in_pixels: {
        width: qe(Z),
        height: qe(Ae)
      },
      dpi: Y.toString()
    };
  }, wt = $(), kt = mt(), At = ue();
  return {
    ...Et(),
    hardware_model: kt,
    browser_version: wt,
    browser: K,
    os_version: At
  };
}, jt = (s, e = 120) => {
  if (typeof s == "string")
    return s.length > e ? s.slice(0, e) + "..." : s;
}, F = (s, e = 3) => {
  if (typeof s != "number" || typeof e != "number" || e % 1 !== 0)
    return s;
  const t = Math.pow(10, e);
  return Math.round(s * t) / t;
}, Zt = () => Date.now(), be = (s) => {
  if (!g(s) && !U(s))
    return null;
  if (typeof s == "object" || R(s))
    return s;
  const e = s.replace(/(?:\r\n|\r|\n)/g, "").trim();
  try {
    return JSON.parse(e);
  } catch (t) {
    u.error("getJsonOrNull error: ", t);
  }
  return null;
}, L = (s, e) => {
  if (!g(e))
    return null;
  const t = us(s, e);
  return as(t);
}, G = (s, e) => {
  const t = ls(e);
  return hs(s, t);
};
function Qt(s) {
  const e = new ArrayBuffer(s.length), t = new Uint8Array(e);
  for (let i = 0; i < s.length; i++)
    t[i] = s.charCodeAt(i);
  return e;
}
function Ze(s) {
  let e = "";
  const t = new Uint8Array(s);
  for (let i = 0; i < t.length; i++)
    e += String.fromCharCode(t[i]);
  return e;
}
const es = (s = {}) => {
  const { location: { protocol: e, host: t, hostname: i } = {} } = s;
  return e === Jt || t === Xt || i === "0.0.0.0" || i === "127.0.0.1" ? Yt : Gt;
}, Qe = (s) => {
  const e = s.document.querySelector("title");
  return !g(e) || !g(e.innerText) ? "Unknown" : e.innerText;
}, j = (s) => typeof s == "number" ? F(s / 1e3) : s, ts = (s) => {
  const e = {
    id: "",
    launch_time: 0,
    launch_time_string: "",
    startup_time: 0,
    is_background: !1,
    is_first_session: !1,
    duration: 0,
    total_duration: 0,
    process_name: "",
    is_fatal: !1,
    launch_type: "normal"
  };
  if (!s.session_info)
    s.session_info = e;
  else
    for (const t of Object.keys(e))
      t in s.session_info || (s.session_info[t] = e[t]);
}, ss = (s, e, t, i = !1) => {
  v(s.addEventListener) ? s.addEventListener(e, t, i) : v(s.attachEvent) ? s.attachEvent(`on${e}`, t) : s[dt + e] = t;
}, et = (s, e, t) => {
  v(s.removeEventListener) ? s.removeEventListener(e, t) : v(s.detachEvent) ? s.detachEvent(`on${e}`, t) : s[dt + e] = null;
}, Oe = function s(e = null) {
  return e ? (e ^ Math.random() * 16 >> e / 4).toString(16) : (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (9987e3 + -1e11).toString().replace(/[018]/g, s)
  );
}, tt = (s = {}, e = {}) => {
  const { navigator: { language: t } = {} } = s, { browser_version: i, browser: n } = e, o = ae.isCookieAvailable();
  return {
    [y + "browser"]: n,
    [y + "browser_version"]: n + "_" + i,
    [y + "language"]: t,
    [y + "cookies_supported"]: o
  };
}, st = (s = {}) => {
  const { navigator: { platform: e = "", webdriver: t } = {}, document: i } = s, n = {}, o = navigator.connection, c = (o == null ? void 0 : o.effectiveType) || "", a = (o == null ? void 0 : o.saveData) || !1, l = (i == null ? void 0 : i.referrer) || "";
  c && (n[y + $t] = c), a && (n[y + Kt] = a.toString()), e && (n[y + Bt] = e), g(t) && t && (n[y + Rt] = t.toString()), g(l) && l.length > 0 ? n[y + We] = l : n[y + We] = "direct";
  const h = mt();
  return n[y + zt] = h, n;
}, is = (s = {}, e) => {
  if (e == null || !v(e))
    return;
  const t = s.document;
  if (t.readyState !== "loading")
    e();
  else if (v(t.addEventListener))
    t.addEventListener("DOMContentLoaded", e);
  else {
    const i = s;
    v(i.attachEvent) && i.attachEvent("onreadystatechange", function() {
      t.readyState !== "loading" && e();
    });
  }
}, ns = (s = {}, e) => {
  v(e) && (s.addEventListener("pagehide", function() {
    return e(), "";
  }), s.addEventListener("beforeunload", function() {
    return e(), "";
  }), s.addEventListener("onunload", function() {
    return e(), "";
  }));
}, rs = (s = {}, e = () => null) => {
  v(e) && (s.removeEventListener("pagehide", e), s.removeEventListener("beforeunload", e), s.removeEventListener("onunload", e));
}, it = (s = {}, e = 1) => {
  if (R(s)) {
    const t = {};
    return Object.keys({ ...s }).forEach((i) => {
      const n = s[i];
      let o = i;
      U(i) || (o = JSON.stringify(i)), oe(n) || k(n) ? w(t, o, n) : U(n) ? t[o] = jt(n) : Array.isArray(n) ? pt(t, o, n, e) : R(n) && Ke(t, i, n, e - 1);
    }), t;
  } else
    return {};
}, nt = (s, e) => {
  const t = Object.keys(s), i = {};
  return t.forEach((n) => {
    s[n] !== e[n] && (i[n] = s[n]);
  }), i;
}, os = (s = {}) => {
  if (s.navigator) {
    const e = s.navigator.doNotTrack;
    return !(e === "1" || e === "yes");
  }
  return !0;
}, pt = (s, e, t, i = 1) => {
  if (i <= 0) {
    w(s, e, JSON.stringify(t));
    return;
  }
  if (Array.isArray(t)) {
    const n = t;
    if (n.length > 0) {
      let o = "";
      oe(n[0]) ? o = "b" : U(n[0]) ? o = "s" : k(n[0]) ? o = "n" : Array.isArray(n[0]) ? o = "a" : R(n[0]) && (o = "o");
      const c = n.length;
      if (o === "") {
        w(s, e, JSON.stringify(t));
        return;
      }
      for (let a = 1; a < c; a++)
        if (o === "s") {
          if (!U(n[a])) {
            w(s, e, JSON.stringify(t));
            return;
          }
        } else if (o === "b") {
          if (!oe(n[a])) {
            w(s, e, JSON.stringify(t));
            return;
          }
        } else if (o === "n") {
          if (!k(n[a])) {
            w(s, e, JSON.stringify(t));
            return;
          }
        } else if (o === "a") {
          if (!Array.isArray(n[a])) {
            w(s, e, JSON.stringify(t));
            return;
          }
        } else if (o === "o" && !R(n[a])) {
          w(s, e, JSON.stringify(t));
          return;
        }
      if (o === "o")
        if (i - 1 <= 0) {
          const a = [];
          for (let l = 0; l < c; l++)
            a.push(JSON.stringify(n[l]));
          w(s, e, a);
        } else
          for (let a = 0; a < c; a++)
            Ke(s, e, n[a], i - 1);
      else if (o === "a")
        for (let a = 0; a < c; a++)
          w(s, e, JSON.stringify(n[a]));
      else
        for (let a = 0; a < c; a++)
          w(s, e, n[a]);
    } else
      w(s, e, []);
  }
}, Ke = (s, e, t, i = 1) => {
  if (i <= 0) {
    w(s, e, JSON.stringify(t));
    return;
  }
  Object.keys({ ...t }).forEach((n) => {
    const o = e + "_" + n, c = t[n];
    g(c) && (Array.isArray(c) ? pt(s, o, c, i - 1) : R(c) ? Ke(s, o, c, i - 1) : w(s, o, c));
  });
}, w = (s, e, t) => {
  if (!(!g(e) || !g(t)))
    if (s[e]) {
      let i = s[e], n = i;
      Array.isArray(i) || ((k(i) && !k(t) || oe(i) && !oe(t) || U(i) && !U(t) || R(i) && !R(t)) && (U(i) || (i = JSON.stringify(i)), U(t) || (t = JSON.stringify(t))), n = [], n.push(i)), n.push(t), s[e] = n;
    } else
      s[e] = t;
}, mt = () => {
  const { navigator: { userAgent: s = "" } = {} } = window;
  switch (!0) {
    case (/Windows Phone/i.test(s) || /WPDesktop/.test(s)):
      return "Windows Phone";
    case /iPad/.test(s):
      return "iPad";
    case /iPod/.test(s):
      return "iPod Touch";
    case /iPhone/.test(s):
      return "iPhone";
    case /(BlackBerry|PlayBook|BB10)/i.test(s):
      return "BlackBerry";
    case /Android/.test(s):
      return "Android";
    default:
      return "Desktop";
  }
}, z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function as(s) {
  let e, t, i, n, o, c, a, l, h, d = 0, p = "";
  if (!s)
    return "";
  do
    e = s[d++], t = s[d++], i = s[d++], l = e << 16 | t << 8 | i, n = l >> 18 & 63, o = l >> 12 & 63, c = l >> 6 & 63, a = l & 63, p += z.charAt(n) + z.charAt(o) + z.charAt(c) + z.charAt(a);
  while (d < s.length);
  return h = s.length % 3, (h ? p.slice(0, h - 3) : p) + "===".slice(h || 3);
}
function ls(s) {
  let e, t, i, n, o, c, a, l, h = 0;
  const d = [];
  if (!s)
    return d;
  s += "";
  do
    n = z.indexOf(s.charAt(h++)), o = z.indexOf(s.charAt(h++)), c = z.indexOf(s.charAt(h++)), a = z.indexOf(s.charAt(h++)), l = n << 18 | o << 12 | c << 6 | a, e = l >> 16 & 255, t = l >> 8 & 255, i = l & 255, d.push(e), c !== 64 && (d.push(t), a !== 64 && d.push(i));
  while (h < s.length);
  return d;
}
function vt(s, e) {
  return s.charCodeAt(Math.floor(e % s.length));
}
function us(s, e) {
  return Array.from(e).map((t, i) => t.charCodeAt(0) ^ vt(s, i));
}
function hs(s, e) {
  return e.map((t, i) => String.fromCharCode(t ^ vt(s, i))).join("");
}
const cs = "ALL", St = (s, e) => ({
  name: s === Be ? _t : Lt,
  time: k(e) ? F(e) : 0
}), rt = (s, e = {}, t, i) => {
  if (typeof s == "string" && typeof e == "object")
    return {
      name: s,
      additional_info: e,
      category: t !== void 0 && typeof t == "string" ? t : void 0,
      time: typeof i == "number" ? F(i) : 0
    };
}, ds = (s, e, t, i, n) => (n = n !== void 0 ? n : "ALL", {
  app_name: s,
  app_version: n,
  bundle_id: e,
  installation_time: t,
  app_mode: i
}), gs = (s, e, t, i, n, o, c, a) => ({
  id: s,
  hardware_model: e,
  dimensions: t,
  os_version: i,
  platform: "web",
  dpi: n,
  dimensions_in_pixels: o,
  browser: c,
  browser_version: a
}), _s = (s, e, t, i = 0) => ({
  navigation_id: s,
  name: e,
  duration: k(t) ? F(t) : 0,
  //sec
  transition_time: k(i) ? F(i) : 0
}), $e = {
  navigation_events: [],
  app_events: [],
  system_events: [],
  user_events: [],
  chunk_attributes: {},
  user_attributes: {},
  session_attributes: {}
}, Ct = (s) => ({
  sdk_version: Re,
  config_id: "apx",
  // default
  tick_interval: 1,
  // Sec
  chunk_retry_window: 1800,
  // default
  sdk_start_time: s
  // timestamp
}), fs = (s, e, t, i = 1) => (u.debug("Model : Building the initial state of the Chunk"), {
  sdk_info: Ct(s),
  session_info: {
    id: t,
    launch_time: e,
    // timestamp
    launch_time_string: Ie(new Date(e)),
    startup_time: 0,
    // Double
    is_background: !1,
    is_first_session: !1,
    duration: 0,
    total_duration: 0,
    process_name: "",
    is_fatal: !1,
    launch_type: "normal"
  },
  app_info: {
    app_name: "",
    app_version: cs,
    bundle_id: "",
    installation_time: T.getInstance().getInstallationTime(),
    app_mode: "production"
  },
  device_info: ft(window),
  chunk_meta: {
    id: t + ":" + i,
    number: i,
    reporting_times: []
  },
  chunk_details: {
    ...$e,
    user_attributes: {},
    session_attributes: {}
  }
});
class le {
  constructor(e) {
    r(this, "_isStorageAvailable");
    r(this, "storage");
    r(this, "storageType");
    this._isStorageAvailable = this._isSupported(e), this._isStorageAvailable ? (this.storage = window[e], this.storageType = e) : (this.storageType = e, this.storage = {
      length: 0,
      getItem: () => null,
      setItem: () => {
      },
      removeItem: () => {
      },
      clear: () => {
      }
      // get: () => null,
      // set: () => {},
      // remove: () => {},
      // getParsed: () => null,
    });
  }
  static waitForBrowserStorage(e) {
    let t = 15;
    const i = setInterval(() => {
      t--, le.isLocalStorageEnabled() || t <= 0 ? (u.debug("Storage : Local storage available"), clearInterval(i), e()) : u.debug("Storage : Local storage not available yet");
    }, 100);
  }
  static isLocalStorageEnabled() {
    try {
      const e = "__apx_storage_test__";
      window.localStorage.setItem(e, "test");
      const t = window.localStorage.getItem(e);
      return window.localStorage.removeItem(e), t === "test";
    } catch (e) {
      return u.debug(`Browser storage is not enabled yet : ${e}`), !1;
    }
  }
  _isSupported(e) {
    let t = !0;
    try {
      const i = "_apx_", n = "apx";
      window[e] ? (window[e].setItem(i, n), window[e].getItem(i) !== n && (t = !1), window[e].removeItem(i)) : t = !1;
    } catch (i) {
      u.debug(
        `Storage : Error while checking ${e} support - ${i}`
      ), t = !1;
    }
    return t || u.error("Storage : LocalStorage not supported"), t;
  }
  get(e) {
    try {
      return this.storage.getItem(e);
    } catch (t) {
      u.error(
        `Storage : Error while getting the ${e} from storage - ${t}`
      );
    }
    return null;
  }
  getParsed(e) {
    try {
      const t = this.storage.getItem(e);
      return t ? JSON.parse(t) : null;
    } catch (t) {
      u.error(
        `Storage : Error while parsing ${e}'s value from storage - ${t}`
      );
    }
    return null;
  }
  set(e, t) {
    try {
      this.storage.setItem(e, t);
    } catch (i) {
      u.error(
        `Storage : Error while setting the ${e}'s value to storage - ${i}`
      );
    }
  }
  remove(e) {
    try {
      this.storage.removeItem(e);
    } catch (t) {
      u.error(
        `Storage : Error while removing the ${e} from storage - ${t}`
      );
    }
  }
  clear() {
    try {
      [
        Pe,
        ie,
        ne,
        W,
        Pt,
        ye,
        ge,
        se,
        Ue,
        _e,
        fe,
        re,
        pe,
        Fe,
        Le,
        de,
        xe,
        Me
      ].forEach((t) => this.storage.removeItem(t));
    } catch (e) {
      u.error(`Storage : Error while clearing the storage - ${e}`);
    }
  }
  isStorageAvailable() {
    return this._isStorageAvailable;
  }
}
class ps {
  constructor(e) {
    r(this, "_siteId", "");
    r(this, "storage");
    r(this, "sessionStorage");
    r(this, "getExistingConfig", () => {
      const e = this.storage.get(Pe);
      let t = null;
      if (typeof e < "u" && e !== null)
        try {
          t = JSON.parse(G(this._siteId, e));
        } catch (i) {
          t = null, u.error("Datamanager : Error getting the existing config - " + i);
        }
      return t ?? yt;
    });
    r(this, "persistConfig", (e) => {
      this.storage.set(
        Pe,
        L(this._siteId, JSON.stringify(e))
      );
    });
    r(this, "persistUserId", (e) => {
      this.storage.set(ye, e);
    });
    r(this, "getUserId", () => {
      let e = null;
      try {
        e = this.storage.get(ye);
      } catch (t) {
        u.debug("Datamaager : Can not get user id from storage-" + t);
      }
      return e;
    });
    r(this, "persistAppVersion", (e) => this.storage.set(se, e));
    r(this, "getAppVersion", () => {
      const e = this.storage.get(se);
      if (!g(e) && ae.isCookieAvailable()) {
        const t = ae.get(se);
        if (typeof t < "u" && t !== null)
          return this.storage.set(se, t), t;
      }
      return e;
    });
    r(this, "persist", (e, t, i = q) => {
      i === q ? this.storage.set(e, t) : i === Xe && this.sessionStorage.set(e, t);
    });
    r(this, "getItem", (e, t = !1, i = q) => {
      let n;
      if (i === q ? n = this.storage.get(e) : i === Xe && (n = this.sessionStorage.get(e)), t) {
        const o = be(n);
        if (o === null)
          try {
            n = JSON.parse(G(this._siteId, n));
          } catch (c) {
            u.debug(`Datamanager : ${e} - value not found in storage`, c), n = null;
          }
        else
          n = o;
      }
      return u.debug(
        `Datamanager : ${e}'s value from storage is ${JSON.stringify(n)}`
      ), n;
    });
    r(this, "getItemOrDefault", (e, t, i = !1, n = q) => {
      const o = this.getItem(e, i, n);
      return g(o) ? o : (u.debug(
        `Datamanager : ${e}'s value is not defined. Returning default-${JSON.stringify(
          t
        )}`
      ), t);
    });
    r(this, "clearStorage", () => {
      this.storage.clear(), this.sessionStorage.clear();
    });
    /**
     * @function removeUserAttributes
     * @description Removes the user properties from the storage
     */
    r(this, "resetUserProperties", () => {
      u.debug("Datamanager : Removing the user attributes form the storage"), this.storage.remove(ie);
    });
    /**
     * @function        persistInstallationTime
     * @description     Sets the installation time(apx_in) in the local storage.
     * @param {number}  time - time in milliseconds (Equivalent to Date.now())
     */
    r(this, "persistInstallationTime", (e) => {
      u.debug(`DataManager : Setting the installation time to ${e}`), this.storage.set(ge, e);
    });
    /**
     * @function        getInstallationTime
     * @param {number}  defaultTime
     * @returns         Returns the installation time from localstorage or the defaulttime.
     */
    r(this, "getInstallationTime", (e) => {
      const t = this.storage.get(ge);
      return g(t) ? (u.debug(
        `Datamanager : Stored installation time ${t}`
      ), Number(t)) : (u.debug(
        `Datamanager : Stored installation time not found. Persisting and returning the default time ${e}`
      ), this.persistInstallationTime(e), e);
    });
    /**
     * @function        persistOldChunk
     * @description     Persists the old chunk to the local storage.
     * @param {object}  data
     */
    r(this, "persistOldChunk", (e) => {
      u.debug(
        "Datamanager : Persisting the old session chunk to the storage"
      ), this.storage.set(
        fe,
        L(this._siteId, JSON.stringify(e))
      );
    });
    /**
     * @function    getOldChunk
     * @description Returns the old chunk stored in the local storage
     * @returns {object} old chunk data from the local storage
     */
    r(this, "getOldChunk", () => {
      u.debug(
        "Datamanager : Getting the old session chunk details form the storage"
      );
      const e = this.storage.get(fe);
      let t;
      const i = be(e);
      if (i === null)
        try {
          t = JSON.parse(G(this._siteId, e));
        } catch (n) {
          t = null, u.debug("Datamanager : Old chunk not found in storage", n);
        }
      else
        t = i;
      return t ?? [];
    });
    /**
     * @function removeOldChunk
     * @description Removes the old chunk from the local storage
     */
    r(this, "removeOldChunk", () => {
      u.debug(
        "Datamanager : Removing the old session chunk details form the storage"
      ), this.storage.remove(fe);
    });
    /**
     * @function          getOldChunkDetails
     * @description       Returns the old chunk details from the local storage.
     * @returns {object}  old chunk details
     */
    r(this, "getOldChunkDetails", () => this.getItem(pe, !0));
    /**
     * @function        persistOldChunkDetails
     * @description     Persists the old chunk details to the local storage.
     * @param {object}  data
     */
    r(this, "persistOldChunkDetails", (e) => {
      u.debug(
        "Datamanager : Persisting the old session chunk details to the storage"
      ), this.storage.set(
        pe,
        L(this._siteId, JSON.stringify(e))
      );
    });
    /**
     * @function removeOldChunkDetails
     * @description Removes the old session chunk details key and its value from the local storage
     */
    r(this, "removeOldChunkDetails", () => {
      u.debug(
        "Datamanager : Removing the old session chunk details form the storage"
      ), this.storage.remove(pe);
    });
    /**
     * @function getSessionsChunkNumberMap
     * @description Returns the chunk number map by getting it from the local storage.
     * @returns {object} Chunk number map
     */
    r(this, "getSessionsChunkNumberMap", () => {
      u.debug("Datamanager : Getting the session chunknumber map");
      let e = this.getItem(Fe, !0);
      return g(e) || (e = {}), e;
    });
    /**
     * @function        persistSessionsChunkNumberMap
     * @description     Persists the chunk number map to the local storage.
     * @param {object}  chunkNumberMap
     */
    r(this, "persistSessionsChunkNumberMap", (e) => {
      u.debug("Datamanager : Persisting the new session chunknumber map");
      const t = L(this._siteId, JSON.stringify(e));
      this.persist(Fe, t);
    });
    /**
     * @function        getNewChunk
     * @description     This returns either complete new session and new chunk or old session with new chunk
     * @param {number}  sdkStartTime
     * @param {number}  sessionStartTime
     * @param {string}  newSessionId
     * @param {number}  idleTimeout
     */
    r(this, "getNewChunk", (e = Date.now(), t = Date.now(), i, n = 3600) => {
      u.debug("Datamanager : Creating a new chunk");
      let o = !1;
      const c = Number(this.storage.get(ne)) || 0, a = Date.now(), l = Math.round(
        j(a - c)
      ), h = this.getCurrentChunk();
      (l > n || ct(h)) && (o = !0);
      let d;
      if (o)
        u.debug("Datamanager : This is a new session. Creating a new chunk"), d = fs(e, t, i);
      else {
        u.debug(
          "Datamanager : This is an old session. Updating the existing chunk"
        );
        const {
          chunk_meta: { number: p },
          session_info: { id: O }
        } = h, S = p + 1;
        d = { ...h }, d.chunk_meta = {
          ...d.chunk_meta,
          number: S,
          id: O + ":" + S,
          reporting_times: [Date.now()]
        }, d.chunk_details = {
          ...$e
        };
      }
      return {
        is_new_session: o,
        chunk: d
      };
    });
    /**
     * @function    clearCurrentChunk
     * @description Clears the current chunk from the local storage
     */
    r(this, "clearCurrentChunk", () => {
      u.debug("Datamanager : Current chunk removed from storage"), this.storage.remove(_e);
    });
    /**
     * @function persistCurrentChunk
     * @description Persists the current chunk into the local storage
     * @param {object} chunk
     */
    r(this, "persistCurrentChunk", (e) => {
      u.debug("Datamanager : Persisting the Current chunk to storage"), ts(e), this.storage.set(
        _e,
        L(this._siteId, JSON.stringify(e))
      );
    });
    r(this, "getCurrentChunk", () => this.getItem(_e, !0));
    this._siteId = e, this.storage = new le("localStorage"), this.sessionStorage = new le("sessionStorage"), u.debug("DataManager : Initialized");
  }
  getltCount(e) {
    try {
      const t = this.storage.get(re);
      if (t) {
        const i = G(this._siteId, t), n = JSON.parse(i), o = e.replace("'", "").replace("’", "");
        return n[o];
      }
    } catch (t) {
      u.error(
        "Datamanager : Error gettting the LT Count for the event -" + e,
        t
      );
    }
    return 0;
  }
  /**
   * @function updateRetainedDayCount
   * @description Re-calculates the retention day count and persists it to localstorage
   * @param {number} startTime
   */
  updateRetainedDayCount(e) {
    u.debug("Datamanager : Re-calculating and updating the retention day");
    const t = this.getItem(ge), i = Math.abs(t - e) / 36e5, n = Math.floor(i / 24);
    this.persist(Vt, n);
  }
}
class ms {
  constructor() {
    r(this, "_listeners");
    r(this, "notifyListeners", (e, t) => {
      if (!this._listeners[e])
        return;
      const i = this._listeners[e];
      for (let n = 0; n < i.length; n++) {
        const o = i[n];
        o(t);
      }
    });
    /**
     * Register a callback for given event type
     *
     * @param type
     * @param callback
     */
    r(this, "registerForEvent", (e, t) => {
      if (!v(t))
        return;
      let i;
      this._listeners[e] ? i = this._listeners[e] : i = [], i.push(t), this._listeners[e] = i;
    });
    /**
     * Unregisters the callback for the given event type
     * @param type
     * @param callback
     */
    r(this, "unregisterFromEvent", (e, t) => {
      if (this._listeners[e]) {
        const i = this._listeners[e], n = [];
        for (let o = 0; o < i.length; o++) {
          const c = i[o];
          c !== t && n.push(c);
        }
        this._listeners[e] = n;
      }
    });
    r(this, "tearDown", () => {
      this._listeners = {};
    });
    this._listeners = {};
  }
}
class vs {
  constructor(e = 0) {
    r(this, "_lastBackgroundTime", -1);
    r(this, "_totalBackgroundTime", 0);
    r(this, "getTotalBackgroundTime", () => this._totalBackgroundTime);
    r(this, "getLastBackgroundTime", () => this._lastBackgroundTime);
    r(this, "reset", () => {
      this._lastBackgroundTime = -1, this._totalBackgroundTime = 0;
    });
    r(this, "_onSystemEvent", (e) => {
      if (e.name === _t) {
        if (this._lastBackgroundTime !== -1) {
          const i = Math.round(
            j(Date.now() - this._lastBackgroundTime)
          );
          this._totalBackgroundTime += i;
          const n = T.getInstance().getFromStorage(W);
          if (g(n) && T.getInstance().getSessionId() !== n) {
            T.getInstance().createANewChunk();
            const { total_duration: o, duration: c } = T.getInstance().getSessionInfo();
            this._totalBackgroundTime = o > c ? o - c : 0;
          }
        }
      } else
        this._lastBackgroundTime = Date.now(), T.getInstance().persistToStorage(
          Ue,
          this._lastBackgroundTime
        );
    });
    T.getInstance().registerForEvent(Ce, this._onSystemEvent), this._totalBackgroundTime = e, T.getInstance().persistToStorage(
      Ue,
      this._lastBackgroundTime
    );
  }
}
const Ne = "visibilitychange", Ss = ["scroll", "touchmove"];
class ot {
  constructor(e = !0) {
    r(this, "_isFirst");
    r(this, "_lastBackgroundTime");
    r(this, "_handlers");
    r(this, "_scrollEvents");
    r(this, "_scrollData");
    r(this, "listenSystemEvents", () => {
      u.debug("Registering for System Event ", Ne);
      const e = () => {
        const t = T.getInstance(), i = t.getSDKRunningTimeInSec(), n = window.document.visibilityState === Be, o = St(
          window.document.visibilityState,
          i
        );
        if (n ? (t.setBlockChunkReportingFlag(!1), this._lastBackgroundTime > -1 && (t.sendOldChunk(() => {
          t.dispatchEvent(Ce, o);
        }), o.background_time = F(
          j(Date.now() - this._lastBackgroundTime)
        ))) : (t.setBlockChunkReportingFlag(!0), t.reportChunkOnVisibilityChange(), this._lastBackgroundTime = Date.now(), t.dispatchEvent(Ce, o)), n) {
          const c = t.getUserAttributes().apx_browser;
          !this._isFirst || c && c.indexOf("Mobile Safari") !== -1 && c.indexOf("Safari") !== -1 || (this._isFirst = !1);
        } else
          t.clearNavigation();
      };
      ss(document, Ne, e), this._handlers.push(this._newHandler(Ne, e));
    });
    /**
     * Unregisters for all auto track events
     */
    r(this, "unregisterEvents", () => {
      this._handlers.forEach(({ type: e, handler: t }) => {
        u.debug("Unregistering from event type ", e), Ss.includes(e) ? et(window.document, e, t) : et(document, e, t);
      }), this._handlers = [], this._scrollEvents = [], this._scrollData = {};
    });
    /**
     * Gives the final scroll events, calculated from listened events
     * @returns {Array}
     */
    r(this, "getScrollEvents", () => []);
    r(this, "_newHandler", (e, t) => ({ type: e, handler: t }));
    this._lastBackgroundTime = -1, this._handlers = [], this._scrollEvents = [], this._scrollData = {}, this._isFirst = e, this.listenSystemEvents();
  }
}
class Cs {
  /**
   * @param window - The window object, typically containing XMLHttpRequest and fetch
   */
  constructor(e = {}) {
    r(this, "window");
    /**
     * Sends a POST request using XMLHttpRequest.
     * @param url - The URL to which the request is sent.
     * @param data - The data to send to the server.
     * @param callback - The callback to handle the response.
     * @param headers - Optional headers to include in the request.
     * @param sync - If true, sends the request synchronously.
     */
    r(this, "post", (e, t = {}, i, n = {}, o = !0) => {
      const { XMLHttpRequest: c } = this.window;
      u.debug("Request : POST request with data"), c ? this._makeXmlHttpRequest(e, t, i, n, o) : (u.error("Request : Unknown browser"), i(403, "Unknown")), u.debug("Request : Sent request to server");
    });
    /**
     * Sends a GET request using fetch or XMLHttpRequest.
     * @param url - The URL to which the request is sent.
     * @param callback - The callback to handle the response.
     */
    r(this, "get", (e, t) => {
      const { fetch: i, XMLHttpRequest: n } = this.window;
      if (i)
        i(e).then((o) => {
          try {
            if (o.ok)
              return o.json();
          } catch (c) {
            u.debug(`Request : Error while parsing the response ${c}`);
          }
          return null;
        }).then((o) => {
          g(o) ? t(200, o) : (u.error(
            `Request : API request failed. ${JSON.stringify(o)}`
          ), t(500, {}));
        }).catch((o) => {
          u.error(`Request : API request failed. ${o}`), t(500, o);
        });
      else if (n) {
        const o = new n();
        o.open("GET", e, !0), o.onreadystatechange = function() {
          o.readyState === 4 && t(o.status, o.responseText);
        }, o.send();
      } else
        u.error("Request : Unknown browser"), t(403, "Unknown");
      u.debug("Request : Sent request to server");
    });
    /**
     * Makes an XMLHttpRequest POST request.
     * @param url - The URL to which the request is sent.
     * @param data - The data to send to the server.
     * @param callback - The callback to handle the response.
     * @param headers - Optional headers to include in the request.
     * @param sync - If true, sends the request synchronously.
     * @private
     */
    r(this, "_makeXmlHttpRequest", (e, t, i, n, o) => {
      const c = new XMLHttpRequest();
      c.onerror = (a) => {
        u.error(`Request : API request failed. ${a}`), i(500, null);
      }, c.open("POST", e, o), c.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), Object.entries(n).forEach(([a, l]) => {
        c.setRequestHeader(a, l);
      }), c.onreadystatechange = () => {
        if (c.readyState === 4) {
          let a = c.responseText;
          const l = a.match(
            /Failed to execute 'send' on 'XMLHttpRequest'/
          );
          if (!ve(l) && !me(l) && !ve(l[0]) && !me(l[0]) && l[0] === "Failed to execute 'send' on 'XMLHttpRequest'") {
            this._makeXmlHttpRequest(e, t, i, n, !0);
            return;
          }
          try {
            a = JSON.parse(a);
          } catch (h) {
            u.debug(`Request : Error while parsing the response ${h}`);
          }
          i(c.status, a);
        }
      };
      try {
        c.send(JSON.stringify(t));
      } catch (a) {
        u.error(`Request : API request failed. ${a}`), i(500, a);
      }
    });
    this.window = e;
  }
}
const Is = "/chunks?appId=<app-id>&isTestDevice=<test-device>", bs = "/config/<app-id>/web", Es = "/sdk/<app-id>/enabled-status?platform=web&version=" + Re, ws = "/user?appId=<app-id>", ce = (s, e) => Ee.API_ROOT + "/v2/api/" + s.replace("<app-id>", e), we = class we {
  constructor(e, t = {}, i = "") {
    r(this, "request");
    r(this, "configAPI");
    r(this, "chunksAPI");
    r(this, "sdkEnabledStatusAPI");
    r(this, "userInfoAPI");
    r(this, "_callback", (e = () => null, t = () => null) => (i, n) => {
      u.debug(`XHR Response: [${i}]`), i < 400 ? n && n[Mt] === xt ? n[Ye] ? e(n[Ye]) : e(n) : i === 200 ? e(n) : t(i) : t && v(t) && t(i);
    });
    r(this, "checkIfSDKEnabled", (e, t) => {
      this.makeGetRequest(this.sdkEnabledStatusAPI, e, t);
    });
    r(this, "getConfig", (e, t) => {
      this.makeGetRequest(this.configAPI, e, t);
    });
    r(this, "postUserInfo", (e, t, i) => {
      this.request.post(
        this.userInfoAPI,
        e,
        this._callback(t, i),
        {}
      );
    });
    r(this, "postChunk", (e, t, i, n = !0) => {
      u.debug("Posting chunk"), this.request.post(
        this.chunksAPI,
        e,
        this._callback(t, i),
        {},
        n
      );
    });
    r(this, "makeGetRequest", (e, t, i) => {
      this.request.get(e, this._callback(t, i));
    });
    r(this, "makePostRequest", (e, t, i, n, o) => {
      this.request.post(e, t, this._callback(n, o), i);
    });
    we.API_ROOT = i, this.request = new Cs(t), this.configAPI = ce(bs, e), this.chunksAPI = ce(Is, e), this.chunksAPI = this.chunksAPI.replace(
      "<test-device>",
      T.getInstance().isTestDevice().toString()
    ), this.sdkEnabledStatusAPI = ce(Es, e), this.userInfoAPI = ce(ws, e);
  }
};
r(we, "API_ROOT");
let Ee = we;
function V(s, e) {
  const t = (s & 65535) + (e & 65535);
  return (s >> 16) + (e >> 16) + (t >> 16) << 16 | t & 65535;
}
function ks(s, e) {
  return s << e | s >>> 32 - e;
}
function ke(s, e, t, i, n, o) {
  return V(ks(V(V(e, s), V(i, o)), n), t);
}
function C(s, e, t, i, n, o, c) {
  return ke(e & t | ~e & i, s, e, n, o, c);
}
function I(s, e, t, i, n, o, c) {
  return ke(e & i | t & ~i, s, e, n, o, c);
}
function b(s, e, t, i, n, o, c) {
  return ke(e ^ t ^ i, s, e, n, o, c);
}
function E(s, e, t, i, n, o, c) {
  return ke(t ^ (e | ~i), s, e, n, o, c);
}
function As(s, e) {
  s[e >> 5] |= 128 << e % 32, s[(e + 64 >>> 9 << 4) + 14] = e;
  let t, i, n, o, c, a = 1732584193, l = -271733879, h = -1732584194, d = 271733878;
  for (t = 0; t < s.length; t += 16)
    i = a, n = l, o = h, c = d, a = C(a, l, h, d, s[t], 7, -680876936), d = C(d, a, l, h, s[t + 1], 12, -389564586), h = C(h, d, a, l, s[t + 2], 17, 606105819), l = C(l, h, d, a, s[t + 3], 22, -1044525330), a = C(a, l, h, d, s[t + 4], 7, -176418897), d = C(d, a, l, h, s[t + 5], 12, 1200080426), h = C(h, d, a, l, s[t + 6], 17, -1473231341), l = C(l, h, d, a, s[t + 7], 22, -45705983), a = C(a, l, h, d, s[t + 8], 7, 1770035416), d = C(d, a, l, h, s[t + 9], 12, -1958414417), h = C(h, d, a, l, s[t + 10], 17, -42063), l = C(l, h, d, a, s[t + 11], 22, -1990404162), a = C(a, l, h, d, s[t + 12], 7, 1804603682), d = C(d, a, l, h, s[t + 13], 12, -40341101), h = C(h, d, a, l, s[t + 14], 17, -1502002290), l = C(l, h, d, a, s[t + 15], 22, 1236535329), a = I(a, l, h, d, s[t + 1], 5, -165796510), d = I(d, a, l, h, s[t + 6], 9, -1069501632), h = I(h, d, a, l, s[t + 11], 14, 643717713), l = I(l, h, d, a, s[t], 20, -373897302), a = I(a, l, h, d, s[t + 5], 5, -701558691), d = I(d, a, l, h, s[t + 10], 9, 38016083), h = I(h, d, a, l, s[t + 15], 14, -660478335), l = I(l, h, d, a, s[t + 4], 20, -405537848), a = I(a, l, h, d, s[t + 9], 5, 568446438), d = I(d, a, l, h, s[t + 14], 9, -1019803690), h = I(h, d, a, l, s[t + 3], 14, -187363961), l = I(l, h, d, a, s[t + 8], 20, 1163531501), a = I(a, l, h, d, s[t + 13], 5, -1444681467), d = I(d, a, l, h, s[t + 2], 9, -51403784), h = I(h, d, a, l, s[t + 7], 14, 1735328473), l = I(l, h, d, a, s[t + 12], 20, -1926607734), a = b(a, l, h, d, s[t + 5], 4, -378558), d = b(d, a, l, h, s[t + 8], 11, -2022574463), h = b(h, d, a, l, s[t + 11], 16, 1839030562), l = b(l, h, d, a, s[t + 14], 23, -35309556), a = b(a, l, h, d, s[t + 1], 4, -1530992060), d = b(d, a, l, h, s[t + 4], 11, 1272893353), h = b(h, d, a, l, s[t + 7], 16, -155497632), l = b(l, h, d, a, s[t + 10], 23, -1094730640), a = b(a, l, h, d, s[t + 13], 4, 681279174), d = b(d, a, l, h, s[t], 11, -358537222), h = b(h, d, a, l, s[t + 3], 16, -722521979), l = b(l, h, d, a, s[t + 6], 23, 76029189), a = b(a, l, h, d, s[t + 9], 4, -640364487), d = b(d, a, l, h, s[t + 12], 11, -421815835), h = b(h, d, a, l, s[t + 15], 16, 530742520), l = b(l, h, d, a, s[t + 2], 23, -995338651), a = E(a, l, h, d, s[t], 6, -198630844), d = E(d, a, l, h, s[t + 7], 10, 1126891415), h = E(h, d, a, l, s[t + 14], 15, -1416354905), l = E(l, h, d, a, s[t + 5], 21, -57434055), a = E(a, l, h, d, s[t + 12], 6, 1700485571), d = E(d, a, l, h, s[t + 3], 10, -1894986606), h = E(h, d, a, l, s[t + 10], 15, -1051523), l = E(l, h, d, a, s[t + 1], 21, -2054922799), a = E(a, l, h, d, s[t + 8], 6, 1873313359), d = E(d, a, l, h, s[t + 15], 10, -30611744), h = E(h, d, a, l, s[t + 6], 15, -1560198380), l = E(l, h, d, a, s[t + 13], 21, 1309151649), a = E(a, l, h, d, s[t + 4], 6, -145523070), d = E(d, a, l, h, s[t + 11], 10, -1120210379), h = E(h, d, a, l, s[t + 2], 15, 718787259), l = E(l, h, d, a, s[t + 9], 21, -343485551), a = V(a, i), l = V(l, n), h = V(h, o), d = V(d, c);
  return [a, l, h, d];
}
function Ds(s) {
  let e, t = "";
  const i = s.length * 32;
  for (e = 0; e < i; e += 8)
    t += String.fromCharCode(s[e >> 5] >>> e % 32 & 255);
  return t;
}
function Ts(s) {
  let e;
  const t = [];
  for (t[(s.length >> 2) - 1] = void 0, e = 0; e < t.length; e += 1)
    t[e] = 0;
  const i = s.length * 8;
  for (e = 0; e < i; e += 8)
    t[e >> 5] |= (s.charCodeAt(e / 8) & 255) << e % 32;
  return t;
}
function Os(s) {
  return Ds(As(Ts(s), s.length * 8));
}
function Ns(s) {
  const e = "0123456789abcdef";
  let t = "", i, n;
  for (n = 0; n < s.length; n += 1)
    i = s.charCodeAt(n), t += e.charAt(i >>> 4 & 15) + e.charAt(i & 15);
  return t;
}
function ys(s) {
  return unescape(encodeURIComponent(s));
}
function Ps(s) {
  return Os(ys(s));
}
function Ms(s) {
  return Ns(Ps(s));
}
const at = (s, e, t) => Ms(s), A = (s = "") => () => {
  u.error(`${s}: Apxor SDK not initialised.`);
}, D = {
  reportChunkOnVisibilityChange: A("reportChunkOnVisibilityChange"),
  logAppEvent: A("logAppEvent"),
  logClientEvent: A("logClientEvent"),
  logPageView: A("logPageView"),
  setUserId: A("setUserId"),
  setUserProperties: A("setUserProperties"),
  setSessionProperties: A("setSessionProperties"),
  setAppVersion: A("setAppVersion"),
  getClientId: A("getClientId"),
  getSessionId: A("getSessionId"),
  startSession: A("startSession"),
  endSession: A("endSession"),
  setInitFlag: A("setInitFlag")
}, x = class x {
  constructor() {
    r(this, "_isInitialized", !1);
    r(this, "_appInfo", {});
    r(this, "_deviceInfo", {});
    r(this, "_sdkInfo", {});
    r(this, "_sessionInfo", {});
    r(this, "_userAttributes", {});
    r(this, "_sessionAttributes", {});
    r(this, "_chunkDetails", {});
    r(this, "_chunkNumber", 1);
    r(this, "_currentNavigation", null);
    r(this, "_isRunning", !1);
    r(this, "_isEventMonitorRegistered", !1);
    r(this, "_dataManager", {});
    r(this, "_customEventListener", null);
    r(this, "_systemEventMonitor", {});
    r(this, "_sessionHandler", {});
    r(this, "_idleTimeout", 3600);
    r(this, "_maxEventsSentCount", 20);
    r(this, "_chunkSendInterval", -1);
    r(this, "_internalChunkSendInterval", 2e4);
    // For every 20 seconds chunk will be sent
    r(this, "_chunk502RetryTime", -1);
    r(this, "_maxSessionsInStorage", 10);
    r(this, "_isSending", !1);
    r(this, "_isFirstSession", !1);
    r(this, "_last502Time", -1);
    // This is an internal field, doesn't depend on the config that customers can pass
    r(this, "_batchEvents", !1);
    // This is a flag that can be passed by customers to upload events in bulk.
    // It's a RECOMMENDED flag for every customer
    r(this, "_bulkUpload", !0);
    // In-memory store for client events
    r(this, "clientEvents", []);
    // List of events either to be stopped or to be converted to client events
    r(this, "_stopEventsFromConfig", []);
    r(this, "_clientEventsFromConfig", []);
    r(this, "_appEventsFromConfig", []);
    r(this, "_data", {});
    r(this, "_sessionCount", 0);
    r(this, "_redirectionHandler", null);
    r(this, "_sendChunkOnEventsId", null);
    r(this, "_sendChunkOnETAId", null);
    r(this, "_blockChunkReporting", !1);
    r(this, "_SDKStartedAfterPluginInit", !1);
    r(this, "_eventsLogged", {});
    r(this, "initWaitTime", 1500);
    r(this, "version", "");
    r(this, "_deviceId", "");
    r(this, "_configHash", "");
    r(this, "sessionStartTime", 0);
    r(this, "sessionId", "");
    r(this, "_ltCountObj", {});
    r(this, "_pendingChunk", !1);
    r(this, "window", window);
    r(this, "startTime", 0);
    r(this, "siteId", "");
    r(this, "clientConfig", {
      api_root: ""
    });
    r(this, "_api", {});
    r(this, "_eventHandler", {});
    r(this, "config", {});
    r(this, "newSession");
    r(this, "initialize", (e, t, i, n, o, c) => {
      if (this._isInitialized)
        return;
      const a = () => {
        u.debug("Controller : Wait for browser storage completed."), this._initializeStateVariables(e, t, i, n), this._setConfig(), this._initializeFieldsFromConfig(), this._checkEnableStatusInConfig(l, c);
      }, l = () => {
        u.debug("Controller : On Site enabled in config"), this._getConfigHash(h, c);
      }, h = (S) => {
        this._configHash = S, u.debug("Controller : On config hash fetch"), this._waitForResourceLoad(d);
      }, d = () => {
        u.info("Controller : Waiting for resources completed"), this._initializeLTCount(), this._updateAppInfo(), this._deviceId = this._getDeviceId(), this._setDeviceInfo(), this._setDefaultUserProperties(), this._postUserInfo(), this._mergeStoredAndDefaultUserAttributes(), this._getStoredListOfEventsLogged(), this._setDefaultSessionProperties(), this._setInitialSessionState(), this._reinitialiseChunkDetails(), this._downloadConfig(this._configHash);
        const S = this._getTotalBackgroundTime();
        this._sessionHandler = new vs(S), this._registerSystemEventMonitor(), this.sendOldChunk(p);
      }, p = () => {
        this._isRunning = !0, this._isInitialized = !0;
        const S = this.createANewChunk();
        this._dataManager.persistCurrentChunk(S), O();
      }, O = () => {
        this._dispatchSystemEvent(this.window.document.visibilityState), this.newSession && (this.sessionStartTime = Date.now(), this.logAppEvent(Ft, {
          time: Ie(/* @__PURE__ */ new Date())
        })), this.logPageView(this.window.location.pathname), this._sendChunkWithAtleastOneEvent(), this._registerIntervalBasedChunkReporting(), o();
      };
      this._waitForBrowserStorage(a);
    });
    r(this, "_initializeStateVariables", (e, t, i, n) => {
      u.debug("Controller : Initializing the state variables"), this.window = n, this.startTime = t, this.siteId = e, this.clientConfig = i || {}, this.initWaitTime = this.clientConfig.sdk_init_wait ? this.clientConfig.sdk_init_wait * 1e3 : 2e3, this._dataManager = new ps(this.siteId), this._api = new Ee(this.siteId, this.window, this.clientConfig.api_root), this._eventHandler = new ms(), this._sdkInfo = Ct(this.startTime), this.sessionStartTime = parseInt(
        this._dataManager.getItemOrDefault(Te, t)
      ), u.debug(`Controller : session start time is ${this.sessionStartTime}`), u.debug(`Controller : SDK start time is ${this.startTime}`), this.sessionId = this.getFromStorage(W);
    });
    r(this, "_setConfig", () => {
      u.debug("Controller : Setting the config");
      const e = this._dataManager.getExistingConfig();
      this._mergeConfigWithClientConfig(e);
    });
    r(this, "_mergeConfigWithClientConfig", (e) => {
      this.config = { ...e, ...this.clientConfig }, u.debug("Controller : New config and client configs Configs merged");
    });
    r(this, "_initializeFieldsFromConfig", () => {
      const {
        version: e = "",
        bulk_upload: t = !0,
        events_upload_time: i = 0,
        idle_time_out: n = 1800,
        events: o = {},
        max_chunk_event_count: c = 20,
        retry_time: a,
        max_sessions_in_storage: l = -1
      } = this.config;
      this.version = this._validateAndGetAppVersion(e), this._bulkUpload = t, this._batchEvents = i > 0, this._idleTimeout = k(n) ? n : 1800, this._stopEventsFromConfig = o.stop ?? [], this._clientEventsFromConfig = o.action ?? [], this._appEventsFromConfig = o.app ?? [], this._maxEventsSentCount = g(c) && k(c) ? c : 20, this._chunkSendInterval = g(i) && k(i) && i >= 1e3 ? i : -1, this._chunk502RetryTime = g(a) && k(a) && a >= 1e3 ? a : -1, this._maxSessionsInStorage = k(l) && l > 0 ? l : -1;
    });
    r(this, "_validateAndGetAppVersion", (e) => {
      let t;
      if (g(e))
        t = e, this._dataManager.persistAppVersion(t);
      else {
        const i = this._dataManager.getAppVersion();
        g(i) ? t = i : t = "";
      }
      return t;
    });
    r(this, "_checkEnableStatusInConfig", (e, t) => {
      if (u.debug("Controller : Checking if the Site is enabled existing config"), !this.config.enable) {
        u.debug("Controller : Site is disabled. Can't initialise"), this._downloadConfig(""), this._postUserInfo(), t();
        return;
      }
      e();
    });
    r(this, "_getConfigHash", (e, t) => {
      const i = this._dataManager.getExistingConfig(), n = this._dataManager.getItemOrDefault(
        Me,
        -1
      ), { ed_t_time: o = 0 } = i;
      if (o > 0 && n > 0) {
        const c = Math.abs(n - Date.now()), a = o * 60 * 1e3;
        if (c < a) {
          if (u.debug("Controller : Reinitializing with in the throttling time."), !this._dataManager.getItemOrDefault(
            xe,
            !0
          )) {
            u.debug(
              "Controller : Site is not enabled from the last update. Can't initalise now. Recheck will happen after throttling time"
            ), t();
            return;
          }
          const h = this._dataManager.getItemOrDefault(de, "");
          e(h);
          return;
        }
      }
      this._checkEnableStatusFromServer(e, t);
    });
    r(this, "_checkEnableStatusFromServer", (e, t) => {
      u.debug("Controller : Getting the site enabled status from the server"), this.persistToStorage(Me, Date.now()), this._api.checkIfSDKEnabled(
        (i) => {
          const { enabled: n, hash: o } = i;
          this.persistToStorage(xe, n), n ? (u.debug("Controller : Site is enabled"), e(o)) : (u.debug(
            "Controller : Site is disabled. Can't initialise the SDK"
          ), this._isInitialized = !1, this._isRunning = !1, this._stopSDK(), t());
        },
        (i) => {
          u.error(`Controller : enabled-status API failed ${i}`);
        }
      );
    });
    r(this, "_stopSDK", () => {
      var e, t;
      u.debug("Controller: Stopping the SDK");
      try {
        this._isRunning = !1, this._isInitialized = !1, this._isSending = !1, (e = this._eventHandler) == null || e.tearDown(), (t = this._systemEventMonitor) == null || t.unregisterEvents();
      } catch (i) {
        u.error(`Controller : Failed to stop the SDK ${i}`);
      }
    });
    r(this, "_waitForResourceLoad", (e) => {
      u.debug(
        `Controller: Waiting ${this.initWaitTime}ms for all the resource loading to finish`
      ), setTimeout(() => {
        e();
      }, this.initWaitTime);
    });
    r(this, "_initializeLTCount", () => {
      u.debug("Controller : Initializing the LT Count ");
      try {
        const e = this.getFromStorage(re);
        if (e)
          this._ltCountObj = JSON.parse(
            new TextDecoder().decode(
              Qt(G(this.siteId, e))
            )
          );
        else {
          this._ltCountObj = {};
          const t = L(
            this.siteId,
            Ze(
              new TextEncoder().encode(JSON.stringify(this._ltCountObj))
            )
          );
          this.persistToStorage(re, t ?? "");
        }
      } catch (e) {
        u.error(`Controller : LT Count object parsing failed ${e}`);
      }
    });
    r(this, "_updateAppInfo", () => {
      u.debug("Controller : Updating the App info");
      const { name: e = "", domain: t = this.window.location.host } = this.config, i = this._dataManager.getInstallationTime(
        this.startTime
      ), n = es(this.window), o = g(this.clientConfig.version) ? "" + this.clientConfig.version : this._dataManager.getAppVersion();
      let c = e;
      e === "" && (c = Qe(this.window), c === "Unknown" && (c = "")), this._appInfo = ds(
        c,
        t,
        i,
        n,
        o
      );
    });
    r(this, "_getDeviceId", () => {
      let e = this._dataManager.getUserId();
      if (!g(e)) {
        u.debug("Controller : Device id not found in localstorage");
        const { client_id: t } = this.config;
        g(t) && t !== "" ? (u.debug("Controller : client id from clientconfig is the deviceid"), e = t ?? "") : (u.debug(
          "Controller : Generated a new device id. This is a new device now"
        ), e = Oe()), this._setNewUserFlags(e);
      }
      return u.debug(`Controller : Device id is ${e}`), this._deviceId = e, e;
    });
    r(this, "_setNewUserFlags", (e) => {
      this._dataManager.clearStorage(), this._dataManager.persistUserId(e), this._dataManager.persistInstallationTime(Date.now()), this._sessionInfo = {
        ...this._sessionInfo,
        is_first_session: !0
      }, this._isFirstSession = !0;
    });
    r(this, "_setDeviceInfo", () => {
      const {
        hardware_model: e,
        os_version: t,
        browser_version: i,
        browser: n,
        dimensions: o,
        dpi: c,
        dimensions_in_pixels: a
      } = ft(this.window);
      this._deviceInfo = gs(
        this._deviceId,
        e,
        o,
        t,
        c,
        a,
        n,
        i
      );
    });
    r(this, "_setDefaultUserProperties", () => {
      u.debug("Controller : Setting the default User attributes");
      const e = { ...this._deviceInfo }, t = tt(this.window, e);
      this._userAttributes = {
        ...this._userAttributes,
        ...t
      };
    });
    r(this, "_postUserInfo", () => {
      u.debug("Controller : Posting user info");
      const { sdk_version: e } = this._sdkInfo, t = {
        sdk_version: JSON.stringify(e),
        app_info: this._appInfo,
        device_info: this._deviceInfo,
        user_attributes: this._userAttributes
      }, i = at(JSON.stringify(t)), n = this._dataManager.getItemOrDefault(Ge, "");
      if (i === n) {
        u.debug("Controller : No need to post user info. No change in it");
        return;
      }
      this._api.postUserInfo(t, () => {
        u.debug(
          "Controller : Posted user info. Persisting the hash to localstorage"
        ), this.persistToStorage(Ge, i);
      });
    });
    r(this, "_mergeStoredAndDefaultUserAttributes", () => {
      u.debug("Controller : Merging the stored and default user attributes");
      const e = this.getFromStorage(ie, !0);
      if (g(e)) {
        let t = be(e);
        if (t === null)
          try {
            t = JSON.parse(G(this.siteId, e));
          } catch (i) {
            u.debug(
              `Controller : ${ie} - value not found in storage`,
              i
            ), t = {};
          }
        this._userAttributes = {
          ...t ?? {},
          ...this._userAttributes
        };
      }
    });
    r(this, "_getStoredListOfEventsLogged", () => {
      const e = this.getFromStorage(De, !0);
      if (g(e)) {
        let t = be(e);
        if (t === null)
          try {
            t = JSON.parse(
              G(this.siteId, e)
            );
          } catch (i) {
            u.debug(
              `Controller : ${De} - value not found in storage`,
              i
            ), t = {};
          }
        this._eventsLogged = {
          ...t ?? {}
        };
      }
    });
    r(this, "_setDefaultSessionProperties", () => {
      u.debug("Controller : Setting the default session attributes");
      const e = st(this.window);
      this._sessionAttributes = {
        ...this._sessionAttributes,
        ...e
      };
    });
    r(this, "_setInitialSessionState", () => {
      u.debug(
        `Controller : Setting the session state for session if ${this.sessionId}`
      ), this.sessionId || (this.newSession = !0, this.sessionId = Oe(), this.persistToStorage(W, this.sessionId), this.persistToStorage(Te, this.sessionStartTime));
    });
    r(this, "_reinitialiseChunkDetails", () => {
      this._chunkDetails = {
        ...$e,
        user_attributes: {
          ...this._userAttributes
        },
        session_attributes: {
          ...this._sessionAttributes
        }
      }, this._dataManager.persistOldChunkDetails(this._chunkDetails);
    });
    r(this, "_downloadConfig", (e) => {
      if (u.debug("Controller : Fetch a new config"), !this._canFetchConfig(e)) {
        u.debug("Controller : No need to fetch config. No change in hash");
        return;
      }
      const t = this.config.sct_time ?? 0, i = this._dataManager.getItemOrDefault(
        Le,
        -1
      );
      if (t > 0 && i > 0 && Math.abs(Date.now() - i) < t) {
        u.debug(
          "Controller : No need to fetch config. Did not pass the throttle time"
        );
        return;
      }
      this.persistToStorage(Le, Date.now()), this._api.getConfig(
        (n) => {
          u.debug("Controller : New config fetched"), this._dataManager.persistConfig(n), this.persistToStorage(de, n.hash ?? at(n)), this._mergeConfigWithClientConfig(n), this._updateAppInfo();
        },
        (n) => {
          n !== 0 && u.error("Controller : Failed to fetch config");
        }
      );
    });
    r(this, "_canFetchConfig", (e) => e === "" ? !0 : this._dataManager.getItemOrDefault(de, "") !== e);
    r(this, "_getTotalBackgroundTime", () => {
      const { total_duration: e, duration: t } = this._sessionInfo;
      return e > t ? e - t : 0;
    });
    r(this, "_registerSystemEventMonitor", () => {
      u.debug("Registering a handler for the system events"), is(this.window, () => {
        this._isEventMonitorRegistered || (this._executeBeforeUnload(), this._systemEventMonitor = new ot(!1), this._isEventMonitorRegistered = !0);
      });
    });
    r(this, "_executeBeforeUnload", () => {
      let e = !1;
      ns(window, () => {
        if (u.debug("Controller : Executing before unload"), e || !this._isRunning)
          return;
        e = !0, window.document.visibilityState === Be && (this._endNavigation(!0), this._dispatchSystemEvent("hidden")), this._sendChunkOnEventsId !== null && clearInterval(this._sendChunkOnEventsId), this._sendChunkOnETAId !== null && clearInterval(this._sendChunkOnETAId), this._bulkUpload && this._dataManager.persistOldChunkDetails(this._chunkDetails), this._systemEventMonitor.unregisterEvents();
      });
    });
    r(this, "_endNavigation", (e = !1) => {
      u.debug("Controller : Ending the navigation"), typeof this._currentNavigation < "u" && this._currentNavigation && typeof this._currentNavigation.transition_time == "number" && (this._currentNavigation.duration = F(
        this.getSDKRunningTimeInSec() - this._currentNavigation.transition_time
      ), this.dispatchEvent(
        qt,
        {
          ...this._currentNavigation
        },
        e
      ));
    });
    r(this, "dispatchEvent", (e, t, i = !1, n = !1) => {
      this.isTestDevice() && (n = !0), u.debug(`Controller : Dispatching Event ${t.name}`), this._dataManager.updateRetainedDayCount(Date.now());
      let o = !1;
      const c = () => {
        const { app_events: h } = this._chunkDetails;
        switch (o && (t.time = this.getTimeElapsedInSession()), e) {
          case ee:
            this._chunkDetails = {
              ...this._chunkDetails,
              app_events: [...h, t]
            };
            break;
          case he:
            this.clientEvents.push(t), this.isTestDevice() && (this._chunkDetails = {
              ...this._chunkDetails,
              app_events: [...h, t]
            });
            break;
        }
        if (this._eventHandler.notifyListeners(e, t), o || e === he)
          return;
        this._chunkDetails = {
          ...this._chunkDetails,
          user_attributes: {
            ...this._userAttributes
          },
          session_attributes: {
            ...this._sessionAttributes
          }
        };
        const d = this._prepareChunk(this._chunkDetails);
        if (this._dataManager.persistOldChunkDetails(this._chunkDetails), this._dataManager.persistOldChunk(d), n === !0) {
          this._reportChunk(d, i);
          return;
        }
        if (this._bulkUpload) {
          if (h.length + 1 < this._maxEventsSentCount)
            return;
          this._reportChunk(d, i);
          return;
        }
        !i && e === ee && !this._batchEvents && this._reportChunk(d, i);
      }, a = () => {
        this.persistToStorage(ne, Date.now()), c();
      }, l = () => {
        o = !0, this.startNewSession(Date.now(), a);
      };
      if (e === ee) {
        const h = Date.now();
        let d = this.getFromStorage(ne);
        d = Number(d), k(d) && d > 0 && Math.round(j(h - d)) > this._idleTimeout ? this.endSession(!0, l) : (this.persistToStorage(ne, Date.now()), c());
      } else
        c();
    });
    r(this, "startNewSession", (e = Date.now(), t = () => {
    }, i = !1) => {
      if (!this._isInitialized && !i) {
        D.startSession();
        return;
      }
      if (this._isRunning) {
        t();
        return;
      }
      this.sessionId = Oe(), u.debug(`Controller : New session started with id ${this.sessionId}`), this.persistToStorage(W, this.sessionId), this._sessionCount = this.getFromStorage(je) ?? 0, this._sessionCount = Number(this._sessionCount) + 1, this.persistToStorage(je, this._sessionCount), this.sessionStartTime = e, this.persistToStorage(Te, this.sessionStartTime), this._sessionHandler.reset(), this.createNewChunkAndPersist(), this._systemEventMonitor = new ot(), this._isRunning = !0, t();
    });
    r(this, "createNewChunkAndPersist", () => {
      const e = this.createANewChunk();
      return this._dataManager.persistCurrentChunk(e), e;
    });
    r(this, "isTestDevice", () => {
      try {
        const e = this.getFromStorage("_apx_td", !0);
        return !!(g(e) && g(e.id));
      } catch (e) {
        return u.error("Datamanager : Error getting the test device info - " + e), !1;
      }
    });
    r(this, "getDeviceId", () => this._isInitialized ? this._isRunning ? this._deviceId : (u.warn("Controller : Apxor SDK is not running"), null) : (D.getClientId(), null));
    r(this, "endSession", (e = !1, t = () => {
    }) => {
      if (!this._isInitialized) {
        D.endSession();
        return;
      }
      if (!this._isRunning) {
        u.warn(
          "Apxor SDK is not running. Please make sure to call 'startSession'"
        );
        return;
      }
      e || this._endNavigation();
      const i = {
        ...this._chunkDetails,
        user_attributes: {
          ...this._userAttributes
        },
        session_attributes: {
          ...this._sessionAttributes
        }
      }, n = this._prepareChunk(i);
      this._dataManager.removeOldChunkDetails();
      const o = () => {
        this._dataManager.clearCurrentChunk(), this._sessionHandler.reset(), g(this._systemEventMonitor) && this._isEventMonitorRegistered && this._systemEventMonitor.unregisterEvents(), rs(window), this._isRunning = !1, t(), u.debug("Controller : Current session ended");
      };
      this._chunk502RetryTime > 0 && this._last502Time > 0 ? (this._dataManager.persistOldChunk(n), o()) : this._reportChunk(n, !1, o);
    });
    r(this, "_prepareChunk", (e = {}) => {
      u.debug("Controller : Preparing chunk"), this._updateDuration();
      const t = {
        id: this.sessionId + ":" + this._chunkNumber,
        number: this._chunkNumber,
        reporting_times: [Date.now()]
      };
      return e = {
        ...e,
        user_attributes: this._userAttributes,
        session_attributes: this._sessionAttributes
      }, {
        sdk_info: this._sdkInfo,
        session_info: this._sessionInfo,
        app_info: this._appInfo,
        device_info: this._deviceInfo,
        chunk_meta: t,
        chunk_details: e
      };
    });
    r(this, "_reportChunk", (e, t = !1, i = () => {
    }) => {
      if (u.debug("Controller : Reporting chunk"), this._isSending) {
        this._pendingChunk = !0;
        return;
      }
      if (this._isSending || this._chunk502RetryTime > 0 && this._last502Time !== -1 && Date.now() - this._last502Time < this._chunk502RetryTime) {
        this._reinitialiseChunkDetails();
        return;
      }
      const { chunk_details: n } = e, { app_events: o, system_events: c, navigation_events: a, user_events: l } = n;
      if (o.length < 1 && c.length < 1 && a.length < 1 && l.length < 1) {
        u.debug("Controller : Chunk not sent. No events in the chunk"), this._isSending = !1, i();
        return;
      }
      this._isSending = !0, this._updateChunkNumberMap(this._sessionInfo.id, this._chunkNumber + 1), this._dataManager.removeOldChunkDetails(), this._dataManager.removeOldChunk(), this._reinitialiseChunkDetails(), t ? (this._isSending = !1, this._dataManager.persistOldChunk(e), i()) : (this._dataManager.persistCurrentChunk(e), this._api.postChunk(
        e,
        () => {
          if (u.debug("Controller : Chunk successfully sent"), this._isSending = !1, this._last502Time = -1, i(), this._pendingChunk) {
            this._pendingChunk = !1;
            const h = this._prepareChunk(this._chunkDetails);
            this._reportChunk(h);
          }
        },
        (h) => {
          u.debug("Controller : Chunk sending failed"), h !== 0 && (this._isSending = !1, h >= 500 && (this._last502Time = Date.now()), h !== 413 && h !== 417 && this._dataManager.persistOldChunk(e), i());
        }
      ));
    });
    r(this, "_prepareAndReportChunk", () => {
      u.debug("Controller : Preparing and reporting chunk");
      const e = this._prepareChunk(this._chunkDetails);
      this._reportChunk(e, !1);
    });
    r(this, "_updateChunkNumberMap", (e, t) => {
      const i = this._dataManager.getSessionsChunkNumberMap();
      i[e] = t, this._dataManager.persistSessionsChunkNumberMap(i), this._chunkNumber = t;
    });
    r(this, "_updateDuration", () => {
      u.debug("Controller : Updating the foreground time");
      let e = this.getSDKRunningTimeInSec();
      const t = this._sessionHandler.getTotalBackgroundTime(), i = e;
      e -= t, this._sessionInfo = {
        ...this._sessionInfo,
        duration: F(e),
        total_duration: F(i)
      };
    });
    r(this, "sendOldChunk", (e = () => {
    }) => {
      var i, n, o, c, a, l;
      u.debug("Controller : Sending the old chunk to the server");
      let t = this._dataManager.getOldChunk();
      if (g(t)) {
        const h = { ...this._chunkDetails };
        if (this._chunkDetails = { ...t.chunk_details }, ((n = (i = this._chunkDetails) == null ? void 0 : i.app_events) == null ? void 0 : n.length) > 0 || this._addAndClearUnsentEvents(), !(((c = (o = this._chunkDetails) == null ? void 0 : o.app_events) == null ? void 0 : c.length) > 0)) {
          this._chunkDetails = { ...h }, e();
          return;
        }
        t = {
          ...t,
          chunk_details: { ...this._chunkDetails }
        };
        const d = ((a = t == null ? void 0 : t.session_info) == null ? void 0 : a.id) ?? "1", p = ((l = t == null ? void 0 : t.chunk_meta) == null ? void 0 : l.number) ?? 1;
        this._dataManager.persistCurrentChunk(t), this._api.postChunk(
          t,
          () => {
            this._updateChunkNumberMap(d, p + 1), u.debug("Controller : Old chunk reporting successful."), this._dataManager.removeOldChunk(), this._dataManager.removeOldChunkDetails(), this._reinitialiseChunkDetails(), this.createNewChunkAndPersist(), e();
          },
          () => {
            u.debug("Controller : Old chunk reporting failed."), e();
          }
        );
      } else
        e();
    });
    r(this, "_addAndClearUnsentEvents", () => {
      const e = this._dataManager.getOldChunkDetails();
      if (g(e)) {
        const t = e.app_events, i = e.navigation_events, n = e.system_events, o = e.user_events;
        this._chunkDetails.app_events = [
          ...this._chunkDetails.app_events || [],
          ...t
        ], this._chunkDetails.navigation_events = [
          ...this._chunkDetails.navigation_events || [],
          ...i
        ], this._chunkDetails.system_events = [
          ...this._chunkDetails.system_events || [],
          ...n
        ], this._chunkDetails.user_events = [
          ...this._chunkDetails.user_events || [],
          ...o
        ], this._dataManager.removeOldChunkDetails();
      }
    });
    r(this, "createANewChunk", () => {
      const e = g(this.config.name) ? this.config.name : "", t = g(this.config.domain) ? this.config.domain : "", i = this._dataManager.getNewChunk(
        this.startTime,
        this.sessionStartTime,
        this.sessionId,
        this._idleTimeout
      ), n = i.chunk, { session_info: o, app_info: c, sdk_info: a, chunk_details: l, chunk_meta: h } = n, { session_attributes: d, user_attributes: p } = l;
      return this._sessionInfo = {
        ...this._sessionInfo,
        ...o
      }, this._sessionInfo.is_first_session = this._isFirstSession, this._sdkInfo = a, this._appInfo = {
        ...c,
        app_name: e,
        bundle_id: t,
        app_version: "" + this.version
      }, this._chunkNumber = h.number, this._userAttributes = {
        ...this._userAttributes,
        ...p
      }, this._sessionAttributes = {
        ...this._sessionAttributes,
        ...d
      }, this._chunkDetails = l, this._addAndClearUnsentEvents(), this.newSession = i.is_new_session, this.newSession || this._setSessionIdFromChunk(n), {
        sdk_info: this._sdkInfo,
        session_info: this._sessionInfo,
        app_info: this._appInfo,
        device_info: this._deviceInfo,
        chunk_details: l,
        chunk_meta: h
      };
    });
    r(this, "_setSessionIdFromChunk", (e) => {
      const {
        session_info: { id: t }
      } = e;
      t && (this.sessionId = t, this.persistToStorage(W, this.sessionId));
    });
    r(this, "_dispatchSystemEvent", (e) => {
      u.debug("Controller : Dispatching SYSTEM_EVENT");
      const t = St(
        e,
        this.getTimeElapsedInSession()
      );
      this.dispatchEvent(Ce, t);
    });
    r(this, "logAppEvent", (e, t = {}, i = void 0, n = !1) => {
      var o, c;
      if (!this._isInitialized || !this._isRunning) {
        u.warn("Controller : Can't log App event. SDK not initialised"), D.logAppEvent();
        return;
      }
      try {
        if (U(e) && R(t)) {
          const a = e.replace("'", "").replace("’", "");
          this._incrementLtCount(a);
          const l = this._ltCountObj[a] || 0;
          t = { ...t, apx_lt_count: l }, this._updateListOfEventsLogged(e, t), t = {
            ...t,
            first_logged_time: (o = this._eventsLogged[e]) == null ? void 0 : o.first_logged_time,
            latest_logged_time: (c = this._eventsLogged[e]) == null ? void 0 : c.latest_logged_time
          };
          const h = rt(
            e,
            it(t),
            i,
            this.getTimeElapsedInSession()
          );
          let d = ee;
          if (this._stopEventsFromConfig.includes(e))
            return;
          this._clientEventsFromConfig.includes(e) && (d = he), u.debug(`Controller : Logging event ${e}`), this.dispatchEvent(d, h, !1, n);
        } else
          u.debug(`Controller : Invalid App Event ${e}`);
      } catch (a) {
        u.error(`LT Count object parsing failed ${a}`);
      }
    });
    r(this, "logClientEvent", (e, t) => {
      if (!this._isInitialized || !this._isRunning) {
        u.warn("Controller : Can't log client event. SDK not initialised"), D.logClientEvent();
        return;
      }
      const i = this._dataManager.getltCount(e);
      t = { ...t, apx_lt_count: i };
      const n = rt(
        e,
        it(t),
        void 0,
        this.getTimeElapsedInSession()
      );
      let o = he;
      this._stopEventsFromConfig.includes(e) || (this._appEventsFromConfig.includes(e) && (o = ee), n ? (u.debug(`Controller : Logging client event ${e}`), this._updateListOfEventsLogged(e, t), this.dispatchEvent(o, n)) : u.debug(`Controller : Invalid client event ${e}`));
    });
    r(this, "_incrementLtCount", (e) => {
      if (ct(this._ltCountObj[e]) && this._ltCountObj[e] !== 0)
        this._ltCountObj[e] = 0;
      else {
        let i = this._ltCountObj[e];
        i = i + 1, this._ltCountObj[e] = i;
      }
      const t = L(
        this.siteId,
        Ze(
          new TextEncoder().encode(JSON.stringify(this._ltCountObj))
        )
      );
      this.persistToStorage(re, t ?? "");
    });
    r(this, "_updateListOfEventsLogged", (e, t) => {
      this._eventsLogged[e] = this._eventsLogged[e] || {
        first_logged_time: (/* @__PURE__ */ new Date()).toISOString()
      }, this._eventsLogged[e] = {
        ...this._eventsLogged[e],
        ...t,
        latest_logged_time: (/* @__PURE__ */ new Date()).toISOString()
      }, this.persistToStorage(
        De,
        L(this.siteId, JSON.stringify(this._eventsLogged)) ?? ""
      );
    });
    r(this, "logPageView", (e, t = this.getTimeElapsedInSession()) => {
      if (!this._isInitialized || !this._isRunning) {
        u.warn("Controller : Can't log page event. SDK not initialised"), D.logPageView();
        return;
      }
      if (typeof e == "string" && e && e.length > 0) {
        const i = F(t), n = _s(
          e,
          Qe(this.window),
          0,
          i
        );
        g(this._currentNavigation) ? (this._endNavigation(), this._currentNavigation = n) : this._currentNavigation = n, this.logAppEvent(Ut, {
          time: Ie(/* @__PURE__ */ new Date()),
          navigation_id: e,
          url: location.href
        }), u.debug("logPageView: page view is logged ", e);
      } else
        u.warn("Controller : Can't log page event as pathname is empty");
    });
    r(this, "_sendChunkWithAtleastOneEvent", () => {
      const { app_events: e, navigation_events: t } = this._chunkDetails;
      e.length + t.length > 0 && !this._blockChunkReporting && this._prepareAndReportChunk();
    });
    r(this, "_registerIntervalBasedChunkReporting", () => {
      u.debug("Controller : Registering the handlers for chunk reporting"), this._sendChunkOnETAId && clearInterval(this._sendChunkOnETAId), this._sendChunkOnETAId = setInterval(() => {
        this._sendChunkWithAtleastOneEvent();
      }, this._internalChunkSendInterval), this._batchEvents && (this._sendChunkOnEventsId && clearInterval(this._sendChunkOnEventsId), this._sendChunkOnEventsId = setInterval(() => {
        this._sendChunkWithMaxedOutEvents();
      }, this._chunkSendInterval));
    });
    r(this, "_sendChunkWithMaxedOutEvents", () => {
      const { app_events: e, navigation_events: t } = this._chunkDetails, i = e.length + t.length;
      (!this._bulkUpload && i > 0 || this._bulkUpload && i >= this._maxEventsSentCount) && this._prepareAndReportChunk();
    });
    r(this, "_waitForBrowserStorage", (e = () => {
    }) => {
      u.debug(
        "Controller : Checking if the browsers localstorage is available."
      ), le.waitForBrowserStorage(e);
    });
    r(this, "setUserProperties", (e = {}) => {
      let t = {};
      if (!this._isInitialized) {
        D.setUserProperties();
        return;
      }
      if (!this._isRunning) {
        u.warn("Apxor SDK is not running");
        return;
      }
      if (Object.keys(e).length > 0) {
        t = nt(e, this._userAttributes), this.isTestDevice() && Object.keys(t).length > 0 && Object.keys(t).forEach((n) => {
          this.logAppEvent("apx_property_updated", {
            apx_property_type: "user",
            apx_property_name: n,
            apx_property_old_value: this._userAttributes[n] || "",
            apx_property_updated_value: t[n]
          });
        }), this._userAttributes = {
          ...this._userAttributes,
          ...e
        };
        try {
          u.debug("Controller : User properties set"), this.persistToStorage(
            ie,
            L(this.siteId, JSON.stringify(this._userAttributes)) ?? ""
          );
        } catch (i) {
          u.debug(`Controller : Error while setting the use properties ${i}`);
        }
      }
    });
    r(this, "setSessionProperties", (e = {}) => {
      let t = {};
      if (!this._isInitialized) {
        D.setSessionProperties();
        return;
      }
      if (!this._isRunning) {
        u.warn("Apxor SDK is not running");
        return;
      }
      Object.keys(e).length > 0 && (u.debug("Controller : Session properties set"), t = nt(e, this._sessionAttributes), this.isTestDevice() && Object.keys(t).length > 0 && Object.keys(t).forEach((n) => {
        this.logAppEvent("apx_property_updated", {
          apx_property_type: "session",
          apx_property_name: n,
          apx_property_old_value: this._sessionAttributes[n] || "",
          apx_property_updated_value: t[n]
        });
      }), this._sessionAttributes = {
        ...this._sessionAttributes,
        ...e
      });
    });
    r(this, "clearNavigation", () => {
      this._endNavigation(), this._currentNavigation = null;
    });
    r(this, "reportChunkOnVisibilityChange", () => {
      var n;
      if (!this._isInitialized)
        return;
      const e = this._prepareChunk(this._chunkDetails), t = this.siteId, i = JSON.stringify(e);
      ((n = this._chunkDetails) == null ? void 0 : n.app_events.length) > 0 && (u.debug("Reporting a chunk on visibility change with sendBeacon"), this._dataManager.removeOldChunkDetails(), this._dataManager.persistOldChunk(e), navigator.sendBeacon(
        `${this.clientConfig.api_root}/v2/api/${t}/text-chunks?appId=${t}&isTestDevice=${this.isTestDevice()}`,
        i
      ));
    });
    r(this, "getSiteId", () => this.siteId);
    r(this, "setAppVersion", (e) => {
      if (!this._isInitialized) {
        D.setAppVersion();
        return;
      }
      if (!this._isRunning) {
        u.warn("Apxor SDK is not running");
        return;
      }
      this.version = e;
    });
    r(this, "setUserId", (e) => {
      if (!this._isInitialized) {
        D.setUserId();
        return;
      }
      if (!this._isRunning) {
        u.warn("Apxor SDK is not running");
        return;
      }
      me(e) || (u.debug("Controller : User id set"), this.setUserProperties({
        custom_user_id: e
      }));
    });
    /************************************************** UTILITY FUNCTIONS ********************************************************************/
    r(this, "getDevInfo", () => this._deviceInfo);
    r(this, "getInstallationTime", () => this._dataManager.getInstallationTime(this.startTime));
    r(this, "getSessionId", () => this.sessionId);
    r(this, "resetUserProperties", () => {
      this._dataManager.resetUserProperties();
      const e = tt(
        this.window,
        this.getDevInfo()
      );
      this._userAttributes = {}, this.setUserProperties(e);
    });
    r(this, "resetSessionProperties", () => {
      const e = st(this.window);
      this._sessionAttributes = {}, this.setSessionProperties(e);
    });
    r(this, "persistToStorage", (e, t, i = !1, n = q) => {
      let o = t;
      i && R(o) && (o = L(this.siteId, JSON.stringify(o))), this._dataManager.persist(e, o, n);
    });
    r(this, "getFromStorage", (e, t = !1, i = q) => this._dataManager.getItem(e, t, i));
    r(this, "getValueOrDefault", (e, t, i = !1, n = q) => this._dataManager.getItemOrDefault(
      e,
      t,
      i,
      n
    ));
    r(this, "getSessionInfo", () => this._sessionInfo);
    r(this, "getUserAttributes", () => this._userAttributes);
    r(this, "getSessionAttributes", () => this._sessionAttributes);
    r(this, "makeGetRequest", (e, t, i) => {
      this._api.makeGetRequest(e, t, i);
    });
    r(this, "registerForEvent", (e, t) => {
      this._eventHandler.registerForEvent(e, t);
    });
    r(this, "unregisterFromEvent", (e, t) => {
      this._eventHandler.unregisterFromEvent(e, t);
    });
    r(this, "getSDKRunningTimeInSec", () => j(Date.now() - this.startTime));
    r(this, "getTimeElapsedInSession", () => {
      const e = Date.now();
      return u.debug(
        `Controller : Time elapsed in session is ${(e - this.sessionStartTime) / 1e3}sec`
      ), j(e - this.sessionStartTime);
    });
    r(this, "setBlockChunkReportingFlag", (e) => {
      this._blockChunkReporting = e;
    });
    r(this, "clearLocalStorage", () => {
      for (let e = localStorage.length - 1; e >= 0; e--) {
        const t = localStorage.key(e);
        Ht.includes(t) || localStorage.removeItem(t);
      }
    });
    return x.instance || (x.instance = this), x.instance;
  }
  static getInstance() {
    return x.instance || (x.instance = new x()), x.instance;
  }
};
r(x, "instance");
let T = x;
class te {
  constructor(e, t) {
    r(this, "value");
    r(this, "optimized");
    this.value = e, this.optimized = t;
  }
}
const xs = (s, e) => {
  if (s.nodeType !== Node.ELEMENT_NODE) return "";
  const t = [];
  let i = s;
  for (; i; ) {
    const n = Ls(
      i,
      !!e,
      i === s
    );
    if (!n || (t.push(n), n.optimized)) break;
    i = i.parentNode;
  }
  return t.reverse(), t.map((n) => n.value).join(" > ");
}, Ls = (s, e, t) => {
  if (s.nodeType !== Node.ELEMENT_NODE) return null;
  const i = s.getAttribute("id");
  {
    if (i) return new te(a(i), !0);
    const _ = s.nodeName.toLowerCase();
    if (_ === "body" || _ === "head" || _ === "html")
      return new te(s.nodeName.toLowerCase(), !0);
  }
  const n = s.nodeName.toLowerCase();
  if (i)
    return new te(n.toLowerCase() + a(i), !0);
  const o = s.parentNode;
  if (!o || o.nodeType === Node.DOCUMENT_NODE)
    return new te(n.toLowerCase(), !0);
  function c(_) {
    const m = _.getAttribute("class");
    return m ? m.split(/\s+/g).filter(Boolean).map((B) => "$" + B) : [];
  }
  function a(_) {
    return "#" + l(_);
  }
  function l(_) {
    if (O(_)) return _;
    const m = /^(?:[0-9]|-[0-9-]?)/.test(_), B = _.length - 1;
    return _.replace(/./g, (K, $) => m && $ === 0 || !p(K) ? h(K, $ === B) : K);
  }
  function h(_, m) {
    return "\\" + d(_) + (m ? "" : " ");
  }
  function d(_) {
    let m = _.charCodeAt(0).toString(16);
    return m.length === 1 && (m = "0" + m), m;
  }
  function p(_) {
    return /[a-zA-Z0-9_-]/.test(_) ? !0 : _.charCodeAt(0) >= 160;
  }
  function O(_) {
    return /^-?[a-zA-Z_][a-zA-Z0-9_-]*$/.test(_);
  }
  const S = c(s);
  let H = !1, N = !1, P = -1, J = -1;
  const X = o.children;
  for (let _ = 0; (P === -1 || !N) && _ < X.length; ++_) {
    const m = X[_];
    if (m.nodeType !== Node.ELEMENT_NODE) continue;
    if (J += 1, m === s) {
      P = J;
      continue;
    }
    if (N || m.nodeName.toLowerCase() !== n.toLowerCase()) continue;
    H = !0;
    const B = new Set(S);
    if (!B.size) {
      N = !0;
      continue;
    }
    const K = c(m);
    for (let $ = 0; $ < K.length; ++$) {
      const ue = K[$];
      if (B.has(ue) && (B.delete(ue), !B.size)) {
        N = !0;
        break;
      }
    }
  }
  let M = n.toLowerCase();
  if (t && n.toLowerCase() === "input" && s.getAttribute("type") && !s.getAttribute("id") && !s.getAttribute("class") && (M += '[type="' + s.getAttribute("type") + '"]'), N)
    M += ":nth-child(" + (P + 1) + ")";
  else if (H)
    for (const _ of S)
      M += "." + l(_.substr(1));
  return new te(M, !1);
}, Us = (s, e = !1, t = {}) => {
  let i = null;
  i = document.getElementById(s);
  let n;
  if (!i)
    try {
      if (n = document.querySelectorAll(s), e) {
        if (n.length > 0) {
          const o = [];
          for (let c = 0; c < n.length; c++)
            Fs(
              n[c],
              t
            ) && o.push(n[c]);
          o.length > 0 && (i = o);
        }
      } else
        i = Array.from(n);
    } catch (o) {
      u.error("Error finding element in DOM:" + o);
    }
  return i || (i = Rs(s)), i;
}, Fs = (s, e) => {
  var c;
  let { type: t, op: i, content: n } = e, o = ((c = s.textContent) == null ? void 0 : c.trim().toLowerCase()) || "";
  if (o = lt(o), n = (n == null ? void 0 : n.trim().toLowerCase()) || "", n = lt(n), t === "s")
    switch (i) {
      case "contains":
        return o.includes(n);
      case "does_not_contain":
        return !o.includes(n);
      case "exactly_matches":
        return o === n;
      case "does_not_match":
        return o !== n;
      case "starts_with":
        return o.startsWith(n);
      case "ends_with":
        return o.endsWith(n);
      case "matches_regex":
        return new RegExp(n).test(o);
      default:
        return !1;
    }
  else if (t === "n") {
    const a = parseFloat(n);
    if (isNaN(a))
      return !1;
    {
      const l = parseFloat(o);
      switch (i) {
        case "EQ":
          return l === a;
        case "NEQ":
          return l !== a;
        case "GT":
          return l > a;
        case "LT":
          return l < a;
        case "GTE":
          return l >= a;
        case "LTE":
          return l <= a;
        default:
          return !1;
      }
    }
  } else
    return !1;
}, Rs = (s) => {
  const e = s.indexOf("svg");
  e !== -1 && (s = s.substring(0, e) + "svg:svg");
  try {
    return document.evaluate(
      s,
      document,
      function(t) {
        return t === "svg" ? "http://www.w3.org/2000/svg" : null;
      },
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
  } catch (t) {
    u.error("Error finding element in DOM:" + t);
  }
  return null;
}, Bs = (s, e) => {
  let t = e.parentNode;
  for (; t != null; ) {
    if (t === s)
      return !0;
    t = t.parentNode;
  }
  return !1;
}, Ks = (s, e, t, i = !1) => {
  if (!s || !e || !t)
    return !1;
  const n = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), o = e.replace(new RegExp(n, "g"), "(.+)"), c = i ? `^${o}` : `${o}$`;
  return new RegExp(c).test(s);
}, lt = (s) => s.replace(/\s+/g, " "), $s = (s) => Object.entries(s.dataset).reduce(
  (e, [t, i]) => (i !== void 0 && (e[`data-${t}`] = i), e),
  {}
), qs = (s) => ({
  class: s.className,
  ariaLabel: s.getAttribute("aria-label"),
  ...$s(s)
}), zs = (s) => {
  const e = s.getBoundingClientRect();
  return {
    elementPositionX: Math.round(e.left + window.scrollX),
    elementPositionY: Math.round(e.top + window.scrollY)
  };
}, Vs = (s) => {
  var c, a;
  const e = s.type, t = s.target, i = ((c = t == null ? void 0 : t.tagName) == null ? void 0 : c.toLowerCase()) ?? "", n = (l, h = 30) => l.trim().replace(/[^a-zA-Z0-9-_]/g, "_").replace(/\s+/g, "_").replace(/_{2,}/g, "_").slice(0, h), o = [
    "id",
    "name",
    "aria-label",
    "title",
    "placeholder",
    "alt"
  ];
  for (const l of o)
    if (t && t.getAttribute(l))
      return `${e}_${i}_${n(
        t.getAttribute(l)
      )}`;
  if (t && (t != null && t.labels)) {
    const l = (a = t == null ? void 0 : t.labels) == null ? void 0 : a[0];
    if (l && l.textContent)
      return `${e}_${i}_label_${n(
        l.textContent
      )}`;
  }
  if (t && t.textContent) {
    const l = t.textContent.trim();
    if (l)
      return `${e}_${i}_${n(l)}`;
  }
  if (t && t.className) {
    const l = t.className.split(/\s+/).filter(
      (h) => !h.startsWith("Mui") && !h.match(
        /^(w-|h-|text-|bg-|p-|m-|font-|justify-|items-|leading-|flex-|space-|flex|grid|border|shadow|rounded)/
      )
      // Common Tailwind prefixes
    );
    if (l.length > 0)
      return `${e}_${i}_${l.slice(0, 3).join("_")}`;
  }
  return `${e}_${i}`;
};
class Hs {
  constructor(e) {
    r(this, "pii_mask_elements");
    this.pii_mask_elements = e;
  }
  maskPII(e, t) {
    return this.pii_mask_elements.forEach((i) => {
      let n = !1;
      if (i.is_dynamic && (Ks(location.href, i.pageUrl, "*") || i.pageUrl === "*") ? n = !0 : n = location.href === i.pageUrl, !n) return;
      let o = Us(
        i.selector,
        i.text_based,
        i.text
      );
      if (o) Array.isArray(o) || (o = [o]);
      else return;
      o == null || o.forEach((c) => {
        c && (c === t || Bs(c, t)) && (e = "****");
      });
    }), e;
  }
}
class Js {
  constructor(e) {
    r(this, "apxorInstance");
    r(this, "pii_mask_elements");
    r(this, "masker");
    var t, i;
    this.apxorInstance = e, this.setupEventListeners(), this.pii_mask_elements = JSON.parse(
      (i = (t = this.apxorInstance) == null ? void 0 : t.getController()) == null ? void 0 : i.getFromStorage(Wt)
    ) ?? [], this.masker = new Hs(this.pii_mask_elements);
  }
  setupEventListeners() {
    ["click", "dblclick", "contextmenu", "change"].forEach((t) => {
      document.addEventListener(
        t,
        this.handleEvent.bind(this, t),
        !0
      );
    }), document.addEventListener("change", this.handleFileUpload.bind(this), !0);
  }
  handleEvent(e, t) {
    try {
      const i = t.target, n = this.extractCommonData(i, e);
      switch (i.tagName.toLowerCase()) {
        case "button":
          this.handleButtonEvent(n, i);
          break;
        case "a":
          this.handleLinkEvent(n, i);
          break;
        case "input":
          this.handleInputEvent(n, i);
          break;
        case "select":
          this.handleDropdownEvent(n, i);
          break;
        case "textarea":
          this.handleTextAreaEvent(n, i);
          break;
        case "img":
          this.handleImageEvent(n, i);
          break;
      }
      this.logEvent(n, t);
    } catch (i) {
      console.error("Error in handleEvent:", i);
    }
  }
  extractCommonData(e, t) {
    var i, n;
    return e ? {
      eventType: t,
      elementId: xs(e, !0) || "",
      autoLogged: !0,
      elementType: ((i = e == null ? void 0 : e.tagName) == null ? void 0 : i.toLowerCase()) ?? "",
      pageUrl: ((n = window == null ? void 0 : window.location) == null ? void 0 : n.href) ?? "",
      referrerUrl: document.referrer || "",
      timestamp: Ie(/* @__PURE__ */ new Date()),
      ...zs(e),
      ...qs(e)
    } : {};
  }
  handleButtonEvent(e, t) {
    e.role = t.getAttribute("role") || "button", e.state = t.disabled ? "disabled" : "enabled";
  }
  handleLinkEvent(e, t) {
    e.linkUrl = t.href, e.rel = t.rel, e.target = t.target;
  }
  handleInputEvent(e, t) {
    var i;
    if (e.elementType = t.type, ["text", "password", "email"].includes(t.type)) {
      const n = this.masker.maskPII((t == null ? void 0 : t.value) ?? "", t);
      e.inputData = n, n === "****" && (e.unMaskedInputData = (t == null ? void 0 : t.value) ?? "");
    } else (t.type === "checkbox" || t.type === "radio") && (e.checkedState = t.checked ? "checked" : "unchecked");
    e.validationStatus = (i = t == null ? void 0 : t.validity) != null && i.valid ? "valid" : "invalid", e.placeholder = t.placeholder || "", e.maxLength = t.maxLength || "";
  }
  handleDropdownEvent(e, t) {
    const i = this.masker.maskPII((t == null ? void 0 : t.value) ?? "", t) || "";
    e.selectedValue = i, i === "****" && (e.unMaskedSelectedData = (t == null ? void 0 : t.value) ?? ""), e.options = Array.from(t.options).map((n) => n.value), e.multiple = t.multiple;
  }
  handleTextAreaEvent(e, t) {
    const i = this.masker.maskPII((t == null ? void 0 : t.value) ?? "", t);
    e.inputData = i, i === "****" && (e.unMaskedInputData = (t == null ? void 0 : t.value) ?? ""), e.rows = t.rows, e.cols = t.cols, e.maxLength = t.maxLength;
  }
  handleImageEvent(e, t) {
    e.imageUrl = t.src, e.altText = t.alt, e.width = t.width, e.height = t.height;
  }
  handleFileUpload(e) {
    var i;
    const t = e.target;
    if (t.type === "file") {
      const n = (i = t.files) == null ? void 0 : i[0];
      if (n) {
        const o = this.masker.maskPII((n == null ? void 0 : n.name) ?? "", t), c = this.extractCommonData(t, "change");
        c.filename = o, o === "****" && (c.unMaskedFileName = (n == null ? void 0 : n.name) ?? ""), c.filesize = n.size, c.filetype = n.type, c.uploadStatus = "started", this.logEvent(c, e);
      }
    }
  }
  handleModalEvents(e) {
    const t = e.target.closest("[role='dialog']");
    if (t) {
      const i = this.extractCommonData(
        t,
        "modalInteraction"
      );
      i.modalContent = this.masker.maskPII(
        t.textContent ?? "",
        e.target
      ), i.state = t.getAttribute("aria-hidden") === "false" ? "open" : "closed", this.logEvent(i, e);
    }
  }
  logEvent(e, t) {
    this.apxorInstance.logEvent(Vs(t), e);
  }
}
class It {
  constructor(e, t = Zt()) {
    r(this, "_isInitialized", !1);
    r(this, "_queue", []);
    r(this, "version", 270);
    r(this, "window");
    r(this, "_startTime");
    r(this, "_controller", {});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    r(this, "_q");
    r(this, "_st");
    r(this, "_init", () => {
      Array.isArray(this._q) && this._q.forEach(({ m: e, args: t }) => {
        this[e] && v(this[e]) && this[e].apply(this, Array.from(t));
      });
    });
    r(this, "init", (e, t = Je, i = null, n = null) => {
      var o, c, a, l;
      try {
        if (u.debug("SDK : Apxor SDK initialization has started"), !this._isInitialized) {
          (!g(t) || g(t) && !(t instanceof Object)) && (t = Je);
          let {
            honorDNT: h = !1,
            debug: d = !1,
            events_upload_time: p = -1,
            retry_time: O = -1,
            level: S = "error",
            auto_event_logging: H = !1,
            api_root: N
          } = t;
          if ((c = (o = this.window) == null ? void 0 : o.localStorage) != null && c.getItem("apx_debug_enable") && (d = this.window.localStorage.getItem("apx_debug_enable") === "true"), (l = (a = this.window) == null ? void 0 : a.localStorage) != null && l.getItem("apx_log_level") && (S = this.window.localStorage.getItem("apx_log_level")), this._configureLogger(d, S), !g(N)) {
            u.error(
              `SDK : ApxorSDK couldn't be initialized: Invalid api root:${N}`
            ), this._controller = D, n != null && v(n) && n();
            return;
          }
          if (!g(e) || !g(e.trim) || e.trim() === "") {
            u.error(
              `SDK : ApxorSDK couldn't be initialized: Invalid Site Id:${e}`
            ), this._controller = D, n != null && v(n) && n();
            return;
          }
          if (h && !os(this.window)) {
            this._controller = D, n != null && v(n) && n(), u.error(
              "SDK : Tracking is disabled, ApxorSDK couldn't be initialized"
            );
            return;
          }
          this._controller = T.getInstance(), g(p) && p > 0 && (t.events_upload_time *= 1e3), g(O) && O > 0 && (t.retry_time *= 1e3), this._controller.initialize(
            e,
            this._startTime,
            t,
            this.window,
            () => {
              if (this._isInitialized = !0, this._queue.forEach((P) => {
                var M, _;
                const { m: J, args: X } = P;
                (_ = (M = this._controller) == null ? void 0 : M[J]) == null || _.apply(
                  this._controller,
                  Array.from(X)
                );
              }), i != null && v(i) && (u.debug("SDK : Device id is " + this.getClientId()), i({
                client_id: this.getClientId(),
                session_id: this.getSessionId()
              })), console.info(
                "ApxorSDK initialized for site:" + e + " with SDK version: " + Re
              ), H) {
                const P = new Js(this);
                u.debug("auto_event_logging", P);
              }
            },
            () => {
              this._isInitialized = !1, u.error("SDK : Failed to initialize Apxor SDK"), n && v(n) && n("");
            }
          );
        }
      } catch (h) {
        this._controller._isInitialized = !1, u.error("SDK : Exception while initializing Apxor SDK : ", h), n && v(n) && n(h);
      }
    });
    r(this, "_configureLogger", (e = !1, t = "error") => {
      u.enabled = e, u.level = t, u.console = console, u.debug(`SDK : Logger configured with level ${t}`);
    });
    r(this, "logEvent", (e, t, i = !1) => {
      if (!this._isInitialized) {
        this._queue.push({ m: "logAppEvent", args: [e, t] });
        return;
      }
      this._controller.logAppEvent(e, t, void 0, i);
    });
    r(this, "logClientEvent", (e, t) => {
      if (!this._isInitialized) {
        this._queue.push({ m: "logClientEvent", args: [e, t] });
        return;
      }
      this._controller.logClientEvent(e, t);
    });
    r(this, "logPageView", (e) => {
      if (!this._isInitialized) {
        this._queue.push({ m: "logPageView", args: [e] });
        return;
      }
      this._controller.logPageView(e);
    });
    r(this, "setUserId", (e) => {
      if (!this._isInitialized) {
        this._queue.push({ m: "setUserId", args: [e] });
        return;
      }
      this._controller.setUserId(e);
    });
    r(this, "setUserProperties", (e) => {
      if (u.debug("SDK : User properties set"), !this._isInitialized) {
        this._queue.push({ m: "setUserProperties", args: [e] });
        return;
      }
      this._controller.setUserProperties(e);
    });
    r(this, "resetUserProperties", () => {
      if (u.debug("SDK : User properties reset"), !this._isInitialized) {
        this._queue.push({ m: "setUserProperties", args: [] });
        return;
      }
      this._controller.resetUserProperties();
    });
    r(this, "resetSessionProperties", () => {
      if (u.debug("SDK : User properties reset"), !this._isInitialized) {
        this._queue.push({ m: "setUserProperties", args: [] });
        return;
      }
      this._controller.resetSessionProperties();
    });
    r(this, "clearLocalStorage", () => {
      if (u.debug("SDK:Clearing keys which are not related to apxor"), !this._isInitialized) {
        this._queue.push({ m: "clearLocalStorage", args: [] });
        return;
      }
      this._controller.clearLocalStorage();
    });
    r(this, "setSessionProperties", (e) => {
      if (u.debug("SDK : Session properties set"), !this._isInitialized) {
        this._queue.push({ m: "setSessionProperties", args: [e] });
        return;
      }
      this._controller.setSessionProperties(e);
    });
    r(this, "setAppVersion", (e) => {
      if (!this._isInitialized) {
        this._queue.push({ m: "setAppVersion", args: [e] });
        return;
      }
      this._controller.setAppVersion(e);
    });
    // public flattenJSON = (properties: object): void => {
    //   if (!this._isInitialized) {
    //     this._queue.push({ m: 'flattenJSON', args: [properties] })
    //     return
    //   }
    //   this._controller.flattenJSON(properties)
    // }
    r(this, "getSessionId", () => this._isInitialized ? this._controller.getSessionId() : null);
    r(this, "getClientId", () => this._controller.getDeviceId());
    r(this, "startNewSession", () => {
      if (u.debug("SDK : A new session started"), !this._isInitialized) {
        this._queue.push({ m: "startNewSession", args: [] });
        return;
      }
      this._controller.startNewSession(Date.now());
    });
    r(this, "endSession", () => {
      if (u.debug("SDK : Current session ended"), !this._isInitialized) {
        this._queue.push({ m: "endSession", args: [] });
        return;
      }
      this._controller.endSession();
    });
    r(this, "getController", () => this._controller);
    r(this, "getSiteId", () => {
      var e;
      return (e = this._controller) == null ? void 0 : e.getSiteId();
    });
    r(this, "setInitFlag", (e) => {
      this._isInitialized = e;
    });
    this.window = e, this._startTime = t, this._init();
  }
}
window.Apxor = window.Apxor || { _q: [], _st: Date.now() };
It.prototype._q = window.Apxor._q;
var ut, ht;
const bt = new It(window, ((ut = window.Apxor) == null ? void 0 : ut._st) && +((ht = window.Apxor) == null ? void 0 : ht._st));
window.Apxor = bt;
window.ApxorLogger = u;
try {
  typeof exports < "u" && exports !== null && (exports.default = bt, module.exports = exports.default);
} catch (s) {
  u.error(s);
}
export {
  bt as default
};
//# sourceMappingURL=auto-test-sdk.js.map
