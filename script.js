 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAq4O19W6pvpgtEIF_Uz21-S5PJ-pB1qR4",
    authDomain: "momorothportfolio-71b1c.firebaseapp.com",
    databaseURL: "https://momorothportfolio-71b1c.firebaseio.com",
    projectId: "momorothportfolio-71b1c",
    storageBucket: "momorothportfolio-71b1c.appspot.com",
    messagingSenderId: "929938848167",
    appId: "1:929938848167:web:5867e8d74cc579727ade82",
    measurementId: "G-GLCZG817EM"
  };
// Initialize Firebase



firebase.initializeApp(firebaseConfig);
firebase.analytics();

var firestore = firebase.firestore();


//start grabbing out DOM element

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');
let userMessage = document.querySelector('#userMessage');

const db = firestore.collection("formData");

submitBtn.addEventListener('click', function(){
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;

    //Access the Database Collection

    db.doc().set({
        name: userNameInput,
        email: userEmailInput,
        message: userMessageInput
    }).then(function(){
        console.log("Data Saved")
    }).catch(function(error) {
        console.log(error);
    });

    setTimeout(function(){location.reload()}, 2000);
});