import "./styles.css";
import { ReactComponent as InstagramIcon} from './instagram.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';


function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido por Jean Victor
            <div className="footer-icons">
                <a href="https://www.instagram.com/je4ncomj/" target="_new">
                    <InstagramIcon/>
                </a>
                
                <a href="https://www.linkedin.com/in/jeanvictorfarias1511/" target="_new">
                    <LinkedinIcon/>
                </a>

            </div>
        </footer>
    )
}

export default Footer;