export type AnimateType =
  'bounceIn' |
  'fadeUpIn' |
  'blurIn' |
  'rotateIn' |
  'flipIn' |
  'eraser' | // 和typewriter互斥
  ''

interface AnimationStyle {
  animationDuration: string
  animationTimingFunction?: string
  willChange?: string
  display?: string
}
export type AnimateDefaultStyleType = Record<AnimateType, AnimationStyle>
