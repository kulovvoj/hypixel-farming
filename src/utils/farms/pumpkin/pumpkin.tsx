import { ICONS } from '../../../components/icon/Icon.tsx'
import { TCrop } from '../../types.ts'
import cascade_pumpkin from './cascade_pumpkin.tsx'

const pumpkin: TCrop = {
  id: 'pumpkin',
  icon: ICONS.Pumpkin,
  label: 'Pumpkin',
  farms: [cascade_pumpkin]
}

export default pumpkin
