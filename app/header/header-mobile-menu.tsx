'use client'

import { Drawer } from '../components/drawer'
import { HeaderPlanetLink } from './header-planet-link'
import IconHamburger from '@/public/assets/icon-hamburger.svg'
import { useCallback, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { HeaderPlanetLinkList } from './header-planet-link-list'

export const HeaderMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleDrawer = useCallback(() => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }, [])

    return (
        <>
            <button type="button" onClick={handleToggleDrawer} className="tablet:hidden">
                <IconHamburger
                    className={twMerge(
                        'text-white',
                        isOpen && 'text-white/20',
                        'transition-colors'
                    )}
                />
            </button>

            <Drawer className="flex h-[calc(100%-70px)] flex-col justify-center" isOpen={isOpen}>
                <nav>
                    <ul className="overflow-y-auto">
                        <HeaderPlanetLinkList />
                    </ul>
                </nav>
            </Drawer>
        </>
    )
}
