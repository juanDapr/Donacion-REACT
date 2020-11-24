import React, { Component } from 'react';
import './style.css';
import './bootstrap.css';
import axios from 'axios';
import global from './global';
class incentivo extends Component {
    state = {
        incentivo: []

    }
    componentWillMount() {
        this.getIncentivo()
    }
    getIncentivo = () => {
        axios.get(global.urlIncentivo).then(res => {
            if (res) {
                this.setState({
                    incentivo: res.data
                })
            }
            console.log(this.state)
        })
    }
    render() {
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
                        {this.state.incentivo.map((incent) => {
                                return(
                                    <tr key={incent.counter}>
                                        <td>{incent.counter}</td>
                                        <td>{incent.nombre}</td>
                                        <td>{incent.empresa}</td>
                                        <td>{incent.fecha}</td>
                                        <td>{incent.tipo}</td>
                                        <td>{incent.celular}</td>
                                        <td>{incent.correo}</td>
                                        <td><button input="submit" className='btn btn-warning'>Eliminar</button></td>
                                       
                                        
                                    </tr>
                                )
                                
                            
                            
                                })}

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
}

export default incentivo
