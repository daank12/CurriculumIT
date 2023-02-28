// console.log('hola mundo');
let contactButton = document.getElementById('contactButton');
let detailsOn = document.getElementsByClassName('details-info');
let showContent = document.getElementById('showContact');
const foto = document.querySelector(".picture")
const name = document.querySelector(".name")
const job = document.querySelector(".job")
const mail = document.querySelector(".mail")

const tel = document.querySelector(".tel")
const loqation =document.querySelector(".location")

// MOSTRAR CONTACTOS
showContent.addEventListener('click',() =>{
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
// RESPONSIVE
if (window.screen.width > '767px'){
    detailsOn.style.display = 'flex';
} else {
    // detailsOn.style.display = 'none';

}
// API CONFIG
document.querySelector('#example').addEventListener('click', ()=> {
    obtenerDatos();
})

const obtenerDatos = async()=>{
    console.log('diste log')
    try {
    const url = 'https://randomuser.me/api';
    const respuesta = await fetch (url);
    const { results } = await respuesta.json();
    const datos = results[0]

    foto.src = datos.picture.medium;
    name.textContent = (datos.name.first + " " + datos.name.last);
    tel.textContent = datos.phone;
    loqation.textContent= datos.location.country;
    mail.textContent =datos.email;
    

    
    console.log(datos)
    }catch (error){
        console.log(error);
    }


    
    

    
    

} 