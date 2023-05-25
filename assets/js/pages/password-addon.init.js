
$("#btn-pass1").click(function(){
   
    if($("#newpasswordInput-reg-usuario").get(0).type=="password"){
        $("#newpasswordInput-reg-usuario").get(0).type="text";

    }
    else{
        $("#newpasswordInput-reg-usuario").get(0).type="password";

    }
    
    
});



$("#btn-pass2").click(function(){
   
    if($("#confirmpasswordInput-reg-usuario").get(0).type=="password"){
        $("#confirmpasswordInput-reg-usuario").get(0).type="text";

    }
    else{
        $("#confirmpasswordInput-reg-usuario").get(0).type="password";

    }
    
    
});

$("#password-addon").click(function(){
   
    if($("#password-input").get(0).type=="password"){
        $("#password-input").get(0).type="text";

    }
    else{
        $("#password-input").get(0).type="password";

    }
    
    
});    







