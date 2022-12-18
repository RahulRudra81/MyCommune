import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Items from "../../components/Items";
import NavBar from "../../components/NavBar";
import Button from 'react-bootstrap/Button';

const RequestList = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    (async()=>{
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:4200/provider/requests',
                credentials: true,
            });
            if(!response.error){
                setList(response.data);
                console.log(list);
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
    <Header />
    <div className="bg-project">
    <NavBar/>
    {list.map((element)=>(
      <Items title={element.name} id={element.id} type="request"/>
    ))}
</div>

</>
  )
}

export default RequestList