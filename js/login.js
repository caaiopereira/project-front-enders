function Login() {
  var done=0;
  var usuario = document.getElementsByName('usuario')[0].value;
  usuario=usuario.toLowerCase();
  var senha= document.getElementsByName('senha')[0].value;
  senha=senha.toLowerCase();
  if (usuario=="zr" && senha=="zr") {  
    swal({
  title: "Sucesso",
  text: "Login Efetuado",
  icon: "success",
  button: false,
  });
   
    setTimeout(function(){window.location="index.html"},1250);
  }
  else if (done==0) { swal("Erro de Login!", "Usuário ou Senha incorreta", "error"); }
}
