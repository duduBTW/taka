import React from "react";

import Header from "../../components/commission/Header";
import {
  TwitchEmbed,
  //@ts-ignore
} from "react-twitch-embed";
import { ContactContainer, TwitchContainer } from "../../styles/home";
import Twitter from "../../assets/Twitter.png";
import Instagram from "../../assets/Instagram.png";

export default function Home() {
  return (
    <>
      <Header />
      <TwitchContainer>
        <h1>Watch Live at Twitch</h1>
        <TwitchEmbed
          channel="taaakaaaa"
          id="taaakaaaa"
          theme="dark"
          muted
          onVideoPause={() => console.log(":(")}
        />
      </TwitchContainer>
      <ContactContainer>
        <h1>Contact</h1>
        <div className="social">
          <img
            onClick={() =>
              window.open("https://twitter.com/_taaakaaaa", "_blank")
            }
            src={Twitter}
            alt="Twitter"
          />
          <img src={Instagram} alt="Instagram" />
        </div>
      </ContactContainer>
    </>
  );
}
