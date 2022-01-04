import { DefaultTheme } from "../theme/default-theme/DefaultTheme";
import Neun from "../theme/neun/Neun";

class Theme {

    private theme: any = null;

    constructor(_theme: string = "default", data: any = null) {
        switch (_theme) {
            case 'default':
                this.theme = DefaultTheme()
                break

            case 'neun':
                this.theme = Neun()
                break

            default:
                this.theme = DefaultTheme()
                break
        }

        return this.getActiveTheme()
    }

    getActiveTheme() {
        return this.theme
    }
}

export default Theme