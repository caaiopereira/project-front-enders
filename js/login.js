// função
function Login() {
  // variáveis
    var done=0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    senha=senha.toLowerCase();
      //alert se  der certo
    if (usuario=="z" && senha=="z") {  
      swal({
    title: "Sucesso",
    text: "Login Efetuado",
    icon: "success",
    button: false,
    });
          // função para ir para pagina inicial
      setTimeout(function(){window.location="index.html"},1250);
     }  // alerte se da erro
    else if (done==0) { swal("Erro de Login!", "Usuári ou Senha incorreta", "error"); }
  }
  
