import Image from 'next/image'
import IconSource from '@/public/assets/icon-source.svg'
import { PlanetDataItem } from './planet-data-item'
import { PlanetViewLinkListItem } from './planet-view-link-list-item'
import { PlanetsName } from '@/app/types'
import { twMerge } from 'tailwind-merge'

const planetsSizes: { [planetName in PlanetsName]: string } = {
    mercury: 'w-[111px] tablet:w-[184px] desktop:w-[290px]',
    venus: 'w-[154px] tablet:w-[253px] desktop:w-[400px]',
    earth: 'w-[173px] tablet:w-[285px] desktop:w-[450px]',
    mars: 'w-[129px] tablet:w-[213px] desktop:w-[336px]',
    jupiter: 'w-[224px] tablet:w-[369px] desktop:w-[582px]',
    saturn: 'w-[256px] tablet:w-[422px] desktop:w-[666px]',
    uranus: 'w-[176px] tablet:w-[290px] desktop:w-[458px]',
    neptune: 'w-[173px] tablet:w-[285px] desktop:w-[450px]',
}
export default function Planet() {
    const planetSize = planetsSizes['earth']

    return (
        <article className="flex flex-1 flex-col px-6 pb-12 tablet:px-10 tablet:py-9 desktop:px-[165px] desktop:py-14">
            <div className="flex flex-1 flex-col desktop:grid desktop:grid-cols-[2fr_1fr]">
                <section className="flex flex-1 items-center justify-center p-4">
                    <div className={twMerge('relative aspect-square', planetSize)}>
                        <Image
                            src="/assets/planets/planet-earth.svg"
                            layout="fill"
                            objectFit="contain"
                            alt="Illustration of planet earth"
                        />
                    </div>
                </section>

                <section className="text-center tablet:text-left desktop:flex">
                    <div className="mb-7 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:gap-[70px] desktop:flex desktop:flex-col desktop:justify-center desktop:gap-10">
                        <div>
                            <h1 className="mb-4 font-antonio text-h2 uppercase tablet:mb-6 tablet:text-[48px] tablet:leading-[normal] desktop:text-h1">
                                Earth
                            </h1>

                            <p className="mb-[10px] text-[11px] leading-[22px] text-white desktop:text-body">
                                Third planet from the Sun and the only known planet to harbor life.
                                About 29.2% of Earth&apos;s surface is land with remaining 70.8% is
                                covered with water. Earth&apos;s distance from the Sun, physical
                                properties and geological history have allowed life to evolve and
                                thrive.
                            </p>

                            <p className="flex w-full items-center justify-center text-[12px] leading-6 text-white/50 tablet:justify-start">
                                <span>Source :&nbsp;</span>
                                <a
                                    className="mr-1 font-[700] underline"
                                    href="https://wiki.fr"
                                    target="_blank"
                                >
                                    Wikipedia
                                </a>
                                <IconSource />
                            </p>
                        </div>

                        <ul className="hidden tablet:flex tablet:flex-col tablet:gap-4 desktop:w-full">
                            <PlanetViewLinkListItem number={1} label="Overview" value="overview" />
                            <PlanetViewLinkListItem
                                number={2}
                                label="Internal structure"
                                value="structure"
                            />
                            <PlanetViewLinkListItem
                                number={3}
                                label="Surface geology"
                                value="surface"
                            />
                        </ul>
                    </div>
                </section>
            </div>

            <ul className="flex flex-col gap-2 tablet:grid tablet:grid-cols-4 tablet:gap-3">
                <PlanetDataItem label="Rotation time" value="0.99 days" />
                <PlanetDataItem label="Revolution time" value="365.26 days" />
                <PlanetDataItem label="Radius" value="6,371 km" />
                <PlanetDataItem label="Average Temp" value="16°c" />
            </ul>
        </article>
    )
}
