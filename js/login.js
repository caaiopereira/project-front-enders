// função
  function Login() {
    let done = 0;
    let user = document.getElementsByName('login')[0].value;
    let pass = document.getElementsByName('senha')[0].value;

    if (user == localStorage.usuario && pass == localStorage.password) {
      swal({
    title: "Sucesso",
    text: "Login Efetuado, Você será direcionado a página inicial!",
    icon: "success",
    button: false,
    });
          // função para ir para pagina inicial
      setTimeout(function(){window.location="index.html"},2100);
     }  // alerte se da erro
    else if (done==0) { swal("Error!", "Usuário ou Senha Invalidos", "error"); }
    }

console.log(localStorage.usuario);
console.log(localStorage.password);


/* // função
function Login() {
  // variáveis
    let done=0;
    let usuario = document.getElementsByName('usuario')[0].value;
    usuario=usuario.toLowerCase();
    let senha= document.getElementsByName('senha')[0].value;
    senha=senha.toLowerCase();
      //alert se  der certo
    if (usuario=="z" && senha=="z") {  
      swal({
    title: "Sucesso",
    text: "Login Efetuado, Você será direcionado a página inicial!",
    icon: "success",
    button: false,
    });
          // função para ir para pagina inicial
      setTimeout(function(){window.location="index.html"},2100);
     }  // alerte se da erro
    else if (done==0) { swal("Error!", "Usuário ou Senha Invalidos", "error"); }
  }
  */
