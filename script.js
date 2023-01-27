let menuVisible = false;
//Funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
        

    }
}

function seleccionar(){
    //Oculto el Menu una vaz que seleccion una opcion
    document.getElementById("nav") .classList =("");
    menuVisible = false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("HTMLCSS"); 
        habilidades[1].classList.add("JAVASCRIPT"); 
        habilidades[2].classList.add("PHPyMSQL");
        habilidades[3].classList.add("PHOTOSHOP");
        habilidades[4].classList.add("FOTOGRAFIA");
        habilidades[5].classList.add("Comunicación");
        habilidades[6].classList.add("Trabajo");
        habilidades[7].classList.add("Creatividad");
        habilidades[8].classList.add("Disciplina");
        habilidades[9].classList.add("Dedicacion");
    }
}

//Detecto el scrolling para aplicar la animacion de la barra de habilidades

window.onscroll = function(){
    efectoHabilidades();
} 