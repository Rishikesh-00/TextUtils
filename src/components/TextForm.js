import React,{useState} from "react";
// const [text,setText]=useState(0);


export default function TextForm(props) {
  const [text,setText] = useState('');
    const handelUpClick=()=>{
      if (text.length===0)
      props.showAlert("Empty TextField","danger")
      else{
        
        setText(text.toUpperCase())
       props.showAlert("Converted to UpperCase","success")
      }
    }
    const handelowClick=()=>{
      if (text.length===0)
      props.showAlert("Empty TextField","danger")
      else{
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase","success")
      }
    }
    const handeSpaceClick=()=>{
      if (text.length===0)
      props.showAlert("Empty TextField","danger")
      else{
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed!","success")
      }
    }
    const handeclrClick=()=>{
      setText("")
      props.showAlert("Text is cleared!!","success")
    }
    const handecopyClick=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text is copied!!","success")
    }
    const handelOnChange=(_)=>{
        setText(_.target.value)
    }
    
  return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}}>
      
    <div className="container">
            <h1>{props.heading}</h1>
          <textarea autoFocus
          style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}
            className="form-control"
            id="MyBox"
            rows="8" value={text} onChange={handelOnChange} placeholder="Enter Text Here" 
          ></textarea> <br />
          <button type="button " className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to upper case</button>
          <button type="button " className="btn btn-primary mx-2" onClick={handelowClick}>Convert to lowercase case</button>
          <button type="button " className="btn btn-primary mx-2" onClick={handeSpaceClick}>Remove Extra Spaces</button>
          <button type="button " className="btn btn-primary mx-2" onClick={handecopyClick}>Copy text</button>
          <button type="button " className="btn btn-danger" onClick={handeclrClick}>Clear text</button>

        </div>
      <div className="container my-4">
        <h2>Your text summery</h2>
        <p>{text.trim().length===0?0:text.trim().split(" ").length} words and {text.length} characters</p>
        <p>{text.trim().length===0?0:0.08 * text.trim().split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in above field to preview"}</p>
      </div>
    </div>
    </>
  );
}
