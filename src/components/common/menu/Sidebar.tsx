import SidebarSection from './SidebarSection'
import Icon, { ICON_SIZE } from '../../icon/Icon'
import { CROP_PATH } from '../../../utils/paths.ts'
import { CROPS } from '../../../utils/crops.ts'

export default function Sidebar() {
  return (
    <div className='menu-container'>
      {Object.values(CROPS).map((crop) => (
        <SidebarSection
          key={crop.id}
          icon={<Icon icon={crop.icon} size={ICON_SIZE.SIZE_40} />}
          label={crop.label}
          path={CROP_PATH.replace(':type', crop.id)}
        />
      ))}
    </div>
  )
}
