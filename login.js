const mobileNumber = document.getElementById('mobile-number')
const pinNumber = document.getElementById('pin-number')

document.getElementById('login-btn').addEventListener('click', function (event) {
      event.preventDefault()

      // console.log(mobileNumber, pinNumber);
      if (mobileNumber.value === '1111111111' && pinNumber.value === '1234') {
            window.location.href = './home.html'
      }
      else {
            document.getElementById('alert-error').classList.remove('hidden')
            mobileNumber.classList.add('border-red-600')
            pinNumber.classList.add('border-red-600')

      }


})

mobileNumber.addEventListener('keyup', function () {
      document.getElementById('alert-error').classList.add('hidden')
      mobileNumber.classList.remove('border-red-600')
      pinNumber.classList.remove('border-red-600')
})
pinNumber.addEventListener('keyup', function () {
      document.getElementById('alert-error').classList.add('hidden')
      mobileNumber.classList.remove('border-red-600')
      pinNumber.classList.remove('border-red-600')
})