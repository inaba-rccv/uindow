import type { App } from "vue"
import { getSystemOptions } from "@uindow/utils"
import './styles/index.scss'
import UiIcon from "./icon/index.vue"
import UiUindow from "./uindow/index.vue"
import UiMessageBox from "./message-box/message-box"
import UiButton from "./button/index.vue"
import UiInput from "./input/index.vue"
import UiSlider from "./slider/index.vue"
import UiMenu from "./menu/menu.vue"
import UiSubMenu from "./menu/sub-menu.vue"
import UiMenuItem from "./menu/menu-item.vue"
import UiText from "./text/index.vue"
import UiProgress from "./progress/index.vue"
import UiFoldingWindow from "./folding-window/index.vue"
import UiRadioGroup from "./radio/radio-group.vue"
import UiRadio from "./radio/radio.vue"

const defaultInstallOpt = getSystemOptions()

export default {
  install(app: App): void {
    app.config.globalProperties.$UINDOW = defaultInstallOpt
    app.config.globalProperties.$MessageBox = UiMessageBox

    app.component('UiIcon', UiIcon)
    app.component('UiButton', UiButton)
    app.component('UiInput', UiInput)
    app.component('UiUindow', UiUindow)
    app.component('UiSlider', UiSlider)
    app.component('UiMenu', UiMenu)
    app.component('UiSubMenu', UiSubMenu)
    app.component('UiMenuItem', UiMenuItem)
    app.component('UiText', UiText)
    app.component('UiProgress', UiProgress)
    app.component('UiFoldingWindow', UiFoldingWindow)
    app.component('UiRadioGroup', UiRadioGroup)
    app.component('UiRadio', UiRadio)
  }
}