
const firebaseConfig = {
    apiKey: "AIzaSyDesLMUlbjs4UrmUOHZot2gvZFiwjlgJNw",
    authDomain: "kwitter-9ed36.firebaseapp.com",
    databaseURL: "https://kwitter-9ed36-default-rtdb.firebaseio.com",
    projectId: "kwitter-9ed36",
    storageBucket: "kwitter-9ed36.appspot.com",
    messagingSenderId: "399153153365",
    appId: "1:399153153365:web:ea9ed5b647c73922399bdc"
  };
  
   firebase.initializeApp(firebaseConfig);
function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}