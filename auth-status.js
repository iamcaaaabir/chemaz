// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBW8V1lVacM_pxHxG_gc-nRQ0NGoyxzv4c",
  authDomain: "chemaz.firebaseapp.com",
  projectId: "chemaz",
  storageBucket: "chemaz.firebasestorage.app",
  messagingSenderId: "912959029271",
  appId: "1:912959029271:web:d248c17ea45923cb601c52"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  const profileIcon = document.querySelector(".profile-icon img");
  const profileLink = document.querySelector(".profile-icon a");

  if (user) {
    profileIcon.src = user.photoURL || "images/profile-default.jpg";
    profileLink.href = "profile.html";
    profileIcon.title = user.displayName || user.email;
  } else {
    profileIcon.src = "images/profile-default.jpg";
    profileLink.href = "login.html";
    profileIcon.title = "Login / Register";
  }
});
