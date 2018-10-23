// This is a JavaScript file
$(document).on("click","#btncadastrarveiculo", function(){
    var parametros = {
        "modelo": $("#txtmodelo").val(),
        "cor": $("#txtCor").val(),
        "fabricante": $("#txtfabricante").val(),
        "ano": $("#txtano").val(),
        "valor": $("#txtvalor").val()
    };

    $.ajax({
        type:"post",
        url:"https://crudmobile3i2-.Bruno111222333.io/cadastroveiculo.php",
        data: parametros,
        success: function(data){
          navigator.notification.alert(data);
          $("#txtmodelo").val("");
          $("#txtcor").val("");
          $("#txtfabricante").val("");
          $("#txtano").val("");
          $("#txtvalor").val("");
        },
        error:function(data){
          navigator.notification.alert("erro: "+data);
        }
    });
});

$(document).on("click","#btnlistarveiculo", function(){
  $(location).attr("href","lista.html");
});

function listarveiculos(){
  $.ajax({
        type:"post",
        url:"https://crudmobile3i2-Bruno111222333.c9users.io/listarveiculo.php",
        dataType: "json",
        success: function(data){
          var itemlista = "";
          $.each(data.pessoas, function(i, dados){
              itemlista += "<option value='"+dados.codigo+"'>"+dados.nome+"</option>";
          });
          $("#lista").html(itemlista);
        },
        error:function(data){
          navigator.notification.alert("erro: "+data);
        }
    });
}

$(document).on("change","lista", function() {
     var codigoSelecionado = $("option:selected", ("#lista")).val();
     $.ajax({
        type:"get",
       url:"https://projetoveiculos-bruno343.c9users.io/listarveiculo.php",
       data:"codigo="+codigoSelecionado,
       dataType: "json",
       success: function(data){
          $.each(data.pessoas, function,(i, data){
            $("#codigo").val(data.codigo);
            $("#txtmodelo").val(data.modelo);
            $("#txtcor").val(data.cor);
            $("#txtfabricante").val(data.fabricante);
            $("#txtano").val(data.cpf);
            $("#txtvalor").val(data.cpf);
         });
       },

      error:function(data){
         navigator.notification.alert("erro: "+data);
       }
    });
});


$(document).on("click","#btnremoverregistros", function(){
    var codigoSelecionado = $("option:selected", ("#lista")).val();
    $ajax({
      type="get",
      url:"https://projetoveiculos-bruno343.c9users.io/removerveiculo.php",
      data:"codigo="+codigoSelecionado,
      success: function(data){
        navigator.notification.alert(data);
        },
        error:function(data){
          navigator.notification.alert("erro: "+data);
        }
    });
});

