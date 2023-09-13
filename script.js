var heltal = 5;
var decimal = 5.5;
var string = "Nino"
var sant = true
var falskt = false

console.log(typeof heltal);
console.log(typeof decimal);
console.log(typeof string);
console.log(typeof sant);
console.log(typeof falskt);

var djur = ["Lejon", "Zebra", "Tiger", "Puma"]

function variables() {
    
    alert(djur[djur.length - 1])
}

function userInput() {
    var result = prompt("Mata in ditt användarnamn")
    document.querySelector(".user").innerHTML = result
    if(result !== null) {
return false
}
console.log(result);
}

console.log(djur);
console.log(djur[3]);
console.log(djur[djur.length - 1]);

