import 'server-only'

import { PlanetViewName } from './types'

export const getIsValidViewTab = (value: string): value is PlanetViewName => {
    return ['overview', 'structure', 'surface'].includes(value)
}
