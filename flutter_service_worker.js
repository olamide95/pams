'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "54b39066b85f1bd4437b1fd08846e907",
"assets/assets/images/advert1.png": "3eea8ca46c6f2eec2f86982bdb934342",
"assets/assets/images/advert2.jpg": "48778cbdc3f17e062001a543242eadc4",
"assets/assets/images/advertrial.jpg": "3db96d9625fc000741127d7f560e0ac6",
"assets/assets/images/boss.jpg": "e3a58ff6a0bf9dcbd6341f70fa792c14",
"assets/assets/images/brand2.jpg": "98fb197f13ba4d4c2899081430213ec2",
"assets/assets/images/branding.png": "caf3ab58814f7073aecf2d40b03227af",
"assets/assets/images/bridal.jpg": "c73fe449b0bd4e07b4c27df6418eaf6a",
"assets/assets/images/bridals2.jpg": "927ca4f18836ef0130de0f13c53ffb7c",
"assets/assets/images/carousel1.jpg": "edff7c54fcd55ee57872f116bf879a1b",
"assets/assets/images/carousel2.jpg": "489434b8530dc24db79348796dc4cbd9",
"assets/assets/images/carousel3.jpg": "fc029c13f34d117b5d9363699a22f428",
"assets/assets/images/carousel4.jpg": "070411b4c5b439913f97877e2fa34599",
"assets/assets/images/culture.jpg": "62be7a29fabc9e61a57d7e2333cc3984",
"assets/assets/images/culture2.jpeg": "a06ca4c6068c91cb05760f4720bbd083",
"assets/assets/images/design.jpg": "b243806d2356dec222dac032b9a067a2",
"assets/assets/images/design2.jpg": "11b35b8c1af388d1c75e8415e6fb332e",
"assets/assets/images/digital.png": "461de5613abcf17bcd3bb32d540537c9",
"assets/assets/images/digital2.jpg": "2441a88d337a727f9c64d48429a4c7cd",
"assets/assets/images/editorial.jpg": "921b28953cfbc87f216c8025e6ee9e8e",
"assets/assets/images/editorialstyle2.jpg": "603f0fd3fd4d3b791434b10756452a2c",
"assets/assets/images/fillustration.jpg": "2c7cee61f98220a97b53d13ce9c69284",
"assets/assets/images/fillustration2.webp": "b6a2c383cb1d8d223668ff7f4e1dddf9",
"assets/assets/images/free2.jpg": "892eddb77a9d8c35a1d0abadc7ff324a",
"assets/assets/images/freehand.jpg": "dd9d8f3790bc86aad87f788f886e7dae",
"assets/assets/images/garment2.jpg": "5653dbde1149a7f69098250bd0441f0c",
"assets/assets/images/garmentcons.jpg": "6bc50d7a3ac5e1fd97df9a5b739ecb53",
"assets/assets/images/job.jpg": "40fc60bb250f81f5bcdac19be8cdbd60",
"assets/assets/images/job2.jpg": "70c2acce028ccdde0c59175d51c53e47",
"assets/assets/images/job3.jpg": "44282bee02cb9fbde0c9b7f74d3a830d",
"assets/assets/images/logo.jpg": "ec0f50d4b02228f76ac7b78c32279b17",
"assets/assets/images/machine2.jpeg": "609a3dec12a37819be639c5f9130c183",
"assets/assets/images/machinebasic.jpeg": "365f403480ec1c3ebb755defcde7bd1b",
"assets/assets/images/manipulationpattern.jpg": "aafe26b9477510e32049cb0c1c5ccb2d",
"assets/assets/images/model.jpg": "2739d54e4c096a02b74b15c360b4ecd9",
"assets/assets/images/Model2.jpg": "9232366c095f388cd2066153398bf42d",
"assets/assets/images/packaging.jpg": "aa75272b7a20de3a3f12a84b2a5221bf",
"assets/assets/images/pakaging2.jpg": "6d02ef6aa368a5f79e66038558d98a69",
"assets/assets/images/pattern2.jpg": "aafe26b9477510e32049cb0c1c5ccb2d",
"assets/assets/images/photo.jpg": "93fc682d6cf0c866a49b81c21ea083f8",
"assets/assets/images/photo2.jpg": "e59db1206f76f6991330c6ff26a5f165",
"assets/assets/images/photo3.jpg": "92bee87aa5bd8699c09a40b1a2a79b78",
"assets/assets/images/photo4.png": "fc3ecb4ee9898a6ee4ca6a7329331632",
"assets/assets/images/portflio.png": "1dc8fb6eb1543157abae940ae34e188c",
"assets/assets/images/portfolio.jpg": "3f80079af65460196f42425aa812581b",
"assets/assets/images/proffesinal.jpg": "5115a503d75f349115e52f5ac055dfd0",
"assets/assets/images/prosewing2.jpeg": "ebcd14229cea68fd4c510e96ed30c495",
"assets/assets/images/protocl2.jpg": "0eb0615bd01c1aa743150e6a2257172f",
"assets/assets/images/protocol.jpg": "4316e8d47d65514025060a32640b4406",
"assets/assets/images/protocol3.jpg": "6a9778ed7c4099772d508e5ec8e25fde",
"assets/assets/images/sewing.jpg": "b282c08110c1ae029e7300cff61499f6",
"assets/assets/images/sewing2.jpg": "92350278f80c3a759c2b80939e1e8217",
"assets/assets/images/Trends2.jpg": "728443b48a35e8c7900434c71cbf96f0",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "2fcd9e31e52fe814a631dd1efaaeccef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "463f194a661113d9b957d1333bab1c73",
"/": "463f194a661113d9b957d1333bab1c73",
"main.dart.js": "5c86b9d7e9303021be781723a6943504",
"manifest.json": "a2b182519dbcc64c8c2319a42ce3f9f7",
"version.json": "2b0c3d8611b71bffb611ebd716b278df"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
