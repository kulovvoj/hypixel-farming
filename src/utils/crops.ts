import { TCrops } from './types'
import wheat from './farms/wheat/wheat.tsx'
import carrot from './farms/carrot/carrot.tsx'
import potato from './farms/potato/potato.tsx'
import netherwart from './farms/netherwart/netherwart.tsx'
import mushroom from './farms/mushroom/mushroom.tsx'
import melon from './farms/melon/melon.tsx'
import pumpkin from './farms/pumpkin/pumpkin.tsx'
import cactus from './farms/cactus/cactus.tsx'
import sugarcane from './farms/sugarcane/sugarcane.ts'
import cocoa from './farms/cocoa/cocoa.tsx'

export const CROPS: TCrops = {
  wheat: wheat,
  carrot: carrot,
  potato: potato,
  netherwart: netherwart,
  mushroom: mushroom,
  melon: melon,
  pumpkin: pumpkin,
  cactus: cactus,
  sugarcane: sugarcane,
  cocoa: cocoa
}
