import Constants from "../../common/Constants"

function About() {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>About Us</h2>
                </div>

                <div className="row content">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                        <p>
                            WHY CHOOSE US
                        </p>
                        <ul>
                            <li><i className="ri-check-double-line"></i> Incomparable low budget.</li>
                            <li><i className="ri-check-double-line"></i> Premium professional services.</li>
                            <li><i className="ri-check-double-line"></i> Creativity & Great UI/UX.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                        <p>
                            { Constants.BRAND } is a specialist Information Technology agency that has the professional technical expertise and the bussiness solution offer as a service that is both personal and professional.
                        </p>
                        <a href="#learn-more" className="btn-learn-more">Learn More</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export { About }