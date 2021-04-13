import React, {Component} from 'react';
import './NavBar.css'
import logo from './../../logo.png'

class NavBar extends Component {
    render(){
        return(
            <nav className="NavBarItems">
               <a href="#"><img src={logo} alt="" className="logo"/></a>
               <div className="menu-icon">
                   
               </div>
               <ul className="nav-menu">
                   <li><a className="Inicio" href="#">Inicio |</a></li>
                   <li><a className="Inicio" href="#">Menu |</a></li>
                   <li><a className="Inicio" href="#">Conocenos |</a></li>
                   <li><a className="Inicio" href="#">Contacto</a></li>
               </ul>
            </nav>
        )
    }
}

export default NavBar;