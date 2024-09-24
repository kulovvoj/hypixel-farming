import { Alert } from 'react-bootstrap'
import { Keys, Tags, TFarm } from '../../types.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'
import { CardinalDirection } from '../../cardinalDirection.ts'

const cascade_pumpkin: TFarm = {
  id: 'cascade-pumpkin',
  name: 'The Cascade',
  banner: '/hypixel-farming/assets/farms/pumkin/cascade/cascade_pumpkin.png',
  pictures: {
    [Tags.drowning]: '/hypixel-farming/assets/farms/common/cascade/cascade_drowning.png',
    [Tags.water_latch]: '/hypixel-farming/assets/farms/common/cascade/cascade_water_latch.png'
  },
  info: (
    <>
      <div>
        <h2>Building tips</h2>
        <p>Steps to build this farm efficiently:</p>
        <ol>
          <li>Build 1 plot of the non-drowning section</li>
          <li>Paste it in all the other plots</li>
          <li>When setting up the drowning section, use Ruler's Wand remove the ladders.</li>
          <li>Finish up by removing blocks at the latch part of the farm and build the latches.</li>
        </ol>
      </div>
      <p>You may use Ruler's Wand to place ladders. The only caveat is that placed ladders will always face north.</p>
      <p>
        Strings are hard to see. You can download a simple resource pack, which makes strings red,{' '}
        <a href='/hypixel-farming/assets/resource-packs/red-string.zip' download>
          here
        </a>
        .
      </p>
    </>
  ),
  spawn: (
    <>
      <Alert variant='info' className='mt-2'>
        Highlighted blocks are temporary and should be removed after setting spawn.
      </Alert>
      <PlaceholderImage src='/hypixel-farming/assets/farms/common/cascade/cascade_spawn.png' />
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.boot_swap, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.max_speed],
  bps: 19.5,
  keyCount: 2,
  yaw: -22.7,
  pitch: -55.9,
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
  speed: 400,
  enchantments: ['Frost Walker II', 'Depth Strider III', 'Aqua Affinity I'],
  keys: [Keys.W, Keys.LC],
  depth: 3,
  buildDifficulty: 2,
  schema: '/hypixel-farming/assets/schemas/Cascade_Pumpkin.litematic',
  authors: ['Daladirn (feat. Krabby Patty for moral support)']
}

export default cascade_pumpkin
