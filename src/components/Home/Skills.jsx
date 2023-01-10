import React from 'react';


const Skills = ({ url, skill }) => {
  return (
    <>
    <section>

      
<div className="skills-container">
 <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={url} className="card-img-top" alt="React" />
      <div className="card-body">
        <h5 className="card-title">{skill}</h5>
      </div>
    </div>
  </div> 
 
    </div>
  </div>
  {/* <div className="col">
    <div className="card h-100">
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" className="card-img-top" alt="React" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div> */}
  {/* <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}


    

    </section>
    </>
  )
}

export default Skills