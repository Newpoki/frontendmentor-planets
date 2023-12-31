'use client'

import { Drawer } from '../components/drawer'
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
            <button
                type="button"
                onClick={handleToggleDrawer}
                className="tablet:hidden"
                aria-label="toggle mobile menu"
            >
                <IconHamburger
                    className={twMerge(
                        'text-white',
                        isOpen && 'text-white/20',
                        'transition-colors'
                    )}
                />
            </button>

            <Drawer className="flex h-[calc(100dvh-70px)] flex-col justify-center" isOpen={isOpen}>
                <nav className="h-full">
                    <ul className="overflow-y-auto" onClick={handleToggleDrawer}>
                        <HeaderPlanetLinkList />
                    </ul>
                </nav>
            </Drawer>
        </>
    )
}
