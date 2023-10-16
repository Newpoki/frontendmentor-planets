import { PlanetViewName } from './types'
import { PLANETS_VIEWS_NAME } from './constants'

export const getIsValidViewTab = (value: string): value is PlanetViewName => {
    // We have to cast here, because we don't know yet if the checks is going to work
    return PLANETS_VIEWS_NAME.includes(value as PlanetViewName)
}
