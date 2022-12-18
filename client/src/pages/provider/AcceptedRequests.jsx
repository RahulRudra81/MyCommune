import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Model from "../../components/Model";
import NavBar from "../../components/NavBar";

const AcceptedRequestList = () => {

  const [list, setList] = useState([]);

  const getData = async()=>{
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4200/provider/list/accepted_requests',
            credentials: true,
            params: {
                id: "djfhhgjkshgkjhgughuiogh"
            }
        });
        if(!response.error){
            setList(response.data);
            console.log(list)
            
        }else{
            console.log(response.error);
        }
    } catch (error) {
        console.log(error);
    }  
}

  useEffect(() => {
    getData();
},[]) 

  return (
    <div>
        <NavBar/>
        {list.map((element)=>(
          <Model title={element.name} id={element.id} type="request"/>
        ))}
    </div>
  );
}

export default AcceptedRequestList