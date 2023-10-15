'use client'

import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
    children: React.ReactNode
    isOpen: boolean
}

export const Drawer = ({ children, className, isOpen }: Props) => {
    return (
        <div
            className={twMerge(
                'top-[70px] left-0 w-full -translate-x-full fixed bg-space transition-transform z-50',
                isOpen && 'translate-x-0',
                className
            )}
        >
            {children}
        </div>
    )
}
