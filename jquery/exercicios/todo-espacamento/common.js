$(document).ready(function(){
    $('.new-todo-form').submit(function(e){
        var text = $(this).find("input[type=text]").val();
        var $li = $("#template li").clone();
        $li.find("a").text(text);

        $(".todo").prepend($li);

        e.preventDefault();
    });
});
