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
              delay={300}
              // reverse={!item}
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
            {/* <Spring
              reset={item}
              delay={100}
              // reverse={!item}
              // force={invert ? item : !item}
              from={{
                transform: "translateX(-50%)",
              }}
              to={{
                transform: "translateX(10%)",
              }}
            >
              {(props) => (
                <div
                  style={{
                    ...props,
                    background: "red",
                    color: "red",
                    top: 0,
                    zIndex: 2,
                    position: "absolute",
                  }}
                  className="body"
                >
                  aaaa
                </div>
              )}
            </Spring> */}
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
