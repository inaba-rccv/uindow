export type AnimateType =
  'bounceIn' |
  'fadeUpIn' |
  'blurIn' |
  'rotateIn' |
  'eraser' | // 和typewriter互斥
  ''

export type AnimateDefaultStyleType = Record<AnimateType, any>
