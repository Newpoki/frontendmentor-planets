'use client'

import IconChevron from '@/public/assets/icon-chevron.svg'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { PlanetsName } from '../types'
import { useCallback, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import { HeaderPlanetLinkIndicatorData } from './types'

type Props = {
    name: PlanetsName
    setCurrentLinkIndicatorData?: (data: HeaderPlanetLinkIndicatorData) => void
}

const planetsColor: { [planetName in PlanetsName]: string } = {
    mercury: 'bg-mercury-soft',
    venus: 'bg-venus-soft',
    earth: 'bg-earth-soft',
    mars: 'bg-mars-soft',
    jupiter: 'bg-jupiter-soft',
    saturn: 'bg-saturn-soft',
    uranus: 'bg-uranus-soft',
    neptune: 'bg-neptune-soft',
}

export const HeaderPlanetLink = ({ name, setCurrentLinkIndicatorData }: Props) => {
    const { planetSlug } = useParams<{ planetSlug: PlanetsName }>()

    const ref = useRef<HTMLLIElement>(null)

    const planetColor = planetsColor[name]

    const isCurrentRoute = planetSlug === name

    // Update the current link indicator with the current found link
    const handleChangeCurrentLinkIndicatorData = useCallback(() => {
        if (ref.current != null && isCurrentRoute) {
            const clientRect = ref.current.getBoundingClientRect()
            const name = ref.current.getAttribute('data-attribute-name')

            if (name == null || setCurrentLinkIndicatorData == null) {
                return
            }

            setCurrentLinkIndicatorData({
                left: clientRect.left,
                width: clientRect.width,
                name: name as PlanetsName,
            })
        }
    }, [isCurrentRoute, setCurrentLinkIndicatorData])

    useEffect(() => {
        handleChangeCurrentLinkIndicatorData()
    }, [handleChangeCurrentLinkIndicatorData])

    // Update the current link indicator data on resize
    useEffect(() => {
        window.addEventListener('resize', handleChangeCurrentLinkIndicatorData)

        return () => {
            window.removeEventListener('resize', handleChangeCurrentLinkIndicatorData)
        }
    }, [handleChangeCurrentLinkIndicatorData])

    return (
        <li className="pl-6 pr-8 tablet:px-0" ref={ref} data-attribute-name={name}>
            <Link
                href={`/${name}/overview`}
                className="flex items-center justify-between border-b-1 border-b-white/10 py-5 tablet:border-0 tablet:py-0 desktop:py-[30px]"
            >
                <div className="flex items-center gap-6">
                    <span className={twMerge('h-5 w-5 rounded-full tablet:hidden', planetColor)} />
                    <span
                        className={twMerge(
                            'text-menu uppercase text-white transition-colors tablet:text-[11px] tablet:font-[700] tablet:leading-[25px] tablet:tracking-[1px] tablet:text-white/75 tablet:hover:text-white',
                            isCurrentRoute && 'tablet:text-white'
                        )}
                    >
                        {name}
                    </span>
                </div>

                <IconChevron className="tablet:hidden" />
            </Link>
        </li>
    )
}
