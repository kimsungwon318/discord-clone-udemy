import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import {
  AddCircleOutline,
  CardGiftcardOutlined,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import GifIcon from "@mui/icons-material/Gif";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader channelName="test" />
      <div className="chatMessages">
        {/* {messages.map((message, index) => (
          <Message
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))} */}
        <Message />
        <Message />
      </div>
      <div className="chatInput">
        <AddCircleOutline fontSize="large" />
        <form>
          <input
            type="text"
            // placeholder={`#${channelName}へメッセージを送信`}
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //   setInputText(e.target.value)
            // }
            // value={inputText}
            // disabled={Boolean(!channelId)}
          />
          <button
            type="submit"
            className="chatInputButton"
            // disabled={Boolean(!channelId)}
            // onClick={(e: React.MouseEvent<HTMLElement>) => sendMessage(e)}
          >
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcardOutlined />
          <GifIcon />
          <EmojiEmotionsOutlined />
        </div>
      </div>
    </div>
  );
};

export default Chat;
