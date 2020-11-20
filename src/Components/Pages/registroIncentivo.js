import React from 'react'
import './style.css'
import './bootstrap.css'
function registroIncentivo() {
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
            <h2>Registro Incentivos</h2>
            
            <form action="" method="POST">
                
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="text" id="nombre" name="nombre" required="required" placeholder="Nombre del incentivo" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">

                        <div class="inputBox">
                            <input type="text" id="empresa" name="empresa" required="required" placeholder="Empresa" data-constraints="@Required"></input>

                            <span class="line"></span>
                        </div>

                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            
                            <input id="fecha" name="fecha" class="input100" type="date" 
                            placeholder="Fecha valido" data-constraints="@Required"/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="inputBox">
                            <select id="tipo" name="tipo" data-constraints="@Required">
                                <option value="">Tipo de incentivo</option>
                                <option value="Descuento 10%">Descuento 10%</option>
                                <option value="Descuento 20%">Descuento 20%</option>
                                <option value="Descuento 30%">Descuento 30%</option>
                                <option value="Descuento 40%">Descuento 40%</option>
                                <option value="Bono de alimentos">Bono de alimentos</option>
                                <option value="Bono de medicamentos">Bono de medicamentos</option>
                                <option value="otro">otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">

                        <div class="inputBox">
                            <input type="number" id="celular"  name="celular" required="required" placeholder="Celular de contacto" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="email" required="required" id="correo" name="correo" placeholder="Correo electronico para contactar" data-constraints="@Required"/>

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

export default registroIncentivo
