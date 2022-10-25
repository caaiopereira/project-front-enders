let user = document.getElementById('usuario');
let pass = document.getElementById('password');
let mail = document.getElementById('email');


document.querySelector('#btn').addEventListener('click', (e) => {
    e.preventDefault();
        let x;
     if(document.querySelector('#usuario').value.length == 0){
        x = "Por favor digite o nome do usuario";
        msgAlert(x,false);
     }else if(document.querySelector('#email').value.length == 0){
        x = "Por favor digite o email";
        msgAlert(x,false);
     }else if(document.querySelector('#password').value.length == 0){
        x = "Por favor digite a senha";
        msgAlert(x,false);
     }else if(document.querySelector('#confirm_password').value.length == 0){ 
        x = "Por favor digite a confirmação de senha";
        msgAlert(x,false);
    }else if(document.querySelector('#rg').value.length == 0){ 
        x = "Por favor digite o RG";
        msgAlert(x,false);
    }else if(document.querySelector('#cpf').value.length == 0){ 
        x = "Por favor digite o CPF";
        msgAlert(x,false);
    }else if(document.querySelector('#cep').value.length == 0){ 
        x = "Por favor digite o CEP";
        msgAlert(x,false);
    }else{
        x = "Cadastro feito com sucesso!";
        msgAlert(x,true);
        localStorage.usuario = user.value;
        localStorage.password = pass.value;
        localStorage.email = mail.value;
        document.querySelector(`#form-mail input`).value = "";
        document.querySelector(`#form-user input`).value = "";
        document.querySelector(`#form-pass input`).value = "";
        document.querySelector(`#form-conf-pass input`).value = "";
        document.querySelector(`#form-rg input`).value = "";
        document.querySelector(`#form-cpf input`).value = "";
        document.querySelector(`#form-cep input`).value = "";
        document.querySelector(`#form-rua input`).value = "";
        document.querySelector(`#form-bairro input`).value = "";
        document.querySelector(`#form-city input`).value = "";
        document.querySelector(`#form-uf input`).value = "";
        document.querySelector(`#form-ibge input`).value = "";
     }
});
