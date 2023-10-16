import { PlanetViewName, PlanetName } from '@/app/types'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
    number: number
    label: string
    value: PlanetViewName
    planetName: PlanetName
    view: PlanetViewName
}

const activeClassNames: { [planetName in PlanetName]: string } = {
    mercury: 'bg-mercury hover:bg-mercury border-mercury',
    venus: 'bg-venus hover:bg-venus border-venus',
    earth: 'bg-earth hover:bg-earth border-earth',
    mars: 'bg-mars hover:bg-mars border-mars',
    jupiter: 'bg-jupiter hover:bg-jupiter border-jupiter',
    saturn: 'bg-saturn hover:bg-saturn border-saturn',
    uranus: 'bg-uranus hover:bg-uranus border-uranus',
    neptune: 'bg-neptune hover:bg-neptune border-neptune',
}

export const PlanetViewLinkListItem = ({ number, label, value, planetName, view }: Props) => {
    const displayedNumber = `${number}`.padStart(2, '0')

    const activeLinkBgColor = activeClassNames[planetName]

    const isActiveLink = value === view

    return (
        <li>
            <Link
                className={twMerge(
                    'flex w-full items-center gap-4 border-1 border-white/20 px-5 py-2 text-menuSmall leading-[25px] tracking-[1.929px] transition-colors hover:border-gray-dark hover:bg-gray-dark desktop:gap-6 desktop:text-h3',
                    isActiveLink && activeLinkBgColor
                )}
                href={`/${planetName}/${value}`}
            >
                <span className="text-white/50">{displayedNumber}</span>
                <span className="uppercase">{label}</span>
            </Link>
        </li>
    )
}
