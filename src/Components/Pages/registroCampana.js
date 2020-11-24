import React, { Component } from 'react'
import './style.css'
import './bootstrap.css'
import axios from 'axios';
import global from './global'

class registroCampana extends Component {
    nombreRef = React.createRef();
    organizacionRef = React.createRef();
    fechaRef = React.createRef();
    celularRef = React.createRef();
    ubicacionRef = React.createRef();
    ciudadRef = React.createRef();
    correoRef = React.createRef();
    
    state={
        campana:null
    }
    
    

    fechaf= function(){
        window.addEventListener('load', function(){
            document.getElementById('fecha').type = 'text';
            document.getElementById('fecha').style = 'border-bottom: 2px  solid #f01706; ';
            document.getElementById('fecha').addEventListener('blur', function () {
                document.getElementById('fecha').style = 'border-bottom: 2px  solid #f01706; ';
                document.getElementById('fecha').type = 'text';
        
        
            });
            document.getElementById('fecha').addEventListener('focus', function () {
        
                document.getElementById('fecha').type = 'date';
        
            });
           })
    }();
    recibirformulario=(e)=>{
        e.preventDefault();
        
    let campana={
        nombre:this.nombreRef.current.value,
        organizacion:this.organizacionRef.current.value,
        fecha:this.fechaRef.current.value,
        celular:this.celularRef.current.value,
        ubicacion:this.ubicacionRef.current.value,
        ciudad:this.ciudadRef.current.value,
        correo:this.correoRef.current.value
       
    }
    this.setState({
        campana:campana
    })
    axios.post(global.urlCampana, this.state.campana).then(res=>{
        if(res.data){
            console.log(res.data)
            this.props.history.push('/campanas');
        }
        else{
           console.log(res) 
        }
    })
    
    }

    render(){
    return (
        
        <>
            <div className="container2_login">
                <div className="content plus">
                    <h2>Registro Campañas</h2>


                    <form action="" method="POST" onSubmit={this.recibirformulario}>


                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input ref={this.nombreRef} type="text" id="nombre" name="nombre" required="required" placeholder="Nombre de la campaña" data-constraints="@Required" />

                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">

                                <div className="inputBox">
                                    <input ref={this.organizacionRef} type="text" id="organizacion" name="organizacion" required="required" placeholder="Organizacion que la Administra" data-constraints="@Required" />
                                    <span className="line"></span>
                                </div>

                            </div>
                        </div>


                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">

                                    <input ref={this.fechaRef} id="fecha" name="fecha" className="input100" type="date"
                                        placeholder="Fecha de la campaña" data-constraints="@Required" />


                                </div>
                            </div>

                            <div className="col">

                                <div className="inputBox">
                                    <input  ref={this.ubicacionRef} type="text" id="ubicacion" name="ubicacion" required="required" placeholder="Ubicacion" data-constraints="@Required" />

                                    <span className="line"></span>
                                </div>

                            </div>
                        </div>

                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input ref={this.ciudadRef} type="text" id="ciudad" name="ciudad" required="required" placeholder="Ciudad" data-constraints="@Required" />

                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">

                                <div className="inputBox">
                                    <input ref={this.celularRef} type="number" id="celular" name="celular" required="required" placeholder="Celular" data-constraints="@Required" />

                                    <span className="line"></span>
                                </div>

                            </div>
                        </div>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input ref={this.correoRef} type="email" id="correo" name="correo" required="required" placeholder="Correo electronico para contactar" data-constraints="@Required" />

                                    <span className="line"></span>
                                </div>
                            </div>

                        </div>
                        <div className="row100">
                            <div className="col">

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


export default registroCampana
