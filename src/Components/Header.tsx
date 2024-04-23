'use client'
import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { IconCirclePlus } from "@tabler/icons-react";
import { IconArrowsSort } from "@tabler/icons-react";
import { IconColumns3 } from "@tabler/icons-react";
import { IconList } from "@tabler/icons-react";

const Button = ({ text }: any) => {
  return (
    <div className="flex gap-3 border-2 border-dashed shadow-sm outline-none rounded-lg px-2 py-2 text-base cursor-pointer items-center font-medium">
      <IconCirclePlus stroke={2} size={20} /> <button>{text}</button>
    </div>
  );
};

const Header = () => {
    const [active, setActive] = useState("Block")

  return (
    <div className="bg-white py-8">
      <h1 className="text-2xl font-bold mb-6">Vulnerabilities</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex gap-3 border-2 shadow-sm outline-none rounded-lg px-2 py-2 text-base cursor-pointer transition">
            <IconSearch size={23} stroke={2} />
            <input
              placeholder="Search by Issue Name"
              className="bg-transparent outline-none "
              type="text"
            />
          </div>
          <div className="flex gap-3 border-2 shadow-sm outline-none rounded-lg px-2 py-2 text-base cursor-pointer items-center font-medium">
            <IconArrowsSort stroke={2} size={20} />
            <button>Sort By</button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button text="Assigned To" />
          <Button text="Severity" />
          <Button text="Status" />
          <Button text="Pentest" />
          <Button text="Target" />
        </div>
        <div className="ml-auto grid grid-cols-2 rounded-md border">
          <div className={`flex items-center gap-1 font-medium justify-center px-2 cursor-pointer ${active === "Block" ? "bg-blue-100 ": ""}`} onClick={() => setActive("Block")}>
            <IconColumns3 stroke={2} size={18} color={`${active === "Block" ? "blue ": "gray"}`}/> <button >Board</button>
          </div>
          <div className={`flex items-center gap-1 font-medium justify-center px-2 cursor-pointer ${active === "List" ? "bg-blue-100 ": ""}`} onClick={() => setActive("List")}>
            <IconList stroke={2} size={18} color={`${active === "List" ? "blue ": "gray"}`}/> <button >List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
