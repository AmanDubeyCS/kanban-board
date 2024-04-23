"use client";
import React, { useEffect, useState } from "react";
import Column from "./Column";
import BoardData from "../Data/board-data.json";
import { DragDropContext } from "react-beautiful-dnd";

const KanbanBoard = () => {
  const [boardData, setBoardData] = useState(BoardData);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  }, []);

  const onDragEnd = (re:any) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      {ready && (<DragDropContext onDragEnd={onDragEnd}>
        {boardData.map((board, index) => (
          <Column title={board.name} cards={board.items} bIndex={index} key={index}/>
        ))}
      </DragDropContext>)}
    </div>
  );
};

export default KanbanBoard;
