//utilites
const depositeButton = document.getElementById("deposite-button");
const withdrawButton = document.getElementById("withdraw-button");
var balanceAmount = document.getElementById("balance");
var deposite = document.getElementById("deposite-amount");
var withdraw = document.getElementById("withdraw-amount");
const prevDeposite = document.getElementById("deposite");
// get deposite amount
function getDepositeAmount() {
  const depositeAmount = deposite.value;
  return depositeAmount;
}

// get withdraw amount
function getWithdrawAmount() {
  var withdrawAmount = withdraw.value;
  return withdrawAmount;
}

//update deposite amount after deposite

depositeButton.addEventListener("click", function (event) {
  const currentDepositeAmount = getDepositeAmount();

  const prevDepositeAmount = prevDeposite.innerText;

  var totalDepositeAmount =
    parseFloat(currentDepositeAmount) + parseFloat(prevDepositeAmount);

  prevDeposite.innerText = totalDepositeAmount;
  var previousBalance = balanceAmount.innerText;
  var updatedBalance =
    parseFloat(previousBalance) + parseFloat(currentDepositeAmount);

  balanceAmount.innerText = updatedBalance;
  deposite.value = "";
});

withdrawButton.addEventListener("click", function () {
  let currentWithdrawAmount = getWithdrawAmount();
  let previousWithdraw = document.getElementById("withdraw");
  let previousWithdrawAmount = previousWithdraw.innerText;
  // console.log(previousWithdrawAmount);

  var previousBalance = balanceAmount.innerText;
  // console.log(previousBalance);

  let totalBalance =
    parseFloat(previousBalance) - parseFloat(currentWithdrawAmount);
  // console.log(totalBalance);
  var updatedWithdrawAmount =
    parseFloat(previousWithdrawAmount) + parseFloat(currentWithdrawAmount);
  previousWithdraw.innerText = updatedWithdrawAmount;
  balanceAmount.innerText = totalBalance;
  withdraw.value = "";
});
