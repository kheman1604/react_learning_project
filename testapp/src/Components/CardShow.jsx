import React, { useState,useEffect} from "react";
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function CardShow() {

    var [jsonAry, fillJsonArray] = useState([{"fn":"Aman"}]);
    
    useEffect(async ()=>{
        var url="api/react/fetchAll";
          var response=await axios.post(url);
           fillJsonArray(response.data);
    },[])
 return (
    <>
      <Container>
        <Row>
        {jsonAry.map((obj) => {
              return (
                <Col md={3}>
                <Card >
                  <Card.Body>
                    <Card.Title>{obj.uid}</Card.Title>
                    <Card.Text>
                     Contact : {obj.mob}
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default CardShow;
