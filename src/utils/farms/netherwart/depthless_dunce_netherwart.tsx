import { Alert } from 'react-bootstrap'
import { Keys, Tags, TFarm } from '../../types.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'
import { CardinalDirection } from '../../cardinalDirection.ts'

const depthless_dunce_netherwart: TFarm = {
  id: 'depthless-dunce-netherwart',
  name: 'The Depthless Dunce',
  banner: '/hypixel-farming/assets/farms/nether_wart/depthless-dunce/depthless_dunce_netherwart.png',
  pictures: {
    [Tags.drowning]:
      '/hypixel-farming/assets/farms/nether_wart/depthless-dunce/depthless_dunce_netherwart_drowning.png',
    [Tags.water_latch]: '/hypixel-farming/assets/farms/common/depthless-dunce/depthless_dunce_water_latch.png'
  },
  info: (
    <>
      <Alert variant='warning'>
        <Alert.Heading>This farm is ping dependent</Alert.Heading>
        <p>
          To use this farm, you should make sure, that <b>you have ping &gt;50ms</b>.
        </p>
        <p>
          A good measure would be placing two Nether Warts next to each other and trying to hit one through the other
          with a hoe that has the Replenish enchant applied. If you can reliably farm the second Nether Wart, this farm
          will work for you.
        </p>
      </Alert>
      <div>
        <h2>Info</h2>
        <p>Simple to build, yet very efficient farm. Not having to use boot swap is a cherry on top!</p>
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
    <>
      <Alert variant='info' className='mt-2'>
        Highlighted blocks are temporary and should be removed after setting spawn.
      </Alert>
      <PlaceholderImage src='/hypixel-farming/assets/farms/common/depthless-dunce/depthless_dunce_spawn.png' />
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.patcher, Tags.max_speed],
  bps: Infinity,
  keyCount: 2,
  yaw: -166.6,
  pitch: 10.6,
  farmDirection: CardinalDirection.EAST,
  playerDirection: CardinalDirection.NORTH,
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
  enchantments: ['Frost Walker II'],
  keys: [Keys.W, Keys.LC],
  depth: 5,
  buildDifficulty: 1,
  schema: '/hypixel-farming/assets/schemas/Depthless_Dunce_Nether_Wart.litematic',
  authors: ['Daladirn']
}

export default depthless_dunce_netherwart
