// In JS👍
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const phrases = ["FrontEnd Developer", "Web Developer"];
const el = document.getElementById("typewriter");
let sleepTime = 100;
let curPhraseIndex = 0;
const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 10);
    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 5);
    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};
writeLoop();




function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const phrases2 = ["FrontEnd Developer", "Web Developer"];
const el2 = document.getElementById("typewriter2");
let sleepTime2 = 100;
let curPhraseIndex2 = 0;
const writeLoop2 = async () => {
  while (true) {
    let curWord = phrases2[curPhraseIndex2];
    for (let i = 0; i < curWord.length; i++) {
      el2.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime2);
    }
    await sleep(sleepTime2 * 10);
    for (let i = curWord.length; i > 0; i--) {
      el2.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime2);
    }
    await sleep(sleepTime2 * 5);
    if (curPhraseIndex2 === phrases2.length - 1) {
      curPhraseIndex2 = 0;
    } else {
      curPhraseIndex2++;
    }
  }
};
writeLoop2();