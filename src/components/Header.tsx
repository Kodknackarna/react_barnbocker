import Cart from './Cart';
import image from '../assets/sherlock-holmes.png';

function Header(){
    return (
        <header>
            <img src={image} className='logo'></img>
            <Cart />
        </header>
    )
}

export default Header;