type Props = {
    label: string
    value: string
}

export const PlanetDataItem = ({ label, value }: Props) => {
    return (
        <li className="flex items-center justify-between border-1 border-white/20 px-6 py-3">
            <span className="text-[8px] font-[700] uppercase leading-[16px] tracking-[0.727px] text-white/50">
                {label}
            </span>

            <span className="font-antonio text-[20px] uppercase leading-none tracking-[-0.75px]">
                {value}
            </span>
        </li>
    )
}
