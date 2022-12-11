let counter = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let likes = document.querySelector('.likes')
let lis = document.querySelector('#list')
let comment = document.querySelector('#comment-form')
let submit = document.querySelector('#submit')
let text = document.querySelector('#comment-input')
let arr = []
let count =0
let obj = {}

plus.addEventListener('click', function (event) {
    event.preventDefault()
@@ -33,28 +34,38 @@ let countClicks = 0
heart.addEventListener('click', function (event) {
    event.preventDefault()
    list = document.createElement('li')
    list.textContent = `${counter.textContent} has been liked ${event++} time`
    if(obj.hasOwnProperty(counter.textContent)){
        obj[counter.textContent]++
    }
    else{
        obj[counter.textContent]=1
    }
    obj[counter.textContent]
    list.textContent = `${counter.textContent} has been liked ${obj[counter.textContent]} time`
    likes.appendChild(list)

    console.log(obj)
})



function timer() {
    const count= setInterval(()=> counter.textContent++, 1000)
    count= setInterval(()=> counter.textContent++, 1000)
    return count
}
const counting = timer()
counting ;
let counting = timer()

pause.addEventListener('click', function (event) {
    event.preventDefault()
    if (timer) {
    console.log(event.target.value)
    if (event.target.value==='pause') {
        event.target.textContent = 'resume'
        event.target.value = 'resume'
        clearInterval(counting)
    }
    else if(!timer){
    else if(event.target.value === 'resume'){
        event.target.textContent= 'pause'
        event.target.value= 'pause'
        counting = timer()
    }
    else{
        event.target.textContent = 'hello'
    }
})