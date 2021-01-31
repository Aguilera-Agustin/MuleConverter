import React from 'react'

export const CopyButton = ({text}) => {

    const copyOnClipboard = () => {
        {navigator.clipboard.writeText(text)}
    }
    return (
        <button className="btn btn-outline-primary" onClick={copyOnClipboard}>Copy</button>  
    )
}
