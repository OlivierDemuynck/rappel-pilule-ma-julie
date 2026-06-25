importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCNQArb_KpJuRiJ_7H3lfPFpNrVmrO6G_4",
  authDomain: "pilule-julie.firebaseapp.com",
  projectId: "pilule-julie",
  storageBucket: "pilule-julie.firebasestorage.app",
  messagingSenderId: "455161985108",
  appId: "1:455161985108:web:88f913e246d887725195c1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(() => {});
