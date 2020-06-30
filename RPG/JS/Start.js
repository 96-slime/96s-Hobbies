const startBtn = document.getElementById('start');
const quitBtn = document.getElementById('quit');
const once = { once : true };
const mainView = "../HTML/MainView.html";

startBtn.addEventListener('click', toMainViewHandler, once);

quitBtn.addEventListener('click', quitHandler);

function toMainViewHandler(event){
    window.location.replace(mainView);
}

function quitHandler(event){
    var quit = confirm("終了しますか？");
    if (quit === true){
        window.close();
    }
}
