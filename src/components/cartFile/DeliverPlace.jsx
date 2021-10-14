import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../config/axios";

function DeliverPlace() {
  const { user } = useContext(AuthContext);
  const [buyerInfos, setBuyerInfos] = useState({});

  useEffect(() => {
    // console.log("fetch");
    const fetchSalesProduct = async () => {
      try {
        const res = await axios.get(`/users/${user.id}`);
        setBuyerInfos(res.data.user);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesProduct();
  }, []);

  return (
    <div>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-5 p-3 text-primary">สถานที่จัดส่ง</h4>
        <div className="d-flex justify-content-between">
          <div className="ms-3">
            {/* <p>นาย ปีเตอร์ แอมโบรสฟ</p> */}
            <p>{buyerInfos.firstName}</p>
            <p className="mb-0">{buyerInfos.telephone}</p>
          </div>
          <div>
            <p>{buyerInfos.address1}</p>
            <p className="mb-0">(ค่าเริ่มต้น)</p>
          </div>
          <p className="mb-0">แก้ไขที่อยู่</p>
        </div>
      </div>
    </div>
  );
}

export default DeliverPlace;
