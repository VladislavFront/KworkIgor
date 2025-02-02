const burgerMenu = document.querySelector('.burger-menu')

const body = document.querySelector('.body')

function openBurgerMenu() {
  burgerMenu.classList.remove('menu-closed')
  burgerMenu.classList.add('menu-open')

  body.classList.add('overflow')
}

function closedBurgerMenu() {
  burgerMenu.classList.remove('menu-open')
  burgerMenu.classList.add('menu-closed')

  body.classList.remove('overflow')
}

function navItem() {
  burgerMenu.classList.remove('menu-open')
  burgerMenu.classList.add('menu-closed')

  body.classList.remove('overflow')
}

// Определям действующие элемениы на странице
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

// Делаем расчеты
const currentDate = new Date().getFullYear()
const nexDate = new Date(`February 13 ${currentDate} 00:00:00`) // В скобках указать дату, ДО которой будет считать таймер. Не трогать ${currentDate}

// Функция определения времени
function updateCounter () {
  const currentTime = new Date()
  const diff = nexDate - currentTime

  // Перевод в секунды / минуты / часы / дни
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60
  const secondsLeft = Math.floor(diff / 1000) % 60

  days.innerText = daysLeft
  hours.innerText = hoursLeft
  minutes.innerText = minutesLeft
  seconds.innerText = secondsLeft
}

// Вызов функции определения времени
updateCounter()

// Запускаем расчет 1 раз в секунду (каждую секунду)
setInterval(updateCounter, 1000)