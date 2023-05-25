Client= ["Christian Osorio","Victor Gonzalez","Luis Romero","Delivery S.A", "Pointec", "Daniela Martinez"];
Equipo= ["Notebook dell","Impresora Hp","Pc personal"];
Empleado= ["Christian Caroca","Victor Otero","Victor Bustos"];

var autoCompleteClient=new autoComplete({
selector:"#autoCompleteClient",
placeHolder:"Busca por nombre de cliente",
data:{src: Client,
cache:!0},
resultsList:{element:function(e,t){
    var l;
    t.results.length||((l=document.createElement("div")).setAttribute("class","no_result"),
    l.innerHTML='<span>No encontramos resultados para "'+t.query+'"</span>',
    e.prepend(l))},noResults:!0},
    resultItem:{highlight:!0},
    events:{input:{
    selection:function(e){e=e.detail.selection.value;autoCompleteClient.input.value=e}}}});

var autoCompleteEmpleado=new autoComplete({
selector:"#autoCompleteEmpleado",
placeHolder:"Busca entre los empleados",
data:{src: Empleado,
cache:!0},
resultsList:{element:function(e,t){
    var l;
    t.results.length||((l=document.createElement("div")).setAttribute("class","no_result"),
    l.innerHTML='<span>No encontramos resultados para "'+t.query+'"</span>',
    e.prepend(l))},noResults:!0},
    resultItem:{highlight:!0},
    events:{input:{
    selection:function(e){e=e.detail.selection.value;autoCompleteEmpleado.input.value=e}}}});
