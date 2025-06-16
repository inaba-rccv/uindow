import type { AnimateDefaultStyleType } from './text.type'

export const TYPEWRITER_ANIMATION_DELAY = 30 // ms
export const animateDefaultStyleMap: AnimateDefaultStyleType = {
  'blurIn': {
    animationTimingFunction: 'linear',
    animationDuration: '1s',
    display: 'inline',
  },
  'bounceIn': {
    animationTimingFunction: 'linear',
    animationDuration: '1s',
  },
  'fadeUpIn': {
    animationTimingFunction: 'var(--timing-function-ease-out)',
    animationDuration: '1s',
  },
  'eraser': {
    animationTimingFunction: 'linear',
    animationDuration: '3s',
    opacity: 1,
  },
  'rotateIn': {
    animationTimingFunction: 'linear',
    animationDuration: '1s',
  },
  '': {

  },
}
