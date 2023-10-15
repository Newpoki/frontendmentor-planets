'use client'

import Image from 'next/image'
import { Drawer } from '../components/drawer'
import { HeaderPlanetLink } from './header-planet-link'
import iconHamburger from '@/public/assets/icon-hamburger.svg'
import { useCallback, useState } from 'react'

export const HeaderMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleDrawer = useCallback(() => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }, [])

    return (
        <>
            <Image
                src={iconHamburger}
                alt="Hamburger icon to toggle menu opening state"
                onClick={handleToggleDrawer}
            />

            <Drawer
                className="min-h-[calc(100%-70px)] flex flex-col justify-center"
                isOpen={isOpen}
            >
                <ul>
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
