function timeToStr(num) {
    return num.toString().padStart(2, '0');
}

function convertMsToHM(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;

    // minutes = seconds % 60 ? minutes + 1 : minutes;

    minutes = minutes % 60;

    hours = hours % 24;

    return `${timeToStr(hours)}:${timeToStr(minutes)}:${timeToStr(seconds)}`;
}

// console.log(convertMsToHM(130531000)); 


export default convertMsToHM;