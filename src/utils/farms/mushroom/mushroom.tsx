import { ICONS } from '../../../components/icon/Icon.tsx'
import chimney_mushroom from './chimney_mushroom.tsx'
import { TCrop } from '../../types.ts'

const mushroom: TCrop = {
  id: 'mushroom',
  icon: ICONS.RedMushroom,
  label: 'Mushroom',
  farms: [chimney_mushroom]
}

export default mushroom
