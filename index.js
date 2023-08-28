let mathRandom = document.getElementById("math-random")
const btn = document.getElementById("btn")
const copyValue = document.getElementById("copy-value")
var slider = document.getElementById("myRange")
var output = document.getElementById("password-lenght")
let arr = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]

btn.addEventListener("click", function(num) {
    var newArr = [...arr].sort(() => 0.5 - (Math.random()))
    mathRandom.textContent = (newArr.join('')).slice(num,[slider.value])
    copyValue.textContent = "Copy"
})

copyValue.addEventListener("click", function() {
    var copyText = document.getElementById("math-random").innerHTML
    navigator.clipboard.writeText(copyText)
    .then(() => { copyValue.textContent = "Copied To Clipboard" })})

    output.innerHTML = slider.value
    slider.oninput = function() {
        output.innerHTML = this.value
        meassure()
    }

    function meassure() {
        if (slider.value < 10) {
            console.log("weak!")
        } else console.log("Strong")
        
    }

   