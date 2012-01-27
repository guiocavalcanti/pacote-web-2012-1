$(document).ready(function(){
  // $.slideUp, $.slideDown, $.fadeIn, $.fadeOut, $.hide, $.show
  // $.css, $.addClass

  // $(".azul").slideUp(function(){
  //     $(this).fadeIn(10000, function(){
  //         $(this).hide();
  //     });
  // });

  // $(".vermelho").hide();

  // $(".lista > li:even").css({ 'font-size' : '24px', 'color' : 'red' });
  // $(".lista > li:odd").addClass("azul");
  // $(":visible").css({"background-color" : "purple"}).fadeOut(10000);

  // $.bind('click', function(){});
  $(".lista").click(function(){
      $(this).css("background-color", "red").fadeOut();
  });

  // Exercício (editor)
  $("input[type=submit]").click(function(){
      var conteudo = $('textarea').val();
      $('.output').append(conteudo); // poderia ser prepend
  });

});
