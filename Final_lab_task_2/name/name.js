"use strict"



function validate(){

	var username = document.getElementById('username').value;
	
	
	

	if(username == ""){
		document.getElementById('userMsg').innerHTML = "username can't left empty";
		return false;

	}else{
		return true;
	}


}

function remover(){
	document.getElementById('userMsg').innerHTML = "";
}

function xyz(){

	if(document.getElementById('username').value == ""){
		document.getElementById('userMsg').innerHTML = "this field is required!";
	}
}