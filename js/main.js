let a = "";
let b = "";
let sing = "";
let finish = false;

const digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
const action = ["-", "+", "X", "/"];

const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = "";
  b = "";
  sing = "";
  finish = false;
  out.textContent = 0;
}
document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;

  if (event.target.classList.contains("ac")) return;

  out.textContent = "";

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === "" && sing === "") {
      a += key;

      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.table(a, b, sing);
    return;
  }
  if (action.includes(key)) {
    sing = key;
    out.textContent = sing;
    console.table(a, b, sing);
    return;
  }

  if (key === "=") {
    if (b === "") b = a;
    switch (sing) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Ошибка";
          a = "";
          b = "";
          sing = "";
          return;
        }
        a = a / b;
        a = a.toFixed(5);
        break;
    }
    finish = true;
    out.textContent = a;
    console.table(a, b, sing);
  }
};
