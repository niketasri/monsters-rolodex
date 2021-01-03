import React from "react";
import Card from "../card/card";
import "./card_list.css";

const cardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};

export default cardList;
