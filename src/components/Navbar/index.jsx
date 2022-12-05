import React from 'react';
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className='grupo_menu'>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/productos">Productos</NavLink>
                <NavLink to="/contacto">Contacto</NavLink>
                <NavLink to="/about">Quienes somos</NavLink>
                <NavLink to="/whatsapp">WhatsApp</NavLink>
            </div>
    )
}

export { Navbar }