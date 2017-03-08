/**
 * Created by Administrator on 2017/3/6.
 */
//创建元素
define(function (require,exports) {
    var $ = require('jquery');
    exports.createUndo = function (val) {
        var element,className = '.r';
        element = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value=" + val + "><span>" + val + "</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value=" + val + "></i></div>";
        return element,className;

    };
    exports.createDone = function (val) {
        var element,className = '.f';
         element = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+val+"><span>"+val+"</span><i class='fa fa-minus-circle t' aria-hidden='true' data-value="+val+"></i></div>";
        return element,className;
    }
})
