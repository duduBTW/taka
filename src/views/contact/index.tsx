import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { cardProps, cardPropsContact } from "../../App";
import { Button } from "../../styles/commissions";
import { Input, Label } from "../../styles/contact";

export default function Contact({
  contactInfo,
  setContactInfo,
}: {
  contactInfo: cardPropsContact;
  setContactInfo: (value: cardPropsContact) => void;
}) {
  const [discord, setDiscord] = useState("");
  const [twitter, setTwitter] = useState("");
  const [email, setEmail] = useState("");

  const changeDiscord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscord(e.target.value);
  };
  const changeTwitter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwitter(e.target.value);
  };
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const history = useHistory();
  return (
    <div style={{ background: "black", padding: "30px 60px" }}>
      <h1
        style={{ color: "white", margin: 0, paddingBottom: 35, marginLeft: 45 }}
      >
        How can I contact you?{" "}
        <span
          style={{ fontSize: "1rem", fontWeight: "normal", marginLeft: 10 }}
        >
          ( Please inform at least one field )
        </span>
      </h1>
      <Label>Discord</Label>
      <Input
        defaultValue={contactInfo.discord}
        onChange={changeDiscord}
        value={discord}
        placeholder="teste#1222"
        type="text"
        name="discord"
      />

      <Label>Twitter</Label>
      <Input
        defaultValue={contactInfo.twitter}
        onChange={changeTwitter}
        value={twitter}
        placeholder="teste"
        type="text"
        name="twitter"
      />

      <Label>Email</Label>
      <Input
        defaultValue={contactInfo.email}
        onChange={changeEmail}
        value={email}
        placeholder="example@email.com"
        type="email"
        name="email"
      />
      <br />
      <br />
      <Button
        onClick={() => {
          setContactInfo({
            email,
            discord,
            twitter,
          });

          history.push("/finish");
        }}
        style={{ width: "85%" }}
      >
        Continue
      </Button>
    </div>
  );
}
