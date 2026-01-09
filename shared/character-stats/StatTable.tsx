"use client";

import { useState } from "react";
import CharacterCard from "../character-card/CharacterCard";
import { ChevronUp, ChevronDown } from "lucide-react";
import classNames from "classnames";
import CharatcterStats from "./CharatcterStats";

const StatTable = () => {
  const [toggleStats, setToggleStats] = useState<boolean>(true);

  const onToggleStats = () => {
    setToggleStats(!toggleStats);
  };

  const characterStstsToggleStyles = classNames(
    "transition-all duration-400 fixed",
    {
      "bottom-0": toggleStats,
      "-bottom-80": !toggleStats,
    }
  );

  return (
    <div
      className={`${characterStstsToggleStyles} w-full left-0 bg-orange-900 h-80 px-11 py-5`}
    >
      <div className="w-full flex items-center justify-center">
        <button
          onClick={onToggleStats}
          className="absolute w-36 h-12 bg-amber-700 flex items-center rounded-xl rounded-b-none -top-12 justify-center cursor-pointer"
        >
          {toggleStats ? (
            <ChevronDown color="white" size={60} />
          ) : (
            <ChevronUp color="white" size={60} />
          )}
        </button>
      </div>

      <div className="flex gap-6">
        <CharacterCard />
        <CharatcterStats />
      </div>
    </div>
  );
};

export default StatTable;
