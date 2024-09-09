import { Keys, Tags } from '../../types.ts'
import dunce_drowning from '../../../assets/farms/common/dunce/dunce_drowning.png'
import dunce_water_latch from '../../../assets/farms/common/dunce/dunce_water_latch.png'
import { Alert } from 'react-bootstrap'
import dunce_spawn from '../../../assets/farms/common/dunce/dunce_spawn.png'
import dunce_wheat_banner from '../../../assets/farms/wheat/dunce/dunce_wheat.png'

const dunce_wheat = {
  id: 'dunce-wheat',
  name: 'The Dunce',
  banner: dunce_wheat_banner,
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
          <a href='https://wiki.hypixel.net/Floating_Crystal#Wheat_' target='_blank'>
            Wheat Crystal
          </a>{' '}
          on top of the hay bale block. It will replenish the latch area with fully grown Wheat before you respawn for
          increased rates.
        </p>
      </div>
    </>
  ),
  spawn: (
    <>
      <Alert variant='info' className='mt-2'>
        Highlighted blocks are temporary and should be removed after setting spawn.
      </Alert>
      <img
        src={dunce_spawn}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '1rem',
          objectFit: 'cover'
        }}
      />
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.boot_swap, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.patcher],
  bps: 19.84,
  keyCount: 2,
  yaw: '-13.4',
  pitch: '6.2',
  speed: 400,
  enchantments: ['Frost Walker II', 'Depth Strider III'],
  keys: [Keys.W, Keys.LC],
  depth: 5,
  buildDifficulty: 1,
  schema: '/hypixel-farming/assets/schemas/Dunce_Wheat.litematic',
  authors: ['Daladirn']
}

export default dunce_wheat
