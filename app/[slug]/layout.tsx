import { MobileViewTabs } from './mobile-view-tabs'

type Props = {
    children: React.ReactNode
}

export default function PlanetLayout({ children }: Props) {
    return (
        <>
            <MobileViewTabs />
            {children}
        </>
    )
}
