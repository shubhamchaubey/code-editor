import React from "react";
import banner from "../images/banner.jpg";

function Home() {
  return (
    <div className="container-fluid full">
      <div className="row">
        <div className="col-xs-12 col-md-6 text-light my-auto ml-5">
          <h1>Welcome to CodeSandbox</h1>
          <p>Select an option to get started</p>
          <h3 className="btn  btn-info mr-5"><a href="/compiler" className="text-light">Compiler</a></h3>
          <h3 className="btn btn-info"><a href="/web-editor" className="text-light">Web Editor</a></h3>
        </div>
        <div className="col-xs-12 col-md-5">
          <img src={banner} alt="banner" height="730px" width="700px"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
