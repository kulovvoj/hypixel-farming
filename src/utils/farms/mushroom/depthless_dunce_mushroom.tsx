import { Alert } from 'react-bootstrap'
import { Keys, Tags, TFarm } from '../../types.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'
import { CardinalDirection } from '../../cardinalDirection.ts'

const depthless_dunce_mushroom: TFarm = {
  id: 'depthless-dunce-mushroom',
  name: 'The Depthless Dunce',
  banner: '/hypixel-farming/assets/farms/mushroom/depthless-dunce/depthless_dunce_mushroom.png',
  pictures: {
    [Tags.drowning]: '/hypixel-farming/assets/farms/mushroom/depthless-dunce/depthless_dunce_mushroom_drowning.png',
    [Tags.water_latch]:
      '/hypixel-farming/assets/farms/mushroom/depthless-dunce/depthless_dunce_mushroom_water_latch.png'
  },
  info: (
    <>
      <Alert variant='info'>This farm requires you to set your angle precisely.</Alert>
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
      <PlaceholderImage src='/hypixel-farming/assets/farms/mushroom/depthless-dunce/depthless_dunce_mushroom_spawn.png' />
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.max_speed],
  bps: 19.7,
  keyCount: 3,
  yaw: 151.49,
  pitch: 0.0,
  farmDirection: CardinalDirection.WEST,
  playerDirection: CardinalDirection.NORTH,
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
  enchantments: ['Frost Walker II'],
  keys: [Keys.W, Keys.D, Keys.LC],
  depth: 4,
  buildDifficulty: 1,
  schema: '/hypixel-farming/assets/schemas/Depthless_Dunce_Mushroom.litematic',
  authors: ['Daladirn']
}

export default depthless_dunce_mushroom
