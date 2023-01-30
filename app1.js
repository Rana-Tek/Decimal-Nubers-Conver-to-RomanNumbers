//* variables //

const num = document.querySelector(".input");
const convertBtn = document.querySelector(".convert");
const playVisible = document.querySelector(".play");
const tableTh = document.createElement("th");
const tableTd = document.createElement("td");
playVisible.appendChild(tableTh);
tableTh.appendChild(tableTd);
let localList = JSON.parse(localStorage.getItem("localliast")) || [];

//*****FUNCTİONS */
convert = (num) => {
  let result = "";
  const romanNum = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (let i = 0; i < decimal.length; i++) {
    while (num >= decimal[i]) {
      result += romanNum[i];
      num -= decimal[i];
    }
  }

  playVisible.innerText = result;
  tableTd.innerText = result;
  localList.push(result);
  localStorage.setItem("localList", JSON.stringify(localList));
};
window.addEventListener("load", () => {
  getLocalListFromLocalStorage();
});
const getLocalListFromLocalStorage = () => {
  localList.forEach((num) => {
    const td = document.createElement("td");
    td.innerText = num;
  });
};

//*eventss

convertBtn.addEventListener("click", (e) => {
  const number = Number(num.value);
  if (num.value != number || num.value == "") {
    playVisible.innerText = "Please, Enter only numbers";
    setTimeout(() => {
      playVisible.innerText = "";
    }, 5000);
  } else if (num.value == number) {
    convert(number);
    setTimeout(() => {
      playVisible.innerText = "";
    }, 5000);
  }
  e.target.closest("main").reset();
});

// convert = (num) => {
//     let result = "";
//     const romanNum = [
//       "M",
//       "CM",
//       "D",
//       "CD",
//       "C",
//       "XC",
//       "L",
//       "XL",
//       "X",
//       "IX",
//       "V",
//       "IV",
//       "I",
//     ];
//     const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     for (let i = 0; i < decimal.length; i++) {
//       while (num >= decimal[i]) {
//         result += romanNum[i];
//         num -= decimal[i];
//       }
//     } playVisible.innerText = result
// }
