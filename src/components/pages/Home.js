import React from "react";
import Iframe from 'react-iframe';

function Home() {
  return (
    <div>
   <Iframe url="https://register.vote.org/?partner=111111&campaign=free-tools"
        width="450px"
        height="4000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}

export default Home;
