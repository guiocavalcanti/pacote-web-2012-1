// O .ready espera a DOM, JS e imagens carregarem
$(document).ready(function(){
    var $item = $("<span class=\"description\"></span><input class=\"remover\" value=\"Remover\">");

    var todo = {
      url : "http://todoing.heroku.com/todos.json",
      urlRemocao : function(id){
        return "http://todoing.heroku.com/todos/" + id  + ".json";
      },
      criaTarefa : function(data){
        var $li = $("<li/>").html($item.clone());
        $li.data("todo", data);
        $li.find('.description').text(data.todo.description);

        return $li;
      }
    };

    $(".remover").live('click', function(){
        var $x = $(this);
        var todoData = $x.parent().data("todo");

        $.post(todo.urlRemocao(todoData.todo.id), {'_method' : 'delete'}, function(data){
          $x.parent().slideUp(function(){ $(this).remove(); });
        });
    });

    // Criando requisição tipo get via javascript
    $.get(todo.url, function(data){
        for(var i = 0; i < data.length; i++) {
          var $li = todo.criaTarefa(data[i]);
          $("#lista").append($li);
        }

        $("#carregando").hide();
    });

    // todoing.heroku.com
    $('form').submit(function(e){
      var descricao = $("#description").serialize();

      $.post(todo.url, descricao, function(data){
        var $li = todo.criaTarefa(data);
        $li.hide().appendTo($("#lista")).slideDown();
        $("#description").val("");
      });

      e.preventDefault();
    });

});
