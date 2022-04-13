import logo from '../img/header-beans.svg';
import './header.css'
const Header = ({changePage}) => {

     const setPage = (e) => {
        const page = +e.target.getAttribute('data-page');
        changePage(page)
    }
    return(
        <header className='header'>
            <ul className='list'>
                <img data-page="1" onClick={setPage} src={logo} className="logo__link" alt="logo"></img>
                <div data-page="2" onClick={setPage} className="list-item">Coffe house</div>
                <div data-page="3" onClick={setPage} className="list-item">Our coffee</div>
                <div data-page="4" onClick={setPage} className="list-item">For your pleasure</div>
            </ul>
        </header>
    )
}

export default Header;