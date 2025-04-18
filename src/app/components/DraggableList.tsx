import React, { useRef } from "react";

interface DraggableListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  onReorder: (from: number, to: number) => void;
  className?: string;
  type?: string;
}

export function reorderArray<T>(arr: T[], from: number, to: number): T[] {
  const updated = [...arr];
  const [removed] = updated.splice(from, 1);
  updated.splice(to, 0, removed);
  return updated;
}

export function DraggableList<T>({
  items,
  renderItem,
  onReorder,
  className = "",
  type = "item",
}: DraggableListProps<T>) {
  const dragItem = useRef<number | null>(null);

  return (
    <div className={className}>
      {items.map((item, idx) => (
        <div
          key={(item as any).id ?? idx}
          draggable
          onDragStart={() => (dragItem.current = idx)}
          onDragOver={e => {
            e.preventDefault();
            if (
              dragItem.current !== null &&
              dragItem.current !== idx
            ) {
              onReorder(dragItem.current, idx);
              dragItem.current = idx;
            }
          }}
          onDragEnd={() => (dragItem.current = null)}
          style={{ cursor: "grab" }}
        >
          {renderItem(item, idx)}
        </div>
      ))}
    </div>
  );
}
