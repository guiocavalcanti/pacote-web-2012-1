$(document).ready(function(){
  // Detectando eventos no DOM
  // $.click também funcionaria.
  $("input[type=submit]").bind('dblclick', function(){
    $(".compras > li:even").addClass("selecionado");
  });

  // Criando elementos via javascript
  // $.html("<p></p>"); adiciona html ao elemento
  // $.val() pega valor digitado num input
  // var $elemento = $("<div/>", { 'class' : 'nova-classe', 'id' : 'novo-id'}).text('conteudo');
  // $('body').append($elemento);

  $("#add-task").click(function(){
      var text = prompt("Texto da tarefa: ");
      var $li = $("<li/>").text(text);
      $('.compras').prepend($li);
  });

  $('form').submit(function(event){
      var tarefa = $("form input[type=text]").val();
      var $li = $("<li/>").text(tarefa);
      $('.compras').prepend($li);

      event.preventDefault(); // return false;
  });
});
