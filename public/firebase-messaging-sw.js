// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDuy-Rh6czNs1Jm4LGfFUAdHvB-AIncyng",
  authDomain: "storage-4255a.firebaseapp.com",
  projectId: "storage-4255a",
  storageBucket: "storage-4255a.appspot.com",
  messagingSenderId: "76967828674",
  appId: "1:76967828674:web:8949168713af2353262f5b",
  measurementId: "G-C4CVCPRJQ8",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
