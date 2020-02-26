//Looping a Triangle within a console window
let tt;
for (tt = '#'; tt.length < 8; tt += '#') {
window.document.write(tt + "<br>");
    console.log(tt);
}  

let aX;
let aY = ['@', '@@', '@@@', '@@@@', '@@@@@', '@@@@@@'];
for (aX of aY) {
    console.log(aX);
window.document.write(aX + "<br>");
}