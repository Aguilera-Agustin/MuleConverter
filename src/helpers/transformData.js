import { conditional } from "./conditional"

export const transformData = ( text ) => {

    const splittedText = text.split("\n")
    const finalText = conditional(splittedText, false, false)

    return finalText
} 