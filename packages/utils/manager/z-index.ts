/**
 * @description ZIndex manager
 */

class ZIndex {
  private zIndex: number

  constructor() {
    this.zIndex = 2000
  }

  public getCurrentIndex(): number {
    return this.zIndex
  }

  public getNextIndex(): number {
    this.zIndex++
    return this.zIndex
  }

  public setZIndex(zIndex: number) {
    this.zIndex = zIndex
  }
}
const zIndex = new ZIndex()
export default zIndex
