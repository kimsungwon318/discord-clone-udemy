import { ExpandMoreOutlined, Settings } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import "./Sidebar.scss";
import SidebarChannle from "./SidebarChannle";
import { auth } from "../firebase";
import { useAppSelector } from "../app/hooks";
import useCollection from "../hooks/useCollection";

const Sidebar = () => {
  const user = useAppSelector((state: any) => state.user);
  const { documents: channels } = useCollection("channels");

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        {/* discrodIcon */}
        <div className="serverIcon">
          <img src="./discordLogo.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>

      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreOutlined />
        </div>

        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreOutlined />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddChannel" />
          </div>

          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannle
                key={channel.id}
                channel={channel}
                id={channel.id}
              />
            ))}
          </div>

          <div className="sidebarSettings">
            <div className="sidebarAccount">
              <img
                src={user?.photo}
                alt="account"
                onClick={() => auth.signOut()}
              />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
