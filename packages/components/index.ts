import type { App } from 'vue'
import { getSystemOptions } from '@uindow/utils'
import UiButton from './button/index.vue'
import UiFoldingWindow from './folding-window/index.vue'
import UiIcon from './icon/index.vue'
import UiInput from './input/index.vue'
import UiMenuItem from './menu/menu-item.vue'
import UiMenu from './menu/menu.vue'
import UiSubMenu from './menu/sub-menu.vue'
import UiMessageBox from './message-box/message-box'
import UiProgress from './progress/index.vue'
import UiRadioGroup from './radio/radio-group.vue'
import UiRadio from './radio/radio.vue'
import UiScrollbar from './scrollbar/index.vue'
import UiSlider from './slider/index.vue'
import UiText from './text/index.vue'
import UiUindow from './uindow/index.vue'
import './styles/index.scss'

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
    app.component('UiScrollbar', UiScrollbar)
  },
}
