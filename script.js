let password =document.getElementById("password");
let eyeicon =document.getElementById("eye-icon");

eyeicon.onclick = function(){
    if(password.type =="password"){
        password.type="text";
        eyeicon.src="eye-open.png";

    }else{
        password.type="password";
        eyeicon.src="eye-close.png";
    }
}