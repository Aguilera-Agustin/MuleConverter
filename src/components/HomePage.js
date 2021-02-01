import React, { useState } from 'react'
import { transformData } from '../helpers/transformData'
import { CopyButton } from './CopyButton'
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
        height : "100%",
        resize:"none"
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
                <label className="form-check-label" htmlFor="variableConverter" >Variable Transform</label>
            </div>
            <div>
                <input className="form-check-input mx-1" type="checkbox" id="conditionalConverter"  value={options.conditionalConverter} onChange={() => handleChange("conditionalConverter")}/>
                <label className="form-check-label" htmlFor="conditionalConverter" >Conditional Transform</label>
            </div>
        </div>
        <form style={editorStyle} className="d-flex container justify-content-between" onSubmit = {handleSubmit} >
            
            <textarea className="form-control" placeholder="Put your Mule 3 code here." style={areaStyle} value={oldText} onChange={(e) => {setOldText(e.target.value)}}></textarea>
            

            <div className="align-self-center mx-2">
                
                <button type="submit" className="btn btn-primary my-3">CONVERT</button>
                
            </div>
            <textarea className="form-control" placeholder="Your Mule 4 code after conversion" style={areaStyle} value={newText} onChange={(e) => {setOldText(e.target.value)}}></textarea>
            
        </form>

        <div style={{width : "100%"}} className="d-flex container justify-content-between my-4" >
            
          
            <p>Tool designed and created 100% by <a href="https://www.linkedin.com/in/aguilera-agustin/">Agustin Aguilera</a>  </p> 
            <CopyButton className="btn btn-outline-primary"  text={newText} />  
        </div>
        </>
    )
}
