import { ICONS } from '../../../components/common/icon/Icon.tsx'
import { TCrop } from '../../types.ts'
import leg_day_cocoa from './leg_day_cocoa.tsx'

const cocoa: TCrop = {
  id: 'cocoa',
  icon: ICONS.CocoaBeans,
  label: 'Cocoa Beans',
  farms: [leg_day_cocoa]
}

export default cocoa
