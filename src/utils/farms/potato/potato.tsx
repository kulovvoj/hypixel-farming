import { ICONS } from '../../../components/common/icon/Icon.tsx'
import chimney_potato from './chimney_potato.tsx'
import { TCrop } from '../../types.ts'
import depthless_dunce_potato from './depthless_dunce_carrot.tsx'

const potato: TCrop = {
  id: 'potato',
  icon: ICONS.Potato,
  label: 'Potato',
  farms: [chimney_potato, depthless_dunce_potato]
}

export default potato
