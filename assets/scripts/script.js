let inputEl = document.getElementById('input-el')
let displayEl = document.getElementById('display-el')
let age = document.getElementById('age')
let errorTxt = document.getElementById('error-txt')
let errorEl =document.getElementById('error-el')
function ageInDays(){
    if(inputEl.value == ''){
        errorTxt.style.display = 'block'
    }else if(isNaN(inputEl.value) || inputEl.value > 2022){
        errorEl.style.display = 'block'
    }else{
        let birthYear = inputEl.value
        yearsInDays = (2022 - birthYear) * 365
        console.log(yearsInDays)
        age = yearsInDays
        displayEl.style.display ='block'
        
    }
}

function reset() {
    document.getElementById('age').remove()
}
inputEl.addEventListener('keypress', () => {
    errorTxt.style.display = 'none'
    errorEl.style.display = 'none'
})
// function rps() {
//     let choice = "paper"
//     let value = ['Rock', 'paper', 'scissors']
//     let Rps = Math.floor(Math.random() * 3)

//     if(value[Rps] == choice) {
//         console.log("you drew")
//     }else{
//         console.log("you lost'")
//     }

//     //console.log(value[Rps])
// }
// rps()