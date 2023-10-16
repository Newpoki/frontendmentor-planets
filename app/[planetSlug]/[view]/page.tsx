import Image from 'next/image'
import IconSource from '@/public/assets/icon-source.svg'
import { PlanetDataItem } from './planet-data-item'

export default function Planet() {
    return (
        <article className="flex flex-1 flex-col pb-12">
            <section className="flex h-[33dvh] items-center justify-center">
                <div className="relative aspect-square w-[43%]">
                    <Image
                        src="/assets/planets/planet-earth.svg"
                        layout="fill"
                        objectFit="contain"
                        alt="Illustration of planet earth"
                    />
                </div>
            </section>

            <section className="px-6 text-center">
                <h1 className="mb-4 font-antonio text-h2 uppercase">Earth</h1>

                <p className="mb-[10px] text-[14px] leading-[22px] text-white/70">
                    Third planet from the Sun and the only known planet to harbor life. About 29.2%
                    of Earth&apos;s surface is land with remaining 70.8% is covered with water.
                    Earth&apos;s distance from the Sun, physical properties and geological history
                    have allowed life to evolve and thrive.
                </p>

                <p className="mb-8 flex w-full items-center justify-center text-[12px] leading-6 text-white/50">
                    <span>Source :&nbsp;</span>
                    <a className="mr-1 font-[700] underline" href="https://wiki.fr" target="_blank">
                        Wikipedia
                    </a>
                    <IconSource />
                </p>

                <ul className="flex flex-col gap-2 tablet:grid tablet:grid-cols-4">
                    <PlanetDataItem label="Rotation time" value="0.99 days" />
                    <PlanetDataItem label="Revolution time" value="365.26 days" />
                    <PlanetDataItem label="Radius" value="6,371 km" />
                    <PlanetDataItem label="Average Temp" value="16°c" />
                </ul>
            </section>
        </article>
    )
}
