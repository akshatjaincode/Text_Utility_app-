import React,{useState} from 'react'


export default function Textform(props) {
  
    function handleOnChange(event) {
        console.log('uppercase clicked');
        setText(event.target.value);
    }
    function handleClearClick(event) {
      let new1Text= '';
        setText(new1Text)
  }
    
const [text, setText] = useState('Enter Text');
  return (
    <>
    <div>
<div className="mb-3 my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
  <label for="Textarea" className="form-label" >ENTER YOUR TASK HERE.</label>
  <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="Textarea" rows="8"></textarea>
</div>
<br/>
<button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>

    </div>
    
    </> 
    
  )
}
