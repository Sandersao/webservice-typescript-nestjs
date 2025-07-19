export const transformToArray = <T = any>(value: T): T[] => {
    if (Array.isArray(value)) {
        return value
    }

    if (typeof value == "object") {
        return Array.from(value as any)
    }

    if (typeof value != 'number') {
        return [value]
    }

    return [value]
}