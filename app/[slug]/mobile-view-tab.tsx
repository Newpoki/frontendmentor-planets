import { useParams, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { PlanetsName } from '../types'
import Link from 'next/link'
import { PlanetViewTabIndicatorData, PlanetViewTabsName } from './types'
import { twJoin } from 'tailwind-merge'

type Props = {
    name: PlanetViewTabsName
    setCurrentPlanetViewTabIndicatorData: (data: PlanetViewTabIndicatorData) => void
}

export const MobileViewTab = ({ name, setCurrentPlanetViewTabIndicatorData }: Props) => {
    const { slug } = useParams<{ slug: PlanetsName }>()
    const searchParams = useSearchParams()

    const ref = useRef<HTMLLIElement>(null)

    const view = searchParams.get('view')

    const isActiveTab = view === name || (view == null && name === 'overview')

    // Update the current link indicator with the current found link
    const handleChangeCurrentLinkIndicatorData = useCallback(() => {
        if (ref.current != null && isActiveTab) {
            const clientRect = ref.current.getBoundingClientRect()
            const name = ref.current.getAttribute('data-attribute-name')

            if (name == null) {
                return
            }

            setCurrentPlanetViewTabIndicatorData({
                left: clientRect.left,
                width: clientRect.width,
                name: name as PlanetViewTabsName,
                planetName: slug,
                bottom: clientRect.y + clientRect.height,
            })
        }
    }, [isActiveTab, setCurrentPlanetViewTabIndicatorData, slug])

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
        <li ref={ref} data-attribute-name={name}>
            <Link href={`/${slug}?view=${name}`} className="flex items-center justify-between py-5">
                <span
                    className={twJoin(
                        'text-menuSmall uppercase text-white/50',
                        isActiveTab && 'text-white/100'
                    )}
                >
                    {name}
                </span>
            </Link>
        </li>
    )
}
