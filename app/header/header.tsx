import Image from 'next/image'
import { HeaderPlanetLink } from './header-planet-link'
import { Drawer } from '../components/drawer'
import { HeaderMobileMenu } from './header-mobile-menu'

export const Header = () => {
    return (
        <>
            <header className="px-6 py-4 flex items-center justify-between border-b-1 border-b-white/20 h-[70px]">
                <h1 className="font-antonio uppercase text-mainTitle">The planets</h1>

                <HeaderMobileMenu />
            </header>
        </>
    )
}
