'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    children: React.ReactNode
    isOpen: boolean
}

const DrawerInternal = ({ children, className, isOpen }: Props) => {
    // Drawer should prevent the body from scrolling when opened
    useEffect(() => {
        const body = window.document.body

        isOpen ? (body.style.overflowY = 'hidden') : (body.style.overflowY = 'auto')
    }, [isOpen])

    return (
        <div
            className={twMerge(
                'fixed left-0 top-[70px] z-50 w-full -translate-x-full overflow-y-auto bg-space transition-transform',
                isOpen && 'translate-x-0',
                className
            )}
        >
            {children}
        </div>
    )
}

// As some elements higher in the page are sticky positioned, they overlaps on the drawer content (the mobile view current tab indicator)
// So we have to externalize the drawer inside the document body, so, the drawer is highr than anything else
// and so there is no more overlap
export const Drawer = (props: Props) => {
    const [hasPreRenderedServerSide, setHasPreRenderedServerSide] = useState(false)

    // Even if in a client component, this is pre rendered on the server
    // So we have to check if the component has already been pre rendered server side
    useEffect(() => {
        setHasPreRenderedServerSide(true)
    }, [])

    if (!hasPreRenderedServerSide) {
        return null
    }

    return createPortal(<DrawerInternal {...props} />, window.document.body)
}
