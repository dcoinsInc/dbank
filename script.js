var firstname;
var lastname;
var username;
var password;
var password2;
var email;

function register(){
    location.href = "register.html";
}

function loginfo(){
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;
    email = document.getElementById("email").value;
    infotest()
}

function infotest(){
    console.log(firstname)
    console.log(lastname)
    console.log(username)
    console.log(password)
    console.log(password2)
    console.log(email)
}