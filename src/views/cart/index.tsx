import React, { useEffect, useState } from "react";
import { cardProps } from "../../App";
import { CartItem, Total } from "../../styles/cart";

import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Trail } from "react-spring/renderprops";
import { useHistory } from "react-router-dom";

export default function Cart({
  orders,
  setOrders,
}: {
  orders: Array<cardProps>;
  setOrders: (value: cardProps[]) => void;
}) {
  const [total, setTotal] = useState(0);
  const history = useHistory();
  useEffect(() => {
    let totalTemp = 0;

    for (let i = 0; i < orders.length; i++) {
      const element = orders[i];
      totalTemp += Number(element.info?.price) * element.quantity;
    }

    setTotal(totalTemp);
  }, []);

  const removeItem = (index: number) => {
    let totalTemp =
      total - Number(orders[index].info?.price) * orders[index].quantity;
    const newOrder = orders.filter((item, i) => index !== i);

    setOrders(newOrder);
    setTotal(totalTemp);
  };
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {orders.length > 0 ? (
          <Trail
            delay={50}
            items={orders}
            keys={(item) => item.description}
            from={{ transform: "translate3d(-100px,0px,0)" }}
            to={{ transform: "translate3d(0,0px,0)" }}
          >
            {(item, index) => (props) => {
              if (item.info) {
                return (
                  <CartItem style={props} image={item.info.images[0].url}>
                    <div className="icon" onClick={() => removeItem(index)}>
                      <IconContext.Provider
                        value={{
                          color: "red",
                          size: "35px",
                          style: {
                            padding: 10,
                          },
                          className: "icon",
                        }}
                      >
                        <AiOutlineClose />
                      </IconContext.Provider>
                    </div>
                    <div className="price">
                      {Number(item.info.price) * item.quantity}
                    </div>
                    <div className="description">{item.description}</div>
                    <div className="type">{item.info.title}</div>
                  </CartItem>
                );
              }
              return null;
            }}
          </Trail>
        ) : (
          <h1>No items</h1>
        )}
      </div>
      <Total>
        <div className="title">TOTAL</div>
        <div className="price">{total}</div>
        <button
          onClick={() => {
            if (orders.length > 0) history.push("/contact");
          }}
        >
          Continue
        </button>
      </Total>
    </div>
  );
}
