import type { AppContext, ComponentPublicInstance } from 'vue'
import type { MessageBoxOptions, MessageBoxType } from './message-box.type'
import {
  createVNode,
  render,
} from 'vue'
import MessageBoxConstructor from './index.vue'

class MessageBox {
  constructor(
    private messageBoxList: Map<
      ComponentPublicInstance<any>,
      {
        options: MessageBoxOptions
        callback: () => void
      }
    >,
  ) {}

  public confirm(options: {
    title?: string
    message?: string
    type?: MessageBoxType
    showConfirmButton?: boolean
  }) {
    const messageBoxOptions = { ...options }
    return this.create(messageBoxOptions)
  }

  private initInstance(
    props: any,
    container: HTMLElement,
    appContext: AppContext | null = null,
  ) {
    const vnode = createVNode(MessageBoxConstructor, props)
    vnode.appContext = appContext
    render(vnode, container)
    document.body.appendChild(container.firstElementChild!)
    return vnode.component
  }

  private genContainer() {
    return document.createElement('div')
  }

  private create(options: MessageBoxOptions): void {
    const container = this.genContainer()
    const instance = this.initInstance(options, container)!
    const vm = instance.proxy as ComponentPublicInstance<{
      x: number
      y: number
    }>
    options.onVanish = () => {
      render(null, container)
      this.messageBoxList.delete(vm)
    }
    this.messageBoxList.set(vm, { options, callback: () => {} })
  }
}

const messageBox = new MessageBox(new Map())
export default messageBox
