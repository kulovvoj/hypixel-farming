export enum CardinalDirection {
  SOUTH = 0,
  WEST = 90,
  NORTH = 180,
  EAST = 270
}

export function calculateYaw({
  defaultDirection,
  customDirection,
  defaultYaw
}: {
  defaultDirection: {
    farmDirection: CardinalDirection
    playerDirection: CardinalDirection
  }
  customDirection: {
    farmDirection: CardinalDirection
    playerDirection: CardinalDirection
  }
  defaultYaw: number
}) {
  if (
    ((defaultDirection.farmDirection === CardinalDirection.SOUTH ||
      defaultDirection.farmDirection === CardinalDirection.NORTH) &&
      (defaultDirection.playerDirection === CardinalDirection.SOUTH ||
        defaultDirection.playerDirection === CardinalDirection.NORTH)) ||
    ((customDirection.farmDirection === CardinalDirection.SOUTH ||
      customDirection.farmDirection === CardinalDirection.NORTH) &&
      (customDirection.playerDirection === CardinalDirection.SOUTH ||
        customDirection.playerDirection === CardinalDirection.NORTH)) ||
    ((defaultDirection.farmDirection === CardinalDirection.WEST ||
      defaultDirection.farmDirection === CardinalDirection.EAST) &&
      (defaultDirection.playerDirection === CardinalDirection.WEST ||
        defaultDirection.playerDirection === CardinalDirection.EAST)) ||
    ((customDirection.farmDirection === CardinalDirection.WEST ||
      customDirection.farmDirection === CardinalDirection.EAST) &&
      (customDirection.playerDirection === CardinalDirection.WEST ||
        customDirection.playerDirection === CardinalDirection.EAST))
  ) {
    throw new Error("The direction while calculating player's pitch was invalid")
  }

  const playerOffset =
    angleModulo(defaultYaw - defaultDirection.farmDirection) *
    (Math.abs(
      angleModulo(defaultDirection.farmDirection - defaultDirection.playerDirection) -
        angleModulo(customDirection.farmDirection - customDirection.playerDirection)
    ) < Number.EPSILON
      ? 1
      : -1)

  return angleModulo(customDirection.farmDirection + playerOffset)
}

function angleModulo(angle: number) {
  const modAngle = ((angle % 360) + 360) % 360
  return modAngle > 180 ? modAngle - 360 : modAngle
}
