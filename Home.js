// logout functionality 




// Add Money Card

document.getElementById("add-money").addEventListener("click", () => {
  document.getElementById("add-money-form").style.display = "block";
  document.getElementById("cashout-money-form").style.display = "none";
});
// Add Money Button
document.getElementById("add-money-btn").addEventListener("click", () => {
    let currentMoney = parseInt(document.getElementById("current-money").innerText)
    let takeAmount = parseInt(document.getElementById('take-amount').value);
    let totallMoney = currentMoney + takeAmount;
    document.getElementById('current-money').innerText = totallMoney;
});

// Cashout Card
document.getElementById("cashout-money").addEventListener("click", () => {
  document.getElementById("cashout-money-form").style.display = "block";
  document.getElementById("add-money-form").style.display = "none";
});
