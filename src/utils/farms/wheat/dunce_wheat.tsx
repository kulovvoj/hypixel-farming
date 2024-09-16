import { Keys, Tags, TFarm } from '../../types.ts'
import { Alert } from 'react-bootstrap'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'
import { CardinalDirection } from '../../cardinalDirection.ts'

const dunce_wheat: TFarm = {
  id: 'dunce-wheat',
  name: 'The Dunce',
  banner: '/hypixel-farming/assets/farms/wheat/dunce/dunce_wheat.png',
  pictures: {
    [Tags.drowning]: '/hypixel-farming/assets/farms/common/dunce/dunce_drowning.png',
    [Tags.water_latch]: '/hypixel-farming/assets/farms/common/dunce/dunce_water_latch.png'
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
      <Alert variant='info' className='mt-2'>
        Highlighted blocks are temporary and should be removed after setting spawn.
      </Alert>
      <PlaceholderImage src='/hypixel-farming/assets/farms/common/dunce/dunce_spawn.png' />
    </>
  ),
  tags: [
    Tags.bps,
    Tags.key_count,
    Tags.boot_swap,
    Tags.no_key_swap,
    Tags.drowning,
    Tags.water_latch,
    Tags.patcher,
    Tags.max_speed
  ],
  bps: 19.84,
  keyCount: 2,
  yaw: -13.4,
  pitch: 6.2,
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
  speed: 400,
  enchantments: ['Frost Walker II', 'Depth Strider III'],
  keys: [Keys.W, Keys.LC],
  depth: 5,
  buildDifficulty: 1,
  schema: '/hypixel-farming/assets/schemas/Dunce_Wheat.litematic',
  authors: ['Daladirn']
}

export default dunce_wheat
