import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { cardProps, cardPropsContact } from "../../App";

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
    <div>
      <br />
      <br />
      <br />
      {loading ? (
        <h1>Carregabdo</h1>
      ) : (
        <div>
          <h1>Enviada com sucesso</h1>
        </div>
      )}
    </div>
  );
}
