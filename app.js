// Lo que necesito del DOM
var divPrincipal = document.querySelector('div');


// Datos de una persona random

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        var info = data.results[0];

        divPrincipal.innerHTML += `<div class="row align-items-start container">
        <div class="col-3">
            <div class="principal">
                <img src="${info.picture.large}" alt="foto de la persona" class="rounded-circle">
                <h2>Acerca de mí</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam, obcaecati est ratione quidem ad
                    incidunt esse saepe a eligendi ipsam sed, repellat nostrum nisi sapiente voluptatem excepturi
                    molestias? Sed.</p>
                <h2>Datos de contacto</h2>
                <p>Celular: ${info.cell}</p>
                <p>Correo: hola@sitioincreible.com 
                Sitio: @sitioincreible 
                Dirección: Calle Cualquiera 123, Cualquier Lugar</p>
            </div>
            <div>
                <h2>Educación</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum quam, maiores fuga pariatur eos
                    accusamus ad hic vitae ipsa distinctio sit laboriosam, perspiciatis repudiandae numquam amet totam
                    eveniet delectus!</p>
            </div>
        </div>
        <div class="col">
            <div>
                <h3>Nombre</h3>
                <h4>Carrera</h4>
            </div>
            <div>
                <h2>Experiencia Laboral</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit officia, maiores illum earum
                    libero dignissimos eius ratione reprehenderit corrupti magnam, perferendis sequi. Incidunt placeat
                    odit voluptate ut perferendis voluptatem?</p>
            </div>
        </div>
    </div> `
    console.log(info)
    });

// console.log(info)