import {TFarm} from "../../../../../utils/types.ts";


interface IProps {
  farm: TFarm
}

export default function Patcher({farm}: IProps) {
  return <div className='section patcher responsive-image-grid'>
    {!!farm.pictures?.patcher &&
      <div>
        <img
          alt=''
          src={farm.pictures.patcher}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: '1rem',
            objectFit: 'cover'
          }}
        />
      </div>
    }
    <div>
      <h2>Patcher</h2>
      <p>Patcher is a mod by <strong>Sk1er</strong> that changes crop hitboxes to their 1.12+ variant. Before this minecraft version, crops had the same hitbox no matter the version, which can decrease farm efficiency.</p>
      <p>You can get it <a href='https://sk1er.club/mods/patcher' target='_blank'>here</a>.</p>
    </div>
  </div>
}