function myFunction(){ //writing a function
    document.write("Hello ");
}

myFunction(); //calling a function
console.log(typeof myFunction);

var bar = function(){
    document.write("world");
};
bar();

console.log(typeof bar);

var greet = function(name, greeting){//function with argument
    console.log(arguments);
    if(arguments.length > 1){
        var text = greeting + ", " + name;
        document.write(text);
    }

};
greet("shajib");
greet("sajib", " mohammed");



var add = function(n1, n2){
    console.log(arguments);
    return n1 + n2;
};

var x = add(2, 2);
var y = add(x, 2);
var z = add(x, y);
document.write("<p>" + add(x, y, z) + "</p>");//add only add first 2 arguments x + y only

(function(x) {
    alert(x);
})("Hello world");

var assign = function(){
    var n = 0;
    var m = 1;
    console.log("<p>" + n + n + "</p>");
};
//var multiply = function(){
//    return n * m;
//};

assign();
//multiply();

var j;
var k;

var assignValues = function(){
    j = 5;
    k = 2;
};
var divide = function(){
    return j / k;
};
assignValues();
var l = divide();
document.write("<p>" + l + "</p>");
