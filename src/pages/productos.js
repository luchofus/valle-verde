const productos = [
    {id: 1, name: 'Avena', precio: 300, stock: 10, imagen:'', categoria: 'Productos Naturales'},
    {id: 2, name: 'Granola', precio: 400, stock: 20, imagen: '.images/almendras.jpg', categoria: 'Productos Naturales'},
    {id: 3, name: 'Almendras', precio: 250, stock: 11, imagen: '', categoria: 'Productos Naturales'},
    {id: 4, name: 'Frutos secos', precio: 300, stock: 12, imagen: '', categoria: 'Productos Naturales'},
    {id: 5, name: 'Leche de almendras', precio: 280, stock: 6, imagen: '', categoria: 'Lacteos Bebidas'},
    {id: 6, name: 'Tutucas', precio: 300, stock: 8, imagen: '', categoria: 'Productos Naturales'},
    {id: 7, name: 'Yerba ', precio: 560, stock: 10, imagen: '', categoria: 'Lacteos Bebidas'},
    {id: 8, name: 'Barritas integrales', precio: 150, stock: 15, imagen: '', categoria: 'Productos Naturales'},
    {id: 9, name: 'Alfajores Light Chocolate', precio: 230, stock: 12, imagen: '', categoria: 'Productos Naturales'},
    {id: 10, name: 'Infusiones', precio: 120, stock: 6, imagen: '', categoria: 'Infusiones y Tés'},
    {id: 11, name: 'Cereales', precio: 240, stock: 12, imagen: '', categoria: 'Productos Naturales'},
    {id: 12, name: 'Galletitas de avena', precio: 190, stock: 13, imagen: '', categoria: 'Productos Naturales'},
    {id: 13, name: 'Suplemento deportivo', precio: 400, stock: 8, imagen: '', categoria: 'Deportivo'},
    {id: 14, name: 'Sahumerios', precio: 120, stock: 20, imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/054/9…1-a4bbbfa40c998328f716256665419372-1024-1024.jpeg', categoria: 'Kits del hogar'},
]

export const getProductos = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 3000)
    })
}

export const ItemList = () => {
    productos.map(producto => 
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