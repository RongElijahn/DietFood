function submitHandler(){
	var name=document.getElementById("username1");
	var passwd=document.getElementById("password1");
	var cpasswd=document.getElementById("cpassword");
	if(name.value === ""){
		var reply=confirm("Name is empty!");
		return false;
	}
	if(passwd.value === ""){
	    var reply=confirm("Password is empty!");
		return false;
	}
	if(cpasswd.value === ""){
	    var reply=confirm("Confirm Password is empty!");
		return false;
	}
	if(cpasswd.value === passwd.value){
        var reply=confirm("This item is added successfully! "+name.value+","+passwd.value+","+cpasswd.value+"Jump into Login page now?");
        if(reply){
           window.location.href='index.html';
           return false;
        }else{
        	return true;
        }
	}else{
		var reply =confirm("Please make sure confirm password is same as password!");
		passwd.value="";
		cpasswd.value="";
		return false;
	}
}


function resetHandler(){
	document.getElementById("username1").value="";
	document.getElementById("password1").value="";
	document.getElementById("cpassword").value="";
	var reply=confirm("Reset successfully! ");
}