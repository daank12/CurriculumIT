// console.log('hola mundo');
let contactButton = document.getElementById('contactButton');
let detailsOn = document.getElementsByClassName('details-info');
let showContent = document.getElementById('showContact');

document.addEventListener('click', (contactButton, MouseEvent) =>{
        console.log('click');
        var x = document.getElementById("details-info");
        if (x.style.display === "none" && showContent.innerText == "Mostrar Contactos") {
            x.style.display = "flex";
            showContent.innerText = "Ocultar Contactos";
        } else {
            x.style.display = "none";
            showContent.innerText = "Mostrar Contactos";
        }
    }
);
if (window.screen.width > '767px'){
    detailsOn.style.display = 'flex';
} else {
    // detailsOn.style.display = 'none';

}
