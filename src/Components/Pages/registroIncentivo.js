import React, { Component } from 'react'
import './style.css'
import './bootstrap.css'
import axios from 'axios';
import global from './global';
class registroIncentivo extends Component {
    nombreRef = React.createRef();
    empresaRef = React.createRef();
    tipoRef=React.createRef();
    fechaRef = React.createRef();
    celularRef = React.createRef();
    correoRef = React.createRef();
    
    state={
        incentivo:null
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
        
    let incentivo={
        nombre:this.nombreRef.current.value,
        empresa:this.empresaRef.current.value,
        fecha:this.fechaRef.current.value,
        tipo:this.tipoRef.current.value,
        celular:this.celularRef.current.value,
        correo:this.correoRef.current.value
       
    }
    this.setState({
        incentivo:incentivo
    })
    axios.post(global.urlIncentivo, this.state.incentivo).then(res=>{
        if(res.data){
            
            this.props.history.push('/incentivos');
        }
        else{
           console.log(res) 
        }
    })
    
    }

    render() {
        return (
            <>
                <div className="container2_login">
                    <div className="content plus">
                        <h2>Registro Incentivos</h2>

                        <form action="" method="POST" onSubmit={this.recibirformulario}>

                            <div className="row100">
                                <div className="col">
                                    <div className="inputBox">
                                        <input ref={this.nombreRef} type="text" id="nombre" name="nombre" required="required" placeholder="Nombre del incentivo" data-constraints="@Required" />

                                        <span className="line"></span>
                                    </div>
                                </div>
                                <div className="col">

                                    <div className="inputBox">
                                        <input ref={this.empresaRef} type="text" id="empresa" name="empresa" required="required" placeholder="Empresa" data-constraints="@Required"></input>

                                        <span className="line"></span>
                                    </div>

                                </div>
                            </div>
                            <div className="row100">
                                <div className="col">
                                    <div className="inputBox">

                                        <input ref={this.fechaRef} id="fecha" name="fecha" className="input100" type="date"
                                            placeholder="Fecha valido" data-constraints="@Required" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="inputBox">
                                        <select ref={this.tipoRef} id="tipo" name="tipo" data-constraints="@Required">
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
                                <div className="col">

                                    <div className="inputBox">
                                        <input ref={this.celularRef} type="number" id="celular" name="celular" required="required" placeholder="Celular de contacto" data-constraints="@Required" />

                                        <span className="line"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="col">
                                    <div className="inputBox">
                                        <input ref={this.correoRef} type="email" required="required" id="correo" name="correo" placeholder="Correo electronico para contactar" data-constraints="@Required" />

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

export default registroIncentivo
