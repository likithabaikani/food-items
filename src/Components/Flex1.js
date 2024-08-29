import React from 'react'


import Col from 'react-bootstrap/Col';

export default function Flex1() {
  return (
    <div>
      <container class="mt-3">
        < section className="row">
        <Col><img style={{width:'400px', height:'200px'}}
            src={require("../assests/banner5_1.jpg")}

            // class="img-fluid rounded-top"
            alt=""
        /></Col>
        <Col><img style={{width:'400px', height:'200px'}}
            src={require("../assests/banner5_1.jpg")}

            // class="img-fluid rounded-top"
            alt=""/></Col>
        <Col><img style={{width:'400px', height:'200px'}}
        src={require("../assests/banner5_1.jpg")}

        // class="img-fluid rounded-top"
        alt=""/></Col>
        </ section>
      </container>
    </div>
  )
}
