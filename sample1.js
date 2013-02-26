alert("ex start");
function func2() {
    alert("from sample");
};

add(func2);

// 既存ページに関数を追加する関数
function add(func) {
    var script = document.createElement("script");
    script.appendChild(document.createTextNode(func.toString()));
    document.body.appendChild(script);
}
