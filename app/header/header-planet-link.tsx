import IconChevron from '@/public/assets/icon-chevron.svg'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { PlanetsName } from '../types'

type Props = {
    name: PlanetsName
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

export const HeaderPlanetLink = ({ name }: Props) => {
    const planetColor = planetsColor[name]

    return (
        <li className="pl-6 pr-8">
            <Link
                href={name}
                className="flex items-center justify-between border-b-1 border-b-white/10 py-5"
            >
                <div className="flex items-center gap-6">
                    <span className={twMerge('h-5 w-5 rounded-full', planetColor)} />
                    <span className="text-menu uppercase">{name}</span>
                </div>

                <IconChevron />
            </Link>
        </li>
    )
}
