import { IconCart } from "./CartWidget.js"

export const Navbar = () => {
    return (
        <header>
            <nav>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div>
                        <ul className="ul-navbar" style={{display:'flex', flexDirection:'row'}}>
                            <li><a>Productos naturales</a></li>
                            <li><a>Bebidas</a></li>
                            <li><a>Lácteos</a></li>
                        </ul>
                    </div>
                    <div>
                        <IconCart/>
                    </div>
                </div>
            </nav>
        </header>
    )
}