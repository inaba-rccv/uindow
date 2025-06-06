/**
 * 添加 px 后缀
 * @param x 数字
 * @returns 带px后缀的字符串
 */
export function addPx(x: number): string {
  return `${String(x)}px`
}

/**
 * 向class字符串添加一个class
 */
export function addClass(classString: string, className: string): string {
  if (!classString) {
    return className
  }
  if (classString.includes(className)) {
    return classString
  }
  return `${classString} ${className}`.trim()
}

/**
 * 获取元素的父级背景色
 * @param element DOM 元素
 * @returns 背景色hex字符串或null
 */
export function getParentBackgroundColor(element: HTMLElement): string | null {
  if (!element)
    return null

  const computedStyle = window.getComputedStyle(element)
  const bgColor = computedStyle.backgroundColor

  // 如果当前元素有非透明背景色，则返回
  if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
    return bgColor
  }

  // 如果没有背景色，继续向上查找
  if (element.parentElement) {
    return getParentBackgroundColor(element.parentElement)
  }

  // 到达根元素仍没有找到背景色
  return null
}
