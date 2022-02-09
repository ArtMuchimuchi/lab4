function outsideClicked () {
    outsideBox.classList.remove("gray-filter");
}

function insideClicked () {
    insideBox.classList.remove("gray-filter");
}

const outsideBox = document.querySelector(".container--outside-box");
outsideBox.addEventListener('click', outsideClicked);
const insideBox = document.querySelector(".container--outside-box--inside-box");
insideBox.addEventListener('click', insideClicked);