export type PlanetName =
    | 'mercury'
    | 'venus'
    | 'earth'
    | 'mars'
    | 'jupiter'
    | 'saturn'
    | 'uranus'
    | 'neptune'

export type PlanetViewName = 'overview' | 'structure' | 'surface'

export type PlanetViewTabIndicatorData = {
    left: number
    width: number
    name: PlanetViewName
    planetName: PlanetName
    bottom: number
}
