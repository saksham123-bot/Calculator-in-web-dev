const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "C") {
            currentValue = "";
            display.value = "0";
        } 
        else if (value === "=") {
            try {
                currentValue = eval(currentValue);
                display.value = currentValue;
            } catch {
                display.value = "Error";
            }
        } 
        else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});
