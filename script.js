//your code here
// Selectors start
let main = document.querySelector("main");
// Selectors end

// image section
let imgClassNames = ["img1", "img2", "img3", "img4", "img5"];

let randomInd = Math.floor(Math.random() * imgClassNames.length);

let randomImg = imgClassNames[randomInd];

imgClassNames.push(randomImg);
// image section

// Heading
let topHeading = document.createElement("h1");
main.append(topHeading);
topHeading.innerText = "I'm not a robot";
// Heading

// Elements
let imgBoxDiv = document.createElement("div");
main.append(imgBoxDiv);
imgBoxDiv.className = "flex";
// Elements

imgClassNames.forEach((image) => {
  let singleImg = document.createElement("img");
  singleImg.className = `${image}`;
  imgBoxDiv.append(singleImg);
});

// paragrap
let para = document.createElement("p");
main.append(para);
para.innerText =
  "Please click on the identical tiles to verify that you are not a robot.";
// paragrap

// buttons
let btnDiv = document.createElement("div");
let resetBtn = document.createElement("button");
let verifyBtn = document.createElement("button");

resetBtn.innerText = "Reset";
verifyBtn.innerText = "Verify";

main.append(btnDiv);
btnDiv.append(resetBtn, verifyBtn);

btnDiv.className = "centerItems";
resetBtn.className = "resetBtn";
verifyBtn.className = "verifyBtn";
// buttons

// final message
let messagePara1 = document.createElement("p");
messagePara1.innerText = "You are a human. Congratulations!";

let messagePara2 = document.createElement("p");
messagePara2.innerText =
  "We can't verify you as a human. You selected the non-identical tiles.";

messagePara1.classList = "messagePara1";
messagePara2.classList = "messagePara2";

main.append(messagePara1, messagePara2);
// final message

// Image click
let imgElem = document.querySelectorAll("img");

imgElem.forEach((img) => {
  img.addEventListener("click", selectedImage);
});

let clickCount = 0;
let img1 = "";
let img2 = "";
function selectedImage(e) {
  clickCount++;
  if (clickCount == 1) {
    img1 += e.target.classList;
    e.target.classList.add("selected");
    resetBtn.classList.remove("resetBtn");
  } else if (clickCount >= 2) {
    img2 += e.target.classList;
    e.target.classList.add("selected");
    verifyBtn.classList.remove("verifyBtn");

    console.log(img1);
    console.log(img2);

    clickCount = 0;
  }
}
// Image click

// reset button functionality
resetBtn.addEventListener("click", (e) => {
  verifyBtn.classList.add("verifyBtn");
  resetBtn.classList.add("resetBtn");

  messagePara1.classList.add("messagePara1");
  messagePara2.classList.add("messagePara2");

  imgElem.forEach((img) => {
    img.classList.remove("selected");
  });
});
// reset button functionality

// verify button functionality
verifyBtn.addEventListener("click", verifyResult);

function verifyResult() {
  verifyBtn.classList.add("verifyBtn");
  if (img1 == img2) {
    messagePara1.classList.remove("messagePara1");
  } else if (img1 != img2) {
    messagePara2.classList.remove("messagePara2");
  }
}
// verify button functionality
