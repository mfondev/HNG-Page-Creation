let weekDay = document.querySelector('#weekDay')
let currentTime = document.querySelector('.currentTime')

let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
let weekday = new Date().getDay()
let curentWeekDay = days[weekday]
// console.log(curentWeekDay)
weekDay.innerHTML = curentWeekDay

// let hours = new Date().getHours()
// let minutes = new Date().getMinutes()
// let seconds = new Date().getSeconds()

//   let currentT = `${hours}:${minutes}:${seconds}`
//   currentTime.innerHTML = currentT

// console.log(currentT)
setInterval(() => {
  let time = new Date()
  currentTime.innerHTML = time.toLocaleTimeString()
})
