import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Corousel from "./Corousel.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
export default function Testimonial() {
  return (
    <>
    <Header />
    <Corousel/>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Testimonial</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Testimonial</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  col={10}
                  placeholder="Testimonial"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
      <Footer/>
    </>
  );
}
