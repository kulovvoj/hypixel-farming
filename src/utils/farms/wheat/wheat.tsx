import { ICONS } from '../../../components/common/icon/Icon.tsx'
import { TCrop } from '../../types.ts'
import dunce_wheat from './dunce_wheat.tsx'
import chimney_wheat from './chimney_wheat.tsx'
import depthless_dunce_wheat from './depthless_dunce_wheat.tsx'

const wheat: TCrop = {
  id: 'wheat',
  icon: ICONS.Wheat,
  label: 'Wheat',
  farms: [dunce_wheat, depthless_dunce_wheat, chimney_wheat]
}

export default wheat
