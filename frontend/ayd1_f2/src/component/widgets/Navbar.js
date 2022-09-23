import M from '@materializecss/materialize/dist/js/materialize.min';
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import useAuthContext from '../../hooks/useAuthContext';
import Modal from "./Modal";
import { HOME, DASHBOARD, CAR } from '../../config/routes/Paths';

function Navbar(props) {

	var menu, menuSide;

    const [instance, setInstance ] = useState(null);
    const [typeForm, setTypeForm ] 	 = useState("");

	const {isAuthenticated, logoutUser} = useAuthContext();


    useEffect(() => {
        M.AutoInit();
        let sideNav = document.querySelector('.sidenav');
        let instanceSideNav = M.Sidenav.init(sideNav);
        setInstance(instanceSideNav);



    }, []);

    function closeSideNavbar() {
        instance.close();
    }

    function logout(e){
        e.preventDefault();
        logoutUser();

    }
    if (!isAuthenticated){
        menu = (

            <div>
                 <ul className="right hide-on-med-and-down">
                    <li>
                        <a className="waves-effect waves-light btn modal-trigger green accent-3 black-text" href="#modal1" 
                            onClick={()=>setTypeForm("login")}>Login<i className="material-icons right">person</i>
                        </a>
                    </li>

                    <li>
                        <a className="blue darken-1 waves-effect waves-light btn modal-trigger black-text" href="#modal1"
                            onClick={()=>setTypeForm("register")}>Registro<i className="material-icons right">person_add</i>
                        </a>
                    </li>
                </ul>
                <Modal typeForm={typeForm} />
            </div>
        )

        menuSide = (
            <div>
                <li>
                    <a className="waves-effect waves-light btn modal-trigger green accent-3 black-text" href="#modal1" 
                        onClick={ () => setTypeForm("login")}>Login<i className="material-icons right">person</i>
                    </a>
                </li>

                <li>
                    <a className="blue darken-1 waves-effect waves-light btn modal-trigger black-text" href="#modal1"
                        onClick={()=>setTypeForm("register")}>Registro<i className="material-icons right">person_add</i>
                    </a>
                </li>

                <Modal typeForm={typeForm} />
            </div>
        )
    } else {
         menu = (
            <ul className="right hide-on-med-and-down">
                <li><Link to={HOME} className="waves-effect waves-light btn orange accent-2 black-text">
                    DASHBOARD
                    <i className="material-icons right">dashboard</i>
                </Link></li>
                <li><Link to={CAR} className="waves-effect waves-light btn light-blue accent-2 black-text">
                    Vehiculo
                    <i className="material-icons right">directions_car</i>
                </Link></li>

                <li><Link to={DASHBOARD} className="waves-effect waves-light btn green accent-2 black-text">
                    Hoteles
                    <i className="material-icons right">hotel</i>
                </Link></li>

                <li><Link to={HOME} className="waves-effect waves-light btn lime accent-2 black-text">
                    Vuelos
                    <i className="material-icons right">local_airport</i>
                </Link></li>

                <li><Link to={DASHBOARD} className="waves-effect waves-light btn  blue-grey lighten-3 black-text">
                    Reseña
                    <i className="material-icons right">rate_review</i>
                </Link></li>


                <li><a className="waves-effect waves-light btn red accent-2 black-text" href="/#"
                        onClick={logout}>
                    Sign Out
                    <i className="material-icons right">exit_to_app</i>
                </a></li>
            </ul>
        )

        menuSide = (
            <ul className="right hide-on-med-and-down">
                <li><Link to={HOME} className="waves-effect waves-light btn orange accent-2 black-text">
                    DASHBOARD
                    <i className="material-icons right">dashboard</i>
                </Link></li>
                <li><Link to={CAR} className="waves-effect waves-light btn light-blue accent-2 black-text">
                    Vehiculo
                    <i className="material-icons right">directions_car</i>
                </Link></li>

                <li><Link to={DASHBOARD} className="waves-effect waves-light btn green accent-2 black-text">
                    Hoteles
                    <i className="material-icons right">hotel</i>
                </Link></li>

                <li><Link to={HOME} className="waves-effect waves-light btn lime accent-2 black-text">
                    Vuelos
                    <i className="material-icons right">local_airport</i>
                </Link></li>

                <li><Link to={DASHBOARD} className="waves-effect waves-light btn  blue-grey lighten-3 black-text">
                    Reseña
                    <i className="material-icons right">rate_review</i>
                </Link></li>


                <li><a className="waves-effect waves-light btn red accent-2 black-text" href="/#"
                        onClick={logout}>
                    Sign Out
                    <i className="material-icons right">exit_to_app</i>
                </a></li>
            </ul>
        )
    }
    	

    return (
        <div>
            <nav>
                <div className="nav-wrapper blue lighten-2 ">
                    <Link to="/" href="#!" className="brand-logo">Full<strong>Trip</strong></Link>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                	{ menu }
                </div>
            </nav>	
             <ul className="sidenav" id="mobile-demo">
                <li>
                    <Link to="/" className="brand-logo"
                          onClick={() => closeSideNavbar(instance)}
                    >
                    Full<strong>Trip</strong>
                    </Link>
                </li>

                { menuSide }
            </ul>

        </div>

    );
}

export default Navbar;