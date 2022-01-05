function Services() {

    const services = [
        {
            icon: 'bxl-dribbble',
            title: 'Web Development',
            description: 'Need a place for your bussiness on a cloude and reach the customers in world wide. Get started with us.'
        },
        {
            icon: 'bx-file',
            title: 'Mobile Applications Development',
            description: 'We developing application for personal and proffesional requirement. with trending software platform architectures.'
        },
        {
            icon: 'bx-tachometer',
            title: 'Quality Assuarance Maintance',
            description: 'We doing QA for your existing Systems with fixing related bugs and assurance quality of the product.'
        },
        {
            icon: 'bx-world',
            title: 'UI/UX Designing',
            description: 'Most creativity UI which increased the best customer experince. No any confused steps any more. Get started with us.'
        },
        {
            icon: 'bxl-dribbble',
            title: 'Graphics Designing & Video Editing',
            description: 'Looking promotional addvertising skills. Don`t hestitate. The Creativity is Here.'
        },
        {
            icon: 'bx-file',
            title: 'System Designing & Development',
            description: 'Do you need to increase your bussiness preformance. This is the right place. Get started with us.'
        },
        {
            icon: 'bx-file',
            title: 'Research & Assigment Writing',
            description: 'We have experinced team with skils that have analysis of information to increase understanding of a topic or issue.'
        },
        {
            icon: 'bx-file',
            title: 'SEO',
            description: 'our engineers use best optimization tools and unique solution to improve things.we can increase traffic to your website and gain higher rank'
        }
    ]

    const ServiceCard = (props: any) => {
        return (
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mt-3 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><i className={'bx ' + props.data.icon}></i></div>
                    <h4 className="title"><a href="#title">{props.data.title}</a></h4>
                    <p className="description">{props.data.description}</p>
                </div>
            </div>
        )
    }

    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Services</h2>
                    <p>Straight forward with best customer experience and proven of reliance is essentials</p>
                </div>

                <div className="row">

                    {services.map((data, key) => {
                        return <ServiceCard key={key} data={data} />
                    })}

                </div>

            </div>
        </section>
    )
}

export { Services }