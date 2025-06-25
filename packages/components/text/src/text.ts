import type { AnimationOptions } from './text.type'

export const TYPEWRITER_ANIMATION_DELAY = 30 // ms
export const animationOptions: AnimationOptions = {
  'blur': {
    enter: {
      animateName: 'blurIn',
      style: {
        display: 'inline',
        willChange: 'filter',
        animationTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        animationDuration: '1s',
      },
    },
    leave: {
      animateName: 'blurOut',
      style: {
        display: 'inline',
        willChange: 'filter',
        animationTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        animationDuration: '1s',
      },
    },
  },
  'bounce': {
    enter: {
      animateName: 'bounceIn',
      style: {
        display: 'inline-block',
        animationTimingFunction: 'linear',
        animationDuration: '1s',
      },
    },
    leave: {
      animateName: 'bounceOut',
      style: {
        display: 'inline-block',
        animationTimingFunction: 'ease-out',
        animationDuration: '1s',
      },
    },
  },
  'fadeUp': {
    enter: {
      animateName: 'fadeUpIn',
      style: {
        animationTimingFunction: 'var(--timing-function-ease-out)',
        animationDuration: '1s',
      },
    },
    leave: {
      animateName: 'fadeUpOut',
      style: {
        animationTimingFunction: 'linear',
        animationDuration: '.3s',
      },
    },
  },
  'rotate': {
    enter: {
      animateName: 'rotateIn',
      style: {
        animationTimingFunction: 'var(--timing-function-ease-out)',
        animationDuration: '.8s',
        display: 'inline-block',
      },
    },
    leave: {
      animateName: 'rotateOut',
      style: {
        animationTimingFunction: 'var(--timing-function-ease-out)',
        animationDuration: '.8s',
        display: 'inline-block',
      },
    },
  },
  'flip': {
    enter: {
      animateName: 'flipIn',
      style: {
        animationDuration: '1s',
      },
    },
    leave: {
      animateName: 'flipOut',
      style: {
        animationDuration: '1s',
      },
    },
  },
  'eraser': {
    enter: {
      animateName: '',
      style: {
        animationTimingFunction: 'linear',
        animationDuration: '3s',
      },
    },
    leave: {
      animateName: '',
      style: {
        animationTimingFunction: 'linear',
        animationDuration: '3s',
      },
    },
  },
  // 无动画时
  '': {
    enter: {
      animateName: '',
      style: {
        animationDuration: '1s',
      },
    },
    leave: {
      animateName: '',
      style: {
        animationDuration: '1s',
      },
    },
  },
}

// export const animateEnterAndLeaveName: AnimateNameType = {
//   'blur': {
//     enter: 'blurIn',
//     leave: 'blurOut',
//   },
//   'bounce': {
//     enter: 'bounceIn',
//     leave: 'bounceOut',
//   },
//   'fadeUp': {
//     enter: 'fadeUpIn',
//     leave: 'fadeUpOut',
//   },
//   'flip': {
//     enter: 'flipIn',
//     leave: 'flipOut',
//   },
//   'rotate': {
//     enter: 'rotateIn',
//     leave: 'rotateOut',
//   },
//   'eraser': {
//     enter: '',
//     leave: '',
//   },
//   '': {
//     enter: '',
//     leave: '',
//   },
// }
