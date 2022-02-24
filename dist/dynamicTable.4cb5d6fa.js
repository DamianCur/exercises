// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"tableData.json":[function(require,module,exports) {
module.exports = [{
  "_id": "5e9df382fc302216f08b46b1",
  "name": "Ivy Mitchell",
  "age": 40,
  "gender": "female",
  "company": "TALAE",
  "email": "ivymitchell@talae.com",
  "phone": "+1 (838) 597-2008",
  "tags": ["cupidatat", "et", "ad", "incididunt", "velit", "sint", "non"]
}, {
  "_id": "5e9df38220c8ca67ea7903ae",
  "name": "Francine Fleming",
  "age": 31,
  "gender": "female",
  "company": "ZEDALIS",
  "email": "francinefleming@zedalis.com",
  "phone": "+1 (857) 548-3417",
  "tags": ["culpa", "elit", "aute", "officia", "reprehenderit", "nulla", "aute"]
}, {
  "_id": "5e9df38249740035c46a0e8e",
  "name": "Buckley Harper",
  "age": 33,
  "gender": "male",
  "company": "MARKETOID",
  "email": "buckleyharper@marketoid.com",
  "phone": "+1 (931) 478-3483",
  "tags": ["Lorem", "commodo", "quis", "eu", "labore", "exercitation", "in"]
}, {
  "_id": "5e9df382b76d365bb162751c",
  "name": "Pollard Farley",
  "age": 23,
  "gender": "male",
  "company": "UNCORP",
  "email": "pollardfarley@uncorp.com",
  "phone": "+1 (969) 592-2232",
  "tags": ["commodo", "culpa", "eiusmod", "minim", "ipsum", "minim", "proident"]
}, {
  "_id": "5e9df3820b489f341a421aa7",
  "name": "Esperanza Gates",
  "age": 32,
  "gender": "female",
  "company": "OVERFORK",
  "email": "esperanzagates@overfork.com",
  "phone": "+1 (928) 540-3318",
  "tags": ["sit", "qui", "labore", "ea", "veniam", "non", "dolor"]
}, {
  "_id": "5e9df3826ce9a9c66e5fbece",
  "name": "Mccarthy Brooks",
  "age": 23,
  "gender": "male",
  "company": "CODAX",
  "email": "mccarthybrooks@codax.com",
  "phone": "+1 (886) 592-3578",
  "tags": ["eiusmod", "aliqua", "tempor", "nostrud", "anim", "tempor", "occaecat"]
}, {
  "_id": "5e9df382ec22953b82005d4b",
  "name": "Beverley Kramer",
  "age": 40,
  "gender": "female",
  "company": "ZYPLE",
  "email": "beverleykramer@zyple.com",
  "phone": "+1 (873) 440-2676",
  "tags": ["aliquip", "ipsum", "sint", "enim", "adipisicing", "et", "nostrud"]
}, {
  "_id": "5e9df38208f097558c905bff",
  "name": "Wyatt Pace",
  "age": 25,
  "gender": "male",
  "company": "RUBADUB",
  "email": "wyattpace@rubadub.com",
  "phone": "+1 (932) 592-2306",
  "tags": ["minim", "elit", "magna", "aliquip", "qui", "voluptate", "aute"]
}, {
  "_id": "5e9df3820a02091cc1a39663",
  "name": "Hood Browning",
  "age": 22,
  "gender": "male",
  "company": "BIOSPAN",
  "email": "hoodbrowning@biospan.com",
  "phone": "+1 (835) 565-2597",
  "tags": ["voluptate", "dolore", "qui", "sunt", "ea", "aute", "veniam"]
}, {
  "_id": "5e9df3823dc9e1a5ba14a100",
  "name": "Jaime Alvarez",
  "age": 34,
  "gender": "female",
  "company": "ISOLOGICA",
  "email": "jaimealvarez@isologica.com",
  "phone": "+1 (974) 498-3471",
  "tags": ["laboris", "ut", "et", "excepteur", "aliqua", "consequat", "labore"]
}];
},{}],"utility.ts":[function(require,module,exports) {
"use strict"; // // const createAndAddElements = (parentElement: HTMLElement, elementToCreate: string, elementQuantity: number): any => {
// for (let i = 0; i < elementQuantity; i++) {
//     const childElement = document.createElement(elementToCreate)
//     parentElement.appendChild(childElement)

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addChildToParent = exports.createElement = void 0; // }
// }

var createElement = function createElement(elementToCreate) {
  var createdElement = document.createElement(elementToCreate);
  return createdElement;
};

exports.createElement = createElement;

var addChildToParent = function addChildToParent(parent, child) {
  parent.appendChild(child);
};

exports.addChildToParent = addChildToParent;
},{}],"dynamicTable.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tableData_json_1 = __importDefault(require("./tableData.json"));

var utility_1 = require("./utility");

var createTable = function createTable() {
  var getDataKeys = Object.keys(tableData_json_1.default[0]); //czy data[0] to poprawny zapis?

  var wrapper = document.querySelector(".wrapper");
  var table = utility_1.createElement("table");
  var tableHead = utility_1.createElement("thead");
  var tableRow = utility_1.createElement("tr");
  console.log(getDataKeys);
};

createTable();
},{"./tableData.json":"tableData.json","./utility":"utility.ts"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61800" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dynamicTable.ts"], null)
//# sourceMappingURL=/dynamicTable.4cb5d6fa.js.map