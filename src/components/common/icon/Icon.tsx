import WheatSvg from '../../../assets/icons/wheat.svg'
import CarrotSvg from '../../../assets/icons/carrot.svg'
import PotatoSvg from '../../../assets/icons/potato.svg'
import NetherWartSvg from '../../../assets/icons/nether_wart.svg'
import RedMushroomSvg from '../../../assets/icons/red_mushroom.svg'
import MelonSliceSvg from '../../../assets/icons/melon_slice.svg'
import PumpkinSvg from '../../../assets/icons/pumpkin.svg'
import CactusSvg from '../../../assets/icons/cactus.svg'
import SugarCaneSvg from '../../../assets/icons/sugar_cane.svg'
import CocoaBeansSvg from '../../../assets/icons/cocoa_beans.svg'
import DownloadSvg from '../../../assets/icons/download.svg'
import KeyASvg from '../../../assets/icons/inputs/key-a.svg'
import KeyAPressedSvg from '../../../assets/icons/inputs/key-a-pressed.svg'
import KeyDSvg from '../../../assets/icons/inputs/key-d.svg'
import KeyDPressedSvg from '../../../assets/icons/inputs/key-d-pressed.svg'
import KeySSvg from '../../../assets/icons/inputs/key-s.svg'
import KeySPressedSvg from '../../../assets/icons/inputs/key-s-pressed.svg'
import KeyWSvg from '../../../assets/icons/inputs/key-w.svg'
import KeyWPressedSvg from '../../../assets/icons/inputs/key-w-pressed.svg'
import MouseSvg from '../../../assets/icons/inputs/mouse.svg'
import MouseDcSvg from '../../../assets/icons/inputs/mouse-dc.svg'
import MouseLcSvg from '../../../assets/icons/inputs/mouse-lc.svg'
import MouseRcSvg from '../../../assets/icons/inputs/mouse-rc.svg'
import { FunctionComponent, SVGAttributes } from 'react'

export const ICONS: { [key: string]: any } = {
  Wheat: WheatSvg,
  Carrot: CarrotSvg,
  Potato: PotatoSvg,
  NetherWart: NetherWartSvg,
  RedMushroom: RedMushroomSvg,
  MelonSlice: MelonSliceSvg,
  Pumpkin: PumpkinSvg,
  Cactus: CactusSvg,
  SugarCane: SugarCaneSvg,
  CocoaBeans: CocoaBeansSvg,
  KeyA: KeyASvg,
  KeyAPressed: KeyAPressedSvg,
  KeyD: KeyDSvg,
  KeyDPressed: KeyDPressedSvg,
  KeyS: KeySSvg,
  KeySPressed: KeySPressedSvg,
  KeyW: KeyWSvg,
  KeyWPressed: KeyWPressedSvg,
  Mouse: MouseSvg,
  MouseDc: MouseDcSvg,
  MouseLc: MouseLcSvg,
  MouseRc: MouseRcSvg,
  Download: DownloadSvg
}

export enum ICON_SIZE {
  SIZE_AUTO = 'auto',
  SIZE_FIT = '100%',
  SIZE_128 = '8rem',
  SIZE_96 = '6rem',
  SIZE_72 = '4.5rem',
  SIZE_48 = '3rem',
  SIZE_40 = '2.5rem',
  SIZE_32 = '2rem'
}

interface IProps {
  icon: FunctionComponent<SVGAttributes<SVGElement>>
  size: ICON_SIZE
}

export default function Icon({ icon: IconSvg, size }: IProps) {
  return <IconSvg style={{ width: size, height: size }} />
}
