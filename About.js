import React,{useState} from 'react'

export default function About(props) {
    
    
  return (
    <div classNameName='container my-3' style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={{color: props.mode==='dark'?'white':'black'}}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <strong>Features</strong>
       </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}>
        <strong>The Features of this App includes:.</strong> It shows text summary which includes the number of words and number of characters also converts text into uppercase or lowercase 
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    
    </div>
  )
}
