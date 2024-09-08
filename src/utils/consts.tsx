import { Alert } from 'react-bootstrap'

import { ICONS } from '../components/icon/Icon'
import { Keys, Tags, TCrops } from './types'
import chimney_wheat from '../assets/farms/wheat/chimney/chimney_wheat.png'
import chimney_carrot from '../assets/farms/carrot/chimney/chimney_carrot.png'
import chimney_potato from '../assets/farms/potato/chimney/chimney_potato.png'
import chimney_netherwart from '../assets/farms/nether_wart/chimney/chimney_netherwart.png'
import chimney_mushroom from '../assets/farms/mushroom/chimney/chimney_mushroom.png'
import chimney_drowning from '../assets/farms/common/chimney/chimney_drowning.png'
import chimney_lava_latch from '../assets/farms/common/chimney/chimney_lava_latch.png'
import chimney_spawn_01 from '../assets/farms/common/chimney/chimney_spawn_01.png'
import chimney_spawn_02 from '../assets/farms/common/chimney/chimney_spawn_02.png'
import chimney_spawn_03 from '../assets/farms/common/chimney/chimney_spawn_03.png'
import cascade_spawn from '../assets/farms/common/cascade/cascade_spawn.png'
import cascade_drowning from '../assets/farms/common/cascade/cascade_drowning.png'
import cascade_water_latch from '../assets/farms/common/cascade/cascade_water_latch.png'
import cascade_melon from '../assets/farms/melon/cascade/cascade_melon.png'
import cascade_pumpkin from '../assets/farms/pumkin/cascade/cascade_pumpkin.png'
import stairway_spawn from '../assets/farms/common/stairway/stairway_spawn.png'
import stairway_drowning from '../assets/farms/common/stairway/stairway_drowning.png'
import stairway_water_latch from '../assets/farms/common/stairway/stairway_water_latch.png'
import stairway_netherwart from '../assets/farms/nether_wart/stairway/stairway_wart.png'
import dunce_wheat from '../assets/farms/wheat/dunce/dunce_wheat.png'
import dunce_netherwart from '../assets/farms/nether_wart/dunce/dunce_netherwart.png'
import dunce_drowning from '../assets/farms/common/dunce/dunce_drowning.png'
import dunce_spawn from '../assets/farms/common/dunce/dunce_spawn.png'
import dunce_water_latch from '../assets/farms/common/dunce/dunce_water_latch.png'

export const CROP_PATH = `/crops/:type`
export const FARM_PATH = `${CROP_PATH}/farm/:id`

export const CROPS: TCrops = {
  wheat: {
    id: 'wheat',
    icon: ICONS.Wheat,
    label: 'Wheat',
    farms: [
      // {
      //   id: 'mediator-wheat',
      //   name: 'The Mediator - Wheat Edition',
      //   banner: mediator_wheat,
      //   pictures: {
      //     [Tags.drowning]: mediator_wheat_drowning,
      //     [Tags.lava_latch]: mediator_wheat_lava_latch
      //   },
      //   spawn: <>
      //     <Alert variant='info' className='mt-2'>
      //       Highlighted blocks are temporary and should be removed after setting spawn.
      //     </Alert>
      //       <img
      //         src={mediator_spawn}
      //         style={{
      //           height: '100%',
      //           width: '100%',
      //           borderRadius: '1rem',
      //           objectFit: 'cover'
      //         }}
      //       />
      //   </>,
      //   tags: [Tags.bps, Tags.key_count, Tags.boot_swap, Tags.no_key_swap, Tags.drowning, Tags.lava_latch, Tags.max_speed, Tags.patcher],
      //   bps: 19.9,
      //   keyCount: 2,
      //   yaw: '-13.4',
      //   pitch: '0.0',
      //   speed: 400,
      //   enchantments: ['Frost Walker II', 'Depth Strider III'],
      //   keys: [Keys.W, Keys.LC],
      //   depth: 5,
      //   buildDifficulty: 3,
      //   authors: ['Daladirn', 'Harpan']
      // }
      {
        id: 'dunce-wheat',
        name: 'The Dunce - Wheat Edition',
        banner: dunce_wheat,
        pictures: {
          [Tags.drowning]: dunce_drowning,
          [Tags.water_latch]: dunce_water_latch
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
                on top of the hay bale block. It will replenish the latch area with fully grown Wheat before you respawn
                for increased rates.
              </p>
            </div>
          </>
        ),
        spawn: (
          <>
            <Alert variant='info' className='mt-2'>
              Highlighted blocks are temporary and should be removed after setting spawn.
            </Alert>
            <img
              src={dunce_spawn}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '1rem',
                objectFit: 'cover'
              }}
            />
          </>
        ),
        tags: [
          Tags.bps,
          Tags.key_count,
          Tags.boot_swap,
          Tags.no_key_swap,
          Tags.drowning,
          Tags.water_latch,
          Tags.patcher
        ],
        bps: 19.84,
        keyCount: 2,
        yaw: '-13.4',
        pitch: '6.2',
        speed: 400,
        enchantments: ['Frost Walker II', 'Depth Strider III'],
        keys: [Keys.W, Keys.LC],
        depth: 5,
        buildDifficulty: 1,
        schema: '/hypixel-farming/assets/schemas/Dunce_Wheat.litematic',
        authors: ['Daladirn']
      },
      {
        id: 'chimney-wheat',
        name: 'The Chimney - Wheat Edition',
        banner: chimney_wheat,
        pictures: {
          [Tags.drowning]: chimney_drowning,
          [Tags.lava_latch]: chimney_lava_latch
        },
        info: (
          <div>
            <h2>Info</h2>
            <p>
              <strong>This farm should be built</strong> in the <strong>west to east</strong> or{' '}
              <strong>east to west</strong> directions, because the lava latch is directional and will not work properly
              when faced north or south.
            </p>
          </div>
        ),
        spawn: (
          <>
            <div>
              <h5>Remove highlighted redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Place a block and walls like shown:</h5>
              <img
                alt=''
                src={chimney_spawn_02}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Add 4 snow layers and set your spawn:</h5>
              <img
                alt=''
                src={chimney_spawn_03}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Remove blocks you've placed and put back the redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
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
          Tags.patcher
        ],
        bps: 19.8,
        keyCount: 3,
        yaw: '0.0',
        pitch: '0.0',
        speed: 202,
        enchantments: ['Frost Walker II', 'Depth Strider I'],
        keys: [Keys.W, Keys.A, Keys.LC],
        depth: 5,
        buildDifficulty: 3,
        schema: '/hypixel-farming/assets/schemas/Chimney_Wheat.litematic',
        authors: ['Daladirn', 'Harpan']
      }
    ]
  },
  carrot: {
    id: 'carrot',
    icon: ICONS.Carrot,
    label: 'Carrot',
    farms: [
      {
        id: 'chimney-carrot',
        name: 'The Chimney - Carrot Edition',
        banner: chimney_carrot,
        pictures: {
          [Tags.drowning]: chimney_drowning,
          [Tags.lava_latch]: chimney_lava_latch
        },
        info: (
          <div>
            <h2>Info</h2>
            <p>
              <strong>This farm should be built</strong> in the <strong>west to east</strong> or{' '}
              <strong>east to west</strong> directions, because the lava latch is directional and will not work properly
              when faced north or south.
            </p>
          </div>
        ),
        spawn: (
          <>
            <div>
              <h5>Remove highlighted redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Place a block and walls like shown:</h5>
              <img
                alt=''
                src={chimney_spawn_02}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Add 4 snow layers and set your spawn:</h5>
              <img
                alt=''
                src={chimney_spawn_03}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Remove blocks you've placed and put back the redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
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
          Tags.patcher
        ],
        bps: 19.8,
        keyCount: 3,
        yaw: '0.0',
        pitch: '6.5',
        speed: 202,
        enchantments: ['Frost Walker II', 'Depth Strider I'],
        keys: [Keys.W, Keys.A, Keys.LC],
        depth: 5,
        buildDifficulty: 3,
        schema: '/hypixel-farming/assets/schemas/Chimney_Carrot.litematic',
        authors: ['Daladirn', 'Harpan']
      }
    ]
  },
  potato: {
    id: 'potato',
    icon: ICONS.Potato,
    label: 'Potato',
    farms: [
      {
        id: 'chimney-potato',
        name: 'The Chimney - Potato Edition',
        banner: chimney_potato,
        pictures: {
          [Tags.drowning]: chimney_drowning,
          [Tags.lava_latch]: chimney_lava_latch
        },
        info: (
          <div>
            <h2>Info</h2>
            <p>
              <strong>This farm should be built</strong> in the <strong>west to east</strong> or{' '}
              <strong>east to west</strong> directions, because the lava latch is directional and will not work properly
              when faced north or south.
            </p>
          </div>
        ),
        spawn: (
          <>
            <div>
              <h5>Remove highlighted redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Place a block and walls like shown:</h5>
              <img
                alt=''
                src={chimney_spawn_02}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Add 4 snow layers and set your spawn:</h5>
              <img
                alt=''
                src={chimney_spawn_03}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Remove blocks you've placed and put back the redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
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
          Tags.patcher
        ],
        bps: 19.8,
        keyCount: 3,
        yaw: '0.0',
        pitch: '6.5',
        speed: 202,
        enchantments: ['Frost Walker II', 'Depth Strider I'],
        keys: [Keys.W, Keys.A, Keys.LC],
        depth: 5,
        buildDifficulty: 3,
        schema: '/hypixel-farming/assets/schemas/Chimney_Potato.litematic',
        authors: ['Daladirn', 'Harpan']
      }
    ]
  },
  netherwart: {
    id: 'netherwart',
    icon: ICONS.NetherWart,
    label: 'Nether Wart',
    farms: [
      {
        id: 'dunce-netherwart',
        name: 'The Dunce - Nether Wart Edition',
        banner: dunce_netherwart,
        pictures: {
          [Tags.drowning]: dunce_drowning,
          [Tags.water_latch]: dunce_water_latch
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
                <a href='https://wiki.hypixel.net/Floating_Crystal#Nether_Wart_' target='_blank'>
                  Nether Wart Crystal
                </a>{' '}
                on top of the red hardened clay block. It will replenish the latch area with fully grown Nether Wart
                before you respawn for increased rates.
              </p>
            </div>
          </>
        ),
        spawn: (
          <>
            <Alert variant='info' className='mt-2'>
              Highlighted blocks are temporary and should be removed after setting spawn.
            </Alert>
            <img
              src={dunce_spawn}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '1rem',
                objectFit: 'cover'
              }}
            />
          </>
        ),
        tags: [
          Tags.bps,
          Tags.key_count,
          Tags.boot_swap,
          Tags.no_key_swap,
          Tags.drowning,
          Tags.water_latch,
          Tags.patcher
        ],
        bps: 19.83,
        keyCount: 2,
        yaw: '-13.4',
        pitch: '0.0',
        speed: 400,
        enchantments: ['Frost Walker II', 'Depth Strider III'],
        keys: [Keys.W, Keys.LC],
        depth: 5,
        buildDifficulty: 1,
        schema: '/hypixel-farming/assets/schemas/Dunce_Nether_Wart.litematic',
        authors: ['Daladirn']
      },
      {
        id: 'chimney-netherwart',
        name: 'The Chimney - Nether Wart Edition',
        banner: chimney_netherwart,
        pictures: {
          [Tags.drowning]: chimney_drowning,
          [Tags.lava_latch]: chimney_lava_latch
        },
        info: (
          <div>
            <h2>Info</h2>
            <p>
              <strong>This farm should be built</strong> in the <strong>west to east</strong> or{' '}
              <strong>east to west</strong> directions, because the lava latch is directional and will not work properly
              when faced north or south.
            </p>
          </div>
        ),
        spawn: (
          <>
            <div>
              <h5>Remove highlighted redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Place a block and walls like shown:</h5>
              <img
                alt=''
                src={chimney_spawn_02}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Add 4 snow layers and set your spawn:</h5>
              <img
                alt=''
                src={chimney_spawn_03}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Remove blocks you've placed and put back the redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
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
          Tags.patcher
        ],
        bps: 19.8,
        keyCount: 3,
        yaw: '0.0',
        pitch: '0.0',
        speed: 202,
        enchantments: ['Frost Walker II', 'Depth Strider I'],
        keys: [Keys.W, Keys.A, Keys.LC],
        depth: 5,
        buildDifficulty: 3,
        schema: '/hypixel-farming/assets/schemas/Chimney_Nether_Wart.litematic',
        authors: ['Daladirn', 'Harpan']
      },
      {
        id: 'stairway-netherwart',
        name: 'The Stairway - Nether Wart Edition',
        banner: stairway_netherwart,
        pictures: {
          [Tags.drowning]: stairway_drowning,
          [Tags.water_latch]: stairway_water_latch
        },
        info: (
          <>
            <div>
              <h2>Building tips</h2>
              <p>
                You may use Ruler's Wand to place ladders, only caveat is that placed ladders will always face north, so{' '}
                <strong>the farm needs to be built</strong> in the <strong>west to east</strong> direction.
              </p>
            </div>
            <h2>Floating Crystal</h2>
            <p>
              Place a{' '}
              <a href='https://wiki.hypixel.net/Floating_Crystal#Nether_Wart_' target='_blank'>
                Nether Wart Crystal
              </a>{' '}
              on top of the block with the sign. It will replenish the latch area with fully grown Nether Wart before
              you respawn for increased rates.
            </p>
          </>
        ),
        spawn: (
          <div>
            <p>
              Set spawn in the corner as shown. If you get stuck while farming, you can expand the spawning platform and
              set your spawn farther from the wall.
            </p>
            <img
              alt=''
              src={stairway_spawn}
              style={{
                width: '100%',
                borderRadius: '1rem',
                objectFit: 'cover'
              }}
            />
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
    ]
  },
  mushroom: {
    id: 'mushroom',
    icon: ICONS.RedMushroom,
    label: 'Mushroom',
    farms: [
      {
        id: 'chimney-mushroom',
        name: 'The Chimney - Mushroom Edition',
        banner: chimney_mushroom,
        pictures: {
          [Tags.drowning]: chimney_drowning,
          [Tags.lava_latch]: chimney_lava_latch
        },
        info: (
          <div>
            <h2>Info</h2>
            <p>
              <strong>This farm should be built</strong> in the <strong>west to east</strong> or{' '}
              <strong>east to west</strong> directions, because the lava latch is directional and will not work properly
              when faced north or south.
            </p>
          </div>
        ),
        spawn: (
          <>
            <div>
              <h5>Remove highlighted redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Place a block and walls like shown:</h5>
              <img
                alt=''
                src={chimney_spawn_02}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Add 4 snow layers and set your spawn:</h5>
              <img
                alt=''
                src={chimney_spawn_03}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h5>Remove blocks you've placed and put back the redstone torch:</h5>
              <img
                alt=''
                src={chimney_spawn_01}
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover'
                }}
              />
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
        bps: 19.71,
        keyCount: 3,
        yaw: '25.3',
        pitch: '0.0',
        speed: 400,
        enchantments: ['Frost Walker II', 'Depth Strider II'],
        keys: [Keys.W, Keys.A, Keys.LC],
        depth: 4,
        buildDifficulty: 3,
        schema: '/hypixel-farming/assets/schemas/Chimney_Mushroom.litematic',
        authors: ['Daladirn', 'Harpan']
      }
    ]
  },
  melon: {
    id: 'melon',
    icon: ICONS.MelonSlice,
    label: 'Melon',
    farms: [
      {
        id: 'cascade-melon',
        name: 'The Cascade - Melon Edition',
        banner: cascade_melon,
        pictures: {
          [Tags.drowning]: cascade_drowning,
          [Tags.water_latch]: cascade_water_latch
        },
        info: (
          <>
            <div>
              <h2>Building tips</h2>
              <p>Steps to build this farm efficiently: </p>
              <ol>
                <li>Build 1 plot of the non-drowning section</li>
                <li>Paste it in all the other plots</li>
                <li>When setting up the drowning section, use Ruler's Wand remove the ladders.</li>
                <li>Finish up by removing blocks at the latch part of the farm and build the latches.</li>
              </ol>
            </div>
            <p>You may use Ruler's Wand to place ladders, only caveat is that placed ladders will always face north.</p>
          </>
        ),
        spawn: (
          <>
            <Alert variant='info' className='mt-2'>
              Highlighted blocks are temporary and should be removed after setting spawn.
            </Alert>
            <img
              alt=''
              src={cascade_spawn}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '1rem',
                objectFit: 'cover'
              }}
            />
          </>
        ),
        tags: [
          Tags.bps,
          Tags.key_count,
          Tags.boot_swap,
          Tags.no_key_swap,
          Tags.drowning,
          Tags.water_latch,
          Tags.max_speed
        ],
        bps: 19.5,
        keyCount: 2,
        yaw: '-22.7',
        pitch: '-55.9',
        speed: 400,
        enchantments: ['Frost Walker II', 'Depth Strider III', 'Aqua Affinity I'],
        keys: [Keys.W, Keys.LC],
        depth: 3,
        buildDifficulty: 2,
        schema: '/hypixel-farming/assets/schemas/Cascade_Melon.litematic',
        authors: ['Daladirn (feat. Krabby Patty for moral support)']
      }
    ]
  },
  pumpkin: {
    id: 'pumpkin',
    icon: ICONS.Pumpkin,
    label: 'Pumpkin',
    farms: [
      {
        id: 'cascade-pumpkin',
        name: 'The Cascade - Pumpkin Edition',
        banner: cascade_pumpkin,
        pictures: {
          [Tags.drowning]: cascade_drowning,
          [Tags.water_latch]: cascade_water_latch
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
            <p>You may use Ruler's Wand to place ladders, only caveat is that placed ladders will always face north.</p>
          </>
        ),
        spawn: (
          <>
            <Alert variant='info' className='mt-2'>
              Highlighted blocks are temporary and should be removed after setting spawn.
            </Alert>
            <img
              alt=''
              src={cascade_spawn}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '1rem',
                objectFit: 'cover'
              }}
            />
          </>
        ),
        tags: [
          Tags.bps,
          Tags.key_count,
          Tags.boot_swap,
          Tags.no_key_swap,
          Tags.drowning,
          Tags.water_latch,
          Tags.max_speed
        ],
        bps: 19.5,
        keyCount: 2,
        yaw: '-22.7',
        pitch: '-55.9',
        speed: 400,
        enchantments: ['Frost Walker II', 'Depth Strider III', 'Aqua Affinity I'],
        keys: [Keys.W, Keys.LC],
        depth: 3,
        buildDifficulty: 2,
        schema: '/hypixel-farming/assets/schemas/Cascade_Pumpkin.litematic',
        authors: ['Daladirn (feat. Krabby Patty for moral support)']
      }
    ]
  },
  cactus: {
    id: 'cactus',
    icon: ICONS.Cactus,
    label: 'Cactus',
    farms: []
  },
  sugarcane: {
    id: 'sugarcane',
    icon: ICONS.SugarCane,
    label: 'Sugar Cane',
    farms: []
  },
  cocoa: {
    id: 'cocoa',
    icon: ICONS.CocoaBeans,
    label: 'Cocoa Beans',
    farms: []
  }
}
