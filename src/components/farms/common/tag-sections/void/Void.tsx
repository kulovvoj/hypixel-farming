import { TFarm } from '../../../../../utils/types.ts'
import { Alert } from 'react-bootstrap'
import PlaceholderImage from '../../../../common/placeholder-image/PlaceholderImage.tsx'

interface IProps {
  farm: TFarm
}

export default function Void({ farm }: IProps) {
  return (
    <div className='section void responsive-image-grid'>
      {!!farm.pictures?.void && (
        <div>
          <PlaceholderImage src={farm.pictures.void} />
        </div>
      )}
      <h2>Void</h2>
      As you farm, you want to die at the end of the farm to spawn back at the start. In the case of this farm, you will
      be going for a little fall into the depths of the void.
      <Alert variant='warning'>
        <Alert.Heading>Dying on your Garden makes you lose coins.</Alert.Heading>
        That means that you'll either need at least two Bank V enchantments on your equipment, or have the Cookie Buff
        active.
      </Alert>
    </div>
  )
}
