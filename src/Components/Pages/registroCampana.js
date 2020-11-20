import React from 'react'
import './style.css'
import './bootstrap.css'
function registroCampana() {
    window.addEventListener('load', function () {

        document.getElementById('fecha').type = 'text';
        document.getElementById('fecha').style = 'border-bottom: 2px  solid #f01706; ';
        document.getElementById('fecha').addEventListener('blur', function () {
            document.getElementById('fecha').style = 'border-bottom: 2px  solid #f01706; ';
            document.getElementById('fecha').type = 'text';


        });

        document.getElementById('fecha').addEventListener('focus', function () {

            document.getElementById('fecha').type = 'date';

        });

    });
    return (
        <>
            <div class="container2_login">
        <div class="content plus">
            <h2>Registro Campañas</h2>

           
            <form action="" method="POST">
               
                
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="text" id="nombre" name="nombre" required="required" placeholder="Nombre de la campaña" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">

                        <div class="inputBox">
                            <input type="text" id="organizacion" name="organizacion" required="required" placeholder="Organizacion que la Administra" data-constraints="@Required"/>
                            <span class="line"></span>
                        </div>

                    </div>
                </div>


                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            
                            <input id="fecha"  name="fecha"class="input100" type="date" 
                                placeholder="Fecha de la campaña" data-constraints="@Required"/>


                        </div>
                    </div>

                    <div class="col">

                        <div class="inputBox">
                            <input type="text"id="ubicacion" name="ubicacion" required="required" placeholder="Ubicacion" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>

                    </div>
                </div>

                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="text" id="ciudad" name="ciudad" required="required" placeholder="Ciudad" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">

                        <div class="inputBox">
                            <input type="number" id="celular" name="celular" required="required" placeholder="Celular" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>

                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="email" id="correo" name="correo" required="required" placeholder="Correo electronico para contactar" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>

                </div>
                <div class="row100">
                    <div class="col">
                        
                            <input type="submit" value="Enviar"/>
                        

                    </div>
                </div>
            </form>
            
        </div>
    </div>
        </>
    )
}

export default registroCampana
