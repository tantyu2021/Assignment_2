//Looping a Triangle within a console window
let t;
for (t = '#'; t.length < 8; t += '#') {
window.document.write(t + "<br>");
    console.log(t);
}  

let aX;
let aY = ['@', '@@', '@@@', '@@@@', '@@@@@', '@@@@@@'];
for (aX of aY) {
    console.log(aX);
window.document.write(aX + "<br>");
}