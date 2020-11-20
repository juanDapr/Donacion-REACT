import React from 'react'
import './style.css'
import './bootstrap.css'
function registroUsuario() {

    window.addEventListener('load', function () {

        document.getElementById('fecha').type = 'text';
        document.getElementById('fecha').style = 'border-bottom: 2px  solid #f01706; ';
        document.getElementById('fecha').addEventListener('blur', function () {
            document.getElementById('fecha').style = 'border-bottom: 2px  solid #f01706; ';
            document.getElementById('fecha').type = 'text';


        });

        document.getElementById('fecha').addEventListener('focus', function () {

            document.getElementById('fecha').type = 'date'

        });

    })
    return (
        <>
        <div class="container2_login">
        <div class="content plus">
            <h2>Registro</h2>
           
            <span class="mb-0 text-muted">
                
                    Agrega tus credenciales
                
            </span>
            
            <form action="" method="post">
                
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="text" id="nombre" name="nombre" required="required" placeholder="Nombre" data-constraints="@Required"/> 
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="inputBox">
                            <input type="text" id="apellido" name="apellido"  required="required" placeholder="Apellido" data-constraints="@Required"/>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <select id="documento" name="documento" data-constraints="@Required">
                                <option value="">Documento de indentificacion</option>
                                <option value="CC">CC</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="TI">TI</option>
                            </select>
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="inputBox">
                            <input type="number" id="numDocumento" name="numDocumento"  required="required" placeholder="N° indentificacion" data-constraints="@Required"/>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <select id="grupo" name="grupo" data-constraints="@Required">
                                <option value="">Grupo sanguineo</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="O">O</option>
                                <option value="O">AB</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">

                        <div class="inputBox">

                            <select id="rh" name="rh" data-constraints="@Required">
                                <option value="RH">RH</option>
                                <option value="+">+</option>
                                <option value="-">-</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input id="fecha" name="fecha"  class="input100" type="date" 
                                placeholder="Fecha de Nacimiento del Titular" data-constraints="@Required"/>
                        </div>
                    </div>

                    <div class="col">
                        <div class="inputBox">

                            <select class="myselect" id="genero" name="genero" data-constraints="@Required">
                                <option value="">Genero</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input id="ciudad" name="ciudad"  type="text" required="required" placeholder="Ciudad donde vives" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">

                        <div class="inputBox">
                            <input type="number" id="celular" name="celular"  required="required" placeholder="Celular" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>

                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="email" id="correo" name="correo"  required="required" placeholder="Correo electronico" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>

                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="password" id="contrasena" name="contrasena"  required="required" placeholder="contrasena" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">

                        <div class="inputBox">
                            <input type="password" id="confirmar" name="confirmar" required="required" placeholder="Confirmar contrasena" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>

                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <a href="/">
                            <input type="submit" value="Enviar"/>
                        </a>

                    </div>
                </div>
            </form>
            
            
        </div>
    </div>
    
        </>
    )
}

export default registroUsuario
