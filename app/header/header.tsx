import { HeaderMobileMenu } from './header-mobile-menu'
import { HeaderPlanetLinkList } from './header-planet-link-list'

export const Header = () => {
    return (
        <>
            <header className="tablet:flex-col tablet:h-auto tablet:gap-10 tablet:pt-8 tablet:pb-7 flex h-[70px] items-center justify-between border-b-1 border-b-white/20 px-6 py-4">
                <h1 className="font-antonio text-mainTitle uppercase ">The planets</h1>

                <HeaderMobileMenu />

                <nav className="tablet:block hidden">
                    <ul className="flex items-center gap-8">
                        <HeaderPlanetLinkList />
                    </ul>
                </nav>
            </header>
        </>
    )
}
