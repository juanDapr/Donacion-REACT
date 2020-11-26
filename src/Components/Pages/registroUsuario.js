import React, { Component } from 'react'
import './style.css'
import './bootstrap.css'
import axios from 'axios';
import global from './global';
class registroUsuario extends Component {
    nombreRef = React.createRef();
    apellidoref = React.createRef();
    usuarioref=React.createRef();
    correoRef = React.createRef();
    passwordref = React.createRef();
   
    
    state={
        usuarios:null
    }
    recibirformulario=(e)=>{
        e.preventDefault();
        
    let usuario={
        first_name:this.nombreRef.current.value,
        last_name:this.apellidoref.current.value,
        username:this.usuarioref.current.value,
        email:this.correoRef.current.value,
        password: this.passwordref.current.value,
        
       
    }
    this.setState({
        usuarios:usuario
    })
    axios.post(global.urlUsuario, this.state.usuarios).then(res=>{
        if(res.data){
        
            this.props.history.push('/login');
        }
        else{
           console.log(res) 
        }
    })
    
    }


    render(){
    return (
        <>
        <div class="container2_login">
        <div class="content plus">
            <h2>Registro</h2>
           
            <span class="mb-0 text-muted">
                
                    Agrega tus credenciales
                
            </span>
            
            <form action="" method="post" onSubmit={this.recibirformulario}>
                
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="text"  ref={this.nombreRef} id="nombre" name="nombre" required="required" placeholder="Nombre" data-constraints="@Required"/> 
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="inputBox">
                            <input type="text"  ref={this.apellidoref} id="apellido" name="apellido"  required="required" placeholder="Apellido" data-constraints="@Required"/>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                        <input type="text"  ref={this.usuarioref} required="required" placeholder="Usuario" data-constraints="@Required"/> 
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="inputBox">
                            <input type="email" ref={this.correoRef} id=""   required="required" placeholder="Email" data-constraints="@Required"/>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
                
                            
            
                <div class="row100">
                    <div class="col">
                        <div class="inputBox">
                            <input type="password"  ref={this.passwordref} id="contrasena" name="contrasena"  required="required" placeholder="contrasena" data-constraints="@Required"/>

                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col">

                        <div class="inputBox">
                            <input type="password" id="confirmar" name="confirmar" required="required" placeholder="Confirmar contrasena" data-constraints="@Required"/>

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
}}

export default registroUsuario
