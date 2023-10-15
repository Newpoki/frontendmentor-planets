export type PlanetsName =
    | 'mercury'
    | 'venus'
    | 'earth'
    | 'mars'
    | 'jupiter'
    | 'saturn'
    | 'uranus'
    | 'neptune'

export type PlanetViewTabsName = 'overview' | 'structure' | 'surface'

export type PlanetViewTabIndicatorData = {
    left: number
    width: number
    name: PlanetViewTabsName
    planetName: PlanetsName
    bottom: number
}
