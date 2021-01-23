import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { cardProps, cardPropsContact } from "../../App";
import { Button } from "../../styles/commissions";
import { ContactContainer } from "../../styles/contact";

export default function Finish({
  orders,
  contactInfo,
  setOrders,
}: {
  orders: Array<cardProps>;
  contactInfo: cardPropsContact;
  setOrders: (value: cardProps[]) => void;
}) {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    if (orders.length > 0) {
      axios
        .post("https://stark-springs-93239.herokuapp.com/", {
          orders,
          contactInfo,
        })
        .then((response) => {
          setLoading(false);
          setOrders([]);
        });
    } else {
      history.push("/commissions");
    }
  }, [contactInfo, history, setOrders]);
  return (
    <ContactContainer>
      {loading ? (
        <h1>Placing order...</h1>
      ) : (
        <>
          <h1>Order placed, we will enter in contact with you.</h1>

          <Button
            style={{ width: 700 }}
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Button>
        </>
      )}
    </ContactContainer>
  );
}
