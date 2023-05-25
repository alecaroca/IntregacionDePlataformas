$( document ).ready(function(){
    $("#msgerror").hide();
    $("#msgerror2").hide();
    $("#msgerror3").hide();
    $("#msgerror4").hide();
    $("#form1cli").submit(function(){
    //Variables
    
    var rut_cli = $("#Run_cli").val();
    var nom_cli = $("#Nomra_cli").val();
    var fant_cli = $("#Nomfan_cli").val();
    var cel_cli = $("#Celular_cli").val();
    var fijo_cli = $("#tel_cli").val();
    var mail_cli = $("#email_cli").val();
    var direcc_cli= $("#direc_cli").val();
    var mostrarmensaje="";


    if(rut_cli.trim().length > 16){
        mostrarmensaje += "La longitud del rut es erronea<br>";
    }
    if(nom_cli.trim().length > 16){
        mostrarmensaje += "La longitud del nombre/razon social es erronea<br>";
    }
    if(fant_cli.trim().length > 16){
        mostrarmensaje += "La longitud del nombre de fantasia es erronea<br>";
    }
    if(cel_cli.trim().length > 16){
        mostrarmensaje += "La longitud del celular es erronea<br>";
    }
    if(fijo_cli.trim().length > 16){
        mostrarmensaje += "La longitud del telefono fijo es erronea<br>";
    }
    if(mail_cli.trim().length > 16){
        mostrarmensaje += "La longitud del email es erronea<br>";
    }
    if(direcc_cli.trim().length > 16){
        mostrarmensaje += "La longitud de la direccion es erronea<br>";
    }
    if(mostrarmensaje !=""){
        $("#msgerror").html(mostrarmensaje);
        $("#msgerror").show();
        event.preventDefault();
    }
    else{
        alert("los datos son correctos");
        $("#msgerror").hide();
        mostrarmensaje="";
        event.preventDefault();
    }
    });
    $("#form2cli").submit(function(){
        //Variables
        
        var rut_clie = $("#Run_clie").val();
        var nom_clie = $("#Nomra_clie").val();
        var fant_clie = $("#Nomfan_clie").val();
        var cel_clie = $("#Celular_clie").val();
        var fijo_clie = $("#tel_clie").val();
        var mail_clie = $("#email_clie").val();
        var direcc_clie= $("#direc_clie").val();
        var mostrarmensaje2="";
    
    
        if(rut_clie.trim().length > 16){
            mostrarmensaje2 += "La longitud del rut es erronea<br>";
        }
        if(nom_clie.trim().length > 16){
            mostrarmensaje2 += "La longitud del nombre/razon social es erronea<br>";
        }
        if(fant_clie.trim().length > 16){
            mostrarmensaje2 += "La longitud del nombre de fantasia es erronea<br>";
        }
        if(cel_clie.trim().length > 16){
            mostrarmensaje2 += "La longitud del celular es erronea<br>";
        }
        if(fijo_clie.trim().length > 16){
            mostrarmensaje2 += "La longitud del telefono fijo es erronea<br>";
        }
        if(mail_clie.trim().length > 16){
            mostrarmensaje2 += "La longitud del email es erronea<br>";
        }
        if(direcc_clie.trim().length > 16){
            mostrarmensaje2 += "La longitud de la direccion es erronea<br>";
        }
        if(mostrarmensaje !=""){
            $("#msgerror2").html(mostrarmensaje2);
            $("#msgerror2").show();
            event.preventDefault();
        }
        else{
            alert("los datos son correctos");
            $("#msgerror2").hide();
            mostrarmensaje2="";
            event.preventDefault();
        }
        });
        $("#form1equipo").submit(function(){
            //Variables
            
            var modeleq = $("#modeloeq").val();
            var noserieq = $("#noserieeq").val();
            var contraeq = $("#passeq").val();
            var componeq = $("#componeq").val();
            var mostrarmensaje3 = "";
        
        
            if(modeleq.trim().length > 16){
                mostrarmensaje3 += "La longitud del modelo es erronea<br>";
            }
            if(noserieq.trim().length > 20){
                mostrarmensaje3 += "La longitud del numero de serie es erronea<br";
            }
            if(contraeq.trim().length > 20){
                mostrarmensaje3 += "La longitud de la contraseña es erronea<br>";
            }
            if(componeq.trim().length > 200){
                mostrarmensaje3 += "La longitud de los componentes es erronea<br>";
            }
            
            if(mostrarmensaje3 !=""){
                $("#msgerror3").html(mostrarmensaje3);
                $("#msgerror3").show();
                event.preventDefault();
            }
            else{
                alert("los datos son correctos");
                $("#msgerror3").hide();
                mostrarmensaje3="";
                event.preventDefault();
            }
            });
            $("#formot").submit(function(){
                //Variables
                var razondis = $("#Razon_d").val();
                var tipoeqdis = $("#Tequipo_d").val();
                var problema = $("#Problemaot").val();
                var mostrarmensaje4 = "";
                if(razondis ==""){
                    mostrarmensaje4 += "Falta escoger cliente<br>";
                }
                if(tipoeqdis==""){
                    mostrarmensaje4 += "Falta escoger un equipo<br>";
                }
                if(problema.trim().length > 200){
                    mostrarmensaje4 += "La longitud del texto del problema es erronea<br>";
                }
                if(mostrarmensaje4 !=""){
                    $("#msgerror4").html(mostrarmensaje4);
                    $("#msgerror4").show();
                    event.preventDefault();
                }
                else{
                    alert("los datos son correctos");
                    $("#msgerror4").hide();
                    mostrarmensaje4="";
                    event.preventDefault();
                }
                });
});