document.write("onChange.js");
document.write("<br>");
function myFunction() {
    document.getElementById("test1").style.display = "none";
    document.getElementById("test2").style.display = "block";
}
function youFunction() {
    document.getElementById("test1").style.display = "block";
    document.getElementById("test2").style.display = "none";
}

var name;
var sex;
var age;
// var newdata;
function newRepeat() {
    //$("#btn").click(function(){

    // });

}

function inputFunction() {
    if(document.getElementById("message").style.display != "none") {
        document.getElementById("message").style.display = "none";
        document.getElementById("NewMessage").style.display = "block";
    }

    if( document.getElementById("test").style.display != "block")
    {
        document.getElementById("test").style.display = "block";
        document.getElementById("NewTest").style.display = "none";
    }

}
function inputTypeFunction() {

    if(document.getElementById("type1").style.display != "none") {
        document.getElementById("type1").style.display = "none";
        document.getElementById("NewType1").style.display = "block";
    }

    if( document.getElementById("type2").style.display != "block")
    {
        document.getElementById("type2").style.display = "block";
        document.getElementById("NewType2").style.display = "none";
    }
}

function blockFunction() {
    if (document.getElementById("message").style.display != "block") {
        document.getElementById("message").style.display = "block";
        document.getElementById("NewMessage").style.display = "none";
    }
    if (document.getElementById("test").style.display != "none") {
        document.getElementById("test").style.display = "none";
        document.getElementById("NewTest").style.display = "block";
    }

}
function blockTypeFunction() {

    if(document.getElementById("type1").style.display != "block")
    {
        document.getElementById("type1").style.display = "block";
        document.getElementById("NewType1").style.display = "none";
    }
    if(document.getElementById("type2").style.display != "none")
    {
        document.getElementById("type2").style.display = "none";
        document.getElementById("NewType2").style.display = "block";
    }
}
