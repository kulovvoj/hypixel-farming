import { ICONS } from '../../../components/icon/Icon.tsx'
import chimney_potato from './chimney_potato.tsx'
import { TCrop } from '../../types.ts'

const potato: TCrop = {
  id: 'potato',
  icon: ICONS.Potato,
  label: 'Potato',
  farms: [chimney_potato]
}

export default potato
