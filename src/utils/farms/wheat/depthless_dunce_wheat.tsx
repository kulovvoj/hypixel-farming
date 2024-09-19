import { Alert } from 'react-bootstrap'
import { Keys, Tags, TFarm } from '../../types.ts'
import { Link } from 'react-router-dom'
import { FARM_PATH } from '../../paths.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'
import { CardinalDirection } from '../../cardinalDirection.ts'

const depthless_dunce_wheat: TFarm = {
  id: 'depthless-dunce-wheat',
  name: 'The Depthless Dunce',
  banner: '/hypixel-farming/assets/farms/wheat/depthless-dunce/depthless_dunce_wheat.png',
  pictures: {
    [Tags.drowning]: '/hypixel-farming/assets/farms/common/depthless-dunce/depthless_dunce_drowning.png',
    [Tags.water_latch]: '/hypixel-farming/assets/farms/common/depthless-dunce/depthless_dunce_water_latch.png'
  },
  info: (
    <>
      <div>
        <h2>Info</h2>
        <p>
          Simple to build, yet very efficient farm. Compared to{' '}
          <Link to={FARM_PATH.replace(':type', 'wheat').replace(':id', 'dunce-wheat')}>The Dunce</Link>, it trades
          efficiency for not requiring boot swap.
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
      <Alert variant='info'>Do not place water source blocks next to the farmland in the drowning section.</Alert>
    </>
  ),
  spawn: (
    <>
      <Alert variant='info' className='mt-2'>
        Highlighted blocks are temporary and should be removed after setting spawn.
      </Alert>
      <PlaceholderImage src='/hypixel-farming/assets/farms/common/depthless-dunce/depthless_dunce_spawn.png' />
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.patcher, Tags.max_speed],
  bps: 19.82,
  keyCount: 2,
  yaw: -166.6,
  pitch: -1.0,
  farmDirection: CardinalDirection.EAST,
  playerDirection: CardinalDirection.NORTH,
  allowedDirections: [
    {
      farmDirection: CardinalDirection.EAST,
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
  enchantments: ['Frost Walker II'],
  keys: [Keys.W, Keys.LC],
  depth: 5,
  buildDifficulty: 1,
  schema: '/hypixel-farming/assets/schemas/Depthless_Dunce_Wheat.litematic',
  authors: ['Daladirn']
}

export default depthless_dunce_wheat
