import React, {useState} from 'react'

export default function Textform(props) {

    const handleonchange =(event)=>{
        setText(event.target.value);
    }

    const handleonclick=()=>{
        let newText=text.toUpperCase();
        setText(newText); 
    }

    const [text, setText]= useState('enter text here');
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Enter your text below</h2>
        <div className="mb-3">
            <textarea style={{backgroundColor: props.mode==='dark'?'grey':'light',color: props.mode==='dark'?'white':'black'}} className="form-control" id="mybox" rows="8" value={text} onChange={handleonchange}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleonclick}> convert</button>
    </div>
    <h3 className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>Words and characters of your text</h3>
    <h5 style={{color: props.mode==='dark'?'white':'black'}}>Words = {text.split(" ").filter((elements)=>{return elements.length!==0}).length}</h5>
    <h5 style={{color: props.mode==='dark'?'white':'black'}}>characters = {text.length}</h5>
    <h5 style={{color: props.mode==='dark'?'white':'black'}}>minutes to read this text = {0.008 * text.split(" ").filter((elements)=>{return elements.length!==0}).length} </h5>
    </>
  )
}
