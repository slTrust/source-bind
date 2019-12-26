const bind = require('../src/index');
Function.prototype.bind2 = bind;

console.assert(Function.prototype.bind2 !== undefined);

const fn1 = function(){
    return this;
} 
const newFn = fn1.bind2({name:'hjx'});
console.assert(newFn().name === 'hjx');

const fn2 = function(p1,p2){
    return [this,p1,p2]
}

const newFn2 = fn2.bind2({name:'hjx'},123,456);
console.assert(newFn2()[0].name === 'hjx');
console.assert(newFn2()[1] === 123 , "p1");
console.assert(newFn2()[2] === 456 , "p2");


const anotherFn2 = fn2.bind2({name:'hjx'},123);
console.assert(anotherFn2(456)[0].name === 'hjx');
console.assert(anotherFn2(456)[1] === 123);
console.assert(anotherFn2(456)[2] === 456);