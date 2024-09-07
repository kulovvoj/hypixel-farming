import { useState } from 'react'
import { TFarm } from '../../../../../utils/types.ts'

interface IProps {
  farm: TFarm
}

export default function DrowningCalculator({ farm }: IProps) {
  const [seconds, setSeconds] = useState<number | undefined>()

  return (
    <>
      <p>
        It took me&nbsp;
        <input
          type='number'
          onChange={(e) =>
            Number.parseInt(e.currentTarget.value) > 0
              ? setSeconds(Number.parseInt(e.currentTarget.value))
              : setSeconds(undefined)
          }
          style={{ width: '4rem' }}
        />
        &nbsp;seconds to drown.
      </p>
      {!seconds && (
        <p>
          <i>Enter how long it took you to drown above.</i>
        </p>
      )}
      {!!seconds && (
        <p>
          The drowning section should be <strong>{Math.ceil(5 + (seconds * 20) / farm.depth)} blocks long.</strong>
        </p>
      )}
    </>
  )
}
