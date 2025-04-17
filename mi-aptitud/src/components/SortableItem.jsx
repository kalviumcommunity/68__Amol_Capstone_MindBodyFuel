import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "15px",
    margin: "8px 0",
    backgroundColor: "#1e1e1e",
    color: "#e0e0e0",
    borderRadius: "6px",
    cursor: "grab",
    userSelect: "none",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {content}
    </div>
  );
};

export default SortableItem;
