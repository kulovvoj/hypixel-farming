import { ICONS } from '../../../components/icon/Icon.tsx'
import dunce_wheat from './dunce_wheat.tsx'
import chimney_wheat from './chimney_wheat.tsx'
import { TCrop } from '../../types.ts'

const wheat: TCrop = {
  id: 'wheat',
  icon: ICONS.Wheat,
  label: 'Wheat',
  farms: [dunce_wheat, chimney_wheat]
}

export default wheat
