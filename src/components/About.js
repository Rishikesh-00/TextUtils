import React, {useState} from "react";

export default function About() {
  const [mystyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  });
  const [btntxt, setBtnTxt] = useState("Enable dark mode")
  const toggleStyle=()=>{
    // alert(mystyle.color)
    if(mystyle.color==='white'){
      setMyStyle({
        color:"black",
        backgroundColor:"white"
      })
      setBtnTxt("Enable dark mode")
    }
    else{
      setMyStyle({
        color:"white",
        backgroundColor:"black"
      })
      setBtnTxt("Enable light mode")
    }
  }


  return (
    <div className="container my-2 p-2 " style={mystyle} >
        <h1>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button style={mystyle}
              className="accordion-button" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            
          >
            <div className="accordion-body" style={mystyle} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in felis dignissim, imperdiet nulla vitae, condimentum nulla. Ut
              scelerisque a nisl sit amet facilisis. Etiam blandit iaculis
              tellus, vitae condimentum leo congue a. Vivamus in vehicula massa.
              Pellentesque libero libero, commodo lacinia volutpat non,
              tincidunt at lectus. Maecenas ipsum turpis, viverra vitae lacus
              eu, fringilla ultricies erat. Aenean hendrerit maximus sodales.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button  style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Quisque sapien augue, ornare id leo a, tristique elementum justo.
              Praesent non nulla sagittis, sollicitudin justo id, varius erat.
              Nunc sed pharetra nisl. Cras et suscipit felis, in lacinia sapien.
              Integer venenatis sagittis massa, eu eleifend nibh venenatis in.
              Pellentesque a aliquet urna. Curabitur tortor metus, ultrices sed
              mi at, sagittis imperdiet turpis. Suspendisse nec luctus nunc.
              Fusce in arcu quis lacus mollis ultrices.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Praesent nec ipsum scelerisque dui condimentum pellentesque eu at
              lectus. Vivamus purus purus, bibendum in vestibulum ac, pharetra
              sit amet sapien. Nunc luctus, orci vel luctus cursus, nibh nisl
              ullamcorper ipsum, eu malesuada arcu augue id nisi. In auctor mi
              ac ante tincidunt tincidunt.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
      <button  type="button " className="btn btn-secondary " onClick={toggleStyle}>{btntxt}</button>
      </div>
    </div>
  );
}
