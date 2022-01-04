import { About } from '../../components/about/About'
import { AppHero } from '../../components/app-hero/AppHero'
import { Contact } from '../../components/contact/Contact'
import { Counts } from '../../components/counts/Counts'
import { Services } from '../../components/services/Services'
import { AppFooter } from '../../widget/app-footer/AppFooter'
import { AppHeader } from '../../widget/app-header/AppHeader'
import { AppSocialMedia } from '../../widget/app-social-media/AppSocialMedia'
import './neun.scss'

function Neun() {
    return (
        <>
            <video autoPlay muted loop id="vedioBg">
                <source src={process.env.PUBLIC_URL + 'assets/space.mp4'} type="video/mp4" />
            </video>
            <AppHeader />
            <AppSocialMedia/>
            <AppHero/>
            <About/>
            <Counts/>
            <Services/>
            <Contact/>

            <AppFooter/>
        </>
    )
}

export default Neun