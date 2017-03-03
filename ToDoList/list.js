
/**
 * Created by Administrator on 2017/2/27.
 */
$(document).ready(function () {
    var undoList = [];
    var doneList = [];
    //添加事件
    if(window.localStorage.getItem('undoList')){
        undoList = window.localStorage.getItem('undoList').split(',');
    }
    if(window.localStorage.getItem('doneList')){
        doneList = window.localStorage.getItem('doneList').split(',');
    }
    for (var k = 0; k < undoList.length; k++) {
        var text4 = undoList[k];
        var htmlTempl4 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value="+text4+"><span>"+text4+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value="+text4+"></i></div>";
        $('#task').append(htmlTempl4);
        $('#q1').text(undoList.length);
    }

    for (var i = 0; i < doneList.length; i++) {
        var text5 = doneList[i];
        var htmlTempl5 = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+text5+"><span>"+text5+"</span><i class='fa fa-minus-circle t' aria-hidden='true' data-value="+text5+"></i></div>";
        $('#taskl').append(htmlTempl5);
        $('#q2').text(doneList.length);
    }
    $("#sub").on('click',function () {
        var text1  = $('.enter').val();
        if (!text1) {
            alert("不能为空！");
            return;
        }
        var htmlTempl1 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value="+text1+"><span>"+text1+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value="+text1+"></i></div>";
        $('#task').append(htmlTempl1);
    //统计事件
        undoList.push(text1);
        $('#q1').text(undoList.length);
        //存储
         if(window.localStorage) {
             window.localStorage.setItem('undoList', undoList);
         }
    });
    //删除事件
    $('.content').on('click','.d',function () {
        $(this).parent().remove();
        var text6 = $(this).attr('data-value');
        for (var i = 0; i < undoList.length; i++) {
            if (undoList[i] == text6) {
                var pushIndex = i;
            }
        }
        undoList.splice(pushIndex,1);
        $('#q1').text(undoList.length);
        window.localStorage.setItem('undoList',undoList);
    });
    //勾选事件
    $('.content').on('click','.r',function () {
        var text2 = $(this).val();
        var htmlTempl2 = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+text2+"><span>"+text2+"</span><i class='fa fa-minus-circle t' aria-hidden='true' data-value="+text2+"></i></div>";
        $('#taskl').append(htmlTempl2);
        doneList.push(text2);
        $('#q2').text(doneList.length);
        for (var i = 0; i < undoList.length; i++) {
            if (undoList[i] == text2) {
                var pushIndex = i;
            }
        }
            undoList.splice(pushIndex,1);
        $(this).parent().remove();
        $('#q1').text(undoList.length);
        window.localStorage.setItem('doneList', doneList);
        window.localStorage.setItem('undoList',undoList);
    });
    //删除事件
    $('.content').on('click','.t',function () {
        $(this).parent().remove();
        var text7 = $(this).attr('data-value');
        for (var i = 0; i < doneList.length; i++) {
            if (doneList[i] == text7) {
                var pushIndex = i;
            }
        }
        doneList.splice(pushIndex,1);
        $('#q2').text(doneList.length);
        window.localStorage.setItem('doneList', doneList);
    });
    //取消事件
    $('.content').on('change','.f',function () {
        var text3 = $(this).val();
        var htmlTempl3 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector'><span>"+text3+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value="+text3+"></i></div>";
        $('#task').append(htmlTempl3);
        undoList.push(text3);
        $('#q1').text(undoList.length);
        for (var i = 0; i < doneList.length; i++) {
            if (doneList[i] == text3) {
                var pushIndex = i;
            }
        }
        doneList.splice(pushIndex,1);
        $(this).parent().remove();
        $('#q2').text(doneList.length);
        window.localStorage.setItem('undoList',undoList);
        window.localStorage.setItem('doneList', doneList);
    });
});




