import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ServiceDetails = () => {

  const [searchparams]=useSearchParams();
  const [list, setList] = useState([]);
  const [data, setData] = useState();

  const handler = async() => {
        try {
            const response = await axios({
                method: 'put',
                url: 'http://localhost:4200/'+searchparams.get("type"),
                credentials: true,
                params: { 
                    id: searchparams.get("id")
                }
            });
            if(!response.error){
                console.log(response.data);
                setList(response.data)
                console.log(list)
            }else{
                console.log(response.error)
            }
        } catch (error) {
            console.log(error);
        }  
  }

  useEffect(() => {
    (async()=>{
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:4200/service/details',
                credentials: true,
                params: { 
                    id: searchparams.get("id"),
                    type: searchparams.get("type")
                }
            });
            if(!response.error){
                console.log(response.data);
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
    <div >
        <NavBar/>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header style={{ backgroundColor: "#50577A", color: "white" }}>
            <Modal.Title>{list.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "#50577A", color: "white" }}>
            <h6>Discription:</h6>
            <p>{list.description}</p>
          </Modal.Body>


          <Modal.Body style={{ backgroundColor: "#50577A", color: "white" }}>
            <h6>status:</h6>
            {(list.status)? <p>Accepted By others</p>  : <p>Not Accepted</p>}
          </Modal.Body>

          <Modal.Body style={{ backgroundColor: "#50577A", color: "white" }}>
            <h6>Price:</h6>
            <p>{list.price}</p>
          </Modal.Body>

          <Modal.Footer style={{ backgroundColor: "#50577A", color: "white" }}>
            {(list.status)? null: <Button onClick={() => {handler()}} variant="success">Accept</Button>}
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default ServiceDetails