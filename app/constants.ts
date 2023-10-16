export const PLANETS_NAME = [
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune',
] as const

export const PLANETS_VIEWS_NAME = ['overview', 'structure', 'surface'] as const

export const PLANETS_COLORS = {
    mercury: { normal: 'bg-mercury', soft: 'bg-mercury-soft' },
    venus: { normal: 'bg-venus', soft: 'bg-venus-soft' },
    earth: { normal: 'bg-earth', soft: 'bg-earth-soft' },
    mars: { normal: 'bg-mars', soft: 'bg-mars-soft' },
    jupiter: { normal: 'bg-jupiter', soft: 'bg-jupiter-soft' },
    saturn: { normal: 'bg-saturn', soft: 'bg-saturn-soft' },
    uranus: { normal: 'bg-uranus', soft: 'bg-uranus-soft' },
    neptune: { normal: 'bg-neptune', soft: 'bg-neptune-soft' },
} as const
