import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

function Model(params) {

  const navigate = useNavigate();

  const handler = (id,type) => {
    navigate({
      pathname: '/service/details',
      search: createSearchParams({
          id: id,
          type: type,
      }).toString() 
    })}

  const del = async (id) =>{
    try {
      const response = await axios({
        method: 'delete',
        url: 'http://localhost:4200/delete/'+params.type,
        credentials: true,
        params:{
          id: id,
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog dialogClassName="Model-css">
        <Modal.Header className="model-css">
          <Modal.Title>{params.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="model-css">
          <p>Modal body text goes here Modal body text goes here.</p>
          <Button onClick={() => {handler(params.id,params.type)}} variant="primary">Details</Button>{' '}
          {(params.acc)? <Button variant="info">Edit</Button>: null}
          {(params.acc)? <Button onClick={() => {del(params.id)}} variant="danger">Delete</Button>: null}
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default Model;   