import App from './App';
import './App.css';

function Nav(){
    return(
        <div className="Nav">
            <ul>
                <li className="logo">REST</li>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICE</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    )
}

export default Nav;