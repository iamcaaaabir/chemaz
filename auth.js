// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBW8V1lVacM_pxHxG_gc-nRQ0NGoyxzv4c",
  authDomain: "chemaz.firebaseapp.com",
  projectId: "chemaz",
  storageBucket: "chemaz.firebasestorage.app",
  messagingSenderId: "912959029271",
  appId: "1:912959029271:web:d248c17ea45923cb601c52",
  measurementId: "G-BJBH348Z5D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// --- Login ---
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("auth-message").innerText = "✅ Logged in successfully!";
      setTimeout(() => {
        window.location.href = "profile.html";
      }, 1000);
    })
    .catch(error => {
      document.getElementById("auth-message").innerText = "❌ " + error.message;
    });
}

// --- Register ---
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("auth-message").innerText = "✅ Registered successfully!";
      setTimeout(() => {
        window.location.href = "profile.html";
      }, 1000);
    })
    .catch(error => {
      document.getElementById("auth-message").innerText = "❌ " + error.message;
    });
}

// --- Password Reset ---
function resetPassword() {
  const email = document.getElementById("email").value;
  if (!email) {
    alert("Please enter your email first.");
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert("✅ Password reset email sent! Check your inbox.");
    })
    .catch(error => {
      alert("❌ Error: " + error.message);
    });
}

// --- Delete Account ---
function deleteAccount() {
  if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
    const user = auth.currentUser;

    if (user) {
      user.delete()
        .then(() => {
          alert("Your account has been deleted.");
          window.location.href = "index.html";
        })
        .catch(error => {
          if (error.code === 'auth/requires-recent-login') {
            alert("Please log in again to delete your account.");
            auth.signOut().then(() => {
              window.location.href = "login.html";
            });
          } else {
            alert("Error: " + error.message);
          }
        });
    } else {
      alert("No user is currently logged in.");
    }
  }
}
