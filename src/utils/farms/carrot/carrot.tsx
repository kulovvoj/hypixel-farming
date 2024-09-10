import { ICONS } from '../../../components/common/icon/Icon.tsx'
import chimney_carrot from './chimney_carrot.tsx'
import { TCrop } from '../../types.ts'
import depthless_dunce_carrot from './depthless_dunce_carrot.tsx'

const carrot: TCrop = {
  id: 'carrot',
  icon: ICONS.Carrot,
  label: 'Carrot',
  farms: [chimney_carrot, depthless_dunce_carrot]
}

export default carrot
