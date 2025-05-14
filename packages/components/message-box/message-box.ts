import {
  createVNode,
  type AppContext,
  render,
  type ComponentPublicInstance,
} from 'vue'
import MessageBoxConstructor from './index.vue'
import type { MessageBoxOptions, MessageBoxType } from './message-box.type'

class MessageBox {
  private zIndex: number

  constructor(
    private messageBoxList: Map<
      ComponentPublicInstance<any>,
      {
        options: MessageBoxOptions
        callback: () => void
      }
    >,
  ) {
    this.zIndex = 2000
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
    options.onVanish = () => {
      render(null, container)
      this.messageBoxList.delete(vm)
    }
    const container = this.genContainer()
    const instance = this.initInstance(options, container)!
    const vm = instance.proxy as ComponentPublicInstance<{
      x: number
      y: number
    }>
    this.messageBoxList.set(vm, { options: options, callback: () => {} })
  }

  public confirm(options: {
    title?: string
    message?: string
    type?: MessageBoxType
  }) {
    const messageBoxOptions = { ...options }
    return this.create(messageBoxOptions)
  }

  public currentIndex(): number {
    return this.zIndex
  }

  public nextIndex(): number {
    this.zIndex++
    return this.zIndex
  }
}

const messageBox = new MessageBox(new Map())
export default messageBox
