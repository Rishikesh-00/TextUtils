import React,{useState} from "react";
// const [text,setText]=useState(0);


export default function TextForm(props) {
    const handelUpClick=()=>{
        setText(text.toUpperCase())
    }
    const handelOnChange=(_)=>{
        setText(_.target.value)
    }
    const [text,setText] = useState('');
  return (
    <div>
        <div className="form-group">
            <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="MyBox"
            rows="8" value={text} onChange={handelOnChange} placeholder="Enter Text Here"
          ></textarea> <br />
          <button type="button" className="btn btn-primary" onClick={handelUpClick}>Convert to upper case</button>
        </div>
    </div>
  );
}
