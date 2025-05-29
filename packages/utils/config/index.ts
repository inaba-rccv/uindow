import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance } from 'vue'

export interface InstallOptions {
  fadeAnimationDuration: number
}

export type UindowOptions = InstallOptions

/** 初始化全局配置 */
export function getSystemOptions(): InstallOptions {
  const root = getComputedStyle(document.documentElement)
  const fadeAnimationDuration = Number.parseFloat(root.getPropertyValue('--animation-duration')) * 1000
  return {
    fadeAnimationDuration,
  }
}

/**
 * 获取全局配置
 */
export function useGlobalConfig(): UindowOptions {
  const vm = getCurrentInstance() as ComponentInternalInstance
  if (vm.proxy && '$UINDOW' in vm.proxy)
    return vm.proxy.$UINDOW as UindowOptions

  return {} as UindowOptions
}
