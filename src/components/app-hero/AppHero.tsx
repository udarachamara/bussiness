function AppHero() {
    return (
        <section id="hero" className="d-flex align-items-center">

            <div className="container">
                <div className="row">

                    <div className="col-lg-6 order-1  hero-img" data-aos="fade-right" data-aos-delay="1000">
                        <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                    </div>

                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">Grow your business with No name</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">W e
                            <pre>    B u i l d<pre>               T h e<pre>                        B e s t</pre></pre></pre></h2>
                        <div data-aos="fade-up" data-aos-delay="800">
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export { AppHero }