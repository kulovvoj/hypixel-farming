import { ICONS } from '../../../components/icon/Icon.tsx'
import chimney_netherwart from './chimney_netherwart.tsx'
import dunce_netherwart from './dunce_netherwart.tsx'
import stairway_netherwart from './stairway_netherwart.tsx'
import { TCrop } from '../../types.ts'

const netherwart: TCrop = {
  id: 'netherwart',
  icon: ICONS.NetherWart,
  label: 'Nether Wart',
  farms: [dunce_netherwart, chimney_netherwart, stairway_netherwart]
}

export default netherwart