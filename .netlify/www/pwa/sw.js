/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/pwa/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://developers.google.com/web/tools/workbox/guides/troubleshoot-and-debug
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0-beta.1/workbox-sw.js'); // Install newest
// https://developers.google.com/web/tools/workbox/modules/workbox-core

workbox.core.skipWaiting();
workbox.core.clientsClaim(); // Cache static assets that aren't precached

workbox.routing.registerRoute(/\.(?:js|css)$/, new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'static-resources'
})); // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.

workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'google-fonts-stylesheets'
})); // Cache the underlying font files with a cache-first strategy for 1 year.

workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, new workbox.strategies.CacheFirst({
  cacheName: 'google-fonts-webfonts',
  plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({
    statuses: [0, 200]
  }), new workbox.expiration.ExpirationPlugin({
    maxAgeSeconds: 60 * 60 * 24 * 365,
    // 1 Year
    maxEntries: 30
  })]
})); // MESSAGE HANDLER

self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        // TODO: We'll eventually want this to be user prompted
        // workbox.core.skipWaiting();
        // workbox.core.clientsClaim();
        // TODO: Global notification to indicate incoming reload
        break;

      default:
        console.warn("SW: Invalid message type: ".concat(event.data.type));
    }
  }
});
workbox.precaching.precacheAndRoute([{"revision":"e3ca557deaf9ccfbfb57985b4e447e42","url":"/pwa/0.5feedf27ef74f7069093.css"},{"revision":"5726d2028a6f2032cc734594cd8cbb04","url":"/pwa/1.bundle.5c80b2389163c8e91148.js"},{"revision":"37c6b1e97da96446a8c1dfb903184661","url":"/pwa/14.5feedf27ef74f7069093.css"},{"revision":"91b6c23a11b09c321f30238964716d9a","url":"/pwa/14.bundle.cd22439e2d49a3fd0098.js"},{"revision":"9ff9b56ea5522e64f153bd7f70930987","url":"/pwa/15.bundle.146e301dc41246804aaf.js"},{"revision":"2625d1e558407a60e7b9a096615ba423","url":"/pwa/16.5feedf27ef74f7069093.css"},{"revision":"b053fc227b9b1ab110605428981ee5ca","url":"/pwa/16.bundle.2f72c0de715f5d82adfc.js"},{"revision":"0d1e0ee6f4c39443bd90445d815fd501","url":"/pwa/17.bundle.8618b7f6bfa90a14b12c.js"},{"revision":"fe04d40614b14e94aca705374f2db650","url":"/pwa/18.bundle.90dfd386cbdc5eda3f52.js"},{"revision":"8861a175fc7c28967fe8dcdcf70964a0","url":"/pwa/19.bundle.a15b441fa08a3ed2e689.js"},{"revision":"d49e7063605b47ad6e5d8382b944cfb9","url":"/pwa/3.5feedf27ef74f7069093.css"},{"revision":"0731d3258f53b657979535b290f4c7a3","url":"/pwa/7.5feedf27ef74f7069093.css"},{"revision":"8af2c6c91bc6536ec596f02e50d7a2d9","url":"/pwa/8.5feedf27ef74f7069093.css"},{"revision":"8936b699fa3ea64c3b7f840fb31e3702","url":"/pwa/CallbackPage.bundle.82552a0a160232d61dfb.js"},{"revision":"cfcab9eae18b2e402176c22cff484f42","url":"/pwa/ConnectedStandaloneRouting.bundle.49a335f0f5fba11772fb.js"},{"revision":"08d237d2aa1b8dd6b19bc772971e9195","url":"/pwa/ConnectedStandaloneRouting~IHEInvokeImageDisplay~StudyListRouting~ViewerLocalFileData~ViewerRouting.bundle.8b8e3e3212b153efcc5f.js"},{"revision":"a267092be0b6f25057318847de158f5d","url":"/pwa/ConnectedStandaloneRouting~IHEInvokeImageDisplay~ViewerRouting.bundle.03292c1c2b1f5259b3f5.js"},{"revision":"fd1f9c4229450c213161d19736a0e81e","url":"/pwa/IHEInvokeImageDisplay.bundle.69c975a506036f4a11f7.js"},{"revision":"b85d7bf9b31aed4e4aef9c678830a0b9","url":"/pwa/StudyListRouting.bundle.b51f69cb200c04e8691c.js"},{"revision":"720ec25c0e3f6f91eee8394f5c6d8b53","url":"/pwa/ViewerLocalFileData.bundle.6a257abc35e49579b59b.js"},{"revision":"a13ccd439bc4196680d71efdadda3185","url":"/pwa/ViewerRouting.bundle.e2c022ba1d76f8fdc070.js"},{"revision":"ededccf159dd937ce535858fb939ef03","url":"/pwa/app-config.js"},{"revision":"7abc8c1ad3f039edb1fab10aa8a662f4","url":"/pwa/app.5feedf27ef74f7069093.css"},{"revision":"473e74a795f5a95dcfba304960bbcdf8","url":"/pwa/assets/Button_File.svg"},{"revision":"271da60b435c1445580caab72e656818","url":"/pwa/assets/Button_Folder.svg"},{"revision":"cb4f64534cdf8dd88f1d7219d44490db","url":"/pwa/assets/android-chrome-144x144.png"},{"revision":"5cde390de8a619ebe55a669d2ac3effd","url":"/pwa/assets/android-chrome-192x192.png"},{"revision":"e7466a67e90471de05401e53b8fe20be","url":"/pwa/assets/android-chrome-256x256.png"},{"revision":"9bbe9b80156e930d19a4e1725aa9ddae","url":"/pwa/assets/android-chrome-36x36.png"},{"revision":"5698b2ac0c82fe06d84521fc5482df04","url":"/pwa/assets/android-chrome-384x384.png"},{"revision":"56bef3fceec344d9747f8abe9c0bba27","url":"/pwa/assets/android-chrome-48x48.png"},{"revision":"3e8b8a01290992e82c242557417b0596","url":"/pwa/assets/android-chrome-512x512.png"},{"revision":"517925e91e2ce724432d296b687d25e2","url":"/pwa/assets/android-chrome-72x72.png"},{"revision":"4c3289bc690f8519012686888e08da71","url":"/pwa/assets/android-chrome-96x96.png"},{"revision":"cf464289183184df09292f581df0fb4f","url":"/pwa/assets/apple-touch-icon-1024x1024.png"},{"revision":"0857c5282c594e4900e8b31e3bade912","url":"/pwa/assets/apple-touch-icon-114x114.png"},{"revision":"4208f41a28130a67e9392a9dfcee6011","url":"/pwa/assets/apple-touch-icon-120x120.png"},{"revision":"cb4f64534cdf8dd88f1d7219d44490db","url":"/pwa/assets/apple-touch-icon-144x144.png"},{"revision":"977d293982af7e9064ba20806b45cf35","url":"/pwa/assets/apple-touch-icon-152x152.png"},{"revision":"6de91b4d2a30600b410758405cb567b4","url":"/pwa/assets/apple-touch-icon-167x167.png"},{"revision":"87bff140e3773bd7479a620501c4aa5c","url":"/pwa/assets/apple-touch-icon-180x180.png"},{"revision":"647386c34e75f1213830ea9a38913525","url":"/pwa/assets/apple-touch-icon-57x57.png"},{"revision":"0c200fe83953738b330ea431083e7a86","url":"/pwa/assets/apple-touch-icon-60x60.png"},{"revision":"517925e91e2ce724432d296b687d25e2","url":"/pwa/assets/apple-touch-icon-72x72.png"},{"revision":"c9989a807bb18633f6dcf254b5b56124","url":"/pwa/assets/apple-touch-icon-76x76.png"},{"revision":"87bff140e3773bd7479a620501c4aa5c","url":"/pwa/assets/apple-touch-icon-precomposed.png"},{"revision":"87bff140e3773bd7479a620501c4aa5c","url":"/pwa/assets/apple-touch-icon.png"},{"revision":"05fa74ea9c1c0c3931ba96467999081d","url":"/pwa/assets/apple-touch-startup-image-1182x2208.png"},{"revision":"9e2cd03e1e6fd0520eea6846f4278018","url":"/pwa/assets/apple-touch-startup-image-1242x2148.png"},{"revision":"5591e3a1822cbc8439b99c1a40d53425","url":"/pwa/assets/apple-touch-startup-image-1496x2048.png"},{"revision":"337de578c5ca04bd7d2be19d24d83821","url":"/pwa/assets/apple-touch-startup-image-1536x2008.png"},{"revision":"cafb4ab4eafe6ef946bd229a1d88e7de","url":"/pwa/assets/apple-touch-startup-image-320x460.png"},{"revision":"d9bb9e558d729eeac5efb8be8d6111cc","url":"/pwa/assets/apple-touch-startup-image-640x1096.png"},{"revision":"038b5b02bac8b82444bf9a87602ac216","url":"/pwa/assets/apple-touch-startup-image-640x920.png"},{"revision":"2177076eb07b1d64d663d7c03268be00","url":"/pwa/assets/apple-touch-startup-image-748x1024.png"},{"revision":"4fc097443815fe92503584c4bd73c630","url":"/pwa/assets/apple-touch-startup-image-750x1294.png"},{"revision":"2e29914062dce5c5141ab47eea2fc5d9","url":"/pwa/assets/apple-touch-startup-image-768x1004.png"},{"revision":"f692ec286b3a332c17985f4ed38b1076","url":"/pwa/assets/browserconfig.xml"},{"revision":"f3d9a3b647853c45b0e132e4acd0cc4a","url":"/pwa/assets/coast-228x228.png"},{"revision":"533ba1dcac7b716dec835a2fae902860","url":"/pwa/assets/favicon-16x16.png"},{"revision":"783e9edbcc23b8d626357ca7101161e0","url":"/pwa/assets/favicon-32x32.png"},{"revision":"0711f8e60267a1dfc3aaf1e3818e7185","url":"/pwa/assets/favicon.ico"},{"revision":"5df2a5b0cee399ac0bc40af74ba3c2cb","url":"/pwa/assets/firefox_app_128x128.png"},{"revision":"11fd9098c4b07c8a07e1d2a1e309e046","url":"/pwa/assets/firefox_app_512x512.png"},{"revision":"27cddfc922dca3bfa27b4a00fc2f5e36","url":"/pwa/assets/firefox_app_60x60.png"},{"revision":"2017d95fae79dcf34b5a5b52586d4763","url":"/pwa/assets/manifest.webapp"},{"revision":"cb4f64534cdf8dd88f1d7219d44490db","url":"/pwa/assets/mstile-144x144.png"},{"revision":"334895225e16a7777e45d81964725a97","url":"/pwa/assets/mstile-150x150.png"},{"revision":"e295cca4af6ed0365cf7b014d91b0e9d","url":"/pwa/assets/mstile-310x150.png"},{"revision":"cbefa8c42250e5f2443819fe2c69d91e","url":"/pwa/assets/mstile-310x310.png"},{"revision":"aa411a69df2b33a1362fa38d1257fa9d","url":"/pwa/assets/mstile-70x70.png"},{"revision":"5609af4f69e40e33471aee770ea1d802","url":"/pwa/assets/yandex-browser-50x50.png"},{"revision":"cfea70d7ddc8f06f276ea0c85c4b2adf","url":"/pwa/assets/yandex-browser-manifest.json"},{"revision":"0ca44a1b8719e835645ffa804a9d1395","url":"/pwa/es6-shim.min.js"},{"revision":"fc5ca61e7823972f5c8fd43675770bc8","url":"/pwa/google.js"},{"revision":"b55559b663a93add78d83e68240c680e","url":"/pwa/index.html"},{"revision":"4e41fd55c08031edf19119a1df1a0538","url":"/pwa/init-service-worker.js"},{"revision":"74fc9658b62903be2048c1f82a22b4d4","url":"/pwa/manifest.json"},{"revision":"754d698a7b334af57c00f29723fd9751","url":"/pwa/oidc-client.min.js"},{"revision":"d05a380d50b74e629738ae6f62fb7e78","url":"/pwa/polyfill.min.js"},{"revision":"f528b6861c82ee4415fce0821fd695c1","url":"/pwa/silent-refresh.html"},{"revision":"08db519ea92e553895df7f04b663a3ab","url":"/pwa/vendors~ConnectedStandaloneRouting~IHEInvokeImageDisplay~ViewerLocalFileData~ViewerRouting.bundle.3ca8c126adc0014e6a2c.js"},{"revision":"03f851c91b3ba9bd507e232328312849","url":"/pwa/vendors~ViewerLocalFileData.bundle.c3c1aa4c747c468c1ef6.js"},{"revision":"95b5883499c865c5ea4b5ee3daa09d8d","url":"/pwa/vendors~dicom-microscopy-viewer.bundle.a302554eeb7720077f75.js"}]); // TODO: Cache API
// https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api
// Store DICOMs?
// Clear Service Worker cache?
// navigator.storage.estimate().then(est => console.log(est)); (2GB?)

/***/ })
/******/ ]);