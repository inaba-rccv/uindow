<script lang="ts" setup>
import "./index.scss"
import { type IconSize } from "./icon.type"

const props = withDefaults(defineProps<{
    size?: IconSize
    clickable?: boolean
}>(), {
    size: 'default',
    clickable: false,
})
</script>

<template>
    <div class="uindow-icon" :class="[{ 'clickable': clickable }, `uindow-icon-${size}`]">
        <slot />
    </div>
</template>