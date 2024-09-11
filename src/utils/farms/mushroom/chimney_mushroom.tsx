import { Keys, Tags } from '../../types.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'

const chimney_mushroom = {
  id: 'chimney-mushroom',
  name: 'The Chimney',
  banner: '/hypixel-farming/assets/farms/mushroom/chimney/chimney_mushroom.png',
  pictures: {
    [Tags.drowning]: '/hypixel-farming/assets/farms/common/chimney/chimney_drowning.png',
    [Tags.lava_latch]: '/hypixel-farming/assets/farms/common/chimney/chimney_lava_latch.png'
  },
  info: (
    <div>
      <h2>Info</h2>
      <p>
        <strong>This farm should be built</strong> in the <strong>west to east</strong> or <strong>east to west</strong>{' '}
        directions, because the lava latch is directional and will not work properly when faced north or south.
      </p>
      <p>
        Strings are hard to see. You can download a simple resource pack, which makes strings red,{' '}
        <a href='/hypixel-farming/assets/resource-packs/red-string.zip' download>
          here
        </a>
        .
      </p>
    </div>
  ),
  spawn: (
    <>
      <div>
        <h5>Remove highlighted redstone torch:</h5>
        <PlaceholderImage src='/hypixel-farming/assets/farms/common/chimney/chimney_spawn_01.png' />
      </div>
      <div>
        <h5>Place a block and walls like shown:</h5>
        <PlaceholderImage src='/hypixel-farming/assets/farms/common/chimney/chimney_spawn_02.png' />
      </div>
      <div>
        <h5>Add 4 snow layers and set your spawn:</h5>
        <PlaceholderImage src='/hypixel-farming/assets/farms/common/chimney/chimney_spawn_03.png' />
      </div>
      <div>
        <h5>Remove blocks you've placed and put back the redstone torch:</h5>
        <PlaceholderImage src='/hypixel-farming/assets/farms/common/chimney/chimney_spawn_01.png' />
      </div>
    </>
  ),
  tags: [
    Tags.bps,
    Tags.key_count,
    Tags.boot_swap,
    Tags.no_key_swap,
    Tags.drowning,
    Tags.lava_latch,
    Tags.max_speed,
    Tags.patcher
  ],
  bps: 18.77,
  keyCount: 3,
  yaw: '28.5',
  pitch: '0.0',
  speed: 400,
  enchantments: ['Frost Walker II', 'Depth Strider III'],
  keys: [Keys.W, Keys.A, Keys.LC],
  depth: 4,
  buildDifficulty: 3,
  schema: '/hypixel-farming/assets/schemas/Chimney_Mushroom.litematic',
  authors: ['Daladirn', 'Harpan']
}

export default chimney_mushroom
