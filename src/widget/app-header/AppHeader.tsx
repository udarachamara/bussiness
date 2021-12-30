// import { useSelector } from "react-redux";
// import { logOutUser } from "../../redux/actions";
// import store from "../../redux/store";

import Constants from "../../common/Constants"

function AppHeader() {

    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a className="text" href="#brand">{ Constants.BRAND }</a></h1>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        <li><a className="getstarted scrollto" href="#about">Get Started</a></li>

                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}

export { AppHeader }