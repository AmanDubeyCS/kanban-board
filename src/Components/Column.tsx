"use client";
import React, { useState } from "react";
import Card from "./Card";
import { IconDots } from "@tabler/icons-react";
import { IconPlus } from "@tabler/icons-react";
import { IconPointFilled } from "@tabler/icons-react";
import { Droppable } from "react-beautiful-dnd";
import TaskForm from "./TaskForm";

interface coldata {
  title: string;
  cards: any[];
  bIndex: number;
}

const Column = ({ title, cards, bIndex }: coldata) => {
  const [showForm, setShowForm] = useState(false);
  const [boardData, setBoardData] = useState(cards);
  const [selectedBoard, setSelectedBoard] = useState(0);

  let iconColor = "gray";

  switch (title) {
    case "Draft":
      iconColor = "gray";
      break;
    case "Unsolved":
      iconColor = "blue";
      break;
    case "Under Review":
      iconColor = "orange";
      break;
    case "Solved":
      iconColor = "green";
      break;
    default:
      iconColor = "gray";
  }


  return (
    <div className="">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-1">
          <IconPointFilled stroke={2} size={15} color={iconColor} />
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-500"> {cards.length}</p>
        </div>

        <div className="flex gap-2">
          <div className="cursor-pointer">
            <IconDots stroke={2} color="gray" />
          </div>
          <button
            disabled={showForm}
            className="cursor-pointer"
            onClick={() => {
              setSelectedBoard(bIndex);
              setShowForm(true);
            }}
          >
            <IconPlus stroke={2} color="gray" />
          </button>
        </div>
      </div>
      {showForm && selectedBoard === bIndex && <TaskForm />}
      <Droppable droppableId={bIndex.toString()}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {boardData.map((card, index) => (
              <div key={index}>
                <Card
                  index={index}
                  id={card.id}
                  date={"06 Jan, 4:35 PM"}
                  title={card.title}
                  severity={card.severity}
                  type={card.type}
                  rating={card.rating}
                />
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
