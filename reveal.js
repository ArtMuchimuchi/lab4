let state = "hide";

function toggleList () {

    let head_list = document.querySelector(".head-list");
    let list = document.querySelector(".head-list--unorder-list");

    if(state === "show") {
        state = "hide";
        head_list.textContent = ">> Show details";
        list.classList.add("hidden");
    }
    else if(state === "hide") {
        state = "show";
        head_list.textContent = "v Hide details";
        list.classList.remove("hidden");
    }
}

const head_list = document.querySelector(".head-list");

head_list.addEventListener('click',toggleList);