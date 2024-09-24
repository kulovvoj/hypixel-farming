import { Alert } from 'react-bootstrap'
import { Keys, Tags, TFarm } from '../../types.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'
import { CardinalDirection } from '../../cardinalDirection.ts'

const leg_day_cocoa: TFarm = {
  id: 'leg-day-cocoa',
  name: 'The Leg Day',
  banner: '/hypixel-farming/assets/farms/cocoa/leg-day/the_leg_day_cocoa.png',
  pictures: {
    [Tags.drowning]: '/hypixel-farming/assets/farms/cocoa/leg-day/the_leg_day_drowning.png',
    [Tags.water_latch]: '/hypixel-farming/assets/farms/cocoa/leg-day/the_leg_day_water_latch.png'
  },
  info: (
    <>
      <Alert variant='info'>This farm requires you to set your angle precisely.</Alert>
      <div>
        <h2>Info</h2>
        <p>Why is the farm called The Leg Day? You skip every other row.</p>
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
      <PlaceholderImage src='/hypixel-farming/assets/farms/cocoa/leg-day/the_leg_day_spawn.png' />
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.boot_swap, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.max_speed],
  bps: 19.75,
  keyCount: 2,
  yaw: -76.61,
  pitch: -81.0,
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
  enchantments: ['Frost Walker II', 'Depth Strider III'],
  keys: [Keys.A, Keys.LC],
  depth: 5,
  buildDifficulty: 1,
  schema: '/hypixel-farming/assets/schemas/Leg_Day_Cocoa.litematic',
  authors: ['TheCocoaLord', 'Daladirn']
}

export default leg_day_cocoa
