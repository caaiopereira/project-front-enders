function Recuperacao() {
    var done=0;
    var email = document.getElementsByName('email')[0].value;
    email=email.toLowerCase(); 
    //alert se der certo
    if (email == "a") {  
    swal({
    title: "Sucesso",
    text: "Email enviado com sucesso!",    
    icon: "success",    
    button: false,   
    });    
    // função para ir para pagina login   
    setTimeout(function(){window.location="login.html"},2100);   
    } // alerte se da erro   
    else if (done==0) { swal("Error", "Email não encontrado ou inválido", "error"); }   
    }

