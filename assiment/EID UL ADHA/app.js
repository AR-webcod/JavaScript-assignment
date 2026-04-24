// 🎯 Bakra Eid Date SET karo (example)
let eidDate = new Date("May 27, 2026 00:00:00").getTime();   // Date set karna

let timer = setInterval(function () {  //Har second update

    let now = new Date().getTime();   // Current time lena
    let distance = eidDate - now;    // Difference nikalna

    // time calculations    (Math.floor) Ye round off karta hai numbers
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // show in HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // when time ends
    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".timer").innerHTML = "🎉 Eid Mubarak!";
    }

}, 1000);