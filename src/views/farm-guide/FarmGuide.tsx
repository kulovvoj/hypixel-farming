import { Navigate, useParams } from 'react-router-dom'
import { CROP_PATH } from '../../utils/paths.ts'
import { CROPS } from '../../utils/crops.ts'
import TagSection from '../../components/farms/common/tag-sections/TagSection.tsx'
import { Card, CardBody, ProgressBar } from 'react-bootstrap'
import Icon, { ICON_SIZE, ICONS } from '../../components/common/icon/Icon.tsx'
import { Tags } from '../../utils/types.ts'
import KeyLayout from '../../components/farm-guide/key-layout/KeyLayout.tsx'
import PlaceholderImage from '../../components/common/placeholder-image/PlaceholderImage.tsx'
import { FunctionComponent, SVGAttributes } from 'react'

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

export default function FarmGuide() {
  const { type, id } = useParams<{ type: string; id: string }>() as { type: string; id: string }
  const farm = CROPS[type].farms.find((farm) => farm.id === id)
  if (!farm) {
    return <Navigate to={CROP_PATH.replace(':type', type)} />
  }

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
          <CardBody
            className='py-2'
            style={{ display: 'grid', gridTemplateRows: 'auto 1fr', columnGap: '0.75rem', justifyItems: 'center' }}
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
        <Card>
          <CardBody
            className='py-2'
            style={{ display: 'grid', gridTemplateRows: 'auto 1fr', columnGap: '0.75rem', justifyItems: 'center' }}
          >
            <h3 className='text-center'>Setup</h3>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '0.75rem', height: 'fit-content' }}
            >
              <div>Yaw:</div>
              <strong className='text-right'>{farm.yaw}</strong>
              <div>Pitch:</div> <strong className='text-right'>{farm.pitch}</strong>
              <div>Speed:</div> <strong className='text-right'>{farm.speed}</strong>
            </div>
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
          <CardBody className='py-2'>
            <h3 className='text-center'>Keys</h3>
            <KeyLayout farm={farm} />
          </CardBody>
        </Card>
      </div>
      <TagSection farm={farm} />
    </div>
  )
}