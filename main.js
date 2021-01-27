let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    alert('あなた，ジョン・テニエルの絵に興味があるのね');
    if(mySrc === 'images/alice.png') {
      myImage.setAttribute ('src','images/alice_mi.png');
    } else {
      myImage.setAttribute ('src','images/alice.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to wonderland, '+ myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to wonderland, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}