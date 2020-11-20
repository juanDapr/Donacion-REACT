import React from 'react'
import './style.css'
import './bootstrap.css'

function campana() {
    return (
        <>
            <section class="Jumbotron">
                <div class="title">
                    <h1>Campañas</h1>
                </div>
                <div class="wave"></div>
            </section>
            <section class="about">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre de la campaña</th>
                    <th scope="col">Organizacion</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Ubicacion</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>        
                <tr> 
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td> </td>
                    <td></td>  
                </tr>
            </tbody>
        </table>
    </section>
    <div class="container2_login">
        <div class="content">
            <div class="row100">
                <div class="col">
                    <a href="/registroCampana">
                        <input type="submit" value="Registrar nueva Campaña"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default campana
