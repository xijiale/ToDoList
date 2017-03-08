/**
 * Created by Administrator on 2017/3/7.
 */
define (function (require,exports) {
    var $ = require('jquery');
   var funCreate = require('./elementCreate');
    var funStorage = require('./storage');
    var undoList = [];
    funStorage.storage(doneList,undoList);
    exports.addTask = function (data) {
            var htmlTempl = funCreate.createUndo(data);
            $('#task').append(htmlTempl);
            //统计事件
            undoList.push(data);
            $('#q1').text(undoList.length);
            //存储
            window.localStorage.setItem('undoList', undoList);
    }
})
