require('ajax');

$.ajax({
    url : "cadastrar.php",
    type : 'post',
    data : {
        nome : "Regis",
        salario : '35'
    },
    beforeSend : function () {
        $("#resultado").html("ENVIANDO...");
    }
}).done(function(msg){
    $("#resultado").html(msg);
}).fail(function(jqXHR, textStatus, msg){
    alert(msg);
});

console.log('oi');