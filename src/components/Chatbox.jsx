import React from "react";
import Chatimg from "../images/chatimg.png";
export default function Chatbox() {
  return (
    <div className='chatbox'>
      <div className='chat-content'>
        <h3>Feel Free to Chat with Us</h3>
        <br />
        <p>
          That being said, let's take a look at our <br />
          expert pick of the best live chat software <br />
          that you can use to grow your business.
        </p>
        <br />
        <p>
          Chat Now <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
        </p>
      </div>
      <div className='chat-img'>
        <img src={Chatimg} alt='' />
      </div>
    </div>
  );
}
