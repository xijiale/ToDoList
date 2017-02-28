//删除事件
/**
 * Created by Administrator on 2017/2/27.
 */
//添加事件
$(document).ready(function () {
    var todoLists = [];
    $("#todoInput").change( function () {
        var text  = $('.enter').val();
        var htmlTempl = "<div class='arr'><input type='radio' class='inputtype'/><span>"+text+"</span> <i class='fa fa-minus-circle' aria-hidden='true' id='fa'></i></div>";
        $('#task').append(htmlTempl);
        todoLists.push(text);
        $('#q1').text(todoLists.length);
        // var txt1 = $('<div></div>');
        // $(txt1).addClass("arr");
        // var txt2 = $("input [type='radio']");
        // var txt3 = $("<span></span>").text();
        // $('#task').append(txt1);
        // $(txt1).append(txt2,txt3);
    });
    $('#fa').on('click',function () {
        $(this).parent().remove();
    });
});
//统计事件

/*function addn() {
    var x = document.getElementsByClassName("enter");
    var y = document.getElementById("q1");
    var div = document.createElement("div");
    var put = document.createElement("input");
    var sp = document.createElement("span");
    var spa = document.createElement("span");
    var nodesp = document.createTextNode(x.value);
    sp.appendChild(nodesp);

    var element = document.getElementById("task");
    element.appendChild(div);
    div.appendChild(put);
    div.appendChild(sp);
    div.appendChild(spa);
    y.innerHTML++;
    div.setAttribute(ClassName,inputtype);
}
addn();*/
// $(document).ready(function () {
//
//     });
//勾选事件
//取消事件
