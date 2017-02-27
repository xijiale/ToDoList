/**
 * Created by Administrator on 2017/2/27.
 */
//添加事件
function addn() {
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
addn();
//统计事件
//删除事件
//勾选事件
//取消事件
