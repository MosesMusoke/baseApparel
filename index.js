const form = document.querySelector('.container form')
const email = document.querySelector('.container form input[type=email]')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  let emailValue = email.value
  if(validateEmail(emailValue)){
    form.classList.remove('error')
  }
  else {
    form.classList.add('error')
  }

})

// Program to validate email address

function validateEmail(email) {
  const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return regex_pattern.test(String(email).toLowerCase())
}