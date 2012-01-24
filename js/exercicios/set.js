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
