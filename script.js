
function showNumber() {
    const numberInput = document.getElementById("numberInput");
    const numberOutput = document.getElementById("numberOutput");
    const number = numberInput.value;
    numberOutput.textContent = generateBirthdayString(number);
  }
  function generateBirthdayString(number){
    let month = "";
    let weekday = "";
    let monthday = "";
    let weekdayNum = number%7;
    let Holiday = false;
    switch(true){
        case(number <= 7):
            month = "Needfest"
            monthday = number;
            Holiday = true;
            break;
        case(number <= 35):
            month = "Fireseek"
            monthday =  number - 7;
            break;
        case(number <= 63):
            month = "Readying"
            monthday =  number - 35;
            break;
        case(number <= 91):
            month = "Coldeven"
            monthday =  number - 63;
            break;
        case(number <= 98):
            month = "Growfest"
            monthday =  number - 91;
            Holiday = true;
            break;
        case(number <= 126):
            month = "Planting"
            monthday =  number - 98;
            break;
        case(number <= 154):
            month = "Flocktime"
            monthday =  number - 126;
            break;
        case(number <= 182):
            month = "Wealsun"
            monthday =  number - 154;
            break;
        case(number <= 189):
            month = "Richfest"
            monthday =  number - 182;
            Holiday = true;
            break;
        case(number <= 217):
            month = "Reaping"
            monthday =  number - 189;
            break;
        case(number <= 245):
            month = "Goodmonth"
            monthday =  number - 217;
            break;
        case(number <= 273):
            month = "Harvester"
            monthday =  number - 245;
            break;
        case(number <= 280):
            month = "Brewfest"
            monthday =  number - 273;
            Holiday = true;
            break;
        case(number <= 308):
            month = "Patchwall"
            monthday =  number - 280;
            break;
        case(number <= 336):
            month = "Ready\`reat"
            monthday =  number - 308;
            break;
        case(number <= 364):
            month = "Sunsebb"
            monthday =  number - 336;
            break;
    }
    switch (weekdayNum) {
        case 0:
            weekday = "Freeday";
            break;
        case 1:
            weekday = "Starday";
            break;
        case 2:
            weekday = "Sunday";
            break;
        case 3:
            weekday = "Moonday";
            break;
        case 4:
            weekday = "Godsday";
            break;
        case 5:
            weekday = "Waterday";
            break;
        case 6:
            weekday = "Earthday";
            break;
    
        default:
            break;
    }
    let isHoliday = Holiday ? "You were born during a Holiday! " : "";
    return `${isHoliday}Your Birthday was ${weekday}, the ${monthday} of ${month} `
  }
  function generateRandomNumber() {
    const min = 1;
    const max = 364;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerHTML = "Your random number is: " + random;
    document.getElementById("randomBirthday").innerHTML = generateBirthdayString(random);
  }
