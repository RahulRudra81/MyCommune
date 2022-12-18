import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Items from "../../components/Items";
import NavBar from "../../components/NavBar";

const ServiceList = () => {

  const [list, setList] = useState([])

    useEffect (() => {
      (async()=>{
        const response = await axios({
          method: 'get',
          url: 'http://localhost:4200/customer/services',
        });   
        setList(response.data);
        console.log(response.data);
      }) ()
    },[])
  

  return (
    <div className="bg-project">
      <Header title="Service Page" />
        <NavBar/>
        {list.map((element)=>(
          <Items title={element.name} id={element.id} type="services"/>
        ))}
        <Footer />
    </div>
  );
}

export default ServiceList