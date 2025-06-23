export type AnimateType =
  'bounce' |
  'fadeUp' |
  'blur' |
  'rotate' |
  'flip' |
  'eraser' | // 和typewriter互斥
  ''

export type AnimateStatus = 'enter' | 'leave'
export type ComponentDisplay = 'block' | 'none'

interface AnimateStyle {
  animationDuration: string
  animationTimingFunction?: string
  willChange?: string
  display?: string
}

interface AnimationAttributes {
  animateName: string
  style: AnimateStyle
}

export type AnimationOptions = Record<AnimateType, Record<AnimateStatus, AnimationAttributes>>
