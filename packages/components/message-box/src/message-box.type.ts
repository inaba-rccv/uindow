import type { UindowColorType } from '@uindow/types'

export type MessageBoxType = UindowColorType

export interface MessageBoxOptions {
  draggable?: boolean
  overflow?: boolean
  type?: MessageBoxType
  title?: string
  message?: string

  onVanish?: () => void
}
