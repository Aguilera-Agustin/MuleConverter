import React, { useState } from 'react'
import { transformData } from '../helpers/transformData'
import { Header } from './Header'

export const HomePage = () => {
    const editorStyle = {
        width : "100%",
        height : "70vh"
    }
    const areaStyle = {
        whiteSpace: "pre",
        overflowWrap: "normal",
        overflowX: "scroll",
        height : "100%"
    }
    const [oldText, setOldText] = useState("")
    const [newText, setNewText] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setNewText(transformData(oldText))
    }
    return (
        <>
        <Header/>
        <form style={editorStyle} className="d-flex container justify-content-between" onSubmit = {handleSubmit} >
            
            <textarea className="form-control" placeholder="Put your old code here." style={areaStyle} value={oldText} onChange={(e) => {setOldText(e.target.value)}}></textarea>
            <button type="submit" className="btn btn-primary mx-4 align-self-center"> CONVERT </button>
            <textarea className="form-control" placeholder="Leave a comment here" style={areaStyle} value={newText} onChange={(e) => {setOldText(e.target.value)}}></textarea>
            
        </form>
        
        </>
    )
}
