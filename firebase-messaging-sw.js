importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAtTHJpBv9WcG3M_b_r1VavxgPgqPHnljE",
  authDomain: "sr-nest.firebaseapp.com",
  projectId: "sr-nest",
  storageBucket: "sr-nest.firebasestorage.app",
  messagingSenderId: "676182127627",
  appId: "1:676182127627:web:40f6189e0a6ab0f8dec30e",
  measurementId: "G-DNSVG70EQ2"
});

const messaging = firebase.messaging();

// Handle background notifications when website/browser is closed
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message: ', payload);

  const notificationTitle = payload?.notification?.title || "SR Nest Alert";
  const notificationOptions = {
    body: payload?.notification?.body || "New house listing update!",
    icon: "1785333686872.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
