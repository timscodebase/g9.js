// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ldyC4":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "41452ba6c90d79c9";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"g1vPt":[function(require,module,exports) {
var _g9 = require("g9");
const initialData = {
    endx: 189.99999999995265,
    endy: 76.99999999995309,
    middlex: 9.000000002109623,
    middley: -223.99999999996237,
    startx: -139.9999999999726,
    starty: 81.99999999698782,
    t: 0.5066666666666662
};
function render(data, ctx) {
    const endx = data.endx;
    const endy = data.endy;
    const middlex = data.middlex;
    const middley = data.middley;
    const startx = data.startx;
    const starty = data.starty;
    const width = ctx.width;
    const height = ctx.height;
    const t = data.t;
    const tlabel = "tween=" + t.toString().slice(0, 4);
    ctx.text(tlabel, (t - .5) * 300, height / 2 - 30, {
        alignmentBaseline: "middle"
    });
    var steps = 30;
    var smooth = [];
    for(var i = 0; i < steps; i++){
        var r = t * i / steps;
        function tween(a, b) {
            return a + r * (b - a);
        }
        var ax = tween(startx, middlex), ay = tween(starty, middley), bx = tween(middlex, endx), by = tween(middley, endy);
        ctx.line(ax, ay, bx, by, {
            affects: [
                "t"
            ],
            stroke: "rgba(0,0,0,.1)"
        });
        smooth.push([
            tween(ax, bx),
            tween(ay, by)
        ]);
    }
    var p = smooth[0];
    for(let i1 = 1; i1 < smooth.length; i1++){
        ctx.line(p[0], p[1], smooth[i1][0], smooth[i1][1], {
            affects: [
                "t"
            ],
            "stroke-width": 5
        });
        p = smooth[i1];
    }
    ctx.line(startx, starty, middlex, middley);
    ctx.line(middlex, middley, endx, endy);
    ctx.point(startx, starty);
    ctx.point(middlex, middley);
    ctx.point(endx, endy);
}
_g9(initialData, render).align("center", "center").insertInto("#bezier-curve");

},{"g9":"6Nwzk"}],"6Nwzk":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0);
    }([
        function(e, t, n) {
            e.exports = n(4);
        },
        function(e, t) {
            "use strict";
            function n(e, n) {
                function r(e) {
                    t.draggingCount = s += 1, e.stopPropagation(), e.preventDefault(), e = e.touches ? e.touches[0] : e;
                    var r = n(e);
                    i = e.clientX, o = e.clientY;
                    var a = function(e) {
                        e.preventDefault(), e = e.touches ? e.touches[0] : e, r(e.clientX - i, e.clientY - o);
                    }, u = function c(e) {
                        e.preventDefault(), t.draggingCount = s -= 1, document.removeEventListener("mousemove", a), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", c), document.removeEventListener("touchcancel", c), document.removeEventListener("mouseup", c);
                    };
                    document.addEventListener("touchmove", a), document.addEventListener("mousemove", a), document.addEventListener("touchend", u), document.addEventListener("touchcancel", u), document.addEventListener("mouseup", u);
                }
                var i, o;
                e.addEventListener("touchstart", r), e.addEventListener("mousedown", r);
            }
            function r(e, n, r) {
                function i(e) {
                    t.draggingCount = s += 1, e.preventDefault(), e = e.touches ? e.touches[0] : e, o = e.clientX, a = e.clientY;
                    var r = n(e), i = c(r, 2);
                    u = i[0], f = i[1], u = u || 0, f = f || 0, document.addEventListener("touchmove", l), document.addEventListener("mousemove", l), document.addEventListener("touchend", d), document.addEventListener("touchcancel", d), document.addEventListener("mouseup", d);
                }
                var o, a, u, f, l = function(e) {
                    e = e.touches ? e.touches[0] : e, r(u + e.clientX - o, f + e.clientY - a);
                }, d = function h(e) {
                    t.draggingCount = s -= 1, document.removeEventListener("mousemove", l), document.removeEventListener("touchmove", l), document.removeEventListener("touchend", h), document.removeEventListener("touchcancel", h), document.removeEventListener("mouseup", h);
                };
                e.addEventListener("touchstart", i), e.addEventListener("mousedown", i);
            }
            function i(e, t) {
                e && Object.keys(e).forEach(function(n) {
                    return t(e[n], n);
                });
            }
            function o(e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
                i(t, function(t, r) {
                    e.setAttributeNS(n, r, t);
                });
            }
            function a(e) {
                var t = {};
                return Object.keys(e).forEach(function(n) {
                    return t[n] = e[n];
                }), t;
            }
            function u(e, t, n) {
                for(; Math.abs(t - n) > .001;){
                    var r = (t + n) / 2;
                    e(r) ? t = r : n = r;
                }
                return (t + n) / 2;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = function() {
                function e(e, t) {
                    var n = [], r = !0, i = !1, o = void 0;
                    try {
                        for(var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (c) {
                        i = !0, o = c;
                    } finally{
                        try {
                            !r && u["return"] && u["return"]();
                        } finally{
                            if (i) throw o;
                        }
                    }
                    return n;
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }();
            t.addDragHandler = n, t.makeDraggable = r, t.forIn = i, t.setAttributes = o, t.shallowClone = a, t.findPhaseChange = u;
            var s = t.draggingCount = 0;
        },
        function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(6), o = r(i), a = n(9), u = r(a), c = n(8), s = r(c), f = n(10), l = r(f), d = n(11), h = r(d), v = n(7), g = r(v), m = {
                point: u["default"],
                circle: o["default"],
                line: s["default"],
                rect: l["default"],
                text: h["default"],
                image: g["default"]
            };
            t["default"] = m;
        },
        function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            function i(e) {
                return function(t) {
                    function n() {
                        return "auto" + g + h++;
                    }
                    function r(e) {
                        return function() {
                            if (v[v.length - 1]++, null === i || (i + "|").startsWith(v.join("|"))) {
                                v.push(0);
                                var t = h;
                                h = 0, g = v.join("|");
                                var n = e.apply(this, arguments);
                                v.pop(), h = t, g = v.join("|");
                            }
                            return n;
                        };
                    }
                    var i = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1], u = arguments[2], f = u.width, l = u.height, d = {}, h = 0, v = [
                        0
                    ], g = v.join("|"), m = {
                        pure: r,
                        width: f,
                        height: l
                    };
                    return (0, s.forIn)(c["default"], function(e, t) {
                        m[t] = function() {
                            var r = [].slice.call(arguments), i = {}, u = r[r.length - 1];
                            if ("object" === ("undefined" == typeof u ? "undefined" : a(u))) {
                                i = o({}, u);
                                var c = r.length - 1;
                            } else var c = r.length;
                            for(var s = 0; c > s; s++)i[e.argNames[s]] = r[s];
                            i.type = t, i.id = n(), i.stack = v.join("|"), d[i.id] = i;
                        };
                    }), e(t, m), d;
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = Object.assign || function(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = arguments[t];
                    for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
            };
            t["default"] = i;
            var u = n(2), c = r(u), s = n(1);
        },
        function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            function i(e, t) {
                function n() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "center" : arguments[0], t = arguments.length <= 1 || void 0 === arguments[1] ? "center" : arguments[1];
                    return E = e, x = t, r(), this;
                }
                function r() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0], t = _.getBoundingClientRect();
                    k = t.width, j = t.height, N = t.top, O = t.left, C = "left" === E ? 0 : "center" === E ? k / 2 : k, L = "top" === x ? 0 : "center" === x ? j / 2 : j, _.setAttribute("viewBox", [
                        -C,
                        -L,
                        k,
                        j
                    ].join(" ")), _.g9Offset = {
                        top: N + L,
                        left: O + C
                    }, e && h();
                }
                function i(e) {
                    return _.parentNode && a(), "string" == typeof e ? document.querySelector(e).appendChild(_) : e.appendChild(_), window.addEventListener("load", r), window.addEventListener("resize", r), window.addEventListener("scroll", M), r(), this;
                }
                function a() {
                    window.removeEventListener("load", r), window.removeEventListener("resize", r), window.removeEventListener("scroll", M), _.parentNode.removeChild(_);
                }
                function f(t, n, r) {
                    n = n || Object.keys(y);
                    var i = !0, a = m[t], u = (a.type, n.map(function(e) {
                        return y[e];
                    })), f = function(e) {
                        var i = o({}, y);
                        n.forEach(function(t, n) {
                            return i[t] = e[n];
                        });
                        var u = w(i, a.stack, {
                            width: k,
                            height: j
                        }), c = u[t];
                        return r(c);
                    }, l = f(u), v = function(e) {
                        return (0, c.gradient)(f, e);
                    }, g = function(e) {
                        return v(e).every(function(e) {
                            return 0 === e;
                        });
                    };
                    if (g(u)) {
                        var p = function(e) {
                            return v(e).forEach(function(t, n) {
                                0 !== t && (u[n] = e[n]);
                            });
                        };
                        P[t] && p(P[t]), g(u) && p(n.map(function(t) {
                            return e[t];
                        })), i = !1;
                    }
                    var b = (0, s["default"])(f, u, i).solution;
                    g(b) ? n.forEach(function(e, t) {
                        b[t] = (0, d.findPhaseChange)(function(e) {
                            var n = b.slice(0);
                            return n[t] = e, 0 === v(n)[t];
                        }, b[t], u[t]);
                    }) : P[t] = u.slice(0), f(b) < l && (n.forEach(function(e, t) {
                        return y[e] = b[t];
                    }), h());
                }
                function h() {
                    m = w(y, null, {
                        width: k,
                        height: j
                    }), (0, d.forIn)(m, function(e, t) {
                        b[t] || (b[t] = new l["default"][e.type](function() {
                            return m[t];
                        }, function(e, n) {
                            return f(t, n, e);
                        }), b[t].mount(_)), b[t].update();
                    }), (0, d.forIn)(b, function(e, t) {
                        t in m || (e.unmount(), delete b[t]);
                    }), p(y, m);
                }
                function v(e) {
                    y = e, h();
                }
                function g() {
                    return o({}, y);
                }
                var m, p = arguments.length <= 2 || void 0 === arguments[2] ? function() {} : arguments[2], y = (0, d.shallowClone)(e), w = (0, u["default"])(t), b = {}, _ = document.createElementNS("http://www.w3.org/2000/svg", "svg"), E = "center", x = "center", k = 0, j = 0, N = 0, O = 0, C = 0, L = 0, M = function(e) {
                    return r(!1);
                }, P = {};
                return {
                    setData: v,
                    desire: f,
                    align: n,
                    insertInto: i,
                    resize: r,
                    node: _,
                    remove: a,
                    getData: g,
                    get isManipulating () {
                        return d.draggingCount > 0;
                    }
                };
            }
            var o = Object.assign || function(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = arguments[t];
                    for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }, a = n(3), u = r(a), c = n(5), s = r(c), f = n(2), l = r(f), d = n(1), h = r(d);
            i.shapes = l["default"], i.utils = h["default"], e.exports = i;
        },
        function(e, t) {
            "use strict";
            function n(e) {
                return Math.sqrt(e.reduce(function(e, t) {
                    return e + t * t;
                }, 0));
            }
            function r(e) {
                for(var t = Array(e), n = 0; e > n; n++){
                    t[n] = Array(e);
                    for(var r = 0; e > r; r++)t[n][r] = +(n == r);
                }
                return t;
            }
            function i(e) {
                return e.map(function(e) {
                    return -e;
                });
            }
            function o(e, t) {
                return "number" != typeof e[0] ? e.map(function(e) {
                    return o(e, t);
                }) : e.reduce(function(e, n, r) {
                    return e + n * t[r];
                }, 0);
            }
            function a(e, t) {
                return "number" != typeof e[0] ? e.map(function(e, n) {
                    return a(e, t[n]);
                }) : e.map(function(e, n) {
                    return e - t[n];
                });
            }
            function u(e, t) {
                return "number" != typeof e[0] ? e.map(function(e, n) {
                    return u(e, t[n]);
                }) : e.map(function(e, n) {
                    return e + t[n];
                });
            }
            function c(e, t) {
                return e.map(function(e) {
                    return e.map(function(e) {
                        return e / t;
                    });
                });
            }
            function s(e, t) {
                return "number" != typeof e[0] ? e.map(function(e) {
                    return s(e, t);
                }) : e.map(function(e) {
                    return e * t;
                });
            }
            function f(e, t) {
                return e.map(function(e, n) {
                    return s(t, e);
                });
            }
            function l(e, t) {
                var n = t.length, r = e(t);
                if (isNaN(r)) throw new Error("The gradient at [" + t.join(" ") + "] is NaN!");
                for(var i = Math.max, o = Math.abs, a = Math.min, u = t.slice(0), c = Array(n), s = 0; n > s; s++)for(var f = i(1e-6 * r, 1e-8), l = 0;; l++){
                    if (20 == l) throw new Error("Gradient failed at index " + s + " of [" + t.join(" ") + "]");
                    u[s] = t[s] + f;
                    var d = e(u);
                    u[s] = t[s] - f;
                    var h = e(u);
                    if (u[s] = t[s], !isNaN(d) && !isNaN(h)) {
                        c[s] = (d - h) / (2 * f);
                        var v = t[s] - f, g = t[s], m = t[s] + f, p = (d - r) / f, y = (r - h) / f, w = a(i(o(p - c[s]), o(y - c[s]), o(p - y)), f), b = i(o(c[s]), o(d), o(r), o(h), o(v), o(g), o(m), 1e-8);
                        if (.001 > w / b) break;
                    }
                    f /= 16;
                }
                return c;
            }
            function d(e, t, d) {
                var h = arguments.length <= 3 || void 0 === arguments[3] ? 1e-8 : arguments[3], v = arguments.length <= 4 || void 0 === arguments[4] ? 1e3 : arguments[4];
                h = Math.max(h, 2e-16);
                var g = function(t) {
                    return l(e, t);
                };
                t = t.slice(0);
                var m = g(t), p = e(t);
                if (isNaN(p)) throw new Error("minimize: f(x0) is a NaN!");
                for(var y = t.length, w = r(y), b = 0; v > b; b++){
                    if (!m.every(isFinite)) {
                        var _ = "Gradient has Infinity or NaN";
                        break;
                    }
                    var E = i(o(w, m));
                    if (!E.every(isFinite)) {
                        var _ = "Search direction has Infinity or NaN";
                        break;
                    }
                    var x = n(E);
                    if (h > x) {
                        var _ = "Newton step smaller than tol";
                        break;
                    }
                    for(var k, j = 1, N = o(m, E), O = t; v > b && j * x >= h; b++){
                        k = s(E, j), O = u(t, k);
                        var C = e(O);
                        if (!(C - p >= .1 * j * N || isNaN(C))) break;
                        j *= .5;
                    }
                    if (h > j * x && d) {
                        var _ = "Line search step size smaller than tol";
                        break;
                    }
                    if (b === v) {
                        var _ = "maxit reached during line search";
                        break;
                    }
                    var L = g(O), M = a(L, m), P = o(M, k), z = o(w, M);
                    w = a(u(w, s(f(k, k), (P + o(M, z)) / (P * P))), c(u(f(z, k), f(k, z)), P)), t = O, p = C, m = L;
                }
                return {
                    solution: t,
                    f: p,
                    gradient: m,
                    invHessian: w,
                    iterations: b,
                    message: _
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.gradient = l, t["default"] = d;
        },
        function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            }(), o = n(1), a = function() {
                function e(t, n) {
                    r(this, e), this.minimize_args = n, this.get_args = t;
                }
                return i(e, [
                    {
                        key: "mount",
                        value: function(e) {
                            var t = this;
                            this.container = e, this.el = document.createElementNS("http://www.w3.org/2000/svg", "circle"), this.container.appendChild(this.el);
                            var n = function(e, t, n) {
                                var r = e.cx - t, i = e.cy - n;
                                return Math.sqrt(r * r + i * i) / e.r;
                            }, r = function(e) {
                                var r = e.clientX, i = e.clientY, o = r - t.container.g9Offset.left, a = i - t.container.g9Offset.top, u = n(t.get_args(), o, a);
                                return function(e, r) {
                                    var i = t.get_args(), c = i.affects;
                                    t.minimize_args(function(t) {
                                        var i = u - n(t, o + e, a + r);
                                        return i * i;
                                    }, c);
                                };
                            };
                            (0, o.addDragHandler)(this.el, r);
                        }
                    },
                    {
                        key: "unmount",
                        value: function() {
                            this.container.removeChild(this.el);
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            (0, o.setAttributes)(this.el, this.get_args());
                        }
                    }
                ]), e;
            }();
            a.argNames = [
                "cx",
                "cy",
                "r",
                "affects"
            ], t["default"] = a;
        },
        function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            }(), o = n(1), a = function() {
                function e(t, n) {
                    r(this, e), this.minimize_args = n, this.get_args = t;
                }
                return i(e, [
                    {
                        key: "mount",
                        value: function(e) {
                            var t = this;
                            this.container = e, this.el = document.createElementNS("http://www.w3.org/2000/svg", "image"), this.container.appendChild(this.el);
                            var n = function(e) {
                                var n = t.get_args(), r = n.x, i = n.y, o = n.width, a = n.height, u = e.clientX - t.container.g9Offset.left, c = e.clientY - t.container.g9Offset.top, s = (u - r) / o, f = (c - i) / a;
                                return function(e, n) {
                                    var r = t.get_args(), i = r.affects;
                                    t.minimize_args(function(t) {
                                        var r = t.x + t.width * s - (u + e), i = t.y + t.height * f - (c + n);
                                        return r * r + i * i;
                                    }, i);
                                };
                            };
                            (0, o.addDragHandler)(this.el, n);
                        }
                    },
                    {
                        key: "unmount",
                        value: function() {
                            this.container.removeChild(this.el);
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            var e = this.get_args(), t = (e.x, e.y, e.width), n = e.height;
                            0 > t && (e.x += t, e.width = -t), 0 > n && (e.y += n, e.height = -n), (0, o.setAttributes)(this.el, e), (0, o.setAttributes)(this.el, {
                                href: e.href
                            }, "http://www.w3.org/1999/xlink");
                        }
                    }
                ]), e;
            }();
            a.argNames = [
                "href",
                "x",
                "y",
                "width",
                "height",
                "affects"
            ], t["default"] = a;
        },
        function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            }(), o = n(1), a = function() {
                function e(t, n) {
                    r(this, e), this.minimize_args = n, this.get_args = t;
                }
                return i(e, [
                    {
                        key: "mount",
                        value: function(e) {
                            var t = this;
                            this.container = e, this.el = document.createElementNS("http://www.w3.org/2000/svg", "line"), this.container.appendChild(this.el), (0, o.setAttributes)(this.el, {
                                stroke: "#000"
                            });
                            var n = function(e) {
                                var n = t.get_args(), r = n.x1, i = n.y1, o = n.x2, a = n.y2, u = e.clientX, c = e.clientY, s = u - t.container.g9Offset.left, f = c - t.container.g9Offset.top, l = o - r, d = a - i, h = s - r, v = f - i, g = Math.sqrt(h * h + v * v) / Math.sqrt(l * l + d * d);
                                return function(e, n) {
                                    var r = t.get_args(), i = r.affects;
                                    t.minimize_args(function(t) {
                                        var r = t.x1, i = t.y1, o = t.x2, a = t.y2, u = r + (o - r) * g - (s + e), c = i + (a - i) * g - (f + n);
                                        return u * u + c * c;
                                    }, i);
                                };
                            };
                            (0, o.addDragHandler)(this.el, n);
                        }
                    },
                    {
                        key: "unmount",
                        value: function() {
                            this.container.removeChild(this.el);
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            (0, o.setAttributes)(this.el, this.get_args());
                        }
                    }
                ]), e;
            }();
            a.argNames = [
                "x1",
                "y1",
                "x2",
                "y2",
                "affects"
            ], t["default"] = a;
        },
        function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            }(), o = n(1), a = function() {
                function e(t, n) {
                    r(this, e), this.minimize_args = n, this.get_args = t;
                }
                return i(e, [
                    {
                        key: "mount",
                        value: function(e) {
                            var t = this;
                            this.container = e, this.el = document.createElementNS("http://www.w3.org/2000/svg", "circle"), this.container.appendChild(this.el), (0, o.setAttributes)(this.el, {
                                r: 5
                            });
                            var n = function(e) {
                                var n = t.get_args(), r = n.cx, i = n.cy;
                                return function(e, n) {
                                    var o = t.get_args(), a = o.affects;
                                    t.minimize_args(function(t) {
                                        var o = t.cx - (r + e), a = t.cy - (i + n);
                                        return o * o + a * a;
                                    }, a);
                                };
                            };
                            (0, o.addDragHandler)(this.el, n);
                        }
                    },
                    {
                        key: "unmount",
                        value: function() {
                            this.container.removeChild(this.el);
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            (0, o.setAttributes)(this.el, this.get_args());
                        }
                    }
                ]), e;
            }();
            a.argNames = [
                "cx",
                "cy",
                "affects"
            ], t["default"] = a;
        },
        function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            }(), o = n(1), a = function() {
                function e(t, n) {
                    r(this, e), this.minimize_args = n, this.get_args = t;
                }
                return i(e, [
                    {
                        key: "mount",
                        value: function(e) {
                            var t = this;
                            this.container = e, this.el = document.createElementNS("http://www.w3.org/2000/svg", "rect"), this.container.appendChild(this.el);
                            var n = function(e) {
                                var n = t.get_args(), r = n.x, i = n.y, o = n.width, a = n.height, u = e.clientX - t.container.g9Offset.left, c = e.clientY - t.container.g9Offset.top, s = (u - r) / o, f = (c - i) / a;
                                return function(e, n) {
                                    var r = t.get_args(), i = r.affects;
                                    t.minimize_args(function(t) {
                                        var r = t.x + t.width * s - (u + e), i = t.y + t.height * f - (c + n);
                                        return r * r + i * i;
                                    }, i);
                                };
                            };
                            (0, o.addDragHandler)(this.el, n);
                        }
                    },
                    {
                        key: "unmount",
                        value: function() {
                            this.container.removeChild(this.el);
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            var e = this.get_args(), t = (e.x, e.y, e.width), n = e.height;
                            0 > t && (e.x += t, e.width = -t), 0 > n && (e.y += n, e.height = -n), (0, o.setAttributes)(this.el, e);
                        }
                    }
                ]), e;
            }();
            a.argNames = [
                "x",
                "y",
                "width",
                "height",
                "affects"
            ], t["default"] = a;
        },
        function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            }(), o = n(1), a = function() {
                function e(t, n) {
                    r(this, e), this.minimize_args = n, this.get_args = t;
                }
                return i(e, [
                    {
                        key: "mount",
                        value: function(e) {
                            var t = this;
                            this.container = e, this.el = document.createElementNS("http://www.w3.org/2000/svg", "text"), this.container.appendChild(this.el);
                            var n = function(e) {
                                var n = t.get_args(), r = n.x, i = n.y;
                                return function(e, n) {
                                    var o = t.get_args(), a = o.affects;
                                    t.minimize_args(function(t) {
                                        var o = t.x - (r + e), a = t.y - (i + n);
                                        return o * o + a * a;
                                    }, a);
                                };
                            };
                            (0, o.addDragHandler)(this.el, n);
                        }
                    },
                    {
                        key: "unmount",
                        value: function() {
                            this.container.removeChild(this.el);
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            var e = this.get_args();
                            (0, o.setAttributes)(this.el, e), this.el.innerHTML = e.text;
                        }
                    }
                ]), e;
            }();
            a.argNames = [
                "text",
                "x",
                "y",
                "affects"
            ], t["default"] = a;
        }
    ]);
});

},{}]},["ldyC4","g1vPt"], "g1vPt", "parcelRequirea4f1")

//# sourceMappingURL=index.c90d79c9.js.map
