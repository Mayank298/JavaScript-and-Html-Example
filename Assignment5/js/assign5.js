
function validationFun(){
    var a = fnamevalidate();//FIRST NAME VALIDATION
    var b = phonenumber();//PHONE NUMBER  NAME VALIDATION
    var c = lnamevalidate();//LAST NAME VALIDATION
    var d = passwordValidation();//password validation
    var e = repasswordValidation()//confirm password validation
    var f = Myselectvalidation();//Education select validation
    if(a && b && c && d && e && f){
        return true;
    }
    else{
        return false;
    }
}

function fnamevalidate() {
    var x = document.querySelector("#fname").value;
    var str = /['-]/;
    var alp = /[a-zA-Z]/;
    var mx = /^[a-zA-z'-]+$/;
    var num = /[0-9]/;
    if (x.trim().length==0) {
        var msg = document.getElementById('errfn2');      
        document.getElementById("fname").focus();
        document.getElementById('errfn2').innerHTML="First Name must be filled out and only allow alphabet ( ' ) and ( - ).";
        //document.getElementById('#errfn2').innerHTML="Name must be filled out";
        return false;
    }
    else if(alp.test(x)==false){ 
        var msg = document.getElementById('errfn2');      
        document.getElementById("errfn2").innerHTML="First name can require minimum one alphabet and allow ( ' ) and ( - ).";
        document.getElementById("fname").focus();
        return false;
    }
    else if(mx.test(x) && num.test(x)!=true){
        document.getElementById('errfn2').innerHTML="";
        return true;
    }
    else{
        document.getElementById('errfn2').innerHTML="Last name can require minimum one alphabet and allow ( ' ) and ( - ).";
        document.getElementById('fname').focus();
        return false; 
    }
}

function lnamevalidate() {
    var x = document.querySelector("#lname").value;
    var str = /['-]/;
    var alp = /[a-zA-Z]/;
    var mx = /^[a-zA-z'-]+$/;
    var num = /[0-9]/;
    if (x.trim().length==0) {
        document.getElementById('errfn3').innerHTML="Last Name must be filled out and only allow alphabet ( ' ) and ( - ).";
        document.getElementById('lname').focus();
        return false;
    }
    else if(alp.test(x)==false){ 
        document.getElementById('errfn3').innerHTML="Last name can require minimum one alphabet and allow ( ' ) and ( - ).";
        document.getElementById('lname').focus();
        return false;
    }
    else if(mx.test(x) && num.test(x)!=true){
        document.getElementById('errfn3').innerHTML="";
        return true;
    }
    else{
        document.getElementById('errfn3').innerHTML="Last name can require minimum one alphabet and allow ( ' ) and ( - ).";
        document.getElementById('lname').focus();
        return false; 
    }
}

function phonenumber()  
{  
  var x = document.querySelector("#pnum").value;    
  var chk;
  var tel = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;  
  chk = document.getElementById('pnum').value.substring(0, 3);
  if(tel.test(x) && x.trim().length>=10 && chk >= 100 && chk <=999){  
        document.getElementById('errfn4').innerHTML=""
        return true;  
  }  
  else if(x.trim().length<10){  
        document.getElementById('errfn4').innerHTML ="<b> X</b> The area code of phone number 999-999-9999 can't be all zeros And 10 digit long.";  
        document.getElementById('pnum').focus();
        return false;  
  } 
  else{
        document.getElementById('errfn4').innerHTML ="<b> X</b> The area code of phone number 999-999-9999 can't be all zeros.";  
        document.getElementById('pnum').focus();
        return false;  
  } 
}  

function passwordValidation(){
    var x = document.querySelector("#password").value;
    var let = /[a-z]/;
    var upp = /[A-Z]/; 
    var num = /[0-9]/;
    var sps = /[ ]/;

    if(let.test(x)!=true){
        document.getElementById('errfn0').innerHTML ="Password Must contain at least one lower case.";  
        document.getElementById('password').focus(); 
        return false;
    }

    else if(upp.test(x)!= true){
        document.getElementById('errfn0').innerHTML ="Password Must contain at least one upper case.";  
        document.getElementById('password').focus(); 
        return false;
    }

    else if(num.test(x)!= true){
        document.getElementById('errfn0').innerHTML ="Password Must contain at least one number.";  
        document.getElementById('password').focus(); 
        return false;
    }

    else if(let.test(x) && upp.test(x) && x.length>7 && num.test(x) && sps.test(x)==false){
        document.getElementById('errfn0').innerHTML="";
        return true;  
    }

    else if(x.trim().length<8 || x.length==0){
        document.getElementById('errfn0').innerHTML ="Password must be Alphanumeric and minimum 8 characters long.";  
        document.getElementById('password').focus(); 
        return false;
    }

    else{
        document.getElementById('errfn0').innerHTML ="Password must be Alphanumeric.";  
        document.getElementById('password').focus();
        return false;  
    } 
  
}

function repasswordValidation(){
    if(document.getElementById('password').value == document.getElementById('repassword').value){
        document.getElementById('errfn1').innerHTML="";
        return true;
    }
    else if(document.getElementById('password').value ==""){
        document.getElementById('errfn1').innerHTML ="Password and Confirm Password must be same and cannot empty.";  
        document.getElementById('password').focus();
    }
    else{
        document.getElementById('errfn1').innerHTML ="Password and Confirm Password must be same.";  
        document.getElementById('repassword').focus();
        return false;
    }
}

function Myselectvalidation(){

        var x = document.getElementById('selectlstedu').value;
       // var SelectedText = myselect.options[myselect.selectedIndex].text;
        if (x == 0) {
            document.getElementById('errfn5').innerHTML ="You must select one option from the menu list.";  
            document.getElementById('selectlstedu').focus();
            return false;
        }
        else {
            
            document.getElementById('errfn5').innerHTML="";
            return true;
        }
}