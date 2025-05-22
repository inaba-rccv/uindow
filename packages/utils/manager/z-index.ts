/**
 * @description ZIndex manager
 */

class ZIndex {
  private zIndex: number

  constructor() {
    this.zIndex = 2000
    console.log("init zIndex", this.zIndex)
  }

  public getCurrentIndex(): number {
    return this.zIndex
  }

  public getNextIndex(): number {
    console.log("getNextIndex", this.zIndex)
    this.zIndex++
    return this.zIndex
  }

  public setZIndex(zIndex: number) {
    this.zIndex = zIndex
  }
}
const zIndex = new ZIndex()
export default zIndex
