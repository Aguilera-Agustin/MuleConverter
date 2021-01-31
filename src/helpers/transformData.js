import { conditional } from "./conditional"

export const transformData = ( text, {variableConverter, conditionalConverter} ) => {

    const splittedText = text.split("\n")
    const finalText = conditional(splittedText, variableConverter, conditionalConverter)

    return finalText
} 