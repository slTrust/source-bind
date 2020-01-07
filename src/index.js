var slice = Array.prototype.slice;
// ES5版
function bind(asThis){
    var args = slice.call(arguments,1);
    const fn = this
    if(typeof fn !== 'function'){
        throw new Error("bind 必须调用在函数身上");
    }
    function resultFn(){
        var args2 = slice.call(arguments,0);
        return fn.apply(
            // this instanceof resultFn
            resultFn.prototype.isPrototypeOf(this) ? this : asThis,
            args.concat(args2)
            )
    }
    resultFn.prototype = fn.prototype;
    return resultFn;
}
module.exports = bind;

// ES6版
function _bind(asThis, ...args){
    const fn = this
    function resultFn(...args2){
        return fn.call(
                resultFn.prototype.isPrototypeOf(this) ? this : asThis,
                ...args, 
                ...args2
                );
    }
    resultFn.prototype = fn.prototype;
    return resultFn;
}

if(!Function.prototype.bind){
    Function.prototype.bind = bind;
}