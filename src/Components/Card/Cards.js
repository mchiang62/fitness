import React from "react";
import {Card} from "react-bootstrap";

const Cards = () => {

  const cardInfo = [
    {image: "", title: "Terrible", text: "Terrible"},
    {image: "", title: "Bad", text: "Bad"},
    {image: "", title: "Neutral", text: "Neutral"},
    {image: "", title: "Good", text: "Good"},
    {image: "", title: "Terrific", text: "Terrific"},

  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
              <Card.Title> {card.title}</Card.Title>
              <Card.Text> {card.text} </Card.Text>
          </Card.Body>
        </Card>
    )

  }


    return (
       <div className="cardApp">
         {cardInfo.map(renderCard)}
       </div>

    );
  }


export default Cards;
