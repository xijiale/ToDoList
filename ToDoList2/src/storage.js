/**
 * Created by Administrator on 2017/3/7.
 */
define (function (require,exports) {
    var $ = require('jquery');
    var funCreate = require('./elementCreate');
    exports.storage = function (undoList,doneList) {
        if(window.localStorage.getItem('undoList')){
            undoList = window.localStorage.getItem('undoList').split(',');
        }
        if(window.localStorage.getItem('doneList')){
            doneList = window.localStorage.getItem('doneList').split(',');
        }
        for (var k = 0; k < undoList.length; k++) {
            var text4 = undoList[k];
            var htmlTempl4 = funCreate.creatUndo(text4);
            $('#task').append(htmlTempl4);
            $('#q1').text(undoList.length);
        }
        for (var i = 0; i < doneList.length; i++) {
            var text5 = doneList[i];
            var htmlTempl5 = funCreate.createDone(text5);
            $('#taskl').append(htmlTempl5);
            $('#q2').text(doneList.length);
        }
    }
})