import React ,{useState,useEffect}from 'react'
import './PurchaiseDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../../utils/urls';
import MainLayout from '../../components/MainLayout/MainLayout';
function PurchaiseDetails() {
  let {item_id}=useParams();
  const[item,setItem]=useState({})
  useEffect(() => {
    axios.get(`${baseUrl}/items/${item_id}/`).then((res)=>{
      setItem(res.data);
    },(error)=>{
      console.log(error)
    })
  }, [item_id])
  return (
    <MainLayout>
    <div className='purchaise__div'>
        <div className="purchaise__details">
            <div className="purchiase__prd__img">
                <img src={item.item_image} alt="" />
            </div>
            <div className="purchaise__prd__desc">
                <p className='prd__details'>{item.item_desc}</p>
            </div>
            <button className='purschaise__btn'>Buy now</button>
            <button className='purschaise__btn'>Collaborate</button>
            <button className='purschaise__btn'>investment</button>
        </div>
    </div>
    </MainLayout>
  )
}

export default PurchaiseDetails