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
    const [options, setOptions] = useState({variableConverter: false, conditionalConverter : false})
    const handleSubmit = (e) => {
        e.preventDefault()
        setNewText(transformData(oldText, options))
    }
    const handleChange = (option) => {
        if(option === "variableConverter"){
            const res = {
                variableConverter : !options.variableConverter,
                conditionalConverter : options.conditionalConverter
            }
            setOptions(res)
        }
        else{
            const res = {
                variableConverter : options.variableConverter,
                conditionalConverter : !options.conditionalConverter
            }
            setOptions(res)
        }
    }
    return (
        <>
        <Header/>
        <div className="d-flex align-items-center justify-content-center my-2" style={{width : "100vw"}}>
            <div className = "mx-4">
                <input className="form-check-input mx-1" type="checkbox" id="variableConverter"  value={options.variableConverter} onChange={() => handleChange("variableConverter")}/>
                <label className="form-check-label" htmlFor="variableConverter" >Variable Transformation</label>
            </div>
            <div>
                <input className="form-check-input mx-1" type="checkbox" id="conditionalConverter"  value={options.conditionalConverter} onChange={() => handleChange("conditionalConverter")}/>
                <label className="form-check-label" htmlFor="conditionalConverter" >Conditional Transformation</label>
            </div>
        </div>
        <form style={editorStyle} className="d-flex container justify-content-between" onSubmit = {handleSubmit} >
            
            <textarea className="form-control" placeholder="Put your old code here." style={areaStyle} value={oldText} onChange={(e) => {setOldText(e.target.value)}}></textarea>
            

            <div className="align-self-center mx-2">
                
                <button type="submit" className="btn btn-primary my-3">CONVERT</button>
                
            </div>
            <textarea className="form-control" placeholder="Leave a comment here" style={areaStyle} value={newText} onChange={(e) => {setOldText(e.target.value)}}></textarea>
            
        </form>
        </>
    )
}
