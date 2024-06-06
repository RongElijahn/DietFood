function loginHandler(){
	var name=document.getElementById("username");
	var passwd=document.getElementById("password");
	if(name.value === ""){
		var reply=confirm("Name is empty!");
		return false;
	}
	if(passwd.value === ""){
	    var reply=confirm("Password is empty!");
		return false;
	}
	var reply=confirm("This item is added successfully! "+name.value+","+passwd.value);
}



