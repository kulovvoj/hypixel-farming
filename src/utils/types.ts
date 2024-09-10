import { FunctionComponent, ReactNode, SVGAttributes } from 'react'

export type TCrops = {
  [key: string]: TCrop
}

export type TCrop = {
  id: string
  icon: FunctionComponent<SVGAttributes<SVGElement>>
  label: string
  farms: TFarm[]
}

export type TFarm = {
  id: string
  name: string
  description?: string
  info?: ReactNode
  banner: string
  pictures?: { [key in Tags]?: string }
  spawn: ReactNode
  bps: number
  keyCount?: number
  depth: number
  tags: Tags[]
  yaw: string
  pitch: string
  speed: number
  enchantments: string[]
  keys: Keys[]
  buildDifficulty: number
  schema: string
  authors: string[]
}

export enum Keys {
  W = 'W',
  S = 'S',
  A = 'A',
  D = 'D',
  LC = 'LC',
  RC = 'RC',
  CTRL = 'CTRL',
  SHIFT = 'SHIFT'
}

export enum Tags {
  boot_swap = 'boot_swap',
  lava_latch = 'lava_latch',
  water_latch = 'water_latch',
  bps = 'bps',
  key_swap = 'key_swap',
  no_key_swap = 'no_key_swap',
  key_count = 'key_count',
  drowning = 'drowning',
  burning = 'burning',
  void = 'void',
  max_speed = 'max_speed',
  patcher = 'patcher'
}

export const TagColors = {
  boot_swap: 'magenta',
  lava_latch: 'brick',
  water_latch: 'blue',
  bps: 'blue',
  key_swap: 'yellow',
  no_key_swap: 'green',
  key_count: 'brick',
  drowning: 'primary',
  burning: 'fire',
  void: 'magenta',
  max_speed: 'ocean',
  patcher: 'orange'
}

// magenta
// red
// blue
// ocean
// green
// lime
// yellow
// orange
// brick
// fire
