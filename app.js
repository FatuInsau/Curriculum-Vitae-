// Lo que necesito del DOM
var divPrincipal = document.querySelector('div');


// Datos de una persona random

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        var info = data.results[0];

        divPrincipal.innerHTML += `<div class="row align-items-start container">
        <div class="col-5">
            <div class="principal">
                <img src="${info.picture.large}" alt="foto de la persona" class="rounded-circle">
                <h2>Acerca de mí</h2>
                <p>Soy una persona trabajadora, con iniciativa y buena predisposición para ayudar.</p>
                <h2>Datos de contacto</h2>
                <p>Celular: ${info.cell}</p>
                <p>Correo: ${info.email}</p>
                <p>Dirección: ${info.location.street.name} ${info.location.street.number}, ${info.location.city}, ${info.location.state}, ${info.location.country}</p>
            </div>
            <div>
                <h2>Educación</h2>
                <p>Universidad Increíble
                • Graduado con honores académicos 
                • Vicepresidente del Club de Matemática, 2012
                Lic. en Administración, 2018 </p>
            </div>
        </div>
        <div class="col">
            <div>
                <h3>${info.name.title + info.name.first + info.name.last}</h3>
                <h4>Lic. en Administración</h4>
            </div>
            <div>
                <h2>Experiencia Laboral</h2>
                <p>Asistente de Gerencia</p>
                <ul>
                    <li>Asistencia administrativa integral a Gerencia.</li>
                    <li>Seguimiento de Agenda. Revisión de Idoneidad de documentos y control de archivo. Creación de Presentaciones mensuales.</li>
                </ul>
                <p>Empresa Increíble, Ago 2019 - Presente</p>
                <hr>
                <p>Asistente Administrativo</p>
                <ul>
                    <li>Recepción de Clientes. Manejo de Conmutador.</li>
                    <li>Asistencia a mesa de entradas. Organización de libro de entrada y salida. Mantenimiento de archivo.</li>
                    <li>Preparación de informes semanales.</li>
                </ul>
                <p>Empresa Increíble, Ene 2016 - Jul 2017</p>
            </div>
        </div>
    </div> `
    console.log(info)
    });

// console.log(info)