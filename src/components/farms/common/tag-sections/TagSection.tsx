import { Tags, TFarm } from '../../../../utils/types.ts'
import Drowning from './drowning/Drowning.tsx'
import React, { useMemo, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Patcher from './patcher/Patcher.tsx'
import Burning from './burning/Burning.tsx'
import Void from './void/Void.tsx'
import LavaLatch from './lava-latch/LavaLatch.tsx'
import WaterLatch from './water-latch/WaterLatch.tsx'
import BootSwap from './boot-swap/BootSwap.tsx'
import Spawn from '../spawn/Spawn.tsx'
import Info from '../info/Info.tsx'

interface IProps {
  farm: TFarm
}

export default function TagSection({ farm }: IProps) {
  const filteredTags = useMemo(() => {
    return farm.tags.filter((tag) => Object.keys(tagSections).includes(tag))
  }, [])

  const [selected, setSelected] = useState(farm.info ? 'info' : 'spawn')

  if (filteredTags.length === 0) return <></>
  const TagSection = tagSections[selected]?.component

  return (
    <div>
      <Tabs
        defaultActiveKey={selected}
        id='tag-section-tabs'
        className='mb-3'
        onSelect={(selected) => selected && setSelected(selected)}
      >
        {!!farm.info && <Tab title='Info' eventKey='info' />}
        <Tab title='Spawn' eventKey='spawn' />
        {filteredTags.map((tag) => (
          <Tab key={tag} title={tagSections[tag]?.tab} eventKey={tag} />
        ))}
      </Tabs>
      {selected === 'info' && <Info farm={farm} />}
      {selected === 'spawn' && <Spawn farm={farm} />}
      {!!TagSection && <TagSection farm={farm} />}
    </div>
  )
}

const tagSections: {
  [key: string]: { component: any; tab: string }
} = {
  [Tags.drowning]: {
    tab: 'Drowning',
    component: Drowning
  },
  [Tags.burning]: {
    tab: 'Burning',
    component: Burning
  },
  [Tags.void]: {
    tab: 'Void',
    component: Void
  },
  [Tags.patcher]: {
    tab: 'Patcher',
    component: Patcher
  },
  [Tags.lava_latch]: {
    tab: 'Lava Latch',
    component: LavaLatch
  },
  [Tags.water_latch]: {
    tab: 'Water Latch',
    component: WaterLatch
  },
  [Tags.boot_swap]: {
    tab: 'Boot Swap',
    component: BootSwap
  }
}
