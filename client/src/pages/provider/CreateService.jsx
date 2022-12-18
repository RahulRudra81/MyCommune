import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar"; 
import axios from "axios";

let customStyles = {
  resize: "none",
  width: "300px"
};

const CreateService = ()=>{

    const [name, setName] = useState();
    const [description, setDes] = useState();
    const [tags, setTags] = useState();
    const [price, setPrice] = useState();
    const [info, setInfo] = useState({name:"", description:"", price:0, tags:""})

    const change = (e) => {
        setInfo({...info, [e.target.name]: e.target.value}) 
    }

    const handler = async () => {
        try {
            console.log(name)
            const response = await axios({
                method: "post",
                url: "http://localhost:4200/provider/create_service",
                credentials: true,
                data: {
                    name: info.name,
                    description: info.description,
                    tags: info.tags,
                    price: info.price,
                    id: "gfsGjbnjadTjshngfhtjhgj32"
                }
            })
            alert(response.data)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <Header/>
    <NavBar/>
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog style={{ backgroundColor:"#474e52"}}>
      <Modal.Header>
        <Modal.Title>Create Request</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form action="" id="form">
            
            <input
            onChange={change}
              name="name"
              placeholder="Title of the Service"
              style={customStyles}
              value={name}
              required
            />
            <br />
            <br />
            
            <textarea
            onChange={change}
              name="description"
              placeholder="Description"
              rows="4"
              style={customStyles}
              value={description}
              required
            />
              <br />
            <input
            onChange={change}
              name="tags"
              placeholder="Type of the service"
              style={customStyles}
              value={tags}
              required
            />
          <br /> < br />
          <input
          onChange={change}
              name="price"
              placeholder="price of the service"
              style={customStyles}
              value={price}
              required
            />
            
          </form>
      </Modal.Body>

      <Modal.Footer>
      <button onClick={() => {handler()}} className="btn btn-primary">Add Request</button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  <Footer />
  </>
  );
}

export default CreateService;   