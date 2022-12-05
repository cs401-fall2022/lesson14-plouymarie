function hello() {
    return "Hello World!";
}
function colorMode() {
    if (document != null) {
        var c = document.getElementById("func").style.backgroundColor;
        var x = document.getElementsByTagName("section");
        var i;
        if (c === 'white') {
            document.getElementById("func").style.backgroundColor = "black";
            document.getElementById("title").style.color = "white";
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "rgba(15, 75, 75, .63)";
            }
            document.getElementById("button").innerHTML = "Light Mode";
        }
        else {
            document.getElementById("func").style.backgroundColor = "white";
            document.getElementById("title").style.color = "black";
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "rgba(28, 128, 128)";
            }
            document.getElementById("button").innerHTML = "Dark Mode";
        }
    }
}
export { hello, colorMode };
//# sourceMappingURL=main.js.map