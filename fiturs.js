const addMoneyTogle = document.getElementById('add-money-togle')
const cashOutTogle = document.getElementById('cash-out-togle')

cashOutTogle.addEventListener('click', function () {
      document.getElementById('add-money-form').classList.add('hidden')
      document.getElementById('cash-out-form').classList.remove('hidden')
      cashOutTogle.classList.add('border-[3px]')
      addMoneyTogle.classList.remove('border-[3px]')
})
addMoneyTogle.addEventListener('click', function () {
      document.getElementById('add-money-form').classList.remove('hidden')
      document.getElementById('cash-out-form').classList.add('hidden')
      addMoneyTogle.classList.add('border-[3px]')
      cashOutTogle.classList.remove('border-[3px]')
})