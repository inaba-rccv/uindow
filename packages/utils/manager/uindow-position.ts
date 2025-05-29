import type { IPosition } from '@uindow/types'

class UindowPosition {
  private nextUindowPosition: IPosition = {
    offsetX: 0,
    offsetY: 0,
  }

  private initialPositionRate = {
    x: 0.6,
    y: 0.4,
  }

  private rootFontSizeNumber: number = 0

  constructor() {
    const width = window.innerWidth
    const height = window.innerHeight
    const htmlElement = document.getElementsByTagName('html')
    const rootFontSize = window
      .getComputedStyle(htmlElement[0])
      .getPropertyValue('font-size')
    this.rootFontSizeNumber = Number(rootFontSize.match(/(\d+)/)![0])
    this.nextUindowPosition.offsetX = width * this.initialPositionRate.x
    this.nextUindowPosition.offsetY = height * this.initialPositionRate.y
  }

  getNextUindowPosition() {
    const { offsetX, offsetY } = this.nextUindowPosition
    this.nextUindowPosition = {
      offsetX: offsetX - this.rootFontSizeNumber,
      offsetY: offsetY - this.rootFontSizeNumber,
    }
    return { offsetX, offsetY }
  }
}

const uindowPosition = new UindowPosition()
export default uindowPosition
