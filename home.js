const addAmount = document.getElementById('add-amount')
const pinNumber = document.getElementById('pin-number')

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
            addAmount.value = ''
            pinNumber.value = ''
            addAmount.classList.add('border-red-500')
            pinNumber.classList.add('border-red-500')
            addAmount.placeholder = 'Invalide input'
            if (pinNumber.value !== '1234') {
                  pinNumber.placeholder = 'invalid pin'
            }

      }


})