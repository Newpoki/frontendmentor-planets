import Image from 'next/image'
import IconSource from '@/public/assets/icon-source.svg'
import { PlanetDataItem } from './planet-data-item'
import { PlanetViewLinkListItem } from './planet-view-link-list-item'

export default function Planet() {
    return (
        <article className="flex flex-1 flex-col pb-12">
            <section className="flex flex-1 items-center justify-center p-4">
                <div className="relative aspect-square w-[43%]">
                    <Image
                        src="/assets/planets/planet-earth.svg"
                        layout="fill"
                        objectFit="contain"
                        alt="Illustration of planet earth"
                    />
                </div>
            </section>

            <section className="px-6 text-center tablet:text-left">
                <div className="mb-7 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:gap-[70px]">
                    <div>
                        <h1 className="mb-4 font-antonio text-h2 uppercase tablet:mb-6 tablet:text-[48px] tablet:leading-[normal]">
                            Earth
                        </h1>

                        <p className="mb-[10px] text-[11px] leading-[22px] text-white/70">
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

                    <ul className="hidden tablet:flex tablet:flex-col tablet:gap-4">
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

                <ul className="flex flex-col gap-2 tablet:grid tablet:grid-cols-4 tablet:gap-3">
                    <PlanetDataItem label="Rotation time" value="0.99 days" />
                    <PlanetDataItem label="Revolution time" value="365.26 days" />
                    <PlanetDataItem label="Radius" value="6,371 km" />
                    <PlanetDataItem label="Average Temp" value="16°c" />
                </ul>
            </section>
        </article>
    )
}
