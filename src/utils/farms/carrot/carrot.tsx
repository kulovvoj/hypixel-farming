import { ICONS } from '../../../components/icon/Icon.tsx'
import chimney_carrot from './chimney_carrot.tsx'
import { TCrop } from '../../types.ts'

const carrot: TCrop = {
  id: 'carrot',
  icon: ICONS.Carrot,
  label: 'Carrot',
  farms: [chimney_carrot]
}

export default carrot
