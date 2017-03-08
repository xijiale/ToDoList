define(function (require,exports) {
    var $ = require('jquery');
    var funCreate = require('./elementCreate');
    var funStorage = require('./storage');
    var doneList = [];
    var undoList= [];
    funStorage.storage(doneList,undoList);
    exports.change = function (className,deleteList,pushList) {
        $('.content').on('click',className,function () {
            var text2 = $(className).val();
            conloge.log(text2);
            if (className === '.r') {
                var htmlTempl = funCreate.createDone(text2);
                $('#taskl').append(htmlTempl);
            }else if (className === '.f'){
                htmlTempl = funCreate.createUndo(text2);
                $('#task').append(htmlTempl);
            }
            pushList.push(text2);
            $('#q2').text(pushList.length);
            for (var i = 0; i < deleteList.length; i++) {
                if (deleteList[i] == text2) {
                    var pushIndex = i;
                }
            }
            deleteList.splice(pushIndex,1);
            $(className).parent().remove();
            $('#q1').text(deleteList.length);
            window.localStorage.setItem('doneList', pushList);
            window.localStorage.setItem('undoList',deleteList);
        });





    }
});