import { TFarm } from '../../../../../utils/types.ts'
import PlaceholderImage from '../../../../common/placeholder-image/PlaceholderImage.tsx'

interface IProps {
  farm: TFarm
}

export default function Patcher({ farm }: IProps) {
  return (
    <div className='section patcher responsive-image-grid'>
      {!!farm.pictures?.patcher && (
        <div>
          <PlaceholderImage src={farm.pictures.patcher} />
        </div>
      )}
      <div>
        <h2>Patcher</h2>
        <p>
          Patcher is a mod by <strong>Sk1er</strong> that changes crop hitboxes to their 1.12+ variant. Before this
          minecraft version, crops had the same hitbox no matter the version, which can decrease farm efficiency.
        </p>
        <p>
          You can get Polyfrost's improved fork of the mod, PolyPatcher,{' '}
          <a href='https://github.com/Polyfrost/PolyPatcher/releases' target='_blank'>
            here
          </a>
          .
        </p>
        <p>
          To use particle features like <i>'Disable Block Breaking Particles'</i> with PolyPatcher, you should
          additionally download OverflowParticles mod{' '}
          <a href='https://github.com/Polyfrost/OverflowParticles/releases' target='_blank'>
            here
          </a>
          .
        </p>
        <p>
          The original mod by Sk1er can be downloaded from{' '}
          <a href='https://sk1er.club/mods/patcher' target='_blank'>
            here
          </a>
          .
        </p>
      </div>
    </div>
  )
}
