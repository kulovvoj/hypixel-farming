import { TFarm } from '../../../../../utils/types.ts'
import bootSwapMp4 from '../../../../../assets/bootswap.mp4'
import { Alert } from 'react-bootstrap'
import PlaceholderImage from '../../../../common/placeholder-image/PlaceholderImage.tsx'

interface IProps {
  farm: TFarm
}

export default function BootSwap({ farm }: IProps) {
  return (
    <div className='section boot-swap responsive-image-grid'>
      {!!farm.pictures?.boot_swap && (
        <div>
          <PlaceholderImage src={farm.pictures.boot_swap} />
        </div>
      )}
      <div>
        <h2>Boot Swap</h2>
        <p>
          There is a feature, that makes it possible to both have mutually exclusive enchants, Frost Walker and Depth
          Strider, active at the same time.
        </p>
        <p>To achieve this, you need to rapidly switch between two pairs of boots, each with one of the enchants.</p>
      </div>
      <div>
        <p>The steps would be as follows:</p>
        <ol>
          <li>
            Apply the desired Depth Strider enchant to the boots you will be farming with and apply Frost Walker to any
            other pair of boots.
          </li>
          <li>Equip one pair of boots.</li>
          <li>Hold the other pair with your mouse.</li>
          <li>Rapidly click about 5 - 6 times.</li>
          <li>If you don't end up with Depth Strider boots equipped, repeat.</li>
          <li>
            If you do end up with Depth Strider boots equipped, test whether you're freezing water. If not, repeat.
          </li>
        </ol>
      </div>
      <Alert variant='warning'>
        The effect will wear off once you leave your garden or remove your Rancher's boots.
      </Alert>
      <video src={bootSwapMp4} autoPlay loop className='w-100' style={{ borderRadius: '1rem' }} />
    </div>
  )
}
