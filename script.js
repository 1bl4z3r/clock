document.addEventListener('DOMContentLoaded', function(e) {
    const secondHand = document.querySelector('#sc');
    const minutesHand = document.querySelector('#mn');
    const hoursHand = document.querySelector('#hr');
    const digital = document.getElementById("clk");
    let degrees = 0;
    var hour,minute,second,now,hours,minutes,seconds,secondsDegrees,minutesDegrees,hoursDegrees,meridiem;
  
    function setDate() {
        now = new Date();
        seconds = now.getSeconds();
        minutes = now.getMinutes();
        hours = now.getHours();

        secondsDegrees = ((seconds / 60) * 360);
        if (secondsDegrees > 444 || secondsDegrees < 93) {
          secondHand.classList.remove('transition');
        } else if (!secondHand.classList.contains('transition')) {
          secondHand.classList.add('transition');
        }
        secondHand.style.webkitTransform = `rotate(${secondsDegrees}deg)`;

        minutesDegrees = ((minutes / 60) * 360);
        if (minutesDegrees > 444 || minutesDegrees < 93) {
          minutesHand.classList.remove('transition');
        } else if (!minutesHand.classList.contains('transition')) {
          minutesHand.classList.add('transition');
        }
        minutesHand.style.webkitTransform = `rotate(${minutesDegrees}deg)`;

        hoursDegrees = ((hours / 12) * 360);
        if (hoursDegrees > 420 || hoursDegrees < 120) {
          hoursHand.classList.remove('transition');
        } else if (!hoursHand.classList.contains('transition')) {
          hoursHand.classList.add('transition');
        }
        hoursHand.style.webkitTransform = `rotate(${hoursDegrees}deg)`;

        meridiem = 'am';
        if(hours > 12) {hour = hours - 12;meridiem = 'pm';}
        else {hour = hours;}
        if(hours === 0) {hour = 12;}
        if(hour < 10) {hour = '0' + hour;}
        if(minutes < 10) {minute = '0' + minutes;}
        if(minutes >= 10) {minute = minutes;}
        if(seconds < 10) {second = '0' + seconds;}
        if(seconds >= 10) {second = seconds;}

        digital.innerText = `${hour}:${minute}.${second} ${meridiem}`;
    }
    setInterval(setDate, 1000);
  })
