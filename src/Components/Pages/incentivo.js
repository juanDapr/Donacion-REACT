import React from 'react'
import './style.css'
import './bootstrap.css'
function incentivo() {
    return (
        <>
            <section class="Jumbotron">
                <div class="title">
                    <h1>Incentivos</h1>
                </div>
                <div class="wave"></div>
            </section>
            <section class="about">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre Incentivo</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Fecha valido</th>
                            <th scope="col">Tipo de Incentivo</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </section>
            <div class="container2_login">
                <div class="content">
                    <div class="row100">
                        <div class="col">
                            <a href="/registroIncentivo">
                                <input type="submit" value="Registrar nuevo Incentivo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default incentivo
