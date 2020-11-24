import React, { Component } from 'react';
import './style.css';
import './bootstrap.css';
import axios from 'axios';
import global from './global';

class registroHospital extends Component {
    nombreRef = React.createRef();
    celularRef = React.createRef();
    ubicacionRef = React.createRef();
    ciudadRef = React.createRef();
    correoRef = React.createRef();
    
    state={
        hospital:null
    }  
   
    recibirformulario=(e)=>{
        e.preventDefault();
        
    let hospital={
        nombre:this.nombreRef.current.value,
        celular:this.celularRef.current.value,
        ubicacion:this.ubicacionRef.current.value,
        ciudad:this.ciudadRef.current.value,
        correo:this.correoRef.current.value
       
    }
    this.setState({
        hospital:hospital
    })
    axios.post(global.urlHospital, this.state.hospital).then(res=>{
        if(res.data){
            console.log(res.data)
            this.props.history.push('/hospital');
        }
        else{
           console.log(res) 
        }
    })
    
    }
    render() {
        return (
            <>
                <div class="container2_login">
                    <div class="content plus">
                        <h2>Registro Hospital</h2>


                        <form action="" method="POST" onSubmit={this.recibirformulario}>

                            <div class="row100">
                                <div class="col">
                                    <div class="inputBox">
                                        <input ref={this.nombreRef} type="text" required="required" id="nombre" name="nombre" placeholder="Nombre del hospital" data-constraints="@Required" />

                                        <span class="line"></span>
                                    </div>
                                </div>
                                <div class="col">

                                    <div class="inputBox">
                                        <input ref={this.ciudadRef} type="text" id="ciudad" name="ciudad" required="required" placeholder="Ciudad" data-constraints="@Required" />

                                        <span class="line"></span>
                                    </div>

                                </div>
                            </div>


                            <div class="row100">
                                <div class="col">
                                    <div class="inputBox">
                                        <input ref={this.celularRef} type="number" id="celular" name="celular" required="required" placeholder="Celular" data-constraints="@Required" />

                                        <span class="line"></span>
                                    </div>

                                </div>

                                <div class="col">

                                    <div class="inputBox">
                                        <input ref={this.ubicacionRef} type="text" id="ubicacion" name="ubicacion" required="required" placeholder="Ubicacion" data-constraints="@Required" />

                                        <span class="line"></span>
                                    </div>

                                </div>
                            </div>


                            <div class="row100">
                                <div class="col">
                                    <div class="inputBox">
                                        <input ref={this.correoRef} type="email" id="correo" name="correo" required="required" placeholder="Correo electronico para contactar" data-constraints="@Required" />

                                        <span class="line"></span>
                                    </div>
                                </div>

                            </div>
                            <div class="row100">
                                <div class="col">
                                    <input type="submit" value="Enviar" />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </>
        )
    }
}

export default registroHospital
