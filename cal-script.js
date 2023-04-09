let outputScreen = document.getElementById("output-screen");
const display = (num) => {
    outputScreen.value += num;
}
let Calculate = () => {
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch{
        alert("Invalid");
        outputScreen.value = "";
    }
}
const Clear = () => {
    outputScreen.value = "";
}

const Del = () => {
    outputScreen.value = outputScreen.value.slice(0,-1);
}