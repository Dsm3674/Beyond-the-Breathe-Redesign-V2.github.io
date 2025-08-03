
let count = 1;
const maxCount = 7;
const duration = 60; // seconds
const intervalTime = (duration * 1000) / maxCount;

const put1 = document.getElementById("put1");

const timer = setInterval(() => {
  if (count > maxCount) {
    clearInterval(timer);
    console.log("Count complete!");
    return; 
  }

  put1.value = count;
  console.log(count);

  count++;
}, intervalTime);
