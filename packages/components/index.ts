import type { App } from 'vue'
import { getSystemOptions } from '@uindow/utils'
import { UiButton } from './button/index'
import { UiFoldingWindow } from './folding-window/index'
import { UiIcon } from './icon/index'
import { UiInput } from './input/index'
import { UiMenu, UiMenuItem, UiSubMenu } from './menu'
import { UiMessageBox } from './message-box/index'
import { UiProgress } from './progress/index'
import { UiRadio, UiRadioGroup } from './radio/index'
import { UiScrollbar } from './scrollbar/index'
import { UiSlider } from './slider/index'
import { UiText } from './text/index'
import { UiUindow } from './uindow/index'

import './styles/index.scss'

const defaultInstallOpt = getSystemOptions()

function install(app: App): void {
  // console.log('初始化全局配置', defaultInstallOpt)
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
}

export {
  install,
}
