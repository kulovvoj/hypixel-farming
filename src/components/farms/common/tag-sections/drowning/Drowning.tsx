import { Alert, ListGroup, ListGroupItem } from 'react-bootstrap'
import DrowningCalculator from './DrowningCalculator.tsx'
import { TFarm } from '../../../../../utils/types.ts'

interface IProps {
  farm: TFarm
}

export default function Drowning({ farm }: IProps) {
  return (
    <div className='section drowning responsive-image-grid'>
      {!!farm.pictures?.drowning && (
        <div>
          <img
            alt=''
            src={farm.pictures.drowning}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '1rem',
              objectFit: 'cover'
            }}
          />
        </div>
      )}
      <div>
        <h2>Drowning</h2>
        <p>
          As you farm, you want to die, so that you can spawn back at the start of the farm. Drowning is the death of
          choice for this farm.
        </p>
        <p>
          To die properly, it is important to build the drowning section of your farm just long enough that you drown
          almost at the end. The length of the drowning section will depend on your stats.
        </p>
      </div>
      <div>
        <p>First you'll need to time how long it takes you to drown.</p>
        <ol>
          <li>
            <p>Equip your farming armor set and summon your farming pet.</p>
          </li>
          <li>
            <p>Disable or do not use these potion effects:</p>
            <ListGroup className='mb-3'>
              <ListGroupItem>
                <a href='https://wiki.hypixel.net/Absorption_Potion' target='_blank'>
                  Absorption
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href='https://wiki.hypixel.net/Adrenaline_Potion' target='_blank'>
                  Adrenaline
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href='https://wiki.hypixel.net/Regeneration_Potion' target='_blank'>
                  Regeneration
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href='https://wiki.hypixel.net/Water_Breathing_Potion' target='_blank'>
                  Water Breathing
                </a>
              </ListGroupItem>
            </ListGroup>
          </li>
          <li>
            <p>Measure how long it takes you to drown from entering water.</p>
          </li>
        </ol>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <DrowningCalculator farm={farm} />
      </div>
      <Alert variant='warning'>
        <Alert.Heading>Drowning on your Garden makes you lose coins.</Alert.Heading>
        That means that you'll either need at least two Bank V enchantments on your equipment, or have the Cookie Buff
        active.
      </Alert>
    </div>
  )
}
