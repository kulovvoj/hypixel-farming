import {TFarm} from "../../../../utils/types.ts";


interface IProps {
  farm: TFarm
}

export default function Spawn({farm}: IProps) {
  return <div className='section spawn'>
    <h2>Spawn</h2>
    <div className='spawn-grid'>
      {farm.spawn}
    </div>
  </div>
}