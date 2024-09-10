import { Keys, Tags } from '../../types.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'

const stairway_netherwart = {
  id: 'stairway-netherwart',
  name: 'The Stairway',
  banner: '/hypixel-farming/assets/farms/nether_wart/stairway/stairway_wart.png',
  pictures: {
    [Tags.drowning]: '/hypixel-farming/assets/farms/common/stairway/stairway_drowning.png',
    [Tags.water_latch]: '/hypixel-farming/assets/farms/common/stairway/stairway_water_latch.png'
  },
  info: (
    <>
      <div>
        <h2>Building tips</h2>
        <p>
          You may use Ruler's Wand to place ladders. The only caveat is that placed ladders will always face north, so{' '}
          <strong>the farm needs to be built</strong> in the <strong>west to east</strong> direction.
        </p>
      </div>
      <h2>Floating Crystal</h2>
      <p>
        Place a{' '}
        <a href='https://wiki.hypixel.net/Floating_Crystal#Nether_Wart_' target='_blank'>
          Nether Wart Crystal
        </a>{' '}
        on top of the block with the sign. It will replenish the latch area with fully grown Nether Wart before you
        respawn for increased rates.
      </p>
    </>
  ),
  spawn: (
    <div>
      <p>
        Set spawn in the corner as shown. If you get stuck while farming, you can expand the spawning platform and set
        your spawn farther from the wall.
      </p>
      <PlaceholderImage src='/hypixel-farming/assets/farms/common/stairway/stairway_spawn.png' />
    </div>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.patcher],
  bps: 19.73,
  keyCount: 3,
  yaw: '0.0',
  pitch: '10.0',
  speed: 183,
  enchantments: ['Frost Walker II'],
  keys: [Keys.W, Keys.A, Keys.LC],
  depth: 5,
  buildDifficulty: 3,
  schema: '/hypixel-farming/assets/schemas/Stairway_Nether_Wart.litematic',
  authors: ['Harpan']
}

export default stairway_netherwart
