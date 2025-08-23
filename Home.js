// Add Money Card
document.getElementById('add-money').addEventListener('click',()=>{ 
    document.getElementById('add-money-form').style.display = 'block';
    document.getElementById('cashout-money-form').style.display = 'none';
})

// Cashout Card
document.getElementById('cashout-money').addEventListener('click',()=>{
    document.getElementById('cashout-money-form').style.display = 'block';
    document.getElementById('add-money-form').style.display = 'none';
})

