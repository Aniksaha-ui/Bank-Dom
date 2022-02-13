const depositeButton = document.getElementById("deposite-button");
const withdrawButton = document.getElementById("withdraw-button");

function getInput(inputType) {
  //   debugger;
  var inputField = document.getElementById(inputType);
  var inputAmount = inputField.value;
  var amount = parseFloat(inputAmount);
  inputField.value = "";
  return amount;
}

function updateTotal(totalFieldId, amount) {
  //   debugger;
  var fieldAmount = document.getElementById(totalFieldId);
  var beforeUpdateAmount = fieldAmount.innerText;
  var previousAmount = parseFloat(beforeUpdateAmount);
  var totalAmount = previousAmount + amount;
  fieldAmount.innerText = totalAmount;
}

function updateBalance(amount, isAdd) {
  var balanceField = document.getElementById("balance");
  var previousBalance = balanceField.innerText;
  var balance = parseFloat(previousBalance);
  if (isAdd == true) {
    var updatedTotalBalance = amount + balance;
  } else {
    var updatedTotalBalance = balance - amount;
  }

  balanceField.innerText = updatedTotalBalance;
}

depositeButton.addEventListener("click", function () {
  var depositeAmount = getInput("deposite-amount");
  var depositeTotalAmount = updateTotal("deposite", depositeAmount);
  var updatedBalance = updateBalance(depositeAmount, true);
  //   console.log(depositeTotalAmount);
});

withdrawButton.addEventListener("click", function () {
  var withdrawAmount = getInput("withdraw-amount");
  var withdrawTotalAmount = updateTotal("withdraw", withdrawAmount);
  var updatedBalance = updateBalance(withdrawAmount, false);
  //   console.log(withdrawTotalAmount);
});
