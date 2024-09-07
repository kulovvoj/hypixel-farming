import { TFarm } from '../../../../utils/types.ts'

interface IProps {
  farm: TFarm
}

export default function Info({ farm }: IProps) {
  return farm.info
}
