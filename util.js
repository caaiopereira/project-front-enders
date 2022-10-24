function msgAlert(e){
    swal({
        title: "Atenção",
        text: e,
        icon: "warning",
        button: false,
        });
}

function msgSucess(s){
    swal({
        title: "Sucesso",
        text: s,
        icon: "success",
        button: false,
        });
}