import React, { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { Question } from "../components/Question";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import { useRoom } from "../hooks/useRoom";

import logo from "../assets/images/logo.svg";

import "../styles/room.scss";

type RoomParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  const [newQuestion, setNewQuestion] = useState("");

  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { user } = useAuth();
  const { questions, title } = useRoom(roomId);

  useEffect(() => {}, [roomId]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw new Error(" You must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logo} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>{questions.length} pergunta (s) </span>
          )}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default AdminRoom;
