import { Avatar } from "@mui/material";
import { Timestamp } from "firebase/firestore";

import "./Message.scss";

type Props = {
  message: string;
  timestamp: Timestamp;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const Message = (props: Props) => {
  const { message, timestamp, user } = props;
  // console.log(timestamp.seconds.toDate());

  return (
    <div className="message">
      <Avatar src={user?.photo} />
      <div className="messageInfo">
        <h4>
          {user?.displayName}
          <span className="messageTimestamp">
            2025-10-08 10:00:00
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
