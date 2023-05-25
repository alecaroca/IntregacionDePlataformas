const salir = document.querySelector('#salirr')

salir.addEventListener("click",function(event){
    event.preventDefault()
    sessionStorage.removeItem('token')
    window.location = 'index.html'
})
