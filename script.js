const menuHamburguer = document.getElementById("hamburguer");

function toggleMenu(){
    const nav = ducument.getElementById("nav");
    nav.classList.toggle('active');
}

menuHamburguer.addEventListener('click', toggleMenu); 


//evento toggle = adiciona uma classe caso não tenha, remove caso tenha. 