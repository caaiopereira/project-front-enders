function Recuperacao() {
    var done=0;
    var email = document.getElementsByName('email')[0].value;
    email=email.toLowerCase(); 
    //alert se der certo
    if (email=="adm@") {  
    swal({
    title: "Sucesso",
    text: "Login Efetuado",    
    icon: "success",    
    button: false,   
    });    
    // função para ir para pagina inicial   
    setTimeout(function(){window.location="index.html"},1250);   
    } // alerte se da erro   
    else if (done==0) { swal("Error", "Email inválido", "error"); }   
    }

