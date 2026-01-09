import StatBar from "./StatBar";

const CharatcterStats = () => {
  return (
    <div className="w-75 bg-amber-700 p-4 rounded-xl">
      <div className="space-y-2">
        <StatBar color="red" title="HP" />
        <StatBar color="blue" title="MP" />
        <StatBar color="orange" title="DMG" />
        <StatBar color="green" title="ARM" />
      </div>
    </div>
  );
};

export default CharatcterStats;
