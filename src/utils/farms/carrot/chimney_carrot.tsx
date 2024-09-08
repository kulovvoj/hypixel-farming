import { Keys, Tags } from '../../types.ts'
import chimney_drowning from '../../../assets/farms/common/chimney/chimney_drowning.png'
import chimney_lava_latch from '../../../assets/farms/common/chimney/chimney_lava_latch.png'
import chimney_spawn_01 from '../../../assets/farms/common/chimney/chimney_spawn_01.png'
import chimney_spawn_02 from '../../../assets/farms/common/chimney/chimney_spawn_02.png'
import chimney_spawn_03 from '../../../assets/farms/common/chimney/chimney_spawn_03.png'
import chimney_carrot_banner from '../../../assets/farms/carrot/chimney/chimney_carrot.png'

const chimney_carrot = {
  id: 'chimney-carrot',
  name: 'The Chimney - Carrot Edition',
  banner: chimney_carrot_banner,
  pictures: {
    [Tags.drowning]: chimney_drowning,
    [Tags.lava_latch]: chimney_lava_latch
  },
  info: (
    <div>
      <h2>Info</h2>
      <p>
        <strong>This farm should be built</strong> in the <strong>west to east</strong> or <strong>east to west</strong>{' '}
        directions, because the lava latch is directional and will not work properly when faced north or south.
      </p>
    </div>
  ),
  spawn: (
    <>
      <div>
        <h5>Remove highlighted redstone torch:</h5>
        <img
          alt=''
          src={chimney_spawn_01}
          style={{
            width: '100%',
            borderRadius: '1rem',
            objectFit: 'cover'
          }}
        />
      </div>
      <div>
        <h5>Place a block and walls like shown:</h5>
        <img
          alt=''
          src={chimney_spawn_02}
          style={{
            width: '100%',
            borderRadius: '1rem',
            objectFit: 'cover'
          }}
        />
      </div>
      <div>
        <h5>Add 4 snow layers and set your spawn:</h5>
        <img
          alt=''
          src={chimney_spawn_03}
          style={{
            width: '100%',
            borderRadius: '1rem',
            objectFit: 'cover'
          }}
        />
      </div>
      <div>
        <h5>Remove blocks you've placed and put back the redstone torch:</h5>
        <img
          alt=''
          src={chimney_spawn_01}
          style={{
            width: '100%',
            borderRadius: '1rem',
            objectFit: 'cover'
          }}
        />
      </div>
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.boot_swap, Tags.no_key_swap, Tags.drowning, Tags.lava_latch, Tags.patcher],
  bps: 19.8,
  keyCount: 3,
  yaw: '0.0',
  pitch: '6.5',
  speed: 202,
  enchantments: ['Frost Walker II', 'Depth Strider I'],
  keys: [Keys.W, Keys.A, Keys.LC],
  depth: 5,
  buildDifficulty: 3,
  schema: '/hypixel-farming/assets/schemas/Chimney_Carrot.litematic',
  authors: ['Daladirn', 'Harpan']
}

export default chimney_carrot
