setInterval (() => {
    let t = new Date();
    // console.log(t);
    let hr = t.getHours()
    let min = t.getMinutes();
    let sec = t.getSeconds();
    let hr_rotation = 30 * hr + min / 2;
    let min_rotation = 6 * min;
    let sec_rotation = 6 * sec;

    let hour = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    hour.style.transform =`rotate(${hr_rotation}deg)`;
    minutes.style.transform =`rotate(${min_rotation}deg)`;
    seconds.style.transform =`rotate(${sec_rotation}deg)`;
}, 1000);
