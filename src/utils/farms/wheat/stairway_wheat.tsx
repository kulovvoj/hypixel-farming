import { Keys, Tags, TFarm } from '../../types.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'
import { CardinalDirection } from '../../cardinalDirection.ts'

const stairway_wheat: TFarm = {
  id: 'stairway-wheat',
  name: 'The Stairway',
  banner: '/hypixel-farming/assets/farms/wheat/stairway/stairway_wheat.png',
  pictures: {
    [Tags.drowning]: '/hypixel-farming/assets/farms/common/stairway/stairway_drowning.png',
    [Tags.water_latch]: '/hypixel-farming/assets/farms/common/stairway/stairway_water_latch.png'
  },
  info: (
    <>
      <div>
        <h2>Floating Crystal</h2>
        <p>
          Place a{' '}
          <a href='https://wiki.hypixel.net/Floating_Crystal#Wheat_' target='_blank'>
            Wheat Crystal
          </a>{' '}
          on top of the block with the sign. It will replenish the latch area with fully grown Wheat before you respawn
          for increased rates.
        </p>
      </div>
      <div>
        <h2>Building tips</h2>
        <p>
          You may use Ruler's Wand to place ladders. The only caveat is that placed ladders will always face north, so{' '}
          <strong>the farm needs to be built</strong> in the <strong>west to east</strong> direction.
        </p>
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
  yaw: 0.0,
  pitch: 10.0,
  farmDirection: CardinalDirection.EAST,
  playerDirection: CardinalDirection.SOUTH,
  allowedDirections: [
    {
      farmDirection: CardinalDirection.EAST,
      playerDirections: [CardinalDirection.SOUTH, CardinalDirection.NORTH]
    },
    {
      farmDirection: CardinalDirection.WEST,
      playerDirections: [CardinalDirection.SOUTH, CardinalDirection.NORTH]
    },
    {
      farmDirection: CardinalDirection.NORTH,
      playerDirections: [CardinalDirection.WEST, CardinalDirection.EAST]
    },
    {
      farmDirection: CardinalDirection.SOUTH,
      playerDirections: [CardinalDirection.WEST, CardinalDirection.EAST]
    }
  ],
  speed: 183,
  enchantments: ['Frost Walker II'],
  keys: [Keys.W, Keys.A, Keys.LC],
  depth: 5,
  buildDifficulty: 2,
  schema: '/hypixel-farming/assets/schemas/Stairway_Wheat.litematic',
  authors: ['Harpan']
}

export default stairway_wheat
