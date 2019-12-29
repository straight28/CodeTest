// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", function(){
//     console.log(this.responseText)
// });

// oReq.open("GET", "./json.txt");
// oReq.send();

function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readystate == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }
    }
    xhttp.open("get", "./json.txt", true);
    xhttp.send();
}