$(document).ready(function(){
    //agrego evento click al boton
    $.get("https://apis.digital.gob.cl/dpa/regiones",function(dataregiones){
        $.each(dataregiones,function(i,itemregion){
            $("#region_cli").append("<option value='"+itemregion.codigo+"'>"+itemregion.nombre+"</option>");
            $("#region_clie").append("<option value='"+itemregion.codigo+"'>"+itemregion.nombre+"</option>");
        });
    });
});
$(document).ready(function(){
    //agrego evento click al boton
    $.get("https://apis.digital.gob.cl/dpa/comunas",function(datacomuna){
        $.each(datacomuna,function(i,itemcomuna){
            $("#comuna_cli").append("<option value='"+itemcomuna.codigo+"'>"+itemcomuna.nombre+"</option>");
            $("#comuna_clie").append("<option value='"+itemcomuna.codigo+"'>"+itemcomuna.nombre+"</option>");
        });
    });
});