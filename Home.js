// logout functionality 
const pin = 112233;
const Money = 45000;
document.getElementById('logout-btn').addEventListener('click',()=>{
    window.location.href = 'index.html';
})

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
    let sendMoneyPin  = parseInt(document.getElementById('sendMoney-pin').value)
    if(sendMoneyPin == pin){
        document.getElementById('current-money').innerText = totallMoney;
    }else{
        alert('Something Wrong')
    }
    
});

// Cashout Card
document.getElementById("cashout-money").addEventListener("click", () => {
  document.getElementById("cashout-money-form").style.display = "block";
  document.getElementById("add-money-form").style.display = "none";
});

document.getElementById("cashout-money-btn").addEventListener("click", () => {
    let currentMoney = parseInt(document.getElementById("current-money").innerText)
    let cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
    let totallMoney = currentMoney - cashoutAmount;
    let cashoutPin = parseInt(document.getElementById('cashout-pin').value);
    if(cashoutPin == pin && cashoutAmount < Money){
        
        document.getElementById('current-money').innerText = totallMoney;
    }else{
        alert('Something Wrong')
    }
});
