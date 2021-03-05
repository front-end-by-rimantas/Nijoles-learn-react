import '../style/Header.css';
import Logo from './Logo.js';
import Nav from './Nav.js';
import Search from './Search.js';
import Account from './Account.js';

function Header() {
    return (
        <header>
            <Logo />
            <Nav />
            <Search />
            <Account />
        </header>
    );
}

export default Header;
