import React from "react";
import Iframe from 'react-iframe';

function Verify() {
  return (
    <div>
   <Iframe url="https://verify.vote.org/?partner=111111&campaign=free-tools"
        width="450px"
        height="2000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}

export default Verify;