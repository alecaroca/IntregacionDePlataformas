const API_URL2='https://alecaroca-vigilant-fishstick-4pr9vw954qwh7qxj-8000.preview.app.github.dev/User/'

const aplication = document.querySelector('.app');
const usuario = document.querySelector('.usuario');
const password = document.querySelector('.clave');
const btn = document.querySelector('.btnSubmit')


$("#alertSI").hide();
$("#alertNO").hide();

btn.addEventListener("click",function(event){
    event.preventDefault()
  
    if(usuario.value =="" || password.value==""){
        $("#alertSI").fadeTo(2000, 500).slideUp(500, function(){
            $("#alertNO").slideUp(500);
        });
    }else{
        fetch(API_URL2+usuario.value)
        .then(response=> response.json())
        .then(data2 => {
            console.log(data2)
            if(data2.rut == usuario.value & data2.password == password.value){
                window.location= 'inicio.html'
                sessionStorage.setItem('token',usuario.value)
            }
            else{
                $("#alertNO").fadeTo(2000, 500).slideUp(500, function(){
                    $("#alertNO").slideUp(500);
                });
            }
        })
        .catch(error => console.log(error))
    }  
})


    
    










/* 
    fetch(API_URL)
        .then(response=> response.json())
        .then(data => {
            console.log(data)
            let body = '';
            data.forEach(data => {
                body += `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.email}</td></tr>`
            });
            console.log(data)
            document.getElementById('app').innerHTML = body
        })
        .catch(error => console.log(error))
 */


        