const API_URL2='https://alecaroca-vigilant-fishstick-4pr9vw954qwh7qxj-8000.preview.app.github.dev/User/'
const rut1 = document.querySelector('.uno')
const nombre1 = document.querySelector('.dos')
const telefono1 = document.querySelector('.tres')
const email1 = document.querySelector('.cuatro')
const password1 = document.querySelector('.cinco')
const rol1 = "User"
const reg = document.querySelector('.seis')


reg.addEventListener("click",function(event){
    event.preventDefault()
    console.log(rut1)
    fetch(API_URL2, {
        method: 'POST',
        body: JSON.stringify({
          rut: rut1.value,
          nombre: nombre1.value,
          telefono: telefono1.value,
          email: email1.value,
          password: password1.value,
          rol: rol1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            window.location= 'index.html'
        });
})

