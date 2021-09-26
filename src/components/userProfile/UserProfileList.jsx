import React from "react";

function UserProfileList({
  userProfileTitle,
  onChange,
  name,
  input,
  error,
  handleInputChange,
  userInfoProfile,
}) {
  return (
    <div>
      <div className="my-3">
        <p className="mb-0 fs-5 fw-bold text-primary">{userProfileTitle} :</p>
        {/* <input
          type="text"
          // className="form-control "
          className={`form-control${error[name] ? " is-invalid" : ""}`}
          onChange={onChange}
          value={input}
          name={name}
        /> */}
        <div className="d-flex ms-3 mt-2 row">
          <div className="px-2 py-2 col-10 border">{userInfoProfile}</div>
          <p className="col text-primary">แก้ไข</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileList;
