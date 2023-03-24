
import CartWidget from './CartWidget'

const Navbar = () => {

    return(
        <div>
            <h1>Skincare Andalasia</h1>
            <ul>
                <button> Inicio </button>
                <button>Sobre Nosotros</button>
                <button>Contacto</button>
            </ul>
            <CartWidget/>
        </div>
    )
}


export default Navbar
