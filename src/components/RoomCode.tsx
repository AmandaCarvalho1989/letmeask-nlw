import React from "react";
import copy from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copy} alt="Copy Room Code" />
      </div>
      <span>Sala #{code}</span>
    </button>
  );
};

export default RoomCode;
