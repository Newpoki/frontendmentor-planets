type Props = {
    label: string
    value: string
}

export const PlanetDataItem = ({ label, value }: Props) => {
    return (
        <li className="flex items-center justify-between border-1 border-white/20 px-6 py-3 tablet:flex-col tablet:items-start tablet:gap-1.5 tablet:px-4 tablet:pb-5 tablet:pt-4">
            <span className="text-[8px] font-[700] uppercase leading-[16px] tracking-[0.727px] text-white/50 desktop:text-h4">
                {label}
            </span>

            <span className="font-antonio text-[20px] uppercase leading-none tracking-[-0.75px] tablet:text-[24px] tablet:tracking-[-0.9px] desktop:text-[40px] desktop:tracking-[-1.5px]">
                {value}
            </span>
        </li>
    )
}
