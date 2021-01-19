import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { config, Spring } from "react-spring/renderprops";
import { cardProps } from "../../App";
import Card from "../../components/commission/Card";
import list from "../../data";
import { Title } from "../../styles/commissions";

export default function ComItem({
  orders,
  setOrders,
}: {
  orders: Array<cardProps>;
  setOrders: (value: cardProps[]) => void;
}) {
  const history = useHistory();
  const { cat, title } = useParams<{ cat: string; title: string }>();
  const item = list
    .find((item1) => item1.type === cat)
    ?.content.find((item2) => item2.title === title);

  const finish = (
    quantity: number | string,
    description: string,
    afther: string
  ) => {
    setOrders([
      ...orders,
      {
        description: description,
        quantity: Number(quantity),
        info: item,
      },
    ]);
    history.push(afther);
  };

  return (
    <>
      {item && <Card content={item} finish={finish} />}

      <Spring
        reset={false}
        config={config.default}
        from={{ transform: "translate3d(100px,0px,0px)" }}
        to={{ transform: "translate3d(0px,0px,0px)" }}
      >
        {(props: any) => (
          <Title style={props}>
            <Spring
              reset={true}
              config={config.gentle}
              from={{ transform: "translate3d(100px,0px,0px)" }}
              to={{ transform: "translate3d(0px,0px,0px)" }}
            >
              {(props: any) => (
                <div style={props}>
                  {item &&
                    item.title &&
                    item.title
                      .toUpperCase()
                      .split("")
                      .map((item) => (
                        <>
                          {item} <br />{" "}
                        </>
                      ))}
                </div>
              )}
            </Spring>
          </Title>
        )}
      </Spring>
    </>
  );
}
