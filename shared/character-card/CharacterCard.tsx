import Image from "next/image";
import CharacterCardImage from "@/public/Viking-themed_Board_Game_Card_Template_2.png";

const CharacterCard = () => {
  return (
    <div>
      <Image className="max-w-50 rounded-xl" src={CharacterCardImage} alt="" />
    </div>
  );
};

export default CharacterCard;
