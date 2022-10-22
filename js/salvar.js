let user = document.getElementById('usuario');
let pass = document.getElementById('password');
let mail = document.getElementById('email');
  
function Salvar(){
    localStorage.usuario = user.value;
    localStorage.password = pass.value;
    localStorage.email = mail.value;
}
