import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { cardProps, cardPropsContact } from "../../App";
import { Button } from "../../styles/commissions";
import { ContactContainer, Form, Input, Label } from "../../styles/contact";

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
    <ContactContainer>
      <div>
        <h1>How can I contact you? </h1>
        <span>( Please inform at least one field )</span>
      </div>
      <Form>
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
      </Form>

      <Button
        style={{ width: 700 }}
        onClick={() => {
          setContactInfo({
            email,
            discord,
            twitter,
          });

          history.push("/finish");
        }}
      >
        Finish
      </Button>
    </ContactContainer>
  );
}
