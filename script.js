function calculation(newValue){
    document.getElementById("catculator-scean").value += newValue;
}

function result(){
    var a = document.getElementById("catculator-scean").value;
    var b = eval(a);
    document.getElementById("catculator-scean").value = b;
}

function clear(){
    document.getElementById("catculator-scean").value = "";
}