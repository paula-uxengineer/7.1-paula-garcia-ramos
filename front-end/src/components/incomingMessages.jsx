import { horaMes } from "../helpers/horaMes";

const IncomingMessages = ({ msg }) => {
  horaMes(msg.createdAt);
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{msg.mensaje}</p>
          <span className="time_date"> {horaMes(msg.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default IncomingMessages;
