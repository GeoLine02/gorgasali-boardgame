import classNames from "classnames";
import React from "react";

interface StatStatBarProps {
  color: "red" | "blue" | "green" | "orange";
  title: "HP" | "MP" | "ARM" | "DMG";
}

const StatBar = ({ color, title }: StatStatBarProps) => {
  const barColors = classNames({
    "bg-blue-400": color === "blue",
    "bg-red-400": color === "red",
    "bg-green-400": color === "green",
    "bg-orange-400": color === "orange",
  });

  return (
    <div className="flex flex-col">
      <h1 className="font-medium text-lg">{title}</h1>
      <div
        className={`${barColors} w-full h-3 rounded-l-full rounded-r-full`}
      ></div>
    </div>
  );
};

export default StatBar;
