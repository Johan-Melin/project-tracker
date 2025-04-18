import React from "react";
import { CardType } from "./Board";

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded p-3 shadow-lg border border-gray-300 dark:border-gray-700 mb-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-100">
      {card.content}
    </div>
  );
};

export default Card;
