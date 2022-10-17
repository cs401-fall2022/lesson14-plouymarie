
function hello (): String {
    return "Hello World!";
}

function colorMode (){
    if(document != null){
        let c = document.getElementById("func").style.backgroundColor;
        if(c === 'white'){
            document.getElementById("func").style.backgroundColor = "black";
            document.getElementById("func").style.color = "white";
        }else{
            document.getElementById("func").style.backgroundColor = "white";
            document.getElementById("func").style.color = "black";
        }
    }
}


export{hello, colorMode}