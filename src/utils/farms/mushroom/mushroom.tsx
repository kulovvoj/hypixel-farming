import { ICONS } from '../../../components/common/icon/Icon.tsx'
import chimney_mushroom from './chimney_mushroom.tsx'
import { TCrop } from '../../types.ts'
import depthless_dunce_mushroom from './depthless_dunce_mushroom.tsx'

const mushroom: TCrop = {
  id: 'mushroom',
  icon: ICONS.RedMushroom,
  label: 'Mushroom',
  farms: [depthless_dunce_mushroom, chimney_mushroom]
}

export default mushroom
