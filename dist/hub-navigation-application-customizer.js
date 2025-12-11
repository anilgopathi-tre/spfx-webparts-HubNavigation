define("c5d3e4f5-a6b7-8901-cdef-234567890123_0.0.1", ["@microsoft/sp-application-base","@microsoft/sp-core-library"], function(__WEBPACK_EXTERNAL_MODULE_GPet__, __WEBPACK_EXTERNAL_MODULE_UWqr__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "cDVi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "GPet":
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/*! no static exports found */
/*! exports used: BaseApplicationCustomizer */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_GPet__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: Log */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "cDVi":
/*!****************************************************************************!*\
  !*** ./lib/extensions/hubNavigation/HubNavigationApplicationCustomizer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-application-base */ "GPet");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LOG_SOURCE = 'HubNavigationApplicationCustomizer';
/**
 * Application Customizer that highlights ONLY the current site in hub navigation
 * All other menu items remain with normal font weight
 */
var HubNavigationApplicationCustomizer = /** @class */ (function (_super) {
    __extends(HubNavigationApplicationCustomizer, _super);
    function HubNavigationApplicationCustomizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.styleElement = null;
        _this.currentSiteUrl = '';
        _this.currentSiteName = '';
        _this.observer = null;
        return _this;
    }
    HubNavigationApplicationCustomizer.prototype.onInit = function () {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Log"].info(LOG_SOURCE, 'Initialized HubNavigationApplicationCustomizer');
        // Get current site URL and extract site name
        this.currentSiteUrl = this.context.pageContext.web.absoluteUrl.toLowerCase();
        this.currentSiteName = this.extractSiteName(this.currentSiteUrl);
        console.log('[HubNav] ====================================');
        console.log('[HubNav] Current Site URL:', this.currentSiteUrl);
        console.log('[HubNav] Current Site Name:', this.currentSiteName);
        console.log('[HubNav] ====================================');
        // Inject styles
        this.injectStyles();
        // Initial highlight
        this.highlightCurrentSite();
        // Watch for DOM changes (mega menu opening)
        this.setupObserver();
        // Listen for navigation
        this.context.application.navigatedEvent.add(this, function () {
            _this.highlightCurrentSite();
        });
        return Promise.resolve();
    };
    HubNavigationApplicationCustomizer.prototype.onDispose = function () {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.removeStyles();
    };
    /**
     * Extract site name from URL (e.g., "dev-anil-standard-communication")
     */
    HubNavigationApplicationCustomizer.prototype.extractSiteName = function (url) {
        var match = url.match(/\/(sites|teams)\/([^\/\?#]+)/i);
        return match ? match[2].toLowerCase() : '';
    };
    /**
     * Setup mutation observer
     */
    HubNavigationApplicationCustomizer.prototype.setupObserver = function () {
        var _this = this;
        this.observer = new MutationObserver(function () {
            _this.highlightCurrentSite();
        });
        this.observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    };
    /**
     * Highlight current site
     */
    HubNavigationApplicationCustomizer.prototype.highlightCurrentSite = function () {
        var _this = this;
        [100, 300, 600, 1000, 2000].forEach(function (delay) {
            setTimeout(function () { return _this.applyHighlight(); }, delay);
        });
    };
    /**
     * Apply highlight to ONLY the current site link
     */
    HubNavigationApplicationCustomizer.prototype.applyHighlight = function () {
        var _this = this;
        // First, clear ALL previous highlights
        document.querySelectorAll('[data-current-site="true"]').forEach(function (el) {
            el.removeAttribute('data-current-site');
        });
        // Find all anchor links
        var allLinks = document.querySelectorAll('a[href]');
        allLinks.forEach(function (link) {
            var anchor = link;
            var href = (anchor.href || '').toLowerCase();
            var linkSiteName = _this.extractSiteName(href);
            // STRICT match - only exact site name
            if (linkSiteName && linkSiteName === _this.currentSiteName) {
                var linkText = (anchor.textContent || '').trim();
                console.log('[HubNav] ★ MATCH - Making BOLD:', linkText);
                // Mark this element and its children
                anchor.setAttribute('data-current-site', 'true');
                // Mark parent li
                var parentLi = anchor.closest('li');
                if (parentLi) {
                    parentLi.setAttribute('data-current-site', 'true');
                }
            }
        });
    };
    /**
     * Inject CSS styles using data attribute selector
     */
    HubNavigationApplicationCustomizer.prototype.injectStyles = function () {
        if (this.styleElement)
            return;
        var styles = "\n      /* ==============================================\n         CURRENT SITE ONLY = BOLD\n         Everything else = NORMAL (browser default)\n         ============================================== */\n      \n      /* Target ONLY elements with data-current-site attribute */\n      [data-current-site=\"true\"],\n      [data-current-site=\"true\"] span,\n      [data-current-site=\"true\"] > a,\n      [data-current-site=\"true\"] > a span,\n      li[data-current-site=\"true\"] > a,\n      li[data-current-site=\"true\"] > a span,\n      a[data-current-site=\"true\"],\n      a[data-current-site=\"true\"] span {\n        font-weight: 700 !important;\n      }\n\n      /* Highlight background for dropdown item */\n      li[data-current-site=\"true\"] {\n        background-color: #e8f4fc !important;\n        border-left: 4px solid #0078d4 !important;\n      }\n\n      /* Text color for current site */\n      li[data-current-site=\"true\"] > a,\n      li[data-current-site=\"true\"] > a span,\n      a[data-current-site=\"true\"],\n      a[data-current-site=\"true\"] span {\n        color: #0078d4 !important;\n      }\n    ";
        this.styleElement = document.createElement('style');
        this.styleElement.id = 'hub-nav-highlight';
        this.styleElement.textContent = styles;
        document.head.appendChild(this.styleElement);
        console.log('[HubNav] Styles injected');
    };
    /**
     * Remove styles and attributes
     */
    HubNavigationApplicationCustomizer.prototype.removeStyles = function () {
        if (this.styleElement && this.styleElement.parentNode) {
            this.styleElement.parentNode.removeChild(this.styleElement);
            this.styleElement = null;
        }
        document.querySelectorAll('[data-current-site]').forEach(function (el) {
            el.removeAttribute('data-current-site');
        });
    };
    return HubNavigationApplicationCustomizer;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__["BaseApplicationCustomizer"]));
/* harmony default export */ __webpack_exports__["default"] = (HubNavigationApplicationCustomizer);


/***/ })

/******/ })});;
//# sourceMappingURL=hub-navigation-application-customizer.js.map