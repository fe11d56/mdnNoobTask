/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

/*document.querySelector("html").addEventListener("click", () => {
    alert("Don't touch me!");
});
*/

let myLogoImage = document.getElementById('logo');

myLogoImage.onclick = () => {
    let myLogoSrc = myLogoImage.getAttribute('src');
    if(myLogoSrc === 'images/Firefox-logo.svg.png') {
        myLogoImage.setAttribute('src', 'images/Mozilla-logo.svg.png');
    } else {
        myLogoImage.setAttribute('src', 'images/Firefox-logo.svg.png');
    }
}

let mySwitchUserButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUesrName() {
    let userName = prompt("Please input your name: ");
    if(!userName) {
        myHeading.textContent = "Mozilla is cool!"
        localStorage.setItem('name', "Anonymous")
    } else if(userName.length > 8 ) {
        alert("Too long!");
        myHeading.textContent = "Mozilla is cool, " + userName;
        setUesrName();
    } else {
        localStorage.setItem('name', userName);
        myHeading.textContent = "Mozilla is cool, " + userName;
    }
}

if(!localStorage.getItem('name')) {
    setUesrName();
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

mySwitchUserButton.onclick = function() {
    setUesrName();
}