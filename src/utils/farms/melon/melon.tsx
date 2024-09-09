import { ICONS } from '../../../components/common/icon/Icon.tsx'
import { TCrop } from '../../types.ts'
import cascade_melon from './cascade_melon.tsx'

const melon: TCrop = {
  id: 'melon',
  icon: ICONS.MelonSlice,
  label: 'Melon',
  farms: [cascade_melon]
}

export default melon
