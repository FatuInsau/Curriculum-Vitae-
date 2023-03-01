// Lo que necesito del DOM
var divPrincipal = document.querySelector('div');


// Datos de una persona random

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        var info = data.results[0];

        divPrincipal.innerHTML += `<div class="row align-items-start container">
        <div class="col-4">
            <div class="principal">
                <img src="${info.picture.large}" alt="foto de la persona" class="rounded-circle img-fluid">
                <h3>Acerca de mí</h2>
                <p>Soy una persona trabajadora, con iniciativa y buena predisposición para ayudar.</p>
            
                <h3>Datos de contacto</h2>
                <p><b>Celular:</b> ${info.cell}</p>
                <p><b>Correo:</b> ${info.email}</p>
                <p><b>Dirección:</b> ${info.location.street.name} ${info.location.street.number}, ${info.location.city}, ${info.location.state}, ${info.location.country}</p>
                <br/>
            </div>
            <div>
            <br/>
                <h3>Educación</h2>
                <p><b>Universidad Increíble</b></p>
                <ul>
                    <li>Graduado con honores académicos</li>
                    <li>Vicepresidente del Club de Matemática, 2012</li>
                </ul>
                <p> Lic. en Administración, 2018 </p>
            </div>
        </div>
        <div class="col">
            <div>
                <h1 class="display-2">${info.name.title + info.name.first + info.name.last}</h3>
                <h2 class="display-4 color-black">Lic. en Administración</h4>
                <hr>
            </div>
            <div>
                <h3>Experiencia Laboral</h2>
                <p><b>Asistente de Gerencia</b></p>
                <ul>
                    <li>Asistencia administrativa integral a Gerencia.</li>
                    <li>Seguimiento de Agenda. Revisión de Idoneidad de documentos y control de archivo. Creación de Presentaciones mensuales.</li>
                </ul>
                <p>Empresa Increíble, Ago 2019 - Presente</p>
                <hr>
                <p><b>Asistente Administrativo</b></p>
                <ul>
                    <li>Recepción de Clientes. Manejo de Conmutador.</li>
                    <li>Asistencia a mesa de entradas. Organización de libro de entrada y salida. Mantenimiento de archivo.</li>
                    <li>Preparación de informes semanales.</li>
                </ul>
                <p>Empresa Increíble, Ene 2016 - Jul 2017</p>
                <hr>
                <p><b>Pasante Administrativo</b></p>
                <ul>
                    <li>Recepción de Clientes. Manejo de Conmutador. </li>
                    <li>Asistencia a mesa de entradas. Organización de libro de entrada y salida. Mantenimiento de archivo.</li>
                    <li>Preparación de informes semanales.</li>
                </ul>
                <p>Empresa Increíble, Ene 2016 - Jul 2017</p>
                <hr>
                <p><b>Atención al Público</b></p>
                <ul>
                    <li>Atención a Clientes personalmente.</li>
                    <li>Mantenimiento y seguimiento de Stock y logística.</li>
                    <li>Preparación de informes semanales.</li>
                </ul>
                <p>Empresa Increíble, Ene 2014 - Jul 2015</p>
            </div>
        </div>
    </div> `
    });

