domdocument.addEventListener('DOMContentLoaded', function() { 
    let menuPrincipal = document.querySelector('.menu-principal'); 
    if (menuPrincipal) { 
        menuPrincipal.addEventListener('mouseover', function() { 
            this.style.backgroundColor = 'darkgreen';  // Cambia el fondo a verde oscuro al pasar el ratón 
            this.style.transition = 'background-color 0.5s ease';  // Agrega una transición suave 
        }); 
        menuPrincipal.addEventListener('mouseout', function() { 
            this.style.backgroundColor = '#333'; // Vuelve al color de fondo original (definido en tu CSS) 
            this.style.transition = 'background-color 0.5s ease'; // Agrega una transición suave 
        }); 
    } 
}); 