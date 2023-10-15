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
        <li className="tablet:px-0 pl-6 pr-8">
            <Link
                href={name}
                className="tablet:border-0 tablet:py-0 flex items-center justify-between border-b-1 border-b-white/10 py-5"
            >
                <div className="flex items-center gap-6">
                    <span className={twMerge('tablet:hidden h-5 w-5 rounded-full', planetColor)} />
                    <span className="tablet:text-white/75 tablet:hover:text-white text-menu uppercase text-white">
                        {name}
                    </span>
                </div>

                <IconChevron className="tablet:hidden" />
            </Link>
        </li>
    )
}
