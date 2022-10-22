function Recuperacao() {
    let done=0;
    let mail = document.getElementsByName('email')[0].value;
    //alert se der certo
    if (mail == localStorage.email) {  
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