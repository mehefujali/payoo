const addAmount = document.getElementById('add-amount')
const pinNumber = document.getElementById('pin-number')
const availableBalance = document.getElementById('available-balance')

// add money 

document.getElementById('add-money-btn').addEventListener('click', function (event) {
      event.preventDefault()

      const newBalance = parseFloat(addAmount.value) + parseFloat(availableBalance.innerText)


      if (parseFloat(addAmount.value) > 0 && pinNumber.value === '1234') {
            availableBalance.innerText = newBalance
            addAmount.value = ''
            pinNumber.value = ''

      }
      else {
            const amountValue = (parseFloat(addAmount.value));


            if (parseFloat(addAmount.value) < 0 || isNaN(amountValue)) {

                  addAmount.classList.add('border-red-500')
                  addAmount.classList.add('text-red-500')
            }
            if (pinNumber.value !== '1234' || pinNumber.value === false) {
                  pinNumber.classList.add('border-red-500')

                  pinNumber.classList.add('text-red-500')
            }


      }


})
document.getElementById('log-out').addEventListener('click', function () {
      window.location.href = './index.html'

})
document.getElementById('add-amount').addEventListener('keyup', function () {
      addAmount.classList.remove('border-red-500')
      pinNumber.classList.remove('border-red-500')
      addAmount.classList.remove('text-red-500')
      pinNumber.classList.remove('text-red-500')

})
document.getElementById('pin-number').addEventListener('keyup', function () {
      addAmount.classList.remove('border-red-500')
      pinNumber.classList.remove('border-red-500')
      addAmount.classList.remove('text-red-500')
      pinNumber.classList.remove('text-red-500')

})


// cash out 
const cashOutAmount = document.getElementById('cash-out-amount')
const cashOutPin = document.getElementById('cas-out-pin-number')

document.getElementById('cash-out-btn').addEventListener('click', function (event) {
      event.preventDefault()
      const cashOutAmountValue = parseFloat(cashOutAmount.value)
      const availableBalanceValue = parseFloat(availableBalance.innerText)
      console.log(pinNumber.value);

      if (cashOutPin.value === '1234' && cashOutAmountValue <= availableBalanceValue) {
            const newBalance = availableBalanceValue - cashOutAmountValue;
            availableBalance.innerText = newBalance
            cashOutAmount.value = ''
            cashOutPin.value = ''
      }
      else {
            if (cashOutAmountValue > availableBalanceValue) {
                  document.getElementById('alert-error-ibalance').classList.remove('hidden')
                  cashOutAmount.classList.add('text-red-500')
                  cashOutAmount.classList.add('border-red-500')


            }
            if (isNaN(cashOutAmountValue) === true) {
                  cashOutAmount.classList.add('text-red-500')
                  cashOutAmount.classList.add('border-red-500')
            }

            if (cashOutPin.value !== '1234') {
                  cashOutPin.classList.add('text-red-500')
                  cashOutPin.classList.add('border-red-500')
            }
      }

})
cashOutAmount.addEventListener('keyup', function () {
      cashOutAmount.classList.remove('border-red-500')
      cashOutPin.classList.remove('border-red-500')
      cashOutAmount.classList.remove('text-red-500')
      cashOutPin.classList.remove('text-red-500')
      document.getElementById('alert-error-ibalance').classList.add('hidden')


})
cashOutPin.addEventListener('keyup', function () {
      cashOutAmount.classList.remove('border-red-500')
      cashOutPin.classList.remove('border-red-500')
      cashOutAmount.classList.remove('text-red-500')
      cashOutPin.classList.remove('text-red-500')

})