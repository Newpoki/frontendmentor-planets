import IconSource from '@/public/assets/icon-source.svg'
import { PlanetDataItem } from './planet-data-item'
import { PlanetViewLinkListItem } from './planet-view-link-list-item'
import { getPlanetData } from './get-planet-data'
import { getIsValidPlanetName } from '@/app/utils/get-is-valid-planet-name'
import { getIsValidPlanetViewName } from '@/app/utils/get-is-valid-planet-view-name'
import { notFound } from 'next/navigation'
import { PlanetIllustrations } from './planet-illustrations'
import { capitalize } from '@/app/utils/capitalize'
import { PLANETS_NAME, PLANETS_VIEWS_NAME } from '@/app/constants'

type Props = {
    params: {
        planetSlug: string
        view: string
    }
}

export async function generateMetadata({ params }: Props) {
    const { planetSlug } = params

    const isValidPlanetName = getIsValidPlanetName(planetSlug)

    if (!isValidPlanetName) {
        return null
    }

    return {
        title: `Planets facts - ${capitalize(planetSlug)}`,
        description: `Get some facts about ${planetSlug}`,
    }
}

type GeneratedStaticParams = Array<Props['params']>

export function generateStaticParams() {
    // Generate static params so next can build static routes for these files
    return PLANETS_NAME.reduce<GeneratedStaticParams>((acc, planetName) => {
        const allPlanetViews = PLANETS_VIEWS_NAME.map((viewName) => ({
            planetSlug: planetName,
            view: viewName,
        }))

        acc.push(...allPlanetViews)

        return acc
    }, [])
}

export default function Planet({ params }: Props) {
    const { planetSlug, view } = params

    if (!getIsValidPlanetName(planetSlug) || !getIsValidPlanetViewName(view)) {
        notFound()
    }

    const planetData = getPlanetData(planetSlug)

    const {
        id,
        name,
        revolution,
        rotation,
        radius,
        temperature,
        geology,
        images,
        overview,
        structure,
    } = getPlanetData(planetSlug)

    const mappedData = {
        overview: {
            content: overview.content,
            source: overview.source,
            image: images.planet,
        },
        structure: {
            content: structure.content,
            source: structure.source,
            image: images.internal,
        },
        surface: {
            content: geology.content,
            source: geology.source,
            image: images.geology,
        },
    } as const

    return (
        <article className="flex flex-1 flex-col px-6 pb-12 tablet:px-10 tablet:py-9 desktop:px-[165px] desktop:py-14">
            <div className="flex flex-1 flex-col desktop:grid desktop:grid-cols-[2fr_1fr]">
                <PlanetIllustrations planet={planetData} view={view} />

                <section className="text-center tablet:text-left desktop:flex">
                    <div className="mb-7 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:gap-[70px] desktop:flex desktop:flex-col desktop:justify-center desktop:gap-10">
                        <div>
                            <h1 className="mb-4 font-antonio text-h2 uppercase tablet:mb-6 tablet:text-[48px] tablet:leading-[normal] desktop:text-h1">
                                {name}
                            </h1>

                            <p className="mb-[10px] text-[11px] leading-[22px] text-white desktop:text-body">
                                {mappedData[view].content}
                            </p>

                            <p className="flex w-full items-center justify-center text-[12px] leading-6 text-white/50 tablet:justify-start">
                                <span>Source :&nbsp;</span>
                                <a
                                    className="mr-1 font-[700] underline"
                                    href={mappedData[view].source}
                                    target="_blank"
                                >
                                    Wikipedia
                                </a>
                                <IconSource />
                            </p>
                        </div>

                        <ul className="hidden tablet:flex tablet:flex-col tablet:gap-4 desktop:w-full">
                            <PlanetViewLinkListItem
                                number={1}
                                label="Overview"
                                value="overview"
                                planetName={id}
                                view={view}
                            />
                            <PlanetViewLinkListItem
                                number={2}
                                label="Internal structure"
                                value="structure"
                                planetName={id}
                                view={view}
                            />
                            <PlanetViewLinkListItem
                                number={3}
                                label="Surface geology"
                                value="surface"
                                planetName={id}
                                view={view}
                            />
                        </ul>
                    </div>
                </section>
            </div>

            <ul className="flex flex-col gap-2 tablet:grid tablet:grid-cols-4 tablet:gap-3">
                <PlanetDataItem label="Rotation time" value={rotation} />
                <PlanetDataItem label="Revolution time" value={revolution} />
                <PlanetDataItem label="Radius" value={radius} />
                <PlanetDataItem label="Average Temp" value={temperature} />
            </ul>
        </article>
    )
}
