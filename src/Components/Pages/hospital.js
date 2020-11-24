import React, { Component } from 'react'
import './style.css'
import './bootstrap.css'
import axios from 'axios';
import global from './global'

class hospital extends Component {
    state = {
        hospitales: []

    }
    componentWillMount() {
        this.getHospitales()
    }
    getHospitales = () => {
        axios.get(global.urlHospital).then(res => {
            if (res) {
                this.setState({
                    hospitales: res.data
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
                        <h1>Hospitales</h1>
                    </div>
                    <div class="wave"></div>
                </section>

                <section class="about">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Hospital</th>
                                <th scope="col">Ciudad</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Ubicacion</th>
                                <th scope="col">Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.hospitales.map((hospi) => {
                                return(
                                    <tr key={hospi.counter}>
                                        <td>{hospi.counter}</td>
                                        <td>{hospi.nombre}</td>
                                        <td>{hospi.ciudad}</td>
                                        <td>{hospi.celular}</td>
                                        <td>{hospi.ubicacion}</td>
                                        <td>{hospi.correo}</td>
                                       
                                        
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
                                <a href="/registroHospital">
                                    <input type="submit" value="Registrar nuevo Hospital" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default hospital
