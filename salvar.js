let user = document.getElementById('usuario');
let pass = document.getElementById('password');
let mail = document.getElementById('email');

function Salvar(){
        let x;
        let f;
     if(document.querySelector('#usuario').value.length == 0){
        x = "Porfavor digite o nome do usuario";
        msgAlert(x);
     }else if(document.querySelector('#password').value.length == 0){
        x = "Porfavor digite a senha";
        msgAlert(x);
     }else if(document.querySelector('#email').value.length == 0){
        x = "Porfavor digite o email";
        msgAlert(x);
     }else{
         f = "Cadastro feito com sucesso!";
         msgSucess(f);
        localStorage.usuario = user.value;
        localStorage.password = pass.value;
        localStorage.email = mail.value;
     }
}
        
