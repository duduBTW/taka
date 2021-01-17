import React from "react";
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router-dom";
import { Transition } from "react-spring/renderprops";
import { CardItemProps } from "../../data";
import { Button, CardItem, ImageCard } from "../../styles/commissions";

export default function SectionCard({
  item,
  cat,
}: {
  item: CardItemProps;
  cat: string;
}) {
  // let items = ["teste 1", "teste 2", "teste 3"];
  const history = useHistory();
  return (
    <CardItem>
      {/* <ImageCard image={item.images[0].url} className="img hide" /> */}
      <div className="info left">
        <div className="title">{item.title}</div>
        <div className="price">{item.price}</div>

        <Button
          onClick={() => history.push(`/commissions/${cat}/${item.title}`)}
          style={{ width: "80%" }}
        >
          SEE MORE
        </Button>
      </div>
      <ImageCard image={item.images[1].url} className="img" />
      <div className="info right">
        {item.features && (
          <ul>
            <Transition
              trail={80}
              items={item.features}
              keys={(item) => item}
              unique={false}
              from={{ transform: "translate3d(-100px,0px,0)", opacity: 0 }}
              enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
              leave={{ transform: "translate3d(-100px,0px,0)", opacity: 0 }}
            >
              {(item) => (props) => <li style={props}>{item}</li>}
            </Transition>
          </ul>
        )}
      </div>
    </CardItem>
  );
}
