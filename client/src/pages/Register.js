import React from "react";
import Iframe from 'react-iframe';


function Register() {
  return (
    <div className="Center">
   <Iframe url="https://register.vote.org/?partner=111111&campaign=free-tools"
        width="450px"
        height="2000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}

export default Register;
