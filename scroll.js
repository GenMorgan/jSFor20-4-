const scrollball = document.getElementById("indicator");

const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

function updatescrolIn(){
    const scrolpercent = (window.scrollY/totalScrollHeight) * 100;
    scrollball.style.width = scrolpercent + "%";
}

window.addEventListener("scroll",updatescrolIn);

updatescrolIn();