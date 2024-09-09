import { TFarm } from '../../../../../utils/types.ts'
import PlaceholderImage from '../../../../common/placeholder-image/PlaceholderImage.tsx'

interface IProps {
  farm: TFarm
}

export default function WaterLatch({ farm }: IProps) {
  return (
    <div className='section water-latch responsive-image-grid'>
      {!!farm.pictures?.water_latch && (
        <div>
          <PlaceholderImage src={farm.pictures.water_latch} />
        </div>
      )}
      <div>
        <h2>Water Latch</h2>
        <p>Water latch is a relatively simple, but ingenious latch design.</p>
        <p>
          When you run against a wall while leaving knee high water, Minecraft will make a player bob upwards. In a
          water latch, this little jump will allow you enter one part of the farm.
        </p>
      </div>
      <div>
        <p>
          Since you bob above the water source block, you will freeze it with frost walker. A string on top of the
          flowing water block next to it will trigger a block update, which will stop the water from flowing.
        </p>
        <p>
          Next time you pass the latch, there will no longer be water to bob you upwards and you will enter a different
          part of the farm this time.
        </p>
        <p>Updating the water source block with a block update will reset the latch to it's flowing state.</p>
      </div>
    </div>
  )
}
