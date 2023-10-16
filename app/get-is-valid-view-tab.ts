import { PlanetViewTabsName } from './types'

export const getIsValidViewTab = (value: string): value is PlanetViewTabsName => {
    return ['overview', 'structure', 'surface'].includes(value)
}
