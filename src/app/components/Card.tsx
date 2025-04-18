import React from "react";
import { CardType } from "./Board";

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="card rounded p-3 shadow mb-2 cursor-pointer hover:opacity-90">
      {card.content}
    </div>
  );
};

export default Card;
