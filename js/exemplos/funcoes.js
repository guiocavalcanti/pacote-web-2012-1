// Funcoes são objetos que podem ser passados como parâmetro e atribuidas
var log = function(str){
  console.log("LOG: " + str);
};

var info = function(str){
  console.log("INFO: " + str);
};

var novaFunc = function(valor){
  console.log("Multiplicado: " + valor*2 );
};

var somaELoga = function(num1, num2, funcLog){
  var soma = num1 + num2;
  funcLog(soma);
};

somaELoga(2,3, function(val){
    var result = Math.pow(2,3);
    console.log("2^3 = " + result);
});

// var objeto = jQuery(".nome > li");
// objeto.slideUp(function(){ // func. callback
//     jQuery(this).fadeOut();
// });

// somaELoga(2,3, log);
// somaELoga(2,3, info);


// Criando um objeto na forma literal
var carro = {
  'cor' : 'vermelho',
  'marca' : 'fiat',
  'pecas' : ['volante', 'porta'],
  'print' : function(){
    var str = this.cor + " " + this.marca + " " + this.pecas.join(',');
    console.log(str);
  },
  'printLegal' : function(){
    console.log("Legal");
    this.print();
  },
};

var Carro = function(cor, marca){
  this.cor = cor;
  this.marca = marca;
};

Carro.prototype.print = function(){
  var str = this.cor + " " + this.marca;
  console.log(str);
};

Carro.prototype.printLegal = function(){
    console.log("Legal");
    this.print();
};


// var cor = prompt("Digite a cor: ");
// var marca = prompt("Digite a marca: ");
// var carroDoUsuario = new Carro(cor, marca);
// console.log(carroDoUsuario);

// Entendendo o this

var funcGlobal = function(){
  // nesse caso o this é o objeto global (window);
  console.log("this em funcões do tipo var f = func... : ");
  console.log(this);
}

var Casa = function(){ };
Casa.prototype.func = function(){
  // nesse caso o this é a instância do tipo Casa que você está lidando
  console.log("this em funções que são membros de um tipo (Casa.prototype.func = function()...)");
  console.log(this);
};

Casa.prototype.outraFuncao = function(novaFunc) {
  // quano se passa uma funcao como parâmetro o this dela pode ser mudado usando o novaFunc.call(this, param1, param2...)
  novaFunc.call(this);
};

