import type { Ref } from 'vue'

export interface radioOptions {
  label: string
}

export interface RadioGroup {
  currentValue: Ref<string | number>
  options: radioOptions[]
}
