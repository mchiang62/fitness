import React from "react";
import {Card} from "react-bootstrap";


const Cards = () => {

  function handleClick(card) {

    // const [display] = useState()

  
    console.log(card)
    
  }


  const cardInfo = [
    {title: "✔️", text: "Thought", editing: true},
    {title: "😢", text: "Terrible", editing: false},
    {title: "😞", text: "Bad", editing: false},
    {title: "😐", text: "Neutral", editing: false},
    {title: "😊", text: "Good", editing: false},
    {title: "😄", text: "Terrific", editing: false},
    {title: "❤️", text: "Gratitude", editing: false},

  ];

  const renderCard = (card, index) => {
    return (
      <div>
        <Card style={{ width: '18rem' }} key={index} onClick={() => handleClick(card)}>
          <Card.Body>
              <Card.Title style={{fontSize: '75pt'}}> {card.title}</Card.Title>
              <Card.Text style={{fontWeight: 'bold', fontSize: '20pt'}}> {card.text} </Card.Text>
          </Card.Body>
        </Card>
        {card.editing ? <input type="text" /> : null}
        {card.editing ? <input type="submit" value="Submit" /> : null}
      </div>
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
