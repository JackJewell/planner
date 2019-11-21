let formArray = ["nineAm", "tenAm", "elevenAm", "noon", "onePm", "twoPm", "threePm", "fourPm", "fivePm"];
let timeVar;

formArray.forEach(startUp);

function startUp(storageId){
    var formSet = document.getElementById(storageId);
    var textSet = localStorage.getItem(storageId);
    formSet.setAttribute("value",textSet);
}

function logText(formReturn){
    event.preventDefault();
    var formId = formReturn.children[0].id;
    var inputText= document.getElementById(formId).value;
    var storageClass = document.getElementById(formId).name;
    localStorage.setItem(storageClass, inputText);
}

function timeFinder(){
    timeVar = new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'});
    return timeVar;
}

timeFinder();
console.log(timeVar);