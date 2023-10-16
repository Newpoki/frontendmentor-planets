export const capitalize = (value: string) => {
    const firstLetter = value.slice(0, 1)
    const otherLetters = value.slice(1, value.length)

    return `${firstLetter.toUpperCase()}${otherLetters}`
}
