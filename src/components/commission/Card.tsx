import React, { useEffect } from "react";
import { config, Spring } from "react-spring/renderprops";
import {
  Button,
  ButtonOutlined,
  ButtonsContainer,
  CardSection,
  Content,
  Image,
  Input,
  TextArea,
} from "../../styles/commissions";
import SimpleImageSlider from "react-simple-image-slider";
import { CardItemProps } from "../../data";
import { IconContext } from "react-icons/lib";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { features } from "process";

export default function Card({
  content,
  finish,
}: {
  content: CardItemProps;
  finish: (quantity: number | string, description: string) => void;
}) {
  const { price, desc, images, features } = content;
  const [reset, setReset] = React.useState(true);
  const [step, setStep] = React.useState(0);

  const [quantity, setQuantity] = React.useState<string | number>(1);
  const [description, setDescription] = React.useState<string>("");

  const history = useHistory();

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) {
      setQuantity("");
      return false;
    }
    if (isNaN(Number(value))) return false;

    const v = Number(value);

    if (v < 0 || v > 1000) return false;
    setQuantity(v);
  };

  const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setDescription(value);
  };

  const getStep = () => {
    switch (step) {
      case 0:
        return (
          <CardSection>
            <div className="price">{price}</div>
            <div className="desc">{desc}</div>
            {features && (
              <ul>
                {features.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            )}
            <Button
              onClick={() => {
                setStep(1);
                setTimeout(() => setReset(false), 100);
              }}
              className="button"
            >
              Order now
            </Button>{" "}
          </CardSection>
        );
      case 1:
        return (
          <CardSection>
            <div style={{ fontSize: "2rem" }}>Type the quantity</div>
            <Input
              type="text"
              defaultValue="1"
              name="quantity"
              value={quantity}
              onChange={changeQuantity}
            />
            <ButtonsContainer>
              <ButtonOutlined
                style={{ flex: 1 }}
                onClick={() => {
                  setReset(true);
                  setStep(0);
                }}
                className="button"
              >
                back
              </ButtonOutlined>
              <Button
                style={{ flex: 3 }}
                onClick={() => {
                  if (quantity) {
                    setStep(2);
                    setReset(true);
                    setTimeout(() => setReset(false), 100);
                  }
                }}
                className="button"
              >
                Continue
              </Button>
            </ButtonsContainer>
          </CardSection>
        );
      case 2:
        return (
          <CardSection>
            <div style={{ fontSize: "2rem" }}>
              Type the description so I can know what you need
            </div>
            <TextArea
              onChange={changeDescription}
              rows={10}
              placeholder="ex: bla bla bla"
              value={description}
              id=""
            />
            <ButtonsContainer>
              <ButtonOutlined
                style={{ flex: 1 }}
                onClick={() => {
                  setStep(1);
                  setReset(true);
                  setTimeout(() => setReset(false), 100);
                }}
                className="button"
              >
                back
              </ButtonOutlined>
              <Button
                style={{ flex: 3 }}
                onClick={() => setStep(3)}
                className="button"
              >
                Continue
              </Button>
            </ButtonsContainer>
          </CardSection>
        );
      case 3:
        return (
          <CardSection>
            <div style={{ fontSize: "4rem", textAlign: "center" }}>
              Item added with success!
            </div>
            <ButtonsContainer>
              <ButtonOutlined
                style={{ flex: 1 }}
                onClick={() => history.push("/commissions")}
                className="button"
              >
                go back to commisions
              </ButtonOutlined>
              <Button
                style={{ flex: 1 }}
                onClick={() => finish(quantity, description)}
                className="button"
              >
                see my card
              </Button>
            </ButtonsContainer>
          </CardSection>
        );
      default:
        break;
    }
  };

  return (
    <div>
      <Content>
        <div className="slide">
          <Spring
            reset={reset}
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
              >
                <div
                  onClick={() => history.push("/commissions")}
                  className="back"
                >
                  <IconContext.Provider
                    value={{
                      color: "white",
                      size: "30px",
                    }}
                  >
                    <FiArrowLeft />
                  </IconContext.Provider>
                </div>
                {getStep()}
              </div>
            )}
          </Spring>
          <Spring
            reset={false}
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
              <Image style={props} className="image">
                <SimpleImageSlider
                  navStyle={2}
                  bgColor={"#f0f0f0"}
                  showNavs={true}
                  showBullets={true}
                  width={"100%"}
                  height={"100%"}
                  images={images}
                />
              </Image>
            )}
          </Spring>
        </div>
      </Content>
    </div>
  );
}
