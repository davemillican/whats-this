/*******************************/
/*           Set-up            */
/*******************************/
var whatIsThis = function whatIsThis(a, b) {
    console.log('This is...', this);
    console.log('a = ', a);
    console.log('b = ', b);
};

var inAnObject = {
    name: 'inAnObject',
    test: whatIsThis,
    inner: {
        name: 'inner',
        test2: whatIsThis
    }
};

var inAFunction = function inAFunction(a, b) {
    this.name = 'Sally';
    whatIsThis(a, b);
};

// inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
};

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
};

/*******************************/
/*          Problems           */
/*******************************/

// * Problem 1

whatIsThis('hello', 'world');

// * "this" is ... the  global object
// * because ... whatIsThis() function is called from the global scope.

// * Problem 2

window.whatIsThis('hello', 'world');

// * "this" is ... this is an error 
// * because ...  the window object is not defined in node: it is the global object




// * Problem 3

inAnObject.test('face', 'book');

// * "this" is ... { name: 'inAnObject',...
// * because ...  the calling object is inAnObject




// * Problem 4

inAnObject.inner.test('twitter', 'book');

// * "this" is ... this is an error. 
// * because ... inAnObject.inner does not have a "test" property.




// * Problem 5

inAnObject.inner.test2('twitter', 'book');

// * "this" is ... { name: 'inner', test2: [Function: whatIsThis] }
// * because ...  The function is called using the "inner" object.




// * Problem 6

whatIsThis.call();

// * "this" is ... the global object 
// * because ... Call() which is capable of changing the binding is called
//                      with no parameter -- so this is not modified.
//                      Also, the paramerters (a , b) are undefined.




// * Problem 7

whatIsThis.call(trickyTricky);

// * "this" is ... { name: 'trickyTricky',
// * because ...  Call() will invoke the function with the binding changed.
//                 Call() in fact changes "this" and the parameters are not 
//                  defined.




// * Problem 8

whatIsThis.call(trickyTricky, 'nice', 'job');

// * "this" is ...
// * because ...




// * Problem 9

whatIsThis.call(confusing);

// * "this" is ... { name: 'confusing', state: 'Alaska', city: 'Anchorage' }
// * because ... the call() method will bind "this" to "confusing".  No
//               additional parameters are passed in so (a, b) are undefined.





// * Problem 10

whatIsThis.call(confusing, 'hello');

// * "this" is ...{ name: 'confusing', state: 'Alaska', city: 'Anchorage' }
// * because ... this is the same as above, but one additional parameter is
//               passed in and gets loaded into a.  b is still undefined.




// * Problem 11

whatIsThis.apply(trickyTricky);

// * "this" is ...{ name: 'trickyTricky',
// * because ...  this is the same as using call() with 1 param.




// * Problem 12

whatIsThis.apply(confusing, ['nice', 'job']);

// * "this" is ...{ name: 'confusing', state: 'Alaska', city: 'Anchorage' }
// * because ...  bind again with confusing object.  Apply will take one
//                additional parameter with an array of the parameters.




// * Problem 13

whatIsThis.apply(confusing, 'nice', 'job');

// * "this" is ... this is an error
// * because ... apply() will post an error if the second param is not an
//               array.




// * Problem 14

//inAFunction('what will', 'happen?');

// * "this" is ...
// * because ...




// * Problem 15

// inAFunction.test3('A', 'B');

// * "this" is ...
// * because ...




// * Problem 16

//var newObject = new inAFunction('what will', 'happen?');

// * "this" is ...
// * because ...




// * Problem 17

// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');

// * "this" is ...
// * because ...




// * Problem 18

inAnObject.test.call(trickyTricky, 'face', 'book');

// * "this" is ... { name: 'trickyTricky',
// * because ...  "this" is changed with the call() method




// * Problem 19

inAnObject.inner.test2.apply(confusing, ['foo', 'bar']);

// * "this" is ... { name: 'confusing', state: 'Alaska', city: 'Anchorage' }
// * because ...  Apply () binds the object passed into it and 
//                invokes the function passing the array as parameters.