import store from '../../redux/store'
import './AppSocialMedia.scss'
import SocialIcons from './SocialIcons'

function AppSocialMedia() {
    let state = store.getState()
    return (
        <>
            {
                !state.socialIconsInMenu ?
                    <div className="all social-all">
                        <div className="social" data-aos="fade-left">
                            <SocialIcons />
                        </div>
                    </div>
                    :
                    ''
            }
        </>
    )
}

export { AppSocialMedia }