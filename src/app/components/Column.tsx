import React from "react";
import { ColumnType } from "./Board";
import Card from "./Card";

interface ColumnProps {
  column: ColumnType;
}

const Column: React.FC<ColumnProps> = ({ column }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 min-w-[250px] shadow-md flex flex-col">
      <h3 className="font-semibold mb-4 text-lg">{column.title}</h3>
      <div className="flex flex-col gap-2 flex-1">
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Column;
