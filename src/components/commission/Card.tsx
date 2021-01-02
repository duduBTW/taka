import React, { useEffect } from "react";
import { useSpring } from "react-spring";
import { animated, config, Spring } from "react-spring/renderprops";
import { Button, Content, Image } from "../../styles/commissions";

export interface CardProps {
  title: string;
  item?: boolean;
  price: string;
  desc: string;
  imageLink: string;
  index?: string;
}

export default function Card({
  title,
  price,
  desc,
  item,
  imageLink,
  index,
}: CardProps) {
  useEffect(() => {}, []);
  return (
    <div
    // onClick={() => alert("a")}
    >
      <Content>
        <div className="slide">
          <div>
            <Spring
              reset={item}
              delay={200}
              // reverse={!item}
              immediate={false}
              // force={invert ? item : !item}
              from={{
                opacity: 0,
                transform: "translateX(-50%)",
              }}
              to={{
                opacity: 1,
                transform: "translateX(0%)",
              }}
            >
              {(props) => (
                <div
                  style={{
                    ...props,
                  }}
                  className="body"
                  id={index + "body"}
                >
                  <div className="price">{price}</div>
                  <div className="desc">{desc}</div>
                  <Button onClick={() => alert("v")} className="button">
                    Order now
                  </Button>
                </div>
              )}
            </Spring>
          </div>
          <Spring
            reset={item}
            delay={250}
            config={config.stiff}
            from={{
              opacity: 0,
              transform: "scale(0.3) translateX(0px)",
            }}
            to={{
              opacity: 1,
              transform: "scale(1) translateX(-20vw)",
            }}
          >
            {(props) => (
              <Image link={imageLink} style={props} className="image"></Image>
            )}
          </Spring>

          <div className="title">
            {title &&
              title
                .toUpperCase()
                .split("")
                .map((item) => (
                  <>
                    {item} <br />{" "}
                  </>
                ))}
          </div>
        </div>
      </Content>
    </div>
  );
}
