import React from "react";
import { ColumnType } from "./Board";
import Card from "./Card";

interface ColumnProps {
  column: ColumnType;
}

import { DraggableList } from "./DraggableList";

const Column: React.FC<ColumnProps> = ({ column }) => {
  const [cards, setCards] = React.useState(column.cards);

  // Keep cards in sync with column prop
  React.useEffect(() => {
    setCards(column.cards);
  }, [column.cards]);

  const reorderCards = (from: number, to: number) => {
    setCards(prev => {
      const updated = [...prev];
      const [removed] = updated.splice(from, 1);
      updated.splice(to, 0, removed);
      return updated;
    });
  };

  return (
    <div className="column border rounded-lg p-4 min-w-[250px] shadow-md flex flex-col">
      <h3 className="font-semibold mb-4 text-lg">{column.title}</h3>
      <DraggableList
        items={cards}
        className="flex flex-col gap-2 flex-1"
        onReorder={reorderCards}
        renderItem={(card, idx) => <Card key={card.id} card={card} />}
      />
    </div>
  );
};

export default Column;
