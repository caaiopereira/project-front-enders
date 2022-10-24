function msgAlert(e,status){
    if(status == false){
    swal({
        title: "Atenção",
        text: e,
        icon: "warning",
        button: false,
        });
    }else{
        swal({
            title: "Sucesso",
            text: e,
            icon: "success",
            button: false,
            timer: 3000,
            });
    }
}
