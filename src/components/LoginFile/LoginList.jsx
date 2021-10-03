import React from "react";

function LoginList({
  loginTitle,
  onChange,
  name,
  input,
  error,
  value,
  type,
  handleInputChange,
}) {
  console.log(error[name]);
  return (
    <div>
      <div className="my-3">
        <p className="mb-0 fs-5">{loginTitle} :</p>
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

export default LoginList;
