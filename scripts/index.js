const inputName = document.querySelector(`#cN`);
const inputNum = document.querySelector(`#cNo`);
const inputMonth = document.querySelector(`#month`);
const inputYear = document.querySelector(`#year`);
const inputCvc = document.querySelector(`#cvc`);
const nam = document.querySelector(`#name`);
const cardNo = document.querySelector(`#cardNo`);
const date = document.querySelector(`#date`);
const cvv = document.querySelector(`#cvv`);
const form1El = document.querySelector(`.f1`);
const form2El = document.querySelector(`.f2`);
let x = 0;

form1El.addEventListener("submit", (e) => {
  let flag = true;
  e.preventDefault();
  for (let i = 0; i < 5; i++) {
    const inEl = document.querySelector(`.i${i}`);
    const errEl = document.querySelector(`.e${i}`);
    if (inEl.value == "") {
      inEl.style.border = `1px solid var(--Red)`;
      errEl.style.display = `block`;
      flag = false;
    }
  }
  if (flag) {
    form1El.style.display = "none";
    form2El.style.display = `flex`;
  }
  //   if (cardFormat.test(document.querySelector(`.i${1}`))) {
  //     console.log();
  //   } else {
  //     document.querySelector(`.e${1}`).style.display = `block`;
  //     document.querySelector(`.i${1}`).style.border = `1px solid var(--Red)`;
  //   }
});

for (let i = 0; i < 5; i++) {
  const inEl = document.querySelector(`.i${i}`);
  const errEl = document.querySelector(`.e${i}`);
  inEl.addEventListener("focus", () => {
    inEl.style.border = `1px solid var(--Lightgrayishviolet)`;
    errEl.style.display = `none`;
    console.log(i);
  });
}

inputName.addEventListener("keyup", () => {
  let st = inputName.value;
  nam.textContent = `${st}`;
});

inputNum.addEventListener("keyup", () => {
  x++;
  let st = inputNum.value;
  if (x === 4) {
    inputNum.value += " ";
    st += " ";
    x = 0;
  }
  cardNo.textContent = `${st}`;
});

inputMonth.addEventListener("keyup", () => {
  let st = inputMonth.value;
  if (inputYear.value === "") {
    st += "/00";
  } else {
    st += `/${inputYear.value}`;
  }
  date.textContent = `${st}`;
});

inputYear.addEventListener("keyup", () => {
  let st = inputYear.value;
  if (inputMonth.value === "") {
    st = "00/" + st;
  } else {
    st = `${inputMonth.value}/${st}`;
  }
  date.textContent = `${st}`;
});

inputCvc.addEventListener("keyup", () => {
  let st = inputCvc.value;
  cvv.textContent = st;
});
