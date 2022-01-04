import Constants from "../../common/Constants"

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Contact Us</h2>
                </div>

                <div className="row">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="contact-about">
                            <h3>{Constants.BRAND_SORT}</h3>
                            <p>we are specialist Information Technology agency that has the professional technical expertise and the bussiness solution offer as a service that is both personal and professional.</p>
                            <div className="social-links">
                                <a href="#twitter" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#facebook" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#instagram" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#linkedin" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                        <div className="info">
                            <div>
                                <i className="ri-map-pin-line"></i>
                                <p>
                                    {Constants.SITE_ADDRESS_LINE1}
                                    <br />
                                    {Constants.SITE_ADDRESS_LINE2}
                                </p>
                            </div>

                            <div>
                                <i className="ri-mail-send-line"></i>
                                <p>{Constants.SITE_EMAIl}</p>
                            </div>

                            <div>
                                <i className="ri-phone-line"></i>
                                <p>{Constants.SITE_PHONE}</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
                        <form className="php-email-form">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export { Contact }