import React, { useState,useEffect,useContext } from "react";
import UserProfileList from "./UserProfileList";
import { isEmpty } from "../services/validateService";
import { NavLink } from "react-router-dom";
import axios from "../../config/axios";
import { AuthContext } from "../../contexts/AuthContext";

function UserProfileContainer() {
  // const [name, setName] = useState("");
  const { user } = useContext(AuthContext);
  console.log(user)
  const [usersInfos, setUsersInfos] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    email: ""
  })
  
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });

  useEffect(()=>{
    const fetchUserInfo = async() =>{
      try{
        const res = await axios.get(`/users/${user.id}`)
        setUsersInfos(res.data.user)
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
    fetchUserInfo()
  },[])

  

  // const handleInputChange = (e) => {
  //   if (e.target.value === "") {
  //     // setError("กรุณากรอกข้อมูล");
  //     setError((curErr) => ({
  //       ...curErr,
  //       value: validateName(e.target.value),
  //     }));
  //     // ............................แก้บรรทัดนี้................................
  //   } else {
  //     setError("");
  //   }
  //   // console.log(e.target.value);
  //   // console.log(e.target.name);
  //   setInput((current) => ({ ...current, [e.target.name]: e.target.value }));
  // };
  // อ้างถึง key ที่เป็น object
  return (
    <>
      <div className="bg-primary">
        <p className="text-center text-white fs-4 mt-3">
          ยินดีต้อนรับเข้าสู่ GAVE
        </p>
        <div className="bg-white my-3 border rounded-3 container-60 border border-warning border-3">
          <div className="mt-3 col">
            <UserProfileList
              userProfileTitle="ชื่อจริง"         
              name="firstName"
              error={error}
              userInfoProfile={usersInfos?.firstName}
            />
            <UserProfileList
              userProfileTitle="นามสกุล"
              name="lastName"
              error={error}
              userInfoProfile={usersInfos?.lastName}
            />
            <UserProfileList
              userProfileTitle="เบอร์โทรศัพท์"
              name="telephone"
              error={error}
              userInfoProfile={usersInfos?.telephone}
            />
            <UserProfileList
              userProfileTitle="อีเมล"
              name="email"
              error={error}
              userInfoProfile={usersInfos?.email}
            />
          </div>
          <div className="text-center mb-3">
            <NavLink to="/">
              <button
                type="button"
                className="btn btn-warning w-20 text-center  "
              >
                กลับสู่หน้าหลัก
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileContainer;
