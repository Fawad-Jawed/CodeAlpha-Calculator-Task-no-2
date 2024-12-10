const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;

// Event listener for calculator buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.id;

    switch (buttonId) {
      case "clear":
        display.innerText = "";
        break;

      case "backspace":
        display.innerText = display.innerText.slice(0, -1);
        break;

      case "equal":
        if (display.innerText.trim() === "") {
          display.innerText = "Empty!";
          setTimeout(() => (display.innerText = ""), 2000);
        } else {
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Error!";
            setTimeout(() => (display.innerText = ""), 2000);
          }
        }
        break;

      default:
        display.innerText += buttonId;
        break;
    }
  });
});

// Event listener for theme toggle button
themeToggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
});
