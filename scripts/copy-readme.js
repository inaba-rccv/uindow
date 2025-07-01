import { copyFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
// scripts/copy-readme.js
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const source = resolve(__dirname, '../README.md')
const target = resolve(__dirname, '../packages/uindow/README.md')

copyFileSync(source, target)
