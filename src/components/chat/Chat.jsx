import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const handleEmoji = (e) =>{
    setText((prev) => prev + e.emoji);
    setOpen(false)
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phone-icon" />
          <img src="./video.png" alt="video-icon" />
          <img src="./info.png" alt="info-icon" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="mic" />
        </div>
        <input 
        type="text" 
        value={text}
        onChange={(ev) => setText(ev.target.value)}
        placeholder="Type a message..." 
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            onClick={() => setOpen((prev) => !prev)}
            alt="emoji"
          />
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
