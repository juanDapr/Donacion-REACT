import React, {useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes } from 'react-icons/fa'
import {BiDonateBlood} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import './navbar.css'
import {IconContext} from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    

    const handleCLick= () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    
   
    return (
        <>
        <IconContext.Provider value={{color: 'fff'}}>
            <div className="navbar">
                <div className= "navbar-container container_navbar">
                    
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        
                        Bloove
                    </Link>
                    <div className="menu-icon" onClick={handleCLick}>
                        {click ? <FaTimes/> :<FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className= 'nav-item'>
                            <Link to='/' className= 'nav-links' onClick={closeMobileMenu}>
                            
                                Home
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to='/requisitos' className= 'nav-links' onClick={closeMobileMenu}>
                               Requisitos
                            </Link>
                        </li>

                        <li className= 'nav-item'>
                            <Link to='/rh' className= 'nav-links' onClick={closeMobileMenu}>
                                Tipos de RH
                            </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/incentivos' className= 'nav-links' onClick={closeMobileMenu}>
                                Incentivos
                            </Link>
                                                   
                        </li>  
                        <li className='nav-item'>
                        <Link to='/about' className= 'nav-links' onClick={closeMobileMenu}>
                                Sobre nosotros
                            </Link>
                                                   
                        </li>
                        <li className='nav-item'>
                        <Link to='/login' className= 'nav-links' onClick={closeMobileMenu}>
                                login
                            </Link>
                                                   
                        </li>  

                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
