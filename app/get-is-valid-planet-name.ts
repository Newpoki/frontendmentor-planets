import { PlanetName } from './types'

export const getIsValidPlanetName = (value: string): value is PlanetName => {
    return ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'].includes(
        value
    )
}
