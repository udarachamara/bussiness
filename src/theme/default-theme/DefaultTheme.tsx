import './style.css'

import { About } from "../../components/about/About"
import { AppHero } from "../../components/app-hero/AppHero"
import { Contact } from "../../components/contact/Contact"
import { Counts } from "../../components/counts/Counts"
import { Portfolio } from "../../components/portfolio/Portfolio"
import { Services } from "../../components/services/Services"
import { Testimonials } from "../../components/testimonials/Testimonials"
import { AppFooter } from "../../widget/app-footer/AppFooter"
import { AppHeader } from "../../widget/app-header/AppHeader"
import { AppSocialMedia } from "../../widget/app-social-media/AppSocialMedia"


function DefaultTheme() {
    return (
        <>
            <AppHeader/>
            <AppSocialMedia/>

            <AppHero/>
            <About/>
            <Counts/>
            <Services/>
            <Testimonials/>
            <Portfolio/>
            <Contact/>

            <AppFooter/>
        </>
    )
}

export { DefaultTheme }