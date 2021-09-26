import React from "react";

function RegisterList({
  loginTitle,
  onChange,
  name,
  input,
  error,
  handleInputChange,
}) {
  return (
    <div>
      <div className="my-3">
        <p className="mb-0 fs-5">{loginTitle} :</p>
        <input
          type="text"
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
