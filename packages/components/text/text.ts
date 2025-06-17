import type { AnimateDefaultStyleType } from './text.type'

export const TYPEWRITER_ANIMATION_DELAY = 30 // ms
export const animateDefaultStyleMap: AnimateDefaultStyleType = {
  'blurIn': {
    animationTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    animationDuration: '1s',
    display: 'inline',
    willChange: 'filter',
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
  },
  'rotateIn': {
    animationTimingFunction: 'var(--timing-function-ease-out)',
    animationDuration: '.8s',
  },
  'flipIn': {
    animationDuration: '1s',
  },
  '': {
    animationDuration: '1s',
  },
}
