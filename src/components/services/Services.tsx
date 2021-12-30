function Services() {

    const services = [
        {
            icon: 'bxl-dribbble',
            title: 'Software Development.',
            description: 'We developing software for personal and proffesional requirement. solid in to trending software platform architecture.'
        },
        {
            icon: 'bx-file',
            title: 'Web Development.',
            description: 'We developing software for personal and proffesional requirement. solid in to trending software platform architecture.'
        },
        {
            icon: 'bx-tachometer',
            title: 'Assignment',
            description: 'We developing software for personal and proffesional requirement. solid in to trending software platform architecture.'
        },
        {
            icon: 'bx-world',
            title: 'Social Media Marketing',
            description: 'We developing software for personal and proffesional requirement. solid in to trending software platform architecture.'
        },
        {
            icon: 'bxl-dribbble',
            title: 'Promotional Solutions',
            description: 'We developing software for personal and proffesional requirement. solid in to trending software platform architecture.'
        },
        {
            icon: 'bx-file',
            title: 'Graphic Designing',
            description: 'We developing software for personal and proffesional requirement. solid in to trending software platform architecture.'
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