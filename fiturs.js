const addMoneyTogle = document.getElementById('add-money-togle')
const cashOutTogle = document.getElementById('cash-out-togle')

cashOutTogle.addEventListener('click', function () {
      document.getElementById('add-money-form').classList.add('hidden')
      document.getElementById('cash-out-form').classList.remove('hidden')
})
addMoneyTogle.addEventListener('click', function () {
      document.getElementById('add-money-form').classList.remove('hidden')
      document.getElementById('cash-out-form').classList.add('hidden')
})