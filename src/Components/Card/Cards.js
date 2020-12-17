import React from "react";
import {Card} from "react-bootstrap";

const Cards = (props) => {

  const cardInfo = "test"
  //data binding 
    return (
       <div className="cardApp">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title> {cardInfo} </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
       </div>

    );
  }


export default Cards;
