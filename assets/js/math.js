define(['myLib'],function (myLib) {
    var add = function (a,b) {
        return a+b;
    };
    function foo(){
        myLib.doSomething()
    }
    return {
        add: add,
        foo: foo
    }
});