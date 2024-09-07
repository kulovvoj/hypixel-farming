import { Navigate, useParams } from 'react-router-dom'
import { CROP_PATH, CROPS } from '../../utils/consts'
import TagSection from '../../components/farms/common/tag-sections/TagSection.tsx'
import { Card, CardBody } from 'react-bootstrap'
import Icon, { ICON_SIZE, ICONS } from '../../components/icon/Icon.tsx'
import { Tags } from '../../utils/types.ts'
import KeyLayout from '../../components/farm-guide/key-layout/KeyLayout.tsx'

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
          <img
            alt=''
            src={farm?.banner}
            style={{
              width: '100%',
              position: 'relative',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0'
            }}
          />
          <div className='authors'>by {farm.authors.join(' & ')}</div>
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
              <div>Yaw:</div> <strong className='text-right'>{farm.yaw}</strong>
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
