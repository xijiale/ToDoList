/**
 * Created by Administrator on 2017/2/27.
 */
//添加事件
$(document).ready(function () {
    $("input [type='text']").change( function () {
        var txt1 = $('<div></div>');
        $(txt1).addClass("arr");
        $('#arr1').after(txt1);
        var txt2 = $("input [type='radio']");
        var txt3 = $("<span></span>").text($('.enter').val());
        $(txt1).append(txt2,txt3);



    });
});

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
//统计事件
//删除事件
$(document).ready(function () {
    $('fa').click(function () {
        $('arr').remove();
    });
})
//勾选事件
//取消事件
