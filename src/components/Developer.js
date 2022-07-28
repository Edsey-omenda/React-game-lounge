import React from 'react';
import pic from "../Assets/20201231_153057.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faLinkedin,faTwitter,faGithub} from "@fortawesome/free-brands-svg-icons";


export default function Developer(){
  

    return(
      <div className="p-3 mb-2 bg-info text-dark">
        <center>
        <div className='container'>Developer!
        <h1>Contact Details</h1>
        <h2>Hi, i'm James, a Software Engineer at Flatiron/Moringa School</h2>
        <p className="p">
        Email:<a href="omendajames0317@gmail.com">omendajames0317@gmail</a><br></br>
        Github:<a href="https://github.com/Edsey-omenda">Edsey-omenda
      </a>
      <br></br>
      Linkedin:<a href="https://www.linkedin.com/in/james-omenda-b5352418a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMjS%2BicXTSM%2B0P8FftAs2kw%3D%3D">James Omenda</a>
      </p>
      </div>
      <img src={pic} className="rounded-circle" alt="Wuod Nyagoro" style={{width : 25 + 'rem', height : 25 + 'rem'}}/>
      </center>
        </div>
    )
}
