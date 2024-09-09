import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { FARM_PATH } from '../../utils/paths.ts'
import { CROPS } from '../../utils/crops.ts'
import { Badge, Card, CardBody, ProgressBar } from 'react-bootstrap'
import { TagColors, Tags } from '../../utils/types'
import whereIsEveryone from '../../assets/where_is_everyone.gif'
import { useMemo } from 'react'

export default function FarmSelectionPage() {
  const { type } = useParams<{ type: string }>() as { type: string }
  const navigate = useNavigate()
  const crop = useMemo(() => CROPS[type], [type])
  if (!crop) return <Navigate to='/' />

  return (
    <div className='d-flex flex-column justify-content-center'>
      {crop.farms.length === 0 && <img loading='lazy' alt='' src={whereIsEveryone} />}
      <div className='d-flex flex-column gap-3'>
        {crop.farms.map((farm) => (
          <Card
            key={farm.id}
            className='clickable'
            onClick={() => navigate(FARM_PATH.replace(':type', type).replace(':id', farm.id))}
          >
            <CardBody className='px-3 py-2'>
              <h3>{farm.name}</h3>
              <div className='d-flex flex-row gap-2 flex-wrap'>
                {farm.tags.map((tag) => (
                  <Badge key={tag} bg={TagColors[tag]}>
                    {tags[tag]
                      .replace('{{bps}}', farm.bps.toFixed(2))
                      .replace('{{key_count}}', farm.keyCount?.toString() ?? '?')}
                  </Badge>
                ))}
              </div>
              <div className='d-flex flex-row mt-3 align-items-center gap-3'>
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
              {!!farm.description && <div className='mt-3 fw-semibold'>{farm.description}</div>}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

const tags: { [key in Tags]: string } = {
  boot_swap: 'Boot Swap',
  lava_latch: 'Lava Latch',
  water_latch: 'Water Latch',
  bps: '{{bps}} BPS',
  key_swap: 'Key Swap',
  no_key_swap: 'No Key Swap',
  key_count: '{{key_count}}-Key',
  drowning: 'Drowning',
  burning: 'Burning',
  void: 'Void',
  max_speed: '400 Speed',
  patcher: 'Patcher'
}
