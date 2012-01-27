/*

  Crie um objeto que representa um conjunto de string. Este objeto deve ter as
  seguintes operações:

  - Adicionar uma string
      ex: set.add("minha string"); => set
  - Checar a existência de uma string
      ex: set.exist("string"); => false
  - Remover uma string:
      ex: set.remove("string"); => set
  - União de dois conjuntos:
      ex: set.union(set2); => set
  - Limpar conjunto
      ex: set.clear(); => set
  - Transformar conjunto em string:
      ex: set.add("1"); set.add("2"); set.toString(); => "{1,2}"

  Dicas:
    Objeto:
    var objName = {
      elements : [],
      add : function(param){
        this.push(param);
      }
    }

    objName.add("hoi");

    Operações no array:
    https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array

  Referência: https://sites.google.com/site/tddproblems/all-problems-1/String-set


*/

var Set = function(){
  this.elements = [];
};

Set.prototype.add = function(el) {
  if(!this.exists(el)) {
    this.elements.push(el);
  }

  return this;
};

Set.prototype.exists = function(el) {
  for(var i = 0; i < this.elements.length; i++){
    if(this.elements[i] === el) { return true; }
  }

  return false;
};

Set.prototype.remove = function(el) {
  for(var i = 0; i < this.elements.length; i++) {
    if(this.elements[i] === el) {
      this.elements.splice(i,1);
      break;
    }
  }

  return this;
};

Set.prototype.toString = function() {
  return "{" + this.elements.join(',') + "}";
};

Set.prototype.union = function(set) {
  var newSet = new Set();

  for(var i = 0; i < this.elements.length; i++)
    newSet.add(this.elements[i]);
  for(var i = 0; i < set.elements.length; i++)
    newSet.add(set.elements[i]);

  return newSet;
};

Set.prototype.clear = function(){
  this.elements = [];
  return this;
};
