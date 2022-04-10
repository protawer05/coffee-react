import Beans from './Beans'
import './footer.css'
const Footer = (props) => {
    return(
        <div className='footer__wrapper'>
            <ul className='footer__list'>
                <li className="footer__list-item">Coffe house</li>
                <li className="footer__list-item">Our coffee</li>
                <li className="footer__list-item">For your pleasure</li>
            </ul>
            <Beans/>
        </div>
    )
}

export default Footer;