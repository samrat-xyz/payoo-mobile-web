// Login Functionality


let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
  const phone = 123456789;
  const pin = 123;
  let phoneNumberInput = document.getElementById("phone-number").value;
  let pinNumberInput = document.getElementById("pin-number").value;
  if (phoneNumberInput == phone && pinNumberInput == pin) {
    
    window.location.href='Home.html'
  } else {
    alert('Login Failed')
  }
});
