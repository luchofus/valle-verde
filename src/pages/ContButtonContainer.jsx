import { useState } from "react"

export const ContButtonContainer = ({texto}) => {
    const [contador, setContador] = useState(0)

    const agregarAlCarrito = () => {
        setContador(contador + 1)
    }
    const eliminarDelCarrito = () => {
        setContador(contador - 1)
        if(contador <= 0){
            setContador(0)
        }
    }

    return (
        <>
            <h1>{contador}</h1>
            <h2>{texto}</h2>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            <div>
                <button onClick={agregarAlCarrito}>+</button>
                <button onClick={eliminarDelCarrito}>-</button>
            </div>
        </>
    )
}