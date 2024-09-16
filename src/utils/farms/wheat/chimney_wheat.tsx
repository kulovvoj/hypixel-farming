import { Keys, Tags, TFarm } from '../../types.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'
import { CardinalDirection } from '../../cardinalDirection.ts'

const chimney_wheat: TFarm = {
  id: 'chimney-wheat',
  name: 'The Chimney',
  banner: '/hypixel-farming/assets/farms/wheat/chimney/chimney_wheat.png',
  pictures: {
    [Tags.drowning]: '/hypixel-farming/assets/farms/common/chimney/chimney_drowning.png',
    [Tags.lava_latch]: '/hypixel-farming/assets/farms/common/chimney/chimney_lava_latch.png'
  },
  info: (
    <>
      <div>
        <h2>Info</h2>
        <p>
          <strong>This farm should be built</strong> in the <strong>west to east</strong> or{' '}
          <strong>east to west</strong> directions, because the lava latch is directional and will not work properly
          when faced north or south.
        </p>
      </div>
      <div>
        <h2>Building tips</h2>
        <p>
          Strings are hard to see. You can download a simple resource pack, which makes strings red,{' '}
          <a href='/hypixel-farming/assets/resource-packs/red-string.zip' download>
            here
          </a>
          .
        </p>
      </div>
    </>
  ),
  spawn: (
    <>
      <div>
        <h5>Remove highlighted redstone torch:</h5>
        <PlaceholderImage src='/hypixel-farming/assets/farms/common/chimney/chimney_spawn_01' />
      </div>
      <div>
        <h5>Place a block and walls like shown:</h5>
        <PlaceholderImage src='/hypixel-farming/assets/farms/common/chimney/chimney_spawn_02' />
      </div>
      <div>
        <h5>Add 4 snow layers and set your spawn:</h5>
        <PlaceholderImage src='/hypixel-farming/assets/farms/common/chimney/chimney_spawn_03' />
      </div>
      <div>
        <h5>Remove blocks you've placed and put back the redstone torch:</h5>
        <PlaceholderImage src='/hypixel-farming/assets/farms/common/chimney/chimney_spawn_01' />
      </div>
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.boot_swap, Tags.no_key_swap, Tags.drowning, Tags.lava_latch, Tags.patcher],
  bps: 19.8,
  keyCount: 3,
  yaw: 0,
  pitch: 0,
  farmDirection: CardinalDirection.WEST,
  playerDirection: CardinalDirection.SOUTH,
  allowedDirections: [
    {
      farmDirection: CardinalDirection.WEST,
      playerDirections: [CardinalDirection.SOUTH, CardinalDirection.NORTH]
    },
    {
      farmDirection: CardinalDirection.EAST,
      playerDirections: [CardinalDirection.SOUTH, CardinalDirection.NORTH]
    }
  ],
  speed: 202,
  enchantments: ['Frost Walker II', 'Depth Strider I'],
  keys: [Keys.W, Keys.A, Keys.LC],
  depth: 5,
  buildDifficulty: 3,
  schema: '/hypixel-farming/assets/schemas/Chimney_Wheat.litematic',
  authors: ['Daladirn', 'Harpan']
}

export default chimney_wheat