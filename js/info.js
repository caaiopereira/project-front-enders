let user = document.getElementById('usuario');
let pass = document.getElementById('password');
  
function Salvar(){
    localStorage.usuario = user.value;
    localStorage.password = pass.value;
}
