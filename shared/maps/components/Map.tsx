import MapCell from "./MapCell";
import Image from "next/image";
import MapImage from "@/public/map-two.png";

const Map = () => {
  const mapGrid = Array.from({ length: 784 }, (_, i) => i + 1);
  return (
    <div className="relative w-270 aspect-square">
      <div className="absolute left-0 top-0">
        <div className="relative">
          <Image src={MapImage} alt="" />
          <div className="absolute top-24 left-24 flex max-w-4xl flex-wrap aspect-square">
            {mapGrid.map((cell) => (
              <MapCell key={cell} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
