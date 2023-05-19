import React from 'react'
import "./singleclient.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SingleClient = () => {
    const [user , setUser] = useState()
   

    const navigate =useNavigate()
    const {id} = useParams();
    const role = window.localStorage.getItem("userRole");
    console.log("role//",role)
    
    useEffect(() =>{
    if (id) {
      getSingleUser(id)
    }
    
    },[id] )
    console.log("user", id);



    const getSingleUser = async (id)  => {
        const response = await axios.get(`http://localhost:3001/Client/searchCl/${id}`);
        if(response.status===200){
       setUser({ ...response.data })
       console.log("data" , response.data)
        }
      }
      console.log("USER**" , user)
      
      
    const handleSubmit = () => {
      // Prevent the default submit and page reload
    
    
  
      // Handle validations
      axios
        .put(`http://localhost:3001/Client/updatestatus/${id}`
        ,{ headers: {
          'Content-Type': 'multipart/form-data',
        },})
       
        .then(response => {
       
          toast.success('Compte Client  a été Desactivé avec Success !', {
            position: toast.POSITION.TOP_RIGHT
            
        });
    
          //navigate("/users")
          setTimeout(()=>navigate("/Client"),5000);
          console.log(response.Nom)
    
          
        
                      // Handle response
        })
       
    .catch(err =>{
      console.warn(err)
      toast.error('Email exist Already !', {
        position: toast.POSITION.TOP_RIGHT
    });
    })
    
      }


      return (
        <div className="single">
          <Sidebar />
          <div className="singleContainer">
            <Navbar />
            <div className="top">
              <div className="left">
             
                
                <h1 className="title">Information</h1>
                <div className="item">
                  <img
                    src={user && user.photoAvatar}
                    alt=""
                    className="itemImg"
                  />
                  <div className="details">
                    <h1 className="itemTitle">{user && user.Nom} {user && user.Prenom}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Nom:</span>
                      <span className="itemValue">{user && user.Nom}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">UserName:</span>
                      <span className="itemValue">{user && user.username}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Prenom:</span>
                      <span className="itemValue">{user && user.Prenom}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Nationalite:</span>
                      <span className="itemValue">{user && user.Nationalite}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">email:</span>
                      <span className="itemValue">
                      {user && user.email}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">DateNaissance:</span>
                      <span className="itemValue">{user && user.DateNaissance  }</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">gender:</span>
                      <span className="itemValue">{user && user.gender}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">role:</span>
                      <span className="itemValue">{user && user.role}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">{user && user.phone}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Adresse:</span>
                      <span className="itemValue">{user && user.address}</span>
                    </div>
                   
                    
                    <div className="detailItem">
                      <span className="itemKey">N° CIN:</span>
                      <span className="itemValue">{user && user.cnicNo}</span>
                    </div>

                    
                    {role === "Admin" || role === "Agentad" ? (
  <div className="deleteButton" onClick={() => handleSubmit()}>
    Desactivé Ce Compte
  </div>
) : null}
    
           
                  </div>
                 
                </div>
              </div>
              
              <div className="right">
                <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
              </div>
            </div>
            <ToastContainer />
            {/* <div className="bottom">
            <h1 className="title">Last Transactions</h1>
              <List/>
            </div> */}
          </div>
        </div>
      );
}

export default SingleClient