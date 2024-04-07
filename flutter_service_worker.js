'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dbc45f9f9601cab3c1369dab0c4975e6",
"assets/AssetManifest.bin.json": "3cd35ff0b4f99d58db51d6017ccceb05",
"assets/AssetManifest.json": "e0943023ba7a3b1914d8c3878b7d8d44",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "90e1df8c35792651f88aeb18c7c24c05",
"assets/lib/Assets/12t.jpg": "c40acc4cfd629c644a08670dc708f348",
"assets/lib/Assets/animations/homeanimation.json": "ac26449753397c1aab4c6a662364dfec",
"assets/lib/Assets/animations/id.json": "b8cfe9f44bf1120f6d9beb29365c93cd",
"assets/lib/Assets/animations/loading.json": "f4adaf48c7a246a52eec82b04a968dbd",
"assets/lib/Assets/belowicon.png": "d7034c38d3f133f225cb9a6af9d6c4fd",
"assets/lib/Assets/clockwise.png": "b8e990bf73aa4e0fd24cafaaacf22b3b",
"assets/lib/Assets/DL.png": "59e495973da67871c13298e74c209caf",
"assets/lib/Assets/doneDL.png": "00ca1d60ab18f31d45fc43d6a893a98f",
"assets/lib/Assets/doneNIC.png": "dd3c68984b922f94adb56a5cf100cef5",
"assets/lib/Assets/government.png": "b8a0ff1cb2cae3fa51e9aebda33846e6",
"assets/lib/Assets/homepagepic.png": "445721037461f44c953492af40ad0ec2",
"assets/lib/Assets/ID.png": "66b35a251ee0ffda07d813793bf883ae",
"assets/lib/Assets/Inquiry.png": "6fa854e77862457fc81794455d728cef",
"assets/lib/Assets/lists.png": "efbb1989bdf5e86240327bec1cbdc579",
"assets/lib/Assets/Login.png": "6e07a8fb30262151de1655a775bf5982",
"assets/lib/Assets/logo.png": "10871a2b15251783606437ed634ef5d6",
"assets/lib/Assets/loop/0.jpg": "aa8b9e1458c1931a746b228002fe1747",
"assets/lib/Assets/loop/1.jpg": "e3a8ab6ed2532e366ba6f725a1a36237",
"assets/lib/Assets/loop/14.jpg": "e7f624e6a5a745ef71b6b64d9b9f089c",
"assets/lib/Assets/loop/15.jpg": "b0f66d3b5cd80e008079eba593dd58b7",
"assets/lib/Assets/loop/2.jpg": "31ed9ba7cad19967d1852227053da91a",
"assets/lib/Assets/loop/3.jpg": "8de72c469295a5c8ade38df9728c66e2",
"assets/lib/Assets/loop/4.jpg": "08fe7f5129b87571ee0c19a8f9509128",
"assets/lib/Assets/loop/8.jpg": "46bee38dd76a1e13998aa855d0026297",
"assets/lib/Assets/Passport.png": "5a1c44e8cf0238e4006a03d10faf86c8",
"assets/lib/Assets/people.png": "2efe48b199f49f0d6d2ea6fe5b59dc00",
"assets/lib/Assets/person.png": "b63b5a5ef1ec1e57b0e58b0bcfd5ad8f",
"assets/lib/Assets/RegisterPages/adminLogin.jpg": "b59695ab8880be45a9827f4e2cb6b001",
"assets/lib/Assets/RegisterPages/adminRegister.png": "6006caf7acbba305177dc75c508db7a0",
"assets/lib/Assets/RegisterPages/apple.png": "d1d8c4c61532c1a0f595661e813ae852",
"assets/lib/Assets/RegisterPages/facebook.png": "a304a3d1bb7983865263383a6611ed1f",
"assets/lib/Assets/RegisterPages/google.png": "855cffeb015e2b513cc96eda92f6c452",
"assets/lib/Assets/RegisterPages/user.png": "fe358aaa440815e407dc3213719b3f36",
"assets/lib/Assets/serve.png": "c66bceecc7fb49f1ca043bf2ae1b1a3a",
"assets/lib/Assets/signup.png": "92e2a101d80231d1e62964b0af270321",
"assets/lib/Assets/smDL.png": "fb0022365ec146b537d8c0ef7ba77696",
"assets/lib/Assets/smNIC.png": "4230033fee43e745a2b3e7c43a261ef9",
"assets/lib/Assets/verified.png": "be0f3ffb45fbf378e4fbe95c47c4b710",
"assets/NOTICES": "c27fc989797c7552ff435ef566f74c63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "940440f64c9f2a9f55aca56d48741455",
"/": "940440f64c9f2a9f55aca56d48741455",
"main.dart.js": "6c764d67f3c86091d685557bfea5fe81",
"manifest.json": "4ce0e7078e3d5d1fa44f2e8564079767",
"shims/file_picker.shim.dart": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "79d35fc39415b6933bc27f48a3431dbd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
