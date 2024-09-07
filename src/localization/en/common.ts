import { Tags } from '../../utils/types'

const common = {
  farms: {
    wheat: 'Wheat',
    potato: 'Potato',
    carrot: 'Carrot',
    nether_wart: 'Nether Wart',
    mushroom: 'Mushroom',
    sugar_cane: 'Sugar Cane',
    melon: 'Melon',
    pumpkin: 'Pumpkin',
    cactus: 'Cactus',
    cocoa_beans: 'Cocoa Beans'
  },
  tags: {
    boot_swap: 'Boot Swap',
    lava_latch: 'Lava Latch',
    water_latch: 'Water Latch',
    bps: '{{bps}} BPS',
    key_swap: 'Key Swap',
    no_key_swap: 'No Key Swap',
    key_count: '{{key_count}}-Key',
    drowning: 'Drowning',
    burning: 'Burning',
    max_speed: '400 Speed',
    patcher: 'Patcher'
  } as { [key in Tags]: string },
  build_difficulty: ''
}

export default common
