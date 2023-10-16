import 'server-only'

import { PlanetName } from './types'
import { PLANETS_NAME } from './constants'

export const getIsValidPlanetName = (value: string): value is PlanetName => {
    // We have to cast here, because we don't know yet if the checks is going to work
    return PLANETS_NAME.includes(value as PlanetName)
}
