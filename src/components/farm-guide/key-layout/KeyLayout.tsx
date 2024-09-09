import { Keys, TFarm } from '../../../utils/types.ts'
import Icon, { ICON_SIZE, ICONS } from '../../common/icon/Icon.tsx'

interface IProps {
  farm: TFarm
}

export default function KeyLayout({ farm }: IProps) {
  return (
    <div className='keyboard-layout'>
      {farm.keys.includes(Keys.W) ? (
        <Icon icon={ICONS.KeyWPressed} size={ICON_SIZE.SIZE_FIT} />
      ) : (
        <Icon icon={ICONS.KeyW} size={ICON_SIZE.SIZE_FIT} />
      )}
      {farm.keys.includes(Keys.A) ? (
        <Icon icon={ICONS.KeyAPressed} size={ICON_SIZE.SIZE_FIT} />
      ) : (
        <Icon icon={ICONS.KeyA} size={ICON_SIZE.SIZE_FIT} />
      )}
      {farm.keys.includes(Keys.S) ? (
        <Icon icon={ICONS.KeySPressed} size={ICON_SIZE.SIZE_FIT} />
      ) : (
        <Icon icon={ICONS.KeyS} size={ICON_SIZE.SIZE_FIT} />
      )}
      {farm.keys.includes(Keys.D) ? (
        <Icon icon={ICONS.KeyDPressed} size={ICON_SIZE.SIZE_FIT} />
      ) : (
        <Icon icon={ICONS.KeyD} size={ICON_SIZE.SIZE_FIT} />
      )}
      {farm.keys.includes(Keys.LC) ? (
        farm.keys.includes(Keys.RC) ? (
          <Icon icon={ICONS.MouseDc} size={ICON_SIZE.SIZE_FIT} />
        ) : (
          <Icon icon={ICONS.MouseLc} size={ICON_SIZE.SIZE_FIT} />
        )
      ) : farm.keys.includes(Keys.RC) ? (
        <Icon icon={ICONS.MouseRc} size={ICON_SIZE.SIZE_FIT} />
      ) : (
        <Icon icon={ICONS.Mouse} size={ICON_SIZE.SIZE_FIT} />
      )}
    </div>
  )
}
