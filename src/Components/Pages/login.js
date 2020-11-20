import React from 'react'
import './style.css'
import './bootstrap.css'
function login() {
    return (
        <>
            <div class="container_login">
                <div class="form">
                    <h2>Login</h2>
                    <span class="mb-0 text-muted">
                        Agrega tus credenciales</span>
                    <form >
                        <div class="input">
                            <div class="inputBox">
                                <label for="">Username</label>
                                <input type="text" ></input>
                            </div>
                            <div class="inputBox">
                                <label for="">Password</label>
                                <input type="Password" ></input>
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

export default login
