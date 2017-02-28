
/**
 * Created by Administrator on 2017/2/27.
 */
$(document).ready(function () {
    var todoLists1 = [];
    var todoLists2 = [];
    //添加事件
    $("#sub").on('click',function () {
        var text1  = $('.enter').val();
        if (!text1) {
            alert("不能为空！");
            return;
        }
        var htmlTempl1 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value="+text1+"><span>"+text1+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete'></i></div>";
        $('#task').append(htmlTempl1);
//统计事件
        todoLists1.push(text1);
        $('#q1').text(todoLists1.length);

    });
    //删除事件
    $('.content').on('click','.d',function () {
        $(this).parent().remove();

        todoLists1.splice(0,1);
        $('#q1').text(todoLists1.length);
    });
    //勾选事件
    $('.content').on('click','.r',function () {
        var text2 = $(this).val();
        var htmlTempl2 = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+text2+"><span>"+text2+"</span><i class='fa fa-minus-circle t' aria-hidden='true'></i></div>";
        $('#taskl').append(htmlTempl2);
        todoLists2.push(text2);
        $('#q2').text(todoLists2.length);
        $(this).parent().remove();

        todoLists1.splice(0,1);
        $('#q1').text(todoLists1.length);
    });
    //删除事件
    $('.content').on('click','.t',function () {
        $(this).parent().remove();
        todoLists2.splice(0,1);
        $('#q2').text(todoLists2.length);
    });
    //取消事件
    $('.content').on('change','.f',function () {
        var text3 = $(this).val();
        var htmlTempl3 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector'><span>"+text3+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete'></i></div>";
        $('#task').append(htmlTempl3);
        todoLists1.push(text3);
        $('#q1').text(todoLists1.length);
        $(this).parent().remove();

        todoLists2.splice(0,1);
        $('#q2').text(todoLists2.length);
    });
});



