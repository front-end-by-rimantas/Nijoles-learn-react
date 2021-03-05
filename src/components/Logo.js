import LogoImg from '../images/logo.png';
import '../style/Logo.css';

function Logo() {
    return (
        <img src={LogoImg} className="logo" alt="Learn project logo" />
    );
}

export default Logo;
