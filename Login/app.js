var email = document.getElementById("email")
var pass = document.getElementById("password")
var form = document.getElementById("form")
var error_mesg = document.getElementById("error")


function validation(){
    //alert("HI")
    console.log(email.value);
    console.log(password.value);
    if(password.value == '123' && email.value === "jahedulalamrifat@gmail.com")
    {
        form.action="welcome.html"
    }
    if(email.value !== "jahedulalamrifat@gmail.com")
    {
        error_mesg.style.display = "inline"
        email.style.border = '1px solid red'
    }
        
}