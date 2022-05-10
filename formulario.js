
(document).ready(function(){

    $("#evento").click(function(){
        var clave = $("#clave").val();
        
        if(clave==""){
            alert("Error, Porfavor rellene el campo nombre");
        }
    });

    $("#evento").click(function(){
        var email = $("#email").val();
        
        if(email==""){
            alert("Error, Porfavor rellene el campo email");
        }
    });

});