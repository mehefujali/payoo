const addAmount = document.getElementById('add-amount')
const pinNumber = document.getElementById('pin-number')

// add money 

document.getElementById('add-money-btn').addEventListener('click', function (event) {
      event.preventDefault()
      const availableBalance = document.getElementById('available-balance')
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
                  addAmount.placeholder = 'Invalid amount'
            }
            if (pinNumber.value !== '1234' || pinNumber.value === false) {
                  pinNumber.classList.add('border-red-500')
                  pinNumber.placeholder = 'Invalid pin'
            }
            addAmount.value = ''
            pinNumber.value = ''

      }


})
document.getElementById('log-out').addEventListener('click', function () {
      window.location.href = './index.html'

})
document.getElementById('add-amount').addEventListener('keyup', function () {
      addAmount.classList.remove('border-red-500')
      pinNumber.classList.remove('border-red-500')
      addAmount.placeholder = 'Add amount'
      pinNumber.placeholder = 'Pin number'

})
document.getElementById('pin-number').addEventListener('keyup', function () {
      addAmount.classList.remove('border-red-500')
      pinNumber.classList.remove('border-red-500')
      addAmount.placeholder = 'Add amount'
      pinNumber.placeholder = 'Pin number'

})


// cash out 