theme = document.querySelector(".content");
// console.log(theme.classList);

darkColor = "#2f2f31";
lightColor = "#f2f2f2";

content = document.querySelectorAll("section");
title = document.querySelector(".title");
desc = document.querySelector(".desc");
calculator = document.querySelector(".calculator");
display = document.querySelector(".display");
btns = document.querySelectorAll(".btn");
frogImg = document.querySelector(".frog-img");
frogDesc = document.querySelector(".frog-desc");

function setLightTheme() {
    content[0].style.backgroundColor = darkColor;
    content[1].style.backgroundColor = lightColor;
    title.style.color = lightColor;
    desc.style.color = lightColor;
    calculator.style.backgroundColor = darkColor;
    // display.style.backgroundColor = lightColor;
    display.style.backgroundColor = "#212121";
    btns.forEach((btn) => {
        btn.style.backgroundColor = lightColor;
        text = btn.querySelector("span");
        text.style.color = darkColor;
    });
    frogImg.src = "./assets/dayFrog.png";
    frogDesc.style.color = darkColor;
}

function setDarkTheme() {
    content[0].style.backgroundColor = lightColor;
    content[1].style.backgroundColor = darkColor;
    title.style.color = darkColor;
    desc.style.color = darkColor;
    calculator.style.backgroundColor = lightColor;
    display.style.backgroundColor = darkColor;
    btns.forEach((btn) => {
        btn.style.backgroundColor = darkColor;
        text = btn.querySelector("span");
        text.style.color = lightColor;
    });
    frogImg.src = "./assets/nightFrog.png";
    frogDesc.style.color = lightColor;
}

function changeTheme(e) {
    if (theme.classList.contains("dark")) {
        theme.classList.remove("dark");
        theme.classList.add("light");
        e.style.backgroundColor = darkColor;
        img = e.querySelector("img");
        img.src = "./assets/light.svg";
        setLightTheme();
    } else if (theme.classList.contains("light")) {
        theme.classList.remove("light");
        theme.classList.add("dark");
        e.style.backgroundColor = lightColor;
        img = e.querySelector("img");
        img.src = "./assets/dark.svg";
        setDarkTheme();
    }
}
