import React from 'react'
import CartWidget from '../components/navbar/CartWidget'

const ListSectionContainer = () => {
    return (
        <>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <div>
            <ul className="ul-navbar" style={{display:'flex', flexDirection:'row'}}>
                <li><a>Productos naturales</a></li>
                <li><a>Bebidas</a></li>
                <li><a>Lácteos</a></li>
            </ul>
        </div>
        <div>
                <CartWidget/>
        </div>
    </div>
    </>
    )
}

export default ListSectionContainer