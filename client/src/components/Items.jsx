import React from "react";
import Card from "react-bootstrap/Card";
// import CardGroup from 'react-bootstrap/CardGroup';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router";
import { createSearchParams } from "react-router-dom";
// import "./footer.css";

export default function Items(params) {

  const navigate = useNavigate();

  const handler = (id,type) => {
    navigate({
      pathname: '/service/details',
      search: createSearchParams({
          id: id,
          type: type,
      }).toString() 
    })}

  return (
  <>
        <Row xs={1} md={2} lg={4} className="g-5 item-absolute">
          <Col >
            <Card > 
              <Card.Body >
                <Card.Title style={{color:"#C69749"}}>{params.title}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer >
                <button className="btn btn-dark button-item" onClick={() => {handler(params.id, params.type)}}>Details</button>
              </Card.Footer>
            </Card>
          </Col>
      </Row>
    </>
  );
}