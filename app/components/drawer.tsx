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
                'absolute left-0 top-[70px] z-50 w-full -translate-x-full bg-space transition-transform',
                isOpen && 'translate-x-0',
                className
            )}
        >
            {children}
        </div>
    )
}
