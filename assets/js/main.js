// var require =
// require.config({
//
//     paths: {
//         'jquery': 'test/jquery.min.js',
//         'underscore': 'test/underscore.min.js',
//         'backbone': 'test/backbone.min.js'
//     }
// });
// //
// require(['jquery','underscore','backbone'], function ($,_,Backbone) {//第一个参数是一个数组，表示所依赖的模块。即主模块main.js对象依赖的三个模块对象。第二个参数是一个回调函数，当前面指定的模块都加载成功
                                        //后，它将会被调用，加载的模块会以参数的形式传入该函数，从而在回调函数内就可以使用这些模块。
//
//     $('body').append('<div>添加的内容</div>');
// });
require(['math'], function (math) {//main.js模块对象用require.js模块对象去加载main.js依赖的模块，必须是按AMD规范，用define()函数定义的模块。
    alert(math.add(1,1));
    alert(math.foo())
})