import { PLANETS_NAME, PLANETS_VIEWS_NAME } from './constants'

export type PlanetName = (typeof PLANETS_NAME)[number]

export type PlanetViewName = (typeof PLANETS_VIEWS_NAME)[number]

export type PlanetViewTabIndicatorData = {
    left: number
    width: number
    name: PlanetViewName
    planetName: PlanetName
    bottom: number
}
