import { Navigate, useParams } from 'react-router-dom'
import { CROP_PATH } from '../../utils/paths.ts'
import { CROPS } from '../../utils/crops.ts'
import TagSection from '../../components/farms/common/tag-sections/TagSection.tsx'
import { Card, CardBody, Dropdown, ProgressBar } from 'react-bootstrap'
import Icon, { ICON_SIZE, ICONS } from '../../components/common/icon/Icon.tsx'
import { Tags } from '../../utils/types.ts'
import KeyLayout from '../../components/farm-guide/key-layout/KeyLayout.tsx'
import PlaceholderImage from '../../components/common/placeholder-image/PlaceholderImage.tsx'
import { FunctionComponent, SVGAttributes, useState } from 'react'
import { calculateYaw, CardinalDirection } from '../../utils/cardinalDirection.ts'

const iconMap: { [key: string]: FunctionComponent<SVGAttributes<SVGElement>> } = {
  wheat: ICONS.Wheat,
  carrot: ICONS.Carrot,
  potato: ICONS.Potato,
  netherwart: ICONS.NetherWart,
  mushroom: ICONS.RedMushroom,
  melon: ICONS.MelonSlice,
  pumpkin: ICONS.Pumpkin,
  cactus: ICONS.Cactus,
  sugarcane: ICONS.SugarCane,
  cocoa: ICONS.CocoaBeans
}

const farmDirections = {
  [CardinalDirection.WEST]: 'East to West',
  [CardinalDirection.EAST]: 'West to East',
  [CardinalDirection.NORTH]: 'South to North',
  [CardinalDirection.SOUTH]: 'North to South'
}

const playerDirections = {
  [CardinalDirection.WEST]: 'Facing West',
  [CardinalDirection.EAST]: 'Facing East',
  [CardinalDirection.NORTH]: 'Facing North',
  [CardinalDirection.SOUTH]: 'Facing South'
}

export default function FarmGuide() {
  const { type, id } = useParams<{ type: string; id: string }>() as { type: string; id: string }
  const farm = CROPS[type].farms.find((farm) => farm.id === id)
  const [farmDirection, setFarmDirection] = useState<CardinalDirection>(farm?.farmDirection ?? CardinalDirection.WEST)
  const [playerDirection, setPlayerDirection] = useState<CardinalDirection>(
    farm?.playerDirection ?? CardinalDirection.SOUTH
  )

  if (!farm) {
    return <Navigate to={CROP_PATH.replace(':type', type)} />
  }
  const yaw = calculateYaw({
    defaultDirection: {
      farmDirection: farm.farmDirection,
      playerDirection: farm.playerDirection
    },
    customDirection: {
      farmDirection: farmDirection,
      playerDirection: playerDirection
    },
    defaultYaw: farm.yaw
  })

  return (
    <div className='farm'>
      <div>
        <div className='farm-banner'>
          <PlaceholderImage src={farm.banner} />
          <div className='farm-banner-authors'>by {farm.authors.join(' & ')}</div>
          <div className='farm-banner-icon'>
            <Icon icon={iconMap[type]} size={ICON_SIZE.SIZE_48} />
          </div>
        </div>
        <h1 className='text-center mt-3'>{farm?.name}</h1>
      </div>
      <div className='section common'>
        <Card>
          <CardBody
            className='py-2'
            style={{ display: 'grid', gridTemplateRows: 'auto 1fr', columnGap: '0.75rem', justifyItems: 'center' }}
          >
            <h3 className='text-center'>Stats</h3>
            <div className='d-flex flex-column align-items-center'>
              <div>
                <strong className='text-right'>{farm.bps.toFixed(2)}</strong> BPS
              </div>
              <div>{farm.tags.includes(Tags.no_key_swap) ? 'No key swap' : 'Key swap'}</div>
              <div>{farm.keyCount}-key farm</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className='py-2'>
            <h3 className='text-center'>Keys</h3>
            <KeyLayout farm={farm} />
          </CardBody>
        </Card>
        <Card>
          <CardBody className='py-2'>
            <h3 className='text-center'>Enchantments</h3>
            <div className='d-flex align-items-center flex-column'>
              {farm.enchantments.map((enchantment) => (
                <div key={enchantment}>
                  <strong>{enchantment}</strong>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody
            className='py-2'
            style={{ display: 'grid', gridTemplateRows: 'auto 1fr', columnGap: '0.75rem', justifyItems: 'center' }}
          >
            <h3 className='text-center'>Setup</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 4rem',
                columnGap: '0.75rem',
                height: 'fit-content'
              }}
            >
              <div>Yaw:</div>
              <strong className='text-right'>{yaw.toFixed(2)}</strong>
              <div>Pitch:</div>
              <strong className='text-right'>{farm.pitch.toFixed(2)}</strong>
              <div>Speed:</div>
              <strong className='text-right'>{farm.speed}</strong>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                columnGap: '0.75rem',
                justifyItems: 'center',
                width: '100%'
              }}
            >
              <div className='d-flex justify-content-end w-100'>
                <Dropdown className='w-100'>
                  <Dropdown.Toggle variant='dark' id='dropdown-basic' className='w-100'>
                    {farmDirections[farmDirection]}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {farm.allowedDirections?.map((allowedDirection) => (
                      <Dropdown.Item
                        key={allowedDirection.farmDirection}
                        onClick={() => {
                          setFarmDirection(allowedDirection.farmDirection)
                          setPlayerDirection(
                            allowedDirection.farmDirection === farm.farmDirection
                              ? farm.playerDirection
                              : allowedDirection.playerDirections[0]
                          )
                        }}
                      >
                        {farmDirections[allowedDirection.farmDirection]}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className='d-flex justify-content-start w-100'>
                <Dropdown className='w-100'>
                  <Dropdown.Toggle variant='dark' id='dropdown-basic' className='w-100'>
                    {playerDirections[playerDirection]}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {farm.allowedDirections
                      .find((allowedDirection) => allowedDirection.farmDirection === farmDirection)
                      ?.playerDirections.map((allowedPlayerDirection) => (
                        <Dropdown.Item
                          key={allowedPlayerDirection}
                          onClick={() => setPlayerDirection(allowedPlayerDirection)}
                        >
                          {playerDirections[allowedPlayerDirection]}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody
            className='py-2'
            style={{
              display: 'grid',
              gridTemplateRows: 'auto 1fr',
              columnGap: '0.75rem',
              justifyItems: 'center',
              alignItems: 'center'
            }}
          >
            <h3 className='text-center'>Schema</h3>
            <div>
              <a href={farm.schema} download className='d-flex align-items-end gap-2'>
                <Icon icon={ICONS.Download} size={ICON_SIZE.SIZE_32} /> Download
              </a>
            </div>
            <div className='d-flex flex-row mt-2 align-items-center gap-3 w-100'>
              <strong>
                <small>Build difficulty:</small>
              </strong>
              <ProgressBar
                variant={farm.buildDifficulty > 4 ? 'danger' : farm.buildDifficulty > 2 ? 'warning' : 'success'}
                now={farm.buildDifficulty * 20}
                className='flex-grow-1'
                style={{ '--bs-progress-height': '0.5rem' }}
              />
            </div>
          </CardBody>
        </Card>
      </div>
      <TagSection farm={farm} />
    </div>
  )
}
