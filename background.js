
const stars = document.querySelector('.stars');
let boxshadow = "";

for (let i = 0; i <= 10000; i++) {
    px = Math.random() < 0.5 ? "-" : "";
    py = Math.random() < 0.5 ? "-" : "";
    x = Math.floor((Math.random() * 10000) + 1);
    y = Math.floor((Math.random() * 10000) + 1);
    s = Math.floor((Math.random() * 2) - 1);
    boxshadow += px + x + "px " + py + y + "px 0 " + s + "px #fff,";
}

boxshadow = boxshadow.slice(0, -1);

stars.style.boxShadow = boxshadow;