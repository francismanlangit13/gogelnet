var username = document.login.username;
var password = document.login.password;
var allIds = [ "clickPass", "memberClick" ];

infologin.innerHTML = "Enter the Voucher Code then click Login";
username.placeholder = "Voucher Code";

// auto uncheck show password
function uncheck( event ) 
{
   var id = event.target.id;
   allIds.forEach( function( id ){
      if ( id != event.target.id )
      {
         document.getElementById( id ).checked = false;
      }
   });
}

// set password = username
function setpass() {
    var user = username.value
    //user = user.toLowerCase();
    username.value = user;
}

username.onkeyup = setpass;

// change to voucher mode
function voucher() {
	text.style.display = "none";
    //username.focus();
    username.onkeyup = setpass;
    username.placeholder = "Voucher Code";
    username.style = "border-radius:3px;"
    password.type = "hidden";
    infologin.innerHTML = "Enter the Voucher Code then click Login";
}

// change to member mode
function member() {
    text.style.display = "block";
    //username.focus();
    username.onkeyup = "";
    username.placeholder = "User ID";
    username.style = "border-radius:3px 3px 0px 0px;"
    password.type = "password";
	  password.placeholder = "Password";
    infologin.innerHTML = "Enter User ID and Password then click Login";
	showpass.onkeyup = "setshow";
}

// show password
function showpass() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

jQuery("#clickPass").click(uncheck);
jQuery("#memberClick").click(uncheck);
