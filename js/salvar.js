let user = document.getElementById('usuario');
let pass = document.getElementById('password');
let mail = document.getElementById('email');

function Salvar(){
        let x;
     if(document.querySelector('#usuario').value.length == 0){
        x = "Porfavor digite o nome do usuario";
        msgAlert(x,false);
     }else if(document.querySelector('#password').value.length == 0){
        x = "Porfavor digite a senha";
        msgAlert(x,false);
     }else if(document.querySelector('#email').value.length == 0){
        x = "Porfavor digite o email";
        msgAlert(x,false);
     }else{ 
         x = "Cadastro feito com sucesso!"
         msgAlert(x,true);
        localStorage.usuario = user.value;
        localStorage.password = pass.value;
        localStorage.email = mail.value;
     }
}
 