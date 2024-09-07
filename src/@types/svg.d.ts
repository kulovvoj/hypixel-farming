declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react'
  const ReactComponent: FunctionComponent<SVGAttributes<SVGElement>>
  export default ReactComponent
}
