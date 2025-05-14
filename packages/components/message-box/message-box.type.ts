export type MessageBoxType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'

export interface MessageBoxOptions {
  draggable?: boolean

  overflow?: boolean

  type?: MessageBoxType
  title?: string
  message?: string

  onVanish?: () => void
}
