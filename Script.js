var functions = [];
for (var i = 0; i < 10; i++) {
    var fn = function() {return i};
    functions.push(fn);
}
functions.forEach(function(fn) {console.log(fn())}) // Don't change this line