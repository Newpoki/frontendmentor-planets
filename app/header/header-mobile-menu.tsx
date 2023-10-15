'use client'

import { Drawer } from '../components/drawer'
import { HeaderPlanetLink } from './header-planet-link'
import IconHamburger from '@/public/assets/icon-hamburger.svg'
import { useCallback, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const HeaderMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleDrawer = useCallback(() => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }, [])

    return (
        <>
            <button type="button" onClick={handleToggleDrawer}>
                <IconHamburger
                    className={twMerge(
                        'text-white',
                        isOpen && 'text-white/20',
                        'transition-colors'
                    )}
                />
            </button>

            <Drawer className="flex h-[calc(100%-70px)] flex-col justify-center" isOpen={isOpen}>
                <ul className="overflow-y-auto">
                    <HeaderPlanetLink name="mercury" />
                    <HeaderPlanetLink name="venus" />
                    <HeaderPlanetLink name="earth" />
                    <HeaderPlanetLink name="mars" />
                    <HeaderPlanetLink name="jupiter" />
                    <HeaderPlanetLink name="saturn" />
                    <HeaderPlanetLink name="uranus" />
                    <HeaderPlanetLink name="neptune" />
                </ul>
            </Drawer>
        </>
    )
}
