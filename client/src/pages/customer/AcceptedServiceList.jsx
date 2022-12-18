import axios from "axios";
import React, { useEffect, useState } from "react";
import Model from "../../components/Model";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AcceptedServiceList = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    (async()=>{
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:4200/customer/list/accepted_services',
                credentials: true,
                params: { 
                    id: "gfsGjbnjadTjshngfhtjhgj32"
                }
            });
            if(!response.error){
                console.log(response.data[0])
                console.log("AcceptedServiceList");
                setList(response.data)
                console.log(list)
            }else{
                console.log(response.error)
            }
        } catch (error) {
            console.log(error);
        }  
    }) ();
},[])  

  return (
    <div className="bg-project">
        <Header />
        <NavBar/>
        {list.map((element)=>(
          <Model title={element.name} id={element.id} type="services"/>
        ))}
        <Footer />
    </div>
  );
}

export default AcceptedServiceList  