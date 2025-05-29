export function addPx(x: number): string {
  return `${String(x)}px`
}

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
