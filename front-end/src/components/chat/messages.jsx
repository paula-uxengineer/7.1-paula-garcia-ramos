import { useContext } from "react";
import IncomingMessages from "../incomingMessages";
import OutgoingMessage from "../outgoingMessages";
import SendMessages from "../sendMessages";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../auth/authContext";

const Messages = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  return (
    <div className="mesgs">
      <div className="msg_history">
        {chatState.mensajes.map((msg, index) =>
          msg.para === auth.uid ? (
            <IncomingMessages key={`${msg._id}-${index}`} msg={msg} />
          ) : (
            <OutgoingMessage key={`${msg._id}-${index}`} msg={msg} />
          )
        )}
      </div>
      <SendMessages />
    </div>
  );
};
export default Messages;
