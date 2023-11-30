const input = document.getElementById("in");
const button = document.querySelectorAll("button");

let arr = Array.from(button);
console.log(arr);

let string = "";

arr.forEach((i) => {
  i.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (i.innerHTML == "DEl") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else if (i.classList.contains("equal")) {
      string = eval(string);
      input.value = string;
    } else {
      string += i.innerHTML;
      input.value = string;
    }
  });
});
