import { Alert } from 'react-bootstrap'
import { Keys, Tags } from '../../types.ts'
import cascade_drowning from '../../../assets/farms/common/cascade/cascade_drowning.png'
import cascade_water_latch from '../../../assets/farms/common/cascade/cascade_water_latch.png'
import cascade_spawn from '../../../assets/farms/common/cascade/cascade_spawn.png'
import cascade_melon_banner from '../../../assets/farms/melon/cascade/cascade_melon.png'

const cascade_melon = {
  id: 'cascade-melon',
  name: 'The Cascade',
  banner: cascade_melon_banner,
  pictures: {
    [Tags.drowning]: cascade_drowning,
    [Tags.water_latch]: cascade_water_latch
  },
  info: (
    <>
      <div>
        <h2>Building tips</h2>
        <p>Steps to build this farm efficiently: </p>
        <ol>
          <li>Build 1 plot of the non-drowning section</li>
          <li>Paste it in all the other plots</li>
          <li>When setting up the drowning section, use Ruler's Wand remove the ladders.</li>
          <li>Finish up by removing blocks at the latch part of the farm and build the latches.</li>
        </ol>
      </div>
      <p>You may use Ruler's Wand to place ladders, only caveat is that placed ladders will always face north.</p>
    </>
  ),
  spawn: (
    <>
      <Alert variant='info' className='mt-2'>
        Highlighted blocks are temporary and should be removed after setting spawn.
      </Alert>
      <img
        alt=''
        src={cascade_spawn}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '1rem',
          objectFit: 'cover'
        }}
      />
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.boot_swap, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.max_speed],
  bps: 19.5,
  keyCount: 2,
  yaw: '-22.7',
  pitch: '-55.9',
  speed: 400,
  enchantments: ['Frost Walker II', 'Depth Strider III', 'Aqua Affinity I'],
  keys: [Keys.W, Keys.LC],
  depth: 3,
  buildDifficulty: 2,
  schema: '/hypixel-farming/assets/schemas/Cascade_Melon.litematic',
  authors: ['Daladirn (feat. Krabby Patty for moral support)']
}

export default cascade_melon
