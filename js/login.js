// função
  function Login() {
    // variáveis
    let user = document.getElementsByName('login')[0].value;
    let pass = document.getElementsByName('senha')[0].value;
    //alert se  der certo
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
    else if (localStorage.usuario || localStorage.password == "") { 
      swal("Error!", 
      "Usuário ou Senha Invalidos", 
      "error"); }
    }