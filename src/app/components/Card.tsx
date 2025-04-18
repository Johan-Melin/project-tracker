import React from "react";
import { CardType } from "./Board";

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="bg-white rounded p-3 shadow border mb-2 cursor-pointer hover:bg-gray-100 transition">
      {card.content}
    </div>
  );
};

export default Card;
