import React from "react";
import {Card} from "react-bootstrap";

const Cards = () => {


  const cardInfo = [
    {title: "✔️", text: "Thought"},
    {title: "😢", text: "Terrible"},
    {title: "😞", text: "Bad"},
    {title: "😐", text: "Neutral"},
    {title: "😊", text: "Good"},
    {title: "😄", text: "Terrific"},
    {title: "❤️", text: "Gratitude"},

  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index}>
          <Card.Body>
              <Card.Title style={{fontSize: '75pt'}}> {card.title}</Card.Title>
              <Card.Text style={{fontWeight: 'bold', fontSize: '20pt'}}> {card.text} </Card.Text>
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

//how to add your own images
//card/index parameters - need to review for interview
