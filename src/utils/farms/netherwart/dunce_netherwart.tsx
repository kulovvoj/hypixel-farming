import { Alert } from 'react-bootstrap'
import { Keys, Tags } from '../../types.ts'
import dunce_drowning from '../../../assets/farms/common/dunce/dunce_drowning.png'
import dunce_water_latch from '../../../assets/farms/common/dunce/dunce_water_latch.png'
import dunce_spawn from '../../../assets/farms/common/dunce/dunce_spawn.png'
import dunce_netherwart_banner from '../../../assets/farms/nether_wart/dunce/dunce_netherwart.png'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'

const dunce_netherwart = {
  id: 'dunce-netherwart',
  name: 'The Dunce',
  banner: dunce_netherwart_banner,
  pictures: {
    [Tags.drowning]: dunce_drowning,
    [Tags.water_latch]: dunce_water_latch
  },
  info: (
    <>
      <div>
        <h2>Info</h2>
        <p>
          Simple to build, yet very efficient farm. Only downside is that there's a little setup before you start
          farming because of boot swap.
        </p>
      </div>
      <div>
        <h2>Floating Crystal</h2>
        <p>
          Place a{' '}
          <a href='https://wiki.hypixel.net/Floating_Crystal#Nether_Wart_' target='_blank'>
            Nether Wart Crystal
          </a>{' '}
          on top of the red hardened clay block. It will replenish the latch area with fully grown Nether Wart before
          you respawn for increased rates.
        </p>
      </div>
    </>
  ),
  spawn: (
    <>
      <Alert variant='info' className='mt-2'>
        Highlighted blocks are temporary and should be removed after setting spawn.
      </Alert>
      <PlaceholderImage src={dunce_spawn} />
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.boot_swap, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.patcher],
  bps: 19.83,
  keyCount: 2,
  yaw: '-13.4',
  pitch: '0.0',
  speed: 400,
  enchantments: ['Frost Walker II', 'Depth Strider III'],
  keys: [Keys.W, Keys.LC],
  depth: 5,
  buildDifficulty: 1,
  schema: '/hypixel-farming/assets/schemas/Dunce_Nether_Wart.litematic',
  authors: ['Daladirn']
}

export default dunce_netherwart
