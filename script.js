// Login Functionality


let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
  const phone = 174524;
  const pin = 112233;
  let phoneNumberInput = parseInt(document.getElementById("phone-number").value);
  let pinNumberInput = parseInt(document.getElementById("pin-number").value);
  if (phoneNumberInput == phone && pinNumberInput == pin) {
    
    window.location.href='Home.html'
  } else {
    alert('Login Failed')
  }
});
