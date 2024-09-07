import {TFarm} from "../../../../../utils/types.ts";
import {Alert} from "react-bootstrap";


interface IProps {
  farm: TFarm
}
export default function LavaLatch({farm}: IProps) {
  return <div className='section lava-latch responsive-image-grid'>
    {!!farm.pictures?.lava_latch &&
      <div>
        <img
          alt=''
          src={farm.pictures.lava_latch}
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
      <h2>Lava Latch</h2>
      <p>Lava latch is a latch design that uses cobble stone generators to open fence gates.</p>
      <p>By freezing a water source block and updating the flowing water block next to it while frozen with a block update, you turn on a cobble stone generator next to a fence gate.</p>
    </div>
    <div>
      <p>Since there's a redstone torch placed below where cobblestone is generated, the cobblestone will transfer power to the fence gate and open it.</p>
      <p>If that was all, the block would remain indefinitely and the gate would stay open forever. That's where <a href='https://wiki.hypixel.net/Floating_Crystal' target='_blank'>Floating Crystals</a> come in.</p>
      <p>A <a href='https://wiki.hypixel.net/Floating_Crystal' target='_blank'>Floating Crystal</a> will delete any blocks that generate inside it. After generating the block, we update the water source block we froze earlier to make it flow again, turning the cobble generator off again.</p>
      <p>Closing the gate is done by simply updating the fence gate with a block update.</p>
    </div>
    <Alert variant='info'>
      <Alert.Heading>Where should you place the Floating Crystals?</Alert.Heading>
      The blocks where Floating Crystals are supposed to be placed are indicated by diamond blocks in the schema. Know, that you can only place one Floating Crystal of each type.
    </Alert>
  </div>
}
