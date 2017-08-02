;(function (window, document) {

})(window,document);
(function (window, document) {

})(window,document);

!function (widow, document) {
    
}(window, document);

(function (window, document) {

}(window, document))

var Out =(function (window, document,$) {
    return function () {
        this.back = function () {
            var num = window.innerWidth;
            if(num <= 375){//iphone6的宽度一下 字体大小为14px
                $("html").css("font-size","87.5%");//百分比对象的字体大小为14px，0.875em
                $("body").css("font-size","1rem");
                $("input").css("font-size","1rem")
                $(":submit").css("font-size","1rem");
                $(":button").css("font-size","1rem");
            }else if(num <= 414){//宽度在iphone6-iphone6s之间
                $("html").css("font-size","100%");//16px
                $("body").css("font-size","1rem");
                $("input").css("font-size","1rem")
                $(":submit").css("font-size","1rem");
                $(":button").css("font-size","1rem");
            }else if(num <= 768){
                $("html").css("font-size","112.5%");
                $("body").css("font-size","1rem");
                $("input").css("font-size","1rem")
                $(":submit").css("font-size","1rem");
                $(":button").css("font-size","1rem");
            } else {
                $("html").css("font-size","30px")
                $("body").css("font-size","1rem");
                $("input").css("font-size","1rem")
                $(":submit").css("font-size","1rem");
                $(":button").css("font-size","1rem");
            }

        }
    }
})(window,document,jQuery);
//
(function (window,$) {
    function Rem() {
        //定义属性
        this.innerWidth = 0;//屏幕宽度
        this.innerHeight = 0;//屏幕高度

        //为属性赋值
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;


    }
    Rem.prototype = {
            adapterWidth: function () {
                var self = this;
                var num = self.innerWidth;
                if(num <= 375){//iphone6的宽度一下 字体大小为14px
                    $("html").css("font-size","87.5%");//百分比对象的字体大小为14px，0.875em
                    $("body").css("font-size","1rem");
                    $("input").css("font-size","1rem")
                    $(":submit").css("font-size","1rem");
                    $(":button").css("font-size","1rem");
                }else if(num <= 414){//宽度在iphone6-iphone6s之间
                    $("html").css("font-size","100%");//16px
                    $("body").css("font-size","1rem");
                    $("input").css("font-size","1rem")
                    $(":submit").css("font-size","1rem");
                    $(":button").css("font-size","1rem");
                }else if(num <= 768){
                    $("html").css("font-size","112.5%");
                    $("body").css("font-size","1rem");
                    $("input").css("font-size","1rem")
                    $(":submit").css("font-size","1rem");
                    $(":button").css("font-size","1rem");
                } else {
                    $("html").css("font-size","30px")
                    $("body").css("font-size","1rem");
                    $("input").css("font-size","1rem")
                    $(":submit").css("font-size","1rem");
                    $(":button").css("font-size","1rem");
                }
            }
    }
    if(typeof module !="undefined" && module.exports){
        module.exports = Rem;
    }else {
        window.Rem = Rem;
    }
}(window, jQuery));

