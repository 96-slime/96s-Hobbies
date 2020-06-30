const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const message = document.getElementById("message");
const once = { once : true };

window.addEventListener('DOMContentLoaded', initHandler, once);

function initHandler(event){
    btn1.innerText = "移動";
    btn2.innerText = "アイテム";
    btn3.innerText = "ステータス";
    btn4.innerText = "終了";
    message.innerText = "何をしますか？";
}

