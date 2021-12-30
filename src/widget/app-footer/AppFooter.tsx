import Constants from "../../common/Constants"

function AppFooter() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 text-lg-left text-center">
                        <div className="copyright">
                            &copy; Copyright <strong>{ Constants.BRAND }</strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <a href="#brand">{ Constants.BRAND }</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                            <a href="#intro" className="scrollto">Home</a>
                            <a href="#about" className="scrollto">About</a>
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Use</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { AppFooter }