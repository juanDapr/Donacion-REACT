import React, { Component } from 'react'
import './style.css'
import './bootstrap.css'
import Axios from 'axios';
import global from './global';
class login extends Component {
     config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          }
        }
    constructor(props){
        super(props)
        this.state={
            username: "",
            password:"",
           
        };
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    componentDidMount() {
        if (this.state.logged_in) {
          fetch(global.urlUsuario, {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
          })
            .then(res => res.json())
            .then(json => {
              this.setState({ username: json.username });
            });
        }
      }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        const{username, password}=this.state;
    Axios
        .post( global.urlUsuario,
            {
               id:4
            }
        ,this.config.headers,
        { withCredentials:true}
        ).then(res =>{
            console.log("res from login", res);
        }).catch(error =>{
            console.log("login error", error)
        });
        event.preventDefault();
    }
    render() {
        return (
            <>
                <div class="container_login">
                    <div class="form">
                        <h2>Login</h2>
                        <span class="mb-0 text-muted">
                            Agrega tus credenciales</span>
                        <form onSubmit={this.handleSubmit}>
                            <div class="input">
                                <div class="inputBox">
                                    <label for="">Username</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
                                </div> 
                                <div class="inputBox">
                                    <label for="">Password</label>
                                    <input type="Password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <div class="inputBox">
                                <a href="/Menu">
                                    <input type="submit" name="login" value="Sign In" />
                                </a>
                            </div>
                        </form>
                        <p class="forget">Registrate <a href="/registroUsuario">Click Here</a></p>
                    </div>

                </div>
            </>
        )
    }
}
export default login
