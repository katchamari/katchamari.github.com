 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCq9AQS08zG2w26RvuEDBp5ya_rrh6_yGE",
    authDomain: "momorothportfolio-9f334.firebaseapp.com",
    databaseURL: "https://momorothportfolio-9f334.firebaseio.com",
    projectId: "momorothportfolio-9f334",
    storageBucket: "momorothportfolio-9f334.appspot.com",
    messagingSenderId: "599900453864",
    appId: "1:599900453864:web:8bf6fe234afd48dc62c25d",
    measurementId: "G-REVVFE0VC0"
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

const db = firestore.collection("collectData");

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
});