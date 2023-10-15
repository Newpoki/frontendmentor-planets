import { PlanetsName } from '../types'

export type PlanetViewTabsName = 'overview' | 'structure' | 'surface'

export type PlanetViewTabIndicatorData = {
    left: number
    width: number
    name: PlanetViewTabsName
    planetName: PlanetsName
    bottom: number
}
