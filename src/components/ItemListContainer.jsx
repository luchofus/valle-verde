import { useState, useEffect } from "react"
import { getProductos } from "../pages/productos"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const GetProductosContainer = () => {

    const [productoss, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductos()
        .then((respuesta) => setProductos(respuesta))
        .catch(err => console.log(`Error ${err}`))
        .finally(() => setLoading(false))
    }, [])

    return(
        <>
        {   loading ?
                <h2>Cargando...</h2>
                        :
                productoss.map(producto => 
                <div
                                                key={producto.id}
                                                className="card col col-lg-3" 
                                                style={{backgroundColor:'red', margin:'5px'}}>
                                                    <img className="card-img-top" style={{width:'50px', height:'100px'}} src={producto.imagen} alt=" "/>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{producto.name}</h5>
                                                            <p className="card-text">$
                                                            {producto.precio}</p>
                                                            <a href="#" className="btn btn-primary">Detalles producto</a>
                                                </div>
                                            </div>            
                                    )
        }

    </>
    )
}