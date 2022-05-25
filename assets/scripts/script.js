//challenge 1 age in days
function ageInDays(){
    var birthYear = prompt("when were you born? ");
    var age = ((2022 - birthYear) * 365)
    var h1 = document.createElement("h1");
    var textAnswers = document.createTextNode("you are" + age + " days old")
    h1.setAttribute("id", "age")
    h1.appendChild(textAnswers)
    document.getElementById('flexbox-result').appendChild(h1)
}

function reset() {
    document.getElementById('age').remove()
}

function rps() {
    let choice = "paper"
    let value = ['Rock', 'paper', 'scissors']
    let Rps = Math.floor(Math.random() * 3)

    if(value[Rps] == choice) {
        console.log("you drew")
    }else{
        console.log("you lost'")
    }

    //console.log(value[Rps])
}
rps()