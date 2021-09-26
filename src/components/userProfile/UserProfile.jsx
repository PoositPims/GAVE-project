import React from "react";
import HeaderUserProfile from "../layout/HeaderUserProfile";
import UserProfileContainer from "./UserProfileContainer";
import Footer from "../layout/Footer";

function UserProfile() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <HeaderUserProfile />
        <UserProfileContainer />
        <Footer />
      </div>
    </>
  );
}

export default UserProfile;
