"use client";
import React, { useState } from "react";
import Column from "./Column";
import { DraggableList, reorderArray } from "./DraggableList";

export type CardType = {
  id: string;
  content: string;
};

export type ColumnType = {
  id: string;
  title: string;
  cards: CardType[];
};

const initialBoard: ColumnType[] = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      { id: "1", content: "Set up project" },
      { id: "2", content: "Design database schema" },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    cards: [
      { id: "3", content: "Implement authentication" },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [
      { id: "4", content: "Initial commit" },
    ],
  },
];

const Board: React.FC = () => {
  const [columns, setColumns] = useState<ColumnType[]>(initialBoard);

  const reorderColumns = (from: number, to: number) => {
    setColumns(prev => reorderArray(prev, from, to));
  };

  return (
    <DraggableList
      items={columns}
      className="flex gap-6 overflow-x-auto w-full p-4 items-start"
      onReorder={reorderColumns}
      renderItem={(column, idx) => <Column key={column.id} column={column} />}
    />
  );
};

export default Board;
