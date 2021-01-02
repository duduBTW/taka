import React, { useState } from "react";
import { Button, Content, ThumbItem } from "../../styles/commissions";

import { Spring } from "react-spring/renderprops";
import { useSpringCarousel } from "react-spring-carousel-js";

//@ts-ignore
import { Slide } from "react-full-page";
import Card, { CardProps } from "./Card";

export default function Row({ items }: { items: Array<CardProps> }) {
  const [item, setItem] = useState(0);

  const {
    carouselFragment,
    useListenToCustomEvent,
    slideToItem,
    thumbsFragment,
    getIsActiveItem,
  } = useSpringCarousel({
    withThumbs: true,
    initialActiveItem: 0,
    items: items.map((itemDet, index) => {
      return {
        id: index.toString(),
        renderItem: (
          <Card
            imageLink={itemDet.imageLink}
            price={itemDet.price}
            desc={itemDet.desc}
            title={itemDet.title}
            item={item === index}
            index={index.toString()}
            // invert={!(index % 2 === 0)}
          />
        ),
        renderThumb: (
          <ThumbItem
            active={item === index}
            onClick={() => {
              const id = index.toString();
              if (!getIsActiveItem(id)) slideToItem(id);
            }}
          >
            {itemDet.title.toUpperCase()}
          </ThumbItem>
        ),
      };
    }),
  });

  useListenToCustomEvent("onSlideStartChange", (data: any) => {
    setItem(data.nextItem);
  });

  return (
    <div>
      <div
        style={{
          height: "5vh",
          paddingLeft: "5vw",
          display: "flex",
          alignItems: "center",
        }}
      ></div>
      {carouselFragment}
      <div
        style={{
          height: "12vh",
          paddingLeft: "5vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        {thumbsFragment}{" "}
      </div>
    </div>
  );
}
