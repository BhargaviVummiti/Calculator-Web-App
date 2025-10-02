
let display = document.getElementById("display");
let themeToggle = document.getElementById("themeToggle");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function Result() {
    try {
        /*It converts % to /100*/
        let expression = display.value.replace(/%/g, "/100");
        display.value = eval(expression);
    }
    catch {
        display.value = "Error";
    }
}

/*Dark/light Mode Toggle*/
themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
   themeToggle.textContent="Light Mode";
}
else{
    themeToggle.textContent="Dark Mode";
}
});
