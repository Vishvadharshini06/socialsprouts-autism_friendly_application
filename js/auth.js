// Sign up functionality
document.getElementById('signupBtn').addEventListener('click', function() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert('Sign up successful!');
        window.location.href = 'login.html'; // Redirect to login after sign up
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Signup failed: " + errorMessage);
      });
  });
  
  // Login functionality
  document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        window.location.href = 'home.html'; // Redirect to home page after login
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Login failed: " + errorMessage);
      });
  });
  
  // Check if user is logged in (for home page)
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in
    } else {
      // User is signed out, redirect to login
      window.location.href = 'login.html';
    }
  });
  