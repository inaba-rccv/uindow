import type { Ref } from "vue"

export type radioOptions = {
  label: string
}

export interface RadioGroup {
  currentValue: Ref<string | number>
  options: radioOptions[]
}