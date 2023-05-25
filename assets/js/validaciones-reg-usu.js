$( document ).ready(function(){
//Validaciones registro-empleado
    $("#error").hide();
    $("#registro_usuario").submit(function(){
    
    //VARIABLES
    var nomb_usu = $("#firstnameInput-reg-usuario").val();
    var run_usu = $("#runInput-reg-usuario").val();
    var nac_usu = $("#birth-reg-usuario").val();
    var phone_usu = $("#phonenumberInput-reg-usuario").val();
    var email_usu = $("#emailInput-reg-usuario").val();
    var cred_nomb_usu = $("#username-reg-usuario").val();  
    var contra_usu = $("#newpasswordInput-reg-usuario").val();
    var confirm_contra_usu = $("#confirmpasswordInput-reg-usuario").val();
    var confirm_contra_usu = $("#confirmpasswordInput-reg-usuario").val();
    var numero ;
    let mensajeMostrar = "";


//VALIDACIONES DE INFO DEL USUARIO;

    //validaciones nombre usuario
    if(nomb_usu.trim().length < 4 || nomb_usu.trim().length > 30){
        mensajeMostrar += "La longitud del nombre no es correcta<br>";
    }

    if(nomb_usu ==""){
        mensajeMostrar += "El nombre no puede ser vacio<br>";
    }

    //validaciones run usuario
    if(run_usu.trim().length < 9 || run_usu.trim().length > 9){
        mensajeMostrar += "La longitud del run no es correcta<br>";
    }

    //validaciones celular usuario
    if(phone_usu.trim().length < 9 || phone_usu.trim().length > 9){
        mensajeMostrar += "La longitud del celular no es correcta<br>";
    }

    if(phone_usu ==""){
        mensajeMostrar += "El celular no puede ser vacio<br>";
    }

    //validaciones email usuario
    if(email_usu ==""){
        mensajeMostrar += "El email no puede ser vacio<br>";
    }





//VALIDACIONES CREDENCIALES;

    //validaciones nombre de usuario
    if(cred_nomb_usu.trim().length < 4 || cred_nomb_usu.trim().length > 8){
        mensajeMostrar += "La longitud del nombre de usuario no es correcta<br>";
    }

    letra=cred_nomb_usu.charAt(0).toUpperCase();
    if(cred_nomb_usu.charAt(0)!=letra){
        mensajeMostrar += "La primera letra del nombre de usuario es minuscula<br>";
     
    }


    //validaciones contraseña de usuario
    if(contra_usu.trim().length < 4 || contra_usu.trim().length > 8){
        mensajeMostrar += "La longitud de la contraseña no es correcta<br>";
    }

    letra=contra_usu.charAt(0).toUpperCase();
    if(contra_usu.charAt(0)!=letra){
        mensajeMostrar += "La primera letra de la contraseña es minuscula<br>";
     
    }

    if(contra_usu ==""){
        mensajeMostrar += "La contraseña no puede ser vacia<br>";
    }


    if (contra_usu.match(/\d/)) {
        $('#error').removeClass('invalid').addClass('valid');
        numero = true;
      } else {
        $('#error').removeClass('valid').addClass('invalid');
        numero = false;
      }

    if(numero==false){
        mensajeMostrar += "la contraseña debe contener al menos un numero<br>";
    }
    


    //validaciones confirmar contraseña de usuario
    if(confirm_contra_usu.trim().length < 4 || confirm_contra_usu.trim().length > 8){
        mensajeMostrar += "La longitud de la confirmacion de contraseña no es correcta<br>";
    }

    letra=confirm_contra_usu.charAt(0).toUpperCase();
    if(confirm_contra_usu.charAt(0)!=letra){
        mensajeMostrar += "La primera letra de la confirmacion de contraseña es minuscula<br>";
    }

    if(contra_usu!=confirm_contra_usu){
        mensajeMostrar += "las contraseñas no coinciden<br>";
    }

    if(confirm_contra_usu ==""){
        mensajeMostrar += "La confirmacion de contraseña no puede ser vacia<br>";
    }





//----------------------------------------------------


    if(mensajeMostrar !=""){
        $("#error").html(mensajeMostrar);
        $("#error").show();
        event.preventDefault();
    }
    else{
        alert("los datos son correctos");
        $("#error").hide();
        mensajeMostrar="";
        event.preventDefault();
    }
  




    });


  
});

