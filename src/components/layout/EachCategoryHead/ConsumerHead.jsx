import React from "react";

function ConsumerHead({ headName }) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-white pb-0 border-bottom border-warning border-3 ">
        <div className="container-fluid text-white">
          <a className="navbar-brand fs-2 fw-bolder ts-8 ms-5 " href="/">
            <span className="text-primary fs-3"> GAVE |</span>
            <span className="fs-3 ms-3">{headName}</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default ConsumerHead;
