import { useState } from "react";
import PasswordGenerator from "./passwordGenerator";

export default function App() {
  return (
    <div className="App h-screen bg-[linear-gradient(to_right,_#45a247,_#283c86)] flex justify-center items-start">
      <div className="flex flex-col justify-center mt-8 bg-[linear-gradient(to_right,_#5B86E5,_#36D1DC)] pt-4 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white px-10 ">Password Generator</h1>
        <PasswordGenerator />
      </div>
    </div>
  );
}
