let formArray = ["nineAm", "tenAm", "elevenAm", "noon", "onePm", "twoPm", "threePm", "fourPm", "fivePm"];
let timeVar;
let dateVar;

function dateFinder(){
    dateVar = new Date().toLocaleDateString();
    return dateVar;
}

dateFinder();
console.log(dateVar);

$("#dateDisplay").text(dateVar);

formArray.forEach(startUp);

function startUp(storageId){
    var formSet = document.getElementById(storageId);
    var textSet = localStorage.getItem(storageId);
    var currentDate = localStorage.getItem("setDate")
    if (textSet == null){
    }else{
    formSet.setAttribute("value",textSet);
    }

    if(currentDate !== dateVar){
        localStorage.clear();
    }else{
    }
}

function logText(formReturn){
    event.preventDefault();
    var formId = formReturn.children[0].id;
    var inputText= document.getElementById(formId).value;
    var storageClass = document.getElementById(formId).name;
    localStorage.setItem(storageClass, inputText);
    localStorage.setItem(setDate, dateVar);
}

function timeFinder(){
    timeVar = new Date().toLocaleTimeString([],{hour: '2-digit'});
    return timeVar;
}

timeFinder();
console.log(timeVar);

