import axios from "axios";
import React, { useEffect, useState } from "react";
import Model from "../../components/Model";
import NavBar from "../../components/NavBar";
import Button  from "react-bootstrap/esm/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const YourReqList = () => {

  const [list, setList]=useState([]);

useEffect(() => {
  (async()=>{
      try {
          const response = await axios({
              method: 'get',
              url: 'http://localhost:4200/customer/customer_services',
              credentials: true,
              params: { 
                id: "y82azjHng0M0lV9Qw7AG3o1EeJA2"
            }
          });
          if(!response.error){
            console.log(response.data)
              setList(response.data);
          }else{
              console.log(response.error);
          }
      } catch (error) {
          console.log(error);
      }  
  }) ();
},[])

  return (
    <>
    <Header/>
    <div className="bg-project">
        <NavBar/>
        {list.map((element)=>(
          <Model title={element.name} id={element.request_id} type="request" acc="yes"/>
        ))}
    </div>
    <Button variant="primary" size="lg" active style={{position:"absolute" ,right:"20px",bottom:"20px"}}>
    <Link to="/create/request">Create</Link>
  </Button>
  <Footer/>
  </>
  );
}

export default YourReqList