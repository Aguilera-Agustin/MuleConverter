export const transformData = ( text ) => {

    const splittedText = text.split("\n")
    let myReturn = ""
    let latestCharacter = ""
    let comma = ""
    splittedText.forEach(element => {
        if(element.includes("when") && element.includes("otherwise")){
            const elementKey = (element.slice(0,element.indexOf(":")))
            const elementAction = (element.slice(element.indexOf(":")+1 , element.indexOf("when")))
            const elementCondition = (element.slice(element.indexOf("when")+4, element.indexOf("otherwise")))
            if(element[element.length-1] === ","){
                 latestCharacter = element.length-1
                 comma = ","
            }
            else{
                 latestCharacter = element.length
                 comma = ""
            }
            const elementElseAction = (element.slice(element.indexOf("otherwise")+9, latestCharacter))
            const converted = elementKey + ":" + " if( " + elementCondition  + " ) ( " + elementAction + ") else ( " + elementElseAction + " )" + comma + "\n"
            myReturn += converted
        }
        else{
            myReturn += element + "\n"
        }
       
    });
    return myReturn;
} 