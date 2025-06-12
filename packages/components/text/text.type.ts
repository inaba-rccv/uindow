export type AnimateType =
  'bounceIn' |
  'fadeUpIn' |
  'blurIn' |
  'eraser' | // 和typewriter互斥
  ''

export type AnimateDefaultStyleType = {
  [key in AnimateType]: any
}
