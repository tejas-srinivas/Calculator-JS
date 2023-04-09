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

const body = document.querySelector(".container");
const toggler = document.querySelector(".toggle-bar");
const mode = document.getElementById("mode");

toggler.addEventListener("click",() => {
    body.classList.toggle("dark")
    if(mode.textContent === "Light :"){
        mode.textContent="Dark :";
    }
    else{
        mode.textContent="Light :";
    }
});

toggler.addEventListener("click",() => {
    toggler.classList.toggle("active");
    // mode.textContent="Light :";
});
