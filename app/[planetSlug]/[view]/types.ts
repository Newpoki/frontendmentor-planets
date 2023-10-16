import { PlanetsName } from '@/app/types'

type PlanetView = {
    content: string
    source: string
}

export type Planet = {
    id: PlanetsName
    name: string
    overview: PlanetView
    structure: PlanetView
    geology: PlanetView
    rotation: string
    revolution: string
    radius: string
    temperature: string
    images: {
        planet: string
        internal: string
        geology: string
    }
}

export type PlanetData = {
    [planetName in PlanetsName]: Planet
}
