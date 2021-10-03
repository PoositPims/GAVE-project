import React from "react";

function RegisterList({
  registerTitle,
  onChange,
  name,
  input,
  error,
  type,
  handleInputChange,
}) {
  return (
    <div>
      <div className="my-3">
        <p className="mb-0 fs-5">{registerTitle} :</p>
        <input
          type={type}
          // className="form-control "
          className={`form-control${error[name] ? " is-invalid" : ""}`}
          onChange={onChange}
          value={input}
          name={name}
        />
      </div>
    </div>
  );
}

export default RegisterList;
