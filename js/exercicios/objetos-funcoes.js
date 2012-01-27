var myObject = function(arg1, arg2){
  var that = {
    initializer : function(arg1, arg2){
      this.arg1 = arg1;
      this.arg2 = arg2;
      return this;
    },
    args : function(){
      return this.arg1 + this.arg2;
    }
  };

  return that.initializer(arg1, arg2);
};

var o1 = myObject("a", "b");
var o2 = myObject("a2", "b2");

console.log(o1.args());
console.log(o2.args());

o1.arg1 = "abc";

console.log(o1.args());
console.log(o2.args());

var MyObject = function(arg1, arg2) {
  this.arg1 = arg1;
  this.arg2 = arg2;
};

MyObject.prototype.args = function(){
  return this.arg1 + this.arg2;
}

var o1 = new MyObject("a", "b");
var o2 = new MyObject("a2", "b2");

console.log(o1.args());
console.log(o2.args());

o1.arg1 = "abc";

console.log(o1.args());
console.log(o2.args());


// q1) Initialize an array and then fill it with 30 values. Each value should be a multiple of 3, starting with 3. Log to the console the 15th value of the array. Log to the console the length of the array.

// BEGIN Exercise 1 Answer


// END Exercise 1 Answer

// Exercise 2) Create an object with properties of "foo" and "bar-baz", repectively. The values can be whatever you'd like (be creative!). Log both of these properties to the console.

// BEGIN Exercise 3 Answer


// END Exercise 2 Answer

// Exercise 3) Use the object created in example 3. Augment a new property on the object with the key "qux". The value can be whatever you'd like. Log this new property to the console.

// BEGIN Exercise 3 Answer




// END Exercise 3 Answer

// Exercise 4) Use the object from exercise 4. Augment the object with the properties "bar1", "bar2", ... through "bar10". The value of these properties can be whatever you would like. Afterwards print out bar4 to the console.

// BEGIN Exercise 4 Answer





// END Exercise 4 Answer
