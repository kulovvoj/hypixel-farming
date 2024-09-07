import { TFarm } from '../../../../../utils/types.ts'
import { Alert, ListGroup, ListGroupItem } from 'react-bootstrap'

interface IProps {
  farm: TFarm
}
export default function Burning({ farm }: IProps) {
  return (
    <div className='section burning responsive-image-grid'>
      {!!farm.pictures?.burning && (
        <div>
          <img
            alt=''
            src={farm.pictures.burning}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '1rem',
              objectFit: 'cover'
            }}
          />
        </div>
      )}
      <h2>Burning</h2>
      <div>
        <p>As you farm, you want to die at the end of the farm to spawn back at the start.</p>
        <p>
          In this case we use death by heat. By equipping the{' '}
          <a href='https://wiki.hypixel.net/Delirium_Necklace'>Delirium Necklace</a>, you will take increased damage
          from both lava and fire.
        </p>
      </div>
      <p>
        Having as much strength as you can helps a ton, so you might want to apply the Forceful power with{' '}
        <a href='https://wiki.hypixel.net/Acacia_Birdhouse' target='_blank'>
          Acacia Birdhouse
        </a>
        .
      </p>
      <p>By placing a lava block at the end of the farming row, you will die in less than a second.</p>
      <div>
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
        </ListGroup>
      </div>
      <div>
        <p>Take off these accessories:</p>
        <ListGroup className='mb-3'>
          <ListGroupItem>
            <a href='https://wiki.hypixel.net/Lava_Talisman' target='_blank'>
              Lava Talisman
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href='https://wiki.hypixel.net/Fire_Talisman' target='_blank'>
              Fire Talisman
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href='https://wiki.hypixel.net/Campfire_Badge' target='_blank'>
              Campfire Badge
            </a>
          </ListGroupItem>
        </ListGroup>
      </div>
      <Alert variant='warning'>
        <Alert.Heading>Dying on your Garden makes you lose coins.</Alert.Heading>
        That means that you'll either need at least two Bank V enchantments on your equipment, or have the Cookie Buff
        active.
      </Alert>
    </div>
  )
}
