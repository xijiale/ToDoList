
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
        var htmlTempl4 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value="+text4+"><span>"+text4+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete'></i></div>";
        $('#task').append(htmlTempl4);
        $('#q1').text(undoList.length);
    }
    for (var i = 0; i < doneList.length; i++) {
        var text5 = doneList[k];
        var htmlTempl5 = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+text5+"><span>"+text5+"</span><i class='fa fa-minus-circle t' aria-hidden='true'></i></div>";
        $('#taskl').append(htmlTempl5);
        $('#q2').text(doneList.length);
    }

    $("#sub").on('click',function () {
        var text1  = $('.enter').val();
        if (!text1) {
            alert("不能为空！");
            return;
        }
        var htmlTempl1 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value="+text1+"><span>"+text1+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' value="+text1+"></i></div>";
        $('#task').append(htmlTempl1);
//统计事件
        undoList.push(text1);
        $('#q1').text(undoList.length);
         if(window.localStorage) {
             window.localStorage.setItem('undoList', undoList);
         }
    });

    //删除事件
    $('.content').on('click','.d',function () {
        $(this).parent().remove();
        var pushIndex = undoList[$(this).val()].index();
        undoList.splice(pushIndex,1);
        $('#q1').text(undoList.length);
        window.localStorage.setItem('undoList',undoList);
    });
    //勾选事件
    $('.content').on('click','.r',function () {
        var text2 = $(this).val();
        console.log(text2);
        var htmlTempl2 = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+text2+"><span>"+text2+"</span><i class='fa fa-minus-circle t' aria-hidden='true' value="+text2+"></i></div>";
        $('#taskl').append(htmlTempl2);
        var pushIndex = doneList.push(text2);
        $('#q2').text(doneList.length);
        $(this).parent().remove();
        undoList.splice(pushIndex - 1,1);
        $('#q1').text(undoList.length);
        if(window.localStorage) {
            window.localStorage.setItem('doneList', doneList);
        }
        window.localStorage.setItem('undoList',undoList);
    });
    //删除事件
    $('.content').on('click','.t',function () {
        $(this).parent().remove();
        var pushIndex = doneList[$(this).val()].index();
        doneList.splice(pushIndex,1);
        $('#q2').text(doneList.length);
        window.localStorage.setItem('doneList', doneList);
    });
    //取消事件
    $('.content').on('change','.f',function () {
        var text3 = $(this).val();
        var htmlTempl3 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector'><span>"+text3+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete'></i></div>";
        $('#task').append(htmlTempl3);
        var pushIndex = undoList.push(text3);
        $('#q1').text(undoList.length);
        $(this).parent().remove();
        doneList.splice(pushIndex - 1,1);
        $('#q2').text(doneList.length);
        window.localStorage.setItem('undoList',undoList);
        window.localStorage.setItem('doneList', doneList);
    });
});




