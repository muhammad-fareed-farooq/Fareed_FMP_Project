  var firebaseConfig = {
    apiKey: "AIzaSyBAwM1HEMqAL_z-K2b1HbxuENNoj1ln3Ws",
    authDomain: "auth-586de.firebaseapp.com",
    projectId: "auth-586de",
    storageBucket: "auth-586de.appspot.com",
    messagingSenderId: "323778141524",
    appId: "1:323778141524:web:8c232054ec73e27f98fcc1",
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  function getNext() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.href = "signin.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
  