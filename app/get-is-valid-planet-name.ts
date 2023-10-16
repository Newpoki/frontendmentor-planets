import { PlanetsName } from './types'

export const getIsValidPlanetName = (value: string): value is PlanetsName => {
    return ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'].includes(
        value
    )
}
