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

// Поп апы
const modalWindowProgram = document.querySelector(".modal-window-program")
const modalWindowBuy = document.querySelector(".modal-window-buy")
const modalWindowTime = document.querySelector(".modal-window-time")

const modalProgram = document.querySelector(".modal-program")
const modalBuy = document.querySelector(".modal-buy")
const modalTime = document.querySelector(".modal-time")

function programOpen() {
  modalProgram.classList.add('open')
  modalWindowProgram.classList.add('open')
  body.classList.add('overflow')
}

function programClosed() {
  modalProgram.classList.remove('open')
  modalWindowProgram.classList.remove('open')
  body.classList.remove('overflow')
}

function buyOpen() {
  modalBuy.classList.add('open')
  modalWindowBuy.classList.add('open')
  body.classList.add('overflow')
}

function buyClosed() {
  modalBuy.classList.remove('open')
  modalWindowBuy.classList.remove('open')
  body.classList.remove('overflow')
}

function timeOpen() {
  modalTime.classList.add('open')
  modalWindowTime.classList.add('open')
  body.classList.add('overflow')
}

function timeClosed() {
  modalTime.classList.remove('open')
  modalWindowTime.classList.remove('open')
  body.classList.remove('overflow')
}

// Свайпер
const swiper = new Swiper(".cardSwiper", {
  slidesPerView: 1,
  spaceBetween: 150,
  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Анимация печати текста
let typedOne = new Typed('#dop-info1', {
  typeSpeed: 75,
  backSpeed: 20,
  startDelay: 500,
  loop: true,
  stringsElement: '#typed-string1',
})

let typedTwo = new Typed('#dop-info2', {
  typeSpeed: 75,
  backSpeed: 20,
  startDelay: 500,
  loop: true,
  stringsElement: '#typed-string2',
})

let typedThree = new Typed('#dop-info3', {
  typeSpeed: 75,
  backSpeed: 20,
  startDelay: 500,
  loop: true,
  stringsElement: '#typed-string3',
})

// Отправка форм в тг
const TOKEN = '7887966524:AAEB4CGvHpVlfIGRr6iW7cTsEbq8MVb-OEw'
const CTHAT_ID = '-4754889327'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById('programForm').addEventListener('submit', function(e) {
  e.preventDefault()

  let message = 'Звявка с сайта\n' + "Имя: " + this.name.value + '\n' + 'E-mail: ' + this.email.value + '\n' + 'Номер телефона: ' + this.phone.value + '\n' + 'Компания: ' + this.company.value

  axios.post(URL_API, {
    chat_id: CTHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    console.log('доставлено')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Завершилось')
    document.getElementById('programForm').reset()
    programClosed()
  })

})

document.getElementById('buyForm').addEventListener('submit', function(e) {
  e.preventDefault()

  let message = 'Звявка с сайта\n' + "ФИО: " + this.name.value + '\n' + 'E-mail: ' + this.email.value + '\n' + 'Номер телефона: ' + this.phone.value + '\n' + 'Компания: ' + this.company.value + '\n' + 'Код скидки или номер карты: ' + this.action.value

  axios.post(URL_API, {
    chat_id: CTHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    console.log('доставлено')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Завершилось')
    document.getElementById('buyForm').reset()
    buyClosed()
  })

})