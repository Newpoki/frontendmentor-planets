'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Planet } from './types'
import { PlanetName, PlanetViewName } from '@/app/types'
import { useCallback, useEffect, useMemo, useState } from 'react'

type Props = {
    planet: Planet
    view: PlanetViewName
}

const planetsSizes: { [planetName in PlanetName]: string } = {
    mercury: 'w-[111px] tablet:w-[184px] desktop:w-[290px]',
    venus: 'w-[154px] tablet:w-[253px] desktop:w-[400px]',
    earth: 'w-[173px] tablet:w-[285px] desktop:w-[450px]',
    mars: 'w-[129px] tablet:w-[213px] desktop:w-[336px]',
    jupiter: 'w-[224px] tablet:w-[369px] desktop:w-[582px]',
    saturn: 'w-[256px] tablet:w-[422px] desktop:w-[666px]',
    uranus: 'w-[176px] tablet:w-[290px] desktop:w-[458px]',
    neptune: 'w-[173px] tablet:w-[285px] desktop:w-[450px]',
}

const PARALLAX_COEFFICIENT = 0.027

export const PlanetIllustrations = ({ planet, view }: Props) => {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 })

    const displayedIllustration = useMemo(() => {
        switch (view) {
            case 'overview':
            case 'surface':
                return planet.images.planet
            case 'structure':
                return planet.images.internal
        }
    }, [planet.images.internal, planet.images.planet, view])

    const planetSize = planetsSizes[planet.id]

    const handleMouseMove = useCallback((event: MouseEvent) => {
        setMouseCoordinates({ x: event.clientX, y: event.clientY })
    }, [])

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [handleMouseMove])

    return (
        <section
            className="relative flex flex-1 items-center justify-center p-5"
            style={{
                transform: `translate(${mouseCoordinates.x * PARALLAX_COEFFICIENT}px, ${
                    mouseCoordinates.y * PARALLAX_COEFFICIENT
                }px)`,
            }}
        >
            <div className={twMerge('relative aspect-square', planetSize)}>
                <Image
                    src={`/assets/planets/${displayedIllustration}`}
                    fill
                    alt={`Illustration of planet ${planet.name}`}
                />
            </div>

            <div
                className={twMerge(
                    'absolute top-[590px] hidden h-[200px] w-[163px]',
                    view === 'surface' && 'desktop:block'
                )}
                style={{
                    transform: `translate(${-25 + mouseCoordinates.x * PARALLAX_COEFFICIENT}px, ${
                        -25 + mouseCoordinates.y * PARALLAX_COEFFICIENT
                    }px)`,
                }}
            >
                <Image
                    src={`/assets/planets/${planet.images.geology}`}
                    fill
                    alt={`Illustration of the planet ${planet.name}'s surface`}
                />
            </div>
        </section>
    )
}
