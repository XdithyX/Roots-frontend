import React, { useState, useEffect } from "react";
import "./PurchaiseDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
import MainLayout from "../../components/MainLayout/MainLayout";
import axiosInstance from "../../auth/authHandler";
import { toast } from "react-hot-toast";
function PurchaiseDetails() {
  let { item_id } = useParams();
  const [item, setItem] = useState({});
  const [userId,setUseid]=useState()
  useEffect(()=>{
    axiosInstance.get(`${baseUrl}/current-user/`).then((response)=>{
        setUseid(response.data.id)
    })
  })
  const purchaseItem=(e)=>{
    axiosInstance.post(`${baseUrl}/purchases/`,{
      date_of_purchase: "2022-01-12",
      item_foreign_key: item_id,
      user_foreign: userId
  }).then((response)=>{
    // console.log("purchase: ",response)
    if(response.status===201){
      toast.success("Succesfully placed the order!!");
    }
  })
  
}
  useEffect(() => {
    axios.get(`${baseUrl}/items/${item_id}/`).then(
      (res) => {
        setItem(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [item_id]);
  return (
    <MainLayout>
      <div className="purchaise__div">
        <div className="purchaise__details">
          <div className="purchiase__prd__img">
            <img src={item.item_image} alt="" className="item__img" />
          </div>
          <div className="purchaise__prd__desc">
            <p className="prd__details">{item.item_desc}</p>
          </div>
          <div className="purcahise__btn__div">
            <button className="purschaise__btn" onClick={()=>{
              purchaseItem()
            }}>Buy now</button>
            <button className="purschaise__btn">Collaborate</button>
            <button className="purschaise__btn">investment</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default PurchaiseDetails;
