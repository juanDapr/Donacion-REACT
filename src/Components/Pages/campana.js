import React, { Component } from 'react';
import './style.css';
import './bootstrap.css';
import axios from 'axios';
import global from './global'


class campana extends Component {
    state = {
        campanas: []

    }
    componentWillMount() {
        this.getCampanas()
    }
    getCampanas = () => {
        axios.get(global.urlCampana).then(res => {
            if (res) {
                this.setState({
                    campanas: res.data
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
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.campanas.map((campa) => {
                                return(
                                    <tr key={campa.counter}>
                                        <td>{campa.counter}</td>
                                        <td>{campa.nombre}</td>
                                        <td>{campa.organizacion}</td>
                                        <td>{campa.fecha}</td>
                                        <td>{campa.celular}</td>
                                        <td>{campa.ubicacion}</td>
                                        <td>{campa.ciudad}</td>
                                        <td>{campa.correo}</td>
                                        
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
                                <a href="/registroCampana">
                                    <input type="submit" value="Registrar nueva Campaña" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default campana
