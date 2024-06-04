import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { scrollToBottom } from "../helpers/scrollToBottom";

export const SidebarChatItem = ({ usuario }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const { chatActivo } = chatState;

  const onClick = async () => {
    dispatch({
      type: types.activarChat,
      payload: usuario.uid,
    });

    try {
      const resp = await fetchConToken(`mensajes/${usuario.uid}`);
      if (resp && resp.mensajes) {
        dispatch({
          type: types.cargarMensajes,
          payload: resp.mensajes,
        });
        scrollToBottom("mensajes");
      } else {
        console.error("Invalid response structure:", resp);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  return (
    <div
      className={`chat_list ${usuario.uid === chatActivo && "active_chat"}`}
      onClick={onClick}
    >
      {/* active_chat */}
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/735/770/original/beautiful-woman-avatar-profile-icon-vector.jpg"
            alt="avatar"
          />
        </div>
        <div className="chat_ib">
          <h5>{usuario.nombre}</h5>
          {usuario.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
