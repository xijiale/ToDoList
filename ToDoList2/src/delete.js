/**
 * Created by Administrator on 2017/3/6.
 */
//删除模块
define (function (require,exports) {
    var $ = require('jquery');
    var funStorage = require('./storage');
    funStorage.storage(doneList,undoList);
    exports.delete = function (container,List) {
        $('.content').on('click',container,function () {
            $(container).parent().remove();
            var text6 = $(container).attr('data-value');
            for (var i = 0; i < List.length; i++) {
                if (List[i] == text6) {
                    var pushIndex = i;
                }
            }
            List.splice(pushIndex,1);
            $('#q1').text(List.length);
            window.localStorage.setItem(List,List);
        });
    }
})