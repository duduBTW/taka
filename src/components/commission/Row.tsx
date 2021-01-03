import React, { useState } from "react";
import { Button, Content, ThumbItem, Title } from "../../styles/commissions";

import { Spring } from "react-spring/renderprops";
import { useSpringCarousel } from "react-spring-carousel-js";

//@ts-ignore
import { Slide } from "react-full-page";
import Card, { CardProps } from "./Card";

const Row = ({
  items,
  indexV,
  column,
  setColumn,
}: {
  items: Array<CardProps>;
  indexV: number;
  column: any;
  setColumn: (value: any) => void;
}) => {
  // const [item, setItem] = useState(0);

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
            item={column && column[indexV] === index}
            index={index.toString()}
          />
        ),
        renderThumb: (
          <ThumbItem
            // active={false}
            active={column && column[indexV] === index}
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
    // setTitle(items[data.nextItem].title);
    setColumn({ ...column, [indexV]: data.nextItem });
  });

  return (
    <div>
      <div
        style={{
          height: "8vh",
          paddingLeft: "5vw",
          display: "flex",
          fontSize: "1.4rem",
          alignItems: "center",
          fontWeight: 600,
        }}
      >
        Live 2D
      </div>
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
};

export default React.memo(Row);
