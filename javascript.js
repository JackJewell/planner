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




function timeStyle(){
    switch(timeVar){
        case "09 AM":
            $("#nineAm").css({"background-color": "#ffcccb"});
            changeColors(1);
            break;
        case "10 AM":
            $("#tenAm").css({"background-color": "#ffcccb"});
            changeColors(2);
            break;
        case "11 AM":
            $("#elevenAm").css({"background-color": "#ffcccb"});
            changeColors(3);
            break;
        case "12 PM":
            $("#noon").css({"background-color": "#ffcccb"});
            changeColors(4);
            break;
        case "01 PM":
            $("#onePm").css({"background-color": "#ffcccb"});
            changeColors(5);
            break;
        case "02 PM":
            $("#twoPm").css({"background-color": "#ffcccb"});
            changeColors(6);
            break;
        case "03 PM":
            $("#threePm").css({"background-color": "#ffcccb"});
            changeColors(7);
            break;
        case "04 PM":
            $("#fourPm").css({"background-color": "#ffcccb"});
            changeColors(8);
            break;
        case "05 PM":
            $("#fivePm").css({"background-color": "#ffcccb"});
            changeColors(9);
            break;
    }
}

function changeColors(switcher){
    var counter = 9-switcher;
    for(var i = 0; i < counter;){
        var chooser = $("#"+formArray[switcher]);
        chooser.css({"background-color": "#90ee90"});
        switcher++;
        i++;
    }
}

timeFinder();
timeStyle();