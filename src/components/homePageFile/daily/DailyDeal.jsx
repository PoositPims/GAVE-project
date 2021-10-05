import React, { useState,useEffect } from "react";
import DailyDealCard from "./DailyDealCard";
import axios from "../../../config/axios";
import { NavLink, Link } from "react-router-dom";


function DailyDeal() {
  
const [productCard,setProductCard] = useState([])
console.log(productCard)
useEffect(()=>{
  const fetchProductCard = async() =>{
try{
  const res = await axios.get(`/products`)
  console.log(res.data)
  setProductCard(res.data.product)
  }catch(err){
    console.log(err)
  }
}
fetchProductCard()
},[])

  return (
    <>
      <div className="bg-white mt-3 align-items-center container-ping ">
        <h3 className="navbar-brand fs-4 fw-bolder py-0 my-0 px-4 ">
          ดีลแนะนำประจำวัน
        </h3>
      </div>
      <div className=" d-flex justify-content-evenly bg-white mt-2 align-items-center  container ">
      {
        productCard.map((item)=>{
          return <DailyDealCard key={item.id} productName={item.productName} productPrice={item.price}/>
        })
      }
</div>
      {/* <div className=" d-flex justify-content-evenly bg-white mt-2 align-items-center  container ">
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          // productName={productCard?.productname}
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
      </div> */}

      {/* <div className=" d-flex justify-content-evenly bg-white align-items-center container  ">
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
      </div> */}
      {/* <div className=" d-flex justify-content-evenly bg-white align-items-center container  ">
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
        <DailyDealCard
          productPic="paris.jpg"
          productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
          productPrice="40,000"
        />
      </div> */}
    </>
  );
}

export default DailyDeal;
