/**
 * Created by Administrator on 2017/3/7.
 */
define (function (require,exports) {
    var $ = require('jquery');
    exports.input = function (container) {
        // this.container = $(container);
        $("#sub").on('click',function () {
            var text = $(container).val();
            if (!text) {
                alert("不能为空！");
                return;
            }
            return text;
        })

    }
});
