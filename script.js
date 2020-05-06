 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCXeOu8_0xMOnHdqgE0lgXfklEUty5BGT8",
    authDomain: "momorothform.firebaseapp.com",
    databaseURL: "https://momorothform.firebaseio.com",
    projectId: "momorothform",
    storageBucket: "momorothform.appspot.com",
    messagingSenderId: "132987864562",
    appId: "1:132987864562:web:6dd00c08e6bbde08fc176b",
    measurementId: "G-K2P5D1HKBL"
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

const db = firestore.collection("contactData");

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