// import { useSelector } from "react-redux";
// import { logOutUser } from "../../redux/actions";
// import store from "../../redux/store";

import { useState } from "react"
import Constants from "../../common/Constants"

function AppHeader() {

    const [navToggle, setNavToggle] = useState(false);


    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a className="text" href="#brand">{ Constants.BRAND }</a></h1>
                </div>

                <nav id="navbar" className={navToggle ? 'navbar navbar-mobile' : 'navbar'}>
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        <li><a className="getstarted scrollto" href="#about">Get Started</a></li>

                    </ul>
                    <i onClick={ (e) => { setNavToggle(!navToggle) }} className={navToggle ? 'bi-x bi mobile-nav-toggle' : 'bi-list bi mobile-nav-toggle'}></i>
                </nav>

            </div>
        </header>
    )
}

export { AppHeader }