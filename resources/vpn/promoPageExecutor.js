/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4284:
/***/ ((module) => {

module.exports = {
  'freeServersOverloaded': {
    'id': 'bFv7cG41QoaXVWWa-9V2yw',
    //'event': 'firstProxyOnClick',
    'taskNumber': 326,
    // 963
    'type': 'event'
  },
  'missingLocationLink': {
    'id': 'DWeBbv86SGeGNI1ybCjN7g',
    'taskNumber': 243,
    'type': 'event',
    'event': 'onboarding.install'
  },
  'pollBanner': {
    'id': 'HMjiQzYTS3C2C6cBKhU3kw',
    'event': 'onboarding.install',
    'taskNumber': 254,
    // 928
    'type': 'event'
  },
  'premiumComparisonOnFirstPopup': {
    'id': 'RbZW13_0RoebnWwdw-4EoQ',
    'event': 'onboarding.install',
    'taskNumber': 262,
    // 879
    'type': 'event'
  },
  'premiumOverlayOnPopupOpen': {
    'id': 'Ei89c9qLRLeTZiCbZTieRw',
    'event': 'onboarding.install',
    'taskNumber': 152,
    // 882
    'type': 'event'
  },
  'promotionPageAfterInstall': {
    'id': 'F7-JutvlRxyTa7TXyce1hg',
    'event': 'onboarding.install',
    'taskNumber': 284,
    // 892
    'type': 'event'
  },
  'startupTips': {
    'id': 'K-aZZ8D4TiqWrwrK8MBfKQ',
    'event': 'onboarding.install',
    'version': '3.55.0',
    'taskNumber': 152,
    // 970
    'type': 'event'
  }
};

/***/ }),

/***/ 4019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const experiments = __webpack_require__(4284);

module.exports = {
  'type': 'production',
  'name': {
    'chrome': '__MSG_extension_name_chrome__',
    'edge': 'Browsec VPN - Free VPN for Edge',
    'firefox': 'Browsec VPN - Free VPN for Firefox',
    'opera': 'Browsec VPN - Free VPN for Opera'
  },
  'shortName': 'Browsec VPN',
  'description': {
    'chrome': '__MSG_extension_description_chrome__',
    'edge': 'Browsec VPN is an Edge VPN extension that protects your IP from Internet threats and lets you browse privately for free.',
    'firefox': 'Browsec VPN is a Firefox VPN extension that protects your IP from Internet threats and lets you browse privately for free.',
    'opera': 'Browsec VPN is an Opera VPN extension that protects your IP from Internet threats and lets you browse privately for free.'
  },
  'apiServerUrls': ['https://browsec.com/api/v1', 'https://drah7iczdw1tu.cloudfront.net/v1'],
  'baseUrl': 'https://browsec.com',
  'ga': {
    'enabled': true,
    'extension_id': ['omghfjlpggmjjaagoclmmobgdodcjboh', 'dknfpcdpbkjijldegonllfnnfhabjpde', '05908b89-695d-4687-aa36-6d87f42a464d' // NOTE temporary
    ],
    'tracking_id': 'UA-43024042-1',
    'chance': 0.01,
    'fullTrackingId': 'UA-43024042-3'
  },
  'auth': {
    // When disabled, users can't login/register
    'enabled': true
  },
  'proxy': {
    'defaultCountry': 'nl'
  },
  experiments
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
/* global NodeListOf */
// Chrome V2 only

const configExperiments = new Map();

for (const [name, {
  id,
  taskNumber
}] of Object.entries((config__WEBPACK_IMPORTED_MODULE_0___default().experiments))) {
  configExperiments.set(id, {
    name,
    taskNumber
  });
}

const sendMessage = message => {
  if (typeof browser !== 'undefined') {
    return browser.runtime.sendMessage(message);
  }

  return new Promise(resolve => {
    chrome.runtime.sendMessage(message, resolve);
  });
};

const domLoaded = (async () => {
  const state = document.readyState;
  if (state !== 'loading') return;
  await new Promise(resolve => {
    window.addEventListener('DOMContentLoaded', resolve);
  });
})();

const experimentsPromise = sendMessage({
  'type': 'promo page: get experiments'
});

(async () => {
  const [{
    daysAfterInstall,
    experiments
  }] = await Promise.all([experimentsPromise, domLoaded]);
  const expvarid = [];

  for (const [id, variant] of Object.entries(experiments)) {
    if (!configExperiments.has(id)) continue;
    const {
      taskNumber
    } = configExperiments.get(id);
    expvarid.push(`exp${taskNumber}_${variant}`);
  }

  {
    const variant = experiments.exp329;
    if (variant) expvarid.push('exp329_' + variant);
  }
  const links = document.querySelectorAll('a[href*="/orders/new"]');

  for (const link of links) {
    const url = link.href;
    const urlObject = new URL(url);
    urlObject.searchParams.set('instd', String(daysAfterInstall));

    if (expvarid.length) {
      urlObject.searchParams.set('expvarid', expvarid.join(','));
    }

    link.href = urlObject.toString();
    link.addEventListener('click', () => {
      sendMessage({
        'type': 'promo page: click'
      });
    });
  }
})();
})();

/******/ })()
;