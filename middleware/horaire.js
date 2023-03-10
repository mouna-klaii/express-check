function checkOpeningTimes() {
    let date = new Date(); // current time
    let hours = date.getHours();
    let day = date.getDay();
    let openingDays = [ 0, 1, 2, 3, 4 , 5];
    return openingDays.includes( day ) && hours >= 9 && hours <= 17;
}