let mathRandom = document.getElementById("math-random")
const btn = document.getElementById("btn")
const copyValue = document.getElementById("copy-value")
let capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let regular = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


btn.addEventListener("click", function(num) {
    var newArr = [...capitals, ...regular, ...numbers, ...special].sort(() => [randomise] - (Math.random()))
    mathRandom.textContent = (newArr.join('')).slice(num,[slider.value])
    copyValue.textContent = "Copy"
    copyValue.innerHTML = "Copy" + " " + '<i class="fa-solid fa-copy"></i>'
    measure()
    showBtn()
})

function showBtn() {
    document.getElementById("copy-value").style.display = "inline-block"
}

copyValue.addEventListener("click", function() {
    var copyText = document.getElementById("math-random").innerHTML
    navigator.clipboard.writeText(copyText)
    .then(() => {
        copyValue.innerHTML = "Copied" + " " + '<i class="fa-solid fa-check"></i>'
    })
})

// CHARACTERS SLIDER
var slider = document.getElementById("myRange")
var output = document.getElementById("password-lenght")
var metter = document.getElementById("metter")
var metterText = document.getElementById("metter-text")
let colorWeak = "#fc1c03"
let colorFairlyStrong = "#03fc73"
let colorStrong = "#0cba00"
let colorSuperStrong = "#2afc05"

    output.innerHTML = slider.value
    slider.oninput = function() {
    output.innerHTML = this.value
    }

function measure() {
    if (slider.value <= 12) {
            metter.style.backgroundColor = colorWeak
            metterText.textContent = "Weak!" + " " + "🔑"
    } else if (slider.value <= 18) {
            metter.style.backgroundColor = colorFairlyStrong
            metterText.textContent = "Fairly Strong!" + " " + 	"🔑" + "🔑"
    } else if (slider.value <= 24) {
            metter.style.backgroundColor = colorStrong
            metterText.textContent = "Strong!" + " " + "🔑" + "🔑" + "🔑"
    } else if (slider.value <= 32) {
        metter.style.backgroundColor = colorSuperStrong
            metterText.textContent = "Super Strong!" + " " + "🔑" + "🔑" + "🔑" + "🔑"
    }
}

//RANDOMNESS SLIDER
let randomise  = []
let randomSlider = document.getElementById("randomise")
let randomLvlOutput = document.getElementById("randomlvl")

    randomSlider.oninput = function randomValue() {
        if (this.value == 1) {
            let value = 0.1
            randomise =+ value
        } else if (this.value == 2 ) {
            let value = 0.2
            randomise =+ value
        } else if (this.value == 3) {
            let value = 0.3
            randomise =+ value
        } else if (this.value == 4) {
            let value = 0.35
            randomise =+ value
        } else if (this.value == 5) {
            let value = 0.4
            randomise =+ value
        } else if (this.value == 6) {
            let value = 0.5
            randomise =+ value
        } else if (this.value == 7) {
            let value = 0.6
            randomise =+ value
        } else if (this.value == 8) {
            let value = 0.7
            randomise =+ value
        } else  {
            let value = 0.8
            randomise =+ value
        }
}

// SPACE TO SAVE THE PASSWORDS
const dContainer = document.getElementById("dContainer")

addPasswordFB.addEventListener("click", function addDataToDOM() {
    const postElement = document.createElement("div")
        postElement.classList.add('passwords')
            postElement.innerHTML = 
                `<div id=facebook>
                <i class="fa-brands fa-facebook-square"></i>
                <input id="savedFB" type="text">
                <button id="save-password" onclick="savePasswords()">Save
                <i class="fa-solid fa-floppy-disk"></i> 
                </button>
                </div> `
dContainer.appendChild(postElement)
showContainer()
})

addPasswordIG.addEventListener("click", function addDataToDOM() {
    const postElement = document.createElement("div")
        postElement.classList.add('passwords')
            postElement.innerHTML = 
                `<div id=instagram>
                <i class="fa-brands fa-instagram-square"></i>
                <input id="savedIG" type="text">
                <button id="save-password" onclick="savePasswords()">Save
                <i class="fa-solid fa-floppy-disk"></i> 
                </button>
                </div> `
dContainer.appendChild(postElement)
showContainer()
})

addPasswordTW.addEventListener("click", function addDataToDOM() {
    const postElement = document.createElement("div")
        postElement.classList.add('passwords')
            postElement.innerHTML = 
                `<div id=twitter>
                <i class="fa-brands fa-twitter-square"></i>
                <input id="savedTW" type="text">
                <button id="save-password" onclick="savePasswords()">Save
                <i class="fa-solid fa-floppy-disk"></i>
                </button>
                </div> `
dContainer.appendChild(postElement)
showContainer()
})

addPasswordTK.addEventListener("click", function addDataToDOM() {
    const postElement = document.createElement("tiktokdiv")
        postElement.classList.add('passwords')
            postElement.innerHTML = 
                `<div id=tiktok>
                <i class="fa-brands fa-tiktok"></i>
                <input id="savedTK" type="text">
                <button id="save-password" onclick="savePasswords()">Save
                <i class="fa-solid fa-floppy-disk"></i> 
                </button>
                </div>`
dContainer.appendChild(postElement)
showContainer()
})

function showContainer() {
    document.getElementById("dContainer").style.display = "block"
}

const fbValue = document.getElementById("fname")
const igValue = document.getElementById("savedIG")
const twValue = document.getElementById("savedTW")
const tkValue = document.getElementById("savedTK")
const savePassword = document.getElementById("save-password")


// function savePasswords() {

//     const valueFB = fbValue.value
//     const valueIG = igValue.value
//     const valueTW = twValue.value
//     const valueTK = tkValue.value
//     console.log(valueFB)
//     console.log(valueIG)
//     console.log(valueTW)
//     console.log(valueTK)
// }