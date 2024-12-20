let Calculation = "";

const input = document.querySelector("#input");

const updateDisplay = () => {
  input.value = Calculation || "0";
};

updateDisplay();

const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const decimalBtn = document.querySelector("#decimal");

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalsBtn = document.querySelector("#equals");
const resetBtn = document.querySelector("#reset");
const deleteBtn = document.querySelector("#delete");

const handleNumberClick = (number) => {
  Calculation += number;
  updateDisplay();
};

const handleOperatorClick = (operatorSymbol) => {
  if (Calculation === "") return;
  Calculation += operatorSymbol;
  updateDisplay();
};

const handleDecimalClick = () => {
  if (!Calculation.includes(".")) {
    Calculation += ".";
    updateDisplay();
  }
};

const handleReset = () => {
  Calculation = "";
  updateDisplay();
};

const handleDelete = () => {
  Calculation = Calculation.slice(0, -1);
  updateDisplay();
}

const calculate = () => {
  try {
    let result = eval(Calculation);
    if (result === Infinity || result === -Infinity) {
      throw new Error("Cannot divide by zero");
    }
    Calculation = result.toString();
  } catch (error) {
    Calculation = "Error";
  }
  updateDisplay();
};

zeroBtn.addEventListener("click", () => handleNumberClick("0"));
oneBtn.addEventListener("click", () => handleNumberClick("1"));
twoBtn.addEventListener("click", () => handleNumberClick("2"));
threeBtn.addEventListener("click", () => handleNumberClick("3"));
fourBtn.addEventListener("click", () => handleNumberClick("4"));
fiveBtn.addEventListener("click", () => handleNumberClick("5"));
sixBtn.addEventListener("click", () => handleNumberClick("6"));
sevenBtn.addEventListener("click", () => handleNumberClick("7"));
eightBtn.addEventListener("click", () => handleNumberClick("8"));
nineBtn.addEventListener("click", () => handleNumberClick("9"));
decimalBtn.addEventListener("click", handleDecimalClick);

addBtn.addEventListener("click", () => handleOperatorClick("+"));
subtractBtn.addEventListener("click", () => handleOperatorClick("-"));
multiplyBtn.addEventListener("click", () => handleOperatorClick("*"));
divideBtn.addEventListener("click", () => handleOperatorClick("/"));

equalsBtn.addEventListener("click", calculate);
deleteBtn.addEventListener("click", handleDelete);
resetBtn.addEventListener("click", handleReset);