function init() {
    var access01 = document.getElementById("code9");
    var access02 = document.getElementById("code7");
    var code01 = access01.innerHTML;
    var code02 = access02.innerHTML;
    code01 = code01 + " midnight";
    code02 = code02 + " coffee";
    access01.innerHTML = code01;
    access02.innerHTML = code02;
}

window.onload = init;

