import {useState} from "react"

const Form = (props) => {    
    return (
        <div style={{textAlign: "center"}}>
            <input type={"text"} value={props.textField} onChange={props.updateTextField}></input>
            <button onClick={props.post}>Post</button>
        </div>
    )
}

export default Form