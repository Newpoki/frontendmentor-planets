import Image from 'next/image'
import { HeaderPlanetLink } from './header-planet-link'
import { Drawer } from '../components/drawer'
import { HeaderMobileMenu } from './header-mobile-menu'

export const Header = () => {
    return (
        <>
            <header className="flex h-[70px] items-center justify-between border-b-1 border-b-white/20 px-6 py-4">
                <h1 className="font-antonio text-mainTitle uppercase">The planets</h1>

                <HeaderMobileMenu />
            </header>
        </>
    )
}
