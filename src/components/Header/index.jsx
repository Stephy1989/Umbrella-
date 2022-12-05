import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { About, Contacto, Home, Productos, Usuario, WhatsApp } from "../../pages/index"


import "./Header.css"


const Header = () => {
    return(
        <div className='container'>
            <div>
            <h1 className='titulo'>Logo</h1>
            </div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/usuario' element={<Usuario/>}/>
            <Route path='/whatsapp' element={<WhatsApp/>}/>
            </Routes>
            </BrowserRouter>
            <div className='grupo_submenu'>
                <input className='input_buscar' type="text" placeholder='Buscar' />
                 {/* aqui falta un icono de busqueda*/}
                 <button className='btn_oculto'>Usuario
                   
                 </button>
            </div>

            
        </div>
    )
}

export { Header }