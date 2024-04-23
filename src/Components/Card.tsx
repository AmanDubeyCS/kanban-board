"use client";
import React, { useState } from "react";
import { IconPointFilled } from "@tabler/icons-react";
import { IconStarFilled } from "@tabler/icons-react";
import { Draggable } from "react-beautiful-dnd";

interface card {
  id: number;
  index: number;
  title: string;
  severity: string;
  date: string;
  type: string;
  rating: string;
}

const Card = ({ id, index, date, title, severity, type, rating }: card) => {
  const [verify, setVerify] = useState(false);

  let iconColor = "white";
  let typeColor = "purple";

  console.log(type)

  switch (type) {
    case "Back-end":
      typeColor = "purple";
      break;
    case "Server":
      typeColor = "blue";
      break;
    case "Front-end":
      typeColor = "orange";
      break;
    case "Hardware":
      typeColor = "pink";
      break;
    default:
      typeColor = "blue";
      break;
  }

  switch (severity) {
    case "Criticle":
      iconColor = "bg-red-800";
      break;
    case "High":
      iconColor = "bg-red-500";
      break;
    case "Medium":
      iconColor = "bg-orange-400";
      break;
    case "Low":
      iconColor = "bg-yellow-500";
      break;
    default:
      iconColor = "white";
  }

  return (
    <Draggable key={id} index={index} draggableId={id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card border p-3 rounded-lg mb-3 cursor-pointer">
            <div className="flex justify-between">
              <div className="flex items-center gap-1 text-sm text-gray-400 font-medium">
                <p className="text-gray-500">#{id}</p>
                <IconPointFilled stroke={2} size={12} color="gray" />
                <p>{date}</p>
              </div>
              <div className="bg-black p-1 rounded-full">
                <IconStarFilled stroke={2} size={15} color="yellow" />
              </div>
            </div>
            <div className="py-2 text-base text-black font-medium">{title}</div>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div
                  className={`border rounded-2xl px-2 text-center flex text-sm  ${iconColor}  text-white items-center font-medium`}
                >
                  {severity}
                </div>
                <div
                  className={`rounded-2xl px-2 text-sm text-center flex border border-${typeColor}-700  bg-${typeColor}-100  text-${typeColor}-700  font-medium items-center`}
                >
                  {type}
                </div>
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="gray"
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-[gray]"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                    <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                    <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                    <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                    <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                    <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                    <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                  </svg>
                  <span className="font-semibold text-sm">{rating}</span>
                </div>
              </div>

              <div onClick={() => setVerify((prev) => !prev)}>
                <svg
                  className={`${verify ? "fill-[#5353e0]" : "fill-[gray]"}`}
                  height="25"
                  role="img"
                  viewBox="0 0 40 40"
                  width="25"
                >
                  <title>Verified</title>
                  <path
                    d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
