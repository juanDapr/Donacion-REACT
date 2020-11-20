import React from 'react'
import './style.css'
import './bootstrap.css'
function registroHospital() {
    return (
        <>
            <div class="container2_login">
        <div class="content plus">
            <h2>Registro Hospital</h2>
            

            <form action="" method="POST">
                
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="text" required="required" id="nombre" name="nombre" placeholder="Nombre del hospital" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">

                        <div class="inputBox">
                            <input type="text" id="ciudad" name="ciudad" required="required" placeholder="Ciudad" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>

                    </div>
                </div>


                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="number" id="celular" name="celular" required="required" placeholder="Celular" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>

                    </div>

                    <div class="col">

                        <div class="inputBox">
                            <input type="text" id="ubicacion" name="ubicacion" required="required" placeholder="Ubicacion" data-constraints="@Required"/>

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

export default registroHospital
