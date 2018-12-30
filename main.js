$( document ).ready(function() {

    // Firebase Form Handler
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC80YTA3E5OlnXQxCyteZ1sIlvKiC02gB8",
    authDomain: "personal-site-530ed.firebaseapp.com",
    databaseURL: "https://personal-site-530ed.firebaseio.com",
    projectId: "personal-site-530ed",
    storageBucket: "",
    messagingSenderId: "997342755133",
  };
  firebase.initializeApp(config);

// Typewriter Effect

var app = document.getElementById('menu_header');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('Hello! My Name Is James!')
    .pauseFor(2000)
    .deleteAll()
    .typeString('I Build Custom Websites')
    .pauseFor(2000)
    .deleteChars(15)
    .typeString('<strong>Ecommerce Sites</strong>')
    .pauseFor(2000)
    .deleteChars(15)
    .typeString('<strong>Whatever You Need!</strong>')
    .pauseFor(3000)
    .start();

// Mobile Side Nav
$('.hamburger_icon_img').on('click',function(){
    document.getElementById("mySidenav").style.width = "250px";
});

$('.closebtn').on('click',function(){
    document.getElementById("mySidenav").style.width = "0"; 
});



//setup before functions
var typingTimer;                //timer identifier
var typeInterval = 150;  //time in ms, 5 second for example
var $input = $('#first_name');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, typeInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
  //do something
$( ".hidden" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
  $(this).fadeIn('slow');
});
}

$("#firebase_submit").on('click',function(event){
      // Get a reference to the database service
    event.preventDefault();
    data();
});

function data(){

    var user_first_name = document.getElementById('first_name').value;
    var user_last_name = document.getElementById('last_name').value;
    var user_email = document.getElementById('email_address').value;
    var user_website = document.getElementById('website_type').value;
    var user_additional = document.getElementById('additional_info').value;

    var user_data = {
        First_Name: user_first_name,
        Last_Name: user_last_name,
        Email: user_email,
        Website_Type: user_website,
        Additional: user_additional
    }
    var database = firebase.database();
    FormSubmit(database,user_data);
}
  // Form Submit
function FormSubmit(database,user_data){
    // Sending The Form Inputs to the db
    console.log(user_data);
  database.ref('leads').push(user_data);
}
});