import { useContext } from "react";
import ChatSelect from "../components/chat/chatSelect";
import { ChatContext } from "../context/ChatContext";
import InboxPeople from "../components/chat/inboxPeople";
import Messages from "../components/chat/messages";
import "../css/chat.css";

export const ChatPage = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />

        {chatState.chatActivo ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};
