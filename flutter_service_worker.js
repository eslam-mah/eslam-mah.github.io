'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d5874fb6057bff9be01975b184df2155",
"assets/AssetManifest.bin.json": "620d03df7aba991689f2ba617e3ac509",
"assets/AssetManifest.json": "450ea92fb0e995f419b03e89b4d3ecdd",
"assets/assets/icons/1_20250114_100739_0000.png": "f0f135ce0fe33fa02a837d9e5a723351",
"assets/assets/icons/2_20250114_100739_0001.png": "af614e8211afe05196b350684f137b0f",
"assets/assets/icons/3_20250114_100739_0002.png": "61c428f004a9952d85401361d7c1e754",
"assets/assets/icons/4_20250114_103641_0000.png": "c5a7f5a36a212bf807ca27459931c61f",
"assets/assets/icons/5_20250114_103641_0001.png": "4ba5e983533534d888b785430028aba5",
"assets/assets/icons/download.gif": "87f1a49d2451487c471b8004ace06a5c",
"assets/assets/icons/pngwing.com%2520(1).png": "2fa277552b620e8275a07a442ea8cd0f",
"assets/assets/icons/pngwing.com.png": "a75127b07e697fdb6714770ef1e1f54b",
"assets/assets/icons/T%2520(Business%2520Card)_20250114_104402_0000.png": "f5547786465b42e519d18b85ea2018b8",
"assets/assets/icons/T%2520(Business%2520Card)_20250114_104817_0000.png": "8d34abf4e86e4228b64926871f14e6cc",
"assets/assets/icons/T_20250114_105256_0000.png": "415124754df307b7ac2f7534ad689fd0",
"assets/assets/icons/T_20250114_105256_0001.png": "e43c47e78c254fdd2d8ec4b1d320923c",
"assets/assets/icons/T_20250114_105503_0000.png": "2f76643bb350ba0f597d8a236b2949d4",
"assets/assets/icons/T_20250114_105611_0000.png": "9a54b2a5829a44bf2c69e9e8cfcd1fc7",
"assets/assets/images/Blue%2520and%2520White%2520Modern%2520Data%2520Analystics%2520Service%2520Instagram%2520Post.png": "db488e108bdcd5846f2b8c996d92f540",
"assets/assets/images/Blue%2520Modern%2520Business%2520Envelope%2520(1).png": "dabece0db9bc3a79f35a6e9be06e9abb",
"assets/assets/images/Blue%2520Modern%2520Business%2520Envelope%2520(2).png": "94b999d8c8320d809dd7e53640bf5d8d",
"assets/assets/images/Blue%2520Modern%2520Business%2520Envelope%2520(Responsive%2520Presentation)%2520(1).png": "b07a181fd1c7c74cda3325902c2c28fc",
"assets/assets/images/Blue%2520Modern%2520Business%2520Envelope%2520(Responsive%2520Presentation).png": "c3b0f12aca7a4b12a2ad4ddd9cc9cfe7",
"assets/assets/images/Colorful%2520Planner%2520Mobile%2520App%2520Promotion%2520Instagram%2520Post.png": "cfe5f8f1061631637c0b0f513490cd41",
"assets/assets/images/Grey%2520And%2520Blue%2520Modern%2520Transforming%2520Visions%2520Into%2520Digital%2520Realities%2520Instagram%2520Post%2520(2).png": "c9e44009343a165055c7d41f17992755",
"assets/assets/images/Grey%2520And%2520Blue%2520Modern%2520Transforming%2520Visions%2520Into%2520Digital%2520Realities%2520Instagram%2520Post%2520(3).png": "522f36737535a3ec652a928a2290c0e0",
"assets/assets/images/Grey%2520And%2520Blue%2520Modern%2520Transforming%2520Visions%2520Into%2520Digital%2520Realities%2520Instagram%2520Post%2520(4).png": "4c15683cbb0c854f78bcc12a9160f945",
"assets/assets/images/Grey%2520And%2520Blue%2520Modern%2520Transforming%2520Visions%2520Into%2520Digital%2520Realities%2520Instagram%2520Post%2520(5).png": "41877d3f70e5352bc4d902f74bcfdb5e",
"assets/assets/images/Grey%2520And%2520Blue%2520Modern%2520Transforming%2520Visions%2520Into%2520Digital%2520Realities%2520Instagram%2520Post%2520(7).png": "e055a3e70439fbd1134e32571d72d660",
"assets/assets/images/Grey%2520And%2520Blue%2520Modern%2520Transforming%2520Visions%2520Into%2520Digital%2520Realities%2520Instagram%2520Post%2520(8).png": "c583f5c851941af3c2aaefcfc5c55bc9",
"assets/assets/images/Purple%2520and%2520Pink%2520Gradient%2520Modern%2520Bold%2520Mobile%2520App%2520Presentation.png": "e8930f0b0e9aa897bb219ca9766d84d6",
"assets/assets/images/Visit%2520Our%2520Website%2520for%2520Instagram%2520Post.png": "0aca030a2b872bd86bf347f4f081e169",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "ddd1de2a702900df7e5117273e1ca635",
"assets/NOTICES": "44b5b8e597a853f250969a4cfeebe2fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f4f95fb5e01ef267ae4389e5cabc30e5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a4fc787697b7396791728d02353006c3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6d50b89ee30ae7efadfcbb8c6c5b9df8",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "7a08d9ed9133de2ef6592d8587c48d49",
"icons/Icon-192.png": "ae6ac1a89b7b6ed016f60530520f9f63",
"icons/Icon-512.png": "870663014ba0b879ba52802a4b42dc89",
"icons/Icon-maskable-192.png": "2947a65762479a7f43af16ed3c41c293",
"icons/Icon-maskable-512.png": "eb610b4e30fda97ed93b579a69854b05",
"index.html": "a80b5a6a8b5ec484244cd00c6a9df6c7",
"/": "a80b5a6a8b5ec484244cd00c6a9df6c7",
"main.dart.js": "8524a5140f24ec4613ad6bdadd95be36",
"manifest.json": "c00688bcb5a48d69914b92a182012244",
"version.json": "c14b066fc37d038d6636018ac9b2a987"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
