const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

btn.addEventListener("click", clickHandler);

function clickHandler() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) compareValues(sum, luckyNumber.value);
  else output.innerText = "Please enter the fields";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.innerText = "Yay! Your birthdate is lucky. 😍";
  } else {
    output.innerText = "Your birthday is not lucky";
  }
}
