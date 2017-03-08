define(function (require,exports) {
     var $ = require('jquery');
     var data = require('./data');
     var todoChange = require('./change');
    var todoDelete = require('./delete');
    var todoStorage = require('./storage');
    var add = require('./add');
    exports.input = function () {
        /*data.input('#todoInput');
        todoDelete.delete(undoList,'.d');
        todoChange.change('.r',undoList,doneList);*/
        var text = $('#todoInput').val();
        if (!text) {
            alert("不能为空！");
            return;
        };
        add.addTask(text);

    };
});