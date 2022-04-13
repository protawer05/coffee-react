import './aboutOur.css';
import Beans from '../Beans';

const AboutOur = (props) => {
    const {img, title} = props;
    return(
        <div className="container">
            <img src={img} alt="img" className="img" />
            <div className="text">
                <h3 className="title">{title}</h3>
                <Beans/>
                <p className="p" style={{marginTop: '27px'}}>Extremity sweetness difficult behaviour he of. On <br/>disposal of as landlord horrible.</p>
                <p className="p">Afraid at highly months do things on at. Situation <br/>recommend objection do intention <br/>
                    so questions. <br/>
                    As greatly removed calling pleased improve an. <br/>Last ask him cold feel<br/>
                    met spot shy want. Children me laughing we <br/>prospect answered followed. At it went<br/>
                    is song that held help face.
                </p>
            </div>
        </div>
    )
}

export default AboutOur;