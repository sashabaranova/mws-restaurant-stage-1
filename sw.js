const appCache = 'restaurant-reviews-v1';

// Installing the service worker
self.addEventListener('install', event => {

  event.waitUntil(
    caches.open(appCache).then(cache => {
      //cache all the necessary sources for offline
      return cache.addAll([
        '/',
        'index.html',
        'restaurant.html?id=1',
        'restaurant.html?id=2',
        'restaurant.html?id=3',
        'restaurant.html?id=4',
        'restaurant.html?id=5',
        'restaurant.html?id=6',
        'restaurant.html?id=7',
        'restaurant.html?id=8',
        'restaurant.html?id=9',
        'restaurant.html?id=10',
        'css/style.css',
        'css/responsive.css',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        'data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ'
      ]);
    })
  );
});

// Activating the service worker
self.addEventListener('activate', event => console.log('done'));


//Fetch the app info from the cache
self.addEventListener('fetch', event => {
  // console.log(event);
  event.respondWith(
    caches.match(event.request).then(response => {
      if(response) { 
        return response;
      }
      return fetch(event.request);
    }).catch(() => console.log('failed'))
  );
});