import React from "react";

import Header from "../../components/commission/Header";
import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
  //@ts-ignore
} from "react-twitch-embed";

export default function Home() {
  return (
    <>
      <Header />
      <h1>Twitch</h1>
      <br />
      <br />
      <TwitchEmbed
        channel="taaakaaaa"
        id="taaakaaaa"
        theme="dark"
        muted
        onVideoPause={() => console.log(":(")}
      />
      <br />
      <br />
    </>
  );
}
