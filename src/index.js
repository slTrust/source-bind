var slice = Array.prototype.slice;
// ES5版
function bind(asThis){
    var args = slice.call(arguments,1);
    const fn = this
    if(typeof fn !== 'function'){
        throw new Error("bind 必须调用在函数身上");
    }
    return function(){
        var args2 = slice.call(arguments,0);
        return fn.apply(asThis, args.concat(args2))
    }
}
module.exports = bind;

// ES6版
function _bind(asThis, ...args){
    const fn = this
    return function(...args2){
        return fn.call(asThis, ...args, ...args2)
    }
}

if(!Function.prototype.bind){
    Function.prototype.bind = bind;
}