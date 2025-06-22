const separator = {
    camelcase: /(?=[A-Z])/,
    snakecase: '_',
    kebabcase: '-',
}

export class TextTransformSystem {
    public toUpper(text?: string): string | undefined {
        if (!text) {
            return undefined
        }
        return this.decode(text)
            .map(s => s.toUpperCase())
            .join(' ')
    }

    public toLower(text: string): string | undefined {
        if (!text) {
            return undefined
        }
        return this.decode(text)
            .map(s => s.toLowerCase())
            .join(' ')
    }

    public toCapitalized(text: string): string | undefined {
        if (!text) {
            return undefined
        }
        return this.decode(text)
            .map(s => `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`)
            .join(' ')
    }

    private decode(text: string): Array<string> {
        text = this.convertToSnakeCase(text, separator.camelcase)
        text = this.convertToSnakeCase(text, separator.snakecase)
        text = this.convertToSnakeCase(text, separator.kebabcase)
        return text.split('_')
    }

    private convertToSnakeCase(text: string, expression: RegExp | string) {
        return text.split(expression)
            .map(s => s.toLowerCase())
            .join('_')
    }
}

let textTransformSystem: TextTransformSystem
export const makeTextTransformSystem = (): TextTransformSystem => {
    if (!textTransformSystem) {
        textTransformSystem = new TextTransformSystem()
    }
    return textTransformSystem
}