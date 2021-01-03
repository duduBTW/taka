import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpringCarousel } from "react-spring-carousel-js";
import { Spring } from "react-spring/renderprops";
import list, { CardItemProps } from "../../data";

import {
  Card,
  CardContainer,
  HeaderStyle,
  ThumbItem,
} from "../../styles/commissions";
import { shuffle } from "../../views/portfolio";

export default function Header() {
  const [imageList, setImageList] = React.useState<CardItemProps[]>([
    {
      title: "a",
      price: "0",
      desc: "",
      images: [],
    },
  ]);

  useEffect(() => {
    let listTemp: CardItemProps[] = [
      {
        title: "a",
        price: "0",
        desc: "",
        images: [],
      },
    ];

    listTemp.pop();

    list.map((item) => item.content.map((card) => listTemp.push(card)));

    shuffle(listTemp);

    setImageList(listTemp);
  }, []);
  const {
    carouselFragment,
    thumbsFragment,
    getIsActiveItem,
    slideToItem,
  } = useSpringCarousel({
    withThumbs: true,
    initialActiveItem: 0,
    items: imageList.map((item, index) => {
      console.log(item.images[0]);
      return {
        id: index.toString(),
        renderItem: (
          <Card image={item.images[0]?.url}>
            <label>{item.title}</label>
          </Card>
        ),
        renderThumb: (
          <ThumbItem
            active={false}
            // active={getIsActiveItem(index.toString())}
            onClick={() => {
              const id = index.toString();
              if (!getIsActiveItem(id)) slideToItem(id);
            }}
          >
            {item.title.toUpperCase()}
          </ThumbItem>
        ),
      };
    }),
  });

  return (
    <Spring
      from={{ opacity: 0, transform: "translate3d(0px,-300px,0px)" }}
      to={{ opacity: 1, transform: "translate3d(0px,0px,0px)" }}
    >
      {(props: any) => (
        <HeaderStyle style={props}>
          <div className="main">
            <div>
              <h1>
                TAKA
                <br />
                COMISSIONS
              </h1>
              <br />
              <br />
              <h2>
                Change Your Life
                <br />
                Do One Now
              </h2>
            </div>
            <Link className="link" to="/commissions">
              Start
            </Link>
          </div>
          <CardContainer>
            <div className="item"> {carouselFragment}</div>
            <div className="thmb">{thumbsFragment}</div>
          </CardContainer>
        </HeaderStyle>
      )}
    </Spring>
  );
}
