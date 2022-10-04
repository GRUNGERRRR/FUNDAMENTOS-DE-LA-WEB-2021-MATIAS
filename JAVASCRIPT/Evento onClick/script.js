function changeName(evento) {
    console.log(evento.innerText=="Login");
    if (evento.innerText=="Login") {
        evento.innerText="Logout"
    }else{
        evento.innerText="Login"
    }
}
function eliminar(evento) {
    evento.remove()
}