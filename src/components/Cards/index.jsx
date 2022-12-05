import React from 'react';
import "./Cards.css"
import foto1 from '../static/images/foto1.png'
import foto2 from "../static/images/foto2.png"
import foto3 from "../static/images/foto3.png"


const Cards = () => {

    return(

    <div className='container'>
        <img src={foto1} alt="" />
        <img src={foto2} alt="" />
        <img src={foto3} alt="" />
        <img src={foto1} alt="" />
        <img src={foto2} alt="" />
        <img src={foto3} alt="" />
    </div>
    
    )
}

export { Cards }